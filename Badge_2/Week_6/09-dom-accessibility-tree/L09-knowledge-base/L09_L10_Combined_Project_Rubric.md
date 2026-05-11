# L09-L10: DOM and Screen Reader Applied Practice

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Define  
**Lessons:** L09 (DOM and Accessibility Tree) + L10 (Screen Reader Fundamentals)  
**Assessment Type:** Applied Practice  
**Project Name:** Accessibility Tree Analysis  
**Points:** 24 (4 points per criterion)  
**Format:** Written analysis, instructor-graded  
**Outcomes Tested:** 2A.01, 2A.02, 2A.03, 2B.01, 2B.02, 2B.03

---

## Project Overview

Students analyze a provided web page to examine the relationship between the DOM and accessibility tree, predict screen reader behavior, and identify accessibility issues. This reflects real-world practice where designers validate their work with both developer tools and AT testing.

### Stimulus

A web page containing:
- Navigation with landmarks (banner, nav, main, contentinfo)
- Heading structure (H1-H3)
- Interactive components (buttons, links, form fields)
- Custom ARIA components (tabs, accordion, dialog)
- Dynamic content areas

---

## Mastery Scale

The rubric uses a 4-point scale aligned with DACE's mastery levels:

| Points | Level | Description |
|--------|-------|-------------|
| 4 | **Exceeds Mastery** | Demonstrates advanced understanding beyond requirements; thorough, professional-level work |
| 3 | **Meets Mastery** | Fully meets the learning outcome requirements; competent, complete work |
| 2 | **Near Mastery** | Approaching competency but gaps remain; understands concepts but execution needs improvement |
| 1 | **Below Mastery** | Significant gaps in understanding or skill; incomplete or incorrect work |

**Passing Threshold:** Students must achieve Meets Mastery (3 points) or higher average to pass.

---

## Criteria

### DOM and Accessibility Tree Section (Criteria 1-3)

Testing outcomes 2A.01 (Explain DOM to accessibility tree relationship), 2A.02 (Identify accessibility tree issues), and 2A.03 (Connect design decisions to accessibility tree impact).

---

#### Criterion 1: Accessibility Tree Documentation

**Prompt:**

Using browser dev tools (Chrome Accessibility panel or Firefox Accessibility Inspector), document the accessibility properties for 5 specified elements. For each element, record:
- Name (accessible name)
- Role
- State (if applicable)
- Value (if applicable)

**What We're Looking For:**

- Student correctly uses dev tools to inspect accessibility properties
- Student accurately documents all four property types
- Student identifies when properties are computed vs. explicitly set

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | All properties correctly documented for all elements; identifies computed vs explicit values; notes any discrepancies between expected and actual; demonstrates mastery of dev tools |
| **Meets Mastery** | 3 | Properties correctly documented for all elements; minimal errors; shows competent use of dev tools |
| **Near Mastery** | 2 | Most properties documented but some errors or omissions; shows understanding but execution has gaps |
| **Below Mastery** | 1 | Significant errors in property identification; does not demonstrate ability to use dev tools effectively |

---

#### Criterion 2: Design Impact Analysis

**Prompt:**

For 3 of the documented elements, explain how a specific design decision resulted in the accessibility tree representation you observed. Connect the visual design or HTML/ARIA implementation to the resulting accessibility properties.

**What We're Looking For:**

- Student understands the pipeline from design to accessibility tree
- Student can trace how design decisions become accessibility properties
- Student demonstrates understanding of accessible name computation

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Thorough explanation of design-to-accessibility connection; references specific mechanisms (labeling, ARIA, semantic HTML); demonstrates deep understanding of the pipeline |
| **Meets Mastery** | 3 | Correctly connects design decisions to accessibility properties; shows understanding of the relationship |
| **Near Mastery** | 2 | Partially correct connections; shows some understanding but reasoning is incomplete |
| **Below Mastery** | 1 | Incorrect or missing connections; does not demonstrate understanding of how design affects accessibility tree |

---

#### Criterion 3: Issue Identification

**Prompt:**

Identify at least 3 accessibility issues visible in the accessibility tree. For each issue, explain:
- What the problem is
- How you identified it using dev tools
- What the user impact would be
- How a designer could address it

**What We're Looking For:**

- Student can identify real accessibility issues from accessibility tree inspection
- Student understands the user impact of accessibility tree problems
- Student can propose practical design solutions

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Identifies multiple real issues; thorough explanation of user impact; practical, specific solutions; may identify subtle issues beyond obvious ones |
| **Meets Mastery** | 3 | Identifies 3 real issues; correctly explains user impact; proposes valid solutions |
| **Near Mastery** | 2 | Identifies some issues but may include false positives or miss real ones; partial understanding of impact |
| **Below Mastery** | 1 | Cannot identify real issues; incorrect understanding of user impact; missing or impractical solutions |

---

### Screen Reader Section (Criteria 4-6)

