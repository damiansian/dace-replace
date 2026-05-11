# Lesson 09: DOM and Accessibility Tree
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2A.01, 2A.02, 2A.03

---

## Source context

This lesson draws from established internal training materials, particularly:
- **Design System Accessibility Training: "Using the DOM to be a Human Screen Reader"**
- **Stark Blueline Annotation Training**
- **GenStudio UI Accessibility Breakdown Examples**

Key pedagogical approach: **"Be the Human Screen Reader"**: train designers to see interfaces as machines see them, understanding what AT users will hear and how they will navigate.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | — |
| 1. What the Machine Sees | 1.1-1.7 | 12 min | 2A.01 |
| 2. Be the Human Screen Reader | 2.1-2.8 | 14 min | 2A.02 |
| 3. Connecting Design to the Tree | 3.1-3.6 | 10 min | 2A.03 |
| 4. Summary and Assessment | 4.1-4.5 | 6 min | — |

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
- Use real product UI examples where possible (sanitized screenshots)

---

## Learning objective pill component

Badge 2 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light coral (#FFE3E3) at 15% opacity
- Text: 12px, medium weight, "LO 2A.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 09`
- Title: `DOM and Accessibility Tree`
- Subtitle: `Using the DOM to be a Human Screen Reader`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Define Badge and Lesson 09. Today we learn to see interfaces the way the machine sees them. This is the foundation of understanding what assistive technology users experience.

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
| 2A.01 | Explain DOM to accessibility tree relationship: Describe how browser DOM becomes the accessibility tree that AT consumes |
| 2A.02 | Identify accessibility tree issues: Use browser dev tools to inspect accessibility properties and identify what's missing |
| 2A.03 | Connect design decisions to accessibility tree impact: Predict how design choices will be represented in the accessibility tree and specify annotations for engineering |

**Connection callout:**
This builds on L01 Accessible Names. Now you'll see HOW those names become what screen readers announce, and learn to "be" the screen reader yourself.

**Speaker notes:**
Three outcomes focused on understanding the technical foundation. This knowledge will transform how you think about accessibility and how you hand off to engineering.

---

# Section 1: What the Machine Sees
## Duration: 12 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `What the Machine Sees`

---

### Frame 1.2: The interaction model

**Type:** Process diagram

**Layout:** Horizontal flow diagram with feedback loop

**Headline:** How users with disabilities interact with interfaces

**Diagram:**
```
User with Disability ↔ Assistive Technology ↔ Accessibility API ↔ User Interface
```

Visual: Four connected boxes with bidirectional arrows:
1. Person icon (User with Disability)
2. Screen reader/AT icon (Assistive Technology)
3. Platform API icon (Accessibility API)
4. UI interface icon (User Interface)

**Key principle callout:**
Designers inform this process by providing accessible names, structure, and keyboard focus management. Without this, the AT experience may be low quality or cause harm.

**Speaker notes:**
This diagram shows the nature of interaction for a user with disabilities. While designers don't need full command of this process, understanding what happens behind the scenes provides context for annotation work.

---

### Frame 1.3: The aural experience

**Type:** Conceptual comparison

**Layout:** Two-column visual

**Left column:**
- Heading: `What we see`
- Visual: Screenshot of a clean, visual UI (product interface)

**Right column:**
- Heading: `What the Accessibility API sees`
- Visual: Same UI decomposed into semantic structure, roles, and names

**Central question callout:**
What does this interface SOUND like? How can someone navigate it without a mouse?

**Speaker notes:**
The designer builds the aural experience for all non-text content in the UI. When you look at a design, ask: what will this sound like to a screen reader user?

---

### Frame 1.4: Document Object Model basics

**Type:** Definition and diagram

**Layout:** Left definition, right tree visualization

**Headline:** The DOM: How browsers structure content

**Definition:**
The Document Object Model (DOM) is the browser's complete representation of a page, including:
- All HTML elements
- CSS styling information  
- Scripts and interactions
- Decorative elements

**Visual:** Simple tree diagram showing nested DOM elements

**Relationship callout:**
The DOM feeds the Accessibility API, which creates a simplified "accessibility tree" that AT consumes.

**Speaker notes:**
The web browser looks at every interface as a Document Object Model. The content in the DOM works with the Accessibility API to present information to screen reader users.

---

### Frame 1.5: Accessibility tree vs DOM

**Type:** Two-column comparison with examples

**Layout:** Side-by-side tree diagrams

**Left column:**
- Heading: `DOM`
- Subhead: `Everything needed to render`
- Visual: Full tree with many nodes including decorative elements

**Right column:**
- Heading: `Accessibility Tree`
- Subhead: `Semantic representation for AT`
- Visual: Simplified tree showing only:
  - Interactive elements (buttons, links, inputs)
  - Structural elements (headings, landmarks)
  - Text content
  - Decorative elements removed

**Key insight callout:**
AT never sees your CSS or visual design. It only interacts with the accessibility tree.

**Speaker notes:**
The accessibility tree is a simplified, semantic view. It removes visual-only information and focuses on meaning. This is why semantic HTML matters.

---

### Frame 1.6: Four properties of every element

**Type:** Four-card layout with real examples

**Layout:** 2x2 grid of property cards

**Headline:** Every element exposes four accessibility properties

**Cards:**

| Property | What it provides | Screen reader output example |
|----------|------------------|------------------------------|
| **Name** | What the element is called | "Adobe GenStudio" |
| **Role** | What type of element it is | "button", "link", "heading level 2" |
| **State** | Current condition | "expanded", "checked", "disabled" |
| **Value** | Current value (if applicable) | "50 percent" (on slider) |

**Transcript example callout:**
When a screen reader encounters an element, it announces: **Name + Role + State + Value**
Example: "Adobe GenStudio, button" or "Submit form, button, disabled"

**Speaker notes:**
These four properties are what AT announces. If any is wrong or missing, the AT experience breaks. We'll practice identifying these in the next section.

---

### Frame 1.7: Checkpoint - What the machine sees

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: What the machine sees

**Body text:**
Before learning to "be the human screen reader," verify you understand these foundational concepts:

**Checklist:**
- [ ] I can explain the pipeline from UI structure → Accessibility Tree → AT (on any platform)
- [ ] I understand that the accessibility tree is what AT actually interacts with (not the visual design)
- [ ] I know that AT never sees visual styling, only semantic information
- [ ] I can name the four accessibility properties: Name, Role, State, Value

**Outcome badge:** `2A.01`

**Speaker notes:**
Quick self-check before we move into hands-on analysis. If students are unclear on any of these, address it now before the activity section.

---

# Section 2: Be the Human Screen Reader
## Duration: 14 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Be the Human Screen Reader`

---

### Frame 2.2: Breaking down a real interface

**Type:** Annotated UI screenshot

**Layout:** Full-width screenshot with numbered elements

**Headline:** Seeing the DOM order

**Visual:** Product UI screenshot (similar to GenStudio example) with numbered overlay showing:
- Reading order numbers (1, 2, 3, 4...) on each element
- Color coding for different element types

**Sidebar legend:**
- Buttons: Blue
- Links: Green  
- Headings: Orange
- Static text: Gray
- Form controls: Purple

**Key question callout:**
Can you identify the reading order? The focus order? What roles does each element have?

**Speaker notes:**
Here we see a graphical user interface. Let's break it down element by element to understand what the machine sees. Every element has a position in the reading order.

---

### Frame 2.3: DOM order vs focus order

**Type:** Two-column comparison with same UI

**Layout:** Same UI shown twice, different highlighting

**Headline:** Reading order vs focus order

**Left column:**
- Heading: `Reading Order (DOM)`
- Visual: All elements numbered sequentially (1-20+)
- Note: "Every element in the DOM"

**Right column:**
- Heading: `Focus Order (Tab Order)`
- Visual: Only interactive elements numbered (1-8)
- Note: "Only interactive elements receive focus"

**Example breakdown table:**

| Element | DOM Order | Focus Order | Focusable? |
|---------|-----------|-------------|------------|
| Home button | 1 | 1 | Yes (Tab) |
| Logo image | 2 | — | No |
| Search field | 3 | 2 | Yes (Tab) |
| Heading "Products" | 4 | — | No |
| Product link | 5 | 3 | Yes (Tab) |

**Speaker notes:**
The first element in our example UI is a button. It's item 1 in the DOM (reading order) and also item 1 in focus order because it's interactive. Static elements like headings and paragraphs are read but not focused.

---

### Frame 2.4: What's missing for screen readers?

**Type:** Analysis exercise

**Layout:** UI screenshot with question callouts

**Headline:** What's missing for screen readers?

**Visual:** Product card UI (similar to "Ideate with Firefly" section) with question callouts pointing to specific elements:
- "Image: Name?" (pointing to decorative vs informative image)
- "Heading: Level #?" (pointing to heading)
- "Button: Name?" (pointing to icon-only or generic button)
- "Paragraph: Just text" (pointing to description)

**Analysis breakdown:**

| Element | What screen reader needs | What's specified? |
|---------|-------------------------|-------------------|
| Heading | "Ideate with Adobe Firefly" | Level number? |
| Image | Name or decorative flag | Missing |
| Heading | "Text to image" | Level #? |
| Paragraph | "Generate high-quality..." | Content is fine |
| Button | Name (not just "Open") | **Missing**: needs unique name |

**Alert callout:**
Areas lacking attributes must be annotated for engineering.

**Speaker notes:**
This is where we start to "be" the screen reader. What information is missing? Generic "Open" buttons that all sound the same? Headings without level indicators? Images without alt text?

---

### Frame 2.5: The duplicate button problem

**Type:** Problem/solution with code comparison

**Layout:** Two-column before/after

**Headline:** Three buttons, same label, different destinations

**Visual:** Three product cards each with an "Open" button

**Problem callout:**
```
Button: "Open"
Button: "Open"  
Button: "Open"
```
Screen reader users navigating by buttons will hear "Open, Open, Open" with no context.

**Solution - unique accessible names:**

| Button | Visible text | Accessible name |
|--------|--------------|-----------------|
| Card 1 | Open | "Open Text to Image" |
| Card 2 | Open | "Open Generate Video" |
| Card 3 | Open | "Open Text to Vector" |

**WCAG principle callout:**
Label in Name (SC 2.5.3): The accessible name should start with the visible text, then add context. Users can still say "click Open" for voice control.

**Speaker notes:**
This is a common issue. Screen reader users can navigate by links or buttons. When they pull up a list of all buttons, they need to understand the purpose of each. Three "Open" buttons with no context is a failure.

---

### Frame 2.6: Hands-on: Be the screen reader

**Type:** Activity slide

**Layout:** Instructions with example UI

**Headline:** Practice: Analyze this interface

**Activity badge:** `HANDS-ON | 6 minutes`

**Visual:** Clean UI mockup with:
- Header with navigation
- Hero section with heading and image
- Card grid with buttons
- Footer with links

**Instructions:**
For each element, identify:
1. **Reading order position** (DOM order)
2. **Focus order position** (if interactive)
3. **Role** (button, link, heading, image, etc.)
4. **Name** (what screen reader will announce)
5. **Missing information** (what needs annotation?)

**Worksheet template provided:**

| Element | DOM # | Focus # | Role | Name | Missing? |
|---------|-------|---------|------|------|----------|
| ? | ? | ? | ? | ? | ? |

**Speaker notes:**
Give students 6 minutes to analyze the UI. Walk around to help. This is the core skill we're building: seeing interfaces the way machines see them.

---

### Frame 2.7: Using dev tools to verify

**Type:** Screenshot walkthrough

**Layout:** Browser dev tools with annotations

**Headline:** Verifying with Chrome Accessibility panel

**Screenshot:** Chrome DevTools with numbered annotations:
1. Elements panel tab
2. Accessibility tab
3. Computed Properties section showing:
   - Name: "Adobe GenStudio"
   - Role: "button"
   - State: none
4. Full accessibility tree toggle

**Verification checklist:**

| Check | What to verify | Common issue |
|-------|----------------|--------------|
| ✓ | Name present and meaningful | Empty or generic ("button", "link") |
| ✓ | Role matches purpose | div with click handler but no button role |
| ✓ | States match visual state | Visually expanded but no aria-expanded |
| ✓ | Value accurate | Slider at 50 but value shows 0 |

**Key insight callout:**
If the accessibility tree is wrong, no amount of screen reader testing will help. Fix the tree first.

**Speaker notes:**
Chrome's accessibility panel lets us verify our "human screen reader" analysis. Compare your worksheet predictions to what the browser actually exposes.

---

### Frame 2.8: Checkpoint - Be the human screen reader

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Be the human screen reader

**Body text:**
Before connecting design decisions to the accessibility tree, verify you understand these analysis skills:

**Checklist:**
- [ ] I can identify the reading order (DOM order) of elements in an interface
- [ ] I can identify which elements receive focus and their focus order
- [ ] I can identify when accessible names are missing or generic (e.g., multiple "Open" buttons)
- [ ] I can access the Accessibility panel in Chrome DevTools to verify my predictions
- [ ] I understand the difference between what's needed for screen readers vs. what's specified

**Outcome badge:** `2A.02`

**Speaker notes:**
The core skill is now practiced. Students should be comfortable analyzing an interface element by element. The next section connects this to their annotation workflow.

---

# Section 3: Connecting Design to the Tree
## Duration: 10 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Connecting Design to the Tree`

---

### Frame 3.2: Design annotations are engineering instructions

**Type:** Annotated design example

**Layout:** Design mockup with annotation overlay

**Headline:** Blueline annotations become accessibility tree properties

**Visual:** Product card section with annotation callouts:
- H2 marker on main heading
- H3 markers on card headings
- Numbered annotation pins (1, 2, 3) on buttons

**Annotation specification panel:**

```
Ideate with Adobe Firefly
─────────────────────────

Accessible Name Annotations:

1. open_button_text_to_image
   Name: "Open Text to Image"
   Note: Unique name for button navigation

2. open_button_generate_video
   Name: "Open Generate Video"
   Note: Unique name for button navigation

3. open_button_text_to_vector
   Name: "Open Text to Vector"
   Note: Unique name for button navigation

Heading Levels:
- "Ideate with Adobe Firefly" = H2
- Card titles = H3
```

**Designer responsibility callout:**
The designer specifies the aural experience. Engineering implements it. If you don't specify it, it won't happen.

**Speaker notes:**
Annotations are instructions to engineering. Every piece of information a screen reader user needs must be specified in the design handoff.

---

### Frame 3.3: Accessible name computation

**Type:** Priority diagram with examples

**Layout:** Numbered priority list

**Headline:** Where does the accessible name come from?

**Priority order (simplified):**
1. `aria-labelledby` (references other element's text)
2. `aria-label` (explicit label attribute)
3. Native labeling (`<label>`, `alt`, `title`)
4. Text content (visible text inside element)

**Visual:** Flowchart showing decision tree

**Example comparison:**

| Design decision | Implementation | Resulting name |
|-----------------|----------------|----------------|
| Icon-only button with annotation "Print" | `<button aria-label="Print">×</button>` | "Print" |
| Button with visible text | `<button>Submit</button>` | "Submit" |
| Image with alt text annotation | `<img alt="Profile photo">` | "Profile photo" |

**Note for designers callout:**
Designers don't need to specify "aria-label" in annotations. Just specify: **Name: "Print"**. Engineering decides implementation.

**Speaker notes:**
Understanding this hierarchy helps predict what name will appear. It also explains conflicts when multiple sources exist. But as a designer, just specify the name you want announced.

---

### Frame 3.4: State management in design

**Type:** State comparison table

**Layout:** Visual state vs annotation specification

**Headline:** Visual states must be specified for AT

**Comparison table:**

| Visual State | What to annotate | Common mistake |
|--------------|------------------|----------------|
| Expanded accordion | "State: expanded/collapsed" | Only showing arrow rotation |
| Checked checkbox | "State: checked/unchecked" | Custom checkbox with no state |
| Disabled button | "State: disabled" | Just graying out visually |
| Selected tab | "State: selected" | Only styling the selected tab |
| Current page in nav | "State: current page" | Only bold text styling |

**App grid example:**

| Icon | Annotation |
|------|------------|
| Photoshop (with checkmark) | Name: "Photoshop (web), downloaded" |
| After Effects (with download icon) | Name: "After Effects, download" |
| Avatar image | Name: [decorative, ignore] |

**Designer responsibility callout:**
When annotating designs, specify the state changes that must occur, not just the visual differences.

**Speaker notes:**
This is a common gap. Designers specify the look but not the state attributes. Include both visual changes AND state announcements in your annotations.

---

### Frame 3.5: Prediction practice

**Type:** Activity slide

**Layout:** Design mockup with prediction worksheet

**Headline:** Predict and specify

**Activity badge:** `THINK-PAIR-SHARE | 4 minutes`

**Visual:** Welcome section mockup with:
- User avatar
- Heading "Welcome to Adobe, User"
- Subheading "Your apps"
- App icon grid (some downloaded, some not)
- "View all apps" link

**Instructions:**
For each element, predict:
1. What role will it have?
2. What should the accessible name be?
3. What states need to be communicated?
4. What annotation would you write?

**Sample annotation format:**

```
Focus Order:
1. app_icon_grid
   Note: Grid navigated by arrow keys

Accessible Names:
1. avatar_image
   Name: [decorative]
   
2. photoshop_web_button
   Name: "Photoshop (web), downloaded"
   Note: All downloaded apps say "downloaded"
   
3. after_effects_button  
   Name: "After Effects, download"
   Note: Download icon means not yet installed
```

**Speaker notes:**
Have students think individually, then discuss with a partner, then share with the group. Focus on complete annotations, not just names.

---

### Frame 3.6: Checkpoint - Connecting design to the tree

**Type:** Summary/checkpoint

**Layout:** Self-assessment checklist

**Headline:** Checkpoint: Connecting design to the tree

**Body text:**
Before completing this lesson, verify you understand how design annotations affect the accessibility tree:

**Checklist:**
- [ ] I understand that design annotations become accessibility tree properties
- [ ] I know the accessible name priority order (aria-labelledby → aria-label → native labeling → text content)
- [ ] I can predict the accessible name that will result from a design specification
- [ ] I understand that visual states (expanded, selected, disabled) must be explicitly annotated for AT
- [ ] I recognize that if I don't specify accessibility information, it won't be built

**Outcome badge:** `2A.03`

**Speaker notes:**
Final checkpoint before summary. Students should now understand the complete pipeline from their design annotations to what screen reader users experience.

---

# Section 4: Summary and Assessment
## Duration: 6 minutes

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

**Headline:** Be the human screen reader

**Key principles:**

| Icon | Principle |
|------|-----------|
| 👁️ | **See as machines see**: The accessibility tree is what AT actually interacts with |
| 🔢 | **Know the order**: Reading order (DOM) and focus order (Tab) serve different purposes |
| 4️⃣ | **Four properties**: Name, Role, State, Value define every element |
| ❓ | **Ask what's missing**: Generic buttons, unlabeled images, missing states |
| 📝 | **Annotate everything**: If you don't specify it, it won't be built |

**Designer checklist callout:**
- Specify alternate text for informative images
- Specify when graphics are decorative (to be ignored)
- Specify accessible names for all controls
- Specify heading levels for all headings
- Specify state changes for interactive elements

**Speaker notes:**
These principles will guide your annotation work throughout Define Badge and beyond. The core skill is seeing interfaces as machines see them.

---

### Frame 4.3: Quiz and project preview

**Type:** Assessment preview

**Layout:** Two columns for quiz and project

**Left column:**
- Heading: `Knowledge Check Quiz`
- 5 questions
- Tests: DOM/tree relationship, identifying what's missing, annotation specifications
- Auto-graded

**Right column:**
- Heading: `Applied Practice`
- Combined with L10
- Analyze accessibility tree for real UI
- Create annotation specifications
- Verify with actual screen reader

**Speaker notes:**
Quiz focuses on the conceptual understanding. The project lets you apply "be the human screen reader" to a real interface.

---

### Frame 4.4: Next lesson preview

**Type:** Preview slide

**Layout:** Next lesson teaser

**Headline:** Up next: Screen Reader Fundamentals (L10)

**Preview points:**
- Navigate pages using VoiceOver and NVDA
- Understand browse mode vs focus mode
- Use quick navigation for efficient testing
- Verify your "human screen reader" predictions with real AT

**Connection callout:**
L10 connects to today's lesson: You'll verify that your accessibility tree predictions match the actual screen reader experience.

**Speaker notes:**
Next week we put your accessibility tree knowledge into practice with actual screen reader testing. You'll hear what you've been analyzing.

---

### Frame 4.5: Resources

**Type:** Resource links

**Layout:** Organized resource list

**Headline:** Resources for reference

**W3C resources:**
- Accessible Name and Description Computation 1.2
  `https://www.w3.org/TR/accname-1.2/`
- WAI-ARIA 1.2 Specification
  `https://www.w3.org/TR/wai-aria-1.2/`
- ARIA Authoring Practices Guide (APG)
  `https://www.w3.org/WAI/ARIA/apg/`
- WCAG Understanding 4.1.2 Name, Role, Value
  `https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html`
- WCAG Understanding 1.3.1 Info and Relationships
  `https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html`

**Browser dev tools documentation:**
- Chrome DevTools Accessibility Reference
  `https://developer.chrome.com/docs/devtools/accessibility/reference`
- Firefox Accessibility Inspector
  `https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/`
- Safari Web Inspector Accessibility
  `https://webkit.org/web-inspector/accessibility-audit/`

**Adobe resources:**
- Design Accessibility Checklist
- Spectrum Design System (Accessibility foundations)
- Stark Figma Plugin Guide

**Speaker notes:**
These resources are also linked on the Canvas page. The Accessible Name and Description Computation spec is the authoritative source for how browsers calculate accessible names, which is central to everything we covered today. The browser dev tools docs will help you get comfortable inspecting the accessibility tree on your own. You don't need to memorize any of this. You need to know where to look.

---

## Supplementary materials

### Reference: Screen reader transcript examples

For use in speaker notes and activities:

**Banner region example (GenStudio):**
```
"Adobe GenStudio, button"
"Search, search text field"
"Apps, button"
"Help, button"
"Notifications, button, 0 notifications"
"[User name] Account, button"
```

**Card section example:**
```
"Ideate with Adobe Firefly, heading level 2"
"Text to image, heading level 3"
"Generate high-quality images using text with latest Image Model 4."
"Open Text to Image, button"
```

### Reference: Common annotation patterns

**Icon-only buttons:**
```
Name: "[Action] [Object]"
Example: Name: "Close dialog"
Example: Name: "Print document"
```

**Repeated actions:**
```
Name: "[Action] [Context]"
Example: Name: "Edit profile settings"
Example: Name: "Delete saved search"
```

**App grids:**
```
Focus Order: Grid navigation with arrow keys
Name: "[App name], [status]"
Example: Name: "Photoshop (web), downloaded"
```

---

## End of deck

**Total frames:** 28
**Estimated delivery time:** 45 minutes

---

*Last updated: February 2026*  
*Version: 2.0*  
*For: DACE L09: DOM and Accessibility Tree*
*Source context: Design System Accessibility Training, Stark Blueline Annotation Training*
