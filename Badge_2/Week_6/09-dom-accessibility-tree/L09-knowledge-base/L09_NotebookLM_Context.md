# L09: DOM and Accessibility Tree - Context for Audio Overview

## About This Document

This document provides context for generating an audio overview (podcast-style content) about Lesson 09: DOM and Accessibility Tree. The target audience is **designers**, not developers.

---

## Course Context

**Program:** DACE (Design Accessibility Certified Expert) Training
**Lesson:** L09 - DOM and Accessibility Tree
**Badge Level:** Define Badge (intermediate level, second of three badges)
**Audience:** Visual and UX designers who work in design tools like Figma
**Duration:** 45 minutes, in-person instructor-led session

### Prerequisite Knowledge
Students have completed the Discover Badge (L01-L08), which covered:
- Accessible names (what they are and why they matter)
- Headings and reading order
- Color contrast and use of color
- Form labeling and error handling
- Keyboard and touch accessibility
- Responsive design and zoom
- Landmarks and navigation
- Motion and animation

This is the first lesson where designers learn "under the hood" how accessibility actually works technically.

---

## Key Pedagogical Framing: "Be the Human Screen Reader"

The central metaphor of this lesson is teaching designers to **see interfaces the way assistive technology sees them**. 

This means:
- Looking at a visual design and asking "What will this SOUND like?"
- Understanding reading order and focus order
- Identifying what information is missing for non-visual users
- Predicting what a screen reader will announce for any element

**This is NOT about writing code.** It's about understanding the technical foundation so designers can:
1. Create better annotations for engineering handoffs
2. Anticipate accessibility issues before implementation
3. Verify that implementations match design intent
4. Have informed conversations with developers

---

## Core Concepts to Cover

### 1. The Accessibility Pipeline

How content flows from design to assistive technology users:

```
User Interface → Platform Accessibility API → Assistive Technology → User with Disability
```

**Key insight for designers:** Assistive technology never sees your visual design, colors, or layout. It only receives structured information about each element's purpose and current state.

### 2. The Accessibility Tree

The accessibility tree is a simplified, semantic representation of the interface that the operating system exposes to assistive technologies.

**Analogy:** If the full interface is an architectural blueprint with every wire and pipe, the accessibility tree is like a building directory in the lobby that shows: "Here are the buttons, here are the headings, here are the input fields."

What's included:
- Interactive elements (buttons, links, form controls)
- Structural elements (headings, landmarks)
- Text content

What's excluded:
- Purely decorative elements
- Visual styling information
- Layout containers with no semantic meaning

### 3. Four Properties of Every Element

Every element in the accessibility tree has four key properties:

| Property | What It Provides | Designer's Role |
|----------|------------------|-----------------|
| **Name** | What the element is called | Specify accessible names in design annotations |
| **Role** | What type of element it is (button, link, heading) | Choose appropriate component types |
| **State** | Current condition (expanded, checked, disabled) | Specify state changes in annotations |
| **Value** | Current value for inputs/sliders | Specify how values should be announced |

**Example screen reader announcement:** "Submit form, button, disabled"
(Name: "Submit form" + Role: "button" + State: "disabled")

### 4. Reading Order vs. Focus Order

**Reading Order (DOM Order):** The sequence in which ALL content is read, including static text, images, and interactive elements.

**Focus Order (Tab Order):** The sequence in which ONLY interactive elements receive keyboard focus.

| Element | Reading Order | Focus Order | Why? |
|---------|---------------|-------------|------|
| Logo heading | 1 | — | Not interactive |
| Navigation button | 2 | 1 | Interactive |
| Paragraph text | 3 | — | Not interactive |
| Search field | 4 | 2 | Interactive |

Designers need to understand both to ensure logical navigation.

### 5. Common Issues Designers Can Identify

**Duplicate button names:**
Three "Open" buttons that all sound identical to screen reader users navigating by button. Solution: Each button needs a unique accessible name like "Open Text to Image", "Open Generate Video", "Open Text to Vector".

**Missing accessible names:**
Icon-only buttons with no text alternative. Solution: Annotate with the accessible name to be announced.

**State mismatches:**
An accordion that looks expanded but doesn't communicate "expanded" state to assistive technology. Solution: Annotate state changes, not just visual changes.

**Generic labels:**
Buttons labeled only "Click here" or "Learn more" with no context. Solution: Provide descriptive names that make sense out of context.

---

## Designer's Responsibilities

Designers are responsible for specifying the **aural experience** in their design annotations:

1. **Accessible names** for all interactive elements and informative images
2. **Heading levels** for all headings (H1, H2, H3, etc.)
3. **State changes** for interactive elements (expanded/collapsed, checked/unchecked)
4. **Decorative vs. informative** designation for images
5. **Reading order** when visual order differs from logical order
6. **Focus management** for complex interactions (where should focus go after a modal closes?)

**Key principle:** If you don't specify it in annotations, it won't be built correctly.

---

## Using Browser Developer Tools

Designers can verify accessibility properties using browser developer tools:
- **Chrome:** Elements panel → Accessibility tab
- **Firefox:** Dedicated Accessibility panel
- **Safari:** Elements panel → Node tab → Accessibility

This allows designers to:
- Check if their annotations were implemented correctly
- Identify accessibility issues before formal testing
- Understand what assistive technology users will experience

**Key insight:** Check the accessibility tree BEFORE testing with a screen reader. If the information in the tree is wrong, no amount of screen reader testing will fix the underlying problem.

---

## Language Guidelines

### Preferred Language
- "Assistive technology users" or "screen reader users"
- "People who are blind or have low vision"
- "The accessibility tree provides information to assistive technology"
- "AT doesn't receive visual styling information"

### Avoid
- Describing technology as "blind" (technology isn't disabled, people are)
- Overly technical code examples (this audience doesn't write HTML)
- Platform-specific terminology (keep it general, not just "web")
- Assuming the audience are developers

---

## Tone and Style

- Conversational and accessible, not overly technical
- Focused on design decisions and their impact
- Practical, actionable guidance
- Empowering designers to understand what was previously "engineering magic"
- Using the "Be the Human Screen Reader" framing throughout

---

## Key Takeaways for the Audio Overview

1. **Every design has a second interface** that assistive technology users interact with
2. **Designers can learn to "read" this interface** by understanding the accessibility tree
3. **Four properties define every element:** Name, Role, State, Value
4. **Design annotations become accessibility tree properties** when implemented correctly
5. **Check the tree first** using browser dev tools before testing with screen readers
6. **Designers specify the aural experience** through their annotations

---

## WCAG Success Criteria Referenced

| Criterion | Level | Relevance |
|-----------|-------|-----------|
| 4.1.2 Name, Role, Value | A | Understanding how these properties are exposed to AT |
| 1.3.1 Info and Relationships | A | Understanding how structure is represented |
| 2.5.3 Label in Name | A | Accessible names should start with visible text |

---

*This document is for generating audio content about the DOM and Accessibility Tree lesson for the DACE training program.*
