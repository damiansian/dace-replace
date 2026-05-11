# Define Badge Final Assessment: Question Bank

**Course:** DACE (Design Accessibility Certified Expert)  
**Badge:** Define  
**Assessment Type:** Cumulative Knowledge Check  
**Points:** 25 (1 point per question)  
**Format:** Multiple choice, open book  
**Outcomes Tested:** All Define Badge outcomes (2A-2H)

**Note:** All correct answers are set to option A. Canvas will shuffle answer order.

---

## Question 1: [COMPLETED] (Outcome 2A.01)

**Stimulus:**

stimuli/2a-01-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=0-1)

**Alt text:** "Two views of the same web page layout displayed side by side with the Stark Blueline tool active. The left view shows 13 numbered sequential markers connected by a blue line, tracing through all readable content elements on the page — headings, body text, images, and interactive elements. The right view shows only 3 numbered markers connected by a blue line, tracing through the interactive elements only — the focusable controls such as links and buttons."

**Question:**

The Blueline on the left has 13 stops and the right has 3 stops. How can you account for the difference?

**Answer Options:**

A) The left is showing the reading order and the right is showing the focus order.
B) The left is demonstrating the Show numbers feature of Voice Control and the right is demonstrating the Grid overlay feature.
C) The left is showing the nested rank of each element and the right is showing browse mode order.
D) The left is demonstrating the Rotor feature of VoiceOver and the right is demonstrating the Landmarks feature.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Reading order and focus order are two distinct traversal paths. Reading order (the sequence a screen reader follows in browse mode using arrow keys) includes every element that can be announced: headings, paragraphs, images with alt text, lists, and interactive controls. This produces 13 stops because all content is included. Focus order (the sequence reached by pressing Tab) visits only interactive elements such as links, buttons, and form inputs. This produces just 3 stops. The Stark Blueline tool can visualize both paths, and the difference in count is expected: reading order always has more stops because non-interactive content is readable but not focusable."

**If B selected:**
"Not quite. Voice Control's 'Show numbers' overlays numbered badges on interactive elements for number-based targeting, and the Grid overlay divides the screen into numbered zones for spatial targeting. Neither produces a sequential numbered path tracing through 13 or 3 content stops the way the Blueline tool does. These are voice control navigation aids, not reading or focus order inspection tools; they serve a different purpose and display differently."

**If C selected:**
"Not quite. 'Nested rank' is not a standard accessibility inspection concept; there is no tool output that labels elements by nesting depth as a numbered traversal path. Additionally, browse mode order is another name for reading order (the virtual cursor path through all content), not a separate 3-stop path. The left view's 13 stops and right view's 3 stops reflect reading order versus focus order: two real and distinct accessibility traversal paths."

**If D selected:**
"Not quite. The VoiceOver Rotor is a navigation overlay (VO+U) that presents a list of elements by type — such as headings, links, or form controls — for jump navigation. The Landmarks feature similarly lists landmark regions. Neither produces a numbered sequential path diagram with stops connected by a line. The Blueline tool shown here is an accessibility design inspection tool (such as Stark) that visualizes reading order and focus order as separate traversal paths."

---

## Question 2: [COMPLETED] (Outcome 2A.02)

**Stimulus:**

stimuli/2a-02-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=0-1)

**Alt text:** "A browser Accessibility pane showing the accessibility tree entry for a button element. The pane displays three properties: Role: button, Name: 'Cart', State: disabled (shown as 'dimmed' in the tree). No aria-label property is listed separately — the name 'Cart' is already resolved and shown as the accessible name."

**Question:**

Based on the accessibility tree presented here, what will the screen reader read?

**Answer Options:**

A) "Cart, dimmed, button"
B) Because it has no aria-label, it will just read "button"
C) "Cart, not specified, button"
D) "Cart, invalid entry, button"

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Screen readers announce three things for an interactive element: its name, its state, and its role, in that order. The accessibility tree shows the resolved accessible name is 'Cart', the state is disabled (displayed as 'dimmed' in the tree), and the role is 'button'. VoiceOver on macOS specifically uses the word 'dimmed' to describe disabled controls. The announcement 'Cart, dimmed, button' maps directly to what the accessibility tree exposes: name → state → role."

**If B selected:**
"Not quite. The absence of an explicit `aria-label` attribute does not mean the element has no accessible name. The accessibility tree shows a resolved name of 'Cart' — this name may come from visible text content inside the button, an `aria-label`, a linked `aria-labelledby`, or an image alt attribute. The accessibility tree always shows the computed name, regardless of which technique provided it. The screen reader will announce 'Cart', not just 'button'."

**If C selected:**
"Not quite. 'Not specified' is not a valid state announcement for a disabled button. The accessibility tree shows the state as disabled — which VoiceOver announces as 'dimmed'. The word 'not specified' sometimes appears in accessibility trees when a property has no value set, but it does not describe a disabled state. The correct announcement for this element is 'Cart, dimmed, button'."

**If D selected:**
"Not quite. 'Invalid entry' maps to the `aria-invalid` attribute, which signals a validation error in a form field. The state shown in the accessibility tree here is disabled, not invalid. These are distinct states with different ARIA properties and different screen reader announcements. A disabled button is announced as 'dimmed' (in VoiceOver); an invalid form field is announced with 'invalid data' or 'invalid entry' depending on the screen reader."

---

## Question 3: [COMPLETED] (Outcome 2A.03)

**Stimulus:**

stimuli/2a-03-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=0-1)

**Alt text:** "A material appearance selector showing four options arranged in a row: Plastic-Glossy, Plastic-Matte, Metal-Brushed, and Ceramic. The Plastic-Glossy option has a solid blue background, visually indicating it is the selected choice. The other three options have a neutral background. To the right, a browser Accessibility pane shows the inspected properties for the Plastic-Glossy element: Role: option, Name: 'Plastic-Glossy', States: focusable, selectable. No aria-selected property is shown."

**Question:**

This design visually indicates the selected material using a blue background. When inspecting the component in the browser’s Accessibility pane, the following information is shown:
- Role: option
- Name: “Plastic-Glossy”
- States: focusable, selectable

Which property/value should appear in the Accessibility pane to ensure the programmatic state matches the visual presentation?

**Answer Options:**

A) aria-selected: true
B) aria-filled: blue
C) aria-describedby: Appearance
D) title: “Plastic-Glossy is the chosen appearance” 

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. The accessibility pane already shows that this element has `role: option` and a `selectable` state — meaning it is designed to carry a selected or unselected value. `aria-selected: true` is the programmatic property that matches the visual blue background selection. Screen readers announce this as 'selected' when reading the element. Without it, a screen reader user receives no indication that this option is the currently chosen one. WCAG 1.3.3 requires that state information not be conveyed through visual characteristics — such as color — alone."

**If B selected:**
"`aria-filled` is not a valid ARIA attribute. ARIA has no property for communicating background color or visual fill. Even if added to the markup, screen readers and accessibility APIs would ignore it — they only respond to recognized ARIA states and properties. The correct approach is `aria-selected: true`, which communicates selection state through a standardized mechanism that assistive technologies understand."

**If C selected:**
"`aria-describedby` associates supplementary description text with an element — it is used for additional context or instructions, not to communicate interactive state. Pointing to a label like 'Appearance' does not tell assistive technology that this option is selected. A screen reader might announce the description text, but the element's state in the accessibility tree would remain incomplete. Selection state must be expressed through ARIA state attributes like `aria-selected`, not through description relationships."

**If D selected:**
"The `title` attribute provides supplementary text that browsers may expose as a tooltip and screen readers may announce in some contexts — but it is not a programmatic state indicator. A sentence like 'Plastic-Glossy is the chosen appearance' in a `title` attribute does not update the element's state in the accessibility tree. Screen readers do not reliably expose `title` text across all contexts or interaction modes, and it cannot substitute for a recognized ARIA state. The accessibility pane would still show no `aria-selected` value, leaving the selected state invisible to assistive technology users."

---

## Question 4: [COMPLETED] (Outcome 2B.01)

**Stimulus:**

stimuli/2b-01-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-2)

**Alt text:** "Three panels illustrating Voice Control targeting methods side by side. The left panel shows name-based targeting: a UI with buttons labeled 'Submit' and 'Cancel', with a voice command bubble reading 'Click Submit'. The center panel shows number overlay targeting: the same UI with numbered badges overlaid on each interactive element, and a command bubble reading 'Click 3'. The right panel shows grid overlay targeting: the screen divided into a numbered grid of zones, with a command bubble reading 'Click 4' to zoom into a grid cell."

**Question:**

What targeting method has the lowest cognitive load for voice control users?

**Answer Options:**

A) Name-based targeting
B) Grid overlay targeting
C) Number overlay targeting
D) Keyboard-based targeting

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Name-based targeting maps directly to what the user already sees — they read the visible label of the element they want to activate and speak that name (e.g., 'Click Submit'). No additional mental model, mapping step, or working memory is required. The connection between what is seen and what is said is immediate and natural, which is why name-based targeting has the lowest cognitive load of the three Voice Control targeting methods. This is also why providing accurate accessible names on all interactive elements is a foundational design requirement for voice control accessibility."

