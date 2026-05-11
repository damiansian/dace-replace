# DACE Knowledge Check Master
**Organized by domains and subdomains from [Canvas Outcomes](https://dace-training-cohort-1.entapp.adproto.com/pages/00-badges/canvas_outcomes.html)**

All lesson quiz questions include: **stems**, **keys**, **distractors**, **rationales**, and **stimuli** (when applicable).

---

## Table of Contents

| Domain | Subdomain | Topic | Lesson | Questions |
|--------|-----------|-------|--------|-----------|
| **Domain 1** (40%) | 1A | Accessible Names and Labels | L01 | 5 |
| | 1B | Headings | L02 | 5 |
| | 1C | Color Contrast and Visual Presentation | L03 | 5 |
| | 1D | Forms Inputs and Error Handling | L04 | 5 |
| | 1E | Keyboard and Touch and Reading Order | L05 | 5 |
| | 1F | Reflow Zoom and Responsive Accessibility | L06 | 5 |
| | 1H | Motion Animation and Time-Based Content | L08 | 5 |
| **Domain 2** (35%) | 2A | DOM and Accessibility Tree | L09 | 5 |
| | 2B | Screen Reader Operation | L11 | 5 |
| | 2C | Screen Magnification | L12 | 5 |
| | 2E | Windows High Contrast Mode | L14 | 5 |
| | 2H | Perceptual and Cognitive Design Considerations | L16 | 5 |
| **Domain 3** (25%) | 3A-3H | (No lesson knowledge checks in this folder) | | |

*Domain structure cross-referenced with [canvas_outcomes.html](https://dace-training-cohort-1.entapp.adproto.com/pages/00-badges/canvas_outcomes.html)*

---

# Domain 1: Design Accessibility Fundamentals (40%)

*Core knowledge and skills for creating accessible designs across platforms*

## 1A: Accessible Names and Labels

### Learning Objectives (from Canvas)

- **1A.01** | Define accessible names and explain their role in assistive technology interaction
  Explain what accessible names are and how assistive technology uses them to communicate element identity to users

- **1A.02** | Identify when accessible names are required versus optional for different element types
  Determine which UI elements require accessible names and which can be marked as decorative

- **1A.03** | Evaluate accessible name quality using established criteria
  Assess whether accessible names are concise and functional and distinguishable

- **1A.04** | Specify accessible names in design annotations using standard documentation methods
  Create blueline annotations that clearly communicate accessible name requirements to engineering

- **1A.05** | Distinguish between visible labels and programmatic names and know when each applies
  Understand when visible text serves as the accessible name versus when programmatic labels are needed


### Knowledge Check Questions

*Source: L01*


### Q1: [1A.01] Accessible Names and AT Interaction

**Question:**
A screen reader user navigates to a button in your interface. What does the accessible name determine about this interaction?

**Answers:**
- A) The text the screen reader announces to identify the button
- B) The visual appearance of the button on screen
- C) The keyboard shortcut assigned to the button
- D) The order in which the button appears in the tab sequence

**Correct Answer:** A

**Feedback (Correct):**
The accessible name is the short text string that assistive technology announces to identify an element to users. When a screen reader lands on a button, it announces the accessible name (for example, "Submit, button") so the user understands what the control does.

**Feedback (Incorrect - B):**
Visual appearance is controlled by CSS styling and has no relationship to what assistive technology announces. A button can look completely different from what it's named.

**Feedback (Incorrect - C):**
Keyboard shortcuts are implemented separately through JavaScript event handlers or the `accesskey` attribute. They're unrelated to the accessible name.

**Feedback (Incorrect - D):**
Tab order is determined by the DOM order and the `tabindex` attribute. The accessible name has no effect on navigation sequence.

---

### Q2: [1A.02] Required vs Decorative Elements

**Stimulus:** ![The Photoshop app icon with a Blueline annotation reading n/a decorative and a note that reads applies to both app icons. There is a Creative Cloud app icon on the other card component. The visible text label already next to each.](assets/L01-q2-stimulus.png)

**Question:**
Based on the Blueline annotation, what will a screen reader hear when they land on the Photoshop app icon? 

**Answers:**
- A) Nothing. The graphic will be skipped over by the screen reader.
- B) "N.A. Decorative. Applies to both app icons. Image."
- C) "Photoshop App Icon. Blue letters P and S inside a dark holding shape. Graphic."
- D) Nothing. Screen readers cannot interact with graphics. 

**Correct Answer:** A

**Feedback (Correct):**
When an image is annotated as "n/a decorative," it tells engineering to hide the image from assistive technology. The screen reader will skip over it entirely because it provides no meaningful information beyond what the visible text label already conveys. This prevents redundant announcements and keeps the experience efficient for AT users.

**Feedback (Incorrect - B):**
Blueline annotations are instructions for engineering, not content that gets announced. The "n/a decorative" annotation tells developers to implement the image with `alt=""` or `aria-hidden="true"`, which hides it from screen readers entirely.