Testing outcomes 2B.01 (Navigate pages using VoiceOver and NVDA), 2B.02 (Distinguish browse mode vs focus mode), and 2B.03 (Use quick navigation for headings, landmarks, and links).

---

#### Criterion 4: Screen Reader Predictions

**Prompt:**

Based on the accessibility tree properties you documented, predict what a screen reader would announce for each element. Include:
- The announcement text
- The element role/type that would be spoken
- Any state information

**What We're Looking For:**

- Student can translate accessibility properties to screen reader announcements
- Student understands how name, role, and state are announced
- Predictions should match actual screen reader behavior

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Accurate predictions for all elements; understands announcement order (name, role, state); may note differences between screen readers |
| **Meets Mastery** | 3 | Mostly accurate predictions; understands basic announcement patterns |
| **Near Mastery** | 2 | Some accurate predictions but gaps in understanding of announcement patterns |
| **Below Mastery** | 1 | Inaccurate predictions; does not understand how accessibility properties become announcements |

---

#### Criterion 5: Browse Mode vs Focus Mode Analysis

**Prompt:**

For the page you analyzed, identify:
- 3 elements that would be encountered in browse mode but not focus mode
- 3 elements that would be encountered in focus mode
- Explain when the screen reader would switch between modes

**What We're Looking For:**

- Student understands the difference between browse and focus modes
- Student can identify which elements are focusable
- Student understands mode switching behavior

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Correctly identifies all elements; thorough explanation of mode switching; may note NVDA/JAWS differences |
| **Meets Mastery** | 3 | Correctly identifies elements for each mode; understands basic mode switching |
| **Near Mastery** | 2 | Partially correct identification; shows some understanding but confusion about when modes apply |
| **Below Mastery** | 1 | Incorrect identification; does not understand the difference between modes |

---

#### Criterion 6: Quick Navigation Mapping

**Prompt:**

Using screen reader quick navigation, map out:
- The heading hierarchy (what headings exist and their levels)
- The landmark regions on the page
- Document any issues you find with the heading or landmark structure

**What We're Looking For:**

- Student can use quick navigation to explore structure
- Student identifies heading and landmark structures
- Student can identify structural accessibility issues

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Complete and accurate mapping; identifies all structural issues; demonstrates efficient use of quick navigation |
| **Meets Mastery** | 3 | Accurate mapping of headings and landmarks; identifies major structural issues |
| **Near Mastery** | 2 | Partial mapping; misses some headings or landmarks; identifies some issues |
| **Below Mastery** | 1 | Incomplete or inaccurate mapping; does not demonstrate understanding of structural navigation |

---

## Assessment Alignment

| Criterion | Topic | Outcome | Points |
|-----------|-------|---------|--------|
| 1 | Accessibility tree documentation | 2A.01, 2A.02 | 4 |
| 2 | Design impact analysis | 2A.03 | 4 |
| 3 | Issue identification | 2A.02, 2A.03 | 4 |
| 4 | Screen reader predictions | 2B.01 | 4 |
| 5 | Browse mode vs focus mode | 2B.02 | 4 |
| 6 | Quick navigation mapping | 2B.03 | 4 |
| **Total** | | | **24** |

---

## Grading Summary

| Score | Level |
|-------|-------|
| 24-22 points | Exceeds Mastery |
| 21-18 points | Meets Mastery |
| 17-12 points | Near Mastery |
| 11 or below | Below Mastery |

**Passing Threshold:** 18 points (Meets Mastery average of 3 points per criterion)

---

## Key Teaching Points

### DOM and Accessibility Tree (L09)

The accessibility tree is the interface between web content and assistive technology:

- **Name:** What the element is called (computed from labels, aria-label, text content, etc.)
- **Role:** What type of element it is (button, link, heading, etc.)
- **State:** Current condition (checked, expanded, disabled, etc.)
- **Value:** Current value for inputs and controls

The accessibility tree is NOT a 1:1 copy of the DOM. It excludes decorative elements and may restructure relationships.

### Screen Readers (L10)

Screen readers have two primary interaction modes:

- **Browse mode (virtual cursor):** Reading through content, all text announced, single-key shortcuts work
- **Focus mode (forms mode):** Interacting with controls, only focusable elements, keyboard input goes to controls

Quick navigation allows efficient page exploration:
- Headings: Jump by H, 1-6 for specific levels
- Landmarks: Jump by D (NVDA) or rotor (VoiceOver)
- Links, buttons, form fields have dedicated shortcuts

---

## Instructor Notes

### Common Student Issues

**Accessibility Tree Documentation:**
- Students may confuse computed name with explicit aria-label
- Ensure students understand that role can be implicit (from HTML element) or explicit (from role attribute)

**Browse vs Focus Mode:**
- Common confusion: thinking all elements are available in both modes
- Emphasize that static text is only in browse mode, form controls switch to focus mode

**Quick Navigation:**
- Students may not realize skipped heading levels are an issue
- Multiple H1s may or may not be an issue depending on context

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L09: DOM and Accessibility Tree + L10: Screen Reader Fundamentals*
