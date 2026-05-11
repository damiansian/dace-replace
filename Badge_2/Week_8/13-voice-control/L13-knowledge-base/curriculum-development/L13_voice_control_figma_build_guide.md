# Lesson 13: Voice Control
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2D.01, 2D.02, 2D.03

---

## Source context

This lesson draws from established internal training materials, particularly:
- **Apple Voice Control documentation** (macOS and iOS voice control features)
- **Microsoft Voice Access documentation** (Windows 11 voice control)
- **WCAG 2.2 Understanding 2.5.3 Label in Name** (the core success criterion for voice control)
- **Accessible Name and Description Computation 1.2** (how browsers calculate accessible names)
- **Dragon NaturallySpeaking user documentation** (enterprise voice control reference)

Key pedagogical approach: **"Say what you see"**: the entire lesson revolves around the principle that voice control works best when users can speak the visible text of a control to activate it. Every design decision that breaks this connection creates a barrier.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | -- |
| 1. How Voice Control Works | 1.1-1.7 | 10 min | 2D.01 |
| 2. Voice Control Barriers | 2.1-2.8 | 12 min | 2D.02 |
| 3. Label in Name Deep Dive | 3.1-3.7 | 12 min | 2D.03 |
| 4. Summary and Assessment | 4.1-4.4 | 8 min | -- |

**Total frames:** 28

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#FF6B6B` (Define Badge coral)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- Include activity cues for hands-on exercises
- Use screenshots of macOS Voice Control with number overlay and name labels
- Include side-by-side "What you see / What voice control sees" comparisons
- Use code annotations to show accessible name calculations

---

## Learning objective pill component

