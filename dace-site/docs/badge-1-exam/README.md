# Badge 1 (Discover) Exam — Source Materials

Reference documents for the Discover Badge final assessment. These are the
upstream sources that drive everything in the running site: the rendered
study guide, the exam JSON, the stimulus PNGs, and the answer key.

Source repo:
`/Users/dsian/Documents/Cursor/DACE-training-cohort-1/project-documents/00-badges/discover-badge-assessment/`

## Files

- `B1_Discover_Badge_Study_Guide.md` — source of truth for the student
  study guide. The rendered HTML lives at
  `dace-site/public/badge-1/study-guide.html`. When you change the markdown
  here, update the HTML to match (or regenerate it).
- `B1_Final_Assessment_Questions.md` — full question bank with prompts,
  choices, correct answers, and rationale. Source for
  `dace-site/src/data/quizzes/b1-final-assessment.json`.
- `B1_Final_Assessment_Specification.md` — exam design spec (blueprint,
  module coverage, difficulty, item types).
- `B1_Annotation_Examples_Tracker.md` — running log of the annotation
  examples used as stimuli across the cohort.
- `qti-export/B1_Final_Assessment.xml` — QTI 2.1 XML the exam JSON was
  generated from. Re-run `npm run b1:generate` after edits.
- `qti-export/imsmanifest.xml` — IMS Content Package manifest paired with
  the QTI XML.

## Not copied

- `B1_Final_Assessment_QTI.zip` (17 MB) — redundant with the unzipped
  `qti-export/` contents.
- `qti-export/images/` (25 stimulus PNGs, 18 MB) — already served from
  `dace-site/public/quizzes/b1-final/`.

## Regenerating the exam JSON

```bash
cd dace-site
npm run b1:generate   # parses QTI + questions MD into b1-final-assessment.json
npm run b1:qa         # offline regression checks
```

## Security note

Because this folder contains the full answer key, it lives under `docs/`
rather than `public/`. Do not move it into `public/` or import its
contents into client-side bundles.
