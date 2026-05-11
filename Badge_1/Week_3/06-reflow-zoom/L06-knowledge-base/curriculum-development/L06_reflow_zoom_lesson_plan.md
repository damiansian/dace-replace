# L06: Reflow and Zoom
## Lesson Plan

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge Level:** Discover  
**Delivery:** Online (asynchronous)  
**Duration:** 40 minutes  
**Outcomes Covered:** 1F.01, 1F.02, 1F.03

---

## Lesson Overview

This online lesson teaches designers how to create layouts that work at high zoom levels, accommodate text spacing adjustments, and support both portrait and landscape orientations. These skills ensure designs remain usable for people with low vision, cognitive disabilities, and users on mobile devices.

### Why This Matters

Many users rely on zoom and text adjustments to read content comfortably. When designs break at high zoom levels or clip text when spacing is adjusted, these users are locked out. Unlike some accessibility requirements that improve the experience, zoom and reflow issues can make content completely unusable.

---

## Learning Outcomes

| ID | Outcome | Type |
|----|---------|------|
| 1F.01 | Design for 400% zoom without horizontal scroll | Skill |
| 1F.02 | Ensure text spacing adjustments work | Skill |
| 1F.03 | Apply orientation requirements | Knowledge |

### Knowledge (What learners will understand)

- SC 1.4.10 (Reflow) requires content to work at 400% zoom without horizontal scrolling
- 400% zoom on 1280px viewport = 320px equivalent viewport
- Text spacing adjustments (line height, letter spacing, word spacing) help users with dyslexia and low vision
- Fixed-height containers cause text clipping when spacing is adjusted
- Orientation restrictions create barriers for users with mounted devices
- Responsive design practices naturally support many of these requirements

### Skills (What learners will be able to do)

- Design flexible layouts that reflow to single column
- Avoid fixed-height text containers
- Test designs at 400% zoom
- Use text spacing testing tools
- Verify designs work in both orientations

### Application (How learners will apply this)

- Audit existing designs for reflow issues
- Test with browser zoom and text spacing bookmarklets
- Document responsive behavior for engineering handoff
- Make informed decisions about orientation restrictions

---

## WCAG Success Criteria

| SC | Name | Level | Relevance |
|----|------|-------|-----------|
| 1.4.4 | Resize Text | AA | Text resizable to 200% without loss |
| 1.4.10 | Reflow | AA | No horizontal scroll at 400% zoom |
| 1.4.12 | Text Spacing | AA | Content works with adjusted spacing |
| 1.3.4 | Orientation | AA | Works in portrait and landscape |

---

## Content Outline

### Section 0: Title and Objectives (1 min)

**Key points:**
- Lesson title and duration
- Three learning outcomes display
- Connection to responsive design practices

---

### Section 1: Why Reflow and Zoom Matter (5 min)

**Key points:**
- Who uses zoom: people with low vision, aging users, mobile users
- Browser zoom is a primary assistive technology (more common than screen readers)
- Text spacing helps users with dyslexia, cognitive disabilities, low vision
- Orientation flexibility helps users with mounted devices (wheelchairs, stands)

**Key message:**
These are not edge cases. Browser zoom is used by millions of people daily. Designs that break at zoom create immediate, visible failures.

**Media:**
- Statistics on low vision prevalence
- Example of content breaking at 400% zoom vs. content reflowing properly

---

### Section 2: Designing for 400% Zoom (10 min)

**2.1 The Reflow Requirement (SC 1.4.10)**

- 400% zoom on 1280px viewport = 320px equivalent viewport
- Content must reflow without horizontal scrolling
- Users should not need to scroll in two dimensions to read content
- This is a Level AA requirement

**2.2 What "Reflow" Means**

- Content stacks vertically (single column)
- Navigation adapts (hamburger menus, collapsed sidebars)
- Images scale or stack
- All text remains readable

**2.3 Horizontal Scrolling Exceptions**

Valid exceptions (two-dimensional layout is essential):
- Data tables
- Complex diagrams
- Video players and toolbars
- Maps

Not valid exceptions:
- Multi-column article layouts
- Side-by-side comparisons (can stack)
- Fixed-width containers

**2.4 Designer's Role**

- Design responsive breakpoints
- Specify how layouts collapse at narrow viewports
- Document expected reflow behavior for complex components
- Avoid fixed-width containers

**Exercise:**
Show three layouts. Identify which would fail at 400% zoom.

---

### Section 3: Text Spacing Requirements (10 min)

**3.1 The Text Spacing Requirement (SC 1.4.12)**

