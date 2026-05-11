# Lesson 11: Screen Reader Navigation Patterns
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2B.01, 2B.02, 2B.03

---

## Source context

This lesson draws from established internal training materials, particularly:
- **W3C ARIA Authoring Practices Guide (APG)** (dialog, tabs, table, alert patterns)
- **Deque University ARIA Widget Patterns**
- **WebAIM Screen Reader User Surveys** (navigation patterns and preferences)
- **Design System Accessibility Training: "From Fundamentals to Patterns"** (continued from L10)

Key pedagogical approach: **"From elements to components"**: designers move from navigating individual elements (L10) to understanding how screen readers handle complex multi-element components. This is where design annotations become critical.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | -- |
| 1. Data Table Navigation | 1.1-1.6 | 10 min | 2B.01 |
| 2. Form Groups and Complex Forms | 2.1-2.5 | 8 min | 2B.02 |
| 3. Modal Dialogs | 3.1-3.6 | 8 min | 2B.02 |
| 4. Tab Panels | 4.1-4.4 | 6 min | 2B.03 |
| 5. Live Regions | 5.1-5.4 | 5 min | 2B.03 |
| 6. Summary and Assessment | 6.1-6.4 | 5 min | -- |

**Total frames:** 31

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#FF6B6B` (Define Badge coral)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- Include activity cues for hands-on exercises
- Include ARIA pattern diagrams showing role/property relationships
- Use code-like annotations to show ARIA attributes visually
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
- Lesson number: `Lesson 11`
- Title: `Screen Reader Navigation Patterns`
- Subtitle: `From Elements to Components`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Lesson 11. In L10 you learned to navigate basic content with screen readers: text, headings, links. Today we level up to the complex components you encounter in real product work: data tables, multi-section forms, modal dialogs, tab panels, and live regions. These are the patterns where most accessibility failures happen, and where your design annotations make the biggest difference.

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
| 2B.01 | Navigate complex UI components (tables, forms, dialogs, tab panels) using screen reader commands |
| 2B.02 | Understand how browse mode and focus mode interact with complex components |
| 2B.03 | Use element lists and component-specific navigation to test complex page layouts |

**Connection callout:**
Building on L10 fundamentals. You know how to start a screen reader, navigate basic content, switch modes, and use quick navigation. Now you'll apply those skills to the complex components in your product designs.

**Speaker notes:**
Same three outcomes as L10, but applied to complex components. This is where the rubber meets the road for real product accessibility.

---

# Section 1: Data Table Navigation
## Duration: 10 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `Data Table Navigation`

---

### Frame 1.2: How screen readers detect tables

**Type:** Process diagram

**Layout:** Horizontal flow showing table detection

**Headline:** Screen readers enter table mode automatically

**Diagram:**
```
Screen Reader Encounters <table>
         ↓
"Table with 5 rows, 4 columns"
         ↓
Cell-by-cell navigation activated
         ↓
Headers announced with each cell
```

**Key insight callout:**
When a screen reader encounters a properly-marked table, it enters a special table navigation mode with its own set of commands. This is completely different from reading regular page content.

**Speaker notes:**
Tables are the first complex pattern we'll cover because they're everywhere in product design: pricing tables, data grids, comparison charts. The screen reader has a special mode for tables, just like it has browse mode and focus mode. If the table markup is correct, navigation is powerful. If it's wrong, data is meaningless.

---

### Frame 1.3: Table navigation commands

**Type:** Reference card

**Layout:** Three-column command reference

**Headline:** Navigating tables cell by cell

**LO pill:** 2B.01

| Action | NVDA | VoiceOver (Mac) |
|--------|------|-----------------|
| Jump to next table | T | VO+U → Tables |
| Move right one cell | Ctrl+Alt+Right | VO+Right (in table) |
| Move left one cell | Ctrl+Alt+Left | VO+Left (in table) |
| Move down one cell | Ctrl+Alt+Down | VO+Down (in table) |
| Move up one cell | Ctrl+Alt+Up | VO+Up (in table) |
| Announce current row | NVDA+Shift+Up | VO+R |
| Announce current column | NVDA+Shift+Down | VO+C |

