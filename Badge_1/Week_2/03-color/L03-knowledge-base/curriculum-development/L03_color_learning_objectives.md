# L03: Color - Learning Objectives

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge Level:** Discover  
**Lesson:** L03  
**Topic:** Color  
**Delivery:** In-person (synchronous)  
**Duration:** 60 minutes  
**Outcomes Covered:** 1C.01, 1C.02, 1C.03

---

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L03 |
|-------------------|-------|------------------|
| **1.4.1 Use of Color** | A | Color cannot be the only way information is conveyed |
| **1.4.3 Contrast (Minimum)** | AA | Text and images of text must have sufficient contrast |
| **1.4.11 Non-text Contrast** | AA | UI components and graphical objects must have sufficient contrast |

---

## Learning Outcomes

### 1C.01: Apply WCAG color contrast requirements

**Outcome Statement:**  
Test and specify contrast ratios meeting WCAG 2.2 AA for text, images of text, and user interface components.

**Knowledge (What learners will understand):**
- Regular text requires 4.5:1 contrast ratio (< 24px or < 18.5px bold)
- Large text requires 3:1 contrast ratio (≥ 24px or ≥ 18.5px bold)
- UI components and graphical objects require 3:1 contrast ratio (borders, controls, focus indicators)
- Inactive/disabled controls are exempt from contrast requirements per WCAG
- Contrast is measured between adjacent colors at boundaries
- Contrast ratio is calculated using relative luminance, not hue

**Skills (What learners will be able to do):**
- Use Stark's contrast checker in Figma to measure text contrast
- Use Stark's contrast checker to measure UI component contrast
- Identify contrast failures and determine the correct ratio needed
- Test button boundaries and focus indicator contrast
- Measure contrast at the edges of interactive elements
- Distinguish between active and inactive states for contrast testing

**Application (How learners will apply this):**
- Audit existing designs for contrast failures
- Test all text elements in a design system
- Verify UI components meet 3:1 requirement
- Document contrast issues for engineering with specific measurements
- Recommend color adjustments to meet WCAG requirements
- Annotate designs with contrast specifications

**Assessment Mapping:**
- **Quiz Q1:** Identifying correct contrast ratios for different element types
- **Project (8 pts):** Text Contrast Testing (4 pts) + UI Component Contrast (4 pts)

---

### 1C.02: Identify color-only information failures

**Outcome Statement:**  
Recognize when color is used as the only visual means of conveying information and propose non-color alternatives.

**Knowledge (What learners will understand):**
- SC 1.4.1 prohibits color as the sole method of conveying information
- Common failures: required fields shown only in red, links without underlines, status indicators using only color
- Color differences need additional visual indicators (icons, text, patterns, underlines)
- Sufficient luminance difference (3:1 contrast between colors) can serve as an additional indicator but is not sufficient alone for some contexts
- Error states, required fields, and status changes require non-color indicators
- Links in body text need underlines or other non-color distinction

**Skills (What learners will be able to do):**
- Identify elements where color alone conveys meaning
- Recognize SC 1.4.1 failures in real designs
- Distinguish between acceptable color use and violations
- Propose non-color alternatives (icons, text labels, patterns, underlines)
- Verify proposed solutions meet WCAG requirements
- Use grayscale simulation to confirm information is still perceivable

**Application (How learners will apply this):**
- Audit designs for color-only information
- Flag required field indicators that rely only on color
- Identify links that lack sufficient distinction beyond color
- Review status indicators (success/warning/error) for non-color alternatives
- Document color-only failures for design and engineering teams
- Recommend specific fixes (add icon, add text, add underline, add pattern)

**Assessment Mapping:**
- **Quiz Q2:** Identifying SC 1.4.1 failures in scenarios
- **Project (4 pts):** Color-Only Identification criterion (includes grayscale simulation verification)

**Note:** Deep coverage of form error states is reserved for L04: Forms & Errors. L03 focuses on recognizing the pattern of color-only information across all contexts.

---

### 1C.03: Test designs with color vision simulation

**Outcome Statement:**  
Use grayscale simulation to verify that information conveyed with color remains perceivable to users with color vision deficiencies.

**Knowledge (What learners will understand):**
- Grayscale/achromatopsia simulation is the primary design testing method
- Grayscale testing validates luminance contrast, which benefits all users with color vision deficiencies
- Color vision deficiency (CVD) types include protanopia (red-blind), deuteranopia (green-blind), and tritanopia (blue-blind)
- Approximately 8% of males and 0.5% of females have some form of CVD
- Grayscale simulation reveals whether information depends on hue alone
- If information is clear in grayscale, it will be accessible to users with CVD

**Skills (What learners will be able to do):**
- Use Stark's grayscale simulation in Figma
- Verify all information remains perceivable in grayscale
- Identify elements that disappear or become unclear in grayscale
- Test designs at the start of the design process, not just at the end
- Explain to stakeholders why grayscale testing is sufficient
- Distinguish between testing for CVD (grayscale) and testing for contrast (contrast checker)

**Application (How learners will apply this):**
- Run grayscale simulation on all design deliverables
- Verify interactive states (hover, focus, active) remain distinguishable
- Test color-coded information (charts, status indicators, categories)
- Document simulation results in design reviews
- Educate team members on grayscale testing workflow
- Integrate simulation testing into design process early