Badge 2 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light coral (#FFE3E3) at 15% opacity
- Text: 12px, medium weight, "LO 2D.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 13`
- Title: `Voice Control`
- Subtitle: `Say What You See`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Lesson 13. We've spent the past several lessons with screen readers, which are used by people who cannot see the screen. Today we shift to a completely different assistive technology: voice control, used by people who can see the screen but cannot reliably use a mouse or keyboard. The core principle is simple: voice control works best when users can say what they see. Everything in this lesson is about making that work.

---

### Frame 0.2: Learning objectives reference

**Type:** Objectives overview

**Layout:** Vertical list with outcome codes

**Headline:** What you'll be able to do

**Intro text:**
By the end of this lesson, you'll be able to:

**Objectives list:**

| Code | Objective |
|------|-----------|
| 2D.01 | Navigate digital interfaces using voice control commands |
| 2D.02 | Identify design patterns that create barriers for voice control users |
| 2D.03 | Apply Label in Name requirements to ensure voice commands match visible text |

**Visual elements:**
- Three outcome pills in Define coral (#FFE3E3)
- Connection note: "Builds on: L01 Accessible Names, L09 Accessibility Tree"

**Speaker notes:**
Three outcomes today. First, you'll actually use voice control so you understand the experience. Second, you'll learn the six design patterns that break voice control. Third, you'll master the Label in Name rule, WCAG 2.5.3, which is the single most important criterion for voice control accessibility. This connects directly back to L01 where we introduced accessible names.

---

## Frame 1: How Voice Control Works

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Full-bleed coral background with section title

**Content:**
- Section number: `01`
- Title: `How Voice Control Works`
- Subtitle: `From speech to action`
- LO pill: `LO 2D.01`

**Speaker notes:**
Let's start with what voice control actually is and how it works under the hood. This is different from voice assistants like Siri. Voice control is specifically designed to operate the user interface.

---

### Frame 1.2: What is voice control?

**Type:** Content frame

**Layout:** Left text, right illustration

**Headline:** Voice control is an input method, not a screen reader

**Content:**
- Left column:
  - Voice control users can see the screen
  - They speak commands to interact: "click Submit," "type hello," "scroll down"
  - Used by people with motor disabilities, RSI, temporary injuries, situational limitations
  - Available on every major platform: macOS, Windows, iOS, Android
- Right column:
  - Illustration: Person speaking to a laptop, speech bubble showing "click Submit," button on screen highlighting

**Speaker notes:**
Voice control is fundamentally different from screen readers. Screen reader users cannot see the screen and need everything read aloud. Voice control users can see the screen perfectly well, but they cannot reliably use a mouse or keyboard. Maybe they have a motor disability, maybe they have repetitive strain injury, maybe their hands are occupied. They speak commands to interact with what they see.

---

### Frame 1.3: Voice control tools

**Type:** Content frame

**Layout:** Grid of tool cards

**Headline:** Voice control across platforms

**Content:**
- Grid of 5 tool cards:

| Tool | Platform | Built-in | Key Feature |
|------|----------|----------|-------------|
| Voice Control | macOS | Yes | On-screen text recognition, number overlay |
| Voice Access | Windows 11 | Yes | Number overlay, grid overlay |
| Dragon NaturallySpeaking | Windows | No (paid) | Most powerful, enterprise standard |
| Voice Control | iOS | Yes | Touch-based voice interaction |
| Voice Access | Android | Yes | Number overlay for mobile |

**Speaker notes:**
The good news is that voice control is built into every Mac, every iPhone, every Windows 11 PC, and every Android device. Dragon NaturallySpeaking is the professional-grade option that has been around for decades. For this class, we'll use macOS Voice Control because it's available on every Mac in the room. The principles are the same across all these tools.

---

### Frame 1.4: How voice commands work

**Type:** Content frame

**Layout:** Flow diagram

**Headline:** Three targeting methods

**Content:**
- Three-column comparison:

**Name-based (fastest):**
1. User says "click Submit"
2. Voice control queries accessibility tree
3. Finds element with name "Submit"
4. Activates it
- Speed: Instant
- Cognitive load: Low

**Number overlay (fallback):**
1. User says "show numbers"
2. Numbers appear on all interactive elements
3. User finds the right number
4. User says "click 7"
- Speed: Slow
- Cognitive load: Medium

**Grid overlay (last resort):**
1. User says "show grid"
2. Numbered grid covers screen
3. User identifies grid cell
4. User says "click 3-7"
- Speed: Very slow
- Cognitive load: High

**Speaker notes:**
Voice control has three ways to target elements, and they range from fast and natural to slow and tedious. Name-based targeting is the ideal: you say the button name and it activates. Number overlay is the fallback for when names don't work: numbers appear on everything and you say the number. Grid overlay is the last resort for precise pointer positioning. Our goal as designers is to make name-based targeting work for everything, so users never need the fallbacks.

---

### Frame 1.5: The accessibility tree connection

**Type:** Content frame

**Layout:** Diagram

**Headline:** Voice control reads the accessibility tree

**Content:**
- Diagram showing:
  - Design mockup (visual layer) with button labeled "Search"
  - Arrow down to DOM with `<button aria-label="Find products">Search</button>`
  - Arrow down to Accessibility tree: Name: "Find products," Role: button
  - Arrow to Voice Control: User says "click Search" -> looks for "Search" in accessibility tree -> "Find products" does not match -> command fails
- Red highlight on the mismatch between visible "Search" and accessible name "Find products"

**Speaker notes:**
Here's the critical connection. Voice control does not do image recognition on the screen (although macOS has some fallback for this). It queries the accessibility tree, the same tree screen readers use. When the user says "click Search," voice control looks through the accessibility tree for an element whose accessible name includes "Search." If the accessible name is "Find products" instead of "Search," the command fails. The user sees "Search" but cannot activate it by saying "Search." This is the fundamental voice control accessibility problem.

---

### Frame 1.6: Hands-on: Enable voice control

**Type:** Activity frame

**Layout:** Step-by-step instructions with screenshot

**Headline:** Try it: Enable macOS Voice Control

**Content:**
- Steps:
  1. Open System Settings > Accessibility > Voice Control
  2. Turn on Voice Control
  3. Try: "click [any button name on screen]"
  4. Try: "show numbers" then "click [number]"
  5. Try: "scroll down"
  6. Navigate to a familiar website and try completing a task
- Activity time: 3 minutes
- Classroom note: Headphones recommended, or take turns

**Speaker notes:**
Let's try it. Open System Settings, go to Accessibility, then Voice Control. Turn it on. You'll see a small microphone indicator. Try clicking some buttons by saying their names. Then try "show numbers" to see the overlay. Then try navigating a real website. Notice what works and what doesn't. We'll come back together in a few minutes.

---

### Frame 1.7: Checkpoint: How Voice Control Works

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: How Voice Control Works

**Body text:**
Before learning the six barrier patterns, verify you understand these basics:

**Checklist:**
- [ ] I understand that voice control is an input method for people who can see the screen but cannot reliably use mouse or keyboard
- [ ] I know the three targeting methods: name-based (fastest), number overlay (fallback), and grid overlay (last resort)
- [ ] I understand that voice control reads the accessibility tree, not the visual screen
- [ ] I know that when visible text and accessible name differ, name-based targeting fails
- [ ] I have tried enabling and using voice control on at least one platform

**Outcome badge:** `LO 2D.01`

**Learning outcome card (right side):**
- Body: `This checkpoint maps to Outcome 2D.01: Navigate digital interfaces using voice control commands.`

**Speaker notes:**
Quick self-check. Everyone should have tried voice control by now. If anyone is unsure about the accessibility tree connection or the three targeting methods, address it before we move into the six barrier patterns.

---

## Frame 2: Voice Control Barriers

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Full-bleed coral background with section title

**Content:**
- Section number: `02`
- Title: `Voice Control Barriers`
- Subtitle: `Six patterns that break voice targeting`
- LO pill: `LO 2D.02`

**Speaker notes:**
Now that you've experienced voice control, let's look at the six design patterns that create the most problems. These patterns account for the vast majority of voice control accessibility issues, and they are all preventable through design decisions.

---

### Frame 2.2: Barrier 1: Missing accessible names

**Type:** Content frame

**Layout:** Left text, right example

**Headline:** Barrier 1: Missing accessible names

**Content:**
- Left column:
  - Icon-only buttons (hamburger, close X, share, heart) have no visible text
  - Without an accessible name, voice control has nothing to match
  - User must fall back to "show numbers"
  - Fix: Always provide accessible names for interactive elements
- Right column:
  - Example: Row of icon buttons (hamburger, search, cart, profile)
  - "Show numbers" overlay with numbers on each
  - Callout: "Without accessible names, voice users must use number overlay for every interaction"

**Speaker notes:**
Barrier one: missing accessible names. This should sound familiar from L01. Icon-only buttons are the most common culprit. A hamburger menu icon, a close X, a share icon: none of these have visible text. If they also lack accessible names in the code, voice control users cannot target them by name at all. "Show numbers" becomes the only option, and that is like having to look up every button in a reference guide before you can click it.

---

### Frame 2.3: Barrier 2: Label in Name mismatch

**Type:** Content frame

**Layout:** Two-panel comparison

**Headline:** Barrier 2: Label in Name mismatch

**Content:**
- Left panel (What the user sees):
  - Button with visible text: "Search"
  - User says: "click Search"
- Right panel (What voice control sees):
  - Accessible name: "Find products in our catalog"
  - Voice control looks for "Search" in "Find products in our catalog"
  - Result: No match, command fails
- Bottom callout: "The user sees 'Search,' says 'Search,' but it doesn't work. The most frustrating voice control barrier."
- WCAG reference: "2.5.3 Label in Name (Level A)"

**Speaker notes:**
Barrier two is the most frustrating for voice users. The button clearly says "Search." The user says "click Search." Nothing happens. Why? Because someone added an aria-label of "Find products in our catalog" to the button, and the word "Search" does not appear in that label. The user can see exactly what they want to click but cannot activate it. This is a WCAG 2.5.3 Label in Name violation, Level A.

---

### Frame 2.4: Barrier 3: Duplicate accessible names

**Type:** Content frame

**Layout:** Card layout with callout

**Headline:** Barrier 3: Duplicate accessible names

**Content:**
- Example: Three cards showing products, each with a "Learn more" button
- User says "click Learn more"
- Disambiguation dialog appears: "Which 'Learn more'? 1, 2, or 3"
- Fix examples:
  - "Learn more about Photoshop"
  - "Learn more about Illustrator"  
  - "Learn more about InDesign"

**Speaker notes:**
Three "Learn more" buttons on the same page. The user says "click Learn more" and the system doesn't know which one they mean. Voice control shows a disambiguation prompt with numbered options. This adds extra steps and cognitive load. The fix is simple: use unique, descriptive accessible names. "Learn more about Photoshop," "Learn more about Illustrator." Same visual design, better accessibility.

---

### Frame 2.5: Barrier 4: Dynamic content

**Type:** Content frame

**Layout:** Before/after with timing

**Headline:** Barrier 4: Dynamic content without stable targets

**Content:**
- Examples:
  - Dropdown menu that appears on hover and disappears when user speaks
  - Carousel that auto-advances while user tries to target a slide
  - Tooltip content that requires hover to see
  - Loading spinner that replaces content temporarily
- Key principle: Interactive elements must be stable and persistently available
- Fix: Use click-triggered menus, pause carousels, provide alternatives to hover-dependent content

**Speaker notes:**
Voice control requires a moment to process speech. If a dropdown menu appears on hover and disappears when the user speaks, they can never target items in that menu. Carousels that auto-advance move targets while the user is trying to speak. Tooltips that require hover are invisible to someone who does not use a mouse. The fix is to make interactive elements stable: click-triggered menus, pauseable carousels, and visible alternatives to hover content.

---

### Frame 2.6: Barriers 5 and 6: Keyboard and complexity

**Type:** Content frame

**Layout:** Two-column

**Headline:** Barriers 5 and 6: No keyboard support and complex interactions

**Content:**
- Left column (Barrier 5: No keyboard support):
  - Voice control sends keyboard events (Tab, Enter, Space, arrows)
  - Custom controls that only respond to mouse events are invisible
  - If it's not keyboard accessible, it's not voice accessible
  - Connects to L05: Keyboard and Touch
- Right column (Barrier 6: Complex interactions):
  - Drag-and-drop without alternatives
  - Multi-finger gestures (pinch-to-zoom on specific areas)
  - Long press interactions
  - Hover-dependent content
  - Fix: Provide simple alternatives for every complex interaction

**Speaker notes:**
Barriers five and six are related. Voice control sends keyboard events under the hood, so if a control isn't keyboard accessible, it's not voice accessible either. This connects back to L05. And complex interactions like drag-and-drop or multi-finger gestures have no direct voice equivalent. The solution is the same: provide simple, keyboard-accessible alternatives for every interaction.

---

### Frame 2.7: Hands-on: Find the barriers

**Type:** Activity frame

**Layout:** Instructions with checklist

**Headline:** Activity: Voice control barrier hunt

**Content:**
- Instructions:
  1. Open the test page [URL]
  2. Turn on Voice Control
  3. Try to complete the task: "Create an account and search for a product"
  4. For each barrier you encounter, note:
     - What you tried to say
     - What happened (or didn't happen)
     - Which barrier pattern it matches (1-6)
- Activity time: 5 minutes
- Debrief: Share findings with the class

**Speaker notes:**
Time for another hands-on exercise. Open the test page. Turn on Voice Control and try to complete the task using only your voice. When something doesn't work, write down what you tried, what happened, and which of the six barrier patterns it matches. We'll debrief as a class.

---

### Frame 2.8: Checkpoint: Voice Control Barriers

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Voice Control Barriers

**Body text:**
Before diving into Label in Name, verify you can identify the six barrier patterns:

**Checklist:**
- [ ] I can name Barrier 1: missing accessible names (e.g. icon-only buttons)
- [ ] I can name Barrier 2: Label in Name mismatch (visible text not in accessible name)
- [ ] I can name Barrier 3: duplicate accessible names (e.g. multiple "Learn more" buttons)
- [ ] I can name Barrier 4: dynamic content without stable targets (hover menus, auto-advancing carousels)
- [ ] I can name Barriers 5 and 6: no keyboard support, and complex interactions without simple alternatives
- [ ] I understand that if it is not keyboard accessible, it is not voice accessible

**Outcome badge:** `LO 2D.02`

**Learning outcome card (right side):**
- Body: `This checkpoint maps to Outcome 2D.02: Identify design patterns that create barriers for voice control users.`

**Speaker notes:**
Checkpoint before Label in Name. Students should be able to list and recognize the six barrier patterns. If anyone is fuzzy on any of them, briefly recap before moving to the WCAG 2.5.3 deep dive.

---

## Frame 3: Label in Name Deep Dive

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Full-bleed coral background with section title

**Content:**
- Section number: `03`
- Title: `Label in Name Deep Dive`
- Subtitle: `WCAG 2.5.3: The voice control criterion`
- LO pill: `LO 2D.03`

**Speaker notes:**
Label in Name is the single most important WCAG success criterion for voice control. Let's dive into exactly what it requires, look at common pass/fail examples, and learn how to inspect and fix Label in Name issues.

---

### Frame 3.2: What WCAG 2.5.3 requires

**Type:** Content frame

**Layout:** Large text with rule box

**Headline:** WCAG 2.5.3 Label in Name (Level A)

**Content:**
- Rule box:
  - "For user interface components with labels that include text or images of text, the name contains the text that is presented visually."
  - In plain language: **If a control has visible text, the accessible name must include that text.**
- Key details:
  - Level A: minimum conformance, applies to virtually everything
  - Added in WCAG 2.1 specifically for voice control users
  - Best practice: accessible name should **start with** the visible text
  - Applies to: buttons, links, inputs, any component with visible text and an accessible name

**Speaker notes:**
Here's the actual WCAG text. "For user interface components with labels that include text or images of text, the name contains the text that is presented visually." In plain language: if a user can see text on a control, that text must be part of the accessible name. This is Level A, the most basic level. It was added in WCAG 2.1 because voice control users were being blocked by name mismatches. Best practice is that the accessible name should start with the visible text, not just include it somewhere.

---

### Frame 3.3: Pass and fail examples

**Type:** Content frame

**Layout:** Table with pass/fail indicators

**Headline:** Label in Name: Pass and fail

**Content:**
- Table:

| Visible Text | Accessible Name | Result | Reason |
|-------------|-----------------|--------|--------|
| Search | Search | Pass | Exact match |
| Submit | Submit order | Pass | Starts with visible text |
| Close | Close dialog | Pass | Starts with visible text |
| Search | Find products in catalog | Fail | "Search" not in name |
| Submit | Send form data | Fail | "Submit" not in name |
| Read more | Learn about features | Fail | "Read more" not in name |
| (icon only) | Menu | N/A | 2.5.3 only applies when there is visible text |

**Speaker notes:**
Let's look at concrete examples. "Search" with accessible name "Search" is a pass. "Submit" with accessible name "Submit order" is a pass because it starts with the visible text. "Close" with "Close dialog" is a pass. But "Search" with "Find products in catalog" fails because "Search" doesn't appear in the accessible name at all. Notice the last row: if there's no visible text (icon-only buttons), 2.5.3 doesn't apply. But those buttons still need accessible names for other reasons, like screen readers and the number overlay.

---

### Frame 3.4: Common designer patterns

**Type:** Content frame

**Layout:** Three pattern examples

**Headline:** Watch these patterns

**Content:**
- Pattern 1: Expanded buttons
  - Visual: "Search" button
  - Wrong: `aria-label="Search products and categories"`
  - Right: `aria-label="Search"` (or "Search products and categories" with "Search" as visible text expanded)
  
- Pattern 2: Icon + text buttons
  - Visual: Settings icon + "Settings" text
  - Wrong: `aria-label="Open settings panel"`
  - Right: `aria-label="Settings"` or "Settings panel"

- Pattern 3: Form labels
  - Visual: "Email" label above input
  - Wrong: `aria-label="Enter your email address"`
  - Right: Use the `<label>` element programmatically associated with the input

**Speaker notes:**
These are the three most common patterns where Label in Name breaks. Engineers sometimes add aria-label to "improve" the accessible name without realizing they're breaking voice control. The first pattern: a Search button where the aria-label says something completely different. The fix is to either match the visible text or expand it while starting with the visible text. The second pattern: icon-plus-text buttons where the aria-label ignores the visible text. The third: form labels where aria-label overrides the visual label.

---

### Frame 3.5: Hands-on: Inspect and fix

**Type:** Activity frame

**Layout:** Step-by-step with dev tools screenshot

**Headline:** Activity: Inspect accessible names

**Content:**
- Steps:
  1. Open browser developer tools (right-click > Inspect)
  2. Open the Accessibility panel/tab
  3. Click on 5 interactive elements on the test page
  4. For each, compare:
     - Visible text on screen
     - Computed accessible name in the Accessibility panel
  5. Identify any mismatches (Label in Name failures)
  6. Propose a fix for each failure
- Activity time: 5 minutes

**Speaker notes:**
Open your browser dev tools. Go to the Accessibility panel. Click on five different interactive elements on the test page and compare what you see on screen to what the accessibility inspector reports as the accessible name. If they don't match, that's a Label in Name failure. Write down the mismatch and propose a fix. This is a skill you'll use in every design review.

---

### Frame 3.6: Designer workflow for Label in Name

**Type:** Content frame

**Layout:** Numbered workflow steps

**Headline:** Your Label in Name workflow

**Content:**
1. **Design the visible label** (this is your baseline accessible name)
2. **If the accessible name must differ**, ensure it starts with the visible text
3. **Annotate accessible names** in your design specs (so engineers know the intent)
4. **During review**, check that accessible names include visible labels
5. **During testing**, test with voice control to verify name-based targeting

- Bottom callout: "What you write in your design becomes what voice users say. Own that connection."

**Speaker notes:**
Here's your workflow as a designer. Step one: the visible label you write in your design IS the baseline accessible name. Step two: if the accessible name needs to be different for clarity, make sure it starts with the visible text. Step three: annotate this in your design specs so engineers implement it correctly. Step four: during design review, check that names match. Step five: test with voice control. What you write in your design becomes what voice users say. You own that connection.

---

### Frame 3.7: Checkpoint: Label in Name Deep Dive

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Label in Name Deep Dive

**Body text:**
Before completing this lesson, verify you understand WCAG 2.5.3 and your design workflow:

**Checklist:**
- [ ] I can state WCAG 2.5.3 Label in Name (Level A) in plain language: visible text must be included in the accessible name
- [ ] I can identify pass vs fail examples (e.g. "Search" / "Submit order" passes; "Search" / "Find products" fails)
- [ ] I know the three common designer patterns that break Label in Name (expanded buttons, icon+text buttons, form labels with aria-label override)
- [ ] I can use browser dev tools Accessibility panel to compare visible text to computed accessible name
- [ ] I know my workflow: design visible label as baseline, annotate names in specs, check during review, test with voice control

**Outcome badge:** `LO 2D.03`

**Learning outcome card (right side):**
- Body: `This checkpoint maps to Outcome 2D.03: Apply Label in Name requirements to ensure voice commands match visible text.`

**Speaker notes:**
Final content checkpoint. Students should now understand 2.5.3, recognize pass/fail examples, know the high-risk patterns, and have a clear workflow. This connects back to L01 accessible names and sets them up for the assessment and L14.

---

## Frame 4: Summary and Assessment

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Full-bleed coral background with section title

**Content:**
- Section number: `04`
- Title: `Summary and Assessment`
- Subtitle: `Key takeaways and next steps`

**Speaker notes:**
Let's bring it all together. We covered a lot of ground today: voice control as a technology, the six barrier patterns, and the Label in Name deep dive.

---

### Frame 4.2: Key takeaways

**Type:** Content frame

**Layout:** Summary grid

**Headline:** Key takeaways

**Content:**
- Five key points in visual boxes:
  1. **Voice control users see the screen** but interact by speaking commands
  2. **Name-based targeting is the ideal path**: users say what they see
  3. **Six barrier patterns**: missing names, Label in Name mismatch, duplicate names, dynamic content, no keyboard, complex interactions
  4. **WCAG 2.5.3 Label in Name (Level A)**: visible text must be included in the accessible name
  5. **Designers control the visible text**: your labels become voice commands

**Speaker notes:**
Five things to remember from today. One: voice control users see the screen. Two: name-based targeting is the ideal path, and everything we do should support it. Three: six barrier patterns account for most voice control issues, and they're all preventable. Four: WCAG 2.5.3 is Level A, meaning it's a baseline requirement. Five: you as the designer control the visible text that becomes voice commands. Own that responsibility.

---

### Frame 4.3: Assessment overview

**Type:** Content frame

**Layout:** Assessment details

**Headline:** Assessment

**Content:**
- Knowledge Check Quiz: 5 questions, 5 points, auto-graded
  - Covers: voice control navigation, barrier identification, Label in Name
- Applied Practice: Combined with L14 (Windows High Contrast Mode)
  - Test designs using voice control and high contrast mode
  - Document findings with recommendations

**Speaker notes:**
You'll have a five-question quiz covering today's material. The applied practice assignment is combined with L14, where you'll test designs using both voice control and Windows High Contrast Mode.

---

### Frame 4.4: Up next

**Type:** Content frame

**Layout:** Preview card

**Headline:** Up next: Lesson 14

**Content:**
- Title: "Windows High Contrast Mode"
- Preview: How forced colors affect visual design, testing with high contrast mode, designing for forced colors compatibility
- Connection: Like voice control, high contrast mode reveals how design decisions affect users with specific needs. Both tools are essential parts of your AT testing toolkit.

**Speaker notes:**
Next lesson is Windows High Contrast Mode. We'll shift from voice-based interaction to visual-based accessibility. High contrast mode forces the operating system's color scheme onto your design, and if your visual hierarchy depends on custom colors, it can break. Same testing mindset, different tool, different user population.

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L13: Voice Control*
