"""Frozen version-4 reference partition functions extracted from the evaluation pipeline.
Use generate_cases.py; the base generator alone uses an older default partition.
"""
from pathlib import Path
import numpy as np
import nibabel as nib
import SimpleITK as sitk
from scipy import ndimage
from make_synthetic_case import CROP_SP, LABEL_ID, SEEDS, segment_ear
class CheckError(ValueError): pass
LPS2RAS=np.diag([-1.,-1.,1.])
PAINT_TOL=TIE_TOL=1e-4
CUBE=np.ones((3,3,3),bool)
FACES=ndimage.generate_binary_structure(3,1).astype(np.uint8); FACES[1,1,1]=0

def drawing_image(src: Path, spacing: float = 0.5) -> nib.Nifti1Image:
    """Resample a 0.2 mm IEVNet crop to `spacing` mm isotropic for painting: same axis directions, same world extent (the nearest
    whole number of voxels, centred on the crop, so the edges coincide when the extent is a whole multiple of `spacing`, as for the
    real 40 x 30 x 20 mm crops), cubic B-spline (sitkBSpline), float32, qform = sform (code 1). MRC intensity only, nothing overlaid."""
    img=sitk.ReadImage(str(src), sitk.sitkFloat32)
    N=np.array(img.GetSize()); D=np.reshape(img.GetDirection(),(3,3))
    n=np.maximum(1, np.rint(N*np.array(img.GetSpacing())/spacing)).astype(int)
    origin=np.array(img.TransformContinuousIndexToPhysicalPoint(((N-1)/2).tolist()))-D@((n-1)/2*spacing)  # centre of voxel 0
    out=sitk.Resample(img, n.tolist(), sitk.Transform(), sitk.sitkBSpline, origin.tolist(), [spacing]*3, img.GetDirection(), 0.0, sitk.sitkFloat32)
    aff=np.eye(4); aff[:3,:3]=LPS2RAS@D*spacing; aff[:3,3]=LPS2RAS@origin
    nii=nib.Nifti1Image(sitk.GetArrayFromImage(out).transpose(2,1,0), aff)  # ITK arrays are (z, y, x)
    nii.set_qform(aff, code=1); nii.set_sform(aff, code=1); nii.header.set_xyzt_units("mm")
    return nii

def _grid(img):
    return f"{''.join(nib.aff2axcodes(img.affine))} {'×'.join(f'{z:g}' for z in np.sqrt((img.affine[:3,:3]**2).sum(0)))} mm"

def load_painting(painted: Path, drawing: Path, side: str) -> np.ndarray:
    """The owner's ITK-SNAP labels of one ear (painted_<side>.nii.gz) as int16 on the drawing image's grid, after the checks promised in
    the painting guide (data/synthetic/v4/drawing/README.md): the size, orientation and origin of the drawing image (affine within
    PAINT_TOL mm), and exactly the two labels of that ear besides 0 (R: 1 cochlea, 2 vestibule; L: 3, 4). Any integer type (ITK-SNAP
    writes uint16), a trailing 4th axis of length 1 and whole numbers stored as floats are accepted. Otherwise ValueError, with a
    Japanese message for the owner that says what differs."""
    p, d=nib.load(painted), nib.load(drawing); diffs=[]
    if p.shape[:3]!=d.shape[:3] or p.shape[3:] not in ((),(1,)):
        diffs.append(f"大きさ {'×'.join(map(str,p.shape))}（描くための画像は {'×'.join(map(str,d.shape[:3]))}）")
    if np.abs(p.affine[:3,:3]-d.affine[:3,:3]).max()>PAINT_TOL: diffs.append(f"向きと間隔 {_grid(p)}（描くための画像は {_grid(d)}）")
    if np.abs(p.affine[:3,3]-d.affine[:3,3]).max()>PAINT_TOL:
        diffs.append(f"原点（最初の voxel の中心）のずれ {np.linalg.norm(p.affine[:3,3]-d.affine[:3,3]):.3f} mm")
    if diffs: raise CheckError(f"塗り {painted} の向き・原点・大きさが、描くための画像 {drawing} と違うため、取り込みを止めました（{'、'.join(diffs)}）。")
    arr=np.asanyarray(p.dataobj).reshape(d.shape[:3])
    if not np.issubdtype(arr.dtype, np.integer):
        bad=~np.isfinite(arr)|(arr!=np.round(arr))
        if bad.any(): raise CheckError(f"塗り {painted} に整数でない値（例 {arr[bad].flat[0]}）があるため、取り込みを止めました。"
                                       "ラベル（番号）として保存したファイルか確かめてください。")
    found=[int(v) for v in np.unique(arr) if v!=0]; want=[LABEL_ID[(side,"cochlea")], LABEL_ID[(side,"vestibule")]]
    if found!=want: raise CheckError(f"塗り {painted} の番号が違うため、取り込みを止めました：あったのは {'、'.join(map(str,found)) or 'なし'}"
                                     f"（0 の背景を除く）、{'右耳' if side=='R' else '左耳'}の画像に塗る番号は {want[0]}（蝸牛）と {want[1]}（前庭）です。")
    return arr.astype(np.int16)

