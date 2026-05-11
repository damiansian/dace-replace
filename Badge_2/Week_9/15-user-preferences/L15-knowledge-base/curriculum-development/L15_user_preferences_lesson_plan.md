# L15: User Preferences and System Settings - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2F.01, 2F.02, 2F.03

---

## Lesson Overview

This in-person lesson teaches designers how operating system and browser accessibility preferences affect their designs, and how to create preference-responsive designs that adapt gracefully. While earlier Define Badge lessons covered individual assistive technologies, this lesson addresses the broader landscape of user preferences that cut across all AT categories: reduced motion, color scheme, text size, and contrast preferences.

**Why This Matters:** Users configure accessibility preferences at the system level, and they expect products to respect those choices automatically. A user who enables dark mode expects dark mode everywhere. A user who enables reduced motion expects calm interfaces everywhere. Designers who understand these preferences can specify responsive behaviors that engineering teams implement, and then test to verify correct behavior.

**Connection to Earlier Lessons:** This lesson unifies concepts introduced in L08 (prefers-reduced-motion), L12 (text scaling and zoom), and L14 (forced colors/high contrast). Students have seen individual preferences before; now they learn the complete preference framework and how to systematically test and specify for all of them.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 1.4.4 | Resize Text | AA | Text resizable up to 200% without loss of content or functionality |
| 1.4.12 | Text Spacing | AA | Content adapts when users override line height, letter, word, and paragraph spacing |
| 2.3.3 | Animation from Interactions | AAA | Motion triggered by interaction can be disabled |
| 1.4.3 | Contrast (Minimum) | AA | Minimum contrast ratios apply across all color scheme states |
| 1.4.11 | Non-text Contrast | AA | UI components must maintain contrast across color schemes |

---

## Content Outline

### Section 0: Introduction (3 min)
- Connection to earlier lessons: L08 (motion), L12 (zoom), L14 (high contrast)
- Lesson objectives display (2F.01, 2F.02, 2F.03)
- Key framing: users set preferences once in system settings, and they expect every product to respect them
- Today's agenda: preference landscape, design specification, testing workflow

### Section 1: The Preference Landscape (10 min)

**1.1 Where Users Set Preferences**

| Platform | Location | Key Settings |
|----------|----------|-------------|
| macOS | System Settings > Accessibility > Display | Reduce motion, Increase contrast, Reduce transparency, Dark mode |
| Windows | Settings > Accessibility > Visual effects | Animation effects, Transparency, Contrast themes, Dark mode |
| iOS | Settings > Accessibility > Display & Text Size | Bold text, Larger text, Reduce motion, Increase contrast, Dark mode |
| Android | Settings > Accessibility > Display | Font size, Display size, Remove animations, Dark theme, High contrast |
| Browser | Settings + DevTools | Font size, Zoom, Forced colors emulation, Media query emulation |

**1.2 CSS Media Queries That Detect Preferences**

| Media Query | Detects | Values |
|-------------|---------|--------|
| `prefers-reduced-motion` | System reduced motion setting | `no-preference`, `reduce` |
| `prefers-color-scheme` | Light or dark theme preference | `light`, `dark` |
| `prefers-contrast` | Contrast preference | `no-preference`, `more`, `less`, `custom` |
| `forced-colors` | Forced colors mode (Windows HC) | `none`, `active` |

**1.3 Text Size Preferences**
- iOS Dynamic Type: users select a preferred text size that apps should respect
- Android font size and display size settings
- Browser font size settings (affects rem-based sizing)
- These are not detected by media queries but by using relative units (rem, em) and Dynamic Type APIs

**Key Message:** These preferences are not edge cases. Screen reader users are a small percentage of the population, but dark mode users, reduced motion users, and large text users are a significant share. Designing for preferences is designing for a large audience.

### Section 2: Designing for Preference Responsiveness (12 min)

