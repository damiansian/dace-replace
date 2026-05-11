# Lesson 06: Reflow and Zoom
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge Level:** Discover  
**Delivery:** Online (asynchronous, self-paced)  
**Duration:** 40 minutes  
**Outcomes Covered:** 1F.01, 1F.02, 1F.03

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 000-001 | 1 min | - |
| 1. Why Reflow and Zoom Matter | 100-102 | 5 min | All |
| 2. Designing for 400% Zoom | 200-205 | 10 min | 1F.01 |
| 3. Text Spacing Requirements | 300-306 | 10 min | 1F.02 |
| 4. Orientation Support | 400-404 | 7 min | 1F.03 |
| 5. Testing Your Designs | 500-502 | 5 min | All |
| 6. Quiz & Resources | 600-601 | 2 min | - |

**Total frames:** 28

---

## Design system notes

- Use existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#5151D3` (Discover Badge purple)
- Frame dimensions: 1440x900
- Online format: Include more text on frames since learners self-pace
- Keep speaker notes brief (for reference, not live delivery)

---

## Learning objective pill component

Same specs as previous lessons:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light blue (#E6F2FF) at 15% opacity
- Text: 12px, medium weight, "LO 1F.0X"
- Links to Frame 001

---

## Frame 0: Title & objectives

### Frame 000: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 06`
- Title: `Reflow and Zoom`
- Subtitle: `Designing for flexible viewports and user preferences`
- Badge level indicator: `Discover Badge`
- Duration: `40 minutes`
- Format indicator: `Online Lesson`

**Speaker notes:**
Welcome to Lesson 06. This is an online, self-paced lesson about designing for zoom, text spacing adjustments, and orientation flexibility.

---

### Frame 001: Learning objectives reference

**Type:** Objectives overview

**Layout:** Vertical list with outcome codes

**Headline:** What you'll be able to do

**Intro text:**
By the end of this lesson, you'll be able to:

**Objectives list:**

| Code | Objective |
|------|-----------|
| 1F.01 | Design for 400% zoom without horizontal scroll by creating layouts that reflow to single column |
| 1F.02 | Ensure text spacing adjustments work by designing components that accommodate increased line height and letter and word spacing |
| 1F.03 | Apply orientation requirements by ensuring content works in both portrait and landscape orientations |

**Speaker notes:**
Three focused outcomes. These connect to responsive design practices you may already use. The accessibility requirements give specific targets.

---

# Section 1: Why reflow and zoom matter
## Duration: 5 minutes

### Frame 100: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Why Reflow and Zoom Matter`

---

### Frame 101: Who uses zoom?

**Type:** Statistics/impact

**Layout:** Four-column layout with icons

**Headline:** Browser zoom is more common than screen readers

**Four columns:**

| Icon | Group | Note |
|------|-------|------|
| 👓 | Low vision users | 12+ million in the US alone |
| 🧓 | Aging users | Vision changes are near-universal with age |
| 📱 | Mobile users | Zooming for comfort on small screens |
| 🧠 | Cognitive needs | Larger text reduces reading fatigue |

**Body text:**
Browser zoom is a primary assistive technology. When designs break at zoom, you're excluding millions of users.

**Speaker notes:**
Zoom is not an edge case. More people use browser zoom than use screen readers. These are mainstream users.

---

### Frame 102: What happens when designs break

**Type:** Before/after comparison

**Layout:** Two-panel mockup

**Left panel (Breaking):**
- Page at 400% zoom
- Horizontal scrollbar visible
- Text cut off at edge
- User cannot read content without scrolling back and forth
- Label: `❌ Fails SC 1.4.10`

**Right panel (Working):**
- Same page at 400% zoom
- Content reflowed to single column
- All text visible
- User can scroll vertically only
- Label: `✓ Passes SC 1.4.10`

**Headline:** Designs must reflow, not break

**Body text:**
When content breaks at zoom, users must scroll horizontally for every line of text. This makes reading exhausting or impossible.

**Speaker notes:**
The left example is a complete failure. Users must scroll left-right for every line of text. The right example adapts gracefully.

---

# Section 2: Designing for 400% zoom
## Duration: 10 minutes

### Frame 200: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Designing for 400% Zoom`

---

### Frame 201: The reflow requirement

**Type:** Rule explanation

**Layout:** Key stat callout with supporting text

**Key stat callout (prominent):**
**400% zoom on 1280px = 320px viewport**

**Headline:** SC 1.4.10: Reflow (Level AA)

**Body text:**
Content must reflow at 400% zoom without requiring horizontal scrolling to read text. At 400% zoom on a 1280px viewport, users see the equivalent of a 320px wide viewport, similar to a mobile phone.

**What "no horizontal scrolling" means:**
- Text content reflows to fit the viewport
- Users scroll vertically only
- All functionality remains accessible
- Navigation adapts (hamburger menus, collapsed sidebars)

**Speaker notes:**
 
---

### Frame 202: What must reflow

**Type:** Checklist

**Layout:** Two-column with checkmarks

**Headline:** Content that must reflow

**Left column (Must reflow):**
- ✓ Body text and paragraphs
- ✓ Navigation menus
- ✓ Form fields and labels
- ✓ Images (scale or stack)
- ✓ Cards and content blocks
- ✓ Sidebars (collapse or move)

**Right column (May scroll horizontally):**
- ~ Data tables (two-dimensional by nature)
- ~ Complex diagrams
- ~ Video player controls
- ~ Toolbars with many options
- ~ Maps

**Body text:**
Exceptions exist for content that requires two-dimensional layout to make sense. But marketing layouts, articles, and most UI must reflow.

**Speaker notes:**
The exceptions are for content where horizontal structure is essential to meaning. Most content is not in this category.

---

### Frame 203: Common reflow failures

**Type:** Problem examples

**Layout:** Three failure examples

**Headline:** Why designs fail at 400% zoom

**Example 1: Fixed-width containers**
- Visual: Content box with `width: 800px`
- Problem: Container wider than viewport, causes horizontal scroll
- Fix: Use `max-width: 100%` or flexible units

**Example 2: Multi-column layouts that don't stack**
- Visual: Three columns staying side-by-side
- Problem: Columns too narrow to read
- Fix: Use CSS Grid or Flexbox with responsive breakpoints

**Example 3: Absolutely positioned elements**
- Visual: Element positioned at fixed coordinates
- Problem: Element overlaps or goes off-screen
- Fix: Use relative positioning or flexible layouts

**Speaker notes:**
These are the three most common causes of reflow failure. All are solved with flexible, responsive design techniques.

---

### Frame 204: Designer's role in reflow

**Type:** Guidance

**Layout:** Callout box with action items

**Headline:** Your job is not to code responsiveness, but to design for it

**Callout box (prominent, green background):**
Reflow behavior is primarily implemented by engineering. Your role as a designer:

**Action items:**
1. **Design with breakpoints in mind** - Show how layouts adapt at 320px
2. **Avoid fixed widths in specs** - Use percentage-based or flexible sizing
3. **Document reflow behavior** - "Sidebar collapses to hamburger menu"
4. **Test your prototypes** - Zoom to 400% and verify the experience

**Body text:**
You do not need to annotate reflow in Bluelines. But you must design layouts that CAN reflow.

**Speaker notes:**
Similar to reading order in L02: you don't annotate it, but your design must support it.

---

### Frame 205: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist for self-assessment

**Headline:** Checkpoint: 400% zoom requirements

**Body text:**
Before moving to text spacing, verify you understand these reflow principles:

**Checklist:**
- [ ] I understand that 400% zoom on 1280px = 320px viewport
- [ ] I can identify content that must reflow vs. exceptions
- [ ] I can avoid fixed-width containers in my designs
- [ ] I know to design responsive breakpoints including narrow viewports
- [ ] I understand that reflow is implemented by engineering but designed by me

**Speaker notes:**
Review these principles. If any feel unclear, revisit the previous frames.

---

# Section 3: Text spacing requirements
## Duration: 10 minutes

### Frame 300: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Text Spacing Requirements`

---

### Frame 301: The text spacing requirement

**Type:** Rule explanation

**Layout:** Four-item specification list

**Headline:** SC 1.4.12: Text Spacing (Level AA)

**Body text:**
Users must be able to adjust text spacing without losing content or functionality. Specifically, content must support these adjustments:

**Specification boxes (four items):**

| Property | Minimum | Example |
|----------|---------|---------|
| Line height | 1.5x font size | 16px font → 24px line height |
| Letter spacing | 0.12x font size | 16px font → 1.92px spacing |
| Word spacing | 0.16x font size | 16px font → 2.56px spacing |
| Paragraph spacing | 2x font size | 16px font → 32px paragraph gap |

**Body text:**
Users apply these adjustments via browser settings, extensions, or user stylesheets. Your design must not break.

**Speaker notes:**
These are minimum values. Users may apply larger adjustments. The key is that content remains readable.

---

### Frame 302: Who benefits from text spacing

**Type:** User impact

**Layout:** Three-column with icons

**Headline:** Why users adjust text spacing

**Three columns:**

| Icon | User group | Benefit |
|------|-----------|---------|
| 📖 | Dyslexia | Increased spacing prevents letters from "dancing" or merging |
| 👓 | Low vision | Wider spacing makes text easier to track across lines |
| 🧠 | Cognitive | Reduced visual crowding improves comprehension |

**Body text:**
Text spacing adjustments are user preferences that improve reading comfort and comprehension. When designs clip or hide text, these users cannot read content.

**Speaker notes:**
Dyslexia affects 10-15% of the population. Text spacing is a common accommodation that helps many people read more comfortably.

---

### Frame 303: The fixed-height container problem

**Type:** Problem illustration

**Layout:** Before/after comparison

**Headline:** Fixed heights cause text clipping

**Left panel (Problem):**
- Button with `height: 40px`
- Text spacing applied
- Text overflows and is clipped
- Label: `❌ Text clipped`

**Right panel (Solution):**
- Button with `min-height: 40px`
- Text spacing applied
- Button grows to fit text
- Label: `✓ Flexible height`

**Body text:**
When containers have fixed heights, text with increased spacing overflows or gets clipped. The solution is flexible heights.

**Key insight callout (prominent):**
Use `min-height` instead of `height`. Use `padding` instead of fixed dimensions.

**Speaker notes:**
This is the most common text spacing failure. Designers specify exact heights, and text with spacing adjustments doesn't fit.

---

### Frame 304: What breaks with text spacing

**Type:** Problem patterns

**Layout:** Three failure examples

**Headline:** Common text spacing failures

**Example 1: Fixed-height buttons**
- Visual: Button with clipped text
- Problem: "Submit Order" becomes "Submit Or..."
- Fix: Use padding, not fixed height

**Example 2: Fixed-height cards**
- Visual: Card with text overflowing
- Problem: Description text runs outside card boundary
- Fix: Let cards grow with content, or use overflow: auto

**Example 3: Inline text overlapping**
- Visual: Text running into adjacent element
- Problem: Increased word spacing pushes text into next column
- Fix: Use flexible layouts that accommodate wider text

**Speaker notes:**
All three failures stem from assuming text will stay the same size and spacing. Design for flexibility.

---

### Frame 305: Designing for text spacing

**Type:** Guidance

**Layout:** Best practices list

**Headline:** Design components that flex

**Best practices:**

1. **Buttons:** Use padding (e.g., 12px 24px) instead of fixed height
2. **Cards:** Set min-height if needed, but allow growth
3. **Text containers:** Never clip text (avoid `overflow: hidden` on text)
4. **Labels:** Ensure labels can wrap or expand with content
5. **Icons + text:** Use flexible alignment, not pixel-perfect positioning

**Designer's handoff note:**
In your specs, indicate "min-height: 48px" rather than "height: 48px". Note that components should grow with content.

**Speaker notes:**
Communicate flexible sizing to engineering. If you spec fixed heights, engineering will implement fixed heights.

---

### Frame 306: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist for self-assessment

**Headline:** Checkpoint: Text spacing requirements

**Body text:**
Before moving to orientation, verify you understand these text spacing principles:

**Checklist:**
- [ ] I understand the four text spacing properties (line height, letter spacing, word spacing, paragraph spacing)
- [ ] I can identify why fixed-height containers cause text clipping
- [ ] I know to use min-height and padding instead of fixed dimensions
- [ ] I can design components that flex when text spacing is adjusted
- [ ] I understand that text spacing benefits users with dyslexia, low vision, and cognitive needs

**Speaker notes:**
Review these principles. If any feel unclear, revisit the previous frames.

---

# Section 4: Orientation support
## Duration: 7 minutes

### Frame 400: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Orientation Support`

---

### Frame 401: The orientation requirement

**Type:** Rule explanation

**Layout:** Key message with context

**Headline:** SC 1.3.4: Orientation (Level AA)

**Key message callout (prominent):**
Content must work in both portrait AND landscape unless a specific orientation is essential for the function.

**Body text:**
You cannot force users into a single orientation just because your design was created for one. Users may have devices mounted in fixed positions.

**Two scenarios:**
- ✓ Piano app requiring landscape (essential for keyboard width)
- ❌ News app forcing portrait (preference, not essential)

**Speaker notes:**
The key test is "essential for function." Design preference is not essential. Physical constraints of the interface are essential.

---

### Frame 402: Who needs orientation flexibility

**Type:** User impact

**Layout:** Visual with mounted device examples

**Headline:** Why orientation restrictions are barriers

**Visual examples:**
- Wheelchair user with device mounted in landscape
- Bed-bound user with device on swing arm (fixed orientation)
- Kitchen mount with tablet in portrait
- User with motor disability who cannot rotate device

**Body text:**
Users with mounted devices cannot always rotate them. Forcing orientation creates a complete barrier: they cannot use your app at all.

**Key insight:**
These are not hypothetical edge cases. Device mounts are common for users with motor disabilities.

**Speaker notes:**
A user with a wheelchair-mounted device may have it permanently in landscape. They physically cannot rotate it.

---

### Frame 403: Legitimate exceptions

**Type:** Exception guidance

**Layout:** Valid vs. invalid examples

**Headline:** When orientation restrictions are acceptable

**Valid exceptions (function requires it):**
- ✓ Piano keyboard (needs horizontal space for keys)
- ✓ Bank check deposit (camera alignment for scanning)
- ✓ Projector remote (matches projector orientation)
- ✓ VR setup (specific orientation for sensors)

**Invalid exceptions (preference only):**
- ❌ "Looks better in portrait"
- ❌ "Designed for landscape scrolling"
- ❌ "Mobile version is portrait-only"
- ❌ "Video player should be landscape"

**Test question:**
Would the core function break if orientation changed? If no, it's not an essential restriction.

**Speaker notes:**
The bar for "essential" is high. Most apps do not have essential orientation requirements.

---

### Frame 404: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist for self-assessment

**Headline:** Checkpoint: Orientation requirements

**Body text:**
Before moving to testing, verify you understand these orientation principles:

**Checklist:**
- [ ] I understand that content must work in both portrait and landscape
- [ ] I can identify users who need orientation flexibility (mounted devices, motor disabilities)
- [ ] I know the difference between essential restrictions and design preference
- [ ] I can evaluate whether an orientation restriction is truly essential for function

**Speaker notes:**
Review these principles. If any feel unclear, revisit the previous frames.

---

# Section 5: Testing your designs
## Duration: 5 minutes

### Frame 500: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `5`
- Title: `Testing Your Designs`

---

### Frame 501: Testing methods

**Type:** Testing procedures

**Layout:** Three-column testing guide

**Headline:** How to test reflow, text spacing, and orientation

**Column 1: Testing Reflow (1F.01)**
1. Open your design in browser
2. Set viewport to 1280px width
3. Zoom to 400%
4. Scroll only vertically to read all content
5. Check: Is anything cut off or requiring horizontal scroll?

**Column 2: Testing Text Spacing (1F.02)**
1. Use text spacing bookmarklet or browser extension
2. Apply maximum text spacing
3. Check buttons, cards, and text containers
4. Verify: Is any text clipped or hidden?

**Column 3: Testing Orientation (1F.03)**
1. Test on mobile device (or DevTools emulation)
2. Lock to portrait, check functionality
3. Lock to landscape, check functionality
4. Verify: Can users complete all tasks in both?

**Speaker notes:**
These tests take minutes but catch major issues. Do them on key screens and components.

---

### Frame 502: What to document for engineering

**Type:** Handoff guidance

**Layout:** Annotation example

**Headline:** Include in your design specs

**Checklist for handoff:**
- [ ] Responsive breakpoints (show 320px layout)
- [ ] Flexible sizing (min-height, not fixed height)
- [ ] Reflow behavior for complex components
- [ ] Any orientation restrictions with justification

**Example annotation:**
```
Card Component
- min-height: 200px (not fixed height)
- Card expands with content when text spacing applied
- At 320px viewport: stacks to single column
- Works in both portrait and landscape
```

**Body text:**
You don't annotate reflow in Bluelines (it's an engineering implementation), but you DO document expected responsive behavior in your design specs.

