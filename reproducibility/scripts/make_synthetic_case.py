#!/usr/bin/env python3
"""
make_synthetic_case.py -- build ONE synthetic HYDROPS case (PPI / PEI / MRC)
from the open IEVNet sample inner-ear volumes (Ahmadi et al. 2022, Apache-2.0).

Why: a demo / verification case that contains NO patient data from our
institution. The inner-ear anatomy (MR cisternography-like SPACE crops of one
subject, left and right ear) is real and open; everything else is synthetic:

  * the endolymphatic space is drawn in by construction (known ground truth),
  * PPI / PEI contrasts are synthesised from tissue classes,
  * the background outside the two crops is a schematic head.

Design (per ear, at the crop resolution of 0.2 mm):
  fluid           = Otsu threshold on the SPACE crop
  cochlea C       = fluid connected to the cochlea seed, capped by a 6.5 mm
                    sphere, nearest-seed split against the vestibule, IAC
                    fluid removed by a medial cut (as in osirix_roi_eh.py)
  vestibule V     = same with a 5.5 mm sphere ("vestibule proper")
  labyrinth_all   = fluid reachable from the seeds inside larger caps
                    (perilymph incl. semicircular canals); other fluid = CSF
  endolymph in V  = ellipsoid aligned with the PCA axes of V, scaled until it
                    occupies the target fraction of V
  endolymph in C  = outer-wall band of the cochlear duct: voxels whose radial
                    distance from the modiolar axis exceeds the local
                    centre-line radius the most (top-q fraction)
                    [--cochlea-model outer_wall, default, as in v1/v2]
                    or, with --cochlea-model scala_vestibuli (added 2026-10-07),
                    the apical-side (scala vestibuli side) part of each turn's
                    cross-section, slightly biased to the outer wall: this
                    mimics Reissner's membrane bulging into the scala vestibuli,
                    so a hydropic cochlea shows a solid black half-turn on
                    HYDROPS images instead of a thin outer rim.

Target grid: 0.5 x 0.5 x 1.0 mm, 384 x 324 x 60 (clinical HYDROPS geometry).
Partial volume is produced by block-averaging a 0.25 mm working grid.

Outputs (under --out):
  nifti/  SYN-001_{PPI,PEI,MRC,HYDROPS,HYDROPS_Mi2}.nii.gz  (RAS, float32)
  gt/     labels (1 R cochlea, 2 R vestibule, 3 L cochlea, 4 L vestibule),
          endolymph mask, fraction maps, ground_truth.csv / .json
  dicom/  PPI/ PEI/ MRC/ single-frame 16-bit MONOCHROME2 series (+ study zip)
  qc/     montage PNGs
  osirix_landmarks.csv  (seeds in DICOM LPS mm, for osirix_roi_eh.py)

Usage:
  python tools/make_synthetic_case.py \
      --src data/synthetic/source_ievnet --out data/synthetic/SYN-001
"""
import argparse
import csv
import datetime as dt
import json
import os
import shutil
import zipfile

import numpy as np
import nibabel as nib
import pydicom
from pydicom.dataset import Dataset, FileMetaDataset
from pydicom.uid import ExplicitVRLittleEndian, generate_uid
from scipy import ndimage as ndi
from skimage.filters import threshold_otsu

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

CASE = "SYN-001"
CROP_SP = 0.2                      # mm, IEVNet crops
TGT_SP = np.array([0.5, 0.5, 1.0])  # mm, target (x, y, z)
TGT_N = np.array([384, 324, 60])    # voxels (x, y, z)
TGT_EDGE0 = np.array([-96.0, -81.0, -45.0])   # RAS mm, outer edge of voxel 0
HR_F = np.array([2, 2, 4])          # working grid 0.25 mm = target / HR_F

# seeds in crop index (0.2 mm voxels), chosen on the sample images
SEEDS = {
    "L": {"cochlea": (108, 90, 46), "vestibule": (92, 68, 48), "medial": +1},
    "R": {"cochlea": (92, 90, 46), "vestibule": (112, 66, 48), "medial": -1},
}
# designed endolymph fractions: left = hydrops, right = normal
TARGET_FRAC = {"L": {"cochlea": 0.35, "vestibule": 0.55},
               "R": {"cochlea": 0.15, "vestibule": 0.30}}
LABEL_ID = {("R", "cochlea"): 1, ("R", "vestibule"): 2,
            ("L", "cochlea"): 3, ("L", "vestibule"): 4}

