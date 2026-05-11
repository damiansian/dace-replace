# Lesson 19: Contribution
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Deliver
**Delivery:** In-person (instructor-led)
**Duration:** ~20 minutes (part of Week 11 session)
**Outcomes Covered:** 3H.01, 3H.02, 3H.03

---

## Source context

This lesson completes the Week 11 trio (L17 methodology, L18 communication, L19 contribution). The pedagogical arc:

- L17: How to find the issues
- L18: How to communicate them
- L19: How to change the system so the same issues stop recurring

Key pedagogical approach: shift the learner's identity from someone who performs accessibility work to someone who leaves behind artifacts, structures, and standards that make the work easier for everyone who comes after them.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 2 min | All |
| 1. Reusable Resources | 1.1-1.4 | 7 min | 3H.01 |
| 2. Communities of Practice | 2.1-2.3 | 6 min | 3H.02 |
| 3. Standards and Systems | 3.1-3.3 | 4 min | 3H.03 |
| 4. Summary and Close | 4.1-4.2 | 1 min | All |

**Total frames:** 14

---

## Design system notes

- Badge color: `#51CF66` (Deliver Badge green)
- Frame dimensions: 1440 x 900
- In-person format: minimal on-slide text, strong speaker notes
- Every content section ends with a checkpoint frame

---

### Frame 0.1: Title slide

**Type:** Title slide

**Content:**
- Lesson number: `Lesson 19`
- Title: `Contribution`
- Subtitle: `Leave artifacts that outlast you`
- Badge level indicator: `Deliver Badge`
- Duration: `~20 minutes`
- Week indicator: `Week 11`

**Speaker notes:**
L17 gave you the methodology. L18 gave you the communication skills. L19 asks a different question: what do you leave behind? If accessibility depends on your presence in the room, it is fragile. This lesson is about making contributions that work when you are not there.

---

### Frame 0.2: Learning objectives reference

**Type:** Objectives overview

**Headline:** What you'll be able to do

**Objectives list:**

| Code | Objective |
|------|-----------|
| 3H.01 | Contribute reusable accessibility resources: Create checklists, pattern guidance, onboarding materials, and shared examples that raise the baseline for your team |
| 3H.02 | Build accessibility communities of practice: Establish durable structures that spread accessibility knowledge beyond individual effort |
| 3H.03 | Contribute to organizational standards: Identify and make process improvements that encode accessibility expectations into team workflows |

**Connection callout:**
L17 taught you what to find. L18 taught you how to communicate it. L19 teaches you how to change the system so the same issues stop recurring.

**Speaker notes:**
Three outcomes, all focused on contribution. The word is deliberate. Mentoring is valuable, but contributions are what persist. A good checklist used by 20 designers has more impact than 20 individual coaching conversations.

---

### Frame 1.1: Section divider

**Type:** Section divider

**Content:**
- Section number: `1`
- Title: `Reusable Resources`

---

### Frame 1.2: What to contribute

**Type:** Four-grid

**Headline:** Artifacts that raise the baseline

**Cards:**
- **Checklists:** Reusable accessibility checklists tied to specific component patterns or workflows, not generic WCAG lists
- **Pattern guidance:** Documentation of how to implement common patterns accessibly (dialogs, forms, icon buttons, custom selects) grounded in real team examples
- **Onboarding materials:** Clear, concise resources that help new team members understand accessibility expectations without starting from zero
- **Shared examples:** Paired good and bad implementations from real work that demonstrate what correct looks like alongside what fails and why

**Key insight callout:**
The same issues recur because nobody contributes prevention infrastructure. Every resource you create is an issue that doesn't get filed next audit cycle.

**Speaker notes:**
This is the most concrete section. Each card is a type of artifact you can create. The key is specificity: a checklist that says "ensure keyboard accessibility" is not useful. A checklist that says "every icon-only button needs an aria-label that includes the action verb and the target object" is useful. Ground your contributions in the patterns your team actually ships.

---

### Frame 1.3: Good contribution vs. shelf artifact

**Type:** Two-column

**Headline:** Resources that get used vs. resources that get ignored

**Left column:**
- Heading: `Gets used`
- Specific to team patterns and components
- Short enough to reference during work
- Grounded in real examples from the codebase
- Updated when patterns change
- Placed where the work happens (PR templates, component docs, onboarding guides)

**Right column:**
- Heading: `Gets ignored`
- Generic WCAG summary copied from the web
- Long document nobody reads after the first week
- Abstract principles with no connection to team code
- Written once and never maintained
- Stored in a wiki nobody visits

**Key insight callout:**
The test of a good contribution is whether someone uses it six months later without being told to.

**Speaker notes:**
This is the quality bar. Contributions that work are specific, short, grounded in team context, and placed where the work happens. Contributions that fail are generic, long, abstract, and stored somewhere nobody looks. If you write a checklist, put it in the PR template, not a wiki page.

