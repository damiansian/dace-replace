# Lesson 10: Screen Reader Fundamentals
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2B.01, 2B.02, 2B.03

---

## Source context

This lesson draws from established internal training materials, particularly:
- **WebAIM Screen Reader User Surveys** (navigation patterns and preferences)
- **Deque University Screen Reader Fundamentals**
- **Design System Accessibility Training: "Using the DOM to be a Human Screen Reader"** (continued from L09)

Key pedagogical approach: **"Hear what you've been seeing"**: designers now experience the accessibility tree they analyzed in L09 through actual screen reader output. This transforms conceptual understanding into practical empathy.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | -- |
| 1. Getting Started with Screen Readers | 1.1-1.9 | 12 min | 2B.01 |
| 2. Browse Mode vs Focus Mode | 2.1-2.9 | 11 min | 2B.02 |
| 3. Quick Navigation | 3.1-3.9 | 11 min | 2B.03 |
| 4. Summary and Assessment | 4.1-4.6 | 8 min | -- |

**Total frames:** 35

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#FF6B6B` (Define Badge coral)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- Include activity cues for hands-on exercises
- Include screen reader shortcut reference on activity frames
- Audio icon indicators for "this is what you'll hear" moments

---

## Learning objective pill component

Badge 2 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light coral (#FFE3E3) at 15% opacity
- Text: 12px, medium weight, "LO 2B.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 10`
- Title: `Screen Reader Fundamentals`
- Subtitle: `Hearing What You've Been Seeing`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Lesson 10. Last week in L09, you learned to see interfaces the way the machine sees them by inspecting the accessibility tree. Today you'll hear it. We're turning on screen readers and navigating real web content. This is the most transformative skill in the Define Badge.

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
| 2B.01 | Navigate pages using VoiceOver and NVDA: Demonstrate basic screen reader navigation on web content |
| 2B.02 | Distinguish browse mode vs focus mode: Explain when and why screen readers switch between reading and interaction modes |
| 2B.03 | Use quick navigation for headings, landmarks, and links: Navigate efficiently using screen reader element lists and shortcuts |

**Connection callout:**
This builds directly on L09. You analyzed accessibility tree properties (name, role, state, value) using dev tools. Now you'll hear those same properties announced by a screen reader.

**Speaker notes:**
Three hands-on outcomes. Today is about doing, not just understanding. Everyone will have a screen reader running on their machine by the end of this lesson.

---

# Section 1: Getting Started with Screen Readers
## Duration: 10 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Getting Started with Screen Readers`

---

### Frame 1.2: From tree to speech

**Type:** Process diagram

**Layout:** Horizontal flow diagram connecting L09 to L10

**Headline:** The accessibility tree becomes speech

**Diagram:**
```
L09: You see this          L10: Users hear this
┌──────────────┐           ┌──────────────┐
│ Name: Search │    →      │ "Search,     │
│ Role: button │    →      │  button"     │
│ State: none  │           │              │
└──────────────┘           └──────────────┘
```

Visual: Left side shows Chrome DevTools accessibility panel (from L09). Right side shows audio waveform/speaker icon with the spoken text.

**Key insight callout:**
Screen readers announce the same four properties you learned to inspect: Name + Role + State + Value. Now you'll hear them.

**Speaker notes:**
This is the bridge between L09 and L10. Everything you inspected in the accessibility tree is what the screen reader announces. The accessibility panel showed you "Name: Search, Role: button." The screen reader says "Search, button." Same data, different output channel.

---

### Frame 1.3: What is a screen reader?

**Type:** Definition with statistics

**Layout:** Left definition, right usage stats

**Headline:** Screen readers: translating interfaces into sound

**Definition:**
A screen reader is software that:
- Reads the accessibility tree aloud (not the visual display)
- Converts visual information into speech or braille output
- Provides keyboard-based navigation commands
- Enables people who are blind or have low vision to use computers

**Usage statistics (from WebAIM survey):**
- VoiceOver: ~35% of screen reader users
- NVDA: ~30% of screen reader users
- JAWS: ~30% of screen reader users
- Other: ~5%

**Key insight callout:**
Screen readers read the accessibility tree, not your visual design. If the tree is wrong (as we learned in L09), the screen reader experience will be wrong.

**Speaker notes:**
Notice the diversity of screen reader usage. No single screen reader dominates, which is why we cover both VoiceOver and NVDA. Each has different interaction patterns, but they all read the same accessibility tree.

---

### Frame 1.4: VoiceOver essentials

**Type:** Reference card

**Layout:** Two-column shortcut reference

**Headline:** VoiceOver (macOS): Essential commands

**Badge:** `Mac Users`

**Left column: Getting started**

| Action | Shortcut |
|--------|----------|
| Turn on/off | Cmd+F5 |
| VO modifier | Ctrl+Option |
| Stop speaking | Ctrl |

**Right column: Navigation**

| Action | Shortcut |
|--------|----------|
| Next element | VO+Right Arrow |
| Previous element | VO+Left Arrow |
| Activate element | VO+Space |
| Web Rotor | VO+U |

**Callout:**
VO = Ctrl+Option. All VoiceOver commands start with this modifier.

**Demo instruction badge:** `LIVE DEMO: Turn on VoiceOver now`

**Speaker notes:**
Live demo: Turn on VoiceOver with Cmd+F5. Navigate through a simple page. Show the VO cursor highlighting. Press Ctrl to stop speech. Turn it off with Cmd+F5 again. Key point: Ctrl is your panic button. It stops VoiceOver from talking.

---

### Frame 1.5: NVDA essentials

**Type:** Reference card

**Layout:** Two-column shortcut reference

**Headline:** NVDA (Windows): Essential commands

**Badge:** `Windows Users`

**Left column: Getting started**

| Action | Shortcut |
|--------|----------|
| Start NVDA | Ctrl+Alt+N |
| Quit NVDA | Insert+Q |
| NVDA modifier | Insert |
| Stop speaking | Ctrl |

**Right column: Navigation**

| Action | Shortcut |
|--------|----------|
| Next line | Down Arrow |
| Previous line | Up Arrow |
| Activate element | Enter or Space |
| Elements List | Insert+F7 |

**Callout:**
NVDA uses the Insert key as its modifier. In browse mode, arrow keys navigate through content.

**Speaker notes:**
For Windows users: NVDA is free and open source. Start it with Ctrl+Alt+N. The Insert key is your modifier. Down/Up arrows read through content line by line. Like VoiceOver, Ctrl stops speech immediately.

---

### Frame 1.6: iOS VoiceOver essentials

**Type:** Reference card

**Layout:** Two-column gesture reference

**Headline:** iOS VoiceOver: Essential gestures

**Badge:** `iPhone / iPad Users`

**Left column: Getting started**

| Action | Gesture |
|--------|---------|
| Turn on/off | Settings → Accessibility → VoiceOver (or triple-click Side button) |
| Stop speaking | Two-finger tap |

**Right column: Navigation**

| Action | Gesture |
|--------|---------|
| Next element | Swipe right |
| Previous element | Swipe left |
| Activate element | Double-tap |
| Rotor | Two-finger twist |
| Navigate by Rotor type | Swipe up / swipe down |

**Callout:**
iOS VoiceOver is essentially browse mode only. There is no separate focus mode. All navigation is gesture-based. The Rotor replaces keyboard shortcuts for quick navigation.

**Speaker notes:**
iOS VoiceOver uses a completely different interaction model from desktop. Instead of a keyboard, you use touch gestures. Swipe right to move forward, swipe left to move back, double-tap to activate. The Rotor is the key power feature: twist two fingers like turning a dial to select a navigation type (headings, links, landmarks), then swipe up/down to jump between elements of that type. This is the mobile equivalent of pressing H on NVDA.

---

### Frame 1.7: TalkBack essentials

**Type:** Reference card

**Layout:** Two-column gesture reference

**Headline:** TalkBack (Android): Essential gestures

**Badge:** `Android Users`

**Left column: Getting started**

| Action | Gesture |
|--------|---------|
| Turn on/off | Settings → Accessibility → TalkBack (or hold both volume keys) |
| Stop speaking | Two-finger tap |

**Right column: Navigation**

| Action | Gesture |
|--------|---------|
| Next element | Swipe right |
| Previous element | Swipe left |
| Activate element | Double-tap |
| Reading Controls | Swipe up then down (or down then up) to cycle navigation type |
| Navigate by type | Swipe right / swipe left (after selecting type) |

**Callout:**
TalkBack, like iOS VoiceOver, is essentially browse mode only. Reading Controls are TalkBack's equivalent of the iOS Rotor for navigating by element type.

**Speaker notes:**
TalkBack's basic gestures are nearly identical to iOS VoiceOver: swipe right/left to navigate, double-tap to activate. The key difference is how you access quick navigation. Instead of the Rotor twist gesture, TalkBack uses swipe up-then-down (or down-then-up) to cycle through navigation types like headings, links, and controls. Once selected, swiping right/left jumps to the next/previous element of that type.

---

### Frame 1.8: What you'll hear

**Type:** Announcement examples with audio icons

**Layout:** Table with element types and expected announcements

**Headline:** Screen reader announcements follow a pattern

**Examples table:**

| Element | VoiceOver announces | NVDA announces |
|---------|--------------------|----|
| Button | "Submit, button" | "Submit, button" |
| Link | "Home page, link" | "Home page, link" |
| Heading | "Products, heading level 2" | "Heading level 2, Products" |
| Text field | "Email, edit text" | "Email, edit, has auto complete" |
| Checkbox | "Remember me, checkbox, not checked" | "Remember me, checkbox, not checked" |
| Disabled button | "Submit, dimmed, button" | "Submit, button, unavailable" |

**Key pattern callout:**
Pattern: **Name + Role + State**
The same properties from the accessibility tree (L09), now spoken aloud. Note: announcement order varies between screen readers.

**Speaker notes:**
Notice the pattern. Every announcement includes the name, role, and relevant state. VoiceOver and NVDA phrase things slightly differently, but the core information is the same. A disabled button is "dimmed" in VoiceOver and "unavailable" in NVDA. Both convey the same meaning.

---

### Frame 1.9: Checkpoint: Getting started

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Getting started

**Body text:**
Before exploring navigation modes, verify you understand these basics:

**Checklist:**
- [ ] I can turn on a screen reader on at least one platform (desktop or mobile)
- [ ] I know the modifier key (desktop) or basic gestures (mobile) for my screen reader
- [ ] I can navigate to the next and previous element
- [ ] I can stop speech (Ctrl on desktop, two-finger tap on mobile)
- [ ] I understand that screen readers announce Name + Role + State from the accessibility tree
- [ ] I understand that mobile screen readers are essentially browse mode only

**Outcome badge:** `2B.01`

**Speaker notes:**
Quick self-check. Everyone should have their screen reader turned on at least once by now. If anyone is still struggling with basic on/off, address it now before we move into mode concepts.

---

# Section 2: Browse Mode vs Focus Mode
## Duration: 12 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Browse Mode vs Focus Mode`

---

### Frame 2.2: Two ways to navigate

**Type:** Conceptual comparison

**Layout:** Two-column with book/form analogy

**Headline:** Two navigation modes for two purposes

**Left column:**
- Heading: `Browse Mode`
- Subhead: `Reading and scanning`
- Icon: Open book
- Description: Navigate through ALL content: headings, text, images, links, everything
- Arrow keys: Move between content elements
- Single-key shortcuts: Active (H, K, D, etc.)
- Analogy: Reading a book page by page

**Right column:**
- Heading: `Focus Mode`
- Subhead: `Interacting with controls`
- Icon: Form/keyboard
- Description: Interact with form fields and widgets: type text, select options, operate controls
- Arrow keys: Control the widget (e.g., select dropdown option)
- Single-key shortcuts: Disabled (keys go to the control)
- Analogy: Filling out a form on paper

**Speaker notes:**
This is one of the most important concepts in screen reader operation. Browse mode is for reading. Focus mode is for interacting. The screen reader switches between them automatically, but understanding why is crucial for designers.

---

### Frame 2.3: Browse mode in detail

**Type:** Annotated demonstration

**Layout:** Page content with browse mode navigation overlay

**Headline:** Browse mode: reading through content

**Visual:** Web page with numbered elements showing navigation order:
1. Banner landmark: "Adobe site, banner"
2. Navigation: "Main navigation, navigation"
3. Heading: "Welcome, heading level 1"
4. Paragraph: "Explore our features..."
5. Link: "Learn more, link"
6. Heading: "Products, heading level 2"
7. Image: "Product dashboard screenshot, image"

**Key behaviors:**
- Arrow keys move through every element in DOM order
- Single-key shortcuts work: H jumps to next heading, K to next link
- All content is reachable, not just interactive elements
- This is the default mode when you open a page

**Speaker notes:**
Browse mode is the default. When VoiceOver or NVDA first opens a page, you're in browse mode. You can read everything: headings, paragraphs, images, links. The arrow keys step through content one element at a time.

---

### Frame 2.4: Focus mode in detail

**Type:** Annotated demonstration

**Layout:** Form section with focus mode navigation overlay

**Headline:** Focus mode: interacting with controls

**Visual:** Form section showing:
- Search input field with cursor blinking (focus mode active)
- Arrow keys shown controlling the text cursor, not page navigation

**Key behaviors:**
- Arrow keys control the focused element (text cursor in input, option in dropdown)
- Single-key shortcuts are disabled (H, K, D are typed as characters)
- Tab/Shift+Tab move between form fields
- Mode switches automatically when entering a form field

**Common confusion callout:**
"Why can't I navigate by headings anymore?" Because you're in focus mode. Your keystrokes go to the form field, not to navigation. Press Escape or Tab out to return to browse mode.

**Speaker notes:**
Focus mode is automatic. When you Tab to a text field, the screen reader switches to focus mode so your keystrokes go to the field. This is correct behavior. The confusion comes when students try to press H for headings while in focus mode: the letter H gets typed into the field instead.

---

### Frame 2.5: Mode switching signals

**Type:** Audio/visual cue reference

**Layout:** Comparison table with audio indicators

**Headline:** How screen readers tell you which mode you're in

**NVDA signals:**

| Event | Audio Cue | What It Means |
|-------|-----------|---------------|
| Entering focus mode | High-pitched tone ↑ | Keys now go to the control |
| Returning to browse mode | Low-pitched tone ↓ | Keys now navigate content |
| Manual toggle | Insert+Space | Force switch between modes |

**VoiceOver approach:**
- VoiceOver does not use distinct browse/focus modes
- Uses "interact" (VO+Shift+Down) to enter groups and widgets
- Uses "stop interacting" (VO+Shift+Up) to exit
- The Web Rotor is always available regardless of context

**Speaker notes:**
NVDA makes this very clear with audio tones. If you hear the high tone, you're in focus mode. Low tone, browse mode. VoiceOver handles this differently: instead of mode switching, you "interact with" and "stop interacting with" containers. Same concept, different implementation.

---

### Frame 2.6: Mobile: Browse mode only

**Type:** Platform comparison

**Layout:** Three-column comparison

**Headline:** Mobile screen readers: no focus mode

**Columns:**

| | Desktop (NVDA) | iOS VoiceOver | TalkBack |
|---|---|---|---|
| **Browse mode** | Yes (default) | Yes (always) | Yes (always) |
| **Focus mode** | Yes (auto/manual) | No | No |
| **Navigate all content** | Arrow keys | Swipe right/left | Swipe right/left |
| **Interact with controls** | Mode switch + arrow keys | Double-tap + on-screen keyboard | Double-tap + on-screen keyboard |
| **Quick navigation** | Single-key shortcuts (H, D, K) | Rotor (twist gesture) | Reading Controls (swipe up-down) |

**Key insight callout:**
Mobile screen readers are essentially browse mode only. When users reach a text field, the on-screen keyboard appears automatically. There is no mode switch, no audio tone, no confusion about which mode is active. The Rotor and Reading Controls replace single-key shortcuts for efficient navigation.

**Designer implication callout:**
The same semantic structure (headings, landmarks, labels) is required on mobile. The Rotor and Reading Controls depend on it. If your heading structure is flat on mobile, the Rotor's headings navigation is just as broken as pressing H on a poorly-structured desktop page.

**Speaker notes:**
This is an important simplification for mobile. Students often worry about mode switching on mobile: they don't need to. The interaction model is simpler. But the underlying requirement is the same: proper semantic HTML creates navigable content on all platforms.

---

### Frame 2.7: Why designers need to understand modes

**Type:** Problem/solution with design examples

**Layout:** Two scenarios showing design impact on modes

**Headline:** Design decisions affect mode behavior

**Scenario 1: Incorrect role causes wrong mode**
- Problem: Custom menu built with `role="application"` forces entire region into focus mode
- Result: Users cannot use browse mode to read content within the menu
- Design fix: Specify correct role (e.g., `role="menu"`) in annotations

**Scenario 2: Missing role prevents mode switch**
- Problem: Custom dropdown built with `<div>` elements, no ARIA roles
- Result: Screen reader stays in browse mode, arrow keys navigate away instead of selecting options
- Design fix: Annotate expected interaction pattern and roles

**Designer takeaway callout:**
When specifying interactive components, include:
1. The expected role
2. The expected keyboard interaction pattern
3. What mode the user should be in during interaction

**Speaker notes:**
This is where L09 and L10 connect for designers. The accessibility tree roles you learned to inspect in L09 directly control which mode the screen reader enters. Wrong roles = wrong mode = broken experience.

---

### Frame 2.8: Hands-on: Experience mode switching

**Type:** Activity slide

**Layout:** Step-by-step instructions

**Headline:** Practice: Feel the mode switch (desktop)

**Activity badge:** `HANDS-ON | 4 minutes`

**Instructions:**
1. Turn on your screen reader (VoiceOver: Cmd+F5, NVDA: Ctrl+Alt+N)
2. Navigate to the test page (URL provided)
3. Use arrow keys to read through the page content (you're in browse mode)
4. Tab to the search field
5. **NVDA users:** Listen for the high-pitched tone (focus mode entered)
6. **VoiceOver users:** Notice the focus indicator on the field
7. Type a few characters (they go into the field, not navigation)
8. Press Escape or Tab out
9. **NVDA users:** Listen for the low-pitched tone (browse mode restored)
10. Try pressing H to jump to the next heading (works again in browse mode)

**What to notice:**
- The sound that indicates mode change (NVDA)
- That typing works differently in each mode
- That single-key navigation only works in browse mode

**Speaker notes:**
Walk students through this step by step. The "aha moment" comes when they try to type H in browse mode and it jumps to a heading instead. Then they enter a form field and type H normally. That's the mode difference in action.

---

### Frame 2.9: Checkpoint: Browse mode vs focus mode

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Browse mode vs focus mode

**Body text:**
Before learning quick navigation, verify you understand mode concepts:

**Checklist:**
- [ ] I can explain the difference between browse mode and focus mode on desktop
- [ ] I understand that browse mode is for reading, focus mode is for interacting
- [ ] I recognize NVDA's audio tones for mode switching (or VoiceOver's interact model)
- [ ] I understand that design decisions (ARIA roles) affect which mode is active
- [ ] I experienced mode switching during the hands-on exercise
- [ ] I understand that mobile screen readers are essentially browse mode only, using the Rotor or Reading Controls instead of mode switching

**Outcome badge:** `2B.02`

**Speaker notes:**
Mode understanding is critical for desktop. For mobile, the key insight is simpler: it's browse mode only. Students should understand that the same semantic structure is needed on both platforms, even though the interaction model differs.

---

# Section 3: Quick Navigation
## Duration: 12 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Quick Navigation`

---

### Frame 3.2: How real users navigate

**Type:** Statistics and user behavior

**Layout:** Survey data visualization

**Headline:** Screen reader users don't read top to bottom

**WebAIM survey data:**

| Navigation method | Percentage who use it |
|---|---|
| Navigate by headings | 67.5% (most common) |
| Use search feature | 18.7% |
| Navigate by landmarks | 4.5% |
| Read through content | 3.7% |
| Navigate by links | 2.7% |

**Key insight callout:**
The #1 way screen reader users find content is by navigating headings. This is why heading structure (L02) is so critical: it's not just semantic correctness, it's the primary navigation method for screen reader users.

**Speaker notes:**
This data from the WebAIM survey is powerful. Almost 70% of screen reader users navigate by headings first. Less than 4% actually read pages from top to bottom. Your heading structure is their navigation. If your headings are flat or missing, you've taken away their primary way to find content.

---

### Frame 3.3: NVDA single-key shortcuts

**Type:** Reference card with categories

**Layout:** Categorized shortcut table

**Headline:** NVDA: Jump to elements by type (browse mode only)

**Shortcut reference:**

| Key | Element Type | Shift+Key |
|-----|-------------|-----------|
| H | Next heading | Previous heading |
| 1-6 | Heading at level 1-6 | Previous at level |
| D | Next landmark | Previous landmark |
| K | Next link | Previous link |
| V | Next visited link | Previous visited link |
| F | Next form field | Previous form field |
| B | Next button | Previous button |
| T | Next table | Previous table |
| I | Next list item | Previous list item |
| G | Next graphic/image | Previous graphic |

**Important note callout:**
These shortcuts ONLY work in browse mode. In focus mode, pressing H types the letter "h" into the active control.

**Speaker notes:**
These are the power-user shortcuts. H for headings is the most important. D for landmarks is next. Students don't need to memorize all of these, but they should know H, D, K, and F. The number keys (1-6) for heading levels are especially useful for testing heading hierarchy.

---

### Frame 3.4: VoiceOver Web Rotor

**Type:** Annotated screenshot

**Layout:** Web Rotor interface with annotations

**Headline:** VoiceOver Web Rotor: Your navigation hub

**Visual:** Screenshot of Web Rotor showing categorized lists:
- Headings list (with levels shown)
- Links list
- Landmarks list
- Form Controls list

**How to use:**
1. Press VO+U to open the Web Rotor
2. Left/Right arrows: Switch between categories (Headings, Links, Landmarks, etc.)
3. Up/Down arrows: Browse items within a category
4. Enter: Navigate to the selected item
5. Escape: Close the Web Rotor

**Callout:**
The Web Rotor provides a complete structural overview of the page, similar to what you saw in the NVDA Elements List (Insert+F7).

**Speaker notes:**
The Web Rotor is VoiceOver's equivalent of NVDA's single-key navigation and Elements List combined. It gives you a bird's-eye view of the page structure. This is how you quickly assess whether a page has proper headings, landmarks, and labeled form fields.

---

### Frame 3.5: Mobile quick navigation: Rotor and Reading Controls

**Type:** Two-column comparison

**Layout:** Side-by-side mobile gesture reference

**Headline:** Quick navigation on mobile

**Left column: iOS VoiceOver Rotor**
- Visual: Hand gesture showing two-finger twist
- Open: Two-finger twist gesture (like turning a dial)
- Categories cycle: Headings, Links, Landmarks, Form Controls, etc.
- Navigate: Swipe up (previous) / swipe down (next) within selected category
- Same purpose as NVDA's H key or VoiceOver desktop Web Rotor

**Right column: TalkBack Reading Controls**
- Visual: Hand gesture showing swipe up-then-down
- Cycle navigation type: Swipe up then down (or down then up)
- Types available: Headings, Links, Controls, Landmarks, etc.
- Navigate: Swipe right (next) / swipe left (previous) by selected type
- Same purpose as NVDA's H key or iOS Rotor

**Comparison callout:**

| Feature | NVDA (desktop) | iOS VoiceOver (mobile) | TalkBack (mobile) |
|---|---|---|---|
| Jump to next heading | Press H | Rotor → Headings → Swipe down | Reading Controls → Headings → Swipe right |
| Jump to next landmark | Press D | Rotor → Landmarks → Swipe down | Reading Controls → Landmarks → Swipe right |
| Jump to next link | Press K | Rotor → Links → Swipe down | Reading Controls → Links → Swipe right |
| View all headings | Insert+F7 | Not available (navigate sequentially) | Not available (navigate sequentially) |

**Speaker notes:**
The Rotor and Reading Controls are the mobile equivalents of single-key navigation. The gesture is different but the result is the same: jump between elements of a specific type. The key difference from desktop is that mobile doesn't have an "elements list" view, you navigate sequentially through items of the selected type.

---

### Frame 3.6: Element lists: The structural overview

**Type:** Comparison showing element list output

**Layout:** Two element lists side by side

**Headline:** Element lists reveal your page structure

**Left: Well-structured page**
```
Headings:
  H1: Welcome to Adobe
  H2: Our Products
    H3: Creative Cloud
    H3: Document Cloud
  H2: Resources
    H3: Tutorials
    H3: Community
  H2: Support

Landmarks:
  banner
  navigation: Main
  main
  complementary: Sidebar
  contentinfo
```

**Right: Poorly-structured page**
```
Headings:
  H2: Welcome to Adobe
  H2: Our Products
  H2: Creative Cloud
  H2: Document Cloud
  H2: Resources
  H2: Tutorials
  H2: Community
  H2: Support

Landmarks:
  (none found)
```

**Comparison callout:**
Left: Clear hierarchy, easy to navigate by level. Users can press 3 to jump to H3 items.
Right: Flat structure, no hierarchy. All headings at same level. No landmarks for orientation.

**Speaker notes:**
This is the single most powerful slide in this lesson. Show both lists and ask: which page would you rather navigate? The answer is obvious. This is what your heading structure and landmark annotations create, or fail to create.

---

### Frame 3.7: Hands-on: Navigate by structure

**Type:** Activity slide

**Layout:** Instructions with two test pages

**Headline:** Practice: Navigate a well-structured page

**Activity badge:** `HANDS-ON | 5 minutes`

**Instructions:**
1. Open the well-structured test page
2. **NVDA users:** Press H repeatedly to jump through all headings. Note the heading levels.
3. **VoiceOver users:** Press VO+U, navigate to Headings category, review the list.
4. Press D (NVDA) to jump between landmarks. How many are there?
5. Open the Elements List (NVDA: Insert+F7) or Web Rotor (VoiceOver: VO+U)
6. Review the headings list. Does it create a logical outline?
7. Review the landmarks list. Can you orient yourself on the page?

**Record your findings:**

| Navigation | What you found |
|---|---|
| Number of headings | ? |
| Heading hierarchy (levels used) | ? |
| Number of landmarks | ? |
| Named landmarks | ? |

**Speaker notes:**
Give students 5 minutes with the well-structured page. The goal is to build comfort with quick navigation and to connect what they hear to the accessibility tree from L09. Walk around and help anyone struggling with commands.

---

### Frame 3.8: Hands-on: Navigate a broken page

**Type:** Activity slide

**Layout:** Instructions with problem discovery

**Headline:** Practice: Find the problems

**Activity badge:** `HANDS-ON | 3 minutes`

**Instructions:**
1. Open the poorly-structured test page
2. Press H to navigate by headings. What's different from the good page?
3. Try pressing 3 to jump to H3 headings. What happens?
4. Press D to navigate by landmarks. What do you find?
5. Open the Elements List or Web Rotor. Review the heading structure.

**Questions to answer:**
- Can you build a mental model of the page from headings alone?
- How many landmarks are defined?
- Would you know which section you're in without reading everything?
- What would you annotate in a design review?

**Key insight callout:**
Everything you learned in L02 (headings) and L07 (landmarks) directly creates (or breaks) the screen reader navigation experience. This is what those WCAG requirements protect.

**Speaker notes:**
The contrast between the two pages makes the point powerfully. Students will immediately feel the difference. The "aha moment" is pressing 3 for H3 headings and hearing nothing, when the well-structured page had clear subsections. This is why we teach heading hierarchy.

---

### Frame 3.9: Checkpoint: Quick navigation

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Quick navigation

**Body text:**
Before wrapping up, verify you understand efficient screen reader navigation:

**Checklist:**
- [ ] I can use H key (NVDA) or Web Rotor (VoiceOver desktop) to navigate by headings
- [ ] I can navigate by landmarks using D key or Web Rotor
- [ ] I can open the Elements List (NVDA) or Web Rotor (VoiceOver) for a structural overview
- [ ] I understand how the iOS Rotor and TalkBack Reading Controls provide the same quick navigation on mobile
- [ ] I experienced the difference between a well-structured and poorly-structured page
- [ ] I understand that heading structure and landmarks are the primary navigation tools for screen reader users on all platforms

**Outcome badge:** `2B.03`

**Speaker notes:**
Final checkpoint. Students should now have first-hand experience with why heading structure and landmarks matter. This connects the design requirements from Discover Badge (L02, L07) to the real user experience in Define Badge.

---

# Section 4: Summary and Assessment
## Duration: 8 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Summary and Next Steps`

---

### Frame 4.2: Key takeaways

**Type:** Summary slide

**Layout:** Five key principles with icons

**Headline:** Screen reader fundamentals

**Key principles:**

| Icon | Principle |
|------|-----------|
| 🔊 | **Hear the tree:** Screen readers announce the accessibility tree properties: name, role, state, value |
| 📖 | **Two modes:** Browse mode reads content; focus mode interacts with controls |
| 🔔 | **Listen for signals:** NVDA tones tell you which mode is active |
| ⚡ | **Navigate by structure:** Headings and landmarks are the primary navigation tools |
| 🔗 | **L09 + L10:** Inspect the tree (L09), then verify with a screen reader (L10) |

**Designer action items callout:**
- Start every design review by navigating your page with H (headings)
- Check landmarks with D (or Web Rotor)
- Listen for missing names, generic labels, or incorrect roles
- Document what you hear for engineering

**Speaker notes:**
These five principles give designers a practical screen reader testing workflow. The key message: you don't need to be a screen reader power user. You need to know H, D, and how to open an element list. That's enough to validate your design work.

---

### Frame 4.3: The designer's screen reader workflow

**Type:** Process diagram

**Layout:** Numbered workflow steps

**Headline:** Your screen reader testing workflow

**Steps:**
1. **Inspect the tree** (L09): Check accessibility properties in dev tools
2. **Turn on screen reader**: VoiceOver (Cmd+F5) or NVDA (Ctrl+Alt+N)
3. **Navigate by headings**: Press H repeatedly. Do headings create a logical outline?
4. **Check landmarks**: Press D. Are all regions defined and labeled?
5. **Read through key sections**: Use arrow keys. Are names, roles, and states correct?
6. **Test interactive elements**: Tab to forms and widgets. Does mode switching work correctly?
7. **Document findings**: Note what's missing, incorrect, or confusing

**Callout:**
This is not comprehensive AT testing. This is designer-level validation, enough to catch the most common issues before handoff.

**Speaker notes:**
This 7-step workflow is what we'll build on throughout the Define Badge. Today we introduced steps 2-6. Step 1 is from L09. Step 7 we'll refine in future lessons. The goal is not to replace QA testing but to catch obvious issues early.

---

### Frame 4.4: Quiz and project preview

**Type:** Assessment preview

**Layout:** Two columns for quiz and project

**Left column:**
- Heading: `Knowledge Check Quiz`
- 5 questions
- Tests: screen reader navigation, browse/focus mode, quick navigation
- Auto-graded

**Right column:**
- Heading: `Applied Practice`
- Combined with L09
- Part 1 (L09): Inspect accessibility tree, document properties
- Part 2 (L10): Navigate with screen reader, verify predictions
- Compare what you saw in dev tools to what you heard
- Document discrepancies and issues

**Speaker notes:**
The project ties L09 and L10 together. Part 1 is analysis (dev tools), Part 2 is verification (screen reader). The key deliverable is comparing predictions to reality. This builds the habit of inspect-then-verify.

---

### Frame 4.5: Next lesson preview

**Type:** Preview slide

**Layout:** Next lesson teaser

**Headline:** Up next: Screen Reader Navigation Patterns (L11)

**Preview points:**
- Navigate tables with screen reader table commands
- Handle forms and form validation messages
- Interact with dialogs, tab panels, and other ARIA widgets
- Understand live regions and dynamic content announcements

**Connection callout:**
L11 builds on today's fundamentals. You'll apply browse mode, focus mode, and quick navigation to complex interactive patterns.

**Speaker notes:**
Next lesson moves from fundamentals to patterns. You'll learn how screen readers handle more complex components like data tables, dialogs, and live regions. The foundation from today makes all of that possible.

---

### Frame 4.6: Resources

**Type:** Resource links

**Layout:** Organized resource list

**Headline:** Resources for reference

**W3C resources:**
- WCAG Understanding 4.1.2 Name, Role, Value
  `https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html`
- WCAG Understanding 1.3.1 Info and Relationships
  `https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html`
- WCAG Understanding 2.4.6 Headings and Labels
  `https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html`
- WAI: How People with Disabilities Use the Web
  `https://www.w3.org/WAI/people-use-web/`

**Screen reader resources:**
- NVDA Screen Reader (free, Windows)
  `https://www.nvaccess.org/download/`
- VoiceOver User Guide (macOS)
  `https://support.apple.com/guide/voiceover/welcome/mac`
- VoiceOver User Guide (iOS)
  `https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios`
- TalkBack Documentation (Android)
  `https://support.google.com/accessibility/android/answer/6283677`
- WebAIM Screen Reader User Survey
  `https://webaim.org/projects/screenreadersurvey10/`

**Adobe resources:**
- Design Accessibility Checklist (Screen Reader section)
- Spectrum Design System (Accessibility foundations)
- Stark Figma Plugin Guide

**Tools:**
- Deque University: Screen Reader Keyboard Shortcuts
  `https://dequeuniversity.com/screenreaders/`
- Browser DevTools (accessibility tree inspection)
- Screen reader shortcut reference cards (class handout)

**Up Next:**
Lesson 11: Screen Reader Navigation Patterns (In-person)

**Speaker notes:**
These resources are also linked on the Canvas page. The NVDA download and VoiceOver guides are your starting points for practice outside of class. The WebAIM Screen Reader User Survey shows real data on how screen reader users navigate, which directly informs your design decisions. The Deque keyboard shortcuts reference is an excellent cheat sheet to keep next to your keyboard while practicing. You don't need to memorize any of this. You need to know where to look. This is open-book work, just like real design practice.

---

## Supplementary materials

### Reference: Screen reader shortcut cards

For use as student handouts:

**VoiceOver Quick Reference:**
```
ON/OFF:      Cmd+F5
VO Modifier: Ctrl+Option (VO)
Next:        VO+Right Arrow
Previous:    VO+Left Arrow
Activate:    VO+Space
Web Rotor:   VO+U
Stop speech: Ctrl
Interact:    VO+Shift+Down Arrow
Stop interact: VO+Shift+Up Arrow
```

**NVDA Quick Reference:**
```
ON:          Ctrl+Alt+N
OFF:         Insert+Q
Modifier:    Insert
Next line:   Down Arrow
Prev line:   Up Arrow
Activate:    Enter / Space
Elements:    Insert+F7
Stop speech: Ctrl
Toggle mode: Insert+Space
Headings:    H (browse mode)
Landmarks:   D (browse mode)
Links:       K (browse mode)
```

**iOS VoiceOver Quick Reference:**
```
ON/OFF:      Settings → Accessibility → VoiceOver
             (or triple-click Side button)
Next:        Swipe right
Previous:    Swipe left
Activate:    Double-tap
Rotor:       Two-finger twist
By Rotor:    Swipe up / Swipe down
Stop speech: Two-finger tap
```

**TalkBack Quick Reference:**
```
ON/OFF:      Settings → Accessibility → TalkBack
             (or hold both volume keys)
Next:        Swipe right
Previous:    Swipe left
Activate:    Double-tap
Reading Ctrl: Swipe up-then-down (cycle type)
By type:     Swipe right / Swipe left
Stop speech: Two-finger tap
```

### Reference: Common screen reader announcements

**Button states:**
```
Default:  "Submit, button"
Disabled: "Submit, button, unavailable" (NVDA)
          "Submit, dimmed, button" (VO)
Pressed:  "Bold, toggle button, pressed"
Expanded: "Menu, button, expanded"
```

**Form fields:**
```
Text:     "Email, edit text"
Required: "Email, edit text, required"
Invalid:  "Email, edit text, invalid entry"
Dropdown: "Country, combo box, collapsed"
```

**Headings:**
```
NVDA: "Heading level 2, Products"
VO:   "Products, heading level 2"
```

---

## End of deck

**Total frames:** 35
**Estimated delivery time:** 45 minutes

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L10: Screen Reader Fundamentals*