# synthetic intensities (arbitrary units): class -> (MRC, PPI, PEI)
# MRC keeps the real crop intensity; PPI/PEI are scaled by the local fluid
# shading so partial-volume edges look natural.
I_PERI = (None, 650.0, 60.0)
I_ENDO = (None, 25.0, 520.0)
I_CSF = (None, 40.0, 130.0)
I_SOFT = (160.0, 150.0, 140.0)
I_BONE = (10.0, 10.0, 10.0)
I_AIR = (3.0, 3.0, 3.0)
NOISE = {"MRC": 15.0, "PPI": 12.0, "PEI": 12.0}


# --------------------------------------------------------------------------- #
def snap(a, ijk, win=3):
    sl = tuple(slice(max(0, c - win), min(a.shape[d], c + win + 1))
               for d, c in enumerate(ijk))
    sub = a[sl]
    off = np.unravel_index(np.argmax(sub), sub.shape)
    return tuple(int(sl[d].start + off[d]) for d in range(3))


def sphere_mask(shape, center, radius_mm, sp=CROP_SP):
    g = np.indices(shape).astype(np.float32)
    d2 = sum(((g[d] - center[d]) * sp) ** 2 for d in range(3))
    return d2 <= radius_mm ** 2


def connected_to(mask, seed):
    lab, _ = ndi.label(mask)
    v = lab[seed]
    return lab == v if v > 0 else np.zeros_like(mask)


def pca_axes(coords_mm):
    c = coords_mm - coords_mm.mean(0)
    w, v = np.linalg.eigh(np.cov(c.T))
    order = np.argsort(w)[::-1]
    return w[order], v[:, order]        # eigenvalues desc, columns = axes


def segment_ear(a, side):
    """Return dict of boolean masks at crop resolution."""
    s = SEEDS[side]
    t = threshold_otsu(a)
    fluid = a > t
    bone = a < 0.35 * t
    cs = snap(a, s["cochlea"])
    vs = snap(a, s["vestibule"])
    g = np.indices(a.shape).astype(np.float32)
    # medial cut (IAC): drop fluid further medial than seed + margin
    med = s["medial"]
    x_mm = g[0] * CROP_SP
    cut_c = (x_mm - cs[0] * CROP_SP) * med > 4.0
    cut_v = (x_mm - vs[0] * CROP_SP) * med > 3.5
    dc = np.sqrt(sum(((g[d] - cs[d]) * CROP_SP) ** 2 for d in range(3)))
    dv = np.sqrt(sum(((g[d] - vs[d]) * CROP_SP) ** 2 for d in range(3)))
    coch = connected_to(fluid & (dc <= 6.5) & ~cut_c, cs) & (dc <= dv)
    vest = connected_to(fluid & (dv <= 5.5) & ~cut_v, vs) & (dv < dc)
    lab_all = connected_to(fluid & ((dv <= 11.0) | (dc <= 7.0)) & ~cut_c & ~cut_v, vs)
    lab_all |= connected_to(fluid & ((dv <= 11.0) | (dc <= 7.0)) & ~cut_c & ~cut_v, cs)
    lab_all |= coch | vest
    csf = fluid & ~lab_all
    return {"fluid": fluid, "bone": bone, "cochlea": coch, "vestibule": vest,
            "labyrinth": lab_all, "csf": csf, "seed_c": cs, "seed_v": vs, "otsu": t}


def endolymph_vestibule(V, target):
    idx = np.argwhere(V)
    mm = idx * CROP_SP
    w, axes = pca_axes(mm)
    cen = mm.mean(0)
    rel = (mm - cen) @ axes                  # coords along PCA axes
    radii0 = np.sqrt(w) * 1.0 + 1e-6
    lo, hi = 0.2, 6.0
    for _ in range(40):
        sc = 0.5 * (lo + hi)
        inside = (np.sum((rel / (radii0 * sc)) ** 2, axis=1) <= 1.0)
        f = inside.mean()
        if f < target:
            lo = sc
        else:
            hi = sc
    E = np.zeros_like(V)
    E[tuple(idx[inside].T)] = True
    E = ndi.binary_closing(E, iterations=1) & V
    return E


COCHLEA_MODEL = "outer_wall"      # or "scala_vestibuli" (set from --cochlea-model)


