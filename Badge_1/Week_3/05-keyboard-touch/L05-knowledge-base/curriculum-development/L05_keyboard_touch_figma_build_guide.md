# L05: Keyboard, Touch & Reading Order - Figma Build Guide

**Course:** DACE  
**Badge:** Discover  
**Delivery:** In-person (synchronous)  
**Duration:** 60 minutes  
**Outcomes:** 1E.01, 1E.02, 1E.03, 1E.04

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 0.1-0.2 | 2 min | N/A |
| 1. Why Keyboard & Touch Matter | 1.1-1.3 | 6 min | All |
| 2. Keyboard Accessibility | 2.1-2.9 | 15 min | 1E.01 |
| 3. Focus Indicators | 3.1-3.8 | 15 min | 1E.02 |
| 4. Touch Target Sizing | 4.1-4.7 | 10 min | 1E.03 |
| 5. Reading Order Fundamentals | 5.1-5.5 | 8 min | 1E.04 |
| 6. Testing & Annotation | 6.1-6.3 | 6 min | All |
| 7. Quiz & Resources | 7.1-7.2 | 2 min | N/A |

**Total frames:** 40

> **Note:** Frames 2.9, 3.8, 4.7, and 5.5 are checkpoint slides added at the end of each content section for learner self-assessment.

---

## Design system notes

- Follow existing Adobe Design training template (tag icon header, 2025 footer)
- Section dividers: Full-bleed title, geometric pattern background
- Content frames: White background, left-aligned content
- Badge color: `#5151D3` (Discover Badge purple)
- Frame dimensions: 1440×900
- Learning Objective Pills: Bottom-left corner, linking to Frame 0.2

---

## Frame-by-frame specifications

### Section 0: Title & objectives

#### Frame 0.1: Title slide
- **Content:**
  - Lesson number: "Lesson 05"
  - Title: "Keyboard & Touch"
  - Subtitle: "Ensuring Universal Access to Interactive Elements"
  - Badge indicator: Discover Badge icon
  - Duration: "60 minutes"
- **Visual:** Geometric pattern background, centered text, keyboard and touch icons

**Speaker notes:**
Welcome to Lesson 05. This is our fifth in-person session in the Discover Badge curriculum. Today we're covering keyboard accessibility, focus indicators, touch targets, and reading order. These topics are fundamental because they determine whether users can actually interact with what you design. By the end of this hour, you'll know how to test keyboard access, design visible focus indicators, apply touch target requirements, and understand when reading order matters. Let's get started.

#### Frame 0.2: Learning objectives
- **Content:**
  - Header: "Learning objectives"
  - Four objectives with outcome pills:
    - [1E.01] Ensure all functionality is keyboard accessible
    - [1E.02] Design visible focus indicators
    - [1E.03] Apply touch target size requirements
    - [1E.04] Understand reading order fundamentals
  - Connection callout: "Builds on L01 (Names), L02 (Headings), L03 (Color)"
- **Visual:** Clean list layout with outcome pills, connection to previous lessons

**Speaker notes:**
Four focused outcomes today. First, keyboard accessibility: making sure everything works without a mouse. Second, focus indicators: the visual cue that shows where keyboard focus is. Third, touch targets: ensuring tap areas are large enough for all users. Fourth, reading order: understanding how content flows for screen reader users. Notice how this builds on previous lessons. In L01, you learned about accessible names. In L02, you learned about headings and structure. In L03, you learned about color. Today, we add the interaction layer: can users actually use what you've designed?

---

### Section 1: Why keyboard & touch matter

#### Frame 1.1: Section divider
- **Content:** "Why Keyboard & Touch Matter"
- **Visual:** Full-bleed section divider, geometric pattern with keyboard and touch icon

**Speaker notes:**
Let's start by understanding why keyboard and touch accessibility are so critical. This isn't about edge cases or small user groups. We're talking about fundamental access to interactive elements.

#### Frame 1.2: Who relies on keyboard access
- **Content:**
  - Header: "Keyboard accessibility is non-negotiable"
  - Four user groups with icons:
    - Screen reader users (navigate with keyboard)
    - Voice control users (simulate keyboard commands)
    - Motor disabilities (cannot use mouse)
    - Power users (prefer keyboard efficiency)
  - Statistic: "7.7M Americans have difficulty using hands or arms"
  - [LO 1E.01]
- **Visual:** Four quadrant layout with user icons, emphasize diversity of needs

**Speaker notes:**
Keyboard accessibility is non-negotiable. Let's look at who depends on it. Screen reader users navigate entirely with keyboard commands. Voice control users like those using Dragon NaturallySpeaking issue commands that translate to keyboard actions. People with motor disabilities who cannot use a mouse rely on keyboard, switch devices, or other alternatives. And power users in any profession prefer keyboard shortcuts for efficiency. The statistic is striking: 7.7 million Americans have difficulty using their hands or arms. That's just the US. When you design something that only works with a mouse, you're excluding millions of people.

