# L08: Motion & Animation - Quiz Questions

**Lesson:** L08  
**Topic:** Motion & Animation  
**Outcomes:** 1H.01, 1H.02, 1H.03  
**Total Points:** 5 (5 questions)

---

## Question 1: Reduced Motion User Preference
**Outcome:** 1H.01  
**Points:** 1  
**Difficulty:** Easy

**Question:**  
A user has enabled "Reduce motion" in their operating system settings. How should a website respond to this preference?

**Options:**
- A) Use prefers-reduced-motion media query to simplify or disable animations
- B) Websites cannot detect OS system settings, they need to set preferences in the browser
- C) Display a popup dialog asking users to confirm their animation preference
- D) Automatically redirect users to a simplified text-only version of the site

**Correct Answer:** A

**Rationale:**

*Why A is correct:* The prefers-reduced-motion CSS media query detects when a user has requested reduced motion in their operating system settings. Websites should use this query to disable complex animations, replace motion with simple fades or instant transitions, and stop auto-playing content. This respects user preferences automatically without requiring additional user action.

*Why B is incorrect:* Websites can detect OS system settings through CSS media queries. The prefers-reduced-motion media query automatically exposes the operating system's reduced motion setting to websites without requiring users to set separate browser preferences.

*Why C is incorrect:* Popups add friction to the user experience and may themselves not be accessible. Users have already expressed their preference through system settings; asking again is redundant and burdensome.

*Why D is incorrect:* Text-only versions are an extreme solution that removes visual design entirely. Users who prefer reduced motion still want and deserve a full visual experience, just without problematic animations.

---

## Question 2: Who Benefits from Reduced Motion
**Outcome:** 1H.01  
**Points:** 1  
**Difficulty:** Medium

**Question:**  
Which group of users is most likely to enable the "Reduce motion" setting in their operating system?

**Options:**
- A) Users with vestibular disorders who experience dizziness or nausea from motion
- B) Users with slow internet connections who want faster page loading times
- C) Users with color blindness who have difficulty distinguishing animated elements
- D) Users with motor impairments who have difficulty clicking on moving targets

**Correct Answer:** A

**Rationale:**

*Why A is correct:* The reduced motion setting primarily helps users with vestibular disorders, which affect the inner ear and balance system. These users can experience dizziness, nausea, vertigo, or disorientation when viewing animations, parallax effects, or other motion on screen. The setting allows them to use digital content without triggering these symptoms.

*Why B is incorrect:* Reduced motion settings do not affect page loading times or bandwidth usage. Users with slow connections would benefit from data saver modes or lite versions of sites, not motion reduction settings.

*Why C is incorrect:* Color blindness relates to color perception, not motion sensitivity. Users with color blindness benefit from sufficient color contrast and non-color indicators, not reduced motion.

*Why D is incorrect:* While moving targets can be difficult to click, users with motor impairments primarily benefit from larger click targets, keyboard navigation, and sufficient time limits. The reduced motion setting addresses vestibular concerns, not motor control challenges.

---

## Question 3: The 5-Second Rule
**Outcome:** 1H.02  
**Points:** 1  
**Difficulty:** Easy

**Question:**  
A hero section contains an auto-playing background (no-audio) video that loops continuously. According to SC 2.2.2 (Pause, Stop, Hide), what is required?

**Options:**
- A) A visible control to pause, stop, or hide the video must be provided
- B) No action is required because video content is exempt from motion rules
- C) The video must be accompanied by synchronized closed caption tracks
- D) The video must be replaced with a static image on all mobile devices

**Correct Answer:** A

**Rationale:**

*Why A is correct:* SC 2.2.2 requires that any moving, blinking, or auto-updating content that starts automatically and lasts more than 5 seconds must have a mechanism to pause, stop, or hide it. A continuously looping video clearly exceeds 5 seconds and requires visible controls.

*Why B is incorrect:* Video content is not exempt from motion requirements. Background videos, hero videos, and any auto-playing video content must provide pause controls just like any other moving content.

