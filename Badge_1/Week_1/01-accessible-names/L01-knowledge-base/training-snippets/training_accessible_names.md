00:00:00:00 - 00:00:35:06
Unknown
This icon only button is a visual depiction of a bell that could be perceived by sighted users. But what will be read aloud by a screen reader to a non sighted user? How will those users understand what this focusable element is in context to the rest of the user interface? If it is engineered correctly, it will read notifications button.

00:00:35:08 - 00:01:06:24
Unknown
However, if the button has no accessible name due to an omission by engineering, the screen reader will simply read button to the non sighted user. Likewise, if a speech input user vocalizes the command click notifications button, the properly engineered button will be clicked by the speech input software. If the button has been incorrectly engineered when the user vocalizes the command click notifications button, nothing will happen on the screen.

00:01:06:27 - 00:01:34:09
Unknown
There are several ways to create and test for accessible names in the digital interface. For example, the accessible name can be created for the inner text of an element like shown here with the sample link or the name Adobe products is created through the enter text node. A screen reader reads this aloud as Adobe products link. The role of the element is determined here by the anchor tag.

00:01:34:11 - 00:02:00:00
Unknown
The accessible name could also be presented to assistive technology through an alternative text attribute on an image. In this case, the alt text creates the accessible name of the image as PDF icon. A screen reader would read this content aloud as PDF icon. Graphic. The role of graphic is created by the image element. In this case. Form inputs can be named by the associated label element.

00:02:00:02 - 00:02:23:18
Unknown
The label for this text field is a visible piece of text in the interface that reads first name. When the input is nested within the label element. The association is created programmatically. A screen reader in this instance would read aloud first name, type text. In instances where there is no visible text to create an accessible name. An Aria label can be used.

00:02:23:21 - 00:02:55:12
Unknown
In this use case. An icon only button relies on the Aria label on the button element. A screen reader will read print button. In cases where visible text or images with text alternatives are present in the user interface. The Aria labeled by attribute can reference those names to create or modify the accessible name for a different element. In this use case, a read more link is used in order to provide more context about the links purpose to a screen reader user.

00:02:55:15 - 00:03:28:06
Unknown
The heading text above the link can be appended to create the accessible name for the anchor element. In this case, a screen reader user would read aloud. Read more. Adobe products link. The design engineering team could choose to use an Aria label instead and have it announced as. Read more about Adobe products link. Whenever possible, that the use of visible text to create the accessible name is preferred, and the accessible name calculation will honor the right label by approach first, in the calculation order.

00:03:28:08 - 00:03:56:05
Unknown
The responsibility for defining accessible names begins in design via blue line annotations as seen here. A designer uses the accessible name annotation in the blue line for a series of icon only buttons in the Unified shell header. The designer specifies the accessible names of each control for the engineer. The engineer is responsible for implementing the accessible name, and the men are most appropriate to the technology used in this case.

00:03:56:12 - 00:04:08:29
Unknown
React spectrum buttons are used, and Aria labels on the button elements provide the accessible name.

00:04:09:01 - 00:04:36:13
Unknown
And accessible name as a short text string that provides information about the purpose of an element and differentiates the element in the digital interface. Accessible names could be created in a variety of ways. The preferred method is to use visible text whenever possible. A designer should specify the accessible name of elements and their hand off to engineering. Engineers should use the most appropriate method of creating accessible names based on the available supports in a given technology.

00:04:36:13 - 00:04:39:04
Unknown
Solution.

