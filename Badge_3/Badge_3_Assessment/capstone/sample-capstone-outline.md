# Sample Capstone Portfolio Outline
## Adobe's Path to an A in Accessibility: A Web Testing Practice Story

**Student persona:** Mid-level practitioner (designer or engineer) working on Adobe's web properties
**Product context:** Adobe.com and Creative Cloud web surfaces
**Score target:** Exemplary (4 across all six components)
**Tagline:** We say accessibility is a priority. Here's what the data says, and what I did about it.

---

## Narrative arc

Adobe publishes Accessibility Conformance Reports (ACRs) publicly and positions itself as an accessibility leader. The dashboard tells a different story: 15,199 issues, 6,826 still open, and an average age of 523 days for the ones that aren't getting fixed. But the backlog numbers only tell half the problem. The other half is upstream: the issues that never get filed because manual testing isn't happening consistently in the first place. Automated scanning misses 60-70% of accessibility failures. The two categories that dominate the dashboard, Accessible Names and Keyboard & Focus, are exactly what scanners miss. This portfolio documents what I found, the case I built for a different approach, the tool I built to enable it, and the connections I made to understand how accessibility decisions actually flow through this organization.

---

## Component 1: Problem Definition

**Week 11 | Outcomes: 3A.01, 3A.02, 3A.03 | Source: L17**

### Portfolio-level context (Adobe A11y Dashboard — Executive Summary)

The Adobe accessibility dashboard shows 15,199 total issues across tracked products. Of those:

| Metric | Value |
|--------|-------|
| Open issues | 6,826 |
| Fixed | 34% |
| Closed without fix | 3,142 |
| Average age of open issues | **523 days** |
| Average time to fix | 287 days |

The 523-day average age for open issues is the most significant data point in this dashboard. It means that the average open accessibility issue at Adobe has been known for over a year and a half. This is not a discovery problem. It is a prioritization and process problem.

### Severity breakdown (portfolio-level)

| Severity | Count |
|----------|-------|
| Sev 1 | 5,512 |
| Sev 2 | 7,414 |
| Sev 3 | 1,139 |
| Sev 4 | 138 |

Sev 1 and Sev 2 together account for 85% of all issues. These are not edge cases or polish items. They are issues that block or significantly degrade task completion for users of assistive technology.

### Category breakdown (portfolio-level)

The top two categories by volume are:

1. **Accessible Names & Descriptions** — the largest category by a significant margin, mapping to SC 4.1.2 (Name, Role, Value) and SC 1.1.1 (Non-text Content)
2. **Keyboard & Focus** — the second largest category, mapping to SC 2.1.1, SC 2.1.2, and SC 2.4.3 (Focus Order)

These two categories alone represent the majority of the defect volume. Everything else is a fraction of the total.

### My product area: [Student's product, e.g. Acrobat Web / AEM Sites]

Filtering to my product area, I identified [X] open issues. Classified by the Sev 1-4 model:

| Severity | Count | Description |
|----------|-------|-------------|
| Sev 1 | [X] | Blocks task completion (missing names, broken focus order, inaccessible modals) |
| Sev 2 | [X] | Degrades experience significantly (poor contrast, missing landmarks, inadequate error handling) |
| Sev 3 | [X] | Usable but inconsistent (focus indicator styling, redundant alt text, skip link timing) |
| Sev 4 | [X] | Minor / cosmetic |

### Pattern analysis

The same two categories that dominate the portfolio-level data also dominate my product area. Three defect classes account for the majority of Sev 1 and Sev 2 issues:

1. **Missing or insufficient accessible names on interactive controls** (SC 4.1.2): icon-only buttons, custom dropdowns, and form inputs without visible labels
2. **Focus management failures in modal and overlay patterns** (SC 2.1.1, SC 2.1.2): dialog, drawer, and tooltip components where focus does not move on open, is not trapped, or does not return on close
3. **Inadequate error identification and recovery** (SC 3.3.1, SC 3.3.2): form validation patterns where errors are not programmatically associated with their fields or not announced to AT

