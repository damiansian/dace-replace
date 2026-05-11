00:00:18:01 - 00:00:34:04
Speaker 1
All right. So this is the Adobe Ecom accessibility training that's been created for studio professional owners, which would be content designers and copywriters.

00:00:34:05 - 00:00:38:14
Speaker 1
You do? Okay.

00:00:39:00 - 00:01:09:15
Speaker 1
So on our agenda today. Well, first thing I want to point out is this has been split. The first time I ran the course, it, it the feedback that it was too much in one setting. So we've split it into two sessions. Overall, the objectives here would be for you to have a definition of web accessibility for you to have a very strong knowledge of how to write alternative text descriptions, and when to mark images as decorative.

00:01:10:00 - 00:01:43:11
Speaker 1
How to handle link text and to expand link text with Aria labels. How to judge the contrast of text and important UI elements. How to create structure with headings. And then we'll also look at a full checklist for the topic. Throughout the day I'll be pausing and asking questions. If you would respond to those I appreciate it.

00:01:43:12 - 00:02:01:03
Speaker 1
You can use the react feature here. You could say like or anything like that. And that'll kind of pop up on my screen to let me know, like a pulse check of, how people are taking the information.

00:02:01:05 - 00:02:30:00
Speaker 1
So I will introduce myself. I'm Damian Cyan. I am a staff design accessibility program manager here at Adobe. I work in the, the design organization at Adobe. I've been with the gallery for four years. I've been a user of Adobe products for over 30 years. My first career was in graphic design and marketing communications and advertising agency side.

00:02:30:01 - 00:03:01:07
Speaker 1
I also have a background. I'm sorry. I'm a little, allergy here. So I do have a background in, studio and in production work. Prior to being here at Adobe, I was with Prudential Financial and Princeton University running their accessibility programs. I'm also an adjunct faculty member at Rutgers University, just here in new Jersey, U.S., where I teach an introduction to webinar disability course.

00:03:01:08 - 00:03:27:01
Speaker 1
I have all of the relevant, certifications in the field of digital accessibility from the International Association of Accessibility Professionals. In addition to having those certifications, I help write the body of knowledge for each of those and the, the exam questions for those. This is a photograph of me at the United Nations at the Convention of Rights of Persons with disabilities.

00:03:27:02 - 00:03:52:14
Speaker 1
And I was speaking about the importance of training staff in the field of accessibility. If you've taken a training with, the company called Q, this is the owner of GQ, and she was there with me as well. And, either very interested what I'm saying or very distracted by my forehead shininess. I'm going to be using some tools today.

00:03:52:15 - 00:04:25:12
Speaker 1
There are links to the tools you'll have, the deck I have to wear. It's not important for you to have them on your desktop installed today. But if you do want to, follow along. With the recording or to try it on your own and your own desktop, I have this step by step walkthrough of how to install and use the tools, in addition to all the demonstrations that I'll be doing today.

00:04:25:13 - 00:04:52:04
Speaker 1
So we've put the training into two parts because it was a lot for one single sitting, and people were kind of overwhelmed. So the nice part here is that if we go over some topics, you'll have a chance to go back, to your own work and explore the topic, and then come back on part two with any questions or, examples you want to review.

00:04:52:05 - 00:05:22:09
Speaker 1
So the first thing we need to do in this space is define what accessibility is. So over the years I've worked on kind of paring down the definition, like, the elevator speech. What is digital accessibility? And I've landed on two kind of irreducible, statements. One is that we can't rely on a single human ability to perceive, operate, or understand a digital interface like a double become.

00:05:22:10 - 00:05:42:15
Speaker 1
And two, we cannot block or interfere with a person's assistive technology. And using a digital interface like it has become. I could say that every accessibility ticket and JIRA that we have for adobe.com relates to a violation of one or both of those principles.

00:05:43:00 - 00:06:10:15
Speaker 1
And when we look at a single human ability from that first principle, these are the the four major dimensions of of that topic. We talk about vision, hearing, physical and motor disability and cognition. I'm going to be talking to you nearly exclusively today about vision. Right. And those two principles here is that I cannot assume the level of visual acuity of my end user to use adobe.com.

00:06:10:15 - 00:06:36:09
Speaker 1
And I must ensure, for example, that a screen reader can access the interface of a dotcom. It's not to say that those other pieces aren't relevant to the work that you do. And we captions on our videos, we ensure that the tab order of our, links are in the right order. We have that reduced motion capability with our, animated images, for example.

00:06:36:10 - 00:07:04:08
Speaker 1
But day to day, you don't have any impact or any, you can't introduce any errors in these things, nor could you fix them. This however you can you can both introduce errors and, fix the barriers here. So 90% of what I'm going to show you today is alt text link text contrast and headings. Although these are broken up into two days.

00:07:04:09 - 00:07:25:06
Speaker 1
And specifically when I say vision disability, I'm talking about people who are not sighted, who rely on a screen reader. I'm talking about people with no visual acuity to, would benefit from having, higher contrast in text and important UI elements. And I'm talking about people who are color vision deficient, which is also known as color blind.

