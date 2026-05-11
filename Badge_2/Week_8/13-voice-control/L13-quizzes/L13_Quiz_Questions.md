# L13: Voice Control - Quiz Questions

**Lesson:** L13 Voice Control  
**Badge:** Define  
**Outcomes:** 2D.01, 2D.02, 2D.03  
**Questions:** 5  
**Points:** 5 (1 point each)

---

## Question 1

**Outcome:** 2D.01  
**Type:** Recall / Application

**Stem:** A voice control user wants to activate a button that displays the visible text "Submit Order." Which voice command represents the most efficient interaction path?

**Options:**
- A) "Show numbers" then "click 7"
- B) "Click Submit Order"
- C) "Show grid" then "click 4-2"
- D) "Tab to Submit Order then press Enter"

**Correct Answer:** B

**Rationale:** Name-based targeting ("click [visible label]") is the most efficient voice control interaction. The user says what they see, and the system activates the matching element. Options A and C are fallback methods that require additional steps. Option D describes keyboard navigation, not a standard voice command syntax.

---

## Question 2

**Outcome:** 2D.02  
**Type:** Scenario / Application

**Stem:** A designer's page includes three cards, each with a button labeled "Learn more." A voice control user says "click Learn more." What is the most likely result?

**Options:**
- A) The system activates all three buttons simultaneously
- B) The system ignores the command because it cannot determine which button to activate
- C) The system displays a disambiguation prompt asking which "Learn more" the user wants
- D) The system activates the first "Learn more" button on the page

**Correct Answer:** C

**Rationale:** When multiple elements share the same accessible name, most voice control tools display a disambiguation prompt (showing numbered options for each matching element). This slows the user down and increases cognitive load. The design fix is to use unique, descriptive accessible names like "Learn more about pricing" or "Learn more about features." Option A is incorrect because systems do not activate multiple elements. Option B is incorrect because most systems handle duplicates with disambiguation rather than ignoring the command.

---

## Question 3

**Outcome:** 2D.03  
**Type:** Application

**Stem:** A button displays the visible text "Search" but has `aria-label="Find products in our catalog"`. A voice control user says "click Search." What happens, and which WCAG success criterion is violated?

**Options:**
- A) The button activates successfully; no violation
- B) The command fails; WCAG 2.5.3 Label in Name (Level A) is violated because "Search" is not included in the accessible name
- C) The command fails; WCAG 4.1.2 Name, Role, Value (Level A) is violated because the button has no accessible name
- D) The command fails; WCAG 1.1.1 Non-text Content (Level A) is violated because the button lacks alt text

**Correct Answer:** B

**Rationale:** WCAG 2.5.3 Label in Name requires that when a UI component has visible text, the accessible name must include that text. The accessible name "Find products in our catalog" does not contain the word "Search," so the voice command "click Search" fails. Option A is incorrect because the name mismatch causes the command to fail. Option C is wrong because the button does have an accessible name (via aria-label), it just does not include the visible text. Option D does not apply because this is a button with text, not a non-text content element.

---

## Question 4

**Outcome:** 2D.02  
**Type:** Scenario / Analysis

**Stem:** A voice control user is trying to complete a checkout form. They say "click Email" to focus the email input field, but nothing happens. Upon inspection, the form field has a visible label "Email" but the `<label>` element is not programmatically associated with the `<input>`. What is the root cause of this voice control failure?

**Options:**
- A) Voice control cannot interact with form fields
- B) The form field has no accessible name because the label is not programmatically associated, so voice control cannot match the spoken command to the element
- C) The user needs to say "click Email address" instead of "click Email"
- D) Voice control requires all form fields to have `aria-label` attributes

**Correct Answer:** B

**Rationale:** When a `<label>` element is not programmatically associated with its `<input>` (via `for`/`id` pairing or by nesting the input inside the label), the form field has no accessible name derived from the label text. Voice control queries the accessibility tree and cannot find an element named "Email," so the command fails. This connects back to L01 (Accessible Names) and L04 (Forms). Option A is incorrect because voice control can interact with properly-labeled form fields. Option C is incorrect because the issue is the missing association, not the command wording. Option D is incorrect because `aria-label` is not required when native HTML labeling is properly implemented.

---

## Question 5

**Outcome:** 2D.03  
**Type:** Application / Best Practice

**Stem:** A designer is annotating a button that displays the text "Close" with an X icon. The button closes a modal dialog. Which accessible name best satisfies both screen reader users and voice control users?

**Options:**
- A) "X"
- B) "Close dialog"
- C) "Dismiss the current modal overlay window"
- D) "Button"

**Correct Answer:** B

**Rationale:** "Close dialog" starts with the visible text "Close" (satisfying WCAG 2.5.3 Label in Name for voice control users who say "click Close") and adds context about what it closes (helpful for screen reader users). Option A fails because "X" does not match the visible text "Close" and is not descriptive. Option C is overly verbose and does not start with the visible text "Close." Option D provides no meaningful information about the button's function.

---

## Question Distribution

| Question | Outcome | Type | Topic |
|----------|---------|------|-------|
| Q1 | 2D.01 | Recall/Application | Voice control navigation efficiency |
| Q2 | 2D.02 | Scenario | Duplicate accessible names barrier |
| Q3 | 2D.03 | Application | Label in Name violation identification |
| Q4 | 2D.02 | Scenario/Analysis | Form field targeting failure diagnosis |
| Q5 | 2D.03 | Best Practice | Writing accessible names for voice + screen reader |

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L13: Voice Control*
