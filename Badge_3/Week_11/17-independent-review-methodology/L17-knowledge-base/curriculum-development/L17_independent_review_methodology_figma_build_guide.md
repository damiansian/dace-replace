# Lesson 17: Independent Review Methodology
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Deliver
**Delivery:** In-person (instructor-led)
**Duration:** ~20 minutes (part of Week 11 session)
**Outcomes Covered:** 3A.01, 3A.02, 3A.03

---

## Source context

This lesson draws from established internal training materials, particularly:
- **PEAS (Product Equity Advisory Sessions) process documentation**
- **Adobe Product Equity review methodology**
- **inAccessible vendor partnership review sessions**

Key pedagogical approach: **From Tester to Reviewer**: transition designers from checking individual items to conducting holistic accessibility reviews that drive team decisions.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 2 min | All |
| 1. From Tester to Reviewer | 1.1-1.3 | 3 min | 3A.01 |
| 2. Systematic Review Methodology | 2.1-2.5 | 7 min | 3A.01 |
| 3. PEAS Documentation | 3.1-3.5 | 5 min | 3A.02 |
| 4. Prioritizing by Impact | 4.1-4.3 | 3 min | 3A.03 |
| 5. Summary and Close | 5.1-5.3 | 2 min | All |

**Total frames:** 21

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#51CF66` (Deliver Badge green)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- This is a 20-minute conceptual lesson, not a hands-on workshop
- No live demo or activity slides needed; the PEAS observation homework is where they practice

---

## Learning objective pill component

