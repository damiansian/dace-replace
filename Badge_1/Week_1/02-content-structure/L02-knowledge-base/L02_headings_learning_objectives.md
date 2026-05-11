# L02: Headings - Learning Objectives

**Source:** `project-documents/02-content-structure/knowledge-base/curriculum-development/L02_headings_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** Online (asynchronous)  
**Duration:** 25 minutes  
**Outcomes Covered:** 1B.01, 1B.02

---

## Overview

This module covers heading structure. Designers learn to create logical heading hierarchies that support screen reader navigation and understand platform differences in heading support.

## Connection to L01: Accessible Names

Headings build on accessible name concepts:
- Headings ARE accessible names for page sections
- Quality guidelines apply: clear, concise, descriptive
- Function over form: headings describe content purpose, not visual appearance

---

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L02 |
|-------------------|-------|------------------|
| **1.3.1 Info and Relationships** | A | Structure and relationships conveyed through presentation must be programmatically determinable |
| **2.4.6 Headings and Labels** | AA | Headings and labels must describe topic or purpose |

---

## Learning Outcomes

### 1B.01: Design logical heading hierarchies

**Outcome Statement:**  
Create heading structures that convey document organization and support screen reader navigation.

**Knowledge Component:**
- Understand the H1-H6 heading system and its hierarchical nature
- Know the cardinal rule: do not skip levels going down (H1 to H3 is invalid)
- Recognize that not all large text is a heading (taglines, hero text)
- Understand how screen readers use heading lists for navigation

**Skills Component:**
- Evaluate existing designs for proper heading hierarchy
- Identify when large text should or should not be marked as a heading
- Annotate headings in Stark Bluelines with correct levels

**Application Component:**
- Flag heading hierarchy issues during design reviews
- Communicate heading structure rationale to engineering

---

### 1B.02: Recognize platform differences in heading support

**Outcome Statement:**  
Understand that iOS VoiceOver supports heading levels while Android TalkBack treats headings as binary, and apply this knowledge when annotating designs.

**Knowledge Component:**
- Know that web and iOS VoiceOver announce specific heading levels (H1, H2, H3, etc.)
- Know that Android TalkBack only distinguishes "heading" vs "not heading"
- Understand implications for cross-platform design

**Skills Component:**
- Create annotations that serve both platforms appropriately
- Specify heading levels even when designing for Android (for iOS/web users)

**Application Component:**
- Consider platform differences during multi-platform design reviews
- Explain platform variations to team members and stakeholders

---

## Knowledge Objectives

- Explain why heading structure matters for screen reader users (navigation, mental model)
- Describe the H1-H6 hierarchy system and the rule against skipping levels
- Recognize the difference between visual styling and semantic heading structure
- Understand platform differences in heading support (iOS vs Android)

## Skills Objectives

- Test designs against the Adobe Design Accessibility Checklist structure section
- Identify heading hierarchy violations in design mockups
- Use Stark Bluelines to annotate heading levels
- Create annotations appropriate for multi-platform designs

## Application Objectives

- Consistently flag heading structure issues during design reviews
- Annotate headings with appropriate levels in design handoffs
- Communicate heading structure rationale to engineering

---

## Assessment Methods

**Quiz (3 points):**
- 3 multiple choice questions testing hierarchy rules and platform differences
- Maps to outcomes 1B.01, 1B.02

**Project (if applicable):**
- Annotate heading structure for a sample interface using Stark Bluelines

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 1B.01 | Heading hierarchy with H1 to H3 skip |
| Q2 | 1B.02 | Multi-platform annotation approach |
| Q3 | 1B.01 | Taglines vs structural headings |

**Note:** Reading order questions (formerly Q4-Q5) have been moved to L05: Keyboard, Touch & Reading Order.

---

## Resources

**W3C:**
- WAI Tutorial: Page Structure - Headings
- Understanding SC 1.3.1 Info and Relationships
- Understanding SC 2.4.6 Headings and Labels
- Techniques G130, H42

**Adobe:**
- Design Accessibility Checklist (Structure section)
- Stark Plugin Guide
