# L07: Landmarks & Navigation - Quiz Questions

**Lesson:** L07  
**Topic:** Landmarks & Navigation  
**Outcomes:** 1G.01, 1G.02, 1G.03  
**Total Points:** 5 (5 questions, 1 points each)

---

## Question 1: Purpose of Page Regions
**Outcome:** 1G.01  
**Points:** 2  
**Difficulty:** Easy

**Question:**  
Why is it important to define distinct regions on a web page, such as header, main content, and footer?

**Options:**
- A) It helps assistive technology users jump directly to the section they need
- B) It improves the visual appearance and layout of the page for all users
- C) It is only required for mobile websites to meet compliance standards
- D) It speeds up page loading time by reducing the amount of code

**Correct Answer:** A

**Rationale:**

| Option | Explanation |
|--------|-------------|
| A (Correct) | Defining page regions allows screen reader users to navigate directly to specific sections. This saves time and reduces frustration, especially on pages with repeated content like navigation menus. |
| B (Incorrect) | While good structure can support visual design, the primary accessibility purpose of page regions is to provide programmatic structure for assistive technology, not visual styling. |
| C (Incorrect) | Page regions benefit all websites, not just mobile. Users on any device who rely on assistive technology need this structure to navigate efficiently. |
| D (Incorrect) | Page regions do not affect page loading speed or code size. They affect how assistive technology interprets and presents the page structure to users. |

---

## Question 2: Labeling Multiple Navigation Areas
**Outcome:** 1G.01  
**Points:** 2  
**Difficulty:** Medium

**Question:**  
A website has two navigation areas: one at the top of the page for main site navigation and one in the footer for legal links. What should designers specify to help screen reader users distinguish between them?

**Options:**
- A) Each navigation area should have a unique descriptive label
- B) Only one navigation area is allowed per page for accessibility
- C) The footer links should be converted to regular text without structure
- D) No labels are needed because screen readers detect the difference

**Correct Answer:** A

**Rationale:**

| Option | Explanation |
|--------|-------------|
| A (Correct) | When a page has multiple navigation areas, each one needs a unique label so screen reader users can tell them apart. Without labels, users hear "navigation" for both and cannot distinguish between them. |
| B (Incorrect) | Pages commonly have multiple navigation areas (main nav, footer nav, sidebar nav). This is valid and expected in web design, not a violation. |
| C (Incorrect) | Converting navigation to plain text removes helpful structure. Footer navigation should remain structured as navigation but with a distinguishing label. |
| D (Incorrect) | Screen readers cannot automatically detect the purpose of each navigation area. They rely on labels provided by the design and code to announce meaningful distinctions. |

---

## Question 3: Consistent Navigation Order
**Outcome:** 1G.02  
**Points:** 2  
**Difficulty:** Medium

**Question:**  
A website's main navigation shows links in this order on the homepage: Home, Products, About, Contact. On the Products page, the same navigation shows: Home, About, Products, Contact. What accessibility problem does this create?

**Options:**
- A) Users who rely on consistent patterns will have difficulty finding items
- B) No problem exists because all the same links are still present on the page
- C) This only affects users with visual disabilities who cannot see colors
- D) This is acceptable as long as the navigation remains keyboard accessible

**Correct Answer:** A

**Rationale:**

| Option | Explanation |
|--------|-------------|
| A (Correct) | WCAG requires navigation to appear in the same relative order across pages. Changing the order forces users to relearn the navigation on each page, which is especially difficult for users with cognitive disabilities. |
| B (Incorrect) | Having the same links present is not enough. The order matters because users build mental models and expectations based on consistent positioning. |
| C (Incorrect) | Inconsistent navigation affects many users, including those with cognitive disabilities and motor disabilities who rely on muscle memory, not just those with visual disabilities. |
| D (Incorrect) | Keyboard accessibility and consistent navigation are separate requirements. A navigation can be fully keyboard accessible but still fail the consistency requirement. |

---

## Question 4: Identifying Components Consistently
**Outcome:** 1G.02  
**Points:** 2  
**Difficulty:** Easy

**Question:**  
A website uses a magnifying glass icon for search. On the homepage, it is labeled "Search." On the product pages, the same icon is labeled "Find." What is the accessibility concern?

**Options:**
- A) Components with the same function should be labeled consistently
- B) There is no concern because both labels describe the same action
- C) Only the icon matters for accessibility, not the text label
- D) This is only a problem if the search works differently on each page

**Correct Answer:** A

**Rationale:**

| Option | Explanation |
|--------|-------------|
| A (Correct) | WCAG requires that components with the same functionality be identified consistently. Using "Search" on some pages and "Find" on others creates unnecessary confusion, especially for users with cognitive disabilities who benefit from predictable, consistent terminology. |
| B (Incorrect) | Even though both words relate to searching, inconsistent labeling forces users to recognize that different terms mean the same thing. Consistency reduces cognitive load. |
| C (Incorrect) | Labels are essential for accessibility. Screen reader users rely on labels to understand the purpose of interactive elements. The icon alone does not provide accessible information. |
| D (Incorrect) | Consistent identification is required even when the functionality is identical. The requirement is about predictability in labeling, not about differences in behavior. |

---

## Question 5: Helping Users Skip Repeated Content
**Outcome:** 1G.03  
**Points:** 2  
**Difficulty:** Easy

**Question:**  
A website has a large navigation menu with 30 links that appears on every page. What mechanism should be provided to help keyboard users avoid tabbing through all 30 links to reach the main content?

**Options:**
- A) A "Skip to main content" link at the top of the page
- B) No mechanism is needed because users can scroll past it
- C) The navigation should be removed from most pages
- D) Users should switch to using a mouse for navigation

**Correct Answer:** A

**Rationale:**

| Option | Explanation |
|--------|-------------|
| A (Correct) | Skip links allow keyboard users to bypass repeated blocks of content like navigation menus. Without a skip link, users would need to tab through all 30 links on every page to reach the main content. |
| B (Incorrect) | Scrolling does not help keyboard users. When using Tab to navigate, focus moves through every focusable element regardless of scroll position. Skip links address keyboard navigation, not scrolling. |
| C (Incorrect) | Navigation is essential on all pages and should not be removed. The solution is to provide a bypass mechanism, not to remove helpful navigation structure from most pages. |
| D (Incorrect) | Many users cannot use a mouse due to motor disabilities. Accessible design must support keyboard users, not suggest they switch to a different input method. |

---

## Answer Key

| Question | Answer | Outcome | Points |
|----------|--------|---------|--------|
| Q1 | A | 1G.01 | 2 |
| Q2 | A | 1G.01 | 2 |
| Q3 | A | 1G.02 | 2 |
| Q4 | A | 1G.02 | 2 |
| Q5 | A | 1G.03 | 2 |
| **Total** | | | **10** |

---

## Outcome Coverage

| Outcome | Questions | Points |
|---------|-----------|--------|
| 1G.01 | Q1, Q2 | 4 |
| 1G.02 | Q3, Q4 | 4 |
| 1G.03 | Q5 | 2 |

---

**Document Version:** 2.0  
**Last Updated:** January 2026  
**Author:** DACE Curriculum Team