00:07:25:07 - 00:07:33:10
Speaker 1
And for them, we're not going to ensure that we're not using color alone to communicate information.

00:07:33:12 - 00:07:56:09
Speaker 1
A solid block. To understand accessibility, we need to first have a good, understanding of what the word disability means. I have on my screen the definition from the Americans Disabilities Act. It's not lost on me that I could have expanded that to an international audience, but it does offer a really good, definition for us to work from.

00:07:56:13 - 00:08:24:05
Speaker 1
And it's saying that a disability is an impairment that limits a major life activity. Or I might say one or more major life activities. And that definition would be, how one might get, disability benefits from the state. It might be how a child receives, accommodation within a school to say that an impairment is, inhibiting their ability in a learning environment.

00:08:24:05 - 00:08:28:13
Speaker 1
For example.

00:08:28:15 - 00:09:01:15
Speaker 1
We can use two of the major theoretical models of disability to further our understanding of what it means to make a website accessible to people with disabilities. The theoretical model on the left is the medical model of disability. And if you're looking at this graphic, you're seeing these words with these radiating lines into the level of the person to say that, a barrier to access on adobe.com for a person with an impairment.

00:09:02:01 - 00:09:11:00
Speaker 1
We would look to say that that's the fault of the impairment, right? That person is something is wrong with them. That's why they couldn't use our website.

00:09:11:01 - 00:09:34:14
Speaker 1
The social model of disability to notice these lines kind of radial radiate out from the person to this, this membrane of our society and that society. That's not built to accommodate the needs of diverse ability. When we think about, the barrier to access that someone may have who has an impairment, who is trying to use adobe.com, and they face that barrier to access.

00:09:34:15 - 00:10:15:12
Speaker 1
We might think that instead of the issue being at the level of the person, it's that the website is in some way of low quality that the website is in some way, Harmful, capable of creating human harm, low performing, non-compliant and non conforming to our domestic laws here in the US, international laws, all over the world and Adobe's policies and largely unmarketable to 20% of the world's population who lives with some form of disability, which is, roughly 800 million people.

00:10:15:13 - 00:10:31:11
Speaker 1
So in this way, we think about a digital interface being broken, imperfect or defective. Right. And but the disability and art occurs at the point of human computer interaction. Right. Where there's this mismatch that's happened. So.

00:10:31:12 - 00:11:05:11
Speaker 1
My question to you is do you feel that the topics that we're going to talk about today about making our websites accessible, align more to the medical model of disability or to that social model of disability using your, react's, capabilities inside of teams so you can give me a surprise face for a medical model or a thumbs up if you think that the work of making our websites is more aligned to the social model of disability.

00:11:05:12 - 00:11:19:02
Speaker 1
Again, I'm looking for for folks to click this react button to let me know that you're live over there. And what do you think? Right. Yeah.

00:11:19:03 - 00:11:43:12
Speaker 1
I would agree with your assessment that it is more aligned to the social model of disability. We do have legal precedent and policy precedent here in the United States. We have the Americans with Disabilities Act, which would state that for a private industry to bar access to a person based on a disability is an act of discrimination and therefore illegal, that would cover a private industry.

00:11:43:12 - 00:12:17:12
Speaker 1
And then our customers in the space of the United States government and our schools here in the US have a, an additional legal obligation under title two of the Ada. That runway with our customers, about why our stuff isn't accessible is is, nearly at its end. And as is their patience with us, and dealing with our kind of, responses to their queries, why aren't your work accessible?

00:12:17:13 - 00:12:41:15
Speaker 1
We don't have a lot more, wiggle room here. We though that the rubber is kind of hitting the road. And, thanks to our friends in Europe who are on the call today. I applaud the fact that the European Accessibility Act, is giving us, for the first time in the world, a regulatory, impetus to make our websites accessible.

00:12:42:00 - 00:13:05:00
Speaker 1
So, yes, there has been a legal precedent where people can sue, especially here in the US for very litigious. Right. So you could sue if you have a barrier to access, you can sue and you would get some relief in the courts. The EAA is the first time where there's going to be proactive regulatory capacity and direct financial fining of companies.

00:13:05:00 - 00:13:42:06
Speaker 1
So that bell bells kind of ringing for Adobe. Finally. I wish it had come without that kind of impetus, but, here we are regardless. That runway is over in three days. So, the, the open and regulatory environment happens on, June 28th. So the Saturday. And lastly, we have a policy here at Adobe that all of our content would be, accessible and we would never want to purposefully bar access for a group of people based on an attribute of their identity.

00:13:42:06 - 00:14:09:00
Speaker 1
That's a very on Adobe thing for us to even contemplate. So hopefully we've gotten more understanding about why we're here, talking about visual accessibility. And the rest of this, is to sessions will be about how we do that work. But I did want to start off how until we talked about why. So what is the role of the studio of content designers and copywriters?

00:14:09:00 - 00:14:35:09
Speaker 1
And this this is my standard ten point checklist for content work. Like CMS, accessibility. So it's very templates. There's only certain things you can and cannot do. So my standard ten point checklist is here. You all have these four things that I think are under your direct control. And this just like I'm going to spend the time talking to you about that.

