# L17: Independent Review Methodology - Learning Objectives

**Badge Level:** Deliver
**Delivery:** In-person (instructor-led)
**Duration:** ~20 minutes (part of Week 11 session: 3 lessons in 60 min)
**Outcomes Covered:** 3A.01, 3A.02, 3A.03
**Week:** 11 (03/24/26)

---

## Overview

This lesson marks the transition from accessibility tester to accessibility reviewer. In Badges 1 and 2, learners applied checklists, used Blueline annotations, tested with assistive technologies, and inspected the accessibility tree. In L17, they learn to conduct independent, systematic accessibility reviews that go beyond individual checklist items to assess the full accessibility quality of a product feature.

The emphasis is on methodology: how to approach a review, what to look for beyond obvious failures, how to document findings so they drive action, and how to prioritize issues based on real-world impact rather than just WCAG conformance level.

---

## Connection to Prior Lessons

L17 builds directly on everything from Badges 1 and 2:

- **L01-L08 (Discover):** Established the accessibility checklist, Blueline annotation skills, and foundational WCAG knowledge. L17 assumes learners can already identify common issues; now they learn to find the subtle ones.
- **L09 (DOM and Accessibility Tree):** Understanding how the accessibility tree works enables reviewers to inspect beyond surface-level visual issues.
- **L10-L11 (Screen Reader Fundamentals and Navigation):** AT testing skills become part of the reviewer's toolkit, not a standalone exercise.
- **L12-L16 (Magnification, Voice Control, WHCM, User Preferences, Perceptual/Cognitive):** These expand the scope of what a reviewer checks. A systematic review covers all these modalities, not just screen reader support.

L17 is the first lesson where all prior skills are used together as part of a single, structured review workflow.

---

## WCAG Success Criteria Mapping

L17 is a meta-lesson: it teaches how to review against all WCAG 2.2 AA success criteria systematically, rather than introducing specific new criteria. The lesson applies all SC covered in Badges 1 and 2, with emphasis on:

| Success Criterion | Level | Relevance to L17 |
|-------------------|-------|------------------|
| All SC from L01-L16 | A/AA | Systematic review covers the full scope of criteria learned across Badges 1 and 2 |
| 4.1.2 Name, Role, Value | A | Core to accessibility tree inspection during reviews |
| 1.3.1 Info and Relationships | A | Structural review is a key part of systematic methodology |
| 2.4.6 Headings and Labels | AA | Heading structure review is often missed in ad-hoc testing |

---

## Learning Outcomes

### 3A.01: Conduct systematic accessibility reviews

**Outcome Statement:**
Perform comprehensive reviews using structured methodology.

**Knowledge Component:**
- Understand the review mindset shift from binary pass/fail testing to comprehensive quality assessment
- Know the difference between ad-hoc testing (checking individual items) and systematic review (assessing the full experience)
- Understand systematic review strategies that cover all WCAG 2.2 AA categories without missing edge cases
- Recognize the difference between review fidelity levels: early concept review, detailed design review, pre-implementation review
- Know how time-boxing affects review scope and how to adjust depth for different project phases
- Understand the reviewer's dual responsibility: finding problems AND enabling solutions

**Skills Component:**
- Conduct systematic accessibility reviews using a structured methodology that covers all WCAG categories
- Time-box reviews appropriately for different project phases and fidelity levels
- Identify patterns of issues rather than documenting every instance individually
- Distinguish between mandatory fixes and recommended improvements

**Application Component:**
- Perform independent accessibility reviews of complex Adobe product features across platforms
- Adapt review depth and scope based on project timeline, fidelity level, and team maturity
- Contribute to PEAS review sessions as an active reviewer providing expert analysis
- Self-assess review completeness by comparing your findings against expert reviews

---

### 3A.02: Document findings using PEAS format

**Outcome Statement:**
Write review documentation following Adobe PEAS standards.

**Knowledge Component:**
- Know the PEAS (Product Equity Advisory Sessions) review methodology and documentation standards
- Understand the PEAS request form: what information is captured before a session (product, business unit, design links, timeline)
- Understand the PEAS host recap form: Session ID (PE- format), transcript link, outcome classification (Complete, One follow-up, Async review, Project), attendees
- Know when to flag issues vs. recommend alternatives and how these different approaches serve designers
- Understand the four PEAS outcome tiers and what each means for the design team

