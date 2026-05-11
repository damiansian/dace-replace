# L01 Quiz: Accessible Names

**Module:** 1A | **Badge:** Discover | **Points:** 5 (1 point each)
**Format:** Multiple choice, auto-graded

---

## Outcome Mapping

| Question | Outcome ID | Outcome Description |
|----------|------------|---------------------|
| Q1 | 1A.01 | Define accessible names and their role in AT interaction |
| Q2 | 1A.02 | Identify when accessible names are required vs optional |
| Q3 | 1A.03 | Evaluate accessible name quality |
| Q4 | 1A.04 | Specify accessible names in design annotations |
| Q5 | 1A.05 | Distinguish between visible labels and programmatic names |

---

## Questions

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

**Stimulus**
The Photoshop app icon with a Blueline annotation reading "n/a decorative" and a note that reads "applies to both app icons". There is a Creative Cloud app icon on the other card component. The visible text label already next to each. 

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
