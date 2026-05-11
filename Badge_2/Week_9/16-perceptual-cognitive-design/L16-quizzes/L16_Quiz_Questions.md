# L16: Perceptual and Cognitive Design Considerations - Quiz Questions

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Define  
**Lesson:** L16  
**Assessment Type:** Knowledge Check Quiz  
**Points:** 5 (1 point per question)  
**Format:** Auto-graded, multiple choice  
**Outcomes Tested:** 2H.01 (x1), 2H.02 (x2), 2H.03 (x2)

---

## Question 1: Spatial Hierarchy and Heading Structure (Outcome 2H.01)

**Question:**

A designer creates a dashboard layout where the page title "Sales Overview" is visually the largest and most prominent text element. Below it are three card sections with medium-sized headings: "Revenue," "Orders," and "Customers." A sidebar on the right contains smaller text with the heading "Quick Filters."

When you inspect the HTML, you discover: "Sales Overview" is an `<h3>`, "Revenue," "Orders," and "Customers" are all `<h2>`, and "Quick Filters" is an `<h1>`.

What is the primary accessibility problem with this implementation?

**Answer Options:**

A) The visual hierarchy and the heading hierarchy are misaligned, which confuses screen reader users who navigate by headings
B) The sidebar should not have a heading at all, since it is less important than the main content
C) All headings should be the same level since the three card sections have equal visual weight
D) The heading levels are fine because screen readers ignore heading levels and only read the text content

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! The visual hierarchy tells sighted users that 'Sales Overview' is the most important element (largest text), followed by the three card headings, with 'Quick Filters' being least prominent. But the heading hierarchy tells screen reader users the opposite: H1 ('Quick Filters') is the top-level heading, H2s are the card sections, and H3 ('Sales Overview') is the least structurally important. This misalignment means sighted and non-sighted users get conflicting information about page structure. The heading levels should match the visual prominence: 'Sales Overview' should be H1, card headings should be H2, and 'Quick Filters' should be H2 or H3."

**If B selected:**
"Incorrect. The sidebar absolutely should have a heading. Headings help screen reader users navigate to content sections efficiently. The issue is not whether the sidebar has a heading, but what level that heading is. 'Quick Filters' is visually small and secondary, so it should have a lower heading level (H2 or H3), not H1."

**If C selected:**
"Incorrect. While the three card sections do have equal visual weight and could reasonably all be the same heading level, the real problem is that the entire heading hierarchy is inverted relative to the visual hierarchy. The page title should be H1, not H3. Making all headings the same level would actually make navigation harder, not easier."

**If D selected:**
"Incorrect. Screen readers absolutely use heading levels for navigation. Users can press the H key to jump between headings, filter by heading level (e.g., jump to the next H2), and use heading lists to scan page structure. Heading levels are one of the primary ways screen reader users build a mental model of page organization."

---

## Question 2: Visual Density and Cognitive Load (Outcome 2H.02)

**Question:**

A product manager asks you to redesign a settings page that currently shows 8 option groups with generous spacing between them. The PM wants to "make it more efficient" by removing whitespace so all 24 individual settings are visible without scrolling. They argue that expert users prefer seeing everything at once.

Which response best addresses both the PM's goals and cognitive accessibility?

**Answer Options:**

A) Remove the whitespace as requested, since the PM's goal of efficiency is more important than spacing preferences
B) Keep the current spacing and explain that whitespace is required by WCAG 2.2 Level AA
C) Propose progressive disclosure: show the 8 group headings with appropriate spacing, and let users expand groups to see individual settings
D) Split the settings across 8 separate pages, one per group, to reduce density on each page

**Correct Answer:** C

**Answer-Specific Feedback:**

**If A selected:**
"Incorrect. Removing whitespace to show all 24 settings at once significantly increases cognitive load, particularly for users with ADHD, learning disabilities, or cognitive fatigue. Whitespace is not wasted space: it creates visual grouping, reduces scanning difficulty, and provides buffer space for WCAG 1.4.12 text spacing adjustments. Simply removing it ignores the accessibility implications."

**If B selected:**
"Incorrect. While WCAG 1.4.12 (Text Spacing) does require that layouts tolerate increased text spacing without content loss (which dense layouts are more likely to fail), whitespace itself is not directly 'required' by a specific WCAG criterion. The explanation should focus on why whitespace matters for cognitive accessibility and WCAG compliance, not make inaccurate claims about WCAG requirements."

**If C selected (CORRECT):**
"Correct! Progressive disclosure is the best solution because it addresses both goals. The PM gets efficiency (all groups visible, users can quickly find and expand the one they need) and cognitive accessibility is maintained (the default view has manageable density with appropriate spacing). This pattern also works well at high zoom levels (WCAG 1.4.10 Reflow) and tolerates text spacing adjustments (WCAG 1.4.12) because each expanded section has room to breathe. Expert users can expand all sections if they prefer."

