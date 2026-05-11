# L03: Color Accessibility - Explainer Video Script

**Lesson:** L03: Color  
**Badge:** Discover  
**Duration:** 6 minutes  
**Format:** Pre-class explainer video  
**Total Word Count:** ~950 words

---

## Introduction (0:00-0:30)

**[SCENE: Opening title card with colorful interface that transitions to grayscale]**

**SPEAKER:**

Color is one of the most powerful tools in design. But when it's the *only* way you communicate information, or when there isn't enough contrast between elements, you create barriers for millions of users.

In this video, we'll cover three WCAG requirements that govern how we use color: contrast for text, contrast for UI components, and making sure color isn't the only way information is conveyed. By the end, you'll know exactly what to test and how to test it before our live session.

Let's dive in.

**[Word count: 92 | Visual: Show examples of good and bad color usage]**

---

## Section 1: The Three WCAG Color Requirements (0:30-2:30)

**[SCENE: Split screen showing WCAG criterion numbers and real examples]**

**SPEAKER:**

WCAG has three success criteria that govern how we use color in design.

**First: SC 1.4.3, Contrast Minimum.** This is about text contrast. Regular text—anything under 24 pixels or 18 and a half pixels bold—needs **4.5 to 1** contrast with its background. Large text needs **3 to 1**. Why the difference? Larger text with thicker strokes is simply easier to read at lower contrast.

**[PAUSE - Visual: Show side-by-side examples of 4.5:1 vs 3:1 contrast]**

**Second: SC 1.4.11, Non-text Contrast.** This is about UI components like buttons, input fields, and focus indicators. These need **3 to 1** contrast. But here's the key: you test the *visible information required to understand the control's purpose*.

For an icon-only button with no fill? Test the icon against the page background. For a text button with a fill? Test the *text* against the *button* fill—the button fill itself doesn't need to meet 3 to 1 with the page because the text is what identifies the button. Ask yourself: "If I removed the fill or border, could I still understand what this button does?" If yes, the fill and border are incidental—they don't need testing against the page background.

**[PAUSE - Visual: Diagram showing different button types and what to test]**

And here's something important: **disabled buttons are exempt.** WCAG explicitly states that inactive controls don't need to meet contrast requirements. Don't waste time testing disabled states—focus on active ones.

**[PAUSE - Visual: Show disabled button with exemption callout]**

**Third: SC 1.4.1, Use of Color.** Color can enhance meaning, but it can't *carry* meaning alone. Required form fields? They need more than just red text—add an asterisk or the word "required." Links? They need underlines, not just color. Status indicators? Add icons like checkmarks or X marks along with color.

**[PAUSE - Visual: Show pass/fail examples of required fields, links, and status indicators]**

The test is simple: if you removed all color and showed your design in grayscale, could users still get all the same information? If no, you have a color-only failure.

**[Word count: 335 | Timecode check: Should be around 2:30]**

---

## Section 2: Who's Affected & Why It Matters (2:30-3:30)

**[SCENE: Transition to statistics and real-world examples]**

**SPEAKER:**

You might be thinking, "How many people does this really affect?" The answer: a lot more than you'd expect.

**15% of working-age adults** have some form of vision impairment, including reduced contrast sensitivity that makes low-contrast text genuinely difficult or impossible to read.

**About 300 million people globally**—that's roughly 8% of males and half a percent of females—have color vision deficiencies that affect how they perceive hue differences. Red and green look similar. Blue and yellow blend together.

But here's the thing: *everyone* experiences situational disabilities. You've used your phone in bright sunlight where contrast drops. You've seen screens in low battery mode that switch to grayscale. You've worked on a monitor with glare that washes out colors. Color accessibility isn't an edge case—it helps a significant portion of your users every single day.

**[PAUSE - Visual: Show real-world scenarios - phone in sunlight, low battery grayscale mode, glare on screen]**

This is why getting color right matters. It's not just about compliance—it's about making sure your designs actually work for the people using them.

**[Word count: 186 | Timecode check: Should be around 3:30]**

---

## Section 3: Testing Workflow with Stark (3:30-5:30)

**[SCENE: Screen recording demo of Stark plugin in Figma]**

**SPEAKER:**

Let's talk about how you'll actually test this. We use Stark, a Figma plugin, and the workflow has five steps.

**Step 1: Text Contrast.** Open Stark's Contrast Checker. Select your text color, select the background color, and check the ratio. Regular text needs 4.5 to 1. Large text needs 3 to 1. Skip any disabled text—it's exempt. Document every failure with the current ratio and what's required.

**[PAUSE - Visual: Show Stark contrast checker interface]**

