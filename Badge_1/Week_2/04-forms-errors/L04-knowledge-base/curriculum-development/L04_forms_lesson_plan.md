# L04: Forms and Errors - Lesson Plan

**Course:** DACE  
**Badge:** Discover  
**Delivery:** Online (asynchronous, self-paced)  
**Duration:** 30 minutes  
**Outcomes:** 1D.01, 1D.02, 1D.03

---

## Lesson Overview

This online, self-paced lesson teaches designers how to create accessible form experiences. Students learn to specify clear labels, design accessible error states, and understand how input purpose identification benefits users with disabilities.

**Why This Matters:** Forms are where users provide information to complete tasks. When forms are inaccessible, users cannot sign up, purchase, submit requests, or accomplish their goals. Form accessibility failures are task-blocking barriers.

**Connection to L01:** Form labels are accessible names for form controls. The quality criteria from L01 (clear, concise, function over form) apply directly to form labels.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 1.3.5 | Identify Input Purpose | AA | Autocomplete attributes for user data fields |
| 3.3.1 | Error Identification | A | Errors identified and described in text |
| 3.3.2 | Labels or Instructions | A | Labels or instructions provided for inputs |
| 3.3.3 | Error Suggestion | AA | Suggestions provided for fixing errors |

---

## Content Outline

### Section 0: Title and Objectives (1 min)
- Lesson title with self-paced indicator
- Learning objectives display (1D.01, 1D.02, 1D.03)
- L01 connection callout

### Section 1: Why Form Accessibility Matters (4 min)
- Task-blocking vs inconvenience distinction
- Form labels ARE accessible names (L01 connection)
- Screen reader announcement: Label + Role + State
- **Checkpoint:** Why forms matter

**Key Message:** If someone cannot complete your form, they cannot use your product.

### Section 2: Labels and Instructions (8 min)

**2.1 The Placeholder Problem**
- Placeholders disappear when users start typing
- Users lose context mid-task
- Visual: before/after typing comparison

**2.2 Label Requirements (SC 3.3.2)**
- Visible (not hidden or placeholder-only)
- Persistent (doesn't disappear)
- Associated with the input
- Descriptive (explains expected input)

**2.3 When Instructions Are Needed**
- Format requirements
- Character limits
- Special constraints
- Placement options

**2.4 Good vs Bad Labels**
- Example comparison: placeholder-only, distant label, proper label

**Checkpoint:** Labels and instructions

### Section 3: Error Identification (8 min)

**3.1 Two WCAG Requirements**
- SC 3.3.1: Error must be identified and described in text
- SC 3.3.3: Suggestions for fixing errors must be provided

**3.2 Error Message Quality**
- Bad → Okay → Good progression
- Quality criteria: Specific, Actionable, Calm, Consistent

**3.3 Color-Only Errors Fail**
- L03 connection: SC 1.4.1 Use of Color
- Red border alone fails both 1.4.1 and 3.3.1
- Accessible pattern: Text + Icon + Color

**3.4 Error Placement Patterns**
- Inline errors
- Summary errors
- Best practice: use both

**Checkpoint:** Error identification

### Section 4: Input Purpose and Autocomplete (5 min)

**4.1 Why Autocomplete Matters**
- SC 1.3.5 requirements
- Benefits: autofill, password managers, AT support

**4.2 Common Autocomplete Values**
- Personal, Address, Payment, Authentication categories
- When to specify vs when not needed

**Checkpoint:** Input purpose

### Section 5: Annotating Forms (3 min)

**5.1 What to Annotate**
- Primary: Tab order
- Labels and instructions
- Error states with message text and placement

**5.2 When to Add Accessible Names**
- Only for icon-only controls (search field icons, clear buttons)
- Not needed when visible text label exists

**Checkpoint:** Form annotation

### Section 6: Quiz and Resources (1 min)
- Quiz preview (5 questions)
- Resource links
- Connection to next lesson (L05)

---

## Quiz Questions

### Q1 (1D.01): Placeholder Labels
A form uses placeholder text inside input fields instead of visible labels. What is the primary accessibility problem?

A) Placeholder text is too small to read  
B) Placeholder text disappears when users start typing, leaving them without context  
C) Placeholder text cannot be translated  
D) Placeholder text uses the wrong color  

**Correct Answer:** B  
**Rationale:** When placeholder text disappears, users lose the context of what information the field requires. This is especially problematic for users with cognitive disabilities or anyone who gets interrupted while filling out a form.

---

