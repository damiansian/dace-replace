# L14: Windows High Contrast Mode - Quiz Questions

**Lesson:** L14 - Windows High Contrast Mode  
**Badge Level:** Define  
**Competency Code:** 2E (Windows High Contrast Mode)  
**Number of Questions:** 5  
**Points:** 5 (1 point each)  
**Format:** Multiple choice (4 options each)

---

## Question 1

**Outcome:** 2E.01 (Test designs in Windows High Contrast Mode)

**Stem:**  
In what primary way does Windows High Contrast Mode (Forced Colors) differ from a standard 'Dark Mode' implementation?

**Options:**
- A) Forced colors give the user full control over the specific palette, whereas Dark Mode provides author-defined color schemes.
- B) Dark Mode is a system-level override, while forced colors are controlled by the website author.
- C) Dark Mode is required by WCAG 2.1, while High Contrast Mode is considered an optional enhancement.
- D) Forced colors only affect text elements, whereas Dark Mode affects the entire UI including images.

**Correct Answer:** A

**Rationale (correct):**  
High Contrast Mode allows users to define or choose their own system keywords, whereas Dark Mode usually relies on a `prefers-color-scheme` query where the designer still chooses the hex values.

**Rationale (B incorrect):**  
The roles are reversed: forced colors are the system-level override applied by the user's OS/browser, while Dark Mode implementations are typically author-defined (or author-chosen in response to a media query).

**Rationale (C incorrect):**  
Neither Dark Mode nor High Contrast Mode is required by WCAG 2.1. Both are user-preference features. WCAG does not mandate one over the other as optional.

**Rationale (D incorrect):**  
Forced colors affect the entire UI (backgrounds, borders, text, and often SVG fill/stroke), not just text. Dark Mode also typically affects the full UI, including images when authors choose to adapt them.

---

## Question 2

**Outcome:** 2E.02 (Identify high contrast mode failures)

**Stem:**  
Which system color keyword is used to represent disabled text in High Contrast Mode?

**Options:**
- A) GrayText
- B) CanvasText
- C) ButtonText
- D) HighlightText

**Correct Answer:** A

**Rationale (correct):**  
GrayText is the specific system keyword mapped to disabled or inactive text elements.

**Rationale (B incorrect):**  
CanvasText is the system keyword for normal text on the Canvas (page) background, not for disabled text.

**Rationale (C incorrect):**  
ButtonText is used for the text on button faces, not for disabled or inactive content.

**Rationale (D incorrect):**  
HighlightText is used for text within a selection highlight, not for disabled text.

---

## Question 3

**Outcome:** 2E.02 (Identify high contrast mode failures)

**Stem:**  
In a complex SVG icon, setting the 'fill' attribute to 'currentColor' ensures visibility in High Contrast Mode because:

**Options:**
- A) It causes the icon to inherit the forced text color (CanvasText), ensuring it contrasts with the background.
- B) It allows the icon to inherit the value of the 'Canvas' keyword.
- C) It prevents the system from overriding the SVG's internal CSS styles.
- D) It forces the system to ignore the SVG entirely and use a text fallback.

**Correct Answer:** A

**Rationale (correct):**  
Since the text color is guaranteed to contrast with the background in WHCM, inheriting that color ensures the icon remains visible.

**Rationale (B incorrect):**  
Canvas is the background keyword, not the text color. Inheriting Canvas would make the icon the same color as the background and invisible.

**Rationale (C incorrect):**  
The system does override colors in forced colors mode; currentColor works because it inherits the (overridden) text color, not because it blocks overrides.

**Rationale (D incorrect):**  
currentColor does not cause the system to ignore the SVG or replace it with text. The SVG is still rendered; its fill is replaced by the inherited text color.

---

## Question 4

**Outcome:** 2E.03 (Design for forced colors compatibility)

**Stem:**  
A developer wants to ensure that a 'Submit' button has a visible border in High Contrast Mode but remains borderless in the standard view. Which CSS should be applied to the button's default state?

**Options:**
- A) border: 2px solid transparent;
- B) outline: 2px solid ButtonText;
- C) box-shadow: 0 0 0 2px black;
- D) border: none;

**Correct Answer:** A

**Rationale (correct):**  
A transparent border is invisible in normal mode but its color will be overridden by the system in High Contrast Mode, making it visible.

**Rationale (B incorrect):**  
Outline would be visible in normal mode (unless the color were transparent), and outline is conventionally reserved for focus indicators rather than persistent button boundaries.

**Rationale (C incorrect):**  
box-shadow is removed entirely in forced colors mode, so it would not provide a visible boundary in High Contrast Mode.

**Rationale (D incorrect):**  
border: none leaves no border for the system to recolor; the boundary stays invisible in High Contrast Mode.

---

## Question 5

**Outcome:** 2E.02 (Identify high contrast mode failures)

**Stem:**  
Which of the following failures should be addressed first?

**Options:**
- A) The keyboard focus indicator becoming completely invisible on interactive links.
- B) Card components losing their subtle dropshadow boundaries.
- C) Brand logos losing their specific corporate hex colors.
- D) Success and Error messages losing their green and red background colors.

**Correct Answer:** A

**Rationale (correct):**  
Focus indicator loss is a Tier 1 (Critical) failure because it prevents keyboard users from navigating the interface.

**Rationale (B incorrect):**  
Losing dropshadow boundaries on cards is a lower-priority failure; content and structure remain perceivable. It should be fixed but after critical issues like focus visibility.

**Rationale (C incorrect):**  
Brand color loss in logos is a visual/brand concern in forced colors. It does not block access to content or operation and is lower priority than focus visibility.

**Rationale (D incorrect):**  
Losing semantic color (green/red) on messages is important for clarity but can be mitigated with icons or text. Invisible focus is a direct barrier to keyboard navigation and should be fixed first.

---

## Question Distribution

| Question | Outcome | Type | Topic |
|----------|---------|------|-------|
| Q1 | 2E.01 | Knowledge | WHCM vs Dark Mode (user control vs author scheme) |
| Q2 | 2E.02 | Knowledge | System color keyword for disabled text (GrayText) |
| Q3 | 2E.02 | Application | currentColor and SVG visibility in forced colors |
| Q4 | 2E.03 | Application | Transparent border for visible boundary in WHCM |
| Q5 | 2E.02 | Application | Prioritizing focus indicator over other WHCM failures |

---

## QTI Export

**Location:** `project-documents/14-windows-high-contrast/qti-export/L14_Windows_High_Contrast_Quiz_QTI.zip`

The zip contains `L14_windows_high_contrast_quiz.xml` (QTI 1.2). Import the zip in Canvas. Each question has correct answer A and response feedback (rationales) for all options.

---

*Last updated: February 2026*  
*Version: 1.1*  
*For: DACE L14: Windows High Contrast Mode*
