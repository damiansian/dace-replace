# L09: DOM and Accessibility Tree - Quiz Questions

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Define  
**Lesson:** L09  
**Assessment Type:** Knowledge Check Quiz  
**Points:** 5 (1 point per question)  
**Format:** Auto-graded, multiple choice  
**Outcomes Tested:** 2A.01 (x2), 2A.02 (x2), 2A.03

---

## Question 1: (Outcome 2A.01)

**Image Stimulus:**
![Chrome DevTools Accessibility Tree panel for a row element. ARIA Attributes show role: row, aria-label: Annual report.pdf, aria-selected: true, and aria-labelledby referencing two elements. Computed Properties show Name: "Annual report.pdf Document" calculated via aria-labelledby, with aria-label shown in strikethrough. Role: row, Focusable: true, Focused: true, Selected: true.](./quiz-images/L09-q1-stimulus.png)

**Question:**
What is the accessible name of this card component that will be read aloud by a screen reader or shown to a voice control user when they vocalize the "show names" command?

[Test on your own if you like.](https://dace-badge-2-week-6-fd7f2.entapp.adproto.com)

**Answer Options:**

A) Annual report.pdf Document
B) Annual report.pdf
C) Annual report
D) react-aria2016680004-:r1n:-2 react-aria2016680004-:r1r:

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected:**
"Correct! The computed accessible name is 'Annual report.pdf Document.' This name is calculated via aria-labelledby, which references two elements: one containing 'Annual report.pdf' and another containing 'Document.' The aria-labelledby attribute concatenates the text content of both referenced elements to form the full accessible name."

**If B selected:**
"Incorrect. 'Annual report.pdf' is the value of the aria-label attribute, but look at the Computed Properties section. The aria-label is shown in strikethrough because aria-labelledby takes precedence in the accessible name computation. The aria-labelledby references two elements whose combined text produces a longer name."

**If C selected:**
"Incorrect. 'Annual report' is only part of the file name. The computed accessible name includes both the full file name with extension and the file type. Check the Computed Properties section, specifically the Name field, to see the full accessible name the browser calculates."

**If D selected:**
"Incorrect. Those are the internal React ARIA IDs used in the aria-labelledby attribute. These IDs are references to other DOM elements, not the accessible name itself. The browser resolves these IDs to the text content of the referenced elements to compute the final accessible name shown in Computed Properties."

---

## Question 2: (Outcome 2A.01)

**Image Stimulus:**
![Chrome DevTools Accessibility Tree panel for a row element. ARIA Attributes show role: row, aria-label: Annual report.pdf, aria-selected: true, and aria-labelledby referencing two elements. Computed Properties show Name: "Annual report.pdf Document" calculated via aria-labelledby, with aria-label shown in strikethrough. Role: row, Focusable: true, Focused: true, Selected: true.](./quiz-images/L09-q1-stimulus.png)

**Question:**
How is the accessible name being calculated?

[Test on your own if you like.](https://dace-badge-2-week-6-fd7f2.entapp.adproto.com)

**Answer Options:**

A) aria-label and aria-labelledby
B) aria-label
C) aria-card
D) aria-row-index: 1

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected:**
"Correct! Both aria-label and aria-labelledby are present on this element. You can see both listed in the ARIA Attributes section. In the Computed Properties, the name calculation shows aria-labelledby as the winning source (it takes priority per the accessible name computation algorithm), with aria-label shown in strikethrough as a fallback. Both attributes participate in the naming mechanism for this element."

**If B selected:**
"Incorrect. While aria-label is present on the element (set to 'Annual report.pdf'), it is not the only naming attribute. Look at the ARIA Attributes section: aria-labelledby is also present. In the Computed Properties, notice that aria-label appears in strikethrough, meaning another attribute took precedence over it."

**If C selected:**
"Incorrect. There is no ARIA attribute called 'aria-card.' ARIA roles and attributes follow a defined specification. The element's role is 'row,' and its name is computed from actual ARIA naming attributes visible in the ARIA Attributes section."

**If D selected:**
"Incorrect. aria-rowindex indicates the element's position within the grid (row 1), but it does not contribute to the accessible name. Name calculation uses specific naming attributes like aria-label and aria-labelledby, which you can see in the Computed Properties section under the Name breakdown."

---

## Question 3: (Outcome 2A.02)

**Image Stimulus:**
![Chrome DevTools Accessibility Tree panel for a row element. ARIA Attributes show role: row, aria-label: Annual report.pdf, aria-selected: true, and aria-labelledby referencing two elements. Computed Properties show Name: "Annual report.pdf Document" with Role: row, Focusable: true, Focused: true, Selected: true.](./quiz-images/L09-q3-stimulus.png)

**Question:**
The user initiated a change in the UI, what was it?