def load_crus_tube(path: Path, crop: Path) -> np.ndarray:
    """The crus commune and the canal tubes of one ear (crus_tube_<side>.nii.gz, 1 = crus/tube: the partition the exclusion of the
    ground-truth painting used, data/synthetic/v4/paint_final/README.md) as a bool mask on the 0.2 mm crop grid, after the checks: the
    crop's shape, its affine within PAINT_TOL mm, and no values but 0 and 1. Otherwise CheckError, with a Japanese message for the owner
    that names the file and says what differs (as load_painting)."""
    m, c=nib.load(path), nib.load(crop); diffs=[]
    if m.shape!=c.shape[:3]: diffs.append(f"大きさ {'×'.join(map(str,m.shape))}（元画像は {'×'.join(map(str,c.shape[:3]))}）")
    if np.abs(m.affine[:3,:3]-c.affine[:3,:3]).max()>PAINT_TOL: diffs.append(f"向きと間隔 {_grid(m)}（元画像は {_grid(c)}）")
    if np.abs(m.affine[:3,3]-c.affine[:3,3]).max()>PAINT_TOL:
        diffs.append(f"原点（最初の voxel の中心）のずれ {np.linalg.norm(m.affine[:3,3]-c.affine[:3,3]):.3f} mm")
    if diffs: raise CheckError(f"総脚と管の範囲 {path} の向き・原点・大きさが、0.2 mm の元画像 {crop} と違うため、取り込みを止めました（{'、'.join(diffs)}）。")
    arr=np.asanyarray(m.dataobj); bad=~np.isin(arr, (0,1))
    if bad.any(): raise CheckError(f"総脚と管の範囲 {path} に 0 と 1 以外の値（例 {arr[bad].flat[0]}）があるため、取り込みを止めました。")
    return arr==1

def _to_drawing(k):
    """The 0.5 mm drawing voxel nearest to 0.2 mm crop voxel k (both from 0; an int or an array): floor((2k+1)/5), ties to the upper one."""
    return (2*k+1)//5

def painting_on_crop(labels: np.ndarray, drawing: Path, crop: Path) -> np.ndarray:
    """Labels on the 0.5 mm drawing grid -> the 0.2 mm crop grid (int16), nearest neighbour.
    The drawing image shares the crop's outer edges (drawing_image), so the centre of crop voxel k lies at the continuous drawing index
    0.4 k - 0.3 = (2k+1)/5 - 1/2 on every axis and its nearest drawing voxel is j = floor((2k+1)/5). On every fifth plane (k = 2, 7, 12, ...)
    that centre lies exactly on the boundary of two 0.5 mm voxels; the integer rule gives these ties to the upper voxel, the same way on
    every axis and in both ears. Rounding the float index from the stored affines would not: their float32 rounding puts the tie planes
    a hair above the boundary in the right ear and a hair below it in the left (x). The relation itself is checked first: under the
    stored affines every crop voxel centre must lie within TIE_TOL voxels of 0.4 k - 0.3 (checked at the 8 corners, the map being affine);
    any other grid relation raises CheckError."""
    d, c=nib.load(drawing), nib.load(crop)
    if labels.shape!=d.shape[:3]: raise ValueError(f"labels {labels.shape} are not on the grid {d.shape[:3]} of the drawing image {drawing}")
    n=np.array(c.shape[:3]); k=np.array(np.meshgrid(*[(0,m-1) for m in n], indexing="ij"), float).reshape(3,-1)
    off=np.abs((np.linalg.inv(d.affine)@c.affine)[:3]@np.vstack([k, np.ones(k.shape[1])])-(0.4*k-0.3)).max()
    if off>TIE_TOL: raise CheckError(f"the 0.2 mm crop {crop} and the 0.5 mm drawing image {drawing} do not share their outer edges "
                                     f"(crop voxel centres up to {off:.4f} drawing voxels away from 0.4 k - 0.3)")
    idx=[_to_drawing(np.arange(m)) for m in n]
    if any(i[-1]>=m for i, m in zip(idx, labels.shape)): raise CheckError(f"the 0.2 mm crop {crop} {tuple(n)} extends beyond the drawing image {drawing}")
    return labels[np.ix_(*idx)].astype(np.int16)