*Why C is incorrect:* Closed captions address a different accessibility need (providing audio information for users who cannot hear). Since the question specifies a no-audio background video, captions would have no content to display. Regardless, captions do not address the motion accessibility requirement of SC 2.2.2.

*Why D is incorrect:* Mobile-only changes do not address the requirement for desktop users. SC 2.2.2 applies across all devices and platforms. All users need access to pause controls.

---

## Question 4: Flash Threshold
**Outcome:** 1H.02  
**Points:** 1  
**Difficulty:** Medium

**Question:**  
A designer wants to add a pulsing "alert" animation to draw attention to urgent notifications. What is the maximum flash rate allowed by the WCAG ?

**Options:**
- A) Content must not flash more than 3 times in any one second period
- B) No flashing of any kind is permitted in accessible design interfaces
- C) Content can flash at any rate as long as the flashing area is small
- D) Flashing is permitted if a seizure warning is displayed beforehand

**Correct Answer:** A

**Rationale:**

*Why A is correct:* SC 2.3.1 sets a hard limit: content must not flash more than 3 times per second. This threshold exists because higher flash rates can trigger photosensitive epileptic seizures. Designers can use pulsing animations if they stay below this rate.

*Why B is incorrect:* Some flashing is acceptable if it stays below the threshold. WCAG does not prohibit all flashing, only dangerous flashing that exceeds the 3 times per second limit or the specific luminance thresholds.

*Why C is incorrect:* While size does factor into the detailed threshold calculations (the "small safe area" exception), this is a technical edge case. The fundamental requirement is the 3 times per second limit, and relying on size alone is incomplete and potentially dangerous.

*Why D is incorrect:* Warnings do not make dangerous content accessible. Users with photosensitive epilepsy may not be able to look away quickly enough once a seizure is triggered. The content itself must be safe, not just warned about.

---

## Question 5: Designing Motion Alternatives
**Outcome:** 1H.03  
**Points:** 1  
**Difficulty:** Hard

**Question:**  
A product page features a carousel that auto-rotates through product images every 3 seconds. The designer wants to make this accessible. Which approach best addresses motion accessibility requirements?

**Options:**
- A) Provide a visible pause button and show a static gallery for reduced-motion users
- B) Speed up carousel rotation to complete all image transitions within 5 seconds total
- C) Replace the entire carousel component with a single representative static image
- D) Display a motion warning and allow users to choose whether to stay or leave page

**Correct Answer:** A

**Rationale:**

*Why A is correct:* This approach addresses both SC 2.2.2 (pause control for auto-playing content) and reduced motion preferences. The pause button gives users immediate control to stop the auto-rotation. The reduced-motion alternative (static gallery) preserves access to all product images without animation, ensuring users who cannot tolerate motion still see all content.

*Why B is incorrect:* This misunderstands the 5-second rule. SC 2.2.2 requires controls for motion that lasts more than 5 seconds, it does not mean content should complete within 5 seconds. Speeding up the carousel would make it more disorienting, not more accessible.

*Why C is incorrect:* Replacing the carousel with a single image removes functionality and content. Users would lose access to the other product images. Accessible alternatives should preserve functionality, not eliminate it.

*Why D is incorrect:* Warnings do not make content accessible. Users should not have to leave a page to avoid motion effects. The content itself should be designed to be accessible, with controls and alternatives that allow all users to engage with it.

---

## Answer Key

| Question | Answer | Outcome | Points |
|----------|--------|---------|--------|
| Q1 | A | 1H.01 | 1 |
| Q2 | A | 1H.01 | 1 |
| Q3 | A | 1H.02 | 1 |
| Q4 | A | 1H.02 | 1 |
| Q5 | A | 1H.03 | 1 |
| **Total** | | | **5.00** |

---

## Outcome Coverage

| Outcome | Questions | Points |
|---------|-----------|--------|
| 1H.01 | Q1, Q2 | 2 |
| 1H.02 | Q3, Q4 | 2 |
| 1H.03 | Q5 | 1 |

---

**Document Version:** 1.3  
**Last Updated:** January 2026  
**Author:** DACE Curriculum Team
