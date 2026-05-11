# L10: Screen Reader Fundamentals - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2B.01, 2B.02, 2B.03

---

## Lesson Overview

This in-person lesson introduces screen reader operation for designers. Students learn how to navigate web content using VoiceOver (desktop and iOS), NVDA, and TalkBack, understand the critical distinction between browse mode and focus mode on desktop, and learn that mobile screen readers operate in essentially browse mode only with gesture-based navigation and the Rotor/Reading Controls for quick navigation. This is the first hands-on AT lesson in the Define Badge.

**Why This Matters:** Designers who can use a screen reader, even at a basic level, can validate their own work before handoff. Hearing your design as a screen reader user experiences it transforms how you think about accessibility. This is the single most impactful skill for building empathy and catching issues early.

**Connection to L09:** This lesson puts L09's accessibility tree knowledge into practice. Students will hear the name, role, state, and value properties they learned to inspect visually. The "human screen reader" analysis from L09 becomes real.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 4.1.2 | Name, Role, Value | A | AT must receive name, role, and value information |
| 1.3.1 | Info and Relationships | A | Structure and relationships must be programmatically determined |
| 2.4.6 | Headings and Labels | AA | Headings and labels describe topic or purpose |
| 2.4.1 | Bypass Blocks | A | A mechanism is available to bypass blocks of repeated content |

---

## Content Outline

### Section 0: Introduction (3 min)
- Connection to L09: from seeing the tree to hearing it
- Lesson objectives display (2B.01, 2B.02, 2B.03)
- Quick demo: turn on VoiceOver, navigate one page, turn off
- Set expectations: this is practice, not perfection

### Section 1: Getting Started with Screen Readers (10 min)

**1.1 What is a Screen Reader?**
- Software that reads the accessibility tree aloud (connecting to L09)
- Converts visual information into speech or braille output
- Used by people who are blind, have low vision, or have reading/cognitive disabilities
- Key insight: screen readers read the accessibility tree, not the visual display

**1.2 VoiceOver Basics (Mac)**
- Toggle: Cmd+F5 (or Touch ID triple-press)
- VO modifier: Ctrl+Option
- Navigate: VO+Right Arrow (next), VO+Left Arrow (previous)
- Activate: VO+Space
- Web Rotor: VO+U (opens categorized element list)
- Stop speaking: Ctrl

**1.3 NVDA Basics (Windows)**
- Toggle: Ctrl+Alt+N (start), Insert+Q (quit)
- NVDA modifier: Insert key
- Navigate: Down Arrow (next line), Up Arrow (previous line)
- Activate: Enter or Space
- Elements List: Insert+F7
- Stop speaking: Ctrl

**1.4 iOS VoiceOver Basics (Mobile)**
- Toggle: Settings → Accessibility → VoiceOver, or triple-click Side button (if configured)
- Navigate: Swipe right (next element), swipe left (previous element)
- Activate: Double-tap anywhere on screen
- Rotor: Two-finger twist gesture to select navigation type (headings, links, landmarks, etc.)
- Navigate by Rotor type: Swipe up/down to jump to previous/next item of selected type
- Key insight: iOS VoiceOver is essentially browse mode only, no distinct focus mode

**1.5 TalkBack Basics (Android)**
- Toggle: Settings → Accessibility → TalkBack, or hold both volume keys (if configured)
- Navigate: Swipe right (next element), swipe left (previous element)
- Activate: Double-tap anywhere on screen
- Reading Controls: Swipe up then down (or down then up) to cycle navigation types
- Navigate by type: After selecting a type, swipe right/left to jump by that type
- Key insight: Like iOS, TalkBack is essentially browse mode only

**1.6 What Screen Readers Announce**
- Name + Role + State + Value (from L09)
- Example: "Submit application, button, disabled"
- Example: "Email address, edit text, required"
- Example: "Products, heading level 2"
- Announcements follow the same pattern across desktop and mobile screen readers

**Key Message:** Screen readers announce the accessibility tree properties you learned to inspect in L09. Desktop and mobile screen readers read the same tree, but use different interaction methods: keyboard commands on desktop, touch gestures on mobile.

### Section 2: Browse Mode vs Focus Mode (12 min)

