# L08: Motion & Animation - Figma Build Guide

**Course:** DACE  
**Badge:** Discover  
**Delivery:** Online (asynchronous)  
**Duration:** 30-45 minutes  
**Outcomes:** 1H.01, 1H.02, 1H.03

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 0.1-0.2 | 3 min | N/A |
| 1. Why Motion Accessibility Matters | 1.1-1.4 | 5 min | All |
| 2. The 5-Second Rule | 2.1-2.6 | 8 min | 1H.02 |
| 3. Reduced Motion Preferences | 3.1-3.6 | 8 min | 1H.01 |
| 4. Seizure Risk & Flash Thresholds | 4.1-4.5 | 5 min | 1H.02 |
| 5. Designing Motion Alternatives | 5.1-5.6 | 8 min | 1H.03 |
| 6. Quiz & Resources | 6.1-6.2 | 3 min | N/A |

**Total frames:** 29

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
  - Lesson number: "Lesson 08"
  - Title: "Motion & Animation"
  - Subtitle: "Designing Motion Safely"
  - Badge indicator: Discover Badge icon
  - Duration: "30-45 minutes (online)"
  - Special note: "Final Discover Badge Lesson"
- **Visual:** Geometric pattern background, centered text, motion/animation icons (play button, wave, timer)

#### Frame 0.2: Learning objectives
- **Content:**
  - Header: "Learning objectives"
  - Three objectives with outcome pills:
    - [1H.01] Apply reduced motion requirements
    - [1H.02] Identify pause, stop, hide requirements
    - [1H.03] Design motion alternatives
  - Connection callout: "Final lesson building on L05 (Keyboard) and L07 (Landmarks)"
- **Visual:** Clean list layout with outcome pills, Discover Badge completion indicator

---

### Section 1: Why motion accessibility matters

#### Frame 1.1: Section divider
- **Content:** "Why Motion Accessibility Matters"
- **Visual:** Full-bleed section divider, geometric pattern with motion wave icons

#### Frame 1.2: Motion causes real harm
- **Content:**
  - Header: "Motion is a safety issue"
  - Key statement: "Unlike many accessibility issues that create inconvenience, motion problems can trigger medical conditions"
  - Pull quote: "Motion-triggered seizures can be life-threatening. This is not about preference. It is about safety."
  - [LO All]
- **Visual:** Warning-style callout, safety icon

#### Frame 1.3: Who is affected
- **Content:**
  - Header: "Motion affects users in different ways"
  - Four user groups with icons:
    - Vestibular disorders: Parallax and transitions cause dizziness, nausea, disorientation
    - Seizure disorders: Flashing content can trigger photosensitive epileptic seizures
    - Attention disabilities: Auto-playing content distracts from primary tasks
    - Cognitive disabilities: Complex animations increase cognitive load
  - Statistics: "35% of adults over 40 have vestibular disorders"
  - [LO All]
- **Visual:** Four user cards with icons, severity indicators

#### Frame 1.4: Checkpoint
- **Content:**
  - Header: "Checkpoint: Why motion matters"
  - Body text: "Before learning the specific requirements, verify you understand these foundational concepts:"
  - Checklist:
    - [ ] I understand that motion accessibility is a safety issue, not just a preference
    - [ ] I can identify the four user groups affected by motion (vestibular, seizure, attention, cognitive)
    - [ ] I recognize that motion-triggered seizures can be life-threatening
    - [ ] I understand that vestibular disorders are common (35% of adults over 40)
  - [LO All]
- **Visual:** Checklist layout for self-assessment

---

### Section 2: The 5-Second rule (Pause, Stop, Hide)

#### Frame 2.1: Section divider
- **Content:** "The 5-Second Rule"
- **Visual:** Full-bleed section divider with timer/stopwatch icon

#### Frame 2.2: SC 2.2.2 Pause, Stop, Hide
- **Content:**
  - Header: "WCAG SC 2.2.2: Pause, Stop, Hide (Level A)"
  - Requirement: "Auto-playing content lasting more than 5 seconds must have a mechanism to pause, stop, or hide it"
  - Three criteria (ALL must be met):
    1. Starts automatically (not user-triggered)
    2. Lasts more than 5 seconds
    3. Appears alongside other content
  - [LO 1H.02]
- **Visual:** Success criterion card, timer graphic showing 5-second threshold