00:14:35:11 - 00:15:04:04
Speaker 1
When I look at our performance, I look at the accessibility issues that have been logged in JIRA, and I classify those. I see that, you know, one of these issues with as equals, all the rest, more than all the rest of this. So it's imperative two that I look at this with you, these are the things that are the most under your control, and they're also happening the most.

00:15:04:06 - 00:15:13:09
Speaker 1
So what a great opportunity for us to spend some time, learning about this topics.

00:15:13:10 - 00:15:37:13
Speaker 1
It's imperative for me that you all have an understanding of these four topics in these following ways. For alternative text, I need you to walk away understanding that meaningful graphics must have an alternative text description, that decorative images must be hidden from screen reader users, and that our automated tools aren't going to catch, either of those two things.

00:15:37:14 - 00:16:06:11
Speaker 1
Fortunately, I need you to understand that any text that you enter into, layout that looks like a heading, it functions like a heading, has to have an annotation marker that it's an H1 through an H6 within your Figma file. I need you to understand that you are not permitted to skip heading levels going down. You can't go from an H2 to an H4, for example, and that not all of the large text you put into your layout is a heading.

00:16:06:12 - 00:16:35:15
Speaker 1
Some things like subheadings or just paragraphs, we'll go over that. I need you to understand that links, when you set them inside of a paragraph of black coffee, a sentence or a paragraph that you have to have the underline on that. If you're going to do a layout with ambiguous link text like Read More or click here or, learn more by now you have to provide an Aria label that expands that, link text for someone you can't see.

00:16:35:15 - 00:17:08:07
Speaker 1
The screen, and that would be in a Figma file as well. If you're working with Figma or whatever system you hand off your files to, the, the responsibility is with this group to write that and that the Aria labels must start with the visible text. So read more about what they're more about. What? I need you to also understand that if you introduce text into your layout, which you do, it has to be the small text has to be a four and a half, 1 to 1 contrast ratio, and the large text has to be a 3 to 1 contrast ratio.

00:17:08:07 - 00:17:34:14
Speaker 1
And the testing should be done as you're putting the content in and that important graphics that you're putting in like data visualizations, Minecraft, things like that, those have to be a 3 to 1 contrast ratio to this background, and that when you use white text over a gradient or white text over an image, we have a special testing tool at Adobe that can verify if that content is accessible to our standards.

00:17:35:00 - 00:17:40:04
Speaker 1
And if it's not, then you may not use it.

00:17:40:06 - 00:17:50:12
Speaker 1
So that's what we're doing. That's why we're doing it. And now let's talk about the how.

00:17:50:13 - 00:18:15:00
Speaker 1
So for alt text, I need you to understand the user impacts. I, going to demonstrate how a screen reader user interacts with alternative text. I'll talk to you today about, style factors and quality factors of alternative text so you can feel confident when you're writing. I'll talk I'll show you how. I would suggest that you annotate your Figma files.

00:18:15:00 - 00:18:34:07
Speaker 1
There's two methodologies. Or if you have something else, some other way that you deliver your documents to the production team. Stephen, let me know and I'll, I'll work with you on that. And then overall, what your role is and all this. So I'll text the main people who are impacted are people who are on site. It is a screen reader.

00:18:34:08 - 00:18:59:12
Speaker 1
You may also find somebody who is have low vision and they're like right here with the screen there. They may also listen to the screen. This has an impact to low bandwidth. If an image fails to load, the alt text will show up and there is enhanced search engine optimization value to.

00:18:59:13 - 00:19:22:06
Speaker 1
I'm going to go right into a screen reader demonstration. I'm on a mac. I'm going to use the screen reader that comes with the Mac on VoiceOver. You're not expected to know how to use one of these. There are nowhere near as easy to use as you might think they are. They're actually pretty difficult to use, and for some reason, when I'm presenting and sharing my screen, it takes a long time to load.

00:19:22:06 - 00:19:36:06
Speaker 1
This usually pops right up with no, no delay of a presentation effect. Okay. As a screen reader comes online. You're just being silly. Now.

00:19:36:08 - 00:19:41:01
Speaker 2
VoiceOver off.

00:19:41:02 - 00:19:44:07
Speaker 1
Like I'm being told by my screen reader right now.

00:19:44:08 - 00:19:46:03
Speaker 2
VoiceOver on Chrome.

00:19:46:04 - 00:20:06:03
Speaker 1
There you go. So you hear it, and then you're hearing a synthesized voice and it will read anything aloud that's on the screen, including all your files and your email. Whatever you have on your screen can read to you. I'm going to move through, the headings on this, document to get to where we have some images.

00:20:06:04 - 00:20:10:01
Speaker 1
I'm going to use a special key command to to achieve that.

00:20:10:02 - 00:20:34:02
Speaker 2
Heading level one. Heading level two. Heading level two. Heading level two. Heading. Level two. Business heading. Level three. Heading. Level three. Heading le Petit. Heading. Heading le Petit. Head level two. Let us show you the full power of Adobe Business Solutions. You are transforming unselected a link image PGA tour customer story inside.