**2.1 Dark Mode Design**
- Dark mode is not "invert all colors": it requires intentional color design
- Background surfaces shift from light to dark gray (not pure black for most designs)
- Text shifts from dark to light, but pure white (#FFFFFF) on pure black (#000000) can cause halation for some users
- Shadows become less effective; use borders or elevation cues instead
- Images may need treatment: semi-transparent overlays or alternative dark-mode assets
- Contrast requirements (WCAG 1.4.3 and 1.4.11) apply in dark mode too: verify with contrast checkers
- Design token approach: semantic tokens (surface-primary, text-primary) that resolve to different values per mode

**2.2 Reduced Motion Alternatives**
- Recap from L08: `prefers-reduced-motion: reduce` disables non-essential animation
- Reduced motion does not mean "no motion": it means "less motion"
- Strategies:
  - Replace slide/fly with fade or instant
  - Replace continuous animation with static states
  - Replace parallax with static backgrounds
  - Preserve essential animation (progress indicators, loading states)
- Document alternatives: for each animated component, specify what happens in reduced motion

**2.3 Text Size and Spacing**
- Designs must work at 200% text size (WCAG 1.4.4)
- Layouts should accommodate increased line height (1.5x), letter spacing (0.12em), word spacing (0.16em), and paragraph spacing (2x) per WCAG 1.4.12
- Fixed-height containers with overflow:hidden break when text scales
- Truncation is acceptable only when a mechanism to access full content exists
- Designers should test their layouts with scaled text and specify overflow behavior

**2.4 Increased Contrast**
- `prefers-contrast: more` signals that the user wants higher contrast
- May require: thicker borders, bolder focus indicators, higher-contrast color pairings
- Different from forced colors (L14): increased contrast is a request, not an override
- Designers can specify "high contrast" design tokens that are used when this preference is active

**2.5 Hands-on: Specify Preference-Responsive Behavior**
- Given a card component with: dark text on light background, hover animation (scale up), and 14px body text
- Specify the dark mode alternative
- Specify the reduced motion alternative
- Specify behavior at 200% text size
- Document as a design annotation

**Key Message:** Preference-responsive design is not about creating multiple separate designs. It is about specifying how one design adapts across preference states, using design tokens and alternative behaviors.

### Section 3: Testing with Modified Preferences (12 min)

**3.1 Browser DevTools Emulation**
- Chrome DevTools > Rendering tab > Emulate CSS media features
- Can emulate: `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`, `forced-colors`
- This tests the CSS implementation without changing system settings
- Firefox: about:config preferences for media query emulation

**3.2 System-Level Testing**
- macOS: System Settings > Accessibility > Display (toggle each setting)
- Windows: Settings > Accessibility > Visual effects, Contrast themes
- iOS: Settings > Accessibility > Display & Text Size
- Android: Settings > Accessibility > Display
- System-level testing catches issues that browser emulation misses (native UI, system chrome)

**3.3 Testing Checklist**
For each preference, verify:
1. The preference is detected (visual change occurs)
2. Content remains readable and usable
3. Contrast requirements are met in the new state
4. No content is hidden or clipped
5. Interactive elements remain distinguishable and operable
6. The experience quality is maintained (not just functional, but good)

**3.4 Common Preference Combinations**
- Dark mode + reduced motion (very common combination)
- Large text + reduced transparency
- High contrast + dark mode
- Large text + dark mode
- Test at least these combinations, not just individual preferences

**3.5 Hands-on: Preference Testing Lab**
- Open a prepared test page (or a real product page)
- Test with each preference individually using Chrome DevTools
- Test with dark mode + reduced motion combination
- Test with browser font size set to "Very Large"
- Document one finding per preference state

**Key Message:** Preference testing should be part of every design review, not an afterthought. A simple checklist makes it systematic.

### Section 4: Summary and Assessment (8 min)

**4.1 Key Takeaways**
- Users set preferences at the system level and expect products to respect them
- Three CSS media queries detect the most common preferences: prefers-reduced-motion, prefers-color-scheme, prefers-contrast
- Text size preferences require relative units and flexible layouts, not media queries
- Preference-responsive design means specifying alternative behaviors, not building separate products
- Testing requires both browser emulation and system-level setting changes

**4.2 The Designer's Role**
- Specify preference-responsive behavior in design annotations
- Provide dark mode color tokens with verified contrast ratios
- Document reduced motion alternatives for animated components
- Test layouts at scaled text sizes and document overflow behavior
- Include preference testing in design review checklists

**4.3 Quiz Preview**
- 5 questions covering preference identification, design specification, and testing methodology

**4.4 Next Lesson Preview**
- L16: Perceptual and Cognitive Design Considerations
- Moving from AT-specific topics to broader perceptual and cognitive accessibility
- Spatial hierarchy, visual density, and component semantics

---

## Materials Needed

- Mac with macOS System Settings > Accessibility available
- Windows machine or VM with Windows Settings > Accessibility available
- Chrome browser with DevTools (Rendering tab for media query emulation)
- iOS device with Settings > Accessibility > Display & Text Size (optional, for demo)
- Prepared test page with:
  - Light and dark mode support
  - Animated components with prefers-reduced-motion support
  - Text content at default and scaled sizes
  - Components with contrast-dependent styling
- Preference testing checklist handout
- Design annotation template for preference-responsive specifications

---

## Instructor Notes

### Common Student Questions

**Q: Do all browsers support these media queries?**
A: `prefers-reduced-motion` and `prefers-color-scheme` have excellent support across all modern browsers. `prefers-contrast` has good support in Chrome, Edge, and Firefox, with Safari adding support more recently. `forced-colors` is primarily relevant for Windows/Edge/Chrome. Check caniuse.com for current support data.

**Q: Should every component have a dark mode design?**
A: If the product supports dark mode (and most should), then yes, every component needs dark mode specifications. The most efficient approach is using semantic design tokens: define colors as "surface-primary" and "text-primary" rather than specific hex values, then map those tokens to different values per mode.

**Q: What about users who set their own custom CSS?**
A: Custom user stylesheets and browser extensions (like high contrast browser extensions) are outside the scope of CSS media queries. WCAG 1.4.12 (Text Spacing) specifically tests whether content breaks when users override spacing properties. The principle is: do not prevent user overrides.

**Q: Is prefers-contrast the same as Windows High Contrast Mode?**
A: No. `prefers-contrast: more` is a softer preference: the user wants higher contrast but does not want the full forced-colors override. `forced-colors: active` (covered in L14) is the aggressive Windows High Contrast Mode that overrides all colors with system colors. They are different features that serve overlapping but distinct user needs.

**Q: How do I test on mobile if there's no DevTools emulation?**
A: On mobile, you must toggle actual system settings. Go to Settings > Accessibility on iOS or Android and change preferences there. This is actually better testing because it reflects the real user experience, including how native UI elements respond to the settings.

### Timing Adjustments

If running short:
- Reduce the hands-on in Section 2.5 to a discussion only
- Combine the DevTools and system testing demos in Section 3
- Cut the preference combination testing in Section 3.4

If running long:
- Extend the hands-on testing lab in Section 3.5
- Add a design annotation exercise where students write full preference specs
- Allow students to test with their own product designs

### Classroom Setup Notes
- Pre-configure Chrome DevTools with the Rendering tab visible
- Have system accessibility settings windows open and ready on both macOS and Windows
- Pre-build the test page with all preference support implemented
- Prepare a "broken" version of the test page that fails preference testing for the testing exercise
- Print or share the preference testing checklist digitally

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L15: User Preferences and System Settings*
