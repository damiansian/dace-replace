# L02: Headings and Reading Order - Learning Objectives

**Source:** `project-documents/02-content-structure/knowledge-base/curriculum-development/L02_headings_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** Online (asynchronous)  
**Duration:** 35 minutes  
**Outcomes Covered:** 1B.01, 1B.02, 1B.03

## Overview

This module covers heading structure and reading order. Designers learn to create logical heading hierarchies that support screen reader navigation and to recognize when visual layouts create reading order problems for assistive technology users.

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L02 |
|-------------------|-------|------------------|
| **1.3.1 Info and Relationships** | A | Structure and relationships conveyed through presentation must be programmatically determinable |
| **1.3.2 Meaningful Sequence** | A | Content must be presented in a meaningful order that can be programmatically determined |
| **2.4.6 Headings and Labels** | AA | Headings and labels must describe topic or purpose |

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

### 1B.03: Understand reading order fundamentals

**Outcome Statement:**  
Recognize common reading order failures and understand that reading order annotation is not required in Bluelines.

**Knowledge Component:**
- Define reading order as the sequence screen readers announce content
- Distinguish reading order from tab order (all content vs interactive elements only)
- Know that disabled controls appear in reading order but not tab order
- Identify common SC 1.3.2 failures: modals, hidden content, menus, multi-column layouts

**Skills Component:**
- Identify when visual layouts may create reading order problems
- Recognize designs that risk SC 1.3.2 failures

**Application Component:**
- Flag potential reading order issues during design reviews
- Understand that reading order implementation is engineering's responsibility
- Know when to raise reading order concerns without over-annotating

---

## Discover Badge - Testing Foundation

**Prerequisites:** L01: Accessible Names (recommended)

### Knowledge Objectives
- Explain why heading structure matters for screen reader users (navigation, mental model)
- Describe the H1-H6 hierarchy system and the rule against skipping levels
- Recognize the difference between visual styling and semantic heading structure
- Distinguish reading order from tab order
- Identify common reading order failure patterns

### Skills Objectives
- Test designs against the Adobe Design Accessibility Checklist structure section
- Identify heading hierarchy violations in design mockups
- Use Stark Bluelines to annotate heading levels
- Recognize when visual layouts may create reading order issues

### Application Objectives
- Consistently flag heading structure issues during design reviews
- Annotate headings with appropriate levels in design handoffs
- Communicate structure requirements to engineering without over-specifying reading order

### Assessment Methods
- Quiz: 5 multiple choice questions testing hierarchy rules, platform differences, and reading order concepts
- Project: Annotate heading structure for a sample interface using Stark Bluelines

---

## Define Badge - Assistive Technology Expertise

**Prerequisites:** Discover Accessibility Badge

### Knowledge Objectives
- Understand how heading structure appears in the accessibility tree
- Know how different screen readers expose heading information
- Master the relationship between DOM order, visual order, and reading order
- Understand CSS techniques that affect reading order (flexbox order, grid placement, absolute positioning)

### Skills Objectives
- Test heading announcements with VoiceOver, NVDA, and TalkBack
- Use browser developer tools to inspect heading structure in the accessibility tree
- Identify reading order issues through AT testing
- Validate that heading structure matches visual hierarchy

### Application Objectives
- Conduct AT-based validation of heading implementations
- Advise engineering on reading order concerns with specific technical context
- Identify heading and reading order issues that automated tools miss

### Assessment Methods
- Screen reader validation of heading structure across platforms
- Accessibility tree inspection exercises
- Reading order testing with AT

---

## Define Badge - Independent Review

**Prerequisites:** Define Accessibility Badge

### Knowledge Objectives
- Master complex heading scenarios (application UIs, dynamic content, SPAs)
- Understand edge cases where heading rules require interpretation
- Know when heading structure should deviate from strict hierarchy (e.g., reusable components)

### Skills Objectives
- Handle ambiguous heading structure decisions
- Mentor Discover and Define Badge designers on structure requirements
- Conduct independent design accessibility reviews for heading and reading order

### Application Objectives
- Lead accessibility reviews covering structure and reading order
- Make defensible judgment calls on complex heading scenarios
- Contribute to Adobe's heading and structure guidelines

### Assessment Methods
- Complex scenario reviews with ambiguous heading situations
- Mentoring demonstrations
- Independent review of heading structure in production designs

---

## Progressive Learning Outcomes

**Discover Badge Completion:**
- Participants can identify heading hierarchy violations
- Participants annotate headings correctly in Stark Bluelines
- Participants distinguish reading order from tab order
- Participants know not to over-annotate reading order in designs

**Define Badge Completion:**
- Participants validate heading structure with screen readers
- Participants inspect accessibility tree for heading exposure
- Participants identify reading order issues through AT testing

**Deliver Badge Completion:**
- Participants conduct independent reviews of heading structure
- Participants mentor others on structure requirements
- Participants make judgment calls on complex heading scenarios

---

## Connection to L01: Accessible Names

Headings build on accessible name concepts:
- Headings ARE accessible names for page sections
- Quality guidelines apply: clear, concise, descriptive
- Function over form: headings describe content purpose, not visual appearance

This connection reinforces the scaffolding strategy where accessible names thread through all subsequent lessons.

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 1B.01 | Heading hierarchy with H1 to H3 skip |
| Q2 | 1B.02 | Multi-platform annotation approach |
| Q3 | 1B.01 | Taglines vs structural headings |
| Q4 | 1B.03 | Disabled button in reading order |
| Q5 | 1B.03 | Modal dialog failure (SC 1.3.2 + 2.4.3) |

---

## Resources

**W3C:**
- WAI Tutorial: Page Structure - Headings
- Understanding SC 1.3.1 Info and Relationships
- Understanding SC 1.3.2 Meaningful Sequence  
- Understanding SC 2.4.6 Headings and Labels
- Techniques G130, H42

**Adobe:**
- Design Accessibility Checklist (Structure section)
- Stark Plugin Guide