**If B selected:**
"Not quite. Grid overlay targeting divides the screen into a numbered grid of zones. To reach a target, the user must invoke the grid, identify which cell contains their target element, speak that cell number to zoom in, and repeat the process until they reach the precise element. This requires spatial reasoning about cell boundaries, multiple interaction steps, and working memory across those steps — significantly higher cognitive load than simply speaking the visible name of the element they want."

**If C selected:**
"Not quite. Number overlay targeting assigns a number to each interactive element and requires the user to invoke the overlay (e.g., 'Show numbers'), scan all numbered elements, identify the number for their target, and then speak it. This introduces a mapping step between the visible element and its assigned number — the user must hold a number in working memory while locating it. It is more demanding than name-based targeting, where no mapping is needed: the user speaks what they already see."

**If D selected:**
"Not quite. Keyboard-based targeting via voice — speaking 'Press Tab' or 'Press arrow key' repeatedly to move through elements — requires the user to predict how many steps are needed, track their position in the focus order, and issue multiple sequential commands. There is no way to jump directly to a target; the user must navigate step by step. This is the most effortful method and provides no efficiency gain. It also relies on a predictable, logical focus order, which is not guaranteed in all interfaces."

---

## Question 5: [COMPLETED] (Outcome 2B.02)

**Stimulus:**

stimuli/2b-02-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-2)

**Alt text:** “A screenshot of the Adobe Express web interface on a desktop browser. The main content area shows two section headings side by side: 'Create' on the left and 'Design' on the right, each followed by a grid of template thumbnails. The page includes a top navigation bar and a left sidebar with icons.”

**Question:**

The words “Create” and “Design” in Adobe Express are headings. On a desktop browser, which screen reader mode would be used to read that content?

**Answer Options:**

A) Browse mode, because it reads both static and interactive content in the order it appears in the DOM.
B) Focus mode, because that mode moves through elements such as headings, links, landmarks, and form controls.
C) Rotor mode, because it reads content left to right and top to bottom, and the two headings are adjacent.
D) VoiceOver mode, because you must use the VoiceOver modifier keys to move to static content like headings.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
“Correct. Browse mode (also called reading mode or virtual cursor mode in NVDA and JAWS) is the default mode for reading web content. It moves through all content in DOM order using arrow keys, including both static elements like headings and interactive elements like links and buttons. Because 'Create' and 'Design' are headings, not interactive controls, the screen reader stays in browse mode to read them. No mode switch is required.”

**If B selected:**
“Not quite: the description given here actually describes browse mode behavior, not focus mode. Focus mode (also called forms mode or application mode) is a specialized mode that engages when a user enters a form field or interactive widget like a textbox. In focus mode, keystrokes are passed directly to the element for typing and interaction, and most non-interactive content — including headings — is not reachable via arrow keys. Headings like 'Create' and 'Design' are read in browse mode, not focus mode.”

**If C selected:**
“Not quite. The Rotor is not a mode in the browse/focus sense — it is a VoiceOver-specific navigation overlay (accessed with VO+U on macOS) that lets users jump between elements of a specific type, such as all headings or all links. It does not describe how content is read left to right or top to bottom. That linear, DOM-order reading behavior is characteristic of browse mode. The question asks which mode is used to read the headings, and the answer is browse mode.”

**If D selected:**
“Not quite. 'VoiceOver mode' is not a recognized screen reader mode. VoiceOver is the name of Apple's built-in screen reader for macOS and iOS — not a mode within a screen reader. Like other screen readers, VoiceOver has its own version of browse mode (reading content with VO+arrow keys) and forms/interaction mode (engaging with interactive elements). Headings on a desktop browser are read using VoiceOver's equivalent of browse mode, not a special modifier-key mode separate from it.”

---

## Question 6: [COMPLETED] (Outcome 2B.03)

**Stimulus:**

stimuli/2d-03-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-2)

**Alt text:** "A design layout with accessibility annotations showing three Navigation landmark regions marked on the page. Each annotation label reads 'Nav' followed by a unique accessible name: for example, 'Nav: Primary', 'Nav: Secondary', and 'Nav: Breadcrumb'. The Stark accessibility sidebar is visible on the right, listing the three Navigation landmarks with their respective names."

**Question:**

The designer has used the Navigation landmark three times in this layout. From an implementation perspective, did they follow the technical requirements for landmark usage?

**Answer Options:**

A) Yes. They provided unique accessible names for each.
B) Yes. The nav items stack vertically in the layout and the Stark Sidebar.
C) No. The WCAG states there can only be one Navigation landmark.
D) No. The annotations say "Nav" but should say "Navigation landmark region."

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Multiple Navigation landmarks are permitted — ARIA does not restrict how many times a landmark role can appear on a page. What the ARIA specification does require is that when the same landmark role is used more than once, each instance must have a unique accessible name (provided via `aria-label` or `aria-labelledby`). This allows screen reader users to distinguish between them when navigating by landmarks. The designer met this requirement by giving each Navigation landmark a distinct name."

**If B selected:**
"Not quite. The vertical stacking of nav items and the presence of the Stark Sidebar are layout and tooling details — neither is the technical requirement for valid landmark usage. The ARIA rule for using the same landmark type multiple times is that each instance must have a unique accessible name. How the navigation items are arranged visually and which annotation plugin is in use have no bearing on whether the landmark implementation is correct."

**If C selected:**
"Not quite. WCAG and the ARIA specification do not limit the Navigation landmark to a single instance per page. Multiple Navigation landmarks are valid and expected in many layouts — for example, a page with a primary navigation, a secondary navigation, and a breadcrumb trail. The requirement when using the same landmark role more than once is that each instance carries a unique accessible name so screen reader users can tell them apart. There is no one-landmark-per-type rule."

**If D selected:**
"Not quite. 'Nav' is standard shorthand in design annotations and does not need to spell out 'Navigation landmark region' to be valid. Annotation labels are communication tools for the design-to-development handoff — what matters is that developers understand what landmark is intended, not that the label matches a specific phrase. The technical validity of the landmark usage depends on unique accessible names being specified, not on the wording of the annotation label."

---

## Question 7: [COMPLETED] (Outcome 2B.01/2B.02/2B.03)

**Question:**

What is an efficient way to determine the structural and interactive aspects of a webpage (Landmarks, headings, interactive controls, and links) when testing with a screen reader on your work provided Mac computer?

**Answer Options:**

A) With VoiceOver, open the Rotor tool
B) With Voice Control, vocalize "Show names"
C) With Live Speech, vocalize "Show accessibility properties"
D) With Vocal Shortcuts, open the Elements list

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. The VoiceOver Rotor (activated with VO+U on macOS) provides a quick-navigation menu that lets you browse structural and interactive elements by category — including Landmarks, Headings, Links, Form Controls, Tables, and more. Using the Rotor, a tester can rapidly survey which landmark regions exist, how the heading hierarchy is structured, and which interactive controls are present without reading through all of the page content linearly. It is the most efficient built-in VoiceOver tool for this kind of structural audit."

**If B selected:**
"Not quite. 'Show names' is a Voice Control command — it overlays the accessible names of interactive elements on screen to help users target them by speech. Voice Control is an assistive technology for hands-free navigation by voice command, not a screen reader. It does not read out page structure, announce headings or landmark regions, or provide a survey of links and form controls the way VoiceOver's Rotor does."

**If C selected:**
"Not quite. Live Speech is an iOS and macOS accessibility feature that allows users to type text and have it spoken aloud — it is an output tool for people who cannot speak, not a screen reader. It does not interpret or report on the accessibility structure of a webpage. There is no 'Show accessibility properties' command in Live Speech, and it has no mechanism to enumerate headings, landmarks, links, or interactive controls."

**If D selected:**
"Not quite. Vocal Shortcuts is a macOS accessibility feature that lets users trigger custom actions with spoken phrases — it is not a screen reader and does not have an 'Elements list.' The feature most analogous to what the question describes is VoiceOver's Rotor, not a feature from a different accessibility system. Each macOS accessibility feature has a distinct purpose: Vocal Shortcuts for custom voice-triggered actions, Live Speech for text-to-speech output, Voice Control for hands-free navigation, and VoiceOver for screen reading."

---

## Question 8: [COMPLETED] (Outcome 2C.01)

**Stimulus:**

stimuli/2c-01-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-3)

**Alt text:** "A browser window shown at 400% zoom displaying a web application. The visible viewport is almost entirely consumed by three stacked persistent elements: a sticky global header across the top, a sticky sidebar navigation along the left edge, and a sticky secondary header at the top of the main content panel. Only a small strip of scrollable page content is visible beneath the stacked sticky regions."

**Question:**

