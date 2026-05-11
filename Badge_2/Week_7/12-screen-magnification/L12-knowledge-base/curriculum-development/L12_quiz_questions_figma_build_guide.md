# Lesson 12: Screen Magnification - Quiz Questions

**Badge Level:** Define
**Duration:** Quiz Review
**Delivery:** Assessment Slides
**Outcomes Covered:** 2C.01, 2C.02, 2C.03

---

## Slide Deck Structure

### Frame 5.1: Quiz Questions Overview

**Type:** Section divider
**Content:**
- Section number: `5`
- Title: `Quiz Questions`

---

### Frame 5.2: Question 1 - System Magnification vs Browser Zoom

**Type:** Content
**Headline:** Question 1: System Magnification vs Browser Zoom
**LO pill:** `2C.01`

**Body text:**
A designer tests their checkout form by zooming to 400% in the browser. The form reflows to a single column and all content is accessible by scrolling vertically. They report that the design passes magnification testing. What is the key limitation of this testing approach?

**Bullet list:**
- A) Browser zoom only tests up to 200%, not 400%
- B) Browser zoom reflows the layout, but system magnification tools like ZoomText magnify pixels without changing the layout
- C) Browser zoom does not test color contrast at high magnification
- D) Browser zoom cannot detect missing alt text on images

**Key insight callout:**
Correct answer: B. Browser zoom reflows content by changing the CSS layout. System magnification tools magnify pixels without reflowing, so a two-column form still displays as two columns but the user can only see a portion.

---

### Frame 5.3: Question 2 - Error Message Proximity

**Type:** Content
**Headline:** Question 2: Error Message Proximity at High Magnification
**LO pill:** `2C.02`

**Body text:**
A designer is testing a form at 4x system magnification. The form has a "Country" dropdown with a label 40px above the input field and an error message in a summary banner 400px above the input. At 4x, the user can see the input and label together. Which is the most significant magnification-specific issue?

**Bullet list:**
- A) The dropdown arrow icon is too small at 4x magnification
- B) The error message in the summary banner is not visible when looking at the field, requiring the user to move the viewport to find it
- C) The label text may overlap with the input field at 4x magnification
- D) The form's background color may not have sufficient contrast at 4x magnification

**Key insight callout:**
Correct answer: B. At 4x system magnification, users see approximately 25% of the screen. An error 400px above the field is completely outside the viewport. Inline error messages directly below the field eliminate this problem.

---

### Frame 5.4: Question 3 - Layout Patterns for Magnification

**Type:** Content
**Headline:** Question 3: Layout Patterns for Magnification Users
**LO pill:** `2C.03`

**Body text:**
A designer is creating a settings page with multiple form sections. They want to optimize the layout for users who rely on screen magnification. Which layout approach best supports magnification users?

**Bullet list:**
- A) A three-column layout with labels in the left column, inputs in the center, and helper text in the right column
- B) A single-column layout with labels positioned directly above their input fields and error messages immediately below the relevant field
- C) A centered layout with labels and inputs horizontally aligned, using generous spacing between sections
- D) A sidebar navigation with a two-column content area where labels float to the left of inputs

**Key insight callout:**
Correct answer: B. A single-column layout with labels above inputs ensures label, input, and error message are vertically stacked and close together. At high magnification, users can see all three without moving the viewport horizontally.

---

### Frame 5.5: Question 4 - Magnification User Populations

**Type:** Content
**Headline:** Question 4: Magnification User Populations
**LO pill:** `2C.01`

**Body text:**
A stakeholder asks: "Who actually uses screen magnification?" Which response most accurately describes the magnification user population?

**Bullet list:**
- A) A small group of users with total blindness who prefer magnification over screen readers
- B) Primarily users with low vision, which is the most common visual disability, including people with macular degeneration, age-related vision changes, and temporary visual impairment
- C) Only elderly users who need larger text due to age-related vision decline
- D) Users who have not yet configured their screen reader software and use magnification as a temporary solution

**Key insight callout:**
Correct answer: B. Screen magnification users are primarily people with low vision, not total blindness. Low vision is the most common visual disability, affecting approximately 246 million people globally.

---

### Frame 5.6: Question 5 - Focus Tracking in Magnification

**Type:** Content
**Headline:** Question 5: Focus Tracking in Magnification Tools
**LO pill:** `2C.02`

**Body text:**
A designer conducts magnification testing on a dashboard at 4x system magnification. They Tab through interactive elements and notice the magnified viewport does not follow keyboard focus: when they Tab to a button in the lower-right corner, the viewport stays in the upper-left. What best describes this issue?

**Bullet list:**
- A) This is expected behavior for all magnification tools; users must manually move the viewport to follow focus
- B) The magnification tool's focus tracking feature may be disabled or the page's focus order may be causing the viewport to lose track of the focused element
- C) The focus indicator is missing from the button, so the magnification tool cannot detect it
- D) The page requires a skip link so magnification users can jump to the lower-right content area

**Key insight callout:**
Correct answer: B. Most system magnification tools have a focus tracking feature that automatically moves the viewport to follow keyboard focus. When it fails, it is typically because tracking is disabled or the page's focus management prevents correct tracking.
