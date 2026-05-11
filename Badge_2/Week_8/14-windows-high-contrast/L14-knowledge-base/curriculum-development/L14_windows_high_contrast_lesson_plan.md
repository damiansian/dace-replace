# L14: Windows High Contrast Mode - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2E.01, 2E.02, 2E.03

---

## Lesson Overview

This in-person lesson teaches designers how to test and design for Windows High Contrast Mode (Forced Colors Mode). Students learn how the Windows operating system overrides author-defined colors, discover common failure patterns where UI elements disappear or lose meaning, and practice CSS-level techniques for creating designs that adapt to user color preferences.

**Why This Matters:** Approximately 4% of Windows users enable high contrast settings. When forced colors are active, the operating system overrides CSS color properties, which means background colors, border colors, and text colors are replaced by user-chosen system colors. Designs that rely solely on color differences for boundaries, states, or meaning can break entirely. Designers who understand forced colors can specify resilient components that work regardless of the user's color settings.

**Connection to Previous Lessons:** This lesson connects to L03 (Color Contrast) from the Discover Badge, where students learned about color contrast ratios and color independence. L14 goes deeper: instead of just testing contrast ratios, students now understand a system-level feature that overrides contrast entirely. It also connects to L12 (Screen Magnification), which introduced another visual AT that changes how designs appear.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 1.4.11 | Non-text Contrast | AA | UI components and graphical objects need sufficient contrast (applies to forced colors) |
| 1.4.1 | Use of Color | A | Color must not be the only visual means of conveying information |
| 1.4.3 | Contrast (Minimum) | AA | Text must have sufficient contrast (forced colors overrides this) |
| 1.3.1 | Info and Relationships | A | Visual relationships must be programmatically determinable |
| 1.1.1 | Non-text Content | A | Non-text content must have text alternatives |

---

## Content Outline

### Section 0: Introduction (3 min)
- Connection to L03 (Color Contrast) and L12 (Screen Magnification)
- Lesson objectives display (2E.01, 2E.02, 2E.03)
- Quick demo: show a well-designed product page, then toggle high contrast mode to reveal failures
- Today's agenda: how forced colors work, common failures, design techniques for compatibility

### Section 1: How Forced Colors Work (11 min)

**1.1 What is Windows High Contrast Mode?**
- Windows system-level feature that overrides author-defined colors
- Renamed to "Contrast themes" in Windows 11
- Users choose from predefined themes or create custom themes
- The system maps CSS color properties to a limited set of system colors
- Purpose: users with low vision, light sensitivity, migraines, or reading difficulties choose colors that work for them

**1.2 Which CSS Properties Are Affected?**

| Affected (Overridden) | Preserved (Not Overridden) |
|------------------------|---------------------------|
| `color` | `background-image` |
| `background-color` | `opacity` |
| `border-color` | `border-style` (width preserved, color overridden) |
| `outline-color` | `filter` |
| `box-shadow` (removed entirely) | `mix-blend-mode` |
| `text-shadow` (removed entirely) | Images via `<img>` tag |
| SVG `fill` and `stroke` | `text-decoration-style` |
| `column-rule-color` | `background-size`, `background-position` |

**1.3 System Color Keywords**
- `Canvas`: page background color
- `CanvasText`: default text color
- `LinkText`: link color
- `ButtonFace`: button background
- `ButtonText`: button text
- `Highlight`: selection/active background
- `HighlightText`: selection/active text
- These keywords can be used in CSS within `@media (forced-colors: active)` blocks

**1.4 How to Enable Forced Colors**
- Windows: Settings > Accessibility > Contrast themes (or Left Alt + Left Shift + Print Screen)
- Chrome DevTools: Rendering panel > Emulate CSS media feature > forced-colors: active
- Firefox: Accessibility panel > Simulate

**1.5 Platform applicability: Where can you test?**
- Windows High Contrast Mode is Windows-only. Native testing requires Windows.
- Mac desktop: No native WHCM; use Chrome or Firefox DevTools emulation only.
- iOS and Android: No native forced colors mode; use desktop DevTools emulation for testing.