def endolymph_cochlea(C, target):
    """Cochlear endolymph band (model chosen by COCHLEA_MODEL); the quantile is
    adjusted so that the fraction AFTER morphological cleanup is within
    ~1.5 points of the target."""
    q = target
    best = None
    band = _cochlea_band_sv if COCHLEA_MODEL == "scala_vestibuli" else _cochlea_band
    for _ in range(12):
        E = band(C, q)
        f = E.sum() / max(1, C.sum())
        if best is None or abs(f - target) < abs(best[1] - target):
            best = (E, f)
        if abs(f - target) <= 0.015:
            break
        q = float(np.clip(q * (target / max(f, 1e-3)) ** 0.7, 0.01, 0.9))
    return best[0]


def _cochlea_band(C, q):
    idx = np.argwhere(C)
    mm = idx * CROP_SP
    w, axes = pca_axes(mm)
    n = axes[:, 2]                     # smallest variance = modiolar axis
    u, v = axes[:, 0], axes[:, 1]
    rel = mm - mm.mean(0)
    h = rel @ n
    pu, pv = rel @ u, rel @ v
    r = np.sqrt(pu ** 2 + pv ** 2)
    th = np.arctan2(pv, pu)
    tb = np.floor((th + np.pi) / (2 * np.pi) * 24).astype(int).clip(0, 23)
    hb = np.floor((h - h.min()) / 0.5).astype(int)
    key = tb * 1000 + hb
    rc = np.full_like(r, r.mean())
    for k in np.unique(key):
        m = key == k
        if m.sum() >= 20:
            rc[m] = r[m].mean()
    score = r - rc
    thr = np.quantile(score, 1.0 - q)
    E = np.zeros_like(C)
    E[tuple(idx[score >= thr].T)] = True
    E = ndi.binary_opening(E, iterations=1)
    E = ndi.binary_closing(E, iterations=1) & C
    lab, nlab = ndi.label(E)
    if nlab:
        sizes = ndi.sum(E, lab, range(1, nlab + 1))
        keep = np.isin(lab, [i + 1 for i, s_ in enumerate(sizes) if s_ >= 60])
        E &= keep
    return E


def _cochlea_band_sv(C, q, lam=0.35):
    """Scala-vestibuli-side band: rank cochlear fluid voxels by their height
    above the local turn centre along the modiolar axis (toward the apex),
    plus a small outer-wall term, and keep the top-q fraction."""
    idx = np.argwhere(C)
    mm = idx * CROP_SP
    w, axes = pca_axes(mm)
    n = axes[:, 2]                     # smallest variance = modiolar axis
    u, v = axes[:, 0], axes[:, 1]
    rel = mm - mm.mean(0)
    h = rel @ n
    pu, pv = rel @ u, rel @ v
    r = np.sqrt(pu ** 2 + pv ** 2)
    th = np.arctan2(pv, pu)
    # orient the axis so that +h points toward the apex (apical turns have the smaller radius)
    lo, hi = np.quantile(h, [0.15, 0.85])
    s_ap = 1.0 if r[h >= hi].mean() < r[h <= lo].mean() else -1.0
    hs = h * s_ap
    # local turn-centre height per (azimuth bin, radius bin), splitting stacked turns at gaps along hs
    tb = np.floor((th + np.pi) / (2 * np.pi) * 24).astype(int).clip(0, 23)
    rb = np.floor(r / 0.4).astype(int)
    key = tb * 1000 + rb
    hc = hs.copy()
    for k in np.unique(key):
        m = np.where(key == k)[0]
        if m.size < 8:
            continue
        order = m[np.argsort(hs[m])]
        hv = hs[order]
        cid = np.concatenate([[0], np.cumsum(np.diff(hv) > 0.45)])
        for c in np.unique(cid):
            sel = order[cid == c]
            hc[sel] = hs[sel].mean()
    # local centre-line radius per (azimuth bin, height bin) as in the outer-wall model
    hb = np.floor((h - h.min()) / 0.5).astype(int)
    key2 = tb * 1000 + hb
    rc = np.full_like(r, r.mean())
    for k in np.unique(key2):
        m = key2 == k
        if m.sum() >= 20:
            rc[m] = r[m].mean()
    score = (hs - hc) + lam * (r - rc)
    thr = np.quantile(score, 1.0 - q)
    E = np.zeros_like(C)
    E[tuple(idx[score >= thr].T)] = True
    E = ndi.binary_opening(E, iterations=1)
    E = ndi.binary_closing(E, iterations=1) & C
    lab, nlab = ndi.label(E)
    if nlab:
        sizes = ndi.sum(E, lab, range(1, nlab + 1))
        keep = np.isin(lab, [i + 1 for i, s_ in enumerate(sizes) if s_ >= 60])
        E &= keep
    return E


