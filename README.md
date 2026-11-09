# ELH Studio

[日本語](README.ja.md)

ELH Studio is a browser-based research tool for measuring the volume and volume ratio of the endolymphatic space (ELS) in the cochlea and vestibule. ELH means endolymphatic hydrops.

The application runs offline as one HTML file in Google Chrome. It creates HYDROPS images from PPI and PEI, extracts the total fluid regions of both ears, and counts negative HYDROPS voxels within each region as ELS. Users can review the images, adjust center points and remove unwanted signal before saving results.

**Research use only.** Clinical performance has not been established. Please read [the terms](TERMS.md); redistribution requires prior permission from the developers.

## Start

Download the repository as a ZIP and extract it. Open `app/ELH_Studio.html` in Google Chrome. On Windows, `app/Start_ELH.bat` can open it in Chrome. No Python, Node.js or server is needed to use the application.

See [Quick start](docs/QUICKSTART.md), the [English manual](docs/Operation_Manual_EN.pdf), and [dated manual updates](docs/MANUAL_UPDATES.md). Choose Japanese or English in the application.

## Inputs and outputs

The main workflow uses PPI, PEI and MRC DICOM series on the same grid. The tool exports images and region labels as NIfTI, measurements as CSV, settings as JSON and review images as PNG, in a ZIP that can be reopened.

Other input modes and the experimental LUMEN module are described in the manual. They were not the main evaluation in the Technical Note.

## Technical evaluation

In four synthetic cases (16 cochlear/vestibular regions), the final mean ELS volume differences after manual editing were −0.5 mm³ in the cochlea and +4.8 mm³ in the vestibule. Mean ELS volume ratio differences were +2.5 and +0.1 percentage points. Total-fluid Dice coefficients were 0.80–0.84. These are technical results from one source anatomy, not clinical validation.

Read [Validation](docs/VALIDATION.md) for reference definitions, individual error ranges, timing conditions and limits. [Reproducibility materials](reproducibility/README.md) include generation code, settings, reference annotations, recorded edits and numerical results. Synthetic DICOM/NIfTI case bundles and original source MRI volumes are not distributed here.

## Data sources and citation

The automatic-localization template is an average of six public VS-SEG cases and their mirrors. The LUMEN cochlear skeleton is derived from IE-Map. Evaluation anatomy comes from the public IE-Vnet sample data. Source-derived material is not wholly artificial. See [third-party notices](THIRD_PARTY_NOTICES.txt).

Cite the software using [CITATION.cff](CITATION.cff) and state version 1.3.1. The related manuscript is in preparation; no publication DOI or accepted conference citation is assigned here.

Report reproducible issues through this repository when available. Include the app version, browser and steps, and omit patient images and identifying information.
