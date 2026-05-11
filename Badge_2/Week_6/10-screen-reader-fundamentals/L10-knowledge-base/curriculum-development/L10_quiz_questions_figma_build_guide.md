# Lesson 10: Screen Reader Fundamentals - Quiz Questions

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

### Frame 5.2: Question 1 - Screen Reader Navigation Basics

**Type:** Content
**Headline:** Question 1: Screen Reader Navigation Basics
**LO pill:** `2B.01`

**Body text:**
A designer turns on VoiceOver to test a web page. The first element they land on is announced as: "Welcome to our product, heading level 1." They press VO+Right Arrow and hear: "Explore our features and get started today." What does this tell the designer about the page structure?

**Bullet list:**
- A) The page has a proper H1 heading followed by introductory text content
- B) The page has two headings at the same level
- C) VoiceOver is not reading the page correctly because it should skip to the next interactive element
- D) The accessible name of the heading includes the paragraph text

**Key insight callout:**
Correct answer: A. The screen reader announced an H1 heading followed by text content. In browse mode, the screen reader reads through all content in DOM order, including both structural elements (headings) and text content.

---

### Frame 5.3: Question 2 - What Screen Readers Announce

**Type:** Content
**Headline:** Question 2: What Screen Readers Announce
**LO pill:** `2B.01`

**Body text:**
You are testing a page with a screen reader and encounter a button. The screen reader announces: "Add to cart, button." Based on what you learned about accessibility tree properties, which properties are being conveyed in this announcement?

**Bullet list:**
- A) Name and value
- B) Name and role
- C) Role and state
- D) Name, role, and state

**Key insight callout:**
Correct answer: B. "Add to cart" is the accessible name and "button" is the role. No state is announced because the button has no special state (not disabled, pressed, or expanded).

---

### Frame 5.4: Question 3 - Browse Mode vs Focus Mode

**Type:** Content
**Headline:** Question 3: Browse Mode vs Focus Mode
**LO pill:** `2B.02`

**Body text:**
A designer is testing a page with NVDA. They navigate through headings and paragraphs using arrow keys. When they reach a search form and press Tab to move to the search input field, they hear a high-pitched tone. What does the high-pitched tone indicate?

**Bullet list:**
- A) NVDA has encountered an error with the form field
- B) NVDA has switched to focus mode because the user entered an interactive form field
- C) The form field is missing an accessible name
- D) NVDA is warning that the page has keyboard accessibility issues

**Key insight callout:**
Correct answer: B. NVDA uses audio tones to communicate mode changes. A high-pitched tone means NVDA has switched from browse mode to focus mode. In focus mode, keyboard input goes to the form control so users can type.

---

### Frame 5.5: Question 4 - Mode Switching and Design Impact

**Type:** Content
**Headline:** Question 4: Mode Switching and Design Impact
**LO pill:** `2B.02`

**Body text:**
A designer has specified a custom dropdown menu built with div elements and JavaScript. During screen reader testing, users report they can read the dropdown label but cannot use arrow keys to navigate between options when the dropdown is open. What is the most likely cause?

**Bullet list:**
- A) The dropdown is too complex for screen readers to handle
- B) The custom dropdown lacks proper ARIA roles, so the screen reader stays in browse mode instead of switching to focus mode
- C) Users need to press Tab to move between dropdown options
- D) The dropdown needs visible focus indicators to work with screen readers

**Key insight callout:**
Correct answer: B. Without proper ARIA roles (like role="listbox" and role="option"), the screen reader has no way to know this is an interactive widget and stays in browse mode, where arrow keys move between lines of content.

---

### Frame 5.6: Question 5 - Quick Navigation and Element Lists

**Type:** Content
**Headline:** Question 5: Quick Navigation and Element Lists
**LO pill:** `2B.03`

**Body text:**
A screen reader user opens the NVDA Elements List (Insert+F7) on a web page and sees: Heading level 2: Our Products, Heading level 2: Featured Items, Heading level 2: Customer Reviews, Heading level 2: Contact Us. The user expected to find subcategories under "Our Products" (like "Software" and "Hardware"). What does this heading list reveal?

**Bullet list:**
- A) The page has good heading structure because all sections are at the same level
- B) The page is missing heading levels: subcategories should use H3 under the H2 sections to create a navigable hierarchy
- C) The page should use H1 for main sections instead of H2
- D) The Elements List is not showing the complete heading structure

**Key insight callout:**
Correct answer: B. The heading list reveals a flat structure with no hierarchy. Subcategories like "Software" and "Hardware" should be H3 headings nested under the H2. Screen reader users rely on heading levels for navigation.
