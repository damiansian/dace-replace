00:00:00:04 - 00:00:07:08
Unknown
part two, we'll talk about link test text color contrast the overall checklist and I'll give you the exit ticket.

00:00:08:02 - 00:00:12:12
Unknown
All right.

00:00:12:13 - 00:00:50:07
Unknown
Hyperlinks need to describe where they will take a user. Links like Learn more need to be expanded with an Aria label to provide that context. And from a design perspective, we need to ensure that underlines are used in the correct way when creating links. So in this section, I'll go over how screen readers interact with, with link text, and I'll talk about how when to apply Aria labels, what the requirements are, and how to visually differentiate, link text from its surrounding.

00:00:50:09 - 00:01:08:14
Unknown
And then we'll, we'll spend some time talking about how to annotate, your extension text on a link. So how would you implement and Figma, for example, the annotation marker for an audio label on a link.

00:01:08:15 - 00:01:23:06
Unknown
So this is what it would look like in code. I don't need you to know how to code, but I need I want you to have an understanding of when you put this annotation and it's going to be used by the production artist. This is how it's going to come out at the other side. So we have a link.

00:01:23:08 - 00:01:53:03
Unknown
The visible text says learn more and it can continue to say that. And then we have an expansion here that says learn more. And then it dresses the adjacent heading text. Learn more personalization at scale. Or I could say learn more about personalization at scale. That choice is yours. But leave an error erring on the side of, less words.

00:01:53:05 - 00:02:27:11
Unknown
This impacts people who are screen reader users. Link text also impacts people who are calibration deficient or colorblind, and it has an impact on search engine optimization. So let's do, another really great example of when link text has been handled. Really well. I'm going to turn on my screen reader once again. VoiceOver on Chrome Adobe for business.

00:02:27:13 - 00:02:54:08
Unknown
And I'm going to do a navigation technique used by some screen reader users where they can navigate the page by understanding the links that are on the page headings menu. Now, in the last lesson we talked about how we can navigate by headings. We can also navigate form landmarks, frames, windows, but links menu links. And here we see, learn more.

00:02:54:09 - 00:03:18:06
Unknown
Agenti I learn more Adobe Studio learn more. Experienced manager, no more brand concierge. If we hadn't expanded that link text, this page would say learn more. Learn more. Learn more. Learn more. Bye now. Bye now. When we have generic call to actions, we need to expand them out so we can have an understanding of what are we going?

00:03:18:06 - 00:03:45:13
Unknown
What's going to happen when I click on this link. Where's it going to take me the words learn more. Don't give me that information at all. Right. I've learned more about what promotion to voiceover off. And so when we look at these learn more links. Learn more learn more. Learn more. As I had exposed you before, there is additional text that is being handled here.

00:03:45:13 - 00:04:15:04
Unknown
And the Aria label is you do know how to do what I just did. I'm just giving you an understanding of the connective tissue. So if you specify has expanded text, the production artist takes it and implements it. It shows up with a screen reader. The way I demonstrate it to you, because it's available on the. One challenge here, we don't have a set of tools that really easily exposes that information.

00:04:15:06 - 00:04:42:15
Unknown
I am, working on that myself because I have cursor I and that would look something like. Like this, where I could have a way in a website for you to go look at how the links were already being handled. Let's say you're coming into a page and you're expanding on the page or adding content to a page, or you're working on a page.

00:04:42:15 - 00:05:01:08
Unknown
It's very similar to something else, and you know that it's been done well. I check with a project manager or a product manager and say, you know, is that a page I can use for reference? I'll say, yes, it's been audited and it's been corrected. And I can tell you that this is one of them. And I could see here the expansion.

00:05:01:08 - 00:05:27:15
Unknown
Learn more Adobe Experience Manager learn more, brand concierge, learn more, about this or that. And basically what it's doing is it's activating the learn more, which is always going to be exposed first. And your Aria label, always the visible text first. Learn more by now, do this right. And then about what? And then what we normally do is we're going to pick up the adjacent heading or in this case the advanced.

00:05:28:02 - 00:05:41:07
Unknown
Yeah. The largest text next to it. So learn more Adobe Commerce. Learn more. Just that the other. So this has been done really well.

00:05:41:08 - 00:06:02:00
Unknown
All right. We'll just keep moving. So I have a little bit of a tighter schedule. So the areas that we see here when we don't underlying link text. So I'll get into that exactly when and where to do it. But that's one of the issues we see ambiguous link text where it's read more, learn more by now.

00:06:02:01 - 00:06:13:05
Unknown
And then instances where we do expand out those generic, link text, but we do it incorrectly.

00:06:13:06 - 00:06:23:05
Unknown
So here is an example. Well, I just I could just look at it right here. What we have is.

00:06:23:06 - 00:06:48:13
Unknown
Blue text that indicates this is interactive text, but it's set inside of black text. The only way that I can understand that one piece of text is interactive and versus the other is through being able to perceive the color blue. We can't rely on a single human ability, in that way when we built our websites. So we would need to underline that text.

