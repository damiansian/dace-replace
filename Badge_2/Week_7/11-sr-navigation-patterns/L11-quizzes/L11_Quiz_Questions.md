# L11: Screen Reader Navigation Patterns - Quiz Questions

**Lesson:** L11 - Screen Reader Navigation Patterns  
**Badge Level:** Define  
**Competency Code:** 2B (Screen Reader Operation)  
**Number of Questions:** 5  
**Points:** 5 (1 point each)  
**Format:** Multiple choice (4 options each)

---

## Question 1

**Outcome:** 2B.01 (Navigate pages using VoiceOver and NVDA)

**Stem:**  
A screen reader user navigates into a data table and moves to a cell that displays "$29.99." The screen reader announces "Price: $29.99." What HTML element is responsible for the "Price:" announcement?

**Options:**
- A) An `aria-label` attribute on the cell
- B) A `<th>` element with `scope="col"` in the Price column header
- C) A `<caption>` element at the top of the table
- D) A `<label>` element associated with the cell

**Correct Answer:** B

**Rationale:**  
When navigating a data table cell by cell, screen readers announce the column header (`<th scope="col">`) or row header (`<th scope="row">`) associated with each cell. The `<th>` element with `scope="col"` in the Price column creates the "Price:" context announcement. `aria-label` on individual cells is not the standard pattern for table headers. `<caption>` provides a table title, not cell context. `<label>` is for form fields, not table cells.

---

## Question 2

**Outcome:** 2B.02 (Distinguish browse mode vs focus mode)

**Stem:**  
A designer specifies a confirmation dialog that appears when a user clicks "Delete Account." The dialog has a heading, a warning message, and two buttons: "Cancel" and "Confirm Delete." After the dialog opens, a screen reader tester reports they can use browse mode arrow keys to read content behind the dialog. Which attribute is most likely missing from the implementation?

**Options:**
- A) `aria-label` on the dialog heading
- B) `aria-modal="true"` on the dialog container
- C) `tabindex="-1"` on the dialog container
- D) `aria-hidden="true"` on the dialog overlay

**Correct Answer:** B

**Rationale:**  
When `role="dialog"` is present but `aria-modal="true"` is missing, screen readers can trap Tab focus within the dialog but still allow browse mode (arrow key) navigation to reach background content. Adding `aria-modal="true"` tells the screen reader to scope its virtual cursor to the dialog content only. `aria-label` provides a name but doesn't affect scoping. `tabindex="-1"` enables programmatic focus but doesn't restrict browse mode. `aria-hidden="true"` on the overlay would not restrict browse mode navigation of background page content.

---

## Question 3

**Outcome:** 2B.01 (Navigate pages using VoiceOver and NVDA)

**Stem:**  
A screen reader user navigates a checkout form. When they tab to the "City" field in the second section, the screen reader announces: "Billing Address, City, edit text, required." What HTML pattern causes the "Billing Address" group label to be announced?

**Options:**
- A) An `aria-label="Billing Address"` on the input field
- B) A `<fieldset>` with a `<legend>` containing "Billing Address" wrapping the form section
- C) A `<h3>` heading above the form section
- D) An `aria-describedby` pointing to a paragraph with "Billing Address"

**Correct Answer:** B

**Rationale:**  
The `<fieldset>` and `<legend>` pattern creates form groups. When a screen reader user focuses on a field within a fieldset, the legend text is announced as a group label before the field name. This provides context, especially when multiple sections have fields with the same name (like "City" in both shipping and billing). `aria-label` would replace the field's accessible name, not add a group prefix. A heading provides visual grouping but is not announced when focus moves to a form field. `aria-describedby` adds a description after the name/role, not a group label prefix.

---

## Question 4

**Outcome:** 2B.03 (Use quick navigation for headings, landmarks, and links)

**Stem:**  
A designer is specifying a search feature. When the user submits a search query, the results area updates to show matching items and a message: "24 results found." The designer wants screen reader users to be informed of this update without moving their focus. Which approach is most appropriate?

**Options:**
- A) Use `aria-live="assertive"` on the results count to interrupt the user immediately
- B) Use `aria-live="polite"` or `role="status"` on the results count container
- C) Move focus to the results count element after the search completes
- D) Add a `role="alert"` to the entire results section

**Correct Answer:** B

**Rationale:**  
A search results count is a non-urgent status update. Using `aria-live="polite"` (or the equivalent `role="status"`) announces the update when the screen reader finishes its current speech, without interrupting the user. `aria-live="assertive"` would interrupt immediately, which is inappropriate for a routine status update. Moving focus would disrupt the user's current position. Using `role="alert"` on the entire results section would cause the screen reader to re-read all results content on every update, creating an overwhelming experience.

---

## Question 5

**Outcome:** 2B.02 (Distinguish browse mode vs focus mode)

**Stem:**  
A designer is reviewing a tab panel implementation. The panel has three tabs: "Overview," "Features," and "Pricing." When a screen reader tester navigates to the first tab, they hear: "Overview, selected, tab, 1 of 3." The tester presses the Right Arrow key and hears: "Features, tab, 2 of 3." Then they press the Tab key. What should happen next in a correctly-implemented tab panel?

**Options:**
- A) Focus moves to the "Pricing" tab (the next tab in the list)
- B) Focus moves to the content within the currently-selected tab panel
- C) The screen reader switches to browse mode automatically
- D) Focus moves to the first link or heading on the page

**Correct Answer:** B

**Rationale:**  
In the standard tab panel keyboard interaction pattern, Left/Right Arrow keys move between tabs within the tablist. The Tab key moves focus OUT of the tablist and INTO the active tab panel content. This is how users access the content associated with the selected tab. Moving to the next tab would be the behavior of the Right Arrow key, not the Tab key. The screen reader does not switch modes based on tab panel navigation. Focus should remain in the component, not jump to the top of the page.

---

## Question Distribution

| Question | Outcome | Type | Topic |
|----------|---------|------|-------|
| Q1 | 2B.01 | Application | Data table header navigation |
| Q2 | 2B.02 | Application | Dialog focus management and aria-modal |
| Q3 | 2B.01 | Application | Form group announcements |
| Q4 | 2B.03 | Application | Live region types and urgency |
| Q5 | 2B.02 | Application | Tab panel keyboard interaction |

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L11: Screen Reader Navigation Patterns*
