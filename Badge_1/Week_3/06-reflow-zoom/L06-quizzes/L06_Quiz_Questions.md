# L06: Reflow and Zoom - Quiz Questions

**Lesson:** L06  
**Topic:** Reflow and Zoom  
**Outcomes:** 1F.01, 1F.02, 1F.03  
**Total Questions:** 5

---

## Q1: Effective Viewport Width at Zoom
**Outcome:** 1F.01  
**Difficulty:** Easy

**Stem:**  
When you set your browser window to 1280px wide and zoom to 200%, what is the effective viewport width? What about at 400% zoom?

**Options:**
- A) 640px at 200% zoom, 320px at 400% zoom.
- B) 2560px at 200% zoom, 5120px at 400% zoom.
- C) 1280px at both zoom levels.
- D) 1080px at 200% zoom, 720px at 400% zoom.

**Correct Answer:** A

**Rationale:**

**A) 640px at 200% zoom, 320px at 400% zoom.**  
Correct. The effective viewport width is calculated by dividing the actual viewport by the zoom percentage. At 200% zoom: 1280 ÷ 2 = 640px. At 400% zoom: 1280 ÷ 4 = 320px. This is why SC 1.4.10 (Reflow) uses 400% zoom on 1280px as the test condition, as it creates a 320px effective viewport similar to a mobile device.

**B) 2560px at 200% zoom, 5120px at 400% zoom.**  
Incorrect. This multiplies instead of divides. Zooming in makes content larger, which means less content fits in the viewport, resulting in a smaller effective width, not larger.

**C) 1280px at both zoom levels.**  
Incorrect. The physical viewport remains 1280px, but the effective viewport (how much content fits) decreases as zoom increases. At higher zoom, users see less content at a time.

**D) 1080px at 200% zoom, 720px at 400% zoom.**  
Incorrect. These numbers do not follow the correct calculation. The effective viewport is the actual width divided by the zoom factor (200% = 2, 400% = 4).

---

## Q2: Identifying Reflow Exceptions
**Outcome:** 1F.01  
**Difficulty:** Medium

**Stem:**  
A web application contains four components: (1) A product comparison table with feature names in rows and three product tiers in columns, (2) A three-card testimonial section with customer quotes side by side, (3) A sidebar navigation menu with category links, (4) A blog article with body text paragraphs. Which component is a valid exception to SC 1.4.10 where horizontal scrolling may be acceptable at 400% zoom?

**Options:**
- A) The product comparison table.
- B) The sidebar navigation because it contains a large number of category links.
- C) The blog article because the paragraphs contain long sentences.
- D) The testimonial cards because they are designed to display side by side.

**Correct Answer:** A

**Rationale:**

**A) The product comparison table.**  
Correct. Data tables are an explicit exception in SC 1.4.10 because they require two-dimensional spatial relationships to convey meaning. Users need to see the relationship between rows (features) and columns (products) simultaneously. Removing columns would break the table's purpose.

**B) The sidebar navigation because it contains a large number of category links.**  
Incorrect. Navigation menus must reflow. Sidebars should collapse to hamburger menus or move below main content at narrow viewports. Having many links does not justify horizontal scrolling.

**C) The blog article because the paragraphs contain long sentences.**  
Incorrect. Body text and paragraphs are the primary content that must reflow. Text content should never require horizontal scrolling. Long paragraphs simply wrap to fit the viewport width.

**D) The testimonial cards because they are designed to display side by side.**  
Incorrect. Visual preference is not a valid exception. Testimonial cards are independent content blocks that can stack vertically without losing meaning. Each quote stands alone and does not require comparison with adjacent cards.

---

## Q3: Button Text Clipping with Text Spacing
**Outcome:** 1F.02  
**Difficulty:** Medium

**Stem:**  
A "Subscribe to Newsletter" button is specified with height: 40px and overflow: hidden. When a user applies text spacing adjustments (line height 1.5x, letter spacing 0.12x, word spacing 0.16x), the button text becomes clipped, showing only "Subscribe to Newslet..." with the remaining text cut off. What change would fix this text spacing failure?

**Options:**
- A) Use min-height: 40px instead of height: 40px.
- B) Shorten the button label to "Subscribe" so it fits within the container.
- C) Reduce the font size so the text fits within the fixed 40px height.
- D) Add a tooltip that displays the full button text on hover for screen reader users.

**Correct Answer:** A

**Rationale:**

**A) Use min-height: 40px instead of height: 40px.**  
Correct. SC 1.4.12 (Text Spacing) requires content to remain visible when users adjust spacing. Using min-height instead of fixed height allows the button to grow vertically when line height increases. The button maintains its minimum size in default state but expands to accommodate user preferences.

**B) Shorten the button label to "Subscribe" so it fits within the container.**  
Incorrect. SC 1.4.12 requires no loss of content when spacing is adjusted. Users need to understand what they are subscribing to. The design must accommodate the full text at adjusted spacing, not remove content.

