W3C
Understanding WCAG 2.0

Skip to Content (Press Enter)
ContentsIntroPrevious: Guideline 1.1 [Text Alternatives]Next: Guideline 1.2 [Time-based Media]
On this page:

Intent
Examples
Related Resources
Techniques & Failures
Key terms
-Non-text Content:
Understanding SC 1.1.1
1.1.1 Non-text Content: All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. (Level A)

Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)

Time-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)

Test: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.

Sensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.

CAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.

Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.

Intent of this Success Criterion
The intent of this Success Criterion is to make information conveyed by non-text content accessible through the use of a text alternative. Text alternatives are a primary way for making information accessible because they can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. Providing text alternatives allows the information to be rendered in a variety of ways by a variety of user agents. For example, a person who cannot see a picture can have the text alternative read aloud using synthesized speech. A person who cannot hear an audio file can have the text alternative displayed so that he or she can read it. In the future, text alternatives will also allow information to be more easily translated into sign language or into a simpler form of the same language.

Note on CAPTCHA
CAPTCHAs are a controversial topic in the accessibility community. As is described in the paper Inaccessibility of CAPTCHA, CAPTCHAs intrinsically push the edges of human abilities in an attempt to defeat automated processes. Every type of CAPTCHA will be unsolvable by users with certain disabilities. However, they are widely used, and the Web Content Accessibility Guidelines Working Group believes that if CAPTCHAs were forbidden outright, Web sites would choose not to conform to WCAG rather than abandon CAPTCHA. This would create barriers for a great many more users with disabilities. For this reason the Working Group has chosen to structure the requirement about CAPTCHA in a way that meets the needs of most people with disabilities, yet is also considered adoptable by sites. Requiring two different forms of CAPTCHA on a given site ensures that most people with disabilities will find a form they can use.

Because some users with disabilities will still not be able to access sites that meet the minimum requirements, the Working Group provides recommendations for additional steps. Organizations motivated to conform to WCAG should be aware of the importance of this topic and should go as far beyond the minimum requirements of the guidelines as possible. Additional recommended steps include:

Providing more than two modalities of CAPTCHAs

Providing access to a human customer service representative who can bypass CAPTCHA

Not requiring CAPTCHAs for authorized users

Additional information
Non-text content can take a number of forms, and this Success Criterion specifies how each is to be handled.

For non-text content that is not covered by one of the other situations listed below, such as charts, diagrams, audio recordings, pictures, and animations, text alternatives can make the same information available in a form that can be rendered through any modality (for example, visual, auditory or tactile). Short and long text alternatives can be used as needed to convey the information in the non-text content. Note that prerecorded audio-only and prerecorded video-only files are covered here. Live-audio-only and Live-video-only files are covered below (see 3rd paragraph following this one).

For non-text content that is a control or accepts user input, such as images used as submit buttons, image maps or complex animations, a name is provided to describe the purpose of the non-text content so that the person at least knows what the non-text content is and why it is there.

Non-text content that is time-based media is made accessible through 1.2. However, it is important that users know what it is when they encounter it on a page so they can decide what action if any they want to take with it. A text alternative that describes the time-based media and/or gives its title is therefore provided.

For Live Audio-only and live video-only content, it can be much more difficult to provide text alternatives that provide equivalent information as live audio-only and live video-only content. For these types of non-text content, text alternatives provide a descriptive label.

Sometimes a test or exercise must be partially or completely presented in non-text format. Audio or visual information is provided that cannot be changed to text because the test or exercise must be conducted using that sense. For example, a hearing test would be invalid if a text alternative were provided. A visual skill development exercise would similarly make no sense in text form. And a spelling test with text alternatives would not be very effective. For these cases, text alternatives should be provided to describe the purpose of the non-text content; of course, the text alternatives would not provide the same information needed to pass the test.

Sometimes content is primarily intended to create a specific sensory experience that words cannot fully capture. Examples include a symphony performance, works of visual art etc. For such content, text alternatives at least identify the non-text content with a descriptive label and where possible, additional descriptive text. If the reason for including the content in the page is known and can be described it is helpful to include that information.

Sometimes there are non-text exercises that are used to prove you are human. To avoid spam robots and other software from gaining access to a site a device called a CAPTCHA is used. These usually involve visual or auditory tasks that are beyond the current capabilities of Web robots. Providing a text alternative to them would however make them operable by Robots, thus defeating their purpose. In this case a text alternative would describe the purpose of the CAPTCHA, and alternate forms using different modalities would be provided to address the needs of people with different disabilities.

