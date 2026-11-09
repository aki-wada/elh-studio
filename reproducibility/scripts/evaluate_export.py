#!/usr/bin/env python3
"""Total-fluid agreement and ELS volume error from a saved application ZIP."""
import argparse,csv,io,json,tempfile,zipfile
from pathlib import Path
import numpy as np
import SimpleITK as sitk
from compare_studio_synthetic import compare

def evaluate(zip_path,gt_dir,case,condition):
    rows=compare(str(zip_path),str(gt_dir),case,condition)
    with zipfile.ZipFile(zip_path) as z,tempfile.TemporaryDirectory() as tmp:
        for name in ['roi_labels.nii','hydrops.nii']:
            (Path(tmp)/name).write_bytes(z.read(name))
        roi=sitk.ReadImage(str(Path(tmp)/'roi_labels.nii')); hydrops=sitk.ReadImage(str(Path(tmp)/'hydrops.nii'))
        if (roi.GetSize(),roi.GetSpacing(),roi.GetOrigin(),roi.GetDirection())!=(hydrops.GetSize(),hydrops.GetSpacing(),hydrops.GetOrigin(),hydrops.GetDirection()):raise ValueError('ROI/HYDROPS grids differ')
        labels=sitk.GetArrayFromImage(roi);neg=sitk.GetArrayFromImage(hydrops)<0
        voxel=float(np.prod(roi.GetSpacing()))
        measures={int(r['label']):r for r in csv.DictReader(io.StringIO(z.read('measurements.csv').decode('utf-8-sig'))) if r['image']=='hydrops'}
    with (Path(gt_dir)/'ground_truth.csv').open() as f:
        design={(r['side'],r['region']):float(r['endo_mm3_0p2mm']) for r in csv.DictReader(f)}
    for row in rows:
        mask=labels==row['label'];count=int((mask&neg).sum());volume=count*voxel;measurement=measures[row['label']]
        if not np.isclose(volume,float(measurement['negative_mm3']),rtol=0,atol=1e-8):raise ValueError('Saved volume does not match voxels')
        if not np.isclose(count/mask.sum()*100,row['studio_ratio'],rtol=0,atol=1e-8):raise ValueError('Saved ratio does not match voxels')
        reference=design[row['side'],row['region']]
        row.update(designed_endo_mm3=reference,studio_endo_mm3=volume,endo_diff_mm3=round(volume-reference,2),qc_flags=measurement['flags'])
    return rows

if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--zip',required=True,type=Path);ap.add_argument('--gt-dir',required=True,type=Path);ap.add_argument('--case',required=True);ap.add_argument('--condition',default='after');a=ap.parse_args()
    print(json.dumps(evaluate(a.zip,a.gt_dir,a.case,a.condition),indent=2))