00:06:48:14 - 00:07:16:09
Unknown
We have this view, all links. And they're just if I pull up a link of all, a list of all the links on the page, it will say, do you all view all of you all instead of view all tutorials, view all articles. Maybe I'll stop getting there. That part of oh, sorry about that. And then instances here where we've gone and expanded the link text, but we've done so incorrectly.

00:07:16:10 - 00:07:33:11
Unknown
Right. So this expansion says view Creative Cloud plans and pricing. And the visible text is view plans and pricing. So, if we wanted to expand on that, I'd have to say view plans and pricing Creative Cloud.

00:07:33:12 - 00:08:03:13
Unknown
We have 106 times that were identified where we failed to underline links 252 times where we didn't provide, expansions. Generic link text and 34 instances when we did expand it, but we didn't put the visible text upfront. So again, this is how our link will work. I have a link. I have the visible text that's presented to a sighted user, and then I have this invisible text.

00:08:03:13 - 00:08:30:03
Unknown
When we are asking that you all are the group of people to do this expansion. So instead of learn more, learn more, then about to tell them where they're going to go, they're going to can learn more about personalization at scale. I demonstrated to you that the screen reader user could pick up a list of all the links, and they can move through them, just like they kind of headings.

00:08:30:05 - 00:08:57:00
Unknown
And in an instance like this, we have call to actions convert now convert now convert now convert. Now I had pulled up by that list of links without changing, without expanding that link text, it would say convert now link convert now link convert. Now think now. The better way to handle this is to keep the the visible text as part of the Aria label and just draw upon the adjacent heading.

00:08:57:02 - 00:09:26:15
Unknown
So convert now word to PDF, convert now jpg to PDF, convert now to PDF, convert now Excel to PDF. This isn't a very difficult, concept of being. We could probably get better at just building this into the component itself, right? If you have a call to action, you know, be nice if it was just programmatically happening that the that link, that generic call to action was going to get expanded upon.

00:09:27:01 - 00:09:38:14
Unknown
That's not there today. So we are expecting that the people who are putting these together, the text and the images and the call to action, are going to provide the extension text.

00:09:39:00 - 00:10:05:02
Unknown
This is the example of the really well done. We have the there are more links here. They concatenated learn more with the most like heading like Json text. So it gives the this the non cited user tabbing through the interface or pulling up that list of links, the understanding what they're going to learn more about.

00:10:05:03 - 00:10:33:01
Unknown
I have here an instance where we used the color blue alone to indicate which pieces of text were a link, which pieces of text in this sentence or this paragraph, this block. We're interactive, and I can go click. The only way that we have done that in this scenario is with the color blue. When you have links that are set inside of a block of non-interactive text, you must underline them.

00:10:33:03 - 00:10:55:04
Unknown
There's no ifs, ands, or buts. It's not required to do for, aspects that are outside of that that so let me see if I can open this activity, or at least certain I have. Both scenarios on the same page.

00:10:55:05 - 00:11:15:13
Unknown
So all of these links that are blue here would need to have underline these links. Do not. But these links are links that you can, you know, you're not creating the left real navigation. Right. This is something happening programmatically. But if you're entering content into a page and you're writing link text inside of a block, so a sentence or a paragraph, you have to underline this.

00:11:15:13 - 00:11:41:04
Unknown
These are all in error. And if I. Turn the page into grayscale I would ask you to which which of those pieces of text are links. So what we've done is we've relied on a single human ability to create a single point of failure. And that's not something that we could do. So underline your links.

00:11:41:06 - 00:12:11:09
Unknown
Here is an example of a Learn More or link that they did, the expansion text on. But you can see they didn't include the visible text. So their Aria label says create a project and import a clip link, explore Premiere Pro and panels link learn editing skills link work with graphics and titles. Link. It's. We're almost there.

00:12:11:10 - 00:12:22:12
Unknown
The Aria label just need to start off with the first two visible words. So put your CTA upfront and the link expansion text.

00:12:22:14 - 00:12:49:09
Unknown
All right, so I have some questions here for you. The Aria label here reads sign into express with your business profile. Now to activate your complimentary membership opens in a new window. Is that the proper expansion text for this link? Give me a thumbs up if you think that the answer is yes. Give me a squinty smile if you think the answer is no or, a surprised face.

00:12:49:09 - 00:12:52:12
Unknown
If you don't know.

00:12:52:13 - 00:13:19:12
Unknown
All right, so Steven took the plunge first. And you are correct. Steven, I appreciate that. We in this instance, activate your complimentary membership. Wouldn't need an Aria label, right, because it's already, it's already very explicit about what that means. If there were five of those on the same page. Okay. Right. But this is not ambiguous. Link text.

00:13:19:14 - 00:13:39:08
Unknown
That is very clear. Yeah. I'm going to activate my membership. If there were more than one membership, then in context, we might need an Aria label. The only thing that I do like here is that they said at the end opens a new window. So if this were. Activate your complimentary membership opens in a new window. That would be cool.

