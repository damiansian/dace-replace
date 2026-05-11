# L12: Screen Magnification - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2C.01, 2C.02, 2C.03

---

## Lesson Overview

This in-person lesson introduces screen magnification as an assistive technology distinct from screen readers. Students learn how magnification users experience interfaces through a narrow viewport, explore the major magnification tools, practice testing at various zoom levels, and learn design patterns that support magnification users. This lesson marks a transition from non-visual AT (screen readers, L09-L11) to visual AT (magnification, voice control, high contrast).

**Why This Matters:** Low vision is the most common visual disability. More people use screen magnification than screen readers. Yet magnification testing is often overlooked because designers assume browser zoom testing is sufficient. Understanding the real magnification user experience reveals design issues that WCAG compliance testing alone does not catch.

**Connection to L06:** In the Discover Badge, L06 covered reflow and zoom from a WCAG compliance perspective (1.4.4, 1.4.10, 1.4.12). L12 builds on this by shifting from "does it technically pass?" to "what is the actual user experience with magnification tools?" Students will recognize L06 concepts and extend them into practical AT testing.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 1.4.4 | Resize Text | AA | Text resizable up to 200% without loss of content or functionality |
| 1.4.10 | Reflow | AA | Content reflows at 400% zoom (320 CSS px) without horizontal scrolling |
| 1.4.12 | Text Spacing | AA | Content accommodates increased text spacing without loss |
| 1.4.3 | Contrast (Minimum) | AA | Contrast requirements remain critical for low vision users |
| 1.3.1 | Info and Relationships | A | Spatial relationships must be programmatically determinable |

---

## Content Outline

### Section 0: Introduction (3 min)
- Transition from screen readers to visual AT
- Lesson objectives display (2C.01, 2C.02, 2C.03)
- Key framing: "Screen readers replace vision with audio. Magnification enhances the vision users have."
- Today's agenda: magnification tools, user experience, testing, design implications

### Section 1: Magnification Tools and User Populations (10 min)

**1.1 Who Uses Screen Magnification?**
- Low vision is the most common visual disability
- Estimated 246 million people globally have moderate to severe vision impairment
- Magnification users have usable vision (unlike most screen reader users)
- User groups: permanent low vision, age-related vision changes, temporary impairment (eye surgery, injury), situational (small screen, distance from display)
- Many magnification users also use other AT: some use ZoomText with its built-in screen reader, some use high contrast modes, some use browser text-only zoom

**1.2 Four Categories of Magnification**

| Category | Examples | How It Works | Key Characteristic |
|----------|----------|--------------|-------------------|
| Dedicated software | ZoomText | Pixel magnification + smoothing + screen reader | Most powerful, paid software |
| OS-level zoom | Windows Magnifier, macOS Zoom | Full-screen or lens magnification | Free, built into every computer |
| Browser zoom | Ctrl/Cmd + | Reflows page layout | Changes layout, not just pixel size |
| Mobile zoom | Pinch-to-zoom, system zoom | Touch-based magnification | Gesture-driven, viewport moves with finger |

**1.3 System Magnification vs Browser Zoom**
- System magnification: magnifies pixels, does not change layout, user sees a portion of the screen
- Browser zoom: reflows content, changes the layout, can trigger responsive breakpoints
- Critical insight: WCAG reflow testing (browser zoom to 400%) does not test the same experience as system magnification
- A design can pass WCAG 1.4.10 (Reflow) and still be unusable with ZoomText or Windows Magnifier

**1.4 Demo: Magnification in Action**
- Show macOS Zoom at 2x, 4x, and 8x magnification on a complex dashboard
- Show Windows Magnifier in full-screen, lens, and docked modes (if available)
- Show browser zoom at 200% and 400% on the same page
- Point out the difference: at 4x system zoom, the layout is unchanged but you see 1/16th of the screen

**Key Message:** Magnification is not one tool; it is a category. Each tool creates a different user experience. Designers must understand what users actually see through the magnified viewport.

### Section 2: The Magnification User Experience (8 min)

**2.1 The Viewport Within a Viewport**
- At 4x magnification, users see approximately 25% of the screen width and height (1/16th of total area)
- At 8x magnification, users see approximately 12.5% width and height (1/64th of total area)
- Users must physically move the magnified viewport to see different parts of the page
- This creates a "keyhole" viewing experience: seeing one area means not seeing everything else