00:20:34:02 - 00:20:57:15
Speaker 1
Just heard some information that the screen reader presented to me. I'm on an element right now. It is a link. It's also an image that creates a link. Right. So it's that's what the element is, is such as a anchor tag. And inside of it it's an image tag. There is alternative text here that says PGA tour Customer story.

00:20:58:00 - 00:21:11:10
Speaker 2
Visited link image IBM customer story. Link image Prudential customer story. Link image Cisco customer story link image. The Home Depot customer story.

00:21:11:12 - 00:21:36:04
Speaker 1
The screen reader, when it gets to an element, will read the role of that element. The role here is to there's a link and image. When we're writing alternative text, we don't use the word image or graphic in the alt text, because the screen reader will announce that that's your first layer of, of quality when you're writing, alternative text.

00:21:36:06 - 00:21:38:06
Speaker 1
Now, there's an image here. Let's see.

00:21:38:06 - 00:21:39:12
Speaker 2
If visited link.

00:21:39:14 - 00:21:40:15
Speaker 1
What that has to say.

00:21:41:02 - 00:21:49:02
Speaker 2
Link link heading group link embedding link. Learn more. Be B2 padding left improve link heading level.

00:21:49:04 - 00:21:54:05
Speaker 1
Actually doesn't read anything with the screen reader. And we might look at that one second.

00:21:54:07 - 00:21:55:08
Speaker 2
Voiceover off.

00:21:55:11 - 00:22:16:01
Speaker 1
And think that that's an error, right. That I couldn't get to that image. I can see it, but I can't hear it as there are some inequity here that I can see something and someone can't hear it. I want to point out to you that that was done on purpose. I'm going to use the first tool that I reviewed in the very beginning.

00:22:16:01 - 00:22:44:02
Speaker 1
But again, I have the tools linked for you, and I have their, the description of how to install and use them. So I'm going to use this one called images. And this tool is really helpful because it can instantaneously show you all the alternative text has been placed on an existing page, which is excellent. If you are responsible for amending a page right, you're adding new content.

00:22:44:02 - 00:23:09:10
Speaker 1
You might want to go see how it or all the other images on that page handle. And when I put my new content, and how am I harmonizing into that content. And here we could see that it's exposed. What the screen reader heard. Right. Says alt equals PGA tour customer story. And this one says alt equals nothing, which is why the screen reader skipped over it.

00:23:09:11 - 00:23:27:00
Speaker 1
And we're going to talk today about making that decision about why would you mark some images as meaningful, and why would you mark some images as decorative?

00:23:27:01 - 00:23:45:00
Speaker 1
Okay. So you just heard a screen reader, but I'm going to ask you, could you tell me if that was your first time ever hearing a screen reader? Give me a thumbs up. If you're an old pro, why don't you hear them all the time? You could do the squinty smile, and if you want to troll me, you could do, these surprised face.

00:23:45:00 - 00:24:12:04
Speaker 1
Because, I mean, you obviously just heard it. So, Yeah, most people, when they respond to this question, have never heard a screen reader. Thanks very much. Right. So I think it's pretty important for somebody who is writing alternative text to have an understanding of what that does right or doesn't do, as we hear with the decorative, right.

00:24:12:04 - 00:24:38:00
Speaker 1
Look at the issues that we have at Adobe 96, issues were reported that the image should have been marked decorative 23. We're missing out. Turn of the text altogether. 22 is just poorly written and 55 and the system just didn't know if that, kind of works. With your understanding, you could do a thumbs up. If you're surprised by those numbers, you could do that surprised face.

00:24:38:01 - 00:25:04:02
Speaker 1
So when we were reading the alternative text with a screen reader, the screen reader hit the image element and then read aloud a piece of text. There's an expectation here that copywriters are the people who would write that text. This team, people were putting images and, copy into the the layout have the best understanding of why that image was there.

00:25:04:04 - 00:25:22:06
Speaker 1
And what we're asking you to do is just consider a new layer. You've considered people who can see. We're asking you to consider people who cannot see. I got to listen to this so you can't see the image. They need to hear what it is. And I think that, you are the best suited to do that.

00:25:22:08 - 00:25:47:09
Speaker 1
There's a judgment call to make. If there's an image in a layout that offers no value to the user, we can skip over it. But the screen reader right this image, even though it has little pieces of text, keep in context to its surroundings, didn't offer a lot of value. This is the overwhelming case for, the images that we put into static marketing sites.

00:25:47:10 - 00:26:12:03
Speaker 1
They're almost always, of a decorative value. And there's nothing in that image that I need to understand to read the heading, but that body copy and then the call to action, it's not supported directly by the, knowing the content of this image. There are times when we fail to put all text on a graphic like this one.

00:26:12:03 - 00:26:33:00
Speaker 1
So there's a button that says sign in, but it's missing the context of Adobe. Not great. There are times when it gets mis keys or mis applied. So I think this is a copy and paste error by the production team. This should say Creative Cloud. We would not want to say Acrobat has 20 creative apps, right?