**Feedback (Incorrect - C):**
Describing the visual appearance of an icon (colors, shapes) would create noise without adding value. When a visible text label like "Photoshop" already identifies the product, the icon is purely decorative. Good accessible names convey function or purpose, not visual description.

**Feedback (Incorrect - D):**
Screen readers can absolutely interact with graphics. When images have accessible names (via `alt` text or `aria-label`), screen readers announce them. The reason this icon is skipped is specifically because the "decorative" annotation instructs engineering to hide it from AT, not because of a technical limitation.

---

### Q3: [1A.03] Evaluating Accessible Name Quality

**Stimulus**
A card for Meta has an icon, the word Meta, an "i" icon, the status of "not connected" and cta button that reads "connect". The Blueline accessible name is set to "Information". 

**Question:**
The Designer has specified the accessible name for the "i" information icon to be "Information". You notice there are multiple cards and they all have the contextual help icon button. What should you advise the designer to do? 

**Answers:**
- A) Add the Blueline annotation of "Information for [Product name]"
- B) Add the Blueline annotation of "[n/a decorative]"
- C) Add the Blueline annotation of "Contextual help"
- D) Add the Blueline annotation of "The letter I set inside a circle"

**Correct Answer:** A

**Feedback (Correct):**
When the same icon appears on multiple cards, the accessible name must distinguish which card it belongs to. A screen reader user hearing "Information, button" repeatedly cannot tell which product's help they're accessing. Adding context like "Information for Meta" or "Information for Slack" makes each button distinguishable and helps users navigate efficiently.

**Feedback (Incorrect - B):**
The information icon is functional, not decorative. It provides contextual help that users need to access. Marking it decorative would hide useful functionality from assistive technology users, creating an inequitable experience.

**Feedback (Incorrect - C):**
While "Contextual help" describes the function better than "Information," it still doesn't solve the problem. If every card has a button named "Contextual help," screen reader users still cannot distinguish between them. The name needs to include which product or card the help relates to.

**Feedback (Incorrect - D):**
Describing the visual appearance ("The letter I set inside a circle") violates the principle of conveying function over form. This tells users what the icon looks like, not what it does. Screen reader users need to know the button's purpose, not its visual design.

---

### Q4: [1A.04] Design Annotations for Engineering

**Stimulus**
Blueline for accessible name where Name reads "Notification, [n new notification(s)]" and the Note reads "Notification, 0 new notification(s)". 

**Question:**
What information is the Designer providing to the Engineer with the information in brackets? 

**Answers:**
- A) The user should hear how many notifications are present
- B) The Engineer should use aria-labelledy vs aria-label
- C) The user should hear "n new notifictions" 
- D) The Engineer should use aria-description and not aria-describedby

**Correct Answer:** A

**Feedback (Correct):**
The brackets indicate dynamic content that should update based on the actual state. The designer is communicating that the accessible name should reflect the real notification count: "Notification, 3 new notifications" or "Notification, 0 new notifications." The Note field provides an example of how the complete string should read. This tells engineering the user experience requirement without dictating implementation.

**Feedback (Incorrect - B):**
Designers specify what users should experience, not which ARIA attributes to use. Whether engineering implements this with `aria-label`, `aria-labelledby`, or another technique is an implementation decision based on their framework and codebase. The designer's job is to communicate the desired outcome.

**Feedback (Incorrect - C):**
The "[n new notification(s)]" uses "n" as a placeholder variable representing the dynamic count. Users should hear the actual number: "3 new notifications" or "1 new notification." The literal letter "n" is annotation shorthand, not the intended accessible name.

**Feedback (Incorrect - D):**
Designers should not specify which ARIA attributes to use. `aria-description` vs `aria-describedby` is an engineering implementation choice. The designer's role is to communicate what information the user needs to hear, and engineering determines the technical approach to deliver that experience.

---

### Q5: [1A.05] Visible Labels vs Programmatic Names

**Stimulus**
View student pricing link with an arrow graphic at the end. 

**Question:**
Does this link require an accessible name annotation? 

**Answers:**
- A) Yes. The arrow icon should read aloud as "Opens in new window".
- B) Yes. All links require an accessible name. 
- C) No. The visible label is sufficient as the accessible name.
- D) No. Links never require accessible name annotations.

**Correct Answer:** A

**Feedback (Correct):**
The arrow icon conveys important information that sighted users receive visually: this link opens in a new window. Without an annotation, screen reader users would only hear "View student pricing, link" and miss this context. The designer should annotate the icon to expand the accessible name to "View student pricing, opens in new window" so all users receive equivalent information.

**Feedback (Incorrect - B):**
Not all links require accessible name annotations. When the visible link text fully describes the destination and behavior, no additional annotation is needed. The issue here is specifically that the arrow icon conveys meaning (opens in new window) that the visible text alone does not communicate.

