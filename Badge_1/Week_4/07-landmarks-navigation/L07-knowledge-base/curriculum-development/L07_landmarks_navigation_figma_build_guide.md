# L07: Landmarks & Navigation - Figma Build Guide

**Course:** DACE  
**Badge:** Discover  
**Delivery:** In-person (synchronous)  
**Duration:** 60 minutes  
**Outcomes:** 1G.01, 1G.02, 1G.03, 1G.04

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 0.1-0.2 | 3 min | N/A |
| 1. Why Navigation Matters | 1.1-1.3 | 5 min | All |
| 2. Landmark Regions | 2.1-2.9 | 15 min | 1G.01 |
| 3. Consistent Navigation | 3.1-3.6 | 10 min | 1G.02 |
| 4. Skip Links & Bypass | 4.1-4.6 | 10 min | 1G.03 |
| 5. Focus Order | 5.1-5.6 | 10 min | 1G.04 |
| 6. Annotation Practice | 6.1-6.2 | 5 min | All |
| 7. Quiz & Resources | 7.1-7.2 | 2 min | N/A |

**Total frames:** 34

---

## Design system notes

- Follow existing Adobe Design training template (tag icon header, 2025 footer)
- Section dividers: Full-bleed title, geometric pattern background
- Content frames: White background, left-aligned content
- Badge color: `#5151D3` (Discover Badge purple)
- Frame dimensions: 1440x900
- Learning Objective Pills: Bottom-left corner, linking to Frame 0.2

---

## Frame-by-frame specifications

### Section 0: Title & objectives

#### Frame 0.1: Title slide
- **Content:**
  - Lesson number: "Lesson 07"
  - Title: "Landmarks & Navigation"
  - Subtitle: "Structuring Pages for Efficient Navigation"
  - Badge indicator: Discover Badge icon
  - Duration: "60 minutes"
- **Visual:** Geometric pattern background, centered text, navigation/landmark icons

#### Frame 0.2: Learning objectives
- **Content:**
  - Header: "Learning objectives"
  - Four objectives with outcome pills:
    - [1G.01] Specify landmark regions appropriately
    - [1G.02] Design consistent navigation
    - [1G.03] Specify skip links and bypass blocks
    - [1G.04] Apply focus order requirements
  - Connection callout: "Builds on L02 (Headings) and L05 (Keyboard)"
- **Visual:** Clean list layout with outcome pills, connection to previous lessons

---

### Section 1: Why navigation matters

#### Frame 1.1: Section divider
- **Content:** "Why Navigation Matters"
- **Visual:** Full-bleed section divider, geometric pattern with compass/map icons

#### Frame 1.2: The navigation triad
- **Content:**
  - Header: "Three pillars of accessible navigation"
  - Three pillars with icons:
    - Landmarks: Structural regions for AT navigation
    - Headings: Content hierarchy and scanning (L02)
    - Skip Links: Bypass repeated content
  - "Together, these give users multiple ways to navigate efficiently"
  - [LO All]
- **Visual:** Three-pillar diagram, interconnected visual

#### Frame 1.3: Who benefits
- **Content:**
  - Header: "Navigation structure helps everyone"
  - Four user groups:
    - Screen reader users (landmark and heading rotor)
    - Keyboard users (skip links, logical focus order)
    - Users with cognitive disabilities (consistent, predictable patterns)
    - Power users (efficient navigation shortcuts)
  - [LO All]
- **Visual:** Four user cards with icons, diversity representation

---

### Section 2: Landmark regions

#### Frame 2.1: Section divider
- **Content:** "Landmark Regions"
- **Visual:** Full-bleed section divider with landmark icon

#### Frame 2.2: What are landmarks
- **Content:**
  - Header: "Landmarks define page regions"
  - Definition: "Structural markers that identify major sections of a page"
  - "Screen readers let users jump directly to landmarks"
  - Analogy: "Like chapters in a book, but for page structure"
  - [LO 1G.01]
- **Visual:** Page outline with landmark regions highlighted

#### Frame 2.3: The six landmark roles
- **Content:**
  - Header: "ARIA landmark roles"
  - Table with two columns:
    - Role | HTML5 Equivalent
    - banner | `<header>` (top-level only)
    - navigation | `<nav>`
    - main | `<main>`
    - complementary | `<aside>`
    - contentinfo | `<footer>` (top-level only)
    - search | `<search>` (HTML5.2) or role="search"
  - [LO 1G.01]
