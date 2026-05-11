# L15: User Preferences and System Settings - Quiz Questions

**Lesson:** L15 - User Preferences and System Settings  
**Badge Level:** Define  
**Competency Code:** 2F (User Preferences and System Settings)  
**Number of Questions:** 5  
**Points:** 5 (1 point each)  
**Format:** Multiple choice (4 options each)

---

## Question 1

**Outcome:** 2F.01 (Identify system accessibility settings)

**Stem:**  
A designer needs to verify that a web application responds correctly when a user has enabled the "Reduce motion" setting on macOS. Which CSS media query detects this system preference?

**Options:**
- A) `@media (prefers-color-scheme: reduce)`
- B) `@media (prefers-reduced-motion: reduce)`
- C) `@media (animation: none)`
- D) `@media (prefers-contrast: reduce)`

**Correct Answer:** B

**Rationale:**  
The `prefers-reduced-motion` media query detects whether the user has enabled reduced motion in their operating system settings (such as "Reduce motion" on macOS or "Show animations" off on Windows). When the value is `reduce`, the user has requested less motion. `prefers-color-scheme` detects light/dark mode preference, not motion. `animation: none` is not a valid media feature. `prefers-contrast` detects contrast preferences, not motion preferences.

---

## Question 2

**Outcome:** 2F.02 (Design for preference responsiveness)

**Stem:**  
A designer is creating dark mode specifications for a card component. The light mode design uses dark gray text (#333333) on a white background (#FFFFFF). For dark mode, the designer proposes white text (#FFFFFF) on a pure black background (#000000). A colleague raises an accessibility concern. What is the most likely issue?

**Options:**
- A) Pure black backgrounds are not allowed in dark mode designs
- B) Maximum contrast between pure white and pure black can cause halation (text glowing/blurring) for some users with low vision or astigmatism
- C) Dark mode designs must use inverted colors from the light mode palette
- D) The WCAG contrast ratio between #FFFFFF and #000000 is too low for dark mode

**Correct Answer:** B

**Rationale:**  
While the contrast ratio between pure white (#FFFFFF) and pure black (#000000) is 21:1, which far exceeds WCAG requirements, this maximum contrast can cause "halation" for users with certain visual conditions, including astigmatism and some forms of low vision. Halation makes bright text appear to glow or blur against very dark backgrounds. Best practice for dark mode is to use off-white text on dark gray backgrounds to reduce this effect. Pure black is not strictly prohibited, but the halation risk is a legitimate accessibility concern. Dark mode is not simply color inversion. The 21:1 ratio exceeds, not falls below, WCAG minimums.

---

## Question 3

**Outcome:** 2F.02 (Design for preference responsiveness)

**Stem:**  
A web application has a page transition animation where new content slides in from the right over 300ms. The designer needs to specify a reduced motion alternative. Which approach best respects the `prefers-reduced-motion: reduce` preference while maintaining a usable experience?

**Options:**
- A) Remove the transition entirely so content appears instantly with no visual change
- B) Replace the slide animation with a short fade-in (opacity transition over 150ms)
- C) Keep the same slide animation but slow it down to 1000ms
- D) Replace the animation with a loading spinner that plays until content is ready

**Correct Answer:** B

**Rationale:**  
Reduced motion does not mean "no motion." It means less motion, specifically less vestibular-triggering motion. Spatial movement (sliding, flying, parallax) is more problematic than opacity changes (fading). Replacing a slide with a short fade preserves the visual transition feedback while eliminating the spatial motion that can cause discomfort. Removing the transition entirely (option A) is functional but provides no visual feedback. Slowing the animation makes the problematic spatial motion last longer, potentially worsening the experience. A loading spinner introduces new motion rather than reducing it.

---

## Question 4

**Outcome:** 2F.03 (Test with modified user preferences)

**Stem:**  
A designer is testing a web application for preference responsiveness. They want to test how the application responds to `prefers-color-scheme: dark` without changing their macOS system settings. Where can they emulate this preference in Chrome?

**Options:**
- A) Chrome Settings > Appearance > Dark mode
- B) Chrome DevTools > Elements panel > Computed styles > Force dark mode
- C) Chrome DevTools > Rendering tab > Emulate CSS media feature prefers-color-scheme
- D) Chrome DevTools > Console > Run `document.body.style.colorScheme = 'dark'`

**Correct Answer:** C

**Rationale:**  
Chrome DevTools provides a Rendering tab (accessible via the three-dot menu > More tools > Rendering, or Cmd+Shift+P and searching "Rendering") that includes options to emulate CSS media features including `prefers-color-scheme`, `prefers-reduced-motion`, `prefers-contrast`, and `forced-colors`. This emulates the media query without changing system settings, allowing targeted testing. Chrome's appearance setting changes the browser chrome, not web content media queries. The Elements panel does not have a force dark mode feature for media queries. Setting `colorScheme` via JavaScript does not trigger the media query.

---

## Question 5

**Outcome:** 2F.01 (Identify system accessibility settings)

**Stem:**  
A user has configured multiple accessibility preferences on their device: dark mode enabled, reduced motion enabled, and a larger default font size. A web application uses CSS media queries for `prefers-color-scheme` and `prefers-reduced-motion`, and uses `rem` units for font sizing. How will the application respond to these preferences?

**Options:**
- A) Only the first preference detected will be applied; media queries cannot combine
- B) All three preferences will be respected: dark color scheme, reduced motion, and larger text through rem scaling
- C) The color scheme and motion preferences will be applied, but the font size preference requires a separate JavaScript API
- D) All preferences will be applied, but they will conflict and cause layout issues

**Correct Answer:** B

**Rationale:**  
CSS media queries operate independently and can all be active simultaneously. When the user has dark mode enabled, `prefers-color-scheme: dark` matches. When reduced motion is enabled, `prefers-reduced-motion: reduce` matches. Font size preferences affect the browser's base font size, which automatically scales all `rem`-based measurements without requiring any media query. These three systems work independently and do not conflict. Media queries absolutely support multiple simultaneous matches. No JavaScript API is needed for font size when using rem units. The preferences are designed to work together without conflict when the CSS is well-structured.

---

## Question Distribution

| Question | Outcome | Type | Topic |
|----------|---------|------|-------|
| Q1 | 2F.01 | Recall | CSS media query for reduced motion |
| Q2 | 2F.02 | Application | Dark mode design and halation |
| Q3 | 2F.02 | Application | Reduced motion alternative specification |
| Q4 | 2F.03 | Recall | Chrome DevTools preference emulation |
| Q5 | 2F.01 | Application | Multiple simultaneous preferences |

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L15: User Preferences and System Settings*