00:26:33:01 - 00:26:37:06
Speaker 1
That's misleading.

00:26:37:07 - 00:26:56:15
Speaker 1
We also have a lot of times because I've seen like again, half of here, that's a record that we have just complete gibberish in our that our, alternative text right here. It's just saying card cover photo card cover photo. So if you're blind and you're listening to the screen reader, you're just going to hear that over and over again.

00:26:57:00 - 00:27:23:02
Speaker 1
Back. Great. Here's another Miss Key. This is, a URL that got put into the alternative text. That whole thing would get rid of loud and say image https. I do that. And then we have this condition that I've always seen here at Adobe. These so prevalently where the alternative text for this image is the adjacent heading.

00:27:23:04 - 00:27:50:15
Speaker 1
So this is a, image meet Acrobat AI assistant meet Acrobat AI assistant heading level three. So that's offers no value. And this is a really good. Do you have a rubric about making a decision about this? If your alternative text is the adjacent text, it's decorative. There's no reason to describe it. Let's put that, to the test.

00:27:51:00 - 00:28:31:12
Speaker 1
I have a marquee element, and this image in the marquee was marked decorative. Do you agree with that decision to mark this image as decoration? Yes. A thumbs up. No. The squinty smile or, I don't know, with, surprised face. Do you think that this is the right choice to say a screen reader user does not need to understand the content of that graphic to, understand that this entry is about enterprise technology defining digital experiences or take the call to action to watch the video.

00:28:31:14 - 00:29:06:05
Speaker 1
Yeah. I agree with that assessment. And I have to date, I have never seen an image and a marquee element that requires an alternative text description to take the call to action that wasn't, the marquee. What about the screen reader exercise that I had you do that we did together? I have a tool where, I can gray out all of the images and a layout on a website, and it for me, it helps make the decision if I can turn off all the images.

00:29:06:07 - 00:29:33:15
Speaker 1
And I could still understand the content. Those images are decorative in this instance. This, to me, proves that the, images are meaningful because how would I know? Adobe Experience Cloud is what what what brands are you referring to? Right. The only way I would know that is to have a description of the those images. Right. And those images were all, here.

00:29:34:00 - 00:29:43:00
Speaker 1
Right. So I would need to know PGA, IBM, Prudential, Cisco, data.

00:29:43:02 - 00:30:20:11
Speaker 1
Which is the next slide. In this instance, we had, folks describe all of these icons. And right. And then in this instance, they didn't. I can't call out an error. This. Sorry. This one, they didn't. Right. So here they're saying these are all decorative. And here, by contrast, they're saying no, they're all very meaningful.

00:30:20:12 - 00:30:51:10
Speaker 1
So edit icon edit icon edit icon edit icon share icon share icon. I wouldn't say that, either are completely wrong or completely right. I lean toward this right. If the way I described the graphic is handled in the adjacent text, it's redundant and I choose to not put it in. It also you'll notice, more moving parts leaves us open for more errors.

00:30:51:11 - 00:31:21:01
Speaker 1
So this was a missed key. They copied and pasted from this piece to this piece. And that's where we get that, misleading information inside of a sales pipeline, which is, That not a good look for us? Do you think this is the right alternative text to apply to that graphic? The alternative text here reads Acrobat foil the monarch.

00:31:21:02 - 00:31:45:11
Speaker 1
Is that, the correct answer is that the alt text that you would have written, no thumbs up if you say, yep, that's the alt text. No, that's not, you can do this with this file. Or, you don't know. It's fine to say, well, that's okay. Yes. I would hope you would know that, that shouldn't be the alternative text.

00:31:45:11 - 00:32:11:03
Speaker 1
That's something like behind the scenes, like how we categorize our as that graphic on our server. That means nothing to somebody, outside of our company. And, for one, for two, the way I would have described it would be Adobe Acrobat icon. And then the adjacent text is Adobe Acrobat. So this would be a good candidate to make decorative.

00:32:11:04 - 00:32:44:12
Speaker 1
So how do you tell the next person in line what your intention is here. We can put two. Sorry, I don't have this icon within stigma. We can annotate our design file before it gets handed off, and I have to undo.

00:32:44:14 - 00:33:14:13
Speaker 1
So here is a sample file. And here is a way that I could tell the next person in line that I want this to be Mark decorative. Right. We can use the annotation feature directly in Figma and grab an object and then apply a set of pre fabricated pre formatted annotations to say this is decorative and that's decorative.

00:33:14:13 - 00:33:47:02
Speaker 1
And it's not until we get. Here to the Macy's logo. The first time that I actually want alt text. It's here just to save the word Macy's. We may also use the annotation kit that is provided by the nice folks that CVS who made this beautiful annotation kit. And you can link to say that this is an image and I don't want it to be described right.

00:33:47:04 - 00:34:15:13
Speaker 1
As opposed to, this is an image and I do want it to be described. So in some way the expectation is that the studio group would indicate to the next person in line the content author or global web production team what images must be described, what their descriptions are and versus which images are decorative. And they're maybe back and forth there, right.

