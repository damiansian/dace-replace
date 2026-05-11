# Lesson 04: Forms and Errors

**Module:** 1D | **Badge:** Discover | **Duration:** 30 minutes online (self-paced)

Forms are where users provide information to complete tasks. When forms are inaccessible, users cannot sign up, purchase, submit requests, or accomplish their goals. Unlike many accessibility issues that create inconvenience, form failures are task-blocking barriers.

This self-paced lesson covers how to specify clear labels and instructions, design accessible error states, and apply autocomplete requirements for common input types.

---

## The Explainer

Get an overview of form accessibility before starting the lesson.

<div class="video-embed">
  <iframe 
    src="https://player.vimeo.com/video/VIMEO_ID_HERE" 
    width="640" 
    height="360" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen
    title="Forms and Errors Accessibility Explainer">
  </iframe>
</div>

---

## Learning Objectives

By the end of this lesson, you will be able to:

| ID | Objective | Type |
|----|-----------|------|
| 1D.01 | **Specify form field labels and instructions:** Design clear labels and instructional text for form inputs | Skill |
| 1D.02 | **Design accessible error identification:** Create error states that identify and describe errors in accessible ways | Skill |
| 1D.03 | **Apply input purpose requirements:** Specify autocomplete attributes for common input types | Skill |

**L01 Connection:** Form labels are accessible names for form controls. This lesson applies the quality criteria from L01 (clear, concise, function over form) to the specific context of forms.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 3.3.2 | Labels or Instructions | A | Form inputs must have labels or instructions |
| 3.3.1 | Error Identification | A | Errors must be identified and described in text |
| 3.3.3 | Error Suggestion | AA | Suggestions for fixing errors must be provided |
| 1.3.5 | Identify Input Purpose | AA | Input purpose must be programmatically determinable |

---

## Key Concepts

### Why Form Accessibility Matters

Form failures are task-blocking barriers, not just inconveniences. If someone cannot complete your form, they cannot use your product.

**Form labels are accessible names.** When a screen reader user focuses a form field, they hear: "Email, text input, required" (Label + Role + State).

> **Checkpoint: Why forms matter**
> - [ ] I can explain why form accessibility failures are task-blocking
> - [ ] I understand that form labels are accessible names for form controls

---

### Labels and Instructions <span class="outcome-pill">LO 1D.01</span>

**The Placeholder Problem**

One of the most common form accessibility failures: using placeholder text as the only label. When users start typing, the placeholder disappears and they lose context mid-task.

**What WCAG requires (SC 3.3.2):**

