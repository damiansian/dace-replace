# L10: Screen Reader Fundamentals - Learning Objectives

**Source:** `project-documents/10-screen-reader-fundamentals/knowledge-base/curriculum-development/L10_screen_reader_fundamentals_learning_objectives.md`

**Badge Level:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes Covered:** 2B.01, 2B.02, 2B.03

## Overview

This module introduces screen reader operation for designers. Students learn how to navigate web content using VoiceOver (desktop and iOS), NVDA, and TalkBack, understand the difference between browse mode and focus mode on desktop, and practice efficient navigation using element lists, the Rotor, and gesture-based shortcuts. This is the first lesson where designers use assistive technology hands-on, covering both desktop and mobile screen readers.

## Connection to L09: DOM and Accessibility Tree

This lesson builds directly on the accessibility tree foundation from L09:

- L09 taught what the accessibility tree contains and how to inspect it
- L10 shows how screen readers consume the accessibility tree to create the aural experience
- Students verify their "human screen reader" predictions from L09 with actual AT

This is the first lesson where designers hear what they've been analyzing visually.

## WCAG Success Criteria Mapping

While this lesson focuses on AT operation rather than specific WCAG criteria, it supports understanding of:

| Success Criterion | Level | Relevance to L10 |
|-------------------|-------|------------------|
| **4.1.2 Name, Role, Value** | A | Hearing how name, role, and value are announced by screen readers |
| **1.3.1 Info and Relationships** | A | Understanding how structural relationships affect screen reader navigation |
| **2.4.6 Headings and Labels** | AA | Experiencing how headings and labels support efficient navigation |
| **2.4.1 Bypass Blocks** | A | Understanding skip navigation from the screen reader perspective |

## Learning Outcomes

### 2B.01: Navigate pages using VoiceOver and NVDA

**Outcome Statement:**  
Demonstrate basic screen reader navigation on web content.

**Knowledge Component:**
- Understand how to start and stop VoiceOver (Cmd+F5 on Mac) and NVDA (Ctrl+Alt+N on Windows)
- Know the basic navigation commands: next element, previous element, activate/click
- Understand that VoiceOver uses the VO modifier key (Ctrl+Option) for most commands
- Know that NVDA uses the Insert key as its modifier
- Understand that screen readers announce name, role, state, and value (connecting to L09)
- Know that screen readers provide both visual cursor movement and audio output
- Understand iOS VoiceOver gesture-based navigation: swipe right (next), swipe left (previous), double-tap (activate)
- Know TalkBack gesture-based navigation: swipe right (next), swipe left (previous), double-tap (activate)
- Understand that mobile screen readers operate in essentially browse mode only, with no distinct focus mode

**Skills Component:**
- Start and configure a screen reader for basic testing on desktop and mobile
- Navigate forward and backward through page content using keyboard commands or touch gestures
- Activate links, buttons, and other interactive elements
- Read text content and understand the announcements
- Identify when elements are missing names or have incorrect roles by listening

**Application Component:**
- Use screen reader navigation as a validation step in the design review process
- Identify accessibility issues that are audible but not visible
- Compare screen reader experience to the intended design experience across desktop and mobile
- Document screen reader findings for engineering teams

### 2B.02: Distinguish browse mode vs focus mode

**Outcome Statement:**  
Explain when and why screen readers switch between reading and interaction modes.

**Knowledge Component:**
- Understand that browse mode (also called virtual cursor or reading mode) allows reading through all content sequentially
- Know that focus mode (also called forms mode or application mode) restricts navigation to interactive elements
- Understand that screen readers automatically switch modes when entering form fields or interactive widgets
- Know that NVDA indicates mode switches with audio tones (high pitch = focus mode, low pitch = browse mode)
- Understand that VoiceOver handles this differently, using the Web Rotor rather than distinct modes
- Know that incorrect ARIA roles can force screen readers into the wrong mode
- Understand that mobile screen readers (iOS VoiceOver, TalkBack) are essentially browse mode only: there is no separate focus mode, and all navigation happens through gestures and the Rotor

**Skills Component:**
- Identify which mode a screen reader is currently in
- Recognize the audio cues that indicate mode changes in NVDA
- Manually switch between browse mode and focus mode when needed
- Predict which elements will trigger mode switches
- Test form interactions to verify correct mode behavior

**Application Component:**
- Anticipate how design patterns will affect screen reader mode behavior
- Identify when custom widgets may trap users in the wrong mode
- Specify ARIA roles that produce correct mode switching
- Test designs to ensure smooth transitions between reading and interacting