**Assessment Mapping:**
- **Quiz Q3:** Purpose and method of grayscale simulation
- **Project (implicit in 1C.02 criterion):** Grayscale simulation used to verify color-only information fixes

**Why Grayscale is Sufficient:**  
Grayscale simulation tests whether designs rely on hue (color) alone. Since all forms of CVD affect hue perception differently, and grayscale removes all hue information, passing grayscale testing ensures the design will work for all CVD types. Testing multiple CVD simulations (protanopia, deuteranopia, tritanopia) individually is unnecessary for most design work because grayscale is the most stringent test.

---

## Lesson Flow and Pedagogical Strategy

### Opening (Why Color Matters) - 8 minutes
- Start with impact: 15% of working-age adults have vision impairments
- Real user stories of color-only information failures
- Preview the three skills: contrast testing, color-only identification, simulation

### Core Instruction - 37 minutes

**Part 1: Contrast Requirements (15 min) - Outcome 1C.01**
- Direct instruction: 4.5:1, 3:1, and UI component rules
- **Key emphasis:** Disabled buttons are exempt from contrast requirements
- **Key emphasis:** Measuring contrast at button boundaries and borders
- Live demo: Stark contrast checker on real Adobe components
- Practice: Students test examples during session

**Part 2: Color as Information (12 min) - Outcome 1C.02**
- Pattern recognition: Where does color-only information appear?
- Examples: required fields, links, status indicators
- Solutions framework: icons, text, patterns, underlines
- Adobe Spectrum examples of correct implementation
- Quick audit exercise

**Part 3: Color Vision Simulation (10 min) - Outcome 1C.03**
- **Primary method:** Grayscale/achromatopsia simulation
- Why grayscale is sufficient (tests luminance, not hue)
- Brief context: CVD types exist, but grayscale covers all
- Live demo: Stark simulation tools
- Students test their own examples

### Application (Testing with Stark) - 10 minutes
- Integrated workflow: contrast checking + simulation
- Common issues to flag
- Documenting for engineering

### Wrap-up (Project Preview) - 5 minutes
- Color Audit project overview
- Rubric walkthrough
- Questions

### Avoiding Common Pitfalls
- **Don't overwhelm** with all CVD types and their specific color confusions
- **Don't create confusion** between SC 1.4.1 (Use of Color) and SC 1.4.3 (Contrast) - they are related but distinct
- **Don't overlap** deeply with L04 content on form errors
- **Do emphasize** practical tools (Stark) over theory
- **Do emphasize** that disabled buttons don't need contrast testing

---

## Adobe Training Materials References

From `project-documents/03-color/knowledge-base/training-snippets/`:
- **Contrast-training.pdf:** Examples of contrast testing workflow
- **Design Accessibility Checklist.txt:** Color section requirements
- **Stark testing training.pdf:** Tool-specific workflows
- **Pages from 06-color and contrast-2_Page_XX.jpg:** Visual examples from existing Adobe training

These materials should be reviewed and integrated into:
- Figma build guide (visual examples)
- Lesson plan (teaching examples)
- Assessment materials (realistic scenarios)

---

## Connection to IAAP Body of Knowledge

### IAAP WAS (Web Accessibility Specialist) Alignment

| DACE Outcome | IAAP BOK Domain | IAAP Competency Area |
|--------------|-----------------|----------------------|
| 1C.01 | Content Accessibility | Color Contrast Requirements |
| 1C.02 | Content Accessibility | Use of Color to Convey Information |
| 1C.03 | Testing and Validation | Color Vision Deficiency Testing |

### Career Relevance
Understanding color accessibility is fundamental to:
- IAAP WAS certification exam (multiple questions on contrast and color)
- IAAP CPWA certification (design-focused scenarios)
- Real-world design practice at Adobe and partner companies
- Design system development and maintenance

---

## Notes for Instructional Designers

**Key Teaching Moments:**
1. **Disabled button contrast:** This is a common source of confusion. Emphasize that inactive UI components are explicitly exempt from SC 1.4.3 and 1.4.11 per WCAG Understanding documents.

2. **Button boundaries:** When measuring UI component contrast, explain that you test the border/edge of the button against its background. For a white button with a gray border on a light background, test the gray border against the light background.

3. **Grayscale rationale:** Spend time explaining WHY grayscale is sufficient. This prevents students from thinking they need to test protanopia, deuteranopia, tritanopia separately for every design (which is time-consuming and unnecessary).

4. **SC 1.4.1 vs 1.4.3 distinction:** Students often confuse "Use of Color" (information conveyed by color) with "Contrast" (lightness difference). Make this distinction crystal clear with examples.

5. **Stark workflow:** Students need hands-on practice with the tool. Build in time for them to test real examples during the session.

---

## Assessment Alignment Summary

| Assessment | Points | Outcomes Tested | Format |
|------------|--------|----------------|--------|
| Quiz | 3 | 1C.01, 1C.02, 1C.03 | Auto-graded, multiple choice |
| Color Audit Project | 12 | 1C.01 (8 pts), 1C.02 (4 pts) | Rubric-graded by instructor |
| **Total** | **15** | **All outcomes** | **Mixed** |

**Note:** Outcome 1C.03 is assessed through the quiz and is implicitly demonstrated in the 1C.02 project criterion (students must use grayscale simulation to verify their color-only identification findings).

---

*Last updated: December 2025*  
*Version: 1.0*  
*Author: DACE Curriculum Development Team*