- **Visual:** Table layout with icons for each landmark type

#### Frame 2.4: Landmark example
- **Content:**
  - Header: "Landmarks in action"
  - Page wireframe showing:
    - banner (header area)
    - navigation (nav menu)
    - main (content area)
    - complementary (sidebar)
    - contentinfo (footer)
  - Screen reader landmark list mockup
  - [LO 1G.01]
- **Visual:** Annotated wireframe with color-coded landmark regions

#### Frame 2.5: When landmarks need names
- **Content:**
  - Header: "Naming multiple landmarks"
  - Rule: "When you have multiple landmarks of the same type, each needs a unique name"
  - Examples:
    - Two nav elements: "Primary navigation" and "Footer navigation"
    - Two complementary elements: "Related articles" and "Advertisements"
  - How to add: `aria-label` or `aria-labelledby`
  - [LO 1G.01]
- **Visual:** Code examples showing aria-label usage, before/after screen reader announcements

#### Frame 2.6: SC 1.3.1 Info and Relationships
- **Content:**
  - Header: "WCAG SC 1.3.1: Info and Relationships (Level A)"
  - Requirement: "Information and relationships conveyed visually must be programmatically determinable"
  - Landmarks make page structure machine-readable
  - Designer responsibility: "Specify which regions need landmarks"
  - [LO 1G.01]
- **Visual:** Success criterion card, key takeaways highlighted

#### Frame 2.7: Common landmark mistakes
- **Content:**
  - Header: "What goes wrong"
  - Four failure patterns:
    - No landmarks at all (flat structure)
    - Multiple navs without unique names
    - Landmarks nested incorrectly
    - Overusing landmarks (everything is a region)
  - [LO 1G.01]
- **Visual:** Before/after examples showing correct and incorrect landmark usage

#### Frame 2.8: Annotating landmarks
- **Content:**
  - Header: "Specifying landmarks in bluelines"
  - Required annotations:
    - Landmark role (banner, nav, main, etc.)
    - Accessible name (for multiples)
    - Corresponding HTML element
  - Example annotation from real design
  - [LO 1G.01]
- **Visual:** Stark annotation example showing landmark specification

#### Frame 2.9: Checkpoint
- **Content:**
  - Header: "Checkpoint: Landmark regions"
  - Body text: "Before moving to consistent navigation, verify you understand these landmark principles:"
  - Checklist:
    - [ ] I can identify the six ARIA landmark roles and their HTML equivalents
    - [ ] I understand when landmarks need unique accessible names
    - [ ] I can recognize common landmark mistakes (missing landmarks, duplicates without names, incorrect nesting)
    - [ ] I know how to annotate landmarks in design specifications
  - [LO 1G.01]
- **Visual:** Checklist layout for self-assessment

---

### Section 3: Consistent navigation

#### Frame 3.1: Section divider
- **Content:** "Consistent Navigation"
- **Visual:** Full-bleed section divider

#### Frame 3.2: SC 3.2.3 Consistent Navigation
- **Content:**
  - Header: "WCAG SC 3.2.3: Consistent Navigation (Level AA)"
  - Requirement: "Navigation components repeated across pages must appear in the same relative order"
  - Users build mental models of site structure
  - Inconsistency forces relearning on each page
  - [LO 1G.02]
- **Visual:** Success criterion card, navigation comparison diagram

#### Frame 3.3: What consistency means
- **Content:**
  - Header: "Same order, every page"
  - Good example: Home | Products | About | Contact (same on all pages)
  - Bad example: Home | About | Products | Contact (order changed)
  - Note: Adding items is OK, changing order is not
  - "New items can be added, but existing order must be preserved"
  - [LO 1G.02]
- **Visual:** Side-by-side comparison of consistent vs inconsistent navigation

#### Frame 3.4: SC 3.2.4 Consistent Identification
- **Content:**
  - Header: "WCAG SC 3.2.4: Consistent Identification (Level AA)"
  - Requirement: "Components with the same functionality must be identified consistently"
  - Examples:
    - Search icon always labeled "Search" (not sometimes "Find")
    - Download button uses same label across site
  - [LO 1G.02]
- **Visual:** Examples of consistent vs inconsistent labeling

