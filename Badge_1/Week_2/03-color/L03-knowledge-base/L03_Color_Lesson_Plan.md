# L03: Color
## Lesson Plan

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge Level:** Discover  
**Delivery:** In-person (synchronous)  
**Duration:** 60 minutes  
**Outcomes Covered:** 1C.01, 1C.02, 1C.03

---

## Lesson Overview

This in-person lesson teaches designers how to apply WCAG color requirements to their work. Students learn contrast ratio requirements, how to identify when color alone is being used to convey information, and how to use grayscale simulation to verify designs work for users with color vision deficiencies.

### Why This Matters

Color is one of the most common sources of accessibility barriers. According to WCAG, approximately 15% of working-age adults have some form of vision impairment, and about 8% of males and 0.5% of females have color vision deficiencies. Poor contrast makes text unreadable for users with low vision. Using color alone to convey information excludes users who can't perceive color differences. These are not edge cases—they're everyday issues affecting millions of users.

As designers, we choose colors, specify contrast, and decide how information is presented. We're responsible for ensuring those choices don't create barriers. This lesson provides the knowledge, skills, and tools to meet that responsibility.

### How This Fits in the Discover Badge

L03 builds on the annotation workflow students learned in L01. In this lesson, students add color testing results to their design specifications using Stark. This lesson also prepares students for L04 (Forms & Errors), where they'll apply color requirements specifically to form validation and error states. By Week 2, students have covered accessible names, document structure, and color—three fundamental aspects of accessible design.

---

## Learning Outcomes

| ID | Outcome | Type |
|----|---------|------|
| 1C.01 | Apply WCAG color contrast requirements | Skill |
| 1C.02 | Identify color-only information failures | Skill |
| 1C.03 | Test designs with color vision simulation | Skill |

### Knowledge (What learners will understand)

- Regular text requires 4.5:1 contrast ratio, large text requires 3:1
- UI components and graphical objects require 3:1 contrast ratio
- Inactive/disabled controls are exempt from contrast requirements
- Contrast is measured between adjacent colors at boundaries
- SC 1.4.1 prohibits using color as the only way to convey information
- Non-color indicators include icons, text labels, underlines, patterns, and shapes
- Grayscale simulation tests whether designs rely on hue alone
- Grayscale testing is sufficient for validating designs for all CVD types
- Approximately 8% of males and 0.5% of females have color vision deficiencies

### Skills (What learners will be able to do)

- Use Stark's contrast checker to measure text and UI component contrast ratios
- Identify contrast failures and calculate required adjustments
- Measure contrast at button boundaries and focus indicators
- Recognize when color alone is conveying information
- Propose non-color alternatives (icons, text, underlines, patterns)
- Use Stark's grayscale simulation to test designs
- Verify that information remains perceivable in grayscale
- Document color requirements in design annotations
- Integrate color testing into the design workflow

### Application (How learners will apply this)

- Audit existing designs for color accessibility issues
- Test all text elements and UI components for contrast
- Run grayscale simulation on every design deliverable
- Flag color-only information failures in design reviews
- Specify color requirements in Blueline annotations
- Recommend specific fixes with WCAG justification
- Educate team members on color accessibility requirements
- Test designs early in the process, not just at handoff

---

## WCAG Success Criteria

| SC | Name | Level | Relevance to Designers |
|----|------|-------|------------------------|
| 1.4.1 | Use of Color | A | Color cannot be the only way information is conveyed; must add icons, text, patterns, or other non-color indicators |
| 1.4.3 | Contrast (Minimum) | AA | Text must have 4.5:1 contrast (regular) or 3:1 (large text); inactive controls exempt |
| 1.4.11 | Non-text Contrast | AA | UI components and graphical objects must have 3:1 contrast at boundaries; inactive controls exempt |

**Key Techniques:**
- **G14:** Ensuring information conveyed by color is also available in text
- **G18:** Ensuring 4.5:1 contrast for text
- **G145:** Ensuring 3:1 contrast for large text
- **G207:** Ensuring 3:1 contrast for icons
- **G209:** Providing sufficient contrast at boundaries between adjoining colors

