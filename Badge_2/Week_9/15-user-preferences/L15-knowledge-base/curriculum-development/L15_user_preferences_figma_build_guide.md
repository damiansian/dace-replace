# Lesson 15: User Preferences and System Settings
## Figma frame construction guide

**Course:** DACE (Design Accessibility Certified Expert)
**Badge Level:** Define
**Delivery:** In-person (instructor-led)
**Duration:** 45 minutes
**Outcomes Covered:** 2F.01, 2F.02, 2F.03

---

## Source context

This lesson draws from established references, particularly:
- **W3C CSS Media Queries Level 5** (prefers-reduced-motion, prefers-color-scheme, prefers-contrast)
- **Apple Human Interface Guidelines** (Accessibility, Dark Mode, Dynamic Type)
- **Microsoft Inclusive Design Toolkit** (accessibility preferences and system settings)
- **Google Material Design** (dark theme guidelines, accessibility)
- **WebAIM Survey Data** (user preference adoption rates)

Key pedagogical approach: **"From individual AT to universal preferences"**: designers move from testing with specific assistive technologies (L09-L14) to understanding the broader ecosystem of user preferences that affect all users, including those without disabilities.

---

## Deck structure overview

| Section | Frames | Duration | Primary Outcome |
|---------|--------|----------|-----------------|
| 0. Title and Objectives | 0.1-0.2 | 3 min | -- |
| 1. The Preference Landscape | 1.1-1.6 | 10 min | 2F.01 |
| 2. Designing for Preferences | 2.1-2.8 | 12 min | 2F.02 |
| 3. Testing with Modified Preferences | 3.1-3.6 | 12 min | 2F.03 |
| 4. Summary and Assessment | 4.1-4.4 | 8 min | -- |

**Total frames:** 26

---

## Design system notes

- Use your existing Adobe Design training template
- Section dividers: Full-bleed title, geometric background pattern
- Content frames: White background, left-aligned content
- Badge color: `#FF6B6B` (Define Badge coral)
- Frame dimensions: 1440x900
- In-person format: Less text on frames, more speaker notes
- Include platform screenshots showing accessibility settings locations
- Use split-screen comparisons for light/dark mode and motion/reduced-motion
- Color-coded callout boxes for preference categories
- Include Chrome DevTools screenshots for testing workflow

---

## Learning objective pill component

