# Lesson 13: Voice Control - Quiz Questions

**Badge Level:** Define
**Duration:** Quiz Review
**Delivery:** Assessment Slides
**Outcomes Covered:** 2D.01, 2D.02, 2D.03

---

## Slide Deck Structure

### Frame 5.1: Quiz Questions Overview

**Type:** Section divider
**Content:**
- Section number: `5`
- Title: `Quiz Questions`

---

### Frame 5.2: Question 1 - Duplicate Accessible Names

**Type:** Content
**Headline:** Question 1: Duplicate Accessible Names
**LO pill:** `2D.02`

**Body text:**
If a voice control user says "click Download" on a page with three identical "Download" buttons, what will the system likely do?

**Bullet list:**
- A) Display a disambiguation prompt with numbers
- B) Refresh the page to clear the conflict
- C) Ignore the command and play an error sound
- D) Download the first file automatically

**Key insight callout:**
Correct answer: A. When names are duplicated, the system asks the user to clarify which specific element they intended to activate.

**Rationale for incorrect answers:**
- B) Voice control tools do not refresh the page; they resolve ambiguity through disambiguation prompts, not by clearing the DOM.
- C) Voice control tools do not ignore valid commands. The command is valid because matching elements exist; the issue is that multiple elements match, so the system prompts for clarification.
- D) Most voice control tools do not silently pick the first match when duplicates exist. Doing so would give users no control over which element is activated.

---

### Frame 5.3: Question 2 - Keyboard Accessibility Prerequisite

**Type:** Content
**Headline:** Question 2: Keyboard Accessibility Prerequisite
**LO pill:** `2D.01`

**Body text:**
Why is ensuring keyboard accessibility (WCAG 2.1.1) considered a prerequisite for voice control accessibility?

**Bullet list:**
- A) Voice control tools often send keyboard events to the browser to trigger actions
- B) It is a legal requirement but has no technical impact on voice tools
- C) Voice users are required to have a physical keyboard plugged in
- D) Keyboard events are faster for the CPU to process than voice data

**Key insight callout:**
Correct answer: A. Many voice commands, like "press enter" or "tab," rely on the underlying keyboard infrastructure of the application.

**Rationale for incorrect answers:**
- B) Keyboard accessibility has a direct technical impact. Voice control tools simulate keyboard events, so if an element is not keyboard operable, voice commands that rely on keyboard events will fail.
- C) Voice control users do not need a physical keyboard. The entire point of voice control is to replace keyboard and mouse input with spoken commands.
- D) CPU processing speed of keyboard events versus voice data is not relevant. The relationship is about voice control tools translating spoken commands into keyboard events that the application must be able to handle.

---

### Frame 5.4: Question 3 - Hover-Triggered Menu Barrier

**Type:** Content
**Headline:** Question 3: Hover-Triggered Menu Barrier
**LO pill:** `2D.02`

**Body text:**
How do hover-triggered menus create a barrier for voice control users?

**Bullet list:**
- A) The menu may disappear as soon as the user attempts to speak a command
- B) Hover menus are always automatically keyboard accessible
- C) Voice control only works with static text and not interactive links
- D) Voice control cannot detect color changes on hover

**Key insight callout:**
Correct answer: A. Voice processing takes a moment, and if the interface requires a constant hover state, the target might be lost before the command executes.

**Rationale for incorrect answers:**
- B) Hover menus are not always keyboard accessible. This is a separate issue, but stating they are "always" accessible is factually incorrect. The question asks specifically about the barrier for voice control users, which is the timing/persistence problem.
- C) Voice control works with all interactive elements, not just static text. It can activate links, buttons, form fields, and other controls as long as they have accessible names.
- D) Voice control does not need to detect color changes. It targets elements by their accessible names in the accessibility tree, not by visual styling. The barrier is about the menu disappearing, not about color.

---

### Frame 5.5: Question 4 - Label in Name Failure for Form Fields

**Type:** Content
**Headline:** Question 4: Label in Name Failure for Form Fields
**LO pill:** `2D.03`

**Body text:**
Which of the following describes a "Label in Name" failure related to form fields?

**Bullet list:**
- A) An input field has a visible label "Email" but the aria-label is "Enter your contact address"
- B) The form uses a &lt;label&gt; element that is correctly linked using "for" and "id" attributes
- C) An input field has a placeholder but no visible label
- D) The submit button for a form is placed at the top of the page

**Key insight callout:**
Correct answer: A. Since the aria-label does not include the visible text "Email," a user saying "click Email" will fail to focus the field.

**Rationale for incorrect answers:**
- B) A correctly linked label element is proper implementation, not a failure. When the label is programmatically associated and the accessible name matches the visible text, Label in Name is satisfied.
- C) A placeholder without a visible label is a different accessibility issue (related to WCAG 1.3.1 and 3.3.2), not a Label in Name failure. Label in Name (2.5.3) specifically requires the accessible name to contain the visible text when visible text exists.
- D) Button placement is a usability and layout concern, not a Label in Name issue. WCAG 2.5.3 is about matching accessible names to visible text, not about element positioning.

---

### Frame 5.6: Question 5 - Auditing with Developer Tools

**Type:** Content
**Headline:** Question 5: Auditing with Developer Tools
**LO pill:** `2D.02`

**Body text:**
When using browser developer tools to audit for voice control, what should you compare against the visible text on the screen?

**Bullet list:**
- A) The computed accessible name in the Accessibility panel
- B) The file size of the page's images
- C) The DOM element's class name
- D) The z-index value of the element

**Key insight callout:**
Correct answer: A. The computed name is what the browser actually sends to the accessibility tree and what the voice tool will try to match.

**Rationale for incorrect answers:**
- B) Image file size has no relationship to voice control accessibility. It affects performance but does not influence how voice control tools identify or target elements.
- C) CSS class names are developer conventions for styling and scripting. They are not exposed to the accessibility tree and have no bearing on what voice control tools use to match spoken commands to elements.
- D) The z-index property controls visual stacking order of elements. It does not affect accessible names or how voice control tools identify interactive targets.
