# L08: Motion & Animation - Learning Objectives

**Source:** `project-documents/08-motion/knowledge-base/curriculum-development/L08_motion_learning_objectives.md`

**Badge Level:** Discover  
**Delivery:** Online (asynchronous)  
**Duration:** 30-45 minutes  
**Outcomes Covered:** 1H.01, 1H.02, 1H.03

---

## Overview

This lesson introduces learners to motion and animation accessibility requirements. Learners will understand how motion affects users with vestibular disorders, seizure conditions, and attention-related disabilities. They will learn to apply reduced motion preferences, implement pause controls for auto-playing content, and design motion alternatives that preserve meaning. This is the final lesson in the Discover Badge, completing the foundation for accessible design testing.

## Connection to Previous Lessons

- **L01 (Accessible Names):** Animation controls need accessible names
- **L02 (Headings):** Content structure helps users find pause controls
- **L05 (Keyboard & Touch):** Animation controls must be keyboard accessible
- **L07 (Landmarks):** Pause controls should be discoverable in page structure

---

## WCAG Success Criteria Mapping

| Success Criterion | Level | Relevance |
|-------------------|-------|-----------|
| 2.2.2: Pause, Stop, Hide | A | Auto-playing content over 5 seconds needs controls |
| 2.3.1: Three Flashes or Below Threshold | A | Content must not flash more than 3 times per second |
| 2.3.3: Animation from Interactions | AAA | User-triggered motion must be disableable unless essential |

---

## Learning Outcomes

### 1H.01: Apply reduced motion requirements

**Outcome Statement:**  
Design alternatives for animations that respect user motion preferences

**Knowledge Component:**
- Understand the prefers-reduced-motion media query and its purpose
- Know how operating systems expose reduced motion preferences
- Recognize which animations should be disabled or simplified for reduced motion
- Understand SC 2.3.3 Animation from Interactions requirements
- Know the difference between system preferences and in-page controls

**Skills Component:**
- Identify animations that should respond to prefers-reduced-motion
- Specify reduced motion behavior for each animation in a design
- Test designs with reduced motion enabled in operating system settings
- Document motion alternatives in design specifications
- Verify implementations respect user preferences

**Application Component:**
- Annotate designs with reduced motion specifications before handoff
- Review designs for appropriate reduced motion alternatives
- Communicate motion requirements to engineering teams
- Advocate for motion preference support in design systems

---

### 1H.02: Identify pause, stop, hide requirements

**Outcome Statement:**  
Recognize when moving or auto-updating content requires user controls

**Knowledge Component:**
- Understand SC 2.2.2 Pause, Stop, Hide requirements
- Know the 5-second rule for auto-playing content
- Recognize the three criteria: starts automatically, lasts over 5 seconds, appears alongside other content
- Understand SC 2.3.1 Three Flashes or Below Threshold requirements
- Know the flash threshold (3 times per second) and why it matters for seizure safety

**Skills Component:**
- Identify auto-playing content that requires pause controls
- Spot flashing content that may exceed safe thresholds
- Evaluate carousel, video, and animation designs for compliance
- Test pause controls for visibility and functionality
- Verify content stops or can be stopped within requirements

**Application Component:**
- Flag motion issues during design reviews using the Adobe Design Accessibility Checklist
- Specify pause control requirements in annotations
- Recommend appropriate control placements and behaviors
- Communicate seizure risks clearly to stakeholders

---

### 1H.03: Design motion alternatives

**Outcome Statement:**  
Create reduced-motion versions of animated content that preserve meaning

**Knowledge Component:**
- Understand the distinction between essential and decorative motion
- Know that essential information must be available without animation
- Recognize patterns for static alternatives to animated content
- Understand that removing motion should not remove functionality
- Know how to document motion alternatives in specifications

**Skills Component:**
- Classify animations as essential or decorative
- Design static alternatives that preserve essential information
- Specify how animated components should behave in reduced motion mode
- Test that functionality is preserved when motion is disabled
- Document motion alternatives in design handoff materials

**Application Component:**
- Create complete motion specifications including reduced-motion alternatives
- Review animated components for essential vs decorative classification
- Ensure design systems include motion alternative patterns
- Collaborate with engineering on motion alternative implementation

---

## Knowledge Objectives

By the end of this lesson, learners will understand:
- How motion on screen can cause vestibular symptoms, seizures, or cognitive overload
- The 5-second rule: auto-playing content over 5 seconds needs pause controls
- The flash threshold: content must not flash more than 3 times per second
- The prefers-reduced-motion media query and how it honors user system settings
- The difference between essential motion (communicates meaning) and decorative motion (aesthetic only)
- SC 2.2.2 Pause, Stop, Hide and SC 2.3.1 Three Flashes requirements
- SC 2.3.3 Animation from Interactions requirements

## Skills Objectives

By the end of this lesson, learners will be able to:
- Identify auto-playing content that exceeds 5 seconds without pause controls
- Spot content that may flash or blink at dangerous rates
- Classify motion as essential or decorative
- Specify reduced motion alternatives for animated content
- Test motion compliance against the Adobe Design Accessibility Checklist
- Verify designs indicate how animations behave when prefers-reduced-motion is enabled

## Application Objectives

By the end of this lesson, learners will be able to apply their knowledge to:
- Flag motion issues during design reviews
- Annotate designs with pause controls, reduced motion alternatives, and animation durations
- Communicate the impact of problematic motion in clear, non-technical language
- Ensure motion specifications are complete before engineering handoff

---

## Assessment Methods

**Quiz (6 points):**
- 6 multiple choice questions
- Maps to outcomes 1H.01, 1H.02, 1H.03 (2 questions each)
- Covers reduced motion preferences, pause controls, flash thresholds, and motion alternatives

**Note:** This is an online lesson with quiz-only assessment. In-person lessons (L01, L03, L05, L07) include hands-on projects.

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 1H.01 | Reduced motion user preferences and prefers-reduced-motion |
| Q2 | 1H.01 | Animation from interactions (SC 2.3.3) |
| Q3 | 1H.02 | The 5-second rule and pause controls (SC 2.2.2) |
| Q4 | 1H.02 | Flash threshold (SC 2.3.1) |
| Q5 | 1H.03 | Essential vs decorative motion |
| Q6 | 1H.03 | Designing motion alternatives |

---

## Resources

**W3C:**
- [Understanding 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- [Understanding 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
- [Understanding 2.3.3: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)

**Design Resources:**
- [Designing With Reduced Motion (Smashing Magazine)](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
- [Designing Safer Web Animation (A List Apart)](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

**Testing Tools:**
- PEAT (Photosensitive Epilepsy Analysis Tool)
- OS reduced motion settings (macOS, Windows, iOS, Android)
- Adobe Design Accessibility Checklist (Motion section)

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Author:** DACE Curriculum Team