**Common Failures to Avoid:**
- **F13:** Text alternative doesn't include color-coded information
- **F73:** Links not visually evident without color
- **F81:** Required or error fields identified using color only
- **F24:** Specifying foreground without background (or vice versa)
- **F83:** Background images without sufficient contrast

---

## Content Outline

### Section 1: Why Color Matters (8 minutes)

**Objectives:** Set context for why color accessibility is critical

**Key points:**
- 15% of working-age adults have vision impairments including low contrast sensitivity
- 8% of males, 0.5% of females have color vision deficiencies (~300 million people globally)
- Situational disabilities: glare, low battery mode (grayscale), bright sunlight affect everyone
- Three WCAG success criteria govern color: 1.4.1 (Use of Color), 1.4.3 (Contrast), 1.4.11 (Non-text Contrast)

**Teaching approach:**
- Start with statistics to show scale
- Use real-world examples: "Have you tried reading your phone in bright sunlight?"
- Preview the three skills they'll learn today
- Connect to professional practice: "Every design you create has color decisions"

**Media/Activities:**
- Show statistics visually (infographic style)
- Brief discussion: "Raise your hand if you've had trouble reading text on a screen because of color or contrast"
- Preview the Stark workflow they'll learn

---

### Section 2: Contrast Requirements (15 minutes)

**Objectives:** Teach SC 1.4.3 and SC 1.4.11 requirements

**Key points:**

**SC 1.4.3 Text Contrast:**
- 4.5:1 for regular text (< 24px or < 18.5px bold)
- 3:1 for large text (≥ 24px or ≥ 18.5px bold)
- Measured as (L1 + 0.05) / (L2 + 0.05) where L = relative luminance
- Stark calculates this automatically—don't do it by hand
- Contrast ratios range from 1:1 (no contrast) to 21:1 (black on white)

**SC 1.4.11 UI Component Contrast:**
- 3:1 for the visible information required to identify the control
- Test what the user needs to perceive the control's purpose and function
- Focus indicators must also meet 3:1
- Graphical objects (icons, charts) need 3:1

**Critical point: Disabled button exception:**
- Per WCAG: "User Interface Components that are not available for user interaction are not required to meet contrast requirements"
- Disabled buttons, inputs, and other inactive controls are exempt
- Don't waste time testing disabled states
- Emphasize this clearly—it's a common source of confusion

**What to test for buttons:**
- **Icon-only button with no fill:** Test icon vs page background (3:1)
- **Text button with fill:** Test text vs button fill (4.5:1 or 3:1 depending on size - SC 1.4.3). The fill does NOT need to meet 3:1 with the page background.
- **Icon on button with fill:** Test icon vs button fill (3:1). The fill does NOT need to meet 3:1 with the page background.
- **Button with only border/fill (no text/icon):** Test border/fill vs page background (3:1)
- **The key test:** "If I removed the fill/border, could I still understand what this button does?" If yes, the fill/border are incidental.

**Teaching approach:**
- Explain the rules first (4.5:1, 3:1, 3:1)
- Show visual examples of pass/fail
- Demonstrate how to measure with Stark (live demo)
- Clarify the disabled exception multiple times—students will ask about this
- Use real Adobe Spectrum button examples
- Practice: Show 3 buttons, ask students what needs testing

**Media/Activities:**
- Visual comparison grid: same colors at different sizes
- Button anatomy diagram showing what to test
- Live demo: Stark contrast checker on real component
- Practice exercise: Students evaluate 3 scenarios
- Before/after contrast fix examples

---

### Section 3: Color as Information (12 minutes)

**Objectives:** Teach SC 1.4.1 Use of Color

**Key points:**

**The rule:**
- Color cannot be the only visual means of conveying information
- Must provide non-color indicator in addition to color
- Applies to: required fields, error states, links, status indicators, selections, chart data

