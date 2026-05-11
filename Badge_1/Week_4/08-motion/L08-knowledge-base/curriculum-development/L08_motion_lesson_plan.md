# L08: Motion & Animation - Lesson Plan

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Discover  
**Lesson:** L08  
**Topic:** Motion & Animation  
**Delivery:** Online (asynchronous)  
**Duration:** 30-45 minutes  
**Outcomes:** 1H.01, 1H.02, 1H.03

---

## Pre-Session Requirements

### Learner Preparation
- Complete L07: Landmarks & Navigation lesson and quiz
- Review the Adobe Design Accessibility Checklist (Motion section)
- Enable "Reduce motion" in operating system settings to observe behavior

### Content Preparation
- Figma slide deck with motion examples
- Video placeholder (The Explainer video)
- Quiz questions loaded in Canvas
- Examples of pause controls, reduced motion alternatives

---

## Session Structure (Online)

| Section | Duration | Primary Outcome |
|---------|----------|-----------------|
| Introduction | 3 min | N/A |
| Why Motion Accessibility Matters | 5 min | All |
| The 5-Second Rule (Pause, Stop, Hide) | 8 min | 1H.02 |
| Reduced Motion Preferences | 8 min | 1H.01 |
| Seizure Risk and Flash Thresholds | 5 min | 1H.02 |
| Designing Motion Alternatives | 8 min | 1H.03 |
| Knowledge Check Quiz | 5-10 min | All |

**Total estimated time:** 42-47 minutes

---

## Detailed Content Plan

### Introduction (3 min)

**Content:**
- Welcome to the final Discover Badge lesson
- Display learning outcomes:
  - 1H.01: Apply reduced motion requirements
  - 1H.02: Identify pause, stop, hide requirements
  - 1H.03: Design motion alternatives
- Preview: Motion is about safety, not just preference

**Key Message:** "Motion can enhance experience, but it can also cause real physical harm. This lesson is about designing motion safely."

---

### Why Motion Accessibility Matters (5 min) - All Outcomes

**Content:**
- Motion affects users differently than other accessibility issues:
  - Vestibular disorders: Parallax and transitions cause dizziness, nausea, disorientation
  - Seizure disorders: Flashing can trigger photosensitive epileptic seizures
  - Attention disabilities: Auto-playing content distracts from primary tasks
  - Cognitive disabilities: Complex animations increase cognitive load
- Critical distinction: Motion accessibility is a safety issue, not just a preference

**Key Points:**
- Vestibular disorders affect approximately 35% of adults over 40
- Photosensitive epilepsy affects 1 in 4,000 people
- Motion-triggered seizures can be life-threatening

**Visual:** User impact diagram showing four affected groups

---

### The 5-Second Rule (8 min) - Outcome 1H.02

**Content:**

**Part 1: SC 2.2.2 Pause, Stop, Hide (4 min)**
- Requirement: Auto-playing content over 5 seconds needs a pause mechanism
- Three criteria must all be met:
  1. Starts automatically (not user-triggered)
  2. Lasts more than 5 seconds
  3. Appears alongside other content (not the only thing on page)
- Common examples: Background videos, carousels, animated illustrations, parallax

**Part 2: Pause Control Requirements (4 min)**
- Pause control must be visible and discoverable
- Control must be keyboard accessible
- Pausing should persist (not reset on page reload)
- Stopping should truly stop (not just pause and resume)

**Examples:**
- Compliant: Visible pause button on hero video
- Failure: Auto-looping carousel with no controls
- Failure: Pause button only visible on hover

**WCAG Connection:** SC 2.2.2 Pause, Stop, Hide (Level A)

---

### Reduced Motion Preferences (8 min) - Outcome 1H.01

**Content:**

**Part 1: The prefers-reduced-motion Media Query (4 min)**
- Operating systems expose user motion preferences
- CSS media query detects this preference: `@media (prefers-reduced-motion: reduce)`
- Websites should honor this setting automatically
- No popup or additional user action required

**Part 2: What to Do When Reduced Motion is Enabled (4 min)**
- Replace animations with instant state changes
- Disable parallax scrolling effects
- Stop auto-playing videos (show static poster)
- Use simple fades instead of complex transitions
- Remove decorative motion entirely

**Designer's Responsibility:**
- Document reduced motion behavior for every animation
- Do not leave this for engineering to guess
- Specify: "When prefers-reduced-motion is enabled, this animation [behavior]"

