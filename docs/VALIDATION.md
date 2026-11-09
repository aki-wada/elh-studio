# Technical validation

These checks assess implementation and synthetic measurements. Clinical performance, agreement with independent expert measurements, and observer reproducibility were not evaluated.

## Images and reference definitions

Four synthetic cases share the same source anatomy: the left and right SPACE crops from one subject in the public IE-Vnet sample data. PPI and PEI contrasts and ELS shapes were synthesized. Source-derived MRC signal and anatomy remain in the generated images. The cases are not four independent subjects.

There are 16 regions: four cases × two ears × two structures (cochlea and vestibule). One author made the reference labels and performed manual editing. The vestibular labels include ampullae and exclude canal tubes and the common crus.

The reference ELS volume is the placed endolymph volume on the 0.2-mm source grid. The reference ELS ratio is the percentage of negative HYDROPS voxels within the reference total-fluid label on the final 0.5 × 0.5 × 1.0-mm grid. These references differ from the requested design fraction. The final reference ratio differs from that fraction by −3.4 to +0.8 percentage points. Partial volume, noise and label-grid boundaries probably contribute.

## Final measurements after manual editing

Differences are ELH Studio minus the stated reference. Each structure has eight regions.

| Measure | Cochlea | Vestibule |
| --- | --- | --- |
| Mean ELS volume difference | −0.5 mm³ | +4.8 mm³ |
| Individual ELS volume difference range | −3.6 to +2.4 mm³ | +0.1 to +12.5 mm³ |
| Mean ELS ratio difference | +2.5 percentage points | +0.1 percentage points |
| Individual ELS ratio difference range | −1.0 to +6.4 points | −1.3 to +2.9 points |

Across 16 regions, final total-fluid Dice coefficients were 0.80–0.84 and centroid distances were 0.68–1.34 mm. These Dice values concern the total fluid regions (endolymph plus perilymph), not ELS-only segmentation. The mean ratio difference across all regions was +1.3 percentage points. Mean differences can conceal individual errors; all region-level results are provided.

Before manual editing, mean ratio differences were +22.0 points in the cochlea and +2.6 in the vestibule. Total-fluid Dice coefficients were 0.69–0.83 and centroid distances were 0.93–1.55 mm. Editing mainly removed internal auditory canal signal. All four right vestibular regions were unchanged. The recorded edits reproduce the evaluated corrections; they do not test whether another user would make the same edits.

## Voxel values

In all four cases, 100% of exported PPI, PEI, MRC and HYDROPS voxels agreed with an independent SimpleITK/GDCM reading within 0.001 after world-coordinate alignment. HYDROPS-Mi2 was not compared. The generator's auxiliary HYDROPS_Mi2 NIfTI uses a display scale of 1/1000; the application exports the unscaled product. Do not compare these Mi2 arrays as if their scales were identical.

## Processing time

Three browser runs per case gave medians of 2.463, 2.471, 2.503 and 2.484 s. The longest run was 2.808 s. This was the total of DICOM scanning, loading/calculation, and extraction/ratio display for both ears and all four regions. It used known center points with automatic localization disabled. User interaction, pauses between steps and manual editing were excluded. Environment: Google Chrome 156 in headless mode, Apple M2 Max. These times do not represent the full human workflow or a single-ear measurement.

The Node replay supplied for reproducibility uses the same calculation worker. Its running time must not be substituted for the browser measurements.

## Limits

The cases share one anatomy and use simple ELS shapes. Agreement limits are descriptive. Clinical ears, other scanners and protocols, postoperative changes and malformations need further study. No ELS-only Dice or diagnostic sensitivity/specificity was measured. Automatic localization uses a separate public VS-SEG-derived average and was disabled in these synthetic checks. LUMEN was outside this main evaluation.
