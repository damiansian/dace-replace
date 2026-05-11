# L15: User Preferences and System Settings - Learning Objectives

**Source:** `project-documents/15-user-preferences/knowledge-base/curriculum-development/L15_user_preferences_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2F.01, 2F.02, 2F.03

## Overview

This lesson teaches designers how operating system and browser accessibility settings affect their designs, and how to create designs that respect those preferences. While previous Define Badge lessons focused on specific assistive technologies (screen readers, magnification, voice control, high contrast mode), this lesson addresses the broader landscape of user preference settings that cut across all AT categories.

Users configure accessibility preferences at the operating system level (reduced motion, dark mode, increased text size, high contrast), and well-designed products should detect and respond to these preferences automatically. Designers who understand these settings can specify responsive behaviors in their design annotations and test with modified preferences to verify correct behavior.

## Connection to Previous Define Badge Lessons

This lesson builds on concepts from several earlier lessons:

- **L08 (Motion):** Introduced `prefers-reduced-motion` from the Discover perspective. L15 deepens this into a broader framework of preference detection and response.
- **L14 (Windows High Contrast):** Introduced `forced-colors` media query. L15 expands to the full set of CSS preference media queries.
- **L12 (Screen Magnification):** Covered browser zoom and system magnification. L15 addresses system-level text size preferences (Dynamic Type, browser font size).

This lesson unifies these individual concepts into a systematic approach to preference-responsive design.

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L15 |
|-------------------|-------|------------------|
| **1.4.4 Resize Text** | AA | Text must be resizable up to 200% without loss of content or functionality |
| **1.4.12 Text Spacing** | AA | Content must adapt when users override text spacing properties |
| **2.3.3 Animation from Interactions** | AAA | Motion triggered by interaction can be disabled (prefers-reduced-motion) |
| **1.4.3 Contrast (Minimum)** | AA | Minimum contrast ratios, relevant to prefers-contrast and color scheme preferences |
| **1.4.11 Non-text Contrast** | AA | UI components and graphical objects must maintain contrast across color schemes |

## Learning Outcomes

### 2F.01: Identify system accessibility settings

**Outcome Statement:**  
Know where users configure accessibility preferences across platforms and understand what each preference controls.

**Knowledge Component:**
- Know where to find accessibility settings on macOS (System Settings > Accessibility), Windows (Settings > Accessibility), iOS (Settings > Accessibility), and Android (Settings > Accessibility)
- Understand the categories of system accessibility preferences: display (text size, bold text, reduce transparency), motion (reduce motion, auto-play videos), color (color filters, invert colors, dark mode), and interaction (touch accommodations, switch control)
- Know that browsers expose user preferences through CSS media queries: `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`, and `forced-colors`
- Understand that `prefers-reduced-motion` detects the system-level reduced motion setting
- Know that `prefers-color-scheme` detects whether the user has requested a light or dark color theme
- Know that `prefers-contrast` detects whether the user has requested increased or decreased contrast
- Understand that these preferences are set independently by users and can be active in any combination

**Skills Component:**
- Locate and toggle accessibility preference settings on macOS and Windows
- Locate and toggle accessibility preference settings on iOS and Android
- Enable and disable reduced motion, dark mode, and increased contrast in system settings
- Use browser developer tools to emulate CSS media query preferences
- Identify which system settings map to which CSS media queries

**Application Component:**
- Create a reference guide mapping system settings to CSS media queries for a design team
- Identify which user preferences are relevant to a specific design component
- Advise engineering teams on which preference media queries to implement for a given feature

### 2F.02: Design for preference responsiveness

**Outcome Statement:**  
Create designs that respond to reduced motion, color scheme, and text size preferences by specifying alternative behaviors for each preference state.

**Knowledge Component:**
- Understand that preference-responsive design means providing alternative experiences, not degraded experiences
- Know that dark mode designs require re-evaluating contrast ratios, shadow effects, and image treatments
- Understand that reduced motion alternatives should preserve meaning while removing or minimizing animation
- Know that text size preferences (Dynamic Type on iOS, font-size in browsers) can scale text significantly
- Understand that designs must accommodate text scaling without breaking layouts or hiding content
- Know that increased contrast preferences may require bolder borders, thicker focus indicators, and higher contrast color pairings
- Understand the concept of "graceful adaptation": designs that work across all preference states without requiring separate layouts

**Skills Component:**
- Specify dark mode and light mode color tokens that maintain WCAG contrast requirements in both modes
- Design reduced motion alternatives for animated components (fade instead of slide, instant instead of eased)
- Specify text sizing behavior: which elements scale, minimum and maximum sizes, and overflow handling
- Create design annotations that document preference-responsive behavior for each component state
- Design layouts that accommodate 200% text scaling without horizontal scrolling

**Application Component:**
- Audit an existing design for preference responsiveness across all major settings
- Create a preference response matrix documenting how each component should adapt
- Specify design tokens that automatically respond to color scheme preferences
- Write design annotations that include preference-responsive behavior specifications

### 2F.03: Test with modified user preferences

**Outcome Statement:**  
Validate designs with various accessibility settings enabled by systematically testing each preference state and combination.

**Knowledge Component:**
- Know how to use Chrome DevTools rendering tab to emulate `prefers-reduced-motion`, `prefers-color-scheme`, and `prefers-contrast`
- Understand that testing requires checking each preference individually AND common combinations
- Know the key combinations to test: dark mode + reduced motion, increased contrast + large text, dark mode + increased contrast
- Understand that mobile testing requires toggling actual system settings (emulation is not available on mobile browsers)
- Know that some preferences affect the entire OS chrome, not just web content (Dynamic Type affects native UI)
- Understand that preference testing should verify both functionality and visual quality

**Skills Component:**
- Test with `prefers-reduced-motion: reduce` enabled in both system settings and browser devtools
- Test with `prefers-color-scheme: dark` to verify dark mode rendering
- Test with `prefers-contrast: more` to verify increased contrast support
- Test with browser font size set to "Very Large" or "Largest"
- Test on mobile devices with Dynamic Type / font scaling enabled
- Document preference testing findings with screenshots showing each state

**Application Component:**
- Create a preference testing checklist for a design review workflow
- Conduct a systematic preference audit across a complete user flow
- Document preference testing results with specific recommendations for engineering
- Prioritize preference-responsiveness gaps by user impact and implementation effort

---

## Define Badge: AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required, L08 Motion lesson completed

### Knowledge Objectives
- Identify where users configure accessibility preferences across macOS, Windows, iOS, and Android
- Explain the CSS media queries used to detect user preferences: `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`
- Describe how text size preferences (Dynamic Type, browser font size) affect layout and content
- Explain the principle of graceful adaptation: preference-responsive designs that maintain quality across all states
- Understand common preference combinations users enable and why
- Know the difference between system-level preferences and browser-level settings

### Skills Objectives
- Toggle accessibility preferences in system settings and browser developer tools
- Test designs with each preference state individually and in common combinations
- Specify dark mode, reduced motion, and large text alternatives in design annotations
- Verify that designs maintain WCAG contrast requirements across color scheme preferences
- Document preference testing findings with clear screenshots and recommendations

### Application Objectives
- Audit designs for preference responsiveness across all major user settings
- Create preference response documentation for engineering handoff
- Build preference testing into a design review workflow
- Prioritize preference-responsiveness improvements by user impact
- Specify design tokens and component behaviors that adapt to user preferences

### Assessment Methods
- Quiz: 5 multiple choice questions testing preference identification, design specification, and testing methods
- Project: Combined with L16, preference testing audit of a design system component

---

## Lesson Checkpoints

### Checkpoint 1: Preference landscape
- I can locate accessibility preference settings on at least two platforms
- I can name the three primary CSS media queries for detecting user preferences

### Checkpoint 2: Design specification
- I can specify a dark mode alternative that maintains contrast requirements
- I can describe a reduced motion alternative for an animated component

### Checkpoint 3: Testing workflow
- I can toggle preference emulation in Chrome DevTools
- I can test with modified system settings on a device

### Checkpoint 4: Putting it together
- I can conduct a preference audit across a user flow
- I can document preference testing findings for engineering

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2F.01 | System accessibility settings and CSS media queries |
| Q2 | 2F.02 | Dark mode design and contrast requirements |
| Q3 | 2F.02 | Reduced motion alternatives |
| Q4 | 2F.03 | Preference testing methodology |
| Q5 | 2F.01 | Preference detection and responsive behavior |

---

## Resources

**W3C:**
- WCAG 2.2 Understanding 1.4.12 Text Spacing
- WCAG 2.2 Understanding 1.4.4 Resize Text
- CSS Media Queries Level 5 (prefers-reduced-motion, prefers-color-scheme, prefers-contrast)

**Platform Accessibility Settings:**
- Apple Accessibility (macOS and iOS settings documentation)
- Microsoft Accessibility (Windows settings documentation)
- Google Accessibility (Android settings documentation)

**Reference Materials:**
- MDN: prefers-reduced-motion
- MDN: prefers-color-scheme
- MDN: prefers-contrast
- WebAIM: User Preferences and Accessibility

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L15: User Preferences and System Settings*