**Feedback (Incorrect - C):**
While "View student pricing" is a good visible label, it does not convey the complete user experience. The arrow icon tells sighted users something will happen differently: the link opens in a new window or tab. This information must be available to screen reader users as well, which requires expanding the accessible name.

**Feedback (Incorrect - D):**
Links often require accessible name annotations when they include icons that convey meaning, when the link text is ambiguous (like "Read more"), or when the visible text needs context. The visible text is the starting point, but designers must annotate when additional information is needed for an equivalent experience.

---

## Notes

- QTI package location: `lesson1_qti_package.zip` (in this folder)
- Quiz is open-book
- Students may reference course materials, APG, and WCAG documentation
- **Answer ordering:** Correct answer is always option A in the source file. Canvas "Shuffle Answers" feature randomizes order for students.


---


---

## 1B: Headings

### Learning Objectives (from Canvas)

- **1B.01** | Design logical heading hierarchies that convey document organization and support screen reader navigation
  Create heading structures that convey document organization and support screen reader navigation

- **1B.02** | Recognize platform differences in heading support between iOS and Android
  Understand that iOS VoiceOver supports heading levels while Android TalkBack treats headings as binary and apply this knowledge when annotating designs


### Knowledge Check Questions

*Source: L02*


### Q1: [1B.01] Heading Hierarchy Structure

**Question:**
A screen reader user visits a webpage and opens the headings list. They see:

```
H1: Welcome to Adobe Fonts
H3: Featured Collections
H3: Popular Fonts
H3: Recent Additions
```

What is the problem with this heading structure?

**Answers:**
- A) The H3 headings skip level H2, breaking the outline hierarchy
- B) There are too many H3 elements for a single page
- C) Web browsers do not support heading rank, only the generic heading designation
- D) The headings use title case which is not Adobe's style

**Correct Answer:** A

**Feedback (Correct):**
Skipping from H1 to H3 breaks the heading hierarchy. Screen reader users expect H2 to mark major sections under H1. The jump to H3 suggests subsections exist under an H2 that isn't there, creating a confusing outline. Always use heading levels in order without skipping going down.

**Feedback (Incorrect - B):**
There is no limit on how many headings of a particular level can exist on a page. Having multiple H3 elements is perfectly valid when content has multiple sections at the same level. The actual issue is that there is no H2 between H1 and H3, which breaks the hierarchy.

**Feedback (Incorrect - C):**
Web browsers and screen readers fully support heading ranks (H1 through H6). HTML provides six heading levels specifically to create document structure. Screen readers announce both the heading text and its level, allowing users to understand the page outline.

**Feedback (Incorrect - D):**
Capitalization style is a brand guideline, not an accessibility requirement. Title case does not affect how screen readers interpret headings or create any accessibility barriers. The accessibility issue here is the skipped heading level.

---

### Q2: [1B.01] Heading Hierarchy Structure
**Stimulus**
A modal diaglog. 


**Question:**
What heading level should the text "Share Hilton Sales Strategy" be set at? 

**Answers:**
- A) H2. Because modals are child of the main content. 
- B) H1. Because modals are considered a new page/screen.
- C) It's not a heading at all. Not all bold text is a heading. 
- D) H6. Because modals are the least important aspect of the screen content. 

**Correct Answer:** A

**Feedback (Correct):**
Modal dialogs exist within the context of the page that launched them, making them children of the main content in the document hierarchy. Since the page already has an H1, the modal title should be H2 to maintain a logical heading structure. When a screen reader user opens the headings list, they will see the modal title nested appropriately under the page H1, making the relationship between the modal and page clear.  

**Feedback (Incorrect - B):**
Modal dialogs are not separate pages. They are overlays that appear within the context of the existing page. The underlying page still has the H1, and the modal content exists as a subsection of that page. Using H1 in a modal would create a confusing document outline with multiple H1 elements.

**Feedback (Incorrect - C):**
Modal dialog titles should be marked as headings. The title "Share Hilton Sales Strategy" describes the purpose of the modal and provides structure for screen reader users. Without a heading, users navigating by headings would not be able to identify or jump to the modal content.

**Feedback (Incorrect - D):**
Heading levels indicate document hierarchy and structure, not importance or priority. H6 is for deeply nested subsections, not for content that is somehow "less important." A modal dialog title at H2 correctly positions it as a major section under the page's H1.

---

### Q3: [1B.02] Multi-Platform Heading Annotations

**Question:**
A designer is annotating heading structure for a multi-platform app (iOS and Android). How should they handle heading levels in their annotations?

**Answers:**
- A) Specify heading levels for all platforms; one annotation serves iOS and Android
- B) Only specify "heading" vs "not heading" since Android ignores heading levels
- C) Create separate annotations with levels for iOS and without levels for Android
- D) Omit heading annotations entirely since screen readers detect them automatically

