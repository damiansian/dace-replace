# L02 Quiz: Headings

**Module:** 1B | **Badge:** Discover | **Points:** 5 (1 point each)
**Format:** Multiple choice, auto-graded

---

## Outcome Mapping

| Question | Outcome ID | Outcome Description |
|----------|------------|---------------------|
| Q1 | 1B.01 | Design logical heading hierarchies |
| Q2 | 1B.01 | Design logical heading hierarchies |
| Q3 | 1B.02 | Recognize platform differences in heading support |
| Q4 | 1B.01 | Design logical heading hierarchies |
| Q5 | 1B.01 | Design logical heading hierarchies |

---

## Questions

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