**Key Message:** Forced colors is not just "dark mode." It is a system-level override that replaces your carefully chosen colors with the user's preferred colors. Your design must still work when this happens.

### Section 2: Common Failure Patterns (12 min)

**2.1 Invisible Buttons and Controls**
- Buttons styled only with `background-color` (no border): the background is overridden to match the page background, making the button invisible
- Fix: add a transparent border (`border: 2px solid transparent`), which becomes visible in forced colors because the border-color is overridden to a system color

**2.2 Lost Focus Indicators**
- Custom focus styles using only `box-shadow`: shadow is removed entirely in forced colors
- Users cannot see where keyboard focus is, making the interface unusable via keyboard
- Fix: always include `outline` as the primary focus indicator; `box-shadow` can supplement but not replace it

**2.3 Disappearing Icons**
- SVG icons with hardcoded `fill` colors: the fill is overridden, potentially matching the background
- CSS background-image icons: preserved but may have poor contrast against the forced background
- Fix: use `currentColor` for SVG fill/stroke so icons adapt to the forced text color

**2.4 Custom Form Controls**
- Custom checkboxes showing "checked" state only via `background-color`: state becomes invisible
- Custom toggles/switches relying on color for on/off indication: both states look identical
- Fix: use border changes, content insertion (checkmark characters), or visible indicators beyond color

**2.5 Data Visualizations**
- Charts and graphs relying on color to differentiate series: all series may render in the same color
- Fix: add patterns, textures, labels, or other non-color differentiators

**2.6 Hands-on: Failure Identification Exercise**
- Open prepared test page with common failure patterns
- Enable forced colors (via Windows or DevTools emulation)
- Identify as many failures as possible in 3 minutes
- Discuss findings as a group

**Key Message:** Most forced-colors failures happen because designs assume the author controls the final color rendering. In forced colors mode, the user controls the colors. Design elements must communicate their purpose through structure, not just color.

### Section 3: Designing for Forced Colors Compatibility (12 min)

**3.1 The Transparent Border Technique**
- Add `border: 2px solid transparent` to interactive elements
- In normal mode: the border is invisible (transparent)
- In forced colors: the border-color is overridden to a system color, making the element boundary visible
- This single technique fixes the majority of invisible-button failures

**3.2 Outline-Based Focus Indicators**
- `outline` is preserved in forced colors (the outline-color is overridden to a system color, but the outline remains visible)
- `box-shadow` is removed entirely
- Recommendation: use `outline` as the primary focus indicator, with `box-shadow` as a visual enhancement in normal mode
- Example: `outline: 3px solid transparent; box-shadow: 0 0 0 3px blue;` (works in both modes)

**3.3 Using currentColor for Icons**
- SVG `fill` and `stroke` set to `currentColor` inherit the text color
- In forced colors, `currentColor` resolves to the system text color
- Icons that use `currentColor` automatically adapt to any color theme

**3.4 The forced-colors Media Query**
- `@media (forced-colors: active) { ... }` targets forced colors mode specifically
- Use to provide alternate styles when needed (border additions, content-based state indicators)
- Use CSS system color keywords within this media query to reference user's chosen colors

**3.5 The forced-color-adjust Property**
- `forced-color-adjust: auto` (default): system overrides colors
- `forced-color-adjust: none`: opts out of system color overrides
- Use `none` sparingly: only for elements like data visualizations that provide their own accessible alternatives
- Using `none` on interactive elements removes the user's chosen colors, defeating the purpose

**3.6 Hands-on: Fix Common Failures**
- Given a page with forced-colors failures, apply fixes:
  1. Add transparent borders to buttons
  2. Switch box-shadow focus indicators to outline
  3. Change SVG fill to currentColor
  4. Add a forced-colors media query for custom form controls

**Key Message:** Designing for forced colors is not about special handling. It is about building robust components that communicate through structure (borders, outlines, content) in addition to color. The same techniques that fix forced-colors issues often improve the design for everyone.

