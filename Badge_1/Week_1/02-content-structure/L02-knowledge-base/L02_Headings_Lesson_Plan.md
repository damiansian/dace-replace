# L02: Headings
## Lesson Plan

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Discover
**Delivery:** Online (asynchronous)
**Duration:** 25 minutes
**Outcomes Covered:** 1B.01, 1B.02

---

## Lesson Overview

This online lesson teaches designers how to specify heading structures that convey document organization and support screen reader navigation.

### Why This Matters

Screen reader users cannot see visual hierarchy. They rely on programmatic heading structure to understand how content is organized, navigate efficiently, and build a mental model of the page. When headings are missing, skipped, or misused, the page becomes a wall of undifferentiated content.

---

## Learning Outcomes

| ID | Outcome | Type |
|----|---------|------|
| 1B.01 | Design logical heading hierarchies | Skill |
| 1B.02 | Recognize platform differences in heading support | Knowledge |

### Knowledge (What learners will understand)

- Headings create semantic structure that screen readers use for navigation
- H1 through H6 form a hierarchy where lower numbers indicate higher importance
- Skipping levels going down breaks the outline and confuses users
- Not all large or bold text is a heading
- iOS VoiceOver supports heading levels (H1-H6) while Android TalkBack treats headings as binary

### Skills (What learners will be able to do)

- Identify which text should be marked as headings
- Assign appropriate heading levels without skipping
- Annotate heading structure for multi-platform designs
- Specify heading structure in design annotations

### Application (How learners will apply this)

- Audit existing designs for heading structure issues
- Create heading annotations in Bluelines

---

## WCAG Success Criteria

| SC | Name | Level | Relevance |
|----|------|-------|-----------|
| 1.3.1 | Info and Relationships | A | Structure must be programmatically determinable |
| 2.4.6 | Headings and Labels | AA | Headings must describe topic or purpose |

---

## Content Outline

### Section 1: Why Structure Matters (5 min)

**Key points:**
- Screen reader users can pull up a list of all headings on a page
- They use this list to understand page organization and navigate quickly
- Missing or broken structure = "book without chapters"
- Your training transcripts: "Headings create a structure in your user interface that groups pieces of content together. It helps people who can't see the interface create a mental model."

**Media:**
- Screen reader demo: heading navigation on well-structured page vs poorly structured page

### Section 2: Heading Hierarchy Rules (10 min)

**Key points:**
- H1 is the main topic (typically one per page)
- H2 marks major sections
- H3 marks subsections within H2, and so on
- Cannot skip levels going down (H1 → H3 is invalid)
- Can skip levels going up (H4 → H2 is valid, closes subsection)
- Not all large text is a heading (descriptive paragraphs, taglines)

**Examples from your materials:**
- Adobe Community page: H1 correct but H3 "For you" skips H2
- "More to discover" not marked as heading at all
- Adobe MAX FAQ: correct nesting with H2 categories and H3 questions

**Exercise:**
- Show 3 heading structures, learners identify which are valid

### Section 3: Mobile Heading Support (5 min)

**Key points:**
- Web and iOS VoiceOver support H1-H6 with full level announcements
- Android TalkBack treats headings as binary (heading vs. not-heading)
- TalkBack users cannot distinguish H2 from H3
- Still annotate heading levels for iOS/web; Android gets the heading trait

**Exercise:**
- Show same heading structure, compare how iOS vs Android would announce it

### Section 4: Annotating Structure (3 min)

**Key points:**
- Stark Bluelines has heading annotation feature
- Specify which text is a heading and what level
- Add notes explaining hierarchy decisions

**Demo reference:**
- Your Bluelines training: "What piece of text is a heading and what level it's at"

### Section 5: Quiz Preview (2 min)

- Three questions covering both outcomes
- Open-book, reference materials allowed
- Complete before next lesson

---

## Quiz Questions

### Question 1 (1B.01)