**If D selected:**
"Incorrect. Splitting settings across 8 separate pages creates a different usability problem: users who need to change settings in multiple groups must navigate between pages. This increases interaction cost for all users. Progressive disclosure within a single page is a better balance: low density by default, full access on demand."

---

## Question 3: WCAG 1.4.12 Text Spacing (Outcome 2H.02)

**Question:**

You are testing a product interface by applying WCAG 1.4.12 text spacing overrides: line-height increased to 1.5x the font size, paragraph spacing to 2x, letter-spacing to 0.12em, and word-spacing to 0.16em. After applying these overrides, you notice that text in a card component overflows its container, and the last line of a tooltip is clipped and unreadable.

What is the correct assessment of this finding?

**Answer Options:**

A) This is a WCAG 1.4.12 failure because content is lost when text spacing is adjusted to the specified values
B) This is acceptable because users should not be overriding the designer's intended text spacing
C) This is only a failure if the clipped text contains essential information that is not available elsewhere
D) This is not testable because WCAG 1.4.12 only applies to paragraph text, not to card components or tooltips

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! WCAG 1.4.12 (Text Spacing, Level AA) requires that no loss of content or functionality occurs when users adjust text spacing to the specified minimum values. The card text overflow and clipped tooltip both represent content loss. This is a clear failure. The fix is to ensure containers can accommodate text expansion: use flexible heights (min-height rather than fixed height), allow text to wrap, and ensure overflow is visible rather than hidden."

**If B selected:**
"Incorrect. WCAG 1.4.12 exists specifically because users with cognitive and visual disabilities need to adjust text spacing for readability. This is not an edge case or an unusual user action: it is a documented accessibility need with a specific WCAG success criterion. Designs must accommodate these adjustments."

**If C selected:**
"Incorrect. WCAG 1.4.12 requires no loss of content or functionality. Both the card overflow and the clipped tooltip represent content loss regardless of whether the information is available elsewhere. The user should not have to find an alternative source for content that is present but unreadable. Additionally, the criterion does not provide an exception for duplicated content."

**If D selected:**
"Incorrect. WCAG 1.4.12 applies to all text content authored using markup languages, not just paragraph text. Card components, tooltips, buttons, navigation items, and any other text-containing elements must all tolerate the specified text spacing adjustments without content loss."

---

## Question 4: Component Semantic Mismatch (Outcome 2H.03)

**Question:**

A designer has created a "Favorites" feature where users can click a heart icon to save items. On the product listing page, the heart is implemented as a `<div>` with a click handler. On the product detail page, the same heart icon is implemented as a `<button>` with `aria-pressed`. The visual appearance is identical on both pages.

What accessibility issues does this create?

**Answer Options:**

A) The `<div>` implementation on the listing page is not keyboard accessible, and the inconsistent implementation violates WCAG 3.2.4 (Consistent Identification)
B) The heart icon should be a link on both pages since it changes the state of the item
C) There is no issue because the visual appearance is the same on both pages, which satisfies user expectations
D) The `<button>` implementation is wrong because `aria-pressed` is only for toggle buttons, not favorite actions

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! This scenario has two distinct issues. First, the `<div>` with a click handler on the listing page is not keyboard accessible (no Tab focus, no Enter/Space activation) and has no semantic role, so screen readers do not announce it as interactive. Second, having different implementations for the same function across pages violates WCAG 3.2.4 (Consistent Identification), which requires that components with the same functionality are identified consistently. The fix: use a `<button>` with `aria-pressed` on both pages to provide consistent keyboard access, screen reader announcements, and semantic meaning."

**If B selected:**
"Incorrect. Links are semantically meant for navigation (going to a URL), not for performing actions like toggling a favorite state. A button is the correct semantic choice here because clicking the heart performs an action (toggling the favorite state) rather than navigating to a new location. Using a link would create a semantic mismatch: screen readers would announce 'link,' implying navigation."

**If C selected:**
"Incorrect. While the visual appearance is the same, the accessibility experience is completely different. On the listing page, keyboard users cannot reach or activate the heart (it is a `<div>`, not focusable), and screen reader users do not know it exists as an interactive element. On the detail page, it is properly accessible. Same visual, very different functional accessibility. WCAG 3.2.4 specifically addresses this: consistency must include programmatic identification, not just visual appearance."

**If D selected:**
"Incorrect. `aria-pressed` is exactly correct for a favorite/save toggle action. A favorite button has two states: pressed (favorited) and not pressed (not favorited). Using `aria-pressed` on a `<button>` element communicates this toggle state to screen readers, which announce it as 'Favorite, toggle button, pressed' or 'Favorite, toggle button, not pressed.' This gives users clear state information."

