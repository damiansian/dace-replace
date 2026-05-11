# L05: Keyboard, Touch & Reading Order
## Lesson Plan

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge Level:** Discover  
**Delivery:** In-person (synchronous)  
**Duration:** 60 minutes  
**Outcomes Covered:** 1E.01, 1E.02, 1E.03, 1E.04

---

## Lesson Overview

This in-person lesson teaches designers how to ensure keyboard accessibility and apply proper touch target sizing across all platforms. Students learn how to test for keyboard accessibility, design focus indicators that meet WCAG 2.2 requirements, and ensure touch targets meet minimum size standards. This lesson emphasizes hands-on testing and practical annotation skills.

### Why This Matters

Keyboard accessibility is non-negotiable. Many users rely exclusively on keyboard navigation, including people who use screen readers, voice control, switch devices, and those with motor disabilities who cannot use a mouse. According to research, approximately 7.7 million Americans have difficulty using their hands or arms. Additionally, power users and IT professionals often prefer keyboard navigation for efficiency.

Touch target sizing directly impacts usability for people with motor disabilities, tremors, or reduced dexterity. WCAG 2.2 introduced new requirements (SC 2.5.8) mandating 24×24 pixel minimum touch targets. Designers who specify small tap targets or tight spacing create barriers for millions of mobile users.

As designers, we control which elements are focusable, how focus indicators appear, and how large touch targets are. We annotate designs to communicate these requirements to engineering. This lesson provides the knowledge and skills to get it right.

### How This Fits in the Discover Badge

L05 builds on accessibility foundations from L01-L04. Focus indicators must meet contrast requirements (L03). Keyboard navigation follows logical reading order (L02). Touch targets and focus areas need proper accessible names (L01). This lesson synthesizes earlier concepts and introduces new WCAG 2.2 criteria. L05 also prepares students for testing interactive components in subsequent lessons.

---

## Learning Outcomes

| ID | Outcome | Type |
|----|---------|------|
| 1E.01 | Ensure all functionality is keyboard accessible | Skill |
| 1E.02 | Design visible focus indicators | Skill |
| 1E.03 | Apply touch target size requirements | Skill |
| 1E.04 | Understand reading order fundamentals | Knowledge |

### Knowledge (What learners will understand)

- All interactive functionality must be keyboard accessible (SC 2.1.1)
- Tab key moves focus forward, Shift+Tab moves backward
- Arrow keys navigate within components (menus, tabs, radio groups)
- Enter/Space activate buttons and controls
- Escape typically closes modals and cancels actions
- Focus order must be logical and intuitive (SC 2.4.3)
- Focus indicators must be visible (SC 2.4.7)
- WCAG 2.2 SC 2.4.11 specifies focus appearance requirements: minimum 2 CSS pixel perimeter, 3:1 contrast
- Touch targets must be at least 24×24 CSS pixels (SC 2.5.8, WCAG 2.2)
- Spacing can substitute for size (24 pixel spacing between targets)
- Exceptions exist for inline links and essential controls
- Keyboard traps prevent users from navigating away from components
- Reading order is the sequence screen readers announce content sequentially
- Tab order only includes interactive elements; reading order includes all content
- Disabled controls appear in reading order but not tab order
- SC 1.3.2 requires meaningful reading sequence be programmatically determinable

### Skills (What learners will be able to do)

- Test designs using keyboard-only navigation (no mouse)
- Identify elements missing from tab order
- Spot keyboard traps and navigation dead ends
- Verify logical focus order matches visual layout
- Measure focus indicator size and contrast using browser DevTools
- Evaluate focus indicators against WCAG 2.2 SC 2.4.11 criteria
- Use Stark to test touch target dimensions
- Identify touch targets below 24×24 pixel minimum
- Apply 24-pixel bookmarklet for visual verification
- Document keyboard and touch requirements in blueline annotations
- Recognize when visual layouts may create reading order problems

### Application (How learners will apply this)

- Audit designs for complete keyboard accessibility before handoff
- Test prototype interactions using keyboard-only navigation
- Design focus indicators that meet WCAG 2.2 requirements
- Specify focus states for all interactive components
- Review mobile designs for touch target compliance
- Annotate designs with focus indicator specifications
- Annotate designs with touch target dimensions
- Identify keyboard and touch issues in design reviews
- Communicate requirements to engineering teams
- Identify potential reading order issues to communicate to engineering when relevant

