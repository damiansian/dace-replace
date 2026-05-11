# L06: Reflow and Zoom - Learning Objectives

**Source:** `project-documents/06-reflow-zoom/knowledge-base/curriculum-development/L06_reflow_zoom_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** Online (asynchronous)  
**Duration:** 40 minutes  
**Outcomes Covered:** 1F.01, 1F.02, 1F.03

---

## Overview

This lesson teaches designers how to create layouts that remain usable when users zoom to 400%, adjust text spacing, or change device orientation. These accommodations are essential for users with low vision, cognitive disabilities, and anyone using mobile devices in different contexts.

## Connection to Previous Lessons

- **L03 (Color):** Both address visual accessibility. Contrast requirements remain important at zoom levels.
- **L04 (Forms):** Form layouts must work at 400% zoom with labels and errors remaining associated with inputs.
- **L05 (Keyboard/Touch):** Touch targets and focus indicators must scale appropriately with zoom.

---

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance |
|-------------------|-------|-----------|
| 1.4.4 Resize Text | AA | Text must be resizable to 200% without loss of content or functionality |
| 1.4.10 Reflow | AA | Content must reflow at 400% zoom (1280px width at 320px equivalent) without horizontal scrolling |
| 1.4.12 Text Spacing | AA | No loss of content when text spacing is adjusted (line height, letter spacing, word spacing, paragraph spacing) |
| 1.3.4 Orientation | AA | Content must not restrict display to a single orientation unless essential |

---

## Learning Outcomes

### 1F.01: Design for 400% zoom without horizontal scroll

**Outcome Statement:**  
Create layouts that reflow to single column at high zoom levels.

**Knowledge Component:**
- Understand that SC 1.4.10 (Reflow) requires content to be usable at 400% zoom without horizontal scrolling
- Know that 400% zoom on a 1280px viewport creates a 320px equivalent viewport
- Recognize that reflow primarily benefits users with low vision who need larger text
- Understand that some content types have exceptions: data tables, toolbars, diagrams

**Skills Component:**
- Design flexible layouts that stack to single column at narrow viewports
- Avoid fixed-width containers that prevent reflow
- Ensure all text content remains accessible without horizontal scrolling
- Identify which components need responsive breakpoints

**Application Component:**
- Review designs at 400% zoom to verify reflow behavior
- Document expected reflow behavior for complex layouts
- Communicate responsive requirements to engineering

---

### 1F.02: Ensure text spacing adjustments work

**Outcome Statement:**  
Design components that accommodate increased line height and letter and word spacing.

**Knowledge Component:**
- Understand that SC 1.4.12 (Text Spacing) requires content to remain usable when users adjust:
  - Line height to at least 1.5 times the font size
  - Letter spacing to at least 0.12 times the font size
  - Word spacing to at least 0.16 times the font size
  - Paragraph spacing to at least 2 times the font size
- Know that fixed-height containers cause text to overflow or become clipped
- Recognize that users with dyslexia, low vision, or cognitive disabilities benefit from text spacing adjustments

**Skills Component:**
- Design components with flexible heights that expand with content
- Avoid fixed-height text containers
- Ensure buttons and interactive elements can accommodate larger text
- Specify minimum heights rather than fixed heights when sizing is needed

**Application Component:**
- Test designs with text spacing adjustments (using browser extensions or bookmarklets)
- Identify components that would clip or overflow text
- Document flexible sizing requirements in design specs

---

### 1F.03: Apply orientation requirements

**Outcome Statement:**  
Ensure content works in both portrait and landscape orientations.

**Knowledge Component:**
- Understand that SC 1.3.4 (Orientation) requires content to work in both portrait and landscape
- Know that orientation restrictions create barriers for users with mounted devices (wheelchairs, stands)
- Recognize legitimate exceptions: piano app, check deposit, projector interface
- Understand that responsive design naturally supports orientation flexibility

**Skills Component:**
- Design layouts that adapt to both orientations
- Avoid orientation-locked designs unless functionality requires it
- Test designs in both orientations on mobile devices
- Document any essential orientation requirements with justification

**Application Component:**
- Verify designs work in portrait and landscape on target devices
- Identify and justify any orientation restrictions
- Ensure navigation and primary content remain accessible in both orientations

---

## Knowledge Objectives

By the end of this lesson, learners will understand:

- Why zoom and reflow matter for users with low vision
- The 400% zoom requirement and its relationship to viewport width
- What text spacing adjustments users can make and why
- Why fixed-height containers fail text spacing requirements
- When orientation restrictions are and are not acceptable
- How these requirements connect to responsive design practices

## Skills Objectives

By the end of this lesson, learners will be able to:

- Identify designs that would fail at 400% zoom
- Recognize fixed-height containers that would clip text
- Design flexible layouts that accommodate text spacing changes
- Test designs for reflow, text spacing, and orientation compliance
- Document responsive and reflow requirements for engineering

## Application Objectives

By the end of this lesson, learners will apply these skills to:

- Audit existing designs for reflow and zoom issues
- Test designs using browser zoom, text spacing tools, and orientation changes
- Communicate flexible sizing requirements in design handoffs
- Make informed decisions about orientation restrictions

---

## Assessment Methods

**Quiz (6 points):**
- 6 multiple choice questions
- Maps to outcomes: 1F.01 (Q1-Q2), 1F.02 (Q3-Q4), 1F.03 (Q5-Q6)
- Auto-graded, open-book

**No project for this lesson** (quiz-only for online async lessons)

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 1F.01 | 400% zoom and reflow concept |
| Q2 | 1F.01 | Horizontal scrolling exceptions |
| Q3 | 1F.02 | Text spacing adjustments |
| Q4 | 1F.02 | Fixed-height containers failure |
| Q5 | 1F.03 | Orientation requirements |
| Q6 | 1F.03 | Orientation exceptions |

---

## Resources

**W3C:**
- Understanding SC 1.4.4 Resize Text: https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html
- Understanding SC 1.4.10 Reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- Understanding SC 1.4.12 Text Spacing: https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
- Understanding SC 1.3.4 Orientation: https://www.w3.org/WAI/WCAG22/Understanding/orientation.html

**Adobe:**
- Design Accessibility Checklist (Responsive Design section)
- Spectrum Design System: Responsive Layout Guidelines

**Tools:**
- Text Spacing Bookmarklet: https://dylanb.github.io/bookmarklets.html
- Browser DevTools for viewport simulation

---

## Connection to Other Lessons

**Builds on:**
- L03 Color: Visual accessibility fundamentals
- L04 Forms: Form layouts must work at zoom
- L05 Keyboard/Touch: Touch targets interact with zoom levels

**Connects forward to:**
- L07 Landmarks/Navigation: Page structure at different viewports
- Badge 2 (Define): Testing with screen magnification software

---

**Document Version:** 1.0  
**Last Updated:** December 16, 2025  
**Author:** DACE Curriculum Team

