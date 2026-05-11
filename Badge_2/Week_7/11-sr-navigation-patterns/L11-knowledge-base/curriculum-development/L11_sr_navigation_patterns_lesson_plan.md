# L11: Screen Reader Navigation Patterns - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2B.01, 2B.02, 2B.03

---

## Lesson Overview

This in-person lesson extends L10's screen reader fundamentals into complex UI component navigation. Students learn how screen readers handle data tables, form groups, modal dialogs, tab panels, and live regions. These are the component patterns designers encounter daily in product work, and understanding how screen readers interact with them transforms how designers specify interaction behavior.

**Why This Matters:** Most real-world accessibility issues live in complex components, not simple text and links. Dialogs that don't trap focus, tables without headers, forms without group labels, and status messages that never reach screen reader users are among the most common and impactful failures. Designers who understand these patterns can specify correct behavior in their design annotations.

**Connection to L10:** This lesson assumes students can start a screen reader, navigate basic content, understand browse/focus mode, and use quick navigation. L11 builds on all of these skills with more complex scenarios.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 1.3.1 | Info and Relationships | A | Structure and relationships must be programmatically determined |
| 4.1.2 | Name, Role, Value | A | AT must receive name, role, and value for all UI components |
| 2.4.3 | Focus Order | A | Focus order must preserve meaning and operability |
| 4.1.3 | Status Messages | AA | Status messages can be programmatically determined without receiving focus |
| 1.3.2 | Meaningful Sequence | A | Reading sequence must be programmatically determinable |

---

## Content Outline

### Section 0: Introduction (3 min)
- Connection to L10: from basic navigation to complex component patterns
- Lesson objectives display (2B.01, 2B.02, 2B.03, advanced level)
- Quick demo: navigate a complex dashboard page, hear the difference between well-built and poorly-built components
- Today's agenda: tables, forms, dialogs, tabs, live regions

### Section 1: Data Table Navigation (10 min)

**1.1 How Screen Readers Handle Tables**
- Screen readers detect `<table>` elements and enter table navigation mode
- Announce table dimensions on entry: "Table with 5 rows, 4 columns"
- Cell-by-cell navigation with automatic header announcements
- Row and column headers provide context for each cell's data

**1.2 Table Navigation Commands**

| Action | NVDA | VoiceOver (Mac) | Mobile |
|--------|------|-----------------|--------|
| Enter table | T key (browse mode) | VO+U → Tables | Rotor → Tables |
| Next cell right | Ctrl+Alt+Right | VO+Right in table | Swipe right |
| Next cell down | Ctrl+Alt+Down | VO+Down in table | Rotor to Rows, swipe down |
| Announce headers | Automatic | Automatic | Automatic |

**1.3 What Makes Tables Accessible**
- `<th>` elements with `scope="col"` or `scope="row"` provide header context
- Missing headers: screen reader just reads cell content with no context
- Complex tables may need `headers` attribute for multi-level associations
- Layout tables (presentation) should use `role="presentation"` to prevent table mode

**1.4 Hands-on: Navigate a Data Table**
- Open prepared page with a properly-marked-up data table
- Enter table with T key, hear dimensions announcement
- Navigate cell by cell, hear column headers announced
- Then try a table with missing headers: notice the difference

**Key Message:** Designers must specify which cells are headers and their scope. Without this, table data is meaningless to screen reader users.

### Section 2: Form Groups and Complex Forms (8 min)

**2.1 Form Grouping with Fieldset/Legend**
- `<fieldset>` groups related form controls
- `<legend>` provides the group label
- Screen readers announce the legend when entering the first field in a group
- Example: "Shipping address" legend, then "Street address, edit text"

**2.2 Error Handling Patterns**
- Inline errors: screen readers announce error messages when focus reaches the field
- Error summary: a list of errors at the top of the form, each linking to the field
- `aria-describedby` connects error messages to their fields
- `aria-invalid="true"` signals that a field has an error
- Status messages for form submission results use live regions

**2.3 Required Fields**
- `aria-required="true"` or HTML `required` attribute
- Screen readers announce "required" when the field receives focus
- Visual-only indicators (red asterisks) are invisible to screen readers without ARIA

