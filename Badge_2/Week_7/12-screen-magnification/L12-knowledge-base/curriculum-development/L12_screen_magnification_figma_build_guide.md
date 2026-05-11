# Lesson 12: Screen Magnification
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2C.01, 2C.02, 2C.03

---

## Source context

This lesson draws from established internal training materials, particularly:
- **WebAIM Low Vision User Surveys** (magnification tool usage and preferences)
- **ZoomText documentation** (Freedom Scientific)
- **Apple Accessibility: Zoom** (macOS and iOS magnification)
- **Microsoft Accessibility: Magnifier** (Windows built-in magnification)
- **WCAG 2.2 Understanding Documents** (SC 1.4.4, 1.4.10, 1.4.12)

Key pedagogical approach: **"From compliance to experience"**: designers move from knowing the WCAG zoom requirements (L06 Discover Badge) to understanding the real user experience with magnification AT. This is where testing skills transform into empathy.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | -- |
| 1. Magnification Tools and Users | 1.1-1.5 | 10 min | 2C.01 |
| 2. The Magnification Experience | 2.1-2.4 | 8 min | 2C.01 |
| 3. Testing with Magnification | 3.1-3.5 | 12 min | 2C.02 |
| 4. Designing for Magnification | 4.1-4.4 | 8 min | 2C.03 |
| 5. Summary and Assessment | 5.1-5.4 | 4 min | -- |

**Total frames:** 24

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#FF6B6B` (Define Badge coral)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- Include magnification viewport simulation diagrams
- Use before/after comparisons showing designs at 1x vs 4x
- Include "what the user sees" viewport overlays on full-page screenshots
- Use the eye/magnifying glass icon motif for magnification-related slides

---

## Learning objective pill component

