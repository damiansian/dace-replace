# Lesson 14: Windows High Contrast Mode - Quiz Questions

**Badge Level:** Define
**Duration:** Quiz Review
**Delivery:** Assessment Slides
**Outcomes Covered:** 2E.01, 2E.02, 2E.03

---

## Slide Deck Structure

### Frame 5.1: Quiz Questions Overview

**Type:** Section divider
**Content:**
- Section number: `5`
- Title: `Quiz Questions`

---

### Frame 5.2: Question 1 - WHCM vs Dark Mode

**Type:** Content
**Headline:** Question 1: WHCM vs Dark Mode
**LO pill:** `2E.01`

**Body text:**
In what primary way does Windows High Contrast Mode (Forced Colors) differ from a standard "Dark Mode" implementation?

**Bullet list:**
- A) Forced colors give the user full control over the specific palette, whereas Dark Mode provides author-defined color schemes.
- B) Dark Mode is a system-level override, while forced colors are controlled by the website author.
- C) Dark Mode is required by WCAG 2.1, while High Contrast Mode is considered an optional enhancement.
- D) Forced colors only affect text elements, whereas Dark Mode affects the entire UI including images.

**Key insight callout:**
Correct answer: A. High Contrast Mode allows users to define or choose their own system keywords, whereas Dark Mode usually relies on prefers-color-scheme where the designer still chooses the hex values.

---

### Frame 5.3: Question 2 - System Color for Disabled Text

**Type:** Content
**Headline:** Question 2: System Color for Disabled Text
**LO pill:** `2E.02`

**Body text:**
Which system color keyword is used to represent disabled text in High Contrast Mode?

**Bullet list:**
- A) GrayText
- B) CanvasText
- C) ButtonText
- D) HighlightText

**Key insight callout:**
Correct answer: A. GrayText is the specific system keyword mapped to disabled or inactive text elements.

---

### Frame 5.4: Question 3 - currentColor and SVG in WHCM

**Type:** Content
**Headline:** Question 3: currentColor and SVG in WHCM
**LO pill:** `2E.02`

**Body text:**
In a complex SVG icon, setting the "fill" attribute to "currentColor" ensures visibility in High Contrast Mode because:

**Bullet list:**
- A) It causes the icon to inherit the forced text color (CanvasText), ensuring it contrasts with the background.
- B) It allows the icon to inherit the value of the "Canvas" keyword.
- C) It prevents the system from overriding the SVG's internal CSS styles.
- D) It forces the system to ignore the SVG entirely and use a text fallback.

**Key insight callout:**
Correct answer: A. Since the text color is guaranteed to contrast with the background in WHCM, inheriting that color ensures the icon remains visible.

---

### Frame 5.5: Question 4 - Transparent Border for Button

**Type:** Content
**Headline:** Question 4: Transparent Border for Button
**LO pill:** `2E.03`

**Body text:**
A developer wants to ensure that a "Submit" button has a visible border in High Contrast Mode but remains borderless in the standard view. Which CSS should be applied to the button's default state?

**Bullet list:**
- A) border: 2px solid transparent;
- B) outline: 2px solid ButtonText;
- C) box-shadow: 0 0 0 2px black;
- D) border: none;

**Key insight callout:**
Correct answer: A. A transparent border is invisible in normal mode but its color will be overridden by the system in High Contrast Mode, making it visible.

---

### Frame 5.6: Question 5 - Prioritizing WHCM Failures

**Type:** Content
**Headline:** Question 5: Prioritizing WHCM Failures
**LO pill:** `2E.02`

**Body text:**
Which of the following failures should be addressed first?

**Bullet list:**
- A) The keyboard focus indicator becoming completely invisible on interactive links.
- B) Card components losing their subtle dropshadow boundaries.
- C) Brand logos losing their specific corporate hex colors.
- D) Success and Error messages losing their green and red background colors.

**Key insight callout:**
Correct answer: A. Focus indicator loss is a Tier 1 (Critical) failure because it prevents keyboard users from navigating the interface.