**Key insight callout:**
As you move between cells, the screen reader automatically announces the relevant column header and row header. This is why properly-marked `<th>` elements with `scope` attributes are essential.

**Speaker notes:**
Don't memorize these. The reference card is there to use during testing. What matters is understanding what SHOULD happen when you navigate: headers provide context for data. Without headers, cells are just random values.

---

### Frame 1.4: Headers provide context

**Type:** Comparison (good vs bad)

**Layout:** Split screen showing same table with different markup

**Headline:** With headers vs without headers

**Left side (with headers):**
Visual: Table showing Product, Price, Rating columns
```
Screen reader announces:
"Product: Widget Pro"
"Price: $29.99"
"Rating: 4.5 stars"
```

**Right side (without headers):**
Visual: Same table, but headers not marked as `<th>`
```
Screen reader announces:
"Widget Pro"
"$29.99"
"4.5 stars"
```

**Impact callout:**
Without headers, "$29.99" could be anything: a price, a discount, a shipping cost. The column header gives the number meaning.

**Speaker notes:**
This is the core concept for tables. When I navigate to a cell and hear "Price: $29.99," I know what that number means. Without headers, I just hear "$29.99" and have no context. Designers must specify which cells are headers in their annotations, especially for complex data tables.

---

### Frame 1.5: Activity: Navigate a data table

**Type:** Activity frame

**Layout:** Instructions with hands-on cue

**Headline:** Hands-on: Navigate a data table

**Activity icon:** Keyboard + audio waveform

**Instructions:**
1. Open the prepared test page with the data table
2. Use T key (NVDA) or VO+U → Tables (VoiceOver) to find the table
3. Hear the table dimensions announcement
4. Navigate cell by cell using Ctrl+Alt+Arrow keys (NVDA) or VO+Arrow keys (VoiceOver)
5. Listen for column headers announced with each cell

**Then try the broken version:**
6. Navigate the table without proper header markup
7. Notice the difference: no context for data values

**Discussion prompt:**
What data tables exist in your product? Do they have proper headers?

**Speaker notes:**
Give students 3-4 minutes to navigate both tables. The contrast between well-marked and poorly-marked tables is the strongest demonstration of why semantic markup matters. Circulate and help students who are having trouble with the navigation commands.

---

### Frame 1.6: Table design implications

**Type:** Key takeaways

**Layout:** Checklist with designer actions

**Headline:** What designers must specify for tables

**LO pill:** 2B.01

**Designer checklist:**
- [ ] Identify which cells are column headers and which are row headers
- [ ] Specify header scope (column vs row) in annotations
- [ ] For complex tables with multi-level headers, note which headers apply to which cells
- [ ] Mark layout tables as presentational (they should not enter table mode)
- [ ] Consider whether the data truly needs a table or if a list would be simpler

**Key insight callout:**
A table without headers is like a spreadsheet where someone deleted the first row. The data is there, but nobody knows what it means.

**Speaker notes:**
Designers don't write the HTML, but they must specify which cells are headers. This is a design decision, not a development decision. Your annotation should make the header structure clear.

---

# Section 2: Form Groups and Complex Forms
## Duration: 8 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Form Groups and Complex Forms`

---

### Frame 2.2: Fieldset and legend grouping

**Type:** Diagram with audio annotation

**Layout:** Form wireframe with grouping annotations

**Headline:** How form groups are announced

**LO pill:** 2B.02

**Diagram:**
Visual: A form divided into two sections: "Shipping Address" and "Billing Address"

```
Fieldset: Shipping Address (legend)
├── Street address, edit text
├── City, edit text
├── State, combo box
└── ZIP code, edit text

Fieldset: Billing Address (legend)
├── Street address, edit text
├── City, edit text
├── State, combo box
└── ZIP code, edit text
```

**Screen reader announcement sequence:**
```
Focus on first field:
"Shipping Address, Street address, edit text"
                ↑                ↑           ↑
           Group label      Field name     Role
```

**Key insight callout:**
Without fieldset/legend, both "Street address" fields sound identical. The group label provides context, just like column headers provide context in tables.

**Speaker notes:**
This is the form equivalent of table headers. When you have two sections with the same field names, the group label is the only way a screen reader user can tell them apart. Designers must annotate which fields belong to which group and what the group label should be.