#### Frame 2.3: Common examples requiring controls
- **Content:**
  - Header: "Content that needs pause controls"
  - Examples with icons:
    - Auto-playing hero videos
    - Image carousels and slideshows
    - Animated illustrations or mascots
    - Parallax scrolling effects
    - Loading animations (if over 5 seconds)
  - Note: "If it moves automatically and lasts over 5 seconds, it needs a pause control"
  - [LO 1H.02]
- **Visual:** Grid of example components with checkmarks for "needs control"

#### Frame 2.4: Pause control requirements
- **Content:**
  - Header: "Pause controls must be..."
  - Requirements list:
    - Visible and discoverable (not hidden behind hover)
    - Keyboard accessible
    - Labeled properly (accessible name)
    - Persistent (pausing should stay paused)
  - Good vs bad examples:
    - Good: Visible play/pause button on video
    - Bad: Controls only appear on hover
    - Bad: Auto-looping carousel with no controls
  - [LO 1H.02]
- **Visual:** Side-by-side comparison of good and bad pause control implementations

#### Frame 2.5: Compliant vs failure patterns
- **Content:**
  - Header: "What goes right vs what goes wrong"
  - Two columns:
    - Compliant:
      - Visible pause/play button
      - Animation stops within 5 seconds
      - User-initiated animation only
    - Failure:
      - Infinite looping with no controls
      - Pause only works for current page session
      - Controls hidden or hard to find
  - [LO 1H.02]
- **Visual:** Green checkmark column vs red X column with examples

#### Frame 2.6: Checkpoint
- **Content:**
  - Header: "Checkpoint: The 5-second rule"
  - Body text: "Before moving to reduced motion preferences, verify you understand pause control requirements:"
  - Checklist:
    - [ ] I understand SC 2.2.2 (auto-playing content over 5 seconds needs pause controls)
    - [ ] I know the three criteria: starts automatically, lasts over 5 seconds, appears alongside other content
    - [ ] I can identify common content types that need pause controls (videos, carousels, animations)
    - [ ] I understand pause controls must be visible, keyboard accessible, and properly labeled
  - [LO 1H.02]
- **Visual:** Checklist layout for self-assessment

---

### Section 3: Reduced motion preferences

#### Frame 3.1: Section divider
- **Content:** "Reduced Motion Preferences"
- **Visual:** Full-bleed section divider with settings gear icon

#### Frame 3.2: The prefers-reduced-motion media query
- **Content:**
  - Header: "Users can request reduced motion"
  - Explanation: "Operating systems expose a 'reduce motion' setting that websites can detect"
  - Code example:
    ```
    @media (prefers-reduced-motion: reduce) {
      /* Disable or simplify animations */
      .animated-element { animation: none; }
    }
    ```
  - Key point: "Websites should honor this preference automatically, no popup required"
  - [LO 1H.01]
- **Visual:** Code snippet, OS settings screenshots (macOS, Windows, iOS)

#### Frame 3.3: SC 2.3.3 Animation from Interactions
- **Content:**
  - Header: "WCAG SC 2.3.3: Animation from Interactions (Level AAA)"
  - Requirement: "Motion triggered by user interaction must be disableable, unless essential"
  - Examples of user-triggered motion:
    - Parallax scrolling effects
    - Hover animations
    - Page transition effects
  - Even user-triggered motion can cause vestibular symptoms
  - [LO 1H.01]
- **Visual:** Success criterion card, parallax scrolling example

#### Frame 3.4: What to do when reduced motion is enabled
- **Content:**
  - Header: "How to respond to prefers-reduced-motion"
  - When reduced motion is enabled:
    - Replace animations with instant state changes
    - Disable parallax scrolling effects
    - Stop auto-playing videos (show static poster)
    - Use simple fades instead of complex transitions
    - Remove decorative motion entirely
  - [LO 1H.01]
- **Visual:** Before/after examples showing animated vs reduced motion versions

#### Frame 3.5: Designer's responsibility
- **Content:**
  - Header: "Document motion behavior in specs"
  - Key message: "Do not leave reduced motion behavior for engineering to guess"
  - Specification pattern: "When prefers-reduced-motion is enabled, this animation [specific behavior]"
  - Example annotations:
    - "Hero carousel: Show static first image when reduced motion enabled"
    - "Hover effect: Replace scale animation with instant opacity change"
  - [LO 1H.01]
