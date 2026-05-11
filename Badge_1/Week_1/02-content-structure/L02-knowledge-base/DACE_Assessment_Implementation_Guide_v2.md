# DACE Assessment Implementation Guide v2
## Single Source of Truth for Canvas and Student Site

**Version:** 2.1
**Last Updated:** January 23, 2026
**Purpose:** Document the relationship between lessons, outcomes, rubrics, quizzes, and assignments for consistent implementation across Canvas LMS and the student-facing site.

---

## Table of Contents

1. [Program Architecture](#program-architecture)
2. [Discover Badge Schedule](#discover-badge-schedule)
3. [Lesson and Outcome Structure](#lesson-and-outcome-structure)
4. [Assessment Strategy](#assessment-strategy)
5. [Lesson Details](#lesson-details)
6. [Canvas Implementation Process](#canvas-implementation-process)
7. [Student Site Requirements](#student-site-requirements)
8. [Change Log](#change-log)

---

## Program Architecture

### Three-Badge Progression

| Badge | Focus | Domain Emphasis | Duration |
|-------|-------|-----------------|----------|
| **Discover** | Testing Foundation | Domain 1 (Fundamentals) | 5 weeks |
| **Define** | Assistive Technology Expertise | Domain 2 (AT & User Experience) | 5 weeks |
| **Deliver** | Independent Review & Leadership | Domain 3 (Leadership & Advocacy) | 5 weeks |

### Three Domains

| Domain | Weight | Description |
|--------|--------|-------------|
| **D1: Design Accessibility Fundamentals** | 40% | Core knowledge and skills for creating accessible designs |
| **D2: Assistive Technology and User Experience** | 35% | Understanding how AT users experience digital products |
| **D3: Review Leadership Compliance and Advocacy** | 25% | Leading accessibility practice and driving organizational change |

### Mastery Scale (All Assessments)

| Level | Points | Description |
|-------|--------|-------------|
| Exceeds Mastery | 4 | Demonstrates advanced understanding beyond requirements |
| Meets Mastery | 3 | Fully meets the learning outcome requirements |
| Near Mastery | 2 | Approaching competency but gaps remain |
| Below Mastery | 1 | Significant gaps in understanding or skill |

**Passing Threshold:** Meets Mastery (3) or higher on all outcomes

---

## Discover Badge Schedule

### 5-Week Structure

| Week | Lesson 1 (In-Person) | Lesson 2 (Online) |
|------|----------------------|-------------------|
| Week 1 | L01: Accessible Names | L02: Headings |
| Week 2 | L03: Color | L04: Forms & Errors |
| Week 3 | L05: Keyboard & Touch | L06: Reflow & Zoom |
| Week 4 | L07: Landmarks & Navigation | L08: Motion |
| Week 5 | Discover Badge Assessment | — |

### Delivery Format

- **In-person lessons (L01, L03, L05, L07):** 60 minutes synchronous, Figma deck, live instruction
- **Online lessons (L02, L04, L06, L08):** 30-45 minutes asynchronous, shorter format, self-paced

---

## Lesson and Outcome Structure

### Discover Badge: Lessons and Outcomes

| Lesson | Topic | Outcomes | Delivery | Duration |
|--------|-------|----------|----------|----------|
| L01 | Accessible Names | 1A.01–1A.05 (5) | In-person | 60 min |
| L02 | Headings | 1B.01–1B.02 (2) | Online | 25 min |
| L03 | Color | 1C.01–1C.03 (3) | In-person | 60 min |
| L04 | Forms & Errors | 1D.01–1D.03 (3) | Online | 45 min |
| L05 | Keyboard, Touch & Reading Order | 1E.01–1E.04 (4) | In-person | 60 min |
| L06 | Reflow & Zoom | 1F.01–1F.03 (3) | Online | 30 min |
| L07 | Landmarks & Navigation | 1G.01–1G.04 (4) | In-person | 60 min |
| L08 | Motion | 1H.01–1H.03 (3) | Online | 30 min |

**Total Discover Badge Outcomes:** 27

### Outcome Details by Lesson

#### L01: Accessible Names (1A)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1A.01 | Define accessible names and their role in AT interaction | Explain what accessible names are and how AT uses them |
| 1A.02 | Identify when accessible names are required vs optional | Determine which elements need names vs decorative |
| 1A.03 | Evaluate accessible name quality | Assess if names are clear, concise, function over form |
| 1A.04 | Specify accessible names in design annotations | Create blueline annotations for engineering |
| 1A.05 | Distinguish between visible labels and programmatic names | Know when visible text suffices vs programmatic labels |

#### L02: Headings (1B)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1B.01 | Design logical heading hierarchies | Create heading structures that convey organization and support screen reader navigation |
| 1B.02 | Recognize platform differences in heading support | Understand iOS supports heading levels while Android TalkBack treats headings as binary |

**Note:** Reading order (formerly 1B.03) has been moved to L05 as outcome 1E.04.

#### L03: Color (1C)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1C.01 | Apply WCAG color contrast requirements | Test and specify contrast ratios meeting WCAG 2.2 AA |
| 1C.02 | Identify color-only information failures | Recognize color-alone meaning without indicators |
| 1C.03 | Test designs with color blindness simulation | Use simulation tools for color vision deficiency |

#### L04: Forms & Errors (1D)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1D.01 | Specify form field labels and instructions | Design clear labels and instructional text |
| 1D.02 | Design accessible error identification | Create error states that are accessible |
| 1D.03 | Apply input purpose requirements | Specify autocomplete attributes |

#### L05: Keyboard & Touch (1E)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1E.01 | Ensure all functionality is keyboard accessible | Verify all elements reachable via keyboard |
| 1E.02 | Design visible focus indicators | Specify focus states meeting WCAG 2.2 |
| 1E.03 | Apply touch target size requirements | Design touch targets meeting minimum sizes |

#### L06: Reflow & Zoom (1F)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1F.01 | Design for 400% zoom without horizontal scroll | Create layouts that reflow at high zoom |
| 1F.02 | Ensure text spacing adjustments work | Design for increased line/letter/word spacing |
| 1F.03 | Apply orientation requirements | Ensure content works portrait and landscape |

#### L07: Landmarks & Navigation (1G)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1G.01 | Specify landmark regions appropriately | Identify and annotate landmark regions |
| 1G.02 | Design consistent navigation | Create consistent nav patterns across pages |
| 1G.03 | Specify skip links and bypass blocks | Design mechanisms to bypass repeated content |
| 1G.04 | Apply focus order requirements | Ensure logical focus order |

**Note:** L07 also covers F6 key navigation (Adobe-specific) as supplemental content.

#### L08: Motion (1H)

| ID | Outcome Title | Description |
|----|---------------|-------------|
| 1H.01 | Apply reduced motion requirements | Design for user motion preferences |
| 1H.02 | Identify pause stop hide requirements | Recognize when controls are needed |
| 1H.03 | Design motion alternatives | Create reduced-motion versions |

---

## Assessment Strategy

### Assessment Types

| Type | Purpose | How Graded | Best For |
|------|---------|------------|----------|
| **Quiz** | Test knowledge/recall | Auto-graded, per-answer feedback | Definitions, recognition, concepts |
| **Project** | Evaluate applied skills | Rubric-graded by instructor | Hands-on annotation, design work |

### Assessment-to-Outcome Alignment

- **Knowledge outcomes** (define, explain, identify) → Quiz questions
- **Skill outcomes** (create, specify, design) → Rubric-graded projects

### Assessments by Lesson

| Lesson | Quiz | Project | Total Points |
|--------|------|---------|--------------|
| L01 | 5 questions (5 pts) | Blueline Annotations (20 pts) | 25 |
| L02 | 5 questions (5 pts) | — | 5 |
| L03 | 3 questions (3 pts) | Color Audit (12 pts) | 15 |
| L04 | 5 questions (5 pts) | — | 5 |
| L05 | 3 questions (3 pts) | Focus State Design (12 pts) | 15 |
| L06 | 5 questions (5 pts) | — | 5 |
| L07 | 4 questions (4 pts) | Landmark Annotations (16 pts) | 20 |
| L08 | 5 questions (5 pts) | — | 5 |

**Note:** Online lessons (L02, L04, L06, L08) are quiz-only. In-person lessons include projects.

### Discover Badge Final Assessment (Week 5)

| Setting | Value |
|---------|-------|
| **Assessment Name** | Discover Badge Final Assessment |
| **Format** | 25 multiple choice questions, scenario-based |
| **Time Limit** | 45 minutes |
| **Open/Closed Book** | Open book (may reference checklist, WCAG, course materials) |
| **Passing Score** | 90% (23/25 correct) |
| **Points** | 25 (1 per question) |
| **Prerequisites** | Completion of all L01-L08 quizzes and applied practice projects |

**Purpose:** Cumulative assessment verifying knowledge retention across all Discover Badge content. Tests ability to recognize accessibility failures in real-world annotation examples.

**Question Distribution:**

| Checklist Area | Lessons | Outcomes | Questions |
|----------------|---------|----------|-----------|
| Accessible Names | L01 | 1A.01-1A.05 | 4 |
| Headings | L02 | 1B.01-1B.02 | 2 |
| Color | L03 | 1C.01-1C.03 | 3 |
| Forms & Errors | L04 | 1D.01-1D.03 | 3 |
| Keyboard & Touch | L05 | 1E.01-1E.04 | 4 |
| Reflow & Zoom | L06 | 1F.01-1F.03 | 3 |
| Landmarks & Navigation | L07 | 1G.01-1G.04 | 3 |
| Motion | L08 | 1H.01-1H.03 | 3 |
| **Total** | | **27 outcomes** | **25** |

**Question Types:**
- Annotation Review: "What accessibility issue does this annotation contain?"
- Missing Specification: "What needs to be added to this annotation?"
- Correct Approach: "What is the correct approach for this element?"
- WCAG Application: "Which SC does this annotation fail to address?"

**Files:**
- Specification: `project-documents/00-badges/discover-badge-assessment/B1_Final_Assessment_Specification.md`
- Question Bank: `project-documents/00-badges/discover-badge-assessment/B1_Final_Assessment_Questions.md`
- QTI Package: `project-documents/00-badges/discover-badge-assessment/qti-export/`

---

## Lesson Details

### L01: Accessible Names (Complete)

**WCAG Success Criteria:** 1.1.1, 4.1.2, 2.5.3

**Quiz Questions:**

| Q | Outcome | Topic |
|---|---------|-------|
| 1 | 1A.01 | What accessible names determine for AT |
| 2 | 1A.02 | Decorative vs interactive elements |
| 3 | 1A.03 | Function over form principle |
| 4 | 1A.04 | What to include in annotations |
| 5 | 1A.05 | Duplicate link text problem |

**Project: Blueline Annotations**

| Criterion | Outcome | Points |
|-----------|---------|--------|
| Element Identification | 1A.02 | 4 |
| Accessible Name Quality | 1A.03 | 4 |
| Annotation Clarity | 1A.04 | 4 |
| Visible vs Programmatic | 1A.05 | 4 |
| Decorative Handling | 1A.02 | 4 |
| **Total** | | **20** |

---

### L02: Headings

**WCAG Success Criteria:** 1.3.1, 2.4.6

**Quiz Questions:**

| Q | Outcome | Topic |
|---|---------|-------|
| 1 | 1B.01 | Skipped heading level problem |
| 2 | 1B.02 | Mobile platform heading differences |
| 3 | 1B.01 | Heading vs non-heading text |

**Note:** Reading order questions (formerly Q4-Q5) have been moved to L05.

**Project:** None (quiz-only lesson)

---

### L03 to L08: To Be Developed

Following the same pattern as L01 and L02.

---

## Canvas Implementation Process

### Step 1: Import Outcomes

1. Go to **Settings** > **Import Course Content**
2. Select **CSV** file type
3. Upload `DACE_outcomes_import_2.csv`
4. Verify in **Outcomes** area

### Step 2: Create Rubrics

For each lesson with a project:

1. Go to **Rubrics**
2. Click **Add Rubric**
3. Click **Find Outcome** for each criterion
4. Import outcomes from the appropriate lesson group
5. Save rubric

### Step 3: Import Quizzes

1. Go to **Settings** > **Import Course Content**
2. Select **QTI .zip file**
3. Upload lesson quiz package
4. Verify in **Quizzes**

### Step 4: Create Assignments

1. Create quiz assignment (auto-graded)
2. Create project assignment (attach rubric)
3. Set due dates and availability

### Step 5: Organize Modules

Create module for each lesson containing:
- Lesson content page
- Quiz
- Project (if applicable)

---

## Student Site Requirements

### For Each Lesson Page

1. **Header:** Lesson number, title, badge level
2. **Intro paragraph**
3. **Lesson Activities:** Links to Figma deck, project, quiz
4. **Video embed** (if available)
5. **Learning Objectives:** Outcome table with Knowledge/Skills/Application
6. **WCAG Success Criteria:** Relevant SCs with links
7. **Key Concepts:** Content sections with outcome pills
8. **Assessment:** Quiz and project details with rubric
9. **Resources:** W3C, WCAG, Adobe links
10. **Up Next:** Teaser for next lesson

### Terminology

| Term | Definition |
|------|------------|
| Lesson | Instructional session (L01, L02, etc.) |
| Outcome | Measurable learning objective (1A.01, 1B.02, etc.) |
| Quiz | Auto-graded knowledge assessment |
| Project | Hands-on work graded by rubric |

---

## Change Log

| Date | Version | Change | Author |
|------|---------|--------|--------|
| 2025-12-06 | 1.0 | Initial document | Claude + Damian |
| 2025-12-08 | 2.0 | Restructured to align lessons with outcomes | Claude + Damian |
| | | Removed Module ID confusion | |
| | | 1B now Headings (was Color) | |
| | | 1C now Color (was Content Structure) | |
| | | 1G expanded for Landmarks + Navigation | |
| | | Added in-person/online delivery pattern | |

---

*This document is the single source of truth for DACE assessment implementation. Update this document when changes are made to outcomes, assessments, or processes.*