### Root cause: two compounding gaps

The 523-day average age points to a prioritization failure: issues get filed and then stall. But there is a second problem upstream that the backlog numbers don't fully surface: **manual testing isn't happening consistently in the first place.**

Automated scanning tools (axe, Stark, Deque) catch approximately 30-40% of accessibility issues. The two categories that dominate the dashboard, Accessible Names and Keyboard & Focus, are exactly what automated tools are worst at catching. A scanner can flag a missing `aria-label` attribute. It cannot:

- Confirm that a screen reader actually announces the name correctly in context
- Detect that focus disappears into a modal and never returns
- Catch that a live region fires but the announcement timing is wrong
- Verify that an error message is audibly connected to its field

These require someone to interact with the rendered page using a keyboard and a screen reader, following a structured interaction chain. That testing is not happening at scale across Adobe's web teams. Not because people don't care, but because there is no standardized, low-friction method for doing it built into the development workflow.

The result is a two-stage failure: issues that could be caught at dev time aren't, and issues that do get filed wait 523 days to be fixed. The intervention has to address both stages.

---

## Component 2: PEAS Session Reflection

**Weeks 11-14 | Outcomes: 3A.01-03, 3B.01-03 | Source: L17, L18**

### Session details

- **Mode:** Observed (joined a PEAS session for another Creative Cloud product as an observer)
- **Date:** Week 12 session
- **AT used:** JAWS 2024 on Windows, Chrome

### What happened

The session tested a subscription management flow. During the cancellation confirmation dialog, the screen reader user activated the "Cancel subscription" button and the dialog opened, but focus did not move to the dialog. The user was unaware the dialog had appeared. After several seconds of silence, they tabbed forward and landed on page content behind the dialog. They had no way to confirm or dismiss the modal without sighted assistance. The task was abandoned.

The broader observation from the session: there is a general lack of understanding across teams about how accessible names affect what a screen reader user actually hears, and how keyboard experience affects product quality for users of all abilities. Engineers who have never watched a screen reader user navigate a modal do not have an intuitive model for why focus management matters. It is not obvious from reading code that a missing `aria-label` produces silence, or that a focus trap failure leaves a user stranded on a page they cannot navigate out of.

This knowledge gap is not a motivation problem. It is an exposure problem. The teams building these features have not seen the failure mode in action.

### SBI connection to my product

**Situation:** Our team ships a similar confirmation dialog pattern in the Creative Cloud plan upgrade flow.

**Behavior:** I reviewed our implementation after the PEAS session. Our dialog sets `role="dialog"` but does not move focus to the dialog on open. We do not trap focus inside the dialog. Our close button is an icon-only button with no accessible name.

**Impact:** Any screen reader user attempting to upgrade or change their plan encounters the same failure mode the PEAS participant experienced. They cannot complete the transaction independently. And the keyboard-only experience, which affects not just screen reader users but anyone navigating without a mouse (power users, motor impairments, situational disabilities, temporary injuries), is broken at the same point: the modal is unreachable and undismissable without a pointer device.

### What I recommended

I filed a Sev 1 ticket for the dialog pattern in our product (CC-A11Y-2847) and recommended it as a priority fix before the next release cycle. I also added the dialog focus management pattern to the a11y-skill interaction chain (Component 3) and flagged the exposure gap as a reason the early-intervention working session in Component 5 should include a live screen reader demo, not just a checklist walkthrough.

---

## Component 3: Contribution Artifact

**Week 11 | Outcomes: 3H.01, 3H.02, 3H.03 | Source: L19**

### Artifact: a11y-skill — A Cursor Agent Skill Package for Accessibility Testing

The contribution artifact is a Cursor Agent Skill package that gives any engineer on the team a structured, AI-assisted manual accessibility testing workflow built directly into their development environment. This is not a checklist document. It is a working tool that changes how testing gets done.

