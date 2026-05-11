# Lesson 14: Windows High Contrast Mode
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2E.01, 2E.02, 2E.03

---

## Source context

This lesson draws from established resources and training materials, particularly:
- **MDN Web Docs:** forced-colors media feature, CSS system color keywords, forced-color-adjust property
- **Adrian Roselli:** "Windows High Contrast Mode" blog posts and testing guidance
- **W3C CSS Color Adjustment Module Level 1:** forced-colors specification
- **WebAIM:** Contrast and Color Accessibility guidance
- **Microsoft:** Windows Accessibility documentation for contrast themes

Key pedagogical approach: **"See the override"**: designers experience firsthand how forced colors changes their designs, identify failure patterns, and learn resilient CSS techniques. The lesson builds from understanding the mechanism, through identifying failures, to designing solutions.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | -- |
| 1. How Forced Colors Work | 1.1-1.8 | 11 min | 2E.01 |
| 2. Common Failure Patterns | 2.1-2.8 | 12 min | 2E.02 |
| 3. Designing for Compatibility | 3.1-3.8 | 12 min | 2E.03 |
| 4. Summary and Assessment | 4.1-4.5 | 8 min | -- |

**Total frames:** 29

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#FF6B6B` (Define Badge coral)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- Include before/after screenshots showing normal vs forced colors rendering
- Use side-by-side comparisons extensively to show the impact of forced colors
- Include CSS code snippets in monospace style to show techniques

---

## Learning objective pill component

