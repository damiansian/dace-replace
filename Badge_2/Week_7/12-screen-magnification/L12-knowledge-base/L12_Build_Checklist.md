# DACE Lesson Build Checklist - L12

**Purpose:** Repeatable checklist for building new lessons (L09+)  
**Usage:** Copy this checklist for each new lesson and check off as you complete

---

## Lesson Info (fill in first)

- **Lesson Number:** L12
- **Topic:** Screen Magnification
- **Badge Level:** [ ] Discover | [X] Define | [ ] Deliver
- **Competency Code:** 2C (Screen Magnification)
- **Outcomes Covered:** 2C.01, 2C.02, 2C.03
- **Delivery Format:** [x] In-person 45-60 min | [ ] Online 30-45 min

---

## Quick Links

### Planning Documents (Phase 1)
| Document | Status | Link |
|----------|--------|------|
| Learning Objectives | ✅ | [L12_screen_magnification_learning_objectives.md](./knowledge-base/curriculum-development/L12_screen_magnification_learning_objectives.md) |
| Lesson Plan | ✅ | [L12_screen_magnification_lesson_plan.md](./knowledge-base/curriculum-development/L12_screen_magnification_lesson_plan.md) |
| Figma Build Guide | ✅ | [L12_screen_magnification_figma_build_guide.md](./knowledge-base/curriculum-development/L12_screen_magnification_figma_build_guide.md) |
| Quiz Questions | ✅ | [L12_Quiz_Questions.md](./L12_Quiz_Questions.md) |

### Implementation Files (Phase 2)
| Document | Status | Link |
|----------|--------|------|
| Canvas Page | ✅ | [L12-screen-magnification.html](../../canvas-pages/L12-screen-magnification.html) |
| Quiz QTI | ✅ | [qti-export/L12_screen_magnification_quiz.zip](./qti-export/L12_screen_magnification_quiz.zip) |

### Reference Files
| Document | Link |
|----------|------|
| Outcomes CSV | [DACE_outcomes_canonical.csv](../canvas/DACE_outcomes_canonical.csv) |
| Canvas Template (L01) | [L01-accessible-names.html](../../canvas-pages/L01-accessible-names.html) |
| Canvas Template (L03) | [L03-color.html](../../canvas-pages/L03-color.html) |
| Content Creation Process | [DACE_Content_Creation_Process.md](../DACE_Content_Creation_Process.md) |
| L11 Canvas Page (predecessor) | [L11-sr-navigation-patterns.html](../../canvas-pages/L11-sr-navigation-patterns.html) |

---

## Phase 1: Planning Documents

Create these files in [knowledge-base/curriculum-development/](./knowledge-base/curriculum-development/)

### 1.1 Learning Objectives
- [x] Create [L12_screen_magnification_learning_objectives.md](./knowledge-base/curriculum-development/L12_screen_magnification_learning_objectives.md)
- [x] Include badge level and delivery format
- [x] List all outcomes with Knowledge/Skills/Application breakdown
- [x] Map to WCAG Success Criteria
- [x] Verify outcome IDs against [DACE_outcomes_canonical.csv](../canvas/DACE_outcomes_canonical.csv)

### 1.2 Lesson Plan
- [x] Create [L12_screen_magnification_lesson_plan.md](./knowledge-base/curriculum-development/L12_screen_magnification_lesson_plan.md)
- [x] Define section-by-section timing (must total lesson duration)
- [x] Write key teaching points for each section
- [x] Include discussion prompts and activity instructions
- [x] Note connections to other lessons (within same badge level only)

### 1.3 Figma Build Guide
- [x] Create [L12_screen_magnification_figma_build_guide.md](./knowledge-base/curriculum-development/L12_screen_magnification_figma_build_guide.md)
- [x] Define deck structure overview table (sections, frames, timing, outcomes)
- [x] Write frame-by-frame specifications:
  - Frame number and type
  - Layout description
  - Headline and content
  - Visual elements
  - Speaker notes
- [x] Use correct badge color:
  - Discover: `#5151D3` (purple)
  - Define: `#FF6B6B` (coral)
  - Deliver: `#51CF66` (green)
- [x] Frame dimensions: 1440 x 900

### 1.4 Quiz Questions
- [x] Create [L12_Quiz_Questions.md](./L12_Quiz_Questions.md)
- [x] Write 5 questions (standard) or number specified in lesson plan
- [x] Include for each question:
  - Question stem
  - Answer options (A-D)
  - Correct answer
  - Outcome ID mapping
  - Rationale for correct answer
- [x] Balance question types (recall, application, scenario)

---

## Phase 2: Implementation (Cursor)

### 2.1 Canvas Page
- [x] Create [L12-screen-magnification.html](../../canvas-pages/L12-screen-magnification.html)
- [x] Use [L11](../../canvas-pages/L11-sr-navigation-patterns.html) as template
- [x] ALL styles must be inline (no external CSS)
- [x] Include sections:
  - Header with lesson title and badge pills
  - Introduction paragraph
  - Lesson Activities table (Figma link, Applied Skill, Quiz)
  - Explainer video embed (placeholder until video ready)
  - Learning Objectives with outcomes table
  - Knowledge/Skills/Application objectives lists
  - Key Concepts section
  - WCAG Reference section
  - Resources section
- [x] Verify all links work
- [x] Run `npm run build` to copy to `/dist/canvas-pages/`

