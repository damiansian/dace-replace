# Badge 1 Final Assessment: Annotation Examples Tracker

**Purpose:** Track which annotation examples exist vs need to be created for each assessment question.

**Status Key:**
- ✅ **Exists** - Image/example already available
- 🔄 **Adapt** - Existing material can be adapted
- ❌ **Create** - Needs to be created from scratch

---

## Summary

| Checklist Area | Questions | Existing | Adapt | Create |
|----------------|-----------|----------|-------|--------|
| Accessible Names | 4 | 0 | 2 | 2 |
| Headings | 2 | 0 | 1 | 1 |
| Color | 3 | 2 | 1 | 0 |
| Forms & Errors | 3 | 0 | 1 | 2 |
| Keyboard & Touch | 4 | 2 | 1 | 1 |
| Reflow & Zoom | 3 | 0 | 1 | 2 |
| Landmarks & Navigation | 3 | 0 | 1 | 2 |
| Motion | 3 | 0 | 0 | 3 |
| **Total** | **25** | **4** | **8** | **13** |

---

## Detailed Tracker by Question

### L01: Accessible Names (4 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 1 | 1A.01 | Annotation showing unclear accessible name (e.g., button labeled "Click here") | 🔄 Adapt | Could adapt from L01 Figma slides (01-accessible-names/figma exports/) |
| 2 | 1A.02 | Annotation incorrectly marking functional icon as decorative | ❌ Create | Need: icon button marked "decorative" when it's actually interactive |
| 3 | 1A.03 | Annotation with verbose name (e.g., "Submit button" instead of "Submit") | 🔄 Adapt | Could adapt from L01 quiz stimulus images |
| 4 | 1A.05 | Annotation specifying aria-label when visible label would suffice | ❌ Create | Need: form field with visible label but annotation adds redundant aria-label |

**Potential sources:**
- `project-documents/01-accessible-names/figma exports/` (47 Figma slide images)
- `project-documents/01-accessible-names/quizzes/q2-stimulus.png` through `q5-stimulus.png`

---

### L02: Headings (2 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 5 | 1B.01 | Annotation showing H1 → H3 (skipped H2) | 🔄 Adapt | Could adapt from L02 Figma slides |
| 6 | 1B.02 | Annotation specifying "H3" for Android when TalkBack only supports heading/not-heading | ❌ Create | Need: annotation with heading level for Android-specific design |

**Potential sources:**
- `project-documents/02-content-structure/Figma-export-headings/` (if exists)

---

### L03: Color (3 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 7 | 1C.01 | Annotation testing wrong contrast pair (e.g., button fill vs background instead of text vs fill) | ✅ Exists | `project-documents/03-color/qti-export/images/button_contrast.png` |
| 8 | 1C.02 | Status indicators using color only (red/green/yellow without icons/text) | ✅ Exists | `project-documents/03-color/qti-export/images/status_badges.png` |
| 9 | 1C.03 | Testing approach scenario (no image needed, text-based question) | 🔄 Adapt | Can use similar format to L03 Quiz Q5 |

**Potential sources:**
- `project-documents/03-color/qti-export/images/` (5 quiz stimulus images)
- `project-documents/03-color/Canvas-build-images/` (6 images)
- `project-documents/03-color/image-gen/` (5 PNG files)

---

### L04: Forms & Errors (3 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 10 | 1D.01 | Form field annotation missing label specification | 🔄 Adapt | Could adapt from L03/L04 combined project stimulus |
| 11 | 1D.02 | Error state annotation that only changes border color (no text/icon) | ❌ Create | Need: form with red border but no error message annotation |
| 12 | 1D.03 | Email field annotation without autocomplete="email" specification | ❌ Create | Need: form field annotation missing input purpose |

**Potential sources:**
- `project-documents/04-forms-errors/q2-stimulus.png`
- L03/L04 Combined Project Rubric mentions "Invite people to project" modal

---

### L05: Keyboard & Touch (4 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 13 | 1E.01 | Custom slider without keyboard interaction spec | ✅ Exists | `project-documents/05-keyboard-touch/Quiz/keyboard-q1-stimulus.png` or similar |
| 14 | 1E.02 | Focus indicator annotation with 1px outline (below 2px minimum) | ✅ Exists | Could use `keyboard-q2-stimulus.png` |
| 15 | 1E.03 | Touch target annotation showing 40x40px (below 44x44 minimum) | 🔄 Adapt | Could adapt from L05 Figma slides |
| 16 | 1E.04 | Modal with focus trap issue or hidden content in reading order | ❌ Create | Need: modal annotation without focus containment spec |

**Potential sources:**
- `project-documents/05-keyboard-touch/Quiz/` (5 stimulus images)
- `project-documents/05-keyboard-touch/qti-export/` (5 stimulus images)
- `project-documents/05-keyboard-touch/Keyboard Figma Images/` (39 Figma slides)

---

### L06: Reflow & Zoom (3 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 17 | 1F.01 | Two-column layout annotation without reflow spec | 🔄 Adapt | Could adapt from L06 Figma slides |
| 18 | 1F.02 | Text container with fixed height annotation | ❌ Create | Need: component annotation with height in px that would clip text |
| 19 | 1F.03 | Portrait-locked design (determine if legitimate exception) | ❌ Create | Need: design locked to portrait (e.g., piano app vs standard form) |

**Potential sources:**
- `project-documents/06-reflow-zoom/knowledge-base/reflow lesson from figma images/` (if populated)

---

### L07: Landmarks & Navigation (3 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 20 | 1G.01 | Page with multiple nav regions but none labeled | 🔄 Adapt | Could adapt from L07 Figma slides |
| 21 | 1G.02 | Two page states with nav items in different order | ❌ Create | Need: side-by-side showing inconsistent navigation |
| 22 | 1G.03 | Page annotation without skip link specification | ❌ Create | Need: full page layout missing bypass mechanism |

**Potential sources:**
- L07 Figma slides (if available)

---

### L08: Motion (3 questions)

| Q# | Outcome | Example Needed | Status | Source/Notes |
|----|---------|----------------|--------|--------------|
| 23 | 1H.01 | Animation annotation without prefers-reduced-motion alternative | ❌ Create | Need: animation spec without reduced motion note |
| 24 | 1H.02 | Auto-playing carousel without pause control annotation | ❌ Create | Need: carousel annotation missing pause/stop controls |
| 25 | 1H.03 | Animated illustration without static alternative spec | ❌ Create | Need: animation annotation without equivalent static version |

**Potential sources:**
- L08 Figma slides (if available)
- May need to create all motion examples as this is less commonly documented

---

## Creation Guidelines

When creating new annotation examples:

### Visual Style
- Match Stark/Figma annotation visual language
- Use consistent colors (purple for annotations, as per Discover Badge)
- Clear, readable text at standard screen sizes
- Focus on single issue per example

### Content Requirements
- Realistic UI elements (buttons, forms, navigation, etc.)
- Adobe-style design patterns where possible
- Clear enough that the issue is identifiable but not obvious
- Isolated issue (don't combine multiple problems)

### File Format
- PNG format, 72 DPI minimum
- Dimensions: approximately 800x600px or appropriate for content
- Filename: `b1-q##-[topic].png` (e.g., `b1-q07-contrast.png`)

---

## Next Steps

1. [ ] Review existing stimulus images to confirm usability
2. [ ] Gather real annotation examples from project reviews (with permission)
3. [ ] Create remaining examples following guidelines above
4. [ ] Save all examples to `annotation-examples/` folder
5. [ ] Update this tracker as examples are completed

---

*Last updated: January 2026*