**2.1 Two Ways to Navigate**
- Browse mode (virtual cursor): read everything on the page
- Focus mode (forms mode): interact with controls
- Analogy: browse mode is like reading a book; focus mode is like filling out a form

**2.2 Browse Mode Details**
- Arrow keys move through all content (headings, text, links, images)
- Single-key shortcuts work (H for headings, K for links, etc.)
- Every element in the accessibility tree is reachable
- Used for: reading, scanning, understanding page structure

**2.3 Focus Mode Details**
- Arrow keys control the interactive element (dropdown options, radio buttons)
- Single-key shortcuts are disabled (typing goes to the control)
- Only interactive elements are reachable via Tab
- Used for: filling forms, operating widgets, selecting options

**2.4 Mode Switching**
- NVDA auto-switches when entering a form field (with audio tone)
- High-pitch tone = focus mode entered
- Low-pitch tone = browse mode restored
- Manual toggle: NVDA+Space
- VoiceOver handles this differently: uses VO+Shift+Down Arrow to interact with groups

**2.5 Why Designers Need to Know This**
- Incorrect ARIA roles (e.g., role="application") can force focus mode on entire regions
- Missing roles on custom widgets can prevent mode switching
- Designers should specify interaction patterns that support correct mode behavior
- Common failure: custom dropdown that traps users in browse mode

**2.6 Hands-on: Mode Switching**
- Navigate to a page with a search form
- Notice browse mode on page content (text, headings)
- Tab to search field, notice switch to focus mode
- Type in the field (keys go to field, not navigation)
- Tab out, notice return to browse mode

**2.7 Mobile: Browse Mode Only**
- iOS VoiceOver and TalkBack do not have a separate focus mode
- All navigation happens through gestures: swipe right/left to move, double-tap to activate
- When you reach a text field, the on-screen keyboard appears; typing just works
- The Rotor (iOS) and Reading Controls (TalkBack) are the mobile equivalents of quick navigation, not mode switching
- Key design implication: the browse/focus mode distinction is a desktop concept; on mobile, the interaction model is simpler but the same semantic structure is required

**Key Message:** Understanding mode switching helps designers specify interaction patterns that work correctly with desktop screen readers. On mobile, screen readers are essentially browse mode only, relying on the Rotor or Reading Controls for efficient navigation.

### Section 3: Quick Navigation (12 min)

**3.1 Why Quick Navigation Matters**
- Real screen reader users rarely read pages top to bottom
- They jump between headings, landmarks, and links
- This is why heading structure (L02) and landmarks (L07) are so important
- Quick navigation depends on proper semantic structure

**3.2 NVDA Single-Key Shortcuts (Browse Mode)**

| Key | Jumps to | Shift+Key |
|-----|----------|-----------|
| H | Next heading | Previous heading |
| 1-6 | Next heading at that level | Previous at that level |
| D | Next landmark | Previous landmark |
| K | Next link | Previous link |
| F | Next form field | Previous form field |
| B | Next button | Previous button |
| T | Next table | Previous table |

**3.3 VoiceOver Web Rotor**
- Open with VO+U
- Rotate categories with Left/Right arrows: Headings, Links, Landmarks, Form Controls
- Select item with Up/Down arrows, press Enter to navigate to it
- Provides a complete structural overview of the page

**3.4 Element Lists (Desktop)**
- NVDA: Insert+F7 opens categorized element list
- VoiceOver: VO+U opens the Web Rotor
- Both show: all headings, all links, all landmarks, all form fields
- This is how users build a mental model of the page

**3.5 Mobile Quick Navigation: Rotor and Reading Controls**
- iOS VoiceOver Rotor: two-finger twist gesture to select navigation type (headings, links, landmarks, form controls, etc.), then swipe up/down to jump by that type
- TalkBack Reading Controls: swipe up then down (or down then up) to cycle between navigation types (headings, links, controls, etc.), then swipe right/left to jump by that type
- Both serve the same purpose as desktop quick navigation: jumping between elements by type
- Same semantic structure required: if headings are flat or landmarks are missing, mobile quick navigation fails just like desktop
- Key difference: no single-key shortcuts on mobile; the Rotor and Reading Controls replace that functionality entirely