---

### Frame 2.3: Error handling patterns

**Type:** Comparison diagram

**Layout:** Three error patterns side by side

**Headline:** Screen reader error announcements

**LO pill:** 2B.02

**Pattern 1: Inline error**
```
"Email address, edit text, invalid entry,
 Please enter a valid email address"
```
Uses: `aria-invalid="true"` + `aria-describedby` pointing to error message

**Pattern 2: Error summary at top**
```
"Alert, 3 errors found:
 Link: Email address is required
 Link: Password must be 8 characters
 Link: Please accept terms"
```
Uses: Error list with links to each field, `role="alert"` on the summary

**Pattern 3: Required field**
```
"Email address, edit text, required"
```
Uses: `aria-required="true"` or HTML `required`

**Speaker notes:**
Three patterns, each serving a different purpose. Inline errors give specific feedback at the field level. Error summaries give an overview when multiple errors exist. Required field indicators set expectations before the user starts filling in the form. Designers should specify which pattern to use and what the error messages say.

---

### Frame 2.4: Activity: Navigate a complex form

**Type:** Activity frame

**Layout:** Instructions with hands-on cue

**Headline:** Hands-on: Test form accessibility

**Activity icon:** Form + audio waveform

**Instructions:**
1. Use F key (NVDA) to jump between form fields
2. Notice group labels announced when entering a fieldset
3. Tab through required fields, listen for "required" announcements
4. Trigger validation by submitting with empty fields
5. Listen for error messages: are they associated with the correct fields?

**Discussion prompt:**
Think about forms in your product. Are related fields grouped? Are error messages specific and associated?

**Speaker notes:**
This exercise connects L04 (Forms and Errors from Discover Badge) to real screen reader behavior. Students learned about form labeling in L04; now they hear what it sounds like. Give students 2-3 minutes to navigate the form and trigger errors.

---

### Frame 2.5: Form design implications

**Type:** Key takeaways

**Layout:** Checklist with designer actions

**Headline:** What designers must specify for forms

**Designer checklist:**
- [ ] Group related fields with clear group labels
- [ ] Specify error message text and where it appears
- [ ] Indicate which fields are required
- [ ] Define the error announcement pattern (inline, summary, or both)
- [ ] Specify what happens on form submission (success/error feedback)

**Speaker notes:**
Forms are where browse mode and focus mode really matter. Users switch to focus mode to type in fields, then may switch back to browse mode to read instructions. Your design should account for both interaction patterns.

---

# Section 3: Modal Dialogs
## Duration: 8 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Modal Dialogs`

---

### Frame 3.2: Dialog focus management

**Type:** Flow diagram

**Layout:** Step-by-step focus management flow

**Headline:** The dialog lifecycle

**LO pill:** 2B.02

**Flow diagram:**
```
1. User activates trigger button
   ↓
2. Dialog opens
   Focus moves INTO dialog
   Screen reader announces: "Dialog title, dialog"
   ↓
3. User interacts with dialog content
   Focus TRAPPED within dialog
   Tab cycles only through dialog controls
   Browse mode scoped to dialog content
   ↓
4. User closes dialog (button or Escape)
   Focus returns to TRIGGER element
   Screen reader returns to page context
```

**Critical callout (warning style):**
Dialog focus management is one of the most commonly-failed accessibility patterns in product design. Every step in this flow must be explicitly designed.

**Speaker notes:**
This is the most important pattern in today's lesson. Modal dialogs require explicit focus management at every stage: move focus in, trap focus, return focus out. If any step is missing, the experience breaks. Designers must annotate all three behaviors.

---

### Frame 3.3: Dialog failures

**Type:** Failure patterns (what goes wrong)

**Layout:** Four failure scenarios with impact

**Headline:** Common dialog failures

**Failure 1: No focus movement**
- User clicks "Delete" button, dialog appears visually
- Screen reader focus stays on the "Delete" button behind the dialog
- User has no idea a dialog opened

**Failure 2: No focus trapping**
- User opens dialog, focus moves into it
- User presses Tab past the last dialog element
- Focus escapes into background page content
- User is now interacting with content they can't see (it's behind the overlay)

