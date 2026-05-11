# Lesson 15: User Preferences and System Settings - Quiz Questions

**Badge Level:** Define
**Duration:** Quiz Review
**Delivery:** Assessment Slides
**Outcomes Covered:** 2F.01, 2F.02, 2F.03

---

## Slide Deck Structure

### Frame 5.1: Quiz Questions Overview

**Type:** Section divider
**Content:**
- Section number: `5`
- Title: `Quiz Questions`

---

### Frame 5.2: Question 1 - CSS Media Query for Reduced Motion

**Type:** Content
**Headline:** Question 1: CSS Media Query for Reduced Motion
**LO pill:** `2F.01`

**Body text:**
A designer needs to verify that a web application responds correctly when a user has enabled "Reduce motion" on macOS. Which CSS media query detects this system preference?

**Bullet list:**
- A) @media (prefers-color-scheme: reduce)
- B) @media (prefers-reduced-motion: reduce)
- C) @media (animation: none)
- D) @media (prefers-contrast: reduce)

**Key insight callout:**
Correct answer: B. The prefers-reduced-motion media query detects whether the user has enabled reduced motion in their OS settings. prefers-color-scheme detects light/dark mode. animation: none is not a valid media feature.

---

### Frame 5.3: Question 2 - Dark Mode Design and Halation

**Type:** Content
**Headline:** Question 2: Dark Mode Design and Halation
**LO pill:** `2F.02`

**Body text:**
A designer is creating dark mode specs for a card component. Light mode uses dark gray text (#333333) on white (#FFFFFF). For dark mode, the designer proposes white text (#FFFFFF) on pure black (#000000). A colleague raises an accessibility concern. What is the most likely issue?

**Bullet list:**
- A) Pure black backgrounds are not allowed in dark mode designs
- B) Maximum contrast between pure white and pure black can cause halation (text glowing/blurring) for some users with low vision or astigmatism
- C) Dark mode designs must use inverted colors from the light mode palette
- D) The WCAG contrast ratio between #FFFFFF and #000000 is too low for dark mode

**Key insight callout:**
Correct answer: B. While the 21:1 contrast ratio far exceeds WCAG requirements, maximum contrast can cause halation for users with certain visual conditions. Best practice: use off-white text on dark gray backgrounds.

---

### Frame 5.4: Question 3 - Reduced Motion Alternatives

**Type:** Content
**Headline:** Question 3: Reduced Motion Alternative Specification
**LO pill:** `2F.02`

**Body text:**
A web application has a page transition animation where new content slides in from the right over 300ms. The designer needs to specify a reduced motion alternative. Which approach best respects the prefers-reduced-motion: reduce preference while maintaining a usable experience?

**Bullet list:**
- A) Remove the transition entirely so content appears instantly with no visual change
- B) Replace the slide animation with a short fade-in (opacity transition over 150ms)
- C) Keep the same slide animation but slow it down to 1000ms
- D) Replace the animation with a loading spinner that plays until content is ready

**Key insight callout:**
Correct answer: B. Reduced motion means less motion, not no motion. Spatial movement (sliding) is more problematic than opacity changes (fading). Replacing a slide with a short fade preserves visual feedback while eliminating vestibular-triggering motion.

---

### Frame 5.5: Question 4 - Chrome DevTools Preference Emulation

**Type:** Content
**Headline:** Question 4: Chrome DevTools Preference Emulation
**LO pill:** `2F.03`

**Body text:**
A designer wants to test how an application responds to prefers-color-scheme: dark without changing their macOS system settings. Where can they emulate this preference in Chrome?

**Bullet list:**
- A) Chrome Settings > Appearance > Dark mode
- B) Chrome DevTools > Elements panel > Computed styles > Force dark mode
- C) Chrome DevTools > Rendering tab > Emulate CSS media feature prefers-color-scheme
- D) Chrome DevTools > Console > Run document.body.style.colorScheme = 'dark'

**Key insight callout:**
Correct answer: C. Chrome DevTools provides a Rendering tab that includes options to emulate CSS media features including prefers-color-scheme, prefers-reduced-motion, prefers-contrast, and forced-colors.

---

### Frame 5.6: Question 5 - Multiple Simultaneous Preferences

**Type:** Content
**Headline:** Question 5: Multiple Simultaneous Preferences
**LO pill:** `2F.01`

**Body text:**
A user has configured: dark mode enabled, reduced motion enabled, and a larger default font size. The web application uses CSS media queries for prefers-color-scheme and prefers-reduced-motion, and uses rem units for font sizing. How will the application respond?

**Bullet list:**
- A) Only the first preference detected will be applied; media queries cannot combine
- B) All three preferences will be respected: dark color scheme, reduced motion, and larger text through rem scaling
- C) The color scheme and motion preferences will be applied, but font size requires a separate JavaScript API
- D) All preferences will be applied, but they will conflict and cause layout issues

**Key insight callout:**
Correct answer: B. CSS media queries operate independently and can all be active simultaneously. Font size preferences affect the browser's base font size, which automatically scales all rem-based measurements without any media query.