Sometimes there is non-text content that really is not meant to be seen or understood by the user. Transparent images used to move text over on a page; an invisible image that is used to track usage statistics; and a swirl in the corner that conveys no information but just fills up a blank space to create an aesthetic effect are all examples of this. Putting alternative text on such items just distracts people using screen readers from the content on the page. Not marking the content in any way, though, leaves users guessing what the non-text content is and what information they may have missed (even though they have not missed anything in reality). This type of non-text content, therefore, is marked or implemented in a way that assistive technologies (AT) will ignore it and not present anything to the user.

Specific Benefits of Success Criterion 1.1.1:
This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text aloud, present it visually, or convert it to braille.

Text alternatives may help some people who have difficulty understanding the meaning of photographs, drawings, and other images (e.g., line drawings, graphic designs, paintings, three-dimensional representations), graphs, charts, animations, etc.

People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.

People who are deaf-blind can read the text in braille.

Additionally, text alternatives support the ability to search for non-text content and to repurpose content in a variety of ways.

Examples of Success Criterion 1.1.1
A data chart

A bar chart compares how many widgets were sold in June, July, and August. The short label says, "Figure one - Sales in June, July and August." The longer description identifies the type of chart, provides a high-level summary of the data, trends and implications comparable to those available from the chart. Where possible and practical, the actual data is provided in a table.

An audio recording of a speech

The link to an audio clip says, "Chairman's speech to the assembly." A link to a text transcript is provided immediately after the link to the audio clip.

An animation that illustrates how a car engine works

An animation shows how a car engine works. There is no audio and the animation is part of a tutorial that describes how an engine works. Since the text of the tutorial already provides a full explanation, the image is an alternative for text and the text alternative includes only a brief description of the animation and refers to the tutorial text for more information.

A traffic Web camera

A Web site allows users to select from a variety of Web cameras positioned throughout a major city. After a camera is selected, the image updates every two minutes. A short text alternative identifies the Web camera as "traffic Web camera." The site also provides a table of travel times for each of the routes covered by the Web cameras. The table is also updated every two minutes.

A photograph of an historic event in a news story

A photograph of two world leaders shaking hands accompanies a news story about an international summit meeting. The text alternative says, "President X of Country X shakes hands with Prime Minister Y of country Y."

A photograph of a historic event in content discussing diplomatic relationships

The same image is used in a different context intended to explain nuances in diplomatic encounters. The image of the president shaking hands with the prime minister appears on a Web site discussing intricate diplomatic relationships. The first text alternative reads, "President X of country X shakes hands with Prime Minister Y of country Y on January 2, 2009." An additional text alternative describes the room where the leaders are standing as well as the expressions on the leaders' faces, and identifies the other people in the room. The additional description might be included on the same page as the photograph or in a separate file associated with the image through a link or other standard programmatic mechanism.

An audio recording of a press conference

A Web page includes a link to an audio recording of a press conference. The link text identifies the audio recording. The page also links to a text transcript of the press conference. The transcript includes a verbatim record of everything the speakers say. It identifies who is speaking as well as noting other significant sounds that are part of the recording, such as applause, laughter, questions from the audience, and so on.

An e-learning application

An e-learning application uses sound effects to indicate whether or not the answers are correct. The chime sound indicates that the answer is correct and the beep sound indicates that the answer is incorrect. A text description is also included so that people who can't hear or understand the sound understand whether the answer is correct or incorrect.

A linked thumbnail image

A thumbnail image of the front page of a newspaper links to the home page of the "Smallville Times". The text alternative says "Smallville Times".

The same image used on different sites

Different alternatives for an image of the world: An image of the world that is used on a travel site as a link to the International Travel section has the text alternative "International Travel". The same image is used as a link on a university Web site with the text alternative "International Campuses".

An image map

An image of a building floor plan is interactive, allowing the user to select a particular room and navigate to a page containing information about that room. The short text alternative describes the image and its interactive purpose: "Building floor plan. Select a room for more information."

Related Resources
Resources are for information purposes only, no endorsement implied.

Excerpts from the NBA Tape Recording Manual, Third Edition

Inaccessibility of CAPTCHA

All That Malarkey: Accessible Alternatives

456 Berea Street: The Alt and Title Attributes

The Alt and Accessibility

Better Connected, Better Results: Alt Text

Techniques and Failures for Success Criterion 1.1.1 - Non-text Content
Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see Understanding Techniques for WCAG Success Criteria, particularly the "Other Techniques" section.

Sufficient Techniques
Instructions: Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

Situation A: If a short description can serve the same purpose and present the same information as the non-text content:
G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content using one of the following Short text alternative techniques for Situation A :

Short text alternative techniques for Situation A:

ARIA6: Using aria-label to provide labels for objects (ARIA)

ARIA10: Using aria-labelledby to provide a text alternative for non-text content (ARIA)

G196: Using a text alternative on one item within a group of images that describes all items in the group

FLASH1: Setting the name property for a non-text object (Flash)

FLASH5: Combining adjacent image and text buttons for the same resource (Flash)

FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash (Flash)

H2: Combining adjacent image and text links for the same resource (HTML)

H35: Providing text alternatives on applet elements (HTML)

H37: Using alt attributes on img elements (HTML)

H53: Using the body of the object element (HTML)

H86: Providing text alternatives for ASCII art, emoticons, and leetspeak (HTML)

PDF1: Applying text alternatives to images with the Alt entry in PDF documents (PDF)

SL5: Defining a Focusable Image Class for Silverlight (Silverlight)

Situation B: If a short description can not serve the same purpose and present the same information as the non-text content (e.g., a chart or diagram):
G95: Providing short text alternatives that provide a brief description of the non-text content using one of the following Short text alternative techniques for Situation B AND one of the following Long text alternative techniques for Situation B :

Short text alternative techniques for Situation B:

ARIA6: Using aria-label to provide labels for objects (ARIA)

ARIA10: Using aria-labelledby to provide a text alternative for non-text content (ARIA)

G196: Using a text alternative on one item within a group of images that describes all items in the group

FLASH1: Setting the name property for a non-text object (Flash)

FLASH5: Combining adjacent image and text buttons for the same resource (Flash)

FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash (Flash)

H2: Combining adjacent image and text links for the same resource (HTML)

H35: Providing text alternatives on applet elements (HTML)

H37: Using alt attributes on img elements (HTML)

H53: Using the body of the object element (HTML)

H86: Providing text alternatives for ASCII art, emoticons, and leetspeak (HTML)

PDF1: Applying text alternatives to images with the Alt entry in PDF documents (PDF)

SL5: Defining a Focusable Image Class for Silverlight (Silverlight)

Long text alternative techniques for Situation B:

ARIA15: Using aria-describedby to provide descriptions of images (ARIA)

G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content

G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description

G92: Providing long description for non-text content that serves the same purpose and presents the same information

FLASH2: Setting the description property for a non-text object in Flash (Flash)

FLASH11: Providing a longer text description of an object (Flash)

H45: Using longdesc (HTML)

H53: Using the body of the object element (HTML)

SL8: Displaying HelpText in Silverlight User Interfaces (Silverlight)

Situation C: If non-text content is a control or accepts user input:
G82: Providing a text alternative that identifies the purpose of the non-text content using one of the following Text alternative techniques for controls and input for Situation C :

Text alternative techniques for controls and input for Situation C:

ARIA6: Using aria-label to provide labels for objects (ARIA)

ARIA9: Using aria-labelledby to concatenate a label from several text nodes (ARIA)

FLASH6: Creating accessible hotspots using invisible buttons (Flash)

FLASH25: Labeling a form control by setting its accessible name (Flash)

FLASH27: Providing button labels that describe the purpose of a button (Flash)

FLASH29: Setting the label property for form components (Flash)

FLASH30: Specifying accessible names for image buttons (Flash)

FLASH32: Using auto labeling to associate text labels with form controls (Flash)

H24: Providing text alternatives for the area elements of image maps (HTML)

H30: Providing link text that describes the purpose of a link for anchor elements (HTML)

H36: Using alt attributes on images used as submit buttons (HTML)

H44: Using label elements to associate text labels with form controls (HTML)

H65: Using the title attribute to identify form controls when the label element cannot be used (HTML)

SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name (Silverlight)

SL26: Using LabeledBy to Associate Labels and Targets in Silverlight (Silverlight)

SL30: Using Silverlight Control Compositing and AutomationProperties.Name (Silverlight)

Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:
Providing a descriptive label using one of the following Short text alternative techniques for Situation D :

G68: Providing a short text alternative that describes the purpose of live audio-only and live video-only content using one of the following Short text alternative techniques for Situation D :

G100: Providing a short text alternative which is the accepted name or a descriptive name of the non-text content using one of the following Short text alternative techniques for Situation D :

Short text alternative techniques for Situation D:

ARIA6: Using aria-label to provide labels for objects (ARIA)

ARIA10: Using aria-labelledby to provide a text alternative for non-text content (ARIA)

G196: Using a text alternative on one item within a group of images that describes all items in the group

FLASH1: Setting the name property for a non-text object (Flash)

FLASH5: Combining adjacent image and text buttons for the same resource (Flash)

FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash (Flash)

H2: Combining adjacent image and text links for the same resource (HTML)

H35: Providing text alternatives on applet elements (HTML)

H37: Using alt attributes on img elements (HTML)

H53: Using the body of the object element (HTML)

H86: Providing text alternatives for ASCII art, emoticons, and leetspeak (HTML)

PDF1: Applying text alternatives to images with the Alt entry in PDF documents (PDF)

SL5: Defining a Focusable Image Class for Silverlight (Silverlight)