**Why this artifact, and why now:** Component 1 identified that manual testing is not happening consistently across teams. The reason is not unwillingness: it's that there is no low-friction, standardized method for doing it integrated into the workflow where engineers already are. This skill package puts a structured WCAG 2.2 AA testing protocol inside Cursor, the IDE the team uses daily.

**What it does:**

The core of the package (`a11y/SKILL.md`) instructs the AI model to test against the **rendered page**, not static code, following a full keyboard and screen reader interaction chain:

1. **Tab order** — Does focus move in a logical sequence? Are interactive elements reachable?
2. **Accessible names** — Does the screen reader announce correct, useful names for every control?
3. **Focus visibility** — Is the focus indicator visible at all times? Does it meet contrast requirements?
4. **Sticky UI occlusion** — Do fixed headers or banners obscure focused elements?
5. **Activation** — Do controls activate correctly with keyboard (Enter, Space) without mouse?
6. **Live regions** — Are dynamic updates (status messages, errors, toasts) announced correctly and at the right urgency level?
7. **Zoom and reflow** — Does content reflow without horizontal scrolling at 400% zoom (SC 1.4.10)?

**What it ships with:**

| Asset | Purpose |
|-------|---------|
| `a11y/SKILL.md` | Core testing protocol and WCAG 2.2 AA reference |
| Reference guides | Role-specific guidance for Playwright testing, audits, remediation, design review, documents, and training |
| `a11y/scripts/a11y-test-helpers.ts` | Reusable Playwright helper library for automating the repeatable portions of the interaction chain |
| `a11y/evals/evals.json` | Evaluation prompts for comparing "with skill" vs "without skill" testing runs |
| `a11y-workspace/` | Saved example outputs: tests, checklists, remediated code snippets |

**Why it closes the gap identified in Component 1:**

The two top defect categories, Accessible Names and Keyboard & Focus, are the categories that manual testing catches and automated scanning misses. This skill package makes that manual testing structured, repeatable, and integrated into the development workflow rather than something that happens in a separate audit cycle months later.

**Why it is specific to this team:** The interaction chain maps directly to the three highest-defect patterns in our product area: control naming, modal focus management, and error announcement. The Playwright helper library includes test scaffolding for the dialog and form patterns our team ships. It is not a generic resource; it is built around the component patterns that are generating our Sev 1 and Sev 2 issues.

---

## Component 4: Legal and Business Case

**Week 12 | Outcomes: 3E.01-04, 3F.01-03 | Source: L20, L21**

### Legal exposure

Adobe.com and Creative Cloud web serve US federal agencies, EU customers, public sector institutions, and higher education. Four frameworks apply directly:

| Framework | Why it applies | Standard |
|-----------|---------------|----------|
| Section 508 | Adobe sells to US federal agencies. VPATs are required for procurement. Sev 1 issues = binary failures in ACRs. | WCAG 2.0 AA |
| EN 301 549 | Adobe products ship to EU markets. | WCAG 2.1 AA |
| European Accessibility Act (EAA) | Enforcement active since June 2025. Extraterritorial. Penalties up to 4% annual revenue per member state. | EN 301 549 (WCAG 2.1 AA) |
| ADA Title II | Final rule (April 2024) sets WCAG 2.1 AA for public entities. April 24, 2026 deadline for large entities (50,000+ population). Higher ed customers are now requiring WCAG 2.1 AA as a procurement condition. | WCAG 2.1 AA |

### Exposure mapping

The 11 Sev 1 issues in my product area map directly to Level A and AA criteria referenced by all four frameworks above. Every one of them is a binary pass/fail in a VPAT or ACR. Adobe publishes ACRs publicly at adobe.com/accessibility/compliance.html. A missing accessible name on an interactive control is not a quality gap; it is a conformance failure that appears in a document Adobe has already committed to.

### Cost of inaction

