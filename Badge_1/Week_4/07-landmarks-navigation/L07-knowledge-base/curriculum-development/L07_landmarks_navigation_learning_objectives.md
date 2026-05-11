# L07: Landmarks & Navigation - Learning Objectives

**Source:** `project-documents/07-landmarks-navigation/knowledge-base/curriculum-development/L07_landmarks_navigation_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** In-person 60 min / Online 30-45 min  
**Duration:** 60 minutes  
**Outcomes Covered:** 1G.01, 1G.02, 1G.03, 1G.04

---

## Overview

This lesson introduces learners to landmark regions, consistent navigation patterns, skip links, and focus order requirements. Learners will understand how landmarks provide structural navigation for assistive technology users, how to design consistent navigation experiences across pages, when and how to implement skip links, and how focus order supports keyboard accessibility. This lesson builds directly on L05's keyboard accessibility foundation and reinforces L02's content structure principles.

## Connection to Previous Lessons

- **L01 (Accessible Names):** Landmarks with multiple instances require unique accessible names
- **L02 (Headings):** Landmarks complement heading hierarchy for navigation
- **L04 (Forms & Errors):** Skip links help users bypass repetitive form fields
- **L05 (Keyboard & Touch):** Focus order requirements extend keyboard accessibility principles
- **L06 (Reflow & Zoom):** Landmark structure must remain intact at all zoom levels

---

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance |
|-------------------|-------|-----------|
| 1.3.1: Info and Relationships | A | Landmarks must be programmatically conveyed |
| 2.4.1: Bypass Blocks | A | Skip links allow bypassing repeated content |
| 2.4.3: Focus Order | A | Focus order must be logical and meaningful |
| 3.2.3: Consistent Navigation | AA | Navigation components must appear in consistent order |
| 3.2.4: Consistent Identification | AA | Components with same function must be identified consistently |

---

## Learning Outcomes

### 1G.01: Specify landmark regions appropriately

**Outcome Statement:**  
Identify and annotate page regions that should be marked as banner, navigation, main, and complementary landmarks

**Knowledge Component:**
- Understand the six ARIA landmark roles: banner, navigation, main, complementary, contentinfo, search
- Know the HTML5 semantic equivalents: header, nav, main, aside, footer
- Recognize when landmark regions are required vs optional
- Understand when multiple instances of a landmark type need unique names
- Know platform differences in landmark support

**Skills Component:**
- Identify all landmark regions in a page design
- Determine appropriate landmark roles for page sections
- Specify unique accessible names for multiple landmarks of the same type
- Test landmark structure using screen reader landmark navigation
- Document landmark specifications in blueline annotations

**Application Component:**
- Annotate designs with landmark specifications before handoff
- Verify landmark structure in implemented pages
- Recommend landmark improvements during design reviews
- Communicate landmark requirements to engineering teams

---

### 1G.02: Design consistent navigation

**Outcome Statement:**  
Create navigation patterns that are consistent across pages and states

**Knowledge Component:**
- Understand SC 3.2.3 Consistent Navigation requirements
- Know that navigation components must appear in the same relative order
- Recognize when navigation inconsistencies create barriers
- Understand SC 3.2.4 Consistent Identification requirements
- Know how consistent navigation supports user expectations and learning

**Skills Component:**
- Audit navigation patterns across multiple pages
- Identify inconsistencies in navigation order or presentation
- Verify navigation consistency across device sizes and orientations
- Document navigation patterns for design systems
- Test navigation consistency with assistive technology

**Application Component:**
- Design navigation systems with consistency as a core principle
- Flag navigation inconsistencies during design reviews
- Create navigation specifications that ensure consistency
- Collaborate with content teams on consistent navigation structure

---

### 1G.03: Specify skip links and bypass blocks

**Outcome Statement:**  
Design mechanisms that allow users to bypass repeated content

**Knowledge Component:**
- Understand SC 2.4.1 Bypass Blocks requirements
- Know the three methods to bypass blocks: skip links, landmarks, headings
- Recognize when skip links are required vs when landmarks suffice
- Understand skip link design patterns and visibility considerations
- Know how skip links interact with focus management

**Skills Component:**
- Identify repeated content blocks that need bypass mechanisms
- Design skip link appearance and behavior
- Specify skip link destinations (main content, navigation, footer)
- Test skip link functionality with keyboard navigation
- Document skip link specifications in annotations

**Application Component:**
- Include skip link specifications in design handoffs
- Evaluate designs for adequate bypass mechanisms
- Balance skip link visibility with visual design requirements
- Recommend skip link improvements during reviews

---

### 1G.04: Apply focus order requirements

**Outcome Statement:**  
Ensure focus order follows logical reading and interaction sequences

**Knowledge Component:**
- Understand SC 2.4.3 Focus Order requirements
- Know that focus order must preserve meaning and operability
- Recognize common focus order failures in complex layouts
- Understand how dynamic content affects focus order
- Know the relationship between visual order and DOM order

**Skills Component:**
- Test focus order using keyboard navigation
- Identify focus order issues in multi-column layouts
- Verify focus order in dynamic content (modals, accordions, tabs)
- Document focus order requirements in annotations
- Use browser DevTools to inspect tab order

**Application Component:**
- Review designs for logical focus order before handoff
- Specify focus management for dynamic content
- Collaborate with engineering on focus order implementation
- Test implemented focus order against design specifications

---

## Knowledge Objectives

By the end of this lesson, learners will understand:
- The six ARIA landmark roles and their HTML5 semantic equivalents
- When landmarks require unique accessible names
- SC 3.2.3 Consistent Navigation requirements
- SC 2.4.1 Bypass Blocks requirements and the three bypass methods
- SC 2.4.3 Focus Order requirements
- The relationship between visual layout and focus order
- How landmarks, skip links, and headings work together for navigation
- Platform differences in landmark support

## Skills Objectives

By the end of this lesson, learners will be able to:
- Identify and specify all landmark regions in a page design
- Audit navigation patterns for consistency across pages
- Design effective skip link patterns
- Test focus order using keyboard-only navigation
- Document navigation requirements in blueline annotations
- Use screen reader landmark navigation to verify structure
- Identify focus order issues in complex layouts

## Application Objectives

By the end of this lesson, learners will be able to apply their knowledge to:
- Review design mockups for landmark structure completeness
- Ensure navigation consistency across design systems
- Specify skip link behavior for repeated content
- Verify focus order matches intended reading sequence
- Annotate designs with comprehensive navigation specifications
- Identify and communicate navigation issues to stakeholders
- Balance navigation accessibility with visual design goals

---

## Assessment Methods

**Quiz (10 points):**
- 8 multiple choice questions
- Maps to outcomes 1G.01, 1G.02, 1G.03, 1G.04
- Covers WCAG criteria, testing methods, and practical application

**Applied Skill Project (15 points):**
- Conduct a complete navigation accessibility audit on a provided multi-page design
- Identify and annotate all landmark regions with appropriate roles
- Audit navigation consistency across pages
- Specify skip link requirements
- Verify and document focus order
- Provide specific recommendations with Stark blueline annotations

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 1G.01 | Landmark roles and HTML5 equivalents |
| Q2 | 1G.01 | When landmarks need unique names |
| Q3 | 1G.02 | Consistent navigation requirements |
| Q4 | 1G.02 | Navigation consistency testing |
| Q5 | 1G.03 | Bypass blocks methods |
| Q6 | 1G.03 | Skip link implementation |
| Q7 | 1G.04 | Focus order requirements |
| Q8 | 1G.04 | Focus order in dynamic content |

---

## Resources

**W3C:**
- [Understanding 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Understanding 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- [Understanding 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [Understanding 3.2.3: Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)
- [ARIA Landmarks Example](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/)

**Adobe:**
- [Landmarks on Digital Accessibility Guide](https://www.adobe.com)
- [Navigation Best Practices](https://www.adobe.com)
- [Skip Link Guidelines](https://www.adobe.com)
- [Blueline Annotations: Landmarks](https://www.adobe.com)

**Testing Tools:**
- Stark: Landmark annotations
- Browser DevTools: Accessibility tree inspection
- Screen reader landmark navigation (VO+U, NVDA+D)


