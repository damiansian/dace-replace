# L16: Perceptual and Cognitive Design Considerations - Lesson Plan

**Course:** DACE  
**Badge:** Define  
**Delivery:** In-person (instructor-led)  
**Duration:** 45 minutes  
**Outcomes:** 2H.01, 2H.02, 2H.03

---

## Lesson Overview

This in-person lesson addresses the perceptual and cognitive dimensions of accessible design. Students learn how spatial hierarchy, visual density, whitespace, and component semantics affect comprehension for users with cognitive and visual disabilities. This is the final topic-specific lesson in the Define Badge, synthesizing principles from both Discover and Define levels into a holistic view of how design decisions affect cognitive accessibility.

**Why This Matters:** Accessibility is often reduced to checkboxes: contrast ratios, alt text, focus indicators. But many real-world accessibility barriers are perceptual and cognitive: layouts too dense to scan, hierarchies that confuse rather than guide, components whose appearance contradicts their behavior. These issues affect the largest disability population (cognitive disabilities) and are among the hardest to detect with automated tools.

**Connection to Prior Lessons:** This lesson synthesizes threads from across both badges. Heading hierarchy (L02), color usage (L03), reflow/zoom (L06), landmarks (L07), DOM/accessibility tree (L09), and user preferences (L15) all connect here. Students apply their AT testing skills from L10-L14 to evaluate whether visual design choices produce comprehensible experiences.

---

## WCAG Success Criteria

| SC | Name | Level | Key Requirement |
|----|------|-------|-----------------|
| 1.3.1 | Info and Relationships | A | Structure and relationships conveyed through presentation must be programmatically determined |
| 1.3.2 | Meaningful Sequence | A | Correct reading sequence must be programmatically determined |
| 1.4.10 | Reflow | AA | Content must be presentable without scrolling in two dimensions at 320px width |
| 1.4.12 | Text Spacing | AA | No loss of content or functionality when text spacing is adjusted |
| 2.4.6 | Headings and Labels | AA | Headings and labels describe topic or purpose |
| 3.2.3 | Consistent Navigation | AA | Navigational mechanisms in the same relative order across pages |
| 3.2.4 | Consistent Identification | AA | Components with same function identified consistently |
| 4.1.2 | Name, Role, Value | A | Name, role, and value of all UI components can be programmatically determined |

---

## Content Outline

### Section 0: Introduction (3 min)

**Frame 0.1:** Title slide
- Lesson 16: Perceptual and Cognitive Design Considerations
- Define Badge capstone design lesson

**Frame 0.2:** Learning objectives
- 2H.01: Apply spatial hierarchy principles for accessibility
- 2H.02: Design appropriate visual density and whitespace
- 2H.03: Ensure component semantics support comprehension

**Key talking points:**
- This lesson is about the "why" behind design decisions, not just the "what"
- Cognitive disabilities are the largest disability category, affecting an estimated 1 in 8 people
- Many cognitive accessibility barriers are invisible to automated testing
- Everything you have learned in L01-L15 connects here

---

### Section 1: Spatial Hierarchy and Accessibility (12 min)

**Frame 1.1:** Section divider: "Spatial Hierarchy and Accessibility"

**Frame 1.2:** What is spatial hierarchy?
- Definition: The arrangement of visual elements to communicate importance, grouping, and sequence
- Tools of hierarchy: size, weight, color, position, proximity, alignment
- Why it matters: users scan before they read, and hierarchy guides that scan

**Speaker notes:**
Spatial hierarchy is how we answer the question "What should I look at first?" without saying it explicitly. Size says "I'm important." Proximity says "We belong together." Position says "Start here." These are design fundamentals, but they have direct accessibility implications.

**Frame 1.3:** Gestalt principles and implicit grouping
- Proximity: elements close together are perceived as a group
- Similarity: elements that look alike are perceived as related
- Continuity: the eye follows lines and curves
- Closure: the mind completes incomplete shapes
- **Key insight:** Gestalt grouping is visual only; it must be reinforced programmatically for AT users