- **Late discovery cost:** A Sev 1 issue found in an external audit is filed, triaged, assigned, context-rebuilt, fixed, and re-verified. The same issue caught at design or code review is a 10-minute conversation. Multiply across 11 open Sev 1s.
- **Procurement risk:** HECVAT 4 (2025) added a dedicated IT Accessibility tab. Buyers at public sector and higher ed institutions now ask directly whether Adobe's products substantially conform to WCAG 2.1 AA. Open Sev 1s directly degrade the answer.
- **Brand risk:** Adobe's public accessibility commitment and the state of our internal testing practice are not currently aligned. Closing that gap is both a compliance requirement and a brand protection decision.

### Business case

Shifting accessibility review from audit-time to design-time and dev-time does not require a headcount increase. It requires a testing standard, a shared checklist (Component 3), and a process change. The return on that investment is fewer rework cycles, lower audit risk, and a more defensible ACR for every product that ships these component patterns.

---

## Component 5: Product Strategy Recommendation

**Week 12 | Outcomes: 3G.01, 3G.02, 3G.03 | Source: L22**

### Recommendation: Shift-left accessibility review for the three highest-defect component patterns

This is not a general call to "be more accessible." It is a specific process change for the three component patterns (interactive control names, modal focus management, error handling) that account for 74% of Sev 1 and Sev 2 issues in our product area.

### Proposed acceptance criteria (to be added to team Definition of Done)

**Interactive controls**
- [ ] Every interactive control has an accessible name verified in the browser accessibility tree (not just in code)
- [ ] Icon-only controls have been tested with a screen reader to confirm name announcement
- [ ] SC 2.5.3 verified for any control with visible text

**Modal and overlay patterns**
- [ ] Focus moves to dialog on open (verified manually)
- [ ] Focus is trapped inside dialog while open (verified with Tab key only)
- [ ] Escape key closes the dialog
- [ ] Focus returns to trigger on close

**Error handling**
- [ ] Error messages are programmatically associated with their fields
- [ ] Errors are announced by screen reader without requiring user action
- [ ] Error message text describes what went wrong and how to fix it

### Roadmap input

Add the three acceptance criteria sets above to the team's Jira ticket template for features touching these component patterns. This is a 2-hour implementation change that requires no new tooling. The criteria become a required checklist item before any feature involving these patterns moves to engineering review.

### The testing method: a11y-skill integrated into the dev workflow

The acceptance criteria define what must be verified. The a11y-skill package (Component 3) defines how to verify it. The recommendation is to adopt the skill package as the team's standard manual testing method for the interaction chain checks that automated scanning cannot perform.

**Organizational alignment:** My conversation with Rob Haverty and Gurpreet Kaur (Component 6) confirmed that AI-assisted accessibility testing is being explored across Adobe and by its vendors, and that Corporate Accessibility is actively working to govern this space. The a11y-skill package is designed to fit inside that governance: it uses Adobe's existing test cases as its foundation, automating their application rather than inventing new criteria. This is not a parallel effort. It is an extension of existing Adobe testing infrastructure into the development workflow using Cursor Agent Skills, MCP servers, and AI-driven execution.

**Proposed adoption path (3 stages):**

| Stage | Timeline | What happens |
|-------|----------|-------------|
| Pilot | Weeks 1-2 | Two engineers install the skill and run it against one feature in active development. Compare findings against the last audit report for the same feature area. |
| Team rollout | Month 2 | Package distributed to all engineers on the team. Added to the onboarding checklist for new team members. Playwright helpers integrated into the CI pipeline for automated coverage of the repeatable checks. |
| Broader contribution | Month 3+ | Share the package and pilot findings with Corporate Accessibility as input to the cross-company AI testing governance effort. The documented methodology and shareable output format are designed specifically to support standardization rather than team-level siloing. |

**Why this is not just another tool:** The a11y-skill package does not require engineers to become accessibility experts before it is useful. The interaction chain is structured, the AI model guides the testing, and the Playwright helpers automate the portions that can be automated. What remains requires human judgment, and the skill is designed to support that judgment rather than replace it.

### Early-intervention proposal