**2.4 Hands-on: Navigate a Multi-section Form**
- Use form control navigation (F key in NVDA) to move between fields
- Notice group labels announced for fieldset sections
- Tab through required fields, hear "required" announcements
- Trigger validation errors, verify error announcements

**Key Message:** Form grouping and error patterns are where browse mode and focus mode intersect. Designers must specify group labels, error associations, and required states in annotations.

### Section 3: Modal Dialogs (8 min)

**3.1 What Screen Readers Expect from Dialogs**
- `role="dialog"` with `aria-modal="true"` signals a modal
- Screen reader announces dialog title (via `aria-labelledby`) on open
- Focus must move to the dialog (typically to the first focusable element or the dialog itself)
- Focus must be trapped within the dialog (Tab cycles only within dialog content)
- Pressing Escape should close the dialog and return focus to the trigger

**3.2 Common Dialog Failures**
- No focus management: user opens dialog but screen reader stays on the trigger button
- No focus trapping: user can Tab past the dialog into background content
- No return focus: after closing, focus goes to the top of the page instead of the trigger
- Missing dialog role: screen reader treats it as regular page content, not a scoped region
- Background content still reachable with browse mode navigation

**3.3 Testing Dialog Behavior**
- Open dialog: does screen reader announce the dialog title?
- Tab forward: does focus stay within the dialog?
- Try browse mode navigation: can you reach background content? (You should not be able to)
- Close dialog: does focus return to the triggering element?
- Does Escape key close the dialog?

**3.4 Hands-on: Test a Modal Dialog**
- Activate a button that opens a dialog
- Verify focus moves into the dialog and title is announced
- Tab through dialog controls, verify focus trapping
- Press Escape, verify focus returns to the trigger button
- Test with both VoiceOver and NVDA (if available)

**Key Message:** Dialog focus management is one of the most commonly-failed accessibility patterns. Designers must specify: where focus goes on open, that focus is trapped, and where focus returns on close.

### Section 4: Tab Panels (6 min)

**4.1 Tab Panel ARIA Pattern**
- `role="tablist"` contains the tab buttons
- `role="tab"` on each tab button
- `role="tabpanel"` on each content panel
- `aria-selected="true"` on the active tab
- `aria-controls` connects each tab to its panel
- `aria-labelledby` connects each panel to its tab

**4.2 Keyboard Interaction**
- Left/Right Arrow keys switch between tabs in the tablist
- Tab key moves focus from the tablist into the active tab panel content
- Shift+Tab returns focus to the selected tab in the tablist
- Some implementations use automatic activation (arrow selects and shows), others use manual (arrow moves, Enter activates)

**4.3 Screen Reader Behavior**
- On entering tablist: "Tab 1, selected, tab, 1 of 3"
- Arrow to next tab: "Tab 2, tab, 2 of 3"
- Tab into panel: reads the tab panel content
- Position information (1 of 3) helps users understand the component

**4.4 Testing Tab Panels**
- Navigate to the tablist
- Use arrow keys to move between tabs
- Verify selected tab announcements
- Tab into the panel content, verify correct content loads
- Test with screen reader to hear role and state announcements

**Key Message:** Tab panels require coordinated ARIA roles, keyboard interaction, and focus management. Designers should specify the keyboard interaction model (automatic vs manual activation) in their annotations.

### Section 5: Live Regions (5 min)

**5.1 What Are Live Regions?**
- Page areas that update dynamically without a full page reload
- `aria-live` attribute tells screen readers to announce updates
- Three values: `off` (default), `polite` (waits for pause in speech), `assertive` (interrupts immediately)
- Common uses: form validation messages, chat messages, search result counts, progress indicators

**5.2 Live Region Roles**
- `role="status"` implies `aria-live="polite"`: for non-urgent status updates
- `role="alert"` implies `aria-live="assertive"`: for urgent messages requiring immediate attention
- `role="log"` implies `aria-live="polite"`: for sequential information (chat logs, activity feeds)
- `role="timer"` does not imply live behavior by default