00:34:15:14 - 00:34:27:08
Speaker 1
That might seem conversations that need to happen.

00:34:27:10 - 00:34:53:00
Speaker 1
And then the in Mylo they just whatever text is provided by you to them. They write it in this description. If they leave it blank, it comes out as decoration. So every single image in your file that you create has to have the alt text accounted for in one of two ways. One, you're saying it's meaningful. And here's the description that someone who's blind would get to have or no, this doesn't need a description.

00:34:53:00 - 00:35:32:07
Speaker 1
You can market this decorative, content designers and copywriters are the best suited to provide that information. So it's not the responsibility of content authors or web producers. This is not their skill set. Right there. Faithful, faithfully recreating your intentions in the, authoring system. They're not writing or designing. If you have questions about if an image should be marked decorative or the quality of the alt text to your writing, you can go on to this slack thread and ask, professional care whose job it is to deal with the visibility topics for adobe.com.

00:35:32:08 - 00:35:55:11
Speaker 1
Those bookmark lists that I showed you would be really good tools to have, as well in your personal. Before I move over to headings, do you have any questions from the group here? Alt text on what it is, what the expectations are.

00:35:55:12 - 00:36:26:11
Speaker 1
Staying hydrated, heading any piece of text that you introduce into your layout that looks and functions like a heading has to have a, a demarcation or an annotation of an H1 through an H6, and you can't skip heading levels going down, can't go from an H2 to an H4. For example. So we'll listen to, how screen readers interact with headings and the, massive navigation capabilities that they get.

00:36:26:12 - 00:36:57:12
Speaker 1
When it's done correctly, we'll talk about, how to create the document structure through properly nested heading outlines. We'll talk about how and why we need to avoid skipping levels going down, and finally how to annotate your files. Or the next step in line. People who are impacted here screaming are users, right? I'm going to show you that they can pull up like a virtualized table of contents to move through the page.

00:36:57:13 - 00:37:28:12
Speaker 1
Cognition. Right? As we chunk content into, groups, it creates relationships. And it's a benefit for everybody, especially, lightning, the cognitive load and then well-formed pages with proper hierarchical structures perform better with search engine optimization. So I'm going to show you what I think is the best example that I could find. I've had to, at least at the time I checked the last time I ran this, this training list.

00:37:28:12 - 00:37:34:04
Speaker 1
So I'm going to put my screen reader on again.

00:37:34:05 - 00:37:38:05
Speaker 2
VoiceOver on Chrome Adobe Acrobat vertical.

00:37:38:06 - 00:37:42:12
Speaker 1
The first thing I'm going to do is pull up a virtualized table of contents.

00:37:42:13 - 00:37:49:07
Speaker 2
Window spots, menu application links, menu headings, menu.

00:37:49:08 - 00:37:51:05
Speaker 1
You can see we have a lot of headings.

00:37:51:06 - 00:37:53:05
Speaker 2
Finding competitors menu.

00:37:53:09 - 00:37:59:05
Speaker 1
But what if I wanted to know all. Well, first of all, what's the main purpose of this page?

00:37:59:05 - 00:38:05:03
Speaker 2
Level one headings. Menu one. Do it all with Acrobat.

00:38:05:04 - 00:38:08:14
Speaker 1
Now what if I wanted to know the main sections of this page.

00:38:09:00 - 00:38:20:14
Speaker 2
On item two Acrobat. It's how over 5 million companies get work done. 2 to 2 a day to shop for, two for business, two for education.

00:38:20:15 - 00:38:35:06
Speaker 1
Now, if I were a non sighted person buying, software, an education setting, I would have. What a massive benefit you've given me by creating this structure of this page as such, I could jump right to it.

00:38:35:07 - 00:38:37:03
Speaker 2
Heading level two for edge.

00:38:37:05 - 00:38:42:15
Speaker 1
And get right to that content that I need. Immediately. So that was a little deep.

00:38:43:00 - 00:38:44:13
Speaker 2
Well go display of comfort.

00:38:44:15 - 00:38:47:03
Speaker 1
And I can also, jump around in the page.

00:38:47:06 - 00:39:04:11
Speaker 2
And home headings. Menu. Level one heading level one. Do it all with that heading. Level two Acrobat heading level three. Ask. Adding level three edit text and images right in Acrobat heading level three create PDFs from other file types.

00:39:04:12 - 00:39:09:10
Speaker 1
I might be really interested in that if I want to learn more, right?

00:39:09:12 - 00:39:17:13
Speaker 2
Visited PDFs and E-signatures can link learn more about creating PDF files you are current voiceover off.

00:39:17:14 - 00:39:36:09
Speaker 1
So all those things are possible when we've created the the structure, correctly as opposed to, I'm sorry if anyone here works on community. Last time I looked at it, it wasn't working right. Maybe. Haha. It looks very different now. Maybe I will be proved wrong. Let's go.

00:39:36:11 - 00:39:41:07
Speaker 2
VoiceOver on Chrome headings menu. Perfect. You are currently.