Pair the rollout with a single 30-minute working session (not a training): bring one live feature currently in design review and run the a11y-skill interaction chain together as a team. The first session must include a live screen reader demo on the feature being tested.

The PEAS session observation (Component 2) identified a knowledge gap that a checklist alone will not close: engineers have not seen what happens when focus does not move to a dialog, or when a control has no name. Reading about it produces compliance behavior. Watching it produces understanding. The working session is the mechanism for creating that exposure without requiring engineers to attend a full PEAS session or complete a training module first.

**The reframe for the team:** Keyboard accessibility is not an AT-only concern. A broken focus trap affects every keyboard user: power users navigating without a mouse, someone with a temporary arm injury, anyone on a device without reliable pointer input. Framing the checklist as a keyboard quality standard, not just a screen reader accommodation, broadens the team's sense of ownership over these failures.

---

## Component 6: Stakeholder Connections

**Weeks 11-14 | Outcomes: 3E.01, 3F.01, 3G.01 | Source: L20, L21, L22**

### Matthew Deutsch — Product Accessibility (deutsch@adobe.com)

**Role:** Matthew leads product accessibility at Adobe, working across product teams to establish testing standards, support VPAT/ACR development, and connect product work to Adobe's public accessibility commitments.

**What I learned:** Matthew explained how ACR gaps get discovered and escalated. When a product team files a VPAT with open Sev 1 issues, that information flows to Legal and to the teams managing enterprise procurement conversations. The earlier a team surfaces and addresses Sev 1 issues internally, the less exposure there is at the ACR stage. He also confirmed that the three defect patterns I identified (control naming, focus management, error handling) are among the highest-volume recurring issues across Adobe web products, which validated the prioritization in my problem definition.

### Rob Haverty and Gurpreet Kaur — Corporate Accessibility (haverty@adobe.com)

**Role:** Rob owns Adobe's corporate accessibility posture: policy, external commitments, regulatory engagement, and the public ACR program. Gurpreet Kaur works alongside Rob on the Corporate Accessibility team, with focus on how accessibility practices are applied and governed across product teams.

**What I learned:** The conversation confirmed something the dashboard data suggested but didn't fully explain: the use of AI for accessibility testing is already being explored across multiple teams inside Adobe and by Adobe's external vendors. Corporate Accessibility is actively working to establish governance around this space to prevent duplicated efforts and ensure that AI-assisted testing approaches are coordinated rather than fragmented.

This context directly shapes the recommendation in Component 5. The a11y-skill project is not a parallel initiative: it builds on Adobe's existing test cases rather than replacing them, automating their application through Cursor Agent Skills, MCP servers, and AI-driven execution. That design choice, using existing Adobe test infrastructure as the foundation rather than creating new criteria from scratch, means the project fits inside the governance model Corporate Accessibility is developing rather than outside it.

Rob and Gurpreet's framing of the landscape also clarified what "control" means in this context: not blocking AI-assisted testing, but ensuring teams aren't independently solving the same problems in incompatible ways. A skill package built on existing test cases, with documented methodology and shareable outputs, is exactly the kind of contribution that can be standardized and distributed rather than siloed.

---

## Portfolio narrative summary

Adobe says accessibility is a priority. The dashboard says 523 days. This portfolio is the story of the gap between those two things and what I did about it. The problem definition is grounded in real data. The legal and business case maps to frameworks that are actively enforced in Adobe's markets. The contribution artifact is a working testing tool, not a document, built to close the specific gap the data identified: manual testing isn't happening consistently, and the defect categories that require it are the ones filling the backlog. The strategy recommendation is specific enough to drop into a Jira ticket template and a CI pipeline. And the stakeholder conversations revealed something the data alone couldn't show: Corporate Accessibility is already trying to govern AI-assisted testing across Adobe, and this project fits inside that effort rather than around it because it builds on Adobe's existing test cases instead of inventing new ones. The Deliver Badge is not a statement of intent. It is a record of work.