**Speaker notes:**
Clear specs help engineering implement flexible, accessible components.

---

# Section 6: Quiz & resources
## Duration: 2 minutes

### Frame 600: Quiz preview

**Type:** Assessment preview

**Layout:** Quiz details card

**Headline:** Knowledge check

**Details:**
- **Questions:** 6
- **Points:** 6 (1 point each)
- **Format:** Multiple choice, open-book
- **Topics:**
  - 400% zoom and reflow (1F.01): Q1, Q2
  - Text spacing requirements (1F.02): Q3, Q4
  - Orientation support (1F.03): Q5, Q6

**Callout:**
Complete the quiz before starting Lesson 07.

**Speaker notes:**
Six questions, two per outcome. Auto-graded.

---

### Frame 601: Resources

**Type:** Resource links

**Layout:** Organized list

**Headline:** Resources for reference

**W3C resources:**
- Understanding SC 1.4.10: Reflow
  `https://www.w3.org/WAI/WCAG22/Understanding/reflow.html`
- Understanding SC 1.4.12: Text Spacing
  `https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html`
- Understanding SC 1.3.4: Orientation
  `https://www.w3.org/WAI/WCAG22/Understanding/orientation.html`

**Testing tools:**
- Text Spacing Bookmarklet
  `https://dylanb.github.io/bookmarklets.html`