---

## WCAG Success Criteria

| SC | Name | Level | Relevance to Designers |
|----|------|-------|------------------------|
| 1.3.2 | Meaningful Sequence | A | Reading order must be logical and programmatically determinable |
| 2.1.1 | Keyboard | A | All functionality must be operable via keyboard without timing requirements |
| 2.1.4 | Character Key Shortcuts | A | Single-character shortcuts must be configurable or toggleable |
| 2.4.3 | Focus Order | A | Focus order must preserve meaning and operability |
| 2.4.7 | Focus Visible | AA | Keyboard focus indicator must be visible for any focusable element |
| 2.4.11 | Focus Appearance | AA | Focus indicator must meet minimum size (2px perimeter) and contrast (3:1) - WCAG 2.2 |
| 2.5.1 | Pointer Gestures | A | Multi-point gestures must have single-point alternatives |
| 2.5.4 | Motion Actuation | A | Motion-triggered actions must have UI control alternatives |
| 2.5.7 | Dragging Movements | AA | Dragging must have single-point alternative - WCAG 2.2 |
| 2.5.8 | Target Size (Minimum) | AA | Touch targets must be at least 24×24 CSS pixels - WCAG 2.2 |

**Key Techniques:**
- **G202:** Ensuring keyboard control for all functionality
- **G149:** Using user interface components highlighted by user agent when receiving focus
- **G195:** Using author-supplied, visible focus indicators
- **C40:** Creating hover and focus effects with CSS
- **G215:** Providing single-point activation alternatives to path-based gestures
- **G216:** Providing single-point controls for sliders

**Common Failures to Avoid:**
- **F54:** Failure of SC 2.1.1 due to using keyboard event handlers without equivalent mouse handlers
- **F55:** Failure of SC 2.1.1 due to using script to remove focus
- **F42:** Failure of SC 2.1.1 due to using scripted event handlers that require mouse-only input
- **F78:** Failure of SC 2.4.7 due to styling non-link text to look like links with no focus indicator
- **F99:** Failure of SC 2.1.4 due to implementing character key shortcuts that cannot be turned off

---

## Content Outline

### Section 1: Why Keyboard & Touch Matter (8 minutes)

**Opening (2 minutes)**
- Who relies on keyboard access: screen reader users, voice control users, motor disabilities, power users
- Who benefits from proper touch targets: motor disabilities, tremors, older adults, situational disabilities
- Statistics: 7.7M Americans with upper body motor disabilities

**New WCAG 2.2 Criteria (3 minutes)**
- SC 2.4.11: Focus Appearance (new requirements for focus indicators)
- SC 2.5.8: Target Size Minimum (24×24 pixel requirement)
- SC 2.5.7: Dragging Movements (alternative interaction methods)
- Why these were added to WCAG 2.2

**Designer Responsibility (3 minutes)**
- Designers specify which elements are interactive
- Designers design focus states
- Designers control touch target dimensions
- Blueline annotations communicate requirements to engineering

### Section 2: Keyboard Accessibility Fundamentals (15 minutes)

**How Keyboard Navigation Works (5 minutes)**
- Tab/Shift+Tab: Move between focusable elements
- Enter/Space: Activate buttons and controls
- Arrow keys: Navigate within components
- Escape: Close modals, cancel actions
- Demonstrate keyboard navigation in browser

**SC 2.1.1: Keyboard (4 minutes)**
- All functionality must be keyboard accessible
- No timing restrictions (users can take as long as needed)
- Exceptions: path-dependent input (drawing, handwriting)
- Common failures: mouse-only dropdowns, hover-only menus

**SC 2.4.3: Focus Order (3 minutes)**
- Focus order must match visual order
- Left-to-right, top-to-bottom in most cases
- Modals and dialogs must trap focus appropriately
- Skip links provide shortcuts to main content

**Testing Exercise (3 minutes)**
- Students test a sample interface using keyboard only
- Identify elements that cannot be reached
- Document focus order issues

### Section 3: Focus Indicators (15 minutes)

**SC 2.4.7: Focus Visible (3 minutes)**
- Focus must be visible for keyboard users
- Default browser focus indicators (often insufficient)
- Custom focus indicators must be clearly visible
- Common failure: removing outline without replacement