**Correct Answer:** A

**Feedback (Correct):**
Always specify heading levels in annotations. iOS VoiceOver announces "heading level 2" and supports filtering by level. Android TalkBack announces just "heading" (no level), but marking headings still enables navigation by swiping between headings. One annotation with levels serves both platforms.

**Feedback (Incorrect - B):**
iOS users need heading levels for full navigation capability. VoiceOver announces the specific level and allows users to navigate by heading level. Omitting levels would create an incomplete experience for iOS users.

**Feedback (Incorrect - C):**
Maintaining separate annotations for different platforms creates unnecessary complexity and increases the chance of errors. One annotation with full heading levels works for both platforms.

**Feedback (Incorrect - D):**
Headings must be explicitly specified in design for engineering to implement. TalkBack does not automatically identify headings. If headings are not annotated and implemented, users cannot navigate by headings at all.

---

### Q4: [1B.01] Identifying What Should Be a Heading

**Stimulus**
Text reads: Get inspired by the community. Large, bold, decorative font. Text reads: Discover prompts to remix and make your own. medium, bold. All text set over some images in a carousel. 

**Question:**
A marketing page has the following text styled prominently at the top:

```
Line 1: "Get inspired by the community" (large, bold, decorative font)
Line 2: "Discover prompts to remix and make your own." (medium, bold)
```

Which text should be marked as a heading?

**Answers:**
- A) Line 1
- B) Line 2
- C) Line 1 and 2
- D) Neither Line 1 or 2

**Correct Answer:** A

**Feedback (Correct):**
"Get inspired by the community" introduces a distinct content section (the carousel of community work) and helps users understand page structure. It functions as a heading because it labels what follows. Line 2 is supporting descriptive text that elaborates on Line 1, not a separate structural element.

**Feedback (Incorrect - B):**
Line 2 is supporting text that describes the carousel content, not a structural heading. It elaborates on Line 1 rather than introducing a new section. Headings should label sections of content, not describe features within those sections.

**Feedback (Incorrect - C):**
Only Line 1 functions as a heading. Line 2 provides context about what users can do but does not introduce a separate navigable section. Marking both as headings would create a confusing hierarchy where the supporting description appears as a peer to the section title.

**Feedback (Incorrect - D):**
Line 1 clearly introduces a content section and should be marked as a heading. Without it, screen reader users navigating by headings would miss this entire carousel section. The prominent visual styling reinforces its structural role as a section label.

---

### Q5: [1B.01] Identifying What Should Be a Heading
**Stimulus**
Adobe product landing page on a red background. Four white cards display starting options, each with an icon: a cloud upload icon for "Start from your content," a toggle with sparkles for "AI Assistant" marked as beta, a rocket for "Explore quick actions," and a magnifying glass with lightning bolt for "Browse templates."

**Question:**
What heading level should the text in the cards be set at? 

**Answers:**
- A) The text should be at H2 as each card represents a new section of the page. That text is not a heading, it's the visible text label and therefore the accessible name of the link.
- B) The text should be at H3 as each card relates to the H2 of "Adobe" written above.
- C) These should be list items, not headings, because they are a group of related options.
- D) The text should be at H2 as each card represents a new section of the page. 

**Correct Answer:** A

**Feedback (Correct):**
These cards are interactive elements (links or buttons) that take users to different starting points. The text on each card ("Start from your content," "AI Assistant," etc.) serves as the accessible name of that interactive element, not a document heading. Headings create navigable page structure, while accessible names describe what an interactive element does. When a screen reader user tabs to one of these cards, they hear the text as the link name. Marking these as headings would create a misleading document outline where navigation options appear as content sections.

**Feedback (Incorrect - B):**
"Adobe" is a logo, not a heading in the document structure. Logos identify the brand but do not create document hierarchy. There is no H2 above these cards, so H3 would skip a level and break the heading hierarchy. The card titles function as the first major content sections on this page.

**Feedback (Incorrect - C):**
While the cards are visually grouped, list markup alone would not provide the same navigation benefits. Headings allow screen reader users to jump directly to each option using heading navigation. A list would require users to arrow through each item sequentially. Headings better serve the navigational purpose here.

**Feedback (Incorrect - D):**
While H2 would be appropriate if these were section headings, that is not their function here. These cards are interactive elements (links) that users click to start different workflows. The text describes the action each card performs, making it the accessible name of the link. Headings structure document content for navigation; accessible names describe what interactive controls do. These serve different purposes and should not be conflated. 

---

## Notes

- QTI package location: `lesson2_qti_package.zip` (in this folder)
- Quiz is open-book
- Students may reference course materials, APG, and WCAG documentation
- **Answer ordering:** Correct answer is always option A in the source file. Canvas "Shuffle Answers" feature randomizes order for students.
- **Reading order questions moved:** Q4 and Q5 about reading order have been moved to L05 (Keyboard, Touch & Reading Order) as Q7 and Q8.