### Q2 (1D.01): Label Association
A designer creates a form with visible labels positioned above each input field. What additional requirement must be met for the labels to be accessible?

A) Labels must be bold text  
B) Labels must be programmatically associated with their inputs  
C) Labels must include the word "required" for all fields  
D) Labels must be a specific minimum font size  

**Correct Answer:** B  
**Rationale:** Visible labels are necessary but not sufficient. Labels must be programmatically associated with inputs so screen readers can announce the label when the input receives focus.

---

### Q3 (1D.02): Error Message Content
A password field shows an error. Which error message best meets WCAG requirements?

A) "Error"  
B) "Invalid password"  
C) "Password must be at least 8 characters and include one number"  
D) "Please try again"  

**Correct Answer:** C  
**Rationale:** SC 3.3.1 requires errors to be identified and described. SC 3.3.3 requires suggestions for fixing errors. Option C identifies what's wrong (too short, missing number) and tells the user how to fix it.

---

### Q4 (1D.02): Error Indication
A form field's border turns red when there's an error, but no error text is displayed. What WCAG failure does this represent?

A) Only SC 1.4.1 Use of Color  
B) Only SC 3.3.1 Error Identification  
C) Both SC 1.4.1 Use of Color and SC 3.3.1 Error Identification  
D) Neither, this is acceptable  

**Correct Answer:** C  
**Rationale:** This fails SC 1.4.1 because color is the only indicator of the error. It also fails SC 3.3.1 because the error is not described in text. Accessible error states require text descriptions plus non-color visual indicators.

---

### Q5 (1D.03): Input Purpose Understanding
Why does SC 1.3.5 (Identify Input Purpose) require autocomplete support for fields collecting personal information?

A) It helps users with motor and cognitive disabilities complete forms faster with fewer errors  
B) It ensures form field borders have sufficient contrast against the background  
C) It requires all form fields to display inline validation messages  
D) It prevents users from submitting forms with empty required fields  

**Correct Answer:** A  
**Rationale:** Autocomplete reduces keystrokes for users with motor disabilities and reduces memory demands for users with cognitive disabilities. When browsers and assistive technologies can identify input purpose, they can help users fill forms automatically.

---

## Resources

**W3C:**
- Understanding SC 1.3.5 Identify Input Purpose
- Understanding SC 3.3.1 Error Identification
- Understanding SC 3.3.2 Labels or Instructions
- Understanding SC 3.3.3 Error Suggestion
- WAI Forms Tutorial: https://www.w3.org/WAI/tutorials/forms/

**Adobe:**
- Design Accessibility Checklist (Forms section)
- Spectrum: Form Components
- Stark Figma Plugin Guide

---

## Notes for Content Development

### Self-Paced Considerations

1. **Checkpoints:** Each section ends with a self-assessment checkpoint. Learners verify understanding before continuing.

2. **Visual emphasis:** Use more text on frames since learners control the pace. Important concepts need visual callouts.

3. **Connections:** Explicitly link to L01 (accessible names) and L03 (color). These callbacks reinforce prior learning.

4. **Practical tests:** Each major concept includes a "test" learners can apply: placeholder test, instruction test, grayscale test.

### Key Teaching Moments

1. **Labels ARE accessible names:** This connection to L01 is crucial. Reinforce that form accessibility is applying accessible name principles to a specific context.

2. **Placeholder problem:** Extremely common failure. Visual before/after comparison makes the problem visceral.

3. **Error message quality:** The difference between "Error" and a specific, actionable message is dramatic.

4. **Tab order as primary annotation:** Most form annotation is tab order. Accessible names are only needed for icon-only controls.

### Common Student Questions

- Q: "Do I need labels if the placeholder describes the field?"
  A: Yes. Placeholders disappear. Labels must be visible and persistent.

- Q: "Can I use an icon instead of error text?"
  A: Icons can supplement but not replace text. Error must be described in text per SC 3.3.1.

- Q: "Why does autocomplete matter for accessibility?"
  A: It reduces keystrokes for users with motor disabilities and memory demands for users with cognitive disabilities. Implementation is engineering's responsibility, but designers should understand the user benefits.

- Q: "When do I need to add an accessible name annotation?"
  A: Only when an icon replaces a text label. If there's a visible label, no additional accessible name is needed.

### Connection to Other Lessons

- **L01 Accessible Names:** Labels are accessible names for form controls
- **L03 Color:** Error states must not rely on color alone
- **L05 Keyboard:** Form fields must be keyboard accessible
- **L07 Navigation:** Form structure contributes to page navigation