[Test on your own if you like.](https://dace-badge-2-week-6-fd7f2.entapp.adproto.com)

**Answer Options:**

A) They selected the card via the checkbox
B) They selected the more options button
C) They tabbed off the card
D) They arrowed off the card

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected:**
"Correct! The accessibility tree properties show aria-selected: true and Selected: true, which indicates the user selected this card. The checkbox interaction toggled the selection state. You can confirm this by looking at both the ARIA Attributes section (aria-selected: true) and the Computed Properties (Selected: true)."

**If B selected:**
"Incorrect. If the user had activated the more options button, you would expect to see a different element focused (like a menu or popover), not this row. The accessibility tree still shows this row as focused and selected. Look at the Selected: true property for the key clue about what changed."

**If C selected:**
"Incorrect. If the user had tabbed off the card, the Focused property would be false, not true. The accessibility tree shows Focused: true, meaning this element still has focus. The key change to notice is the Selected: true property."

**If D selected:**
"Incorrect. If the user had arrowed off the card, the Focused property would be false for this element, as focus would have moved to an adjacent row. The accessibility tree shows Focused: true, meaning focus remains on this row. The change indicated here is in the Selected: true property."

---

## Question 4: (Outcome 2A.02)

**Image Stimulus:**
![Chrome DevTools Accessibility Tree panel for a grid element. ARIA Attributes show aria-label: Files, role: grid, aria-multiselectable: true, aria-rowcount: 15, aria-colcount: 1. Computed Properties show Name: "Files" from aria-label. Role: grid, Focusable: true, Multi-selectable: true, Read-only: false.](./quiz-images/L09-q4-stimulus.png)

**Question:**
Based on the accessibility tree information shown here, what cool feature will a screen reader get when they enter this table grid?

[Test on your own if you like.](https://dace-badge-2-week-6-fd7f2.entapp.adproto.com)

**Answer Options:**

A) They'll hear that there are 15 files
B) They'll hear the different types of files in the set
C) They'll hear the role of "card" 15 times
D) They'll hear the current sorting (ascending or descending) applied

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected:**
"Correct! The aria-rowcount: 15 attribute tells the screen reader exactly how many rows (files) are in the grid. When a screen reader user enters this grid, they will hear something like 'Files, grid, 15 items,' giving them immediate context about the size of the collection. This is a powerful orientation feature that helps users decide how to navigate."

**If B selected:**
"Incorrect. The grid-level accessibility tree properties do not include information about file types. The aria-label is simply 'Files' and aria-rowcount is 15. File type information would be found at the individual row level, not at the grid container level."

**If C selected:**
"Incorrect. Screen readers do not repeat a role for every row when entering a grid. The role at this level is 'grid,' not 'card.' The aria-rowcount: 15 tells the screen reader the total count, which it announces once as a summary when entering the grid."

**If D selected:**
"Incorrect. There is no sort-related ARIA attribute visible in this accessibility tree panel. Sorting information would be conveyed through aria-sort on column headers, not on the grid container itself. The properties shown here are about the grid's structure (rowcount, colcount) and behavior (multiselectable)."

---

## Question 5: (Outcome 2A.03)

**Image Stimulus:**
![Chrome DevTools Accessibility Tree panel for a grid element. ARIA Attributes show aria-label: Files, role: grid, aria-multiselectable: true, aria-rowcount: 15, aria-colcount: 1. Computed Properties show Name: "Files" from aria-label. Role: grid, Focusable: true, Multi-selectable: true, Read-only: false.](./quiz-images/L09-q4-stimulus.png)

**Question:**
Based on the accessibility tree, can you determine if any of the 15 cards are currently selected?

[Test on your own if you like.](https://dace-badge-2-week-6-fd7f2.entapp.adproto.com)

**Answer Options:**

A) No. But that would be cool
B) Yes. Because multiselectable is set to true
C) Yes. Because focusable is set to true
D) No. It says read-only: false

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected:**
"Correct! The grid-level accessibility tree only tells you that selection is possible (Multi-selectable: true), but it does not reveal which specific rows are currently selected. To determine selection state, you would need to inspect each individual row element and check its aria-selected property. The grid container describes capabilities, not the current selection state of its children."

**If B selected:**
"Incorrect. Multi-selectable: true means the grid supports selecting multiple items, but it does not tell you whether any items are currently selected. It describes a capability, not a current state. To find actual selection state, you would need to inspect individual row elements for their aria-selected property."

**If C selected:**
"Incorrect. Focusable: true means the grid can receive keyboard focus, but focus and selection are different concepts in accessibility. An element can be focused without being selected. Selection state is tracked per-row via aria-selected, which is not visible at the grid container level."

**If D selected:**
"Incorrect. Read-only: false means the grid content can be modified (it is not a static, non-interactive grid), but this has nothing to do with selection state. Read-only relates to whether users can edit or interact with the grid content, not whether items are selected."
