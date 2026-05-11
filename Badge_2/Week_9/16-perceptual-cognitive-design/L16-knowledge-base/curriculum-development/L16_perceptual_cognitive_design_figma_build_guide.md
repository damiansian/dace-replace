# Lesson 16: Perceptual and Cognitive Design Considerations
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2H.01, 2H.02, 2H.03

---

## Source context

This lesson draws from established accessibility and cognitive design resources, particularly:
- **W3C Making Content Usable for People with Cognitive and Learning Disabilities** (COGA guidance)
- **WCAG 2.2 Understanding Documents** (SC 1.3.1, 1.4.10, 1.4.12, 3.2.4)
- **Inclusive Design Patterns** by Heydon Pickering
- **Gestalt Principles** applied to accessible interface design

Key pedagogical approach: **"Does it actually work for people?"**: This lesson bridges technical compliance and real cognitive accessibility. Students move from "Does it pass WCAG?" to "Does the design support comprehension?"

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | -- |
| 1. Spatial Hierarchy and Accessibility | 1.1-1.6 | 12 min | 2H.01 |
| 2. Visual Density and Whitespace | 2.1-2.6 | 12 min | 2H.02 |
| 3. Component Semantics and Comprehension | 3.1-3.7 | 12 min | 2H.03 |
| 4. Summary and Assessment | 4.1-4.5 | 6 min | -- |

**Total frames:** 26

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#FF6B6B` (Define Badge coral)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- Include activity cues for comparison exercises and hands-on audits
- Use side-by-side comparison layouts for good/bad examples
- Include visual callout boxes for "Designer Impact" takeaways

---

## Learning objective pill component