---

### Frame 1.4: Checkpoint - Reusable resources

**Type:** Checklist

**Headline:** Checkpoint: Reusable Resources

**Checklist:**
- [ ] I can name one reusable resource I could create for my team
- [ ] I understand the difference between a contribution that gets used and one that gets ignored
- [ ] I can connect the resource to a specific recurring issue pattern on my team

**Speaker notes:**
The learner should be able to identify a concrete contribution opportunity, not an abstract one.

---

### Frame 2.1: Section divider

**Type:** Section divider

**Content:**
- Section number: `2`
- Title: `Communities of Practice`

---

### Frame 2.2: Why communities matter

**Type:** Four-grid

**Headline:** Accessibility capability needs structure

**Cards:**
- **Shared language:** Common vocabulary so the team can discuss accessibility without translation overhead every time
- **Reusable examples:** A library of real findings and solutions that new reviewers can learn from without starting over
- **Recurring critique spaces:** Scheduled forums where accessibility gets discussed regularly, not just when something breaks
- **Onboarding pathways:** Clear routes for new team members to build accessibility skills incrementally

**Key insight callout:**
If accessibility depends on one person, progress is fragile. Communities of practice make accessibility visible between formal reviews.

**Speaker notes:**
Communities of practice are the organizational structure that makes individual contributions durable. A checklist you wrote is a contribution. A monthly review session where the team uses that checklist together is a community of practice. The checklist alone can be forgotten. The recurring session keeps it alive.

---

### Frame 2.3: Checkpoint - Communities

**Type:** Checklist

**Headline:** Checkpoint: Communities of practice

**Checklist:**
- [ ] I can explain the purpose of a community of practice
- [ ] I can name at least one durable structure that spreads accessibility knowledge
- [ ] I can connect accessibility culture to team routines, not just individual effort

**Speaker notes:**
The learner should be able to describe a community structure, not just endorse the idea of community.

---

### Frame 3.1: Section divider

**Type:** Section divider

**Content:**
- Section number: `3`
- Title: `Standards and Systems`

---

### Frame 3.2: Process improvements are leverage

**Type:** Two-column

**Headline:** Small system changes scale better than repeated explanation

**Left column:**
- Heading: `Possible contributions`
- Accessibility acceptance criteria in user story templates
- Component documentation that includes accessibility requirements
- PR review checklists with specific accessibility checks
- Definition of done that names accessibility benchmarks

**Right column:**
- Heading: `Result`
- Higher baseline without repeated teaching
- Clearer expectations for new work
- Issues caught at implementation time, not audit time
- Accessibility encoded into process, not dependent on memory

**Key insight callout:**
The highest-leverage contribution is one that changes the default. If the PR template includes an accessibility checklist, every PR gets reviewed. If it doesn't, only the ones you happen to be on get reviewed.

**Speaker notes:**
This is the systems-level version of contribution. Individual resources help one team. Process contributions help every team that uses that process. A PR template change is a small investment with compounding returns.

---

### Frame 3.3: Checkpoint - Standards

**Type:** Checklist

**Headline:** Checkpoint: Standards and systems

**Checklist:**
- [ ] I can identify one process or standards contribution I could make
- [ ] I understand how process-level changes scale better than individual teaching
- [ ] I can connect this work to reducing repeated accessibility findings

**Speaker notes:**
This closes the contribution arc. The learner should see the path from individual resource creation to community structure to process change.

---

### Frame 4.1: Summary

**Type:** Summary

**Headline:** Key takeaways

**Key principles:**
- Reusable resources raise the baseline: checklists, pattern guidance, onboarding materials, and shared examples that are specific, short, and placed where the work happens
- Communities of practice make contributions durable: shared language, recurring critique spaces, and onboarding pathways keep accessibility visible between reviews
- Standards and process changes are the highest leverage: a PR template with an accessibility checklist reaches every PR, not just the ones you review

**Speaker notes:**
Three types of contribution, increasing in leverage. Individual resources, community structures, process changes. The question to leave them with: what will you contribute this quarter?

---

### Frame 4.2: Up next

**Type:** Summary

**Headline:** Up next

**Body text:**
Week 12 moves from internal capability-building to organizational decision-making through legal frameworks and business-case development.

**Connection callout:**
L17 gave you the methodology. L18 gave you the communication skills. L19 gave you the contribution playbook. Week 12 connects all of this to the legal and business context that shapes how organizations invest in accessibility.

**Speaker notes:**
The Week 11 trio is complete. Methodology, communication, contribution. Week 12 adds the organizational layer: legal context (L20) and business case (L21).

---

*Last updated: March 2026*
*Version: 2.0 (revised: mentoring replaced with contribution)*
*For: DACE L19: Contribution*