Users must be able to adjust:
- Line height to at least 1.5 times font size
- Letter spacing to at least 0.12 times font size
- Word spacing to at least 0.16 times font size
- Paragraph spacing to at least 2 times font size

Content must remain readable with no loss of functionality.

**3.2 Why Users Adjust Text Spacing**

- Dyslexia: increased spacing improves readability
- Low vision: prevents letters from appearing to merge
- Cognitive disabilities: reduces visual crowding
- Reading fatigue: customized spacing improves comfort

**3.3 The Fixed-Height Container Problem**

When containers have fixed heights:
- Text overflows the container
- Text gets clipped (hidden)
- Buttons become too small for their text
- Content overlaps other elements

**3.4 The Fix: Flexible Heights**

- Use min-height instead of height
- Let containers grow with content
- Test with text spacing bookmarklet
- Design buttons with padding, not fixed dimensions

**3.5 Practice**

Show three components. Identify which would fail text spacing adjustments.

---

### Section 4: Orientation Support (7 min)

**4.1 The Orientation Requirement (SC 1.3.4)**

- Content must work in both portrait and landscape
- Cannot force a single orientation unless essential
- Level AA requirement

**4.2 Who This Helps**

- Users with devices mounted to wheelchairs (often fixed orientation)
- Users with devices on stands or mounts
- Users with motor disabilities who cannot rotate devices
- Anyone using split-screen or window modes

**4.3 Legitimate Exceptions**

Orientation can be restricted when function requires it:
- Piano keyboard app (needs horizontal space)
- Bank check deposit (camera alignment)
- Projector control interface (matches projector orientation)

Key question: Is the orientation restriction essential for the function, or just a design preference?

**4.4 Testing Orientation**

- Test on actual mobile devices
- Use browser DevTools device simulation
- Verify navigation works in both orientations
- Check that primary content is accessible

---

### Section 5: Testing Your Designs (5 min)

**5.1 Testing for Reflow (1F.01)**

1. Open design/prototype in browser
2. Set browser width to 1280px
3. Zoom to 400%
4. Verify no horizontal scrolling needed for text content
5. Check that all functionality remains accessible

**5.2 Testing for Text Spacing (1F.02)**

1. Use text spacing bookmarklet or browser extension
2. Apply maximum spacing adjustments
3. Check for text clipping or overflow
4. Verify buttons and controls remain usable
5. Ensure no content disappears

**5.3 Testing for Orientation (1F.03)**

1. Test on actual mobile device (or emulator)
2. Lock orientation to portrait, verify functionality
3. Lock orientation to landscape, verify functionality
4. Check that navigation adapts appropriately

**5.4 Designer's Handoff Notes**

Include in design specs:
- Expected reflow behavior at breakpoints
- Flexible sizing requirements (min-height, not height)
- Any orientation restrictions with justification

---

### Section 6: Quiz and Resources (2 min)

**Key points:**
- Quiz preview: 6 questions covering all three outcomes
- Open-book, auto-graded
- Resource links for further learning
- Connection to next lesson (L07: Landmarks and Navigation)

---

## Quiz Questions

### Question 1 (1F.01)

**A user zooms their browser to 400% on a 1280px wide viewport. According to WCAG 2.2 SC 1.4.10 (Reflow), what should happen to the content?**

A) Content should scale proportionally, maintaining the same layout  
B) Content should reflow to fit without requiring horizontal scrolling  
C) A message should appear asking the user to zoom out  
D) Content should switch to a mobile app version  

**Correct:** B

**Feedback:**
- **Correct (B):** SC 1.4.10 requires content to reflow at 400% zoom so users do not need to scroll horizontally to read content. At 400% on 1280px, the effective viewport is 320px, similar to a mobile device. Content should adapt to this narrow viewport.
- **Incorrect (A):** Proportional scaling would shrink text, defeating the purpose of zooming.
- **Incorrect (C):** Users must not be prevented from zooming.
- **Incorrect (D):** Web content must work at zoom; redirecting is not compliant.

---

### Question 2 (1F.01)

**Which of the following is a valid exception to the reflow requirement, where horizontal scrolling may be acceptable?**

A) A marketing page with a three-column layout  
B) A data table comparing product features  
C) A blog article with sidebar navigation  
D) A contact form with side-by-side fields  

**Correct:** B

**Feedback:**
- **Correct (B):** Data tables require two-dimensional layout to maintain meaning. Users expect to scroll tables. This is an explicit exception in SC 1.4.10.
- **Incorrect (A):** Marketing layouts can reflow to single column.
- **Incorrect (C):** Sidebars can collapse or become navigation menus.
- **Incorrect (D):** Form fields can stack vertically at narrow viewports.