**Adobe resources:**
- Design Accessibility Checklist (Responsive Design section)
- Spectrum Design System: Responsive Layout Guidelines

**Up Next:**
Lesson 07: Landmarks & Navigation

**Speaker notes:**
These resources are also linked on the lesson page.

---

# Appendix: Frame count summary

| Section | Frames | Frame Numbers |
|---------|--------|---------------|
| 0. Title & Objectives | 2 | 000-001 |
| 1. Why Reflow and Zoom Matter | 3 | 100-102 |
| 2. Designing for 400% Zoom | 6 | 200-205 |
| 3. Text Spacing Requirements | 7 | 300-306 |
| 4. Orientation Support | 5 | 400-404 |
| 5. Testing Your Designs | 3 | 500-502 |
| 6. Quiz & Resources | 2 | 600-601 |
| **Total** | **28** | |

---

# Appendix: Visual asset needs

**Reusable from previous lessons:**
- Learning Objective Pill component
- Section divider template
- Good/bad comparison layout
- Checkmark/X indicators
- Checkpoint checklist template

**New for L06:**
- Browser at 400% zoom (breaking vs. reflowing)
- 1280px to 320px viewport visualization
- Fixed-height vs. min-height button comparison
- Text spacing before/after examples
- Mounted device examples (wheelchair, bed mount, kitchen stand)
- Text spacing bookmarklet screenshot
- Responsive layout at breakpoints (desktop to mobile)

**Screenshots needed:**
- Website at 400% zoom with horizontal scroll (failure)
- Same website reflowed properly (success)
- Text spacing bookmarklet applied to sample content
- Mobile device in portrait and landscape

---

*End of build guide*

