# L03-L04: Color and Forms Applied Practice

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Discover  
**Lessons:** L03 (Color) + L04 (Forms)  
**Assessment Type:** Applied Practice  
**Project Name:** Color and Forms Applied Practice  
**Points:** 24 (4 points per response)  
**Format:** Written response, instructor-graded  
**Outcomes Tested:** 1C.01, 1C.02, 1D.01

---

## Project Overview

Students analyze a single design stimulus (an "Invite people to project" modal dialog) for both color accessibility and form accessibility issues. This reflects real-world practice where designers evaluate multiple accessibility concerns on one design.

### Stimulus

An "Invite people to project" modal dialog containing:
- Tag Field (input with "Erica Daryl" tag)
- Picker dropdown (currently set to "Editor")
- TextField with placeholder text ("Say something about what you are sharing")
- Cancel button (ghost/outline style)
- "Invite as editor" button (filled primary style)
- Suggested collaborator tags (Dani Carter, Trent Vaughan, Rose Norma)

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

## Response Items

### Color Section (Responses 1-3)

Testing outcomes 1C.01 (Apply WCAG color contrast requirements) and 1C.02 (Identify color-only information failures).

---

#### Response 1: Contrast Checker Analysis

**Prompt:**

Run Stark automated contrast checker.

*[Stark contrast panel showing: Contrast 1, Value #1, "These colors don't pass standards for contrast ratios."]*

What is the layer name of the content where the error occurred? Is a real issue or a false positive?

**What We're Looking For:**

- Student identifies the specific layer name from Stark
- Student explains whether this is a real accessibility issue or a false positive
- Student provides reasoning based on WCAG requirements

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Correctly identifies layer name; provides thorough analysis of whether this is a real issue or false positive; references specific WCAG criteria; explains reasoning with professional clarity |
| **Meets Mastery** | 3 | Correctly identifies layer name; accurately determines real issue vs false positive; provides valid reasoning based on WCAG principles |
| **Near Mastery** | 2 | Identifies layer but reasoning is incomplete or partially incorrect; shows understanding of concepts but execution has gaps |
| **Below Mastery** | 1 | Incorrect identification; missing or fundamentally flawed reasoning; does not demonstrate understanding of contrast requirements |

---

#### Response 2: TextField Border Contrast

**Prompt:**

A project stakeholder points out that the **TextField** border (has placeholder text of "Say something about...") is lower than the required 3:1 contrast ratio. You test yourself and see that is currently 1.3:1.

*[Contrast checker showing: Foreground DADADA, Background F8F8F8, ratio 1.31:1]*

Is this an actual issue? If yes, what would you suggest as the fix?

**What We're Looking For:**

- Student understands when UI component contrast requirements apply (SC 1.4.11)
- Student recognizes that text field borders may or may not require 3:1 depending on context
- If the field has visible text content that identifies it, the border may be incidental
- Student provides appropriate recommendation

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Correctly applies SC 1.4.11 "required for identification" test; thoroughly explains whether border is incidental or required; if issue, provides specific fix with color values; demonstrates nuanced understanding |
| **Meets Mastery** | 3 | Correctly assesses whether border contrast is required based on WCAG 1.4.11 principles; provides valid reasoning; suggests appropriate fix if needed |
| **Near Mastery** | 2 | Partially correct assessment; shows some understanding of SC 1.4.11 but reasoning has gaps or applies rule incorrectly |
| **Below Mastery** | 1 | Incorrect assessment; does not understand "required for identification" concept; missing or fundamentally flawed response |

---

#### Response 3: Cancel Button Border Contrast

**Prompt:**

A project stakeholder points out that the **Cancel button** border is lower than the required 3:1 contrast ratio. You test yourself and see that is currently 1.3:1.

Is this an actual issue? If yes, what would you suggest as the fix?

**What We're Looking For:**

- Student applies the "visible information required" test from SC 1.4.11
- For a text button (Cancel), the text identifies the control's purpose
- Student determines if the border is required for identification or is incidental
- Student provides appropriate recommendation

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Correctly applies SC 1.4.11; recognizes that "Cancel" text provides identification making border incidental; explains reasoning thoroughly; may note when borders WOULD be required (e.g., icon-only buttons) |
| **Meets Mastery** | 3 | Correctly applies SC 1.4.11 principles; recognizes text provides identification so border is incidental; OR correctly identifies as issue with valid fix |
| **Near Mastery** | 2 | Partially correct reasoning; may misapply the "required for identification" test; shows understanding but execution has gaps |
| **Below Mastery** | 1 | Incorrect assessment; applies 3:1 rule without considering what's required for identification; missing or fundamentally flawed response |

---

### Forms Section (Responses 4-6)

Testing outcome 1D.01 (Specify form field labels and instructions).

---

#### Response 4: Tag Field Visible Label

**Prompt:**

A project stakeholder asks why the **Tag Field** (input with Erica Daryl showing) has no visible label. Isn't that non-confirming to WCAG SC 3.3.2 Labels or instructions?

Is this in fact a matter of non-conformance? What might you tell the stakeholder?

**What We're Looking For:**

- Student understands SC 3.3.2 requirements for visible labels
- Student evaluates whether the context provides sufficient labeling (e.g., modal title "Invite people to project" serves as contextual label)
- Student provides clear explanation for stakeholder

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Correctly assesses conformance with thorough reasoning; explains how contextual labels work; communicates to stakeholder professionally and clearly; may reference specific WCAG techniques |
| **Meets Mastery** | 3 | Correctly assesses conformance status; acknowledges contextual labels or identifies genuine issue; provides clear explanation for stakeholder |
| **Near Mastery** | 2 | Partially correct assessment; shows understanding of SC 3.3.2 but explanation is incomplete or partially incorrect |
| **Below Mastery** | 1 | Incorrect assessment; does not understand visible label requirements; missing or fundamentally flawed response |

---

#### Response 5: Picker Visible Label

**Prompt:**

A project stakeholder asks why the **Picker** (currently set to Editor) has no visible label. Isn't that non-confirming to WCAG SC 3.3.2 Labels or instructions?

Is this in fact a matter of non-conformance? What might you tell the stakeholder?

**What We're Looking For:**

- Student evaluates the Picker control for SC 3.3.2 compliance
- Student considers whether the selected value ("Editor") or adjacent context provides labeling
- Student may note that role pickers often rely on positional/contextual labeling

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Correctly assesses conformance; thoroughly explains how context and adjacency affect labeling requirements; communicates professionally; demonstrates nuanced understanding of SC 3.3.2 |
| **Meets Mastery** | 3 | Correctly assesses conformance status; provides clear explanation of whether contextual information is sufficient |
| **Near Mastery** | 2 | Partially correct assessment; shows understanding but explanation is incomplete or has gaps |
| **Below Mastery** | 1 | Incorrect assessment; does not understand how context affects label requirements; missing or fundamentally flawed response |

---

#### Response 6: TextField Visible Label

**Prompt:**

A project stakeholder asks why the **TextField** (has placeholder text of "Say something about...") has no visible label. Isn't that non-confirming to WCAG SC 3.3.2 Labels or instructions?

Is this in fact a matter of non-conformance? What might you tell the stakeholder?

**What We're Looking For:**

- Student recognizes the placeholder problem: placeholder text disappears when typing
- Student understands that placeholder text alone does not meet SC 3.3.2 requirements for persistent, visible labels
- Student explains the issue to the stakeholder clearly

**Scoring (4 points):**

| Level | Points | Performance Indicators |
|-------|--------|------------------------|
| **Exceeds Mastery** | 4 | Correctly identifies placeholder-only labels as SC 3.3.2 failure; thoroughly explains why (disappears when typing, not persistent); suggests specific fixes; communicates professionally to stakeholder |
| **Meets Mastery** | 3 | Correctly identifies that placeholder-only labels fail SC 3.3.2 because they disappear; explains why this is an accessibility concern |
| **Near Mastery** | 2 | Identifies there may be an issue but explanation is incomplete; partially understands the placeholder problem |
| **Below Mastery** | 1 | Incorrectly states this is conformant; does not understand placeholder label problems; missing or fundamentally flawed response |

---

## Assessment Alignment

| Response | Topic | Outcome | Points |
|----------|-------|---------|--------|
| 1 | Contrast checker analysis | 1C.01 | 4 |
| 2 | TextField border contrast | 1C.01 | 4 |
| 3 | Cancel button border contrast | 1C.01 | 4 |
| 4 | Tag Field visible label | 1D.01 | 4 |
| 5 | Picker visible label | 1D.01 | 4 |
| 6 | TextField visible label | 1D.01 | 4 |
| **Total** | | | **24** |

---

## Grading Summary

| Score | Level |
|-------|-------|
| 24-22 points | Exceeds Mastery |
| 21-18 points | Meets Mastery |
| 17-12 points | Near Mastery |
| 11 or below | Below Mastery |

**Passing Threshold:** 18 points (Meets Mastery average of 3 points per response)

---

## Key Teaching Points

### Color (SC 1.4.11 Non-text Contrast)

The critical question for UI component contrast is: **"What visible information is required to identify the control?"**

- If a button has text that identifies its purpose, the border/fill may be incidental
- If a control relies on its border/fill to be identified (e.g., icon-only button), that boundary needs 3:1
- Disabled controls are exempt from contrast requirements

### Forms (SC 3.3.2 Labels or Instructions)

The critical question is: **"Can users understand what input is expected without losing context?"**

- Placeholder text disappears when typing: not a persistent label
- Contextual labels (like modal titles) may provide sufficient labeling in some cases
- Adjacent text or value displays can serve as labels when positioned correctly

---

## Instructor Notes

### Common Student Responses

**Response 2-3 (Border Contrast):**
- Strong responses recognize that text content ("Cancel", placeholder text) identifies the control, making borders potentially incidental
- Weaker responses apply 3:1 requirement to all borders without considering the "required for identification" test

**Response 6 (Placeholder-only Label):**
- This is the clearest failure case: placeholder text alone does not meet SC 3.3.2
- Students should recognize this as a common accessibility failure pattern

---

*Last updated: January 2026*  
*Version: 2.0*  
*For: DACE L03: Color + L04: Forms*
