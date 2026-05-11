00:00:00:00 - 00:00:30:21
Unknown
This video covers the testing procedures for basic automated accessibility testing using AKS dev tools. There are several tools on the market AKS Dev tools by TK, waived by Web Accessibility Insights from Microsoft and lighthouse from Google. Both the Microsoft and the Google products are based off the test rules using the AKS core library. Adobe has landed on the AKS dev tools as our automated testing tool.

00:00:30:21 - 00:00:55:20
Unknown
Choice. You can download acts as a browser extension or plugin for Chrome, Firefox, or Edge. ECS can be run either via the command line or in the browser on the rendered web page. This training will only cover running AKS dev tools in the browser. The X Dev Tools automated testing will not catch all issues that create barriers for people with disabilities.

00:00:55:23 - 00:01:26:16
Unknown
However, it will catch about 60% of the accessibility issues from running a simple automated scan of the page. An example of a limitation can be seen, and the first accessibility requirement for placing an alternative text on an image. X dev tools can determine if there is an alt attribute on the image tag, but it cannot determine if one the alternative text is meaningful or to the image is decorative, and should instead have a null attribute, so it's hidden from an assistive technology.

00:01:26:19 - 00:01:49:09
Unknown
In these cases, a human review is required to provide that context. It is possible that X dev tools will provide results that are not actual barriers to access. Color contrast of white text over an image can commonly be shown as an error due to transparency. Usage. Also, parsing issues can often be called out that have no bearing on accessibility.

00:01:49:12 - 00:02:17:29
Unknown
Running AKS dev tools on rt.com we see four issues total which have no bearing on conformance to accessibility standards. As such, these results can be ignored. All other issues should be resolved before committing code to a repository or have a well-formed JIRA ticket created. I want to review now how to open the AKS dev tools, and to explain some of the parts of the user interface before we go any further.

00:02:18:01 - 00:02:47:14
Unknown
I'm here in Google Chrome. I've downloaded the extension. I've enabled it on the extensions manager. Going back to the test page here on the Adobe Accessibility Guide, where we have a number of issues that we can look at for automated testing. I'm going to right click anywhere on the the browser window. I could also go to the the file menu to do the same.

00:02:47:14 - 00:03:16:16
Unknown
But I'm going to look at the inspect here. Now if your browser doesn't have inspect, what I would recommend is to reach out to us on the Guild accessibility channel, and we can walk you through how to get that on there. So when I come into my dev tools I have my align on the right. You can have it on the bottom and I'm going to go to this more tabs and I'm going to look for AKS dev tools.

00:03:16:18 - 00:03:40:29
Unknown
And I'll see that it appears here in the right hand panel. There's a lot going on on this. You know, they want to show you some things. For example, you can log in, create an account. We're only going to look at the free features of this tool. So we're going to look at the scan all of my page feature.

00:03:41:02 - 00:04:09:20
Unknown
And on the test page we see it comes up with seven results. These results are listed as critical serious moderate or minor. These are not definitions we use at Adobe. So these do not align to our severity rankings. Our severity rankings are found on the bug reporting entry on the Digital Accessibility Guide. Severity one through four. And we have a good, ranking rubric there for you to use.

00:04:09:22 - 00:04:44:00
Unknown
So again critical serious moderate minor has no impact on the Adobe ranking. We're also going to use best practices off. All right. There's a lot more tests that can get run. But we recommend that you have them off. So we'll have 58 unique tests that will be run which maps over to our testing requirements. Pretty nicely. So another thing I could do here is I can click this toggle collapse button just to get all of that stuff out of the way.

00:04:44:02 - 00:05:11:14
Unknown
I noticed that my seven issues are here, ready for me to start working. And this is the recommended, view and what we'll be using in the rest of this training as a demonstration. If you're following along, it is not possible to cover all 58 tests in the core library in a single training. The accessibility team has created a test page that covers the most common types of accessibility issues that could be caught by automated testing.

00:05:11:16 - 00:05:39:20
Unknown
The issues are one name, roll and value, two text alternatives, three text contrast, four page title, and five document language. Click on any icon here to jump to that point in the video. When reviewing acts testing results for issues dealing with name, roll, or value of a control, we work to ensure all controls in the web application have an accessible name.

00:05:39:22 - 00:06:05:16
Unknown
The roll is announced correctly and the value or state changes are announced correctly. This is an issue of paramount importance to a screen reader user. This is also one of the most pervasive issues facing Adobe Web applications. We have created three samples of this issue on the test page. Let's take a look to begin the testing for name, roll and value using the AKS DevTools tool.