---

### Question 3 (1F.02)

**According to SC 1.4.12 (Text Spacing), users must be able to adjust text spacing without losing content. Which of these spacing adjustments must be supported?**

A) Line height of 1.5x, letter spacing of 0.12x, word spacing of 0.16x  
B) Line height of 2x, letter spacing of 0.5x, word spacing of 1x  
C) Only line height adjustments  
D) Only letter spacing adjustments  

**Correct:** A

**Feedback:**
- **Correct (A):** SC 1.4.12 specifies minimum adjustments that must be supported: line height 1.5x font size, letter spacing 0.12x, word spacing 0.16x, and paragraph spacing 2x font size.
- **Incorrect (B):** These values exceed the minimum requirements.
- **Incorrect (C):** All four spacing properties must be supported.
- **Incorrect (D):** All four spacing properties must be supported.

---

### Question 4 (1F.02)

**A designer creates a button with a fixed height of 40px. When a user applies text spacing adjustments, the button text gets clipped. What is the best solution?**

A) Use a smaller font size to prevent clipping  
B) Use min-height instead of height so the button can grow  
C) Add a tooltip showing the full button text  
D) Disable text spacing adjustments for buttons  

**Correct:** B

**Feedback:**
- **Correct (B):** Using min-height allows the button to expand when text spacing is increased, ensuring all text remains visible. This is the recommended approach for flexible components.
- **Incorrect (A):** Reducing font size reduces accessibility for users who need larger text.
- **Incorrect (C):** Tooltips do not solve the core problem and may not be accessible.
- **Incorrect (D):** Users control text spacing via browser settings; it cannot be disabled.

---

### Question 5 (1F.03)

**SC 1.3.4 (Orientation) requires that content work in both portrait and landscape. Who particularly benefits from this requirement?**

A) Only users with visual impairments  
B) Users with devices mounted to wheelchairs or stands who cannot rotate them  
C) Only users on desktop computers  
D) Users who prefer a specific color scheme  

**Correct:** B

**Feedback:**
- **Correct (B):** Users with mounted devices (wheelchairs, bedside stands, kitchen mounts) often cannot rotate their devices. Forcing a single orientation creates a complete barrier for these users.
- **Incorrect (A):** Orientation affects users with motor disabilities more directly than visual impairments.
- **Incorrect (C):** Orientation applies to mobile devices, not desktops.
- **Incorrect (D):** Orientation and color schemes are unrelated.

---

### Question 6 (1F.03)

**Which of the following is a legitimate exception where an app may restrict orientation?**

A) A news reading app that looks better in portrait  
B) A music player that was designed for landscape  
C) A bank check deposit feature that requires specific camera alignment  
D) A social media app that prefers portrait for scrolling  

**Correct:** C

**Feedback:**
- **Correct (C):** Check deposit requires specific camera alignment to capture the check correctly. This is an essential function that justifies orientation restriction.
- **Incorrect (A):** "Looking better" is a design preference, not an essential function.
- **Incorrect (B):** Music players do not require specific orientation to function.
- **Incorrect (D):** Preference for scrolling is not an essential function.

---

## Resources

### W3C Resources

- [Understanding SC 1.4.4: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [Understanding SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [Understanding SC 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [Understanding SC 1.3.4: Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
- [Technique C32: Using CSS grid layout for reflow](https://www.w3.org/WAI/WCAG22/Techniques/css/C32)
- [Technique C31: Using CSS Flexbox for reflow](https://www.w3.org/WAI/WCAG22/Techniques/css/C31)

### Adobe Resources

- Design Accessibility Checklist (Responsive Design section)
- Spectrum Design System: Responsive Layout Guidelines
- Spectrum Components: Flexible Sizing Patterns

### Testing Tools

- Text Spacing Bookmarklet: https://dylanb.github.io/bookmarklets.html
- Browser DevTools for viewport simulation
- BrowserStack or similar for device testing

---

## Connection to Other Lessons

**Builds on:**
- L03: Color (visual accessibility principles)
- L04: Forms (form layouts at zoom)
- L05: Keyboard/Touch (touch targets at zoom)

**Connects forward to:**
- L07: Landmarks & Navigation (structure at different viewports)
- Badge 2, Domain 2: Testing with screen magnification software

---

## Notes for Content Development

- This is an online lesson, so keep it concise and self-paced friendly
- Include clear visual examples showing good vs bad reflow behavior
- Quiz has 6 questions covering all three outcomes (2 per outcome)
- No project for this lesson (quiz-only for online lessons)
- Emphasize that responsive design practices naturally support accessibility
- Connect to mobile-first design approaches designers may already use

