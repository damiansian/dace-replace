# L07: Landmarks & Navigation - Lesson Plan

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Discover  
**Lesson:** L07  
**Topic:** Landmarks & Navigation  
**Delivery:** In-person (synchronous)  
**Duration:** 60 minutes  
**Outcomes:** 1G.01, 1G.02, 1G.03, 1G.04

---

## Pre-Session Requirements

### Learner Preparation
- Complete L06: Reflow & Zoom lesson and quiz
- Review the Adobe Design Accessibility Checklist (Navigation section)
- Have Figma and Stark plugin ready

### Instructor Preparation
- Prepare multi-page design mockup for landmark audit activity
- Load screen reader for landmark navigation demonstration
- Prepare examples of good and poor navigation consistency
- Have skip link examples ready (visible and hidden-until-focus)

---

## Session Structure

| Time | Section | Duration | Primary Outcome |
|------|---------|----------|-----------------|
| 0:00 | Welcome & Objectives | 3 min | N/A |
| 0:03 | Why Navigation Matters | 5 min | All |
| 0:08 | Landmark Regions | 15 min | 1G.01 |
| 0:23 | Consistent Navigation | 10 min | 1G.02 |
| 0:33 | Skip Links & Bypass Blocks | 10 min | 1G.03 |
| 0:43 | Focus Order | 10 min | 1G.04 |
| 0:53 | Annotation Practice | 5 min | All |
| 0:58 | Wrap-up & Next Steps | 2 min | N/A |

---

## Detailed Session Plan

### Welcome & Objectives (3 min)

**Content:**
- Welcome and lesson overview
- Display learning outcomes:
  - 1G.01: Specify landmark regions appropriately
  - 1G.02: Design consistent navigation
  - 1G.03: Specify skip links and bypass blocks
  - 1G.04: Apply focus order requirements
- Connection to previous lessons (especially L02 Headings and L05 Keyboard)

**Key Message:** "Landmarks, skip links, and consistent navigation give users multiple ways to navigate your designs efficiently."

---

### Why Navigation Matters (5 min)

**Content:**
- Who benefits from structured navigation:
  - Screen reader users (landmark and heading navigation)
  - Keyboard-only users (skip links, logical focus order)
  - Cognitive disabilities (consistent, predictable patterns)
  - Power users (efficient navigation shortcuts)
- The navigation triad: Landmarks + Headings + Skip Links
- Demonstration: Navigate a page using VoiceOver landmark rotor

**Discussion Prompt:** "How do you navigate a long webpage? What if you couldn't use a mouse?"

**Visual:** Screen reader landmark list showing page structure

---

### Landmark Regions (15 min) - Outcome 1G.01

**Content:**

**Part 1: The Six Landmark Roles (5 min)**
- Banner: Page header, logo, site-wide info (HTML: header)
- Navigation: Navigation links (HTML: nav)
- Main: Primary content (HTML: main)
- Complementary: Supporting content (HTML: aside)
- Contentinfo: Page footer, copyright (HTML: footer)
- Search: Search functionality (HTML: search in HTML5.2)

**Part 2: When Landmarks Need Names (5 min)**
- Single instance: No name needed (only one main, one banner)
- Multiple instances: Must have unique accessible names
- Example: Two nav elements need names like "Primary navigation" and "Footer navigation"
- Connection to L01: Accessible names apply to landmarks too

**Part 3: Annotating Landmarks (5 min)**
- Demonstrate Stark landmark annotation
- Show landmark overlay in browser DevTools
- Best practices for landmark specifications

**Activity:** Identify landmarks in a provided page design (2 minutes, discuss results)

**WCAG Connection:** SC 1.3.1 Info and Relationships

---

### Consistent Navigation (10 min) - Outcome 1G.02

**Content:**

**Part 1: What Consistency Means (4 min)**
- Same navigation components appear in same relative order across pages
- Users build mental models of site structure
- Inconsistency forces users to relearn navigation on each page
- SC 3.2.3: Consistent Navigation (Level AA)
- SC 3.2.4: Consistent Identification (Level AA)

**Part 2: Common Consistency Failures (3 min)**
- Navigation order changes between pages
- Same action uses different labels on different pages
- Mobile navigation differs from desktop beyond necessary adaptation
- Logged-in vs logged-out navigation inconsistencies

**Part 3: Testing for Consistency (3 min)**
- Multi-page audit approach
- Document navigation patterns in design systems
- Consistency checklist for reviews

**Discussion Prompt:** "Have you ever been confused by a website because navigation moved around?"

