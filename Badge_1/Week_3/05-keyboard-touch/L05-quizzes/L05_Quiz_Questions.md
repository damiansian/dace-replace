# L05: Keyboard & Touch - Quiz Questions

**Lesson:** L05  
**Topic:** Keyboard, Touch & Reading Order  
**Outcomes:** 1E.01, 1E.02, 1E.03, 1E.04  
**Total Questions:** 5

---

## Q1: Keyboard Navigation in Content Grid
**Outcome:** 1E.01  
**Difficulty:** Medium

**Stimulus:**  
Adobe Express interface showing a "Recent uploads" section with two image cards (a beach scene and a dog photo). Each card has a "more actions" button (three dots icon). The Stark Annotations sidebar on the left displays Focus Order annotation with tab stop 5 labeled "recent uploads" and a note stating: "User's uploaded content area is a single tab stop with arrow key operations." Focus order markers show: (1) back button next to "Recent uploads" header, (2) resize tool, (3) crop tool, (4) list view button, and (5) the content area containing the image cards.

**Stem:**  
Based on these annotations, how would a keyboard user get to the more actions button on the card with a dog on it? Assuming tab stop one is the back button next to recent uploads.

**Options:**
- A) Tab 5 times, right arrow once, tab 1 more time.
- B) Tab 8 times.
- C) Tab 5 times, right arrow 3 times.
- D) Tab 6 times.

**Correct Answer:** A

**Rationale:**

**A) Tab 5 times, right arrow once, tab 1 more time.**  
Correct. The annotation specifies that the content area is a single tab stop (tab stop 5) with arrow key operations. After tabbing 5 times to enter the content area, the user would use right arrow to move from the first card (beach) to the second card (dog), then tab once more to reach the more actions button on that card.

**B) Tab 8 times.**  
Incorrect. This assumes each element receives its own tab stop, ignoring the annotation that specifies the content area uses arrow key navigation. This would bypass the intended interaction pattern.

**C) Tab 5 times, right arrow 3 times.**  
Incorrect. While this correctly uses arrow keys within the content area, pressing right arrow 3 times would overshoot the target. Only one right arrow press is needed to move from the beach card to the dog card.

**D) Tab 6 times.**  
Incorrect. This ignores the arrow key operation specified in the annotation. Tab 6 would move past the content area to the next focusable element, missing the dog card entirely.

---

## Q2: Menu Focus Order Annotation
**Outcome:** 1E.01  
**Difficulty:** Medium

**Stimulus:**  
A dropdown menu showing two options: "Duplicate" with a duplicate icon, and "Delete" (in red text) with a red trash icon. Focus order annotations incorrectly show four separate tab stops: (1) on "Duplicate" text, (2) on the duplicate icon, (3) on "Delete" text, and (4) on the trash icon. An X button appears to close the menu. Below the menu are layer properties including Drop shadow, Stroke, and Color overlay options.

**Stem:**  
What feedback would you give to the designer based on this Blueline for keyboard focus?

**Options:**
- A) The menu items are operated by arrow keys, so this is one tab stop.
- B) The Blueline has been specified perfectly, no notes.
- C) The Delete item uses color alone to indicate it's a negative action.
- D) The menu items (duplicate and delete) receive one tab stop, so there are only two tab stops in the menu, not four.

**Correct Answer:** A

**Rationale:**

**A) The menu items are operated by arrow keys, so this is one tab stop.**  
Correct. Menu components follow the ARIA menu pattern where the entire menu receives a single tab stop, and users navigate between menu items using arrow keys. Annotating each menu item and icon as separate tab stops is incorrect and would create an unnecessarily tedious keyboard experience.

**B) The Blueline has been specified perfectly, no notes.**  
Incorrect. The annotation shows four separate tab stops for two menu items, which violates standard menu keyboard patterns. This would require users to press Tab four times to navigate through two options instead of using arrow keys.

**C) The Delete item uses color alone to indicate it's a negative action.**  
Incorrect. While color accessibility is important (L03), this is not the primary keyboard focus issue shown in the annotation. The Delete item also has a distinct trash icon, so color is not the only indicator. The focus order annotation error is the main concern.

**D) The menu items receive one tab stop, so there are only two tab stops in the menu, not four.**  
Incorrect. This answer is partially correct about reducing tab stops but still wrong. A menu should have ONE tab stop total for all items, not one per menu item. The entire menu is a single tab stop with arrow key navigation between items.

---

## Q3: Modal Dialog Dismissal
**Outcome:** 1E.01  
**Difficulty:** Easy

**Stimulus:**  
A modal dialog titled "Invite people to access, contribute, or review" for sharing "Hilton Sales Strategy." The modal contains an email input field with three email addresses added (clarkexiong@gmail.c..., robe@gmail.com, P123@gmail.com), a "Reviewer" dropdown, a Message text area with placeholder text, and two buttons at the bottom: "Cancel" and "Send" (blue). An X button appears in the top-right corner to close the modal. Below the modal, the background shows "Share Hilton Sales Strategy" with sharing details.

**Stem:**  
What are three ways to close this modal dialog without creating any invitations?

**Options:**
- A) The X button, the Cancel button, and the Escape key.
- B) Control + Alt + Delete
- C) The X button, the Cancel button, and the End key.
- D) Command + Alt + Delete

**Correct Answer:** A

**Rationale:**

**A) The X button, the Cancel button, and the Escape key.**  
Correct. These are the three standard methods for dismissing a modal without taking action. The X button and Cancel button are visible UI controls, and the Escape key is the standard keyboard shortcut for closing modals and canceling actions. All three methods close the dialog without sending invitations.

**B) Control + Alt + Delete**  
Incorrect. This is a system-level keyboard shortcut (Task Manager on Windows, force quit on some systems) and is not related to closing modal dialogs in web applications. Using this would interrupt the entire system, not just close the modal.

