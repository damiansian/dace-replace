# L13: Voice Control - Learning Objectives

**Source:** `project-documents/13-voice-control/knowledge-base/curriculum-development/L13_voice_control_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2D.01, 2D.02, 2D.03

## Overview

This lesson introduces voice control as an assistive technology category. Students learn how voice control users interact with digital interfaces, what design patterns create barriers for voice navigation, and how the Label in Name principle connects visible labels to accessible names. Voice control is a distinct AT category from screen readers: voice users can see the screen but cannot use a mouse or keyboard reliably, so they speak commands to interact with interface elements.

## Connection to Previous Lessons

This lesson builds on several Define Badge concepts:

- **L01 (Accessible Names):** Voice control relies on accessible names to target elements. The Label in Name requirement (2.5.3) directly connects visible text to how voice users activate controls.
- **L09 (DOM and Accessibility Tree):** Voice control tools query the accessibility tree to determine what elements are available and what their names are.
- **L10/L11 (Screen Readers):** Screen readers and voice control both depend on the accessibility tree, but the interaction model is fundamentally different: screen readers read sequentially while voice control allows direct targeting by name.
- **L12 (Screen Magnification):** Like magnification users, voice control users can see the screen but have difficulty with fine motor control. Many magnification users also use voice control.

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L13 |
|-------------------|-------|------------------|
| **2.5.3 Label in Name** | A | THE key criterion: visible label must be included in the accessible name for voice activation |
| **4.1.2 Name, Role, Value** | A | Voice control needs programmatic names and roles to target elements |
| **1.1.1 Non-text Content** | A | Icon-only buttons must have accessible names for voice users to target |
| **2.4.6 Headings and Labels** | AA | Descriptive labels help voice users identify and target elements |
| **1.3.1 Info and Relationships** | A | Programmatic structure helps voice control tools present available targets |
| **2.1.1 Keyboard** | A | Voice control sends keyboard commands, so keyboard accessibility is a prerequisite |

## Learning Outcomes

### 2D.01: Navigate using Voice Control or Dragon

**Outcome Statement:**  
Demonstrate basic voice control navigation and interaction on digital interfaces.

**Knowledge Component:**
- Understand the primary voice control tools: macOS Voice Control, Windows Voice Access, Dragon NaturallySpeaking, iOS Voice Control, Android Voice Access
- Know the core voice command categories: navigation ("show numbers," "show grid"), activation ("click [name]," "tap [name]"), text input ("type [text]"), and scrolling ("scroll down")
- Understand the difference between name-based targeting ("click Submit") and overlay-based targeting ("show numbers," then "click 5")
- Know that voice control tools query the accessibility tree to identify interactive elements and their names
- Understand that voice control sends keyboard and mouse events, so keyboard accessibility is a prerequisite
- Know that voice control works across platforms: macOS, Windows, iOS, Android

**Skills Component:**
- Enable and configure voice control on macOS or Windows
- Use name-based commands to click buttons, links, and form fields ("click [visible label]")
- Use number overlay to interact with elements when name-based targeting fails
- Navigate forms by speaking field labels and entering text via voice
- Use grid overlay as a fallback for precise pointer positioning
- Switch between voice dictation mode and command mode

**Application Component:**
- Test a design prototype or live page using voice control to identify targeting failures
- Document voice control navigation paths for common user tasks
- Compare name-based targeting efficiency with overlay-based fallback approaches
- Recommend accessible name improvements based on voice control testing results

### 2D.02: Identify voice control accessibility barriers

**Outcome Statement:**  
Recognize design patterns that create problems for voice control users.

**Knowledge Component:**
- Understand the six common voice control barriers:
  1. **Missing accessible names:** Icon-only buttons, image links, and unlabeled controls that voice users cannot target by name
  2. **Label in Name mismatch:** Visible text says "Search" but accessible name is "Find products in catalog," causing "click Search" to fail
  3. **Duplicate accessible names:** Multiple "Read more" or "Learn more" links on the same page create ambiguity for voice commands
  4. **Dynamic content without stable targets:** Elements that appear, disappear, or change position make voice targeting unreliable
  5. **Custom controls without keyboard support:** Voice control sends keyboard events, so controls that only respond to mouse events are unusable
  6. **Overly complex interactions:** Drag-and-drop, multi-finger gestures, or hover-dependent interactions have no voice equivalent without alternatives
- Know that voice control barriers often overlap with screen reader barriers but can also be unique (Label in Name mismatches are primarily a voice control issue)
- Understand that the "show numbers" overlay is a fallback, not a solution: it is slow and error-prone

**Skills Component:**
- Audit a page for voice control barriers using a structured checklist
- Identify icon-only controls that lack accessible names
- Detect Label in Name mismatches by comparing visible text to programmatic names (via browser dev tools or accessibility inspector)
- Find duplicate accessible names that create ambiguity
- Test interactive elements for keyboard operability (prerequisite for voice control)
- Identify interactions that require mouse-specific gestures with no alternative

**Application Component:**
- Conduct a voice control accessibility audit on a design or live product
- Prioritize voice control barriers by user impact (complete blockers vs. efficiency issues)
- Write design recommendations that resolve voice control barriers
- Create a voice control test plan for a product feature

### 2D.03: Apply Label in Name requirements

**Outcome Statement:**  
Ensure visible labels match accessible names for voice activation.

**Knowledge Component:**
- Understand WCAG 2.5.3 Label in Name (Level A): when a UI component has visible text, the accessible name must include that visible text
- Know the "starts with" best practice: the accessible name should start with the visible text for maximum voice control compatibility
- Understand how accessible name calculation works: `aria-labelledby` overrides `aria-label`, which overrides native HTML labeling
- Know common Label in Name failures:
  - Visible text: "Search" / Accessible name: "Find products in catalog" (mismatch)
  - Visible text: "Submit" / Accessible name: "Submit order form" (acceptable: starts with visible text)
  - Visible text: "Close" / Accessible name: "X" (mismatch: accessible name should be "Close" or "Close dialog")
- Understand that Label in Name applies to buttons, links, inputs, and any element with visible text and an accessible name
- Know that this requirement exists specifically to support voice control users who say what they see

**Skills Component:**
- Inspect accessible names in browser developer tools to verify Label in Name compliance
- Compare visible text to programmatic accessible names for mismatches
- Write accessible names that include the visible label text
- Test Label in Name compliance by attempting voice commands that match visible text
- Use accessibility testing tools (axe, Lighthouse) to detect Label in Name violations

**Application Component:**
- Review design annotations to verify that specified accessible names include visible text
- Create naming conventions for common UI patterns that satisfy Label in Name
- Write design guidelines that ensure Label in Name compliance across a product
- Integrate Label in Name checking into design review workflows

---

## Define Badge: AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required, L09-L12 completed

### Knowledge Objectives
- Explain how voice control tools interact with the accessibility tree to identify targetable elements
- Describe the core voice command types: name-based, number overlay, and grid overlay
- List the six common design patterns that create barriers for voice control users
- Explain WCAG 2.5.3 Label in Name and why it exists
- Describe how accessible name calculation affects voice control targeting
- Understand voice control as distinct from screen readers: voice users see the screen

### Skills Objectives
- Navigate a digital interface using voice control (macOS Voice Control or Windows Voice Access)
- Identify voice control barriers through testing and inspection
- Verify Label in Name compliance using browser developer tools
- Conduct a structured voice control accessibility audit
- Test interactive elements for keyboard operability as a voice control prerequisite

### Application Objectives
- Evaluate designs for voice control compatibility before engineering handoff
- Write accessible names that satisfy both screen reader and voice control users
- Recommend design changes that resolve voice control barriers
- Integrate voice control testing into existing accessibility review workflows
- Create voice control test plans for product features

### Assessment Methods
- Quiz: 5 multiple choice questions testing voice control barriers, Label in Name, and navigation
- Project: Combined with L14, AT testing of designs using voice control and high contrast mode

---

## Lesson Checkpoints

### Checkpoint 1: Voice control basics
- I can enable voice control and use basic commands
- I understand the difference between name-based and overlay-based targeting

### Checkpoint 2: Identifying barriers
- I can identify icon-only buttons and Label in Name mismatches
- I know the six common voice control barrier patterns

### Checkpoint 3: Label in Name
- I can inspect accessible names and verify they include visible text
- I understand accessible name calculation and how it affects voice targeting

### Checkpoint 4: Putting it together
- I can conduct a voice control audit on a design or live page
- I can write recommendations that improve voice control accessibility

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2D.01 | Voice control navigation: name-based vs overlay targeting |
| Q2 | 2D.02 | Identifying voice control barriers in designs |
| Q3 | 2D.03 | Label in Name requirement and common failures |
| Q4 | 2D.02 | Scenario: diagnosing why a voice command fails |
| Q5 | 2D.03 | Writing accessible names that satisfy Label in Name |

---

## Resources

**W3C Resources:**
- WCAG 2.2 Understanding 2.5.3 Label in Name
- WCAG 2.2 Understanding 4.1.2 Name, Role, Value
- Accessible Name and Description Computation 1.2

**Voice Control Guides:**
- Apple: Use Voice Control on Mac
- Apple: Use Voice Control on iPhone or iPad
- Microsoft: Use Voice Access (Windows 11)
- Nuance: Dragon NaturallySpeaking documentation

**Reference Materials:**
- WebAIM: Voice Control and Accessibility
- Deque: Label in Name Testing
- Adrian Roselli: Label in Name Testing

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L13: Voice Control*