Badge 3 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light green (#EBFBEE) at 15% opacity
- Text: 12px, medium weight, "LO 3A.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 17`
- Title: `Independent Review Methodology`
- Subtitle: `From Tester to Reviewer`
- Badge level indicator: `Deliver Badge`
- Duration: `~20 minutes`
- Format indicator: `In-Person Lesson`
- Week indicator: `Week 11`

**Speaker notes:**
Welcome to the Deliver Badge and Lesson 17. In Badges 1 and 2, you learned to find accessibility issues. Now you learn to conduct reviews. This lesson gives you the methodology your product teams will rely on.

---

### Frame 0.2: Learning objectives reference

**Type:** Objectives overview

**Layout:** Vertical list with outcome codes

**Headline:** What you'll be able to do

**Intro text:**
By the end of this lesson, you'll be able to:

**Objectives list:**

| Code | Objective |
|------|-----------|
| 3A.01 | Conduct systematic accessibility reviews: Perform comprehensive reviews using structured methodology that goes beyond individual checklist items |
| 3A.02 | Document findings using PEAS format: Write review documentation following Adobe PEAS standards that enables action |
| 3A.03 | Prioritize issues by impact and risk: Classify findings based on user impact, legal risk, and implementation complexity |

**Connection callout:**
This builds on everything from Badges 1 and 2. Checklist knowledge, AT testing skills, and accessibility tree inspection all become tools in the reviewer's methodology. L17 is where it comes together.

**Speaker notes:**
Three outcomes focused on review methodology. This is a conceptual framing lesson. You'll practice through your PEAS observation homework and the cumulative capstone project.

---

# Section 1: From Tester to Reviewer
## Duration: 3 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `From Tester to Reviewer`

---

### Frame 1.2: The mindset shift

**Type:** Two-column comparison

**Layout:** Side-by-side comparison cards

**Headline:** Tester vs. Reviewer

**Left column:**
- Heading: `Tester (Badges 1 and 2)`
- Bullet list:
  - Checks items against a list
  - Pass/fail for individual criteria
  - Tests specific elements in isolation
  - Reports what failed

**Right column:**
- Heading: `Reviewer (Badge 3)`
- Bullet list:
  - Assesses overall accessibility quality
  - Evaluates the full user journey
  - Identifies patterns across a feature
  - Communicates findings that drive decisions

**Key insight callout:**
You are now the person your team looks to for accessibility judgment, not just checklist results.

**Outcome badge:** `3A.01`

**Speaker notes:**
In Badges 1 and 2, you learned to find accessibility issues. In Badge 3, you learn to conduct reviews. A tester checks items. A reviewer assesses quality and communicates findings that drive team decisions. This is the shift we're making today.

---

### Frame 1.3: Checkpoint - From tester to reviewer

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: From Tester to Reviewer

**Body text:**
Before learning the review methodology, verify you understand this mindset shift:

**Checklist:**
- [ ] I understand the difference between checking individual items (testing) and assessing overall quality (reviewing)
- [ ] I can explain why a reviewer looks at the full user journey, not just isolated screens
- [ ] I recognize that a reviewer identifies patterns, not just individual violations

**Outcome badge:** `3A.01`

**Speaker notes:**
Quick mindset check. If this distinction is clear, the methodology that follows will make sense.

---

# Section 2: Systematic Review Methodology
## Duration: 7 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Systematic Review Methodology`

---

### Frame 2.2: Three scoping decisions

**Type:** Three-card layout

**Layout:** Horizontal row of three cards

**Headline:** Every review starts with three decisions

**Cards:**

| Decision | Question | Examples |
|----------|----------|----------|
| **Scope** | What are you reviewing? | Full feature, specific flow, single component |
| **Fidelity** | What stage is the design? | Early concept, detailed design, pre-implementation |
| **Time-box** | How long do you have? | 30 min focused review, 2-hour comprehensive review |

**Key insight callout:**
These three decisions determine everything: what you check, how deep you go, and what you can realistically cover.

**Outcome badge:** `3A.01`

**Speaker notes:**
Before you start reviewing, answer these three questions. Scope defines what you look at. Fidelity determines what you can evaluate (you can't check color contrast on a wireframe). Time-boxing is a skill: if you have 30 minutes, you focus on the primary flow. If you have 2 hours, you cover edge cases.

---

### Frame 2.3: What changes from checklist testing

**Type:** Process comparison

**Layout:** Two approaches side by side

**Headline:** Checklist testing vs. systematic review

**Left column:**
- Heading: `Checklist testing`
- Go through items one by one
- Pass/fail for each criterion
- Individual violations documented

**Right column:**
- Heading: `Systematic review`
- Assess the experience holistically
- Look for patterns across the feature
- Consider the full user journey
- Weigh patterns against real-world impact

**Discussion prompt callout:**
"Think about the last accessibility issue you found. Was it something a checklist caught, or something you noticed because you were actually using the feature? That's the difference."

**Speaker notes:**
This is 30 seconds for a quick think. Don't need verbal responses, just get them reflecting. The point: systematic review catches things checklists miss because you're experiencing the feature as a user would.

---

### Frame 2.4: Five review categories

**Type:** Five-card layout

**Layout:** Horizontal row of five category cards

**Headline:** Review categories

**Cards:**

| Category | What to check | Badge 1/2 connection |
|----------|--------------|---------------------|
| **Visual** | Color contrast, text sizing, spacing, reflow | L02, L03, L12 |
| **Structural** | Headings, landmarks, reading order | L01, L04, L09 |
| **Interactive** | Keyboard access, focus management, error handling | L04, L05, L06 |
| **AT** | Accessible names, roles, states, announcements | L09, L10, L11 |
| **Cognitive** | Clarity, consistency, error prevention | L16 |

**Key insight callout:**
A systematic review covers all five categories. You already know how to check each one from Badges 1 and 2. Now you put them together.

**Outcome badge:** `3A.01`

**Speaker notes:**
These categories are not exhaustive, but they cover the major areas. Notice how each maps back to skills you already have. L17 is not teaching new checks. It's teaching you to use all your existing skills together in a structured way.

---

### Frame 2.5: Checkpoint - Systematic review methodology

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Systematic Review Methodology

**Body text:**
Before moving to PEAS documentation, verify you understand the review methodology:

**Checklist:**
- [ ] I can scope a review by defining what I'm reviewing, at what fidelity, and within what time-box
- [ ] I understand how systematic review differs from going through a checklist item by item
- [ ] I can name the five review categories and connect them to skills from Badges 1 and 2
- [ ] I know that fidelity level (wireframe vs. detailed design vs. pre-implementation) affects what I can evaluate

**Outcome badge:** `3A.01`

**Speaker notes:**
Methodology established. Now we talk about how to document what you find using Adobe's PEAS process.

---

# Section 3: PEAS Documentation
## Duration: 5 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `PEAS Documentation`

---

### Frame 3.2: The PEAS workflow

**Type:** Process flow diagram

**Layout:** Horizontal three-step flow

**Headline:** PEAS review workflow

**Flow steps:**

| Step | What happens | Key artifact |
|------|-------------|--------------|
| **1. Request** | Product team submits design for review (product, BU, design links, timeline) | PEAS Request Form |
| **2. Session** | PE team + inAccessible vendor review the design together, synchronously. Sessions are recorded with transcripts. | Live review session |
| **3. Recap** | Session ID (PE- format), transcript link, outcome tier, attendees documented | PEAS Host Recap Form |

**Key message callout:**
The recap form is lightweight. The real value is in how you communicate during the session and in the clarity of your findings.

**Outcome badge:** `3A.02`

**Speaker notes:**
PEAS is Adobe's accessibility review process. Product teams submit designs, the PE team reviews with inAccessible (a vendor whose reviewers are screen reader users), and findings are documented. You'll observe this process firsthand through your homework.

---

### Frame 3.3: Four outcome tiers

**Type:** Four-tier table

**Layout:** Full-width table with color-coded tiers

**Headline:** PEAS outcome tiers

**Table:**

| Tier | Meaning | What happens next |
|------|---------|-------------------|
| **Complete** | No significant issues | Design can proceed to implementation |
| **One follow-up** | Minor issues found | Schedule one additional live review session |
| **Async review** | Issues need follow-up | Async resolution, not another live session |
| **Project** | Significant work needed | Becomes a dedicated accessibility project |

**Speaker notes:**
These tiers help the product team understand the scale of work ahead. "Complete" is the goal. "Project" means we found fundamental accessibility problems that need significant rework. Most sessions land at "One follow-up" or "Async review."

---

### Frame 3.4: What makes documentation good

**Type:** Four-principle layout

**Layout:** Vertical list with icons

**Headline:** Good review documentation is:

**Principles:**

| Principle | What it means |
|-----------|--------------|
| **Specific** | Point to the exact element and the exact problem |
| **Contextual** | Explain why it matters for users |
| **Actionable** | Suggest a path forward, not just "this is wrong" |
| **Prioritized** | Help the team know what to fix first |

**Bad example callout:**
"The form has accessibility issues."

**Good example callout:**
"The email field (step 2 of checkout) has no visible label. Screen reader users hear 'edit text' with no context. Add a visible label 'Email address' above the field. This is a critical blocker for task completion."

**Outcome badge:** `3A.02`

**Speaker notes:**
The difference between useful documentation and useless documentation is specificity and actionability. "This is wrong" gives the team nothing to work with. Tell them exactly what's wrong, why it matters, and how to fix it.

---

### Frame 3.5: Checkpoint - PEAS documentation

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: PEAS Documentation

**Body text:**
Before moving to prioritization, verify you understand the PEAS documentation process:

**Checklist:**
- [ ] I understand the three-step PEAS workflow: request, session, recap
- [ ] I know the four outcome tiers and what each means for the design team
- [ ] I can explain what makes review documentation specific, contextual, actionable, and prioritized
- [ ] I understand the difference between flagging issues and recommending alternatives

**Outcome badge:** `3A.02`

**Speaker notes:**
Documentation skills established. The final piece is knowing how to prioritize your findings so teams act on the right things first.

---

# Section 4: Prioritizing by Impact
## Duration: 3 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Prioritizing by Impact`

---

### Frame 4.2: Prioritization framework

**Type:** Four-level framework table

**Layout:** Full-width table with severity indicators

**Headline:** Prioritize by impact, not by WCAG level

**Framework table:**

| Priority | Description | Example |
|----------|-------------|---------|
| **Critical blocker** | User cannot complete the task at all | Keyboard trap in modal, no accessible name on primary action button |
| **High impact** | User can complete but with significant difficulty | Poor focus visibility on primary flow, confusing reading order |
| **Improvement** | Functional but suboptimal experience | Verbose screen reader announcements, missing description on secondary feature |
| **Best practice** | Not a failure but would improve the experience | AAA contrast, enhanced ARIA patterns, additional shortcut keys |

**Key insight callout:**
A Level A failure on a rarely-used admin feature may be lower priority than a Level AA issue on the primary checkout flow. Priority = user impact x frequency of encounter x legal risk.

**Outcome badge:** `3A.03`

**Speaker notes:**
This is the most important concept in this section. WCAG level does not equal priority. A missing accessible name on an admin toggle used by 5 people is less urgent than poor focus visibility on a checkout flow used by millions. Help the team fix the right things first.

---

### Frame 4.3: Checkpoint - Prioritization

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Prioritizing by Impact

**Body text:**
Before we wrap up, verify you understand impact-based prioritization:

**Checklist:**
- [ ] I can classify findings using the four priority levels (critical blocker, high impact, improvement, best practice)
- [ ] I understand that WCAG conformance level does not automatically determine priority
- [ ] I can explain priority as the combination of user impact, frequency, and legal risk
- [ ] I know that my job is to help the team fix the right things first, not hand them an unsorted list

**Outcome badge:** `3A.03`

**Speaker notes:**
Prioritization is a judgment skill that develops with practice. The PEAS observation homework gives you a chance to see how experienced reviewers prioritize in real sessions.

---

# Section 5: Summary and Close
## Duration: 2 minutes

### Frame 5.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `5`
- Title: `Summary and Next Steps`

---

### Frame 5.2: Key takeaways

**Type:** Summary slide

**Layout:** Three key principles with icons

**Headline:** Independent Review Methodology

**Key principles:**

| Icon | Principle |
|------|-----------|
| Magnifying glass | **Systematic methodology**: Scope, fidelity, time-box. Five review categories. Assess the full experience, not just individual items. |
| Document | **PEAS documentation**: Request, session, recap. Four outcome tiers. Be specific, contextual, actionable, and prioritized. |
| Priority list | **Impact-based prioritization**: Critical blocker, high impact, improvement, best practice. Priority is not the WCAG level. |

**Homework callout:**
You'll practice this through two tracks:
1. **PEAS Observation**: Attend or observe a real PEAS review session for your product team
2. **Cumulative Capstone**: Apply the review methodology to your capstone project (if choosing that option)

**Speaker notes:**
Three concepts, one methodology. You have the framework. The PEAS observation homework is where you see it in action. Starting this week, work with your PE contact to attend or observe a session. Next up: L18 on how to deliver your findings effectively.

---

### Frame 5.3: Up next

**Type:** Preview slide

**Layout:** Next lesson teaser

**Headline:** Up next: Feedback and Critique (L18)

**Preview points:**
- How to deliver accessibility findings to product teams
- Building capability rather than creating defensiveness
- Feedback frameworks for design review contexts
- Communication strategies for different audiences

**Connection callout:**
L17 gave you the methodology for what to find. L18 teaches you how to communicate it. Because how you give feedback matters as much as what you find.

**Speaker notes:**
We move directly into L18. The methodology from L17 gives you what to find and document. L18 focuses on how you deliver that feedback to build team capability rather than create resistance.

---

## End of deck

**Total frames:** 21
**Estimated delivery time:** ~20 minutes

---

*Last updated: March 2026*
*Version: 1.0*
*For: DACE L17: Independent Review Methodology*
