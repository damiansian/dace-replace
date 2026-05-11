# L04: Forms and Errors - Learning Objectives

**Source:** `project-documents/04-forms-errors/knowledge-base/curriculum-development/L04_forms_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** Online (asynchronous, self-paced)  
**Duration:** 30 minutes  
**Outcomes Covered:** 1D.01, 1D.02, 1D.03

## Overview

This module covers accessible form design. Designers learn to specify clear labels and instructions, design accessible error states, and understand how input purpose identification benefits users with disabilities. Forms are where users provide information, and accessibility failures here directly prevent task completion.

## Connection to L01: Accessible Names

Form labels are accessible names for form controls. This lesson applies L01 principles to a specific, high-stakes context:

- Labels must be clear, concise, and convey purpose (1A.03 quality criteria)
- Visible labels are preferred over programmatic-only labels (1A.05)
- Every form control needs an accessible name (1A.02)

This connection reinforces the scaffolding strategy where accessible names thread through all lessons.

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L04 |
|-------------------|-------|------------------|
| **1.3.5 Identify Input Purpose** | AA | Input purpose can be programmatically determined for autocomplete |
| **3.3.1 Error Identification** | A | Errors must be identified and described in text |
| **3.3.2 Labels or Instructions** | A | Form inputs must have labels or instructions |
| **3.3.3 Error Suggestion** | AA | When errors are detected, suggestions for correction must be provided |

## Learning Outcomes

### 1D.01: Specify form field labels and instructions

**Outcome Statement:**  
Design clear labels and instructional text for form inputs.

**Knowledge Component:**
- Understand that form labels serve as accessible names for form controls
- Know the difference between labels, placeholder text, and instructions
- Recognize that placeholder text is not a substitute for labels (disappears on input)
- Understand when additional instructions are needed (format requirements, constraints)
- Know that labels must be visible and persistent

**Skills Component:**
- Evaluate form designs for proper labeling
- Identify forms using placeholder-only "labels" (common failure)
- Specify label placement and association in design annotations
- Write clear, concise labels that describe expected input
- Determine when instructional text is needed beyond the label

**Application Component:**
- Flag missing or inadequate labels during design reviews
- Annotate form designs with label specifications
- Collaborate with content designers on label text quality

### 1D.02: Design accessible error identification

**Outcome Statement:**  
Create error states that identify and describe errors in accessible ways.

**Knowledge Component:**
- Understand SC 3.3.1: errors must be identified and described in text
- Know that color alone cannot indicate errors (connects to L03 1C.02)
- Understand error message placement (near the field, or in a summary)
- Know that error messages must explain what went wrong
- Understand SC 3.3.3: error messages should suggest how to fix the problem

**Skills Component:**
- Design error states with text descriptions, not just color or icons
- Write error messages that explain the problem AND suggest solutions
- Specify error message placement and association with fields
- Design inline validation that meets accessibility requirements
- Create error summary patterns for forms with multiple errors

**Application Component:**
- Review error states for accessibility compliance
- Ensure error messages are specific and actionable
- Specify error handling patterns in design handoffs

### 1D.03: Apply input purpose requirements

**Outcome Statement:**  
Understand how input purpose identification benefits users with disabilities.

**Knowledge Component:**
- Understand SC 1.3.5: input purpose must be programmatically determinable
- Know the categories of fields that benefit from autocomplete (personal, address, payment, authentication)
- Understand how autocomplete reduces keystrokes for users with motor disabilities
- Understand how autocomplete reduces memory demands for users with cognitive disabilities
- Know the broader benefits: browser autofill, password managers, assistive technology support

**Skills Component:**
- Identify form fields that collect standard user information (name, email, address, phone, payment)
- Recognize when autocomplete support would benefit users
- Explain why input purpose matters for accessibility

**Application Component:**
- Recognize forms that would benefit from autocomplete support during design reviews
- Explain input purpose benefits to team members
- Understand that autocomplete implementation is an engineering responsibility

---

## Discover Badge - Testing Foundation

**Prerequisites:** L01: Accessible Names (required), L03: Color (recommended)

### Knowledge Objectives
- Explain why form labels are accessible names for form controls
- Describe the problems with placeholder-only labels
- Identify WCAG requirements for error identification (3.3.1) and suggestions (3.3.3)
- Explain input purpose requirements and autocomplete benefits
- Recognize common form accessibility failures

### Skills Objectives
- Test forms against the Adobe Design Accessibility Checklist forms section
- Identify missing labels, placeholder-only labels, and inadequate error messages
- Evaluate error states for text descriptions and suggested fixes
- Understand how autocomplete benefits users with motor and cognitive disabilities
- Annotate tab order as the primary form annotation

### Application Objectives
- Consistently flag form accessibility issues during design reviews
- Annotate form designs with tab order, labels, and error specifications
- Communicate form accessibility requirements to engineering
- Know when accessible names are needed (icon-only controls only)

### Assessment Methods
- Quiz: 5 multiple choice questions testing labels, errors, and autocomplete
- Project: Not applicable (online lesson, quiz-only)

---

## Self-Paced Checkpoints

Each section of the lesson includes a checkpoint for self-assessment:

### Checkpoint 1: Why forms matter
- I can explain why form accessibility failures are task-blocking
- I understand that form labels are accessible names for form controls

### Checkpoint 2: Labels and instructions
- I can identify placeholder-only labels as a common failure
- I can apply the four label requirements (visible, persistent, associated, descriptive)
- I can determine when instructions are needed beyond labels

### Checkpoint 3: Error identification
- I can explain the two WCAG requirements for errors (3.3.1 and 3.3.3)
- I can write error messages that identify the problem AND suggest a fix
- I can identify color-only error states as failures

### Checkpoint 4: Input purpose
- I can explain why autocomplete matters for accessibility (SC 1.3.5)
- I can identify which fields would benefit from autocomplete support
- I can explain how autocomplete helps users with motor and cognitive disabilities

### Checkpoint 5: Form annotation
- I can specify tab order for form fields
- I can document labels and instructions
- I can specify error states with message text and placement
- I know when accessible names are needed (icon-only controls only)

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 1D.01 | Placeholder text as label substitute |
| Q2 | 1D.01 | Label association requirement |
| Q3 | 1D.02 | Error message quality |
| Q4 | 1D.02 | Color-only error indication |
| Q5 | 1D.03 | Input purpose and autocomplete benefits |

---

## Resources

**W3C:**
- Understanding SC 1.3.5 Identify Input Purpose
- Understanding SC 3.3.1 Error Identification
- Understanding SC 3.3.2 Labels or Instructions
- Understanding SC 3.3.3 Error Suggestion
- WAI Tutorial: Forms

**Adobe:**
- Design Accessibility Checklist (Forms section)
- Spectrum: Form Components
- Stark Figma Plugin Guide