**C) Reduce the font size so the text fits within the fixed 40px height.**  
Incorrect. Reducing font size works against users who need text spacing adjustments for readability. Users with dyslexia or low vision apply spacing to make text easier to read. Making text smaller defeats their purpose.

**D) Add a tooltip that displays the full button text on hover for screen reader users.**  
Incorrect. Tooltips do not solve the core problem of clipped visible text. Users who need text spacing adjustments need to see the text, not hover for hidden content. Additionally, touch users cannot access hover-only content.

---

## Q4: Text Spacing Adjustment Values
**Outcome:** 1F.02  
**Difficulty:** Medium

**Stem:**  
According to SC 1.4.12 (Text Spacing), content must remain readable when users adjust text spacing. Which set of values must designs support without loss of content?

**Options:**
- A) Line height 1.5x font size, letter spacing 0.12x, word spacing 0.16x, paragraph spacing 2x.
- B) Line height 2.5x font size, letter spacing 0.5x, word spacing 0.5x, paragraph spacing 4x.
- C) Only line height adjustments up to 1.5x font size.
- D) Only letter spacing and word spacing adjustments.

**Correct Answer:** A

**Rationale:**

**A) Line height 1.5x font size, letter spacing 0.12x, word spacing 0.16x, paragraph spacing 2x.**  
Correct. SC 1.4.12 specifies these exact minimum values that must be supported: line height at least 1.5 times the font size, letter spacing at least 0.12 times the font size, word spacing at least 0.16 times the font size, and paragraph spacing at least 2 times the font size.

**B) Line height 2.5x font size, letter spacing 0.5x, word spacing 0.5x, paragraph spacing 4x.**  
Incorrect. These values exceed the SC 1.4.12 requirements. While designs may support larger adjustments, only the values in option A are required for conformance.

**C) Only line height adjustments up to 1.5x font size.**  
Incorrect. SC 1.4.12 requires support for all four properties: line height, letter spacing, word spacing, AND paragraph spacing. Supporting only line height would not meet the requirement.

**D) Only letter spacing and word spacing adjustments.**  
Incorrect. SC 1.4.12 requires all four spacing properties to be supported. Line height and paragraph spacing are equally important for users with dyslexia, low vision, and cognitive disabilities.

---

## Q5: Recipe App Orientation Lock
**Outcome:** 1F.03  
**Difficulty:** Medium

**Stem:**  
A recipe app design document states: "Lock to portrait orientation. The single-column layout looks better in portrait and matches how users typically hold their phones while cooking." The app displays recipe ingredients, step-by-step instructions, and cooking timers. Does this orientation restriction meet WCAG SC 1.3.4 requirements?

**Options:**
- A) No, "looks better" is preference, not essential function.
- B) Yes, because cooking apps are typically used in portrait mode based on user research.
- C) Yes, because the designer can determine the optimal experience.
- D) No, all apps must default to landscape orientation first.

**Correct Answer:** A

**Rationale:**

**A) No, "looks better" is preference, not essential function.**  
Correct. SC 1.3.4 (Orientation) requires content to work in both portrait and landscape unless a specific orientation is essential for function. The test question is: "Would the core function break if orientation changed?" A recipe app works identically in both orientations. Visual preference and typical usage patterns do not justify restricting access.

**B) Yes, because cooking apps are typically used in portrait mode based on user research.**  
Incorrect. Typical usage does not create essential requirements. Users with devices mounted to wheelchairs, bed stands, or kitchen mounts may have fixed orientations they cannot change. These users would be completely locked out of the app.

**C) Yes, because the designer can determine the optimal experience.**  
Incorrect. Designer preference does not override accessibility requirements. SC 1.3.4 only permits orientation restrictions when the function itself requires it, such as a piano keyboard needing horizontal space for all keys, or a check deposit requiring camera alignment.

**D) No, all apps must default to landscape orientation first.**  
Incorrect. The requirement is not to prefer one orientation over another. Apps must work in BOTH orientations. Locking to landscape would be equally non-compliant as locking to portrait, unless landscape is essential for the function.

---

## Answer Key

| Question | Answer | Outcome | Topic |
|----------|--------|---------|-------|
| Q1 | A | 1F.01 | Fixed-width containers at 400% zoom |
| Q2 | A | 1F.01 | Reflow exceptions (data tables) |
| Q3 | A | 1F.02 | Fixed height vs min-height buttons |
| Q4 | A | 1F.02 | Card overflow solutions |
| Q5 | A | 1F.03 | Orientation restriction evaluation |

---

## Outcome Coverage

| Outcome | Questions |
|---------|-----------|
| 1F.01 | Q1, Q2 |
| 1F.02 | Q3, Q4 |
| 1F.03 | Q5 |

---

**Document Version:** 6.0  
**Last Updated:** January 2026  
**Author:** DACE Curriculum Team
