# L05: Keyboard & Touch - Project Rubric

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Discover  
**Lesson:** L05  
**Assessment Type:** Applied Skill Project  
**Project Name:** Keyboard & Touch Accessibility Audit  
**Points:** 15  
**Format:** Rubric-graded by instructor  
**Outcomes Tested:** 1E.01, 1E.02, 1E.03

---

## Project Overview

Students receive a design mockup with keyboard and touch accessibility issues. They conduct a complete accessibility audit using keyboard-only testing and Stark, then document their findings with blueline annotations.

### Project Deliverables

1. **Keyboard Accessibility Testing Results**
   - Complete keyboard-only navigation test (no mouse)
   - Documentation of all interactive elements and their keyboard accessibility status
   - Identification of missing tab order, keyboard traps, and inaccessible functionality
   - Verification of logical focus order
   - Recommended fixes for keyboard failures

2. **Focus Indicator Analysis**
   - Assessment of all focus indicators against WCAG 2.2 SC 2.4.11 requirements
   - Measurements using browser DevTools (thickness and contrast)
   - Pass/fail determination for each interactive element
   - Specific focus indicator specifications for failures

3. **Touch Target Testing Results**
   - Complete analysis of all touch targets using Stark
   - Measurements of target dimensions (width × height)
   - Identification of targets below 24×24 pixel minimum
   - Assessment of spacing alternatives
   - Recommended fixes for non-compliant targets

4. **Annotated Figma File**
   - Stark Blueline annotations documenting all findings
   - Focus indicator specifications (color, thickness, contrast ratio)
   - Touch target dimensions
   - Keyboard interaction patterns
   - WCAG SC references
   - Clear specifications for engineering implementation

---

## Mastery Scale

The rubric uses a 4-point scale aligned with DACE's mastery levels:

| Points | Level | Description |
|--------|-------|-------------|
| 4 | **Exceeds Mastery** | Demonstrates advanced understanding beyond requirements; thorough, professional-level work |
| 3 | **Meets Mastery** | Fully meets the learning outcome requirements; competent, complete work |
| 2 | **Near Mastery** | Approaching competency but gaps remain; understands concepts but execution needs improvement |
| 1 | **Below Mastery** | Significant gaps in understanding or skill; incomplete or incorrect work |

**Passing Threshold:** Students must achieve Meets Mastery (3 points) or higher on all criteria to pass.

---

## Rubric

### Criterion 1: Keyboard Accessibility Testing (Outcome 1E.01)

**Weight:** 5 points

**What We're Assessing:**
- Completeness: Did the student test all interactive functionality?
- Methodology: Does the student understand keyboard-only testing?
- Identification: Did the student find all keyboard accessibility issues?
- Focus order: Does the student verify logical tab order?
- Problem-solving: Are recommended fixes appropriate and specific?

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4-5 | • Tested all interactive elements with keyboard only (no mouse)<br>• Identified all elements missing from tab order<br>• Found all keyboard traps and navigation dead ends<br>• Verified focus order matches visual order<br>• Correctly distinguished intentional focus traps (modals) from failures<br>• Provided specific fixes with implementation notes<br>• Documented keyboard interaction patterns (Tab, Arrow keys, Enter, Escape)<br>• Tested all states (hover, focus, active, disabled) |
| **Meets Mastery** | 3 | • Tested most interactive elements with keyboard<br>• Identified most accessibility issues<br>• Verified basic focus order<br>• Noted intentional vs unintentional focus traps<br>• Provided appropriate fix recommendations<br>• May have minor omissions |
| **Near Mastery** | 2 | • Some keyboard testing performed<br>• Missed some interactive elements or issues<br>• Partial focus order verification<br>• Basic recommendations lacking specificity<br>• Shows understanding but incomplete execution |
| **Below Mastery** | 1 | • Insufficient keyboard testing<br>• Many interactive elements or issues missed<br>• No focus order verification<br>• Inadequate or missing recommendations<br>• Fundamental misunderstanding of keyboard accessibility |

**Common Issues at Each Level:**

**Exceeds (4-5):** Student conducts thorough systematic testing, documents all keyboard patterns, and provides comprehensive implementation guidance including focus management strategies.

**Meets (3):** Student completes required testing competently with minor gaps that don't affect overall quality.

**Near (2):** Student understands concepts but misses elements or makes errors that would require revision before implementation.

**Below (1):** Student's work shows fundamental misunderstanding of keyboard accessibility requirements or incomplete testing.

---

### Criterion 2: Focus Indicator Compliance (Outcome 1E.02)

**Weight:** 5 points