#### Frame 1.3: Who needs proper touch targets
- **Content:**
  - Header: "Touch targets impact everyone"
  - Three scenarios:
    - Motor disabilities and tremors
    - Older adults with reduced dexterity
    - Situational disabilities (moving vehicle, one-handed use)
  - "WCAG 2.2 introduced SC 2.5.8: 24×24 pixel minimum"
  - [LO 1E.03]
- **Visual:** Three scenarios with illustrative icons, callout for WCAG 2.2

**Speaker notes:**
Touch targets affect everyone, not just people with disabilities. People with motor disabilities or tremors need larger targets. Older adults often have reduced fine motor control. And situational disabilities affect all of us: try tapping a tiny button while riding in a car, or while holding a coffee in one hand. WCAG 2.2 recognized this and introduced SC 2.5.8, requiring touch targets to be at least 24 by 24 CSS pixels. That's the WCAG minimum. Apple recommends 44 by 44 points. The point is: small tap targets are a barrier for many users in many situations.

---

### Section 2: Keyboard accessibility

#### Frame 2.1: Section divider
- **Content:** "Keyboard Accessibility"
- **Visual:** Full-bleed section divider

**Speaker notes:**
Now let's dive into the specifics of keyboard accessibility. This section covers the WCAG requirements, common failure patterns, and what you as a designer need to do.

#### Frame 2.2: How keyboard navigation works
- **Content:**
  - Header: "Essential keyboard commands"
  - Command table:
    - Tab: Move forward through focusable elements
    - Shift+Tab: Move backward
    - Enter/Space: Activate buttons and controls
    - Arrow keys: Navigate within components
    - Escape: Close modals, cancel actions
  - "Test your designs with keyboard only, no mouse!"
  - [LO 1E.01]
- **Visual:** Keyboard diagram with labeled keys, arrows showing navigation flow

**Speaker notes:**
Before we look at the WCAG requirements, let's understand how keyboard navigation actually works. Tab moves forward through focusable elements: links, buttons, form fields, and other interactive controls. Shift plus Tab moves backward. Enter or Space activates the current element. Arrow keys navigate within components like menus or radio button groups. Escape closes modals or cancels actions. Here's your homework: put away your mouse and navigate a website using only these keys. It's eye-opening. You'll immediately feel the friction that keyboard users experience every day.

#### Frame 2.3: SC 2.1.1 Keyboard
- **Content:**
  - Header: "WCAG SC 2.1.1: Keyboard (Level A)"
  - Requirement: "All functionality must be operable via keyboard"
  - No timing restrictions
  - Exception: Path-dependent input (drawing, handwriting)
  - Designer responsibility: "Specify which elements are interactive"
  - [LO 1E.01]
- **Visual:** Success criterion card, key takeaways highlighted

**Speaker notes:**
SC 2.1.1 Keyboard is a Level A requirement, meaning it's fundamental. The rule is simple: all functionality must be operable via keyboard interface. No timing restrictions allowed: you can't require users to press keys within a certain timeframe. The only exception is for path-dependent input like freehand drawing or handwriting, where the path matters, not just the endpoints. As a designer, your job is to specify which elements are interactive. If you design something clickable, it needs to be keyboard accessible. Document this in your annotations so engineering knows to implement proper keyboard support.

#### Frame 2.4: Common keyboard failures
- **Content:**
  - Header: "What goes wrong"
  - Four failure patterns with X icons:
    - Hover-only menus (no keyboard trigger)
    - Mouse-only dropdowns
    - Custom controls missing keyboard handlers
    - Removing elements from tab order unintentionally
  - "Always test: Can I reach and activate this without a mouse?"
  - [LO 1E.01]
- **Visual:** Four example UI patterns with red X marks, problematic code snippets

**Speaker notes:**
Let's look at common failures. Hover-only menus: the menu appears on mouse hover but there's no keyboard trigger. Mouse-only dropdowns: clicking reveals options but Tab skips right over them. Custom controls: that beautiful custom slider or toggle that only responds to mouse events. And accidentally removing things from tab order: developers sometimes set tabindex to minus one without realizing it removes the element from keyboard navigation entirely. Your testing mantra: can I reach this element and activate it without a mouse? If not, it fails.

#### Frame 2.5: SC 2.4.3 Focus Order
- **Content:**
  - Header: "WCAG SC 2.4.3: Focus Order (Level A)"
  - Requirement: "Focus order must preserve meaning and operability"
  - Visual order = Focus order
  - Left-to-right, top-to-bottom (for LTR languages)
  - Diagram: Page layout with numbered focus order
  - [LO 1E.01]
