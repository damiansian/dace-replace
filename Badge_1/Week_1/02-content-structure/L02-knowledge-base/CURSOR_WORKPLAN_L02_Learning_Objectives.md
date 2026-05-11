# Cursor Work Plan: Add L02 Learning Objectives

## Overview

Add the L02 (Headings and Reading Order) learning objectives to the DACE curriculum. This fills a gap where L02 has a Figma build guide and lesson plan but is missing the formal learning objectives section.

**Important:** This is a Discover Badge lesson. Include ONLY Discover Badge content. Do NOT add Define or Deliver badge sections.

---

## Files to Create

### Task 1: Create the Learning Objectives File

**Create:** `/project-documents/02-content-structure/knowledge-base/curriculum-development/L02_headings_learning_objectives.md`

**Content:** Use the complete content from `L02_headings_learning_objectives.md` provided with this work plan.

**Note:** Create the directory structure if it does not exist.

---

## Files to Modify

### Task 2: Update the Master Reference - Add Section 3.2

**File:** `DACE_Master_Reference.md`

**Location:** Section 3 (Module Learning Objectives), between Section 3.1 (L01) and current Section 3.2 (L03)

**Find this line:**
```markdown
## 3.2 L03: Color
```

**Insert BEFORE that line:**
```markdown
## 3.2 L02: Headings and Reading Order

**Source:** `project-documents/02-content-structure/knowledge-base/curriculum-development/L02_headings_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** Online (asynchronous)  
**Duration:** 35 minutes  
**Outcomes Covered:** 1B.01, 1B.02, 1B.03

### Overview

This module covers heading structure and reading order. Designers learn to create logical heading hierarchies that support screen reader navigation and to recognize when visual layouts create reading order problems for assistive technology users.

### WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance to L02 |
|-------------------|-------|------------------|
| **1.3.1 Info and Relationships** | A | Structure and relationships conveyed through presentation must be programmatically determinable |
| **1.3.2 Meaningful Sequence** | A | Content must be presented in a meaningful order that can be programmatically determined |
| **2.4.6 Headings and Labels** | AA | Headings and labels must describe topic or purpose |

### Learning Outcomes

#### 1B.01: Design logical heading hierarchies

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

#### 1B.02: Recognize platform differences in heading support

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

#### 1B.03: Understand reading order fundamentals

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

### Knowledge Objectives

- Explain why heading structure matters for screen reader users
- Describe the H1-H6 hierarchy system and the rule against skipping levels
- Distinguish reading order from tab order
- Identify common reading order failure patterns

### Skills Objectives

- Test designs against the Adobe Design Accessibility Checklist structure section
- Identify heading hierarchy violations in design mockups
- Use Stark Bluelines to annotate heading levels

### Application Objectives

- Consistently flag heading structure issues during design reviews
- Annotate headings with appropriate levels in design handoffs

### Assessment Methods

- Quiz: 5 multiple choice questions
- Project: Annotate heading structure using Stark Bluelines


```

**Then change the L03 section header from:**
```markdown
## 3.2 L03: Color
```

**To:**
```markdown
## 3.3 L03: Color
```

### Task 3: Update Document Completion Summary

**Find:**
```markdown
✅ **Module Learning Objectives** (Section 3)
- L01: Accessible Names (all three badge levels)
- L03: Color (complete with pedagogical notes)
```

**Replace with:**
```markdown
✅ **Module Learning Objectives** (Section 3)
- L01: Accessible Names (Discover Badge)
- L02: Headings and Reading Order (Discover Badge)
- L03: Color (Discover Badge)
```

---

## Verification Checklist

- [ ] File exists: `/project-documents/02-content-structure/knowledge-base/curriculum-development/L02_headings_learning_objectives.md`
- [ ] Master Reference Section 3.2 contains L02 content
- [ ] Master Reference Section 3.3 is now L03 (renumbered)
- [ ] Document completion summary updated
- [ ] NO Define or Deliver badge sections included

---

## Do NOT Change

- Section 4 (Figma Build Guides) - L02 already exists there
- Section 5 (Lesson Plans) - L02 already exists there
- Any visual styling or CSS
