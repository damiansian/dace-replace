# Discover Badge Final Assessment Study Guide

**DACE (Design Accessibility Certified Expert) Program**  
**Badge Level:** Discover  
**Assessment:** 25 questions, 45 minutes, open book  
**Passing Score:** 85% (22/25 correct)

---

## How to Use This Guide

This study guide covers the key concepts, WCAG success criteria, and testing approaches you need to know for the Discover Badge final assessment. Focus on understanding the **why** behind accessibility requirements, not just memorizing rules.

The assessment tests your ability to:
- Evaluate design annotations for accessibility compliance
- Identify common accessibility failures
- Apply WCAG success criteria to real-world scenarios
- Make informed decisions about ambiguous situations

**Tip:** Have the WCAG 2.2 Quick Reference open during your assessment: https://www.w3.org/WAI/WCAG22/quickref/

---

## Module 1A: Accessible Names

### Core Concepts to Master

**What is an accessible name?**
- The text that assistive technology announces for an element
- Connects humans to digital interfaces through screen readers, voice control, etc.
- Every interactive element needs one (or must be explicitly marked decorative)

**When to provide an accessible name vs. mark as decorative:**
- **Functional elements** (buttons, links, form controls): Always need accessible names
- **Decorative elements**: Images/icons that don't convey unique information should be marked decorative
- **Key test:** If adjacent text already provides the information, the image may be decorative

**Quality criteria for accessible names:**
- **Clear:** Understandable without context
- **Concise:** Brief but complete
- **Descriptive:** Describes function, not appearance
- **Unique:** Distinguishes element from similar elements on the page

### Critical Knowledge

**Differentiating identical controls:**
- When multiple controls have the same visible text (e.g., multiple "Learn more" links), they must be programmatically differentiated
- Use adjacent heading or contextual text to provide unique names
- Positional context ("Link 1 of 3") is insufficient because it doesn't describe purpose

**Role vs. Name distinction:**
- The accessible **name** is what the element is called
- The **role** is what type of element it is (button, menu, link, etc.)
- Never include role information in the name field (screen readers announce roles automatically)
- Example: A menu button's name should be "More" or "Options," not "More menu"

**Decorative element considerations:**
- If an image's information is already conveyed by adjacent text, mark it decorative
- Avoid creating redundancy where users hear the same information twice
- Common decorative elements: avatars next to names, icons next to labels

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 1.1.1 Non-text Content | A | All non-text content has text alternatives |
| 2.4.4 Link Purpose (In Context) | A | Link purpose determinable from link text or context |
| 4.1.2 Name, Role, Value | A | All UI components have accessible names and roles |

### Common Mistakes to Avoid

- Including role information ("menu," "button") in accessible names
- Describing icon appearance ("three dots") instead of function ("More options")
- Creating redundant accessible names that repeat adjacent text
- Using positional context instead of meaningful differentiation
- Providing detailed image descriptions for functional UI elements

---

## Module 1B: Headings and Content Structure

### Core Concepts to Master

**Heading hierarchy rules:**
- H1-H6 creates a hierarchical outline of the page
- **Cardinal rule:** Do not skip levels going down (H1 to H3 is invalid)
- Skipping up is allowed (H3 back to H2 is fine)
- Visual size and semantic level are independent

**What makes text a heading:**
- Headings introduce sections of content
- Headings describe what content follows
- Not all large text is a heading (taglines, hero text may not be)
- Labels for form controls are NOT headings

**Platform differences:**
- **Web/iOS:** VoiceOver announces specific heading levels (H1, H2, H3...)
- **Android:** TalkBack only distinguishes "heading" vs "not heading" (binary)
- Annotate with levels for iOS/web users; note platform differences for engineering

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 1.3.1 Info and Relationships | A | Structure is programmatically determinable |
| 2.4.6 Headings and Labels | AA | Headings describe topic or purpose |

### Common Mistakes to Avoid

- Skipping heading levels (H1 to H3 with no H2)
- Choosing heading levels based on visual appearance instead of hierarchy
- Confusing labels, taglines, or decorative text with headings
- Assuming all platforms support heading levels equally