**2.2 How Magnification Users Navigate**
- Spatial memory: users remember where things are on the page and navigate to them
- Consistent layouts reduce cognitive load because users learn the spatial pattern
- Left-to-right, top-to-bottom scanning patterns (following reading order)
- Focus tracking: some magnification tools follow keyboard focus automatically
- Mouse tracking: the magnified viewport follows mouse movement
- Anchor points: users orient themselves using known landmarks (logo, navigation, headings)

**2.3 What Breaks for Magnification Users**
- Spatial separation: a label far from its input requires moving the viewport back and forth
- Pop-ups outside viewport: a tooltip or dropdown appears where the user is not looking
- Moving content: carousels or auto-advancing content shifts while the user is reading
- Inconsistent layouts: different pages with different structures force re-learning navigation
- Large sticky headers: consume 30-50% of the visible viewport at high magnification
- Multi-column layouts: at high system zoom, columns are cut off and users must scroll horizontally

**Discussion prompt:** Think about your product. If you could only see 25% of the screen at a time, which parts of the interface would be hardest to use?

**Key Message:** Magnification users navigate by spatial memory and viewport movement. Anything that separates related content, moves unexpectedly, or consumes viewport space creates a barrier.

### Section 3: Testing with Magnification (12 min)

**3.1 Browser Zoom Testing (WCAG Baseline)**
- Test at 200% zoom: text resize (SC 1.4.4)
- Test at 400% zoom: reflow (SC 1.4.10), expect single-column layout at 320 CSS px
- Check for: horizontal scrolling, overlapping content, clipped text, hidden controls
- Apply text spacing bookmarklet (SC 1.4.12): line-height 1.5x, paragraph spacing 2x, letter spacing 0.12em, word spacing 0.16em
- This is the compliance baseline, but not the full user experience

**3.2 System Magnification Testing**
- macOS Zoom: System Settings → Accessibility → Zoom, enable with keyboard shortcut
- Test at 2x: mild magnification, most layouts still usable
- Test at 4x: significant magnification, spatial issues begin to appear
- Test at 8x: high magnification, only a small portion visible
- Watch for: elements that require seeing two separated areas simultaneously (like a chart legend and the chart data)

**3.3 Key Testing Scenarios**

| Scenario | What to Check | Why It Matters |
|----------|--------------|----------------|
| Form submission | Labels near inputs, error messages near fields | Users cannot see the label and the input if they are far apart |
| Tooltips/Dropdowns | Appears within magnified viewport | Content that appears outside the viewport is invisible |
| Navigation menus | Predictable position, visible at all zoom levels | Users rely on navigation being in a consistent location |
| Focus indicators | Visible at magnified zoom, trackable | If the focus ring is 1px, it may not be visible at any magnification |
| Status messages | Near the action that triggered them | Success/error messages far from buttons require viewport movement |
| Data tables | Column headers visible with data | At high zoom, headers scroll off-screen while reading data |

**3.4 Hands-on: Test a Design at Multiple Magnification Levels**
- Open prepared test page (a form with a data table and a modal dialog)
- Test with browser zoom at 200% and 400%
- Enable macOS Zoom and test at 4x system magnification
- Document differences: what issues appear with system magnification that browser zoom does not reveal?
- Focus on: form label-input proximity, error message positioning, tooltip placement, focus indicator visibility

**Key Message:** Browser zoom testing is necessary but not sufficient. System magnification reveals spatial issues that reflow testing misses. Test with both.

### Section 4: Designing for Magnification (8 min)

**4.1 Proximity Principles**
- Keep labels directly above or immediately adjacent to their inputs (never far to the left in a wide layout)
- Place error messages inline, directly below or beside the field with the error
- Position tooltips and popups near their trigger element
- Keep action buttons near the content they act on
- Avoid wide gutters between related elements

**4.2 Layout Patterns**
- Left-aligned single-column layouts are most magnification-friendly
- Multi-column layouts should collapse predictably at high zoom
- Avoid centering important content (forces users to find the center at every zoom level)
- Minimize sticky headers and footers (they consume viewport space)
- If sticky elements are necessary, make them compact at high zoom

**4.3 Interaction Patterns**
- Use inline validation over summary validation for forms
- Provide visible, high-contrast focus indicators (at least 2px outline)
- Avoid relying on hover to reveal critical information
- Ensure keyboard focus tracking works with magnification tools
- Avoid auto-scrolling or auto-advancing content
- Keep navigation consistent across all pages

**4.4 Annotation Requirements**
- Designers should annotate: expected proximity relationships between labels, inputs, and errors
- Specify tooltip and popup positioning (prefer above or below trigger, within viewport)
- Note any sticky element behavior at high zoom
- Call out multi-column to single-column collapse behavior
- Specify minimum focus indicator size (at least 2px)

