# Lesson 02: Headings
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Discover
**Delivery:** Online (asynchronous, self-paced)
**Duration:** 25 minutes
**Outcomes Covered:** 1B.01, 1B.02

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 0.1–0.2 | 1 min | — |
| 1. Why Structure Matters | 1.1–1.3 | 5 min | 1B.01 |
| 2. Heading Hierarchy | 2.1–2.7 | 10 min | 1B.01 |
| 3. Mobile Heading Support | 3.1–3.4 | 5 min | 1B.02 |
| 4. Annotating Structure | 4.1–4.2 | 3 min | 1B.01, 1B.02 |
| 5. Quiz & Resources | 5.1–5.2 | 1 min | — |

**Total frames:** 20

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Online format: Include more text on frames since learners self-pace
- Keep speaker notes brief (for reference, not live delivery)

---

## Learning objective pill component

Same specs as L01:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light blue (#E6F2FF) at 15% opacity
- Text: 12px, medium weight, "LO 1B.0X"
- Links to Frame 0.2

---

## Frame 0: Title & objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 02`
- Title: `Headings`
- Subtitle: `Designing structure screen readers can navigate`
- Badge level indicator: `Discover Badge`
- Duration: `25 minutes`
- Format indicator: `Online Lesson`

**Speaker notes:**
Welcome to Lesson 02. This is an online, self-paced lesson. You can pause and revisit sections as needed.

---

### Frame 0.2: Learning objectives reference

**Type:** Objectives overview

**Layout:** Vertical list with outcome codes

**Headline:** What you'll be able to do

**Intro text:**
By the end of this lesson, you'll be able to:

**Objectives list:**

| Code | Objective |
|------|-----------|
| 1B.01 | Design logical heading hierarchies that convey document organization and support screen reader navigation |
| 1B.02 | Recognize platform differences in heading support between iOS (heading levels) and Android (binary heading trait) |

**Speaker notes:**
Two focused outcomes today. Headings are about structure. Mobile platforms handle heading levels differently.

---

# Section 1: Why structure matters
## Duration: 5 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Why Structure Matters`

---

### Frame 1.2: The book without chapters

**Type:** Concept illustration

**Layout:** Split comparison

**Left side:**
- Book icon with chapter tabs visible
- Caption: `With headings`
- Subtext: `Navigate by section, understand organization, find what you need`

**Right side:**
- Book icon as solid block, no tabs
- Caption: `Without headings`
- Subtext: `One continuous wall of text, no navigation, no structure`

**Headline:** For screen reader users, a page without headings is a book without chapters

**Body text:**
Sighted users see visual hierarchy through size, weight, and spacing. Screen reader users rely on heading markup to understand the same relationships.

**Learning Objective Pill:** `LO 1B.01`

**Speaker notes:**
This is the core metaphor. Headings create the table of contents screen reader users need.

---

### Frame 1.3: What screen reader users experience

**Type:** Screen reader simulation

**Layout:** Two-panel mockup

**Left panel (Heading list):**
```
Headings

H1: Adobe Fonts
  H2: Featured Collections
    H3: Sans Serif Favorites
    H3: Display Fonts
  H2: Popular This Week
  H2: Recently Added
```

**Right panel (Page mockup):**
- Simplified page layout showing corresponding sections
- Visual lines connecting heading list items to page regions

**Headline:** Screen readers let users pull up a list of all headings

**Body text:**
Users can jump directly to any heading. They can filter by level (show me all H2s). They can build a mental map of the page before reading content.

This only works when headings are properly marked up.

**Speaker notes:**
The heading list is a navigation tool. If your page has good structure, users can find content in seconds.

---

# Section 2: Heading hierarchy
## Duration: 10 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Heading Hierarchy`

---

### Frame 2.2: The H1 to H6 system

**Type:** Diagram

**Layout:** Vertical hierarchy visualization

**Diagram:**
```
H1: Main Topic (one per page)
  └── H2: Major Section
        └── H3: Subsection
              └── H4: Sub-subsection
                    └── H5: Deeper nesting
                          └── H6: Deepest level
```

**Headline:** Headings form a hierarchy from H1 to H6

**Body text:**
- H1 is the main topic, typically one per page
- H2 marks major sections
- H3 to H6 create nested subsections
- The number indicates importance, not visual size

**Speaker notes:**
Think of it like an outline. H1 is the title, H2s are chapters, H3s are sections within chapters.

---

### Frame 2.3: The cardinal rule

**Type:** Rule highlight

**Layout:** Large text callout with examples

**Callout box (prominent):**
**Do not skip levels going down.**

H1 → H2 → H3 ✓

H1 → H3 ✗ (skipped H2)

**Body text:**
Skipping levels breaks the outline. Screen reader users hear "heading level 3" and expect it to be under a level 2. When level 2 is missing, the structure is confusing.

**Exception note:**
You CAN skip levels going up. After an H4, you can jump to H2 to close that subsection and start a new major section.

**Learning Objective Pill:** `LO 1B.01`

**Speaker notes:**
This is the most common heading error we see. Designers pick heading levels for visual size rather than structural meaning.

---

### Frame 2.4: Not all large text is a heading

**Type:** Example comparison

**Layout:** Two examples side by side

**Left example (Heading):**
- Text: "Featured Collections"
- Visual: Bold, larger text
- Below it: grid of collection cards
- Label: `✓ This IS a heading`
- Reason: `Creates a new section of content`

**Right example (Not a heading):**
- Text: "Discover prompts to remix and make your own"
- Visual: Larger text, styled
- Below it: same content continues
- Label: `✗ This is NOT a heading`
- Reason: `Descriptive text, doesn't create new section`

**Headline:** Headings create sections, not just visual emphasis

**Body text:**
A heading introduces a new grouping of content. Large or bold text that describes or elaborates isn't a heading, it's a paragraph.

**Speaker notes:**
From your Community Firefly page example. The tagline under the H2 isn't a heading because it doesn't introduce a new content group.

---

### Frame 2.5: Real example: Adobe Community

**Type:** Annotated screenshot

**Layout:** Screenshot with callouts

**Screenshot content:**
- Adobe Community homepage
- Heading map overlay showing:
  - H2: Adobe (logo, incorrect)
  - H1: Connect and get inspired
  - H3: For you

**Callouts:**
1. Arrow to logo H2: `The logo doesn't need to be a heading`
2. Arrow to H1: `Main heading is correct`
3. Arrow to H3 "For you": `Should be H2, skips a level`
4. Arrow to "More to discover": `Not marked as a heading at all`

**Headline:** Common heading issues on a real Adobe page

**Speaker notes:**
This is from your training deck. These issues create a broken outline for screen reader users.

---

### Frame 2.6: Good example: Adobe MAX FAQ

**Type:** Annotated screenshot

**Layout:** Screenshot with heading map

**Screenshot content:**
- Adobe MAX FAQ accordion sections
- Heading map showing:
  - H2: Frequently Asked Questions
    - H3: General program information
    - H3: Deadlines and timeline
    - H3: Eligibility
    - (etc.)

**Callouts:**
- `H2 introduces the FAQ section`
- `Each category is H3, properly nested`
- `Questions inside each category inherit context`

**Headline:** Correct heading structure creates a clear outline

**Body text:**
The hierarchy matches the visual organization. Screen reader users can jump to any category and understand its relationship to the whole.

**Speaker notes:**
This is the goal. Structure matches meaning.

---

### Frame 2.7: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist for self-assessment

**Headline:** Checkpoint: Heading hierarchy fundamentals

**Body text:**
Before moving to platform-specific considerations, verify you understand these core principles:

**Checklist:**
- [ ] I can use one unique h1 per page that describes what that page is about
- [ ] I can use headings to describe content below, not just for visual emphasis
- [ ] I can apply heading levels hierarchically like a book index
- [ ] I can choose heading levels by context, not by visual size
- [ ] I can avoid skipping heading levels from the top down

**Learning Objective Pill:** `LO 1B.01`

**Speaker notes:**
Take a moment to review these principles. If any feel unclear, revisit the previous frames. These fundamentals apply across all platforms.

---

# Section 3: Mobile heading support
## Duration: 5 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Mobile Heading Support`

---

### Frame 3.2: Platform heading support

**Type:** Comparison diagram

**Layout:** Three-column comparison table

**Headline:** Heading support varies by platform

**Comparison table:**

| Platform | Heading Levels | User Experience |
|----------|---------------|-----------------|
| Web | H1–H6 | Full hierarchy, can filter by level |
| iOS VoiceOver | H1–H6 | "Heading level 2" announced |
| Android TalkBack | Binary only | Just "Heading": no level info |

**Key insight callout (prominent):**
Android TalkBack users cannot distinguish H2 from H3. What matters is *whether* something is a heading, not its level.

**Body text:**
iOS VoiceOver works like web screen readers: users hear "heading level 2" and can filter by level. Android TalkBack treats headings as a simple yes/no property. The level information is lost.

**Learning Objective Pill:** `LO 1B.02`

**Speaker notes:**
This is a critical platform difference. Both platforms support navigating by headings, but only iOS preserves the hierarchy information.

---

### Frame 3.3: Annotating for multiple platforms

**Type:** Annotation guidance

**Layout:** Guidance list with callout

**Headline:** Specify heading structure for all platforms

**Guidance list:**
- Always specify heading levels (H1, H2, etc.): iOS and web need them
- Note which text should be headings for Android (the decision still matters)
- In annotations: "H2 (heading on all platforms)"

**Callout box:**
Even on Android, marking headings helps users navigate by swiping between headings. The level just won't be announced.

**Example annotation:**
```
Heading                    [H2]

1  featured_collections
Level    H2
Note     Section heading for collection grid.
         iOS: Announced as "heading level 2"
         Android: Announced as "heading"
```

**Learning Objective Pill:** `LO 1B.02`

**Speaker notes:**
Your annotation should still specify the level. Engineering implements H2 for iOS/web; Android gets the heading trait automatically. The design decision is the same across platforms.

---

### Frame 3.4: Outcome checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist with outcome card

**Headline:** Outcome checkpoint

**Body text:**
Verify you understand platform differences in heading support:

**Checklist:**
- [ ] I can explain that iOS VoiceOver announces heading levels 1-6
- [ ] I can explain that Android TalkBack uses a binary heading trait (heading or not heading)
- [ ] I can identify the platform when hearing "heading level 2" vs just "heading"
- [ ] I can explain why heading hierarchy still matters even on Android
- [ ] I can annotate headings knowing how each platform will announce them

**Outcome card (right side):**
- Icon: Lightbulb
- Title: `Learning Outcome 1B.02`
- Description: `Recognize platform differences in heading support between iOS (heading levels) and Android (binary heading trait).`

**Learning Objective Pill:** `LO 1B.02`

**Speaker notes:**
Take a moment to self-assess. If any item feels unclear, revisit Frame 3.2 for the platform comparison. Understanding these differences helps you make informed annotation decisions.

---

# Section 4: Annotating structure
## Duration: 3 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Annotating Structure`

---

### Frame 4.2: Specifying headings in bluelines

**Type:** Annotation example

**Layout:** Design mockup + Stark panel

**Left side (Design):**
- Page section with text marked as heading
- Annotation marker visible

**Right side (Stark panel mockup):**
```
Annotations

Heading                    [H2]

1  featured_collections
Level    H2
Note     Section heading for collection grid.
         Follows page H1.
```

**Headline:** Annotate headings with level and context

**Body text:**
- Specify which text is a heading
- Include the heading level
- Add notes explaining hierarchy decisions

**Learning Objective Pills:** `LO 1B.01` `LO 1B.02`

**Speaker notes:**
Same workflow as accessible names. Bluelines captures your structural decisions for headings.

---

# Section 5: Quiz & resources
## Duration: 1 minute

### Frame 5.1: Quiz preview

**Type:** Assessment preview

**Layout:** Quiz details card

**Headline:** Knowledge check

**Details:**
- **Questions:** 5
- **Points:** 5 (1 point each)
- **Format:** Multiple choice, open-book
- **Topics:** Heading hierarchy (1B.01), Mobile platform support (1B.02)

**Callout:**
Complete the quiz before starting Lesson 03.

**Speaker notes:**
Five questions: four on heading hierarchy (1B.01), one on mobile platform differences (1B.02).

---

### Frame 5.2: Resources

**Type:** Resource links

**Layout:** Organized list

**Headline:** Resources for reference

**W3C resources:**
- WAI Tutorial: Page Structure - Headings
  `https://www.w3.org/WAI/tutorials/page-structure/headings/`
- Understanding SC 1.3.1: Info and Relationships
  `https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html`
- Understanding SC 2.4.6: Headings and Labels
  `https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html`

**Adobe resources:**
- Design Accessibility Checklist (Structure section)
- Stark Figma Plugin Guide

**Up Next:**
Lesson 03: Color (In-person)

**Speaker notes:**
These resources are also linked on the lesson page.

---

# Appendix: Frame count summary

| Section | Frames |
|---------|--------|
| 0. Title & Objectives | 2 |
| 1. Why Structure Matters | 3 |
| 2. Heading Hierarchy | 7 |
| 3. Mobile Heading Support | 4 |
| 4. Annotating Structure | 2 |
| 5. Quiz & Resources | 2 |
| **Total** | **20** |

---

# Appendix: Visual asset needs

**Reusable from L01:**
- Learning Objective Pill component
- Section divider template
- Annotation panel mockup

**New for L02:**
- Book with/without chapters illustration
- Heading hierarchy diagram
- Screen reader heading list mockup
- Adobe Community screenshot with heading overlay
- Adobe MAX FAQ screenshot with heading map
- Platform comparison diagram (Web vs iOS vs Android heading support)

**Screenshots needed:**
- Adobe Community homepage (heading map view)
- Adobe MAX FAQ section (heading map view)

---

## Note on reading order content

Reading order content (formerly Section 4 in this guide) has been moved to L05: Keyboard, Touch & Reading Order. This includes:
- Reading order vs tab order comparison
- Disabled controls example
- Common SC 1.3.2 failures (modals, hidden content)

This change better aligns reading order with focus order concepts covered in L05.

---

*End of build guide*