**A screen reader user visits a page and opens the headings list. They see:**

```
H1: Welcome to Adobe Fonts
H3: Featured Collections
H3: Popular Fonts
H3: Recent Additions
```

**What is the problem with this heading structure?**

A) There should be multiple H1 headings
B) The H3 headings skip level H2, breaking the outline hierarchy
C) H3 is too low a level for section headings
D) The headings are too short

**Correct:** B

**Feedback:**
- **Correct (B):** Skipping from H1 to H3 breaks the heading hierarchy. Screen reader users expect H2 to mark major sections under H1. The jump to H3 suggests subsections exist under an H2 that isn't there, creating a confusing outline.
- **Incorrect (A):** Pages typically have one H1 representing the main topic.
- **Incorrect (C):** H3 level isn't inherently wrong; it depends on the hierarchy.
- **Incorrect (D):** Heading length isn't the issue here.

---

### Question 2 (1B.02)

**A designer is annotating heading structure for a multi-platform app (iOS and Android). How should they handle heading levels in their annotations?**

A) Only specify "heading" or "not heading" since Android doesn't support levels
B) Specify heading levels (H1, H2, etc.) for all platforms: iOS needs them and Android will still benefit
C) Create separate annotations for iOS (with levels) and Android (without levels)
D) Omit heading annotations entirely since TalkBack handles it automatically

**Correct:** B

**Feedback:**
- **Correct (B):** Always specify heading levels in annotations. iOS VoiceOver announces "heading level 2" and supports filtering by level. Android TalkBack announces just "heading" (no level), but marking headings still enables navigation by swiping between headings.
- **Incorrect (A):** iOS users need heading levels for full navigation capability.
- **Incorrect (C):** One annotation with levels serves both platforms.
- **Incorrect (D):** Headings must be explicitly specified in design for engineering to implement.

---

### Question 3 (1B.01)

**A marketing page has the following text styled prominently at the top:**

```
"Creativity for All" (large, bold, decorative font)
"Adobe Creative Cloud gives you the world's best creative apps" (medium, bold)
```

**Which text should be marked as a heading?**

A) Both lines should be headings (H1 and H2)
B) Only "Creativity for All" should be a heading
C) Only "Adobe Creative Cloud gives you..." should be a heading
D) Neither should be a heading. They're taglines, not structural headings

**Correct:** D (or C depending on context)

**Feedback:**
- **Correct (D):** Taglines and promotional text are often styled prominently but don't create page structure. If the page has a clear main topic heading elsewhere, these decorative lines may not need heading markup. However, if "Adobe Creative Cloud..." functions as the main page topic, it could be H1.
- **Key insight:** Not all large or bold text is a heading. Headings create navigable structure, not just visual emphasis.

---

## Resources

### W3C Resources

- [WAI Tutorial: Page Structure - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Understanding SC 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Understanding SC 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [Technique G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
- [Technique H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)

### Adobe Resources

- Design Accessibility Checklist (Structure section)
- Stark Figma Plugin Guide
- Digital Accessibility Guide: Headings

---

## Connection to Other Lessons

**Builds on:**
- L01: Accessible Names (annotation workflow in Bluelines)

**Connects forward to:**
- L05: Keyboard, Touch & Reading Order (reading order fundamentals, focus order)
- L07: Landmarks & Navigation (landmarks provide another navigation method alongside headings)
- Badge 2, Domain 2: Assistive Technology and User Experience (deeper coverage of how screen readers work)

---

## Notes for Content Development

- This is an online lesson, so keep it concise and self-paced friendly
- Include clear visual examples showing good vs bad heading structures
- Quiz has 3 questions covering both outcomes (2 for 1B.01, 1 for 1B.02)
- No project for this lesson (quiz-only for online lessons)
- Reference your existing training materials where screen reader heading lists are demonstrated
- Reading order content has been moved to L05 (Keyboard, Touch & Reading Order)