At 400% browser zoom (equivalent to a 320 CSS pixel wide viewport), a web app includes:
1. A sticky global header
2. Sticky side navigation
3. A sticky header inside the main content panel

These persistent elements occupy most of the vertical viewport, leaving only a small area available for scrolling content.

Which change would best support compliance with WCAG 2.2 SC 1.4.10 (Reflow)?

**Answer Options:**

A) Remove the sticky header inside the main content panel.
B) Add internal scrollbars within the content panel.
C) Reduce the stated zoom support for the product to 200%.
D) Decrease text size at high zoom levels.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. WCAG 1.4.10 Reflow requires that content can be presented at 320 CSS pixels wide without loss of content or functionality. At 400% zoom, multiple stacked sticky elements consuming the vertical viewport create a reflow failure — users can't see or scroll meaningful content. The sticky global header and sidebar may be justifiable for navigation, but a secondary sticky header inside the main content panel is unnecessary interface chrome that disproportionately costs vertical space at high zoom. Removing it recovers scrollable area without sacrificing navigation."

**If B selected:**
"Not quite. Adding internal scrollbars within a content panel creates a two-dimensional scrolling problem — users would need to scroll both the page and the nested panel independently. WCAG 1.4.10 specifically prohibits requiring two-dimensional scrolling for content that doesn't inherently require it (such as maps or data tables). Internal scrollbars compound the reflow problem rather than resolve it, and introduce an additional usability barrier for keyboard and assistive technology users."

**If C selected:**
"Not quite. Reducing the product's stated zoom support is not a technical fix — it is an attempt to opt out of an accessibility requirement. WCAG 1.4.10 is a Level AA success criterion requiring content to reflow at 320 CSS pixels (the equivalent of 400% zoom on a standard 1280px display). Changing a support statement does not change how the interface behaves or reduce the impact on users who need high zoom. Conformance obligations are not waived by declaring narrower support."

**If D selected:**
"Not quite. Shrinking text at high zoom levels undermines the reason users zoom in the first place. Users increase zoom because they need larger text — reducing it at high zoom removes the benefit they are seeking and introduces a new accessibility failure. WCAG 1.4.10 does not permit decreasing text size as a reflow strategy. The requirement is that content reflow into a single column at 320 CSS pixels, not that it shrink to fit within a layout that has not adapted."

---

## Question 9: [COMPLETED] (Outcome 2C.02)

**Stimulus:**

stimuli/2c-02-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-3)

**Alt text:** "A contact form shown in two side-by-side states. The left state shows the form after a failed submission attempt, with inline error messages appearing immediately below each invalid field — for example, a red error message ‘Please enter a valid email address’ appears directly beneath the Email input. The right state shows an alternative error layout where all error messages are grouped in a summary block beneath the Submit button, with each message listed separately."

**Question:**

When displaying error messages in a form submission, where should the designer place them so they’re most visible if a user has increased their screen magnification?

**Answer Options:**

A) Error messages should be displayed inline, immediately below the relevant field/input.
B) All error messages should be grouped below the form’s submit button, so they’re close to where the user took their last action.
C) Each error message should be highlighted with details shown in a pop-up window so the user doesn’t miss important details.
D) Error messages should replace the form label so the user can see the error message without having to scroll.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. At high magnification, users only see a small portion of the screen at a time — their viewport is a narrow window panning across the page. Placing an error message immediately below the field it references keeps the error in close spatial proximity to the input it describes. When the user tabs to or focuses on the field, the error message is likely visible within the same magnified viewport without requiring any panning. This is the proximity principle applied to error feedback: the closer the error is to the field, the less effort a magnified user must spend locating and interpreting it."

**If B selected:**
"Not quite. Grouping all error messages below the Submit button places them far from the fields they reference. A magnified user focused on a field in the middle of the form would need to pan down past all other fields to find the error, read it, then pan back up to correct the field — a significant navigation burden under magnification. This pattern also makes it difficult to associate each error with its specific field when the spatial relationship is broken. Proximity between the error message and its field is essential for screen magnification users."

**If C selected:**
"Not quite. Pop-up windows introduce several problems at high magnification. A pop-up may render partially off-screen, overlap the field it references, or appear outside the user’s current magnified viewport entirely. It also requires a dismissal interaction before the user can correct the field, adding an extra step. Additionally, pop-ups triggered per field create a disruptive, repetitive pattern when multiple errors exist. Inline messages co-located with their fields avoid all of these issues and keep error feedback within the natural spatial flow of the form."

**If D selected:**
"Not quite. Replacing the form label with the error message removes persistent identifying information from the field. A user who did not see the error initially — or who needs to reference the field’s name while correcting their input — loses access to that information. This pattern also risks a WCAG 1.3.1 failure if the programmatic label is removed along with the visible one. The correct approach is to display the error message in addition to the label, not in place of it — both pieces of information need to be available simultaneously."

---

## Question 10: [COMPLETED] (Outcome 2C.03)

**Stimulus:**

stimuli/2c-03-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-3)

**Alt text:** "A navigation sidebar shown in two states side by side. The expanded state on the left displays navigation items with icons and visible text labels. The collapsed state on the right shows the same items as icons only, with labels hidden. On the collapsed state, one icon is hovered and a tooltip appears immediately to the right of the icon, showing the label text for that navigation item."

**Question:**

As the designer considers screen magnification for the following design, they decide to add a collapsible state of the navigation to reduce the amount of space the navigation takes up. Without the labels however, they decide to add a tooltip and place it to the right of the icon. Do you agree with this approach?

**Answer Options:**

A) Yes. Proximity is key for screen magnification.
B) Yes. The tooltip needs to be to the right for screen readers to find it.
C) No. It should be below the icon so it doesn't cover up content in the main section of the page.
D) No. We cannot use tooltips at high magnification levels.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. At high magnification, users can only see a small portion of the screen at a time — their effective viewport is a narrow window moving across the page. When a tooltip appears far from its trigger, a magnified user may not see it because it falls outside their current view. Placing the tooltip immediately to the right of the icon keeps it in close spatial proximity, maximizing the chance that both the icon and its label are visible simultaneously within the magnified viewport. Proximity between a trigger and its associated content is the core screen magnification design principle this question tests."

**If B selected:**
"Not quite: placing the tooltip to the right is the correct decision, but the reason given here is wrong. Screen readers do not locate tooltip content by its visual position on screen. They read the accessible name or description from the DOM regardless of where the tooltip renders visually. The reason for placing the tooltip to the right is spatial proximity for screen magnification users, not screen reader discoverability."

**If C selected:**
"Not quite. While placing a tooltip below its trigger is common in some design patterns, it is not the optimal choice in a collapsed sidebar navigation. In a vertical icon list, the user's viewport at high zoom naturally extends horizontally as they focus on an icon row. Placing the tooltip to the right keeps it adjacent within that horizontal view. Placing it below risks pushing it out of the magnified viewport — the user would need to pan downward to see a label that could have appeared beside the icon they are already focused on."

**If D selected:**
"Not quite. Tooltips are a valid and commonly used pattern at high magnification levels — the challenge is not whether to use them, but where to position them. The key design consideration is proximity: the tooltip must appear close enough to its trigger that both are visible within the magnified viewport at the same time. Avoiding tooltips entirely is not the correct guidance; placing them thoughtfully — in this case, to the right of the icon — is."

---

## Question 11: [COMPLETED] (Outcome 2D.01)

**Stimulus:**

stimuli/2d-01-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-4)

**Alt text:** “A web interface with an open dropdown menu that appeared after the user invoked the 'Options' button. The menu is expanded, displaying several labeled items. The macOS Voice Control overlay is active, with numbered labels visible on interactive elements throughout the page.”

**Question:**

With Voice Control, the user said “Click Options” and this opened the menu. What should the user say to dismiss the menu?

**Answer Options:**

A) “Press escape key”
B) “Escape”
C) “Exit menu”
D) “Go back”

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
“Correct. In macOS Voice Control, keyboard key presses follow the command grammar 'Press [key name]' — for example, 'Press escape key', 'Press return key', 'Press tab key'. Because dismissing a dropdown menu requires sending the Escape keystroke, the correct voice command is 'Press escape key'. This command grammar is consistent and predictable: whenever a keyboard shortcut or key press is needed, the user speaks 'Press' followed by the key name.”

**If B selected:**
“Not quite. Speaking 'Escape' alone is not a recognized Voice Control command for pressing the Escape key. macOS Voice Control requires the 'Press' prefix to execute a key press — the correct command is 'Press escape key'. Without the 'Press' prefix, Voice Control does not interpret the spoken word as a keyboard instruction. Voice Control has a defined command grammar that must be followed for commands to execute reliably.”

**If C selected:**
“Not quite. 'Exit menu' is not a built-in Voice Control command. Voice Control works by matching spoken words to visible UI labels, recognized command phrases, or the key press syntax 'Press [key name]'. There is no 'Exit menu' command in Voice Control's command grammar, and the menu itself does not have a visible control labeled 'Exit menu' to click. Voice Control users must work within the commands the software defines — they cannot invent new phrases.”

