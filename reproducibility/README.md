# Reproducing the synthetic evaluation

These materials describe the version-4 synthetic cases used in the Technical Note. They contain code, settings, label masks, recorded editing polygons and numerical results. They do not contain synthetic DICOM/NIfTI case bundles or the original MRI intensity volumes.

## 1. Obtain source images separately

Obtain `vol_ie_L.nii.gz` and `vol_ie_R.nii.gz` from the official [IEVNet sample_data folder](https://github.com/pydsgz/IEVNet/tree/main/sample_data) and place them in a separate input folder. These are public patient-derived SPACE crops from one subject, resampled to 0.2 mm. Read the source [Apache-2.0 license](https://github.com/pydsgz/IEVNet/blob/main/LICENSE) and [paper](https://doi.org/10.3389/fneur.2022.663200). Do not use clinical files from your institution for this reproduction.

`config/source_hashes.json` identifies the exact compressed files used. Generation stops if their SHA-256 hashes differ. The source files are not automatically downloaded.

## 2. Create the Python environment

Use Python 3.10.16 and the package versions in `requirements.txt` for the closest match. Node.js is also needed for the calculation-worker replay. No npm install is required; the frozen bundles include their dependencies and notices.

```sh
python -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python scripts/generate_cases.py --source /path/to/IEVNet/sample_data --output /path/to/new/cases
.venv/bin/python scripts/run_validation.py --cases-root /path/to/new/cases --output /path/to/new/validation
```

On Windows, use `.venv\Scripts\python.exe`. Change only the input/output paths. Existing nonempty output folders are refused. Generation writes local synthetic DICOM, NIfTI, CSV and QC images. It does not publish them. Each case is generated in a fresh child process to isolate random seeds and settings.

Do not run the base `make_synthetic_case.py` alone to reproduce the paper. Its older default partition is replaced by the version-4 reference geometry in `generate_cases.py`.

## 3. What is checked

The runner uses the frozen 1.3.1 calculation engine and worker, supplies the designed four center points, and leaves automatic localization disabled. It then replays the actual recorded two-plane deletions. It compares 32 region-condition rows (16 before and 16 after editing) with the supplied results, and checks PPI, PEI, MRC and HYDROPS against independent SimpleITK DICOM reading within 0.001. Manual polygons are provided to reproduce these results; they do not measure independent editing reproducibility. The runner is not a test of browser UI behavior or a repeat of browser timing.

DICOM UIDs, dates and ZIP metadata may change during regeneration. Compare voxel arrays, geometry and numerical results, not regenerated DICOM/ZIP file hashes. `results/browser_processing_time.csv` records the original browser timing runs.

## Files and definitions

- `METHODS.md`: signal values, noise, grids, shape rules and reference definitions.
- `config/cases.json`: all four designed fractions, seeds and cochlear model.
- `reference/reference_annotations.npz`: four label masks and their affines, without MRI intensity arrays. `painted_R/L` separates the cochlea and vestibule on a 0.5-mm grid; `crus_tube_R/L` excludes canal/common-crus voxels on the 0.2-mm source grid. The actual paper partition also intersects fluid and applies the fixed rim rule in `reference_geometry.py`.
- `reference/SYN-00x_edits.json`: editing polygons in the application's voxel index coordinates, replayed in order.
- `results/region_results.csv`: `before` is automatic extraction; `after` is the final manual editing used for the paper. `designed_endo_mm3` is a legacy column name for the actual placed ELS reference volume, not the requested design fraction multiplied by total volume. Ratios are percentages and `diff_pt` is in percentage points. `dice` and `centroid_err_mm` concern total fluid labels, not ELS-only labels.
- `results/ground_truth.csv`: placed ELS reference volumes and the final-image negative-voxel reference ratio. Requested fractions are in `config/cases.json`.
- `results/boundary_sensitivity.csv`: automatic extraction with the stated threshold/radius changes; these are not edited final results.
- `runtime/artifacts`: the frozen calculation bundles; use the same third-party notices as the application.

The original ELH Studio code uses the research terms in `../TERMS.md`; redistribution requires prior permission. Third-party source-derived material keeps its applicable license. See `../THIRD_PARTY_NOTICES.txt`.

## 日本語

公開IE-Vnetの左右2画像を別途取得し、指定した環境で `generate_cases.py` を実行すると4症例を手元で再生成できます。参照ラベルはMRI画素を含まないNPZとして同梱しています。`run_validation.py` は検証済み計算コードと実際の削除輪郭を使い、自動・最終編集後の32組の数値と4種の画像値を再照合します。生成物は既存の合成症例フォルダへ上書きしないでください。
