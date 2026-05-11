# Lesson 03: Color

**Module:** 1C | **Badge:** Discover | **Duration:** 60 minutes in-person + project

Color is one of the most powerful—and most commonly misused—tools in design. When used well, color enhances understanding and guides attention. When used poorly, it creates barriers that exclude millions of users.

In this lesson, you'll learn WCAG color requirements, how to test contrast ratios, identify when color alone is conveying information, and use simulation tools to verify your designs work for users with color vision deficiencies.

---

## The Explainer

Get an overview of color accessibility before the live session.

<div class="video-embed">
  <iframe 
    src="https://player.vimeo.com/video/VIMEO_ID_HERE" 
    width="640" 
    height="360" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen
    title="Color Accessibility Explainer">
  </iframe>
</div>

---

## Learning Objectives

By the end of this lesson, you will be able to:

| ID | Objective | Type |
|----|-----------|------|
| 1C.01 | **Apply WCAG color contrast requirements:** Test and specify contrast ratios meeting WCAG 2.2 AA for text, images of text, and user interface components | Skill |
| 1C.02 | **Identify color-only information failures:** Recognize when color is used as the only visual means of conveying information and propose non-color alternatives | Skill |
| 1C.03 | **Test designs with color vision simulation:** Use grayscale simulation to verify that information conveyed with color remains perceivable to users with color vision deficiencies | Skill |

---

## IAAP Body of Knowledge Connection

This lesson maps to competencies recognized by the International Association of Accessibility Professionals (IAAP). Understanding how DACE content connects to IAAP certification areas helps you see the bigger picture and prepares you for future professional credentials.

<div class="bok-connection">

### IAAP WAS (Web Accessibility Specialist) Alignment

| DACE Outcome | IAAP BOK Domain | IAAP Competency Area |
|--------------|-----------------|----------------------|
| 1C.01 | Content Accessibility | Color Contrast Requirements |
| 1C.02 | Content Accessibility | Use of Color to Convey Information |
| 1C.03 | Testing and Validation | Color Vision Deficiency Testing |

### Related WCAG Success Criteria

The color accessibility competency maps to three WCAG 2.2 success criteria:

- **1.4.1 Use of Color (Level A):** Color cannot be the only way information is conveyed
- **1.4.3 Contrast (Minimum) (Level AA):** Text must have sufficient lightness difference from background
- **1.4.11 Non-text Contrast (Level AA):** UI components and graphical objects must have sufficient contrast

### Why This Matters for Your Career

Color accessibility appears frequently on IAAP certification exams. Questions about contrast ratios, color-only information failures, and testing methods are common. Mastering these skills in the Discover Badge prepares you for:

- IAAP WAS (Web Accessibility Specialist)
- IAAP CPWA (Certified Professional in Web Accessibility)
- Future IAAP partnership credentials through DACE

</div>

---

## Key Concepts

### The Three WCAG Color Requirements <span class="outcome-pill">LO 1C.01</span> <span class="outcome-pill">LO 1C.02</span>

WCAG has three success criteria that govern how we use color in design:

**SC 1.4.3: Contrast (Minimum) — Level AA**

Text and images of text must have sufficient contrast:
- **4.5:1** for regular text (< 24px or < 18.5px bold)
- **3:1** for large text (≥ 24px or ≥ 18.5px bold)

**SC 1.4.11: Non-text Contrast — Level AA**

User interface components and graphical objects must have sufficient contrast:
- **3:1** for UI component boundaries (buttons, inputs, focus indicators)
- **3:1** for graphical objects (icons, charts, diagrams)

**SC 1.4.1: Use of Color — Level A**

Color cannot be the only way you convey information:
- Required form fields need more than color (add asterisk or text label)
- Links need more than color (add underline)
- Status indicators need more than color (add icons or text)
- Chart categories need more than color (add labels or patterns)

---

### Who's Affected by Color Accessibility

**15% of working-age adults** have some form of vision impairment, including reduced contrast sensitivity that makes text difficult to read.

**~300 million people globally** (approximately 8% of males and 0.5% of females) have color vision deficiencies that affect how they perceive hue differences.

**Everyone** experiences situational disabilities: glare on screens, low battery mode (grayscale), bright sunlight reducing contrast.

This isn't a small edge case. Color accessibility helps a significant portion of your users every day.

