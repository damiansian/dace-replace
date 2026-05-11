# L09: DOM and Accessibility Tree - Learning Objectives

**Source:** `project-documents/09-dom-accessibility-tree/knowledge-base/curriculum-development/L09_dom_accessibility_tree_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2A.01, 2A.02, 2A.03

## Overview

This module introduces the relationship between the DOM (Document Object Model) and the accessibility tree. Designers learn how browsers expose content to assistive technologies, how to inspect accessibility properties using browser dev tools, and how their design decisions impact what AT users experience.

## Connection to Badge 1: Discover

This lesson builds on the accessible names foundation from L01:

- L01 taught what accessible names are and how to specify them
- L09 explains HOW accessible names are computed and exposed to AT
- Understanding the accessibility tree helps designers predict AT behavior

This is the first lesson where designers see "under the hood" of how accessibility actually works.

## WCAG Success Criteria Mapping

While this lesson is more conceptual than criterion-focused, it supports understanding of:

| Success Criterion | Level | Relevance to L09 |
|-------------------|-------|------------------|
| **4.1.2 Name, Role, Value** | A | Understanding how name, role, and value are exposed in the accessibility tree |
| **1.3.1 Info and Relationships** | A | Understanding how structural relationships are represented |

## Learning Outcomes

### 2A.01: Explain DOM to accessibility tree relationship

**Outcome Statement:**  
Describe how browser DOM becomes the accessibility tree that AT consumes.

**Knowledge Component:**
- Understand the pipeline: HTML/CSS → DOM → Accessibility Tree → Platform API → AT
- Know that the accessibility tree is a simplified, semantic representation of the DOM
- Understand that not all DOM elements appear in the accessibility tree (decorative elements removed)
- Know the four key properties: Name, Role, State, Value
- Understand that the accessibility tree is what screen readers and other AT actually interact with

**Skills Component:**
- Explain the relationship between DOM and accessibility tree to colleagues
- Predict which DOM elements will appear in the accessibility tree
- Identify when elements would be pruned from the accessibility tree

**Application Component:**
- Use understanding of the pipeline to debug accessibility issues
- Explain to engineering why certain implementations affect AT
- Anticipate how design changes will affect the accessibility tree

### 2A.02: Identify accessibility tree issues

**Outcome Statement:**  
Use browser dev tools to inspect accessibility properties.

**Knowledge Component:**
- Know how to access accessibility panels in Chrome, Firefox, and Safari
- Understand how to read name, role, state, and value in dev tools
- Know the difference between computed vs explicit accessibility properties
- Understand common issues visible in the accessibility tree (missing names, wrong roles)

**Skills Component:**
- Navigate browser dev tools to find accessibility information
- Identify when an element has an incorrect or missing accessible name
- Recognize when roles don't match the visual purpose of an element
- Spot state mismatches (e.g., visually expanded but aria-expanded="false")

**Application Component:**
- Use dev tools as first step before screen reader testing
- Document accessibility tree findings for engineering
- Verify that design annotations result in correct accessibility properties

### 2A.03: Connect design decisions to accessibility tree impact

**Outcome Statement:**  
Predict how design choices will be represented in the accessibility tree.

**Knowledge Component:**
- Understand how different labeling approaches (aria-label, aria-labelledby, visible text) become accessible names
- Know how semantic HTML elements provide implicit roles
- Understand how ARIA attributes affect the accessibility tree
- Know the accessible name computation algorithm basics

**Skills Component:**
- Predict the accessible name that will result from a design decision
- Anticipate whether a custom component will have the correct role
- Identify when design patterns will require ARIA to work correctly
- Evaluate design proposals for their accessibility tree impact

**Application Component:**
- Make informed design decisions based on accessibility tree implications
- Provide guidance to engineering on expected accessibility properties
- Review designs with accessibility tree impact in mind

---

## Define Badge - AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required

### Knowledge Objectives
- Explain the DOM to accessibility tree pipeline
- Describe the four accessibility tree properties (name, role, state, value)
- Identify browser dev tools for accessibility inspection
- Understand accessible name computation basics
- Know which elements are included/excluded from the accessibility tree

### Skills Objectives
- Use Chrome, Firefox, or Safari accessibility panels
- Inspect and document accessibility properties for UI elements
- Identify accessibility tree issues before testing with screen readers
- Predict accessibility properties from design specifications

### Application Objectives
- Debug accessibility issues using dev tools first
- Explain accessibility tree concepts to team members
- Make design decisions that consider accessibility tree impact
- Verify that implementations match design intent in the accessibility tree

### Assessment Methods
- Quiz: 5 multiple choice questions testing DOM/tree relationship and dev tools usage
- Project: Combined with L10, analyze accessibility tree and predict screen reader behavior

---

## Lesson Checkpoints

### Checkpoint 1: What is the accessibility tree?
- I can explain the pipeline from HTML to assistive technology
- I understand that the accessibility tree is what AT actually interacts with

### Checkpoint 2: Four key properties
- I can identify and explain name, role, state, and value
- I understand how each property affects the AT experience

### Checkpoint 3: Using dev tools
- I can access accessibility panels in at least one browser
- I can find and interpret accessibility properties for any element

### Checkpoint 4: Predicting impact
- I can predict the accessible name from a design specification
- I understand how semantic HTML and ARIA affect the tree

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2A.01 | DOM to accessibility tree relationship |
| Q2 | 2A.01 | What the accessibility tree contains |
| Q3 | 2A.02 | Using dev tools to inspect properties |
| Q4 | 2A.02 | Identifying issues in the accessibility tree |
| Q5 | 2A.03 | Predicting accessibility tree from design |

---

## Resources

**W3C:**
- WAI-ARIA 1.2 Specification
- Accessible Name and Description Computation
- ARIA Authoring Practices Guide (APG)

**Browser Documentation:**
- Chrome DevTools Accessibility Reference
- Firefox Accessibility Inspector
- Safari Web Inspector Accessibility

**Adobe:**
- Design Accessibility Checklist
- Spectrum Design System