- **Visual:** Annotation example showing motion specification

#### Frame 3.6: Checkpoint
- **Content:**
  - Header: "Checkpoint: Reduced motion preferences"
  - Body text: "Before moving to seizure risks, verify you understand reduced motion requirements:"
  - Checklist:
    - [ ] I understand the prefers-reduced-motion media query and what it detects
    - [ ] I know SC 2.3.3 requires user-triggered motion to be disableable (unless essential)
    - [ ] I can specify how animations should behave when reduced motion is enabled
    - [ ] I understand that documenting motion behavior is the designer's responsibility
  - [LO 1H.01]
- **Visual:** Checklist layout for self-assessment

---

### Section 4: Seizure risk & flash thresholds

#### Frame 4.1: Section divider
- **Content:** "Seizure Risk & Flash Thresholds"
- **Visual:** Full-bleed section divider with warning icon

#### Frame 4.2: SC 2.3.1 Three Flashes
- **Content:**
  - Header: "WCAG SC 2.3.1: Three Flashes or Below Threshold (Level A)"
  - Hard limit: "Content must not flash more than 3 times per second"
  - Why: "Higher flash rates can trigger photosensitive epileptic seizures"
  - Pull quote in warning box: "Warnings do not make dangerous content safe. Users cannot look away fast enough once a seizure begins."
  - [LO 1H.02]
- **Visual:** Success criterion card with prominent warning styling, "3x/sec" graphic

#### Frame 4.3: What counts as a flash
- **Content:**
  - Header: "Identifying flash content"
  - Flash types:
    - Rapid alternation between light and dark
    - Strobe effects or blinking elements
    - Video content with rapid scene changes
    - Animated GIFs with quick frame transitions
  - Area consideration: Flash threshold applies when area is larger than ~341x256 pixels
  - [LO 1H.02]
- **Visual:** Examples of flash types with danger indicators

#### Frame 4.4: Red flash warning
- **Content:**
  - Header: "Red flashing is especially dangerous"
  - Explanation: "Saturated red flashing is particularly likely to trigger seizures"
  - Recommendation: "Avoid red strobing effects entirely"
  - Testing tool: "Use PEAT (Photosensitive Epilepsy Analysis Tool) to analyze video content"
  - [LO 1H.02]
- **Visual:** Red warning box, PEAT tool reference

#### Frame 4.5: Checkpoint
- **Content:**
  - Header: "Checkpoint: Seizure risk and flash thresholds"
  - Body text: "Before moving to motion alternatives, verify you understand seizure risk requirements:"
  - Checklist:
    - [ ] I understand SC 2.3.1 (content must not flash more than 3 times per second)
    - [ ] I can identify content types that may flash dangerously (strobes, rapid scene changes, animated GIFs)
    - [ ] I know that red flashing is especially dangerous
    - [ ] I understand that warnings do not make dangerous content safe
  - [LO 1H.02]
- **Visual:** Checklist layout for self-assessment

---

### Section 5: Designing motion alternatives

#### Frame 5.1: Section divider
- **Content:** "Designing Motion Alternatives"
- **Visual:** Full-bleed section divider with alternative path icon

#### Frame 5.2: Essential vs decorative motion
- **Content:**
  - Header: "Not all motion is equal"
  - Two categories:
    - Essential motion: Communicates meaning that would be lost without it
      - Progress indicators showing upload status
      - State change feedback (success, error)
      - Drag-and-drop visual feedback
    - Decorative motion: Purely aesthetic enhancement
      - Hover effects
      - Page transitions
      - Background animations
      - Loading spinners (when accompanied by text)
  - [LO 1H.03]
- **Visual:** Two-column comparison with examples

#### Frame 5.3: The alternative rule
- **Content:**
  - Header: "Essential information must be available without animation"
  - Rule: "If motion communicates meaning, provide a static alternative that preserves that meaning"
  - Key insight: "Removing motion should not remove functionality"
  - [LO 1H.03]
- **Visual:** Rule callout box with emphasis

#### Frame 5.4: Motion alternative examples
- **Content:**
  - Header: "Pattern: Animation + Alternative"
  - Example 1:
    - Animation: Progress bar fills from left to right
    - Alternative: Static bar with percentage text "Uploading: 45%"
  - Example 2:
    - Animation: Carousel auto-rotates through product images
    - Alternative: Static gallery with manual navigation buttons
  - Example 3:
    - Animation: Spinning loading indicator
    - Alternative: Static "Loading..." text with progress percentage
  - [LO 1H.03]