**C) The X button, the Cancel button, and the End key.**  
Incorrect. While X and Cancel are correct, the End key is not a standard method for closing modals. The End key typically moves the cursor to the end of a line or document. The Escape key is the correct keyboard shortcut for dismissing modals.

**D) Command + Alt + Delete**  
Incorrect. This is not a standard keyboard shortcut for closing modals. Like Control + Alt + Delete, this combination is associated with system-level functions, not web application interactions.

---

## Q4: Touch Target False Positive
**Outcome:** 1E.03  
**Difficulty:** Hard

**Stimulus:**  
The Stark Contrast and Accessibility Checker panel showing Touch Targets results. The panel displays "12 x 12" as the target size in pixels for pointer inputs. Under "AA" requirements, both Width (24px) and Height (24px) show red X error icons. Under "AAA" requirements, both Width (44px) and Height (44px) also show red X error icons. The Recommendations section shows iOS: 44 x 44 pt and Material design: 48 x 48 dp. In the background, two checkbox options are visible: "Reverse clip playback" (checked, with purple highlight) and "Maintain pitch" (unchecked).

**Stem:**  
The checkbox measures 12 x 12 pixels square. Stark displays errors for WCAG conformance for AA and AAA conformance. How should you address this reported barrier to access by the automated tool?

**Options:**
- A) This is a false positive as the hit area is sufficient.
- B) We have to make to make that box at least 24 by 24 pixels to be conforming.
- C) We can defer the results as they mention AAA conformance.
- D) We can make the box reach 24 by 24 pixels when a user hovers over it.

**Correct Answer:** A

**Rationale:**

**A) This is a false positive as the hit area is sufficient.**  
Correct. Automated tools measure the visible element size, not the actual interactive hit area. The visual checkbox may be 12x12 pixels, but the clickable/tappable region (hit area) extends beyond the visible checkbox to include padding or the label area. SC 2.5.8 requires the touch target (hit area) to be 24x24, not the visible graphic. This is a common false positive in automated testing.

**B) We have to make to make that box at least 24 by 24 pixels to be conforming.**  
Incorrect. WCAG SC 2.5.8 requires the touch TARGET (interactive area) to be 24x24, not the visible graphic. A 12x12 visible checkbox with sufficient padding or an associated label that expands the hit area can still conform. Making the visible checkbox larger is one solution but not the only one.

**C) We can defer the results as they mention AAA conformance.**  
Incorrect. The tool shows failures for both AA AND AAA. SC 2.5.8 Target Size (Minimum) is a Level AA requirement, so it cannot be deferred. AAA (44x44) is aspirational, but AA (24x24) is required for WCAG 2.2 Level AA conformance.

**D) We can make the box reach 24 by 24 pixels when a user hovers over it.**  
Incorrect. Touch targets must meet size requirements in their default state, not only on hover. Users with motor disabilities or those using touch screens cannot hover before tapping. The target must be accessible before any interaction occurs.

---

## Q5: Tab Group Focus Annotation
**Outcome:** 1E.01  
**Difficulty:** Medium

**Stimulus:**  
A horizontal Tab Group component with three tabs: "Usage" (with a settings/sliders icon), "User intent" (with a target icon), and "Credits" (with a chart icon). The "Usage" tab appears selected with an underline indicator. Focus order annotations incorrectly show three separate tab stops: (1) on Usage, (2) on User intent, and (3) on Credits.

**Stem:**  
What error has the designer made with their keyboard annotation here?

**Options:**
- A) A Tab Group component gets a single tab stop with arrow key operation.
- B) They used the reading order annotation marker instead of the focus marker.
- C) The icons should have their own focus order annotation.
- D) A Tab Group component gets a single tab stop with Shift + Tab operation.

**Correct Answer:** A

**Rationale:**

**A) A Tab Group component gets a single tab stop with arrow key operation.**  
Correct. Following the ARIA tabs pattern, a Tab Group receives a single tab stop. Users press Tab to enter the tab list, then use left/right arrow keys to move between tabs. Annotating each tab as a separate tab stop (1, 2, 3) is incorrect and would create an inefficient keyboard experience requiring three Tab presses instead of arrow keys.

**B) They used the reading order annotation marker instead of the focus marker.**  
Incorrect. The image shows standard focus order annotation markers (numbered circles), not reading order markers. The error is in the number of tab stops specified, not the type of annotation marker used.

**C) The icons should have their own focus order annotation.**  
Incorrect. Icons within tabs are decorative and part of the tab itself. They should not receive separate focus. The tabs as a whole receive focus, and the icon is announced as part of the tab's accessible name. Adding focus to icons would create confusion and redundancy.

**D) A Tab Group component gets a single tab stop with Shift + Tab operation.**  
Incorrect. While Tab Groups do get a single tab stop, Shift + Tab moves focus backward to the previous focusable element outside the component. Arrow keys (left/right) are used to navigate between tabs within the Tab Group, not Shift + Tab.

---

## Answer Key

| Question | Answer | Outcome | Topic |
|----------|--------|---------|-------|
| Q1 | A | 1E.01 | Keyboard navigation in content grids |
| Q2 | A | 1E.01 | Menu focus order patterns |
| Q3 | A | 1E.01 | Modal dialog dismissal methods |
| Q4 | A | 1E.03 | Touch target false positives |
| Q5 | A | 1E.01 | Tab Group focus patterns |

---

## Outcome Coverage

| Outcome | Questions |
|---------|-----------|
| 1E.01 | Q1, Q2, Q3, Q5 |
| 1E.03 | Q4 |

---

**Document Version:** 4.0  
**Last Updated:** January 2026  
**Author:** DACE Curriculum Team