**Speaker notes:**
Gestalt principles are powerful, but they are perceptual shortcuts that only work for sighted users. A screen reader user cannot perceive proximity or alignment. If you group items visually using whitespace, you must also group them programmatically using landmarks, headings, lists, or ARIA grouping roles.

**Frame 1.4:** Visual hierarchy must match programmatic structure
- Heading levels should reflect visual prominence (larger = higher level)
- Reading order should follow the visual scan path
- Grouped content should be wrapped in semantic containers
- **Common failure:** Sidebar appears visually secondary but comes first in DOM order

**Speaker notes:**
This is where L02 (Headings) and L07 (Landmarks) meet real layout decisions. If your largest, most prominent text is an H3 because you used headings for visual styling rather than structure, the hierarchy is broken. If your sidebar appears before the main content in DOM order, screen reader users encounter it first even though sighted users scan past it.

**Frame 1.5:** Activity: Hierarchy audit
- Show a complex product page layout
- Students identify: What is the visual hierarchy? What would the heading structure be? Does the reading order match?
- Discuss: Where do visual and programmatic hierarchies diverge?

**Discussion prompt:** "Look at this dashboard layout. What is the most important element visually? What heading level should it have? Now look at the HTML order. Would a screen reader encounter it first?"

**Frame 1.6:** Hierarchy at different zoom levels
- At 400% zoom, users see about 1/16 of the original viewport
- Spatial relationships that communicate hierarchy at full size may be invisible at high zoom
- Hierarchy must survive reflow: does the most important content still appear first?

**Speaker notes:**
This connects to L06 (Reflow/Zoom). At 400% zoom, the user sees a narrow column. The spatial proximity that grouped your sidebar with its related content is gone. The alignment that created your three-column layout is gone. What remains is the DOM order and the heading structure. That is your hierarchy at high zoom.

---

### Section 2: Visual Density and Whitespace (12 min)

**Frame 2.1:** Section divider: "Visual Density and Whitespace"

**Frame 2.2:** Density and cognitive load
- Visual density: the amount of information per unit of screen space
- Cognitive load theory: working memory is limited (7 plus or minus 2 items)
- High density increases scanning time and error rates for all users
- Users with cognitive disabilities are disproportionately affected by high density

**Speaker notes:**
Miller's Law tells us working memory can hold about 7 items. When you pack 20 data points, 8 navigation items, 3 callout banners, and a chat widget into one viewport, you are asking users to process far more than working memory can handle. For users with ADHD, learning disabilities, or cognitive fatigue, this is not just uncomfortable: it is a barrier.

**Frame 2.3:** Whitespace as a design tool
- Whitespace is not empty space: it is active separation, grouping, and breathing room
- Types: micro-whitespace (between lines, letters) and macro-whitespace (between sections, around page edges)
- Consistent spacing systems (8px grid, design tokens) create predictable rhythm
- **WCAG connection:** 1.4.12 requires tolerance for user-adjusted text spacing

**Speaker notes:**
When a PM says "Can we make this more compact?" they are asking you to remove whitespace. Your job is to explain that whitespace is a functional design element, not wasted space. It groups related items. It separates sections. It gives the eye a place to rest. Removing it increases cognitive load and can break WCAG 1.4.12 compliance.

**Frame 2.4:** Testing with WCAG 1.4.12 text spacing
- Required test values: line-height 1.5x, paragraph spacing 2x, letter-spacing 0.12em, word-spacing 0.16em
- Use browser bookmarklet or extension to apply overrides
- Check for: text overflow, overlapping content, truncated text, broken layouts
- **Key insight:** Layouts with generous whitespace pass more easily because they have buffer space

**Speaker notes:**
Live demo: Apply the text spacing bookmarklet to a real product page. Show how a well-spaced layout handles it gracefully while a dense layout breaks. The relationship is direct: more whitespace means more tolerance for user spacing adjustments.