**Common failures:**
- **F81:** Required fields shown only in red → Add asterisk or "(required)" text
- **F73:** Links without underlines → Add underline (or 3:1 contrast + underline on hover)
- Status indicators using only color → Add icons (✓ ⚠ ⨉) or text labels
- Color-coded charts without labels → Add text labels or patterns

**Non-color indicators:**
- Icons or symbols (most common solution)
- Text labels
- Underlines or borders
- Patterns or textures
- Shape differences

**The 3:1 luminance exception:**
- If two colors have 3:1 or greater luminance contrast, that can serve as an additional indicator *for some uses*
- Works for: links with 3:1 contrast to surrounding text (plus underline on hover)
- Doesn't work for: knowing if outline is valid (green) or invalid (red)—the specific hue matters
- Rule of thumb: When in doubt, add a non-color indicator. It always works.

**Teaching approach:**
- Show common failures first (students will recognize them)
- Explain why each is a problem
- Show the fix for each
- Explain the 3:1 luminance exception but emphasize it's limited
- Use Adobe Spectrum examples of correct implementation
- Practice: Show designs in grayscale, ask what information is lost

**Media/Activities:**
- Before/after gallery: red required fields → asterisks added
- Link comparison: blue text only vs blue + underline
- Status badge comparison: color only vs icon + color
- Adobe Spectrum component showcase
- Grayscale preview exercise

**Note:** Briefly mention form error states but note that L04 will cover this in depth. Don't overlap too much.

---

### Section 4: Color Vision Simulation (10 minutes)

**Objectives:** Teach grayscale simulation as primary testing method

**Key points:**

**Why grayscale is sufficient:**
- Color vision deficiencies affect hue perception (red vs green, blue vs yellow)
- Grayscale removes all hue, leaving only luminance (lightness)
- If design works in grayscale, it works for ALL CVD types
- More efficient than testing protanopia, deuteranopia, tritanopia separately

**CVD types (brief context only):**
- Protanopia (~1% of males): red-blind
- Deuteranopia (~1% of males): green-blind (most common)
- Tritanopia (<0.01%): blue-blind (very rare)
- Don't spend too much time on these—emphasis is on grayscale method

**How to use Stark's grayscale simulation:**
1. Open Stark in Figma
2. Navigate to Vision Simulator
3. Select Achromatopsia (grayscale/complete color blindness)
4. Review design: Is all information still perceivable?
5. Document anything that becomes unclear
6. Propose fixes
7. Toggle simulation off

**What to check in grayscale:**
- Required fields visible?
- Links distinguishable?
- Status indicators clear?
- Interactive controls visible?
- Chart categories identifiable?
- Error states obvious?

**Teaching approach:**
- Explain the concept: hue vs luminance
- Show why grayscale is the most stringent test
- Give brief CVD context but emphasize you don't need separate tests
- Live demo: Toggle grayscale simulation on a design
- Show before/after examples where issues become obvious
- Practice: Students toggle simulation on their own examples

**Media/Activities:**
- Conceptual diagram: color → CVD types → grayscale
- Live Stark demo: toggling simulation
- Before/after case studies (required fields, status tags)
- Students test their own work (if time allows)

---

### Section 5: Testing with Stark (10 minutes)

**Objectives:** Integrate all three skills into complete workflow

**Key points:**

**Complete workflow:**
1. **Text contrast:** Test all text with Stark contrast checker (4.5:1 or 3:1)
2. **UI component contrast:** Test borders, focus indicators (3:1)
3. **Grayscale simulation:** Toggle on, scan entire design
4. **Identify color-only failures:** List what becomes unclear
5. **Propose fixes:** Icons, text, underlines, patterns
6. **Verify fixes:** Run grayscale simulation again
7. **Document:** Annotate with Stark (building on L01 skills)

**Common issues and fixes:**
- Gray text on white fails → Darken to #595959 or make text larger
- Light borders fail → Darken to #767676 or darker
- Required fields only red → Add asterisk
- Links without underlines → Add underline
- Color-coded status → Add icons

