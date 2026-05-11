# Lesson 9: DOM and Accessibility Tree - Quiz Questions

**Badge Level:** Define
**Duration:** Quiz Review
**Delivery:** Assessment Slides
**Outcomes Covered:** 2A.01, 2A.02, 2A.03

---

## Slide Deck Structure

### Frame 5.1: Quiz Questions Overview

**Type:** Section divider
**Content:**
- Section number: `5`
- Title: `Quiz Questions`

---

### Frame 5.2: Question 1 - DOM to Accessibility Tree Relationship

**Type:** Content
**Headline:** Question 1: DOM to Accessibility Tree Relationship
**LO pill:** `2A.01`

**Body text:**
A web page contains the following HTML structure: a card <div> with these children: a decorative-border <div>, an <h2> with "Product Name", a <p> with "$29.99", and a <button> with "Add to Cart". Which elements would typically appear in the accessibility tree?

**Bullet list:**
- A) All five elements (div.card, div.decorative-border, h2, p.price, button)
- B) Only the h2 heading, p text, and button
- C) Only the button because it's the only interactive element
- D) The div.card container and all its children

**Key insight callout:**
Correct answer: B. The accessibility tree includes elements with semantic meaning: the h2 heading (role: heading, level 2), the paragraph text content, and the button (role: button). Generic divs used for layout are typically pruned.

---

### Frame 5.3: Question 2 - Accessibility Tree Properties

**Type:** Content
**Headline:** Question 2: Accessibility Tree Properties
**LO pill:** `2A.01`

**Body text:**
When inspecting an element in the browser's accessibility tree, you see: Name: "Submit application", Role: button, State: disabled. Which statement best describes what this information tells an assistive technology user?

**Bullet list:**
- A) The element is a button labeled "Submit application" that cannot currently be activated
- B) The element is a submit input with the text "application" inside it
- C) The element is disabled because it has no accessible name
- D) The element needs an aria-label because the name came from text content

**Key insight callout:**
Correct answer: A. The Name tells what it's called, the Role tells what type of element it is, and the State tells its current condition. A screen reader would announce: "Submit application, button, disabled."

---

### Frame 5.4: Question 3 - Using Dev Tools

**Type:** Content
**Headline:** Question 3: Using Dev Tools to Identify Issues
**LO pill:** `2A.02`

**Body text:**
You're using Chrome DevTools to inspect a custom dropdown component and notice the following in the Accessibility panel: Name: empty, Role: generic, Children: list with 5 items. What accessibility issues does this reveal?

**Bullet list:**
- A) The dropdown has too many children for assistive technology to handle
- B) The dropdown is missing an accessible name and has an incorrect role
- C) The dropdown needs to use native HTML select element instead
- D) The accessibility panel is not showing complete information

**Key insight callout:**
Correct answer: B. The dev tools reveal two issues: 1) No accessible name (Name: empty), so screen reader users won't know what this dropdown is for. 2) The role is "generic" instead of "combobox" or "listbox", so AT users won't understand this is an interactive dropdown.

---

### Frame 5.5: Question 4 - Identifying Missing State

**Type:** Content
**Headline:** Question 4: Identifying Missing State Attributes
**LO pill:** `2A.02`

**Body text:**
You inspect an expandable accordion section and see these accessibility properties: Name: "Shipping Information", Role: button, aria-expanded: (not present). The accordion is visually shown as collapsed (content hidden). What issue does this reveal?

**Bullet list:**
- A) The role should be "heading" not "button"
- B) The aria-expanded state is missing, so AT users won't know the section is collapsed
- C) The name should describe the expanded/collapsed state
- D) Accordion sections cannot be implemented accessibly

**Key insight callout:**
Correct answer: B. The accordion has a good name and appropriate role, but it's missing the aria-expanded attribute. Without aria-expanded="false", screen reader users have no way to know the section is currently collapsed.

---

### Frame 5.6: Question 5 - Design Impact on Accessibility Tree

**Type:** Content
**Headline:** Question 5: Design Impact on the Accessibility Tree
**LO pill:** `2A.03`

**Body text:**
A designer specifies an icon-only button with these annotations: Icon: magnifying glass SVG, Accessible name: "Search", Visual tooltip on hover: "Search products". Based on these specifications, which accessibility tree properties would you expect?

**Bullet list:**
- A) Name: "Search products", Role: button (tooltip takes priority)
- B) Name: "Search", Role: image (because it's an icon)
- C) Name: "Search", Role: button
- D) Name: empty, Role: button (icons don't have names)

**Key insight callout:**
Correct answer: C. The accessibility tree would have Name: "Search" (from the aria-label the designer specified) and Role: "button" (the element's semantic role). The icon is decorative, and the tooltip is supplementary, not the primary accessible name.
