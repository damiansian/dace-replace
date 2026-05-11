# L17 Quiz Questions: Independent Review Methodology

**Lesson:** L17 - Independent Review Methodology
**Badge Level:** Deliver
**Competency:** 3A
**Outcomes:** 3A.01, 3A.02, 3A.03

---

## Question 1

**Outcome:** 3A.01
**Type:** Application

**Stem:**
> What is the primary difference between checklist testing (Badges 1 and 2) and conducting a systematic accessibility review?

- A. A systematic review uses automated tools instead of manual testing
- B. A systematic review assesses the full user experience holistically, looking for patterns across an entire feature flow
- C. A systematic review only checks WCAG Level AAA criteria
- D. A systematic review skips individual checklist items and relies on screen reader testing alone

**Correct Answer:** B
**Rationale:** Checklist testing evaluates individual items as pass/fail. A systematic review goes further by assessing the overall accessibility quality of a feature, identifying patterns of issues across the user journey, and considering the experience holistically rather than checking isolated elements.

---

## Question 2

**Outcome:** 3A.01
**Type:** Application

**Stem:**
> You have been asked to review a feature that is still in the early concept phase with low-fidelity wireframes. How should this affect your review approach?

- A. Decline the review because accessibility reviews can only happen on high-fidelity designs
- B. Focus on structural and interaction patterns (headings, landmarks, keyboard flows) since visual details like contrast are not yet finalized
- C. Apply the full WCAG 2.2 AA checklist to every wireframe screen
- D. Only check color contrast since that is the most common issue

**Correct Answer:** B
**Rationale:** Review fidelity determines review depth. Early concept reviews focus on structural decisions (heading hierarchy, landmark regions, keyboard interaction patterns, reading order) because visual details like exact color values and text sizing are not yet determined. Adjusting scope based on fidelity is a key skill in systematic review methodology.

---

## Question 3

**Outcome:** 3A.02
**Type:** Recall

**Stem:**
> In the PEAS (Product Equity Advisory Sessions) process, what does the "One follow-up" outcome tier mean?

- A. The design has no significant issues and can proceed to implementation
- B. Minor issues were found that require scheduling one additional live review session
- C. Significant accessibility work is needed and the review becomes a project
- D. Issues need to be resolved asynchronously without another live session

**Correct Answer:** B
**Rationale:** The four PEAS outcome tiers are: Complete (no significant issues, proceed), One follow-up (minor issues, schedule one more session), Async review (issues need async follow-up, not another live session), and Project (significant work needed, becomes a dedicated project). "One follow-up" means the issues are manageable but warrant one additional synchronous review.

---

## Question 4

**Outcome:** 3A.03
**Type:** Scenario

**Stem:**
> During a review, you find these three issues: (1) A modal dialog has no keyboard trap management, so keyboard users cannot close it. (2) A secondary settings page has a color contrast ratio of 4.2:1 instead of the required 4.5:1. (3) A decorative image is missing alt="" so screen readers announce the filename. Which issue should be prioritized as the critical blocker?

- A. The color contrast ratio on the settings page
- B. The decorative image announcing a filename
- C. The modal dialog with no keyboard trap management
- D. All three issues are equally critical

**Correct Answer:** C
**Rationale:** The modal dialog with no keyboard trap management is a critical blocker because it prevents keyboard users from completing their task entirely. They literally cannot escape the dialog. The contrast issue (4.2:1 vs 4.5:1) is a high-impact issue but does not block task completion. The decorative image filename announcement is an improvement-level issue. Prioritization should be based on user impact (who is blocked and how severely), not just WCAG conformance level.

---

## Question 5

**Outcome:** 3A.03
**Type:** Application

**Stem:**
> A product team has limited engineering capacity and asks you which issues to fix first from your review. You found a Level A failure (missing accessible name on a rarely-used admin toggle) and a Level AA failure (poor focus visibility on the primary checkout flow used by all customers). How should you advise the team?

- A. Fix the Level A failure first because Level A is always higher priority than Level AA
- B. Fix the Level AA focus visibility issue first because it affects the primary flow used by all customers
- C. Fix both simultaneously since they are equally important
- D. Defer both issues to the next release cycle

**Correct Answer:** B
**Rationale:** Priority is not determined by WCAG conformance level alone. Priority equals user impact multiplied by frequency of encounter multiplied by legal risk. The focus visibility issue on the primary checkout flow affects far more users far more frequently than a missing name on a rarely-used admin toggle. The reviewer's job is to help the team fix the right things first, not hand them an unsorted list ordered by WCAG level.

---

*Last updated: March 2026*
*Version: 1.0*