---


---


# Domain 2: Assistive Technology and User Experience (35%)

*Understanding how AT users experience digital products*

## 2A: DOM and Accessibility Tree

### Learning Objectives (from Canvas)

- **2A.01** | Explain DOM to accessibility tree relationship
  Describe how browser DOM becomes the accessibility tree that AT consumes

- **2A.02** | Identify accessibility tree issues
  Use browser dev tools to inspect accessibility properties

- **2A.03** | Connect design decisions to accessibility tree impact
  Predict how design choices will be represented in the accessibility tree

### Knowledge Check Questions

*Source: L09*

---

### Q1: [2A.01] Accessible Name of Card Component

**Stimulus:** ![Chrome DevTools Accessibility Tree panel for a row element](assets/L09-q1-stimulus.png)

**Stem:** What is the accessible name of this card component that will be read aloud by a screen reader or shown to a voice control user when they vocalize the "show names" command?

**Options:**
- A) Annual report.pdf Document
- B) Annual report.pdf
- C) Annual report
- D) react-aria2016680004-:r1n:-2 react-aria2016680004-:r1r:

**Key:** A

**Rationale (A, correct):** The computed accessible name is "Annual report.pdf Document" via aria-labelledby, which references two elements whose combined text produces the full name.

**Rationale (B):** aria-label is shown in strikethrough because aria-labelledby takes precedence.

**Rationale (C):** The computed name includes both the full file name with extension and the file type.

**Rationale (D):** Those are internal React ARIA IDs, not the accessible name.

---

### Q2: [2A.01] Accessible Name Calculation

**Stimulus:** ![Chrome DevTools Accessibility Tree panel](assets/L09-q1-stimulus.png)

**Stem:** How is the accessible name being calculated?

**Options:**
- A) aria-label and aria-labelledby
- B) aria-label
- C) aria-card
- D) aria-row-index: 1

**Key:** A

**Rationale (A, correct):** Both aria-label and aria-labelledby are present; aria-labelledby takes priority per the accessible name computation algorithm.

**Rationale (B-D):** See L09 for full feedback.

---

### Q3: [2A.02] User Action from Accessibility Tree

**Stimulus:** ![Chrome DevTools Accessibility Tree panel for a row element](assets/L09-q3-stimulus.png)

**Stem:** The user initiated a change in the UI. What was it?

**Options:**
- A) They selected the card via the checkbox
- B) They selected the more options button
- C) They tabbed off the card
- D) They arrowed off the card

**Key:** A

**Rationale (A, correct):** aria-selected: true and Selected: true indicate the user selected this card via the checkbox.

**Rationale (B):** If the more options button had been activated, a different element would be focused (menu/popover).

**Rationale (C):** Tabbing off would set Focused: false, not true.

**Rationale (D):** Arrowing off would move focus to an adjacent row; Focused would be false.

---

### Q4: [2A.02] Grid Feature for Screen Reader

**Stimulus:** ![Chrome DevTools Accessibility Tree panel for a grid element](assets/L09-q4-stimulus.png)

**Stem:** Based on the accessibility tree, what will a screen reader announce when they enter this table grid?

**Options:**
- A) They'll hear that there are 15 files
- B) They'll hear the different types of files in the set
- C) They'll hear the role of "card" 15 times
- D) They'll hear the current sorting (ascending or descending) applied

**Key:** A

**Rationale (A, correct):** aria-rowcount: 15 tells the screen reader how many rows; they hear "Files, grid, 15 items."

**Rationale (B):** File type info is at row level, not grid level.

**Rationale (C):** Role is "grid," not "card"; count is announced once.

**Rationale (D):** Sorting would use aria-sort on column headers, not on the grid container.

---

### Q5: [2A.03] Selection State from Grid Properties

**Stimulus:** ![Chrome DevTools Accessibility Tree panel for a grid element](assets/L09-q4-stimulus.png)

**Stem:** Based on the accessibility tree, can you determine if any of the 15 cards are currently selected?

**Options:**
- A) No. But that would be cool
- B) Yes. Because multiselectable is set to true
- C) Yes. Because focusable is set to true
- D) No. It says read-only: false

**Key:** A

**Rationale (A, correct):** Grid-level properties show capabilities (Multi-selectable: true) but not which rows are selected; you must inspect individual rows for aria-selected.

**Rationale (B):** multiselectable describes capability, not current state.

**Rationale (C):** Focus and selection are different; selection state is per-row.

**Rationale (D):** read-only relates to editability, not selection.

---

## 2B: Screen Reader Operation

### Learning Objectives (from Canvas)

- **2B.01** | Navigate pages using VoiceOver and NVDA
  Demonstrate basic screen reader navigation on web content

- **2B.02** | Distinguish browse mode vs focus mode
  Explain when and why screen readers switch between reading and interaction modes

