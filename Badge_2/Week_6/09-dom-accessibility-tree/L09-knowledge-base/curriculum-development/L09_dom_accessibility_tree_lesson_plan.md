# L09: DOM and Accessibility Tree - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2A.01, 2A.02, 2A.03

---

## Lesson Overview

This in-person lesson introduces the relationship between the DOM and accessibility tree. Students learn how browsers expose content to assistive technologies, how to inspect accessibility properties using browser dev tools, and how design decisions impact what AT users experience.

**Why This Matters:** Understanding the accessibility tree is essential for predicting and debugging how assistive technology users will experience your designs. This is the foundation for all AT testing skills.

**Connection to Badge 1:** This lesson explains the "how" behind the accessible names and semantic structure covered in Discover Badge lessons.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 4.1.2 | Name, Role, Value | A | AT must receive name, role, and value information |
| 1.3.1 | Info and Relationships | A | Structure and relationships must be programmatically determined |

---

## Content Outline

### Section 0: Introduction (3 min)
- Welcome to Define Badge
- Lesson objectives display (2A.01, 2A.02, 2A.03)
- Connection to Discover Badge foundation

### Section 1: What is the Accessibility Tree? (10 min)

**1.1 The Pipeline**
- HTML/CSS → DOM → Accessibility Tree → Platform API → Assistive Technology
- Visual diagram showing the transformation
- Key insight: AT never sees your CSS or visual design, only the accessibility tree

**1.2 Accessibility Tree vs DOM**
- DOM contains everything needed to render the page
- Accessibility tree contains only what's needed for AT interaction
- Decorative elements are pruned
- Relationships may be restructured

**1.3 The Four Properties**
- **Name:** What the element is called (the accessible name)
- **Role:** What type of element it is (button, link, heading)
- **State:** Current condition (checked, expanded, disabled)
- **Value:** Current value (for inputs, sliders, etc.)

**1.4 Live Demo**
- Show accessibility tree in Chrome DevTools
- Compare visual element to its accessibility representation

**Key Message:** The accessibility tree is the interface between your design and AT users.

### Section 2: Inspecting with Dev Tools (12 min)

**2.1 Chrome Accessibility Panel**
- Elements panel → Accessibility tab
- Full accessibility tree view
- ARIA attributes pane

**2.2 Firefox Accessibility Inspector**
- Dedicated Accessibility panel
- Tree view and property inspector
- Simulation features

**2.3 Safari Accessibility Inspector**
- Elements panel → Node tab → Accessibility
- macOS-specific features

**2.4 What to Look For**
- Computed name (where did it come from?)
- Role (implicit from HTML or explicit from ARIA?)
- States (do they match visual state?)
- Missing or incorrect properties

**2.5 Hands-on Practice**
- Students inspect example page using their preferred browser
- Identify name, role, state for 5 elements
- Document findings

**Key Message:** Check the accessibility tree before you test with a screen reader.

### Section 3: How Design Affects the Tree (12 min)

**3.1 Accessible Name Computation**
- Priority order: aria-labelledby → aria-label → native labeling → text content
- How design decisions determine which source is used
- Example: Icon button with aria-label vs text button

**3.2 Role Assignment**
- Semantic HTML provides implicit roles
- ARIA role attribute overrides implicit role
- Custom components often need explicit roles

**3.3 State Management**
- Visual states must be reflected in ARIA states
- Common mismatch: visually expanded but no aria-expanded
- Designer responsibility: specify state changes in annotations

**3.4 Prediction Practice**
- Given a design mockup, predict the accessibility tree
- Compare predictions to actual dev tools inspection
- Identify gaps between intent and reality

**Key Message:** Your design decisions directly determine the accessibility tree.

### Section 4: Summary and Assessment (8 min)

**4.1 Key Takeaways**
- The accessibility tree is what AT actually interacts with
- Four properties: Name, Role, State, Value
- Dev tools inspection should precede screen reader testing
- Design decisions have direct accessibility tree impact

**4.2 Quiz Preview**
- 5 questions covering DOM/tree relationship and dev tools

**4.3 Project Introduction**
- Combined with L10: Accessibility Tree Analysis
- Analyze provided page, document properties, predict announcements

**4.4 Next Lesson Preview**
- L10: Screen Reader Fundamentals
- How to navigate and test with VoiceOver and NVDA
- Browse mode vs focus mode

---

## Materials Needed

- Laptop with Chrome, Firefox, or Safari
- Example web page for inspection exercises
- Accessibility tree reference guide (handout)

---

## Instructor Notes

### Common Student Questions

**Q: Why doesn't the accessibility tree match what I see visually?**
A: The accessibility tree is semantic, not visual. It represents meaning and purpose, not appearance.

**Q: Do I need to learn all three browsers' dev tools?**
A: Learn at least one well. Chrome is most common, but Firefox has excellent accessibility-specific features.

**Q: How do I know if an accessible name is "computed" vs "explicit"?**
A: Dev tools show the source. If it says "from aria-label" that's explicit. If it says "from contents" that's computed from text content.

### Timing Adjustments

If running short:
- Reduce hands-on practice time in Section 2
- Skip Safari-specific content if students primarily use Chrome/Firefox

If running long:
- Section 3.4 prediction practice can be homework
- Detailed quiz preview can be shortened

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L09: DOM and Accessibility Tree*