- **Visual:** Page mockup with numbered tab order overlay

**Speaker notes:**
SC 2.4.3 Focus Order is another Level A requirement. The focus order must preserve meaning and operability. In practice, this means the visual order should match the focus order. For left-to-right languages, that's left to right, top to bottom. Look at this diagram: if your layout has elements numbered 1 through 6 visually, keyboard focus should move through them in that same order. When designers use absolute positioning or CSS Grid in creative ways, they can accidentally create a disconnect between visual and focus order. That's a failure. Your visual layout implies a reading order, and the keyboard should follow it.

#### Frame 2.6: Focus traps (intentional)
- **Content:**
  - Header: "When focus SHOULD be trapped"
  - Modal dialog pattern:
    - Focus moves into modal when opened
    - Tab cycles within modal
    - Escape closes modal
    - Focus returns to trigger element
  - "This is correct behavior: prevents accidental interaction with background"
  - [LO 1E.01]
- **Visual:** Modal dialog with focus flow diagram, numbered steps

**Speaker notes:**
Here's an important distinction: sometimes trapping focus is correct. Modal dialogs are the prime example. When a modal opens, focus should move into the modal. Tab should cycle within the modal: when you reach the last focusable element, the next Tab goes back to the first element in the modal. Escape should close the modal. And when the modal closes, focus should return to the element that triggered it. This is correct behavior. It prevents users from accidentally tabbing into background content they can't see. This is called a "focus trap," and it's intentional and necessary for modals.

#### Frame 2.7: Keyboard traps (failures)
- **Content:**
  - Header: "Keyboard traps (the bad kind)"
  - Failure scenario: User enters component but cannot exit
  - Example: Embedded video player that captures all keyboard input
  - "Users must be able to navigate away using standard keyboard commands"
  - Testing tip: "Try to escape every component you enter"
  - [LO 1E.01]
- **Visual:** Trapped focus diagram with warning icon, escape route blocked

**Speaker notes:**
Now the bad kind: keyboard traps that are failures. This happens when a user tabs into a component but cannot tab out. Embedded video players are notorious for this. The player captures all keyboard input: arrow keys for volume and seeking, Space for play and pause. But Tab doesn't move focus out of the player. The user is stuck. WCAG SC 2.1.2 No Keyboard Trap specifically prohibits this. Users must be able to navigate away using standard keyboard commands. When testing, make this your habit: every component you tab into, try to tab out. If you can't escape, it's a trap.

#### Frame 2.8: Designer actions for keyboard access
- **Content:**
  - Header: "What designers do"
  - Checklist:
    - Test all interactions with keyboard only
    - Verify logical tab order matches visual order
    - Ensure custom controls have keyboard handlers
    - Document keyboard patterns in annotations
    - Identify when focus management is needed
  - [LO 1E.01]
- **Visual:** Checklist with designer icon, annotation example

**Speaker notes:**
So what do designers actually do for keyboard accessibility? First, test your designs with keyboard only. Put away the mouse and Tab through everything. Second, verify that the logical tab order matches your visual order. Third, if you design custom controls, specify that they need keyboard handlers in your annotations. Fourth, document keyboard interaction patterns. Does this accordion open with Enter? Does this menu navigate with arrow keys? Specify it. Fifth, identify when focus management is needed: modals, drawers, dynamic content. Call out these patterns for engineering. This is part of your design handoff.