**Documenting for engineering:**
- Use Stark Blueline annotations (from L01)
- Include: colors, contrast ratios, WCAG SC references
- For failures: current ratio, required ratio, recommended fix
- Example: "Text #999999 on #FFFFFF = 2.8:1. Fails SC 1.4.3 (requires 4.5:1). Recommend #595959 (7.0:1)."

**Teaching approach:**
- Show the complete workflow as a checklist
- Live demo: Test a complete button (all states, all criteria)
- Show how to document findings
- Emphasize integrating this into design process early, not just at handoff
- Connect back to L01 annotation workflow

**Media/Activities:**
- Workflow diagram (visual checklist)
- Live demo: Complete button test
- Annotation example (Stark panel mockup)
- Common issues troubleshooting guide

---

### Section 6: Project Preview & Wrap-up (5 minutes)

**Objectives:** Set expectations for project and reinforce key points

**Project overview:**
- **Assignment:** Color Audit of design mockup with intentional issues
- **Deliverables:** 
  1. Text contrast test results
  2. UI component contrast results
  3. Color-only information identification
  4. Annotated Figma file with fixes
- **Rubric:** 4 pts text contrast (1C.01), 4 pts UI components (1C.01), 4 pts color-only (1C.02)
- **Due:** Before L04

**Key takeaways:**
- 4.5:1 regular text, 3:1 large text
- 3:1 UI components
- Disabled controls exempt
- Color alone never enough—add non-color indicators
- Grayscale simulation covers all CVD types
- Test early and often

**Resources:**
- WCAG Understanding docs (1.4.1, 1.4.3, 1.4.11)
- Design Accessibility Checklist
- Stark plugin guide
- Adobe Spectrum standards

**Next lesson:**
- L04: Forms & Errors (online)
- Builds on color requirements, applies them to form validation

---

## Assessment Details

### Knowledge Check Quiz (3 questions, 3 points)

**Question 1 (1C.01): Contrast Requirements**

You're testing a button with the following specifications:
- Button text: "Submit" (16px, white #FFFFFF)
- Button fill: Blue (#0078D4)
- Page background: Light gray (#F5F5F5)
- Button state: Active (enabled)

Which contrast tests are required for SC 1.4.11 (Non-text Contrast)?

A) Test button fill (#0078D4) vs page background (#F5F5F5) = 3:1
B) Test button text (#FFFFFF) vs button fill (#0078D4) = 4.5:1 (this is SC 1.4.3, not 1.4.11)
C) Both A and B
D) B only (text identifies the button, so fill doesn't need to meet 3:1 with page background)

**Correct:** D

**Feedback:**
- **Correct (D):** The text "Submit" is what identifies the button's purpose and function. You test the text against the button fill—needs 4.5:1 for SC 1.4.3 (not 1.4.11). The button fill does NOT need to meet 3:1 with the page background because the text is sufficient to identify the button. The key test: "If I removed the fill, could I still understand what this button does?" Yes, because of the text.
- **Incorrect (A only):** This would only apply if the button had no text or icon—just a fill or border. In that case, the boundary would need 3:1. But here, the text identifies the button.
- **Incorrect (B only):** While you do test the text (B), you're also correct that the fill doesn't need testing against the page (A is not required). B is the correct test, but it's SC 1.4.3, not 1.4.11.
- **Incorrect (C):** You don't need both. The text is sufficient to identify the button, so the fill doesn't need to meet 3:1 with the page background.

---

**Question 2 (1C.02): Color-Only Information**

A designer creates a form with the following pattern:
- Required field labels are displayed in red (#CC0000)
- Optional field labels are displayed in black (#000000)
- All labels include asterisks (*) next to required fields
- Field borders remain the same for all fields

When tested with grayscale simulation, the required fields are still clearly identifiable. Does this design meet SC 1.4.1 (Use of Color)?

A) No, because the labels are shown in red  
B) No, because color is used to indicate required status  
C) Yes, because the asterisks provide a non-color indicator  
D) Yes, because the contrast between red and black is sufficient  

