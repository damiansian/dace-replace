# Lesson 04: Forms and Errors
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Discover
**Delivery:** Online (asynchronous, self-paced)
**Duration:** 30 minutes
**Outcomes Covered:** 1D.01, 1D.02, 1D.03

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 0.1-0.2 | 1 min | — |
| 1. Why Form Accessibility Matters | 1.1-1.4 | 4 min | All |
| 2. Labels and Instructions | 2.1-2.6 | 8 min | 1D.01 |
| 3. Error Identification | 3.1-3.6 | 8 min | 1D.02 |
| 4. Input Purpose and Autocomplete | 4.1-4.4 | 5 min | 1D.03 |
| 5. Annotating Forms | 5.1-5.3 | 3 min | All |
| 6. Quiz & Resources | 6.1-6.2 | 1 min | — |

**Total frames:** 25

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#5151D3` (Discover Badge purple)
- Frame dimensions: 1440x900
- Online format: Include more text on frames since learners self-pace
- Keep speaker notes brief (for reference, not live delivery)

---

## Learning objective pill component

Same specs as L01/L02:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light blue (#E6F2FF) at 15% opacity
- Text: 12px, medium weight, "LO 1D.0X"
- Links to Frame 0.2

---

## Frame 0: Title & objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 04`
- Title: `Forms and Errors`
- Subtitle: `Designing accessible form experiences`
- Badge level indicator: `Discover Badge`
- Duration: `30 minutes`
- Format indicator: `Online Lesson`

**Speaker notes:**
Welcome to Lesson 04. This is an online, self-paced lesson. Pause and revisit sections as needed.

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
| 1D.01 | Specify form field labels and instructions: Design clear labels and instructional text for form inputs |
| 1D.02 | Design accessible error identification: Create error states that identify and describe errors in accessible ways |
| 1D.03 | Apply input purpose requirements: Understand how autocomplete benefits users with disabilities |

**Connection callout:**
Form labels are accessible names for form controls. This lesson applies L01 principles to forms.

**Speaker notes:**
Three focused outcomes. Forms are where users complete tasks. Accessibility failures here block users entirely.

---

# Section 1: Why form accessibility matters
## Duration: 4 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Why Form Accessibility Matters`

---

### Frame 1.2: Task blocking vs inconvenience

**Type:** Concept comparison

**Layout:** Two-column comparison

**Left column:**
- Heading: `Inconvenience`
- Icon: Warning triangle
- Body: `Difficult but possible`
- Example: Poor contrast makes text hard to read, but users can squint or zoom

**Right column:**
- Heading: `Task Blocking`
- Icon: Stop sign
- Body: `Prevents completion entirely`
- Example: Missing label means screen reader user cannot identify field purpose

**Headline:** Form failures block task completion

**Body text:**
Unlike many accessibility issues that create inconvenience, form failures are task-blocking barriers. If someone cannot complete your form, they cannot use your product.

**Speaker notes:**
This distinction matters. A contrast issue is annoying. A missing form label is a dead end.

---

### Frame 1.3: Labels ARE accessible names

**Type:** Connection diagram

**Layout:** Diagram with L01 callback

**Diagram:**
```
Screen reader announces:

"Email, text input, required"
   │         │        │
   └─ Label  └─ Role  └─ State
      (Accessible Name)
```

**Headline:** Form labels are accessible names

**Body text:**
Remember from L01: accessible names connect users to interface elements. Form labels are accessible names for form controls.

All L01 quality criteria apply:
- Clear and concise
- Function over form
- Visible text preferred

**Connection box (styled):**
L01 Connection: This lesson applies accessible name principles to the high-stakes context of forms.

**Learning Objective Pill:** `LO 1D.01`

**Speaker notes:**
This reinforces the L01 foundation. Labels are a specific type of accessible name.

---

### Frame 1.4: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist for self-assessment

**Headline:** Checkpoint: Why forms matter

**Body text:**
Before continuing, verify you understand these foundational concepts:

**Checklist:**
- [ ] I can explain why form accessibility failures are task-blocking, not just inconvenient
- [ ] I understand that form labels are accessible names for form controls
- [ ] I can connect L01 quality criteria to form label design

**Learning Objective Pill:** `LO 1D.01`

**Speaker notes:**
If any item feels unclear, revisit the previous frames before continuing.

---

# Section 2: Labels and instructions
## Duration: 8 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Labels and Instructions`

---

### Frame 2.2: The placeholder problem

**Type:** Before/after comparison

**Layout:** Two-state comparison with problem callout

**State 1 (Before typing):**
- Form field with placeholder: "Enter your email"
- User sees the placeholder

**State 2 (After typing):**
- Same form field, user has typed "john@"
- Placeholder is gone
- Caption: `User loses context mid-task`

**Headline:** Why placeholder text fails as labels

**Body text:**
One of the most common form accessibility failures: using placeholder text as the only label.

**What happens:**
- User sees placeholder: "Enter your email"
- User clicks field and starts typing
- Placeholder disappears
- **User loses context mid-task**

**Why it fails:**
- Cognitive load: Users must remember what each field requires
- Accessibility: Screen readers may not announce placeholder text consistently
- Recovery: User must delete input to see the placeholder again

**Learning Objective Pill:** `LO 1D.01`

**Speaker notes:**
This failure is extremely common. The visual shows exactly why it's problematic.

---

### Frame 2.3: Label requirements

**Type:** Requirements checklist

**Layout:** Checklist with example

**Headline:** What WCAG requires (SC 3.3.2)

**Checklist:**
- ✓ **Visible**: Not hidden or placeholder-only
- ✓ **Persistent**: Doesn't disappear when user types
- ✓ **Associated**: Programmatically connected to the input
- ✓ **Descriptive**: Explains what input is expected

**Example (visual):**
Form field showing:
- Label above: "Email address"
- Placeholder inside: "name@example.com"
- Both visible, label persistent

**Body text:**
Labels go above or to the left of fields. Placeholder text can provide examples but never replaces the label.

**Learning Objective Pill:** `LO 1D.01`

**Speaker notes:**
Four requirements. All must be met. Placeholder alone fails three of them.

---

### Frame 2.4: When instructions are needed

**Type:** Guidance with examples

**Layout:** Distinction + examples

**Headline:** Labels vs instructions

**Distinction:**
- **Label:** Identifies the field ("Password")
- **Instruction:** Guides the input ("Must be 8-20 characters with at least one number")

**When to add instructions:**
- Format requirements: "MM/DD/YYYY"
- Character limits: "Maximum 250 characters"
- Special constraints: "Must include at least one number"

**Where to place instructions:**
1. Below label, above input (most common)
2. As helper text below input
3. In tooltip (NOT recommended: accessibility concerns)

**The Test callout:**
Can a user complete the field correctly without trial and error? If not, add instructions.

**Learning Objective Pill:** `LO 1D.01`

**Speaker notes:**
Instructions reduce errors. If users need specific formats, tell them upfront.

---

### Frame 2.5: Example: Good vs bad labels

**Type:** Three-example comparison

**Layout:** Three form examples side by side

**Example A (Bad):**
- Form field with only placeholder text "Email"
- Red X indicator
- Caption: `Fails: Placeholder only`

**Example B (Risky):**
- Form field with label far from input
- Amber indicator
- Caption: `Risky: Label not clearly associated`

**Example C (Good):**
- Form field with label above, instruction below label
- Green checkmark
- Caption: `Passes: Visible, persistent, associated, with instruction`

**Headline:** Evaluate label quality

**Body text:**
Apply the four requirements: visible, persistent, associated, descriptive.

**Learning Objective Pill:** `LO 1D.01`

**Speaker notes:**
  These patterns appear constantly in design reviews. Know which pass and why.

---

### Frame 2.6: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist with outcome card

**Headline:** Checkpoint: Labels and instructions

**Body text:**
Verify you can apply label requirements:

**Checklist:**
- [ ] I can identify placeholder-only labels as a common failure
- [ ] I can apply the four label requirements (visible, persistent, associated, descriptive)
- [ ] I can determine when instructions are needed beyond labels
- [ ] I can evaluate form designs for proper labeling

**Outcome card (right side):**
- Icon: Lightbulb
- Title: `Learning Outcome 1D.01`
- Description: `Specify form field labels and instructions: Design clear labels and instructional text for form inputs.`

**Learning Objective Pill:** `LO 1D.01`

**Speaker notes:**
If any item feels unclear, revisit Frames 2.2-2.5. These skills are fundamental to form accessibility.

---

# Section 3: Error identification
## Duration: 8 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Error Identification`

---

### Frame 3.2: Error message requirements

**Type:** Requirements with WCAG reference

**Layout:** Two requirement boxes + quality criteria

**Headline:** Two WCAG requirements for errors

**Requirement box 1:**
- SC: `3.3.1 Error Identification (Level A)`
- Requirement: Errors must be identified and described in text

**Requirement box 2:**
- SC: `3.3.3 Error Suggestion (Level AA)`
- Requirement: Suggestions for fixing errors must be provided

**Body text:**
Every error message must answer two questions:
1. **What went wrong?** (the problem)
2. **How do I fix it?** (the solution)

**Learning Objective Pill:** `LO 1D.02`

**Speaker notes:**
Both requirements matter. Identifying the error without suggesting a fix still fails AA.

---

### Frame 3.3: Error message quality

**Type:** Three-tier comparison

**Layout:** Bad → Okay → Good progression

**Headline:** Error message quality spectrum

**Bad example:**
- Message: "Error"
- Red X
- Problem: Doesn't identify what's wrong or how to fix it

**Okay example:**
- Message: "Invalid password"
- Amber indicator
- Problem: Identifies field but doesn't explain the fix

**Good example:**
- Message: "Password must be at least 8 characters and include one number"
- Green checkmark
- Why it works: Identifies problem AND tells user exactly what to do

**Quality criteria:**
- **Specific:** Not generic ("Error" fails)
- **Actionable:** Suggests how to fix it
- **Calm:** Avoid blame language
- **Consistent:** Same pattern throughout the form

**Learning Objective Pill:** `LO 1D.02`

**Speaker notes:**
The difference is dramatic. Good error messages reduce support calls and user frustration.

---

### Frame 3.4: Color-only errors fail

**Type:** L03 connection with example

**Layout:** Bad/good comparison

**Headline:** Color cannot be the only indicator

**Connection callout:**
L03 Connection: Remember SC 1.4.1 Use of Color. Color alone cannot convey information.

**Bad example:**
- Form field with red border only
- Red X
- Caption: `Fails SC 1.4.1 (color alone) AND SC 3.3.1 (no text)`

**Good example:**
- Form field with red border + warning icon + text message
- Green checkmark
- Caption: `Passes: Text + icon + color`

**Accessible error state pattern:**
- ✓ Text message (required by SC 3.3.1)
- ✓ Visual indicator that's not just color (icon, symbol)
- ✓ Color can enhance but not replace

**The Test callout:**
If you removed all color and showed your form in grayscale, would users still know which fields have errors and what's wrong?

**Learning Objective Pill:** `LO 1D.02`

**Speaker notes:**
This connects directly to L03. Grayscale test reveals color-only failures.

---

### Frame 3.5: Error placement patterns

**Type:** Pattern comparison

**Layout:** Two valid patterns

**Headline:** Where to show errors

**Pattern 1: Inline errors**
- Description: Error text placed near the field
- Visual: Form field with error message below it
- Advantages: Error in context, clear which field has problem

**Pattern 2: Summary errors**
- Description: Error list at top of form
- Visual: Error summary box with links to fields
- Advantages: User sees all problems at once, helpful for long forms

**Best practice callout:**
Many accessible forms use BOTH: Summary at top with links + Inline errors at each field.

**Key requirement:**
Error text must be programmatically associated with the field so screen readers announce it when the field receives focus.

**Learning Objective Pill:** `LO 1D.02`

**Speaker notes:**
Both patterns are valid. The key is text description + association with the field.

---

### Frame 3.6: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist with outcome card

**Headline:** Checkpoint: Error identification

**Body text:**
Verify you can design accessible error states:

**Checklist:**
- [ ] I can explain the two WCAG requirements for errors (3.3.1 and 3.3.3)
- [ ] I can write error messages that identify the problem AND suggest a fix
- [ ] I can identify color-only error states as failures
- [ ] I can specify error placement patterns (inline, summary, or both)

**Outcome card (right side):**
- Icon: Lightbulb
- Title: `Learning Outcome 1D.02`
- Description: `Design accessible error identification: Create error states that identify and describe errors in accessible ways.`

**Learning Objective Pill:** `LO 1D.02`

**Speaker notes:**
Error design is a key differentiator in form accessibility. These skills apply to every form you review.

---

# Section 4: Input purpose and autocomplete
## Duration: 5 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Input Purpose and Autocomplete`

---

### Frame 4.2: Why autocomplete matters

**Type:** Benefits with WCAG reference

**Layout:** SC reference + benefits list

**Headline:** SC 1.3.5: Identify Input Purpose (Level AA)

**Body text:**
Input purpose must be programmatically determinable for fields collecting user information.

**Why this matters:**
- ✓ Browser autofill saves time and effort
- ✓ Password managers work correctly
- ✓ Assistive technology can help users fill forms
- ✓ Reduces errors and cognitive load

**Especially important for:**
- Users with motor disabilities (fewer keystrokes)
- Users with cognitive disabilities (reduced memory demands)
- Everyone on mobile (faster completion)

**Learning Objective Pill:** `LO 1D.03`

**Speaker notes:**
Autocomplete is often seen as "just engineering," but understanding WHY it matters helps designers advocate for it.

---

### Frame 4.3: Common autocomplete values

**Type:** Reference table

**Layout:** Categorized value table

**Headline:** Autocomplete tokens to know

**Table:**

| Category | Values |
|----------|--------|
| **Personal** | `name`, `given-name`, `family-name`, `email`, `tel` |
| **Address** | `street-address`, `city`, `postal-code`, `country` |
| **Payment** | `cc-number`, `cc-exp`, `cc-csc`, `cc-name` |
| **Authentication** | `username`, `current-password`, `new-password` |

**When autocomplete applies:**
- ✓ YES: Any field collecting standard user information
- ✗ NO: Search fields, application-specific data, one-time codes

**The Test callout:**
"If a browser or password manager COULD autofill this field, should it?" If yes, autocomplete support benefits users.

**Learning Objective Pill:** `LO 1D.03`

**Speaker notes:**
You don't need to memorize all values. Know the categories and look up specific values when needed.

---

### Frame 4.4: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist with outcome card

**Headline:** Checkpoint: Input purpose

**Body text:**
Verify you understand input purpose requirements:

**Checklist:**
- [ ] I can explain why autocomplete matters for accessibility (SC 1.3.5)
- [ ] I can identify which fields would benefit from autocomplete support
- [ ] I can explain how autocomplete helps users with motor and cognitive disabilities
- [ ] I can determine when autocomplete is NOT needed

**Outcome card (right side):**
- Icon: Lightbulb
- Title: `Learning Outcome 1D.03`
- Description: `Apply input purpose requirements: Understand how autocomplete benefits users with disabilities.`

**Learning Objective Pill:** `LO 1D.03`

**Speaker notes:**
Autocomplete implementation is engineering's responsibility, but designers should understand why it matters for users.

---

# Section 5: Annotating forms
## Duration: 3 minutes

### Frame 5.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `5`
- Title: `Annotating Forms`

---

### Frame 5.2: Form annotation checklist

**Type:** Annotation guidance

**Layout:** Checklist with annotation focus

**Headline:** What to annotate in form designs

**Primary annotation: Tab order**
Most form annotation focuses on specifying the order users navigate through fields. Use Stark's tab order annotation to document the expected sequence.

**For each input, specify:**
- Tab order position in the form
- Label text and placement
- Instructions (text and placement)
- Required indicator

**For error states, specify:**
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

**Learning Objective Pills:** `LO 1D.01` `LO 1D.02` `LO 1D.03`

**Speaker notes:**
Tab order is the primary form annotation. Add accessible names only for icon-only controls.

---

### Frame 5.3: Checkpoint

**Type:** Summary/checkpoint

**Layout:** Final checklist

**Headline:** Checkpoint: Form annotation

**Body text:**
Verify you can annotate forms for engineering:

**Checklist:**
- [ ] I can specify tab order for form fields
- [ ] I can document labels and instructions
- [ ] I can specify error states with message text and placement
- [ ] I know when accessible names are needed (icon-only controls only)
- [ ] I can create annotations that engineering can implement

**Summary callout:**
Your job as designer: Specify all accessibility requirements in annotations.
Engineering's job: Implement the specifications you provide.

**Learning Objective Pills:** `LO 1D.01` `LO 1D.02` `LO 1D.03`

**Speaker notes:**
Clear annotations prevent implementation questions and rework.

---

# Section 6: Quiz & resources
## Duration: 1 minute

### Frame 6.1: Quiz preview

**Type:** Assessment preview

**Layout:** Quiz details card

**Headline:** Knowledge check

**Details:**
- **Questions:** 5
- **Points:** 5 (1 point each)
- **Format:** Multiple choice, open-book
- **Topics:**
  - Labels and instructions (1D.01): 2 questions
  - Error identification (1D.02): 2 questions
  - Autocomplete (1D.03): 1 question

**Callout:**
Complete the quiz to finish this lesson.

**Speaker notes:**
Five questions covering all three outcomes. Open-book, just like real design work.

---

### Frame 6.2: Resources

**Type:** Resource links

**Layout:** Organized list

**Headline:** Resources for reference

**W3C resources:**
- Understanding SC 3.3.2: Labels or Instructions
  `https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html`
- Understanding SC 3.3.1: Error Identification
  `https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html`
- Understanding SC 3.3.3: Error Suggestion
  `https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html`
- Understanding SC 1.3.5: Identify Input Purpose
  `https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html`
- WAI Forms Tutorial
  `https://www.w3.org/WAI/tutorials/forms/`

**Adobe resources:**
- Design Accessibility Checklist (Forms section)
- Adobe Spectrum: Form Components
- Stark Figma Plugin Guide

**Up Next:**
Lesson 05: Keyboard & Touch

**Speaker notes:**
These resources are also linked on the Canvas page.

---

# Appendix: Frame count summary

| Section | Frames |
|---------|--------|
| 0. Title & Objectives | 2 |
| 1. Why Form Accessibility Matters | 4 |
| 2. Labels and Instructions | 6 |
| 3. Error Identification | 6 |
| 4. Input Purpose and Autocomplete | 4 |
| 5. Annotating Forms | 3 |
| 6. Quiz & Resources | 2 |
| **Total** | **27** |

---

# Appendix: Visual asset needs

**Reusable from L01/L02:**
- Learning Objective Pill component
- Section divider template
- Checkpoint layout with outcome card
- Good/bad comparison layout
- Checkmark/X indicators

**New for L04:**
- Placeholder before/after typing comparison
- Form field with label + instruction layout
- Three-tier error message quality comparison
- Color-only vs accessible error state comparison
- Inline vs summary error placement examples
- Autocomplete value reference table
- Tab order annotation example

**Form examples needed:**
- Placeholder-only form (bad)
- Properly labeled form with instructions (good)
- Error states: red border only vs complete error pattern
- Search field with icon-only (needs accessible name annotation)

---

*End of build guide*