---

## Module 1C: Color and Contrast

### Core Concepts to Master

**Contrast ratio requirements:**

| Element Type | Minimum Ratio | Notes |
|--------------|---------------|-------|
| Regular text (< 24px or < 18.5px bold) | 4.5:1 | Most body text |
| Large text (≥ 24px or ≥ 18.5px bold) | 3:1 | Headlines, large UI text |
| UI components and graphical objects | 3:1 | Borders, focus indicators, icons |
| Disabled/inactive controls | Exempt | No contrast requirement |

**Where to measure contrast:**
- Text: Foreground text against background
- UI components: Border/edge against adjacent background
- Focus indicators: Focus ring against background (3:1 minimum)

**Color as sole indicator (SC 1.4.1):**
- Color alone cannot convey information
- Examples of failures: Red-only required fields, color-only status indicators, links without underlines
- Solution: Add non-color indicators (icons, text, patterns, underlines)

**Testing with color vision simulation:**
- **Primary method:** Grayscale/achromatopsia simulation
- **Why grayscale works:** Tests luminance contrast, which benefits all CVD types
- If information is clear in grayscale, it will work for users with color vision deficiencies
- You don't need to test every CVD type separately

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 1.4.1 Use of Color | A | Color not sole method of conveying information |
| 1.4.3 Contrast (Minimum) | AA | Text meets contrast ratios |
| 1.4.11 Non-text Contrast | AA | UI components and graphics meet 3:1 |

### Component State Contrast

**Selected states:** Must meet 3:1 contrast (the visual indicator of selection must be perceivable)

**Hover states:** No contrast requirement (the pointer provides visual feedback)

**Focus states:** Must meet 3:1 contrast for the focus indicator

### Common Mistakes to Avoid