#### Frame 3.5: Testing for consistency
- **Content:**
  - Header: "How to audit navigation consistency"
  - Checklist:
    - Document navigation order on each page
    - Compare order across all pages
    - Check mobile vs desktop consistency
    - Verify logged-in vs logged-out states
    - Test different user roles if applicable
  - [LO 1G.02]
- **Visual:** Audit checklist with comparison matrix example

#### Frame 3.6: Checkpoint
- **Content:**
  - Header: "Checkpoint: Consistent navigation"
  - Body text: "Before moving to skip links, verify you understand these consistency principles:"
  - Checklist:
    - [ ] I understand SC 3.2.3 (navigation must appear in same relative order across pages)
    - [ ] I understand SC 3.2.4 (components with same functionality must be identified consistently)
    - [ ] I know that adding items is acceptable but changing order is not
    - [ ] I can audit navigation consistency across pages, devices, and user states
  - [LO 1G.02]
- **Visual:** Checklist layout for self-assessment

---

### Section 4: Skip links & bypass blocks

#### Frame 4.1: Section divider
- **Content:** "Skip Links & Bypass Blocks"
- **Visual:** Full-bleed section divider

#### Frame 4.2: SC 2.4.1 Bypass Blocks
- **Content:**
  - Header: "WCAG SC 2.4.1: Bypass Blocks (Level A)"
  - Requirement: "A mechanism is available to bypass blocks of content that are repeated on multiple pages"
  - Why: Keyboard users shouldn't Tab through 50 nav links on every page
  - Three bypass methods:
    1. Skip links
    2. Landmarks
    3. Headings
  - [LO 1G.03]
- **Visual:** Success criterion card, diagram showing user journey with and without bypass

#### Frame 4.3: Skip link basics
- **Content:**
  - Header: "Skip to main content"
  - Skip link placement: First focusable element on page
  - Skip link destination: Main content area (using ID target)
  - Common pattern: "Skip to main content" or "Skip navigation"
  - [LO 1G.03]
- **Visual:** Page diagram showing skip link at top, arrow pointing to main content

#### Frame 4.4: Skip link visibility
- **Content:**
  - Header: "To show or not to show"
  - Three visibility patterns:
    - Always visible: Best for discoverability
    - Hidden until focused: Common pattern, appears on Tab
    - Never hidden: Accessibility-first approach
  - Consideration: Balance visual design with user needs
  - [LO 1G.03]
- **Visual:** Three examples showing each visibility pattern, keyboard focus demonstration

#### Frame 4.5: Skip link specifications
- **Content:**
  - Header: "Annotating skip links"
  - Required specifications:
    - Skip link text ("Skip to main content")
    - Placement (first focusable element)
    - Destination (target ID)
    - Visibility behavior
    - Focus styling
  - Example annotation
  - [LO 1G.03]
- **Visual:** Stark annotation showing skip link specifications

#### Frame 4.6: Checkpoint
- **Content:**
  - Header: "Checkpoint: Skip links and bypass blocks"
  - Body text: "Before moving to focus order, verify you understand these bypass principles:"
  - Checklist:
    - [ ] I understand SC 2.4.1 (mechanism to bypass repeated content blocks)
    - [ ] I know the three bypass methods (skip links, landmarks, headings)
    - [ ] I can specify skip link placement, destination, and visibility behavior
    - [ ] I understand why keyboard users need bypass mechanisms
  - [LO 1G.03]
- **Visual:** Checklist layout for self-assessment

---

### Section 5: Focus order

#### Frame 5.1: Section divider
- **Content:** "Focus Order"
- **Visual:** Full-bleed section divider

#### Frame 5.2: SC 2.4.3 Focus Order
- **Content:**
  - Header: "WCAG SC 2.4.3: Focus Order (Level A)"
  - Requirement: "Focus order must preserve meaning and operability"
  - Visual order should match DOM order
  - Left-to-right, top-to-bottom (LTR languages)
  - Connection to L05: "Focus order is what keyboard users experience"
  - [LO 1G.04]
- **Visual:** Success criterion card, numbered focus sequence on page diagram

#### Frame 5.3: Complex layout challenges
- **Content:**
  - Header: "When visual order gets complicated"
  - Challenge scenarios:
    - Multi-column layouts
    - Card grids
    - Sidebars and complementary content
    - Floating elements
  - Question: "Does the focus order make sense if you close your eyes?"
  - [LO 1G.04]
