# L11: Screen Reader Navigation Patterns - Learning Objectives

**Source:** `project-documents/11-sr-navigation-patterns/knowledge-base/curriculum-development/L11_sr_navigation_patterns_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2B.01, 2B.02, 2B.03

## Overview

This module extends L10's screen reader fundamentals into complex UI component patterns. Students learn how screen readers handle data tables, form groups, modal dialogs, tab panels, and live regions. While L10 covered basic navigation and mode behavior, L11 focuses on the advanced patterns designers encounter in real product work: components that require specific ARIA roles, keyboard interaction patterns, and focus management to be accessible.

## Connection to L10: Screen Reader Fundamentals

This lesson builds directly on the screen reader skills from L10:

- L10 taught basic navigation, browse/focus mode, and quick navigation shortcuts
- L11 applies those skills to complex components where mode switching, focus trapping, and ARIA roles become critical
- Students use their L10 navigation skills to test whether complex components behave correctly

This is where the fundamentals meet real product work.

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L11 |
|-------------------|-------|------------------|
| **1.3.1 Info and Relationships** | A | Tables, form groups, and landmarks must convey structure programmatically |
| **4.1.2 Name, Role, Value** | A | Dialogs, tabs, and live regions require correct ARIA roles and properties |
| **2.4.3 Focus Order** | A | Dialogs and tab panels require logical focus management |
| **4.1.3 Status Messages** | AA | Live regions must announce updates without moving focus |
| **1.3.2 Meaningful Sequence** | A | Tab panels and table reading order must be logical |

## Learning Outcomes

### 2B.01: Navigate pages using VoiceOver and NVDA (Advanced Patterns)

**Outcome Statement:**  
Demonstrate screen reader navigation through complex UI components including tables, forms, dialogs, and tab panels.

**Knowledge Component:**
- Understand how screen readers enter and exit table navigation mode
- Know table navigation commands: Ctrl+Alt+Arrow keys (VoiceOver), Ctrl+Alt+Arrow keys (NVDA) for cell-by-cell movement
- Understand that screen readers announce row and column headers as you navigate cells
- Know how form grouping (fieldset/legend) creates navigable form sections
- Understand that dialogs require focus trapping so the screen reader stays within the dialog
- Know that tab panels use arrow keys to switch tabs while focus stays in the tablist
- Understand live region behavior: polite (waits for pause), assertive (interrupts), and off
- Know iOS VoiceOver and TalkBack table gestures and dialog interaction patterns

**Skills Component:**
- Navigate data tables cell by cell using screen reader table commands
- Test form groups to verify that group labels are announced
- Verify that modal dialogs trap focus and announce their title
- Navigate tab panels using arrow keys and verify tab/panel association
- Observe live region announcements for dynamic content updates
- Test these patterns on both desktop and mobile screen readers

**Application Component:**
- Evaluate whether design specifications include the ARIA properties needed for complex components
- Identify missing table headers, form group labels, or dialog focus management in designs
- Recommend ARIA patterns (tablist/tab/tabpanel, dialog, live regions) based on component behavior
- Document complex component screen reader behavior for engineering teams

### 2B.02: Distinguish browse mode vs focus mode (Component Context)

**Outcome Statement:**  
Explain how browse mode and focus mode interact with complex components like forms, dialogs, and custom widgets.

**Knowledge Component:**
- Understand that entering a form field triggers automatic mode switching to focus mode
- Know that `role="dialog"` combined with `aria-modal="true"` affects how screen readers scope their navigation
- Understand that `role="application"` disables browse mode entirely (and why this is almost always wrong)
- Know that tab panels with `role="tablist"` use arrow key navigation within the tabs
- Understand that correctly-implemented ARIA roles enable proper mode switching for custom widgets
- Know that poorly-implemented widgets can trap users in the wrong mode or prevent access to content

**Skills Component:**
- Identify mode transitions when navigating into form fields, dialogs, and custom widgets
- Test that dialogs properly scope screen reader navigation (modal behavior)
- Verify that exiting a dialog returns focus to the triggering element
- Recognize when custom widgets are causing incorrect mode behavior
- Test that tab panels switch correctly between reading tab labels and reading tab content

**Application Component:**
- Anticipate mode switching implications when designing complex form flows
- Specify dialog behavior that ensures correct screen reader scoping
- Identify when custom widgets need ARIA roles to enable proper mode behavior
- Review design patterns for focus management requirements

### 2B.03: Use quick navigation for headings, landmarks, and links (Component Context)

**Outcome Statement:**  
Navigate efficiently through complex page layouts using screen reader element lists, table navigation, and component-specific shortcuts.

**Knowledge Component:**
- Know that data tables appear in element lists and can be navigated by the T key (NVDA)
- Understand that table headers (th) provide context announcements during cell navigation
- Know that form fields appear in form control lists, grouped by fieldset
- Understand that ARIA landmarks within complex layouts help users orient within components
- Know that live regions do not require navigation; they announce automatically
- Understand how the iOS Rotor and TalkBack Reading Controls handle tables and form controls

**Skills Component:**
- Use element lists to find and navigate to tables, forms, and landmarks within complex pages
- Navigate table structures to verify header associations
- Use form control lists to audit form field labeling
- Test landmark structure within single-page applications
- Verify that dynamic content updates are announced via live regions without requiring navigation

**Application Component:**
- Audit complex page layouts for navigability using element lists
- Verify table header markup by navigating with a screen reader
- Test form flows end-to-end using form control navigation
- Evaluate single-page applications for landmark and heading structure
- Validate that status messages and dynamic updates reach screen reader users

---

## Define Badge: AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required, L10 Screen Reader Fundamentals completed

### Knowledge Objectives
- Explain how screen readers navigate data tables using cell-by-cell commands
- Describe how form grouping (fieldset/legend) affects screen reader announcements
- Explain modal dialog focus management and screen reader scoping
- Describe tab panel keyboard interaction and screen reader behavior
- Explain live region types (polite, assertive, off) and when each is appropriate
- Understand how these patterns apply across desktop and mobile screen readers

### Skills Objectives
- Navigate data tables, form groups, dialogs, and tab panels with a screen reader
- Identify when complex components are missing required ARIA properties
- Test focus management in dialogs and tab panels
- Verify live region announcements for dynamic content
- Compare component behavior across VoiceOver and NVDA

### Application Objectives
- Evaluate design specifications for complex component accessibility requirements
- Recommend ARIA patterns for common design components
- Document complex component screen reader behavior for engineering
- Use screen reader testing to validate complex interaction patterns
- Identify focus management issues before handoff

### Assessment Methods
- Quiz: 5 multiple choice questions testing table navigation, dialog behavior, and live regions
- Project: Combined with L12, advanced AT testing of complex components

---

## Lesson Checkpoints

### Checkpoint 1: Table navigation
- I can navigate a data table cell by cell using screen reader commands
- I hear column and row headers announced as I move between cells

### Checkpoint 2: Form groups and dialogs
- I can navigate form groups and hear the group label announced
- I can verify that a modal dialog traps focus and announces its title

### Checkpoint 3: Tab panels and live regions
- I can navigate tab panels using arrow keys in the tablist
- I understand that live regions announce updates without requiring navigation

### Checkpoint 4: Putting it together
- I can test a complex page with multiple component patterns
- I can identify missing ARIA properties by listening to screen reader behavior

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2B.01 | Data table navigation with screen readers |
| Q2 | 2B.02 | Dialog focus management and screen reader scoping |
| Q3 | 2B.01 | Form group announcements (fieldset/legend) |
| Q4 | 2B.03 | Live region types and behavior |
| Q5 | 2B.02 | Tab panel keyboard interaction patterns |

---

## Resources

**W3C ARIA Authoring Practices Guide (APG):**
- Dialog (Modal) Pattern
- Tabs Pattern
- Table Pattern
- Alert and Status Message Pattern

**Screen Reader Guides:**
- WebAIM VoiceOver Guide
- WebAIM NVDA Guide
- Deque Screen Reader Keyboard Shortcuts

**Reference Materials:**
- WAI-ARIA 1.2 Specification (roles, states, properties)
- WCAG 2.2 Understanding Documents

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L11: Screen Reader Navigation Patterns*
