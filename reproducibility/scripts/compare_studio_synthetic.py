#!/usr/bin/env python3
"""Compare a ELH Studio export ZIP with synthetic ground truth (world-coordinate aligned).
Usage: compare_studio_synthetic.py --zip <studio.zip> --gt-dir <case>/gt --case SYN-001 --condition before --append results.csv
"""
import argparse, csv, io, os, tempfile, zipfile
import numpy as np, SimpleITK as sitk

LABELS={1:("R","cochlea"),2:("R","vestibule"),3:("L","cochlea"),4:("L","vestibule")}
FIELDS=["case","condition","label","side","region","studio_vox","gt_vox","dice","centroid_err_mm","studio_ratio","gt_ratio","diff_pt"]

def _read_zip_images(zip_path):
    with zipfile.ZipFile(zip_path) as z, tempfile.TemporaryDirectory() as d:
        for n in ("roi_labels.nii","negative_signal.nii"):
            open(os.path.join(d,n),"wb").write(z.read(n))
        labels=sitk.ReadImage(os.path.join(d,"roi_labels.nii")); neg=sitk.ReadImage(os.path.join(d,"negative_signal.nii"))
        text=z.read("measurements.csv").decode("utf-8-sig")
    return labels, neg, text

def _studio_ratios(text):
    out={}
    for r in csv.DictReader(io.StringIO(text)):
        if r.get("image")!="hydrops": continue
        out[int(r["label"])]=float(r["ratio_percent"]) if r["ratio_percent"]!="" else float("nan")
    return out

def _gt_ratios(gt_dir):
    out={}
    with open(os.path.join(gt_dir,"ground_truth.csv"),newline="") as f:
        for r in csv.DictReader(f): out[(r["side"],r["region"])]=float(r["ratio_pct_negative_in_label"])
    return out

def _centroid_mm(img, arr, label):
    idx=np.argwhere(arr==label)  # (z,y,x)
    if len(idx)==0: return None
    m=idx.mean(axis=0)
    return np.array(img.TransformContinuousIndexToPhysicalPoint((float(m[2]),float(m[1]),float(m[0]))))

def compare(zip_path, gt_dir, case, condition):
    studio, _neg, text=_read_zip_images(zip_path)
    gt=sitk.ReadImage(os.path.join(gt_dir,f"{case}_labels.nii.gz"))
    gt_on_studio=sitk.Resample(gt, studio, sitk.Transform(), sitk.sitkNearestNeighbor, 0, sitk.sitkUInt8)
    a=sitk.GetArrayFromImage(studio).astype(np.int32); g=sitk.GetArrayFromImage(gt_on_studio).astype(np.int32)
    sr=_studio_ratios(text); gr=_gt_ratios(gt_dir); rows=[]
    for label,(side,region) in LABELS.items():
        sa=a==label; ga=g==label; inter=np.logical_and(sa,ga).sum(); denom=sa.sum()+ga.sum()
        dice=float(2*inter/denom) if denom else float("nan")
        cs=_centroid_mm(studio,a,label); cg=_centroid_mm(gt_on_studio,g,label)
        cen=float(np.linalg.norm(cs-cg)) if cs is not None and cg is not None else float("nan")
        s_ratio=sr.get(label,float("nan")); g_ratio=gr.get((side,region),float("nan"))
        rows.append({"case":case,"condition":condition,"label":label,"side":side,"region":region,"studio_vox":int(sa.sum()),"gt_vox":int(ga.sum()),
                     "dice":round(dice,4),"centroid_err_mm":round(cen,3),"studio_ratio":s_ratio,"gt_ratio":g_ratio,"diff_pt":round(s_ratio-g_ratio,2)})
    return rows

def main():
    ap=argparse.ArgumentParser(); ap.add_argument("--zip",required=True); ap.add_argument("--gt-dir",required=True); ap.add_argument("--case",required=True)
    ap.add_argument("--condition",default="before"); ap.add_argument("--append",required=True); a=ap.parse_args()
    rows=compare(a.zip,a.gt_dir,a.case,a.condition); new=not os.path.exists(a.append)
    with open(a.append,"a",newline="") as f:
        w=csv.DictWriter(f,fieldnames=FIELDS); (w.writeheader() if new else None); [w.writerow(r) for r in rows]
    for r in rows: print(r)

if __name__=="__main__": main()