**Correct:** C

**Feedback:**
- **Correct (C):** The asterisks serve as the non-color indicator for required status. The red color enhances this but is not the sole indicator. When tested in grayscale, the asterisks remain visible, confirming that color is not the only means of conveying information. This meets SC 1.4.1.
- **Incorrect (A):** Using red is not a problem. The problem would be if red were the *only* indicator. Here, asterisks are also present.
- **Incorrect (B):** Color is used, but it's not the *only* indicator. The combination of asterisks + color is acceptable and recommended.
- **Incorrect (D):** While contrast helps with visibility (SC 1.4.3), it doesn't address SC 1.4.1's requirement for non-color indicators. Luminance difference alone is not sufficient for conveying meaning in this context.

---

**Question 3 (1C.03): Color Vision Simulation**

A designer is testing a design with multiple color-coded status badges: green for "Active," yellow for "Pending," and red for "Inactive." To verify the design works for users with color vision deficiencies, what is the most efficient testing method?

A) Test the design separately with protanopia, deuteranopia, and tritanopia simulations  
B) Test the design with grayscale (achromatopsia) simulation only  
C) Test the design with protanopia and deuteranopia (skip tritanopia because it's rare)  
D) No simulation is needed if the colors have sufficient contrast ratios  

**Correct:** B

**Feedback:**
- **Correct (B):** Grayscale simulation removes all hue information, making it the most stringent test. If your design works in grayscale, it will work for all types of color vision deficiency. This is more efficient than testing multiple CVD types separately.
- **Incorrect (A):** While thorough, this is unnecessary. Grayscale covers all CVD types because it removes all hue.
- **Incorrect (C):** While protanopia and deuteranopia are the most common, you'd still need to verify the design works without blue perception (tritanopia). Grayscale is simpler and covers everything.
- **Incorrect (D):** Contrast ratios (SC 1.4.3) and color as information (SC 1.4.1) are different requirements. Good contrast doesn't guarantee that information isn't conveyed by color alone. The status badges likely need icons or text labels, which grayscale simulation would reveal.

---

### Project: Color Audit (12 points, rubric-graded)

**Project Description:**

Students receive a design mockup with intentional color accessibility issues across the following categories:
- Text elements with insufficient contrast
- UI components with insufficient contrast
- Color-only information (required fields, status indicators, links)
- Interactive states that may be unclear

**Student Tasks:**

1. **Text Contrast Testing:**
   - Identify all text elements
   - Use Stark contrast checker to measure each
   - Determine which pass/fail for regular text (4.5:1) or large text (3:1)
   - Document failures with current ratios and recommended fixes

2. **UI Component Contrast Testing:**
   - Identify all interactive components (buttons, inputs, focus indicators)
   - Test component boundaries against backgrounds (3:1 required)
   - Test across multiple states where applicable (default, hover, focus)
   - Note: Skip any disabled states
   - Document failures with measurements and fixes

3. **Color-Only Information Identification:**
   - Run Stark grayscale simulation
   - Identify elements where information becomes unclear
   - List all color-only failures (required fields, links, status, etc.)
   - Propose non-color alternatives (icons, text, underlines, patterns)
   - Verify fixes work in grayscale

4. **Annotation and Documentation:**
   - Use Stark Blueline annotations to document findings
   - Include: element ID, current state, issue, WCAG SC violated, recommended fix
   - Provide specific color values and measurements
   - Submit annotated Figma file

**Rubric:**