**Step 2: UI Component Contrast.** Test buttons, input borders, and focus indicators. Remember what we said earlier: test what identifies the control. For icon-only buttons, test the icon against the page. For text buttons with fills, test the text against the fill—not the fill against the page. Again, skip disabled components. They're exempt.

**[PAUSE - Visual: Demonstrate testing different button types]**

**Step 3: Grayscale Simulation.** This is where SC 1.4.1 comes in. Open Stark's Vision Simulator and select Achromatopsia—that's complete color blindness, which shows everything in grayscale. Here's why this is brilliant: color vision deficiencies affect *hue* perception—red versus green, blue versus yellow. Grayscale removes *all* hue information, leaving only lightness. If your design works in grayscale, it works for *all* types of color vision deficiency. You don't need to test protanopia, deuteranopia, tritanopia separately. Grayscale is the most stringent test and covers everything.

**[PAUSE - Visual: Toggle grayscale simulation on and off on a design]**

Toggle it on and scan your entire design. Are required fields still visible? Can you tell links from regular text? Are status indicators clear? If anything becomes unclear, you've found a color-only failure.

**Step 4: Identify and Fix.** For everything that became unclear in grayscale, propose a fix. Required field? Add an asterisk. Link? Add an underline. Status indicator? Add an icon. Then run the grayscale simulation again to verify your fixes work.

**[PAUSE - Visual: Show before/after examples of fixes]**

**Step 5: Document Everything.** Use Stark's annotation tools—the same Blueline features you learned in Lesson 01. Include color values, contrast ratios, the WCAG success criteria, and your recommended fixes. For example: "Text #999999 on #FFFFFF equals 2.8 to 1. Fails SC 1.4.3, which requires 4.5 to 1. Recommend #595959, which gives 7.0 to 1."

**[PAUSE - Visual: Show annotated Figma file with Stark annotations]**

This five-step workflow is what you'll practice in the live session and use in your project.

**[Word count: 403 | Timecode check: Should be around 5:30]**

---

## Conclusion (5:30-6:00)

**[SCENE: Return to opening visual, now with all three criteria shown clearly]**

**SPEAKER:**

To recap: **4.5 to 1** for regular text, **3 to 1** for large text and UI components, and **always provide non-color indicators** for information. Test what identifies the control—not always the boundary. Grayscale simulation covers all color vision deficiencies. And disabled states are exempt—focus on active states.

In our live session, you'll practice this workflow on real designs, learn common pitfalls, and get hands-on with Stark. Come prepared with questions—especially about UI component testing, because that's where most confusion happens.

See you in class.

**[Word count: 104 | Total: ~950 words]**

---

## Production Notes

### Visual Assets Needed

1. **Opening/Closing:** Animated transition from colorful UI to grayscale
2. **Contrast Examples:** Side-by-side comparisons of passing and failing contrast ratios
3. **Button Diagrams:** Visual guide showing what to test for different button types
4. **Disabled Button:** Clear callout showing exemption
5. **Color-Only Failures:** Pass/fail examples for required fields, links, and status indicators
6. **Statistics Graphics:** Clean, accessible infographics for the 15% and 300 million stats
7. **Situational Disabilities:** Photos or illustrations of real-world scenarios
8. **Stark Screen Recording:** Clean demo of all five workflow steps
9. **Grayscale Toggle:** Before/after animation showing simulation in action
10. **Annotation Example:** Polished screenshot of annotated Figma file

### Key Emphasis Points

- **4.5:1** and **3:1** ratios (always emphasize these numbers)
- **"Test what identifies the control"** (this is the critical concept)
- **"Disabled states are exempt"** (emphasize multiple times)
- **"Grayscale covers everything"** (dispel the myth that you need multiple CVD tests)
- **Active vs inactive states** (be crystal clear about the distinction)

### Pacing Notes

- Pause after each key concept for visual demonstration (marked with **[PAUSE]** in script)
- Allow 3-5 seconds per visual pause
- Emphasize numerical ratios slightly—students need to remember these
- Slow down slightly when explaining UI component testing (0:30-2:30)—this is where most confusion occurs
- Keep tone conversational throughout—avoid sounding like you're reading WCAG documentation

### Accessibility Considerations for Video

- Provide full transcript (this script serves as the base)
- Ensure all text on screen meets 4.5:1 contrast (practice what we preach!)
- Use captions/subtitles
- Describe visual examples in voiceover (don't rely on viewers seeing details)
- Keep text on screen long enough to read (minimum 3 seconds per sentence)

---

*Script Version: 1.0*  
*Last Updated: December 2025*  
*For: DACE Discover Badge, Lesson 03: Color*