**What We're Assessing:**
- Identification: Did the student identify all focusable elements?
- Measurement: Does the student correctly measure thickness and contrast?
- WCAG 2.2 understanding: Does the student apply SC 2.4.11 correctly?
- Recommendations: Are focus indicator specifications complete and implementable?

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4-5 | • All focusable elements identified<br>• Correct measurement methodology using DevTools<br>• Accurately measures perimeter thickness (2px minimum)<br>• Accurately measures contrast ratio (3:1 minimum)<br>• Correctly applies WCAG 2.2 SC 2.4.11 requirements<br>• Provides specific focus indicator designs (color hex, thickness, contrast ratio)<br>• Tests across light and dark modes if applicable<br>• Notes which indicators pass/fail with specific measurements<br>• Proposes visually consistent focus indicator system |
| **Meets Mastery** | 3 | • Most focusable elements identified<br>• Demonstrates correct measurement approach<br>• Measurements mostly accurate<br>• Correctly identifies WCAG 2.2 requirements<br>• Provides good focus indicator specifications<br>• May have minor measurement errors or omissions |
| **Near Mastery** | 2 | • Some focusable elements missed<br>• Partial understanding of measurement methodology<br>• Some measurement errors<br>• Basic understanding of WCAG 2.2 requirements<br>• Incomplete or vague specifications |
| **Below Mastery** | 1 | • Many focusable elements missed<br>• Doesn't understand measurement methodology<br>• Frequent measurement errors<br>• Misunderstands WCAG 2.2 SC 2.4.11<br>• Inadequate specifications |

**Common Issues at Each Level:**

**Exceeds (4-5):** Student demonstrates mastery by systematically measuring all focus indicators, correctly applying WCAG 2.2 criteria, and designing a cohesive focus indicator system.

**Meets (3):** Student completes required measurements and specifications with correct methodology and minor acceptable gaps.

**Near (2):** Student shows partial understanding but makes errors in measurement or specification.

**Below (1):** Student doesn't understand focus indicator requirements or fails to apply measurement methodology correctly.

---

### Criterion 3: Touch Target Sizing (Outcome 1E.03)

**Weight:** 5 points

**What We're Assessing:**
- Use of tools: Did the student effectively use Stark touch target checker?
- Identification: Did the student find all touch target issues?
- Measurement: Are target dimensions accurately measured?
- WCAG 2.2 understanding: Does the student apply SC 2.5.8 correctly?
- Solutions: Are proposed fixes appropriate and specific?

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4-5 | • Uses Stark touch target checker effectively<br>• Identifies all touch targets below 24×24 pixels<br>• Accurately measures all target dimensions<br>• Correctly applies WCAG 2.2 SC 2.5.8 requirements<br>• Properly identifies exceptions (inline links, essential controls)<br>• Evaluates spacing as alternative to size<br>• Provides specific fixes with dimensions and spacing measurements<br>• Proposes solutions that maintain visual design integrity<br>• Documents both size and spacing solutions |
| **Meets Mastery** | 3 | • Uses Stark touch target checker<br>• Identifies most touch target issues<br>• Measurements mostly accurate<br>• Correctly applies basic WCAG 2.2 requirements<br>• Notes exceptions<br>• Provides good fix recommendations<br>• May have minor omissions |
| **Near Mastery** | 2 | • Limited use of testing tools<br>• Misses some touch target issues<br>• Some measurement errors<br>• Partial understanding of requirements<br>• Basic recommendations lacking specificity<br>• May not properly handle exceptions |
| **Below Mastery** | 1 | • Doesn't use testing tools effectively<br>• Misses many touch target issues<br>• Frequent measurement errors<br>• Misunderstands WCAG 2.2 SC 2.5.8<br>• Inadequate or missing recommendations<br>• Doesn't recognize exceptions |

**Common Issues at Each Level:**

**Exceeds (4-5):** Student uses tools proactively, finds all issues, provides contextually appropriate solutions including both size and spacing alternatives, and maintains design aesthetics.

**Meets (3):** Student completes touch target testing and provides good solutions with minor gaps.

**Near (2):** Student understands concept but execution is incomplete or measurements are inaccurate.

**Below (1):** Student doesn't effectively use testing tools or misunderstands touch target requirements.

---

## Grading Guidelines for Instructors

### Scoring Approach

1. **Evaluate each criterion independently** against the descriptors
2. **Use whole points for Criterion 1-3** (5 points each)
3. **Provide written feedback** explaining the score for each criterion
4. **Identify patterns** to help students improve

### Feedback Template

For each criterion, provide:
- **Strengths:** What the student did well
- **Areas for improvement:** Specific gaps or errors
- **Resources:** Links to WCAG docs or examples for improvement

### Example Feedback

**Criterion 1: Keyboard Accessibility Testing (4/5 - Exceeds)**

*Strengths:* You conducted thorough keyboard-only testing and identified all keyboard accessibility issues. Your documentation of focus order and keyboard traps is excellent.

*Areas for improvement:* Minor: You could have documented the specific keyboard pattern for the custom dropdown component (Arrow keys for navigation within).

