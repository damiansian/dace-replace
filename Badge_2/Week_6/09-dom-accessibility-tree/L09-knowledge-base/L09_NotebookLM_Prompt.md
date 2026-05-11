# Notebook LM Prompt for L09 Audio Overview

## Instructions for Notebook LM

Use the context document (L09_NotebookLM_Context.md) to generate an engaging audio overview about the DOM and Accessibility Tree for designers.

---

## Prompt

Create a 5-7 minute podcast-style audio overview about the DOM and Accessibility Tree for a designer audience.

### Key Requirements

**Audience:** Visual and UX designers who use design tools like Figma. They do NOT write code. They create designs and hand them off to engineering teams with annotations.

**Framing:** Use the "Be the Human Screen Reader" metaphor throughout. The core skill being taught is how to look at a visual design and understand what it will SOUND like to someone using assistive technology.

**Tone:** Conversational, empowering, and practical. Help designers feel like they're gaining a superpower, not learning boring technical details.

### Topics to Cover

1. **The hidden interface:** Every design has a second interface that millions of assistive technology users interact with. This interface communicates meaning through sound and structure, not visuals.

2. **The accessibility pipeline:** Briefly explain how content flows from the interface to assistive technology users. Keep this high-level and avoid code examples.

3. **The four properties:** Name, Role, State, and Value. Explain each with real-world examples that designers would encounter (buttons, headings, accordions, checkboxes).

4. **Reading order vs. focus order:** Help designers understand the difference between how ALL content is read sequentially versus how keyboard users TAB through only interactive elements.

5. **Common issues designers can spot:**
   - Duplicate button names (three "Open" buttons that all sound the same)
   - Missing accessible names on icon-only buttons
   - State mismatches (looks expanded but doesn't announce "expanded")
   - Generic labels that make no sense out of context

6. **The designer's responsibility:** Designers specify the aural experience through their annotations. If you don't annotate accessible names, heading levels, and state changes, they won't be built correctly.

7. **Using dev tools to verify:** Designers can use browser accessibility panels to check if their annotations were implemented correctly, without needing to be developers.

### Language Guidelines

**DO use:**
- "Assistive technology users" or "screen reader users"
- "People who are blind or have low vision"
- "The accessibility tree provides information to..."
- Platform-agnostic language (not just "web" or "HTML")

**DO NOT use:**
- Language describing technology as "blind" or "can't see" (technology isn't disabled, people are)
- Code examples or HTML/CSS terminology (no "div tags", "button elements", etc.)
- Developer-focused language (this audience doesn't write code)
- The phrase "you as a developer" or similar

### Example Reframes

Instead of: "The browser is blind to the visual layer"
Say: "Assistive technology doesn't receive your visual styling. It only gets structured information about what each element is and what it does."

Instead of: "When you use a button tag, the browser gives it a role of button"
Say: "When you choose a button component in your design system, that component already has the right role built in. Your job is making sure it has a meaningful name."

Instead of: "You need to add aria-label to your div"
Say: "You need to specify the accessible name in your design annotations so engineering knows what this button should announce."

### Closing Message

End with an empowering message: Designers now have the ability to "be the human screen reader." When looking at any design, they can ask: What will this sound like? What information is missing? This skill transforms how they approach accessibility, from guessing to knowing.

---

## Notes for Better Results

1. **Upload the context document** (L09_NotebookLM_Context.md) as the primary source
2. **Copy this prompt** into the customization/instructions area
3. If results are still too technical, try adding: "Avoid all code examples and HTML terminology. Speak to designers, not developers."
4. If results mention "blind" technology, regenerate with: "Never describe technology as blind or unable to see. Use person-first, accurate language."