### 2.2 Quiz QTI Package (if needed for Canvas import)
- [x] Generate QTI export from quiz questions
- [x] Save to [qti-export/L12_screen_magnification_quiz.zip](./qti-export/L12_screen_magnification_quiz.zip)

---

## Phase 3: Figma Slide Deck

### 3.1 Build Slides
- [x] Open DACE Figma file
- [x] Create new page for lesson
- [x] Build frames following Figma Build Guide
- [x] Use existing components from design system
- [x] Include learning objective pills on relevant frames

### 3.2 Export Slides
- [x] Export all frames as JPG or PNG
- [x] Save to lesson folder or week archive folder

---

## Phase 4: Explainer Video (Notebook LM)

### 4.1 Prepare Context
- [x] Gather inputs for Notebook LM:
  - Lesson text (from Canvas page or lesson plan)
  - Figma Build Guide (full content)
  - Learning objectives document

### 4.2 Generate Video
- [x] Create audio overview in Notebook LM
- [x] Download/export video file
- [x] Upload to Vimeo (or hosting platform)
- [x] Get embed URL

### 4.3 Captions
- [x] Download auto-generated captions (.vtt file)
- [x] Review captions for accuracy (especially technical terms)
- [x] Save to archive folder

### 4.4 Update Canvas Page
- [x] Add video embed URL to Canvas page
- [x] Rebuild: `npm run build`

---

## Phase 5: Canvas LMS Setup

### 5.1 Module
- [x] Create module in Canvas (or add to existing week module)
- [x] Set module position in course navigation

### 5.2 Lesson Page
- [x] Create new page in Canvas
- [x] Copy content from `canvas-pages/L12-screen-magnification.html` (body content only)
- [x] Verify formatting renders correctly
- [x] Add to module

### 5.3 Quiz
- [x] Import QTI package OR create quiz manually
- [x] Set quiz settings:
  - Points per question
  - Allowed attempts
  - Time limit (if any)
- [x] Link quiz to outcomes in Canvas
- [x] Add to module

### 5.4 Applied Practice Assignment (if applicable)
- [x] Create assignment page
- [x] Set rubric
- [x] Set due date
- [x] Add to module

### 5.5 Publish
- [x] Review all items in module
- [x] Publish module and all items

---

## Phase 6: Archive Deliverables

All archive materials stay within this lesson folder.

### 6.1 Screenshots
- [x] Canvas lesson page screenshot
- [x] Canvas quiz/knowledge check screenshot
- [x] Canvas module overview screenshot
- [ ] DACE site learning objectives page screenshot (if applicable)

### 6.2 Files to Archive
- [x] Explainer video captions (.vtt)
- [x] Exported Figma slides (images)
- [x] Canvas page screenshots
- [ ] DACE site screenshots

### Archive Folder Structure
📁 [12-screen-magnification/](./)
```
├── knowledge-base/
│   └── curriculum-development/
├── Explainer-videos/
│   └── L12_screen_magnification_en-x-autogen.vtt
├── Canvas-Screens/
│   ├── lesson-12-canvas-page.png
│   ├── lesson-12-knowledge-check.png
│   └── lesson-12-module.png
├── Figma-Screens/
│   └── (exported slide images)
├── L12_Quiz_Questions.md
└── L12_Build_Checklist.md
```

---

## Quality Checks (before marking lesson complete)

### Content Accuracy
- [x] Outcome IDs match [DACE_outcomes_canonical.csv](../canvas/DACE_outcomes_canonical.csv) exactly
- [x] WCAG citations include: SC number, level (A/AA/AAA), and name
- [x] No Define/Deliver content in Discover lessons (L01-L08)
- [x] No Discover content in Define/Deliver lessons

### Technical Requirements
- [x] Canvas HTML uses inline styles only
- [x] No em dashes or en dashes, use commas or colons
- [x] Platform-agnostic language (not "web, iOS, Android")
- [x] All links functional

### Completeness
- [ ] All 6 phases completed
- [x] All files in correct locations
- [x] Archive folder populated
- [x] Canvas module published

---

## Quick Reference: File Locations

| Deliverable | Link |
|-------------|------|
| Learning Objectives | [L12_screen_magnification_learning_objectives.md](./knowledge-base/curriculum-development/L12_screen_magnification_learning_objectives.md) |
| Lesson Plan | [L12_screen_magnification_lesson_plan.md](./knowledge-base/curriculum-development/L12_screen_magnification_lesson_plan.md) |
| Figma Build Guide | [L12_screen_magnification_figma_build_guide.md](./knowledge-base/curriculum-development/L12_screen_magnification_figma_build_guide.md) |
| Quiz Questions | [L12_Quiz_Questions.md](./L12_Quiz_Questions.md) |
| Canvas Page | [L12-screen-magnification.html](../../canvas-pages/L12-screen-magnification.html) |
| Quiz QTI | [L12_Screen_Magnification_Quiz_QTI.zip](./L12_Screen_Magnification_Quiz_QTI.zip) |
| Explainer Videos | [Explainer-videos/](./Explainer-videos/) |
| Canvas Screenshots | [Canvas-Screens/](./Canvas-Screens/) |
| Figma Screenshots | [Figma-Screens/](./Figma-Screens/) |

---

## Quick Reference: Badge Colors

| Badge | Hex Code | Use |
|-------|----------|-----|
| Discover | `#5151D3` | Purple, L01-L08, Domain 1 |
| Define | `#FF6B6B` | Coral, Domain 2 |
| Deliver | `#51CF66` | Green, Domain 3 |

---

*Last updated: March 2026*