Badge 2 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light coral (#FFE3E3) at 15% opacity
- Text: 12px, medium weight, "LO 2C.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 12`
- Title: `Screen Magnification`
- Subtitle: `Designing for the Magnified Viewport`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Lesson 12. We are transitioning from screen readers to a completely different assistive technology category: screen magnification. For the last three lessons (L09-L11), you learned how screen reader users experience content through audio. Now we shift to visual AT: tools that enhance what users can see rather than replacing vision. Magnification is the most widely-used visual assistive technology, and understanding it will change how you think about layout, proximity, and spatial design.

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
| 2C.01 | Explain how major screen magnification tools work and the user populations they serve |
| 2C.02 | Test designs at various magnification levels using system and browser zoom |
| 2C.03 | Design layouts and interactions that work well through a magnified viewport |

**Connection callout:**
New AT category. You built screen reader expertise in L09-L11. Now the testing mindset stays the same, but the technology and user experience are completely different. Magnification users have some usable vision; they need designs that work when viewed through a narrow window.

**Speaker notes:**
Three new outcomes in a new competency area (2C). This is a fresh start with different AT, but the approach is familiar: understand the tool, test your designs, specify correct behavior. The key concept today is the "viewport within a viewport": magnification users see only a portion of the screen at any time.

---

# Section 1: Magnification Tools and Users
## Duration: 10 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Magnification Tools and Users`

---

### Frame 1.2: Who uses screen magnification?

**Type:** Statistics and user profiles

**Layout:** Left side statistics, right side user profile icons

**Headline:** The most common visual AT

**LO pill:** 2C.01

**Statistics:**
- 246 million people globally have moderate to severe vision impairment
- Low vision is the most common visual disability
- More people use magnification than screen readers
- Magnification users have usable vision, unlike most screen reader users

**User groups:**
- Permanent low vision (macular degeneration, glaucoma, diabetic retinopathy)
- Age-related vision changes (presbyopia, cataracts)
- Temporary impairment (post-surgery, eye injury, migraine)
- Situational (small screen, viewing from a distance)

**Key insight callout:**
These are your users. Many of them also use other AT: high contrast modes, text-to-speech, or custom font sizes. Magnification is rarely the only accommodation they need.

**Speaker notes:**
Start with the numbers. Low vision is far more common than blindness. Most people with visual disabilities have some usable vision. They don't need screen readers; they need to see things bigger. This is a massive user population, and their needs are often overlooked because designers assume browser zoom testing is sufficient.

---

### Frame 1.3: Four categories of magnification

**Type:** Comparison chart

**Layout:** Four-column comparison with tool icons

**Headline:** Not one tool, but a category

**LO pill:** 2C.01

| Category | Examples | How It Works | Key Characteristic |
|----------|----------|--------------|-------------------|
| Dedicated software | ZoomText | Pixel magnification + smoothing + screen reader | Most powerful, paid |
| OS-level zoom | Windows Magnifier, macOS Zoom | Full-screen, lens, or docked magnification | Free, built-in |
| Browser zoom | Ctrl/Cmd + | Reflows page layout | Changes layout |
| Mobile zoom | Pinch-to-zoom, system zoom | Touch-based viewport magnification | Gesture-driven |

**Key insight callout:**
Browser zoom and system magnification create fundamentally different user experiences. A design that passes WCAG reflow (browser zoom at 400%) can still be unusable with ZoomText or Windows Magnifier.

**Speaker notes:**
This is the most important distinction in today's lesson. Browser zoom reflows the layout, like triggering a responsive breakpoint. System magnification enlarges pixels without changing the layout. They test different things, and both matter for different user populations. WCAG reflow testing covers browser zoom. Magnification testing covers system-level tools.

---

### Frame 1.4: System magnification vs browser zoom

**Type:** Side-by-side comparison

**Layout:** Split screen showing the same page under both tools

**Headline:** Same page, different experience

**Left side (Browser zoom at 400%):**
Visual: Page reflowed to single column, all content visible by scrolling vertically
```
Layout: Single column
Content: Fully visible (scroll down)
Horizontal scroll: None
User sees: Full width of content
```

**Right side (System zoom at 4x):**
Visual: Page at original layout, but only a small portion visible through the magnified viewport
```
Layout: Unchanged (still two columns)
Content: Only 25% of width visible
Horizontal scroll: N/A (viewport moves)
User sees: Small window into the full page
```

**Impact callout:**
The left side is what WCAG 1.4.10 tests. The right side is what many real users experience. Both matter.

**Speaker notes:**
This is the slide to spend time on. The left side is what you tested in L06: browser zoom to 400%, content reflows to a single column, no horizontal scrolling. Pass. The right side is what a ZoomText or Windows Magnifier user sees: the original layout, but through a keyhole. Two-column layouts are still two columns, but the user can only see half of each one. This is why magnification testing matters beyond WCAG compliance.

---

### Frame 1.5: Demo: Magnification tools in action

**Type:** Demo slide

**Layout:** Step-by-step demo instructions

**Headline:** Live demo: See the difference

**Demo steps:**
1. **macOS Zoom at 2x:** Show a complex dashboard (enable with Option+Cmd+8)
2. **macOS Zoom at 4x:** Same dashboard, notice how much less is visible
3. **macOS Zoom at 8x:** Only a few elements visible at a time
4. **Browser zoom at 400%:** Same page, completely different layout (single column)
5. **Compare:** Layout is changed with browser zoom, unchanged with system zoom

**Discussion prompt:**
Which version would you rather test your designs with? Which do you think your users actually use?

**Speaker notes:**
Do this demo live. Toggle macOS Zoom on and off to show the contrast. At 2x, most layouts are still manageable. At 4x, spatial issues emerge, especially for multi-column layouts. At 8x, you can barely see one form field and its label at a time. Then switch to browser zoom at 400% and show how different the experience is. The layout changes entirely. Both are valid user scenarios.

---

# Section 2: The Magnification Experience
## Duration: 8 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `The Magnification Experience`

---

### Frame 2.2: The viewport within a viewport

**Type:** Conceptual diagram

**Layout:** Full-page screenshot with magnification viewport overlay

**Headline:** Seeing through a keyhole

**LO pill:** 2C.01

**Diagram:**
Full webpage screenshot (1440x900) with a highlighted rectangle showing the visible area at different magnification levels:

```
At 1x:  [==========================================] Full page visible
At 2x:  [====================]                       50% width visible
At 4x:  [==========]                                 25% width visible
At 8x:  [=====]                                      12.5% width visible
```

**Visible area calculation:**
| Magnification | Width visible | Height visible | Total area visible |
|---------------|---------------|----------------|-------------------|
| 2x | 50% | 50% | 25% |
| 4x | 25% | 25% | ~6% |
| 8x | 12.5% | 12.5% | ~1.5% |

**Key insight callout:**
At 4x magnification, users see roughly 6% of the page at any moment. Everything else requires moving the viewport. This is not a minor inconvenience; it fundamentally changes how users interact with the interface.

**Speaker notes:**
This is the foundational concept for the entire lesson. At 4x magnification, over 90% of the page is invisible at any given moment. Users must navigate by moving the magnified viewport, relying on spatial memory and consistent layouts. This is why proximity matters so much: if a label is far from its input, the user might not see both at the same time.

---

### Frame 2.3: How magnification users navigate

**Type:** Navigation pattern diagram

**Layout:** Page wireframe with movement arrows showing viewport navigation

**Headline:** Navigation strategies at high magnification

**LO pill:** 2C.01

**Navigation strategies:**

1. **Spatial memory:** Users remember where elements are and navigate directly to them
   - "The search bar is always in the top right"
   - "Navigation is always on the left"

2. **Scanning patterns:** Left-to-right, top-to-bottom, following reading order
   - Moving the viewport systematically across the page

3. **Focus tracking:** Magnification tools can follow keyboard focus
   - User tabs through form fields, viewport moves automatically

4. **Mouse tracking:** Viewport follows mouse cursor movement
   - User moves mouse, magnified view follows

5. **Anchor points:** Users orient using consistent landmarks
   - Logo, navigation bar, heading text, page structure

**Key insight callout:**
Consistent layouts are not just a visual design preference. For magnification users, changing the layout means losing the spatial memory they use to navigate.

**Speaker notes:**
Magnification users develop muscle memory for where things are on a page. When you redesign a layout, you reset their mental map. When navigation moves from the left to the top between pages, users have to search for it. This is why consistency across pages is even more important for magnification users than for sighted users at default zoom.

---

### Frame 2.4: What breaks for magnification users

**Type:** Failure patterns (what goes wrong)

**Layout:** Four failure scenarios with viewport visualization

**Headline:** Common magnification barriers

**Failure 1: Spatial separation**
- A form label is 300px from its input field
- At 4x magnification, the user cannot see both at once
- They must remember the label while moving to the input

**Failure 2: Pop-ups outside viewport**
- User clicks a help icon, tooltip appears 200px to the right
- At high magnification, the tooltip is outside the visible area
- User does not know the tooltip appeared

**Failure 3: Moving content**
- Auto-advancing carousel rotates while user is reading a slide
- Content shifts out of the magnified viewport
- User loses their place and has to re-orient

**Failure 4: Sticky elements consuming viewport**
- Sticky header takes 80px of viewport height
- At 4x magnification, the header consumes 35% of the visible height
- Content area is severely reduced

**Speaker notes:**
Walk through each failure scenario. Use the viewport overlay visualization to show what the user actually sees. The spatial separation issue is the most common and most impactful. If students have tested forms in their products, ask them to estimate the distance between labels and inputs. Many will realize their forms have significant spatial separation.

---

# Section 3: Testing with Magnification
## Duration: 12 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Testing with Magnification`

---

### Frame 3.2: Testing levels and what they reveal

**Type:** Testing matrix

**Layout:** Stepped progression from basic to advanced

**Headline:** A systematic approach to magnification testing

**LO pill:** 2C.02

**Testing progression:**

| Level | Tool | What It Tests | What It Reveals |
|-------|------|---------------|-----------------|
| 1. Browser 200% | Ctrl/Cmd + | SC 1.4.4 Resize Text | Text truncation, overflow, clipping |
| 2. Browser 400% | Ctrl/Cmd + | SC 1.4.10 Reflow | Layout reflow, horizontal scrolling, content order |
| 3. Text spacing | Bookmarklet | SC 1.4.12 Text Spacing | Content clipping with increased spacing |
| 4. System 2x | macOS Zoom / Magnifier | Real magnification | Mild viewport reduction, basic spatial issues |
| 5. System 4x | macOS Zoom / Magnifier | High magnification | Significant spatial separation, popup positioning |
| 6. System 8x | macOS Zoom / Magnifier | Extreme magnification | Label-input proximity, focus tracking |

**Key insight callout:**
Levels 1-3 are WCAG compliance testing (you learned this in L06). Levels 4-6 are AT experience testing (new in L12). Both are necessary.

**Speaker notes:**
Think of this as a testing ladder. L06 taught you the first three rungs: browser zoom and text spacing for WCAG compliance. L12 adds the upper rungs: system magnification for real user experience. Most teams stop at rung 2 or 3. Reaching rung 5 or 6 catches issues that affect real magnification users.

---

### Frame 3.3: Key testing scenarios

**Type:** Scenario checklist

**Layout:** Scenario table with checkpoints

**Headline:** What to look for at high magnification

**LO pill:** 2C.02

**Testing scenarios:**

| Scenario | Check | Pass Criteria |
|----------|-------|---------------|
| Form fields | Label and input visible together at 4x zoom | Both visible without moving viewport |
| Error messages | Error visible near its field at 4x zoom | Error and field visible together |
| Tooltips | Tooltip visible when triggered at 4x zoom | Tooltip appears within magnified viewport |
| Dropdowns | Menu visible relative to trigger at 4x zoom | Menu appears near trigger element |
| Focus indicator | Focus ring visible at 4x zoom | Ring is at least 2px and high contrast |
| Sticky header | Header does not consume >25% of viewport at 4x | Content area remains usable |
| Data tables | Headers visible with data cells at 4x zoom | Context maintained during navigation |

**Speaker notes:**
This is a practical testing checklist students can use immediately. The pass criteria are intentionally specific. "Both visible without moving viewport" means both the label and input must be visible simultaneously at 4x system magnification. This is a higher bar than WCAG compliance, but it reflects actual user needs.

---

### Frame 3.4: Activity: Test at multiple magnification levels

**Type:** Activity frame

**Layout:** Instructions with hands-on cue

**Headline:** Hands-on: Magnification testing

**Activity icon:** Magnifying glass + viewport

**Instructions:**
1. Open the prepared test page in your browser
2. **Browser zoom test:** Zoom to 200%, then 400%, check for reflow issues
3. **Enable macOS Zoom:** Option+Cmd+8 (or System Settings → Accessibility → Zoom)
4. **System zoom at 4x:** Navigate the form
   - Can you see the label AND the input field at the same time?
   - Submit the form with errors: can you see the error AND the field together?
5. **System zoom at 4x:** Test the tooltip
   - Click the help icon: does the tooltip appear within your magnified viewport?
6. **System zoom at 4x:** Test focus tracking
   - Tab through the form: does the magnified viewport follow your focus?
7. **Compare notes:** What did system magnification reveal that browser zoom did not?

**Discussion prompt:**
What was the most surprising issue you found with system magnification that browser zoom alone would not have caught?

**Speaker notes:**
This is the most important hands-on exercise in the lesson. Give students 5-6 minutes to work through the test page. The form is designed to have spatial separation issues that are invisible at browser zoom (because the layout reflows) but obvious at system magnification (because the layout is unchanged). Circulate and help students who have trouble enabling macOS Zoom.

---

### Frame 3.5: Documenting magnification findings

**Type:** Documentation template

**Layout:** Finding report template

**Headline:** How to report magnification issues

**LO pill:** 2C.02

**Finding template:**
```
Issue: [Brief description]
Magnification level: [2x / 4x / 8x / browser 400%]
Location: [Page and component]
What happens: [Describe the user experience]
Screenshot: [Magnified viewport showing the issue]
Impact: [Who is affected and how severely]
Recommendation: [Specific design change]
```

**Example finding:**
```
Issue: Form error message not visible with field
Magnification level: 4x system zoom
Location: Checkout page, email field
What happens: Error message appears 250px below the field.
  At 4x magnification, user must scroll down to see the error,
  then scroll back up to see the field and fix it.
Screenshot: [viewport showing field without error visible]
Impact: Low vision users cannot efficiently correct form errors
Recommendation: Move error message to directly below the input field
  (within 24px vertical distance)
```

**Speaker notes:**
Documentation matters. Without a screenshot showing the magnified viewport, engineers may not understand why a "visual-only" issue matters. The screenshot makes the "viewport within a viewport" concept tangible. Teach students to always include the magnification level and what the user actually sees.

---

# Section 4: Designing for Magnification
## Duration: 8 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Designing for Magnification`

---

### Frame 4.2: Proximity principles

**Type:** Before/after comparison

**Layout:** Split screen showing bad and good proximity

**Headline:** Keep related elements close

**LO pill:** 2C.03

**Left side (poor proximity):**
Visual: Form with labels far from inputs (wide layout, labels left-aligned in a separate column)
```
Label column          Input column
───────────           ───────────
Email address         [____________]
Password              [____________]
Confirm password      [____________]
```
At 4x magnification viewport overlay: shows either the labels OR the inputs, but not both

**Right side (good proximity):**
Visual: Form with labels directly above inputs (stacked layout)
```
Email address
[______________________________]

Password
[______________________________]

Confirm password
[______________________________]
```
At 4x magnification viewport overlay: shows label AND input together

**Key insight callout:**
Labels above inputs is one of the most impactful design decisions for magnification users. It eliminates the most common viewport-splitting issue.

**Speaker notes:**
This is the single most actionable design recommendation from today's lesson. Labels above inputs instead of beside inputs solves the majority of form magnification issues. The same principle applies to error messages (below the field, not in a summary at the top) and to button labels (near the action they describe).

---

### Frame 4.3: Layout and interaction patterns

**Type:** Design guidelines

**Layout:** Two-column guideline list

**Headline:** Magnification-friendly design patterns

**LO pill:** 2C.03

**Layout patterns:**
- Left-aligned layouts over centered or right-aligned
- Single-column for primary content (multi-column for navigation only)
- Predictable, consistent navigation placement across pages
- Compact sticky headers (or no sticky headers at all)
- Generous but consistent spacing (not excessive separation)

**Interaction patterns:**
- Inline validation over summary validation for forms
- Tooltips positioned above or below triggers (not far to the side)
- Focus indicators at least 2px wide, high contrast
- No auto-scrolling or auto-advancing content
- Dropdowns positioned relative to their trigger
- Avoid hover-dependent information disclosure

**Annotation notes:**
- Call out proximity requirements for label-input pairs
- Specify tooltip/popup positioning
- Note sticky element behavior at high zoom
- Specify multi-column collapse behavior

**Speaker notes:**
These are not new accessibility requirements. Many of these are just good design practice. But for magnification users, they shift from "nice to have" to "essential." Left-aligned layouts are easier to scan when you can only see a portion of the page. Consistent navigation means users know where to find things. Inline validation means users can see the error and the field at the same time. These are design decisions you make every day; now you have a magnification lens to evaluate them.

---

### Frame 4.4: Annotation template for magnification

**Type:** Template / reference

**Layout:** Annotation callout example

**Headline:** Including magnification requirements in annotations

**LO pill:** 2C.03

**Annotation template:**
```
Component: [Name]
Magnification consideration: [Description]

Proximity:
  Label position: [Above / Adjacent (within Xpx)]
  Error position: [Below field (within Xpx)]

Popup/tooltip:
  Position: [Above / Below trigger]
  Max distance from trigger: [Xpx]

Responsive:
  Column collapse: [When / how columns merge]
  Sticky behavior: [Compact at high zoom / hide at Xpx viewport]

Focus indicator:
  Width: [Minimum 2px]
  Color: [Contrast ratio against background]
```

**Example annotation:**
```
Component: Email input field
Magnification consideration: Label, input, and error 
  must be visible together at 4x system magnification

Proximity:
  Label position: Above input (8px gap)
  Error position: Below input (4px gap, red text)

Focus indicator:
  Width: 2px solid outline
  Color: #1864ab (5.2:1 against white)
```

**Speaker notes:**
This annotation template is optional but recommended for any component that involves form fields, tooltips, or spatial relationships. It documents the design decisions that matter for magnification users. Engineers may not test at 4x magnification, so these annotations ensure the proximity requirements are not lost in implementation.

---

# Section 5: Summary and Assessment
## Duration: 4 minutes

### Frame 5.1: Key takeaways

**Type:** Summary

**Layout:** Three-column summary

**Headline:** Three things to remember

**Column 1: Tools (2C.01)**
- Magnification is a category of tools, not one tool
- System magnification and browser zoom create different experiences
- More people use magnification than screen readers
- WCAG reflow testing does not cover system magnification users

**Column 2: Testing (2C.02)**
- Test with browser zoom (compliance) AND system magnification (experience)
- Focus on spatial proximity at 4x magnification
- Document findings with magnified viewport screenshots
- Test tooltips, forms, and focus indicators specifically

**Column 3: Design (2C.03)**
- Keep related elements close (labels above inputs)
- Use consistent, predictable layouts
- Minimize sticky elements that consume viewport space
- Specify proximity and positioning in annotations

**Speaker notes:**
Three competency areas, three columns, three takeaways each. The overarching message: designing for magnification is designing for proximity and predictability. If you take one thing from today, make it this: labels above inputs, error messages below fields, and consistent navigation placement.

---

### Frame 5.2: Connecting the Define Badge thread

**Type:** Timeline / connection diagram

**Layout:** Lesson progression visualization

**Headline:** Your Define Badge journey

**Progression:**
```
L09: Accessibility Tree → L10: Screen Reader Basics → L11: SR Navigation
                                                                 ↓
                                                    L12: Screen Magnification
                                                         (new AT category)
```

- **L09-L11** covered non-visual AT (screen readers, accessibility tree)
- **L12** introduces visual AT (magnification)
- **Next:** L13 Voice Control (motor/speech AT), then L14 High Contrast, L15 User Preferences

**Speaker notes:**
Place today in context. We have completed the screen reader trilogy (L09-L11) and started a new AT category. The Define Badge covers the full spectrum of assistive technologies. Each lesson adds another perspective for understanding how users experience your designs. Magnification was the first visual AT; voice control is next.

---

### Frame 5.3: Quiz preview

**Type:** Assessment preview

**Layout:** Quiz overview with outcome mapping

**Headline:** Knowledge check: 5 questions

**Quiz overview:**
- 5 multiple choice questions
- Covers: magnification tools, testing approaches, design patterns
- Maps to outcomes 2C.01, 2C.02, 2C.03
- Open book: use your reference materials

**Speaker notes:**
The quiz tests whether students understand the difference between browser zoom and system magnification, can identify magnification-specific design issues, and know the design principles that support magnification users. Focus on understanding, not memorization.

---

### Frame 5.4: Next lesson preview

**Type:** Preview / teaser

**Layout:** Next lesson card

**Headline:** Up next: L13, Voice Control

**Preview content:**
- Another distinct AT category: voice-based interaction
- How Voice Control, Dragon, and voice assistants interact with interfaces
- Why "Label in Name" (WCAG 2.5.3) matters for voice users
- Different user needs: motor disabilities, repetitive strain, situational use
- New competency area: 2D

**Transition callout:**
From visual AT to motor/speech AT. Each lesson in the Define Badge adds a new assistive technology perspective. The testing approach stays the same: understand the tool, test your designs, specify correct behavior.

**Speaker notes:**
Set expectations that L13 is another fresh start. Voice control is fundamentally different from both screen readers and magnification. But the method is the same: understand how users interact through the technology, then test and design accordingly. Students should feel growing confidence that the "understand, test, design" framework works for any AT category.

---

*Last updated: February 2026*
*Version: 1.0*
*For: DACE L12: Screen Magnification*