- **Visual:** Side-by-side comparison mockups for each example

#### Frame 5.5: Specifying motion alternatives
- **Content:**
  - Header: "Document alternatives in specs"
  - Specification pattern: "When prefers-reduced-motion is enabled, replace [animated component] with [static alternative that preserves information]"
  - Example annotation: "Loading spinner: When reduced motion enabled, display static icon with 'Loading: 45% complete' text"
  - Checklist for specs:
    - Animation description
    - Trigger (auto-play, user-triggered)
    - Duration
    - Reduced motion alternative
    - Essential or decorative classification
  - [LO 1H.03]
- **Visual:** Annotation example, specification checklist

#### Frame 5.6: Checkpoint
- **Content:**
  - Header: "Checkpoint: Designing motion alternatives"
  - Body text: "Before completing the lesson, verify you understand motion alternative requirements:"
  - Checklist:
    - [ ] I can classify motion as essential or decorative
    - [ ] I understand that essential information must be available without animation
    - [ ] I can design static alternatives that preserve meaning
    - [ ] I know how to document motion alternatives in design specifications
    - [ ] I understand the specification pattern: animation description + trigger + duration + alternative
  - [LO 1H.03]
- **Visual:** Checklist layout for self-assessment

---

### Section 6: Quiz & resources

#### Frame 6.1: Knowledge check
- **Content:**
  - Header: "Test your knowledge"
  - "Complete the L08 Quiz in Canvas"
  - Six questions covering:
    - Reduced motion preferences (Q1-Q2)
    - Pause controls and flash thresholds (Q3-Q4)
    - Designing motion alternatives (Q5-Q6)
  - Total points: 6
- **Visual:** Quiz icon, outcome pills

#### Frame 6.2: Resources & completion
- **Content:**
  - Header: "Keep learning"
  - W3C Resources:
    - Understanding 2.2.2: Pause, Stop, Hide
    - Understanding 2.3.1: Three Flashes or Below Threshold
    - Understanding 2.3.3: Animation from Interactions
  - Design Resources:
    - Designing With Reduced Motion (Smashing Magazine)
    - Designing Safer Web Animation (A List Apart)
    - MDN: prefers-reduced-motion
  - Testing Tools:
    - PEAT (Photosensitive Epilepsy Analysis Tool)
    - OS reduced motion settings
    - Adobe Design Accessibility Checklist (Motion section)
  - Completion message: "Congratulations! You've completed all Discover Badge lessons."
  - Next badge preview: "Define Badge: Starting with L09: DOM & Accessibility Tree"
- **Visual:** Resource list with links, Discover Badge completion celebration, Define Badge preview card

---

## Visual design notes

**Color Palette:**
- Discover Badge purple: `#5151D3`
- Success green: `#00875A`
- Failure/Warning red: `#DE350B`
- Caution yellow: `#FFAB00`
- Neutral gray: `#6B778C`
- White background: `#FFFFFF`

**Typography:**
- Headers: Adobe Clean Bold, 48pt
- Body: Adobe Clean Regular, 24pt
- Code: Source Code Pro, 20pt

**Iconography:**
- Play/pause controls
- Timer/stopwatch (5-second rule)
- Flash/lightning bolt (seizure warning)
- Settings gear (reduced motion preferences)
- Warning triangle (safety callouts)
- Checkmark/X (compliant vs failure)
- User personas for affected groups

**Diagrams:**
- 5-second timer graphic
- Before/after animation examples
- Pause control placement examples
- Flash rate visualization
- Essential vs decorative motion comparison
- Motion alternative specification template

**Special Elements:**
- Warning callouts with red/yellow styling for safety content
- Checkpoint self-assessment checklists at end of each section
- Discover Badge completion celebration on final slide

---

## Accessibility notes for the deck itself

- All images have alt text
- Color is not the only way information is conveyed
- Text meets 4.5:1 contrast ratio
- Slide order is logical and sequential
- Slide titles are descriptive
- Warning content uses both color and icons
- Code examples use accessible color combinations
- Animations in the deck itself respect reduced motion (if any)

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Author:** DACE Curriculum Team