---

### Skip Links & Bypass Blocks (10 min) - Outcome 1G.03

**Content:**

**Part 1: SC 2.4.1 Bypass Blocks (4 min)**
- Why bypass is needed: Repeated content on every page
- Three methods to satisfy 2.4.1:
  1. Skip links (explicit bypass mechanism)
  2. Landmarks (structured regions)
  3. Headings (content hierarchy)
- Best practice: Provide all three

**Part 2: Skip Link Design Patterns (4 min)**
- "Skip to main content" as primary skip link
- Multiple skip links for complex pages (skip to navigation, skip to footer)
- Visibility options:
  - Always visible (best for discoverability)
  - Hidden until focused (common pattern)
  - Never hidden (accessibility-first approach)
- Focus destination: First focusable element in target region

**Part 3: Skip Link Specifications (2 min)**
- Annotating skip links in designs
- Skip link placement (first focusable element on page)
- Skip link destinations (ID targets)

**Demonstration:** Tab to reveal hidden skip link, show focus moving to main content

---

### Focus Order (10 min) - Outcome 1G.04

**Content:**

**Part 1: SC 2.4.3 Focus Order (4 min)**
- Focus order must preserve meaning and operability
- Visual order should match DOM order
- Left-to-right, top-to-bottom for LTR languages
- Connection to L05: Keyboard navigation follows focus order

**Part 2: Complex Layout Challenges (3 min)**
- Multi-column layouts
- Card grids
- Sidebars and complementary content
- Visual design vs logical order conflicts

**Part 3: Dynamic Content Focus (3 min)**
- Modal dialogs: Focus moves in, traps, returns on close
- Accordions: Focus on trigger, content becomes focusable
- Tab panels: Arrow key navigation within, Tab moves out
- Single-page applications: Focus management on route changes

**Activity:** Test focus order on provided design (keyboard-only, call out order)

**Connection to L05:** "Remember keyboard traps from L05? Focus order determines where keyboard users go."

---

### Annotation Practice (5 min)

**Activity:**
- Provided design mockup (multi-page site)
- In small groups, annotate:
  - Landmark regions (with names for duplicates)
  - Skip link placement and destination
  - Focus order for a complex component
- Share one finding per group

**Discussion:** Common annotations and edge cases

---

### Wrap-up & Next Steps (2 min)

**Summary:**
- Landmarks provide structural navigation
- Consistent navigation builds user confidence
- Skip links bypass repeated content
- Focus order must be logical and predictable

**Assignments:**
- Complete L07 Quiz in Canvas (8 questions, 10 points)
- Complete Applied Skill Project: Navigation Accessibility Audit (15 points)
- Preview L08: Motion & Animation

**Next Lesson:** L08 covers motion, animation, and time-based content accessibility

---

## Discussion Questions

1. "How do landmarks and headings work together for navigation?"
2. "When would you use a visible skip link versus a hidden-until-focus skip link?"
3. "What focus order challenges might arise in a card-based dashboard layout?"
4. "How do you test navigation consistency across a multi-page design?"

---

## Common Misconceptions

| Misconception | Clarification |
|---------------|---------------|
| "Landmarks replace headings" | Landmarks and headings serve different purposes and should both be used |
| "Only screen reader users need landmarks" | Landmarks benefit anyone using assistive technology or browser extensions |
| "Skip links are outdated" | Skip links remain a WCAG requirement and benefit keyboard users |
| "Focus order just happens automatically" | Designers must specify logical focus order, especially for complex layouts |
| "One skip link is always enough" | Complex pages may benefit from multiple skip links |

---

## Materials Needed

- Figma file with multi-page design mockup
- Stark plugin for annotations
- Screen reader for demonstrations (VoiceOver or NVDA)
- Browser DevTools for accessibility inspection
- Skip link example pages (visible and hidden patterns)

---

## Instructor Notes

### Timing Adjustments
- If running short: Reduce annotation practice activity
- If running long: Combine consistency and skip link sections
- Focus order section builds on L05; can abbreviate if learners are strong on keyboard

### Common Student Questions
- "Does every page need all six landmarks?" No, use landmarks appropriate to content
- "What if visual design and focus order conflict?" Work with engineering to align DOM order
- "Are landmarks required for native apps?" Yes, platform-specific implementations exist

### Assessment Connection
- Quiz covers all four outcomes with 2 questions each
- Project requires annotation of landmarks, navigation audit, skip link specs, and focus order verification

---

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Author:** DACE Curriculum Team