---

### Contrast Requirements Explained <span class="outcome-pill">LO 1C.01</span>

**Why Different Ratios?**

Larger text with thicker strokes is easier to read at lower contrast. That's why WCAG allows 3:1 for large text (24px or larger, or 18.5px bold or larger) but requires 4.5:1 for regular text.

**What About Disabled Buttons?**

Inactive/disabled UI components are explicitly exempt from contrast requirements per WCAG:

> "User Interface Components that are not available for user interaction (e.g., a disabled control in HTML) are not required to meet contrast requirements."

Don't waste time testing disabled buttons—focus on active states.

**How to Measure UI Component Contrast**

We need to test the **visible information required to understand the purpose and function** of the control. This is sometimes, but not always, the border or the fill.

**Examples:**
- **Icon-only button with no fill:** Test the icon against the background it sits on (3:1 required)
- **Icon or text on a button with fill:** Test the icon/text against the button fill (3:1 for icons, 4.5:1 or 3:1 for text depending on size). The button fill does NOT need to be 3:1 to the background.
- **Button with both fill and border:** Apply the same principle—test what's needed to identify the button's purpose
- **Focus indicators:** Test outline color vs background (3:1 required)

**The Test:** "If this button had no fill, could I understand its purpose and function?" If yes, then the fill and border are incidental and not required to meet contrast minimums.

