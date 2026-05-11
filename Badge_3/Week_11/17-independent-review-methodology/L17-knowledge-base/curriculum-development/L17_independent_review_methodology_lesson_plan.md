# L17: Independent Review Methodology - Lesson Plan

**Course:** DACE
**Badge:** Deliver
**Delivery:** In-person (instructor-led)
**Duration:** ~20 minutes (Week 11 session: 30 min review + 60 min across L17, L18, L19)
**Outcomes:** 3A.01, 3A.02, 3A.03

---

## Lesson Overview

This lesson transitions learners from accessibility testers to accessibility reviewers. They already know how to check individual items (Badges 1 and 2). Now they learn the methodology for conducting a complete, independent review: how to approach it systematically, document findings in PEAS format, and prioritize issues by real-world impact.

**Why This Matters:** Every designer in this cohort will be expected to participate in PEAS reviews for their product team. This lesson gives them the methodology to do that effectively, not just check boxes but actually assess accessibility quality and communicate findings that drive action.

**Connection to Badges 1 and 2:** This lesson puts all prior skills to work. Checklist knowledge (Badge 1), AT testing skills (Badge 2), and accessibility tree inspection (L09) all become tools in the reviewer's methodology. L17 is where it comes together.

---

## Timing Context

Week 11 delivers three lessons in a single 90-minute session:

| Block | Duration | Content |
|-------|----------|---------|
| Review | 30 min | Debrief Badge 2, introduce Badge 3 expectations, PEAS observation homework overview |
| **L17** | **20 min** | **Independent Review Methodology** |
| L18 | 20 min | Feedback and Critique |
| L19 | 20 min | Mentoring and Culture |

This is a tight format. L17 is a conceptual framing lesson, not a hands-on workshop. The applied practice happens through the PEAS observation homework (ongoing) and the cumulative capstone project.

---

## Content Outline

### Opening: From Tester to Reviewer (3 min)

**Key Teaching Points:**
- "In Badges 1 and 2, you learned to find accessibility issues. In Badge 3, you learn to conduct reviews."
- The difference: a tester checks items against a list. A reviewer assesses the overall accessibility quality of a feature and communicates findings that drive decisions.
- Frame the mindset shift: you are now the person your team looks to for accessibility judgment, not just checklist results.

**Transition:** "So how do you actually do a review? Let's talk methodology."

---

### Section 1: Systematic Review Methodology (7 min)

**Outcomes:** 3A.01

**Key Teaching Points:**

1. **The review workflow**
   - Scope: What are you reviewing? A full feature? A specific flow? A component?
   - Fidelity: Early concept, detailed design, or pre-implementation?
   - Time-boxing: How long do you have? This determines depth.

2. **What changes from checklist testing**
   - Checklist testing: go through items one by one, pass/fail
   - Systematic review: assess the experience holistically
   - You look for patterns, not just individual violations
   - You consider the full user journey, not isolated screens

3. **Review categories** (brief, not exhaustive)
   - Visual: color contrast, text sizing, spacing, reflow
   - Structural: headings, landmarks, reading order
   - Interactive: keyboard access, focus management, error handling
   - AT: accessible names, roles, states, announcements
   - Cognitive: clarity, consistency, error prevention

**Discussion Prompt (30 seconds):**
"Think about the last accessibility issue you found. Was it something a checklist caught, or something you noticed because you were actually using the feature? That's the difference."

---

### Section 2: PEAS Documentation (7 min)

**Outcomes:** 3A.02

**Key Teaching Points:**

1. **The PEAS workflow**
   - Request form: product team submits their design for review (product, BU, design links, timeline)
   - Session: PE team + inAccessible vendor (screen reader users) review the design together, synchronously
   - Sessions are recorded with transcripts
   - Recap form: Session ID (PE-format), transcript link, outcome tier, attendees

2. **The four outcome tiers**
   - **Complete:** No significant issues, design can proceed
   - **One follow-up:** Minor issues, schedule one follow-up session
   - **Async review:** Issues need async follow-up, not another live session
   - **Project:** Significant accessibility work needed, becomes a project

3. **What makes review documentation good**
   - Specific: point to the exact element and the exact problem
   - Contextual: explain why it matters for users
   - Actionable: suggest a path forward, not just "this is wrong"
   - Prioritized: help the team know what to fix first

**Key Message:** "The recap form is lightweight. The real value is in how you communicate during the session and in the clarity of your findings."

---

### Section 3: Prioritization (3 min)

**Outcomes:** 3A.03

**Key Teaching Points:**

1. **Prioritization framework**
   - **Critical blocker:** User cannot complete the task at all (keyboard trap, no accessible name on primary action)
   - **High impact:** User can complete the task but with significant difficulty or confusion
   - **Improvement:** Experience is functional but suboptimal (verbose announcements, missing description)
   - **Best practice:** Not a failure but would improve the experience (AAA criteria, enhanced patterns)

2. **The priority is not the WCAG level**
   - A Level A failure on a rarely-used feature may be lower priority than a Level AA issue on the primary flow
   - Priority = user impact x frequency of encounter x legal risk
   - Help the team make resource decisions, not just hand them a list

**Key Message:** "Your job is to help the team fix the right things first, not to hand them an unsorted list of everything that's wrong."

---

### Close (30 seconds)

- "You now have the framework: systematic methodology, PEAS documentation, impact-based prioritization."
- "You'll practice this through your PEAS observation homework, starting this week."
- Transition to L18: "Next, we'll talk about how to deliver your findings, because how you give feedback matters as much as what you find."

---

## Homework Connection

L17 content is practiced through two ongoing homework tracks:

1. **PEAS Observation:** Attend or observe a real PEAS review session for your product team. Apply the systematic review methodology from this lesson. Note the outcome tier, the documentation approach, and how findings were communicated.

2. **Cumulative Capstone:** If choosing the capstone option, L17 methodology becomes the foundation for the independent review component.

---

## Materials Needed

- Slide deck (Figma, to be built in Phase 3)
- PEAS Request Form screenshot (reference)
- PEAS Host Recap Form screenshot (reference)
- Example of a well-documented review finding (to be created or sourced from a real PEAS session, anonymized)

---

## Instructor Notes

### Pacing

This is a 20-minute lesson. It is intentionally conceptual and framework-oriented. Do not try to do a live review demo in this time. The PEAS observation homework is where they practice.

If running short:
- Condense Section 3 (prioritization) to a single slide with the framework
- Skip the discussion prompt

If running long:
- Section 2 (PEAS documentation) can be abbreviated if learners are already familiar with the PEAS process from their product teams
- Prioritization framework can be a handout rather than taught

### Common Questions

**Q: How is this different from the Blueline annotation reviews we already do?**
A: Blueline annotations are one tool in the review. A systematic review also covers keyboard testing, AT behavior, reflow, motion, and the full user journey. Blueline is a design-phase artifact; a review can happen at any fidelity level.

**Q: What if my product team doesn't do PEAS reviews?**
A: Talk to your PE (Product Equity) contact about scheduling one. Part of Badge 3 is getting your team into the PEAS process. If PEAS isn't available yet, apply the same methodology informally and document as if it were a PEAS session.

**Q: How long should a review take?**
A: Depends on scope and fidelity. A focused review of a single feature flow might take 30-60 minutes. A comprehensive review of a complex feature could take several hours. Time-boxing is a skill you'll develop through practice.

---

*Last updated: March 2026*
*Version: 1.0*
*For: DACE L17: Independent Review Methodology*