Badge 2 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light coral (#FFE3E3) at 15% opacity
- Text: 12px, medium weight, "LO 2E.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 14`
- Title: `Windows High Contrast Mode`
- Subtitle: `Designing for Forced Colors`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Lesson 14. Today we explore Windows High Contrast Mode, also called Forced Colors Mode. This is a Windows feature where the operating system overrides your carefully chosen colors with the user's preferred colors. Approximately 4% of Windows users enable this feature because they need different colors than what authors provide: users with low vision, light sensitivity, migraines, or reading difficulties. Your designs must still work when this happens.

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
| 2E.01 | Test designs in Windows High Contrast Mode and validate usability with forced colors |
| 2E.02 | Identify common failure patterns where elements disappear or become unusable |
| 2E.03 | Design components that adapt appropriately to user color preferences |

**Connection callout:**
Building on L03 (Color Contrast) from the Discover Badge. You learned about contrast ratios and color independence. Today you'll learn what happens when the user takes full control of colors by enabling forced colors mode.

**Speaker notes:**
Three outcomes: test it, break it, fix it. By the end of this lesson, you'll be able to enable forced colors, identify the common failures, and know the CSS techniques that make designs resilient. This connects directly to the color fundamentals from L03, but at a much deeper level.

---

# Section 1: How Forced Colors Work
## Duration: 11 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `How Forced Colors Work`

---

### Frame 1.2: What is Windows High Contrast Mode?

**Type:** Concept introduction

**Layout:** Left text, right screenshot

**Headline:** The system overrides your colors

**LO pill:** 2E.01

**Left side (explanation):**
Windows High Contrast Mode (renamed "Contrast themes" in Windows 11) is a system-level feature that replaces author-defined CSS colors with user-chosen system colors.

This is NOT the same as dark mode. Dark mode offers two author-controlled color schemes. Forced colors gives the USER full control over ALL colors.

**Right side (visual):**
Screenshot of Windows 11 Contrast themes settings panel showing the four built-in themes:
- High Contrast #1 (white on black)
- High Contrast #2 (black on white)
- High Contrast Black
- High Contrast White

**Speaker notes:**
This is the key concept for the entire lesson. When a user enables a contrast theme, Windows tells the browser to override your CSS color properties with the user's chosen colors. Your background-color, text color, border-color: all replaced. The user chooses their own colors. This is not dark mode where you control two palettes. This is the user saying "I need different colors than what you provide."

---

### Frame 1.3: CSS properties: overridden vs preserved

**Type:** Two-column comparison

**Layout:** Split screen, color-coded columns

**Headline:** What changes and what doesn't

**LO pill:** 2E.01

**Left column (Overridden by system):**
```
color               → CanvasText
background-color    → Canvas
border-color        → System border color
outline-color       → System outline color
box-shadow          → REMOVED entirely
text-shadow         → REMOVED entirely
SVG fill / stroke   → System colors
```

**Right column (Preserved):**
```
background-image    → Kept as-is
opacity             → Kept as-is
border-style/width  → Kept (color overridden)
outline-style/width → Kept (color overridden)
filter              → Kept as-is
<img> elements      → Kept as-is
```

**Key insight callout:**
The critical distinction: `background-color` is overridden but `background-image` is preserved. And `box-shadow` is not just recolored: it is completely removed.

**Speaker notes:**
This is the mental model. Left column: the system takes over. Right column: you keep control. The biggest surprises for designers are that box-shadow is completely removed (not recolored) and that background-image survives. This is why you see some creative workarounds using background-image, though we recommend more straightforward techniques.

---

### Frame 1.4: System color keywords

**Type:** Reference card

**Layout:** Table with color swatches

**Headline:** The system color palette

**LO pill:** 2E.01

| Keyword | Meaning | Typical HCM #1 Value |
|---------|---------|----------------------|
| `Canvas` | Page background | Black (#000000) |
| `CanvasText` | Default text | White (#FFFFFF) |
| `LinkText` | Link text | Yellow (#FFFF00) |
| `ButtonFace` | Button background | Black (#000000) |
| `ButtonText` | Button text | White (#FFFFFF) |
| `Highlight` | Selection/active background | Cyan (#00FFFF) |
| `HighlightText` | Selection/active text | Black (#000000) |
| `GrayText` | Disabled text | Green (#008000) |

**Note callout:**
These keywords are used within `@media (forced-colors: active)` CSS blocks to reference the user's chosen colors. Never hardcode color values when you could use these keywords.

**Speaker notes:**
Each user's contrast theme defines values for these keywords. When you write `color: ButtonText` inside a forced-colors media query, it resolves to whatever color the user chose for button text. The table shows typical values for High Contrast #1 (white on black), but users can customize everything. This is why you use the keywords, not specific color values.

---

### Frame 1.5: How to enable forced colors for testing

**Type:** Step-by-step guide

**Layout:** Three methods side by side

**Headline:** Three ways to test forced colors

**Method 1: Windows native**
1. Settings > Accessibility > Contrast themes
2. Select a theme from the dropdown
3. Click "Apply"
4. Or: Left Alt + Left Shift + Print Screen (toggle shortcut)

**Method 2: Chrome DevTools**
1. Open DevTools (F12)
2. Press Ctrl+Shift+P > "Show Rendering"
3. Scroll to "Emulate CSS media feature forced-colors"
4. Select "active"

**Method 3: Firefox DevTools**
1. Open DevTools (F12)
2. Accessibility panel
3. Simulate > "Forced colors"

**Recommended callout:**
Windows native testing is most accurate. Use DevTools emulation when a Windows machine is unavailable. DevTools emulates a single theme (white on black) and may not catch all issues.

**Speaker notes:**
Three options for testing. If you have Windows, use the real thing. The keyboard shortcut (Alt+Shift+PrintScreen) is the fastest way to toggle. If you're on a Mac, Chrome DevTools is your best option. It simulates the High Contrast #1 theme well enough to catch most issues, though you miss custom theme variations.

---

### Frame 1.5a: Platform applicability: Where can you test?

**Type:** Informational / clarification

**Layout:** Platform grid or table

**Headline:** Windows High Contrast Mode is Windows-only

**LO pill:** 2E.01

**Content:**

| Platform | Native WHCM? | Testing option |
|----------|--------------|----------------|
| **Windows** | Yes | Settings > Accessibility > Contrast themes, or Alt+Shift+Print Screen |
| **Mac desktop** | No | Chrome or Firefox DevTools emulation only |
| **iOS** | No | No native forced colors mode; use desktop DevTools emulation |
| **Android** | No | No native forced colors mode; use desktop DevTools emulation |

**Key callout:**
Native testing requires Windows. On Mac, iOS, and Android, use browser DevTools forced-colors emulation on a desktop machine. Emulation simulates one theme and may not catch all issues.

**Speaker notes:**
Windows High Contrast Mode is a Windows-specific feature. macOS has "Increase Contrast" in accessibility settings, but it does not override web content colors the way Windows does. iOS and Android have no equivalent. Designers on Mac or without Windows access should use Chrome DevTools emulation. For mobile designs, test in forced colors via desktop browser emulation, since mobile platforms do not support native forced colors.

---

### Frame 1.7: Demo: forced colors in action

**Type:** Before/after demonstration

**Layout:** Full-width split showing a product page

**Headline:** Before and after: forced colors

**Left side:** Screenshot of a product page in normal rendering
- Buttons with blue backgrounds, no borders
- Card components with subtle gray backgrounds
- SVG icons in brand colors
- Custom checkbox controls

**Right side:** Same page with forced colors active
- Buttons invisible (background matches page)
- Cards invisible (background matches page)
- Some icons disappeared
- Checkboxes show no checked/unchecked distinction

**Speaker notes:**
This is the "aha" moment. Same page, same browser, but the user's color preferences are active. Notice how many elements simply disappear. The buttons had no borders, so when the background color was overridden, they vanished. The cards had no borders either. The icons used hardcoded fill colors that got overridden to match the background. And the checkboxes relied on background-color for their checked state. We'll break down each of these failures in the next section.

---

### Frame 1.8: Checkpoint: How Forced Colors Work

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: How Forced Colors Work

**Body text:**
Before exploring failure patterns, verify you understand the forced colors mechanism:

**Checklist:**
- [ ] I understand that forced colors mode replaces author-defined CSS colors with user-chosen system colors
- [ ] I know which CSS properties are overridden (color, background-color, border-color, box-shadow removed) and which are preserved (background-image, opacity, img elements)
- [ ] I can name at least four system color keywords and their purposes (Canvas, CanvasText, LinkText, ButtonText)
- [ ] I know three ways to test forced colors: Windows native, Chrome DevTools, Firefox DevTools
- [ ] I understand that Windows High Contrast Mode is Windows-only, and other platforms rely on DevTools emulation

**Outcome badge:** `LO 2E.01`

**Learning outcome card (right side):**
- Body: `This checkpoint maps to Outcome 2E.01: Test designs in Windows High Contrast Mode and validate usability with forced colors.`

**Speaker notes:**
Quick self-check before we look at failures. Everyone should understand the override mechanism and know how to enable forced colors for testing. If anyone is unclear on which properties are overridden vs preserved, recap Frame 1.3 before moving on.

---

# Section 2: Common Failure Patterns
## Duration: 12 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Common Failure Patterns`

---

### Frame 2.2: Invisible buttons and controls

**Type:** Before/after comparison with "breaks" vs "done correctly"

**Layout:** Split screen with CSS annotation. Optionally use a three-panel layout: (1) Breaks in WHCM – normal, (2) Breaks in WHCM – forced colors, (3) Done correctly – forced colors.

**Headline:** When buttons disappear (and how to fix it)

**LO pill:** 2E.02

**Panel A – Code that breaks in WHCM**

**Left side (normal mode):**
Button with blue background, white text, rounded corners, no border.
```css
.button {
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
}
```

**Right side (forced colors):**
Same button: no visible boundary. Only the text "Submit" floats on the background.
```
System overrides:
background-color: #0066cc → Canvas (black)
color: white → CanvasText (white)
border: none → still none
```

**Impact callout (warning style):**
The button text is visible, but there is no visual boundary. Users cannot tell where to click, and sighted keyboard users cannot identify the interactive element.

**Panel B – Done correctly (resilient to WHCM)**

**Correct code:**
```css
.button {
  background-color: #0066cc;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 12px 24px;
}
```

**Why it works:**
- **Normal mode:** The border is transparent, so the button looks the same as the "no border" version (no visual change).
- **Forced colors:** Only `border-color` is overridden to a system color; `border-width` and `border-style` are preserved. The transparent border becomes a visible system-colored outline, so the button keeps a clear boundary.

**Visual for slide:** Side-by-side in forced colors: left = button with no border (invisible boundary); right = button with transparent border (visible boundary). Use a screenshot from the project demo page for authenticity. Demo file: repo root `whcm-button-demo.html`. No dev server needed: open the file directly in the browser (File > Open File). Then enable "Emulate CSS media feature forced-colors" in DevTools to capture screenshots. Optional: run `npm run dev` and use `http://localhost:8000/whcm-button-demo.html` if you prefer.

**Speaker notes:**
This is the most common forced-colors failure. Designers remove borders for clean aesthetics, using background-color to create the button shape. In forced colors, the background is overridden to match the page, and the border is still "none." The fix is simple: add a transparent border. Same look in normal mode, visible boundary in forced colors.

---

### Frame 2.3: Lost focus indicators

**Type:** Before/after comparison

**Layout:** Split screen with CSS annotation

**Headline:** When focus indicators vanish

**LO pill:** 2E.02

**Left side (normal mode):**
Button with a custom focus ring using box-shadow
```css
.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #0066cc;
}
```

**Right side (forced colors):**
Button focused, but no visible focus indicator
```
System overrides:
outline: none → still none
box-shadow: removed entirely
```

**Severity callout (critical style):**
HIGH SEVERITY: Users who navigate by keyboard cannot see where focus is. The entire page becomes unusable via keyboard in forced colors.

**Speaker notes:**
This is arguably the most severe forced-colors failure because it affects keyboard operability. The designer removed the default outline and replaced it with box-shadow for aesthetic reasons. In forced colors, box-shadow is completely removed, and outline: none is still honored. Zero visible focus. The fix: never use box-shadow as your only focus indicator. Always include outline.

---

### Frame 2.4: Disappearing icons

**Type:** Comparison grid

**Layout:** Icon examples in normal vs forced colors

**Headline:** When icons become invisible

**LO pill:** 2E.02

**Example grid:**

| Icon approach | Normal mode | Forced colors | Result |
|---------------|-------------|---------------|--------|
| SVG with `fill="#0066cc"` | Blue icon visible | Fill overridden to Canvas (black) on black background | Invisible |
| SVG with `fill="currentColor"` | Inherits text color | Inherits CanvasText (white) | Visible |
| CSS background-image | Brand-colored icon | Preserved (not overridden) | May have contrast issues |
| `<img>` element | Normal display | Preserved | Usually visible |

**Key insight callout:**
`currentColor` is the most reliable approach for SVG icons in forced colors mode. It automatically adapts to whatever text color the user has chosen.

**Speaker notes:**
Icons are tricky because different implementation approaches behave differently. Inline SVG with hardcoded fill values: fill gets overridden, potentially to the same color as the background. The fix is using currentColor, which inherits the forced text color. CSS background-image icons survive but may have contrast issues against the forced background. The img tag is safest but least flexible.

---

### Frame 2.5: Custom form control failures

**Type:** State comparison

**Layout:** Checkbox states in normal vs forced colors

**Headline:** When checked and unchecked look the same

**LO pill:** 2E.02

**Normal mode:**
```
[ ] Unchecked: white background, gray border
[✓] Checked: blue background, white checkmark
```

**Forced colors:**
```
[ ] Unchecked: Canvas background, system border
[ ] Checked: Canvas background, system border (identical!)
```

**Why it fails:**
The checked state relied on `background-color: blue` to indicate selection. In forced colors, `background-color` is overridden to `Canvas` for both states.

**What works:**
```
[ ] Unchecked: system border, empty interior
[✓] Checked: system border, checkmark character (✓) or thicker border
```

**Speaker notes:**
Custom form controls are a common failure because designers use background-color to indicate state. In forced colors, both states get the same background. The fix: use content-based indicators (checkmark characters, SVG with currentColor) or border changes (thicker border for checked state) rather than background-color changes.

---

### Frame 2.6: Activity: Find the failures

**Type:** Activity frame

**Layout:** Instructions with hands-on cue

**Headline:** Hands-on: Identify forced-colors failures

**Activity icon:** Magnifying glass + color wheel

**Instructions:**
1. Open the prepared test page in Chrome
2. Enable forced colors:
   - Windows: Left Alt + Left Shift + Print Screen
   - DevTools: Rendering > Emulate forced-colors: active
3. Identify as many failures as you can in 3 minutes:
   - Invisible buttons or controls
   - Missing focus indicators
   - Disappearing icons
   - Indistinguishable states (checked/unchecked, on/off)
   - Lost boundaries (cards, sections)
4. Count your findings and note the failure type for each

**Discussion prompt:**
Which failure type is most common? Which is most severe?

**Speaker notes:**
Give students 3 minutes to examine the test page. The page is intentionally built with multiple common failures. Encourage them to Tab through the page to find focus failures, not just look at static elements. After 3 minutes, discuss findings as a group. Most severe is always focus loss (keyboard operability), followed by invisible interactive elements (button/control operability).

---

### Frame 2.7: Failure severity ranking

**Type:** Priority framework

**Layout:** Severity tiers with examples

**Headline:** Prioritizing forced-colors failures

**Tier 1: Critical (keyboard/operability failures)**
- Focus indicators invisible: users cannot navigate by keyboard
- Interactive elements invisible: users cannot identify buttons, links, controls

**Tier 2: High (state/information failures)**
- Form control states indistinguishable: checked/unchecked, on/off, selected/unselected
- Information conveyed only by color: status indicators, error states

**Tier 3: Medium (boundary/visual failures)**
- Card boundaries lost: content grouping unclear
- Section separators invisible: page structure less clear

**Tier 4: Low (cosmetic)**
- Decorative elements invisible: non-functional visual embellishments
- Brand color lost: expected behavior of forced colors, not a failure

**Speaker notes:**
Not all forced-colors issues are equal. Focus and operability failures are critical: the user literally cannot use the interface. State failures are high because the user cannot determine the current state of controls. Boundary failures are medium: the content is still there, just less organized visually. Brand color changes are expected behavior, not failures.

---

### Frame 2.8: Checkpoint: Common Failure Patterns

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Common Failure Patterns

**Body text:**
Before learning the fix techniques, verify you can identify the four main failure types:

**Checklist:**
- [ ] I can identify the invisible button failure: buttons with no border disappear when background-color is overridden
- [ ] I can identify the lost focus indicator failure: box-shadow-only focus rings are completely removed
- [ ] I can identify the disappearing icon failure: SVG icons with hardcoded fill values become invisible against the forced background
- [ ] I can identify the custom form control failure: checked/unchecked states that rely on background-color become indistinguishable
- [ ] I understand the severity ranking: keyboard/operability failures are critical, state failures are high, boundary failures are medium

**Outcome badge:** `LO 2E.02`

**Learning outcome card (right side):**
- Body: `This checkpoint maps to Outcome 2E.02: Identify common failure patterns where elements disappear or become unusable.`

**Speaker notes:**
Checkpoint before the fix techniques. Students should be able to name and recognize the four main failure types and understand the severity hierarchy. If anyone is unclear on why focus loss is the most critical failure, revisit Frame 2.7 before continuing.

---

# Section 3: Designing for Compatibility
## Duration: 12 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Designing for Forced Colors Compatibility`

---

### Frame 3.2: The transparent border technique

**Type:** Solution demonstration

**Layout:** Before/after with CSS code

**Headline:** The single most impactful fix

**LO pill:** 2E.03

**The problem:**
```css
.button {
  background-color: #0066cc;
  color: white;
  border: none;
}
```
Button disappears in forced colors.

**The fix:**
```css
.button {
  background-color: #0066cc;
  color: white;
  border: 2px solid transparent;
}
```
- Normal mode: border is invisible (transparent)
- Forced colors: border-color is overridden to a system color, making the boundary visible

**Before/after comparison:**
Left: invisible button in forced colors (no border)
Right: visible button boundary in forced colors (transparent border becomes visible)

**Key insight callout:**
This single technique fixes the majority of invisible-element failures. Adding a transparent border costs nothing visually but provides a fallback boundary in forced colors.

**Speaker notes:**
This is the most valuable technique in this lesson. A transparent border is invisible in normal mode but becomes visible in forced colors because the system overrides the border-color to a system color. Recommend this as a standard practice for all interactive elements and container boundaries in your design system.

---

### Frame 3.3: Outline-based focus indicators

**Type:** Solution demonstration

**Layout:** Code comparison with visual result

**Headline:** Focus indicators that survive forced colors

**LO pill:** 2E.03

**The problem:**
```css
.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #0066cc;
}
```
Focus indicator removed in forced colors.

**The fix:**
```css
.button:focus-visible {
  outline: 3px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px #0066cc;
}
```
- Normal mode: outline is transparent, box-shadow provides the visual ring
- Forced colors: outline-color is overridden to a system color (visible), box-shadow is removed

**Result:** Focus is visible in both modes.

**Speaker notes:**
The pattern is: outline for forced colors, box-shadow for normal mode. Both are declared. In normal mode, the transparent outline is invisible and box-shadow shows. In forced colors, box-shadow is removed and outline gets a system color. It is the same "transparent becomes visible" trick as the border technique.

---

### Frame 3.4: Icons with currentColor

**Type:** Solution demonstration

**Layout:** SVG code comparison

**Headline:** Icons that adapt to any color theme

**LO pill:** 2E.03

**The problem:**
```html
<svg fill="#0066cc" ...>
  <path d="..." />
</svg>
```
Fill overridden to Canvas (background), icon invisible.

**The fix:**
```html
<svg fill="currentColor" ...>
  <path d="..." />
</svg>
```
Fill inherits the text color, which in forced colors resolves to CanvasText.

**Visual demonstration:**
Three scenarios showing the same icon:
1. Normal mode: icon inherits parent text color
2. Forced colors (white on black): icon renders in CanvasText (white)
3. Forced colors (black on white): icon renders in CanvasText (black)

**Speaker notes:**
currentColor is the SVG equivalent of the transparent border trick. It means "use whatever the text color is." In forced colors, that resolves to the user's chosen text color. Your icons automatically adapt. This should be the default approach in your design system for all monochrome icons.

---

### Frame 3.5: The forced-colors media query

**Type:** Code demonstration

**Layout:** CSS code with explanation

**Headline:** Targeting forced colors specifically

**LO pill:** 2E.03

**Syntax:**
```css
@media (forced-colors: active) {
  .custom-checkbox[aria-checked="true"] {
    border-width: 4px;
  }
  
  .custom-checkbox[aria-checked="true"]::after {
    content: "✓";
    color: CanvasText;
  }
}
```

**When to use:**
- When the transparent border and currentColor techniques are not sufficient
- For custom form control states that need explicit content-based indicators
- When you need to reference system color keywords

**When NOT to use:**
- Do not use this to restore your original author colors (defeats the purpose)
- Do not use this to hide forced-colors issues instead of fixing the underlying design

**Speaker notes:**
The media query is your last resort, not your first. Start with transparent borders, outline-based focus, and currentColor. If those do not solve the problem, use the media query for specific fixes. Inside the query, use the system color keywords (CanvasText, Canvas, etc.) rather than hardcoded colors. This ensures your styles work with any user theme.

---

### Frame 3.6: forced-color-adjust: when to opt out

**Type:** Decision framework

**Layout:** Use/avoid comparison

**Headline:** Opting out of forced colors (use sparingly)

**LO pill:** 2E.03

**The property:**
```css
forced-color-adjust: none;
```

**Appropriate uses:**
- Data visualizations with patterns/labels as alternative differentiators
- Color pickers or color swatch components
- Syntax-highlighted code blocks (with sufficient contrast)

**Inappropriate uses:**
- Buttons, links, or any interactive element
- Navigation components
- Form controls
- Any element where the user's chosen colors should be respected

**Key insight callout:**
`forced-color-adjust: none` says "I know better than the user." Use this only when you truly do, and always provide accessible alternatives alongside the preserved colors.

**Speaker notes:**
This is the nuclear option. It tells the system to leave your colors alone. The problem: the user chose forced colors for a reason. If you opt out, you are overriding their preference. Only use this when you have a genuine reason (data visualization that would be meaningless in system colors) AND you provide alternative access to the information.

---

### Frame 3.7: Activity: Fix the failures

**Type:** Activity frame

**Layout:** Instructions with hands-on cue

**Headline:** Hands-on: Apply forced-colors fixes

**Activity icon:** Wrench + color palette

**Instructions:**
Using the same test page from the failure exercise, apply fixes:

1. **Invisible buttons:** Add transparent borders
2. **Lost focus:** Switch box-shadow to outline-based focus
3. **Disappearing icons:** Change SVG fill to currentColor
4. **Custom checkboxes:** Add a forced-colors media query with content-based checked state

After each fix, toggle forced colors to verify the fix works.

**Discussion prompt:**
Which fix was simplest? Which had the biggest impact?

**Speaker notes:**
This is a hands-on coding exercise. Students modify CSS directly (or specify the CSS changes as design annotations). The transparent border fix is the simplest (one line) and has the biggest impact (fixes most invisible-element issues). Give students 4-5 minutes, then discuss results.

---

### Frame 3.8: Checkpoint: Designing for Compatibility

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Designing for Forced Colors Compatibility

**Body text:**
Before the summary and assessment, verify you know the key fix techniques:

**Checklist:**
- [ ] I can apply the transparent border technique to make invisible elements visible in forced colors
- [ ] I can implement outline-based focus indicators that survive forced colors (outline + box-shadow dual pattern)
- [ ] I know to use `currentColor` for SVG icon fills so they adapt to any user color theme
- [ ] I can use the `@media (forced-colors: active)` query with system color keywords for custom fixes
- [ ] I understand that `forced-color-adjust: none` should be used sparingly and only with accessible alternatives

**Outcome badge:** `LO 2E.03`

**Learning outcome card (right side):**
- Body: `This checkpoint maps to Outcome 2E.03: Design components that adapt appropriately to user color preferences.`

**Speaker notes:**
Final content checkpoint. Students should be able to describe and apply the four main techniques: transparent borders, outline-based focus, currentColor icons, and the forced-colors media query. They should also understand when forced-color-adjust: none is appropriate. This sets them up for the assessment.

---

# Section 4: Summary and Assessment
## Duration: 8 minutes

### Frame 4.1: Forced colors design checklist

**Type:** Summary / checklist

**Layout:** Actionable checklist

**Headline:** Your forced colors design checklist

**Checklist items:**
- [ ] All interactive elements have visible boundaries (transparent border technique)
- [ ] Focus indicators use `outline`, not only `box-shadow`
- [ ] SVG icons use `currentColor` for fill/stroke
- [ ] Form control states are communicated through content/borders, not only background-color
- [ ] Data visualizations have non-color differentiators (patterns, labels)
- [ ] `forced-color-adjust: none` is used sparingly and only with accessible alternatives

**Key insight callout:**
These techniques are not just forced-colors fixes. They make your designs more robust for everyone: better keyboard visibility, clearer component boundaries, more resilient state indicators.

**Speaker notes:**
This checklist is your takeaway. Add it to your design review process. Most of these items are one-line CSS changes that your engineering team can implement quickly. The design decision is specifying that these techniques are required, which is your annotation.

---

### Frame 4.2: Connecting to the Define Badge thread

**Type:** Timeline / connection diagram

**Layout:** Lesson progression visualization

**Headline:** Your Define Badge journey: visual AT

**Progression:**
```
L12: Magnification → L13: Voice Control → L14: Forced Colors
                                                    ↓
                                       "Color is author-suggested,
                                        not author-controlled"
```

- **L12** taught you how magnification users zoom into your designs
- **L13** taught you how voice users interact through speech
- **L14** taught you how forced-colors users override your color choices

**Speaker notes:**
Three different AT categories, one common principle: users customize your design to meet their needs. Magnification changes the viewport, voice control changes the input method, and forced colors changes the visual rendering. In every case, your design must still work. Next lesson broadens this concept to all user preferences.

---

### Frame 4.3: Quiz preview

**Type:** Assessment preview

**Layout:** Quiz overview with outcome mapping

**Headline:** Knowledge check: 5 questions

**Quiz overview:**
- 5 multiple choice questions
- Covers: forced colors mechanics, failure identification, CSS fix techniques
- Maps to outcomes 2E.01, 2E.02, 2E.03
- Open book: use your reference materials

**Speaker notes:**
The quiz tests whether students understand which CSS properties are affected, can identify failure patterns, and know the correct fix techniques. The questions use realistic scenarios with actual CSS properties.

---

### Frame 4.4: Next lesson preview

**Type:** Preview / teaser

**Layout:** Next lesson card

**Headline:** Up next: L15, User Preferences and System Settings

**Preview content:**
- Broadening from Windows High Contrast to all user accessibility preferences
- `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`
- System font size settings and text zoom
- How to test with modified user preferences across platforms
- New competency area: 2F

**Transition callout:**
Forced colors is one of many user preferences that affect how designs render. L15 covers the full spectrum of user accessibility settings and how designers should respect them.

**Speaker notes:**
L14 focused on one specific preference: forced colors. L15 broadens to the full set of user accessibility preferences: motion, color scheme, contrast, text size. The principle is the same: users customize their experience, and your designs must respect those customizations. Students should feel confident about forced colors specifically and ready to generalize the concept.

---

### Frame 4.5: References and resources

**Type:** References slide

**Layout:** Bulleted list of links and short descriptions

**Headline:** References and resources

**Content:**

- **Digital Accessibility Guide (Adobe):** High Contrast Mode  
  https://accessibility.corp.adobe.com/docs/visual_design/high_contrast_mode/
- **MDN:** `forced-colors` media feature, system color keywords, `forced-color-adjust`  
  https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors  
  https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors  
  https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust
- **W3C CSS Color Adjustment Module Level 1:** Forced colors specification  
  https://www.w3.org/TR/css-color-adjust-1/#forced-colors-section
- **Adrian Roselli:** Windows High Contrast Mode (blog and testing)  
  https://adrianroselli.com/tag/high-contrast-mode
- **WebAIM:** Contrast and Color Accessibility  
  https://webaim.org/articles/contrast/
- **Microsoft:** Windows accessibility (contrast themes)  
  https://support.microsoft.com/en-us/windows/change-contrast-in-windows-2f9a7f3e-3f90-4812-8b89-1e2f2c7a2b2c

**Speaker notes:**
Bookmark the Digital Accessibility Guide for internal reference. Use MDN and the W3C spec when implementing or reviewing CSS. Adrian Roselli's posts are excellent for real-world testing. WebAIM and Microsoft round out contrast and platform context.

---

*Last updated: February 2026*
*Version: 1.0*
*For: DACE L14: Windows High Contrast Mode*