**If D selected:**
“Not quite. 'Go back' is a Voice Control command that triggers browser back navigation — it moves to the previous page in the browser history, not dismisses an open menu. Using it here would navigate away from the current page rather than close the dropdown. Dismissing a menu requires sending the Escape keystroke, which in Voice Control is spoken as 'Press escape key'.”

---

## Question 12: [COMPLETED] (Outcome 2D.02)

**Stimulus:**

stimuli/2d-02-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-4)

**Alt text:** "The Adobe Experience Manager Experience Hub landing page showing a data table of experiences. Each row in the table contains content metadata and a three-dot ellipsis icon button in the rightmost column. The three-dot icon button has no visible text label. The macOS Voice Control overlay is active, and the three-dot icon button displays no speakable name label — only a blank or generic marker — while other labeled buttons on the page show their names in the overlay."

**Question:**

This is the Experience Hub landing page on Adobe Experience Manager. You are quality assessing the experience and notice this design contains a few voice control barriers, one of which is the three-dot icon within the table. Regarding voice control barriers, what advice would you offer your team pertaining on the three-dot icon?

**Answer Options:**

A) Provide an accessible name for interactive control.
B) Add a tooltip that appears on hover.
C) Add a visible text label next to the icon.
D) No change is needed because the button is visually identifiable.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Voice Control activates interactive elements by matching spoken words to their accessible names in the accessibility tree. A three-dot icon button with no accessible name gives Voice Control nothing to display or respond to — the user cannot speak a name to target it and must fall back to number or grid overlay targeting. The fix is to provide a programmatic accessible name via `aria-label` (e.g., 'More options for [item name]'). In a table with multiple rows, each instance should have a unique name so Voice Control users can distinguish and target specific rows."

**If B selected:**
"Not quite. Tooltips require a hover interaction — Voice Control users cannot hover over an element to discover its name before speaking a command. Even if a tooltip appeared on hover, it would not set the button's accessible name in the accessibility tree unless explicitly wired to do so (e.g., via `aria-labelledby`). The accessible name must be present in the DOM before the user speaks — it cannot be conditionally revealed by a pointer interaction that the user hasn't performed yet."

**If C selected:**
"Not quite: while a visible text label would help and would give voice control users a name to speak, it is not the most targeted recommendation for this specific barrier. A three-dot icon in a dense data table typically cannot accommodate a visible label without significant layout disruption. The voice control barrier is specifically the absence of an accessible name, which can be resolved programmatically via `aria-label` without changing the visual design. Specifying the accessible name in annotations is the designer's most direct contribution to fixing this."

**If D selected:**
"Not quite. Visual identifiability has no bearing on voice control accessibility. A sighted user running Voice Control can see the three-dot icon clearly — but if it has no accessible name, Voice Control has no name to display and the user still cannot speak a command to activate it. The accessibility tree, not the visual appearance, is what Voice Control reads. An unlabeled icon button is a functional barrier for voice control users regardless of how recognizable it looks."

---

## Question 13: [COMPLETED] Label in Name — AI Prompt Interface (Outcome 2D.03)

**Stimulus:**

stimuli/2d-03-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=2-4)

**Alt text:** "A web interface for an agentic AI tool. The layout includes a top navigation header and a left sidebar navigation panel. The main content area is largely empty, dominated by a single wide text input bar centered on the page. The input bar contains only dimmed placeholder text reading 'Ask anything…' with no visible persistent label above or beside the field to identify its purpose."

**Question:**

A design team is building an agentic AI interface that includes a header and left navigation panel. In the main content area, the only element is a large prompt bar where users can type questions or commands for the AI. The prompt bar currently uses placeholder text (e.g., “Ask anything…”) to indicate its purpose. The team is deciding whether this is sufficient or if the prompt bar should also include a persistent visible label above or next to the field.

What guidance will you give to best support accessibility and clarity for users interacting with the prompt bar?

**Answer Options:**

A) Add a persistent visible label that identifies the prompt bar. 
B) The existing placeholder text is sufficient to label the prompt bar.
C) Rely on minimal interface context to signal that the field is for entering prompts.
D) Display a help tooltip on hover explaining that the field accepts questions.  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Placeholder text disappears the moment a user begins typing, leaving the field with no visible label. A persistent label remains visible at all times — it gives voice control users a stable name to speak ('click Ask anything' won't work once the text vanishes), gives screen readers a reliable accessible name that doesn't depend on field state, and reduces cognitive load in an unfamiliar AI interaction model. WCAG 2.5.3 Label in Name requires that the accessible name contain the visible label text — and that requires a label that is actually visible."

**If B selected:**
"Not quite. Placeholder text fails as a persistent label because it disappears as soon as the user starts typing. A user who pauses mid-entry, makes an error, or uses a screen reader navigating by form fields has no visible or programmatic label to reference. Screen readers also expose placeholder text inconsistently once a value is present in the field. WCAG 1.3.1 requires that the field's purpose be programmatically determinable — placeholder alone doesn't reliably satisfy this."

**If C selected:**
"Not quite. Contextual inference cannot substitute for an explicit label, especially in a novel interface like an agentic AI product where many users may be unfamiliar with the interaction model. Users with cognitive disabilities, screen reader users navigating by form controls, and voice control users targeting by name all need a stable, explicit label. Designing for accessibility means making intent explicit — not relying on users to infer it from surrounding context."

**If D selected:**
"Not quite. Tooltips are not a substitute for a persistent visible label. They require a hover interaction, which is unavailable to keyboard-only users and unreliable on touch devices. Tooltip content is not consistently exposed as an accessible name by screen readers. A voice control user cannot trigger a hover event to discover a field's name before speaking a command. The label must be persistently visible to satisfy both WCAG 2.4.6 (Headings and Labels) and WCAG 2.5.3 (Label in Name)."

---

## Question 14: [COMPLETED] (Outcome 2E.01)

**Stimulus:**

stimuli/2e-01-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=5-3)

**Alt text:** "A side-by-side comparison of an Adobe Acrobat interface. The left panel shows the standard design with normal colors — a search input field with a visible light-gray border and white background. The right panel shows the same interface in Windows High Contrast Mode (dark theme). In the high contrast version, the search input has no visible border, making it indistinguishable from the surrounding dark background. Other interface elements such as divider lines and the Acrobat logo are visible in the high contrast view."

**Question:**

Testing the application in Windows High Contrast Mode and comparing it to the original, which issue is present that should be addressed?

**Answer Options:**

A) There is no border set around the input.
B) The app frame border should be white.
C) The divider lines should not be shown.
D) The Acrobat logo should be white and black like other svg images.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. In Windows High Contrast Mode, the system replaces design colors with a restricted set of system colors — background fills and box-shadows are stripped. An input field that relies only on its background color or a box-shadow to define its boundary becomes invisible against the page background in WHCM. A CSS `border` must be explicitly set on the input so the forced-colors system has a border value to map to a visible system color. Without it, users cannot identify where the input field is, which is a functional accessibility failure."

**If B selected:**
"Not quite. App frame borders appearing white in High Contrast Mode is expected and correct behavior. In WHCM dark themes, window and UI container borders are mapped to system colors such as `WindowFrame` or `ButtonText`, which render as white or light-colored against the dark background. This is the system working as designed; it is not a defect that needs to be corrected by the development team."

**If C selected:**
"Not quite. Divider lines remaining visible in WHCM is appropriate behavior. Structural separators help users understand the layout and organization of an interface — removing them would reduce usability in high contrast. Their appearance changes (color is mapped to a system color), but their presence is correct. Divider lines that survive forced colors are functioning as intended."

**If D selected:**
"Not quite. Changes to logo rendering in WHCM are generally expected, not errors to fix. How SVG images are affected depends on whether they are inline or embedded — inline SVG fills and strokes may be remapped by forced colors, while external image SVGs are typically left untouched. The appearance of the Acrobat logo shifting in high contrast is an expected outcome of the forced-colors environment. What matters is that the logo remains recognizable, not that it renders identically to other SVG elements."

---

## Question 15: [COMPLETED] (Outcome 2E.02)

**Stimulus:**

stimuli/2e-02-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=5-3)

**Alt text:** "A three-part composite image. The top section shows the Adobe Express 'Browse templates' tab bar in normal rendering: a row of pill-shaped tabs — All, Professional services (selected with a gray fill and bold text), Hospitality, Nonprofit, Healthcare, Real estate, Finance, Retail, and Government. The middle section shows the same tab bar in Windows High Contrast Mode on a black background: all tabs appear as white-outlined pills with visible white text, except the 'Professional services' selected tab which renders as an empty white oval with no visible text — its selected state has completely disappeared. The bottom section shows a reference chart titled 'Elements and style / Forced color override' with rows: color → CanvasText, background-color → Canvas, border-color → System border color, outline-color → System outline color, box-shadow → Removed entirely, text-shadow → Removed entirely, svg fill / stroke → System colors."

