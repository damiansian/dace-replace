# Discover Badge (Badge 1) Final Assessment Specification

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Discover  
**Assessment Type:** Cumulative Knowledge Check  
**Assessment Name:** Discover Badge Final Assessment  
**Points:** 25 (1 point per question)  
**Format:** Multiple choice, open book  
**Time Limit:** 45 minutes  
**Passing Score:** 85% (22/25 correct)

---

## Assessment Overview

This cumulative assessment verifies that learners have retained and can apply the knowledge from all eight Discover Badge lessons. Unlike per-lesson quizzes that test narrow topics, this assessment presents real-world annotation examples and asks learners to identify accessibility failures across all checklist areas.

### Purpose

- Verify knowledge retention across all Discover Badge content
- Test ability to recognize accessibility failures in realistic contexts
- Prepare learners for real-world design review work
- Assess readiness for Define Badge (assistive technology expertise)

### Format

- **25 scenario-based multiple choice questions**
- **Open book:** Learners may reference the Adobe Design Accessibility Checklist, WCAG documentation, and course materials
- **Fixed order:** Questions are presented in learning-objective order (1A.01 → 1H.02) so learners move through the lessons in sequence. Answer options within each question are shuffled per attempt.
- **Real-world context:** Each question presents an annotation or design example illustrating an accessibility principle

---

## Question Distribution

| Lesson | Checklist Area | Outcomes Covered | Questions |
|--------|----------------|------------------|-----------|
| L01 | Accessible Names | 1A.01, 1A.02, 1A.03, 1A.04, 1A.05 | 4 |
| L02 | Content Structure (Headings) | 1B.01, 1B.02 | 2 |
| L03 | Color | 1C.01, 1C.02, 1C.03 | 3 |
| L04 | Forms & Errors | 1D.01, 1D.02, 1D.03 | 3 |
| L05 | Keyboard & Touch | 1E.01, 1E.02, 1E.03, 1E.04 | 4 |
| L06 | Reflow & Zoom | 1F.01, 1F.02, 1F.03 | 3 |
| L07 | Landmarks & Navigation | 1G.01, 1G.02, 1G.03, 1G.04 | 3 |
| L08 | Motion | 1H.01, 1H.02, 1H.03 | 3 |
| **Total** | | **27 outcomes** | **25** |

---

## Outcome-to-Question Mapping

### L01: Accessible Names (4 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 1 | 1A.01 | Define accessible names and explain their role in AT interaction | Annotation showing unclear accessible name; identify why AT user would be confused |
| 2 | 1A.02 | Identify when accessible names are required vs optional | Annotation marking decorative element incorrectly; identify the error |
| 3 | 1A.03 | Evaluate accessible name quality | Annotation with verbose or role-including name; identify quality issue |
| 4 | 1A.05 | Distinguish visible labels vs programmatic names | Annotation specifying wrong labeling approach; identify correct method |

**Note:** 1A.04 (annotation clarity) is implicitly tested through all annotation-based questions.

### L02: Headings (2 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 5 | 1B.01 | Design logical heading hierarchies | Annotation showing skipped heading level; identify the hierarchy issue |
| 6 | 1B.02 | Recognize platform differences in heading support | Annotation specifying heading level for Android; identify platform consideration |

### L03: Color (3 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 7 | 1C.01 | Apply WCAG color contrast requirements | Annotation with incorrect contrast ratio test; identify what should be tested |
| 8 | 1C.02 | Identify color-only information failures | Design using color alone for status; identify the failure |
| 9 | 1C.03 | Test designs with color vision simulation | Testing approach question; identify correct simulation method |

### L04: Forms & Errors (3 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 10 | 1D.01 | Specify form field labels and instructions | Form annotation missing label specification; identify the gap |
| 11 | 1D.02 | Design accessible error identification | Error state annotation missing accessible communication; identify the issue |
| 12 | 1D.03 | Apply input purpose requirements | Form field without autocomplete annotation; identify what's needed |

### L05: Keyboard & Touch (4 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 13 | 1E.01 | Ensure all functionality is keyboard accessible | Interactive element missing keyboard interaction spec; identify the gap |
| 14 | 1E.02 | Design visible focus indicators | Focus indicator annotation with insufficient contrast; identify the issue |
| 15 | 1E.03 | Apply touch target size requirements | Touch target annotation below minimum size; identify the failure |
| 16 | 1E.04 | Understand reading order fundamentals | Reading order annotation with common failure pattern; identify the issue |

### L06: Reflow & Zoom (3 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 17 | 1F.01 | Design for 400% zoom without horizontal scroll | Layout annotation that would cause horizontal scroll; identify the issue |
| 18 | 1F.02 | Ensure text spacing adjustments work | Component annotation with fixed dimensions; identify why it fails text spacing |
| 19 | 1F.03 | Apply orientation requirements | Design locked to portrait; identify when this is/isn't acceptable |