#### Frame 2.9: Checkpoint - Keyboard accessibility

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 checkpoint pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Keyboard accessibility`

**Checklist:**
- [ ] I can test keyboard navigation without using a mouse
- [ ] I can identify the essential keyboard commands (Tab, Shift+Tab, Enter/Space, Arrow keys, Escape)
- [ ] I can recognize common keyboard accessibility failures
- [ ] I can verify that focus order matches visual order
- [ ] I can distinguish between intentional focus traps (modals) and failure keyboard traps

**Learning outcome card (right):**
- Icon: Lightbulb (circular blue icon at top)
- Title: `Learning Outcome`
- Body: `This checkpoint maps to Outcome 1E.01: Verify that all interactive elements can be reached and operated via keyboard.`

**Learning Objective Pill:** `LO 1E.01`

**Speaker notes:**
Take a moment to self-assess. You should now be able to test keyboard accessibility, identify common failures, and understand when focus trapping is appropriate. If any item feels unclear, revisit the previous frames in this section before moving on.

---

### Section 3: Focus indicators

#### Frame 3.1: Section divider
- **Content:** "Focus Indicators"
- **Visual:** Full-bleed section divider

**Speaker notes:**
Now that we understand keyboard navigation, let's talk about focus indicators. If keyboard access is about reaching elements, focus indicators are about knowing where you are.

#### Frame 3.2: Why focus indicators matter
- **Content:**
  - Header: "Focus indicators show where you are"
  - Analogy: "Like a cursor for keyboard users"
  - Without visible focus: "Users are navigating blind"
  - Common failure: `:focus {outline: none}` without replacement
  - [LO 1E.02]
- **Visual:** Comparison: page with visible focus vs. no visible focus

**Speaker notes:**
Think of focus indicators as the cursor for keyboard users. When you use a mouse, you always know where you are because you can see the pointer. Keyboard users don't have that. The focus indicator is their only visual cue showing which element is active. Without visible focus, keyboard users are navigating blind. They press Tab and something changes, but what? Which button is selected? Which link is active? They can't tell. The most common failure is developers adding CSS like "focus outline none" to remove the default browser outline because they think it looks ugly. If you remove the default, you must provide an alternative. You can never just remove it.

#### Frame 3.3: SC 2.4.7 Focus Visible
- **Content:**
  - Header: "WCAG SC 2.4.7: Focus Visible (Level AA)"
  - Requirement: "Keyboard focus must be visible"
  - Default browser outlines often work but vary across browsers
  - Custom focus indicators provide consistency
  - "You can change the focus indicator, but you can't remove it"
  - [LO 1E.02]
- **Visual:** Success criterion card, browser default focus examples

**Speaker notes:**
SC 2.4.7 Focus Visible is a Level AA requirement. It simply states that keyboard focus must be visible. The default browser outlines often meet this requirement, but they vary across browsers: Chrome shows a blue outline, Firefox shows a dotted outline, Safari shows something different. For brand consistency, many teams design custom focus indicators. That's fine, but remember the rule: you can change the focus indicator, but you can never remove it. Any custom focus style must be at least as visible as the browser default.

#### Frame 3.4: SC 2.4.11 Focus Appearance (WCAG 2.2)
- **Content:**
  - Header: "WCAG 2.2: SC 2.4.11 Focus Appearance (Level AA)"
  - New requirements for focus indicators:
    - Minimum perimeter: 2 CSS pixels
    - Contrast requirement: 3:1 against adjacent colors
    - Area requirement: As large as 1px border or 4x the border width
  - "More specific than 2.4.7: defines 'visible' with measurements"
  - [LO 1E.02]
- **Visual:** Success criterion card with three requirements illustrated

**Speaker notes:**
WCAG 2.2 introduced SC 2.4.11 Focus Appearance, which is more specific than 2.4.7. It defines "visible" with actual measurements. Three requirements: First, minimum perimeter of 2 CSS pixels. Your focus outline must be at least 2 pixels thick around the entire perimeter of the element. Second, contrast requirement: the focus indicator must have at least 3 to 1 contrast against adjacent colors. This connects to what you learned in L03 about color contrast. Third, area requirement: the focus indicator area must be as large as a 1 pixel border around the element or 4 times the border width. These specifics give you concrete targets to design and test against.

#### Frame 3.5: Measuring focus indicators
- **Content:**
  - Header: "How to test focus indicators"
  - Three measurements:
    1. Thickness: Must be at least 2 CSS pixels
    2. Contrast: Use contrast checker, minimum 3:1
    3. Area: Visual comparison to unfocused state
  - Tools: Browser DevTools, Contrast checker
  - [LO 1E.02]
- **Visual:** Button with focus indicator, measurement annotations, DevTools screenshot

**Speaker notes:**
How do you actually test focus indicators? Three measurements. First, thickness: inspect the element in browser DevTools and check the outline or border width. Must be at least 2 CSS pixels. Second, contrast: use a contrast checker like Stark or WebAIM. The focus indicator color must have at least 3 to 1 contrast against adjacent colors. Third, area: visually compare the focused state to the unfocused state. The change should be clearly visible. Browser DevTools are your friend here. Tab to an element, right-click, Inspect, and look at the computed styles for outline or border properties.

#### Frame 3.6: Good vs. bad focus indicators
- **Content:**
  - Header: "Focus indicator examples"
  - Three rows:
    - ✓ Good: 3px blue outline, 4.5:1 contrast
    - ✗ Bad: 1px gray outline, 2:1 contrast (fails size AND contrast)
    - ✗ Bad: Subtle shadow only, insufficient contrast
  - Best practice: "Thicker (3px+) and higher contrast are better"
  - [LO 1E.02]
- **Visual:** Three button examples with annotations showing measurements

**Speaker notes:**
Let's look at examples. First, a good focus indicator: 3 pixel blue outline with 4.5 to 1 contrast. Clear, visible, meets all requirements. Second, a bad one: 1 pixel gray outline with only 2 to 1 contrast. This fails both the size requirement and the contrast requirement. Third, another failure: a subtle shadow as the only focus indicator. Box shadows rarely provide sufficient contrast, and they don't create a clear perimeter. Best practice: go thicker than the minimum. 3 pixels or more is better than 2. Higher contrast is better than the minimum 3 to 1. When in doubt, make it more obvious.

#### Frame 3.7: Annotating focus indicators
- **Content:**
  - Header: "Specifying focus in bluelines"
  - Required annotations:
    - Focus indicator color (hex value)
    - Focus indicator thickness (px)
    - Contrast ratio
    - Special behavior (if any)
  - Example annotation from real design
  - [LO 1E.02]
- **Visual:** Design mockup with blueline annotation callouts

**Speaker notes:**
When you hand off designs, you need to specify focus indicators in your blueline annotations. Include four things: the focus indicator color as a hex value, the thickness in pixels, the contrast ratio you've verified, and any special behavior. For example, maybe focus on cards shows an outline, but focus on buttons shows a ring with an offset. Specify it. Look at this example annotation: "Focus state: 3px outline, color #0066CC, 5.2:1 contrast against white background." Give engineering clear specifications so they implement exactly what you designed.

#### Frame 3.8: Checkpoint - Focus indicators

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 checkpoint pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Focus indicators`