- **2B.03** | Use quick navigation for headings and landmarks and links
  Navigate efficiently using screen reader element lists and shortcuts

### Knowledge Check Questions

*Source: L11*

### Q1: [2B.01] Data Table Header Announcement

**Stem:** A screen reader user navigates into a data table and moves to a cell displaying "$29.99." The screen reader announces "Price: $29.99." What HTML element is responsible for the "Price:" announcement?

**Options:**
- A) An `aria-label` attribute on the cell
- B) A `<th>` element with `scope="col"` in the Price column header
- C) A `<caption>` element at the top of the table
- D) A `<label>` element associated with the cell

**Key:** B

**Rationale:** Screen readers announce column header (`<th scope="col">`) or row header (`<th scope="row">`) for each cell. `<th scope="col">` in the Price column creates the "Price:" context.

---

### Q2: [2B.02] Dialog Focus Management

**Stem:** A designer specifies a confirmation dialog with heading, warning message, and "Cancel"/"Confirm Delete" buttons. A screen reader tester reports they can use browse mode arrow keys to read content behind the dialog. Which attribute is most likely missing?

**Options:**
- A) `aria-label` on the dialog heading
- B) `aria-modal="true"` on the dialog container
- C) `tabindex="-1"` on the dialog container
- D) `aria-hidden="true"` on the dialog overlay

**Key:** B

**Rationale:** Without `aria-modal="true"`, screen readers can trap Tab but still allow browse mode to reach background content. Adding it scopes the virtual cursor to the dialog.

---

### Q3: [2B.01] Form Group Announcement

**Stem:** When a screen reader user tabs to the "City" field in a checkout form's second section, they hear "Billing Address, City, edit text, required." What HTML pattern causes the "Billing Address" group label?

**Options:**
- A) An `aria-label="Billing Address"` on the input field
- B) A `<fieldset>` with a `<legend>` containing "Billing Address" wrapping the form section
- C) A `<h3>` heading above the form section
- D) An `aria-describedby` pointing to a paragraph with "Billing Address"

**Key:** B

**Rationale:** `<fieldset>` and `<legend>` create form groups; when a field in the fieldset receives focus, the legend is announced as the group label before the field name.

---

### Q4: [2B.03] Live Region for Search Results

**Stem:** When a search query is submitted, the results area updates to show "24 results found." The designer wants screen reader users informed without moving focus. Which approach is most appropriate?

**Options:**
- A) Use `aria-live="assertive"` on the results count to interrupt immediately
- B) Use `aria-live="polite"` or `role="status"` on the results count container
- C) Move focus to the results count element after search completes
- D) Add `role="alert"` to the entire results section

**Key:** B

**Rationale:** A search results count is non-urgent. `aria-live="polite"` or `role="status"` announces when the screen reader finishes current speech. Assertive would interrupt inappropriately; moving focus disrupts position; role="alert" on the whole section would re-read all content on every update.

---

### Q5: [2B.02] Tab Panel Keyboard Interaction

**Stem:** In a tab panel with "Overview," "Features," "Pricing," the tester navigates to the first tab and hears "Overview, selected, tab, 1 of 3." They press Right Arrow and hear "Features, tab, 2 of 3." Then they press Tab. What should happen in a correctly-implemented tab panel?

**Options:**
- A) Focus moves to the "Pricing" tab (next tab in list)
- B) Focus moves to the content within the currently-selected tab panel
- C) The screen reader switches to browse mode automatically
- D) Focus moves to the first link or heading on the page

**Key:** B

**Rationale:** Left/Right Arrow move between tabs; Tab moves focus OUT of the tablist INTO the active tab panel content.

---

## 2C: Screen Magnification

### Learning Objectives (from Canvas)

- **2C.01** | Understand screen magnification tools and user needs
  Explain how ZoomText and Windows Magnifier and macOS Zoom and browser zoom work and their user populations

- **2C.02** | Test designs with screen magnification tools
  Validate designs at various magnification levels using system and browser zoom

- **2C.03** | Design for screen magnification compatibility
  Create layouts that work well for users who view content through a magnified viewport

### Knowledge Check Questions

*Source: L12*

### Q1: [2C.01] System Magnification vs Browser Zoom

**Stem:** Which best describes the fundamental difference between system-level magnification (e.g., Windows Magnifier) and browser zoom (Ctrl/Cmd +)?

**Options:**
- A) System magnification magnifies pixels without changing layout; browser zoom reflows content to fit the window
- B) Browser zoom increases page resolution; system magnification decreases it to save processing power
- C) Browser zoom is only for text resizing; system magnification is for images and video
- D) System magnification is for blind users; browser zoom is for low vision users

**Key:** A

**Rationale:** System magnification enlarges the display like a magnifying glass; browser zoom triggers responsive design and layout changes.

---

### Q2: [2C.03] Focus Ring Thickness for Magnification