00:06:05:19 - 00:06:28:10
Unknown
We're going to look at the test page here on the Digital Accessibility Guide. I'm going to click the button that says scan all of my page. We have seven issues that come up. I'm going to collapse this toggle toggle. We notice that we have seven total issues. And three of those issues deal with name, roll and value. The first is Aria.

00:06:28:10 - 00:06:58:22
Unknown
Rolls used must conform to valid values. The second buttons must have discernible text, and the third form elements must have labels. And we created three examples of this on the testing page because it is number one. The most common issue that we see on Adobe Web applications. And it has a tremendous negative impact on screen reader users. So we're going to work through this to resolve these issues before we commit the code.

00:06:58:24 - 00:07:21:03
Unknown
So the first thing I'm going to do is click on the first item Aria rules used must conform to valid values, and I can use this highlight button to highlight the issue right in the browser. I can also click on this link that says learn More. And what it would do is take me to Deakin University and it would describe the issue.

00:07:21:05 - 00:07:26:16
Unknown
In great detail, including ways to fix the issue.

00:07:26:19 - 00:07:52:12
Unknown
And I know that this is a name roll value issue because it indicates that it's CAG for one two. Now what I would do there is look at that for one two over in our Digital Accessibility guides bug reporting PS entry. And I will look at the CC f accessibility labels. And what I would do is type in 4.1.2.

00:07:52:13 - 00:08:20:23
Unknown
So I have to add the periods there and it'll show me that that code is 412 name roll value level AA. And that relates to the CF label of accessibility user interface controls AC 0206. I would use this information if I were creating a jury ticket. Now in this use case, I'm going to go and remediate all these issues before committing them.

00:08:20:25 - 00:08:49:25
Unknown
I also want to point out here that this link and the bug reporting entry on the Visual Disability Guide will show will create a JIRA search that shows you all of the issues logged for that common control Framework label. And we see that there's 3199 issues for name, role and value. So this disability user interface controls a lot of issues logged against it.

00:08:49:27 - 00:09:15:23
Unknown
You also find here a well-formed ticket that you can use as a reference, where it has all of the kind of boilerplate pieces and it correctly associates to the quick access criteria. That being said, let's go ahead and fix this. So the Aria role of button group is what's, at fault here. There is no such thing as button group.

00:09:15:26 - 00:09:38:08
Unknown
It's just group. Okay. So I would go make that change in my code. I'm demonstrating here. Just changing it directly in the page view would go and fix the source code. And then you would rerun scan and notice that we have six issues. Now we want to do this until we have zero issues before we commit. Otherwise we're going to create that JIRA ticket.

00:09:38:11 - 00:10:05:16
Unknown
And we have those resources there to create the charity ticket. Let's take a look at this. Buttons must have discernable text issue. Again I'll highlight and I'll notice we have an icon only button. And it has no accessible name right. Accessible text is empty. This is one of the most common issues we see. And if if everyone was running this testing, we could get that number down from 30 to 100, by quite a bit.

00:10:05:17 - 00:10:17:06
Unknown
So I have a button here. I have no accessible name on it. I'm going to add an Aria label.

00:10:17:09 - 00:10:22:12
Unknown
And I'm going to call this.

00:10:22:15 - 00:10:50:01
Unknown
Delete. So now the accessible name of that button is delete. I'll rerun the scan and we're down to five. Let's take a look at this form. Elements must have labels issue. I'm going to highlight. And here we have the accessible text is empty. So again we have an accessible name issue. This last name should be for the billing address.

00:10:50:01 - 00:11:19:21
Unknown
And this last name should be for the shipping address. So let's take a look at both of this. So I notice that the label four is set to last name and the id is set to last names. So that's what's causing the issue. So I could say. Billing dash last name is the correct I.D. attribute to associate for the label to the input.

00:11:19:24 - 00:11:52:23
Unknown
And what that will do is create the accessible name for that input as last name. And then we'll take a look at this piece here under Last Names and see that before it's called Shipping last. That's name. And the ID is just last name. So I want to copy that paste there. Go back and rerun my test. And we notice that we're down to four issues.

00:11:52:25 - 00:12:16:28
Unknown
So all the name roll value issues have been addressed. Again this is one of the most common issues we see across all Adobe Web applications. And it has a really negative impact on screen reader users. So at a minimum, if everyone was running this test and fixing those issues, we'd be so much further along in our goals for access and inclusion.

00:12:17:01 - 00:12:43:08
Unknown
If an issue cannot be resolved prior to committing the code. We would log a bug in JIRA with the CF label of accessibility user interface controls assign 0 to 0 six, and in that ticket we would reference a wicked success criterion of 4.1.2. Name roll value at level A. The next testing result we will review is for text alternatives.