| Criterion | Outcome | Description | Exceeds (4) | Meets (3) | Near (2) | Below (1) |
|-----------|---------|-------------|-------------|-----------|----------|-----------|
| **Text Contrast Testing** | 1C.01 | Accurately measures and documents text contrast ratios | All text elements tested; measurements accurate; identifies correct threshold (4.5:1 or 3:1); recommends specific color fixes with ratios | Most text elements tested; measurements mostly accurate; identifies thresholds correctly; recommends fixes | Some text elements missed; some measurement errors; threshold identification inconsistent; basic recommendations | Many elements missed; frequent measurement errors; doesn't understand thresholds; inadequate recommendations |
| **UI Component Contrast** | 1C.01 | Tests buttons, inputs, focus indicators; applies 3:1 requirement correctly; notes disabled state exemption | All components tested; correctly identifies what to measure (boundaries vs backgrounds); accurate measurements; notes disabled exemption; specific fixes | Most components tested; understands what to measure; measurements mostly accurate; notes exemption; good fixes | Some components missed; partial understanding of boundaries; some errors; may test disabled states unnecessarily | Many components missed; doesn't understand what to measure; frequent errors; tests disabled states |
| **Color-Only Identification** | 1C.02 | Finds all color-dependent information; proposes non-color alternatives; verifies with grayscale | All color-only failures identified; uses grayscale simulation effectively; proposes appropriate alternatives (icons, text, etc.); verifies fixes work | Most failures identified; uses grayscale simulation; proposes good alternatives; verifies most fixes | Some failures missed; limited use of simulation; basic alternatives proposed; inconsistent verification | Many failures missed; doesn't use simulation effectively; inadequate alternatives; no verification |

**Deliverables:**
- Annotated Figma file with Stark annotations
- Summary document (optional but encouraged) listing all findings

**Grading notes:**
- "Exceeds Mastery" (4 pts per criterion): Demonstrates thorough, professional-level work
- "Meets Mastery" (3 pts per criterion): Competent work with minor gaps
- "Near Mastery" (2 pts per criterion): Understands concepts but execution has issues
- "Below Mastery" (1 pt per criterion): Significant gaps in understanding or execution
- Passing threshold: Meets Mastery (3) or higher on all criteria

---

## Resources

### W3C Resources