**Stem:** A designer wants the focus indicator to be easily trackable for a magnification user. What is the recommended minimum thickness for the focus ring?

**Options:**
- A) At least 2 pixels
- B) 10 pixels
- C) Focus indicators should be avoided as they distract magnification users
- D) 1 pixel

**Key:** A

**Rationale:** 2px or thicker aligns with WCAG 2.2 SC 2.4.13 (Focus Appearance); thin outlines are insufficient at high magnification.

---

### Q3: [2C.03] Text Alignment for Magnification Users

**Stem:** Which alignment is generally preferred for text and labels to support users who scan pages at high magnification?

**Options:**
- A) Left-aligned
- B) Justified
- C) Right-aligned
- D) Centered

**Key:** A

**Rationale:** Left-alignment provides a consistent starting edge and predictable left edge for the viewport.

---

### Q4: [2C.03] Error Message Placement for Magnification

**Stem:** When designing a form for magnification compatibility, which placement for error messages is most effective?

**Options:**
- A) Inline, directly adjacent to or below the specific input field
- B) In a summary box at the very top of the page
- C) In a popup alert that must be dismissed before continuing
- D) At the very bottom of the form next to the Submit button

**Key:** A

**Rationale:** Proximity is critical; at high magnification the viewport is limited, so related information must be spatially close.

---

### Q5: [2C.02] Sticky Headers at High Magnification

**Stem:** What is a major accessibility risk of using large "sticky" headers at high magnification levels?

**Options:**
- A) They consume a significant percentage of the limited vertical viewport
- B) They can obscure the focus indicator as the user tabs through
- C) Sticky headers are automatically hidden by macOS Zoom
- D) They prevent spatial memory for finding the navigation menu

**Key:** A

**Rationale:** At high zoom, a sticky header that takes 10% of a standard screen may take 50%+ of the magnified viewport; fixed positioning means it cannot be scrolled out of view.

---

## 2E: Windows High Contrast Mode

### Learning Objectives (from Canvas)

- **2E.01** | Test designs in Windows High Contrast Mode
  Validate that designs remain usable with forced colors

- **2E.02** | Identify high contrast mode failures
  Recognize when design elements disappear or become unusable in forced colors

- **2E.03** | Design for forced colors compatibility
  Create designs that adapt appropriately to user color preferences

### Knowledge Check Questions

*Source: L14*

### Q1: [2E.01] High Contrast Mode vs Dark Mode

**Stem:** In what primary way does Windows High Contrast Mode (Forced Colors) differ from a standard Dark Mode implementation?

**Options:**
- A) Forced colors give the user full control over the palette; Dark Mode provides author-defined color schemes
- B) Dark Mode is a system-level override; forced colors are controlled by the website author
- C) Dark Mode is required by WCAG 2.1; High Contrast Mode is optional
- D) Forced colors only affect text; Dark Mode affects the entire UI including images

**Key:** A

**Rationale:** High Contrast Mode lets users define/choose system keywords; Dark Mode usually relies on prefers-color-scheme where the designer chooses hex values.

---

### Q2: [2E.02] System Color Keyword for Disabled Text

**Stem:** Which system color keyword is used to represent disabled text in High Contrast Mode?

**Options:**
- A) GrayText
- B) CanvasText
- C) ButtonText
- D) HighlightText

**Key:** A

**Rationale:** GrayText is the system keyword for disabled or inactive text.

---

### Q3: [2E.02] currentColor and SVG Visibility in Forced Colors

**Stem:** In a complex SVG icon, setting the fill attribute to currentColor ensures visibility in High Contrast Mode because:

**Options:**
- A) It causes the icon to inherit the forced text color (CanvasText), ensuring contrast
- B) It allows the icon to inherit the Canvas keyword
- C) It prevents the system from overriding the SVG's internal CSS styles
- D) It forces the system to ignore the SVG and use a text fallback

**Key:** A

**Rationale:** Text color is guaranteed to contrast with background in WHCM; inheriting it keeps the icon visible.

---

### Q4: [2E.03] Transparent Border for WHCM Visibility

**Stem:** A developer wants a Submit button to have a visible border in High Contrast Mode but remain borderless in standard view. Which CSS should be applied to the default state?

**Options:**
- A) border: 2px solid transparent;
- B) outline: 2px solid ButtonText;
- C) box-shadow: 0 0 0 2px black;
- D) border: none;

**Key:** A

**Rationale:** A transparent border is invisible in normal mode; its color is overridden by the system in High Contrast Mode. box-shadow is removed in forced colors.

---

### Q5: [2E.02] Prioritizing WHCM Failures

**Stem:** Which of the following failures should be addressed first?

**Options:**
- A) The keyboard focus indicator becoming completely invisible on interactive links
- B) Card components losing their subtle dropshadow boundaries
- C) Brand logos losing their specific corporate hex colors
- D) Success and Error messages losing their green and red background colors

