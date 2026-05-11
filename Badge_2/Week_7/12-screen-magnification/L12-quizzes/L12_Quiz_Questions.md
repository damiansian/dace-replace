# L12: Screen Magnification - Quiz Questions

**Lesson:** L12 - Screen Magnification  
**Badge Level:** Define  
**Competency Code:** 2C (Screen Magnification)  
**Number of Questions:** 5  
**Points:** 5 (1 point each)  
**Format:** Multiple choice (4 options each)

---

## Question 1

**Outcome:** 2C.01 (Understand screen magnification tools and user needs)

**Stem:**  
Which of the following best describes the fundamental difference between system-level magnification (like Windows Magnifier) and browser zoom (Ctrl/Cmd +)?

**Options:**
- A) System magnification magnifies pixels without changing the layout, while browser zoom reflows the content to fit the window.
- B) Browser zoom increases the resolution of the page, while system magnification decreases the resolution to save processing power.
- C) Browser zoom is only intended for text resizing, whereas system magnification is intended for images and video.
- D) System magnification is exclusively used by blind users, while browser zoom is used by low vision users.

**Correct Answer:** A

**Rationale:**  
System magnification tools enlarge the existing display area like a magnifying glass, whereas browser zoom triggers responsive design changes and layout adjustments. This distinction matters because a layout that reflows gracefully under browser zoom may still create spatial challenges under system magnification, where multi-column layouts remain intact but only a portion is visible.

**Incorrect Rationales:**
- B) Neither tool changes resolution in this way. Browser zoom scales CSS pixels and triggers layout reflow. System magnification enlarges the rendered output without altering resolution or processing load.
- C) Browser zoom affects all page content (text, images, layout), not just text. System magnification also enlarges everything on screen, not just images and video.
- D) System magnification is primarily used by people with low vision who have some usable sight, not by blind users. Blind users typically rely on screen readers. Browser zoom is used by a wide range of people, not exclusively low vision users.

---

## Question 2

**Outcome:** 2C.03 (Design for screen magnification compatibility)

**Stem:**  
A designer wants to ensure that a focus indicator is easily trackable for a magnification user. What is the recommended minimum thickness for the focus ring?

**Options:**
- A) At least 2 pixels
- B) 10 pixels
- C) Focus indicators should be avoided as they distract magnification users.
- D) 1 pixel

**Correct Answer:** A

**Rationale:**  
A 2px or thicker outline provides a much more visible target for users who are panning around a magnified screen. This aligns with WCAG 2.2 SC 2.4.13 (Focus Appearance), which specifies a minimum 2px thick focus indicator for AAA conformance and establishes the principle that thin outlines are insufficient.

**Incorrect Rationales:**
- B) While 10px would certainly be visible, it is not the recommended minimum. Overly thick focus rings can obscure content and create visual clutter. The standard recommendation is at least 2px.
- C) Focus indicators are essential for all keyboard users, including magnification users. Removing them would make it nearly impossible for magnification users to track their position on the page, since they can only see a small portion of the screen at a time.
- D) A 1px focus ring is too thin to be reliably visible, especially at high magnification where the user is panning across the screen. A 1px outline can easily blend into surrounding content or be missed entirely.

---

## Question 3

**Outcome:** 2C.03 (Design for screen magnification compatibility)

**Stem:**  
Which alignment is generally preferred for text and labels to support users who scan pages at high magnification?

**Options:**
- A) Left-aligned
- B) Justified
- C) Right-aligned
- D) Centered

**Correct Answer:** A

**Rationale:**  
Left-alignment provides a consistent "starting edge" for the eye and the viewport, making it easier to scan following standard reading order. Magnification users navigating with a limited viewport benefit from a predictable left edge where all content begins.

**Incorrect Rationales:**
- B) Justified text creates uneven spacing between words, which can make reading more difficult for magnification users. The irregular gaps are amplified at high zoom levels and disrupt the reading flow.
- C) Right-aligned text creates an inconsistent left edge, forcing magnification users to hunt for where each line begins. This is especially disorienting when panning across a magnified viewport.
- D) Centered text shifts the starting position of each line, creating an unpredictable left edge. Magnification users would need to reposition their viewport for every new line to find where the text begins.

---

## Question 4

**Outcome:** 2C.03 (Design for screen magnification compatibility)

**Stem:**  
When designing a form for magnification compatibility, which placement for error messages is most effective?

**Options:**
- A) Inline, directly adjacent to or below the specific input field.
- B) In a summary box at the very top of the page.
- C) In a popup alert that must be dismissed before continuing.
- D) At the very bottom of the form next to the Submit button.

**Correct Answer:** A

**Rationale:**  
Proximity is critical for magnification users. Keeping the error near the field ensures they see the feedback without having to search the page. At high magnification, the viewport is limited, so related information must be spatially close to be visible at the same time.

**Incorrect Rationales:**
- B) A summary box at the top of the page is far from the fields where errors occurred. At high magnification, users would need to scroll up to read the error, remember which field it refers to, then scroll back down to find and fix the field, creating a significant cognitive and navigation burden.
- C) Popup alerts interrupt the user's workflow and may appear outside the magnified viewport. Once dismissed, the user has no persistent reference for the error and must rely on memory to locate and fix the issue.
- D) Placing errors at the bottom of the form near the Submit button separates the error message from the relevant field. Magnification users would need to pan between the bottom of the form and the specific field, losing context in the process.

---

## Question 5

**Outcome:** 2C.02 (Test designs with screen magnification tools)

**Stem:**  
What is a major accessibility risk of using large "sticky" headers at high magnification levels?

**Options:**
- A) They consume a significant percentage of the limited vertical viewport, leaving little room for the actual content.
- B) They can obscure the focus indicator as the user tabs through the page.
- C) Sticky headers are automatically hidden by macOS Zoom to improve readability.
- D) They prevent the user from using spatial memory to find the navigation menu.

**Correct Answer:** A

**Rationale:**  
At high zoom, a sticky header that takes up 10% of a standard screen might take up 50% or more of the magnified viewport, making the page nearly unusable. The fixed positioning means it cannot be scrolled out of view, permanently reducing the usable content area.

**Incorrect Rationales:**
- B) While sticky headers can occasionally overlap with focused elements, this is a general keyboard navigation concern rather than the primary barrier unique to magnification users. The far greater issue is the permanent loss of viewport space.
- C) macOS Zoom does not automatically hide sticky headers. The magnification tool enlarges everything on screen as-is, including sticky elements. The operating system does not selectively remove page elements.
- D) Sticky headers actually remain persistently visible (which is the problem at high magnification). They do not interfere with spatial memory for navigation. The core issue is that they consume too much of the limited viewport.

---

## Question Distribution

| Question | Outcome | Type | Topic |
|----------|---------|------|-------|
| Q1 | 2C.01 | Knowledge | System magnification vs browser zoom |
| Q2 | 2C.03 | Knowledge | Focus indicator thickness for magnification |
| Q3 | 2C.03 | Knowledge | Text alignment for magnification users |
| Q4 | 2C.03 | Application | Error message placement for magnification |
| Q5 | 2C.02 | Application | Sticky headers at high magnification |

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L12: Screen Magnification*