Badge 2 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light coral (#FFE3E3) at 15% opacity
- Text: 12px, medium weight, "LO 2H.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 16`
- Title: `Perceptual and Cognitive Design Considerations`
- Subtitle: `Does It Actually Work for People?`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Lesson 16, the final topic-specific lesson in the Define Badge. You have spent L09-L15 building assistive technology expertise: seeing the accessibility tree, hearing it with screen readers, testing with magnification, voice control, high contrast, and user preferences. Today we return to the design itself. We are going to look at how your layout choices, spacing decisions, and component selections either support or hinder comprehension for users with cognitive and visual disabilities. This is where we bridge "Does it pass?" and "Does it actually work?"

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
| 2H.01 | Apply spatial hierarchy principles for accessibility: Design clear visual hierarchy that supports comprehension for users with cognitive and visual disabilities |
| 2H.02 | Design appropriate visual density and whitespace: Create layouts with sufficient spacing and density that reduce cognitive load and support focus |
| 2H.03 | Ensure component semantics support comprehension: Select and apply component patterns that communicate purpose and state clearly to all users |

**Connection callout:**
This lesson synthesizes principles from across both badges. Headings (L02), color (L03), reflow (L06), landmarks (L07), DOM (L09), and user preferences (L15) all connect here.

**Speaker notes:**
Three outcomes, all focused on the "design craft" side of accessibility. We are not learning new tools today. We are learning to apply everything you know to make designs that actually work for people with cognitive and visual disabilities. This is the largest disability population and the one least served by automated testing.

---

# Section 1: Spatial Hierarchy and Accessibility
## Duration: 12 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Spatial Hierarchy and Accessibility`

**Learning objective pill:** LO 2H.01

---

### Frame 1.2: What is spatial hierarchy?

**Type:** Concept definition with visual examples

**Layout:** Left text, right visual diagram

**Headline:** Spatial hierarchy: communicating without words

**Left column definition:**
Spatial hierarchy uses visual properties to communicate importance, grouping, and sequence:

| Property | What it communicates |
|----------|---------------------|
| **Size** | Importance (larger = more important) |
| **Weight** | Emphasis (bolder = more prominent) |
| **Color** | Category or status |
| **Position** | Reading priority (top-left = first) |
| **Proximity** | Grouping (closer = related) |
| **Alignment** | Relationship (aligned = connected) |

**Right column visual:**
Diagram showing a page layout with hierarchy annotations: large heading (H1), medium subheading (H2), body text, sidebar elements. Arrows indicate scan direction.

**Speaker notes:**
Spatial hierarchy is how we answer "What should I look at first?" without saying it explicitly. Size says "I'm important." Proximity says "We belong together." Position says "Start here." These are design fundamentals you already know, but today we are examining them through an accessibility lens. The question becomes: does the visual hierarchy also work for people who cannot see it?

---

### Frame 1.3: Gestalt principles and implicit grouping

**Type:** Principle grid with examples

**Layout:** 2x2 grid of principles, each with visual example

**Headline:** Gestalt principles create implicit grouping

**Grid layout:**

| Principle | Visual | What it does |
|-----------|--------|-------------|
| **Proximity** | (dots close together vs. spread apart) | Elements close together are perceived as a group |
| **Similarity** | (matching shapes vs. different shapes) | Elements that look alike are perceived as related |
| **Continuity** | (dots forming a line) | The eye follows lines and curves naturally |
| **Closure** | (incomplete circle) | The mind completes incomplete shapes |

**Key insight callout (coral background):**
Gestalt grouping is **visual only**. It must be reinforced programmatically for AT users. Proximity alone is not a relationship.

**Speaker notes:**
Gestalt principles are powerful, but they are perceptual shortcuts that only work for sighted users. A screen reader user cannot perceive proximity or alignment. A magnification user at 400% zoom may not see both elements that you have grouped by proximity. If you group items visually using whitespace, you must also group them programmatically using landmarks, headings, lists, or ARIA grouping roles.

---

### Frame 1.4: Visual hierarchy must match programmatic structure

**Type:** Side-by-side comparison

**Layout:** Left shows visual layout, right shows heading structure/DOM order

**Headline:** Two hierarchies, one truth

**Left side: "What users see"**
Visual mockup of a dashboard with:
- Large page title (visually H1)
- Three card sections of equal visual weight
- A sidebar with smaller text
- A footer

**Right side: "What AT users hear"**
DOM order listing:
```
<header> banner
  <nav> navigation
  <aside> sidebar ← appears before main content
<main>
  <h3> Page Title ← visually largest but H3
  <h2> Card Section 1
  <h2> Card Section 2
```

**Failure callout (red background):**
Visual hierarchy and programmatic hierarchy are misaligned. The sidebar comes first in DOM order. The page title is an H3 despite being visually the most prominent element.

**Speaker notes:**
This is where L02 (Headings) and L07 (Landmarks) meet real layout decisions. If your largest, most prominent text is an H3 because you used headings for visual styling rather than structure, the hierarchy is broken for screen reader users. If your sidebar appears before the main content in DOM order, screen reader users encounter it first even though sighted users scan past it. Two hierarchies must tell the same story.

---

### Frame 1.5: Activity: Hierarchy audit

**Type:** Activity frame

**Layout:** Full-width product screenshot with annotation areas

**Headline:** Activity: Hierarchy audit

**Activity badge:** `HANDS-ON (3 min)`

**Instructions:**
1. Look at this product page layout
2. Identify: What is the visual hierarchy? (What do you see first, second, third?)
3. Predict: What should the heading structure be?
4. Check: Open dev tools and inspect the actual heading levels and DOM order
5. Document: Where do visual and programmatic hierarchies diverge?

**Discussion prompt callout:**
"What is the most important element visually? What heading level should it have? Would a screen reader encounter it first?"

**Speaker notes:**
Give students 2-3 minutes to examine the layout. Then discuss as a group. The key insight is that hierarchy divergence is common in real products, especially those built with CSS Grid or Flexbox where visual order can differ from DOM order. Designers must specify the intended reading order in their annotations.

---

### Frame 1.6: Hierarchy at different zoom levels

**Type:** Progressive zoom demonstration

**Layout:** Three panels showing the same layout at 100%, 200%, and 400%

**Headline:** Hierarchy must survive zoom

**Panel 1 (100%):** Full layout visible, spatial relationships clear
**Panel 2 (200%):** Half the layout visible, some grouping lost
**Panel 3 (400%):** Only about 1/16 of original viewport visible, spatial hierarchy invisible

**Key insight callout:**
At 400% zoom, users see a narrow column. The only hierarchy that remains is **heading structure** and **DOM order**. Spatial relationships are gone.

**Connection callout (blue background):**
This connects to L06 (Reflow/Zoom). At high zoom, your spacing system, alignment grids, and spatial proximity are invisible. What remains is the programmatic structure: headings, landmarks, and reading order. That is your hierarchy at high zoom.

**Speaker notes:**
At 400% zoom, the user sees approximately a 320px-wide column. Your three-column layout is gone. Your sidebar-next-to-main grouping is gone. What survives is the DOM order, the heading structure, and any landmark regions you specified. If your hierarchy depends on spatial position alone, it is lost. This is why visual hierarchy must be reinforced by programmatic hierarchy.

---

# Section 2: Visual Density and Whitespace
## Duration: 12 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Visual Density and Whitespace`

**Learning objective pill:** LO 2H.02

---

### Frame 2.2: Density and cognitive load

**Type:** Concept with research context

**Layout:** Left text, right visual comparison

**Headline:** Density is a cognitive accessibility issue

**Left column:**
**Visual density:** The amount of information per unit of screen space.

**Cognitive load theory:**
- Working memory holds approximately 7 items (Miller's Law)
- High density increases scanning time and error rates for all users
- Users with cognitive disabilities are disproportionately affected

**Who is most affected:**
- Users with ADHD (difficulty filtering irrelevant stimuli)
- Users with learning disabilities (difficulty processing dense text)
- Users with cognitive fatigue (reduced processing capacity)
- Older users (slower processing, reduced working memory)

**Right column visual:**
Two contrasting dashboard mockups:
- Top: Dense dashboard with 15+ elements visible, small spacing
- Bottom: Same content, better organized with appropriate whitespace

**Speaker notes:**
Miller's Law tells us working memory can hold about 7 items. When you pack 20 data points, 8 navigation items, 3 callout banners, and a chat widget into one viewport, you are asking users to process far more than working memory can handle. For users with ADHD, learning disabilities, or cognitive fatigue, this is not just uncomfortable: it is a barrier. An estimated 1 in 8 people has a cognitive disability. This is the largest disability population.

---

### Frame 2.3: Whitespace as a design tool

**Type:** Annotated diagram

**Layout:** Center layout with whitespace annotations

**Headline:** Whitespace is not empty space

**Central diagram:**
A well-designed page section with annotations pointing to different types of whitespace:

| Type | Location | Purpose |
|------|----------|---------|
| **Micro-whitespace** | Between lines (line-height) | Reading comfort, text legibility |
| **Micro-whitespace** | Between letters/words | Word recognition, readability |
| **Meso-whitespace** | Between form fields, list items | Element separation, scanning |
| **Macro-whitespace** | Between sections, page margins | Group separation, visual breathing room |

**WCAG connection callout (green background):**
**WCAG 1.4.12 (Text Spacing):** Users must be able to increase line-height to 1.5x, paragraph spacing to 2x, letter-spacing to 0.12em, and word-spacing to 0.16em without loss of content or functionality. Layouts with generous whitespace pass this more easily.

**Speaker notes:**
When a PM says "Can we make this more compact?" they are asking you to remove whitespace. Your job as an accessibility-trained designer is to explain that whitespace is a functional design element, not wasted space. It groups related items. It separates sections. It gives the eye a place to rest. Removing it increases cognitive load and can break WCAG 1.4.12 compliance.

---

### Frame 2.4: Testing with WCAG 1.4.12 text spacing

**Type:** Demo/reference frame

**Layout:** Before/after comparison with test values

**Headline:** WCAG 1.4.12: Text spacing test

**Test values table:**

| Property | Minimum Override | CSS |
|----------|-----------------|-----|
| Line height | 1.5x font size | `line-height: 1.5 !important` |
| Paragraph spacing | 2x font size | `margin-bottom: 2em !important` |
| Letter spacing | 0.12x font size | `letter-spacing: 0.12em !important` |
| Word spacing | 0.16x font size | `word-spacing: 0.16em !important` |

**Before/after screenshots:**
- Before: Well-designed layout at default spacing
- After (pass): Same layout with text spacing overrides applied, no content loss
- After (fail): A dense layout where text spacing overrides cause overlapping text and truncation

**Demo instruction badge:** `LIVE DEMO: Apply text spacing bookmarklet`

**Speaker notes:**
Live demo: Apply the text spacing bookmarklet to a real product page. Show how a well-spaced layout handles it gracefully while a dense layout breaks. The relationship is direct: more whitespace means more tolerance for user spacing adjustments. This is one of the most testable and actionable WCAG criteria for designers.

---

### Frame 2.5: Activity: Density comparison

**Type:** Activity frame

**Layout:** Two-column comparison

**Headline:** Activity: Density comparison

**Activity badge:** `HANDS-ON (3 min)`

**Left column: Layout A (High density)**
Dense settings page with minimal spacing, many options visible at once

**Right column: Layout B (Appropriate density)**
Same settings with grouped sections, more whitespace, progressive disclosure

**Instructions:**
1. Compare both layouts (they contain the same content)
2. Evaluate: Which is easier to scan for a specific setting?
3. Test: Apply WCAG 1.4.12 text spacing overrides to both
4. Predict: Which would reflow better at 400% zoom?

**Discussion prompt callout:**
"These two settings pages contain the same options. Which would a user with ADHD find easier to use? Which would survive WCAG 1.4.12 text spacing? Why?"

**Speaker notes:**
Give students 2-3 minutes to compare. Key points to draw out: Layout B is easier to scan because grouping and whitespace create visual rest stops. Layout B passes text spacing because there is buffer space to absorb the increased spacing. Layout B reflows better because the sections are already separated by whitespace.

---

### Frame 2.6: Responsive density strategies

**Type:** Principle list with examples

**Layout:** Stacked principle blocks

**Headline:** Density should adapt, not just shrink

**Principles:**

1. **Reduce density at smaller viewports** rather than scaling everything down
2. **Use progressive disclosure:** show less by default, reveal on demand
3. **Use spacing tokens** that adjust per breakpoint (e.g., `--space-section: 48px` at desktop, `32px` at tablet)
4. **Prioritize content** at each breakpoint: not everything needs to be visible at all sizes

**Connection callout (blue background):**
This connects to L06 (Reflow/Zoom). Reflow is easier when density is appropriate at each breakpoint. Designs that start with appropriate density require fewer layout heroics to survive reflow.

**Speaker notes:**
The instinct when designing for smaller screens is to shrink everything proportionally. But shrinking a 12px font to 10px on mobile makes density worse, not better. Instead, reduce the amount of visible content, increase relative spacing, and use progressive disclosure. The same principle applies at high zoom levels: density should decrease, not increase.

---

# Section 3: Component Semantics and Comprehension
## Duration: 12 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Component Semantics and Comprehension`

**Learning objective pill:** LO 2H.03

---

### Frame 3.2: What are component semantics?

**Type:** Concept bridge from L09

**Layout:** Left definition, right accessibility tree example

**Headline:** Component semantics: what the machine says about your design

**Left column:**
**Component semantics** are the meaning conveyed by a component's:
- **Role:** What type of thing it is (button, link, checkbox, tab)
- **Name:** What it is called ("Submit," "Search," "Settings")
- **State:** Its current condition (selected, expanded, disabled)
- **Value:** Its current data (input text, slider position)

**Right column:**
Accessibility tree snippet from Chrome DevTools showing:
```
button "Save changes"
  role: button
  name: Save changes
  disabled: true
```

**Connection callout (blue background):**
In L09, you learned to inspect the accessibility tree. Today we ask: did you choose the right component? Does what users see match what AT users hear?

**Speaker notes:**
In L09, you learned to inspect the accessibility tree. You saw that every element has a name, role, and state. In L16, we are asking a design question: did you choose the right role? Does the visual appearance match what the role communicates? If a user sees a button but the role says "link," the semantic mismatch creates confusion for everyone.

---

### Frame 3.3: Common semantic mismatches

**Type:** Issue grid with examples

**Layout:** Stacked issue cards, each with visual and what AT announces

**Headline:** When visual and semantic disagree

**Issue cards:**

| Visual Design | Semantic Reality | Problem |
|---------------|-----------------|---------|
| Looks like a button | Role: `link` | User expects action, gets navigation |
| Looks like a text field | Role: `div` | No keyboard access, no screen reader announcement |
| Looks like a toggle switch | Role: `checkbox` | Visual says "toggle," AT says "checkbox" |
| Entire card is clickable | Role: `link` wrapping block content | Only the text "looks" clickable, but the entire area navigates |
| Gray text, appears disabled | No `disabled` or `aria-disabled` | AT reports element as enabled |

**Key insight callout (coral background):**
The visual design implies behavior. The semantic role must confirm it. When they disagree, some users get the wrong message.

**Speaker notes:**
The most common mismatch is links vs. buttons. Sighted users may not notice the difference, but the semantic distinction matters. Links navigate somewhere. Buttons perform actions. Screen readers announce "link" or "button," setting expectations for what will happen. If a "Save" action uses a link element, the screen reader says "Save, link," which implies navigation, not action. These mismatches erode trust and create confusion.

---

### Frame 3.4: State communication

**Type:** State matrix

**Layout:** Table showing states that must be conveyed visually AND programmatically

**Headline:** Every visual state needs a programmatic partner

**State matrix:**

| State | Visual Signal | Programmatic Signal | Example |
|-------|--------------|---------------------|---------|
| Selected | Highlighted background, checkmark | `aria-selected="true"` | Tab in a tablist |
| Expanded | Chevron rotated, content visible | `aria-expanded="true"` | Accordion panel |
| Disabled | Reduced opacity, cursor change | `disabled` or `aria-disabled="true"` | Submit button before form completion |
| Required | Asterisk, "Required" label | `aria-required="true"` or `required` | Form field |
| Invalid | Red border, error icon | `aria-invalid="true"` + `aria-describedby` | Form field with error |
| Current | Bold text, underline, indicator | `aria-current="page"` | Navigation item |

**Common failure callout (red background):**
Disabled state shown only by reduced opacity. No `disabled` or `aria-disabled` attribute. AT users do not know the element is disabled.

**Speaker notes:**
Every visual state change must have a programmatic equivalent. If you gray out a button, add `aria-disabled`. If you expand an accordion, update `aria-expanded`. If a nav item is the current page, add `aria-current="page"`. The visual state is for sighted users. The programmatic state is for everyone else. Your design annotations must specify both.

---

### Frame 3.5: Consistent identification (WCAG 3.2.4)

**Type:** Cross-page comparison

**Layout:** Three page screenshots showing the same function implemented differently

**Headline:** Same function, same component

**WCAG 3.2.4:** Components that have the same functionality within a set of pages are identified consistently.

**Visual example:**
Three screenshots from the same product showing search functionality:
- Page 1: Magnifying glass icon button in the header
- Page 2: Full text input with "Search" label
- Page 3: Different icon, different position, tooltip says "Find"

**Failure annotation:** All three are "search" functionality, but they look and behave differently. Users must re-learn the interaction on each page.

**Best practice callout (green background):**
Design systems solve this at scale. When every team uses the same search component from the system, consistency is automatic. Semantic consistency and visual consistency come together.

**Speaker notes:**
WCAG 3.2.4 is often overlooked but it is essential for cognitive accessibility. If your search function is a magnifying glass icon on the home page, a text input in the header on the settings page, and a different icon in the sidebar on the dashboard, users have to re-learn how to search on every page. This is pure cognitive overhead. Design systems are the solution: encode both the visual appearance and the semantic behavior in the component, and every team gets consistency automatically.

---

### Frame 3.6: Activity: Semantic audit

**Type:** Activity frame

**Layout:** Product screenshot with dev tools panel

**Headline:** Activity: Semantic audit

**Activity badge:** `HANDS-ON (3 min)`

**Instructions:**
1. Open the provided product interface in a browser
2. Inspect 3-5 interactive components using the accessibility tree (from L09)
3. For each component, document:
   - What does the visual design communicate? (What does it look like?)
   - What does the accessibility tree say? (What role, name, state?)
   - Is there a mismatch?
4. Identify the highest-priority mismatch and recommend a fix

**Discussion prompt callout:**
"This card component looks like a button with a hover state, but inspecting the accessibility tree shows it is a link wrapping a div. What problems does this create for voice control users (L13)? For screen reader users (L10-L11)?"

**Speaker notes:**
Give students 3 minutes to inspect. This activity ties directly back to L09 (DOM inspection), L10-L11 (screen reader announcements), and L13 (voice control, which depends on visible labels matching accessible names). The key insight: semantic mismatches are design bugs, not just engineering bugs. The designer chose a component; the semantics should match that choice.

---

### Frame 3.7: Design system role in semantic consistency

**Type:** Principle with component documentation example

**Layout:** Left principles, right component documentation snippet

**Headline:** Design systems encode accessibility semantics

**Left column principles:**
1. Design systems should encode **roles, states, and keyboard behavior**, not just visual styles
2. Designers should select components by **semantic function**, not visual appearance
3. Component documentation should include accessibility specifications

**Right column: Example component documentation**
```
## Button Component
Role: button
Keyboard: Space/Enter activates
States: default, hover, focus, active, disabled
Disabled: aria-disabled="true", reduced opacity
Announcement: "[label], button" or "[label], button, dimmed"

## Link Component  
Role: link
Keyboard: Enter activates
States: default, hover, focus, visited
Announcement: "[label], link"

When to use which:
- Button: performs an action (save, submit, toggle)
- Link: navigates to a location (page, section, external URL)
```

**Key insight callout:**
If the design system gets semantics right, every team inherits correct accessibility. If the system gets it wrong, every team inherits the same bug.

**Speaker notes:**
This is the scale argument for investing in design system accessibility. When a designer selects a "Button" component from the design system, it should come with the correct role, keyboard behavior, focus management, and state announcements built in. The designer's job is to select the right component for the right purpose and provide the right content (label, states). The system handles the implementation semantics. This is how you scale accessibility across a large organization.

---

# Section 4: Summary and Assessment
## Duration: 6 minutes

### Frame 4.1: Key takeaways

**Type:** Summary frame

**Layout:** Three-column summary with icons

**Headline:** Three principles for perceptual and cognitive accessibility

**Column 1: Spatial Hierarchy (LO 2H.01)**
- Visual hierarchy must align with programmatic structure
- Gestalt grouping must be reinforced with headings, landmarks, and ARIA
- Hierarchy must survive zoom and reflow

**Column 2: Density and Whitespace (LO 2H.02)**
- Whitespace is a functional design tool, not wasted space
- Density affects cognitive load, especially for users with cognitive disabilities
- WCAG 1.4.12 requires tolerance for user text spacing adjustments

**Column 3: Component Semantics (LO 2H.03)**
- Visual communication must match semantic communication
- Every visual state needs a programmatic partner
- Design systems encode consistency at scale

**Speaker notes:**
Three takeaways. One: your visual hierarchy must match your programmatic hierarchy. If they diverge, some users get the wrong story. Two: whitespace is not a luxury; it is a cognitive accessibility requirement. Three: component semantics must match what users see. These three principles connect everything you have learned in the DACE program.

---

### Frame 4.2: The three questions

**Type:** Memorable framework

**Layout:** Large text, centered, three numbered questions

**Headline:** Ask these three questions for every design

**Content:**
1. **Does the visual hierarchy match the programmatic hierarchy?**
   (Headings, landmarks, reading order)

2. **Is there enough whitespace for cognitive comfort and WCAG text spacing?**
   (Density, spacing tokens, reflow tolerance)

3. **Do component semantics match what users see?**
   (Roles, states, consistent identification)

**Speaker notes:**
These three questions are your perceptual and cognitive accessibility checklist. If the answer to all three is yes, your design is doing well. If any answer is no, you have a concrete issue to address. Write these down. Put them in your design review template.

---

### Frame 4.3: Quiz preview

**Type:** Assessment preview

**Layout:** Compact quiz info

**Headline:** Knowledge check: 5 questions

**Content:**
- 5 multiple choice questions
- Covers spatial hierarchy (2H.01), density/whitespace (2H.02), and component semantics (2H.03)
- Scenario-based: real design decisions and their accessibility implications
- Open book, no time limit

**Speaker notes:**
The quiz focuses on application. You will be given design scenarios and asked to identify the perceptual or cognitive accessibility issue. There are no trick questions. The goal is to confirm you can apply these principles to real design work.

---

### Frame 4.4: Applied practice preview

**Type:** Assignment preview

**Layout:** Assignment description with deliverables

**Headline:** Applied practice: Perceptual and cognitive audit

**Assignment:**
Evaluate a product interface for perceptual and cognitive accessibility. Document:
1. Hierarchy alignment (visual vs. programmatic)
2. Density and whitespace assessment
3. Component semantic audit (3-5 components)
4. Recommendations with rationale

**Combined with:** L15 (User Preferences) for the applied practice submission.

**Speaker notes:**
This applied practice combines with L15. You will evaluate a product interface through both lenses: user preferences and perceptual/cognitive design. The deliverable is a written audit with specific recommendations. Use the three questions from Frame 4.2 as your structure.

---

### Frame 4.5: Define Badge wrap-up

**Type:** Badge progress frame

**Layout:** Lesson grid showing L09-L16 progression

**Headline:** Define Badge: Topic lessons complete

**Grid showing lesson progression:**

| Lesson | Topic | Status |
|--------|-------|--------|
| L09 | DOM and Accessibility Tree | ✅ |
| L10 | Screen Reader Fundamentals | ✅ |
| L11 | Screen Reader Navigation Patterns | ✅ |
| L12 | Screen Magnification | ✅ |
| L13 | Voice Control | ✅ |
| L14 | Windows High Contrast Mode | ✅ |
| L15 | User Preferences | ✅ |
| L16 | Perceptual and Cognitive Design | ✅ |
| L17 | AT Testing Methodology | Next |

**Speaker notes:**
This is the last topic-specific lesson in the Define Badge. You started by learning to see the machine's view of your designs (L09). You learned to hear them (L10-L11). You tested with magnification (L12), voice control (L13), and high contrast mode (L14). You explored user preferences (L15). And today in L16, you returned to the design itself, armed with a deeper understanding of how all these technologies and user needs interact with your layout, spacing, and component choices. Next up is the capstone: AT Testing Methodology, where we bring all of these skills together into a systematic testing approach.

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L16: Perceptual and Cognitive Design Considerations*
