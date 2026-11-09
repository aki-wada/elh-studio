#!/usr/bin/env python3
"""Generate version-4 cases from separately obtained public source MRI crops."""
import argparse, hashlib, json, subprocess, sys, tempfile
from pathlib import Path
import nibabel as nib
import numpy as np
import make_synthetic_case as base
import reference_geometry as geo

ROOT=Path(__file__).resolve().parents[1]
def check_source(source):
    expected=json.loads((ROOT/'config/source_hashes.json').read_text())
    for name,want in expected.items():
        p=source/name
        if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=want:
            raise ValueError('Missing or different source input: '+str(p))

def child(source,out,case):
    params=json.loads((ROOT/'config/cases.json').read_text())[case]
    with tempfile.TemporaryDirectory() as td, np.load(ROOT/'reference/reference_annotations.npz',allow_pickle=False) as archive:
        td=Path(td); inputs={}
        for side in ['R','L']:
            crop=source/f'vol_ie_{side}.nii.gz'; drawing=td/f'drawing_{side}.nii.gz'
            nib.save(geo.drawing_image(crop),drawing)
            paths={}
            for name in ['painted','crus_tube']:
                key=f'{name}_{side}';p=td/(key+'.nii.gz')
                im=nib.Nifti1Image(archive[key],archive[key+'_affine']); im.set_qform(im.affine,1); im.set_sform(im.affine,1)
                nib.save(im,p);paths[name]=p
            paint=geo.painting_on_crop(geo.load_painting(paths['painted'],drawing,side),drawing,crop)
            inputs[side]=(paint,geo.load_crus_tube(paths['crus_tube'],crop))
        base.segment_ear=lambda a,side:geo.segment_ear_v4(a,side,*inputs[side])
        frac=','.join(f'{side}:{region}={value}' for side,values in params['designed_fractions'].items() for region,value in values.items())
        sys.argv=['make_synthetic_case.py','--src',str(source),'--out',str(out),'--case-id',case,'--seed',str(params['random_seed']),'--cochlea-model',params['cochlea_model'],'--frac',frac]
        base.main()

def main():
    cases=json.loads((ROOT/'config/cases.json').read_text())
    ap=argparse.ArgumentParser();ap.add_argument('--source',required=True,type=Path);ap.add_argument('--output',required=True,type=Path)
    ap.add_argument('--cases',nargs='+',choices=list(cases),default=list(cases));ap.add_argument('--child',action='store_true',help=argparse.SUPPRESS)
    a=ap.parse_args();source=a.source.resolve();output=a.output.resolve();check_source(source)
    # Refuse every nonempty destination before generating the first case.
    for c in a.cases:
        p=output/c
        if p.exists() and (not p.is_dir() or any(p.iterdir())):raise ValueError('Output is not empty: '+str(p))
    if a.child:
        if len(a.cases)!=1:raise ValueError('Child takes one case')
        child(source,output/a.cases[0],a.cases[0])
    else:
        for c in a.cases:
            subprocess.run([sys.executable,str(Path(__file__).resolve()),'--source',str(source),'--output',str(output),'--cases',c,'--child'],check=True)
if __name__=='__main__':main()