**WCAG Connection:** SC 2.3.3 Animation from Interactions (Level AAA)

---

### Seizure Risk and Flash Thresholds (5 min) - Outcome 1H.02

**Content:**

**Part 1: SC 2.3.1 Three Flashes (3 min)**
- Hard limit: Content must not flash more than 3 times per second
- Why: Higher rates can trigger photosensitive epileptic seizures
- What counts as a flash:
  - Rapid alternation between light and dark
  - Strobe effects or blinking elements
  - Video with rapid scene changes
  - Animated GIFs with quick transitions

**Part 2: Area and Color Considerations (2 min)**
- Flash threshold applies when flashing area is large enough
- Approximately 341x256 pixels at typical viewing distance
- Red flashing is especially dangerous and should be avoided entirely
- Warnings do not make dangerous content safe

**Critical Point:** Motion-triggered seizures can be life-threatening. This is not about user preference. It is about safety.

**WCAG Connection:** SC 2.3.1 Three Flashes or Below Threshold (Level A)

---

### Designing Motion Alternatives (8 min) - Outcome 1H.03

**Content:**

**Part 1: Essential vs Decorative Motion (4 min)**
- Essential motion: Communicates meaning that would be lost without it
  - Progress indicators showing upload status
  - State change feedback (success, error)
  - Drag-and-drop visual feedback
- Decorative motion: Purely aesthetic enhancement
  - Hover effects
  - Page transitions
  - Background animations
  - Loading spinners (when accompanied by text)

**Part 2: Creating Effective Alternatives (4 min)**
- Rule: Essential information must be available without animation
- Pattern: Animation version + Reduced motion version
- Example:
  - Animation: Progress bar fills from left to right
  - Alternative: Static bar with percentage text "Uploading: 45%"
- Example:
  - Animation: Carousel auto-rotates through images
  - Alternative: Static gallery with manual navigation

**Specification Pattern:**
"When prefers-reduced-motion is enabled, replace [animated component] with [static alternative that preserves information]."

---

### Knowledge Check Quiz (5-10 min)

**Content:**
- 6 questions covering all three outcomes
- Questions mapped to specific outcomes:
  - Q1-Q2: Reduced motion requirements (1H.01)
  - Q3-Q4: Pause, stop, hide and flash thresholds (1H.02)
  - Q5-Q6: Designing motion alternatives (1H.03)
- Auto-graded, immediate feedback

---

## Discussion Prompts

1. "What motion on websites or apps has ever made you uncomfortable?"
2. "How would you explain the difference between essential and decorative motion to a stakeholder?"
3. "What pause controls have you noticed on websites? Were they easy to find?"
4. "How might you test if an animation is essential?"

---

## Common Misconceptions

| Misconception | Clarification |
|---------------|---------------|
| "Reduced motion means no animation" | Reduced motion means less problematic animation; simple fades and instant changes are acceptable |
| "Warnings make flashing content safe" | Warnings cannot prevent seizures; content itself must be safe |
| "User-triggered animation is always OK" | User-triggered animation can still cause vestibular symptoms; it should be disableable (SC 2.3.3) |
| "The 5-second rule means animations must complete in 5 seconds" | The rule means content lasting over 5 seconds needs controls, not that it must complete quickly |
| "Small flashing areas are always safe" | While there is a "small safe area" exception, the safest approach is to stay below 3 flashes per second regardless of size |

---

## Key Takeaways

1. Motion accessibility is a safety issue, not just a preference
2. Auto-playing content over 5 seconds needs visible pause controls
3. Content must not flash more than 3 times per second
4. Honor prefers-reduced-motion by disabling or simplifying animations
5. Provide static alternatives that preserve essential information
6. Document motion behavior in design specifications

---

## Completion Message

**Congratulations!** You have completed all Discover Badge lessons. You now have a foundation in:
- Accessible names and labels
- Content structure (headings and reading order)
- Color and contrast
- Forms and error handling
- Keyboard and touch accessibility
- Reflow and zoom
- Landmarks and navigation
- Motion and animation

**Next Steps:**
- Complete the L08 Quiz to test your knowledge
- Prepare for the Discover Badge assessment
- Preview the Define Badge: Starting with DOM & Accessibility Tree

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Author:** DACE Curriculum Team