**Common Failures:**
- Gray text on white background: Often fails 4.5:1
- Light borders on light backgrounds: Often fails 3:1
- Icon-only buttons with insufficient icon contrast: Often fails 3:1
- Placeholder text too light: Should meet 4.5:1 (but don't rely on placeholders as labels)

---

### Color as Information <span class="outcome-pill">LO 1C.02</span>

Color can enhance meaning, but it can't carry meaning alone.

**Common Failures:**

**Required Fields (F81)**
- ❌ Fail: Field label shown only in red
- ✓ Pass: Field label with asterisk (*), optionally in red
- ✓ Pass: Field label with "(required)" text, optionally in red

**Links in Body Text (F73)**
- ❌ Fail: Blue text with no underline
- ✓ Pass: Blue text with underline
- ✓ Pass: Text with 3:1 contrast to surrounding text PLUS underline on hover

**Status Indicators**
- ❌ Fail: "Active" in green, "Inactive" in red (color only)
- ✓ Pass: "Active ✓" with checkmark icon + green
- ✓ Pass: "Inactive ⨉" with X icon + red

**Non-Color Indicators Include:**
- Icons or symbols (✓ ⚠ ⨉)
- Text labels
- Underlines or borders
- Patterns or textures
- Shape differences

**The Test:**
If you removed all color and showed your design in grayscale, could users still get all the same information? If no, you have a color-only failure.

---

### Grayscale Simulation <span class="outcome-pill">LO 1C.03</span>

**Why Grayscale is Sufficient**

Color vision deficiencies affect hue perception (red vs green, blue vs yellow). Grayscale removes all hue information, leaving only luminance (lightness).

If your design works in grayscale, it works for ALL types of color vision deficiency—including protanopia (red-blind), deuteranopia (green-blind), and tritanopia (blue-blind).

**You don't need to test every CVD type separately.** Grayscale is the most stringent test and covers everything.

**How to Test with Stark**

1. Open Stark in Figma
2. Navigate to Vision Simulator
3. Select Achromatopsia (grayscale/complete color blindness)
4. Review your design: Is all information still perceivable?
5. Document anything that becomes unclear
6. Propose fixes (icons, text, patterns, underlines)
7. Verify fixes by running simulation again

**What to Check:**
- Required fields still visible?
- Links distinguishable from body text?
- Status indicators clear?
- Interactive controls visible?
- Chart categories identifiable?
- Error states obvious?

---

### Testing Workflow with Stark <span class="outcome-pill">LO 1C.01</span> <span class="outcome-pill">LO 1C.02</span> <span class="outcome-pill">LO 1C.03</span>

**Your Complete Color Accessibility Workflow:**

**Step 1: Text Contrast (SC 1.4.3)**
- Use Stark > Contrast Checker
- Test all text elements (skip disabled text)
- Verify 4.5:1 for regular text, 3:1 for large text
- Document failures with current and required ratios

**Step 2: UI Component Contrast (SC 1.4.11)**
- Test button borders, input borders, focus indicators
- Verify 3:1 for component boundaries vs background
- Skip disabled components (they're exempt)
- Document failures

**Step 3: Grayscale Simulation (SC 1.4.1)**
- Run Stark > Vision Simulator > Achromatopsia
- Scan entire design: Is everything still perceivable?
- Document elements that become unclear

**Step 4: Identify Color-Only Failures**
- List: required fields, links, status indicators, errors, selections
- For each: propose non-color alternative
- Verify fixes work in grayscale

**Step 5: Annotate for Engineering**
- Use Stark Blueline annotations (from L01)
- Include: colors, ratios, WCAG SCs, recommended fixes
- Example: "Text #999999 on #FFFFFF = 2.8:1. Fails SC 1.4.3 (requires 4.5:1). Recommend #595959 (7.0:1)."

---

## Assessment

### Knowledge Check Quiz
**3 questions | 3 points | Auto-graded**

Test your understanding of color accessibility requirements. Topics include contrast ratios, identifying color-only information failures, and color vision simulation testing.

### Applied Skill Project: Color Audit
**12 points | Rubric-graded**

You'll receive a design mockup with intentional color accessibility issues. Use Stark to conduct a complete color audit and document your findings.

**What you'll deliver:**
1. Text contrast test results (all text elements)
2. UI component contrast test results (buttons, inputs, borders, focus indicators)
3. Color-only information identification (from grayscale simulation)
4. Annotated Figma file with fixes and specifications

| Rubric Criterion | Outcome | What We're Looking For | Points |
|------------------|---------|------------------------|--------|
| Text Contrast Testing | 1C.01 | Accurate measurements of all text elements; identifies correct threshold (4.5:1 or 3:1); recommends specific color fixes | 4 |
| UI Component Contrast | 1C.01 | Tests buttons, inputs, focus indicators; applies 3:1 requirement correctly; notes disabled state exemption; measures boundaries vs backgrounds | 4 |
| Color-Only Identification | 1C.02 | Finds all color-dependent information using grayscale simulation; proposes appropriate non-color alternatives (icons, text, patterns); verifies fixes work | 4 |

**Mastery Scale:**
- **4 (Exceeds Mastery):** Thorough, professional-level work with all issues found
- **3 (Meets Mastery):** Competent work meeting all requirements
- **2 (Near Mastery):** Understands concepts but execution has gaps
- **1 (Below Mastery):** Significant gaps in understanding or execution

---

## Resources

### W3C Resources
- [Understanding SC 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [Understanding SC 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Understanding SC 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Technique G14: Information conveyed by color also in text](https://www.w3.org/WAI/WCAG22/Techniques/general/G14)
- [Technique G18: Ensuring 4.5:1 contrast for text](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)
- [Technique G207: Ensuring 3:1 contrast for icons](https://www.w3.org/WAI/WCAG22/Techniques/general/G207)

### WCAG Understanding Documents
- [Technique G14: Ensuring information conveyed by color is available in text](https://www.w3.org/WAI/WCAG22/Techniques/general/G14)
- [Technique G145: Ensuring 3:1 contrast for large text](https://www.w3.org/WAI/WCAG22/Techniques/general/G145)
- [Technique G209: Providing contrast at boundaries](https://www.w3.org/WAI/WCAG22/Techniques/general/G209)

### Adobe Resources
- Design Accessibility Checklist (Color section)
- Adobe Spectrum Design System (color tokens and standards)
- Stark Figma Plugin Guide (internal)
- Digital Accessibility Guide (internal)

### Tools
- **Stark (Figma plugin)** — Primary tool for DACE (Contrast Checker, Vision Simulator, Annotations)
- **WebAIM Contrast Checker** — Online tool for quick spot checks
- **Colour Contrast Analyser (TPGi)** — Desktop application for detailed testing

---

## Up Next

**Lesson 04: Forms & Errors** covers form field labeling, input purpose, and accessible error identification. You'll apply the color requirements you learned today specifically to form validation and error states.

L04 builds directly on L03—error messages must not use color alone (SC 1.4.1), and error text must meet contrast requirements (SC 1.4.3).

---

*Last updated: December 2025*  
*Version: 1.0*  
*For: DACE Discover Badge*