**Checklist:**
- [ ] I can explain why focus indicators are essential for keyboard users
- [ ] I can apply the WCAG 2.2 focus appearance requirements (2px minimum, 3:1 contrast)
- [ ] I can measure focus indicator thickness and contrast
- [ ] I can identify good vs. bad focus indicator examples
- [ ] I can specify focus indicators in blueline annotations

**Learning outcome card (right):**
- Icon: Lightbulb (circular blue icon at top)
- Title: `Learning Outcome`
- Body: `This checkpoint maps to Outcome 1E.02: Specify focus states that meet WCAG 2.2 focus appearance requirements.`

**Learning Objective Pill:** `LO 1E.02`

**Speaker notes:**
Self-assessment checkpoint. You should now understand why focus indicators matter, know the specific WCAG 2.2 requirements for focus appearance, and be able to specify focus indicators in your annotations. If anything is unclear, review the previous frames before continuing.

---

### Section 4: Touch target sizing

#### Frame 4.1: Section divider
- **Content:** "Touch Target Sizing"
- **Visual:** Full-bleed section divider

**Speaker notes:**
Now let's shift from keyboard to touch. Touch target sizing is especially important for mobile and tablet designs, but it applies anywhere users might tap or click.

#### Frame 4.2: SC 2.5.8 Target Size Minimum
- **Content:**
  - Header: "WCAG 2.2: SC 2.5.8 Target Size (Minimum)"
  - Requirement: "Touch targets must be at least 24×24 CSS pixels"
  - New in WCAG 2.2, Level AA
  - Why 24 pixels: Based on research about motor control
  - "Smaller than iOS (44×44) but this is the WCAG baseline"
  - [LO 1E.03]
- **Visual:** Success criterion card, 24×24 grid visualization

**Speaker notes:**
SC 2.5.8 Target Size Minimum is new in WCAG 2.2 and is a Level AA requirement. Touch targets must be at least 24 by 24 CSS pixels. Why 24 pixels? It's based on research about motor control and the typical size of a fingertip. Now, 24 pixels is smaller than Apple's Human Interface Guidelines which recommend 44 by 44 points. Think of WCAG's 24 pixels as the absolute minimum baseline. For better usability, especially on mobile, aim higher. But if something is smaller than 24 by 24, it's a WCAG failure.

#### Frame 4.3: Size vs. spacing
- **Content:**
  - Header: "Two ways to meet the requirement"
  - Option 1: Target is 24×24 pixels or larger
  - Option 2: Target has 24 pixels spacing to adjacent targets
  - "Spacing can substitute for size"
  - Visual diagram showing both approaches
  - [LO 1E.03]
- **Visual:** Two button groups: one with large buttons, one with spacing

**Speaker notes:**
There are two ways to meet the target size requirement. Option 1: make the target itself 24 by 24 pixels or larger. This is the straightforward approach. Option 2: if the target is smaller, ensure it has at least 24 pixels of spacing to any adjacent targets. Spacing can substitute for size. Look at this diagram: these small icon buttons are only 20 by 20 pixels, but they have 24 pixels of clear space between them. That passes. Why does spacing help? Because the problem with small targets is accidentally hitting the wrong one. Spacing prevents that even if the targets themselves are small.