### 2B.03: Use quick navigation for headings, landmarks, and links

**Outcome Statement:**  
Navigate efficiently using screen reader element lists and shortcuts.

**Knowledge Component:**
- Know single-key navigation shortcuts: H for headings, D for landmarks (NVDA), K for links
- Understand how the VoiceOver Web Rotor provides categorized element lists
- Know that NVDA's Elements List (Insert+F7) shows headings, links, landmarks, and form fields
- Understand that efficient navigation depends on proper semantic HTML (connecting L09 to real AT use)
- Know that missing or incorrect semantic structure makes quick navigation ineffective
- Understand iOS VoiceOver Rotor: twist gesture to select navigation type (headings, links, landmarks), then swipe up/down to navigate by that type
- Know that TalkBack provides comparable navigation through Reading Controls: swipe up then down to cycle navigation types, then swipe right/left to jump by that type

**Skills Component:**
- Use single-key navigation to jump between headings, landmarks, and links
- Access and use element lists in VoiceOver and NVDA
- Navigate by heading level (1-6 keys in NVDA browse mode)
- Use landmark navigation to orient within page structure
- Build a mental model of page structure through element lists
- Use the iOS VoiceOver Rotor and TalkBack Reading Controls to navigate by element type on mobile

**Application Component:**
- Evaluate design heading structures by navigating with a screen reader
- Verify that landmark regions are properly defined and labeled
- Test whether link text is meaningful when heard out of context
- Use screen reader navigation to validate design annotations from L09

---

## Define Badge: AT Expertise

**Prerequisites:** Discover Badge (L01-L08) required

### Knowledge Objectives
- Explain how screen readers consume the accessibility tree to create the aural experience
- Describe the difference between browse mode and focus mode on desktop
- Understand that mobile screen readers are essentially browse mode only
- Identify basic screen reader commands for VoiceOver (desktop and iOS), NVDA, and TalkBack
- Understand quick navigation shortcuts for headings, landmarks, and links
- Know how to access element lists, the Rotor, and Reading Controls across platforms

### Skills Objectives
- Navigate a web page using VoiceOver, NVDA, or TalkBack
- Identify which mode a desktop screen reader is operating in
- Use quick navigation to efficiently review page structure on desktop and mobile
- Detect accessibility issues through screen reader testing
- Compare screen reader output to expected behavior from accessibility tree

### Application Objectives
- Validate design annotations by testing with a screen reader on desktop and mobile
- Document screen reader findings clearly for engineering
- Identify issues that are audible but not visually apparent
- Use screen reader testing as a regular step in the design review process

### Assessment Methods
- Quiz: 5 multiple choice questions testing screen reader operation and mode understanding
- Project: Combined with L09, analyze accessibility tree and verify with screen reader

---

## Lesson Checkpoints

### Checkpoint 1: Starting and stopping screen readers
- I can launch VoiceOver (desktop and iOS), NVDA, or TalkBack and stop it when finished
- I understand the modifier keys (desktop) and basic gestures (mobile) for each screen reader

### Checkpoint 2: Basic navigation
- I can navigate forward and backward through content on desktop and mobile
- I can activate interactive elements (buttons, links) on each platform

### Checkpoint 3: Browse mode vs focus mode
- I can explain the difference between the two modes on desktop
- I understand when and why mode switches occur on desktop
- I understand that mobile screen readers are essentially browse mode only

### Checkpoint 4: Quick navigation
- I can navigate by headings, landmarks, and links on desktop
- I can use the iOS VoiceOver Rotor and TalkBack Reading Controls for the same purpose on mobile
- I can access element lists to review page structure

---

## Quiz Question Summary

| Question | Outcome | Topic |
|----------|---------|-------|
| Q1 | 2B.01 | Basic screen reader navigation concepts |
| Q2 | 2B.01 | Screen reader announcements and the accessibility tree |
| Q3 | 2B.02 | Browse mode vs focus mode distinction |
| Q4 | 2B.02 | Mode switching behavior |
| Q5 | 2B.03 | Quick navigation and element lists |

---

## Resources

**Screen Reader Downloads:**
- VoiceOver (built into macOS and iOS)
- NVDA (free download for Windows): https://www.nvaccess.org/
- TalkBack (built into Android)

**Reference Guides:**
- WebAIM VoiceOver Guide
- WebAIM NVDA Guide
- WebAIM TalkBack Guide
- Deque Screen Reader Keyboard Shortcuts

**W3C:**
- WAI: How People with Disabilities Use the Web
- ARIA Authoring Practices Guide (APG)

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L10: Screen Reader Fundamentals*