00:39:41:08 - 00:39:44:05
Speaker 1
They fixed it and it looks really good.

00:39:44:06 - 00:39:49:14
Speaker 2
Two product three electric light bulb on item two product community.

00:39:50:00 - 00:39:51:03
Speaker 1
Yeah.

00:39:51:04 - 00:39:58:09
Speaker 2
On item three three Adobe Express. No items in level three had closing level three VoiceOver off.

00:39:58:10 - 00:40:21:15
Speaker 1
This was my example of like what would happen if we didn't have it there, but it's been addressed since then and it works great. I'm happy to be proven. To have a presentation effect like that. So the types of issues we see at Adobe, there'll be content that should be a heading. That's not Marcus a heading, content that should not be a heading or it's like a subheadings but marked as a heading.

00:40:22:03 - 00:40:46:08
Speaker 1
And then, when we skip levels going down. Here's an example of content that should be a heading. Related overviews. Should be an H2. And then all these threes would relate up to the related. Oh, this. This is an instance where paragraph text was marked as a heading and where other. So this should be an H2 apps.

00:40:46:10 - 00:40:56:12
Speaker 1
And then these three apps would be H3 is that nest under that. And then these would just be supporting paragraphs which would not be headings at all.

00:40:56:13 - 00:41:16:05
Speaker 1
And then we have mismatched relationships here. This should be an H2. And all these should be three eight. Right now this is a three. And there's just a bunch of two. That doesn't make any sense when I'm, building a mental model of the page because I'm listening to it. I have no idea what you're trying to communicate to me with this.

00:41:16:07 - 00:41:25:03
Speaker 1
That presentation visually is not going to get communicated programmatically to the screen or using.

00:41:25:05 - 00:41:51:14
Speaker 1
169 issues or, because we skip heading levels going down 125 times, there were headings that should have been marked as headings that weren't. And then, other, that kind of meet your expectations about what would happen at Adobe or is that a surprise to you? You can share a reaction if you like.

00:41:51:15 - 00:42:17:04
Speaker 1
So functionally, behind the scenes in HTML, we have an element that's an H1 through an H6. And that's all we're allowed to use. We can't use H7. This is should never be an issue for, a marketing site anyway. But just for your edification. When we jump from an H1 to an H3, the outline level is broken, right?

00:42:17:04 - 00:42:38:06
Speaker 1
So this would be better served as an H2. And it can be exposed and tools like this. So we'll see if this issue, one of the challenges of doing these presentations that people see me call them out and then they go fix it. So we'll see if this is still broken. I'm going to use a tool in my browser.

00:42:38:07 - 00:42:46:01
Speaker 1
I can link to it in the deck. I've gone over how to install it in the video.

00:42:46:03 - 00:43:15:06
Speaker 1
They fixed it. Yeah. So we have an H1 and then it'll go to the tools and the three. Yeah. So no longer an issue here. This is completely fixed and perfect. Now. The temporal nature of, at one point it was broken. You could see I have the I have the receipt. Again, the screen reader user pulls up a list of those headings.

00:43:15:06 - 00:43:40:04
Speaker 1
They can, refine that list by hitting the number one. I want to see what that main topic is. Hit number two I see all the sections. Number three all the stuff sections. So if it's a page that they visit regularly or if they have that specific need, again like I'm looking for the education side so I can navigate to that heading.

00:43:40:05 - 00:43:58:05
Speaker 1
Yeah. So this is kind of what that was, that is that error like going from 1 to 3. This is kind of how that would appear. Like I am reading the list of the headings I go 1 to 3 and I'm thinking, well that I did the heading level to before this not come over was like an error.

00:43:58:06 - 00:44:05:08
Speaker 1
So I need to go spend time reading the page because, it creates confusion.

00:44:05:10 - 00:44:15:05
Speaker 1
So we'll do some exercises here. Let me make this a little larger so you can see it better.

00:44:15:06 - 00:44:31:15
Speaker 1
Yeah. So do we think that this is done correctly? You can give me a thumbs up for a yes, squinty smile for a no or a surprised face for, I don't know, is this the correct heading structure for this content?

00:44:32:01 - 00:44:36:06
Speaker 1
What do you think?

00:44:36:07 - 00:44:40:13
Speaker 1
That's. I'm sure.

00:44:40:14 - 00:45:10:15
Speaker 1
Well, this this definitely creates a relationship. Right. And these types of, elements on the page are almost always section breaks, which would be the ideal candidate for a two heading. 1 or 2. And these are all questions, FAQs that relate up to that headings. So this is actually done perfectly. So that would be a yes. That's a good one.

00:45:11:01 - 00:45:39:13
Speaker 1
And this is how it would appear with that tool a heading map tool. You could see the relationship. Right. We got that little disclosure triangle. Headings create this hierarchy and this structure on a page. And the nice thing about that tool is I can expose that to you as well. Right. So I know that I could see these relationships, forming on the page.

