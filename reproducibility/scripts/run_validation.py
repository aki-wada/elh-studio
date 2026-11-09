#!/usr/bin/env python3
"""Reproduce automatic extraction, recorded editing, voxel and region checks."""
import argparse,csv,json,subprocess,sys
from pathlib import Path
import numpy as np
from evaluate_export import evaluate
from pixel_agreement import agreement

ROOT=Path(__file__).resolve().parents[1]
def main():
    ap=argparse.ArgumentParser();ap.add_argument('--cases-root',required=True,type=Path);ap.add_argument('--output',required=True,type=Path);ap.add_argument('--node',default='node');a=ap.parse_args()
    output=a.output.resolve()
    if output.exists() and any(output.iterdir()):raise ValueError('Output is not empty: '+str(output))
    cases=list(json.loads((ROOT/'config/cases.json').read_text()));expected=list(csv.DictReader((ROOT/'results/region_results.csv').open()))
    for c in cases:
        if not (a.cases_root/c/'dicom').is_dir():raise ValueError('Missing generated case: '+c)
    output.mkdir(parents=True,exist_ok=True);rows=[];pixels={}
    for c in cases:
        source=(a.cases_root/c).resolve();auto_dir=output/c;after=auto_dir/(c+'_edited.zip')
        subprocess.run([a.node,str(ROOT/'scripts/studio_batch.cjs'),'--studio',str(ROOT/'runtime'),'--dicom',str(source/'dicom'),'--landmarks',str(source/'osirix_landmarks.csv'),'--out',str(auto_dir),'--name',c],check=True)
        auto=auto_dir/(c+'_studio_auto.zip')
        subprocess.run([a.node,str(ROOT/'scripts/studio_two_plane_replay.cjs'),'--studio',str(ROOT/'runtime'),'--zip',str(auto),'--edits',str(ROOT/f'reference/{c}_edits.json'),'--out',str(after)],check=True)
        for path,condition in [(auto,'before'),(after,'after')]:rows.extend(evaluate(path,source/'gt',c,condition))
        pixels[c]=agreement(str(auto),{k:str(source/'dicom'/k) for k in ['PPI','PEI','MRC']})
    metrics=['studio_vox','gt_vox','dice','centroid_err_mm','studio_ratio','gt_ratio','diff_pt','designed_endo_mm3','studio_endo_mm3','endo_diff_mm3']
    lookup={(r['case'],r['condition'],int(r['label'])):r for r in expected}
    if len(rows)!=len(expected):raise ValueError('Wrong number of region rows')
    errors=[]
    for row in rows:
        ref=lookup[row['case'],row['condition'],row['label']]
        for k in metrics:
            if not np.isclose(float(row[k]),float(ref[k]),rtol=0,atol=1e-8):errors.append([row['case'],row['condition'],row['label'],k,row[k],ref[k]])
    if any(v!=1.0 for case in pixels.values() for v in case.values()):errors.append(['voxel agreement',pixels])
    with (output/'region_results.csv').open('w',newline='') as f:
        w=csv.DictWriter(f,fieldnames=list(rows[0]));w.writeheader();w.writerows(rows)
    result={'cases':cases,'region_conditions_checked':len(rows),'voxel_agreement':pixels,'errors':errors,'passed':not errors}
    (output/'validation.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
    if errors:raise SystemExit(1)
if __name__=='__main__':main()
