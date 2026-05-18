# B2 Stimulus Images

Stimulus images are stored in `../stimuli/` (the define-badge-assessment stimuli folder, referenced by B2_Final_Assessment_Questions.md).

When building the QTI zip, images are copied from `../stimuli/` into this folder so the package includes them. Run the package script from the qti-export directory.

## TODO: Missing stimuli

The B2 `imsmanifest.xml` references two PNGs that were not present in Cohort 1
when we migrated the rest of the B2 stimuli on 2026-05-18. Export these from
Figma (or regenerate from `B2_Final_Assessment_Questions.md`) before rebuilding
the B2 QTI zip:

- `2b-01-stimulus.png`
- `2c-02-stimulus.png`

Cohort 1 source we did pull from:
`/Users/dsian/Documents/Cursor/DACE-training-cohort-1/project-documents/00-badges/define-badge-assessment/qti-export/stimuli/`