---

## Question 5: Consistent Identification and Component Choice (Outcome 2H.03)

**Question:**

You are auditing a web application and discover the following patterns for confirming destructive actions across different pages:

- **Page A:** A modal dialog appears with "Are you sure?" text and "Cancel" / "Delete" buttons
- **Page B:** The item is immediately deleted with an "Undo" toast notification that disappears after 5 seconds
- **Page C:** A inline confirmation replaces the delete button with "Yes, delete" / "Never mind" text links

All three patterns are used for the same type of action: permanently deleting user content.

From a perceptual and cognitive accessibility perspective, what is the most significant concern?

**Answer Options:**

A) The toast notification in Page B may not be perceivable by screen reader users if it is not implemented as a live region
B) The inconsistent confirmation patterns across pages create unpredictable behavior that increases cognitive load for all users, especially those with cognitive disabilities
C) The text links in Page C should be buttons because they perform destructive actions
D) The modal dialog in Page A is the most accessible pattern and the others should not be used at all

**Correct Answer:** B

**Answer-Specific Feedback:**

**If A selected:**
"This is a real accessibility concern (the toast should use a live region, connecting to L11's live region content), but it is not the most significant issue from a perceptual and cognitive perspective. The live region issue affects screen reader users specifically. The inconsistency issue (answer B) affects all users, including the estimated 1 in 8 people with cognitive disabilities. Both issues should be fixed, but the inconsistency is the larger cognitive accessibility concern."

**If B selected (CORRECT):**
"Correct! The most significant perceptual and cognitive concern is the inconsistency itself. When users encounter three different confirmation patterns for the same destructive action, they cannot build a reliable mental model of how deletion works in this application. Each time they encounter a delete action, they must re-learn the interaction. This is a WCAG 3.2.4 (Consistent Identification) and 3.2.3 (Consistent Navigation) concern. For users with cognitive disabilities, this unpredictability is a genuine barrier. The fix: choose one confirmation pattern and use it consistently for all destructive actions."

**If C selected:**
"This is a valid component semantic concern (connecting to outcome 2H.03), and yes, destructive actions should use buttons rather than links. However, the semantic mismatch on Page C is a specific implementation issue. The broader cognitive accessibility concern is that all three pages use different patterns entirely. Even if Page C's text links were changed to buttons, the inconsistency across pages would remain the larger problem."

**If D selected:**
"Incorrect. While modal dialogs are a well-established confirmation pattern, the key insight is not that one pattern is inherently 'most accessible.' All three patterns can be implemented accessibly. The issue is that using all three for the same action creates cognitive overhead. Consistency matters more than which specific pattern you choose. Pick one, implement it well, and use it everywhere for the same action type."

---

## Implementation Notes for Canvas

### Quiz Settings

- **Quiz Type:** Graded Quiz
- **Points:** 5 (1 point per question)
- **Time Limit:** None (open-book assessment)
- **Allowed Attempts:** 1
- **Show Correct Answers:** After submission
- **One Question at a Time:** No (show all on one page)
- **Shuffle Answers:** Yes

### Question Format

- All questions are multiple choice with single correct answer
- Each question maps to exactly one learning outcome
- Immediate feedback provided after submission
- Students should refer to lesson materials and design references

### Passing Criteria

- Students must answer all questions to complete
- Minimum passing score: Not applicable (formative assessment)
- Results contribute to overall lesson assessment

### QTI Export Requirements

If exporting to QTI format for Canvas import:
- Use QTI 1.2 or 2.1 format
- Include all feedback (correct and incorrect) in export
- Test import in Canvas sandbox before production use
- Verify that code examples in questions render correctly

---

## Outcome Mapping Summary

| Question | Outcome | Topic | Difficulty |
|----------|---------|-------|------------|
| Q1 | 2H.01 | Spatial hierarchy and heading structure alignment | Medium |
| Q2 | 2H.02 | Visual density, whitespace, and progressive disclosure | Medium |
| Q3 | 2H.02 | WCAG 1.4.12 text spacing compliance testing | Easy-Medium |
| Q4 | 2H.03 | Component semantic mismatch and consistent implementation | Medium-Hard |
| Q5 | 2H.03 | Consistent identification across pages (WCAG 3.2.4) | Medium-Hard |

---

## Validation Checklist

Before deploying quiz:
- [ ] All questions reviewed for technical accuracy
- [ ] Feedback reviewed for clarity and helpfulness
- [ ] Questions map correctly to stated outcomes
- [ ] Answer options are plausible distractors
- [ ] No trick questions or ambiguous wording
- [ ] Tested in Canvas LMS
- [ ] Feedback displays correctly for all answer choices
- [ ] Points configured correctly (1 per question, 5 total)

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L16: Perceptual and Cognitive Design Considerations*