**SC 2.4.11: Focus Appearance (WCAG 2.2) (5 minutes)**
- Minimum perimeter: 2 CSS pixels solid or dashed
- Contrast requirement: 3:1 against background
- Area requirement: Size of 1px border around unfocused control or 4x border width
- How to measure focus indicators in browser DevTools

**Design Best Practices (4 minutes)**
- Thicker outlines (2-3px) are more visible
- Contrasting colors ensure visibility on any background
- Consider both light and dark modes
- Maintain consistent focus indicators across components
- Examples: good vs. bad focus indicators

**Annotation Requirements (3 minutes)**
- Specify focus indicator color (hex value)
- Specify focus indicator thickness
- Document contrast ratio
- Note any special focus behavior (focus traps, focus management)

### Section 4: Touch Target Sizing (15 minutes)

**SC 2.5.8: Target Size Minimum (WCAG 2.2) (5 minutes)**
- Minimum size: 24×24 CSS pixels
- Spacing alternative: 24 pixels between targets
- Exceptions: inline links, essential controls (end-of-sentence periods), user-controlled sizing
- Why 24 pixels: based on research about motor control and touch accuracy

**Testing with Stark (4 minutes)**
- Activate Stark touch target checker
- Overlay shows 24×24 pixel grid
- Identify targets below minimum
- Measure actual target dimensions
- Demonstrate 24-pixel bookmarklet

**Common Touch Target Issues (3 minutes)**
- Icon-only buttons without padding
- List items with small tap areas
- Toggle switches with small interaction areas
- Adjacent buttons without spacing
- Mobile navigation with small targets

**Design Solutions (3 minutes)**
- Add padding around interactive elements
- Increase spacing between adjacent targets
- Expand tap area beyond visible element
- Use larger touch targets for primary actions
- Test designs with touch target overlay

### Section 5: Practical Application & Testing (7 minutes)

**Integrated Testing Workflow (3 minutes)**
- Test keyboard accessibility first (no mouse)
- Verify focus indicators meet WCAG 2.2 criteria
- Check touch targets with overlay tool
- Document findings in annotations
- Retest after fixes

**Creating Blueline Annotations (4 minutes)**
- Keyboard interaction patterns
- Focus indicator specifications (color, thickness, contrast)
- Touch target dimensions
- Special behavior notes (focus traps, focus management)
- Example annotations for common components

---

## Quiz Questions

### Question 1: Keyboard Accessibility Fundamentals
**Outcome:** 1E.01

**Question:**  
You are reviewing a design for a custom dropdown menu that only opens when a user hovers over it with their mouse. Which WCAG success criterion does this violate?

**Options:**
A) SC 2.4.7: Focus Visible  
B) SC 2.1.1: Keyboard  
C) SC 2.4.11: Focus Appearance  
D) SC 2.5.8: Target Size (Minimum)

**Correct Answer:** B

**Rationale:**  
SC 2.1.1 (Keyboard) requires all functionality to be operable through a keyboard interface. A hover-only dropdown prevents keyboard users from accessing the menu content, creating a complete barrier. While focus visibility and appearance are also important, the fundamental issue is the lack of keyboard operability. This is a Level A requirement and must be addressed.

---

### Question 2: Identifying Keyboard Traps
**Outcome:** 1E.01

**Question:**  
During keyboard testing, you discover that when focus enters a modal dialog, you cannot use Tab to move focus back to the main page content. The Escape key closes the modal successfully. Is this an accessibility issue?

**Options:**
A) Yes, this is a keyboard trap violating SC 2.1.2  
B) No, focus should be trapped within modal dialogs  
C) Yes, but only if the modal cannot be closed  
D) No, as long as Escape works, any focus behavior is acceptable

**Correct Answer:** B

**Rationale:**  
Focus trapping within modal dialogs is intentional and correct. This prevents keyboard users from accidentally interacting with content behind the modal. As long as users can close the modal using keyboard (Escape key or a close button), this is the expected and accessible behavior. Keyboard traps become violations only when users cannot escape them using standard keyboard commands.

---

### Question 3: WCAG 2.2 Focus Appearance
**Outcome:** 1E.02