**Question:**

Look at the "Browse templates" from the Express home page'stab bar in both screenshots. What two aspects of the selected state could be causing the failure in high contrast mode when forced colors are active? Reference the chart provided from the lesson to help answer this question.


**Answer Options:**

A) Its text `color` or `background-color` properties
B) Its `outline-color` or `text-shadow` properties
C) Its `background-image` or `border-style`properties
D) Its `opacity` or `filter` properties

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. The reference chart shows that `color` is overridden to `CanvasText` and `background-color` is overridden to `Canvas` in forced colors mode. The selected state of the 'Professional services' tab relied on both of these properties to communicate selection — a distinct `background-color` fill to distinguish it from unselected tabs, and a `color` value for the tab text. When forced colors overrides both to system values, the text becomes invisible against the background (both collapse to the same system color), and the filled background that visually differentiated the selected tab from the others disappears. The selected state fails because its two primary visual signals were both authored properties that forced colors replaces."

**If B selected:**
"Not quite. The reference chart shows that `outline-color` is overridden to a system outline color (not removed) and `text-shadow` is removed entirely. While losing `text-shadow` could affect a decorative treatment, neither of these properties was responsible for the selected tab's core visual state — the filled background and the text. The failure shown in the WHCM screenshot is the complete disappearance of the tab's text and background fill, which are driven by `color` and `background-color`, not outline or shadow properties."

**If C selected:**
"Not quite. `background-image` does not appear in the forced color override chart at all — forced colors does not override `background-image` in the same way it overrides `background-color`. The selected state failure shown is caused by authored `color` and `background-color` values being replaced by system colors, not by an image or border style. Additionally, `border-style` (the type of border line, e.g. solid, dashed) is a structural property — it is `border-color` that gets overridden by forced colors, not the style."

**If D selected:**
"Not quite. Neither `opacity` nor `filter` appear in the forced color override chart, and neither was the source of the selected state's visual failure. `opacity` affects the transparency of an entire element, and `filter` applies graphical effects like blur or brightness — neither drives the background fill or text color that the selected tab relied on. The failure visible in the WHCM screenshot is specifically the loss of the tab's `background-color` fill and `color` text, both of which are directly overridden by the forced colors system."

---

## Question 16: [COMPLETED] (Outcome 2E.03)

**Stimulus:**

stimuli/23-03-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=5-2)

**Alt text:** "Two form fields rendered in Windows High Contrast Mode on a black background. The top field is labeled 'Search' and contains the text 'Adobe Photoshop' displayed in white. The bottom field is labeled 'Email' and contains the text 'joe@example.com' displayed in green. Both fields have white rounded-rectangle borders. The difference in text color between the two fields is the focus of the question."

Describe why there is a difference in color between the two form elements in the example shown in the stimulus here?

Go to [W3C's WAI tutorial page](https://www.w3.org/WAI/tutorials/forms/instructions/) on Forms. Turn on Windows High Contrast Mode to assist you in finding the answer.

**Answer Options:**

A) The Search field has value present and the Email field has a placeholder present.
B) The Search field is required and the Email field is read-only.
C) The Search field has an error state, and the Email field does not.
D) The Search field is not in keyboard focus and the Email field has keyboard focus. 

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. In Windows High Contrast Mode, the operating system applies CSS system colors based on the semantic role of text content. User-entered input values receive the `WindowText` system color — which appears white in a dark WHCM theme. Placeholder text receives the `GrayText` system color — which appears in a distinct, dimmer color (shown here as green). The Search field contains a real typed value ('Adobe Photoshop'), so WHCM renders it in `WindowText`. The Email field contains only placeholder text ('joe@example.com'), so WHCM renders it in `GrayText`. This color difference is WHCM correctly communicating a meaningful semantic distinction: one field has actual data, the other has only a hint."

**If B selected:**
"Not quite. Required and read-only states are real semantic distinctions in HTML (`required` and `readonly` attributes), and WHCM does reflect some state differences — for example, disabled fields may appear differently. However, neither required nor read-only state is responsible for the text color difference shown here. The green color is the `GrayText` system color applied by WHCM to placeholder text, not a state indicator for required or read-only fields."

**If C selected:**
"Not quite. An error state in WHCM typically affects the border color of the field — for example, an invalid field might receive the `Highlight` or `Mark` system color on its outline — not the color of the text content inside it. The green text shown in the Email field is not an error indicator; it is the `GrayText` system color that WHCM assigns to placeholder text. No error state is present in this example."

**If D selected:**
"Not quite. Keyboard focus in WHCM changes the border or outline of the focused element — typically applying the `Highlight` system color to the focus ring — not the color of the text inside the field. Both fields in this example appear unfocused (their borders are the same white outline color). The color difference between the two fields is in their text content: white `WindowText` for the Search field's typed value versus green `GrayText` for the Email field's placeholder."

---

## Question 17: [COMPLETED] (Outcome 2F.01)


**Question:**

The signal chain is the path a user preference travels from the moment a person expresses a need to the moment, if it arrives, that need is met in the rendered interface.

Which of the following OS-level preferences act as a signal of human need  that can be detected by CSS media queries to adjust the experience to Windows High Contrast Mode?


**Answer Options:**

A) forced-colors
B) prefers-reduced-color
C) prefers-color-scheme 
D) prefers-contrast  

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. `forced-colors` is the CSS media query that detects when a user has activated a forced color mode such as Windows High Contrast Mode (WHCM). When enabled, the operating system overrides the page's color palette with a limited system-defined set, and `@media (forced-colors: active)` allows designers and developers to detect this condition and make targeted adjustments — such as adding explicit CSS borders to elements that normally rely on background color alone for their boundaries. This is the correct signal in the chain: the user's OS preference → `forced-colors` media query → adapted interface."

**If B selected:**
"Not quite. `prefers-reduced-color` is not a real CSS media query — it does not exist in the CSS specification. You may be thinking of `prefers-reduced-motion` (which responds to motion sensitivity) or `forced-colors` (which responds to high contrast/forced color modes). Always verify media query names against the CSS specification; using a non-existent query means the condition will never match and the adaptation will never apply."

**If C selected:**
"Not quite. `prefers-color-scheme` detects whether the user has set their OS to a light or dark theme — it is the signal for dark mode, not for Windows High Contrast Mode. A dark theme and a forced color mode are distinct settings with different purposes: dark mode adjusts the overall color palette for comfort or preference, while forced colors (WHCM) replaces all colors with a limited, high-contrast system set to support users with low vision or photosensitivity. The correct media query for WHCM is `forced-colors`."

**If D selected:**
"Not quite. `prefers-contrast` detects whether the user has requested more or less contrast through OS accessibility settings (such as macOS Increase Contrast). While it is related to visual accessibility, it is not the media query that responds specifically to Windows High Contrast Mode. WHCM is a forced color environment — the OS takes full control of the color palette — and the correct detection query is `forced-colors: active`, not `prefers-contrast`."

---

## Question 18: [COMPLETED] (Outcome 2F.02)

**Stimulus:**

stimuli/2F.02.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=5-3)

**Alt text:** "A screenshot of the Spectrum 2 website (s2.spectrum.adobe.com) shown inside a browser window. The page displays a full-bleed hero section with a gradient background in purple, violet, and coral. Large white text reads 'The future is Spectrum 2' with a subtitle: 'Spectrum 2: what's next for Spectrum, Adobe's design system.' In the top-right corner of the page, a toggle switch labeled 'Reduce motion' is visible and switched on, indicating the reduced motion preference has been automatically activated."

**Question:**

Visit: https://s2.spectrum.adobe.com/ 

Notice the site has a reduced motion button that is automatically activated when the user has the "prefers reduced motion" system preference set at the operating system level. 

Which of the four criteria below distinguishes this feature as real user agency, and not just the appearance of real user agency? 

CHoose the option that BEST aligns to the feature. 

**Answer Options:**

A) Proximate: The control is reachable/achievable before the harm occurs. 
B) Session persistence: Prevents data loss when sessions are interrupted.
C) Pace control: Offers the ability to slow down, review, and take time without penalty.
D) Recoverable: The user can return to a safe state without losing work or context. 

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. This feature demonstrates real user agency through proximity — the control activates automatically, before the user is ever exposed to the motion. By reading the OS-level `prefers-reduced-motion` setting, the site intercepts the potential harm at the earliest possible moment. The user does not need to load the page, experience a triggering animation, and then hunt for a toggle to turn motion off. The preference is honored upfront, at the point of need. This is what separates a genuinely proximate control from the illusion of one — a control buried in a settings menu after the animation has already played is not proximate, even if it technically exists."

**If B selected:**
"Not quite. Session persistence refers to a design quality that preserves user data or state when a session is interrupted — for example, a form that saves draft content if the browser crashes. While session persistence is an important design consideration, it has no bearing on why this reduced motion feature constitutes real user agency. The feature auto-activates before any animation plays; session interruption is not involved."