Form inputs must have labels or instructions that:
- Are **visible** (not hidden or placeholder-only)
- Are **persistent** (don't disappear when user types)
- Are **programmatically associated** with the input
- **Describe the expected input**

**When to add instructions beyond the label:**

- Format requirements: "MM/DD/YYYY"
- Character limits: "Maximum 250 characters"
- Special constraints: "Must include at least one number"

**Where to place instructions:**

1. Below label, above input (most common)
2. As helper text below input
3. In tooltip (NOT recommended: accessibility concerns)

**The Test:**

Can a user complete the field correctly without trial and error? If not, add instructions.

> **Checkpoint: Labels and instructions**
> - [ ] I can identify placeholder-only labels as a common failure
> - [ ] I can apply the four label requirements (visible, persistent, associated, descriptive)
> - [ ] I can determine when instructions are needed beyond labels

---

### Error Identification <span class="outcome-pill">LO 1D.02</span>

**Two WCAG Requirements for Errors**

**SC 3.3.1 Error Identification (Level A):**  
Errors must be identified and described in text.

**SC 3.3.3 Error Suggestion (Level AA):**  
When errors are detected, suggestions for fixing them must be provided.

**Every error message must answer two questions:**

1. **What went wrong?** (the problem)
2. **How do I fix it?** (the solution)

**Error Message Quality:**

❌ **Bad:** "Error"  
→ Doesn't identify what's wrong or how to fix it

~ **Okay:** "Invalid password"  
→ Identifies problem but doesn't explain how to fix it

✓ **Good:** "Password must be at least 8 characters and include one number"  
→ Identifies the problem AND tells user exactly what to do

**Quality Criteria:**
- **Specific:** Not generic ("Error" fails)
- **Actionable:** Suggests how to fix it
- **Calm:** Avoid blame language
- **Consistent:** Same pattern throughout the form

---

### Color-Only Errors Fail <span class="outcome-pill">LO 1D.02</span>

**L03 Connection:** Remember SC 1.4.1 Use of Color. Color alone cannot convey information.

**Common Failure:**

❌ Red border only  
→ Fails SC 1.4.1 (color alone) AND SC 3.3.1 (no text description)

**Accessible Error State Pattern:**

✓ **Text message** (required by SC 3.3.1)  
✓ **Visual indicator** that's not just color (icon, symbol)  
✓ **Color** can enhance but not replace

**The Test:**

If you removed all color and showed your form in grayscale, would users still know which fields have errors and what's wrong? If no, you have a color-only failure.

> **Checkpoint: Error identification**
> - [ ] I can explain the two WCAG requirements for errors (3.3.1 and 3.3.3)
> - [ ] I can write error messages that identify the problem AND suggest a fix
> - [ ] I can identify color-only error states as failures

---

### Error Placement Patterns <span class="outcome-pill">LO 1D.02</span>

**Two Valid Patterns (Can Be Combined)**

**Inline Errors:**  
Error text placed near the field with the error

Advantages:
- Error appears in context
- Clear which field has the problem
- Works well for single-field validation

**Summary Errors:**  
Error list at top of form listing all errors

Advantages:
- User sees all problems at once
- Helpful for multi-field forms
- Provides navigation to error fields

**Best Practice:**  
Many accessible forms use BOTH: Summary at top with links to fields + Inline errors at each field.

**Key Requirement:**  
Error text must be **programmatically associated** with the field so screen readers announce it when the field receives focus.

---

### Input Purpose and Autocomplete <span class="outcome-pill">LO 1D.03</span>

**SC 1.3.5: Identify Input Purpose (Level AA)**

Input purpose must be programmatically determinable for fields that collect user information.

**Why This Matters:**

✓ **Browser autofill** saves users time and effort  
✓ **Password managers** work correctly  
✓ **Assistive technology** can help users fill forms  
✓ **Reduces errors** and cognitive load

**Especially important for:**
- Users with motor disabilities (fewer keystrokes)
- Users with cognitive disabilities (reduced memory demands)
- Everyone on mobile devices (faster completion)

**Common Autocomplete Values:**

| Category | Values |
|----------|--------|
| Personal | `name`, `given-name`, `family-name`, `email`, `tel` |
| Address | `street-address`, `city`, `postal-code`, `country` |
| Payment | `cc-number`, `cc-exp`, `cc-csc`, `cc-name` |
| Authentication | `username`, `current-password`, `new-password` |

**When to Specify Autocomplete:**

✓ YES: Any field collecting standard user information  
✗ NO: Search fields, application-specific data, one-time codes

**The Test:**

"If a browser or password manager COULD autofill this field, should it?" If yes, specify autocomplete.

> **Checkpoint: Input purpose**
> - [ ] I can explain why autocomplete matters for accessibility (SC 1.3.5)
> - [ ] I can identify which fields need autocomplete specification
> - [ ] I can match common input types with autocomplete values

---

### Annotating Forms <span class="outcome-pill">LO 1D.01</span> <span class="outcome-pill">LO 1D.02</span> <span class="outcome-pill">LO 1D.03</span>

**Primary annotation: Tab order**

Most form annotation focuses on specifying the order users navigate through fields. Use Stark's tab order annotation to document the expected sequence.

**For Each Input, Specify:**
- Tab order position in the form
- Label text and placement
- Instructions (text and placement)
- Autocomplete attribute value
- Required indicator

**For Error States, Specify:**
- Error trigger conditions
- Error message text (problem + solution)
- Error placement (inline/summary)
- Visual indicators

**When to add accessible names:**

Accessible names are only needed when an icon replaces a text label:
- Search field with magnifying glass icon only
- Icon-only clear/reset buttons
- Icon buttons within form fields

If the field has a visible text label, no additional accessible name annotation is needed.

**Your Job as Designer:**  
Specify all accessibility requirements in annotations

**Engineering's Job:**  
Implement the specifications you provide

> **Checkpoint: Form annotation**
> - [ ] I can specify tab order for form fields
> - [ ] I can document labels, instructions, and autocomplete values
> - [ ] I can specify error states with message text and placement
> - [ ] I know when accessible names are needed (icon-only controls only)

---

## Assessment

### Knowledge Check Quiz
**5 questions | 5 points | Auto-graded | Open-book**

Test your understanding of form accessibility requirements:
- Labels and instructions (1D.01): 2 questions
- Error identification (1D.02): 2 questions
- Autocomplete (1D.03): 1 question

---

## Resources

### W3C Resources
- [Understanding SC 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [Understanding SC 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [Understanding SC 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)
- [Understanding SC 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- [WAI Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)

### Adobe Resources
- Design Accessibility Checklist (Forms section)
- Adobe Spectrum Design System: Form Components
- Stark Figma Plugin Guide (internal)
- Digital Accessibility Guide (internal)

### Tools
- **Stark (Figma plugin)**: Tab order and accessible name annotations

---

## Up Next

**Lesson 05: Keyboard & Touch** covers keyboard accessibility, focus management, and touch target sizing. Forms must be keyboard accessible, focus indicators must be visible, and error messages must be keyboard navigable.

---

*Last updated: January 2026*  
*Version: 2.0*  
*For: DACE Discover Badge*