Badge 2 specification:
- Shape: Pill/capsule (fully rounded ends)
- Size: Auto-width, ~24px height
- Background: Light coral (#FFE3E3) at 15% opacity
- Text: 12px, medium weight, "LO 2F.0X"
- Links to Frame 0.2

---

## Frame 0: Title and objectives

### Frame 0.1: Title slide

**Type:** Title slide

**Layout:** Centered, branded

**Content:**
- Lesson number: `Lesson 15`
- Title: `User Preferences and System Settings`
- Subtitle: `Designing for the Whole Preference Ecosystem`
- Badge level indicator: `Define Badge`
- Duration: `45 minutes`
- Format indicator: `In-Person Lesson`

**Speaker notes:**
Welcome to Lesson 15. Over the past several lessons, you've learned to test with specific assistive technologies: screen readers, magnification tools, voice control, and high contrast mode. Today we zoom out to the bigger picture: user preferences. These are the system-level settings that users configure once and expect every product to respect. Dark mode, reduced motion, text size, increased contrast: these preferences affect far more users than any single AT. Understanding this preference ecosystem is essential for creating truly adaptive designs.

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
| 2F.01 | Identify where users configure accessibility preferences across platforms and map them to CSS media queries |
| 2F.02 | Design preference-responsive alternatives for dark mode, reduced motion, text scaling, and increased contrast |
| 2F.03 | Test designs with modified preferences using browser DevTools and system settings |

**Connection callout:**
Building on L08 (motion preferences), L12 (text scaling), and L14 (high contrast mode). You've seen individual preferences before; now you learn the complete framework.

**Speaker notes:**
Three outcomes today. First, understanding the preference landscape: where do users set these things, and how do we detect them? Second, designing for preferences: how do we specify alternatives? Third, testing: how do we verify that our designs respond correctly? This lesson connects dots from several earlier lessons into a unified approach.

---

# Section 1: The Preference Landscape
## Duration: 10 minutes

### Frame 1.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `1`
- Title: `The Preference Landscape`

---

### Frame 1.2: Where users set preferences

**Type:** Platform comparison grid

**Layout:** 4-column grid showing each platform

**Headline:** Accessibility preferences live in system settings

**LO pill:** 2F.01

**Grid content:**

| macOS | Windows | iOS | Android |
|-------|---------|-----|---------|
| System Settings > Accessibility > Display | Settings > Accessibility > Visual effects | Settings > Accessibility > Display & Text Size | Settings > Accessibility > Display |
| Reduce motion | Animation effects | Reduce motion | Remove animations |
| Increase contrast | Contrast themes | Increase contrast | High contrast |
| Dark mode (Appearance) | Dark mode (Personalization) | Dark mode (Display) | Dark theme |
| Text size (Display) | Text size (Ease of Access) | Larger text / Dynamic Type | Font size / Display size |

**Key insight callout:**
Every major platform has accessibility preferences in a similar location. Users configure these once and expect every application to respect them.

**Speaker notes:**
Let's start with the basics: where do users actually set these preferences? Every major platform puts accessibility preferences in a similar location, usually under Settings > Accessibility. The specific settings vary slightly, but the categories are consistent: motion, contrast, color scheme, and text size. The important thing to know is that these settings exist, users rely on them, and our designs need to respond.

---

### Frame 1.3: CSS media queries for preference detection

**Type:** Reference card

**Layout:** Four-row reference table

**Headline:** How the web detects user preferences

**LO pill:** 2F.01

| Media Query | What It Detects | Values |
|-------------|----------------|--------|
| `prefers-reduced-motion` | System reduced motion setting | `no-preference`, `reduce` |
| `prefers-color-scheme` | Light or dark theme preference | `light`, `dark` |
| `prefers-contrast` | Contrast level preference | `no-preference`, `more`, `less`, `custom` |
| `forced-colors` | Forced colors mode (Win HC) | `none`, `active` |

**Key insight callout:**
These media queries are the bridge between system settings and web experiences. When a user enables reduced motion in their OS, the browser makes `prefers-reduced-motion: reduce` available to CSS.

**Speaker notes:**
Here is the technical bridge. CSS media queries let web applications detect user preferences without any JavaScript. When a user enables "Reduce motion" in macOS or turns off animations in Windows, the browser reports `prefers-reduced-motion: reduce` to any CSS that asks. Same for color scheme, contrast, and forced colors. These are not new or experimental: prefers-reduced-motion and prefers-color-scheme have been well-supported since 2020.

---

### Frame 1.4: Text size preferences are different

**Type:** Concept explanation with diagram

**Layout:** Left text, right diagram showing rem scaling

**Headline:** Text size preferences do not use media queries

**LO pill:** 2F.01

**Left content:**
Unlike motion and color preferences, text size is not detected by a CSS media query. Instead:
- Users set a preferred text size in their system or browser settings
- Browsers change their base font size
- CSS `rem` units scale automatically with the base font size
- CSS `px` units do NOT scale with the preference

**Right diagram:**
```
User sets "Large" text
       ↓
Browser base font: 16px → 20px
       ↓
1rem = 20px (was 16px)
       ↓
All rem-based text scales
px-based text stays the same
```

**Key insight callout:**
This is why using `rem` instead of `px` for font sizes matters. It is the only way to respect the user's text size preference without any JavaScript.

**Speaker notes:**
Text size is the odd one out. There is no `prefers-large-text` media query. Instead, text size preferences work through the browser's base font size. When a user increases their preferred text size, the browser changes the root font size from the default 16px to something larger. If your CSS uses rem units, text scales automatically. If it uses px units, nothing changes. This is also how Dynamic Type works on iOS for web content. As designers, we need to specify that text should use relative units and that layouts should accommodate scaled text.

---

### Frame 1.5: Preference adoption is significant

**Type:** Data visualization

**Layout:** Bar chart or statistics display

**Headline:** These are not edge cases

**Data points:**
- Dark mode: Over 80% of smartphone users use dark mode at least sometimes (Android and iOS data, 2024)
- Reduced motion: 5-10% of users enable reduced motion settings
- Large text: 25-30% of mobile users increase their default text size
- High contrast: 2-5% of users enable increased contrast settings

**Key insight callout:**
If you combine all users who modify at least one accessibility preference, it is likely a majority of your users. Designing for preferences is not designing for a niche: it is designing for everyone.

**Speaker notes:**
Here is why this matters at scale. Dark mode alone covers the majority of mobile users. Combine that with the large text users, reduced motion users, and high contrast users, and you are talking about most of your audience modifying at least one preference. This is very different from screen reader usage, which is under 2% of users. Preference-responsive design has massive reach.

---

### Frame 1.6: Preferences can combine

**Type:** Venn diagram or combination grid

**Layout:** Showing common preference combinations

**Headline:** Users enable multiple preferences simultaneously

**Common combinations:**
- Dark mode + Reduced motion (very common)
- Dark mode + Large text
- Large text + Increased contrast
- Dark mode + Increased contrast
- All four simultaneously (not unusual)

**Key insight callout:**
Testing a single preference at a time is not enough. You need to test common combinations because interaction effects can create unexpected issues.

**Speaker notes:**
Here is a critical point that is easy to miss: preferences do not exist in isolation. A user who enables dark mode may also enable reduced motion and large text. Your design needs to work in all these states AND in combination. Dark mode alone might look great, and large text alone might work fine, but dark mode plus large text plus reduced motion might reveal problems you did not anticipate. We will cover how to test these combinations in Section 3.

---

# Section 2: Designing for Preferences
## Duration: 12 minutes

### Frame 2.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `2`
- Title: `Designing for Preference Responsiveness`

---

### Frame 2.2: The principle of graceful adaptation

**Type:** Concept frame

**Layout:** Central concept with supporting points

**Headline:** One design, multiple states

**LO pill:** 2F.02

**Central concept:**
Graceful adaptation means the same design works well across all preference states, not by degrading the experience, but by providing intentional alternatives for each state.

**Supporting points:**
- Not "dark mode is a stripped-down version": it is an equally-good alternative
- Not "remove all animation for reduced motion": replace with appropriate alternatives
- Not "content breaks at large text": layouts flex to accommodate scaling
- Not "high contrast looks ugly": intentional contrast-appropriate styling

**Speaker notes:**
The principle behind all preference-responsive design is graceful adaptation. This means you are not creating a "degraded mode" for users with preferences. You are creating intentional alternatives that are equally good. Dark mode should look as polished as light mode. Reduced motion should feel as responsive as the animated version. Large text should read as well as default text. This requires design work upfront, but the result is a product that works for everyone.

---

### Frame 2.3: Dark mode design

**Type:** Split comparison

**Layout:** Left: light mode, Right: dark mode, with annotations

**Headline:** Dark mode is not "invert all colors"

**LO pill:** 2F.02

**Left (light mode):**
- White background (#FFFFFF)
- Dark text (#333333)
- Light shadows for elevation
- Full-color images

**Right (dark mode):**
- Dark gray background (#1E1E1E), not pure black
- Off-white text (#E0E0E0), not pure white
- Borders replace shadows for elevation
- Images may need overlay treatment

**Annotation callouts:**
1. "Use dark gray, not pure black, to reduce halation risk"
2. "Off-white text reduces eye strain"
3. "Shadows invisible on dark backgrounds: use borders"
4. "Verify contrast ratios in BOTH modes"

**Speaker notes:**
Dark mode is the most widely-used preference, and it is also the most misunderstood. It is not as simple as inverting your light mode colors. Pure black backgrounds with pure white text creates a "halation" effect for users with astigmatism or certain low vision conditions: the bright text appears to glow or vibrate. Best practice is dark gray backgrounds with off-white text. Shadows, which work great in light mode for showing elevation, become invisible on dark backgrounds, so you need borders or other visual cues instead. And critically, you need to verify contrast ratios in dark mode just like you do in light mode.

---

### Frame 2.4: Design tokens for color scheme

**Type:** Token mapping diagram

**Layout:** Two-column showing semantic tokens mapped to values per mode

**Headline:** Semantic tokens make color scheme switching automatic

**LO pill:** 2F.02

**Token mapping:**

| Semantic Token | Light Mode | Dark Mode |
|---------------|-----------|----------|
| surface-primary | #FFFFFF | #1E1E1E |
| surface-secondary | #F5F5F5 | #2D2D2D |
| text-primary | #212121 | #E0E0E0 |
| text-secondary | #666666 | #A0A0A0 |
| border-default | #E0E0E0 | #404040 |
| accent | #1976D2 | #64B5F6 |

**Key insight callout:**
When designs use semantic tokens instead of hard-coded colors, switching between light and dark mode only requires changing the token values, not redesigning every component.

**Speaker notes:**
This is the practical solution: semantic design tokens. Instead of specifying "this text is #333333," specify "this text uses the text-primary token." Then the design system maps text-primary to the correct value per color scheme. This approach means every component automatically adapts when the user switches modes. The accent color often needs adjustment too: a blue that has good contrast on white may not have good contrast on dark gray, so the accent token maps to a lighter blue in dark mode.

---

### Frame 2.5: Reduced motion alternatives

**Type:** Before/after comparison

**Layout:** Two columns showing animated vs reduced-motion behavior

**Headline:** Replace spatial motion with opacity or instant transitions

**LO pill:** 2F.02

**Left (default motion):**
- Page transition: content slides in from right, 300ms
- Card hover: scale up to 1.05, 200ms ease
- Menu open: drops down with spring animation, 400ms
- Loading: spinning circle animation

**Right (reduced motion):**
- Page transition: content fades in, 150ms
- Card hover: subtle shadow change, instant
- Menu open: appears instantly, no animation
- Loading: static progress bar or text "Loading..."

**Key insight callout:**
Reduced motion does not mean no feedback. Replace vestibular-triggering spatial motion (slide, scale, bounce) with non-triggering alternatives (fade, instant change, opacity).

**Speaker notes:**
Recall from L08 that reduced motion is about reducing vestibular-triggering movement, not eliminating all visual feedback. The key distinction: spatial motion (things moving from point A to point B) triggers vestibular responses. Opacity changes (fading in/out) generally do not. So the strategy is: replace slides, bounces, and scaling with fades or instant state changes. Loading indicators are a special case: a spinning animation should be replaced with a static progress bar or text indicator, because loading feedback is functionally important but the spin motion is not.

---

### Frame 2.6: Text scaling behavior

**Type:** Layout comparison at different scales

**Layout:** Three examples showing 100%, 150%, and 200% text

**Headline:** Layouts must accommodate text at 200% (WCAG 1.4.4)

**LO pill:** 2F.02

**100% text:**
- Card component with heading, body text, and action button
- Looks as designed

**150% text:**
- Same card, text is larger
- Layout still works, button wraps if needed

**200% text:**
- Same card, text is significantly larger
- Content may need to stack vertically
- No content is hidden or clipped
- Scrolling is acceptable if unavoidable

**Common failures:**
- Fixed-height containers with overflow:hidden cut off scaled text
- Absolute-positioned elements overlap when text scales
- Button labels truncated with ellipsis at large sizes

**Speaker notes:**
WCAG 1.4.4 requires text to be resizable up to 200% without loss of content or functionality. This means your layouts cannot have fixed-height containers that clip text when it scales. Common failures: cards with fixed heights where body text overflows, buttons with fixed widths where labels get truncated, and absolutely-positioned elements that overlap when nearby text grows. The solution is flexible layouts with min-height instead of height, auto-width elements, and relative positioning.

---

### Frame 2.7: Increased contrast design

**Type:** Comparison showing default vs increased contrast

**Layout:** Side by side UI elements

**Headline:** prefers-contrast: more requests bolder visual distinction

**LO pill:** 2F.02

**Default contrast:**
- 1px borders on form inputs
- Subtle hover states
- Muted secondary text (#666 on #FFF = 5.7:1)

**Increased contrast:**
- 2px borders on form inputs
- Bold hover states with higher contrast change
- Darker secondary text (#333 on #FFF = 12.6:1)

**Key distinction callout:**
`prefers-contrast: more` is a request for higher contrast, NOT the same as Windows High Contrast / forced-colors mode (L14). Users want better distinction, not a complete color override.

**Speaker notes:**
Increased contrast is the subtlest preference to design for, because it is a "more of the same" request. The user wants your design, just with stronger visual distinctions. Thicker borders, bolder hover states, darker secondary text, more prominent focus indicators. This is different from forced colors mode, which overrides all your colors. With prefers-contrast, you are enhancing your existing design, not replacing it. If you have a design token system, this can be a third token set alongside light and dark mode.

---

### Frame 2.8: Hands-on: specify preference behavior

**Type:** Activity frame

**Layout:** Exercise instructions with card component example

**Headline:** Activity: Specify preference-responsive behavior

**LO pill:** 2F.02

**Instructions:**
Given a card component with:
- White background, dark text
- Hover animation (scale up 1.05 over 200ms)
- 14px body text
- 1px light gray border

Document the following in your design annotation:
1. Dark mode: specify color token values and elevation treatment
2. Reduced motion: specify the hover alternative
3. 200% text: specify overflow and layout behavior
4. Increased contrast: specify border and text changes

**Speaker notes:**
Let's put this into practice. I'm going to give you 3-4 minutes to work through this specification exercise. You have a simple card component with four properties to address. Think about each preference state and write a quick annotation for each. This is exactly the type of specification that should appear in your design documentation.

---

# Section 3: Testing with Modified Preferences
## Duration: 12 minutes

### Frame 3.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `3`
- Title: `Testing with Modified Preferences`

---

### Frame 3.2: Chrome DevTools preference emulation

**Type:** Screenshot walkthrough

**Layout:** Annotated Chrome DevTools screenshot

**Headline:** Emulate preferences without changing system settings

**LO pill:** 2F.03

**Steps:**
1. Open Chrome DevTools (Cmd+Option+I / F12)
2. Open the Rendering tab (three-dot menu > More tools > Rendering)
3. Scroll to "Emulate CSS media feature" section
4. Available emulations:
   - prefers-color-scheme: light / dark
   - prefers-reduced-motion: no-preference / reduce
   - prefers-contrast: no-preference / more / less / custom
   - forced-colors: none / active

**Key insight callout:**
DevTools emulation is the fastest way to test preference responsiveness during design review. You can toggle preferences instantly without affecting your system settings.

**Speaker notes:**
The Chrome DevTools Rendering tab is your best friend for preference testing. You can emulate any combination of CSS media feature preferences without changing a single system setting. This makes testing fast and reversible. Open DevTools, go to the Rendering tab, and you'll see dropdown menus for each preference media query. Toggle them and watch the page respond, or not respond, which is how you find bugs.

---

### Frame 3.3: System-level testing

**Type:** Platform testing guide

**Layout:** Four quadrants showing each platform's settings

**Headline:** System-level testing catches what DevTools misses

**LO pill:** 2F.03

**Platform testing paths:**

| Platform | How to Toggle | What to Check |
|----------|--------------|---------------|
| macOS | System Settings > Accessibility > Display | Reduce motion, Increase contrast, Reduce transparency |
| Windows | Settings > Accessibility > Visual effects | Animation effects, Contrast themes |
| iOS | Settings > Accessibility > Display & Text Size | Bold text, Larger text, Reduce motion |
| Android | Settings > Accessibility > Display | Font size, Display size, Remove animations |

**When system testing matters:**
- Mobile testing (no DevTools emulation on device)
- Native UI elements that respond to system settings
- Dynamic Type / font scaling that affects native components
- Validating that the system preference actually triggers the media query

**Speaker notes:**
DevTools is great for quick testing, but system-level testing is the ground truth. On mobile, you cannot emulate preferences in the browser, you have to toggle actual system settings. System-level testing also reveals how native UI elements respond, which DevTools cannot show. The workflow is: use DevTools for fast iteration during development, then validate with system settings before shipping.

---

### Frame 3.4: Preference testing checklist

**Type:** Checklist reference

**Layout:** Structured checklist with categories

**Headline:** Systematic preference testing

**LO pill:** 2F.03

**For each preference state, verify:**
- [ ] Preference is detected (visual change occurs when toggled)
- [ ] Content remains readable (text legible, sufficient contrast)
- [ ] Layout remains intact (no clipping, overflow, or overlap)
- [ ] Interactive elements remain operable (buttons clickable, links visible)
- [ ] Experience quality is maintained (not just functional, but good)
- [ ] WCAG contrast requirements met in the new state

**Preference states to test:**
- [ ] prefers-color-scheme: dark
- [ ] prefers-reduced-motion: reduce
- [ ] prefers-contrast: more
- [ ] Browser font size: Very Large
- [ ] Combination: dark + reduced motion
- [ ] Combination: dark + large text

**Speaker notes:**
Here is a checklist you can use for every design review. Six verification points for each preference state, and a minimum of six preference states to test, including two combinations. This might seem like a lot, but most of it is quick: toggle a setting, scan the page, note any issues. With practice, you can run through this checklist in under 10 minutes for a typical page.

---

### Frame 3.5: Hands-on: preference testing lab

**Type:** Activity frame

**Layout:** Step-by-step testing exercise

**Headline:** Activity: Test a page with modified preferences

**LO pill:** 2F.03

**Instructions:**
1. Open the test page in Chrome
2. Open DevTools > Rendering tab
3. Test each preference individually:
   - Toggle prefers-color-scheme to dark (note findings)
   - Toggle prefers-reduced-motion to reduce (note findings)
   - Toggle prefers-contrast to more (note findings)
4. Change browser Settings > Appearance > Font size to "Very Large"
5. Test the combination: dark mode + reduced motion (note findings)
6. Document one issue per preference state

**Time:** 5-7 minutes

**Speaker notes:**
Let's test. Open the test page, open DevTools, and work through each preference. I want you to document at least one finding per preference state. These can be positive findings ("dark mode looks great, contrast is maintained") or issues ("reduced motion has no effect, animations still play"). The goal is to practice the workflow and develop the habit of systematic preference testing.

---

### Frame 3.6: Common preference testing failures

**Type:** Issue gallery

**Layout:** Grid of common issues with screenshots

**Headline:** What to look for during preference testing

**Common failures:**

1. **Dark mode:** Text becomes invisible (dark text on dark background because one element was not token-ized)
2. **Dark mode:** Images with transparent backgrounds look wrong (light-themed icons on dark background)
3. **Reduced motion:** No effect (animations not wrapped in prefers-reduced-motion media query)
4. **Large text:** Content clipped by fixed-height container
5. **Large text:** Button labels truncated with no way to read full text
6. **Increased contrast:** No change (prefers-contrast not implemented at all)
7. **Combination:** Dark mode + large text causes text to overflow outside its container

**Speaker notes:**
These are the patterns you will see again and again during preference testing. The most common issue is simply that a preference is not implemented at all: you toggle it and nothing changes. This means the CSS does not include the media query. The second most common is partial implementation: dark mode works on most of the page but one component still has hard-coded colors. Document these clearly so engineering knows exactly what to fix.

---

# Section 4: Summary and Assessment
## Duration: 8 minutes

### Frame 4.1: Section divider

**Type:** Section divider

**Layout:** Centered title, geometric background

**Content:**
- Section number: `4`
- Title: `Summary and Next Steps`

---

### Frame 4.2: Key takeaways

**Type:** Summary frame

**Layout:** Numbered list with icons

**Headline:** What you've learned

**Takeaways:**
1. **Preference landscape (2F.01):** Users configure accessibility preferences in system settings, and CSS media queries detect them: `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`
2. **Design specification (2F.02):** Preference-responsive design means intentional alternatives, not degraded experiences. Semantic tokens, reduced motion alternatives, and flexible layouts.
3. **Testing workflow (2F.03):** Use Chrome DevTools for fast emulation, system settings for ground truth, and a checklist for consistency. Test combinations, not just individual preferences.

**Speaker notes:**
Three big takeaways. First: know the landscape. Users set preferences at the system level, and CSS media queries make them available to the web. Second: design for preferences intentionally. Use tokens for color scheme, specify motion alternatives, and build flexible layouts. Third: test systematically. DevTools for speed, system settings for accuracy, checklists for completeness. This is not extra work; it is a natural extension of the accessibility testing you have been learning throughout the Define Badge.

---

### Frame 4.3: Quiz preview

**Type:** Assessment preview

**Layout:** Quiz overview with outcome mapping

**Headline:** Knowledge Check

**Content:**
- 5 questions
- Covers: CSS media queries, dark mode design, reduced motion alternatives, DevTools testing, preference interaction
- Maps to outcomes 2F.01, 2F.02, 2F.03

**Speaker notes:**
The quiz covers all three outcome areas. You will identify which CSS media query detects a specific preference, evaluate dark mode design decisions, specify reduced motion alternatives, locate DevTools preference emulation, and explain how multiple preferences interact. All practical, scenario-based questions.

---

### Frame 4.4: Up next

**Type:** Next lesson preview

**Layout:** Teaser with lesson title and brief description

**Headline:** Up Next: Lesson 16

**Content:**
- **Lesson 16: Perceptual and Cognitive Design Considerations**
- Moving from AT-specific testing to broader design principles
- Spatial hierarchy, visual density, and component semantics
- How design choices affect users with cognitive and perceptual disabilities
- The final Define Badge lesson before assessment

**Speaker notes:**
Next lesson shifts gears. We have spent the Define Badge learning specific assistive technologies and user preferences. Lesson 16 pulls back to look at broader design principles: how spatial hierarchy, visual density, and component semantics affect users with cognitive and perceptual disabilities. This is where all the pieces come together before the Define Badge assessment.

---

*Last updated: February 2026*  
*Version: 1.0*  
*For: DACE L15: User Preferences and System Settings*