**Failure 3: No return focus**
- User completes dialog and clicks "Confirm"
- Dialog closes, focus jumps to the top of the page
- User loses their place entirely

**Failure 4: Browse mode leaks**
- Dialog has `role="dialog"` but missing `aria-modal="true"`
- Focus is trapped (Tab stays in dialog)
- But browse mode navigation (arrow keys) can reach background content
- User hears content from behind the dialog

**Speaker notes:**
Walk through each failure. These are not edge cases; they are extremely common in shipping products. The fourth failure is particularly tricky: developers often get Tab trapping right but forget about browse mode navigation, which requires aria-modal.

---

### Frame 3.4: Testing dialog behavior

**Type:** Testing checklist

**Layout:** Step-by-step test procedure

**Headline:** How to test dialogs with a screen reader

**LO pill:** 2B.02

**Test steps:**
1. **Open dialog:** Activate the trigger button
   - Does the screen reader announce "dialog" or the dialog title?
   - Does focus move into the dialog?

2. **Navigate within dialog:** Tab through all dialog controls
   - Does focus stay within the dialog?
   - Can you reach all dialog controls?

3. **Try browse mode:** Use arrow keys to navigate
   - Can you reach content outside the dialog? (Fail if yes)
   - Is the dialog content fully navigable?

4. **Close dialog:** Press Escape or activate the close button
   - Does focus return to the element that opened the dialog?
   - Does the screen reader return to the previous context?

**Speaker notes:**
These four steps are a repeatable test procedure students can use for every dialog they encounter. Write these on the board or keep the slide visible during the hands-on exercise.

---

### Frame 3.5: Activity: Test a modal dialog

**Type:** Activity frame

**Layout:** Instructions with hands-on cue

**Headline:** Hands-on: Test dialog focus management

**Activity icon:** Dialog + focus ring

**Instructions:**
1. Navigate to the "Delete Item" button on the test page
2. Activate the button with Enter/Space (or VO+Space)
3. Listen: Does the screen reader announce the dialog title?
4. Tab through dialog controls: does focus stay trapped?
5. Try arrow keys: can you reach background content?
6. Press Escape: does focus return to the "Delete Item" button?

**Then try the broken version:**
7. Activate the "Broken Dialog" button
8. Notice what goes wrong (focus, trapping, return)

**Speaker notes:**
The contrast between the well-built and broken dialog is dramatic. In the broken version, the screen reader gives almost no indication that a dialog opened. Give students 3 minutes to test both.

---

### Frame 3.6: Dialog design implications

**Type:** Key takeaways

**Layout:** Annotation requirements

**Headline:** What designers must specify for dialogs

**Designer annotation requirements:**
1. **Focus on open:** Where does focus go? (First focusable element? Dialog title? Close button?)
2. **Focus trapping:** State explicitly that focus must cycle within the dialog
3. **Escape behavior:** Specify that Escape closes the dialog
4. **Return focus:** Specify that focus returns to the triggering element
5. **Dialog title:** What text labels the dialog for screen readers?

**Key insight callout:**
Your design annotation should include a focus management section for every dialog. If it's not annotated, it probably won't be implemented.

**Speaker notes:**
This is actionable for designers right now. Add a focus management callout to every dialog design. The five items on this slide should be in your annotation template.

---

# Section 4: Tab Panels
## Duration: 6 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Tab Panels`

---

### Frame 4.2: Tab panel ARIA structure

**Type:** Structural diagram

**Layout:** Component anatomy with ARIA roles

**Headline:** Tab panel component anatomy

**LO pill:** 2B.03

**Diagram:**
```
┌─────────────────────────────────────────────┐
│  role="tablist"                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ role="tab"│ │ role="tab"│ │ role="tab"│   │
│  │ aria-     │ │          │ │          │    │
│  │ selected= │ │          │ │          │    │
│  │ "true"    │ │          │ │          │    │
│  └──────────┘ └──────────┘ └──────────┘    │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  role="tabpanel"                            │
│  aria-labelledby="tab-1"                    │
│                                             │
│  (Content for the selected tab)             │
│                                             │
└─────────────────────────────────────────────┘
```

**Screen reader announcement on tab:**
```
"Overview, selected, tab, 1 of 3"
     ↑         ↑       ↑     ↑
    Name    State    Role  Position
```