*Overall:* Excellent work demonstrating mastery of keyboard accessibility testing.

---

## Total Score Calculation

| Criterion | Outcome | Max Points |
|-----------|---------|------------|
| Keyboard Accessibility Testing | 1E.01 | 5 |
| Focus Indicator Compliance | 1E.02 | 5 |
| Touch Target Sizing | 1E.03 | 5 |
| **Total** | | **15** |

### Grade Conversion

- **15-14 points:** Exceeds Mastery (equivalent to A)
- **13-12 points:** Meets Mastery (equivalent to B)
- **11-10 points:** Near Mastery (equivalent to C, requires revision)
- **9 or below:** Below Mastery (does not pass, requires significant revision)

**Passing Threshold:** Students must score at least 12 points total (Meets Mastery average) to pass the project.

---

## Submission Requirements

### File Format

- Figma file with Stark Blueline annotations
- File must be accessible to instructor (shared link or workspace)
- Include a brief testing summary document noting:
  - Which browser/device used for keyboard testing
  - Which tools used (Stark version, browser DevTools)
  - Any testing limitations encountered

### Organization

Students should:
- Group annotations by type (keyboard, focus indicators, touch targets)
- Use consistent naming for annotation markers
- Include clear notes in Stark annotation fields
- Document keyboard interaction patterns

### Due Date

- Complete before L06: Reflow & Zoom
- Late submissions accepted with point deduction per course policy

---

## Revision Policy

Students scoring Near Mastery or Below Mastery may:
- Revise and resubmit once
- Receive feedback on initial submission within 5 business days
- Resubmit within 1 week of receiving feedback
- Revised grade replaces original (capped at Meets Mastery if Below initially)

---

## Common Student Mistakes to Watch For

### Keyboard Accessibility Testing

- ❌ Not actually testing with keyboard only (using mouse during test)
- ❌ Missing custom interactive components (dropdowns, carousels, tabs)
- ❌ Not testing all functionality within components
- ❌ Confusing intentional focus traps (modals) with keyboard trap failures
- ❌ Not verifying focus order matches visual order
- ❌ Missing elements that are visually hidden but still in tab order

### Focus Indicator Compliance

- ❌ Not measuring focus indicators at all
- ❌ Measuring only thickness without checking contrast
- ❌ Accepting browser default focus indicators without verification
- ❌ Not understanding 2px minimum requirement
- ❌ Not understanding 3:1 contrast requirement
- ❌ Proposing focus indicators that don't work across all backgrounds
- ❌ Confusing hover states with focus states

### Touch Target Sizing

- ❌ Not using Stark touch target checker
- ❌ Measuring visual size instead of tap area
- ❌ Applying 24×24 requirement to inline links (which are exempt)
- ❌ Not considering spacing as an alternative to size
- ❌ Proposing fixes that would break visual design unnecessarily
- ❌ Not verifying that expanded tap areas don't overlap
- ❌ Missing icon-only buttons without adequate padding

---

## Instructor Calibration Notes

### Consistency Across Graders

If multiple instructors grade:
- Review sample submissions together
- Calibrate on what constitutes "Exceeds" vs "Meets" vs "Near"
- Document edge cases and how to score them
- Share feedback examples

### Edge Cases

**Q: Student identifies an intentional focus trap (modal) as a failure. Deduct points?**  
A: Yes, minor deduction. This shows misunderstanding of when focus traps are correct. Should be "Meets" range at best.

**Q: Student's focus indicator measurement is slightly off (e.g., 2.8:1 when actual is 3.1:1) but conclusion is correct.**  
A: Minor deduction in "Meets" range. Focus on understanding, not perfect precision.

**Q: Student tests desktop design against 24×24 pixel requirement and marks many failures that are actually acceptable with adequate mouse precision.**  
A: This is technically correct per WCAG 2.2. Score based on accuracy of measurements, but note in feedback that desktop may have different considerations.

**Q: Student goes far beyond requirements (tests with actual screen reader, tests multiple keyboard patterns).**  
A: Score as "Exceeds" and note this in feedback as exemplary work.

**Q: Student uses browser default focus indicators and marks them as passing without measurement.**  
A: This requires verification. If browser default doesn't meet WCAG 2.2, this is a failure. Should score "Near" or "Below" depending on how many were missed.

---

## Assessment Alignment Verification

| Outcome | Tested By | Points |
|---------|-----------|--------|
| 1E.01 (keyboard accessibility) | Criterion 1 | 5 |
| 1E.02 (focus indicators) | Criterion 2 | 5 |
| 1E.03 (touch targets) | Criterion 3 | 5 |
| **Total** | | **15** |

Note: All three outcomes are directly assessed through the project. The quiz provides knowledge-level assessment while the project assesses application skills.

---

*Last updated: December 2025*  
*Version: 1.0*  
*For: DACE L05: Keyboard & Touch*