**Question:**  
You are designing focus indicators for a button component. According to WCAG 2.2 SC 2.4.11 (Focus Appearance), what is the minimum perimeter thickness required for the focus indicator?

**Options:**
A) 1 CSS pixel  
B) 2 CSS pixels  
C) 3 CSS pixels  
D) 4 CSS pixels

**Correct Answer:** B

**Rationale:**  
WCAG 2.2 SC 2.4.11 requires a minimum of 2 CSS pixels for the perimeter of the focus indicator. This can be a solid line, dashed line, or other visible indicator. While thicker focus indicators (3-4px) may provide better visibility, 2 CSS pixels is the minimum threshold for Level AA compliance. The focus indicator must also meet 3:1 contrast against adjacent colors.

---

### Question 4: Focus Indicator Contrast
**Outcome:** 1E.02

**Question:**  
You have designed a focus indicator using a 3-pixel blue outline (#0000FF). The button has a white background (#FFFFFF). When you test the contrast between the blue outline and white background, you get a ratio of 2.5:1. Does this meet WCAG 2.2 SC 2.4.11?

**Options:**
A) Yes, any visible outline meets the requirement  
B) No, the contrast ratio must be at least 3:1  
C) Yes, because the outline is 3 pixels thick  
D) No, focus indicators must have 4.5:1 contrast

**Correct Answer:** B

**Rationale:**  
SC 2.4.11 requires focus indicators to have at least 3:1 contrast against adjacent colors. A contrast ratio of 2.5:1 fails this requirement. While the 3-pixel thickness meets the size requirement, both size AND contrast must be satisfied. You would need to choose a darker blue or a different color to achieve at least 3:1 contrast against the white background.

---

### Question 5: Touch Target Minimum Size
**Outcome:** 1E.03

**Question:**  
According to WCAG 2.2 SC 2.5.8 (Target Size Minimum), what is the minimum size required for touch targets?

**Options:**
A) 44×44 CSS pixels  
B) 32×32 CSS pixels  
C) 24×24 CSS pixels  
D) 20×20 CSS pixels

**Correct Answer:** C

**Rationale:**  
WCAG 2.2 SC 2.5.8 requires touch targets to be at least 24×24 CSS pixels. This is a new Level AA requirement introduced in WCAG 2.2. Note that this is smaller than some platform-specific guidelines (iOS recommends 44×44 points), but 24×24 is the WCAG baseline. Spacing of at least 24 pixels between targets can substitute for size.

---

### Question 6: Touch Target Exceptions
**Outcome:** 1E.03

**Question:**  
Which of the following is an exception to the 24×24 pixel touch target size requirement in SC 2.5.8?

**Options:**
A) Secondary navigation links  
B) Icon buttons in a toolbar  
C) Links within a paragraph of text  
D) Mobile menu hamburger icons

**Correct Answer:** C

**Rationale:**  
Inline links (links within sentences or paragraphs of running text) are explicitly exempted from the 24×24 pixel requirement. Forcing all inline links to meet this threshold would disrupt text flow and readability. The other options (navigation links, icon buttons, menu icons) are not inline text and must meet the minimum target size or use appropriate spacing between targets.

---

## Common Student Questions

**Q: Do all elements need to be in the tab order?**  
A: No, only interactive elements (buttons, links, form fields, custom controls) need to be in the tab order. Static content like headings, paragraphs, and images should not receive focus. Decorative elements should be excluded from keyboard navigation.

**Q: What about default browser focus indicators, are those sufficient?**  
A: Default browser focus indicators often meet the minimum requirements, but they vary across browsers and may not be visible on all backgrounds. Custom focus indicators give you control over appearance and ensure consistency across platforms. Just ensure your custom indicators meet WCAG 2.2 SC 2.4.11 requirements.

**Q: Does the 24×24 pixel requirement apply to desktop interfaces too?**  
A: SC 2.5.8 technically applies to all pointer inputs, including mouse on desktop. However, the intent is primarily for touch interfaces where precision is limited. Many designers apply the requirement to mobile/tablet designs and use slightly smaller targets (with adequate spacing) on desktop where mouse precision is higher.

**Q: What if my icon buttons are 20×20 pixels?**  
A: The visible icon can be smaller than 24×24 as long as the interactive touch/click area is at least 24×24 pixels. Use CSS padding to expand the tap area beyond the visible icon. This is a common design solution that maintains visual density while meeting accessibility requirements.