### Section 4: Summary and Assessment (8 min)

**4.1 Key Takeaways**
- Forced colors override: `color`, `background-color`, `border-color`, `box-shadow` (removed), SVG `fill`/`stroke`
- Preserved: `background-image`, `outline` (color overridden but visible), `opacity`, images
- Common failures: invisible buttons, lost focus, disappearing icons, indistinguishable states
- Key techniques: transparent borders, outline focus, `currentColor`, `@media (forced-colors: active)`

**4.2 The Designer's Role**
- You do not write the CSS, but you specify the requirements
- Your annotations should include: "element must have visible boundary in forced colors"
- Testing forced colors should be part of your regular design review process
- DevTools emulation makes this testable on any machine

**4.3 Quiz Preview**
- 5 questions covering forced colors mechanics, failure identification, and design techniques

**4.4 Next Lesson Preview**
- L15: User Preferences and System Settings
- Broader look at respecting user accessibility preferences
- Reduced motion, color scheme preferences, text size settings
- Building on the forced colors foundation from this lesson

---

## Materials Needed

- Windows machine or VM with high contrast themes (preferred)
- Chrome browser with DevTools (for forced-colors emulation as a backup)
- Prepared test page with:
  - Buttons with background-color-only styling (no borders)
  - Custom focus indicators using only box-shadow
  - SVG icons with hardcoded fill colors
  - Custom checkboxes and toggles relying on background-color for state
  - A simple data visualization using color-coded series
  - A "fixed" version of the same page showing solutions
- Before/after screenshots of common forced-colors failures

---

## Instructor Notes

### Common Student Questions

**Q: Do I need a Windows machine to test forced colors?**
A: Ideally yes, but Chrome DevTools provides forced-colors emulation that works on any platform. It simulates the "High Contrast #1" theme (white text on black background). The emulation is good enough for catching most issues, though testing on a real Windows machine is more thorough.

**Q: Is forced colors the same as dark mode?**
A: No. Dark mode is an author-controlled color scheme with two options (light and dark). Forced colors is a system-level override that replaces all author-defined colors with user-chosen system colors. The user has full control, and there are multiple themes, not just two.

**Q: If the user wants these colors, should I really be overriding their choice?**
A: You should NOT override their choice. The goal is to ensure your design still works with their colors. Use `forced-color-adjust: none` only on elements that have their own accessible alternative (like a data visualization with text labels).

**Q: Does this affect macOS or Linux users?**
A: macOS has "Increase Contrast" in accessibility settings, which enhances the contrast of native UI elements but does not override web content colors the way Windows does. Linux has some high-contrast themes, but the forced-colors CSS mechanism is Windows-specific. However, the CSS `forced-colors` media query is a web standard and would apply on any platform that implements it.

**Q: Can I test on iOS or Android?**
A: No. iOS and Android do not have a native forced colors mode. To test how your design behaves in forced colors when targeting mobile, use Chrome or Firefox DevTools forced-colors emulation on a desktop machine.

**Q: How does this relate to the L03 color contrast lesson?**
A: L03 taught contrast ratios: making sure your colors provide enough contrast. L14 teaches what happens when the user decides your colors are not enough and overrides them entirely. L03 is about meeting minimum standards; L14 is about ensuring your design survives when the user takes control of color.

### Timing Adjustments

If running short:
- Reduce hands-on time in Sections 2.6 and 3.6
- Combine the failure identification and fix exercises into one exercise
- Skip the data visualization failure example

If running long:
- Extend the hands-on fix exercise to cover more component types
- Have students test their own product interfaces in forced colors
- Add a DevTools inspection exercise showing which properties are being overridden

### Classroom Setup Notes
- If using Windows machines, pre-configure high contrast theme keyboard shortcut (Left Alt + Left Shift + Print Screen)
- If using DevTools emulation, pre-open the Rendering panel for students
- Have the prepared test pages loaded in both normal and forced-colors modes for side-by-side comparison
- Prepare before/after screenshots for the presentation to avoid switching during the lecture

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L14: Windows High Contrast Mode*