#### Frame 4.4: Touch target exceptions
- **Content:**
  - Header: "When exceptions apply"
  - Four exceptions:
    - Inline links (within sentences or paragraphs)
    - Essential controls (periods in sentences)
    - User-controlled sizing
    - Equivalent targets available
  - "Most interactive elements DO need to meet 24×24"
  - [LO 1E.03]
- **Visual:** Four examples with checkmarks showing valid exceptions

**Speaker notes:**
There are four exceptions to the 24 by 24 rule. First, inline links within sentences or paragraphs. The link size is determined by the text, and requiring 24 pixel height would break line spacing. Second, essential controls where the size is essential to the information being conveyed, though this is rare. Third, user-controlled sizing: if the user can adjust target sizes themselves. Fourth, if an equivalent target is available elsewhere that does meet the size requirement. But be careful with exceptions. Most interactive elements, especially buttons and icons, do need to meet 24 by 24. Don't use exceptions as an excuse for poor design.

#### Frame 4.5: Common touch target issues
- **Content:**
  - Header: "What to look for"
  - Problem patterns:
    - Icon buttons without adequate padding
    - List items with small tap areas
    - Toggle switches with small touch zones
    - Navigation items too close together
    - Mobile toolbars with tiny icons
  - [LO 1E.03]
- **Visual:** Mobile screen mockup with problem areas highlighted in red

**Speaker notes:**
Let's look at common issues. Icon buttons without adequate padding: the icon is 16 pixels, but there's no padding, so the tap target is only 16 by 16. List items with small tap areas: the text might be readable, but the actual tappable region is too small. Toggle switches where only the tiny switch part is tappable, not the label. Navigation items crammed too close together with no spacing. Mobile toolbars trying to fit too many icons, making each one tiny. These are the patterns you should look for in your designs and flag for fixes.

#### Frame 4.6: Testing with Stark
- **Content:**
  - Header: "Testing touch targets"
  - Tool demo: Stark touch target checker
  - Shows 24×24 grid overlay
  - Identifies targets below minimum
  - Alternative: 24-pixel bookmarklet
  - "Test mobile designs before handoff"
  - [LO 1E.03]
- **Visual:** Stark overlay screenshot, mobile design with measurements

**Speaker notes:**
How do you test touch targets? Stark has a touch target checker that overlays a 24 by 24 pixel grid on your design. Any target that doesn't fit within a 24 by 24 area is flagged. It's visual and immediate. There's also a 24 pixel bookmarklet you can use in browsers for testing live sites. The key habit: test your mobile designs before handoff. It's much easier to fix small touch targets in Figma than after engineering has built it. Make touch target testing part of your design QA process.