**Skills Component:**
- Create comprehensive review documentation that clearly communicates findings, context, and recommendations
- Use the PEAS review format to document findings in a way that enables action
- Write recommendations that give designers clear paths forward, not just criticism
- Classify session outcomes using the four-tier PEAS system

**Application Component:**
- Document review findings using Adobe's PEAS methodology and standards
- Present review findings to product teams in ways that build capability rather than create defensiveness

---

### 3A.03: Prioritize issues by impact and risk

**Outcome Statement:**
Classify findings based on user impact, legal risk, and implementation complexity.

**Knowledge Component:**
- Understand prioritization frameworks for classifying findings: critical blockers, high impact, improvements, best practices
- Know how to weigh user impact (who is blocked, how severely) against implementation effort
- Understand how legal risk factors into prioritization (Section 508, EN 301 549, EAA requirements from L20)
- Recognize that not all WCAG A failures are equal in impact and not all AAA items are low priority

**Skills Component:**
- Prioritize findings effectively based on user impact, legal risk, and implementation complexity
- Distinguish between issues that block users entirely vs. issues that degrade the experience
- Communicate priority rationale that helps product teams make resource allocation decisions

**Application Component:**
- Prioritize review findings in a way that helps product teams act on the most impactful issues first
- Advise on remediation sequencing when teams have limited capacity

---

## Deliver Badge: Independent Review

**Prerequisites:** Define Badge (L09-L16) required

### Knowledge Objectives
- Understand the review mindset shift from binary pass/fail testing to comprehensive quality assessment
- Know the PEAS review methodology and documentation standards
- Understand systematic review strategies that cover all WCAG 2.2 AA categories without missing edge cases
- Know when to flag issues vs. recommend alternatives and how these different approaches serve designers
- Understand prioritization frameworks for classifying findings (critical blockers, high impact, improvements, best practices)
- Recognize the difference between various review fidelity levels (early concept review, detailed design review, pre-implementation review)
- Know how time-boxing affects review scope and how to adjust depth for different project phases
- Understand the reviewer's dual responsibility: finding problems AND enabling solutions

### Skills Objectives
- Conduct systematic accessibility reviews using a structured methodology that covers all WCAG categories
- Create comprehensive review documentation that clearly communicates findings, context, and recommendations
- Prioritize findings effectively based on user impact, legal risk, and implementation complexity
- Time-box reviews appropriately for different project phases and fidelity levels
- Distinguish between mandatory fixes and recommended improvements in your documentation
- Use the PEAS review format to document findings in a way that enables action
- Identify patterns of issues rather than documenting every instance individually
- Write recommendations that give designers clear paths forward, not just criticism

### Application Objectives
- Perform independent accessibility reviews of complex Adobe product features across platforms
- Document review findings using Adobe's PEAS methodology and standards
- Present review findings to product teams in ways that build capability rather than create defensiveness
- Adapt review depth and scope based on project timeline, fidelity level, and team maturity
- Contribute to PEAS review sessions as an active reviewer providing expert analysis
- Self-assess review completeness by comparing your findings against expert reviews

---

## Lesson Checkpoints

### Checkpoint 1: Review mindset
- I understand the difference between checklist testing and systematic review
- I can explain why comprehensive review methodology matters beyond what I learned in Badges 1 and 2

### Checkpoint 2: PEAS methodology
- I understand the PEAS session workflow: request, session, recap
- I know the four outcome tiers and what each means for the design team

### Checkpoint 3: Prioritization
- I can classify findings by impact and risk, not just WCAG level
- I understand how to communicate priority to product teams

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 3A.01 | Systematic review vs. ad-hoc checklist testing |
| Q2 | 3A.01 | Review fidelity levels and scope decisions |
| Q3 | 3A.02 | PEAS documentation and session outcomes |
| Q4 | 3A.03 | Prioritization by impact and risk |
| Q5 | 3A.03 | Prioritization scenario (choosing what to fix first) |

---

## Resources

**Adobe Internal:**
- PEAS Request Form (SharePoint)
- PEAS Host Recap Form (SharePoint)
- Design Accessibility Policy
- Blueline Annotation Standards

**W3C:**
- WCAG 2.2 Quick Reference (filtering by A and AA)
- ARIA Authoring Practices Guide (APG)

**Community:**
- Deque University: Accessibility Testing Methodology
- WebAIM: Web Accessibility Evaluation Guide

---

*Last updated: March 2026*
*Version: 1.0*
*For: DACE L17: Independent Review Methodology*
