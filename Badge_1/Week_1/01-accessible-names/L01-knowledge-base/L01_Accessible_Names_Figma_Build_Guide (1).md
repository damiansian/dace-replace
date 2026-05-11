# Lesson 01: Accessible Names
## Figma Frame Construction Guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Discover
**Delivery:** Synchronous (live instruction)
**Duration:** 60 minutes instruction
**Outcomes Covered:** 1A.01, 1A.02, 1A.03, 1A.04, 1A.05

---

## Deck Structure Overview

> Note: This guide uses **slide numbers aligned to the Figma export naming** (e.g., `Figma-export_Page_11.jpg`).
> Slide numbering starts at **02** and ends at **52** after adding the four new checkpoint slides.

| Section | Slides | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title & Objectives | 02-06 | 2 min | None |
| 1. The Human Connection | 07-12 | 5 min | 1A.01 |
| 2. What Is an Accessible Name? | 13-19 | 10 min | 1A.01 |
| 3. When Are Names Required? | 20-26 | 10 min | 1A.02 |
| 4. What Makes a Good Name? | 27-34 | 10 min | 1A.03 |
| 5. Visible vs Programmatic | 35-41 | 10 min | 1A.05 |
| 6. Specifying Names for Engineering | 42-48 | 10 min | 1A.04 |
| 7. Project Preview & Questions | 49-52 | 3 min | None |

**Total slides:** 51

---

## Updated Slide Numbering (After Adding New Checkpoints)

```
Current       →  New
Pages 02-11   →  Slides 02-11 (unchanged)
             →  Slide 12: NEW Checkpoint 1A.01 (Human Connection)
Pages 12-17   →  Slides 13-18
             →  Slide 19: NEW Checkpoint 1A.01 (Definition)
Pages 18-24   →  Slides 20-26 (Page 24 checkpoint → Slide 26)
Pages 25-31   →  Slides 27-33
             →  Slide 34: NEW Checkpoint 1A.03
Pages 32-37   →  Slides 35-40
             →  Slide 41: NEW Checkpoint 1A.05
Pages 38-44   →  Slides 42-48 (Page 44 checkpoint → Slide 48)
Pages 45-48   →  Slides 49-52
```

---

## Design System Notes

- Use your existing Adobe Design training template (tag icon header, 2025 footer)
- Section dividers: Full-bleed title, geometric pattern background
- Content frames: White background, left-aligned content
- Interactive frames: Include voting dots or poll UI component
- Color coding: Use consistent colors for good/bad examples (green/red or blue/magenta)

---

## Learning Objective Pill Component

**Purpose:** Connect each teaching moment to the lesson's learning objectives. Learners can click to view the full objective context.