**If C selected:**
"Not quite. Pace control describes a design quality that lets users slow down, pause, or review content at their own speed — for example, adjustable playback speed or extendable session timeouts. While reduced motion can help some users process content more comfortably, the specific value of this feature is that it prevents the harmful motion before it happens, not that it gives users control over animation speed. The correct criterion is proximity — the control acts before the harm, not during or after."

**If D selected:**
"Not quite. Recoverability describes a design quality that lets users undo an action or return to a safe state after something has already gone wrong — for example, an undo button after accidentally deleting content. This reduced motion feature is preventive, not corrective: it stops the vestibular trigger before it occurs. True recoverability would mean the user was already exposed to the motion and could then roll back — which is a weaker form of protection than preventing exposure entirely. The correct criterion is proximity, not recoverability."

---

## Question 19: [COMPLETED] (Outcome 2F.03)


**Question:**

On a profile page, clicking Save triggers a success panel that zooms from 0 to 100% scale and spins once. A tester enables prefers-reduced-motion in system settings, but the same animation still plays.

What should happen when prefers-reduced-motion is active?

**Answer Options:**

A) zoom-and-spin is replaced with a low-motion success state like instant state change or subtle fade.
B) Since motion can cause problems, disable the animation entirely for all users.
C) Provide a slider inline to the conformation component that allows the user to adjust the animation's speed and intensity.
D) Send the user to a static page designed for people that experience this problem that is separate but equal.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. When `prefers-reduced-motion` is active, the design should honor the user's preference by replacing or removing the disruptive motion — not eliminating animation for everyone. A low-motion alternative like an instant state change or a brief opacity fade communicates success just as clearly without the vestibular or neurological impact of a zoom-and-spin. WCAG 2.3.3 (Animation from Interactions, AAA) recommends exactly this approach: provide a way to disable non-essential motion without removing the interaction entirely. At minimum, good design practice means detecting the system preference via CSS (`@media (prefers-reduced-motion: reduce)`) or JavaScript and substituting a motion-safe version."

**If B selected:**
"Not quite. Disabling animation entirely for all users goes too far. The goal of `prefers-reduced-motion` is to respect individual user needs — not to impose a one-size-fits-all experience on everyone. Users who have not opted into reduced motion may benefit from or enjoy the animation for orientation and feedback. The right solution is to detect the preference and serve a motion-safe alternative only to users who need it, preserving the full animation for users who have not set this preference."

**If C selected:**
"Not quite. Providing an inline speed/intensity slider puts the burden of accommodation on the user at the moment they need the interface to work. The `prefers-reduced-motion` system setting already represents the user's expressed preference — the application should respect it automatically without requiring the user to configure the UI again mid-task. An inline control is also unlikely to be visible or operable before the animation triggers. Respecting the OS-level preference is the correct, low-friction implementation."

**If D selected:**
"Not quite. Providing a separate 'static page' for users with motion sensitivity would be a significant accessibility failure. Separate-but-equal experiences are inherently inequitable — they deliver a degraded, parallel experience rather than making the primary experience inclusive. WCAG's principle of Equal or Equivalent Experience requires that all users can accomplish the same tasks, not that some users are routed to a different interface. The correct approach is to adapt the existing UI based on the `prefers-reduced-motion` media query."

---

## Question 20: [COMPLETED] (Outcome 2G.01)

**Stimulus:**

stimuli/2g-01-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=5-4)

**Alt text:** "A composite screenshot showing the Adobe home page (adobe.com/home) in the top half and two analysis panels in the bottom half. The top half shows a horizontal tab bar with seven tabs: Featured, Generative AI, Imaging, Video, Design, Document, and 3D. The 'Featured' tab appears visually selected with a subtle color fill. Below the tabs, a grid of action cards promotes Adobe Firefly and Adobe Express content. The bottom-left panel shows a VoiceOver Form Controls rotor entry reading: 'Featured, Selected, tab, 1 of 7, Action card categories, tab group.' The bottom-right panel shows the Chrome DevTools Accessibility pane with the following properties for the tab element — Name: Featured, Role: Tab, Selected: true — along with additional computed properties in the accessibility tree."

**Question:**

You conducting systemic AT validation testing. With VoiceOver, you land on the Featured tab and observe is reads:

Featured, Selected, tab, 1 of 7, Action card categories, tab group

You then review the Accessibility Tree in the DevTools and notice the following:
Name: Featured
Role: Tab
Selected: true

As a Designer, you realize your job is not done until you also observe and test the visual presentation. Does the visual presentation match the AT experience?

[Test for yourself:](https://www.adobe.com/home)

**Answer Options:**

A) No. The selected state uses a color fill below 3:1 contrast ratio, therefore it "doesn't exist" meaning we cannot count it as a valid state indicator. Test failed. 
B) No. It doesn't look like a 'tab', it looks like a 'button.' Test failed.  
C) Yes. The selected state uses a visual affordance commensurate with [Spectrum 2 guidance for Tab states](https://s2.spectrum.corp.adobe.com/page/tabs/#states) to indicate the selected state. Test passed.
D) Yes. Adobe would never make such a basic mistake. Test passed.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Systematic AT validation requires checking both the programmatic state and the visual presentation independently — and comparing them. In this case, the AT experience is accurate: VoiceOver correctly announces 'Selected' and the accessibility tree confirms `Selected: true`. However, the visual selected indicator (the color fill beneath the Featured tab) falls below the WCAG 1.4.11 Non-text Contrast minimum of 3:1 against its adjacent background. A state indicator that fails this contrast threshold is effectively invisible to users who rely on vision to perceive UI state, meaning the visual presentation does not match the AT experience. The test fails on the visual side even though the programmatic implementation is correct. This is exactly the kind of split-pass/fail finding that systematic AT validation is designed to catch."

**If B selected:**
"Not quite. The visual resemblance to a 'button' rather than a 'tab' is a design observation, not an accessibility failure on its own. What matters from an accessibility standpoint is whether the correct semantics are conveyed — and they are: the element has Role: Tab, belongs to a tab group, and its selected state is programmatically set. The visual style of a component can vary from the generic 'tab' shape while still being semantically valid. The actual failure in this scenario is about state contrast, not visual form."

**If C selected:**
"Not quite. While a visual affordance for the selected state does exist, the test does not automatically pass just because some visual indicator is present. The quality of that indicator matters. WCAG 1.4.11 (Non-text Contrast) requires that visual indicators of UI component states — including selected, focus, checked, and expanded states — meet a minimum contrast ratio of 3:1 against adjacent colors. If the color fill used to indicate the selected tab falls below this threshold, it cannot be counted as a valid state indicator for users who perceive state visually. The Spectrum 2 guidance is a design reference, but it does not override WCAG requirements."

**If D selected:**
"Not quite. 'Adobe would never make such a basic mistake' is an assumption, not a testing methodology. Systematic AT validation means checking the actual rendered output against both programmatic and visual criteria — regardless of the product's brand, maturity, or reputation. Real-world accessibility issues exist in products from major companies, including Adobe. Part of the value of structured validation testing is that it surfaces issues that might otherwise be dismissed or overlooked. No product is exempt from being tested rigorously."

---

## Question 21: [COMPLETED] (Outcome 2G.02)

**Stimulus:**

stimuli/2g-02-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=5-4)

**Alt text:** "A screenshot of adobe.com/home rendered in Windows High Contrast Mode using a dark theme. The page shows the Adobe navigation bar at the top with app links (Adobe Home, Adobe Firefly, and others). The main content area displays a large headline 'Create something new' over a dark landscape background. Below the headline is the Adobe Firefly prompt bar with input options. The interface is fully rendered in the forced high-contrast color palette — white text on dark backgrounds — with no visible focus indicators on the navigation app links in the top banner."

**Question:**

When testing Windows High Contrast Mode on adobe.com/home, you observe there are no focus states for the app links in the banner. How would you log a Jira ticket for this issue. Open the Jira queries below to see examples of how similar issues have been logged in the past,and select the best answer.

**Answer Options:**