- [Understanding SC 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [Understanding SC 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Understanding SC 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Technique G14: Ensuring information conveyed by color is available in text](https://www.w3.org/WAI/WCAG22/Techniques/general/G14)
- [Technique G18: Ensuring 4.5:1 contrast for text](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)
- [Technique G145: Ensuring 3:1 contrast for large text](https://www.w3.org/WAI/WCAG22/Techniques/general/G145)
- [Technique G207: Ensuring 3:1 contrast for icons](https://www.w3.org/WAI/WCAG22/Techniques/general/G207)
- [Technique G209: Providing contrast at boundaries](https://www.w3.org/WAI/WCAG22/Techniques/general/G209)

### Adobe Resources

- Design Accessibility Checklist (Color section)
- Adobe Spectrum Design System
  - Color tokens and standards
  - Component contrast specifications
- Stark Figma Plugin Guide (internal)
- Digital Accessibility Guide (internal)

### Tools

- **Stark (Figma plugin):** Primary tool for DACE course
  - Contrast Checker
  - Vision Simulator (Achromatopsia/Grayscale)
  - Blueline Annotations
- **WebAIM Contrast Checker:** Online tool for quick spot checks
- **Colour Contrast Analyser (TPGi):** Desktop application for detailed testing

---

## Connection to Other Lessons

**Builds on:**
- **L01: Accessible Names** — Students learned Blueline annotation workflow with Stark. In L03, they add color testing results to their annotations.
- **L02: Headings** — Students understand structural markup. Color testing ensures that structure is visually perceivable through sufficient contrast.

**Connects forward to:**
- **L04: Forms & Errors** — Will apply color requirements specifically to form field labeling, required field indicators, and error message design. L04 goes deeper on error states that L03 touches on briefly.
- **L05: Keyboard & Touch** — Focus indicators (covered briefly in L03's UI component contrast) get detailed treatment in L05.
- **Badge 2 (Define)** — Deeper exploration of assistive technology and how users with low vision and CVD experience interfaces.

---

## Notes for Instructors

### Key Teaching Moments

1. **Disabled button exemption:** Emphasize this multiple times. Students will ask about testing disabled states—reinforce that they're exempt and shouldn't be tested. Quote the WCAG Understanding document: "User Interface Components that are not available for user interaction are not required to meet contrast requirements."

2. **What to measure for UI components:** Students often get confused about what to test for buttons. Be crystal clear: you test the visible information required to understand the button's purpose and function. For a text button with a fill, that's the text against the fill (SC 1.4.3)—the fill doesn't need to meet 3:1 with the page background. For an icon-only button with no fill, test the icon against the page background (SC 1.4.11). Use the key test: "If I removed the fill/border, could I still understand what this button does?" If yes, the fill/border are incidental and don't need testing against the page.

3. **Why grayscale is sufficient:** Spend adequate time on this. Students may think they need to test every CVD type. Explain that grayscale removes all hue, making it the most stringent test. If it works in grayscale, it works for all CVD types. This saves significant time in practice.

4. **SC 1.4.1 vs 1.4.3 distinction:** These requirements are related but different. SC 1.4.1 is about information being conveyed by color alone. SC 1.4.3 is about lightness/contrast. You can pass one and fail the other. Use examples to clarify.

5. **The 3:1 luminance exception:** This is a nuance that confuses students. Explain it but emphasize that adding a non-color indicator is simpler and always works. Don't overcomplicate this.

### Pacing Notes

- Sections 2 (Contrast) and 3 (Color as Information) are the longest—allocate full time
- Section 4 (Simulation) should be brisk—demonstrate, don't belabor the CVD types
- Section 5 (Stark workflow) ties everything together—make sure to leave time for live demo
- If running short on time, condense Section 1 (Why Color Matters) but don't skip it entirely

### Live Demos

Plan to do live Stark demos for:
1. **Contrast checking a button:** Show the full workflow (select element, select colors, read ratio)
2. **Grayscale simulation:** Toggle it on a design with obvious issues, toggle it off
3. **Documenting with annotations:** Show how to add color findings to Blueline annotations

Practice these before class. Know where your examples are in Figma.

### Common Student Questions

**Q: "What about AAA contrast (7:1)?"**
A: AAA is enhanced contrast for Level AAA conformance. For this course, we focus on AA (4.5:1 and 3:1). Mention that AAA exists but don't require it.

**Q: "Do I test placeholder text?"**
A: Yes, placeholder text should meet contrast requirements (4.5:1 or 3:1 based on size). However, placeholders are not substitutes for labels—you still need visible labels.

**Q: "What about gradients?"**
A: Test against the worst-case area. For light text, test against the darkest part of the gradient. For dark text, test against the lightest part.

**Q: "Can I just use Spectrum colors and assume they're accessible?"**
A: Spectrum colors are designed with accessibility in mind, but you still need to test combinations. Not every Spectrum color works on every background.

**Q: "What if my design needs to match brand colors that don't meet contrast?"**
A: This is a real-world challenge. Options: adjust shade/tint, use larger text (3:1 threshold), add text shadow/outline, or make case to brand team that accessibility is required. Document the issue for stakeholders.

### Materials Needed

- Figma file with example designs (good and bad)
- Stark plugin installed and functional
- Example Adobe product screenshots
- Printed or digital reference: contrast ratio requirements (4.5:1, 3:1, 3:1)
- Links to WCAG Understanding documents
- Project mockup file (with intentional issues for students to find)

### Assessment Strategy

- Quiz after class: 3 questions, one per outcome, auto-graded
- Project due before next lesson: allows time for thorough testing
- Rubric designed to assess all three outcomes: Text contrast (1C.01), UI components (1C.01), Color-only information (1C.02)
- Outcome 1C.03 (simulation) is assessed via quiz question and is implicitly demonstrated in 1C.02 rubric criterion (students must use grayscale to verify)

---

*Last updated: December 2025*  
*Version: 1.0*  
*For: DACE L03: Color*