**Key Message:** Designing for magnification is designing for proximity and predictability. Related things should be close together, layouts should be consistent, and nothing should appear outside the user's view.

### Section 5: Summary and Assessment (4 min)

**5.1 Key Takeaways**
- Screen magnification is the most common visual AT
- System magnification and browser zoom create different user experiences
- The "viewport within a viewport" concept is the foundation for understanding magnification barriers
- Test with both browser zoom (WCAG compliance) and system magnification (user experience)
- Design for proximity: keep related elements close together
- Design for predictability: keep layouts consistent and navigation stable

**5.2 The Designer's Role**
- You cannot assume browser zoom testing covers all magnification users
- Annotate spatial relationships: proximity, popup positioning, reflow behavior
- Recommend inline validation over summary validation
- Advocate for compact sticky elements
- Include magnification testing in your AT testing checklist

**5.3 Quiz Preview**
- 5 questions covering magnification tools, testing approaches, and design patterns
- Maps to outcomes 2C.01, 2C.02, 2C.03

**5.4 Next Lesson Preview**
- L13: Voice Control
- How voice control users interact with interfaces
- Another distinct AT category with its own testing requirements
- Continues the Define Badge pattern: understand the tool, test your designs, specify correct behavior

---

## Materials Needed

- Mac with macOS Zoom enabled (System Settings → Accessibility → Zoom)
- Windows machine or VM with Windows Magnifier
- Browser with zoom capability (Chrome or Firefox recommended)
- Text spacing bookmarklet (from L06)
- Prepared test page with:
  - Multi-section form with labels, inputs, and error states
  - Data table with column headers
  - Modal dialog
  - Tooltip and dropdown components
  - Sticky header navigation
- Screenshots showing the same design at 1x, 2x, 4x, and 8x magnification

---

## Instructor Notes

### Common Student Questions

**Q: How is this different from what we learned in L06 (Reflow and Zoom)?**
A: L06 focused on WCAG compliance: does the page reflow at 400%? Does text resize to 200%? L12 focuses on the actual user experience with magnification tools. A page can pass L06's criteria and still be difficult for a ZoomText user because system magnification does not reflow content. L12 adds the AT-testing perspective.

**Q: Do I need to test with ZoomText?**
A: For this course, macOS Zoom and browser zoom are sufficient for understanding magnification concepts. In professional practice, ZoomText testing is valuable for products with significant low vision user populations. ZoomText's combination of magnification and screen reading creates unique interaction patterns.

**Q: Which magnification level should I test at?**
A: Start with 200% browser zoom (WCAG 1.4.4 baseline). Then 400% browser zoom (WCAG 1.4.10 reflow). Then 4x system magnification (real magnification user experience). If you want to go further, 8x system magnification represents high-magnification users. Each level reveals different issues.

**Q: Is pinch-to-zoom on mobile the same as screen magnification?**
A: Not exactly. Pinch-to-zoom is a viewport zoom that magnifies pixels, similar to system magnification. But mobile devices also have system-level zoom (iOS Zoom, Android Magnification). Mobile pinch-to-zoom is more analogous to Windows Magnifier than to browser zoom, because it does not reflow content.

**Q: My product already passes WCAG reflow. Why do I need to do magnification testing?**
A: WCAG reflow (SC 1.4.10) tests browser zoom, which reflows layout. Many magnification users use system-level tools that magnify pixels without reflowing. A two-column layout that reflows to one column at 400% browser zoom still shows both columns when using 4x system magnification, but the user can only see half of each column. Different tools, different experiences.

### Timing Adjustments

If running short:
- Reduce hands-on time in Section 3.4 to a quick demo
- Combine Sections 4.3 and 4.4 into a brief list
- Skip the multi-platform comparison (focus on macOS Zoom only)

If running long:
- Extend hands-on testing time (Section 3.4)
- Add a "design critique" exercise where students evaluate a page layout for magnification issues
- Allow students to test their own product's interface at high magnification

### Classroom Setup Notes
- Pre-enable macOS Zoom on all student machines (System Settings → Accessibility → Zoom)
- Set the keyboard shortcut for toggling zoom (Option+Cmd+8 is default on Mac)
- Prepare the test page with clear magnification-sensitive elements
- Have before/after comparison screenshots ready showing layouts at different zoom levels
- Consider providing a magnification testing checklist handout

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L12: Screen Magnification*
