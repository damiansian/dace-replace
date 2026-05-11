# DACE Lesson Build Checklist - L11

**Purpose:** Repeatable checklist for building new lessons (L09+)  
**Usage:** Copy this checklist for each new lesson and check off as you complete

---

## Lesson Info (fill in first)

- **Lesson Number:** L11
- **Topic:** Screen Reader Navigation Patterns
- **Badge Level:** [ ] Discover | [X] Define | [ ] Deliver
- **Competency Code:** 2B (Screen Reader Operation, Advanced)
- **Outcomes Covered:** 2B.01, 2B.02, 2B.03
- **Delivery Format:** [x] In-person 45-60 min | [ ] Online 30-45 min

---

## Quick Links

### Planning Documents (Phase 1)
| Document | Status | Link |
|----------|--------|------|
| Learning Objectives | ✅ | [L11_sr_navigation_patterns_learning_objectives.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_learning_objectives.md) |
| Lesson Plan | ✅ | [L11_sr_navigation_patterns_lesson_plan.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_lesson_plan.md) |
| Figma Build Guide | ✅ | [L11_sr_navigation_patterns_figma_build_guide.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_figma_build_guide.md) |
| Quiz Questions | ✅ | [L11_Quiz_Questions.md](./L11_Quiz_Questions.md) |

### Implementation Files (Phase 2)
| Document | Status | Link |
|----------|--------|------|
| Canvas Page | ✅ | [L11-sr-navigation-patterns.html](../../canvas-pages/L11-sr-navigation-patterns.html) |
| Quiz QTI | ⬜ | [L11_SR_Navigation_Patterns_Quiz_QTI.zip](./L11_SR_Navigation_Patterns_Quiz_QTI.zip) *(to create)* |

### Reference Files
| Document | Link |
|----------|------|
| Outcomes CSV | [DACE_outcomes_canonical.csv](../canvas/DACE_outcomes_canonical.csv) |
| Canvas Template (L01) | [L01-accessible-names.html](../../canvas-pages/L01-accessible-names.html) |
| Canvas Template (L03) | [L03-color.html](../../canvas-pages/L03-color.html) |
| Content Creation Process | [DACE_Content_Creation_Process.md](../DACE_Content_Creation_Process.md) |
| L10 Canvas Page (predecessor) | [L10-screen-reader-fundamentals.html](../../canvas-pages/L10-screen-reader-fundamentals.html) |

---

## Phase 1: Planning Documents

Create these files in [knowledge-base/curriculum-development/](./knowledge-base/curriculum-development/)

### 1.1 Learning Objectives
- [x] Create [L11_sr_navigation_patterns_learning_objectives.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_learning_objectives.md)
- [x] Include badge level and delivery format
- [x] List all outcomes with Knowledge/Skills/Application breakdown
- [x] Map to WCAG Success Criteria
- [x] Verify outcome IDs against [DACE_outcomes_canonical.csv](../canvas/DACE_outcomes_canonical.csv)

### 1.2 Lesson Plan
- [x] Create [L11_sr_navigation_patterns_lesson_plan.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_lesson_plan.md)
- [x] Define section-by-section timing (must total lesson duration)
- [x] Write key teaching points for each section
- [x] Include discussion prompts and activity instructions
- [x] Note connections to other lessons (within same badge level only)

### 1.3 Figma Build Guide
- [x] Create [L11_sr_navigation_patterns_figma_build_guide.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_figma_build_guide.md)
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
- [x] Create [L11_Quiz_Questions.md](./L11_Quiz_Questions.md)
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
- [x] Create [L11-sr-navigation-patterns.html](../../canvas-pages/L11-sr-navigation-patterns.html)
- [x] Use [L10](../../canvas-pages/L10-screen-reader-fundamentals.html) as template
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
- [ ] Generate QTI export from quiz questions
- [ ] Save to [L11_SR_Navigation_Patterns_Quiz_QTI.zip](./L11_SR_Navigation_Patterns_Quiz_QTI.zip)

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
- [x] Copy content from `canvas-pages/L11-sr-navigation-patterns.html` (body content only)
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
- [ ] Canvas quiz/knowledge check screenshot
- [x] Canvas module overview screenshot
- [ ] DACE site learning objectives page screenshot (if applicable)

### 6.2 Files to Archive
- [x] Explainer video captions (.vtt)
- [x] Exported Figma slides (images)
- [x] Canvas page screenshots
- [ ] DACE site screenshots

### Archive Folder Structure
📁 [11-sr-navigation-patterns/](./)
```
├── knowledge-base/
│   └── curriculum-development/
├── Explainer-videos/
│   └── L11_sr_navigation_patterns_en-x-autogen.vtt
├── Canvas-Screens/
│   ├── lesson-11-canvas-page.png
│   ├── lesson-11-knowledge-check.png
│   └── lesson-11-module.png
├── Figma-Screens/
│   └── (exported slide images)
├── L11_Quiz_Questions.md
└── L11_Build_Checklist.md
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
| Learning Objectives | [L11_sr_navigation_patterns_learning_objectives.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_learning_objectives.md) |
| Lesson Plan | [L11_sr_navigation_patterns_lesson_plan.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_lesson_plan.md) |
| Figma Build Guide | [L11_sr_navigation_patterns_figma_build_guide.md](./knowledge-base/curriculum-development/L11_sr_navigation_patterns_figma_build_guide.md) |
| Quiz Questions | [L11_Quiz_Questions.md](./L11_Quiz_Questions.md) |
| Canvas Page | [L11-sr-navigation-patterns.html](../../canvas-pages/L11-sr-navigation-patterns.html) |
| Quiz QTI | [L11_SR_Navigation_Patterns_Quiz_QTI.zip](./L11_SR_Navigation_Patterns_Quiz_QTI.zip) |
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
