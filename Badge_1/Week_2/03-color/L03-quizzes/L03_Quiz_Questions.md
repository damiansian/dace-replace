# L03: Color - Quiz Questions

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Discover  
**Lesson:** L03  
**Assessment Type:** Knowledge Check Quiz  
**Points:** 5 (1 point per question)  
**Format:** Auto-graded, multiple choice  
**Outcomes Tested:** 1C.01 (x3), 1C.02, 1C.03

---

## Question 1: Contrast Requirements (Outcome 1C.01)

**Question:**

You're testing a button with the following specifications:
- Button text: "Submit" (16px, white #FFFFFF)
- Button fill: Blue (#0078D4)
- Page background: Light gray (#F5F5F5)
- Hover state: Darker blue (#005A9E)

Which contrast tests are required for SC 1.4.11 (Non-text Contrast)?

**Answer Options:**

A) Submit must be 4.5:1 to the blue button fill
B) The blue button fill must be 3:1 to the light gray background
C) Both the text and button fill must be 3:1 to the light gray background
D) The hover state must be 3:1 to the light gray background

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! The button text 'Submit' is what identifies the button's purpose and function. Text contrast falls under SC 1.4.3, which requires 4.5:1 for normal text against its background (the button fill). The button fill itself does not need to meet SC 1.4.11 requirements because the text provides sufficient visual information to identify the component. The key test: 'If I removed the fill, could I still understand what this button does?' Yes, because the text remains visible."

**If B selected:**
"Incorrect. The button fill does not need to meet 3:1 with the page background under SC 1.4.11. Why? Because the text 'Submit' is what identifies the button, not the fill color. SC 1.4.11 applies to UI components where the visual boundary or state indicator is essential for understanding. Here, the text provides that information, making the fill incidental."

**If C selected:**
"Incorrect. Text contrast is governed by SC 1.4.3, not SC 1.4.11. The text does need 4.5:1 contrast, but against the button fill (its immediate background), not the page background. The button fill does not need to meet any contrast requirement with the page background because the text identifies the button's purpose."

**If D selected:**
"Incorrect. The hover state fill (#005A9E) does not need to meet 3:1 contrast with the page background under SC 1.4.11. However, the white text 'Submit' still needs to meet 4.5:1 contrast against the hover state fill under SC 1.4.3. The key requirement here is text contrast, not UI component contrast. The pointer provides the visual information needed to understand a control is being hovered."

---

## Question 2: Text Contrast Requirements (Outcome 1C.01)

**Question:**

A design includes the following text elements on a white background (#FFFFFF):
- Page title: "Dashboard" (32px, dark gray #595959)
- Body text: "Welcome back" (14px, dark gray #595959)

Which statement correctly describes the AA contrast requirements for these text elements?

**Answer Options:**

A) The title needs 3:1 contrast and the body text needs 4.5:1 contrast
B) Both the title and body text need 4.5:1 contrast
C) Both the title and body text need 3:1 contrast
D) The title needs 4.5:1 contrast and the body text needs 3:1 contrast

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! Under SC 1.4.3, large text requires 3:1 contrast and normal text requires 4.5:1 contrast for AA conformance. Large text is defined as 18pt (24px) or larger, or 14pt (18.5px) bold or larger. The 32px title qualifies as large text (3:1 required), while the 14px body text is normal text (4.5:1 required). The dark gray #595959 on white provides approximately 5.9:1 contrast, which passes both requirements."

**If B selected:**
"Incorrect. While 4.5:1 would certainly pass for both, it's not what's required. Large text (18pt/24px or larger) only needs 3:1 contrast under SC 1.4.3. The 32px title qualifies as large text, so it only requires 3:1 contrast, not 4.5:1."

**If C selected:**
"Incorrect. Only large text qualifies for the reduced 3:1 contrast requirement. Normal text (below 18pt/24px, or below 14pt/18.5px bold) requires 4.5:1 contrast under SC 1.4.3. The 14px body text is normal text and needs 4.5:1 contrast."

**If D selected:**
"Incorrect. You have the requirements reversed. Large text (like the 32px title) needs the lower 3:1 ratio, while normal text (like the 14px body) needs the higher 4.5:1 ratio. The logic: smaller text is harder to read, so it requires more contrast."

---

## Question 3: Graphics Contrast (Outcome 1C.01)

**Question:**

A data visualization shows three trend lines on a graph:
- Red line (#E53935) representing Q1 sales
- Blue line (#1E88E5) representing Q2 sales
- Green line (#43A047) representing Q3 sales
- Graph background: White (#FFFFFF)
- Each line has a text label identifying it

Under SC 1.4.11 (Non-text Contrast), which contrast requirements apply to the lines?

**Answer Options:**

A) Each line must be 3:1 to the white background, but lines do not need 3:1 to each other
B) Each line must be 3:1 to both the background and to adjacent lines
C) Lines only need 3:1 contrast to each other, not to the background
D) No contrast requirements apply because the lines have text labels

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! Under SC 1.4.11, graphical objects that convey information must have 3:1 contrast against adjacent colors. For data visualization lines, 'adjacent' means the background they sit on, not the other lines. Each line must meet 3:1 contrast with the white background. The lines do not need to contrast with each other because they are not adjacent to each other in the visual layout. The text labels help identify which line is which, but SC 1.4.11 still requires each line to be visible against its background."

**If B selected:**
"Incorrect. Lines do not need to meet contrast requirements with each other under SC 1.4.11. The criterion requires 3:1 contrast against 'adjacent colors,' which for lines on a graph means the background, not other lines that may cross or run parallel. Each line only needs to be distinguishable from the background it's drawn on."