**Speaker notes:**
Tab panels are a common pattern in product design. The ARIA structure creates the relationship between tabs and their panels. The screen reader announces position information (1 of 3) so the user knows how many tabs exist and where they are.

---

### Frame 4.3: Tab panel keyboard interaction

**Type:** Interaction flow

**Layout:** Keyboard interaction diagram

**Headline:** How users navigate tab panels

**Keyboard interaction:**

| Key | Action |
|-----|--------|
| Left/Right Arrow | Move between tabs in the tablist |
| Tab | Move focus from tablist into the active tab panel content |
| Shift+Tab | Return focus from panel content to the selected tab |
| Enter/Space | Activate a tab (manual activation mode only) |

**Two activation models:**

**Automatic activation:**
- Arrow key moves focus AND selects the tab
- Panel content updates immediately
- Simpler for users, more common in web

**Manual activation:**
- Arrow key moves focus but does NOT select
- User must press Enter/Space to activate
- Better when loading panel content is expensive

**Speaker notes:**
Designers need to decide which activation model to use. Automatic is simpler for users and recommended by default. Manual is appropriate when tab content takes time to load. Your annotation should specify which model.

---

### Frame 4.4: Tab panel testing and implications

**Type:** Testing + takeaways combined

**Layout:** Split: testing steps left, designer checklist right

**Headline:** Testing and designing tab panels

**Testing steps:**
1. Navigate to the tablist
2. Use Left/Right arrows to move between tabs
3. Listen for: tab name, selected state, position (X of Y)
4. Press Tab to enter the panel content
5. Verify correct content loads for the selected tab
6. Press Shift+Tab to return to the tablist

**Designer checklist:**
- [ ] Specify the number of tabs and their labels
- [ ] Choose activation model (automatic vs manual)
- [ ] Define which tab is selected by default
- [ ] Specify what happens when the user arrows past the last tab (wrap to first, or stop)
- [ ] Ensure tab labels are descriptive and concise

**Speaker notes:**
Tab panels are less commonly broken than dialogs, but they're still a pattern where ARIA roles are essential. Without tablist/tab/tabpanel roles, the component looks like a set of buttons followed by content. The screen reader has no way to know they're connected.

---

# Section 5: Live Regions
## Duration: 5 minutes

### Frame 5.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `5`
- Title: `Live Regions`

---

### Frame 5.2: Live region types

**Type:** Comparison chart

**Layout:** Three types with examples

**Headline:** Dynamic updates that screen readers announce

**LO pill:** 2B.03

**Three types:**

| Type | Urgency | Behavior | Example |
|------|---------|----------|---------|
| `aria-live="polite"` / `role="status"` | Low | Waits for pause in speech | "3 results found" after search |
| `aria-live="assertive"` / `role="alert"` | High | Interrupts immediately | "Session expiring in 2 minutes" |
| `aria-live="off"` | None | Not announced | Default; use for content that updates but doesn't need announcing |

**Key insight callout:**
Live regions solve a fundamental problem: screen reader users can't see visual changes. Without live regions, a user submits a search and gets no feedback that results loaded.

**Speaker notes:**
Live regions are the bridge between visual updates and screen reader awareness. The key designer decision is: which changes need announcing, and how urgently? Default to polite. Only use assertive for truly urgent messages.

---

### Frame 5.3: Common live region scenarios

**Type:** Scenario list

**Layout:** Four real-world scenarios

**Headline:** Where you'll encounter live regions in product design

**Scenarios:**

1. **Search results count:** User types in search, results update
   - "12 results found" (polite)

2. **Form validation:** User submits form, errors appear
   - "3 errors: Please fix the highlighted fields" (assertive)

3. **Shopping cart update:** User adds item
   - "Item added to cart. Cart total: $45.99" (polite)

4. **Chat message received:** New message arrives
   - "New message from Alex" (polite or assertive, depending on context)

**Anti-pattern callout (warning style):**
Do NOT make everything assertive. If your page constantly interrupts users, it becomes unusable. Reserve assertive for genuinely urgent messages.

**Speaker notes:**
Walk through each scenario. The search results example is the most common. Without a live region, a user searches and gets complete silence, with no way to know if results loaded. The form validation example connects back to Section 2. Chat messages are an interesting design decision: polite in most contexts, but possibly assertive for critical communications.