A) [labels = Accessibility_Other_Standard](https://jira.corp.adobe.com/issues/?filter=698402)
B) [labels = WCAG_1.4.3-Contrast_Minimum](https://jira.corp.adobe.com/issues/?filter=698736) 
C) [labels = WCAG_1.4.11-Non-text_Contrast](https://jira.corp.adobe.com/issues/?filter=698737)
D) [labels = WCAG_2.4.7-Focus_Visible](https://jira.corp.adobe.com/issues/?filter=698734)

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. `Accessibility_Other_Standard` is the right label because Windows High Contrast Mode is not governed by a specific WCAG success criterion; it is an operating system feature associated with Section 508 and EN 301 549 platform accessibility requirements. When a focus state breaks specifically within WHCM, the failure is not attributable to a WCAG SC; it belongs to the broader category of OS-level and platform accessibility standards. Using the correct Jira label ensures the issue is routed to the right remediation track and counted accurately in compliance reporting."

**If B selected:**
"Not quite. `WCAG_1.4.3-Contrast_Minimum` applies to the contrast ratio between text and its background in standard color rendering. The issue here — missing focus states in Windows High Contrast Mode — is not a text contrast failure. WHCM issues are caused by the OS overriding the page's CSS colors, not by the original color values failing contrast requirements. This label would misclassify the issue and route it to the wrong remediation team."

**If C selected:**
"Not quite. `WCAG_1.4.11-Non-text_Contrast` requires that visual indicators of UI component states (like focus rings) meet a 3:1 contrast ratio against adjacent colors in normal rendering. While this criterion is related to focus visibility, it applies to the page's authored color values, not to behavior within a forced color environment like WHCM. Issues that surface specifically when Windows High Contrast Mode is active fall under platform accessibility standards (Section 508 / EN 301 549), tracked with the `Accessibility_Other_Standard` label."

**If D selected:**
"Not quite. `WCAG_2.4.7-Focus_Visible` requires that keyboard focus indicators are visible, and at first glance this seems directly applicable since focus states are missing. However, the key distinction is context: this focus failure occurs specifically within Windows High Contrast Mode, which is an OS-controlled forced color environment outside the scope of WCAG 2.4.7. WCAG SCs apply to the authored experience; when WHCM overrides styles and focus indicators disappear as a result, the issue is categorized under platform accessibility standards, not WCAG. Labeling it as `WCAG_2.4.7` would misrepresent the root cause and the applicable standard."

---

## Question 22: [COMPLETED] (Outcome 2G.03)


**Question:**

The WCAG defines five success criteria that, if used in a non-conforming way, can block the ability of users to access the rest of the page.

Which of those five would you rank the most severe as it can cause direct human harm?

Read more on the topic here: https://www.w3.org/TR/WCAG21/#cc5. 

**Answer Options:**

A) 2.3.1 - Three Flashes or Below Threshold
B) 2.2.2 - Pause, Stop, Hide
C) 2.1.2 - No Keyboard Trap
D) 1.4.2 - Audio Control

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. WCAG 2.3.1 (Three Flashes or Below Threshold) is the most severe of the five non-interference success criteria because its failure can cause direct, irreversible physical harm. Content that flashes more than three times per second, or that exceeds the general flash or red flash thresholds, can trigger photosensitive epileptic seizures. A seizure is an involuntary neurological event that can result in loss of consciousness, injury from falls, or in rare cases death. No other non-interference SC has the potential for immediate physiological harm; the others create access barriers, but they do not threaten the user's physical safety. This is why 2.3.1 must pass even on pages that otherwise do not conform to WCAG."

**If B selected:**
"Not quite. WCAG 2.2.2 (Pause, Stop, Hide) requires that moving, blinking, scrolling, or auto-updating content — which starts automatically and lasts more than five seconds alongside other content — can be paused, stopped, or hidden by the user. Failing this SC can be severely disruptive, particularly for users with attention or cognitive disabilities, and it is listed as a non-interference criterion because it can prevent access to the rest of the page. However, it is not as likely to cause direct physical harm in the way flashing or blinking content can. The most severe non-interference SC on the basis of potential bodily harm is 2.3.1, which can trigger epileptic seizures."

**If C selected:**
"Not quite. WCAG 2.1.2 (No Keyboard Trap) requires that keyboard focus is never locked inside a component in a way that prevents the user from navigating away using only the keyboard. A keyboard trap is one of the most severe functional access failures — it can completely block a keyboard-only user from reaching the rest of the page — and it is rightly listed as a non-interference criterion. However, it is an access barrier, not a safety hazard. It does not cause direct physical harm. The most severe non-interference SC on the basis of bodily harm is 2.3.1 (Three Flashes), which can cause photosensitive epileptic seizures."

**If D selected:**
"Not quite. WCAG 1.4.2 (Audio Control) requires that auto-playing audio lasting more than three seconds can be paused, stopped, or have its volume reduced independently of the system volume. Failing this SC is particularly harmful to screen reader users, whose AT audio is obscured by the auto-playing content — effectively blocking access to the page. It is rightly a non-interference criterion. However, it does not cause direct physical harm. The most severe non-interference SC on the basis of potential bodily harm is 2.3.1 (Three Flashes), which can trigger seizures in users with photosensitive epilepsy."

---

## Question 23: [COMPLETED] (Outcome 2H.01)

**Stimulus:**

stimuli/2h-01-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=27-4092)

**Alt text:** "A side-by-side comparison of the Adobe home page at two viewport sizes. The top, larger panel shows the desktop layout: a horizontal tab bar with seven tabs (Featured, Generative AI, Imaging, Video, Design, Document, 3D) and below it a multi-column grid of action cards promoting Adobe Firefly and Adobe Express content — the full tab group with all cards visible at once. The bottom, smaller panel shows the mobile layout: the same content condensed into a compact 'Shortcuts' section displayed as a horizontal scrolling row of smaller cards, organized by a Picker component rather than full tabs."

**Question:**

In Desktop viewport, these quick action cards are presented as the contents of a TabGroup. In a Mobile viewport, they are presented as a horizontal scrolling list sorted by a Picker component. This consideration for spatial hierarchy and density is called... 

**Answer Options:**

A) progressive disclosure.
B) focus mode.
C) reading level.
D) inherited degeneration.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Progressive disclosure is the design pattern of presenting only the information and options a user needs for their current context, and revealing more complexity as needed. On desktop, the full TabGroup with a labeled tab bar and a grid of action cards is shown — the larger viewport can accommodate this density. On mobile, the same content is adapted to a compact horizontal scrolling list sorted by a Picker, reducing the information shown at once and letting users reveal categories through interaction. Adjusting spatial hierarchy and density to match the capabilities and constraints of each viewport — showing more on desktop, less on mobile — is a textbook application of progressive disclosure."

**If B selected:**
"Not quite. Focus mode is a screen reader concept that describes the state in which a screen reader passes keystrokes directly to an interactive widget (like a form field or custom control), rather than using them for document navigation. It has nothing to do with how UI components are presented across different viewport sizes or how spatial hierarchy adapts between desktop and mobile. The correct term for the pattern described is progressive disclosure."

**If C selected:**
"Not quite. Reading level refers to the linguistic complexity of written content — the vocabulary, sentence length, and cognitive load of text, typically measured by a scale like Flesch-Kincaid. It is a content quality consideration, not a layout or interaction pattern. Adapting a tab group on desktop into a picker-driven scrolling list on mobile is a spatial and structural design decision — specifically an application of progressive disclosure, not reading level."

**If D selected:**
"Not quite. 'Inherited degeneration' is not a recognized UX, accessibility, or design systems term. It has no meaning in this context. The pattern described — adapting content density and spatial hierarchy across viewport sizes by showing a full tab group on desktop and a compact scrolling list on mobile — is called progressive disclosure, a well-established UX design pattern for managing complexity relative to context and available space."

---

## Question 24: [COMPLETED] (Outcome 2H.02)

**Stimulus:**

stimuli/2h-02-stimulus.png

[Figma link to stimulus](https://www.figma.com/design/XrbF7KteqmuiMNAHL3rV8V/Badge-two-exam?node-id=27-4092)

**Alt text:** "Two stacked browser screenshots of medium.com. The top panel shows the standard Medium homepage in Safari with the browser View menu open and 'Show Reader' highlighted as the selected option. The page displays the headline 'Everyone has a story to tell' with body text and a highlighted pull quote. The bottom panel shows the same Medium article rendered in Safari Reader Mode: the page is stripped of navigation, ads, and sidebars, presenting only the article text in a clean dark-background layout with generous whitespace, controlled line length, and simplified typography."

The Medium website offers users an option to adjust to Reader Mode in the Safari browser. This is an example of...

**Answer Options:**

A) a preference control layer for density and whitespace.  
B) a pre-ship quality gate for sensory redundancy.
C) an AI output preference store for applied consistently across all AI surfaces.
D) A spec annotation standard a required field in every component spec.

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. Safari's Reader Mode is a preference control layer for density and whitespace. When activated, it removes navigation, ads, sidebars, and other visual noise from the page and re-presents only the core content with clean typography, generous whitespace, and a controlled line length. This gives users direct control over the visual density of their reading environment — choosing a simplified, focused layout over the full authored presentation. It is a user-controlled layer that adjusts how information density is experienced, without changing the underlying content."

**If B selected:**
"Not quite. A pre-ship quality gate is a checkpoint in the design and development process — a review or test that content or components must pass before being released. Sensory redundancy refers to communicating information through more than one sensory channel (e.g., color and shape together). Safari Reader Mode is neither of these: it is a runtime browser feature that users activate themselves to adjust the presentation of content they are already viewing. It has nothing to do with pre-release validation or multi-modal communication design."