**Frame 2.5:** Activity: Density comparison
- Show two versions of the same content: one high density, one with appropriate whitespace
- Students evaluate: Which is easier to scan? Which would survive text spacing overrides? Which would reflow better?
- Connect to real product examples from their work

**Discussion prompt:** "Look at these two settings pages. They contain the same options. Which would a user with ADHD find easier to use? Which would survive WCAG 1.4.12 text spacing? Why?"

**Frame 2.6:** Responsive density strategies
- Density should decrease at smaller viewports, not just scale down
- Progressive disclosure: show less by default, reveal on demand
- Density tokens in design systems can adjust per breakpoint
- **Connection to L06:** Reflow is easier when density is appropriate at each breakpoint

---

### Section 3: Component Semantics and Comprehension (12 min)

**Frame 3.1:** Section divider: "Component Semantics and Comprehension"

**Frame 3.2:** What are component semantics?
- The meaning conveyed by a component's role, name, state, and behavior
- Visual communication (what sighted users see) must match semantic communication (what AT users hear)
- **Connection to L09:** The accessibility tree exposes component semantics; L16 focuses on choosing the right semantics in the first place

**Speaker notes:**
In L09, you learned to inspect the accessibility tree. You saw that every element has a name, role, and state. In L16, we are asking: did you choose the right role? Does the visual appearance match what the role communicates? If a user sees a button but the role says "link," the semantic mismatch creates confusion.

**Frame 3.3:** Common semantic mismatches
- Link styled as button (or button styled as link): different expected behaviors
- Div or span used as interactive element: no inherent role or keyboard behavior
- Toggle switch that is actually a checkbox: visual says "toggle," role says "checkbox"
- Card that is actually a link: the entire surface is clickable but only part looks interactive
- **Key insight:** The visual design implies behavior; the semantic role must confirm it

**Speaker notes:**
The most common mismatch is links vs. buttons. Sighted users may not notice the difference, but the semantic distinction matters. Links navigate somewhere. Buttons perform actions. Screen readers announce "link" or "button," setting expectations for what will happen. If a "Save" action uses a link element, the screen reader says "Save, link," which implies navigation, not action.

**Frame 3.4:** State communication
- States that must be conveyed both visually and programmatically:
  - Selected / not selected
  - Expanded / collapsed
  - Disabled / enabled
  - Required / optional
  - Invalid / valid (error state)
  - Current (within navigation)
- **Common failure:** Disabled state shown only by reduced opacity (no `aria-disabled` or `disabled` attribute)

**Speaker notes:**
Every visual state change must have a programmatic equivalent. If you gray out a button, add `aria-disabled`. If you expand an accordion, update `aria-expanded`. If a nav item is the current page, add `aria-current="page"`. The visual state is for sighted users. The programmatic state is for everyone else.

**Frame 3.5:** Consistent identification (WCAG 3.2.4)
- Components with the same function should look the same and behave the same across pages
- Inconsistent component usage creates cognitive overhead: "Is this the same thing I used on the other page?"
- Design systems solve this at scale by encoding both visual and semantic consistency
- **Example:** Search functionality that uses an icon button on one page and a text input on another

**Speaker notes:**
WCAG 3.2.4 is often overlooked but it is essential for cognitive accessibility. If your search function is a magnifying glass icon on the home page, a text input in the header on the settings page, and a different icon in the sidebar on the dashboard, users have to re-learn how to search on every page. Consistency reduces cognitive load.

**Frame 3.6:** Activity: Semantic audit
- Show a product interface with several component semantic issues
- Students identify: What does the visual design communicate? What does the accessibility tree say? Where are the mismatches?
- Use browser dev tools (from L09) to inspect

**Discussion prompt:** "This card component looks like a button with a hover state, but inspecting the accessibility tree shows it is a link wrapping a div. What problems does this create?"

**Frame 3.7:** Design system role in semantic consistency
- Design systems should encode accessibility semantics (roles, states, keyboard behavior), not just visual styles
- Designers should select components by semantic function, not just visual appearance
- Component documentation should include: role, expected keyboard behavior, required ARIA properties, announcement behavior

