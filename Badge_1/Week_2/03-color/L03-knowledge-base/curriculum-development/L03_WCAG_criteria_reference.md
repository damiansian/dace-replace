# L03: Color - WCAG Success Criteria Reference for Designers

**Purpose:** Practical guide to WCAG color requirements for design professionals  
**Audience:** DACE Discover Badge learners  
**Focus:** What designers need to know and do

---

## Quick Reference Card

| Success Criterion | Level | What to Test | Minimum Ratio | Exceptions |
|-------------------|-------|--------------|---------------|------------|
| **1.4.3 Contrast (Minimum)** | AA | Regular text | 4.5:1 | Large text (24px/18.5px bold): 3:1 |
| **1.4.3 Contrast (Minimum)** | AA | Large text | 3:1 | Logos, inactive controls, decorative |
| **1.4.11 Non-text Contrast** | AA | UI components | 3:1 | Inactive controls |
| **1.4.11 Non-text Contrast** | AA | Graphical objects | 3:1 | Logos, photos, decorative |
| **1.4.1 Use of Color** | A | Information conveyed | N/A (not a ratio) | Must have non-color indicator |

---

## SC 1.4.1: Use of Color (Level A)

### The Rule in Plain Language
Color cannot be the only way you show information, indicate an action, prompt a response, or distinguish a visual element.

### What This Means for Designers

**You must provide a non-color indicator in addition to color when:**
- Marking required form fields
- Showing error states
- Distinguishing links in body text
- Showing status (success/warning/error)
- Indicating selected or active states
- Conveying meaning in charts or graphs

**Non-color indicators include:**
- Icons or symbols
- Text labels
- Underlines (for links)
- Patterns or textures
- Shape differences
- Sufficient luminance difference (3:1 contrast between colors) *plus other factors*

### Common Failures (F13, F73, F81)

**F81: Required fields shown only in red**
```
❌ FAIL: "Email (label in red)"
✓ PASS: "Email * (label with asterisk, red color optional)"
✓ PASS: "Email (required) (text label, red color optional)"
```

**F73: Links without visual distinction beyond color**
```
❌ FAIL: Blue text in paragraph, no underline
✓ PASS: Blue text with underline
✓ PASS: Blue text with 3:1+ contrast vs surrounding text AND underline on hover
```

**F13: Images conveying color-coded information without text alternative**
```
❌ FAIL: Bar chart with red/green bars, alt="Sales chart"
✓ PASS: Bar chart with red/green bars, alt="Sales chart showing Mary exceeded quota (green) while Tom fell short (red)"
✓ PASS: Bar chart with patterns + color, clear legend
```

### The 3:1 Luminance Exception

If two colors differ by 3:1 or more in *luminance* (lightness), that counts as an additional visual distinction **for some uses**:
- ✓ Links with 3:1 contrast to surrounding text (plus underline on hover)
- ✓ Buttons with sufficient luminance difference from background

However, 3:1 luminance alone is NOT sufficient for:
- ❌ Knowing whether an outline is green (valid) or red (invalid)
- ❌ Distinguishing categories by color in charts
- ❌ Understanding color-coded status without labels

**When in doubt:** Add a non-color indicator. It's simpler and always works.

### Testing with Stark

1. **Grayscale simulation:** Run Stark's grayscale simulation. Can you still identify all information?
2. **If something disappears or becomes unclear in grayscale:** You have a color-only failure.
3. **Propose a fix:** Add icon, text label, pattern, or underline.
4. **Verify the fix:** Run grayscale simulation again.

### Adobe Spectrum Examples

**Status indicators:**
- ✓ Success: Green checkmark icon + color
- ✓ Warning: Orange triangle icon + color  
- ✓ Error: Red circle-X icon + color

**Required fields:**
- ✓ Asterisk (*) + optional red color
- ✓ "(required)" text label + optional red color