**Design specs:**
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width based on text, ~24px height
- Background: Light blue (#E6F2FF) or your brand's secondary color at 15% opacity
- Border: 1px solid, same color at 40% opacity
- Text: 12px, medium weight, dark blue (#0066CC)
- Icon: Small link/target icon (optional, left of text)
- Hover state: Background at 25% opacity, cursor pointer

**Content format:** `LO 1A.0X` (e.g., "LO 1A.01")

**Behavior:** Links to Frame 0.2 (Learning Objectives Reference) within the same Figma file

**Placement:** Bottom-left corner of content frames, above the footer. Only on frames where new objective content is introduced (not every frame).

---

## NEW: Checkpoint Slide Template (Use Existing Page 24 Pattern)

Use the existing checkpoint slide layout (see export Page 24) as the design template for all new checkpoint slides:

- **Heading**: Large `Checkpoint` heading (top-left)
- **Subtitle**: Section subtitle in bold (directly under heading)
- **Checklist**: 4-5 "I can..." statements with empty checkbox icons
- **Learning outcome card** (right side):
  - Light gray rounded rectangle card
  - Circular icon at top (lightbulb icon)
  - Heading: `Learning Outcome`
  - Body: "This checkpoint maps to Outcome X: [outcome description]"

---

## NEW Slides: Checkpoints to Add

### Slide 12: Checkpoint, Human Connection (Outcome 1A.01)

**Insert after:** Current Page 11 (Accessible names connect humans to interfaces)  
**Insert before:** Current Page 12 (What Is an Accessible Name? divider)

**Type:** Summary/checkpoint  
**Layout:** Checklist on left, learning outcome card on right (match Page 24 pattern)

**Heading:** `Checkpoint`  
**Subtitle:** `Human connection`

**Checklist:**
- [ ] I can explain why accessible names matter to assistive technology users
- [ ] I understand how screen readers and voice control use accessible names
- [ ] I can describe the bridge between humans and interfaces
- [ ] I recognize the impact when accessible names are missing

**Learning outcome card (right):**
- Title: `Learning Outcome`
- Body:
  - `This checkpoint maps to Outcome 1A.01: Define accessible names and explain their role in assistive technology interaction.`

---

### Slide 19: Checkpoint, What Is an Accessible Name? (Outcome 1A.01)

**Insert after:** Current Page 17 (Prefer visible text)  
**Insert before:** Current Page 18 (When are names required? divider)

**Type:** Summary/checkpoint  
**Layout:** Checklist on left, learning outcome card on right (match Page 24 pattern)

**Heading:** `Checkpoint`  
**Subtitle:** `What is an accessible name?`

**Checklist:**
- [ ] I can define what an accessible name is
- [ ] I understand the two jobs of an accessible name (purpose and distinguish)
- [ ] I can identify common sources of accessible names
- [ ] I know that visible text is the preferred source for names

**Learning outcome card (right):**
- Title: `Learning Outcome`
- Body:
  - `This checkpoint maps to Outcome 1A.01: Define accessible names and explain their role in assistive technology interaction.`

---

### Slide 34: Checkpoint, What Makes a Good Name? (Outcome 1A.03)

**Insert after:** Current Page 31 (Recap: Quality accessible names)  
**Insert before:** Current Page 32 (Visible labels vs programmatic names divider)

**Type:** Summary/checkpoint  
**Layout:** Checklist on left, learning outcome card on right (match Page 24 pattern)

**Heading:** `Checkpoint`  
**Subtitle:** `What makes a good name?`

**Checklist:**
- [ ] I can evaluate names using the function over form principle
- [ ] I can write concise names (1-3 words)
- [ ] I understand why distinguishing words should come first
- [ ] I can apply consistent naming patterns across an interface

**Learning outcome card (right):**
- Title: `Learning Outcome`
- Body:
  - `This checkpoint maps to Outcome 1A.03: Evaluate accessible name quality using established criteria (concise, functional, distinguishable).`

---

### Slide 41: Checkpoint, Visible Labels vs Programmatic (Outcome 1A.05)

**Insert after:** Current Page 37 (When to annotate)  
**Insert before:** Current Page 38 (Specifying names for engineering divider)

**Type:** Summary/checkpoint  
**Layout:** Checklist on left, learning outcome card on right (match Page 24 pattern)

**Heading:** `Checkpoint`  
**Subtitle:** `Visible labels vs programmatic names`

**Checklist:**
- [ ] I can identify when visible text is sufficient as an accessible name
- [ ] I know when programmatic names are required (icon buttons, ambiguous links)
- [ ] I understand the Read more and Watch now problem
- [ ] I can apply the Label in Name rule (WCAG 2.5.3)

**Learning outcome card (right):**
- Title: `Learning Outcome`
- Body:
  - `This checkpoint maps to Outcome 1A.05: Distinguish between visible labels and programmatic names.`

---

## Frame 0: Title & Objectives
### Pre-Section Frames

### Frame 0.1: Title Slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 01`
- Title: `Accessible Names`
- Subtitle: `The bridge between humans and interfaces`
- Badge level indicator: `Discover Badge`
- Duration: `60 minutes`

**Speaker notes:**
Welcome to Lesson 01. Today we're covering accessible names, which is foundational to everything else you'll learn in this program.

---

### Frame 0.2: Learning Objectives Reference

**Type:** Objectives overview (link destination for all LO pills)

**Layout:** Vertical list with outcome codes and descriptions

**Headline:** What you'll be able to do

**Intro text:**
By the end of this lesson, you'll be able to:

**Objectives list:**

| Code | Objective |
|------|-----------|
| 1A.01 | Define accessible names and explain their role in assistive technology interaction |
| 1A.02 | Identify when accessible names are required versus optional for different element types |
| 1A.03 | Evaluate accessible name quality using established criteria (concise, functional, distinguishable) |
| 1A.04 | Specify accessible names in design annotations using standard documentation methods |
| 1A.05 | Distinguish between visible labels and programmatic accessible names |

**Visual:** Each objective row should have an anchor point that pills can deep-link to (if Figma supports defined scroll positions, otherwise link to this frame generally)

**Speaker notes:**
Here's what we're building toward today. Five specific skills. Everything in this lesson connects back to one of these.

You'll see small pills throughout the deck linking back to these objectives. If you ever wonder "why am I learning this?", click the pill.

By the end, you'll demonstrate these skills through a quiz and a hands-on annotation project.

---

---

# Section 1: The Human Connection
## Duration: 5 minutes

### Frame 1.1: Section Divider

**Type:** Section divider

**Layout:** Centered title, geometric background pattern

**Content:**
- Section number: `1`
- Title: `The Human Connection`

**Speaker notes:**
We're starting with why this matters. Before we get into definitions and rules, I want you to feel what it's like when accessible names are missing or wrong.

---

### Frame 1.2: What does a screen reader hear?

**Type:** Interactive poll

**Layout:** Left side: visual example. Right side: three voting options.

**Left side content:**
- Large bell icon (use Spectrum Alert/Notification icon, 120px)
- Below icon: Button component frame around it
- Caption: `Icon-only button in a navigation bar`

**Right side content:**
- Poll question: `What will a screen reader announce?`
- Three voting option boxes:
  - Option A: `"Notifications, button"` (green tinted)
  - Option B: `"Button"` (amber tinted)
  - Option C: `[silence]` (red tinted)
- Voting dots grid (40 dots)

**Headline:** What does a screen reader hear?

**Speaker notes:**
Let's start with a simple example. Here's an icon-only button. You can see it's a bell. You know it probably means notifications. But what will someone using a screen reader hear when they navigate to this button?

Take your votes. [Wait for votes]

If engineered correctly, they hear "Notifications, button." The accessible name is "Notifications" and the role is "button."

If there's no accessible name? They just hear "button." Nothing else. Imagine an interface with 15 buttons and they all just say "button."

If it's really broken, they might hear nothing at all, or the screen reader might announce the SVG filename: "bell-icon-v2-final.svg, graphic."

---

### Frame 1.3: Voice control has the same problem

**Type:** Concept illustration

**Layout:** Split screen showing two scenarios

**Left side (Works):**
- Speech bubble: `"Click notifications"`
- Arrow pointing to bell icon
- Green checkmark
- Caption: `Button activates`

**Right side (Fails):**
- Speech bubble: `"Click notifications"`
- Arrow pointing to bell icon with X through it
- Red X
- Caption: `Nothing happens`

**Headline:** Voice control has the same problem

**Body text:**
Voice control users speak the name they see (or expect). If the programmatic name doesn't match, the command fails.

**Speaker notes:**
This isn't just about screen readers. People who use voice control, like Dragon NaturallySpeaking or Voice Control on Mac, need accessible names too.

They look at the interface, see a bell icon, and say "Click notifications." If the button has that accessible name, it works. If it doesn't, nothing happens. They're stuck.

So accessible names serve both audiences: people who can't see the interface, and people who can see it but interact by voice.

---

### Frame 1.4: The bridge between humans and interfaces

**Type:** Concept diagram

**Layout:** Horizontal flow diagram, centered

**Diagram elements (left to right):**
1. Person icon with label: `Human`
2. Arrow pointing right
3. Device icon (screen reader/microphone) with label: `Assistive Technology`
4. Arrow pointing right
5. Text label icon with label: `Accessible Name`
6. Arrow pointing right
7. Interface mockup icon with label: `Digital Interface`

**Headline:** Accessible names connect humans to interfaces

**Body text:**
Assistive technology uses accessible names to communicate what's on screen. Without them, the bridge is broken.

**Callout box:**
The accessible name is how the Accessibility API tells assistive technology what an element is and what it does.

**Learning Objective Pill:** `LO 1A.01` → Links to Frame 0.2

**Speaker notes:**
Here's the mental model I want you to carry through this lesson. Accessible names are a bridge.

The human is on one side. The digital interface is on the other. Assistive technology is the vehicle that crosses the bridge. And the accessible name is what the AT uses to describe what's on the other side.

When names are missing or bad, the bridge is broken. The AT has nothing meaningful to say. The human is stuck.

As designers, you're building that bridge. Engineering constructs it in code, but you're the architect. You decide what every element should be called.

---

# Section 2: What Is an Accessible Name?
## Duration: 10 minutes

### Frame 2.1: Section Divider

**Type:** Section divider

**Layout:** Centered title, geometric background pattern

**Content:**
- Section number: `2`
- Title: `What Is an Accessible Name?`

**Speaker notes:**
Now let's get precise about what we're talking about.

---

### Frame 2.2: Definition

**Type:** Definition frame

**Layout:** Large definition text, supporting details below

**Headline:** Accessible Name

**Definition text (large, emphasized):**
`A short text string that identifies an element's purpose and distinguishes it from other elements on the page.`

**Supporting details:**
- Typically 1-3 words
- Read aloud by screen readers
- Used by voice control for targeting
- Required for interactive elements

**Source attribution:**
W3C ARIA Authoring Practices Guide

**Learning Objective Pill:** `LO 1A.01` → Links to Frame 0.2

**Speaker notes:**
Here's the official definition from the W3C. An accessible name is a short text string. Short is key here. We're not writing paragraphs. 1-3 words is typical.

It does two things: identifies purpose (what does this do?) and distinguishes (which one is this, among similar elements?).

If you remember nothing else from this lesson, remember this: accessible names are short, purposeful, and distinct.

---

### Frame 2.3: Two jobs

**Type:** Two-column concept

**Layout:** Two equal columns with icons and explanations

**Left column:**
- Icon: Target/bullseye
- Heading: `Convey purpose`
- Body: `What does this element do?`
- Example: `"Submit" tells users this button sends their form.`

**Right column:**
- Icon: Fingerprint/unique identifier
- Heading: `Distinguish`
- Body: `Which element is this?`
- Example: `"Submit order" vs "Submit feedback" tells users which form they're submitting.`

**Headline:** Two jobs for every accessible name

**Speaker notes:**
Every accessible name has to do two jobs.

First: convey purpose. What happens when I activate this? "Submit" tells me I'm sending something. "Play" tells me media will start. "Close" tells me something will go away.

Second: distinguish. If I have multiple similar elements, the name needs to help me tell them apart. If I have two submit buttons on a page, "Submit" isn't enough. I need "Submit order" and "Submit feedback."

Sometimes one word handles both jobs. Sometimes you need more context.

---

### Frame 2.4: Where do names come from?

**Type:** Source hierarchy

**Layout:** Vertical list with visual examples

**Headline:** Where do accessible names come from?

**Intro text:**
Engineers implement names using various HTML attributes. As a designer, you specify what the name should be. Engineering chooses the method.

**List items (each with small visual example):**

1. **Visible text**
   - Example: Button with "Save" text
   - Caption: `Text content inside the element`

2. **Alt text on images**
   - Example: Image with alt attribute shown
   - Caption: `Alternative text attribute`

3. **Label element**
   - Example: Form field with associated label
   - Caption: `Form labels associated with inputs`

4. **aria-label**
   - Example: Icon button with aria-label annotation
   - Caption: `Programmatic label when no visible text`

5. **aria-labelledby**
   - Example: Element referencing another element's text
   - Caption: `References text from another element`

**Speaker notes:**
Names can come from several sources. You don't need to memorize the code, but it helps to know what's possible.

Visible text is the best source. If there's text in the button, that's the name. Done.

Images get names from alt text.

Form fields get names from their label elements.

When there's no visible text, engineers use aria-label or aria-labelledby to provide a programmatic name.

Your job as a designer: specify what the name should be. Engineering decides which technique to use based on the code structure.

---

### Frame 2.5: Prefer visible text

**Type:** Best practice callout

**Layout:** Emphasized recommendation with supporting visual

**Visual:**
- Two buttons side by side
- Left button: Icon + text "Save document" (green checkmark, "Preferred")
- Right button: Icon only with aria-label annotation (amber, "When necessary")

**Headline:** Prefer visible text

**Body text:**
When text is visible on screen, it automatically becomes the accessible name. No extra annotation needed. This is the ideal.

Use programmatic names (aria-label) only when the design requires no visible text.

**Callout box:**
Visible text benefits everyone: AT users, voice control users, cognitive accessibility, and discoverability.

**Speaker notes:**
Here's a principle that will save you a lot of annotation work: prefer visible text.

If your button says "Save document" right on it, that's the accessible name. You don't need to annotate anything. It just works.

Programmatic names are for when the design genuinely can't include visible text. Icon-only buttons in tight spaces, for example.

But if you can add visible text? Do it. It helps AT users, voice control users, people with cognitive disabilities, and honestly everyone.

---

# Section 3: When Are Names Required?
## Duration: 10 minutes

### Frame 3.1: Section Divider

**Type:** Section divider

**Layout:** Centered title, geometric background pattern

**Content:**
- Section number: `3`
- Title: `When Are Names Required?`

**Speaker notes:**
Now the practical question: which elements actually need names?

---

### Frame 3.2: Always, Sometimes, Never

**Type:** Three-column framework

**Layout:** Three columns with headers and lists

**Column 1 (green header):**
- Header: `Always`
- List items:
  - Buttons
  - Links
  - Images (informative)
  - Form inputs
  - Icon-only controls
  - Navigation landmarks

**Column 2 (amber header):**
- Header: `Sometimes`
- List items:
  - Regions and sections
  - Groups of related content
  - Tables (when multiple on page)
  - Frames and iframes
  - Dialogs (usually title serves as name)

**Column 3 (gray header):**
- Header: `Never (mark decorative)`
- List items:
  - Decorative images
  - Visual dividers
  - Background graphics
  - Icons with adjacent text labels
  - Redundant graphics

**Headline:** Always, Sometimes, Never

**Learning Objective Pill:** `LO 1A.02` → Links to Frame 0.2

**Speaker notes:**
Here's a framework for deciding. Three buckets: always, sometimes, never.

Always: anything interactive needs a name. Buttons, links, form inputs. Also informative images and landmarks.

Sometimes: structural elements that might need names for clarity. If you have one main region, maybe it doesn't need a label. If you have three navigation areas, they each need distinct names.

Never: decorative content. If an image doesn't convey information, don't name it. Hide it from AT so it's not cluttering the experience.

---

### Frame 3.3: The core question

**Type:** Decision diagram

**Layout:** Simple flowchart

**Flowchart:**
```
[Element]
    |
    v
Does it convey information
or enable interaction?
    |
   / \
  /   \
Yes    No
 |      |
 v      v
Name   Hide
 it     it
```

**Headline:** The functional vs decorative question

**Body text:**
For any non-text element, ask: Does this convey meaningful information? Does it enable user interaction?

If yes, it needs an accessible name. If no, mark it decorative so assistive technology ignores it.

**Learning Objective Pill:** `LO 1A.02` → Links to Frame 0.2

**Speaker notes:**
If you remember one decision framework, make it this one.

Look at the element. Ask: is this functional or decorative?

Functional means it conveys information the user needs, or it enables them to do something. Name it.

Decorative means it's purely visual, adds no information, and hiding it wouldn't impact understanding. Hide it.

The tricky cases are in the middle. We'll practice those.

---

### Frame 3.4: Practice: Name or hide?

**Type:** Interactive poll (multi-example)

**Layout:** Four quadrants, each with an example and voting area

**Example 1:**
- Visual: Card component with thumbnail image, title "Getting Started with Firefly," description text, and "Read more" button
- Element highlighted: Thumbnail image
- Poll: Name it / Hide it

**Example 2:**
- Visual: Navigation bar with logo
- Element highlighted: Company logo
- Poll: Name it / Hide it

**Example 3:**
- Visual: Form field with visible label "Email address" and placeholder showing email icon
- Element highlighted: Email icon inside field
- Poll: Name it / Hide it

**Example 4:**
- Visual: Article page with decorative wave divider between sections
- Element highlighted: Wave divider graphic
- Poll: Name it / Hide it

**Headline:** Practice: Name it or hide it?

**Speaker notes:**
Let's practice. Four elements. For each one, vote: does it need a name, or should it be hidden from AT?

[Example 1: Thumbnail] This one's tricky. The card has a title that describes the content. The thumbnail is a visual preview but doesn't add information the title doesn't provide. Most teams hide these. But if the image conveys something unique, name it.

[Example 2: Logo] Usually needs a name. It's typically a link to the homepage. "Home" or "[Company] home" is common.

[Example 3: Email icon] Hide it. The visible label "Email address" already provides the name. The icon is redundant visual reinforcement.

[Example 4: Divider] Hide it. Purely decorative. Adds no information.

---

### Frame 3.5: The decorative trap

**Type:** Common mistake highlight

**Layout:** Before/after comparison

**Scenario:**
Card component with: thumbnail image, "Photoshop (web)" title, description, "Open" button

**Before (wrong):**
- Thumbnail has alt text: "Screenshot of Photoshop web interface showing gradient tool"
- Screen reader experience: "Screenshot of Photoshop web interface showing gradient tool, image. Photoshop (web), heading. Open, button."
- Red highlight, caption: "Redundant. The heading already identifies the content."

**After (correct):**
- Thumbnail marked decorative
- Screen reader experience: "Photoshop (web), heading. Open, button."
- Green highlight, caption: "Clean. User gets to the point faster."

**Headline:** The decorative trap

**Body text:**
A common mistake: naming images that should be decorative. When surrounding text already provides context, the image name becomes redundant noise.

**Speaker notes:**
This is one of the most common mistakes I see.

A designer thinks, "This is an image, images need alt text, let me describe it." So the thumbnail gets a detailed description.

But the user already knows what this card is about from the heading. Adding an image description just makes them sit through more content before they can take action.

When text nearby already provides context, mark the image decorative. Keep the experience focused.

---

### Frame 3.6: Outcome checkpoint

**Type:** Summary/checkpoint

**Layout:** Checklist format

**Headline:** Checkpoint: Identifying what needs names

**Checklist:**
- [ ] I can identify which UI elements require accessible names
- [ ] I can determine when an image is informative vs decorative
- [ ] I understand the "functional vs decorative" decision framework
- [ ] I know that decorative elements should be hidden from AT

**Callout:**
This maps to Outcome 1A.02: Identify when accessible names are required vs optional

**Speaker notes:**
Quick checkpoint. At this point you should be able to look at any interface and identify which elements need names and which should be hidden.

If you're not confident on any of these, make a note. We can revisit during Q&A.

---

# Section 4: What Makes a Good Name?
## Duration: 10 minutes

### Frame 4.1: Section Divider

**Type:** Section divider

**Layout:** Centered title, geometric background pattern

**Content:**
- Section number: `4`
- Title: `What Makes a Good Name?`

**Speaker notes:**
Knowing what needs a name is step one. Now: how do you write a good one?

---

### Frame 4.2: Function over form

**Type:** Good/bad comparison

**Layout:** Two-column comparison

**Left column (Bad):**
- Icon: Right-pointing arrow (→)
- Red X indicator
- Name shown: `"Blue arrow pointing right"`
- Caption: Describes appearance

**Right column (Good):**
- Icon: Right-pointing arrow (→)
- Green checkmark indicator
- Name shown: `"Next"`
- Caption: Describes function

**Headline:** Function over form

**Body text:**
Describe what the element does, not what it looks like. Users need to know the action, not the visual design.

**Learning Objective Pill:** `LO 1A.03` → Links to Frame 0.2

**Speaker notes:**
Principle one: function over form.

This is the most common mistake. A designer sees an arrow icon and thinks "I should describe the icon." So they write "Blue arrow pointing right."

But that tells the user nothing useful. They don't need to know it's blue. They don't need to know it points right. They need to know what happens when they click it.

"Next" tells them they'll advance to the next item. That's what matters.

---

### Frame 4.3: Concise

**Type:** Good/bad comparison

**Layout:** Two-column comparison

**Left column (Bad):**
- Button visual
- Red X indicator
- Name shown: `"Click this button to submit your form and send your information"`
- Caption: Too verbose

**Right column (Good):**
- Button visual
- Green checkmark indicator
- Name shown: `"Submit"`
- Caption: Concise and clear

**Headline:** Keep it concise

**Body text:**
1-3 words is ideal. Remember: the screen reader also announces the element's role. "Submit, button" is what users hear.

**Callout:**
Bad: "Click this button to submit" → Users hear "Click this button to submit, button"
Good: "Submit" → Users hear "Submit, button"

**Learning Objective Pill:** `LO 1A.03` → Links to Frame 0.2

**Speaker notes:**
Principle two: be concise.

Screen readers announce the role after the name. So if your button is named "Submit," users hear "Submit, button."

If you name it "Click this button to submit your form," they hear "Click this button to submit your form, button." Redundant and exhausting.

1-3 words. Get to the point.

---

### Frame 4.4: Distinguishing words first

**Type:** Good/bad comparison with list context

**Layout:** Shows screen reader link list view

**Scenario:**
A page has three edit buttons: Edit Profile, Edit Settings, Edit Preferences

**Left column (Bad):**
- Simulated screen reader list:
  - "Button for editing profile"
  - "Button for editing settings"
  - "Button for editing preferences"
- Red X
- Caption: Users must listen to "Button for editing..." every time before hearing what's different

**Right column (Good):**
- Simulated screen reader list:
  - "Edit profile"
  - "Edit settings"
  - "Edit preferences"
- Green checkmark
- Caption: Distinguishing word first: users can scan quickly

**Headline:** Put distinguishing words first

**Body text:**
Screen reader users often scan lists of links or buttons. Front-load the unique part of the name so they can quickly find what they need.

**Learning Objective Pill:** `LO 1A.03` → Links to Frame 0.2

**Speaker notes:**
Principle three: distinguishing words first.

Screen reader users often pull up a list of all buttons or all links on a page and scan through them. If all your names start with the same words, they have to listen through the common part every time.

"Button for editing profile, button for editing settings, button for editing preferences." They hear "Button for editing" three times before getting to the useful part.

Flip it: "Edit profile, Edit settings, Edit preferences." Now they hear the distinguishing word immediately.

This is especially important for repetitive patterns like "Learn more about X."

---

### Frame 4.5: Consistent patterns

**Type:** Consistency illustration

**Layout:** Grid showing consistent vs inconsistent naming

**Left side (Inconsistent):**
- Four action buttons with different verbs for similar actions:
  - "Modify profile"
  - "Change settings"
  - "Edit preferences"
  - "Update account"
- Red X
- Caption: Four different words for the same type of action

**Right side (Consistent):**
- Four action buttons with consistent verb:
  - "Edit profile"
  - "Edit settings"
  - "Edit preferences"
  - "Edit account"
- Green checkmark
- Caption: Same verb creates predictable pattern

**Headline:** Use consistent patterns

**Body text:**
When similar actions appear across your interface, use the same verb. Consistency builds user confidence and reduces cognitive load.

**Speaker notes:**
Principle four: consistency.

If "Edit" means "change this thing" in one place, use "Edit" everywhere you mean the same thing. Don't switch to "Modify" or "Change" or "Update" for variety.

Sighted users can see that all these buttons look the same. AT users rely on naming patterns to build that same mental model.

---

### Frame 4.6: Practice: Improve these names

**Type:** Interactive exercise

**Layout:** Four bad names with space for improvement discussion

**Examples to improve:**

1. **Original:** "Red circle icon indicating error state"
   **Element:** Error indicator icon
   **Hint:** What does the user need to know?

2. **Original:** "Click here"
   **Element:** Link in paragraph text
   **Hint:** Click here to do what?

3. **Original:** "Button"
   **Element:** Close button (X icon) on modal
   **Hint:** What happens when activated?

4. **Original:** "Image of person smiling while using laptop in coffee shop"
   **Element:** Hero image on product landing page
   **Hint:** Is this informative or decorative?

**Headline:** Practice: Improve these names

**Speaker notes:**
Let's practice. I'll show you four bad names. Think about how you'd improve them.

[1: Error icon] "Red circle icon indicating error state." What does the user need to know? Probably: "Error" or even just hide it if there's already error text nearby.

[2: Click here] "Click here" is a classic bad pattern. Click here to do what? Name it for the action: "Download report" or "View pricing."

[3: Button] An X button on a modal just named "Button." What happens? "Close" or "Close dialog."

[4: Hero image] This is descriptive but... is this image informative or decorative? If it's a generic stock photo, probably decorative. Hide it. If it's showing the actual product interface, maybe name it.

---

### Frame 4.7: Outcome checkpoint

**Type:** Summary/checkpoint

**Layout:** Principles summary card

**Headline:** Quality accessible names

**Four principles card:**
1. **Function over form**: What it does, not what it looks like
2. **Concise**: 1-3 words, avoid redundancy
3. **Distinguishing words first**: Scannable in lists
4. **Consistent patterns**: Same action = same verb

**Callout:**
This maps to Outcome 1A.03: Evaluate accessible name quality

**Speaker notes:**
Four principles. You'll use these every time you write or review an accessible name.

Function over form. Concise. Distinguishing words first. Consistent patterns.

When you're reviewing your own work or giving feedback to others, these are your criteria.

---

# Section 5: Visible Labels vs Programmatic Names
## Duration: 10 minutes

### Frame 5.1: Section Divider

**Type:** Section divider

**Layout:** Centered title, geometric background pattern

**Content:**
- Section number: `5`
- Title: `Visible vs Programmatic Names`

**Speaker notes:**
Now let's talk about when visible text is enough, and when you need to specify a programmatic name.

---

### Frame 5.2: When visible text is enough

**Type:** Example illustration

**Layout:** Component example with callout

**Visual:**
- Button component with visible text: "Save document"
- Callout pointing to it: "Visible text = accessible name"
- Below: Code hint showing `<button>Save document</button>`
- Green checkmark: "No annotation needed"

**Headline:** When visible text is enough

**Body text:**
If text is visible on the element, that text automatically becomes the accessible name. No extra work required from design or engineering.

**Examples:**
- Button with text label ✓
- Link with descriptive text ✓
- Form field with visible label ✓

**Learning Objective Pill:** `LO 1A.05` → Links to Frame 0.2

**Speaker notes:**
This is the happy path. If your button says "Save document" right on it, that's the accessible name. You don't need to annotate it. Engineering doesn't need to add aria-label. It just works.

Same for links with descriptive text, form fields with visible labels, anything where the text is already there.

Your annotation time is for the cases where visible text isn't present or isn't sufficient.

---

### Frame 5.3: When you need a programmatic name

**Type:** Use case gallery

**Layout:** Four example cards showing cases requiring programmatic names

**Card 1: Icon-only button**
- Visual: Bell icon button
- Caption: No visible text. Needs aria-label.
- Annotation needed: Yes

**Card 2: Search field without visible label**
- Visual: Search input with magnifying glass icon, placeholder "Search..."
- Caption: Placeholder alone isn't a reliable name. Needs programmatic label.
- Annotation needed: Yes

**Card 3: Informative image**
- Visual: Chart or infographic
- Caption: Conveys information not available in surrounding text. Needs alt text.
- Annotation needed: Yes

**Card 4: Ambiguous links**
- Visual: Multiple "Read more" links
- Caption: Identical text, different destinations. Need expanded names.
- Annotation needed: Yes

**Headline:** When you need a programmatic name

**Body text:**
Some designs require programmatic names because visible text is absent, insufficient, or ambiguous.

**Learning Objective Pill:** `LO 1A.05` → Links to Frame 0.2

**Speaker notes:**
Here are the cases where you DO need to annotate.

Icon-only buttons: no text visible, so you must specify the name.

Search fields without visible labels: placeholder text disappears when the user types, so it's not reliable. Specify a programmatic label.

Informative images: if the image conveys information that isn't available in surrounding text, it needs alt text.

Ambiguous links: if you have multiple "Read more" links going to different places, users can't tell them apart. Each needs an expanded name.

These are your annotation priorities.

---

### Frame 5.4: The "Read more" problem

**Type:** Before/after comparison

**Layout:** Real-world example showing the problem and solution

**Scenario:**
Three article cards, each with a "Watch now" button going to different destinations.

**Before (problem):**
- Three cards showing: Opening Keynote, Inspiration Keynote, Sneaks
- Each has a "Watch now" button
- Screen reader button list shows:
  - Watch now
  - Watch now
  - Watch now
- Red X: "Users can't tell which is which"

**After (solution):**
- Same three cards
- Screen reader button list shows:
  - Watch now Opening Keynote
  - Watch now Inspiration Keynote
  - Watch now Sneaks
- Green checkmark: "Now users can navigate directly to what they want"

**Headline:** The "Read more" / "Watch now" problem

**Body text:**
When identical link or button text appears multiple times with different destinations, users navigating by element type can't distinguish them.

Solution: Expand each name to include context, while keeping visible text unchanged.

**Speaker notes:**
This is one of the most common issues on the web.

Marketing wants clean, consistent "Watch now" buttons. But when a screen reader user pulls up a list of all buttons, they see "Watch now, Watch now, Watch now." Which one goes to the Opening Keynote?

The solution: keep the visible text as "Watch now," but give each button an expanded accessible name: "Watch now Opening Keynote," "Watch now Inspiration Keynote," "Watch now Sneaks."

The visual design stays clean. The AT experience becomes usable.

---

### Frame 5.5: Label in name rule

**Type:** Rule explanation with examples

**Layout:** Rule statement with good/bad examples

**Rule statement (emphasized):**
When adding a programmatic name to an element that has visible text, the accessible name must start with the visible text.

**WCAG reference:** 2.5.3 Label in Name (Level A)

**Good examples:**
- Visible: "Read more" → Accessible name: "Read more about GenStudio" ✓
- Visible: "Submit" → Accessible name: "Submit order" ✓

**Bad examples:**
- Visible: "Read more" → Accessible name: "GenStudio details, read more" ✗
- Visible: "Submit" → Accessible name: "Send your order form" ✗

**Headline:** Label in Name

**Body text:**
Voice control users say what they see. If the visible text is "Read more," they'll say "Click Read more." If the accessible name doesn't start with "Read more," the command fails.

**Learning Objective Pill:** `LO 1A.05` → Links to Frame 0.2

**Speaker notes:**
There's a WCAG requirement for this: Label in Name.

When you expand an accessible name, start with the visible text.

Why? Voice control. If the button says "Read more," a voice control user will say "Click Read more." If the accessible name is "GenStudio details, read more," the speech recognition might not match.

Start with what's visible. Add context after.

---

### Frame 5.6: Outcome checkpoint

**Type:** Decision flowchart summary

**Layout:** Flowchart for deciding when to annotate

**Flowchart:**
```
Is there visible text on the element?
         |
        / \
       /   \
     Yes    No
      |      |
      v      v
Is the visible    Annotate with
text sufficient?  accessible name
      |           (e.g., icon button)
     / \
    /   \
  Yes    No
   |      |
   v      v
No        Annotate with
action    expanded name
needed    (e.g., "Read more" links)
```

**Headline:** When to annotate

**Callout:**
This maps to Outcome 1A.05: Distinguish between visible labels and programmatic names

**Speaker notes:**
Here's your decision tree.

Is there visible text? If no, annotate. Icon buttons, informative images, etc.

If yes, is it sufficient? Does it uniquely identify the element? If yes, no action needed. If no, annotate with an expanded name that starts with the visible text.

You'll internalize this with practice.

---

# Section 6: Specifying Names for Engineering
## Duration: 10 minutes

### Frame 6.1: Section Divider

**Type:** Section divider

**Layout:** Centered title, geometric background pattern

**Content:**
- Section number: `6`
- Title: `Specifying Names for Engineering`

**Speaker notes:**
You know what needs names and how to write good ones. Now: how do you communicate this to engineering?

---

### Frame 6.2: Designer vs engineer responsibilities

**Type:** Role clarity diagram

**Layout:** Two-column responsibility split

**Left column (Designer):**
- Heading: Your responsibility
- List:
  - Identify which elements need names
  - Decide what each name should be
  - Specify names in design annotations
  - Flag decorative elements to hide
  - Review implementation for correctness

**Right column (Engineer):**
- Heading: Engineering's responsibility
- List:
  - Choose the appropriate HTML/ARIA technique
  - Implement names in code
  - Ensure names surface correctly to AT
  - Handle dynamic content naming
  - Test with screen readers

**Headline:** Clear handoff

**Body text:**
You specify the name. Engineering implements it. You review to confirm.

**Learning Objective Pill:** `LO 1A.04` → Links to Frame 0.2

**Speaker notes:**
Let's be clear about who does what.

You, the designer, decide what each element should be called. You write those names into your annotations.

Engineering decides how to implement them. They know whether to use aria-label, aria-labelledby, alt text, or a visible label element. That's code-level decision making.

You then review the implementation to make sure your intent came through correctly.

This separation is important. You don't need to know the code syntax. You do need to clearly communicate your naming decisions.

---

### Frame 6.3: Stark Blueline annotations

**Type:** Tool demonstration

**Layout:** Screenshot of Stark plugin with callouts

**Visual:**
- Stark Figma plugin panel showing Annotations section
- Accessible Name annotation type selected
- Fields shown:
  - Element identifier/reference number
  - Name field (where you type the accessible name)
  - Notes field (optional context for engineering)

**Callouts pointing to key areas:**
- "Select 'Accessible Name' annotation type"
- "Enter the name exactly as it should be announced"
- "Add notes if engineering needs context"

**Headline:** Blueline annotations with Stark

**Body text:**
Stark's Figma plugin provides structured accessibility annotations. For accessible names, select the "Accessible Name" type and enter the exact name you want users to hear.

**Learning Objective Pill:** `LO 1A.04` → Links to Frame 0.2

**Speaker notes:**
We use Stark for our accessibility annotations. Here's the Accessible Name annotation type.

You pick the element, select Accessible Name, and type in exactly what you want users to hear.

The notes field is for context. If there's something engineering needs to know, like "this should match the tooltip text," put it there.

Let's look at some specific examples.

---

### Frame 6.4: Example: Icon-only button

**Type:** Annotation example

**Layout:** Design mockup + annotation panel side by side

**Left side (Design):**
- Icon button component (e.g., notification bell)
- Annotation marker: 1

**Right side (Stark panel):**
```
Annotations
[Section name]

Accessible Name                    [icon]

1  notification_button
Name    Notifications
Note    Button in global header. Opens notification panel.
```

**Headline:** Annotating an icon-only button

**Body text:**
For icon-only buttons, specify the complete accessible name. Be concise and action-oriented.

**Learning Objective Pill:** `LO 1A.04` → Links to Frame 0.2

**Speaker notes:**
Here's an icon-only button. No visible text.

In your annotation, give it a reference ID so engineering can find it. Then enter the name: "Notifications."

Notice I didn't say "Notifications button." The role "button" is announced automatically by the screen reader. Just the name.

The note adds context: what is this button? Where is it? What does it do? Helps engineering implement correctly.

---

### Frame 6.5: Example: Decorative image

**Type:** Annotation example

**Layout:** Design mockup + annotation panel side by side

**Left side (Design):**
- Card component with thumbnail image
- Image has annotation marker: 1
- Card title visible: "Getting Started Guide"

**Right side (Stark panel):**
```
Annotations
[Section name]

Accessible Name                    [icon]

1  card_thumbnail
Name    [n/a decorative]
Note    Thumbnail preview. Card title provides context.
        Mark decorative in implementation.
```

**Headline:** Annotating a decorative element

**Body text:**
When an element should be hidden from assistive technology, annotate it explicitly with "[n/a decorative]" so engineering knows to exclude it.

**Speaker notes:**
This is just as important as providing names: telling engineering when to hide something.

This thumbnail doesn't add information beyond what the card title provides. So we annotate it as decorative.

I write "[n/a decorative]" in the name field. Then in notes, I explain why and confirm the expectation: "Mark decorative in implementation."

Explicit is better than implicit. Don't leave engineering guessing.

---

### Frame 6.6: Example: Expanded link text

**Type:** Annotation example

**Layout:** Design mockup + annotation panel side by side

**Left side (Design):**
- Article card with heading "Opening Keynote" and "Watch now" link
- Link has annotation marker: 1

**Right side (Stark panel):**
```
Annotations
[Section name]

Accessible Name                    [icon]

1  watch_now_opening_keynote
Name    Watch now Opening Keynote
Note    Visible text is "Watch now." Expanded name needed
        because multiple Watch now links on page.
        Name must start with visible text per WCAG 2.5.3.
```

**Headline:** Annotating expanded link text

**Body text:**
When expanding visible text for disambiguation, include the full accessible name and note why. Always start with the visible text.

**Speaker notes:**
Here's our "Watch now" problem from earlier.

The visible text is "Watch now." But there are multiple of these on the page. So we need an expanded name.

I write "Watch now Opening Keynote" as the full accessible name. It starts with the visible text, per Label in Name.

In notes, I explain the reasoning. This helps engineering understand why and ensures they implement it correctly.

---

### Frame 6.7: Outcome checkpoint

**Type:** Summary/transition to project

**Layout:** Annotation checklist + project preview

**Checklist:**
- [ ] I can identify elements needing annotation
- [ ] I can write clear accessible names
- [ ] I can specify decorative elements
- [ ] I can expand names while preserving visible text
- [ ] I can add helpful notes for engineering

**Project preview box:**
**Your assignment: Blueline Annotations Project**
You'll receive a design mockup with multiple elements requiring accessible name decisions. Annotate all interactive elements, images, and ambiguous links. Mark decorative elements. Submit your annotated Figma file.

**Callout:**
This maps to Outcome 1A.04: Specify accessible names in design annotations

**Speaker notes:**
You now have everything you need to annotate designs for accessible names.

Your project: you'll get a mockup. Identify everything that needs a name. Annotate it. Mark decorative elements. Handle the tricky cases like duplicate links.

This is what you'll do in real work. The mockup is practice.

---

# Section 7: Project Preview & Wrap-up
## Duration: 5 minutes

### Frame 7.1: Project overview

**Type:** Assignment preview

**Layout:** Assignment details card

**Assignment title:** L01 Applied Skill Project: Blueline Annotations

**Details:**
- **What you'll receive:** Design mockup with 15-20 elements requiring decisions
- **What you'll deliver:** Annotated Figma file with Stark blueline annotations
- **Time:** Complete independently before next session
- **Points:** 20 (rubric-graded)

**Rubric preview:**
| Criterion | What we're looking for |
|-----------|------------------------|
| Element Identification | Did you find all elements needing names? |
| Name Quality | Are names concise, functional, and distinguishable? |
| Annotation Clarity | Can engineering implement from your specs? |
| Visible vs Programmatic | Did you correctly identify when to expand names? |
| Decorative Handling | Did you correctly mark decorative elements? |

**Speaker notes:**
Here's your project.

You'll get a mockup. Your job is to audit it and annotate it for accessibility.

The rubric shows what I'm looking for. Find everything that needs a name. Write good names. Make your annotations clear enough that engineering could implement without questions. Know when visible text is enough and when you need to expand. Mark decorative elements.

This is the real skill. The quiz tests whether you understand the concepts. The project tests whether you can apply them.

---

### Frame 7.2: Resources

**Type:** Resource links

**Layout:** Organized resource list

**Headline:** Resources for reference

**W3C resources:**
- APG: Providing Accessible Names and Descriptions
  `https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/`
- WCAG Understanding 1.1.1 Non-text Content
  `https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html`
- WCAG Understanding 4.1.2 Name, Role, Value
  `https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html`
- WCAG Understanding 2.5.3 Label in Name
  `https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html`

**Adobe resources:**
- Design Accessibility Checklist (Accessible Names section)
- Stark Figma Plugin Guide
- Digital Accessibility Guide (internal)

**Speaker notes:**
These resources are also linked on the Canvas page.

The APG guide on names and descriptions is the authoritative source. If you want to go deeper, start there.

The WCAG Understanding documents explain the specific requirements and give examples.

You don't need to memorize all of this. You need to know where to look. This is open-book work, just like real design practice.

---

### Frame 7.3: Questions

**Type:** Q&A slide

**Layout:** Simple centered layout

**Headline:** Questions?

**Subtext:** 
Next: Complete the Knowledge Check quiz and start your Blueline Annotations project.

**Contact/support info:**
[Instructor contact info]
[Slack channel or support resource]

**Speaker notes:**
What questions do you have?

[Address questions]

After this session, complete the Knowledge Check quiz in Canvas. It's five questions, open-book, and helps you confirm you understood the key concepts.

Then start your Blueline project. Take your time with it. Refer back to this deck and the resources. Reach out if you get stuck.

See you next week for Lesson 02: Content Structure.

---

# Appendix: Slide Count Summary (After Adding New Checkpoints)

| Section | Slides |
|---------|--------|
| 0. Title & Objectives | 02-06 (5) |
| 1. The Human Connection | 07-12 (6) |
| 2. What Is an Accessible Name? | 13-19 (7) |
| 3. When Are Names Required? | 20-26 (7) |
| 4. What Makes a Good Name? | 27-34 (8) |
| 5. Visible vs Programmatic | 35-41 (7) |
| 6. Specifying Names for Engineering | 42-48 (7) |
| 7. Project Preview & Wrap-up | 49-52 (4) |
| **Total** | **51** |

---

# Appendix: Component/Visual Asset Needs

To build this deck, you'll need:

**Reusable Components:**
- Learning Objective Pill (see specs in Design System Notes)
  - Pill shape, light blue, links to Frame 0.2
  - Used on 14 frames throughout the deck

**Icons:**
- Bell/notification icon
- Right arrow icon
- Target/bullseye icon
- Fingerprint/ID icon
- Checkmark (green)
- X mark (red)
- Various Spectrum icons for examples

**UI Components:**
- Button component (various states)
- Card component (with thumbnail, title, description, action)
- Link component
- Form field component
- Icon-only button component
- Navigation bar mockup
- Modal with close button

**Illustrations/Diagrams:**
- Human → AT → Name → Interface flow diagram
- Decision flowchart (functional vs decorative)
- Screen reader list mockups (links list, buttons list, headings list)

**Screenshots:**
- Stark plugin panel
- Real or realistic interface examples

**Interactive elements:**
- Voting dots grid (reusable component)
- Poll option boxes (A/B/C pattern)

---

*End of build guide*