def _classify(a, side, paint, crus_tube=None):
    """segment_ear_v4 plus what the preview reports: (version-4 dict, version-3 dict, medial mask, rest component labels, ids of the
    components moved to CSF, their mask, rim). rim is None without crus_tube (the rim rule off); with it, the rim rule's masks: cochlea and
    vestibule = the layer added to each, and the rest voxels sharing a face with the painted fluid that were not added, by reason:
    crus_tube = marked crus/tube, iac = in a component moved to CSF (also when marked crus/tube), equal = as many faces on each structure."""
    if paint.shape!=a.shape: raise ValueError(f"paint {paint.shape} is not on the crop grid {a.shape}")
    ct=None if crus_tube is None else np.asarray(crus_tube, bool)
    if ct is not None and ct.shape!=a.shape: raise ValueError(f"crus_tube {ct.shape} is not on the crop grid {a.shape}")
    base=segment_ear(a, side); fluid=base["fluid"]
    coch=fluid&(paint==LABEL_ID[(side,"cochlea")]); vest=fluid&(paint==LABEL_ID[(side,"vestibule")])
    rest=base["labyrinth"]&~coch&~vest
    x_mm=np.arange(a.shape[0], dtype=np.float32)[:,None,None]*CROP_SP  # = segment_ear's np.indices(a.shape).astype(np.float32)[0] * CROP_SP
    med=SEEDS[side]["medial"]
    cut=((x_mm-base["seed_c"][0]*CROP_SP)*med>4.0)|((x_mm-base["seed_v"][0]*CROP_SP)*med>3.5)  # segment_ear's cut_c | cut_v, snapped seeds
    medial=fluid&~base["labyrinth"]&cut
    comp, _=ndimage.label(rest, structure=CUBE)
    ids=np.unique(comp[ndimage.binary_dilation(medial, structure=CUBE)&rest])  # rest voxels all carry a component number >= 1
    iac=np.isin(comp, ids)
    seg=dict(base, cochlea=coch, vestibule=vest, labyrinth=coch|vest|(rest&~iac), csf=(base["csf"]&~coch&~vest)|iac)
    if ct is None: return seg, base, medial, comp, ids, iac, None
    nc, nv=(ndimage.convolve(m.astype(np.uint8), FACES, mode="constant") for m in (coch, vest))  # faces shared with the painted fluid (0..6)
    cand=rest&~iac&~ct; touch=rest&((nc>0)|(nv>0))
    add_c=cand&(nc>0)&(nc>nv); add_v=cand&(nv>0)&(nv>nc)
    rim={"cochlea": add_c, "vestibule": add_v, "crus_tube": touch&~iac&ct, "iac": touch&iac, "equal": cand&(nc>0)&(nc==nv)}
    return dict(seg, cochlea=coch|add_c, vestibule=vest|add_v), base, medial, comp, ids, iac, rim

def segment_ear_v4(a: np.ndarray, side: str, paint: np.ndarray, crus_tube: np.ndarray | None = None) -> dict:
    """make_synthetic_case.segment_ear with the owner's painting (`paint`: labels on the crop grid, painting_on_crop). Same keys;
    fluid, bone, seed_c, seed_v and otsu are the original values. The rule (plan, Task 3; fixed before any result was seen):
      cochlea, vestibule = fluid inside the paint of that label (the fluid edge stays the 0.2 mm Otsu edge; the paint only separates)
      rest   = segment_ear's labyrinth outside both: the unpainted labyrinth-side fluid, rim included
      medial = fluid outside segment_ear's labyrinth beyond its medial cuts: more than 4.0 mm medial of the snapped cochlea seed or 3.5 mm
               medial of the snapped vestibule seed along crop axis 0 (towards the midline: SEEDS[side]['medial']), as in segment_ear
      each 26-connected component of rest that touches medial (dilated by one voxel with the 26-neighbourhood) is internal auditory canal
      and becomes CSF, as a whole; the other components (semicircular canals etc.) stay perilymph
      csf = segment_ear's csf outside the paint, plus those components; labyrinth = cochlea | vestibule | the other components
    The rim rule (plan, Task 3b: the owner's decision B, 2026-11-06; fixed before any result was seen) applies only with `crus_tube` (bool
    on the crop grid, load_crus_tube: the crus commune and the canal tubes; None keeps the result above exactly; another shape: ValueError):
      cand   = rest outside the internal auditory canal components and outside crus_tube
      nc, nv = the number of faces (6-neighbourhood, 0..6) a cand voxel shares with the painted cochlea / vestibule fluid above
      cochlea += cand with nc > 0 and nc > nv; vestibule += cand with nv > 0 and nv > nc; nc == nv > 0 is not added (stays perilymph)
      one layer: the faces are counted on the painted fluid before adding, never on added voxels; the added voxels are rest outside the
      internal auditory canal, so labyrinth and csf do not change"""
    return _classify(a, side, paint, crus_tube)[0]
