#!/usr/bin/env python3
"""Fraction of voxels where Studio-exported volumes (ppi/pei/mrc/hydrops .nii in the ZIP) equal an independent
reference reading of the same DICOM series (SimpleITK/GDCM series reader, rescale applied), aligned in world coordinates.
Usage: pixel_agreement.py --zip <studio.zip> --dicom <study folder>   (series found by SeriesDescription / TI)
   or: pixel_agreement.py --zip <studio.zip> --ppi <dir> --pei <dir> --mrc <dir>"""
import argparse, json, os, tempfile, zipfile, numpy as np, pydicom, SimpleITK as sitk

def _first_dicom(d):
    for f in sorted(os.listdir(d)):
        p=os.path.join(d,f)
        if os.path.isfile(p):
            try: return pydicom.dcmread(p,stop_before_pixels=True)
            except Exception: continue
    return None

def classify(ds):
    desc=str(getattr(ds,"SeriesDescription","")).upper(); ti=float(getattr(ds,"InversionTime",0) or 0)
    if "MRC" in desc or "CISTERN" in desc: return "MRC"
    if "PPI" in desc or abs(ti-2250)<60: return "PPI"
    if "PEI" in desc or abs(ti-2050)<60: return "PEI"
    return None

def find_series_dirs(root):
    """One folder per role. Scanner-derived SUB_* / MULT_* series are skipped (they inherit the inversion time of PPI);
    two candidate folders for the same role raise ValueError instead of picking one silently."""
    found={}
    for d,_,files in sorted(os.walk(root)):
        if not files: continue
        ds=_first_dicom(d)
        if ds is None: continue
        if str(getattr(ds,"SeriesDescription","")).upper().startswith(("SUB","MULT")): continue   # scanner-derived subtraction/multiplication series inherit TI and must not be mistaken for PPI
        role=classify(ds)
        if role: found.setdefault(role,[]).append(d)
    amb={k:v for k,v in found.items() if len(v)>1}
    if amb: raise ValueError(f"more than one folder matches a role; pass --ppi/--pei/--mrc explicitly: {amb}")
    return {k:v[0] for k,v in found.items()}

def read_series(d):
    r=sitk.ImageSeriesReader(); names=r.GetGDCMSeriesFileNames(d); r.SetFileNames(names); return sitk.Cast(r.Execute(),sitk.sitkFloat32)

def _studio(zip_path, name, d):
    with zipfile.ZipFile(zip_path) as z: open(os.path.join(d,name),"wb").write(z.read(name))
    return sitk.ReadImage(os.path.join(d,name), sitk.sitkFloat32)

def agreement(zip_path, dirs, tol=1e-3):
    out={}
    with tempfile.TemporaryDirectory() as d:
        ref={k:read_series(dirs[k]) for k in ("PPI","PEI","MRC")}; ref["HYDROPS"]=ref["PPI"]-ref["PEI"]
        for name,role in (("ppi.nii","PPI"),("pei.nii","PEI"),("mrc.nii","MRC"),("hydrops.nii","HYDROPS")):
            s=_studio(zip_path,name,d); r=sitk.Resample(ref[role], s, sitk.Transform(), sitk.sitkNearestNeighbor, 0.0, sitk.sitkFloat32)
            a=sitk.GetArrayFromImage(s); b=sitk.GetArrayFromImage(r); out[role.lower()]=float((np.abs(a-b)<=tol).mean())
    return out

if __name__=="__main__":
    ap=argparse.ArgumentParser(); ap.add_argument("--zip",required=True); ap.add_argument("--dicom"); ap.add_argument("--ppi"); ap.add_argument("--pei"); ap.add_argument("--mrc"); a=ap.parse_args()
    dirs=find_series_dirs(a.dicom) if a.dicom else {"PPI":a.ppi,"PEI":a.pei,"MRC":a.mrc}
    missing=[k for k in ("PPI","PEI","MRC") if not dirs.get(k)]
    if missing: raise SystemExit(f"series not found: {missing}")
    print(json.dumps({"zip":os.path.basename(a.zip),"series":dirs,"agreement":agreement(a.zip,dirs)},ensure_ascii=False))
