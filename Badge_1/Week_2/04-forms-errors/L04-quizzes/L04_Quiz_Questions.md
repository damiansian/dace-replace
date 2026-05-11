# L04: Forms and Errors - Quiz Questions

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Discover  
**Lesson:** L04  
**Assessment Type:** Knowledge Check Quiz  
**Points:** 5 (1 point per question)  
**Format:** Auto-graded, multiple choice  
**Outcomes Tested:** 1D.01 (x2), 1D.02 (x2), 1D.03

---

## Question 1: Placeholder Labels (Outcome 1D.01)

**Question:**

A form uses placeholder text inside input fields instead of visible labels. What is the primary accessibility problem?

**Answer Options:**

A) Placeholder text disappears when users start typing, leaving them without context  
B) Placeholder text is too small to read
C) Placeholder text cannot be translated which negatively impacts localization
D) Placeholder text uses the wrong color  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! When placeholder text disappears, users lose the context of what information the field requires. This is especially problematic for users with cognitive disabilities or anyone who gets interrupted while filling out a form. SC 3.3.2 requires labels to be visible and persistent."

**If B selected:**
"Incorrect. While placeholder text contrast can be an issue, this is not the primary accessibility problem with placeholder-only labels. The main issue is that placeholders disappear when users start typing."

**If C selected:**
"Incorrect. Placeholder text can be translated just like any other text. The accessibility issue is that placeholder text disappears when users begin typing, leaving them without context about what the field requires."

**If D selected:**
"Incorrect. While placeholder text often has low contrast, the primary accessibility problem is that it disappears when users start typing. Users need persistent labels that remain visible throughout the form completion process."

---

## Question 2: Icon-Only Labels (Outcome 1D.01)

**Stimulus**
A text field component with the email icon serving as the label and value asking for an email address. 

**Question:**

A designer creates an email input field that uses an envelope icon instead of a visible text label. What must the designer annotate for this field to be accessible?

**Answer Options:**

A) An accessible name for the icon (e.g., "Email address")  
B) The icon must 24 by 24 pixels
C) The icon color must have 4.5:1 contrast  
D) No annotation is needed since the icon is universally understood  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! When an icon replaces a text label, the designer must annotate an accessible name. Screen readers cannot interpret icons visually, so without an accessible name annotation like 'Email address,' users would hear only 'text input' with no indication of what information to enter."

**If B selected:**
"Incorrect. The 24x24 pixel requirement applies to interactive touch targets, not icons serving as labels. The icon is not the hit area for this input, the text field is. The critical accessibility requirement is providing an accessible name so screen reader users know what information to enter."

**If C selected:**
"Incorrect. While the icon does need sufficient contrast under SC 1.4.11, this doesn't solve the labeling problem. Screen readers cannot see the icon at all, so contrast is irrelevant for them. The field needs an accessible name annotation."

**If D selected:**
"Incorrect. No icon is universally understood, and even if it were, screen readers cannot interpret visual symbols. An envelope icon provides zero information to someone using a screen reader. An accessible name annotation is required."

---

## Question 3: Error Message Content (Outcome 1D.02)

**Question:**

A user enters "john.smith@" in an email field and submits the form. Which error message best meets WCAG requirements?

**Answer Options:**

A) "Please enter a valid email address, for example: name@company.com"  
B) "The email field contains an error that must be corrected"  
C) "Email format is incorrect, please review your entry carefully"  
D) "There was a problem with the information you entered"  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! This message identifies the problem (invalid email format) and suggests how to fix it (shows an example of correct format). SC 3.3.1 requires errors be identified, and SC 3.3.3 requires suggestions for correction."

**If B selected:**
"Incorrect. This identifies there's an error but doesn't explain what's wrong or how to fix it. Users need to know specifically what the problem is and what format is expected."

**If C selected:**
"Incorrect. This identifies the problem (incorrect format) but 'review your entry carefully' isn't a helpful suggestion. Users need specific guidance on the correct format."

**If D selected:**
"Incorrect. This is too vague. It doesn't identify which field has the error, what's wrong, or how to fix it. Users would have to guess what went wrong."

---

## Question 4: Error Indication (Outcome 1D.02)

**Question:**

A form field's border turns red when there's an error, but no error text is displayed. What WCAG failure does this represent?

**Answer Options:**

A) Both SC 1.4.1 Use of Color and SC 3.3.1 Error Identification  
B) Both SC 1.4.11 UI Contrast and SC 3.3.2 Labels and Instructions
C) Both SC 1.4.3 Text Contrast and SC 3.3.4: Error Prevention (Legal, Financial, Data)  
D) Both SC 1.4.6: Contrast (Enhanced) and SC SC 3.3.3: Error Suggestion

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! This fails SC 1.4.1 because color is the only indicator of the error (users with color vision deficiencies may not perceive the red). It also fails SC 3.3.1 because the error is not described in text. Accessible error states require text descriptions plus non-color visual indicators like icons."