**If C selected:**
"Incorrect. SC 1.4.11 requires graphical objects to contrast with adjacent colors, which means the background for lines on a graph. The lines must be visible against the white background. Contrast between lines is not a requirement under SC 1.4.11, though SC 1.4.1 (Use of Color) may require non-color differentiation like patterns or labels."

**If D selected:**
"Incorrect. Text labels help with SC 1.4.1 (Use of Color) by providing non-color identification, but they do not exempt the lines from SC 1.4.11 requirements. The lines themselves are graphical objects that convey information (the trend data), so they must still meet 3:1 contrast against the background to be visible to users with low vision."

---

## Question 4: Color-Only Information (Outcome 1C.02)

**Question:**

A designer creates a form with the following pattern:
- Required field labels are displayed in red (#CC0000)
- Optional field labels are displayed in black (#000000)
- All labels include asterisks (*) next to required fields
- Field borders remain the same for all fields

When tested with grayscale simulation, the required fields are still clearly identifiable due to the asterisks. Does this design meet SC 1.4.1 (Use of Color)?

**Answer Options:**

A) Yes, because the asterisks provide a non-color indicator  
B) No, because the labels are shown in red  
C) No, because color is used to indicate required status  
D) Yes, because the contrast between red and black is sufficient  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! The asterisks (*) serve as the non-color indicator for required status. The red color enhances this indicator but is not the sole means of conveying the information. When tested in grayscale, users can still identify required fields by the asterisks, confirming that color is not being used alone. This pattern meets SC 1.4.1 and is considered best practice: use both visual indicators (color) and non-color indicators (text/symbols) together."

**If B selected:**
"Incorrect. Using red color is not a problem. The violation would only occur if red were the *only* indicator of required status. In this case, the asterisks serve as a non-color indicator, so the red color is acceptable as an additional cue. SC 1.4.1 prohibits using color alone, not using color at all."

**If C selected:**
"Incorrect. While color is used to indicate required status, it's not the *only* indicator. The asterisks (*) serve as the non-color indicator. SC 1.4.1 requires that information not be conveyed by color alone: it allows color as an enhancement when paired with other indicators. The combination of asterisks + red color is recommended practice."

**If D selected:**
"Incorrect. While contrast helps with visibility (SC 1.4.3), contrast between colors does not address SC 1.4.1's requirement for non-color indicators. Even with 3:1 or greater luminance contrast between the red and black, some users with certain types of color vision deficiency might not be able to distinguish the hue difference. The asterisks provide the necessary non-color indicator, not the contrast ratio."

---

## Question 5: Color Vision Simulation (Outcome 1C.03)

**Question:**

A designer is testing a design with multiple color-coded status badges: green for "Active," yellow for "Pending," and red for "Inactive." To verify the design works for users with color vision deficiencies, what is the most efficient testing method?

**Answer Options:**

A) Test the design with grayscale (achromatopsia) simulation 
B) Test the design separately with protanopia, deuteranopia, and tritanopia simulations  
C) Test the design with protanopia and deuteranopia (skip tritanopia because it's rare)  
D) No simulation is needed if the colors have sufficient contrast ratios  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct! Grayscale (achromatopsia) simulation is the most efficient testing method because it removes all hue information. If your design conveys information clearly in grayscale, it will work for all types of color vision deficiency: protanopia (red-blind), deuteranopia (green-blind), and tritanopia (blue-blind). For the status badges in this scenario, grayscale testing would quickly reveal that the badges are indistinguishable without color, prompting the designer to add icons or text labels. This is the recommended method in the DACE course."

**If B selected:**
"Incorrect. While testing all three CVD types would be thorough, it's unnecessary. Grayscale simulation removes all hue information, making it the most stringent test. If your design works in grayscale, it will work for all types of color vision deficiency. Testing all three types separately is time-consuming and doesn't provide additional value beyond what grayscale reveals. Use grayscale for efficiency."

**If C selected:**
"Incorrect. While protanopia and deuteranopia are the most common types of CVD, skipping tritanopia doesn't make this method more efficient than simply using grayscale. Grayscale simulation covers all CVD types at once, including tritanopia. There's no benefit to testing two out of three CVD types when grayscale provides comprehensive coverage in a single test."

**If D selected:**
"Incorrect. Contrast ratios (SC 1.4.3) and color as information (SC 1.4.1) are separate requirements. Having sufficient contrast doesn't guarantee that information isn't being conveyed by color alone. In this scenario, the status badges likely need icons (✓ for Active, ⏱ for Pending, ⨉ for Inactive) or text labels to ensure users with CVD can distinguish between them. Grayscale simulation would reveal this need by showing that the badges become indistinguishable without color."

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
- Results contribute to overall lesson grade (5 points out of 17 total for L03)

### QTI Export Requirements

If exporting to QTI format for Canvas import:
- Use QTI 1.2 or 2.1 format
- Include all feedback (correct and incorrect) in export
- Test import in Canvas sandbox before production use
- Verify that formatting (bold, italics, code examples) renders correctly

---

## Outcome Mapping Summary

| Question | Outcome | Topic | Difficulty |
|----------|---------|-------|------------|
| Q1 | 1C.01 | UI component contrast: text identifies button, fill is incidental | Medium |
| Q2 | 1C.01 | Text contrast: large text 3:1 vs normal text 4.5:1 for AA | Easy-Medium |
| Q3 | 1C.01 | Graphics contrast: lines need 3:1 to background, not to each other | Medium |
| Q4 | 1C.02 | Identifying whether color-only violations exist given non-color indicators | Medium |
| Q5 | 1C.03 | Most efficient method for CVD testing (grayscale simulation) | Easy-Medium |

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

*Last updated: December 2025*  
*Version: 1.0*  
*For: DACE L03: Color*