00:45:39:14 - 00:46:01:10
Speaker 1
What about here? I've got this word Photoshop as a heading level three. And then start with Photoshop. Amazing. Will follow. Is the heading level three. Is that done correctly? Thumbs up. No squinty smile. I don't know, surprised face. What do you think?

00:46:01:11 - 00:46:30:12
Speaker 1
Anyone still there? Okay. Speaking to the void, do you think that this is the correct heading structure for the. This is what you would like mark up and hand off to, the production team because this is a big text. Is that a heading? Yeah. Now, first of all, this piece of text should be here at all, because what does this say that says Photoshop, right.

00:46:30:13 - 00:46:57:06
Speaker 1
Either you know, one of these two things would need to go away. The text would go away and, having two headings, there's just no structure that's being created here. So we would not have a heading with nothing underneath it. Right. No paragraph tags, no call to action, nothing. So this is done incorrectly. And here you can kind of get like there's they're at the same level.

00:46:57:06 - 00:47:07:09
Speaker 1
There's no structure that's created with this at all. Does it mean anything to have that mark as a heading. So that's done incorrectly.

00:47:07:10 - 00:47:33:15
Speaker 1
All right. So, just for sake of time, I'm going to just answer the questions I have here. And, Joey community, they had marked that marked as an H2. There's no value in marking that text. It's not first of all, it's not text. That's an image. And it's there's no reason to mark that as a heading doesn't offer any value.

00:47:34:00 - 00:47:52:15
Speaker 1
Okay. And then we can also see here that they went from a one to a three. So this would obviously be better serve as a two right to create the structure of the page. Here's the main topic of the page. And here are the sections of the page. Yes these three would be more of a sub section right?

00:47:53:01 - 00:48:17:08
Speaker 1
We wouldn't. Why would you go from one to subsection three. There's obviously a need to demarcate this as the section heading. Here. This one's a little tricky. We have this heading level two. Again. It looks when we have these things that break up a page like this, let's this horizontal page break where there's a heading.

00:48:17:10 - 00:48:45:09
Speaker 1
That's a really obvious indicator that that's a section, because that's feels like a section. It should sound like a section. Right. And this section contains, headings, under each one of these tabs. There is no relationship here though. Programmatically, visually. I got an idea that these this is subordinate here, but programmatically I wouldn't hear that. So this is done incorrectly.

00:48:45:09 - 00:48:50:12
Speaker 1
This should be an H3.

00:48:50:13 - 00:49:04:08
Speaker 1
Right. So this would be correct where this is a section. And these topics relate up to that section.

00:49:04:09 - 00:49:53:08
Speaker 1
So how do you annotate headings in your paper file. But the two ways that I would suggest would be either the CVS toolkit, right where you just draw a line to the heading, you say H1, h2, x2 x3, I'll say h2 H3h3 okay. Or you may use the annotations that are available within. Take them right where you select a piece of text, and then you can say, this should be H1 heading level one heading level to.

00:49:53:09 - 00:50:21:04
Speaker 1
Right okay. Number three. So within those files you could just grab that element and the layers panel or I'm selecting it and the artboard. And then use the annotation tool that comes with Figma newly released this year. So either one will do. And any way that you communicate it to the next step is I'm open to ideas.

00:50:21:04 - 00:50:53:12
Speaker 1
If this isn't reflective of the work at your workflow, then we could talk about how we could make that reflective of your workflow. In my little they're using Microsoft Word. They use the headings. So heading level heading one equals h1 h2 h3 h4, h5 h6. Again there's no h7. There are times where you might need to indicate an override to an existing heading level.

00:50:53:13 - 00:51:19:07
Speaker 1
As part of, like, component. A here, you could see that if you really wanted this text to look like that. Still, now, I don't want to make this an H3 because it looks different. It's possible that I can get my H3 programmatically. And then we could just apply a class to make it look like H2.

00:51:19:08 - 00:51:34:03
Speaker 1
That's completely fine. So if I put the heading structure using the headings, that tool I don't care what it looks like, I just care what it sounds like. You.

00:51:34:05 - 00:52:12:03
Speaker 1
So to summarize headings create the structure on page. They create relationships with other content on the page. They should be nested in a logical and hierarchical structure. And we should use overrides. If component has a natural heading level associated with it. Okay. That's the time. In part two we will talk about links, contrast the overall checklist, and then we'll have like an exit ticket for you all to do as an activity before we depart or part ways.

00:52:12:04 - 00:52:34:04
Speaker 1
I have availability for questions if anyone would like to stay on and ask questions or have a conversation. But I'm going to stop the recording at this time.

00:52:34:06 - 00:52:58:00
Speaker 1
All right, again, if you don't have any questions or want to chat, you can log off. And I'll see you next time. If you do want to stay on, I'm here for you. Hey, man. Oh, you're on mute. Sorry. I was just saying. Thank you. I've got a Segway, but, that's very informative. Thank you all right.

00:52:58:00 - 00:53:05:07
Speaker 1
Thank you for your feedback, I appreciate it. Cheers. No. Bye. Bye, guys. Bye bye.

00:53:05:08 - 00:53:07:10
Speaker 1
All right, y'all have a great day.