00:13:39:09 - 00:14:03:14
Unknown
Okay. So right now it's not right. Should we underline these links? Give me a thumbs up as you think the answer is yes. These need underlines. No. So with smile, I don't know, Surprise face. Do you think these links in this instance need to be underlined? Yes, they need to be underlined. And again, if I didn't underline them, this is the.

00:14:03:15 - 00:14:22:03
Unknown
Yeah. What we do is we turn things gray, remove all the color for this test. It tells me immediately if I've used color to communicate information. And in this way I have I'm saying that these pieces of text are interactive. And the way that I said that is with color alone. So that's not what we need to be doing.

00:14:22:03 - 00:14:40:14
Unknown
We need to be, providing underline. Would you add an Aria label to learn how here you can give me, thumbs up for yes, sweetie, smile for no or I don't know.

00:14:40:15 - 00:15:05:14
Unknown
That's what's tricky. Okay? Okay. We got a yes. So I like where you're coming from, Steven, that this is. We shouldn't leave that as our link text. But here's what I would challenge you. This is like it hurts when I do this. Don't do that. Don't put I learned like I understand why you're using your call to action links as part of your, established components, but don't do it here.

00:15:05:15 - 00:15:33:07
Unknown
Write it out. If you're the person doing the writing, tell them. So. In this instance, team admins can learn how to grant access. That's the link, right? Just expand what the link text is. We don't have to put an Aria label in in this one. So you're right, Steven. It needs to be extended. But the way you expand it in this instance, when you're just doing your writing, it's just to write clear, link text.

00:15:33:10 - 00:15:50:11
Unknown
Right. We have to use that other way when you have to call to action links. Right. You're beholden to use those CTAs that way by now and learn more. You don't have an option here. You do. So when you have the freedom and flexibility, just write it out correctly.

00:15:50:12 - 00:16:15:02
Unknown
Yeah. Learn how to grant users access would be the link text. So you're mostly right Steven, what about these links? Do I add underlines to these links? Thumbs up to yes. Split this part for now, or it's completely okay to say I don't know. Maybe your thoughts.

00:16:15:03 - 00:16:37:13
Unknown
Have some yeses. Okay, so it wouldn't hurt to add underlines here, but I can't call it out as a defect. But I have a list of links. This is not set in a block of other content. There's. When they stand alone like this, it is okay to leave without underlines. Now why would you want some links under page?

00:16:37:14 - 00:16:58:07
Unknown
In the content that you're creating to be underlined versus not. So I like where you're coming from with your responses. Like saying yes, we should underline them and go for it, but I won't be able to give you a ticket that demands that you do it. Okay, so this is the oddity with underlining. If the links stand out alone like this, it's okay to not have them underlined.

00:16:58:08 - 00:17:12:12
Unknown
But yeah, it's good for the views. It's good for the gander. If you've got other areas where you've underlined the links that are of your writing, I would, I would underline them all. But you're not obligated to.

00:17:12:14 - 00:17:42:06
Unknown
So I should say not necessarily not the word. No, you can do, you can grab the, an element inside of your Figma file, and you can use the, natural annotation system inside of Figma, or you can use that CVS annotation toolkit that I, provided as an example. And you'll get the, along with a deck.

00:17:42:06 - 00:18:08:03
Unknown
You'll also get the Figma file. So you can reference that. And that has the entire annotation set on there. So it has headings, links, images. And that should be it. So it's got everything you need. And this will be set up in there too. So you can see I've got the headings, I've got the Aria labels that go on things.

00:18:08:05 - 00:18:49:01
Unknown
When someone and Milo gets that annotation, they put the visible text first and then they add a pipe, and then they add the, the specified, Aria label expansion text that you provide. And why I do this all the time. Right. You don't really need to know exactly how that happens. I just want to show you again, I think it's important that you understand when you put something as an annotation, what happens after it gets the production artists, they do this and ends up on that website, as a piece of code, and then it's available to the screen reader.

00:18:49:01 - 00:18:54:15
Unknown
So that's like that rancher. That's the work that you're doing.

00:18:55:01 - 00:19:17:07
Unknown
Just as a summary here, link text must be provided by copywriters, including any Aria labels. So if you're writing, if you're adding the call to action, you owe us the Aria label that expands it. Or you could write it out correctly if you're writing it into a block of text content designers must determine if a link requires underlining or not.

00:19:17:08 - 00:19:39:07
Unknown
You can use that gray scale test to check your work links that have the same name, the same text, but go to different destinations. Will always need the Aria label. If I have more than one by now, I certainly need it. But if you have even a single by now, what? By what? What am I buying? So expand it out.

00:19:39:08 - 00:20:03:03
Unknown
And then you have to start the Aria label with the visible text, whatever that visible text is. This can be confusing. Sometimes you should ask if you have questions. There's a channel with a dedicated subject matter expert who will answer your question any time when they are out. I have unofficially agreed to be the person who looks after it.

00:20:03:05 - 00:20:09:13
Unknown
So if you have something that's a rush and you can't get Ahold of anyone else, they could. You could ping me.