### L07: Landmarks & Navigation (3 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 20 | 1G.01 | Specify landmark regions appropriately | Page annotation with missing or incorrect landmarks; identify the issue |
| 21 | 1G.02 | Design consistent navigation | Navigation annotation inconsistent across pages; identify the failure |
| 22 | 1G.03 | Specify skip links and bypass blocks | Page without skip link annotation; identify what's needed |

**Note:** 1G.04 (focus order) overlaps significantly with 1E.04 (reading order) and is covered there.

### L08: Motion (3 questions)

| Q# | Outcome | Outcome Description | Question Focus |
|----|---------|---------------------|----------------|
| 23 | 1H.01 | Apply reduced motion requirements | Animation without reduced motion alternative; identify the requirement |
| 24 | 1H.02 | Identify pause/stop/hide requirements | Auto-playing content without controls; identify what's needed |
| 25 | 1H.03 | Design motion alternatives | Animation annotation without equivalent static alternative; identify the gap |

---

## Question Types

Each question follows one of these patterns:

### Type 1: Annotation Review
> "Review this annotation. What accessibility issue does it contain?"
- Presents a real or realistic annotation screenshot/description
- Tests recognition of common annotation errors

### Type 2: Missing Specification
> "This annotation is missing a critical specification. What needs to be added?"
- Presents an incomplete annotation
- Tests knowledge of what should be documented

### Type 3: Correct Approach
> "A designer annotated this element as [X]. What is the correct approach?"
- Presents an incorrect annotation decision
- Tests ability to identify proper methods

### Type 4: WCAG Application
> "Which WCAG success criterion does this annotation fail to address?"
- Presents an annotation with a gap
- Tests mapping between design decisions and WCAG requirements

---

## Annotation Example Sources

### Real Examples (to be gathered)
- Anonymized annotations from actual project reviews
- Common patterns seen in design critiques
- Examples from learner submissions (with permission)

### Created Examples (to fill gaps)
- Mock annotations illustrating specific failure types
- Consistent visual style matching Stark/Figma annotation patterns
- Clear, focused examples that isolate single issues

### Visual Requirements
- Each annotation example should be clearly readable at standard screen sizes
- Text in annotations must be legible (minimum 12px equivalent)
- Examples should focus on the relevant issue without extraneous elements
- Consistent styling across all examples

---

## Answer Option Guidelines

Each question has exactly 4 answer options:

1. **Correct answer:** Clearly the best choice, defensible with WCAG/checklist reference
2. **Plausible distractor 1:** Common misconception or partial understanding
3. **Plausible distractor 2:** Related concept applied incorrectly
4. **Plausible distractor 3:** Superficially reasonable but fundamentally wrong

### Feedback Requirements

Each answer option includes:
- **Correct answer:** Explanation of why it's correct, with WCAG/checklist reference
- **Incorrect answers:** Explanation of the misconception and redirect to correct understanding

---

## Implementation Notes for Canvas

### Quiz Settings

| Setting | Value |
|---------|-------|
| Quiz Type | Graded Quiz |
| Points | 25 (1 per question) |
| Time Limit | 45 minutes |
| Allowed Attempts | 1 |
| Show Correct Answers | After submission |
| One Question at a Time | No (show all) |
| Shuffle Questions | No (LO order 1A.01 → 1H.02) |
| Shuffle Answers | Yes |

### Passing Criteria

- **Passing score:** 85% (22/25 correct)
- **Badge requirement:** Must pass to earn Discover Badge
- **Retake policy:** [To be determined by program policy]

### Prerequisites

- Completion of all L01-L08 quizzes
- Completion of all applied practice projects (L01/L02, L03/L04, L05/L06, L07/L08)

---

## QTI Export Requirements

For Canvas import via QTI:

- **Format:** QTI 1.2 (Canvas compatible)
- **Feedback:** Include per-answer feedback for all options
- **Images:** Embed annotation examples or reference via URL
- **Metadata:** Include outcome ID mapping for each question
- **Testing:** Validate import in Canvas sandbox before production

---

## Validation Checklist

Before deploying assessment:

- [ ] All 25 questions reviewed for accuracy against WCAG 2.2
- [ ] All answer feedback reviewed for clarity and helpfulness
- [ ] Questions correctly map to stated outcomes
- [ ] Answer options are plausible distractors (not obviously wrong)
- [ ] No trick questions or ambiguous wording
- [ ] All annotation examples are clear and readable
- [ ] Tested complete quiz flow in Canvas LMS
- [ ] Feedback displays correctly for all answer choices
- [ ] Points configured correctly (1 per question, 25 total)
- [ ] Time limit tested (45 minutes sufficient for thoughtful completion)
- [ ] Shuffle settings verified

---

## Related Documents

| Document | Purpose |
|----------|---------|
| B1_Final_Assessment_Questions.md | Complete question bank with answers and rationale |
| B1_Final_Assessment_QTI.zip | Canvas import package |
| annotation-examples/ | Image files for scenario questions |
| DACE_Assessment_Implementation_Guide_v2.md | Overall assessment structure |

---

*Last updated: January 2026*  
*Version: 1.0*  
*For: DACE Discover Badge Final Assessment*
