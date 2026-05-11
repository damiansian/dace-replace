# Lesson 11: Screen Reader Navigation Patterns - Quiz Questions

**Badge Level:** Define
**Duration:** Quiz Review
**Delivery:** Assessment Slides
**Outcomes Covered:** 2B.01, 2B.02, 2B.03

---

## Slide Deck Structure

### Frame 5.1: Quiz Questions Overview

**Type:** Section divider
**Content:**
- Section number: `5`
- Title: `Quiz Questions`

---

### Frame 5.2: Question 1 - Data Table Header Navigation

**Type:** Content
**Headline:** Question 1: Data Table Header Navigation
**LO pill:** `2B.01`

**Body text:**
A screen reader user navigates into a data table and moves to a cell that displays "$29.99." The screen reader announces "Price: $29.99." What HTML element is responsible for the "Price:" announcement?

**Bullet list:**
- A) An aria-label attribute on the cell
- B) A th element with scope="col" in the Price column header
- C) A caption element at the top of the table
- D) A label element associated with the cell

**Key insight callout:**
Correct answer: B. When navigating a data table cell by cell, screen readers announce the column header (th scope="col") associated with each cell. The th element creates the "Price:" context announcement.

---

### Frame 5.3: Question 2 - Dialog Focus Management

**Type:** Content
**Headline:** Question 2: Dialog Focus Management
**LO pill:** `2B.02`

**Body text:**
A designer specifies a confirmation dialog that appears when a user clicks "Delete Account." The dialog has a heading, a warning message, and two buttons. After the dialog opens, a screen reader tester reports they can use browse mode arrow keys to read content behind the dialog. Which attribute is most likely missing?

**Bullet list:**
- A) aria-label on the dialog heading
- B) aria-modal="true" on the dialog container
- C) tabindex="-1" on the dialog container
- D) aria-hidden="true" on the dialog overlay

**Key insight callout:**
Correct answer: B. When role="dialog" is present but aria-modal="true" is missing, screen readers can trap Tab focus within the dialog but still allow browse mode (arrow key) navigation to reach background content.

---

### Frame 5.4: Question 3 - Form Group Announcements

**Type:** Content
**Headline:** Question 3: Form Group Announcements
**LO pill:** `2B.01`

**Body text:**
A screen reader user navigates a checkout form. When they tab to the "City" field in the second section, the screen reader announces: "Billing Address, City, edit text, required." What HTML pattern causes the "Billing Address" group label to be announced?

**Bullet list:**
- A) An aria-label="Billing Address" on the input field
- B) A fieldset with a legend containing "Billing Address" wrapping the form section
- C) A h3 heading above the form section
- D) An aria-describedby pointing to a paragraph with "Billing Address"

**Key insight callout:**
Correct answer: B. The fieldset and legend pattern creates form groups. When a screen reader user focuses on a field within a fieldset, the legend text is announced as a group label before the field name.

---

### Frame 5.5: Question 4 - Live Region Types

**Type:** Content
**Headline:** Question 4: Live Region Types and Urgency
**LO pill:** `2B.03`

**Body text:**
A designer is specifying a search feature. When the user submits a search query, the results area updates to show "24 results found." The designer wants screen reader users to be informed without moving their focus. Which approach is most appropriate?

**Bullet list:**
- A) Use aria-live="assertive" on the results count to interrupt the user immediately
- B) Use aria-live="polite" or role="status" on the results count container
- C) Move focus to the results count element after the search completes
- D) Add a role="alert" to the entire results section

**Key insight callout:**
Correct answer: B. A search results count is a non-urgent status update. Using aria-live="polite" announces the update when the screen reader finishes its current speech, without interrupting the user.

---

### Frame 5.6: Question 5 - Tab Panel Keyboard Interaction

**Type:** Content
**Headline:** Question 5: Tab Panel Keyboard Interaction
**LO pill:** `2B.02`

**Body text:**
A screen reader tester navigates to the first tab in a tab panel and hears: "Overview, selected, tab, 1 of 3." They press Right Arrow and hear: "Features, tab, 2 of 3." Then they press the Tab key. What should happen next in a correctly implemented tab panel?

**Bullet list:**
- A) Focus moves to the "Pricing" tab (the next tab in the list)
- B) Focus moves to the content within the currently-selected tab panel
- C) The screen reader switches to browse mode automatically
- D) Focus moves to the first link or heading on the page

**Key insight callout:**
Correct answer: B. In the standard tab panel keyboard pattern, Left/Right Arrow keys move between tabs. The Tab key moves focus out of the tablist and into the active tab panel content.
