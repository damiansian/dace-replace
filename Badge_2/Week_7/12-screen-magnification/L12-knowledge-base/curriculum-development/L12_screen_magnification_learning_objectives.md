# L12: Screen Magnification - Learning Objectives

**Source:** `project-documents/12-screen-magnification/knowledge-base/curriculum-development/L12_screen_magnification_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2C.01, 2C.02, 2C.03

## Overview

This lesson introduces screen magnification as an assistive technology category distinct from screen readers. Students learn how magnification users experience digital interfaces through a narrow viewport, relying on spatial memory, proximity, and predictable layouts to stay oriented. The lesson covers the major magnification tools (ZoomText, Windows Magnifier, macOS Zoom, browser zoom), their user populations, testing techniques, and design patterns that support or hinder magnification users.

## Connection to Previous Lessons

This lesson begins a new AT category within the Define Badge:

- L09-L11 covered the accessibility tree and screen reader navigation (non-visual AT)
- L12 shifts to visual AT: tools that enhance what users can see rather than replacing vision with audio
- L06 (Discover Badge) introduced reflow and zoom from a WCAG compliance perspective; L12 builds on this by focusing on the real user experience with dedicated magnification tools
- The testing mindset from L09-L11 transfers directly: understand the tool, test your designs, specify correct behavior

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L12 |
|-------------------|-------|------------------|
| **1.4.4 Resize Text** | AA | Text must be resizable up to 200% without loss of content or functionality |
| **1.4.10 Reflow** | AA | Content must reflow at 400% zoom (320 CSS px) without horizontal scrolling |
| **1.4.12 Text Spacing** | AA | Content must accommodate increased text spacing without loss of content |
| **1.4.3 Contrast (Minimum)** | AA | Magnification users often have low vision; contrast remains critical at all zoom levels |
| **1.3.1 Info and Relationships** | A | Spatial relationships must remain understandable when only part of the layout is visible |

## Learning Outcomes

### 2C.01: Understand screen magnification tools and user needs

**Outcome Statement:**  
Explain how ZoomText, Windows Magnifier, macOS Zoom, and browser zoom work, how they differ from each other, and the user populations they serve.

**Knowledge Component:**
- Know the four major categories of magnification: dedicated software (ZoomText), OS-level (Windows Magnifier, macOS Zoom), browser zoom, and mobile pinch-to-zoom
- Understand that ZoomText provides magnification plus screen reader capabilities (a hybrid tool)
- Know that Windows Magnifier offers full-screen, lens, and docked modes
- Understand that macOS Zoom can magnify the full screen or use a picture-in-picture lens
- Know that browser zoom (Ctrl/Cmd +) reflows content while system zoom magnifies pixels
- Understand the difference between pixel magnification (system zoom) and layout reflow (browser zoom)
- Know the user populations: low vision users (the largest disability group using AT), aging users, users with temporary vision impairment, users with certain cognitive disabilities
- Understand that magnification users typically have some usable vision, unlike most screen reader users

**Skills Component:**
- Enable and configure macOS Zoom at various magnification levels
- Use Windows Magnifier in full-screen, lens, and docked modes
- Test designs with browser zoom at 200%, 300%, and 400%
- Identify the differences in user experience between system magnification and browser zoom
- Compare magnification behavior on desktop and mobile devices

**Application Component:**
- Explain to a design team why magnification testing requires different tools than browser zoom alone
- Recommend appropriate magnification testing tools for different platforms
- Communicate the distinction between WCAG reflow compliance and actual magnification user experience
- Describe how magnification users navigate and orient themselves within a page

### 2C.02: Test designs with screen magnification tools

**Outcome Statement:**  
Validate designs at various magnification levels using system and browser zoom, identifying issues that affect magnification users' ability to navigate and understand content.

**Knowledge Component:**
- Know the key testing checkpoints: 200% browser zoom, 400% browser zoom (reflow), system zoom at 2x-4x, and high magnification (8x+)
- Understand the "viewport within a viewport" concept: magnification users see only a portion of the screen at any time
- Know that spatial separation between related elements becomes a navigation problem at high magnification
- Understand that tooltips, dropdowns, and popups can appear outside the magnified viewport
- Know that focus indicators must remain visible and trackable when magnified
- Understand that auto-scrolling, carousels, and moving content create disorientation for magnification users
- Know that magnification users rely on spatial memory to find content they have seen before

**Skills Component:**
- Conduct systematic magnification testing at multiple zoom levels
- Test tooltip and dropdown positioning at high magnification
- Verify that focus indicators are visible and follow a predictable path when magnified
- Test form flows to ensure labels, inputs, and error messages remain spatially connected
- Identify content that shifts position or disappears when the viewport changes
- Test responsive breakpoint behavior at magnified zoom levels

**Application Component:**
- Document magnification testing findings with screenshots showing the magnified viewport
- Create magnification test checklists for specific UI patterns
- Prioritize magnification issues by user impact and frequency
- Communicate magnification testing results to design and engineering teams

### 2C.03: Design for screen magnification compatibility

**Outcome Statement:**  
Create layouts and interaction patterns that work well for users who view content through a magnified viewport, maintaining spatial relationships and orientation cues.

**Knowledge Component:**
- Know that proximity between related elements (labels and inputs, buttons and their context) is critical for magnification users
- Understand that left-aligned layouts are easier to navigate at high magnification than centered or right-aligned layouts
- Know that consistent layout patterns reduce the cognitive load of navigating at high magnification
- Understand that inline form validation (near the field) is better than summary validation (at the top) for magnification users
- Know that sticky headers and navigation consume valuable viewport space at high magnification
- Understand that multi-column layouts collapse to single column at high zoom, and the collapse behavior must be predictable
- Know that icon-only controls become harder to distinguish at high magnification without text labels

**Skills Component:**
- Evaluate design layouts for spatial proximity between related elements
- Test designs for predictable reflow behavior as zoom increases
- Verify that error messages and validation appear near their associated fields
- Assess whether tooltips and popups position themselves within the visible viewport
- Evaluate focus indicator visibility at high magnification levels
- Review navigation patterns for magnification-friendly behavior

**Application Component:**
- Annotate designs with magnification-specific requirements (proximity, positioning, reflow behavior)
- Recommend layout changes that improve magnification compatibility without degrading the default experience
- Create design guidelines for tooltip and popup positioning that account for magnification users
- Specify error message placement patterns that keep feedback near the relevant input at all zoom levels

---

## Define Badge: AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required, L06 Reflow and Zoom knowledge assumed

### Knowledge Objectives
- Explain how major screen magnification tools work (ZoomText, Windows Magnifier, macOS Zoom, browser zoom) and their differences
- Describe the "viewport within a viewport" experience of magnification users
- Explain why spatial proximity and consistent layout matter more for magnification users than for sighted users at default zoom
- Describe the difference between pixel magnification and browser zoom reflow
- Explain why magnification testing requires tools beyond browser zoom alone
- Understand which WCAG success criteria apply to magnification (1.4.4, 1.4.10, 1.4.12)

### Skills Objectives
- Test designs at 200% and 400% browser zoom, and with system-level magnification
- Identify layouts that break spatial relationships at high magnification
- Test tooltip, dropdown, and popup positioning at magnified zoom levels
- Verify focus indicator visibility and tracking at high magnification
- Evaluate form flows for magnification compatibility (proximity of labels, inputs, errors)

### Application Objectives
- Document magnification testing findings with magnified viewport screenshots
- Recommend layout improvements that benefit magnification users
- Annotate designs with magnification-specific requirements
- Communicate the difference between WCAG zoom compliance and real magnification user experience
- Create magnification testing checklists for common UI patterns

### Assessment Methods
- Quiz: 5 multiple choice questions testing magnification tools, testing techniques, and design implications
- Project: Combined with L11, advanced AT testing of complex components and magnification patterns

---

## Lesson Checkpoints

### Checkpoint 1: Understanding magnification tools
- I can explain the difference between system magnification and browser zoom
- I know which tools are available on macOS and Windows

### Checkpoint 2: The magnification user experience
- I understand the "viewport within a viewport" concept
- I know why spatial proximity is critical at high magnification

### Checkpoint 3: Testing with magnification
- I can test a design at multiple zoom levels
- I can identify when elements break spatial relationships at high magnification

### Checkpoint 4: Designing for magnification
- I can evaluate a design for magnification compatibility
- I can recommend improvements that maintain spatial relationships at high zoom

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2C.01 | Difference between system magnification and browser zoom |
| Q2 | 2C.02 | Testing tooltip positioning at high magnification |
| Q3 | 2C.03 | Design patterns for magnification compatibility |
| Q4 | 2C.01 | Magnification user populations and needs |
| Q5 | 2C.02 | Focus indicator visibility at high magnification |

---

## Resources

**Magnification Tools:**
- ZoomText (Freedom Scientific)
- Windows Magnifier (built into Windows)
- macOS Zoom (built into macOS)
- Browser zoom (Ctrl/Cmd +)

**Reference Materials:**
- WebAIM: Screen Magnification
- WCAG 2.2 Understanding SC 1.4.4 (Resize Text)
- WCAG 2.2 Understanding SC 1.4.10 (Reflow)
- WCAG 2.2 Understanding SC 1.4.12 (Text Spacing)

**User Research:**
- WebAIM Screen Reader and Low Vision User Surveys
- Deque: Designing for Low Vision Users

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L12: Screen Magnification*