#### Frame 4.7: Checkpoint - Touch target sizing

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 checkpoint pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Touch target sizing`

**Checklist:**
- [ ] I can apply the WCAG 2.2 minimum touch target size (24x24 CSS pixels)
- [ ] I understand that spacing can substitute for target size
- [ ] I can identify the four exceptions to touch target requirements
- [ ] I can test touch targets using Stark or the 24px bookmarklet
- [ ] I can recognize common touch target issues in mobile designs

**Learning outcome card (right):**
- Icon: Lightbulb (circular blue icon at top)
- Title: `Learning Outcome`
- Body: `This checkpoint maps to Outcome 1E.03: Design touch targets that meet minimum size requirements for mobile interfaces.`

**Learning Objective Pill:** `LO 1E.03`

**Speaker notes:**
Quick self-check. You should now understand the 24 by 24 pixel minimum, know when spacing can substitute for size, recognize the exceptions, and be ready to test touch targets in your designs. If any concept is unclear, review the previous frames in this section.

---

### Section 5: Reading order fundamentals

#### Frame 5.1: Section divider
- **Content:** "Reading Order Fundamentals"
- **Visual:** Full-bleed section divider

**Speaker notes:**
Our final content section covers reading order. This is important conceptual knowledge that helps you understand how screen readers experience your designs.

#### Frame 5.2: Reading order vs tab order
- **Content:**
  - Header: "Reading order vs tab order"
  - Two-column comparison:
    - Reading Order: All content (text, images, headings, controls) in the sequence screen readers announce them
    - Tab Order: Only interactive elements (buttons, links, form fields) in the sequence keyboard focus moves through them
  - Key insight: "SC 1.3.2 requires meaningful reading sequence"
  - [LO 1E.04]
- **Visual:** Side-by-side comparison diagram, content flow vs focus flow

**Speaker notes:**
There's an important distinction between reading order and tab order. Reading order is the sequence in which screen readers announce all content: headings, paragraphs, images, buttons, everything. Tab order is only the sequence of interactive elements that receive keyboard focus. Reading order includes everything. Tab order includes only focusable things. When a screen reader user presses the down arrow, they move through reading order. When they press Tab, they move through tab order. SC 1.3.2 requires a meaningful reading sequence. Your visual layout implies a reading order, and the underlying structure should match.

#### Frame 5.3: Disabled controls and reading order
- **Content:**
  - Header: "Disabled controls in reading order"
  - Example: Disabled Submit button in a form
  - Screen reader announces: "Submit, button, dimmed"
  - Disabled controls are IN reading order but NOT in tab order
  - Users understand options exist even when unavailable
  - [LO 1E.04]
- **Visual:** Form mockup with disabled button, screen reader output panel

**Speaker notes:**
Here's an interesting nuance: disabled controls. A disabled Submit button is in the reading order but not in the tab order. When a screen reader user arrows through a form, they'll hear "Submit, button, dimmed." They know the button exists and that it's currently unavailable. But when they Tab through the form, they skip right over the disabled button because it's not focusable. This is correct behavior. It helps users understand what options exist, even when those options aren't currently available. You don't need to design anything special here. Just know that this is how disabled controls work.

#### Frame 5.4: Common reading order failures
- **Content:**
  - Header: "SC 1.3.2 Failures"
  - Three common failures:
    - Modal dialogs: Background content still accessible to screen readers
    - Hidden content: Visually hidden but not hidden from AT
    - Menus/overlays: Collapsed content still in reading order
  - Designer takeaway: "You do NOT need to annotate reading order"
  - Note: "Reading order is primarily an engineering concern"
  - [LO 1E.04]
- **Visual:** Three failure examples with warning icons

**Speaker notes:**
Here are common reading order failures. Modal dialogs where the background content is still accessible to screen readers: users can arrow out of the modal into content they can't see. Hidden content that's visually hidden but not hidden from assistive technology: the screen reader announces invisible elements. Collapsed menus or overlays where the collapsed content is still in the reading order. Here's the important takeaway for designers: you do NOT need to annotate reading order. Reading order is primarily an engineering concern. Your job is to create clear visual layouts where the intended reading sequence is obvious. Engineering implements that sequence in the DOM. If you notice reading order issues during testing, flag them, but you don't need to specify reading order in your annotations.

#### Frame 5.5: Checkpoint - Reading order fundamentals

**Type:** Summary/checkpoint

**Layout:** Checklist on left, learning outcome card on right (match L01 checkpoint pattern)

**Heading:** `Checkpoint`

**Subtitle:** `Reading order fundamentals`

**Checklist:**
- [ ] I can distinguish between reading order (all content) and tab order (interactive elements only)
- [ ] I understand how disabled controls appear in reading order but not tab order
- [ ] I can identify common SC 1.3.2 failures (modal dialogs, hidden content, collapsed menus)
- [ ] I know that reading order annotation is primarily an engineering responsibility

**Learning outcome card (right):**
- Icon: Lightbulb (circular blue icon at top)
- Title: `Learning Outcome`
- Body: `This checkpoint maps to Outcome 1E.04: Understand reading order fundamentals and how they differ from tab order.`

**Learning Objective Pill:** `LO 1E.04`

**Speaker notes:**
Final content checkpoint. You should now understand the distinction between reading order and tab order, know how disabled controls behave, recognize common failures, and understand that reading order is primarily an engineering responsibility. With all four outcomes covered, you're ready for the testing and annotation workflow.

---

### Section 6: Testing & annotation

#### Frame 6.1: Section divider
- **Content:** "Testing & Annotation"
- **Visual:** Full-bleed section divider

**Speaker notes:**
Let's bring everything together with a practical testing and annotation workflow you can use on every project.

#### Frame 6.2: Integrated testing workflow
- **Content:**
  - Header: "Testing keyboard & touch together"
  - Five-step process:
    1. Test keyboard navigation (no mouse)
    2. Measure focus indicators (size & contrast)
    3. Check touch targets (Stark overlay)
    4. Document findings in annotations
    5. Retest after fixes
  - "Make this part of your design process, not just pre-handoff QA"
  - [LO All]
- **Visual:** Circular workflow diagram with five steps

**Speaker notes:**
Here's your integrated testing workflow. Step 1: Test keyboard navigation. Put away your mouse and Tab through every interactive element. Can you reach everything? Can you activate everything? Is the focus order logical? Step 2: Measure focus indicators. Check thickness and contrast. Step 3: Check touch targets using Stark's overlay. Step 4: Document your findings in annotations. Note what works, flag what doesn't, specify fixes. Step 5: After fixes are implemented, retest to verify. The critical mindset shift: make this part of your design process, not just pre-handoff QA. Test early, test often. It's much easier to fix issues in Figma than after development.

#### Frame 6.3: Annotation checklist
- **Content:**
  - Header: "What to document"
  - For keyboard accessibility:
    - Which elements are focusable
    - Keyboard interaction patterns
    - Focus management notes
  - For focus indicators:
    - Color and thickness
    - Contrast ratio
  - For touch targets:
    - Target dimensions
    - Spacing measurements
  - [LO All]
- **Visual:** Design mockup with comprehensive annotations

**Speaker notes:**
What should you document in your annotations? For keyboard accessibility: specify which elements are focusable, document keyboard interaction patterns like "arrow keys navigate this menu" or "Escape closes this modal," and note any focus management requirements like "focus should move to the modal when opened." For focus indicators: specify the color as a hex value, thickness in pixels, and the contrast ratio you've verified. For touch targets: document target dimensions and spacing measurements, especially for mobile designs. Look at this example: comprehensive annotations that give engineering everything they need to implement accessible interactions correctly.

---

### Section 7: Quiz & resources

#### Frame 7.1: Knowledge check
- **Content:**
  - Header: "Test your knowledge"
  - "Complete the L05 Quiz in Canvas"
  - Eight questions covering:
    - Keyboard navigation fundamentals
    - WCAG 2.2 focus appearance
    - Touch target requirements
    - Reading order fundamentals
  - Pass threshold: 80%
- **Visual:** Quiz icon, outcome pills

**Speaker notes:**
Time to test your knowledge. Complete the L05 Quiz in Canvas. There are eight questions covering everything we discussed today: keyboard navigation fundamentals, WCAG 2.2 focus appearance requirements, touch target sizing, and reading order concepts. The pass threshold is 80%. Take your time. If you get something wrong, review the relevant section of this lesson before retrying. The quiz is designed to reinforce the key concepts you need to apply in your daily work.

#### Frame 7.2: Resources
- **Content:**
  - Header: "Keep learning"
  - W3C Resources:
    - Understanding 2.1.1: Keyboard
    - Understanding 2.4.7: Focus Visible
    - Understanding 2.4.11: Focus Appearance
    - Understanding 2.5.8: Target Size
  - Adobe Resources:
    - Keyboard Focus on Digital Accessibility Guide
    - Blueline Annotation Guidelines
  - Tools:
    - Stark (touch targets)
    - Browser DevTools (focus inspection)
    - 24×24 pixel bookmarklet
  - Next lesson preview: "L06: Reflow & Zoom"
- **Visual:** Resource list with links, next lesson card

**Speaker notes:**
Here are resources for continued learning. The W3C Understanding documents for each success criterion we covered go deeper into the requirements and provide examples. Adobe's Digital Accessibility Guide has a section on keyboard focus with practical guidance. Stark is your primary testing tool for touch targets and focus indicators. Browser DevTools let you inspect focus states and measure properties. And the 24 pixel bookmarklet is a quick way to check touch target sizes in browsers. Coming up next is L06: Reflow and Zoom, where we'll cover responsive design and how users with low vision interact with zoomed content. Thank you for your attention today. Questions?

---

## Visual design notes

**Color Palette:**
- Discover Badge purple: `#5151D3`
- Success green: `#00875A`
- Failure red: `#DE350B`
- Neutral gray: `#6B778C`
- White background: `#FFFFFF`

