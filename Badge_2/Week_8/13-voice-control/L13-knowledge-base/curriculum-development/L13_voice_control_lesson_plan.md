# L13: Voice Control - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2D.01, 2D.02, 2D.03

---

## Lesson Overview

This in-person lesson introduces voice control as an assistive technology category distinct from screen readers. Students learn how voice control users interact with digital interfaces by speaking commands, what design patterns create barriers for voice navigation, and how the Label in Name requirement ensures voice commands work reliably. The lesson emphasizes hands-on testing with macOS Voice Control (built into every Mac) so students experience the technology firsthand.

**Why This Matters:** Voice control is used by people with motor disabilities, repetitive strain injuries, temporary injuries, and situational limitations. Unlike screen reader users, voice control users can see the screen but cannot reliably use a mouse or keyboard. They rely on being able to speak the visible label of a control to activate it. When visible labels do not match accessible names, voice commands fail silently, leaving users unable to interact with the interface.

**Connection to Previous Lessons:** Voice control depends heavily on accessible names (L01) and the accessibility tree (L09). The Label in Name requirement (2.5.3) was introduced briefly in L01 but is explored in depth here as the core voice control success criterion. Like screen readers (L10-L11), voice control queries the accessibility tree, but the interaction model is fundamentally different: direct targeting by name rather than sequential navigation.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 2.5.3 | Label in Name | A | Visible text must be included in the accessible name |
| 4.1.2 | Name, Role, Value | A | All UI components must have programmatic names and roles |
| 1.1.1 | Non-text Content | A | Non-text content must have text alternatives |
| 2.4.6 | Headings and Labels | AA | Labels must be descriptive |
| 2.1.1 | Keyboard | A | All functionality must be keyboard accessible (voice sends keyboard events) |
| 1.3.1 | Info and Relationships | A | Structure and relationships must be programmatically determined |

---

## Content Outline

### Section 0: Introduction (3 min)
- Transition from screen readers and magnification to a new AT category: voice control
- Key distinction: voice control users can see the screen but cannot use a mouse or keyboard reliably
- Quick demo: show macOS Voice Control in action, say "click [button name]" to activate a control
- Today's agenda: how voice control works, common barriers, the Label in Name rule
- Lesson objectives display (2D.01, 2D.02, 2D.03)

### Section 1: How Voice Control Works (10 min)

**1.1 Voice Control Overview**
- Voice control allows users to operate their device entirely by speaking
- Primary tools: macOS Voice Control, Windows Voice Access, Dragon NaturallySpeaking, iOS Voice Control, Android Voice Access
- Core principle: the user says what they see, and the system activates it
- Voice control queries the accessibility tree to find matching elements

**1.2 Command Categories**

| Category | Example Commands | What Happens |
|----------|-----------------|--------------|
| Name-based | "click Submit," "click Search," "tap Menu" | Activates the element whose accessible name matches |
| Number overlay | "show numbers" then "click 5" | Numbers appear on all interactive elements for targeting |
| Grid overlay | "show grid" then "click 3-7" | A numbered grid overlays the screen for precise positioning |
| Text input | "type hello world" | Enters text into the focused field |
| Navigation | "scroll down," "go back," "open Safari" | System-level navigation commands |

**1.3 Name-Based Targeting (The Ideal Path)**
- "Click Submit" works when the button's accessible name includes "Submit"
- This is the fastest and most natural voice interaction
- When it works, voice control feels effortless
- When it fails, users must fall back to slower overlay methods

**1.4 Overlay Targeting (The Fallback)**
- "Show numbers" labels every interactive element with a number
- User must scan the screen to find the correct number, then say it
- Much slower and more cognitively demanding than name-based targeting
- Grid overlay is even more tedious: requires identifying grid coordinates
- These are fallbacks, not solutions

**1.5 Hands-on: Enable macOS Voice Control**
- System Settings > Accessibility > Voice Control
- Enable Voice Control
- Try basic commands: "click [button name]," "show numbers," "scroll down"
- Navigate to a familiar website and try interacting with it

**Key Message:** Voice control is built into every Mac and iPhone. The fastest path for voice users is name-based targeting, where they say what they see. Everything in this lesson is about making that path work reliably.

### Section 2: Voice Control Barriers (12 min)