00:12:43:10 - 00:13:06:20
Unknown
A text alternative is a description of an image for other non text content that is read aloud by a screen reader. We want to ensure that meaningful images are accurately described and that decorative images are hidden from screen readers. Let's go back to the test page to review a sample for some context, and back here on the test page.

00:13:06:22 - 00:13:28:25
Unknown
And this time we want to run the test for text alternatives. And in this way we are going to look at non text content on the page and ensure that it either has a text alternative that describes it well, if it's meaningful and informative, or if it's not meaningful and informative, that it's hidden from the screen that our user.

00:13:28:27 - 00:13:53:14
Unknown
So in my testing results I have role equals img elements must have an alternative text. Let's take a look at that. So I could go out to the more information to go to university. I can also highlight now I see that it's highlighting the trash can icon inside of the delete button that we worked on earlier, and it's listing accessible text as empty.

00:13:53:16 - 00:14:17:12
Unknown
But we know that we created the accessible name for the button by using Aria label on the entire button, and we would not want to have as far to read button or delete button. Trashcan icon. That would be more information that we need. Let's take a look at the the the code here and we'll see that we have the roll equals image, which now defines this as an image.

00:14:17:14 - 00:14:44:12
Unknown
What we need here is either to have a text alternative or to say this is decorative. So in this case we're going to say Aria hidden. Equals true. Now it might seem like an odd thing to do to hide something from a screen reader user, but in this case, because we have the the name on the button element, we would not want to describe the graphic within it.

00:14:44:14 - 00:15:09:04
Unknown
So I'm going to rerun my scan. And now I have three issues. So that would be saying that all other images on this page either have a a text alternative that describes the image, or they are suppressed from the screen reader and the correct manner. Is an issue with an alternate text description cannot be remediated prior to committing code.

00:15:09:07 - 00:15:38:08
Unknown
Then we should log an issue in JIRA with the CF label of accessibility accessible names C0201 and we would reference the wick eg. Success rates, your end of 1.1.1 non text content at level A text contrast testing will evaluate that small text has a four and a half to one contrast ratio to its background, and large text has a 3 to 1 contrast ratio to its background.

00:15:38:11 - 00:15:59:15
Unknown
Ex Dev Tools has limited support in this area. Let's take a quick look at some of the features that can support color contrast testing for text in our test page. The issue that is there is a true issue. So let's take a look at the elements must have sufficient color contrast on a test page. I'll highlight that here.

00:15:59:17 - 00:16:35:27
Unknown
And I'll see that this text label CV for this text input is a lower value than it ought to be. Okay. So I want to take a look at that and I'll see that the color is at 7077. Okay. And I happen to know that all of the other color here is 505050 hex value. And when that is applied and I rerun the scan, that issue will go away.

00:16:36:00 - 00:17:12:03
Unknown
So this system will do a good job at looking at the color of text to its background and calling out issues. There will be some false positives that you'll get, and that is pretty common. In this tool and in any tool that does, automated contrast checking. There are some tools that will do a good job, a good job with, looking at that pixel value for getting that white text on a picture background and to look at each pixel and I'll give you, an evaluation that way that is not here in acts.

00:17:12:06 - 00:17:47:15
Unknown
So, the results are pretty good, but just have that caveat that false positives are possible here. If an error is discovered for text contrast, we would log an issue in JIRA with the KF label accessibility background contrast ratio AC 0402. We would reference a week success criterion 1.4.3 contrast minimum at level double a a page title is an important piece of information for all users, but in particular screen reader users.

00:17:47:17 - 00:18:09:06
Unknown
When someone clicks on a link to a new page, the title will be read aloud to them. We want to ensure that title is present for one and two at a title helps us. Screen reader user know that they've reached the correct page based on their action. Acts will do a good job of determining if a title element is present in the header, but it cannot determine how meaningful the title is in context.

00:18:09:09 - 00:18:31:18
Unknown
Let's take a look at the test page. In the following demonstration, we're going to look at the topic of having a page title. Now I can actually see on this page that a page title is missing. Just not even looking at the X report. I can see the browser tab has no meaningful title in it, it's just showing the URL.

00:18:31:20 - 00:19:02:05
Unknown
So as opposed to looking at a page with a well-formed page title and it reads bug reporting, right? Adobe Accessibility Guide. So here in my acts report, I can see that I have an error saying documents must have the title element to aid in navigation. So let's open that guy. All right. And I can highlight. And it's just going to go basically to the root of the document.

00:19:02:07 - 00:19:30:21
Unknown
And it's going to show that the HTML has no no title set. When I look here I see with tag 2.4.0242. And what I would do if I were making a bug, I would use my find feature on the bug reporting page and type in 2.4.2 and see that this is weekend success. Criterion 2.4.2. Page title that level A and the CCF label as accessibility descriptive titles.

