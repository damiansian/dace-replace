# L14: Windows High Contrast Mode - Learning Objectives

**Source:** `project-documents/14-windows-high-contrast/knowledge-base/curriculum-development/L14_windows_high_contrast_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2E.01, 2E.02, 2E.03

## Overview

This module teaches designers how to test and design for Windows High Contrast Mode (also known as Forced Colors Mode). Students learn how the Windows forced colors system overrides author-defined colors, which CSS properties are respected and which are overridden, how to identify common failures where UI elements disappear or become unusable, and how to create designs that adapt appropriately to user color preferences. This lesson bridges the gap between the visual AT tools covered in L12 (screen magnification) and the broader user preferences covered in L15.

## Connection to L13: Voice Control

This lesson continues the Define Badge's survey of assistive technologies:

- L12 introduced screen magnification (visual AT)
- L13 covered voice control (motor/speech AT)
- L14 covers Windows High Contrast Mode (visual customization AT)
- Students are building a comprehensive understanding of how different AT categories affect design decisions

This is the first lesson focused on a platform-specific accessibility feature that changes how colors are rendered. It connects directly to L03 (Color Contrast) from the Discover Badge, but at a deeper, implementation-aware level.

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L14 |
|-------------------|-------|------------------|
| **1.4.11 Non-text Contrast** | AA | UI components and graphical objects must maintain meaning in forced colors |
| **1.4.1 Use of Color** | A | Information conveyed by color alone is lost when forced colors override author styles |
| **1.4.3 Contrast (Minimum)** | AA | Forced colors mode exists because users need different contrast than the author provides |
| **1.3.1 Info and Relationships** | A | Visual relationships communicated only through color may disappear in forced colors |
| **1.1.1 Non-text Content** | A | Images and icons that rely on specific colors may become invisible in forced colors |

## Learning Outcomes

### 2E.01: Test designs in Windows High Contrast Mode

**Outcome Statement:**  
Validate that designs remain usable with forced colors.

**Knowledge Component:**
- Understand that Windows High Contrast Mode (now called "Contrast themes" in Windows 11) overrides author-defined colors with user-chosen system colors
- Know the default high contrast themes: High Contrast #1 (white on black), High Contrast #2 (black on white), High Contrast Black, High Contrast White
- Understand that forced colors mode maps CSS color properties to a limited set of system color keywords (Canvas, CanvasText, LinkText, ButtonFace, ButtonText, Highlight, HighlightText, etc.)
- Know that the CSS media query `@media (forced-colors: active)` detects when forced colors are enabled
- Understand that `-ms-high-contrast` is the legacy media query (Edge Legacy and IE), while `forced-colors` is the modern standard
- Know that Chromium-based browsers (Chrome, Edge) and Firefox support the `forced-colors` media query
- Understand that macOS does not have a direct equivalent of Windows forced colors, but "Increase Contrast" in macOS accessibility settings provides a related experience

**Skills Component:**
- Enable Windows High Contrast Mode using Settings > Accessibility > Contrast themes (or Left Alt + Left Shift + Print Screen shortcut)
- Navigate between different high contrast themes to test designs
- Use browser DevTools to emulate forced colors mode (Chrome DevTools: Rendering panel > Emulate CSS media feature > forced-colors: active)
- Identify elements that become invisible, lose their boundaries, or lose meaning in high contrast mode
- Compare the original design intent with the high contrast rendering to find discrepancies

**Application Component:**
- Incorporate Windows High Contrast Mode testing into the design review process
- Use DevTools emulation when a Windows machine is unavailable
- Document forced colors findings with before/after screenshots
- Communicate forced colors issues to engineering with specific CSS-level recommendations

### 2E.02: Identify high contrast mode failures

**Outcome Statement:**  
Recognize when design elements disappear or become unusable in forced colors.

**Knowledge Component:**
- Understand that CSS `background-color`, `color`, `border-color`, and `outline-color` are overridden by the system in forced colors mode
- Know that CSS `background-image` is preserved (not overridden), which is why some elements use transparent borders or background-image-based workarounds
- Understand that SVG `fill` and `stroke` are overridden, which can make icons disappear if they rely on specific color values
- Know that `box-shadow` is removed in forced colors mode, so elements that use shadow as their only visible boundary disappear
- Understand that custom focus indicators using only `box-shadow` become invisible, making keyboard navigation impossible
- Know that images set via CSS `background-image` may have poor contrast against the forced background color
- Understand that `currentColor` is useful because it adapts to the forced text color

**Skills Component:**
- Identify buttons and interactive elements that lose their visible boundaries
- Spot custom form controls (checkboxes, toggles, sliders) that become invisible or lose their state indication
- Recognize icons and SVGs that disappear or become unreadable
- Find focus indicators that vanish because they rely on box-shadow
- Detect information graphics and charts that lose meaning when colors are overridden

**Application Component:**
- Create a forced colors testing checklist for common failure patterns
- Prioritize failures by user impact (non-functional controls > missing boundaries > visual inconsistencies)
- Document failures with specific CSS property analysis
- Recommend fixes that work both in and out of forced colors mode

### 2E.03: Design for forced colors compatibility

**Outcome Statement:**  
Create designs that adapt appropriately to user color preferences.

**Knowledge Component:**
- Understand the `forced-color-adjust` CSS property: `auto` (default, system overrides colors) vs `none` (opt out of forced colors, use with caution)
- Know that `forced-color-adjust: none` should be used sparingly and only when the component provides its own accessible alternative (such as data visualizations with patterns)
- Understand that transparent borders become visible in forced colors mode, which is a useful technique for ensuring element boundaries
- Know that the CSS system color keywords (`ButtonText`, `Canvas`, `CanvasText`, etc.) can be used within `@media (forced-colors: active)` to reference the user's chosen colors
- Understand that focus indicators should use `outline` (which is preserved) rather than only `box-shadow` (which is removed)
- Know that checked states on custom checkboxes and toggles should use `border` or content-based indicators rather than only `background-color`
- Understand that icons should use `currentColor` for stroke/fill to adapt to forced text colors

**Skills Component:**
- Specify focus indicators that use `outline` as the primary visible indicator
- Design custom form controls with border-based state indicators rather than background-color-only states
- Choose icon approaches that adapt to forced colors (SVG with `currentColor`, or inline SVG)
- Create data visualizations that use patterns, textures, or labels in addition to color
- Use the `@media (forced-colors: active)` query to provide specific forced-colors styling when needed

**Application Component:**
- Review design systems for forced-colors compatibility
- Annotate designs with forced-colors considerations for engineering
- Advocate for "transparent border" patterns in component libraries
- Create before/after documentation showing how designs adapt in forced colors mode

---

## Define Badge: AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required

### Knowledge Objectives
- Explain how Windows Forced Colors Mode overrides author-defined CSS colors with user-chosen system colors
- Identify which CSS properties are overridden (color, background-color, border-color) and which are preserved (background-image)
- Describe common failure patterns: invisible buttons, lost focus indicators, disappearing icons, and state indicators that rely only on color
- Understand the `forced-colors` media query and CSS system color keywords

### Skills Objectives
- Enable and test with Windows High Contrast Mode or browser DevTools forced-colors emulation
- Identify forced-colors failures in real product interfaces
- Test custom form controls, icons, focus indicators, and data visualizations in forced colors
- Use browser DevTools to emulate forced colors when a Windows machine is unavailable

### Application Objectives
- Incorporate forced-colors testing into the design review process
- Recommend CSS-level fixes for forced-colors failures (transparent borders, outline-based focus, currentColor for icons)
- Annotate designs with forced-colors requirements for engineering teams
- Prioritize forced-colors issues by user impact

### Assessment Methods
- Quiz: 5 multiple choice questions testing forced-colors understanding and failure identification
- Applied Practice: Test a product interface in forced-colors mode and document findings

---

## Lesson Checkpoints

### Checkpoint 1: Understanding forced colors
- I can explain what Windows High Contrast Mode does to CSS colors
- I know which CSS properties are overridden and which are preserved

### Checkpoint 2: Enabling and testing
- I can enable forced-colors mode on Windows or use DevTools emulation
- I can switch between different high contrast themes

### Checkpoint 3: Identifying failures
- I can spot buttons, icons, and form controls that become invisible
- I can find focus indicators that disappear in forced colors

### Checkpoint 4: Designing compatible solutions
- I can recommend CSS techniques for forced-colors compatibility
- I understand when to use transparent borders, outline, and currentColor

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2E.01 | How forced colors mode affects CSS properties |
| Q2 | 2E.02 | Identifying invisible focus indicators |
| Q3 | 2E.02 | Custom form control failures in forced colors |
| Q4 | 2E.03 | CSS techniques for forced-colors compatibility |
| Q5 | 2E.03 | Appropriate use of forced-color-adjust |

---

## Resources

**Testing Tools:**
- Windows Settings > Accessibility > Contrast themes
- Chrome DevTools: Rendering panel > Emulate forced-colors
- Firefox DevTools: Accessibility panel > Simulate

**Reference Guides:**
- MDN: CSS forced-color-adjust property
- MDN: CSS system color keywords
- W3C: CSS Color Adjustment Module Level 1 (forced-colors)
- Adrian Roselli: "Windows High Contrast Mode" blog posts

**WCAG:**
- Understanding SC 1.4.11: Non-text Contrast
- Understanding SC 1.4.1: Use of Color

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L14: Windows High Contrast Mode*
