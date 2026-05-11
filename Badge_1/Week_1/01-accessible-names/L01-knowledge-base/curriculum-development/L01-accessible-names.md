# Lesson 01: Accessible Names

**Module:** 1A | **Badge:** Discover | **Duration:** 60 minutes synchronous + project

Accessible names are the bridge between humans and digital interfaces. When someone uses a screen reader or voice control, the accessible name is what tells them what an element is and what it does.

In this lesson, you'll learn what accessible names are, when they're needed, how to write good ones, and how to communicate them to engineering through annotations.

---

## The Explainer

Get a quick overview of accessible names before the live session.

<div class="video-embed">
  <iframe 
    src="https://player.vimeo.com/video/VIMEO_ID_HERE" 
    width="640" 
    height="360" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen
    title="Accessible Names Explainer">
  </iframe>
</div>

---

## Learning Objectives

By the end of this lesson, you will be able to:

| ID | Objective |
|----|-----------|
| 1A.01 | **Define accessible names** and explain their role in assistive technology interaction |
| 1A.02 | **Identify when accessible names are required** versus optional for different element types |
| 1A.03 | **Evaluate accessible name quality** using established criteria (concise, functional, distinguishable) |
| 1A.04 | **Specify accessible names** in design annotations using standard documentation methods |
| 1A.05 | **Distinguish between visible labels and programmatic names** and know when each applies |

---

## IAAP Body of Knowledge Connection

This lesson maps to competencies recognized by the International Association of Accessibility Professionals (IAAP). Understanding how DACE content connects to IAAP certification areas helps you see the bigger picture and prepares you for future professional credentials.

<div class="bok-connection">

### IAAP WAS (Web Accessibility Specialist) Alignment

| DACE Outcome | IAAP BOK Domain | IAAP Competency Area |
|--------------|-----------------|----------------------|
| 1A.01 | Content Accessibility | Non-text Content |
| 1A.02 | Content Accessibility | Distinguishing Decorative and Informative Content |
| 1A.03 | Content Accessibility | Accessible Name Quality |
| 1A.04 | Design Process | Accessibility Specifications and Handoff |
| 1A.05 | Content Accessibility | Labels and Instructions |

### Related WCAG Success Criteria

The accessible names competency maps to several WCAG 2.2 success criteria:

- **1.1.1 Non-text Content (Level A):** All non-text content has a text alternative
- **4.1.2 Name, Role, Value (Level A):** User interface components have accessible names
- **2.5.3 Label in Name (Level A):** Visible labels are included in accessible names

### Why This Matters for Your Career

Accessible names appear in virtually every IAAP certification exam. Mastering this foundational skill in the Discover Badge prepares you for:

- IAAP WAS (Web Accessibility Specialist)
- IAAP CPWA (Certified Professional in Web Accessibility)
- Future IAAP partnership credentials through DACE

</div>

---

## Key Concepts

### What is an Accessible Name?

A short text string that identifies an element's purpose and distinguishes it from other elements on the page. Typically 1 to 3 words.

**Two jobs for every accessible name:**

1. **Convey purpose:** What does this element do?
2. **Distinguish:** Which element is this, among similar elements?

### When Are Names Required?

| Always | Sometimes | Never (Mark Decorative) |
|--------|-----------|------------------------|
| Buttons | Regions and sections | Decorative images |
| Links | Groups of related content | Visual dividers |
| Informative images | Tables (when multiple) | Background graphics |
| Form inputs | Dialogs | Icons with adjacent text |
| Icon-only controls | Frames and iframes | Redundant graphics |
| Navigation landmarks | | |

**The core question:** Does this element convey information or enable interaction? If yes, name it. If no, hide it from assistive technology.

### What Makes a Good Name?

1. **Function over form:** Describe what it does, not what it looks like
2. **Concise:** 1 to 3 words is ideal
3. **Distinguishing words first:** Front-load unique information for scanning
4. **Consistent patterns:** Same action = same verb across your interface

### Visible Labels vs Programmatic Names

**When visible text is enough:**
- Button with text label
- Link with descriptive text
- Form field with visible label

**When you need a programmatic name:**
- Icon-only buttons
- Search fields without visible labels
- Informative images
- Ambiguous links ("Read more," "Watch now")

**Label in Name rule (WCAG 2.5.3):** When expanding visible text, the accessible name must start with the visible text. Voice control users say what they see.

---

## Assessment

### Knowledge Check Quiz
**5 questions | 5 points | Auto-graded**

Test your understanding of accessible name concepts. Open-book, just like real design work.

### Applied Skill Project: Blueline Annotations
**20 points | Rubric-graded**

You'll receive a design mockup and annotate it for accessible names using Stark. Identify all elements needing names, write quality names, and mark decorative elements.

| Rubric Criterion | Outcome | What We're Looking For |
|------------------|---------|------------------------|
| Element Identification | 1A.02 | Did you find all elements needing names? |
| Accessible Name Quality | 1A.03 | Are names concise, functional, and distinguishable? |
| Annotation Clarity | 1A.04 | Can engineering implement from your specs? |
| Visible vs Programmatic | 1A.05 | Did you correctly identify when to expand names? |
| Decorative Handling | 1A.02 | Did you correctly mark decorative elements? |

---

## Resources

### W3C Resources
- [APG: Providing Accessible Names and Descriptions](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/)
- [Composing Effective and User-Friendly Accessible Names](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#composing-effective-and-user-friendly-accessible-names)

### WCAG Understanding Documents
- [Understanding 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [Understanding 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [Understanding 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

### Adobe Resources
- Design Accessibility Checklist (Accessible Names section)
- Stark Figma Plugin Guide
- Digital Accessibility Guide (internal)

---

## Up Next

**Lesson 02: Content Structure** covers heading hierarchies, landmark regions, and reading order. These concepts build directly on accessible names, as many structural elements also require accessible names.