- Testing disabled button contrast (they're exempt)
- Confusing SC 1.4.1 (Use of Color) with SC 1.4.3 (Contrast)
- Thinking high contrast alone satisfies SC 1.4.1 (you still need non-color indicators)
- Testing only headline contrast and missing body text failures
- Misapplying the G183 technique (link contrast) to navigation states

---

## Module 1D: Forms, Labels, and Errors

### Core Concepts to Master

**Form labels are accessible names:**
- Every form control needs a visible, persistent label
- Placeholder text is NOT a substitute for labels
- Labels must be programmatically associated with their controls

**The placeholder problem:**
- Placeholder text disappears when users click/tap into field
- Users must remember what the field was for
- Creates cognitive load and accessibility failures

**Error identification requirements (SC 3.3.1):**
- Errors must be identified in text
- Error messages must explain what went wrong
- Color alone cannot indicate errors (connects to SC 1.4.1)

**Error suggestion requirements (SC 3.3.3):**
- Error messages should suggest how to fix the problem
- Both problem identification AND solution should be provided

**Input purpose (SC 1.3.5):**
- Standard fields (name, email, address, phone) should support autocomplete
- Reduces keystrokes for users with motor disabilities
- Reduces memory demands for users with cognitive disabilities
- Implementation is engineering's responsibility; designers should recognize beneficial fields

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 1.3.5 Identify Input Purpose | AA | Input purpose programmatically determinable |
| 3.3.1 Error Identification | A | Errors identified and described in text |
| 3.3.2 Labels or Instructions | A | Labels or instructions provided for user input |
| 3.3.3 Error Suggestion | AA | Suggestions for error correction provided |

### Label Context Issues

When a user selects a generic value (like "All") from a dropdown that uses its current value as its label:
- The context is lost (users don't know "All" of what)
- Persistent visible labels prevent this problem
- Current value serving as implicit label only works when the default value is descriptive

### Common Mistakes to Avoid

- Using placeholder text as the only label
- Providing error messages without suggested fixes
- Indicating errors with color/icons only (no text)
- Assuming floating labels solve all placeholder problems
- Forgetting that labels must persist (not just appear on focus)

---

## Module 1E: Keyboard, Touch, and Focus

### Core Concepts to Master

**Keyboard accessibility fundamentals:**
- All interactive functionality must be operable via keyboard
- Standard patterns: Tab/Shift+Tab for navigation, Enter/Space for activation, Arrow keys within groups
- No keyboard traps (users must be able to navigate away from any element)

**Tab stop patterns for different controls:**

| Control Type | Tab Stop Behavior |
|--------------|-------------------|
| Buttons, links, form fields | Each is a separate tab stop |
| Radio buttons | Single tab stop, arrow keys navigate between options |
| Checkboxes | Each checkbox is a separate tab stop (independent selections) |
| Color pickers, similar selectors | Single tab stop with arrow key navigation |

**Key distinction:** Radio buttons are mutually exclusive (single tab stop with arrows). Checkboxes are independent (each is its own tab stop).

**Focus order requirements (SC 2.4.3):**
- Focus order must be logical and preserve meaning
- Generally follows visual reading order (left-to-right, top-to-bottom in LTR languages)
- DOM order typically determines focus order

**Modal focus behavior:**
- When a modal opens, focus should move to the first focusable element (typically close button)
- Don't skip past content to auto-focus call-to-action buttons
- Users need to orient themselves in the modal before navigating

**Touch target requirements (SC 2.5.8):**
- Minimum 24×24 pixels (WCAG 2.2)
- Exceptions: inline text links, when a larger control serves the same function
- Spacing can compensate for smaller targets
- Equivalent controls (like a numeric input alongside a slider) provide alternatives

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 2.1.1 Keyboard | A | All functionality operable via keyboard |
| 2.4.3 Focus Order | A | Focus order is logical and meaningful |
| 2.4.7 Focus Visible | AA | Keyboard focus indicator is visible |
| 2.5.8 Target Size (Minimum) | AA | Touch targets at least 24×24 pixels |

### Target Size Exceptions

- **User agent controlled:** Native browser/OS controls (like scrollbars)
- **Spacing:** If adequate spacing exists around smaller targets
- **Equivalent:** Alternative control serves same function
- **Inline:** Targets within sentences or text blocks
- **Essential:** Size is legally required or fundamental to information

### Common Mistakes to Avoid

- Annotating checkbox groups as single tab stops (that's radio button behavior)
- Auto-focusing call-to-action buttons in modals instead of first focusable element
- Confusing visual size with clickable area
- Forgetting that slider tracks often provide larger hit areas than just the handle

---

## Module 1F: Reflow, Zoom, and Text Spacing

### Core Concepts to Master

**400% zoom and reflow (SC 1.4.10):**
- Content must be usable at 400% zoom without horizontal scrolling
- 1280px viewport at 400% = 320px equivalent viewport
- Content should reflow to single column at narrow widths
- Exceptions: Data tables, toolbars, complex diagrams

**Sticky elements at high zoom:**
- Sticky headers/footers that are reasonable at 100% can consume excessive viewport at 400%
- Fixed-position elements (chat widgets, CTAs) can overlap interactive controls
- Solutions: Specify min-height thresholds for unsticking, collapsing, or relocating sticky elements

**Text spacing requirements (SC 1.4.12):**
- Content must remain usable when users adjust:
  - Line height to 1.5× font size
  - Letter spacing to 0.12× font size
  - Word spacing to 0.16× font size
  - Paragraph spacing to 2× font size
- Fixed-height containers cause text clipping when spacing increases

**Solving text clipping:**
- **Vertical growth:** Container expands height, text wraps to multiple lines
- **Horizontal growth:** Container expands width, text stays on single line
- Both approaches are valid for conformance
- The requirement is no loss of content or functionality

**Orientation requirements (SC 1.3.4):**
- Content must work in both portrait and landscape orientations
- Benefits users with mounted devices (wheelchairs, bedside stands)
- Exceptions only when specific orientation is essential (piano app, check deposit)

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 1.3.4 Orientation | AA | Content works in both orientations |
| 1.4.4 Resize Text | AA | Text resizable to 200% without loss |
| 1.4.10 Reflow | AA | Content reflows at 400% without horizontal scroll |
| 1.4.12 Text Spacing | AA | Content works with adjusted text spacing |

### Common Mistakes to Avoid

- Blaming reflow failures on pixelation (zoom doesn't cause pixelation)
- Thinking accessible names are affected by visual zoom (they're programmatic)
- Using fixed-height containers for text content
- Restricting orientation when not essential
- Forgetting that reflow issues often come from sticky elements, not content

---

## Module 1G: Landmarks, Navigation, and Consistency

### Core Concepts to Master

**The six ARIA landmark roles:**

| Landmark | HTML5 Equivalent | Purpose |
|----------|------------------|---------|
| banner | header | Site-wide header content |
| navigation | nav | Navigation links |
| main | main | Primary page content |
| complementary | aside | Supporting content |
| contentinfo | footer | Footer/copyright info |
| search | (none) | Search functionality |

**Multiple landmarks of the same type:**
- When a page has multiple nav elements (header nav, footer nav), each needs a unique accessible name
- Screen reader users navigating by landmarks would otherwise hear "navigation" with no differentiation
- Example names: "Main navigation," "Page navigation," "Footer links"

**Consistent navigation (SC 3.2.3):**
- Navigation components must appear in the same relative order across pages
- Helps users predict where to find navigation elements

**Consistent identification (SC 3.2.4):**
- Components with the same functionality must be identified consistently
- Example: A "Sort" function should have the same accessible name across all pages
- Inconsistent naming creates confusion for screen reader users

**Skip links and bypass blocks (SC 2.4.1):**
- Users must be able to bypass repeated content (headers, navigation)
- Three methods: Skip links, landmarks, headings
- Skip to main link moves focus to the beginning of main content
- After activating skip link + Tab, focus goes to first interactive element in main

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 1.3.1 Info and Relationships | A | Landmarks programmatically conveyed |
| 2.4.1 Bypass Blocks | A | Mechanism to bypass repeated content |
| 2.4.3 Focus Order | A | Logical focus sequence |
| 3.2.3 Consistent Navigation | AA | Navigation in consistent order |
| 3.2.4 Consistent Identification | AA | Same function = same identification |

### Skip Link Focus Behavior

When a skip to main link is activated:
1. Focus moves to the beginning of the main content region
2. On next Tab press, focus goes to the **first interactive element** within main
3. This is typically a search field, first link, or first button in the main content area

### Common Mistakes to Avoid

- Having multiple landmarks of the same type without unique names
- Confusing SC 3.2.3 (consistent order) with SC 3.2.4 (consistent identification)
- Thinking skip links bypass all header content including the first main element
- Using different accessible names for controls that do the same thing

---

## Module 1H: Motion and Animation

### Core Concepts to Master

**Auto-playing content (SC 2.2.2):**
- Content that starts automatically, lasts over 5 seconds, and appears with other content needs pause/stop/hide controls
- Videos, carousels, animations that loop all fall under this requirement
- Users must be able to pause, stop, or hide the moving content

**Reduced motion preferences:**
- Operating systems provide prefers-reduced-motion settings
- Websites should honor this preference via CSS media query
- When enabled, animations should be paused by default or significantly reduced
- Users can still choose to play animations via provided controls

**Flash threshold (SC 2.3.1):**
- Content must NOT flash more than 3 times per second
- Rapid flashing can trigger seizures in people with photosensitive epilepsy
- **Saturated red flashing is particularly dangerous**
- This is a safety requirement, not just a usability preference

**Essential vs. decorative motion:**
- **Essential motion:** Communicates information that would be lost without animation
- **Decorative motion:** Aesthetic enhancement that can be removed without information loss
- Decorative motion should be reduced/eliminated when prefers-reduced-motion is enabled
- Essential motion may need static alternatives

### WCAG Success Criteria

| SC | Level | What It Requires |
|----|-------|------------------|
| 2.2.2 Pause, Stop, Hide | A | Control for auto-playing content > 5 seconds |
| 2.3.1 Three Flashes or Below Threshold | A | No content flashes > 3 times/second |
| 2.3.3 Animation from Interactions | AAA | Motion disableable unless essential |

### Safe Motion Design

**When designing features that involve rapid visual changes:**
- Consider whether the feature is necessary
- Add clear warnings before triggering potentially problematic content
- Never trigger flashing/flickering content on hover (could surprise users)
- Ensure flash rate stays well below 3 times per second
- Consider not shipping features that create seizure risks

**Why paused-by-default matters:**
- A play button appearing on page load indicates the page is honoring reduced motion preferences
- Users who haven't enabled reduced motion see content playing with a pause button available
- This respects user autonomy while meeting WCAG requirements

### Common Mistakes to Avoid

- Creating content that flashes more than 3 times per second
- Not providing pause controls for auto-playing content over 5 seconds
- Ignoring the prefers-reduced-motion media query
- Triggering potentially harmful animations on hover
- Thinking "flicker" is different from "flash" (WCAG covers both)

---

## General Test-Taking Strategies

### Reading Questions Carefully

- Pay attention to what specific SC or requirement is being asked about
- Note whether the question asks about a specific annotation marker or the whole design
- Look for qualifiers like "MOST accurate" or "BEST approach"

### Using WCAG References

- Keep WCAG Understanding documents open during the assessment
- Know the difference between Level A and Level AA requirements
- Remember that WCAG 2.2 includes SC 2.5.8 (Target Size Minimum) and SC 2.4.11 (Focus Appearance)

### Eliminating Wrong Answers

- Watch for answers that have the requirement backwards (e.g., "flash at least 3 times" instead of "no more than 3 times")
- Be suspicious of answers that claim no action is needed when there's an obvious accessibility concern
- Consider whether an answer applies to the correct success criterion

### Platform Awareness

- Remember iOS/Android differences for heading levels
- Consider how different platforms handle keyboard navigation
- Note when a question specifies web, mobile, or cross-platform context

---

## Quick Reference: Key Numbers

| Requirement | Value | Source |
|-------------|-------|--------|
| Normal text contrast | 4.5:1 | SC 1.4.3 |
| Large text contrast | 3:1 | SC 1.4.3 |
| UI component contrast | 3:1 | SC 1.4.11 |
| Touch target minimum | 24×24 px | SC 2.5.8 |
| Zoom without horizontal scroll | 400% | SC 1.4.10 |
| Viewport equivalent at 400% zoom | 320px | SC 1.4.10 |
| Flash threshold | ≤3 per second | SC 2.3.1 |
| Auto-play control threshold | >5 seconds | SC 2.2.2 |

---

## Final Preparation Checklist

Before taking the assessment, ensure you can:

- [ ] Explain when an element needs an accessible name vs. should be marked decorative
- [ ] Identify when role information doesn't belong in an accessible name
- [ ] Recognize valid and invalid heading hierarchies
- [ ] Know the contrast requirements for text, large text, and UI components
- [ ] Explain SC 1.4.1 (Use of Color) and how it differs from contrast requirements
- [ ] Describe why placeholder text fails as a label
- [ ] Identify the two components of good error messages (identification + suggestion)
- [ ] Distinguish checkbox tab behavior from radio button tab behavior
- [ ] Explain where focus should go when a modal opens
- [ ] Know the touch target size exceptions
- [ ] Describe the root cause of sticky element issues at 400% zoom
- [ ] Know both solutions for text spacing clipping (vertical growth, horizontal growth)
- [ ] Explain why orientation support matters for users with mounted devices
- [ ] Know when multiple landmarks need unique accessible names
- [ ] Explain consistent identification (same function = same name)
- [ ] Know what happens after activating a skip link and pressing Tab
- [ ] Describe the flash threshold and why it matters
- [ ] Explain how prefers-reduced-motion affects animation behavior

---

**Good luck on your assessment!**

*Last updated: February 2026*  
*Version: 1.0*