- **Visual:** Three-column layout with numbered focus order options

#### Frame 5.4: Dynamic content focus
- **Content:**
  - Header: "Focus management for interactive content"
  - Patterns:
    - Modal dialogs: Focus in, trap, return on close
    - Accordions: Focus stays on trigger, content becomes available
    - Tab panels: Arrows within, Tab exits
    - Toast notifications: Usually don't steal focus
  - Connection to L05: "Remember focus traps?"
  - [LO 1G.04]
- **Visual:** Modal focus flow diagram, accordion behavior illustration

#### Frame 5.5: Testing focus order
- **Content:**
  - Header: "Verifying focus order"
  - Testing approach:
    - Tab through entire page without mouse
    - Note order of focused elements
    - Check if order matches visual flow
    - Verify dynamic content focus management
  - Tools: Keyboard only, browser DevTools accessibility pane
  - [LO 1G.04]
- **Visual:** Testing checklist, focus order verification screenshot

#### Frame 5.6: Checkpoint
- **Content:**
  - Header: "Checkpoint: Focus order"
  - Body text: "Before moving to the practice activity, verify you understand these focus order principles:"
  - Checklist:
    - [ ] I understand SC 2.4.3 (focus order must preserve meaning and operability)
    - [ ] I know that visual order should match DOM order
    - [ ] I can identify complex layout challenges (multi-column, cards, sidebars)
    - [ ] I understand focus management for dynamic content (modals, accordions, tab panels)
    - [ ] I can test focus order by tabbing through a page without a mouse
  - [LO 1G.04]
- **Visual:** Checklist layout for self-assessment

---

### Section 6: Annotation practice

#### Frame 6.1: Section divider
- **Content:** "Annotation Practice"
- **Visual:** Full-bleed section divider

#### Frame 6.2: Practice activity
- **Content:**
  - Header: "Navigation accessibility audit"
  - Activity overview:
    - Review provided multi-page design
    - Identify and annotate landmarks
    - Check navigation consistency
    - Specify skip links
    - Document focus order
  - Time: 5 minutes, then share findings
  - [LO All]
- **Visual:** Sample design mockup with annotation zones highlighted

---

### Section 7: Quiz & resources

#### Frame 7.1: Knowledge check
- **Content:**
  - Header: "Test your knowledge"
  - "Complete the L07 Quiz in Canvas"
  - Eight questions covering:
    - Landmark roles and naming
    - Consistent navigation requirements
    - Skip link implementation
    - Focus order principles
  - Pass threshold: 80%
- **Visual:** Quiz icon, outcome pills

#### Frame 7.2: Resources
- **Content:**
  - Header: "Keep learning"
  - W3C Resources:
    - Understanding 1.3.1: Info and Relationships
    - Understanding 2.4.1: Bypass Blocks
    - Understanding 2.4.3: Focus Order
    - Understanding 3.2.3: Consistent Navigation
    - ARIA Landmarks Example
  - Adobe Resources:
    - Landmarks on Digital Accessibility Guide
    - Navigation Consistency Guidelines
  - Tools:
    - Stark (landmark annotations)
    - Screen reader landmark rotor (VO+U)
    - Browser DevTools accessibility pane
  - Next lesson preview: "L08: Motion & Animation"
- **Visual:** Resource list with links, next lesson card

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
- Code/landmarks: Source Code Pro, 20pt

**Iconography:**
- Landmark icons (banner, nav, main, aside, footer, search)
- Navigation menu icons
- Skip link arrow icons
- Focus order numbers
- User personas for "who benefits"
- Checkmarks and X marks for good/bad examples

**Diagrams:**
- Page wireframes with landmark regions
- Navigation comparison (consistent vs inconsistent)
- Skip link flow diagrams
- Focus order numbered sequences
- Modal focus trap illustration
- Screen reader landmark list mockup

**Interactive Elements (if applicable):**
- Landmark region highlighters
- Tab order simulation
- Skip link visibility toggle
- Navigation consistency comparison

---

## Accessibility notes for the deck itself

- All images have alt text
- Color is not the only way information is conveyed
- Text meets 4.5:1 contrast ratio
- Slide order is logical and sequential
- Slide titles are descriptive
- Code examples use accessible color combinations
- Landmark examples include both visual and code representations

---

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Author:** DACE Curriculum Team


