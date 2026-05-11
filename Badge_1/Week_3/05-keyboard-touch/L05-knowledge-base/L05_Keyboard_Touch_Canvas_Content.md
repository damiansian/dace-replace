# L05: Keyboard & Touch - Canvas Content

**Lesson:** L05  
**Topic:** Keyboard & Touch  
**Badge:** Discover  
**Outcomes:** 1E.01, 1E.02, 1E.03  
**Duration:** 60 minutes (in-person)

---

## Lesson Overview

Keyboard accessibility is essential for millions of users who rely on keyboard navigation, including screen reader users, voice control users, people with motor disabilities, and power users. Touch target sizing directly impacts usability for people with motor impairments, tremors, or reduced dexterity.

In this lesson, you'll learn how to ensure all functionality is keyboard accessible, design focus indicators that meet WCAG 2.2 requirements, and apply proper touch target sizing for mobile interfaces.

---

## Learning Objectives

By the end of this lesson, you will be able to:

### 1E.01: Ensure all functionality is keyboard accessible
Verify that all interactive elements can be reached and operated via keyboard

### 1E.02: Design visible focus indicators  
Specify focus states that meet WCAG 2.2 focus appearance requirements

### 1E.03: Apply touch target size requirements
Design touch targets that meet minimum size requirements for mobile interfaces

---

## Related WCAG Success Criteria

- **2.1.1 Keyboard (Level A):** All functionality operable via keyboard
- **2.1.4 Character Key Shortcuts (Level A):** Single-character shortcuts must be configurable
- **2.4.3 Focus Order (Level A):** Focus order preserves meaning and operability
- **2.4.7 Focus Visible (Level AA):** Keyboard focus indicator is visible
- **2.4.11 Focus Appearance (Level AA - WCAG 2.2):** Focus indicator meets size and contrast requirements
- **2.5.1 Pointer Gestures (Level A):** Multi-point gestures have single-point alternatives
- **2.5.8 Target Size Minimum (Level AA - WCAG 2.2):** Touch targets are at least 24×24 pixels

---

## Key Concepts

### Keyboard Accessibility Fundamentals

All interactive functionality must be operable via keyboard without timing requirements. This includes:

**Essential Keyboard Commands:**
- **Tab:** Move forward through focusable elements
- **Shift+Tab:** Move backward through focusable elements
- **Enter/Space:** Activate buttons and controls
- **Arrow keys:** Navigate within components (menus, tabs, radio groups)
- **Escape:** Close modals, cancel actions

**Common Keyboard Failures:**
- Hover-only menus
- Mouse-only dropdowns
- Custom controls missing keyboard handlers
- Elements removed from tab order unintentionally

### Focus Order Must Be Logical

SC 2.4.3 requires focus order to preserve meaning and operability. Visual order should match focus order:
- Left-to-right, top-to-bottom (for LTR languages)
- Modal dialogs should trap focus intentionally
- Focus returns to trigger element when modal closes
- Skip links provide shortcuts to main content

**Intentional Focus Traps vs. Keyboard Traps:**
Focus should be trapped within modals (correct behavior). Keyboard traps where users cannot escape are failures.

### Focus Indicators Must Be Visible

Focus indicators show keyboard users where they are on the page. SC 2.4.7 requires visibility, and WCAG 2.2 SC 2.4.11 specifies how visible.

**WCAG 2.2 SC 2.4.11 Focus Appearance Requirements:**
- **Minimum perimeter:** 2 CSS pixels solid or dashed
- **Contrast requirement:** 3:1 against adjacent colors
- **Area requirement:** As large as 1px border or 4x the border width

**Best Practices:**
- Use 3+ pixel thickness and high contrast (4.5:1 or better)
- Ensure visibility across light and dark modes
- Never use `:focus {outline: none}` without providing a visible alternative

### Touch Targets Must Be Large Enough

WCAG 2.2 SC 2.5.8 requires touch targets to be at least 24×24 CSS pixels. This ensures users with motor impairments can successfully tap interactive elements.

**Requirements:**
- **Minimum size:** 24×24 CSS pixels
- **Spacing alternative:** 24 pixels between adjacent targets
- **Exceptions:** Inline links, essential controls, user-controlled sizing

**Design Solutions:**
- Add padding around interactive elements
- Increase spacing between adjacent targets
- Expand tap area beyond visible element using CSS

---

## Testing Workflow

1. **Test keyboard navigation:** Navigate the entire interface using only keyboard (no mouse). Verify all interactive elements are reachable and operable.
2. **Verify focus order:** Confirm tab order matches visual order and makes logical sense.
3. **Measure focus indicators:** Use browser DevTools to check thickness (2px minimum) and contrast (3:1 minimum).
4. **Check touch targets:** Use Stark overlay to identify targets below 24×24 pixels.
5. **Document findings:** Create blueline annotations specifying focus indicators, keyboard patterns, and touch target dimensions.

---

## What to Annotate

**For keyboard accessibility:**
- Which elements are focusable
- Keyboard interaction patterns
- Focus management notes

**For focus indicators:**
- Color and thickness
- Contrast ratio

**For touch targets:**
- Target dimensions (width × height)
- Spacing between adjacent targets

---

## Assessment

**Knowledge Check Quiz (10 points):**
- 6 multiple choice questions covering:
  - Keyboard navigation fundamentals
  - WCAG 2.2 focus appearance requirements
  - Touch target minimum size requirements
- Passing score: 80%

**Applied Skill Project: Keyboard & Touch Accessibility Audit (15 points):**
- Conduct keyboard-only testing on provided design mockup
- Measure focus indicators against WCAG 2.2 SC 2.4.11
- Test touch targets using Stark
- Document findings with blueline annotations
- Provide specific recommendations for all three outcomes

---

## Resources

### WCAG Documentation
- [Understanding 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [Understanding 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [Understanding 2.4.11: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [Understanding 2.5.8: Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

### Testing Tools
- Stark: Touch target testing and visual overlays
- Browser DevTools: Focus indicator inspection and measurement
- 24×24 pixel bookmarklet for quick visual verification

### Additional Reading
- WebAIM: Keyboard Accessibility
- Deque: Accessible Focus Indicators
- Adobe Digital Accessibility Guide: Keyboard Focus

---

**Document Version:** 1.0  
**Last Updated:** December 16, 2025  
**Author:** DACE Curriculum Team

