# Lesson 03: Color
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge Level:** Discover  
**Delivery:** In-person (synchronous)  
**Duration:** 60 minutes  
**Outcomes Covered:** 1C.01, 1C.02, 1C.03

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 0.1–0.2 | 2 min | — |
| 1. Why Color Matters | 1.1–1.4 | 8 min | All |
| 2. Contrast Requirements | 2.1–2.8 | 15 min | 1C.01 |
| 3. Color as Information | 3.1–3.6 | 12 min | 1C.02 |
| 4. Color Vision Simulation | 4.1–4.6 | 10 min | 1C.03 |
| 5. Testing with Stark | 5.1–5.6 | 10 min | All |
| 6. Project & Wrap-up | 6.1–6.3 | 3 min | — |

**Total frames:** 40

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- In-person format: Balance text and visuals for live instruction
- Keep speaker notes comprehensive (this is a 60-minute in-person session with instructor)

---

## Learning objective pill component

Same specs as L01 and L02:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light blue (#E6F2FF) at 15% opacity
- Text: 12px, medium weight, "LO 1C.0X"
- Links to Frame 0.2

---

## Frame 0: Title & objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 03`
- Title: `Color`
- Subtitle: `Ensuring everyone can perceive information and controls`
- Badge level indicator: `Discover Badge`
- Duration: `60 minutes`
- Format indicator: `In-Person`

**Speaker notes:**
Welcome to Lesson 03. This is our third in-person session. Today we're covering one of the most common accessibility issues designers encounter: color. By the end of this hour, you'll know how to test contrast, identify when color alone is being used to convey information, and use simulation tools to verify your designs work for users with color vision deficiencies.

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
| 1C.01 | Apply WCAG color contrast requirements: Test and specify contrast ratios meeting WCAG 2.2 AA for text, images of text, and user interface components |
| 1C.02 | Identify color-only information failures: Recognize when color is used as the only visual means of conveying information and propose non-color alternatives |
| 1C.03 | Test designs with color vision simulation: Use grayscale simulation to verify that information conveyed with color remains perceivable to users with color vision deficiencies |

**Speaker notes:**
Three focused outcomes today. First, you'll learn the contrast ratios WCAG requires and how to test them. Second, you'll identify situations where color alone is conveying information—a Level A requirement. Third, you'll use grayscale simulation to test your designs, which is simpler and more effective than testing every type of color vision deficiency.

---

# Section 1: Why color matters
## Duration: 8 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Why Color Matters`

---

### Frame 1.2: Who's affected by color accessibility

**Type:** Statistics and impact

**Layout:** Three-column layout with statistics

**Headline:** Color accessibility affects millions of users

**Column 1: Low Vision**
- Icon: Eye with partial shading
- Statistic: `15%`
- Label: `of working-age adults`
- Description: Experience some form of vision impairment including reduced contrast sensitivity

**Column 2: Color Vision Deficiency**
- Icon: Color spectrum with muted section
- Statistic: `8% males, 0.5% females`
- Label: `~300 million people globally`
- Description: Have difficulty distinguishing certain colors (red-green most common)

**Column 3: Situational Disabilities**
- Icon: Sun/bright light symbol
- Statistic: `Everyone`
- Label: `in certain contexts`
- Description: Glare on screens, low battery mode (grayscale), bright sunlight reducing contrast

**Callout box:**
This isn't a small edge case. Color accessibility helps a significant portion of your users every day.

**Learning Objective Pill:** `LO 1C.01` `LO 1C.02` `LO 1C.03`

**Speaker notes:**
Before we dive into the technical requirements, let's ground ourselves in why this matters. 15% of working-age adults have some form of vision impairment. That includes low contrast sensitivity, which makes text hard to read. About 8% of males and half a percent of females have color vision deficiencies—that's roughly 300 million people globally. And situational disabilities affect everyone: have you ever tried to read your phone screen in bright sunlight? Or had your phone switch to grayscale in low battery mode? Color accessibility helps all of these people.

---

### Frame 1.3: The three WCAG requirements

**Type:** Overview diagram

**Layout:** Three cards showing the requirements

**Headline:** Three WCAG success criteria govern color in design

**Card 1:**
- Badge: `SC 1.4.3` `Level AA`
- Title: `Contrast (Minimum)`
- Icon: Two overlapping circles showing lightness difference
- Description: Text and images of text must have sufficient lightness difference from their background
- Ratio: `4.5:1 regular text, 3:1 large text`

**Card 2:**
- Badge: `SC 1.4.11` `Level AA`
- Title: `Non-text Contrast`
- Icon: Button with border highlighted
- Description: UI components and graphical objects must have sufficient contrast
- Ratio: `3:1 for controls and graphics`

**Card 3:**
- Badge: `SC 1.4.1` `Level A`
- Title: `Use of Color`
- Icon: Information symbol with color and non-color versions
- Description: Color cannot be the only way information is conveyed
- Requirement: `Must have non-color indicator`

**Speaker notes:**
WCAG has three success criteria that directly govern how we use color. SC 1.4.3 is about text contrast—making sure text is readable. SC 1.4.11 is about UI components—making sure buttons and controls are visible. And SC 1.4.1 is about not using color alone to convey information. We'll cover each in detail today.

---

### Frame 1.4: What we'll learn today

**Type:** Lesson roadmap

**Layout:** Horizontal timeline/flow

**Visual flow (left to right):**

**Step 1: Contrast**
- Icon: Contrast checker tool
- Label: `Test contrast ratios`
- Subtext: Text, large text, and UI components

**Step 2: Color-Only Information**
- Icon: Required field indicator with and without asterisk
- Label: `Identify failures`
- Subtext: When color alone isn't enough

**Step 3: Simulation**
- Icon: Grayscale toggle
- Label: `Test with simulation`
- Subtext: Verify designs work without color

**Step 4: Stark Workflow**
- Icon: Stark logo/tool
- Label: `Put it all together`
- Subtext: Complete testing workflow

**Headline:** A practical, tool-based approach

**Speaker notes:**
Here's our path today. First, we'll learn the contrast requirements and how to test them with Stark's contrast checker. Second, we'll identify situations where color alone is conveying information and how to fix them. Third, we'll use grayscale simulation to verify our designs work for users with color vision deficiencies. Finally, we'll put it all together in a complete testing workflow you can use immediately.

---

# Section 2: Contrast requirements
## Duration: 15 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Contrast Requirements`

---

### Frame 2.2: SC 1.4.3 text contrast rules

**Type:** Rule explanation with visual examples

**Layout:** Two-column comparison

**Headline:** Text contrast depends on size

**Left column: Regular Text**
- Visual example: "Sample Text" at 16px
- Font size: `< 24px or < 18.5px bold`
- Contrast ratio required: `4.5:1`
- Why: Smaller text needs more contrast to be readable

**Right column: Large Text**
- Visual example: "Sample Text" at 28px
- Font size: `≥ 24px or ≥ 18.5px bold`
- Contrast ratio required: `3:1`
- Why: Larger text has thicker strokes, easier to read at lower contrast

**Formula callout:**
```
Contrast Ratio = (L1 + 0.05) / (L2 + 0.05)
Where L1 = lighter color, L2 = darker color
Range: 1:1 (no contrast) to 21:1 (max contrast)
```

**Practical note box:**
Don't calculate by hand—use Stark's contrast checker. It does the math for you.

**Learning Objective Pill:** `LO 1C.01`

**Speaker notes:**
Let's start with text contrast. WCAG requires 4.5 to 1 for regular text and 3 to 1 for large text. What counts as large? 24 pixels or larger, or 18.5 pixels bold or larger. Why the difference? Larger text has thicker strokes, making it easier to read even with less contrast. There's a formula for calculating contrast ratios, but you don't need to memorize it. Stark will calculate it for you. What you need to remember is 4.5 for regular text, 3 for large text.

---

### Frame 2.3: Visual examples of contrast

**Type:** Good/bad comparison grid

**Layout:** 2x2 grid showing pass/fail examples

**Headline:** Contrast in practice

**Example 1 (Fail):**
- Visual: Light gray text (#999999) on white (#FFFFFF)
- Label: `2.8:1 — Fails`
- Font: 16px (regular text)
- Required: 4.5:1
- Red X indicator

**Example 2 (Pass):**
- Visual: Dark gray text (#595959) on white (#FFFFFF)
- Label: `7.0:1 — Passes`
- Font: 16px (regular text)
- Required: 4.5:1
- Green checkmark indicator

**Example 3 (Pass):**
- Visual: Light gray text (#959595) on white (#FFFFFF)
- Label: `3.4:1 — Passes`
- Font: 28px (large text)
- Required: 3:1
- Green checkmark indicator

**Example 4 (Fail):**
- Visual: White text (#FFFFFF) on light blue (#A4C8E1)
- Label: `2.1:1 — Fails`
- Font: 16px (regular text)
- Required: 4.5:1
- Red X indicator

**Key insight callout:**
Context matters. The same color combination can pass or fail depending on font size.

**Speaker notes:**
Let's see this in action. Light gray on white at 16 pixels: 2.8 to 1. That fails—needs to be 4.5. Darker gray on white: 7 to 1. That passes easily. Now here's where it gets interesting: that light gray at 28 pixels is 3.4 to 1. It passes because it's large text—only needs 3 to 1. Same colors, different size, different result. And this white on light blue? 2.1 to 1. Way too low, needs 4.5. This is why you have to test every color combination in your design.

---

### Frame 2.4: SC 1.4.11 UI component contrast

**Type:** Concept explanation with diagrams

**Layout:** Component anatomy breakdown

**Headline:** UI components need 3:1 contrast for the information needed to identify them

**Visual: Button anatomy**
```
┌──────────────────┐
│     Submit       │  ← Button text (test with SC 1.4.3)
└──────────────────┘
     ↑
   What identifies the button? Test that. (SC 1.4.11: 3:1)
```

**What to test:**
We test the **visible information required to understand the purpose and function** of the control. This is sometimes, but not always, the border or fill.

**Example scenarios:**

**Scenario 1: Icon-only button with no fill**
- Test: Icon vs page background = Must meet 3:1
- Why: The icon is what identifies the button

**Scenario 2: Text button with fill color**
- Test: Text vs button fill = Must meet 4.5:1 or 3:1 (SC 1.4.3)
- Don't test: Button fill vs page background (text identifies the button)

**Scenario 3: Icon button with fill color**
- Test: Icon vs button fill = Must meet 3:1
- Don't test: Button fill vs page background (icon identifies the button)

**Scenario 4: Button with only border (no text/icon visible)**
- Test: Border vs page background = Must meet 3:1
- Why: The boundary is what identifies the button

**Key callout:**
Ask: "If I removed the fill/border, could I still understand what this button does?" If yes, the fill/border are incidental and don't need to meet contrast requirements against the page background.

**Focus indicators:** Always test outline color vs background (3:1 required)

**Learning Objective Pill:** `LO 1C.01`

**Speaker notes:**
Now let's talk about UI components. SC 1.4.11 requires 3 to 1 contrast, but the key question is: what needs 3 to 1 contrast? We test the visible information required to understand the purpose and function of the control. For an icon-only button with no fill, we test the icon against the page background—3 to 1. For a text button with a fill, we test the text against the fill—the fill itself doesn't need to contrast with the page because the text is what identifies the button. Same with an icon on a filled button—test the icon against the fill, not the fill against the page. The critical test is: if I removed the fill or border, could I still understand what this button does? If yes, then the fill and border are incidental. Focus indicators always need 3 to 1 against their background. This is about identifying what information the user actually needs to perceive the control.

---

### Frame 2.5: The disabled button exception

**Type:** Rule clarification with examples

**Layout:** Comparison showing exemption

**Headline:** Inactive controls are exempt from contrast requirements

**Left side (Active button):**
- Visual: Enabled "Submit" button with clear borders
- State indicator: `Active`
- Label: `Must meet contrast requirements`
- Checklist:
  - ✓ Button text: 4.5:1 or 3:1 (depending on size)
  - ✓ Button border: 3:1 vs background
  - ✓ Focus indicator (when focused): 3:1

**Right side (Disabled button):**
- Visual: Grayed-out "Submit" button
- State indicator: `Disabled`
- Label: `Exempt from contrast requirements`
- Note: `Per WCAG: "User Interface Components that are not available for user interaction are not required to meet contrast requirements"`

**Why the exemption:**
Disabled controls serve a different purpose—they show that an option exists but is not currently available. WCAG recognizes this and explicitly exempts them.

**What you still need:**
- Disabled state should be programmatically identified (engineering responsibility)
- Disabled controls are still in reading order for screen readers (they're announced as "dimmed")

**Important callout:**
Don't test disabled buttons for contrast. It's not required and will waste your time.

**Learning Objective Pill:** `LO 1C.01`

**Speaker notes:**
This is a critical point that confuses a lot of designers: disabled buttons do NOT need to meet contrast requirements. WCAG explicitly exempts inactive UI components. Why? Because disabled controls serve a different purpose. They show users what exists but isn't currently available. An active Submit button must have sufficient contrast so users can find it and click it. A disabled Submit button just needs to indicate "this is here but you can't use it yet." Now, disabled buttons should still be programmatically marked as disabled for assistive technology, but that's engineering's job. Your job as a designer is to test active states, not disabled states.

---

### Frame 2.6: Measuring button boundaries

**Type:** How-to demonstration

**Layout:** Step-by-step visual guide

**Headline:** How to measure UI component contrast

**Method 1: Icon-only button with no fill**

Step 1: Identify what conveys the button's purpose
```
   ⚙️
Settings Icon  Background: #F5F5F5
No fill/border
```

Step 2: Select icon color in Stark: `#767676`

Step 3: Select background color: `#F5F5F5`

Step 4: Stark shows ratio: `3.2:1 — Passes` ✓

**Method 2: Text button with fill color**

Step 1: Identify what conveys the button's purpose
```
████████████
█  Submit  █  Fill: #0078D4
████████████  Text: #FFFFFF
```

Step 2: Select text color in Stark: `#FFFFFF`

Step 3: Select button fill: `#0078D4`

Step 4: Stark shows ratio: `4.6:1 — Passes` ✓ (SC 1.4.3, not 1.4.11)

Note: The button fill does NOT need to meet 3:1 with the page background because the text identifies the button.

**Method 3: Icon on button with fill**

Step 1: Identify what conveys the button's purpose
```
████████████
█    ▶️    █  Fill: #0078D4
████████████  Icon: #FFFFFF
```

Step 2: Select icon color in Stark: `#FFFFFF`

Step 3: Select button fill: `#0078D4`

Step 4: Stark shows ratio: `4.6:1 — Passes` ✓ (needs 3:1)

Note: The button fill does NOT need to meet 3:1 with the page background because the icon identifies the button.

**The Key Test:**
Ask yourself: "If I removed the fill/border, could I still understand what this button does?"
- If YES → The fill/border is incidental. Don't test it against the page background.
- If NO → The fill/border is essential. Test it against the page background (3:1).

**Speaker notes:**
Let me show you exactly how to measure this in practice. First, identify what information is needed to understand the button's purpose. For an icon-only button with no fill, test the icon against the page background—3 to 1. For a text button with a fill, test the text against the button fill—that's SC 1.4.3, not 1.4.11. The button fill itself doesn't need to meet 3 to 1 with the page because the text is sufficient. Same with an icon on a filled button—test the icon against the fill. The critical question is always: if I removed the fill or border, would I still know what this button does? If yes, don't test the fill or border against the page. If no, then you do need to test it.

---

### Frame 2.7: Contrast testing practice

**Type:** Interactive exercise

**Layout:** Three scenarios for audience to evaluate

**Headline:** Practice: Which of these pass?

**Scenario 1:**
- Visual: Dark text "Learn More" (16px) on white button with medium gray border
- Page background: Light gray
- Question: What needs testing?
- Answer reveal on click:
  - Text vs button fill: 4.5:1 required (SC 1.4.3)
  - Border vs page: NOT required (the text identifies the button)

**Scenario 2:**
- Visual: Grayed-out "Continue" button (disabled state)
- Question: What needs testing?
- Answer reveal on click:
  - Nothing! Disabled controls are exempt.

**Scenario 3:**
- Visual: Blue icon on blue button fill, sitting on white page
- Question: What needs testing?
- Answer reveal on click:
  - Icon vs button fill: 3:1 required (SC 1.4.11)
  - Button fill vs page: NOT required (the icon identifies the button)

**Callout:**
Understanding what to test is half the battle. The other half is using Stark to measure it.

**Learning Objective Pill:** `LO 1C.01`

**Speaker notes:**
Let's practice. Scenario 1: Dark text on a white button with a gray border. What do you test? You test the text against the white button fill—that's SC 1.4.3, needs 4.5 to 1. But do you test the border against the page? No! The text is sufficient to identify the button. The border is incidental. Scenario 2: A grayed-out disabled button. What do you test? Nothing. It's exempt. Don't waste time testing disabled states. Scenario 3: A blue icon on a blue button. You test the icon against the button fill—needs 3 to 1. But not the button fill against the page, because the icon is sufficient. Scenario 4: An icon-only button with no fill. Now you DO test the icon against the page background—needs 3 to 1, because that's the only thing identifying the button. The key is always asking: what information does the user need to identify this control?

---

### Frame 2.8: Checkpoint - Contrast requirements

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 Page 24 pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Contrast requirements`

**Checklist:**
- [ ] I can test text contrast and apply the 4.5:1 (regular) and 3:1 (large) ratios
- [ ] I can test UI component contrast using the 3:1 requirement
- [ ] I can identify what visual information needs contrast testing for buttons
- [ ] I can recognize that disabled controls are exempt from contrast requirements

**Learning outcome card (right):**
- Icon: Lightbulb (circular, top of card)
- Title: `Learning Outcome`
- Body: `This checkpoint maps to Outcome 1C.01: Apply WCAG color contrast requirements: Test and specify contrast ratios meeting WCAG 2.2 AA for text, images of text, and user interface components.`

**Learning Objective Pill:** `LO 1C.01`

**Speaker notes:**
Take a moment to self-assess. You should now be able to test both text and UI component contrast using Stark. If any item feels unclear, revisit the previous frames in this section.

---

# Section 3: Color as information
## Duration: 12 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Color as Information`

---

### Frame 3.2: SC 1.4.1 use of color

**Type:** Rule explanation

**Layout:** Principle statement with examples

**Headline:** Color cannot be the only way you convey information

**Rule statement (large, emphasized):**
"Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element."
— WCAG 2.2 SC 1.4.1 (Level A)

**What this means:**
Whenever you use color to show something, you must ALSO provide a non-color indicator.

**Examples of "conveying information":**
- Required form fields
- Error messages
- Link text in paragraphs
- Status indicators (success, warning, error)
- Selected or active states
- Data in charts and graphs
- Categories or groupings

**The test:**
If you removed all color and showed your design in grayscale, could users still get all the same information?

**Learning Objective Pill:** `LO 1C.02`

**Speaker notes:**
Now we shift from contrast to how we use color to convey meaning. SC 1.4.1, Use of Color, is a Level A requirement—meaning it's fundamental. The rule is simple: color cannot be the only way you show information. If you're using color to indicate something, you must also provide a non-color way to convey the same thing. Think required fields marked only in red. Error messages that turn red but don't say "error." Links that are only distinguishable by color. These are all failures. The test is simple: if you turned your design grayscale, could users still get the information? If not, you have a problem.

---

### Frame 3.3: Common use of color failures

**Type:** Failure pattern gallery

**Layout:** Three columns showing common failures

**Headline:** Where color-only failures happen

**Failure 1: Required Fields (F81)**
- Visual before: "Email" label in red
- Visual after (grayscale): "Email" label (looks same as optional fields)
- Problem: Required status lost in grayscale
- Solution: Add asterisk (*) or "(required)" text label
- Adobe Spectrum approach: Asterisk + optional red color

**Failure 2: Links without Underlines (F73)**
- Visual before: Blue text in paragraph, no underline
- Visual after (grayscale): Text looks like regular paragraph text
- Problem: Links not identifiable
- Solution: Add underline (or 3:1 contrast + underline on hover)
- Adobe Spectrum approach: Underline for body links

**Failure 3: Status Indicators**
- Visual before: "Active" in green, "Inactive" in red
- Visual after (grayscale): Both look identical
- Problem: Status not distinguishable
- Solution: Add icons (✓ for active, X for inactive) or text labels
- Adobe Spectrum approach: Icon + color

**Learning Objective Pill:** `LO 1C.02`

**Speaker notes:**
Let's look at the most common failures. First, required fields shown only in red. In grayscale, they look like optional fields. The fix: add an asterisk or the word "required." Adobe Spectrum does this: asterisk plus red color. Second, links without underlines. Blue text in a paragraph. In grayscale, it's just gray text—no way to tell it's clickable. The fix: underline it. Spectrum underlines body links for this reason. Third, status indicators. Green for active, red for inactive. In grayscale, they're the same. The fix: add icons or text labels. Spectrum uses a checkmark icon for success, an X for error, plus color.

---

### Frame 3.4: Solutions: non-color indicators

**Type:** Solution framework

**Layout:** Grid of solution types

**Headline:** Ways to supplement color

**Solution 1: Icons or Symbols**
- Visual: ✓ checkmark, ⚠ warning triangle, ⨉ error X
- Use case: Status indicators, alerts, validation
- Example: Success message with green checkmark icon + green color

**Solution 2: Text Labels**
- Visual: "(required)", "Error:", "New", "Active"
- Use case: Required fields, messages, badges, states
- Example: "Email (required)" with asterisk + red color

**Solution 3: Underlines or Borders**
- Visual: Underlined text, outlined elements
- Use case: Links, selected items, focused elements
- Example: Link with underline + blue color

**Solution 4: Patterns or Textures**
- Visual: Stripes, dots, hatching
- Use case: Charts, graphs, data visualization
- Example: Pie chart with patterns AND colors

**Solution 5: Shape Differences**
- Visual: Circle vs square, filled vs outline
- Use case: Icons, data points, selectors
- Example: Selected radio button (filled circle) vs unselected (empty circle)

**Key principle:**
Use color to enhance understanding, but don't rely on it alone.

**Speaker notes:**
So what are your options for non-color indicators? Icons: checkmark for success, triangle for warning, X for error. Text labels: the word "required" or "error" or "new." Underlines: especially for links. Patterns: stripes or dots in charts. Shape differences: filled vs outline. The key is that color enhances the meaning but doesn't carry it alone. A green checkmark is better than just green text. An underlined blue link is better than just blue text. This is additive—you're not removing color, you're adding another layer of information.

---

### Frame 3.5: The 3:1 luminance exception

**Type:** Advanced concept explanation

**Layout:** Two-column comparison

**Headline:** When luminance difference can help (but isn't always sufficient)

**Concept:**
If two colors have 3:1 or greater contrast in luminance (lightness), that counts as an additional visual distinction for SOME uses.

**When 3:1 luminance IS sufficient:**

**Example 1: Links**
- Link text: Dark blue (#0000EE)
- Surrounding text: Black (#000000)
- Contrast: 3.2:1
- Plus: Underline on hover
- Result: Passes SC 1.4.1 ✓

**Example 2: Buttons**
- Button: Light blue
- Background: White
- Contrast: 3.5:1
- Result: Visually distinct ✓

**When 3:1 luminance is NOT sufficient:**

**Example 1: Status Meaning**
- Green outline (valid) vs Red outline (invalid)
- Even with 3:1 luminance, users can't determine WHICH is valid
- Need: Text label or icon
- Result: Luminance alone fails ✗

**Example 2: Chart Categories**
- Blue region vs Orange region
- Even with 3:1 luminance, users can't determine what each represents
- Need: Labels or patterns
- Result: Luminance alone fails ✗

**Rule of thumb:**
If the specific hue (red vs green, blue vs orange) carries the meaning, 3:1 luminance isn't enough. You need text, icons, or patterns.

**When in doubt:** Add a non-color indicator. It always works.

**Learning Objective Pill:** `LO 1C.02`

**Speaker notes:**
There's a nuance here worth understanding. If two colors have 3 to 1 or greater luminance contrast—that is, one is significantly lighter than the other—that can serve as an additional visual distinction for some uses. For example, links that are dark blue next to black text with 3 to 1 contrast, plus an underline on hover. That works. But—and this is important—if the specific hue carries meaning, luminance alone isn't sufficient. A green outline meaning "valid" and a red outline meaning "invalid" might have 3 to 1 luminance contrast, but users still can't tell which is which without seeing the colors. You need a text label or icon. When in doubt, add a non-color indicator. It's simpler and always works.

---

### Frame 3.6: Checkpoint - Color as information

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 Page 24 pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Color as information`

**Checklist:**
- [ ] I can identify when color alone is used to convey information
- [ ] I can propose non-color alternatives (icons, text, underlines, patterns)
- [ ] I can explain SC 1.4.1 Use of Color requirements
- [ ] I can apply the grayscale test to verify information is still perceivable

**Learning outcome card (right):**
- Icon: Lightbulb (circular, top of card)
- Title: `Learning Outcome`
- Body: `This checkpoint maps to Outcome 1C.02: Identify color-only information failures: Recognize when color is used as the only visual means of conveying information and propose non-color alternatives.`

**Learning Objective Pill:** `LO 1C.02`

**Speaker notes:**
Take a moment to self-assess. You should now be able to spot color-only failures and recommend fixes. The key test: if you removed all color, would users still get the same information?

---

# Section 4: Color vision simulation
## Duration: 10 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Color Vision Simulation`

---

### Frame 4.2: Why grayscale simulation is sufficient

**Type:** Conceptual explanation

**Layout:** Comparison visual + explanation

**Headline:** One simulation covers all color vision deficiencies

**Concept:**
Color vision deficiencies affect how people perceive hue (red vs green, blue vs yellow). Grayscale removes all hue information, leaving only luminance (lightness).

**Visual comparison:**

**Full Color View:**
- Traffic light: Red, Yellow, Green (distinct hues)

**Protanopia (Red-Blind):**
- Traffic light: Muted colors, red/green look similar

**Deuteranopia (Green-Blind):**
- Traffic light: Different muted colors, red/green look similar

**Tritanopia (Blue-Blind):**
- Traffic light: Blue/yellow look similar

**Grayscale (All Hue Removed):**
- Traffic light: Three shades of gray
- If these are distinguishable, the design works for all CVD types

**Key insight:**
If your design works in grayscale, it works for ALL types of color vision deficiency. You don't need to test protanopia, deuteranopia, and tritanopia separately.

**Why this works:**
- CVD types affect hue perception differently
- Grayscale is the most stringent test (removes ALL hue)
- If you pass grayscale, you pass all CVD types
- More efficient for designers

**Learning Objective Pill:** `LO 1C.03`

**Speaker notes:**
Let's talk about color vision simulation. There are three main types of color vision deficiency: protanopia, deuteranopia, and tritanopia. They affect how people see reds, greens, and blues. But here's the thing: you don't need to test all three separately. Grayscale removes all hue information—it's the most stringent test. If your design works in grayscale, it will work for all types of color vision deficiency. This is hugely practical. Instead of running three separate simulations, you run one: grayscale. If information is clear in grayscale, you're good. This is the method we teach in DACE, and it's the method you should use in your daily work.

---

### Frame 4.3: Color vision deficiency types (brief context)

**Type:** Reference information

**Layout:** Three-column overview

**Headline:** Understanding CVD types (for context)

**Note at top:**
You don't need to test these separately—grayscale covers all. This is for your general knowledge.

**Column 1: Protanopia (Red-Blind)**
- Prevalence: ~1% of males
- Affect: Red appears darker, difficult to distinguish red from green
- Example: Red/green traffic lights may look similar

**Column 2: Deuteranopia (Green-Blind)**
- Prevalence: ~1% of males (most common CVD)
- Affect: Green appears more red, difficult to distinguish red from green
- Example: Green text on red background is unreadable

**Column 3: Tritanopia (Blue-Blind)**
- Prevalence: <0.01% (very rare)
- Affect: Blue appears greener, difficult to distinguish blue from yellow
- Example: Blue and yellow may look similar

**Total prevalence:** ~8% of males, ~0.5% of females have some form of CVD

**Bottom callout:**
Again: You don't need separate simulations. Grayscale testing covers all of these.

**Speaker notes:**
For context, here are the three main types. Protanopia affects red perception. Deuteranopia affects green—this is the most common type. Tritanopia affects blue, but it's very rare. Together, about 8% of males and half a percent of females have some form of CVD. But again, you don't need to memorize these or test them separately. Grayscale covers all of them. I'm showing you this so you understand the landscape, but your practical takeaway is: use grayscale simulation.

---

### Frame 4.4: Using Stark's grayscale simulation

**Type:** Tool demonstration

**Layout:** Step-by-step walkthrough with screenshots

**Headline:** How to test with grayscale simulation

**Step 1: Open Stark in Figma**
- Screenshot: Stark plugin panel
- Action: Select your design or frame

**Step 2: Navigate to Vision Simulator**
- Screenshot: Stark menu with "Vision Simulator" option
- Action: Click "Vision Simulator"

**Step 3: Select Achromatopsia/Grayscale**
- Screenshot: Simulation options with "Achromatopsia" highlighted
- Action: Click "Achromatopsia" (complete color blindness/grayscale)
- Note: This is also called "Grayscale" in some tools

**Step 4: Review your design**
- Screenshot: Design shown in grayscale
- Check: Can you still identify all information?
  - Required fields visible?
  - Links distinguishable?
  - Status indicators clear?
  - Interactive controls visible?

**Step 5: Document findings**
- Screenshot: Design with annotations marking issues
- Action: Note any information that becomes unclear
- Next: Propose non-color alternatives

**Step 6: Toggle off to return to color**
- Screenshot: Stark with simulation deactivated
- Action: Click to turn off simulation

**Pro tip:**
Run grayscale simulation early and often. Don't wait until designs are "done."

**Learning Objective Pill:** `LO 1C.03`

**Speaker notes:**
Let me walk you through using Stark's simulation. Open Stark in Figma, select your design, and go to Vision Simulator. Choose Achromatopsia—that's complete color blindness, which shows your design in grayscale. Now look at your design. Can you still see everything? Are required fields obvious? Can you tell which text is a link? Are status indicators clear? Can you see the button boundaries? If anything becomes unclear or invisible, you have a color-only problem. Document what you find, propose fixes, and then run the simulation again to verify. Pro tip: don't wait until your design is done to test. Run grayscale simulation early and often.

---

### Frame 4.5: Before and after examples

**Type:** Case study comparison

**Layout:** Two sets of before/after

**Headline:** Grayscale simulation reveals issues

**Example 1: Required Field Indicators**

Before (Color):
- "Email" label in red
- "Password" label in red
- "Phone" label in black

Before (Grayscale):
- All labels look the same
- Can't tell which are required

After (Color):
- "Email *" label in red
- "Password *" label in red
- "Phone" label in black

After (Grayscale):
- Asterisks clearly indicate required fields
- Problem solved ✓

**Example 2: Status Tags**

Before (Color):
- "Active" in green box
- "Pending" in yellow box
- "Inactive" in red box

Before (Grayscale):
- Three gray boxes, hard to distinguish
- Status unclear

After (Color):
- "Active ✓" in green box with checkmark icon
- "Pending ⏱" in yellow box with clock icon
- "Inactive ⨉" in red box with X icon

After (Grayscale):
- Icons make status clear
- Problem solved ✓

**Callout:**
Grayscale simulation is your validation tool. Use it to verify every fix works.

**Speaker notes:**
Let's see this in action. Example 1: Required fields shown in red. Run grayscale simulation and they all look the same—can't tell which are required. Add asterisks. Run simulation again. Now it's obvious which fields are required, even without color. Problem solved. Example 2: Status tags using only color. In grayscale, they're three gray boxes that are hard to distinguish. Add icons: checkmark for active, clock for pending, X for inactive. Run simulation again. Now status is clear without color. Grayscale simulation is your validation tool. Use it before and after every fix to make sure your solution works.

---

### Frame 4.6: Checkpoint - Color vision simulation

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 Page 24 pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Color vision simulation`

**Checklist:**
- [ ] I can explain why grayscale simulation covers all color vision deficiency types
- [ ] I can use Stark's Vision Simulator (Achromatopsia) to test designs
- [ ] I can identify information that becomes unclear in grayscale
- [ ] I can verify fixes by running grayscale simulation again

**Learning outcome card (right):**
- Icon: Lightbulb (circular, top of card)
- Title: `Learning Outcome`
- Body: `This checkpoint maps to Outcome 1C.03: Test designs with color vision simulation: Use grayscale simulation to verify that information conveyed with color remains perceivable to users with color vision deficiencies.`

**Learning Objective Pill:** `LO 1C.03`

**Speaker notes:**
Take a moment to self-assess. Grayscale simulation is your primary validation tool for color-only failures. If any item feels unclear, revisit Frames 4.2-4.5.

---

# Section 5: Testing with stark
## Duration: 10 minutes

### Frame 5.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `5`
- Title: `Testing with Stark`

---

### Frame 5.2: Complete testing workflow

**Type:** Process diagram

**Layout:** Vertical workflow with decision points

**Headline:** Your end-to-end color accessibility workflow

**Step 1: Text Contrast**
- Action: Select all text elements
- Tool: Stark > Contrast Checker
- Test: 4.5:1 for regular text, 3:1 for large text
- Document: Any failures with current ratio and required ratio
- Skip: Disabled/inactive text

**Step 2: UI Component Contrast**
- Action: Select button borders, input borders, focus indicators
- Tool: Stark > Contrast Checker
- Test: 3:1 for component boundaries vs background
- Document: Any failures
- Skip: Disabled/inactive components

**Step 3: Grayscale Simulation**
- Action: View entire design in grayscale
- Tool: Stark > Vision Simulator > Achromatopsia
- Check: Is all information still perceivable?
- Document: Elements that become unclear
- Skip: Nothing—test everything

**Step 4: Identify Color-Only Failures**
- Action: Review grayscale findings
- List: Required fields, links, status indicators, errors, selections
- For each: Propose non-color alternative (icon, text, underline, pattern)

**Step 5: Verify Fixes**
- Action: Apply proposed fixes
- Tool: Stark > Vision Simulator again
- Check: Do fixes work in grayscale?
- Repeat: Until all information is clear

**Step 6: Document for Engineering**
- Create: Blueline annotations with Stark (building on L01 skills)
- Include: Contrast ratios, color-only fixes, WCAG SC references
- Handoff: Clear specifications for implementation

**Learning Objective Pills:** `LO 1C.01` `LO 1C.02` `LO 1C.03`

**Speaker notes:**
Let's put it all together. Here's your complete workflow. Step 1: Test text contrast with Stark's contrast checker. Check every text element that's active. Step 2: Test UI component contrast. Button borders, input borders, focus indicators—all need 3 to 1. Step 3: Run grayscale simulation on your entire design. This is quick—just toggle it on and scan your design. Step 4: Identify what becomes unclear in grayscale. Make a list. Step 5: Propose and apply fixes. Then run grayscale simulation again to verify. Step 6: Document everything for engineering using Stark's annotation tools, just like you learned in Lesson 1. This is your repeatable process for every design.

---

### Frame 5.3: Live demo: testing a button

**Type:** Instructor demonstration

**Layout:** Screen recording or step-by-step walkthrough

**Headline:** Let's test a real button together

**Component to test:**
A primary action button with the following specs:
- Text: "Get Started" (16px, white)
- Button fill: Blue (#0078D4)
- Button border: Darker blue (#005A9E)
- Page background: Light gray (#F5F5F5)
- Focus state: 2px blue outline (#0066CC)

**Test sequence:**

**Test 1: Button text contrast (SC 1.4.3)**
- Open Stark > Contrast Checker
- Select text: White (#FFFFFF)
- Select background: Blue (#0078D4)
- Result: 4.6:1 — Passes ✓ (needs 4.5:1)

**Test 2: Button border contrast (SC 1.4.11)**
- Select border: Darker blue (#005A9E)
- Select page background: Light gray (#F5F5F5)
- Result: 5.2:1 — Passes ✓ (needs 3:1)

**Test 3: Focus indicator contrast (SC 1.4.11)**
- Select focus outline: Blue (#0066CC)
- Select page background: Light gray (#F5F5F5)
- Result: 5.8:1 — Passes ✓ (needs 3:1)

**Test 4: Grayscale simulation (SC 1.4.1)**
- Toggle Stark > Vision Simulator > Achromatopsia
- Check: Is button still clearly a button?
- Result: Yes, border and text are visible ✓

**Conclusion: Button passes all tests**

**Speaker notes:**
Let me demonstrate this live. Here's a button: "Get Started" in white text on a blue background with a darker blue border. First test: white text on blue button. Stark shows 4.6 to 1. That passes—needs 4.5. Second test: the darker blue border against the light gray page. 5.2 to 1. Passes—needs 3. Third test: focus indicator. That blue outline on the light gray background is 5.8 to 1. Passes. Fourth: grayscale simulation. Toggle it on. Is the button still clearly a button? Yes, I can see the border and the text. This button passes all tests. This is what you'll do for every component in your designs.

---

### Frame 5.4: Common issues to flag

**Type:** Troubleshooting guide

**Layout:** Issue + solution pairs

**Headline:** Issues you'll encounter and how to fix them

**Issue 1: Gray text on white background fails**
- Problem: 3.2:1, needs 4.5:1
- Fix: Darken the gray to at least #595959 (which gives 7:1)
- Or: Increase font size to 24px to use 3:1 threshold

**Issue 2: Light borders on light backgrounds**
- Problem: Light gray border (#CCCCCC) on white (#FFFFFF) = 1.6:1
- Fix: Darken border to #767676 (3.0:1) or darker

**Issue 3: Placeholder text too light**
- Problem: Light gray placeholders = 2.5:1
- Fix: Darken to meet 4.5:1 (but remember: placeholders aren't substitutes for labels)

**Issue 4: Required fields only in red**
- Problem: Becomes invisible in grayscale
- Fix: Add asterisk (*) or "(required)" text label

**Issue 5: Links without underlines**
- Problem: Only blue color distinguishes them
- Fix: Add underline (always) or ensure 3:1 contrast + underline on hover

**Issue 6: Testing disabled states**
- Problem: Wasting time on exempt elements
- Fix: Skip disabled states entirely; focus on active states

**Issue 7: Color-coded status without icons**
- Problem: Green/yellow/red badges look identical in grayscale
- Fix: Add icons (✓ ⚠ ⨉) or text labels

**Callout:**
Most issues have straightforward fixes. The hard part is finding them—that's why you test.

**Speaker notes:**
Here are the most common issues you'll find. Gray text on white failing 4.5 to 1: darken the gray or make the text larger. Light borders: darken them to at least 3 to 1. Placeholder text too light: darken it. Required fields only in red: add an asterisk. Links without underlines: add them. Testing disabled states: stop—they're exempt. Color-coded status: add icons. Most fixes are simple. The hard part is finding the issues, which is why systematic testing with Stark is so important.

---

### Frame 5.5: Documenting for engineering

**Type:** Annotation example

**Layout:** Design + Stark annotation panel

**Headline:** Specify color requirements in Blueline annotations

**Left side (Design):**
- Button with annotation marker

**Right side (Stark panel):**
```
Annotations

Button                         [Component]

1  primary_button_get_started

Colors
  Text:        #FFFFFF (4.6:1 vs button — passes SC 1.4.3)
  Button fill: #0078D4 (4.6:1 vs page — passes SC 1.4.11)
  Border:      #005A9E (5.2:1 vs page — passes SC 1.4.11)
  Focus ring:  #0066CC (5.8:1 vs page — passes SC 1.4.11)

Note: All contrast ratios meet WCAG 2.2 AA.
      Button tested in grayscale simulation — remains
      identifiable (SC 1.4.1).
```

**Another example (failure documented):**

```
Text Element                   [Text]

2  body_paragraph_text

Color: #999999 on #FFFFFF

Issue: Current contrast is 2.8:1. Fails SC 1.4.3.
       Regular text (16px) requires 4.5:1.

Recommendation: Change text color to #595959 (7.0:1)
                or darker to meet WCAG 2.2 AA.
```

**Callout:**
Use the annotation workflow you learned in L01. Add color testing results to your specifications.

**Speaker notes:**
Finally, document your findings for engineering. Use Stark's Blueline annotation feature, which you learned in Lesson 1. For each component, list the colors and the contrast ratios. Note which WCAG success criteria they meet. If something fails, document the current ratio, the required ratio, and your recommended fix. For example, "Current contrast is 2.8 to 1, fails SC 1.4.3, requires 4.5 to 1. Recommend changing text color to #595959 which gives 7 to 1." Be specific. Give engineers exact hex values and the rationale. This is part of your design handoff—it's as important as specifying font sizes and spacing.

---

### Frame 5.6: Checkpoint - Complete color testing workflow

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 Page 24 pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Complete color testing workflow`

**Checklist:**
- [ ] I can execute the full six-step color accessibility testing workflow
- [ ] I can document contrast findings in Blueline annotations
- [ ] I can identify and fix color-only information failures
- [ ] I can validate all fixes using grayscale simulation

**Learning outcome card (right):**
- Icon: Lightbulb (circular, top of card)
- Title: `Learning Outcome`
- Body: `This checkpoint reinforces all three color outcomes: 1C.01 (Contrast), 1C.02 (Color-only information), and 1C.03 (Color vision simulation).`

**Learning Objective Pills:** `LO 1C.01` `LO 1C.02` `LO 1C.03`

**Speaker notes:**
Final checkpoint before your project. You now have a complete workflow for testing color accessibility. Use this process on every design, starting early and testing often.

---

# Section 6: Project & wrap-up
## Duration: 3 minutes

### Frame 6.1: Project overview

**Type:** Assignment preview

**Layout:** Project details card

**Headline:** Applied Skill Project: Color Audit

**Project description:**
You'll receive a design mockup with intentional color accessibility issues. Use Stark to conduct a complete color audit and document your findings.

**Deliverables:**
1. Text contrast test results (all text elements)
2. UI component contrast test results (buttons, inputs, borders)
3. Color-only information identification (from grayscale simulation)
4. Annotated Figma file with fixes and specifications

**What you'll use:**
- Stark > Contrast Checker
- Stark > Vision Simulator (Achromatopsia/Grayscale)
- Stark > Blueline Annotations

**Rubric preview:**

| Criterion | Outcome | Points |
|-----------|---------|--------|
| Text Contrast Testing | 1C.01 | 4 |
| UI Component Contrast | 1C.01 | 4 |
| Color-Only Identification | 1C.02 | 4 |
| **Total** | | **12** |

**Points scale:**
- 4 pts (Exceeds Mastery): All issues found, accurate measurements, excellent recommendations
- 3 pts (Meets Mastery): All major issues found, correct measurements, good recommendations
- 2 pts (Near Mastery): Most issues found, some measurement errors, basic recommendations
- 1 pt (Below Mastery): Significant issues missed, measurement errors, inadequate recommendations

**Due:** Complete before L04: Forms & Errors

**Speaker notes:**
Your project for this lesson is a Color Audit. You'll get a design mockup with intentional color issues. Your job is to find them all using Stark. Test all text contrast. Test all UI component contrast. Run grayscale simulation and identify color-only information failures. Then annotate the design with your findings and recommendations. The rubric gives you 4 points for text contrast testing, 4 for UI component testing, and 4 for color-only identification. This maps directly to the three outcomes you learned today. Complete this before the next lesson.

---

### Frame 6.2: Resources

**Type:** Resource links

**Layout:** Organized list

**Headline:** Resources for reference

**WCAG Understanding Documents:**
- [Understanding SC 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [Understanding SC 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Understanding SC 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

**WCAG Techniques:**
- [G14: Ensuring information conveyed by color is also available in text](https://www.w3.org/WAI/WCAG22/Techniques/general/G14)
- [G18: Ensuring 4.5:1 contrast for text](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)
- [G207: Ensuring 3:1 contrast for icons](https://www.w3.org/WAI/WCAG22/Techniques/general/G207)

**Adobe Resources:**
- Design Accessibility Checklist (Color section)
- Adobe Spectrum Design System (Color tokens and standards)
- Stark Figma Plugin Guide

**Tools:**
- Stark (Figma plugin) — Primary tool for DACE
- WebAIM Contrast Checker (online) — For quick checks
- Colour Contrast Analyser (desktop app) — Alternative tool

**Up Next:**
Lesson 04: Forms & Errors (Online)

**Speaker notes:**
All of these resources are linked on the lesson page in Canvas. The WCAG Understanding documents go deeper into the requirements. The techniques show you specific implementation methods. Adobe's Design Accessibility Checklist summarizes what you need to check. And Stark's plugin guide walks through all the tool features. You don't need to read everything right now—these are reference materials for when you need them.

---

### Frame 6.3: Questions & next steps

**Type:** Q&A slide

**Layout:** Simple centered layout

**Headline:** Questions?

**Subtext:**
Next steps:
1. Complete the Knowledge Check quiz (3 questions)
2. Start your Color Audit project
3. Use Stark's testing workflow on your current work

**Key takeaways:**
- **4.5:1** for regular text, **3:1** for large text
- **3:1** for UI component boundaries
- Disabled controls are **exempt**
- Color alone is never enough—add non-color indicators
- **Grayscale simulation** covers all CVD types

**Contact/support:**
[Instructor contact info]
[Slack channel]

**Speaker notes:**
What questions do you have? [Address questions]

Remember your key takeaways: 4.5 to 1 for regular text, 3 to 1 for large text and UI components. Disabled controls don't need testing. Never use color alone—add icons, text, underlines. And use grayscale simulation to test for all color vision deficiencies.

After this session, complete the quiz—three questions, one per outcome. Then start your Color Audit project. And most importantly, start using this workflow in your daily design work. Open Stark when you start designing, not just at the end. Test early, test often. Color accessibility becomes second nature when you make it part of your process.

See you online for Lesson 4: Forms & Errors. That lesson builds on what you learned today—we'll cover error identification and form field requirements in more depth.

---

# Appendix: Frame count summary

| Section | Frames |
|---------|--------|
| 0. Title & Objectives | 2 |
| 1. Why Color Matters | 4 |
| 2. Contrast Requirements | 8 (+1 checkpoint) |
| 3. Color as Information | 6 (reformatted checkpoint) |
| 4. Color Vision Simulation | 6 (+1 checkpoint) |
| 5. Testing with Stark | 6 (+1 checkpoint) |
| 6. Project & Wrap-up | 3 |
| **Total** | **40** |

---

# Appendix: Visual asset needs

**Reusable from L01/L02:**
- Learning Objective Pill component
- Section divider template
- Good/bad comparison layout pattern

**Checkpoint slides (reuse from L01):**
- Checkpoint slide template (match L01 Page 24 layout)
- Lightbulb icon for outcome cards
- Light gray rounded rectangle card component
- Empty checkbox icons for checklist items

**New for L03:**
- Contrast comparison grids (pass/fail examples)
- Button anatomy diagrams (borders, boundaries)
- Before/after grayscale simulation comparisons
- Color vision deficiency type illustrations
- Stark UI mockups (Contrast Checker, Vision Simulator)
- Status indicator icon set (✓ ⚠ ⨉)
- Required field indicators (asterisk, text label)
- Link underline examples
- Pie chart with patterns + color
- Form with required field annotations
- Button states diagram (default, hover, focus, disabled)

**Interactive elements:**
- Poll/quiz components for practice scenarios
- Reveal/hide elements for answers
- Annotation callout boxes

**Adobe examples needed:**
- Real Adobe product screenshots showing:
  - Spectrum button components
  - Spectrum status indicators
  - Spectrum form field patterns
  - Spectrum color tokens in use

**Stark screenshots:**
- Stark contrast checker interface
- Stark vision simulator interface
- Stark annotation panel for color specs

---

*End of build guide*