---

### Section 4: Summary and Assessment (6 min)

**Frame 4.1:** Key takeaways
- Spatial hierarchy must align with programmatic structure (headings, landmarks, reading order)
- Whitespace is a functional design tool that supports cognitive accessibility and WCAG compliance
- Component semantics must match visual communication for all users to comprehend purpose and state
- These principles connect everything from L01-L15 into a cohesive design approach

**Frame 4.2:** The three questions to ask for every design
1. Does the visual hierarchy match the programmatic hierarchy?
2. Is there enough whitespace for cognitive comfort and WCAG text spacing?
3. Do component semantics match what users see?

**Frame 4.3:** Quiz preview
- 5 questions covering spatial hierarchy, density/whitespace, and component semantics
- Application-focused: scenario-based questions about real design decisions

**Frame 4.4:** Applied practice preview
- Evaluate a product interface for perceptual and cognitive accessibility
- Document hierarchy alignment, density issues, and semantic mismatches
- Combined with L15 (User Preferences) for the applied practice assignment

**Frame 4.5:** Define Badge wrap-up
- L16 is the final topic-specific lesson in the Define Badge
- Students have now covered: DOM/accessibility tree, screen readers, magnification, voice control, high contrast mode, user preferences, and perceptual/cognitive design
- Next: AT Testing Methodology (the capstone methodology lesson)

**Speaker notes:**
This is the last topic-specific lesson in the Define Badge. You started by learning to see the machine's view of your designs (L09). You learned to hear them (L10-L11). You tested with magnification (L12), voice control (L13), and high contrast mode (L14). You explored user preferences (L15). Now in L16, you have returned to the design itself, armed with a deeper understanding of how all these technologies and user needs interact with your layout, spacing, and component choices. Next, we bring it all together with systematic AT testing methodology.

---

## Materials Needed

- Projector for design examples and live demos
- Browser with developer tools (for accessibility tree inspection)
- WCAG 1.4.12 text spacing bookmarklet or browser extension
- Prepared example layouts: one well-designed, one with hierarchy/density/semantic issues
- Access to a design system component library for semantic comparison examples
- Printed or digital reference card for WCAG text spacing values

---

## Instructor Notes

### Common Student Questions

**Q: Is cognitive accessibility legally required?**  
A: Many cognitive accessibility practices are covered by WCAG 2.2 AA success criteria (1.3.1, 1.3.2, 1.4.10, 1.4.12, 3.2.3, 3.2.4). While "cognitive accessibility" as a category is not a separate legal requirement, the individual WCAG criteria that support it are legally enforceable under Section 508 and EN 301 549. The W3C COGA guidance provides additional best practices beyond WCAG.

**Q: How do I balance density for power users vs. cognitive accessibility?**  
A: This is a real tension. The answer is usually progressive disclosure and user preferences, not one-size-fits-all density. Start with lower density (the accessible default) and offer density controls or progressive disclosure for expert users. This is also where user preferences (L15) connect: users can adjust spacing and density through system settings.

**Q: What if our design system components have wrong semantics?**  
A: Document the issue, file a bug against the design system, and specify the correct semantics in your design annotations. In the short term, engineers can override semantics with ARIA. In the long term, fix the design system so every team gets correct semantics automatically.

### Timing Adjustments

**If running short:**
- Reduce activity time in Sections 1 and 2 (Frames 1.5 and 2.5)
- Combine the three activity discussions into one summary activity

**If running long:**
- Extend Section 3 activity (Frame 3.6) with more hands-on inspection time
- Add a cross-product comparison exercise where students compare their own products

### Classroom Setup Notes
- Ensure all students have a browser with dev tools available
- Pre-load the text spacing bookmarklet URL for quick distribution
- Have both good and bad example layouts ready to toggle between
- If using real product examples, ensure they are not confidential outside the group

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L16: Perceptual and Cognitive Design Considerations*
