# DACE Lesson Build Checklist - L15

**Purpose:** Repeatable checklist for building new lessons (L09+)  
**Usage:** Copy this checklist for each new lesson and check off as you complete

---

## Lesson Info (fill in first)

- **Lesson Number:** L15
- **Topic:** User Preferences and System Settings
- **Badge Level:** [ ] Discover | [X] Define | [ ] Deliver
- **Competency Code:** 2F (User Preferences and System Settings)
- **Outcomes Covered:** 2F.01, 2F.02, 2F.03
- **Delivery Format:** [x] In-person 45-60 min | [ ] Online 30-45 min

---

## Quick Links

### Planning Documents (Phase 1)
| Document | Status | Link |
|----------|--------|------|
| Learning Objectives | ✅ | [L15_user_preferences_learning_objectives.md](./knowledge-base/curriculum-development/L15_user_preferences_learning_objectives.md) |
| Lesson Plan | ✅ | [L15_user_preferences_lesson_plan.md](./knowledge-base/curriculum-development/L15_user_preferences_lesson_plan.md) |
| Figma Build Guide | ✅ | [L15_user_preferences_figma_build_guide.md](./knowledge-base/curriculum-development/L15_user_preferences_figma_build_guide.md) |
| Quiz Questions | ✅ | [L15_Quiz_Questions.md](./L15_Quiz_Questions.md) |

### Implementation Files (Phase 2)
| Document | Status | Link |
|----------|--------|------|
| Canvas Page | ✅ | [L15-user-preferences.html](../../canvas-pages/L15-user-preferences.html) |
| Quiz QTI | ⬜ | [L15_User_Preferences_Quiz_QTI.zip](./L15_User_Preferences_Quiz_QTI.zip) *(to create)* |

### Reference Files
| Document | Link |
|----------|------|
| Outcomes CSV | [DACE_outcomes_canonical.csv](../canvas/DACE_outcomes_canonical.csv) |
| Canvas Template (L01) | [L01-accessible-names.html](../../canvas-pages/L01-accessible-names.html) |
| Canvas Template (L03) | [L03-color.html](../../canvas-pages/L03-color.html) |
| Content Creation Process | [DACE_Content_Creation_Process.md](../DACE_Content_Creation_Process.md) |
| L14 Canvas Page (predecessor) | [L14-windows-high-contrast.html](../../canvas-pages/L14-windows-high-contrast.html) |

---

## Phase 1: Planning Documents

Create these files in [knowledge-base/curriculum-development/](./knowledge-base/curriculum-development/)

### 1.1 Learning Objectives
- [x] Create [L15_user_preferences_learning_objectives.md](./knowledge-base/curriculum-development/L15_user_preferences_learning_objectives.md)
- [x] Include badge level and delivery format
- [x] List all outcomes with Knowledge/Skills/Application breakdown
- [x] Map to WCAG Success Criteria
- [x] Verify outcome IDs against [DACE_outcomes_canonical.csv](../canvas/DACE_outcomes_canonical.csv)

### 1.2 Lesson Plan
- [x] Create [L15_user_preferences_lesson_plan.md](./knowledge-base/curriculum-development/L15_user_preferences_lesson_plan.md)
- [x] Define section-by-section timing (must total lesson duration)
- [x] Write key teaching points for each section
- [x] Include discussion prompts and activity instructions
- [x] Note connections to other lessons (within same badge level only)

### 1.3 Figma Build Guide
- [x] Create [L15_user_preferences_figma_build_guide.md](./knowledge-base/curriculum-development/L15_user_preferences_figma_build_guide.md)
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
- [x] Create [L15_Quiz_Questions.md](./L15_Quiz_Questions.md)
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
- [x] Create [L15-user-preferences.html](../../canvas-pages/L15-user-preferences.html)
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
- [ ] Generate QTI export from quiz questions
- [ ] Save to [L15_User_Preferences_Quiz_QTI.zip](./L15_User_Preferences_Quiz_QTI.zip)

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
- [ ] Gather inputs for Notebook LM:
  - Lesson text (from Canvas page or lesson plan)
  - Figma Build Guide (full content)
  - Learning objectives document

### 4.2 Generate Video
- [ ] Create audio overview in Notebook LM
- [ ] Download/export video file
- [ ] Upload to Vimeo (or hosting platform)
- [ ] Get embed URL

### 4.3 Captions
- [ ] Download auto-generated captions (.vtt file)
- [ ] Review captions for accuracy (especially technical terms)
- [ ] Save to archive folder

### 4.4 Update Canvas Page
- [ ] Add video embed URL to Canvas page
- [ ] Rebuild: `npm run build`

---

## Phase 5: Canvas LMS Setup

### 5.1 Module
- [ ] Create module in Canvas (or add to existing week module)
- [ ] Set module position in course navigation

### 5.2 Lesson Page
- [ ] Create new page in Canvas
- [ ] Copy content from `canvas-pages/L15-user-preferences.html` (body content only)
- [ ] Verify formatting renders correctly
- [ ] Add to module

### 5.3 Quiz
- [ ] Import QTI package OR create quiz manually
- [ ] Set quiz settings:
  - Points per question
  - Allowed attempts
  - Time limit (if any)
- [ ] Link quiz to outcomes in Canvas
- [ ] Add to module

### 5.4 Applied Practice Assignment (if applicable)
- [ ] Create assignment page
- [ ] Set rubric
- [ ] Set due date
- [ ] Add to module

### 5.5 Publish
- [ ] Review all items in module
- [ ] Publish module and all items

---

## Phase 6: Archive Deliverables

All archive materials stay within this lesson folder.

### 6.1 Screenshots
- [ ] Canvas lesson page screenshot
- [ ] Canvas quiz/knowledge check screenshot
- [ ] Canvas module overview screenshot
- [ ] DACE site learning objectives page screenshot (if applicable)

### 6.2 Files to Archive
- [ ] Explainer video captions (.vtt)
- [ ] Exported Figma slides (images)
- [ ] Canvas page screenshots
- [ ] DACE site screenshots

### Archive Folder Structure
📁 [15-user-preferences/](./)
```
├── knowledge-base/
│   └── curriculum-development/
├── Explainer-videos/
│   └── L15_user_preferences_en-x-autogen.vtt
├── Canvas-Screens/
│   ├── lesson-15-canvas-page.png
│   ├── lesson-15-knowledge-check.png
│   └── lesson-15-module.png
├── Figma-Screens/
│   └── (exported slide images)
├── L15_Quiz_Questions.md
└── L15_Build_Checklist.md
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
- [ ] All files in correct locations
- [ ] Archive folder populated
- [ ] Canvas module published

---

## Quick Reference: File Locations

| Deliverable | Link |
|-------------|------|
| Learning Objectives | [L15_user_preferences_learning_objectives.md](./knowledge-base/curriculum-development/L15_user_preferences_learning_objectives.md) |
| Lesson Plan | [L15_user_preferences_lesson_plan.md](./knowledge-base/curriculum-development/L15_user_preferences_lesson_plan.md) |
| Figma Build Guide | [L15_user_preferences_figma_build_guide.md](./knowledge-base/curriculum-development/L15_user_preferences_figma_build_guide.md) |
| Quiz Questions | [L15_Quiz_Questions.md](./L15_Quiz_Questions.md) |
| Canvas Page | [L15-user-preferences.html](../../canvas-pages/L15-user-preferences.html) |
| Quiz QTI | [L15_User_Preferences_Quiz_QTI.zip](./L15_User_Preferences_Quiz_QTI.zip) |
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