**If B selected:**
"Incorrect. SC 1.4.11 (Non-text Contrast) addresses whether UI components have sufficient contrast ratio (3:1), not whether color is used alone to convey information. SC 3.3.2 (Labels or Instructions) is about providing labels for inputs, not about error states. The correct criteria are SC 1.4.1 (color as sole indicator) and SC 3.3.1 (errors must be described in text)."

**If C selected:**
"Incorrect. SC 1.4.3 (Contrast Minimum) addresses text contrast ratios (4.5:1), not whether color alone conveys information. SC 3.3.4 (Error Prevention) applies to legal, financial, or data submissions requiring user confirmation, not to how errors are displayed. The correct criteria are SC 1.4.1 and SC 3.3.1."

**If D selected:**
"Incorrect. SC 1.4.6 (Contrast Enhanced) is a AAA-level criterion for 7:1 text contrast, not about color as information. SC 3.3.3 (Error Suggestion) requires providing suggestions for fixing errors, but this scenario fails before that: there's no error text at all. The correct criteria are SC 1.4.1 (color alone) and SC 3.3.1 (error identification in text)."

---

## Question 5: Input Purpose Understanding (Outcome 1D.03)

**Question:**

Why does SC 1.3.5 (Identify Input Purpose) require autocomplete support for fields collecting personal information?

**Answer Options:**

A) It helps users with motor and cognitive disabilities complete forms faster with fewer errors  
B) It ensures form field borders have sufficient contrast against the background  
C) It requires all form fields to display inline validation messages  
D) It prevents users from submitting forms with empty required fields  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! Autocomplete reduces keystrokes for users with motor disabilities and reduces memory demands for users with cognitive disabilities. When browsers and assistive technologies can identify input purpose, they can help users fill forms automatically."

**If B selected:**
"Incorrect. Form field contrast is covered by SC 1.4.11 (Non-text Contrast), not SC 1.3.5. Input purpose is about enabling autocomplete so browsers and assistive technologies can help users fill in personal information automatically."

**If C selected:**
"Incorrect. Validation messages relate to SC 3.3.1 (Error Identification), not SC 1.3.5. Input purpose is about enabling autocomplete for fields collecting user information like names, addresses, and payment details."

**If D selected:**
"Incorrect. Required field validation relates to SC 3.3.1 and 3.3.2, not SC 1.3.5. Input purpose is about enabling autocomplete so browsers and assistive technologies can help users complete forms with less effort."

---

## Implementation Notes for Canvas

### Quiz Settings

- **Quiz Type:** Graded Quiz
- **Points:** 5 (1 point per question)
- **Time Limit:** None (open-book assessment)
- **Allowed Attempts:** 1
- **Show Correct Answers:** After submission
- **One Question at a Time:** No (show all on one page)
- **Shuffle Answers:** Yes

### Question Format

- All questions are multiple choice with single correct answer
- Each question maps to exactly one learning outcome
- Immediate feedback provided after submission
- Students should refer to lesson materials and WCAG documentation

### Passing Criteria

- Students must answer all questions to complete
- Minimum passing score: Not applicable (formative assessment)
- Results contribute to overall lesson grade

### QTI Export Requirements

If exporting to QTI format for Canvas import:
- Use QTI 1.2 or 2.1 format
- Include all feedback (correct and incorrect) in export
- Test import in Canvas sandbox before production use
- Verify that formatting renders correctly

---

## Outcome Mapping Summary

| Question | Outcome | Topic | Difficulty |
|----------|---------|-------|------------|
| Q1 | 1D.01 | Placeholder labels disappear, failing SC 3.3.2 | Easy |
| Q2 | 1D.01 | Icon-only inputs require accessible name annotation | Easy-Medium |
| Q3 | 1D.02 | Error message quality: specific and actionable | Easy-Medium |
| Q4 | 1D.02 | Color-only errors fail both 1.4.1 and 3.3.1 | Medium |
| Q5 | 1D.03 | Input purpose documentation for SC 1.3.5 | Easy-Medium |

---

## Validation Checklist

Before deploying quiz:
- [ ] All questions reviewed for accuracy against WCAG 2.2
- [ ] Feedback reviewed for clarity and helpfulness
- [ ] Questions map correctly to stated outcomes
- [ ] Answer options are plausible distractors
- [ ] No trick questions or ambiguous wording
- [ ] Tested in Canvas LMS
- [ ] Feedback displays correctly for all answer choices
- [ ] Points configured correctly (1 per question, 5 total)

---

*Last updated: January 2026*  
*Version: 1.0*  
*For: DACE L04: Forms and Errors*