**3.6 Hands-on: Navigate by Structure**
- Open a well-structured page
- Use H key to navigate all headings (hear the heading levels)
- Use D key to jump between landmarks
- Open Elements List (Insert+F7) and review headings
- Compare what you hear to the accessibility tree from L09

**3.7 Hands-on: Navigate a Poorly Structured Page**
- Open a page with flat heading structure (all same level)
- Try to navigate by heading level (1-6 keys): nothing works
- Open heading list: everything is H2, no hierarchy
- Key insight: poor structure = poor screen reader navigation

**Key Message:** Quick navigation is the primary way screen reader users explore pages. Your heading structure and landmarks make this possible.

### Section 4: Summary and Assessment (8 min)

**4.1 Key Takeaways**
- Screen readers announce the accessibility tree (name, role, state, value)
- Browse mode reads content; focus mode operates controls
- Quick navigation (headings, landmarks, links) is how real users navigate
- Your design decisions directly affect the screen reader experience

**4.2 Connecting L09 and L10**
- L09: see the accessibility tree in dev tools
- L10: hear the accessibility tree through a screen reader
- Together: predict, inspect, and verify the AT experience

**4.3 Quiz Preview**
- 5 questions covering screen reader navigation, mode behavior, and quick navigation

**4.4 Project Introduction**
- Combined with L09: Accessibility Tree Analysis
- Part 1 (from L09): Inspect accessibility tree, document properties
- Part 2 (from L10): Navigate with screen reader, verify predictions, document findings

**4.5 Next Lesson Preview**
- L11: Screen Reader Navigation Patterns
- Advanced patterns: tables, forms, dialogs, live regions
- Building on the fundamentals from today

---

## Materials Needed

- Mac with VoiceOver (built-in)
- Windows machine or VM with NVDA installed
- iOS device with VoiceOver (Settings → Accessibility → VoiceOver)
- Android device with TalkBack (Settings → Accessibility → TalkBack) (optional, demo can suffice)
- Headphones for each student
- Two prepared test pages: one well-structured, one poorly-structured
- Screen reader shortcut reference card (handout), including mobile gestures
- Quiet testing environment (screen readers produce audio)

---

## Instructor Notes

### Common Student Questions

**Q: Do I need to learn both VoiceOver and NVDA?**
A: Learn whichever matches your primary machine first. VoiceOver for Mac users, NVDA for Windows. You should be familiar with both but proficient in one.

**Q: How do I stop VoiceOver from talking?**
A: Press Ctrl to pause speech immediately. Cmd+F5 turns it off completely. This is the most important shortcut to learn first.

**Q: Why does my keyboard stop working normally when NVDA is on?**
A: You're in browse mode, where keys are navigation shortcuts. Tab to a form field (entering focus mode) to type normally, or press Insert+Space to manually toggle to focus mode.

**Q: Do screen reader users really navigate by headings?**
A: Yes. WebAIM surveys consistently show that navigating by headings is the primary way screen reader users find content on a page.

**Q: Why don't mobile screen readers have focus mode?**
A: Mobile screen readers use a fundamentally different interaction model. Instead of a virtual cursor (browse mode) vs keyboard passthrough (focus mode), mobile users swipe through elements sequentially and double-tap to activate. The on-screen keyboard handles text input automatically. The Rotor (iOS) and Reading Controls (TalkBack) provide quick navigation without needing mode switching.

**Q: Do I need both an iOS and Android device?**
A: Ideally yes, but start with whichever you have. iOS VoiceOver is the more common mobile screen reader. If you only have one platform, the instructor demo of the other will cover the concepts. The gestures are very similar across both.

### Timing Adjustments

If running short:
- Reduce hands-on time in Sections 2.6 and 3.6
- Skip the poorly-structured page exercise (Section 3.6), explain verbally
- Shorten NVDA content if students primarily use Mac

If running long:
- Section 3 hands-on exercises can extend into self-paced practice
- Add time for students to explore additional pages with screen readers

### Classroom Setup Notes
- Ensure all Macs have VoiceOver enabled in System Settings → Accessibility
- Pre-install NVDA on Windows machines (free download)
- Provide wired headphones (Bluetooth may have latency issues)
- Test both demo pages before class
- Have backup audio setup in case of headphone issues

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L10: Screen Reader Fundamentals*