**Key:** A

**Rationale:** Focus indicator loss is Tier 1 (Critical) because it prevents keyboard users from navigating. Others are lower priority.

---

## 2H: Perceptual and Cognitive Design Considerations

### Learning Objectives (from Canvas)

- **2H.01** | Apply spatial hierarchy principles for accessibility
  Design clear visual hierarchy that supports comprehension for users with cognitive and visual disabilities

- **2H.02** | Design appropriate visual density and whitespace
  Create layouts with sufficient spacing and density that reduce cognitive load and support focus

- **2H.03** | Ensure component semantics support comprehension
  Select and apply component patterns that communicate purpose and state clearly to all users

### Knowledge Check Questions

*Source: L16*

### Q1: [2H.01] Spatial Hierarchy and Heading Structure

**Stem:** A designer creates a dashboard where "Sales Overview" is the largest text, with three card headings "Revenue," "Orders," "Customers," and sidebar "Quick Filters." HTML shows: "Sales Overview" is H3, the three cards are H2, "Quick Filters" is H1. What is the primary accessibility problem?

**Options:**
- A) Visual hierarchy and heading hierarchy are misaligned, confusing screen reader users
- B) The sidebar should not have a heading at all
- C) All headings should be the same level since the cards have equal visual weight
- D) Heading levels are fine because screen readers ignore levels

**Key:** A

**Rationale:** Visual hierarchy says "Sales Overview" is most important (largest), but heading hierarchy makes "Quick Filters" H1 (top-level). Heading levels should match visual prominence.

---

### Q2: [2H.02] Visual Density and Progressive Disclosure

**Stem:** A PM wants to remove whitespace from a settings page so all 24 settings are visible without scrolling, arguing expert users prefer everything at once. Which response best addresses both the PM's goals and cognitive accessibility?

**Options:**
- A) Remove the whitespace as requested
- B) Keep spacing; explain whitespace is required by WCAG 2.2 Level AA
- C) Propose progressive disclosure: 8 group headings with spacing, users expand to see settings
- D) Split settings across 8 separate pages

**Key:** C

**Rationale:** Progressive disclosure addresses efficiency (groups visible, expand on demand) and cognitive accessibility (manageable default density). Whitespace is not directly "required" by WCAG; B is inaccurate.

---

### Q3: [2H.02] WCAG 1.4.12 Text Spacing

**Stem:** After applying WCAG 1.4.12 text spacing overrides (line-height 1.5x, paragraph spacing 2x, letter-spacing 0.12em, word-spacing 0.16em), text in a card overflows its container and the last line of a tooltip is clipped. Correct assessment?

**Options:**
- A) WCAG 1.4.12 failure because content is lost when spacing is adjusted
- B) Acceptable because users should not override designer's spacing
- C) Only a failure if clipped text contains essential info not available elsewhere
- D) Not testable; 1.4.12 only applies to paragraph text

**Key:** A

**Rationale:** 1.4.12 requires no loss of content or functionality when users adjust to specified values. Overflow and clipped tooltip are content loss. Use flexible heights and visible overflow.

---

### Q4: [2H.03] Component Semantic Mismatch

**Stem:** A "Favorites" heart icon: on the listing page it is a `<div>` with a click handler; on the detail page it is a `<button>` with aria-pressed. Visual appearance is identical. What accessibility issues?

**Options:**
- A) The div is not keyboard accessible; inconsistent implementation violates WCAG 3.2.4
- B) The heart should be a link on both pages
- C) No issue; visual appearance is the same
- D) The button implementation is wrong; aria-pressed is only for toggle buttons

**Key:** A

**Rationale:** div with click handler lacks keyboard access and semantic role; different implementations for the same function violate 3.2.4 (Consistent Identification). Use button with aria-pressed on both.

---

### Q5: [2H.03] Consistent Identification Across Pages

**Stem:** Destructive action confirmations vary: Page A uses a modal with "Cancel"/"Delete"; Page B immediately deletes with an "Undo" toast (5s); Page C uses inline "Yes, delete"/"Never mind" links. All for the same action. Most significant perceptual/cognitive concern?

**Options:**
- A) Toast in Page B may not be perceivable by screen reader users if not a live region
- B) Inconsistent confirmation patterns create unpredictable behavior and increase cognitive load
- C) Text links in Page C should be buttons for destructive actions
- D) Modal in Page A is most accessible; others should not be used

**Key:** B

**Rationale:** The inconsistency is the largest cognitive concern (WCAG 3.2.4, 3.2.3). Users cannot build a reliable mental model; each delete action requires re-learning. Choose one pattern and use it consistently.

---

# Domain 3: Review Leadership Compliance and Advocacy (25%)

*Leading accessibility practice and understanding legal frameworks and driving organizational change*

*No lesson-level knowledge check questions. Domain 3 (Deliver Badge) uses different assessment types.*