Situation E: If non-text content is a CAPTCHA:
G143: Providing a text alternative that describes the purpose of the CAPTCHA AND G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality

Situation F: If the non-text content should be ignored by assistive technology:
Implementing or marking the non-text content so that it will be ignored by assistive technology using one of the following Techniques to indicate that text alternatives are not required for Situation F :

Techniques to indicate that text alternatives are not required for Situation F:

C9: Using CSS to include decorative images (CSS)

FLASH3: Marking objects in Flash so that they can be ignored by AT (Flash)

H67: Using null alt text and no title attribute on img elements for images that AT should ignore (HTML)

PDF4: Hiding decorative images with the Artifact tag in PDF documents (PDF)

Additional Techniques (Advisory) for 1.1.1
Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

General Techniques for Informative Non-Text Content (Advisory)
Identifying informative non-text content (future link)

Keeping short descriptions short (future link)

Describing images that include text (future link)

Providing a longer description of the non-text content where only a descriptive label is required using a technology-specific technique (for an accessibility-supported content technology) for long description listed above (future link)

Providing different sizes for non-text content when it cannot have an equivalent accessible alternative (future link)

Using server-side scripts to resize images of text (future link)

General Techniques for Live Non-Text Content (Advisory)
Linking to textual information that provides comparable information (e.g., for a traffic Webcam, a municipality could provide a link to the text traffic report.) (future link)

General techniques to minimize the barrier of CAPTCHAs
Providing more than two modalities of CAPTCHAs (future link)

Providing access to a human customer service representative who can bypass CAPTCHA (future link)

Not requiring CAPTCHAs for authorized users (future link)

HTML Techniques (Advisory)
H46: Using noembed with embed (HTML)

Writing for browsers that do not support frame (future link)

Providing alternative content for iframe (future link)

Not using long descriptions for iframe (future link)

Providing redundant text links for client-side image maps (future link)

CSS Techniques (Advisory)
C18: Using CSS margin and padding rules instead of spacer images for layout design (CSS)

Using CSS background, :before or :after rules for decorative images instead of img elements (future link)

Displaying empty table cells (future link)

WAI-ARIA Techniques (Advisory)
Using the ARIA presentation role to indicate elements are purely presentational (future link)

Silverlight Techniques (Advisory)
SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight (Silverlight)

Metadata Techniques (Advisory)
Using metadata to associate text transcriptions with a video (future link)

Using metadata to associate text transcriptions with audio-only content (future link)

EXAMPLE: Providing, in metadata, URI(s) that points to an audio description and a text transcript of a video.

EXAMPLE: Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.

Common Failures for SC 1.1.1
The following are common mistakes that are considered failures of Success Criterion 1.1.1 by the WCAG Working Group.

F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information

F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image

F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur

F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)

F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them

F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology

F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"

F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information

F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative

F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative

Key Terms
CAPTCHA
initialism for "Completely Automated Public Turing test to tell Computers and Humans Apart"

Note 1: CAPTCHA tests often involve asking the user to type in text that is displayed in an obscured image or audio file.

Note 2: A Turing test is any system of tests designed to differentiate a human from a computer. It is named after famed computer scientist Alan Turing. The term was coined by researchers at Carnegie Mellon University. [CAPTCHA]

assistive technology (as used in this document)
hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note 1: functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note 2: Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note 3: The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Example: Assistive technologies that are important in the context of this document include the following:

screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;

screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;

text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;

speech recognition software, which may be used by people who have some physical disabilities;

alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);

alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

name
text by which software can identify a component within Web content to the user

Note 1: The name may be hidden and only exposed by assistive technology, whereas a label is presented to all users. In many (but not all) cases, the label and the name are the same.

Note 2: This is unrelated to the name attribute in HTML.

non-text content
any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language

Note: This includes ASCII Art (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

pure decoration
serving only an aesthetic purpose, providing no information, and having no functionality

Note: Text is only purely decorative if the words can be rearranged or substituted without changing their purpose.

Example: The cover page of a dictionary has random words in very light text in the background.

specific sensory experience
a sensory experience that is not purely decorative and does not primarily convey important information or perform a function

Example: Examples include a performance of a flute solo, works of visual art etc.

text
sequence of characters that can be programmatically determined, where the sequence is expressing something in human language

text alternative
Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.

Example: An image of a chart is described in text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows.

Note: Refer to Understanding Text Alternatives for more information.

TopContentsIntroPrevious: Guideline 1.1 [Text Alternatives]Next: Guideline 1.2 [Time-based Media]
This Web page is part of Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0 (see the latest version of this document). The entire document is also available as a single HTML file. See the The WCAG 2.0 Documents for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the Instructions for Commenting on WCAG 2.0 Documents.

Copyright © 2023 World Wide Web Consortium. W3C® liability, trademark and document use rules apply.