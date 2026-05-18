# Quiz stimulus images

Each quiz JSON file under `src/data/quizzes/` can reference a stimulus image via
`imageSrc` (path relative to `public/`) and `imageAlt` (long description). The
[`Quiz`](../../src/components/Quiz.tsx) component renders the image above the
question text and falls back to displaying the alt text as a description box if
the file is missing or fails to load.

## Expected files

Filenames mirror the QTI packages so curriculum and web stay in sync. PNGs are
exported from the cohort Figma file (`DACE---Cohort-2`) or recovered from the
QTI build folder when the binaries are available.

### L03 Color (`l03-color/`)

Source: `Badge_1/Week_2/03-color/L03-quizzes/qti_build/images/`

- `button_contrast.png` — Submit button mockup (Q1)
- `text_contrast.png` — Dashboard header text sizes (Q2)
- `graph_lines_contrast.png` — Three trend lines on a line chart (Q3)
- `required_fields.png` — Form labels in red with asterisks (Q4)
- `status_badges.png` — Active / Pending / Inactive status pills (Q5)

### L04 Forms (`l04-forms/`)

Source: `Badge_1/Week_2/04-forms-errors/L04-quizzes/qti_build/`

- `q2-stimulus.png` — Email input with envelope icon as label (Q2)

### L05 Keyboard (`l05-keyboard/`)

Source: `Badge_1/Week_3/05-keyboard-touch/L05-quizzes/qti_build/`

- `keyboard-q1-stimulus.png` — Recent uploads Blueline focus order (Q1)
- `keyboard-q2-stimulus.png` — Duplicate/Delete dropdown menu (Q2)
- `keyboard-q3-stimulus.png` — Invite people modal dialog (Q3)
- `keyboard-q4-stimulus.png` — Stark touch target results panel (Q4)
- `keyboard-q5-stimulus.png` — Tab Group component (Q5)

## Adding a new image-backed question

1. Export the stimulus from Figma at roughly 1200px wide (PNG, no transparency
   issues with the quiz card background).
2. Drop the file into the correct lesson folder above using the documented
   filename.
3. Add `imageSrc` and `imageAlt` keys to the matching question entry in the
   lesson JSON. Use the exact `alt` text already authored in the corresponding
   QTI XML so Canvas and dace-site descriptions stay aligned.