**2.1 Barrier 1: Missing Accessible Names**
- Icon-only buttons (hamburger menu, close X, share icon) have no visible text and often no accessible name
- Voice users see the icon but have nothing to say to activate it
- "Show numbers" becomes the only option
- Fix: Provide accessible names for all interactive elements (connects to L01)

**2.2 Barrier 2: Label in Name Mismatch**
- The visible button text says "Search" but the accessible name is "Find products in our catalog"
- User says "click Search" but nothing happens because "Search" is not in the accessible name
- The user sees the button, knows what it does, but cannot activate it by voice
- This is the most frustrating barrier because the interface is visually clear but vocally broken

**2.3 Barrier 3: Duplicate Accessible Names**
- A page has five "Read more" links, three "Learn more" buttons
- User says "click Read more" and the system does not know which one to target
- Some voice control tools show numbered disambiguation ("Which Read more? 1, 2, 3, 4, 5")
- Fix: Use unique, descriptive accessible names ("Read more about pricing," "Read more about features")

**2.4 Barrier 4: Dynamic Content Without Stable Targets**
- Elements that appear on hover, animate into view, or change position make voice targeting unreliable
- Dropdown menus that disappear when the user speaks a command
- Carousel slides that move while the user is trying to target an element
- Fix: Ensure interactive elements are stable and persistently available

**2.5 Barrier 5: No Keyboard Support**
- Voice control sends keyboard events (Tab, Enter, Space, Arrow keys) to interact with elements
- Custom controls that only respond to mouse clicks or pointer events are invisible to voice control
- Drag-and-drop without keyboard alternatives is unusable
- Fix: Ensure all interactive elements are keyboard operable (connects to L05)

**2.6 Barrier 6: Complex Interactions Without Alternatives**
- Multi-finger gestures (pinch-to-zoom, two-finger scroll on specific areas)
- Long press interactions
- Hover-dependent content (tooltips that require mouse hover)
- Fix: Provide simple alternatives for complex interactions

**2.7 Hands-on: Find the Barriers**
- Open a prepared test page with deliberate voice control barriers
- Try to complete a task using only voice commands
- Document which elements you could not target and why
- Discuss findings as a class

**Key Message:** Six barrier patterns account for the vast majority of voice control issues. Designers who know these patterns can prevent them in their specifications.

### Section 3: Label in Name Deep Dive (12 min)

**3.1 What WCAG 2.5.3 Requires**
- When a UI component has visible text (or text in an image), the accessible name must include that text
- "Include" means the visible text appears somewhere in the accessible name
- Best practice: the accessible name should start with the visible text

**3.2 Examples: Pass and Fail**

| Visible Text | Accessible Name | Result | Why |
|-------------|-----------------|--------|-----|
| Search | Search | Pass | Exact match |
| Submit | Submit order | Pass | Starts with visible text |
| Close | Close dialog | Pass | Starts with visible text |
| Search | Find products in catalog | Fail | "Search" not in accessible name |
| Submit | Send form data | Fail | "Submit" not in accessible name |
| (icon only) | Menu | N/A | 2.5.3 only applies when there is visible text |

**3.3 How Accessible Name Calculation Works (Review)**
- Priority order: `aria-labelledby` > `aria-label` > native labeling (e.g., `<label>` element, `alt` attribute) > content (inner text)
- When `aria-label` overrides visible text, Label in Name failures occur
- Common cause: engineers add `aria-label` to "improve" the name without realizing it breaks voice control
- Designer responsibility: specify names that match or start with visible text

**3.4 Common Patterns Designers Should Watch**

**Expanded buttons:** Visible text "Search" with `aria-label="Search products and categories"`
- Fix: Use "Search products and categories" as visible text, or use `aria-label="Search"` to match

**Icon + text buttons:** Visible text "Settings" with `aria-label="Open settings panel"`  
- Fix: Use `aria-label="Settings"` or ensure the name starts with "Settings"

**Input labels:** Visible label "Email" with `aria-label="Enter your email address"`
- Fix: Use `aria-label="Email"` and put "Enter your email address" in placeholder or help text

**3.5 Hands-on: Inspect and Fix**
- Open browser developer tools (Accessibility Inspector)
- Inspect 5 interactive elements on a test page
- Compare visible text to the computed accessible name
- Identify any Label in Name failures
- Propose fixes for each failure