**If C selected:**
"Not quite. An AI output preference store would be a system that saves and applies user preferences for AI-generated content across surfaces. Safari Reader Mode is a browser-native feature with no connection to AI. It is a manual, user-activated presentation control that strips page clutter and reformats content for reading comfort — specifically an example of a preference control layer for density and whitespace."

**If D selected:**
"Not quite. A spec annotation standard is a documentation convention used during design handoff to communicate component requirements to developers. It is a design process artifact, not a user-facing feature. Safari Reader Mode is a live browser function that users invoke at runtime to simplify a page's visual density. It has no relationship to spec standards or component documentation."

---

## Question 25: [COMPLETED] (Outcome 2H.03)


**Question:**

What is the potential harm that can occur in making our links look like buttons? 

<a href="(https://firefly.adobe.com/generate/image)" class="btn secondary outlined" aria-label="Open Text to Image">Open</a>

**Answer Options:**

A) A VoiceControl users vocalize "Click Open Text to Image button" instead of "Click Open Text to Image link" and the command fails.
B) The link will appear in VoiceOver's Form controls list instead of Links list in the Rotor as screen readers use the visual appearance of an element to determine its role.
C) Screen reader users will hear "button" instead of "link" which is inaccurate semantics.
D) Product led growth research has shown that users are 37% more likely to click a link than a button so we're missing out on conversions. 

**Correct Answer:** A

**Answer-Specific Feedback:**

**If A selected (CORRECT):**
"Correct. The element is an `<a>` tag — a link — but it is styled visually as a button using CSS classes. A Voice Control user observing the button-like appearance will naturally vocalize a command that matches what they see: 'Click Open Text to Image button.' Because the element's programmatic role in the accessibility tree is `link`, not `button`, Voice Control does not recognize it as a button target and the command fails. This is the core harm of mismatched component semantics: the visual design communicates one interaction model while the underlying implementation exposes another, and AT users (who rely on role-accurate targeting) bear the cost of that mismatch."

**If B selected:**
"Not quite. Screen readers derive role from the accessibility tree, not from visual appearance. An `<a>` element carries an implicit role of `link` regardless of how it is styled with CSS. This element would correctly appear in VoiceOver's Links list in the Rotor — not the Form Controls list. The CSS classes `btn secondary outlined` affect only the visual presentation; they have no effect on the semantic role that the browser exposes to assistive technology."

**If C selected:**
"Not quite. Screen readers would actually announce this element correctly as a 'link' — because it is an `<a>` tag and the accessibility tree reflects the correct semantic role. The harm is not that screen readers announce the wrong role; a screen reader user hears 'link' and is accurately informed. The harm lands specifically on Voice Control users, who see a button-shaped element and vocalize button-targeting commands that fail because the underlying role is `link`."

**If D selected:**
"Not quite. The 37% figure is fabricated, and conversion rate optimization is not an accessibility concern. The actual harm of styling links as buttons is borne by Voice Control users whose spoken commands fail because the visual affordance (button) conflicts with the programmatic role (link). Accessibility harms are about whether people with disabilities can successfully use the interface — not about marketing metrics or click-through rates."

---

## QTI Export

**Location:** `project-documents/00-badges/define-badge-assessment/qti-export/`

**Package:** `B2_Define_Badge_Final_Assessment_QTI_v2.zip`

The zip contains:
- `B2_Final_Assessment.xml` (QTI 1.2)
- `imsmanifest.xml` (IMS Content Package manifest)
- `stimuli/` folder with PNG stimulus images (sourced from `stimuli/` in this directory)

To regenerate the QTI XML and build the zip:
```bash
cd project-documents/00-badges/define-badge-assessment/qti-export
python3 generate_b2_qti.py
./package_b2_qti.sh
```

The package script copies stimulus images from `../stimuli/` (referenced in this document) into the zip.

Import the zip in Canvas via **Settings > Import Course Content > QTI .zip file**. Each question has correct answer A and response feedback (rationales) for all options. Stimulus images, context, and Figma links are embedded in question text.

---

## Implementation Notes for Canvas

### Quiz Settings

| Setting | Value |
|---------|-------|
| Quiz Type | Graded Quiz |
| Points | 25 (1 per question) |
| Time Limit | 45 minutes |
| Allowed Attempts | 1 |
| Show Correct Answers | After submission |
| One Question at a Time | No (show all) |
| Shuffle Questions | Yes |
| Shuffle Answers | Yes |

### Passing Criteria

- **Passing score:** 85% (22/25 correct)
- **Badge requirement:** Must pass to earn Define Badge
- Results contribute to overall badge certification

---

## Question Distribution by Lesson

| Lesson | Competency | Outcomes Covered | Questions |
|--------|------------|------------------|-----------|
| L09: DOM & Accessibility Tree | 2A | 2A.01, 2A.02, 2A.03 | Q1-Q3 (3) |
| L10: Screen Reader Fundamentals | 2B | 2B.01, 2B.02, 2B.03 | Q4-Q6 (3) |
| L11: Screen Reader Navigation Patterns | 2B (Advanced) | 2B.01, 2B.02, 2B.03 | Q7 (1) |
| L12: Screen Magnification | 2C | 2C.01, 2C.02, 2C.03 | Q8-Q10 (3) |
| L13: Voice Control | 2D | 2D.01, 2D.02, 2D.03 | Q11-Q13 (3) |
| L14: Windows High Contrast Mode | 2E | 2E.01, 2E.02, 2E.03 | Q14-Q16 (3) |
| L15: User Preferences | 2F | 2F.01, 2F.02, 2F.03 | Q17-Q19 (3) |
| L16: Perceptual & Cognitive Design | 2H | 2H.01, 2H.02, 2H.03 | Q23-Q25 (3) |
| Cross-cutting: AT Testing Methodology | 2G | 2G.01, 2G.02, 2G.03 | Q20-Q22 (3) |
| **Total** | | **24 outcomes** | **25** |

---

## Outcome Mapping Summary

| Q# | Outcome | Topic | Status |
|----|---------|-------|--------|
| 1 | 2A.01 | DOM to accessibility tree relationship | COMPLETED |
| 2 | 2A.02 | Identifying accessibility tree issues with dev tools | COMPLETED |
| 3 | 2A.03 | Design decisions and accessibility tree impact | COMPLETED |
| 4 | 2B.01 | Navigating with VoiceOver and NVDA | COMPLETED |
| 5 | 2B.02 | Browse mode vs focus mode | COMPLETED |
| 6 | 2B.03 | Quick navigation: headings, landmarks, links | COMPLETED |
| 7 | 2B.01-03 | Screen reader navigation patterns (advanced) | COMPLETED |
| 8 | 2C.01 | Screen magnification tools and user needs | COMPLETED |
| 9 | 2C.02 | Testing with screen magnification tools | COMPLETED |
| 10 | 2C.03 | Designing for magnification compatibility | COMPLETED |
| 11 | 2D.01 | Navigating using Voice Control or Dragon | COMPLETED |
| 12 | 2D.02 | Voice control accessibility barriers | COMPLETED |
| 13 | 2D.03 | Label in Name requirements | COMPLETED |
| 14 | 2E.01 | Testing in Windows High Contrast Mode | COMPLETED |
| 15 | 2E.02 | High contrast mode failures |    COMPLETED |
| 16 | 2E.03 | Forced colors compatibility | COMPLETED |
| 17 | 2F.01 | System accessibility settings across platforms | COMPLETED |
| 18 | 2F.02 | Preference responsiveness — real vs. illusory user agency (proximity, persistence, honesty, recoverability) | COMPLETED |
| 19 | 2F.03 | Testing with modified user preferences | COMPLETED |
| 20 | 2G.01 | Systematic AT validation | COMPLETED |
| 21 | 2G.02 | Documenting AT testing findings | COMPLETED |
| 22 | 2G.03 | Prioritizing AT-identified issues | COMPLETED |
| 23 | 2H.01 | Spatial hierarchy principles | COMPLETED |
| 24 | 2H.02 | Visual density and whitespace | COMPLETED |
| 25 | 2H.03 | Component semantics for comprehension | COMPLETED |

---

## Validation Checklist

Before deploying quiz:

- [ ] All 25 questions reviewed for accuracy
- [ ] All feedback reviewed for clarity and helpfulness
- [ ] Questions correctly map to stated outcomes
- [ ] Answer options are plausible distractors (not obviously wrong)
- [ ] No trick questions or ambiguous wording
- [ ] Stimulus images created/gathered for all image-based questions
- [ ] Tested complete quiz flow in Canvas LMS
- [ ] Feedback displays correctly for all answer choices
- [ ] Points configured correctly (1 per question, 25 total)
- [ ] Time limit verified (45 minutes sufficient)
- [ ] Shuffle settings confirmed

---

*Last updated: March 2026*  
*Version: 0.1 (placeholder)*  
*For: DACE Define Badge Final Assessment*