**Typography:**
- Headers: Adobe Clean Bold, 48pt
- Body: Adobe Clean Regular, 24pt
- Code/measurements: Source Code Pro, 20pt

**Iconography:**
- Keyboard icons for navigation commands
- Touch/finger icons for touch targets
- Checkmarks and X marks for good/bad examples
- Measurement rulers and overlays
- User personas/avatars for who benefits

**Diagrams:**
- Focus flow diagrams (numbered tab order)
- Focus indicator close-ups with measurements
- Touch target grids (24×24 pixel overlays)
- Comparison layouts (good vs. bad)
- Annotation examples (callouts and specifications)

**Interactive Elements (if applicable):**
- Hover states showing focus indicators
- Click-through demo of keyboard navigation
- Stark overlay toggle
- Measurement tool demonstrations

---

## Accessibility notes for the deck itself

- All images have alt text
- Color is not the only way information is conveyed
- Text meets 4.5:1 contrast ratio
- Slide order is logical and sequential
- Slide titles are descriptive
- Code examples use accessible color combinations

---

**Document Version:** 1.2  
**Last Updated:** January 21, 2026  
**Author:** DACE Curriculum Team

**Revision History:**
- v1.2 (Jan 21, 2026): Added checkpoint slides for all four learning outcomes (Frames 2.9, 3.8, 4.7, 5.5)
- v1.1 (Jan 7, 2026): Initial release

