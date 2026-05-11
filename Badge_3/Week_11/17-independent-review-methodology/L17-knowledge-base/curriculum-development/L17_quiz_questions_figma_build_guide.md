# L17: Independent Review Methodology - Quiz Questions Figma Build Guide

**Badge Level:** Deliver
**Badge Color:** `#51CF66` (green)
**Outcomes Covered:** 3A.01, 3A.02, 3A.03
**Total Quiz Frames:** 10 (5 question frames + 5 answer reveal frames)

---

## Quiz Slide Design System

### Layout specifications
- Frame dimensions: 1440 x 900
- Background: White (#FFFFFF)
- Question number badge: Green pill (#51CF66), white text, top-left
- Outcome badge: Light green pill (#EBFBEE) with green text (#2b8a3e), top-right
- Question stem: 24px, bold, dark gray (#1a1a1a), left-aligned
- Answer options: 18px, regular weight, dark gray (#333333)
- Option labels (A, B, C, D): Green circle (#51CF66) with white letter
- Option spacing: 16px between options
- Footer: "L17: Independent Review Methodology" in 12px gray

### Answer reveal specifications
- Correct answer highlighted with green background (#EBFBEE) and green left border (#51CF66, 4px)
- Incorrect answers dimmed to 50% opacity
- Rationale text: 16px, regular weight, below the options
- Rationale container: Light gray background (#f8f9fa), 16px padding, 8px border-radius

---

## Quiz Frame Q1: Question

**Type:** Quiz question
**Outcome:** 3A.01

**Question number badge:** Q1
**Outcome badge:** 3A.01

**Stem:**
What is the primary difference between checklist testing (Badges 1 and 2) and conducting a systematic accessibility review?

**Options:**
- A. A systematic review uses automated tools instead of manual testing
- B. A systematic review assesses the full user experience holistically, looking for patterns across an entire feature flow
- C. A systematic review only checks WCAG Level AAA criteria
- D. A systematic review skips individual checklist items and relies on screen reader testing alone

---

## Quiz Frame Q1: Answer Reveal

**Type:** Answer reveal
**Correct:** B

**Rationale:**
Checklist testing evaluates individual items as pass/fail. A systematic review goes further by assessing the overall accessibility quality of a feature, identifying patterns of issues across the user journey, and considering the experience holistically rather than checking isolated elements.

---

## Quiz Frame Q2: Question

**Type:** Quiz question
**Outcome:** 3A.01

**Question number badge:** Q2
**Outcome badge:** 3A.01

**Stem:**
You have been asked to review a feature that is still in the early concept phase with low-fidelity wireframes. How should this affect your review approach?

**Options:**
- A. Decline the review because accessibility reviews can only happen on high-fidelity designs
- B. Focus on structural and interaction patterns (headings, landmarks, keyboard flows) since visual details like contrast are not yet finalized
- C. Apply the full WCAG 2.2 AA checklist to every wireframe screen
- D. Only check color contrast since that is the most common issue

---

## Quiz Frame Q2: Answer Reveal

**Type:** Answer reveal
**Correct:** B

**Rationale:**
Review fidelity determines review depth. Early concept reviews focus on structural decisions (heading hierarchy, landmark regions, keyboard interaction patterns, reading order) because visual details like exact color values and text sizing are not yet determined. Adjusting scope based on fidelity is a key skill in systematic review methodology.

---

## Quiz Frame Q3: Question

**Type:** Quiz question
**Outcome:** 3A.02

**Question number badge:** Q3
**Outcome badge:** 3A.02

**Stem:**
In the PEAS (Product Equity Advisory Sessions) process, what does the "One follow-up" outcome tier mean?

**Options:**
- A. The design has no significant issues and can proceed to implementation
- B. Minor issues were found that require scheduling one additional live review session
- C. Significant accessibility work is needed and the review becomes a project
- D. Issues need to be resolved asynchronously without another live session

---

## Quiz Frame Q3: Answer Reveal

**Type:** Answer reveal
**Correct:** B

**Rationale:**
The four PEAS outcome tiers are: Complete (no significant issues, proceed), One follow-up (minor issues, schedule one more session), Async review (issues need async follow-up, not another live session), and Project (significant work needed, becomes a dedicated project). "One follow-up" means the issues are manageable but warrant one additional synchronous review.

---

## Quiz Frame Q4: Question

**Type:** Quiz question
**Outcome:** 3A.03

**Question number badge:** Q4
**Outcome badge:** 3A.03

**Stem:**
During a review, you find these three issues: (1) A modal dialog has no keyboard trap management, so keyboard users cannot close it. (2) A secondary settings page has a color contrast ratio of 4.2:1 instead of the required 4.5:1. (3) A decorative image is missing alt="" so screen readers announce the filename. Which issue should be prioritized as the critical blocker?

**Options:**
- A. The color contrast ratio on the settings page
- B. The decorative image announcing a filename
- C. The modal dialog with no keyboard trap management
- D. All three issues are equally critical

---

## Quiz Frame Q4: Answer Reveal

**Type:** Answer reveal
**Correct:** C

**Rationale:**
The modal dialog with no keyboard trap management is a critical blocker because it prevents keyboard users from completing their task entirely. They literally cannot escape the dialog. The contrast issue (4.2:1 vs 4.5:1) is a high-impact issue but does not block task completion. The decorative image filename announcement is an improvement-level issue. Prioritization should be based on user impact, not just WCAG conformance level.

---

## Quiz Frame Q5: Question

**Type:** Quiz question
**Outcome:** 3A.03

**Question number badge:** Q5
**Outcome badge:** 3A.03

**Stem:**
A product team has limited engineering capacity and asks you which issues to fix first from your review. You found a Level A failure (missing accessible name on a rarely-used admin toggle) and a Level AA failure (poor focus visibility on the primary checkout flow used by all customers). How should you advise the team?

**Options:**
- A. Fix the Level A failure first because Level A is always higher priority than Level AA
- B. Fix the Level AA focus visibility issue first because it affects the primary flow used by all customers
- C. Fix both simultaneously since they are equally important
- D. Defer both issues to the next release cycle

---

## Quiz Frame Q5: Answer Reveal

**Type:** Answer reveal
**Correct:** B

**Rationale:**
Priority is not determined by WCAG conformance level alone. Priority equals user impact multiplied by frequency of encounter multiplied by legal risk. The focus visibility issue on the primary checkout flow affects far more users far more frequently than a missing name on a rarely-used admin toggle. The reviewer's job is to help the team fix the right things first.

---

## Badge Color Reference

| Badge | Hex Code |
|-------|----------|
| Discover | `#5151D3` |
| Define | `#FF6B6B` |
| Deliver | `#51CF66` |

---

*Last updated: March 2026*
*Version: 1.0*