def synth_classes(a, seg, E):
    """Per-voxel (MRC, PPI, PEI) at crop resolution."""
    peri = seg["labyrinth"] & ~E
    csf = seg["csf"]
    bone = seg["bone"]
    fluid_any = seg["fluid"]
    soft = ~fluid_any & ~bone
    a_ref = np.percentile(a[seg["labyrinth"]], 90) if seg["labyrinth"].any() else 500.0
    shade = np.clip(a / a_ref, 0.45, 1.15).astype(np.float32)
    mrc = a.astype(np.float32).copy()
    ppi = np.zeros_like(mrc)
    pei = np.zeros_like(mrc)
    for mask, (_, ip, ie), use_shade in ((peri, I_PERI, True), (E, I_ENDO, True),
                                          (csf, I_CSF, True)):
        ppi[mask] = ip * (shade[mask] if use_shade else 1.0)
        pei[mask] = ie * (shade[mask] if use_shade else 1.0)
    ppi[soft] = I_SOFT[1] * np.clip(a[soft] / I_SOFT[0], 0.6, 1.3)
    pei[soft] = I_SOFT[2] * np.clip(a[soft] / I_SOFT[0], 0.6, 1.3)
    ppi[bone] = I_BONE[1]
    pei[bone] = I_BONE[2]
    return mrc, ppi, pei


# --------------------------------------------------------------------------- #
def target_centers():
    return [TGT_EDGE0[d] + (np.arange(TGT_N[d]) + 0.5) * TGT_SP[d] for d in range(3)]