---

### Frame 5.4: Live region design implications

**Type:** Key takeaways

**Layout:** Decision framework

**Headline:** Designer decisions for live regions

**Decision framework:**

For each dynamic update in your design, ask:
1. **Does this change need to be announced?** (Not everything does)
2. **How urgent is it?** (polite = can wait, assertive = urgent)
3. **What text should be announced?** (Write the exact announcement text)
4. **Should the old content be replaced or appended to?** (Chat log = append, status = replace)

**Designer annotation template:**
```
Dynamic behavior: [describe what changes]
Announce to screen readers: Yes / No
Priority: Polite / Assertive
Announcement text: "[exact text]"
```

**Speaker notes:**
This decision framework turns live regions from a technical concept into a design deliverable. For every dynamic behavior in your designs, you should be answering these four questions and including the answers in your annotations.

---

# Section 6: Summary and Assessment
## Duration: 5 minutes

### Frame 6.1: Five patterns, one principle

**Type:** Summary

**Layout:** Pattern grid with common thread

**Headline:** Five patterns, one principle

**Pattern summary grid:**

| Pattern | What to Specify |
|---------|-----------------|
| **Tables** | Header cells and scope |
| **Forms** | Group labels, error associations, required states |
| **Dialogs** | Focus on open, focus trapping, focus return |
| **Tab Panels** | ARIA roles, activation model, keyboard interaction |
| **Live Regions** | Which updates, urgency level, announcement text |

**Common principle callout:**
Every pattern requires explicit design decisions that can't be left to developer interpretation. If it's not in your annotation, it probably won't be implemented correctly.

**Speaker notes:**
This is the key takeaway: complex components require explicit design specifications for accessibility. A "modal dialog" in your design means nothing without focus management annotations. A "data table" means nothing without header specifications. These are design decisions, not implementation details.

---

### Frame 6.2: Connecting the Define Badge thread

**Type:** Timeline / connection diagram

**Layout:** Lesson progression visualization

**Headline:** Your Define Badge journey so far

**Progression:**
```
L09: See the tree → L10: Hear the elements → L11: Navigate the components
                                                        ↓
                                           "Now you can test real products"
```

- **L09** taught you what the machine sees (accessibility tree)
- **L10** taught you what users hear (screen reader output)
- **L11** taught you how to test complex components (the real work)

**Speaker notes:**
Three lessons, one connected skill: understanding how assistive technology experiences your designs. Students now have the foundation to conduct meaningful screen reader testing on real products. Next week we move to a different AT category: screen magnification.

---

### Frame 6.3: Quiz preview

**Type:** Assessment preview

**Layout:** Quiz overview with outcome mapping

**Headline:** Knowledge check: 5 questions

**Quiz overview:**
- 5 multiple choice questions
- Covers: table navigation, dialog focus management, live regions, form groups, tab panels
- Maps to outcomes 2B.01, 2B.02, 2B.03
- Open book: use your reference materials

**Speaker notes:**
The quiz tests whether students understand what correct behavior looks like for each pattern, not whether they've memorized keyboard shortcuts. Focus on the "what should happen" rather than "which keys to press."

---

### Frame 6.4: Next lesson preview

**Type:** Preview / teaser

**Layout:** Next lesson card

**Headline:** Up next: L12, Screen Magnification

**Preview content:**
- Moving from screen readers to a completely different AT category
- How screen magnification users experience designs
- ZoomText, Windows Magnifier, macOS Zoom, and browser zoom
- Different user needs, different design implications
- New competency area: 2C

**Transition callout:**
You've spent three lessons (L09-L11) building screen reader expertise. Next week begins a new AT category. The testing mindset stays the same: understand the tool, test your designs, specify correct behavior.

**Speaker notes:**
Set expectations that L12 is a fresh start with different AT. The screen reader foundation is complete. Students should feel confident navigating basic and complex content with VoiceOver or NVDA. Screen magnification is a very different user experience, but the approach is the same: understand how users experience your design through the AT.

---

*Last updated: February 2026*
*Version: 1.0*
*For: DACE L11: Screen Reader Navigation Patterns*
