# Lesson 16: Perceptual and Cognitive Design - Quiz Questions

**Badge Level:** Define
**Duration:** Quiz Review
**Delivery:** Assessment Slides
**Outcomes Covered:** 2H.01, 2H.02, 2H.03

---

## Slide Deck Structure

### Frame 5.1: Quiz Questions Overview

**Type:** Section divider
**Content:**
- Section number: `5`
- Title: `Quiz Questions`

---

### Frame 5.2: Question 1 - Spatial Hierarchy and Heading Structure

**Type:** Content
**Headline:** Question 1: Spatial Hierarchy and Heading Structure
**LO pill:** `2H.01`

**Body text:**
A designer creates a dashboard where the page title "Sales Overview" is visually the largest text. Below are three card sections with medium headings: "Revenue," "Orders," "Customers." A sidebar has smaller text headed "Quick Filters." When you inspect the HTML: "Sales Overview" is an h3, the cards are h2, and "Quick Filters" is an h1. What is the primary accessibility problem?

**Bullet list:**
- A) The visual hierarchy and the heading hierarchy are misaligned, which confuses screen reader users who navigate by headings
- B) The sidebar should not have a heading at all, since it is less important than the main content
- C) All headings should be the same level since the three card sections have equal visual weight
- D) The heading levels are fine because screen readers ignore heading levels and only read the text content

**Key insight callout:**
Correct answer: A. The visual hierarchy tells sighted users "Sales Overview" is most important, but the heading hierarchy tells screen readers the opposite (h1 is "Quick Filters"). The heading levels should match visual prominence.

---

### Frame 5.3: Question 2 - Visual Density and Cognitive Load

**Type:** Content
**Headline:** Question 2: Visual Density and Progressive Disclosure
**LO pill:** `2H.02`

**Body text:**
A PM asks you to redesign a settings page (currently 8 option groups with generous spacing) by removing whitespace so all 24 individual settings are visible without scrolling. They argue expert users prefer seeing everything at once. Which response best addresses both goals and cognitive accessibility?

**Bullet list:**
- A) Remove the whitespace as requested, since efficiency is more important than spacing preferences
- B) Keep the current spacing and explain that whitespace is required by WCAG 2.2 Level AA
- C) Propose progressive disclosure: show the 8 group headings with appropriate spacing, and let users expand groups to see individual settings
- D) Split the settings across 8 separate pages, one per group, to reduce density

**Key insight callout:**
Correct answer: C. Progressive disclosure addresses both goals: the PM gets efficiency (all groups visible, users quickly find and expand what they need) and cognitive accessibility is maintained (manageable density with appropriate spacing).

---

### Frame 5.4: Question 3 - WCAG 1.4.12 Text Spacing

**Type:** Content
**Headline:** Question 3: WCAG 1.4.12 Text Spacing Compliance
**LO pill:** `2H.02`

**Body text:**
You test an interface by applying WCAG 1.4.12 text spacing overrides: line-height 1.5x, paragraph spacing 2x, letter-spacing 0.12em, word-spacing 0.16em. After applying, text in a card overflows its container and the last line of a tooltip is clipped and unreadable. What is the correct assessment?

**Bullet list:**
- A) This is a WCAG 1.4.12 failure because content is lost when text spacing is adjusted to the specified values
- B) This is acceptable because users should not be overriding the designer's intended text spacing
- C) This is only a failure if the clipped text contains essential information not available elsewhere
- D) This is not testable because WCAG 1.4.12 only applies to paragraph text, not cards or tooltips

**Key insight callout:**
Correct answer: A. WCAG 1.4.12 (Text Spacing, Level AA) requires no loss of content or functionality when users adjust text spacing to the specified minimum values. Both the overflow and clipped tooltip represent content loss.

---

### Frame 5.5: Question 4 - Component Semantic Mismatch

**Type:** Content
**Headline:** Question 4: Component Semantic Mismatch
**LO pill:** `2H.03`

**Body text:**
A designer created a "Favorites" feature with a heart icon. On the listing page, the heart is a div with a click handler. On the detail page, the same heart icon is a button with aria-pressed. The visual appearance is identical on both pages. What accessibility issues does this create?

**Bullet list:**
- A) The div implementation on the listing page is not keyboard accessible, and the inconsistent implementation violates WCAG 3.2.4 (Consistent Identification)
- B) The heart icon should be a link on both pages since it changes the state of the item
- C) There is no issue because the visual appearance is the same on both pages
- D) The button implementation is wrong because aria-pressed is only for toggle buttons, not favorite actions

**Key insight callout:**
Correct answer: A. The div with click handler is not keyboard accessible and has no semantic role. Having different implementations for the same function across pages violates WCAG 3.2.4 (Consistent Identification).

---

### Frame 5.6: Question 5 - Consistent Identification Across Pages

**Type:** Content
**Headline:** Question 5: Consistent Identification Across Pages
**LO pill:** `2H.03`

**Body text:**
You audit a web application and find three different patterns for confirming destructive actions: Page A uses a modal dialog with Cancel/Delete buttons, Page B immediately deletes with an "Undo" toast that disappears after 5 seconds, Page C uses inline confirmation with text links. All three handle the same action: permanently deleting user content. What is the most significant concern?

**Bullet list:**
- A) The toast notification in Page B may not be perceivable by screen reader users if not implemented as a live region
- B) The inconsistent confirmation patterns across pages create unpredictable behavior that increases cognitive load for all users, especially those with cognitive disabilities
- C) The text links in Page C should be buttons because they perform destructive actions
- D) The modal dialog in Page A is the most accessible pattern and the others should not be used at all

**Key insight callout:**
Correct answer: B. The most significant concern is the inconsistency itself. Users cannot build a reliable mental model of how deletion works. This is a WCAG 3.2.4 (Consistent Identification) concern that affects all users, especially those with cognitive disabilities.