**5.3 Common Live Region Failures**
- Dynamic content updates with no `aria-live`: screen reader users never know something changed
- Everything marked `assertive`: interrupts users constantly, making the page unusable
- Live region added after content changes: screen reader misses the update (region must exist in DOM first)
- Search results count not announced: user submits search but gets no feedback

**5.4 Designer Decisions for Live Regions**
- Which updates need to be announced? (Not everything: be selective)
- Is this urgent (assertive) or can it wait (polite)?
- Should the update replace previous content or add to it?
- Does the user need to take action, or is this informational?

**Key Message:** Live regions bridge the gap between visual updates and screen reader awareness. Designers must decide which dynamic changes are important enough to announce and at what urgency level.

### Section 6: Summary and Assessment (5 min)

**6.1 Key Takeaways**
- Tables: specify headers and scope so cell navigation has context
- Forms: group related fields, associate errors, mark required fields
- Dialogs: specify focus on open, focus trapping, focus return on close
- Tab panels: specify keyboard interaction model, ARIA roles, selected state
- Live regions: decide which updates to announce and at what urgency

**6.2 The Designer's Role**
- You don't write the ARIA code, but you specify the behavior
- Design annotations should include: focus management, keyboard interaction, announcement behavior
- Screen reader testing validates that your specifications were implemented correctly

**6.3 Quiz Preview**
- 5 questions covering table navigation, dialog focus management, and live regions

**6.4 Next Lesson Preview**
- L12: Screen Magnification
- How magnification users experience designs
- Transition from screen reader AT to visual AT

---

## Materials Needed

- Mac with VoiceOver (built-in)
- Windows machine or VM with NVDA installed
- Headphones for each student
- Prepared test pages with:
  - Data table (properly marked up and one without headers)
  - Multi-section form with fieldset/legend and error states
  - Modal dialog with proper focus management
  - Tab panel component
  - Page with live region for status messages
- Screen reader shortcut reference card (from L10, extended with table commands)
- ARIA Authoring Practices Guide open for reference

---

## Instructor Notes

### Common Student Questions

**Q: Do I need to memorize all the table navigation keys?**
A: No. Know that table navigation exists, understand what it should announce (headers provide context), and use a reference card during testing. The important thing is recognizing when table markup is correct or missing.

**Q: Why is dialog focus management so complicated?**
A: Because dialogs interrupt the normal page flow. Without explicit focus management, the screen reader has no way to know a dialog appeared, and the user can wander into background content they shouldn't be interacting with.

**Q: When should I use polite vs assertive for live regions?**
A: Default to polite for almost everything. Use assertive only for time-sensitive errors or critical alerts that require immediate user attention. Overusing assertive makes the page unusable because it constantly interrupts the user.

**Q: Do mobile screen readers handle these patterns the same way?**
A: The ARIA patterns work the same, but the interaction is gesture-based. Dialogs still trap focus (swipe navigation stays within the dialog). Tab panels use swipe navigation instead of arrow keys. Live regions are announced the same way. The underlying ARIA semantics are the same across platforms.

**Q: As a designer, do I really need to specify ARIA roles?**
A: You specify the behavior, not the code. Your annotation should say "this is a modal dialog that traps focus," not "add role=dialog aria-modal=true." But knowing the ARIA patterns helps you communicate clearly with engineering and verify implementations.

### Timing Adjustments

If running short:
- Reduce hands-on time in Sections 1.4 and 3.4
- Combine tab panels and live regions into a single demo-only section
- Skip the poorly-marked-up table comparison

If running long:
- Extend hands-on time for dialogs (most impactful pattern)
- Add a "find the issue" exercise where students test a page with multiple broken patterns
- Allow students to test with both VoiceOver and NVDA for comparison

### Classroom Setup Notes
- Pre-build all test pages (table, form, dialog, tabs, live region)
- Test all demos with both VoiceOver and NVDA before class
- Ensure ARIA Authoring Practices Guide is accessible during class
- Have the L10 shortcut reference cards available for students who need them
- Consider pairing Mac and Windows users so they can compare screen reader behavior

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L11: Screen Reader Navigation Patterns*