**Q: Can I remove focus indicators if I have custom hover states?**  
A: No. Hover states only work with mouse/pointer input. Keyboard users never trigger hover states. You must provide visible focus indicators for keyboard users. Removing the outline without providing an alternative focus indicator is a WCAG failure.

**Q: How do I handle focus order in a multi-column layout?**  
A: Focus order should generally follow reading order (left-to-right, top-to-bottom in English). In multi-column layouts, focus typically moves down the first column, then down the second column. If your visual layout suggests a different reading order, ensure your DOM order matches the intended focus order. Document any special focus behavior in your annotations.

---

## Connections to Other Discover Badge Lessons

**L01 (Accessible Names):**
- Focus indicators and touch targets must have proper accessible names
- Focusable elements without names create confusion for screen reader users
- Apply accessible naming principles from L01 to interactive elements

**L02 (Headings):**
- Keyboard focus order should follow logical reading order
- DOM order drives both screen reader reading order and keyboard tab order
- Proper document structure supports predictable keyboard navigation
- Reading order content is now covered in L05 to align with focus order concepts

**L03 (Color):**
- Focus indicators must meet 3:1 contrast requirement (like UI components)
- Test focus indicators with contrast checker
- Ensure focus indicators are visible across color modes (light/dark)

**L04 (Forms & Errors):**
- Form fields must be keyboard accessible
- Error messages must be reachable via keyboard
- Focus management for error notifications
- Touch target sizing applies to form controls

**Upcoming Lessons:**
- L06 (Reflow & Zoom): Touch targets and focus indicators must remain functional when zoomed
- L07 (Landmarks & Navigation): Skip links and landmark navigation support keyboard efficiency
- L08 (Motion): Keyboard alternatives for motion-triggered interactions

---

## Teaching Notes

**Timing Guidance:**
- Section 1 (8 min): Keep statistics brief, focus on real-world impact
- Section 2 (15 min): Hands-on keyboard testing is essential, give students time to explore
- Section 3 (15 min): Demonstrate measurement in browser DevTools, show multiple examples
- Section 4 (15 min): Stark demo is critical, ensure everyone can see the overlay
- Section 5 (7 min): Quick recap of annotation patterns from L01

**Materials Needed:**
- Sample interface for keyboard testing (web page or prototype)
- Browser with DevTools (Chrome or Firefox)
- Stark plugin installed
- 24×24 pixel bookmarklet
- Example designs showing good/bad focus indicators
- Example mobile designs with various touch target sizes

**Common Teaching Challenges:**
- Students may struggle with "why" focus needs to be trapped in modals (explain it prevents accidentally interacting with background)
- Measuring focus indicators in DevTools requires comfort with browser tools (provide step-by-step guide)
- Students often confuse platform guidelines (44×44 iOS) with WCAG requirements (24×24) - clarify WCAG is the baseline
- Some students may resist visible focus indicators for aesthetic reasons (emphasize accessibility requirements and design solutions that balance both)

**Extension Activities:**
- Advanced: Design focus indicators for dark mode and light mode
- Advanced: Calculate spacing requirements for buttons in a toolbar
- Challenge: Identify keyboard accessibility issues in popular websites
- Group work: Review mobile app designs for touch target compliance

---

## Post-Lesson Reinforcement

**Immediate Actions:**
- Practice keyboard-only navigation on 3 different websites
- Measure focus indicators on favorite design system
- Test mobile designs with Stark touch target checker
- Create blueline annotations for at least one component

**Assessment:**
- Complete L05 quiz (8 questions, 13 points)
- Complete Applied Skill Project: Keyboard & Touch Accessibility Audit (15 points)
  - Test provided design mockup with keyboard only
  - Measure all focus indicators against WCAG 2.2 requirements
  - Check all touch targets with Stark
  - Document findings with blueline annotations

**Resources for Further Learning:**
- W3C Keyboard Accessibility Tutorial
- WebAIM: Keyboard Accessibility
- Deque: Accessible Focus Indicators
- Adrian Roselli: Focus Visible and Backwards Compatibility

---

**Document Version:** 1.0  
**Last Updated:** December 16, 2025  
**Author:** DACE Curriculum Team

