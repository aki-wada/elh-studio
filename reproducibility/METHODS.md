# Synthetic image generation and measurement definitions

## Geometry and labels

The two public IE-Vnet source crops represent one subject. Source voxel spacing is 0.2 mm. Anatomical partitions were painted by one author on a 0.5-mm isotropic B-spline resampling, one axial section at a time. Right labels are 1 (cochlea) and 2 (vestibule); left labels are 3 and 4. The vestibule includes ampullae and excludes canal tubes and the common crus.

Source fluid is obtained by Otsu thresholding. The paintings partition this fluid, rather than define its intensity edge. Painting labels are mapped to the source grid by nearest neighbor with a fixed integer tie rule. Unpainted labyrinth fluid connected to medial fluid is assigned to CSF; other unpainted fluid remains perilymph. A single face-adjacent 0.2-mm rim layer is added to the painted fluid when it has more face contacts with that structure than the other one. Internal auditory canal components and the supplied canal/common-crus masks are excluded from this addition. Ties are not added. This is one layer, not repeated dilation. The executable details are frozen in `scripts/reference_geometry.py`.

Reference total-fluid volumes before downsampling (mm³) are right cochlea 90.40, right vestibule 84.73, left cochlea 74.70 and left vestibule 82.12.

The ELS is a band on the scala-vestibuli side of each cochlear turn and a PCA-aligned ellipsoid in the vestibule. Requested fractions are in `config/cases.json`; the actual placed volumes are in `results/ground_truth.csv`. Discrete shape construction can miss the requested fraction. For example, SYN-004 right cochlea has a placed fraction of 7.88% (7.13 mm³) for a requested 6%.

## Signal and noise

PPI/PEI base intensities in arbitrary units are:

| Class | PPI | PEI |
| --- | --- | --- |
| Perilymph | 650 | 60 |
| Endolymph | 25 | 520 |
| CSF | 40 | 130 |
| Soft tissue | 150 | 140 |
| Bone | 10 | 10 |
| Air | 3 | 3 |

MRC retains the source-crop intensities inside the crops. Fluid contrasts are modulated by source intensity divided by the labyrinth's 90th percentile, clipped to 0.45–1.15. Soft-tissue, bone and air background MRC values are 160, 10 and 3. The background outside the crops is a schematic head. See `synth_classes` and `background` in the frozen base generator for the spatial rules.

Crop contributions are block-averaged on a 0.25-mm working grid to form the 0.5 × 0.5 × 1.0-mm target grid (384 × 324 × 60). The generator adds Rician noise as `sqrt((signal + n1)^2 + n2^2)`, with independent zero-mean normal components. Sigma is 15 for MRC and 12 for PPI/PEI. Random seeds are 20261006, 20261007, 20261008 and 20261009 for SYN-001 through SYN-004. HYDROPS is PPI minus PEI after noise.

## References and errors

ELS volume error is the number of negative HYDROPS voxels in the application region × target voxel volume, minus the placed source-grid ELS volume. The ratio error is the application's negative-voxel percentage minus the negative-voxel percentage inside the reference total-fluid label on the final grid. The reference label uses at least 50% regional occupancy. It is not simply the requested ELS fraction. Dice and centroid distances compare application total-fluid labels with the nearest-neighbor aligned reference total-fluid labels in world coordinates.

Means and ranges are descriptive. If limits of agreement are calculated, use mean difference ±1.96 × sample standard deviation separately by structure; all cases share one anatomy. Manual editing and reference labeling were done by the same author.

HYDROPS-Mi2 was not part of the independent voxel comparison. The base generator's auxiliary Mi2 file is divided by 1000 for display, while the application exports the unscaled HYDROPS × MRC product.