00:19:30:24 - 00:19:56:15
Unknown
Assign 0205. So I would use these if I were creating a JIRA ticket. We're going to fix the problem there. And when we go to the inspect element, we see that we're just going to go right to the the root HTML right. So actually where we want to go here is an under the head. And we want to add a title.

00:19:56:18 - 00:20:01:00
Unknown
So here I'm going to put in.

00:20:01:02 - 00:20:13:02
Unknown
Title. And we're going to give this the title of test page.

00:20:13:05 - 00:20:37:10
Unknown
Okay. And a best practice that we can offer here would be to match the H1 of a document. So if I were a screen reader user and I clicked on a link called test page here in the navigation, I'd want to hear it as the first thing I hear from the Scrivener. And to have the H1 also bolster the fact that I've landed on the right page.

00:20:37:13 - 00:20:49:02
Unknown
Based on my action. So let's go back to our DevTools and let's rerun that scan.

00:20:49:05 - 00:21:12:02
Unknown
And so we see that the page has a title, and the title has gone up into the browser window. Now, I could have matched it to the other pieces here by using the pipe and other, text. At a minimum, we want to have the meaningful part of the page title be the first thing that's read aloud. So this now passes.

00:21:12:04 - 00:21:36:19
Unknown
Don't have to create a JIRA ticket. This is also an issue that we see pretty pervasively. And this is one of the kind of it's a good, use case in something that is super easy to detect, super easy to fix, and has a pretty negative impact on a, on a user. Right. If I didn't understand where I was, that would not allow me to navigate the site easily.

00:21:36:21 - 00:22:09:22
Unknown
If a page title element is found to be missing, we would log a jury issue with the CCF label. Accessibility descriptive titles AC 0205. We would reference a Wikileaks success criterion of 2.4.2. Page titled that level a the test for language of the page acts will examine the HTML element to see if a language attribute is present, and well-formed acts will only test if a pages language flag is present.

00:22:09:25 - 00:22:30:03
Unknown
It will not test if the language is set correctly. We will frequently see pages that do not have a language declared correctly at Adobe, which is why we included it here in the test page. So here we are with another example of something that happens a lot at Adobe and can have a very negative impact. It's also very easy to fix.

00:22:30:06 - 00:22:57:10
Unknown
So the language of the page would have an impact on a screen reader user, and that the screen reader can read aloud in a language, with the correct pronunciation. And conversely, if it's not there, it's it's very garbled. Let's take a look at the access issues here. I see a HTML element must have lang attribute. If I use the highlight, it's just going to go up to the top of the page, because it's really at the document level.

00:22:57:12 - 00:23:24:13
Unknown
I can do the more information here. You can also see that this is work at 311. I come to my bug reporting page. I can type in 3.1.1. And I see that both language of the page at level A and 3.12 language of parts at level double. They have the same CCF label of accessibility, language determination A-Z 0207.

00:23:24:17 - 00:23:51:13
Unknown
So if for some reason I need to create a general ticket for this, if I can't fix it before committing, or if I'm just doing a page review or something as a QA, I would log the JIRA ticket with the correct CCF label and I would reference language of the page. So here when I go to the inspect element, it's going to go right to the HTML element.

00:23:51:16 - 00:24:11:04
Unknown
And here what I would do is add an attribute that is l a and g lang equals. In this case I have a page that's English. So I would use the language code of n. And I'll rerun that scan.

00:24:11:06 - 00:24:36:15
Unknown
So now I have zero issues. This would be the ideal state to commit code that I would have no issues on my AKS report. Or if I did have a few false positives, I could have some way to document that in my process. To say all issues, that created a barrier to access have been resolved. The only remaining here would be some false positives.

00:24:36:18 - 00:25:05:24
Unknown
So in this way, at this, for this particular test, if this had been a localized document, for example, and was in Spanish, I would have put in lang equals s for, for the Spanish language and so on and so forth. That way the screen reader would read aloud in the correct pronunciation set. If an error is discovered for language of page, we would log an issue in JIRA with the CF label.

00:25:05:27 - 00:25:38:21
Unknown
Accessibility. Language determination AC 0207 and we would reference the Wicca Access criterion 3.1.1 language of the page. At level A, let's review the concepts of automated testing review. Ideally, all issues discovered in automated testing would be called out and resolved prior to committing code. Running automated tests should occur at each stage of development and become a discipline required of all engineers.

00:25:38:23 - 00:25:53:19
Unknown
Tickets logged in JIRA must include the correct CF label, which could be found in the bug reporting entry and the Digital Accessibility Guide. Automated tests are not perfect, but they will help make Adobe digital interfaces more inclusive and accessible to people with disabilities.