**3.6 Designer Workflow for Label in Name**
1. When you write a button label in your design, that becomes the baseline accessible name
2. If the accessible name needs to be different (for clarity), ensure it starts with the visible text
3. Add accessible name annotations to your design specs
4. During design review, verify that accessible names match or start with visible labels
5. During AT testing, test with voice control to verify name-based targeting works

**Key Message:** Label in Name is the bridge between visual design and voice control. What users see must match what they can say. Designers control the visible text and should specify accessible names that include it.

### Section 4: Summary and Assessment (8 min)

**4.1 Key Takeaways**
- Voice control users see the screen but interact by speaking commands
- Name-based targeting ("click [label]") is the ideal interaction path
- Six barrier patterns: missing names, Label in Name mismatch, duplicate names, dynamic content, no keyboard support, complex interactions
- Label in Name (WCAG 2.5.3) ensures visible labels work as voice commands
- Accessible names should start with the visible text

**4.2 The Designer's Role**
- You control the visible text (button labels, link text, form labels)
- You specify accessible names in your annotations
- Ensuring Label in Name compliance is a design decision, not an engineering decision
- Voice control testing validates your naming decisions

**4.3 Connection to Other AT**
- Voice control + screen readers: both need accessible names, but voice control needs them to match visible text
- Voice control + magnification: many users with motor disabilities use both
- Voice control + keyboard: voice sends keyboard events, so keyboard accessibility is a prerequisite

**4.4 Quiz Preview**
- 5 questions covering voice control navigation, barriers, and Label in Name

**4.5 Next Lesson Preview**
- L14: Windows High Contrast Mode
- How forced colors affect visual design
- Testing and designing for high contrast users

---

## Materials Needed

- Mac with Voice Control (built-in, System Settings > Accessibility > Voice Control)
- Headphones or quiet classroom environment (voice commands can interfere with each other)
- Prepared test pages with:
  - Well-labeled controls for basic voice control practice
  - Deliberate voice control barriers (icon-only buttons, Label in Name mismatches, duplicate names)
  - Form with labeled and unlabeled fields
- Browser developer tools for Accessibility Inspector demonstration
- Projector for instructor demonstrations
- Voice Control quick reference card with common commands

---

## Instructor Notes

### Common Student Questions

**Q: Doesn't voice control just work with any element on the screen?**
A: No. Voice control targets elements through the accessibility tree, not through visual recognition (although some newer tools like macOS Voice Control can use on-screen text recognition as a fallback). If an element lacks an accessible name, voice control cannot target it by name.

**Q: Why not just use "show numbers" for everything?**
A: "Show numbers" is a fallback that is significantly slower and more cognitively demanding than name-based targeting. Imagine having to say "show numbers" and then find and read a tiny number every time you want to click a button. It turns a one-step interaction into a multi-step process.

**Q: Is Label in Name really a Level A requirement?**
A: Yes. WCAG 2.5.3 Label in Name is Level A (the minimum conformance level). This means it applies to virtually every accessibility conformance claim. It was added in WCAG 2.1 specifically because voice control users were being blocked by name mismatches.

**Q: How is voice control different from voice assistants like Siri?**
A: Voice assistants (Siri, Alexa, Google Assistant) respond to natural language queries and commands. Voice control is specifically designed to operate the user interface: clicking buttons, typing text, scrolling pages. Voice control needs to know the exact names of elements; voice assistants interpret intent.

**Q: Do I need to test with Dragon NaturallySpeaking too?**
A: For this course, macOS Voice Control is sufficient. Dragon is the professional-grade voice control tool used in enterprise environments, but the principles are the same. If you can make your design work with macOS Voice Control, it will work with Dragon.

### Timing Adjustments

If running short:
- Reduce Section 2 to cover only barriers 1-3 (the most common)
- Combine the Section 2 and Section 3 hands-on exercises
- Skip the grid overlay demonstration in Section 1

If running long:
- Extend the Section 2 hands-on exercise into a more thorough audit
- Add a "design review" exercise where students review each other's accessible name annotations
- Allow students to test with both macOS Voice Control and iOS Voice Control for comparison

### Classroom Setup Notes
- Test macOS Voice Control on the instructor machine before class
- Ensure the classroom is reasonably quiet (voice commands from multiple students can conflict)
- Consider having students wear headphones or take turns for hands-on exercises
- Pre-build all test pages with deliberate barriers
- Have the Accessibility Inspector open in browser dev tools for the Label in Name section
- Print voice control command reference cards for students

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L13: Voice Control*