**Links:**
- ✓ Body text links: underline + color
- ✓ Navigation links: context makes them obvious (no underline needed)

### WCAG Understanding Document
[Understanding SC 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

---

## SC 1.4.3: Contrast (Minimum) (Level AA)

### The Rule in Plain Language
Text and images of text must have a contrast ratio of at least:
- **4.5:1** for regular text
- **3:1** for large text (24px or larger, or 18.5px bold or larger)

### What This Means for Designers

**Measure contrast between:**
- Text color and its background
- Foreground and background of images of text

**Font size thresholds (use Figma/design tool pixel size):**
- Regular text: < 24px (or < 18.5px bold) → **4.5:1 required**
- Large text: ≥ 24px (or ≥ 18.5px bold) → **3:1 required**

### What's Exempt from Contrast Requirements

**You do NOT need to test contrast for:**
- **Inactive/disabled UI components** (grayed-out buttons, disabled inputs)
- Decorative text (pure visual design, no information)
- Text in logos or brand names
- Text that's part of an inactive user interface component
- Text that's not visible to anyone
- Text in a picture that contains significant other visual content

### Critical Point: Disabled Buttons

From WCAG Understanding docs:
> "User Interface Components that are not available for user interaction (e.g., a disabled control in HTML) are not required to meet contrast requirements."

**What this means:**
- ✓ Active "Submit" button: Must meet 3:1 (button) and 4.5:1 or 3:1 (text)
- ✓ Disabled "Submit" button: No contrast requirement
- ✓ Focus indicator on active button: Must meet 3:1 (see SC 1.4.11)

**Why:** Disabled controls are visible but not operable. WCAG recognizes they serve a different purpose (showing what exists but isn't currently available) and exempts them.

### Testing with Stark

**For text:**
1. Select text element in Figma
2. Open Stark > Contrast Checker
3. Stark shows foreground and background colors
4. Check if ratio meets 4.5:1 (or 3:1 for large text)
5. If fail: Adjust text color or background color
6. Retest until pass

**Common scenarios:**
- White text on light gray: Often fails
- Gray text on white: Check if it's large enough for 3:1, otherwise needs 4.5:1
- Text on images: Test against darkest (for light text) or lightest (for dark text) part of image
- Text on gradients: Test against worst-case background color

### Contrast Ratio Formula (for reference)

You don't need to calculate by hand (use Stark), but understanding helps:

```
Contrast Ratio = (L1 + 0.05) / (L2 + 0.05)
Where L1 = relative luminance of lighter color
      L2 = relative luminance of darker color
```

Ratios range from 1:1 (no contrast, same color) to 21:1 (maximum contrast, black on white).

### Common Failures (F24, F83)

**F24: Specifying foreground without background (or vice versa)**
```css
/* ❌ FAIL: What if user has black background in browser? */
body { color: black; }

/* ✓ PASS: Both specified */
body { color: black; background: white; }
```

**F83: Background images without sufficient contrast**
```
❌ FAIL: Dark text over photo that's sometimes dark
✓ PASS: Dark text over photo with white overlay (making photo faint)
✓ PASS: Text with sufficient contrast halo/outline
```

### Adobe Spectrum Standards

Adobe's design system enforces WCAG AA:
- Body text (14px): 4.5:1 minimum
- Heading text (varies): Check size, often 3:1 acceptable for large headings
- Spectrum colors tested for contrast compliance
- Use Spectrum tokens to ensure compliant color combinations

### WCAG Understanding Document
[Understanding SC 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

---

## SC 1.4.11: Non-text Contrast (Level AA)

### The Rule in Plain Language
Visual information required to identify user interface components and graphical objects must have a contrast ratio of at least **3:1** against adjacent colors.

### What This Means for Designers

**Test contrast for:**
- **UI component boundaries:** Button borders, input field borders, checkbox/radio button outlines
- **UI component states:** Focus indicators, hover states, active/pressed states
- **Icons:** Especially functional icons (not decorative)
- **Graphical objects:** Charts, diagrams, infographics where shape/boundary conveys meaning
- **Adjacent color boundaries:** When boundary between two colors conveys information

**Measure 3:1 contrast between:**
- Button border and its background
- Input field border and page background
- Focus indicator and the background it appears on
- Icon and its background
- Adjacent segments of a pie chart (or use borders)

### What's Exempt from Non-text Contrast

**You do NOT need to test 3:1 contrast for:**
- **Inactive/disabled controls** (same exemption as SC 1.4.3)
- Decorative graphics
- Logos
- Photos or other images where contrast would fundamentally change the content
- Gradients within a single control (if the essential boundary is clear)

### Button Boundaries: How to Measure

This is where designers often get confused. Here's the method:

**Scenario 1: Button with border**
```
┌─────────────┐
│   Submit    │  Button fill: White
└─────────────┘  Border: Gray (#767676)
Background: Light gray (#F5F5F5)

Test: Gray border (#767676) vs Background (#F5F5F5) = Must be 3:1+
```

**Scenario 2: Button without border (fill color contrast)**
```
┌─────────────┐
│   Submit    │  Button fill: Blue
└─────────────┘  No border
Background: White

Test: Blue fill vs White background = Must be 3:1+
```

**Scenario 3: Disabled button**
```
┌─────────────┐
│   Submit    │  Button fill: Light gray
└─────────────┘  Disabled state
Background: White

Test: NOT REQUIRED (disabled = exempt)
```

### Focus Indicators

Focus indicators are critical for keyboard users and must meet 3:1 contrast:

**Test focus indicator against:**
1. The background it appears on when NOT focused
2. The component itself in its focused state

**Example:**
```
Button (not focused): White fill, gray border
Button (focused): White fill, blue focus ring

Test: Blue focus ring vs gray background behind button = 3:1+
```

### Graphical Objects

**Charts and diagrams:**
- Adjacent segments must have 3:1 contrast, OR
- Use borders between segments with 3:1 contrast, OR  
- Use patterns + color

**Icons:**
- Functional icons (required for understanding) must meet 3:1
- Decorative icons (redundant with text) are exempt

### Testing with Stark

1. Select the UI component boundary (border, outline) in Figma
2. Open Stark > Contrast Checker
3. Note the component color (border color)
4. Note the adjacent background color
5. Verify 3:1+ ratio
6. If fail: Adjust border color or add sufficient contrast border

**Pro tip:** For buttons, test in all states (default, hover, focus, active). Some states might pass while others fail.

### Sufficient Techniques (G207, G209)

**G207: Ensuring 3:1 contrast for icons**
- Test icon color against background
- If icon is on a gradient, test against least-contrasting background area
- If icon is still recognizable where it lacks contrast, it may pass

**G209: Provide sufficient contrast at boundaries**
- When adjacent colors don't have 3:1, add a border with 3:1 to both
- Example: Light blue and medium blue pie segments → add white border

### Adobe Spectrum Standards

- Spectrum components have built-in focus indicators meeting 3:1
- Button borders tested for 3:1 compliance
- Use Spectrum focus ring tokens for consistent, accessible focus states
- Check Spectrum documentation for specific component contrast values

### WCAG Understanding Document
[Understanding SC 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

---

## Common Designer Questions

### Q: Do disabled buttons need to meet contrast requirements?
**A:** No. Inactive UI components are explicitly exempt from both SC 1.4.3 (text contrast) and SC 1.4.11 (component contrast). Per WCAG: "User Interface Components that are not available for user interaction (e.g., a disabled control in HTML) are not required to meet contrast requirements."

### Q: What about placeholder text in form fields?
**A:** Placeholder text should meet 4.5:1 contrast (or 3:1 if large). However, placeholders are not reliable substitutes for labels because they disappear when users type. Always provide a visible label.

### Q: Can I use color alone for links if they have 3:1 contrast with surrounding text?
**A:** Almost, but not quite. Links need 3:1 contrast with surrounding text AND an additional non-color indicator on hover/focus (like an underline). The 3:1 contrast helps but doesn't fully satisfy SC 1.4.1 on its own.

### Q: Do I need to test every single CVD type (protanopia, deuteranopia, tritanopia)?
**A:** No. For design testing, grayscale simulation is sufficient. It tests whether you're relying on hue (color) alone. If your design works in grayscale, it will work for all CVD types.

### Q: What's the difference between SC 1.4.1 and SC 1.4.3?
**A:** 
- **SC 1.4.1 (Use of Color):** Don't use color *alone* to convey information. Add icons, text, patterns, etc.
- **SC 1.4.3 (Contrast):** Text must have sufficient *luminance* difference (lightness) from its background.
- They're related but distinct. You can pass one and fail the other.

### Q: How do I measure contrast on a gradient background?
**A:** Test against the worst-case scenario:
- For light text: Test against the darkest part of the gradient
- For dark text: Test against the lightest part of the gradient
- If it passes at the worst case, it passes everywhere

### Q: What about text over photographs?
**A:** You have three options:
1. Add a semi-transparent overlay to darken/lighten the photo
2. Add a halo or shadow to the text
3. Ensure the photo is light/dark enough in all areas where text appears
4. Test against the worst-case area of the photo

---

## Testing Workflow Summary

### Step 1: Text Contrast (SC 1.4.3)
1. Identify all text elements
2. Check font size (< 24px = 4.5:1, ≥ 24px = 3:1)
3. Use Stark contrast checker
4. Document failures with specific measurements
5. Skip disabled text (exempt)

### Step 2: UI Component Contrast (SC 1.4.11)
1. Identify all interactive components
2. Test button borders, input borders, focus indicators
3. Measure boundaries against backgrounds
4. Use Stark contrast checker (3:1 minimum)
5. Skip disabled components (exempt)

### Step 3: Color-Only Information (SC 1.4.1)
1. Run grayscale simulation (Stark)
2. Identify information that disappears or becomes unclear
3. Check: required fields, errors, links, status indicators
4. Propose non-color alternatives
5. Verify with grayscale simulation again

### Step 4: Document Findings
- List each failure with:
  - Element description
  - Current contrast ratio (if applicable)
  - Required ratio
  - WCAG SC violated
  - Recommended fix

---

## Resources for Further Learning

### WCAG Understanding Documents
- [Understanding SC 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [Understanding SC 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Understanding SC 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

### WCAG Techniques
- **G14:** Ensuring that information conveyed by color differences is also available in text
- **G18:** Ensuring that a contrast ratio of at least 4.5:1 exists between text and background
- **G145:** Ensuring that a contrast ratio of at least 3:1 exists for large text
- **G207:** Ensuring that a contrast ratio of 3:1 is provided for icons
- **G209:** Provide sufficient contrast at the boundaries between adjoining colors

### WCAG Failures to Avoid
- **F13:** Text alternative doesn't include color-coded information
- **F73:** Links not visually evident without color vision
- **F81:** Required or error fields identified using color only
- **F24:** Specifying foreground without background (or vice versa)
- **F83:** Background images without sufficient contrast

### Tools
- **Stark (Figma plugin):** Primary tool for DACE course
  - Contrast checker
  - Grayscale simulation
  - Color vision simulation (optional)
- **WebAIM Contrast Checker:** Online tool for spot checking
- **Colour Contrast Analyser (TPGi):** Desktop app for detailed testing

### Adobe Resources
- Design Accessibility Checklist (Color section)
- Adobe Spectrum Design System (contrast standards)
- Stark Figma Plugin Guide (Adobe internal)

---

*Last updated: December 2025*  
*Version: 1.0*  
*For: DACE L03: Color*