def paste_crop(vols_crop, affine, tgt_vols, tgt_wsum, labels_crop, tgt_labels):
    """Resample crop content onto the target grid via a 0.25 mm working grid
    with block averaging; accumulate into tgt_* with a feathered weight."""
    origin = affine[:3, 3]
    ext_lo = origin - 0.5 * CROP_SP
    ext_hi = origin + (np.array(vols_crop[0].shape) - 0.5) * CROP_SP
    i0 = np.floor((ext_lo - TGT_EDGE0) / TGT_SP).astype(int)
    i1 = np.ceil((ext_hi - TGT_EDGE0) / TGT_SP).astype(int)
    i0 = np.maximum(i0, 0)
    i1 = np.minimum(i1, TGT_N)
    nt = i1 - i0
    nh = nt * HR_F
    hr_sp = TGT_SP / HR_F
    coords = []
    for d in range(3):
        c = TGT_EDGE0[d] + i0[d] * TGT_SP[d] + (np.arange(nh[d]) + 0.5) * hr_sp[d]
        coords.append((c - origin[d]) / CROP_SP)      # crop index coords
    gx, gy, gz = np.meshgrid(*coords, indexing="ij")
    pts = np.stack([gx.ravel(), gy.ravel(), gz.ravel()])
    inside = np.all((pts >= 0) & (pts <= np.array(vols_crop[0].shape)[:, None] - 1), axis=0)
    # feather weight: distance to crop border in mm (1.5 mm ramp)
    dmin = np.min(np.minimum(pts, np.array(vols_crop[0].shape)[:, None] - 1 - pts), axis=0) * CROP_SP
    w = np.clip(dmin / 1.5, 0, 1) * inside

    def block(vals):
        v = vals.reshape(nh[0] // HR_F[0], HR_F[0], nh[1] // HR_F[1], HR_F[1],
                         nh[2] // HR_F[2], HR_F[2])
        return v.mean(axis=(1, 3, 5))

    wb = block(w.reshape(nh))
    sl = tuple(slice(i0[d], i1[d]) for d in range(3))
    for k, vol in enumerate(vols_crop):
        s = ndi.map_coordinates(vol, pts, order=1, mode="nearest") * w
        tgt_vols[k][sl] += block(s.reshape(nh))
    tgt_wsum[sl] += wb
    for name, lab in labels_crop.items():
        s = ndi.map_coordinates(lab.astype(np.float32), pts, order=0, mode="constant", cval=0) * inside
        tgt_labels[name][sl] += block(s.reshape(nh))


def background(cx, cy, cz):
    """Schematic head on the target grid: (MRC, PPI, PEI)."""
    X, Y, Z = np.meshgrid(cx, cy, cz, indexing="ij")
    head = ((X / 82.0) ** 2 + ((Y + 8) / 70.0) ** 2 + ((Z + 15) / 70.0) ** 2) <= 1.0
    # midline CSF cistern (rounded) with a soft-tissue "brainstem" inside -> CSF ring
    cistern = ((X / 16.0) ** 2 + ((Y + 12) / 22.0) ** 2 + ((Z + 15) / 32.0) ** 2) <= 1.0
    stem = ((X / 9.0) ** 2 + ((Y + 12) / 12.0) ** 2 + ((Z + 15) / 30.0) ** 2) <= 1.0
    bone = np.zeros_like(head)
    for sx in (-1, 1):
        bone |= (((X - sx * 42) / 24.0) ** 2 + ((Y + 9) / 20.0) ** 2 + ((Z + 12) / 15.0) ** 2) <= 1.0
    mrc = np.full(X.shape, I_AIR[0], np.float32)
    ppi = np.full(X.shape, I_AIR[1], np.float32)
    pei = np.full(X.shape, I_AIR[2], np.float32)
    mrc[head], ppi[head], pei[head] = I_SOFT
    mrc[bone], ppi[bone], pei[bone] = I_BONE
    mrc[cistern], ppi[cistern], pei[cistern] = 650.0, I_CSF[1], I_CSF[2]
    mrc[stem], ppi[stem], pei[stem] = I_SOFT
    # gentle low-frequency shading so the head is not flat, then soften edges
    rng = np.random.default_rng(7)
    lf = ndi.gaussian_filter(rng.standard_normal(X.shape).astype(np.float32), sigma=(12, 12, 6))
    lf = 1.0 + 0.25 * lf / (np.abs(lf).max() + 1e-6)
    out = []
    for v in (mrc * lf, ppi * lf, pei * lf):
        out.append(ndi.gaussian_filter(v, sigma=(1.0, 1.0, 0.5)))
    return tuple(out)


def add_noise(vol, sigma, rng):
    n1 = rng.normal(0, sigma, vol.shape).astype(np.float32)
    n2 = rng.normal(0, sigma, vol.shape).astype(np.float32)
    return np.sqrt((vol + n1) ** 2 + n2 ** 2)


# --------------------------------------------------------------------------- #
def write_nifti(vol, path):
    aff = np.eye(4)
    for d in range(3):
        aff[d, d] = TGT_SP[d]
        aff[d, 3] = TGT_EDGE0[d] + 0.5 * TGT_SP[d]
    img = nib.Nifti1Image(np.asarray(vol, np.float32), aff)
    img.header.set_xyzt_units("mm")
    img.header["qform_code"] = 1
    img.header["sform_code"] = 1
    nib.save(img, path)


def write_dicom_series(vol, outdir, series_no, desc, uids, extra):
    os.makedirs(outdir, exist_ok=True)
    vol16 = np.clip(np.round(vol), 0, 4095).astype(np.uint16)
    nx, ny, nz = vol16.shape
    x_ras0 = TGT_EDGE0[0] + (nx - 0.5) * TGT_SP[0]      # RAS x of column 0 (= most Right)
    y_ras0 = TGT_EDGE0[1] + (ny - 0.5) * TGT_SP[1]      # RAS y of row 0 (= most Anterior)
    series_uid = generate_uid()
    for k in range(nz):
        z = TGT_EDGE0[2] + (k + 0.5) * TGT_SP[2]
        ds = Dataset()
        ds.file_meta = FileMetaDataset()
        ds.file_meta.MediaStorageSOPClassUID = "1.2.840.10008.5.1.4.1.1.4"
        ds.file_meta.MediaStorageSOPInstanceUID = generate_uid()
        ds.file_meta.TransferSyntaxUID = ExplicitVRLittleEndian
        ds.SOPClassUID = ds.file_meta.MediaStorageSOPClassUID
        ds.SOPInstanceUID = ds.file_meta.MediaStorageSOPInstanceUID
        ds.PatientName = "SYNTHETIC^INNER EAR"
        ds.PatientID = CASE
        ds.PatientBirthDate = ""
        ds.PatientSex = "O"
        ds.StudyInstanceUID = uids["study"]
        ds.FrameOfReferenceUID = uids["for"]
        ds.SeriesInstanceUID = series_uid
        ds.StudyID = "1"
        ds.StudyDate = uids["date"]
        ds.StudyTime = "120000"
        ds.SeriesDate = uids["date"]
        ds.SeriesTime = "120000"
        ds.AccessionNumber = ""
        ds.StudyDescription = "SYNTHETIC HYDROPS PHANTOM (not a patient)"
        ds.SeriesDescription = desc
        ds.SeriesNumber = series_no
        ds.InstanceNumber = k + 1
        ds.Modality = "MR"
        ds.Manufacturer = "SYNTHETIC"
        ds.ManufacturerModelName = "make_synthetic_case.py"
        ds.ImageType = ["DERIVED", "SECONDARY", "SYNTHETIC"]
        ds.ImageComments = "Synthetic phantom built from open IEVNet sample anatomy; not a patient"
        ds.MagneticFieldStrength = 3
        ds.ScanningSequence = "IR" if extra.get("TI") else "SE"
        ds.SequenceVariant = "SK"
        ds.ScanOptions = ""
        ds.MRAcquisitionType = "3D"
        ds.RepetitionTime = extra["TR"]
        ds.EchoTime = extra["TE"]
        if extra.get("TI"):
            ds.InversionTime = extra["TI"]
        ds.ImagePositionPatient = [float(-x_ras0), float(-y_ras0), float(z)]
        ds.ImageOrientationPatient = [1, 0, 0, 0, 1, 0]
        ds.PixelSpacing = [float(TGT_SP[1]), float(TGT_SP[0])]
        ds.SliceThickness = float(TGT_SP[2])
        ds.SpacingBetweenSlices = float(TGT_SP[2])
        ds.SliceLocation = float(z)
        ds.SamplesPerPixel = 1
        ds.PhotometricInterpretation = "MONOCHROME2"
        ds.Rows = ny
        ds.Columns = nx
        ds.BitsAllocated = 16
        ds.BitsStored = 16
        ds.HighBit = 15
        ds.PixelRepresentation = 0
        ds.RescaleIntercept = 0
        ds.RescaleSlope = 1
        ds.WindowCenter = int(extra["WC"])
        ds.WindowWidth = int(extra["WW"])
        # pixel array: rows = posterior-increasing (RAS j decreasing),
        # columns = left-increasing (RAS i decreasing)
        frame = vol16[::-1, ::-1, k].T          # -> [row(j desc), col(i desc)]
        ds.PixelData = np.ascontiguousarray(frame).tobytes()
        pydicom.dcmwrite(os.path.join(outdir, f"IM{k + 1:04d}.dcm"), ds,
                         enforce_file_format=True)
    return series_uid


def montage(vols, labels_t, endo_t, seeds_mm, path):
    """QC: for each side, axial slices through vestibule and cochlea seeds."""
    cx, cy, cz = target_centers()
    rows = []
    for side in ("R", "L"):
        for st in ("vestibule", "cochlea"):
            rows.append((side, st, seeds_mm[side][st]))
    fig, axs = plt.subplots(len(rows), 4, figsize=(18, 4.2 * len(rows)))
    for r, (side, st, p) in enumerate(rows):
        i = int(round((p[0] - cx[0]) / TGT_SP[0]))
        j = int(round((p[1] - cy[0]) / TGT_SP[1]))
        k = int(round((p[2] - cz[0]) / TGT_SP[2]))
        x0, x1 = max(0, i - 40), min(TGT_N[0], i + 40)
        y0, y1 = max(0, j - 40), min(TGT_N[1], j + 40)
        ext = (cx[x0], cx[x1 - 1], cy[y0], cy[y1 - 1])
        for c, (name, vmin, vmax) in enumerate((("PPI", 0, 700), ("PEI", 0, 600),
                                                ("HYDROPS", -600, 700), ("MRC", 0, 800))):
            ax = axs[r, c]
            ax.imshow(vols[name][x0:x1, y0:y1, k].T, origin="lower", cmap="gray",
                      vmin=vmin, vmax=vmax, extent=ext)
            if name == "MRC":
                L = labels_t[x0:x1, y0:y1, k].T
                for lid, col in ((1, "c"), (2, "lime"), (3, "c"), (4, "lime")):
                    if (L == lid).any():
                        ax.contour(cx[x0:x1], cy[y0:y1], (L == lid).astype(float), levels=[.5], colors=col, linewidths=.8)
                ax.contour(cx[x0:x1], cy[y0:y1], endo_t[x0:x1, y0:y1, k].T.astype(float), levels=[.5], colors="r", linewidths=.8)
            ax.set_title(f"{side} {st} z={cz[k]:.1f} mm  {name}")
            ax.set_xlabel("RAS x (mm)"); ax.set_ylabel("RAS y (mm)")
    plt.tight_layout()
    plt.savefig(path, dpi=70)
    plt.close(fig)


# --------------------------------------------------------------------------- #
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--seed", type=int, default=20261006)
    ap.add_argument("--case-id", default="SYN-001")
    ap.add_argument("--cochlea-model", default="outer_wall", choices=["outer_wall", "scala_vestibuli"],
                    help="cochlear endolymph placement (outer_wall = v1/v2 behaviour)")
    ap.add_argument("--frac", default="",
                    help="designed endolymph fractions, e.g. "
                         "L:cochlea=0.40,L:vestibule=0.70,R:cochlea=0.30,R:vestibule=0.60")
    args = ap.parse_args()
    global CASE, TARGET_FRAC, COCHLEA_MODEL
    CASE = args.case_id
    COCHLEA_MODEL = args.cochlea_model
    if args.frac:
        TARGET_FRAC = {"L": dict(TARGET_FRAC["L"]), "R": dict(TARGET_FRAC["R"])}
        for item in args.frac.split(","):
            key, val = item.split("=")
            side, st = key.split(":")
            TARGET_FRAC[side.strip().upper()][st.strip().lower()] = float(val)
    rng = np.random.default_rng(args.seed)
    out = args.out
    for sub in ("nifti", "gt", "dicom", "qc"):
        os.makedirs(os.path.join(out, sub), exist_ok=True)

    cx, cy, cz = target_centers()
    mrc_t, ppi_t, pei_t = background(cx, cy, cz)
    wsum = np.zeros(tuple(TGT_N), np.float32)
    acc = [np.zeros(tuple(TGT_N), np.float32) for _ in range(3)]
    frac = {name: np.zeros(tuple(TGT_N), np.float32)
            for name in ("Rc", "Rv", "Lc", "Lv", "endo", "labyrinth")}
    gt_rows = []
    seeds_mm = {}
    for side in ("L", "R"):
        img = nib.load(os.path.join(args.src, f"vol_ie_{side}.nii.gz"))
        a = img.get_fdata().astype(np.float32)
        seg = segment_ear(a, side)
        E_v = endolymph_vestibule(seg["vestibule"], TARGET_FRAC[side]["vestibule"])
        E_c = endolymph_cochlea(seg["cochlea"], TARGET_FRAC[side]["cochlea"])
        E = E_v | E_c
        mrc, ppi, pei = synth_classes(a, seg, E)
        labels = {f"{side}c": seg["cochlea"], f"{side}v": seg["vestibule"],
                  "endo": E, "labyrinth": seg["labyrinth"]}
        paste_crop([mrc, ppi, pei], img.affine, acc, wsum, labels, frac)
        vox_mm3 = CROP_SP ** 3
        for st, M, Em in (("cochlea", seg["cochlea"], E_c), ("vestibule", seg["vestibule"], E_v)):
            gt_rows.append({"side": side, "region": st,
                            "tfs_mm3_0p2mm": round(float(M.sum() * vox_mm3), 2),
                            "endo_mm3_0p2mm": round(float(Em.sum() * vox_mm3), 2),
                            "ratio_pct_0p2mm": round(100.0 * Em.sum() / max(1, M.sum()), 2)})
        origin = img.affine[:3, 3]
        seeds_mm[side] = {"cochlea": origin + np.array(seg["seed_c"]) * CROP_SP,
                          "vestibule": origin + np.array(seg["seed_v"]) * CROP_SP}
        print(f"{side}: otsu={seg['otsu']:.0f} cochlea={seg['cochlea'].sum()*vox_mm3:.1f} mm3 "
              f"vestibule={seg['vestibule'].sum()*vox_mm3:.1f} mm3 labyrinth={seg['labyrinth'].sum()*vox_mm3:.0f} mm3 "
              f"csf={seg['csf'].sum()*vox_mm3:.0f} mm3 | endo c={E_c.sum()*vox_mm3:.2f} v={E_v.sum()*vox_mm3:.2f} mm3")

    # composite: crop content (weight wsum) over background
    w = np.clip(wsum, 0, 1)
    vols = {}
    for name, bg, k in (("MRC", mrc_t, 0), ("PPI", ppi_t, 1), ("PEI", pei_t, 2)):
        comp = np.where(wsum > 0, acc[k] / np.maximum(wsum, 1e-6), 0) * w + bg * (1 - w)
        vols[name] = add_noise(comp.astype(np.float32), NOISE[name], rng)
    vols["HYDROPS"] = vols["PPI"] - vols["PEI"]
    vols["HYDROPS_Mi2"] = vols["HYDROPS"] * vols["MRC"] / 1000.0

    # ground truth on the target grid
    labels_t = np.zeros(tuple(TGT_N), np.uint8)
    for (side, st), lid in LABEL_ID.items():
        f = frac[f"{side}{st[0]}"]
        labels_t[f >= 0.5] = lid
    endo_t = frac["endo"] >= 0.5
    for row in gt_rows:
        lid = LABEL_ID[(row["side"], row["region"])]
        f_reg = frac[f"{row['side']}{row['region'][0]}"]
        tfs_expect = float(f_reg.sum() * TGT_SP.prod())
        endo_expect = float((np.minimum(frac["endo"], f_reg)).sum() * TGT_SP.prod())
        M = labels_t == lid
        n_neg = int(((vols["HYDROPS"] < 0) & M).sum())
        row.update({"tfs_mm3_target_fraction": round(tfs_expect, 2),
                    "endo_mm3_target_fraction": round(endo_expect, 2),
                    "ratio_pct_target_fraction": round(100 * endo_expect / max(tfs_expect, 1e-6), 2),
                    "label_vox_target": int(M.sum()),
                    "negative_vox_in_label": n_neg,
                    "ratio_pct_negative_in_label": round(100 * n_neg / max(1, M.sum()), 2)})

    # outputs
    for name in ("PPI", "PEI", "MRC", "HYDROPS", "HYDROPS_Mi2"):
        write_nifti(vols[name], os.path.join(out, "nifti", f"{CASE}_{name}.nii.gz"))
    write_nifti(labels_t, os.path.join(out, "gt", f"{CASE}_labels.nii.gz"))
    write_nifti(endo_t.astype(np.uint8), os.path.join(out, "gt", f"{CASE}_endolymph.nii.gz"))
    for name in ("Rc", "Rv", "Lc", "Lv", "endo", "labyrinth"):
        write_nifti(frac[name], os.path.join(out, "gt", f"{CASE}_fraction_{name}.nii.gz"))
    with open(os.path.join(out, "gt", "ground_truth.csv"), "w", newline="") as fh:
        wr = csv.DictWriter(fh, fieldnames=list(gt_rows[0].keys()))
        wr.writeheader()
        wr.writerows(gt_rows)
    meta = {"case": CASE, "created": dt.date.today().isoformat(),
            "source": "IEVNet sample_data vol_ie_L/R.nii.gz (Ahmadi et al. 2022, Apache-2.0)",
            "target_spacing_mm": TGT_SP.tolist(), "target_shape": TGT_N.tolist(),
            "designed_fractions": TARGET_FRAC, "cochlea_model": COCHLEA_MODEL, "seeds_ras_mm": {s: {k: v.tolist() for k, v in d.items()} for s, d in seeds_mm.items()},
            "label_ids": {f"{s} {st}": lid for (s, st), lid in LABEL_ID.items()},
            "ground_truth": gt_rows, "noise_sigma": NOISE, "random_seed": args.seed}
    with open(os.path.join(out, "gt", "ground_truth.json"), "w") as fh:
        json.dump(meta, fh, indent=2, ensure_ascii=False)
    with open(os.path.join(out, "osirix_landmarks.csv"), "w") as fh:
        fh.write("# case,side,structure,landmark,x_mm,y_mm,z_mm  (DICOM LPS mm)\n")
        for side in ("R", "L"):
            for st in ("cochlea", "vestibule"):
                p = seeds_mm[side][st]
                fh.write(f"{CASE},{side},{st},center,{-p[0]:.3f},{-p[1]:.3f},{p[2]:.3f}\n")

    uids = {"study": generate_uid(), "for": generate_uid(), "date": dt.date.today().strftime("%Y%m%d")}
    series = (("PPI", 1, "SYN_PPI_hT2W_3D-FLAIR_TI2250", {"TR": 9000, "TE": 540, "TI": 2250, "WC": 300, "WW": 700}),
              ("PEI", 2, "SYN_PEI_hT2W_3D-IR_TI2050", {"TR": 9000, "TE": 540, "TI": 2050, "WC": 250, "WW": 600}),
              ("MRC", 3, "SYN_MRC_hT2W_cisternography", {"TR": 4400, "TE": 544, "WC": 350, "WW": 800}))
    for name, sno, desc, extra in series:
        write_dicom_series(vols[name], os.path.join(out, "dicom", name), sno, desc, uids, extra)
    zpath = os.path.join(out, f"{CASE}_dicom.zip")
    with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as zf:
        for name, _, _, _ in series:
            d = os.path.join(out, "dicom", name)
            for fn in sorted(os.listdir(d)):
                zf.write(os.path.join(d, fn), arcname=f"{CASE}/{name}/{fn}")
    montage(vols, labels_t, endo_t, seeds_mm, os.path.join(out, "qc", f"{CASE}_montage.png"))
    print("ground truth:")
    for r in gt_rows:
        print("  ", r)
    print("wrote", out)


if __name__ == "__main__":
    main()
