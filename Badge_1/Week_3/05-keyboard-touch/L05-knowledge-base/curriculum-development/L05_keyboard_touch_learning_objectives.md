# L05: Keyboard, Touch & Reading Order - Learning Objectives

**Source:** `project-documents/05-keyboard-touch/knowledge-base/curriculum-development/L05_keyboard_touch_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** In-person 60 min / Online 30-45 min  
**Duration:** 60 minutes  
**Outcomes Covered:** 1E.01, 1E.02, 1E.03, 1E.04

---

## Overview

This lesson introduces learners to keyboard accessibility, touch target requirements, and reading order fundamentals. Learners will understand how to ensure all interactive functionality can be accessed via keyboard, design visible focus indicators that meet WCAG 2.2 requirements, apply proper touch target sizing for mobile interfaces, and recognize reading order issues that affect assistive technology users. This lesson emphasizes testing-first approaches and practical annotation skills essential for the Discover Badge.

## Connection to Previous Lessons

- **L01 (Accessible Names):** Focus indicators and touch targets need proper accessible names
- **L02 (Headings):** Keyboard navigation follows logical structure; headings provide navigation landmarks
- **L03 (Color):** Focus indicators must meet contrast requirements
- **L04 (Forms & Errors):** Keyboard access is critical for form completion and error recovery

---

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance |
|-------------------|-------|-----------|
| 1.3.2: Meaningful Sequence | A | Reading order must be logical and programmatically determinable |
| 2.1.1: Keyboard | A | All functionality must be operable via keyboard |
| 2.1.4: Character Key Shortcuts | A | Single-character shortcuts must be configurable |
| 2.4.3: Focus Order | A | Focus order must be logical and intuitive |
| 2.4.7: Focus Visible | AA | Keyboard focus must be visible |
| 2.4.11: Focus Appearance | AA | Focus indicators must meet minimum size and contrast (WCAG 2.2) |
| 2.5.1: Pointer Gestures | A | Multi-point gestures must have single-point alternatives |
| 2.5.4: Motion Actuation | A | Motion-based input must have alternatives |
| 2.5.7: Dragging Movements | AA | Dragging interactions must have alternatives (WCAG 2.2) |
| 2.5.8: Target Size (Minimum) | AA | Touch targets must be at least 24×24 pixels (WCAG 2.2) |

---

## Learning Outcomes

### 1E.01: Ensure all functionality is keyboard accessible

**Outcome Statement:**  
Verify that all interactive elements can be reached and operated via keyboard

**Knowledge Component:**
- Understand which elements must be keyboard accessible
- Know how keyboard navigation works (Tab, Shift+Tab, Arrow keys, Enter, Space)
- Recognize common keyboard accessibility failures
- Understand the relationship between focusable elements and interactive functionality
- Know platform-agnostic keyboard patterns

**Skills Component:**
- Test designs for complete keyboard accessibility
- Identify elements missing from tab order
- Spot keyboard traps and navigation dead ends
- Verify all interactive elements are reachable
- Document keyboard navigation requirements in annotations

**Application Component:**
- Evaluate design mockups for keyboard accessibility before handoff
- Create test plans focusing on keyboard navigation
- Annotate designs with keyboard interaction patterns
- Identify when custom keyboard handlers are needed
- Communicate keyboard requirements to engineering teams

---

### 1E.02: Design visible focus indicators

**Outcome Statement:**  
Specify focus states that meet WCAG 2.2 focus appearance requirements

**Knowledge Component:**
- Understand WCAG 2.4.7 (Focus Visible) requirements
- Know WCAG 2.2 SC 2.4.11 (Focus Appearance) specifications
- Recognize minimum focus indicator size requirements
- Understand contrast requirements for focus indicators (3:1 minimum)
- Know common focus indicator failures

**Skills Component:**
- Design focus states that meet size and contrast requirements
- Test focus indicators against WCAG 2.2 criteria
- Measure focus indicator area and contrast
- Identify insufficient focus indicators in existing designs
- Specify focus indicators in blueline annotations

**Application Component:**
- Create design specifications for focus states
- Ensure focus indicators are visible across all backgrounds
- Document focus indicator requirements for development
- Review implemented focus indicators for compliance
- Balance aesthetic design with accessibility requirements

---

### 1E.03: Apply touch target size requirements

**Outcome Statement:**  
Design touch targets that meet minimum size requirements for mobile interfaces

**Knowledge Component:**
- Understand WCAG 2.2 SC 2.5.8 (Target Size Minimum) - 24×24 pixels
- Know when exceptions apply (inline links, essential controls)
- Understand spacing as an alternative to size
- Recognize platform-specific touch target recommendations
- Know relationship between touch targets and keyboard focus areas

**Skills Component:**
- Measure touch target sizes in design tools
- Identify touch targets below minimum thresholds
- Apply adequate spacing between adjacent targets
- Test designs with touch target overlays
- Document touch target specifications

**Application Component:**
- Design mobile interfaces with compliant touch targets
- Annotate designs with touch target dimensions
- Review designs for touch target compliance before handoff
- Identify touch target issues in existing products
- Balance dense layouts with accessibility requirements

---

### 1E.04: Understand reading order fundamentals

**Outcome Statement:**  
Recognize common reading order failures and understand that reading order annotation is not required in Bluelines.

**Knowledge Component:**
- Define reading order as the sequence screen readers announce content
- Distinguish reading order from tab order (all content vs interactive elements only)
- Know that disabled controls appear in reading order but not tab order
- Identify common SC 1.3.2 failures: modals, hidden content, menus, multi-column layouts
- Understand the relationship between reading order and focus order

**Skills Component:**
- Identify when visual layouts may create reading order problems
- Recognize designs that risk SC 1.3.2 failures
- Distinguish intentional focus traps (modals) from accessibility failures

**Application Component:**
- Flag potential reading order issues during design reviews
- Understand that reading order implementation is engineering's responsibility
- Know when to raise reading order concerns without over-annotating
- Communicate reading order concerns to engineering when relevant

---

## Knowledge Objectives

By the end of this lesson, learners will understand:
- How keyboard navigation works across all platforms
- Which elements must be keyboard accessible
- WCAG 2.2 focus appearance requirements (size, contrast, area)
- Touch target minimum size requirements (24×24 pixels)
- Common keyboard and touch accessibility failures
- The relationship between keyboard focus and touch targets
- Exceptions and special cases for target sizing
- Testing methods for keyboard and touch accessibility
- Reading order vs tab order: what each affects
- Common reading order failure patterns (modals, hidden content)

## Skills Objectives

By the end of this lesson, learners will be able to:
- Test interfaces using keyboard-only navigation
- Measure focus indicator size and contrast
- Evaluate focus indicators against WCAG 2.2 criteria
- Measure touch target dimensions in design tools
- Identify keyboard traps and navigation issues
- Use testing tools (Stark, browser overlays) to verify compliance
- Create blueline annotations for focus and touch requirements
- Document keyboard interaction patterns
- Recognize when visual layouts may create reading order problems

## Application Objectives

By the end of this lesson, learners will be able to apply their knowledge to:
- Review design mockups for keyboard accessibility
- Specify compliant focus indicators for all interactive elements
- Design mobile interfaces with appropriate touch target sizes
- Annotate designs with keyboard and touch requirements
- Create test plans for keyboard and touch accessibility
- Identify and communicate accessibility issues to stakeholders
- Balance aesthetic design goals with accessibility requirements
- Implement accessibility testing as part of the design process
- Flag potential reading order issues to engineering when relevant

---

## Assessment Methods

**Quiz (13 points):**
- 8 multiple choice questions
- Maps to outcomes 1E.01, 1E.02, 1E.03, 1E.04
- Covers WCAG criteria, testing methods, and practical application

**Applied Skill Project (15 points):**
- Conduct a complete keyboard, touch, and reading order accessibility audit on a provided design mockup
- Test all functionality using keyboard-only navigation (no mouse)
- Measure focus indicators against WCAG 2.2 SC 2.4.11 requirements
- Test touch targets using Stark and verify 24×24 pixel minimum compliance
- Identify potential reading order issues for modals and hidden content
- Document all findings with Stark blueline annotations
- Provide specific recommendations for keyboard accessibility, focus indicators, touch targets, and reading order concerns

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 1E.01 | Keyboard navigation fundamentals |
| Q2 | 1E.01 | Identifying keyboard accessibility failures |
| Q3 | 1E.02 | WCAG 2.2 focus appearance requirements |
| Q4 | 1E.02 | Focus indicator contrast and size |
| Q5 | 1E.03 | WCAG 2.2 touch target minimum size |
| Q6 | 1E.03 | Touch target exceptions and spacing |
| Q7 | 1E.04 | Reading order and disabled controls |
| Q8 | 1E.04 | Modal dialogs and reading order |

---

## Resources

**W3C:**
- [Understanding 1.3.2: Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
- [Understanding 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [Understanding 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [Understanding 2.4.11: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [Understanding 2.5.8: Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Keyboard Accessibility Tutorial](https://www.w3.org/WAI/perspective-videos/keyboard/)

**Adobe:**
- [Keyboard Focus on Digital Accessibility Guide](https://www.adobe.com)
- [Focus Management Best Practices](https://www.adobe.com)
- [Touch Target Guidelines](https://www.adobe.com)
- [Blueline Annotations: Keyboard Focus Order](https://www.adobe.com)

**Testing Tools:**
- Stark: Touch target testing
- Browser DevTools: Focus indicator inspection
- 24×24 pixel bookmarklet for visual verification
