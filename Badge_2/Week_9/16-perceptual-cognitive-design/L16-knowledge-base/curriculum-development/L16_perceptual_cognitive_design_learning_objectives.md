# L16: Perceptual and Cognitive Design Considerations - Learning Objectives

**Source:** `project-documents/16-perceptual-cognitive-design/knowledge-base/curriculum-development/L16_perceptual_cognitive_design_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2H.01, 2H.02, 2H.03

## Overview

This module addresses the perceptual and cognitive dimensions of accessible design. Students learn how spatial hierarchy, visual density, whitespace, and component semantics affect comprehension for users with cognitive and visual disabilities. While earlier Define Badge lessons focused on assistive technology operation and testing, L16 returns to the design craft itself: how layout decisions, spacing systems, and component choices either support or hinder understanding for the broadest possible audience.

This is a capstone design lesson for the Define Badge, synthesizing foundational Discover Badge principles (headings, color, landmarks) with the AT expertise gained in L09-L15 to address higher-order perceptual and cognitive accessibility concerns.

## Connection to Prior Lessons

This lesson draws on multiple threads from both badges:

- **L02 (Headings):** Visual hierarchy must align with programmatic structure; L16 expands this to full spatial hierarchy including grouping, alignment, and proximity
- **L03 (Color):** Contrast and color independence are foundations; L16 extends to how visual weight and density affect cognitive processing
- **L06 (Reflow/Zoom):** Responsive layouts must maintain hierarchy at all viewport sizes; L16 addresses density decisions that affect reflow behavior
- **L07 (Landmarks):** Structural regions organize content; L16 addresses how spatial relationships reinforce (or contradict) landmark boundaries
- **L09 (DOM/Accessibility Tree):** Component semantics in the accessibility tree must match the visual communication; L16 focuses on choosing components whose semantics accurately convey purpose and state

This lesson bridges "Does it technically pass?" and "Does it actually work for people?"

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L16 |
|-------------------|-------|------------------|
| **1.3.1 Info and Relationships** | A | Visual hierarchy and grouping must be programmatically determined, not communicated through layout alone |
| **1.3.2 Meaningful Sequence** | A | Reading order must match the visual spatial hierarchy |
| **1.4.12 Text Spacing** | AA | Layouts must accommodate increased text spacing without losing hierarchy or content |
| **1.4.10 Reflow** | AA | Density and whitespace decisions must survive reflow at 400% zoom |
| **2.4.6 Headings and Labels** | AA | Headings and labels describe topic or purpose, reinforcing spatial hierarchy |
| **3.2.3 Consistent Navigation** | AA | Navigation patterns remain consistent, supporting cognitive predictability |
| **3.2.4 Consistent Identification** | AA | Components with the same function are identified consistently, reinforcing semantic clarity |
| **4.1.2 Name, Role, Value** | A | Component roles and states must be programmatically determined, matching their visual communication |

## Learning Outcomes

### 2H.01: Apply spatial hierarchy principles for accessibility

**Outcome Statement:**  
Design clear visual hierarchy that supports comprehension for users with cognitive and visual disabilities.

**Knowledge Component:**
- Understand how spatial hierarchy communicates importance, grouping, and sequence through size, position, proximity, and alignment
- Know that visual hierarchy must align with programmatic structure (heading levels, landmark regions, reading order)
- Understand that users with cognitive disabilities rely heavily on consistent, predictable spatial patterns to navigate and comprehend content
- Know that users with low vision who use magnification see only a portion of the layout at any time, making spatial relationships harder to perceive
- Understand the Gestalt principles (proximity, similarity, continuity, closure) and how they create implicit grouping that must be reinforced programmatically
- Know that misalignment between visual hierarchy and DOM order creates confusion for screen reader users and users who rely on reading order
- Understand that spatial hierarchy must be maintained across breakpoints and zoom levels

**Skills Component:**
- Evaluate a design layout for clear visual hierarchy using size, weight, color, and position
- Identify when visual grouping relies on spatial proximity alone without programmatic reinforcement
- Test whether reading order (Tab order and screen reader order) matches the intended visual hierarchy
- Verify that hierarchy is maintained at 200% and 400% zoom levels
- Audit heading level structure against the visual hierarchy (do larger/more-prominent elements have higher heading levels?)

**Application Component:**
- Annotate designs with hierarchy notes that specify heading levels, landmark regions, and reading order to match the visual layout
- Recommend layout changes when the visual hierarchy conflicts with the programmatic structure
- Design layouts where spatial hierarchy naturally aligns with DOM order, reducing the need for ARIA overrides
- Document hierarchy decisions for engineering teams, explaining the relationship between visual and programmatic structure

### 2H.02: Design appropriate visual density and whitespace

**Outcome Statement:**  
Create layouts with sufficient spacing and density that reduce cognitive load and support focus.

**Knowledge Component:**
- Understand that visual density (the amount of information per unit of screen space) directly affects cognitive load
- Know that users with cognitive disabilities, attention disorders, and learning disabilities benefit from lower density and more whitespace
- Understand that whitespace is not wasted space: it creates breathing room, separates groups, and guides the eye
- Know that WCAG 1.4.12 (Text Spacing) requires that increasing line height to 1.5x, paragraph spacing to 2x, letter spacing to 0.12x, and word spacing to 0.16x must not cause loss of content or functionality
- Understand that overly dense layouts fail more frequently at high zoom levels (WCAG 1.4.10 Reflow) because there is no spatial buffer to absorb reflow changes
- Know that consistent spacing systems (8px grid, spacing tokens) create predictable rhythm that supports cognitive processing
- Understand the relationship between information density, scan patterns (F-pattern, Z-pattern), and cognitive load
- Know that density preferences vary: some users need minimal density, while others (expert users) may prefer higher density; the design must work for both

**Skills Component:**
- Evaluate a layout for appropriate density given its content type and audience
- Measure spacing and identify areas where whitespace is insufficient for cognitive comfort
- Test layouts with WCAG 1.4.12 text spacing overrides and verify no content is lost or overlapping
- Verify that layouts reflow cleanly at 400% zoom, with density decisions supporting rather than hindering reflow
- Identify "density traps": areas where too much information is packed into a small region, creating scanning difficulty

**Application Component:**
- Design layouts using consistent spacing tokens that meet both aesthetic and accessibility goals
- Specify minimum spacing values in design annotations to prevent engineering from collapsing whitespace
- Create responsive density strategies that reduce density at smaller viewports rather than simply shrinking everything
- Document density rationale for engineering, explaining why spacing values were chosen and what happens if they are reduced

### 2H.03: Ensure component semantics support comprehension

**Outcome Statement:**  
Select and apply component patterns that communicate purpose and state clearly to all users.

**Knowledge Component:**
- Understand that component semantics (the meaning conveyed by a component's role, name, state, and behavior) must match the visual communication
- Know that choosing the wrong component pattern (e.g., using a link styled as a button, or a div instead of a checkbox) creates a mismatch between what sighted users see and what AT users hear
- Understand that consistent component semantics across a product create predictability: users learn what a pattern means once and apply that understanding everywhere
- Know that state communication (selected, expanded, disabled, required, invalid) must be conveyed both visually and programmatically
- Understand that custom components without proper ARIA roles lose semantic meaning for AT users
- Know that component libraries and design systems should encode accessibility semantics, not leave them to individual implementation decisions
- Understand that overly complex components (deeply nested menus, combined input patterns) increase cognitive load for all users and are harder to make accessible
- Know that WCAG 3.2.4 (Consistent Identification) requires that components serving the same function are identified consistently across pages

**Skills Component:**
- Evaluate whether a design's component choices accurately communicate their purpose (navigation vs. action, selection vs. input)
- Identify when visual component states (hover, focus, active, disabled, selected, error) are missing or ambiguous
- Test whether component semantics in the accessibility tree match the visual presentation (using browser dev tools from L09)
- Verify consistent component usage across different pages or views within a product
- Audit a design for components that rely on custom patterns when standard semantic elements would suffice

**Application Component:**
- Select appropriate component patterns from design systems based on semantic requirements, not just visual appearance
- Annotate designs with component roles, states, and expected announcements for screen readers
- Recommend simpler component alternatives when complex patterns create unnecessary cognitive load
- Document component semantic decisions for engineering, specifying ARIA roles, states, and interaction patterns

---

## Define Badge: AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required, L09-L15 recommended

### Knowledge Objectives
- Explain how spatial hierarchy communicates importance, grouping, and sequence, and why it must align with programmatic structure
- Describe the relationship between visual density, whitespace, and cognitive load for users with disabilities
- Explain how component semantics (role, name, state) must match visual communication for all users to comprehend interface purpose
- Identify WCAG success criteria related to perceptual and cognitive design (1.3.1, 1.3.2, 1.4.10, 1.4.12, 3.2.3, 3.2.4, 4.1.2)
- Understand how Gestalt principles create implicit grouping that requires programmatic reinforcement

### Skills Objectives
- Evaluate layouts for clear spatial hierarchy that aligns with heading structure and reading order
- Test layouts with text spacing overrides (WCAG 1.4.12) and at 400% zoom (WCAG 1.4.10)
- Identify component semantic mismatches between visual presentation and accessibility tree properties
- Verify consistent component usage and identification across product views
- Assess visual density and whitespace for cognitive accessibility

### Application Objectives
- Annotate designs with hierarchy, spacing, and semantic requirements for engineering handoff
- Recommend layout and component changes that improve cognitive accessibility without sacrificing usability
- Design layouts where visual hierarchy naturally aligns with programmatic structure
- Document perceptual and cognitive design decisions with clear rationale

### Assessment Methods
- Quiz: 5 multiple choice questions testing spatial hierarchy, density/whitespace, and component semantics
- Project: Combined with L15, evaluate a product interface for perceptual and cognitive accessibility issues

---

## Lesson Checkpoints

### Checkpoint 1: Spatial hierarchy
- I can evaluate a layout for clear visual hierarchy using size, weight, position, and proximity
- I understand that visual hierarchy must align with heading levels and reading order

### Checkpoint 2: Density and whitespace
- I can assess whether a layout has appropriate density and whitespace for cognitive accessibility
- I can test layouts with WCAG 1.4.12 text spacing overrides

### Checkpoint 3: Component semantics
- I can identify when a component's visual appearance does not match its semantic role
- I understand that consistent component semantics across a product support cognitive predictability

### Checkpoint 4: Putting it together
- I can audit a complete interface for perceptual and cognitive accessibility
- I can annotate designs with hierarchy, spacing, and semantic requirements

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2H.01 | Spatial hierarchy and heading structure alignment |
| Q2 | 2H.02 | Visual density and cognitive load |
| Q3 | 2H.02 | WCAG 1.4.12 text spacing requirements |
| Q4 | 2H.03 | Component semantic mismatch |
| Q5 | 2H.03 | Consistent identification across pages |

---

## Resources

**WCAG Understanding Documents:**
- Understanding SC 1.3.1: Info and Relationships
- Understanding SC 1.4.12: Text Spacing
- Understanding SC 1.4.10: Reflow
- Understanding SC 3.2.4: Consistent Identification

**Design References:**
- Inclusive Design Patterns by Heydon Pickering
- A Web for Everyone by Sarah Horton and Whitney Quesenbery
- Cognitive Accessibility Design Patterns (W3C COGA)

**W3C Resources:**
- Making Content Usable for People with Cognitive and Learning Disabilities
- WAI Cognitive Accessibility Guidance
- ARIA Authoring Practices Guide (component patterns)

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L16: Perceptual and Cognitive Design Considerations*
