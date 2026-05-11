1
00:00:01,937 --> 00:00:02,687
Damian Sian: Landmark.

2
00:00:05,937 --> 00:00:09,437
Damian Sian: So what I've done here is to
take the Adobe Gen. studio and I

3
00:00:09,437 --> 00:00:10,937
Damian Sian: made a code pen out of it.

4
00:00:12,500 --> 00:00:15,312
Damian Sian: And it's just pure HTML
semantics. In this code pen.

5
00:00:16,937 --> 00:00:22,562
Damian Sian: And what we see here are the
landmark regions of this

6
00:00:22,562 --> 00:00:23,437
Damian Sian: content.

7
00:00:24,000 --> 00:00:25,625
Damian Sian: I have the banner which we
heard.

8
00:00:26,312 --> 00:00:28,187
Damian Sian: I have this navigation region.

9
00:00:28,875 --> 00:00:35,562
Damian Sian: I have the main region and a sub
NAV region. What I did here is I

10
00:00:35,562 --> 00:00:36,500
Damian Sian: use this.

11
00:00:37,687 --> 00:00:42,500
Damian Sian: Chrome extension and that will
visually highlight the landmarks

12
00:00:42,500 --> 00:00:45,937
Damian Sian: in a in a web interface which is
really cool.

13
00:00:45,937 --> 00:00:49,750
Damian Sian: So if you're starting with
something existing and you want

14
00:00:49,750 --> 00:00:53,375
Damian Sian: to see what the existing
landmarks are, you can run that

15
00:00:53,375 --> 00:00:57,312
Damian Sian: tool and you can know that. Oh,
I'm only fixing something or

16
00:00:57,312 --> 00:01:00,062
Damian Sian: doing something in the main
region, right?

17
00:01:00,562 --> 00:01:01,875
Damian Sian: So you'll know that that's
there.

18
00:01:03,000 --> 00:01:06,062
Damian Sian: At the end of the day, landmarks
are really just a bunch of

19
00:01:06,062 --> 00:01:06,625
Damian Sian: containers.

20
00:01:07,125 --> 00:01:08,312
Damian Sian: That whole content in them.

21
00:01:09,875 --> 00:01:14,125
Damian Sian: And the the values are for a
screen reader user is that I can

22
00:01:14,125 --> 00:01:17,062
Damian Sian: navigate by those regions those
landmarks.

23
00:01:18,750 --> 00:01:22,687
Damian Sian: If I wanted to skip to the main
section, which is a common

24
00:01:22,687 --> 00:01:26,437
Damian Sian: navigation feature for screen
reader users because I've

25
00:01:26,437 --> 00:01:30,187
Damian Sian: defined what the main landmark
is now I can skip to it.

26
00:01:32,312 --> 00:01:35,812
Damian Sian: And that's a valuable tool to
have, considering there are 15

27
00:01:35,812 --> 00:01:37,312
Damian Sian: tab stops before the main.

28
00:01:38,062 --> 00:01:41,937
Damian Sian: So if I wanted to get right to
the main section, I can navigate

29
00:01:41,937 --> 00:01:45,625
Damian Sian: right to it, or if I know that I
need to get to one of these

30
00:01:45,625 --> 00:01:49,437
Damian Sian: areas because I've defined it
now, I can use it if they're not

31
00:01:49,437 --> 00:01:51,875
Damian Sian: defined, I don't have a
navigation cap.

32
00:01:54,375 --> 00:01:57,750
Damian Sian: And we wouldn't want to rely on
engineering to just know to do

33
00:01:57,750 --> 00:02:00,437
Damian Sian: this without your instruction
about how to do it.

34
00:02:02,187 --> 00:02:04,437
Damian Sian: So with all that, let's get into
it.

35
00:02:06,562 --> 00:02:09,562
Damian Sian: If you're in the training file,
which I really hope you are, if

36
00:02:09,562 --> 00:02:11,500
Damian Sian: you're not, then just be good.
Watch but.

37
00:02:13,062 --> 00:02:17,500
Damian Sian: The page that's called landmarks
dash before we're going to do

38
00:02:17,500 --> 00:02:21,625
Damian Sian: the work of adding landmark
annotations here. Also know if

39
00:02:21,625 --> 00:02:25,937
Damian Sian: you are in the if you do have
the training file available to

40
00:02:25,937 --> 00:02:29,750
Damian Sian: you. I have a before and after
for each one of these.

41
00:02:30,187 --> 00:02:34,187
Damian Sian: So if you get stuck or lost or
just anything in between, you

42
00:02:34,187 --> 00:02:37,000
Damian Sian: can see what it looks like when
it's done.

43
00:02:39,000 --> 00:02:41,187
Damian Sian: But right now I wanna get some
hands on mice.

44
00:02:41,187 --> 00:02:44,000
Damian Sian: Hands on keyboards and start
getting this work done.

45
00:02:46,000 --> 00:02:50,125
Damian Sian: So to do that, I'm first gonna
grab the topmost region of this

46
00:02:50,125 --> 00:02:53,875
Damian Sian: interface, and I've made it a
little bit easier for you.

47
00:02:53,875 --> 00:02:54,875
Damian Sian: I named the layer.

48
00:02:56,437 --> 00:02:59,187
Damian Sian: You're not expected to name
layers in this process, but if

49
00:02:59,187 --> 00:03:01,000
Damian Sian: you do, there is a net benefit
to you.

50
00:03:03,375 --> 00:03:08,000
Damian Sian: So I have the layer called
banner light and I'm going to

51
00:03:08,000 --> 00:03:13,125
Damian Sian: come to my tool my accessibility
plugin for Stark and I'm going

52
00:03:13,125 --> 00:03:18,375
Damian Sian: to use the landmark annotations
and I'm going to select from the

53
00:03:18,375 --> 00:03:19,187
Damian Sian: drop down.

54
00:03:21,562 --> 00:03:24,687
Damian Sian: Header which is synonymous for
banner.

55
00:03:28,562 --> 00:03:29,687
Damian Sian: Who is in this fire?

56
00:03:31,375 --> 00:03:32,937
Damian Sian: Did I not duplicate this file
correctly?

57
00:03:34,125 --> 00:03:34,750
Damian Sian: To get in here.

58
00:03:36,500 --> 00:03:40,812
Damian Sian: Anyway, so I'm gonna click the
the the word header. Now I could

59
00:03:40,812 --> 00:03:43,875
Damian Sian: see a couple things that
occurred in my file.

60
00:03:45,437 --> 00:03:50,562
Damian Sian: Number one, I now have this
layer called stark annotations

61
00:03:50,562 --> 00:03:55,812
Damian Sian: and it has a unique numeric
identifier that I can toggle on

62
00:03:55,812 --> 00:04:00,562
Damian Sian: and off. If I open it up, I can
see that it produced.

63
00:04:02,125 --> 00:04:03,750
Damian Sian: The banner, excuse me.

64
00:04:03,750 --> 00:04:08,312
Damian Sian: It produced the annotation and
it produced the marching ants

65
00:04:08,312 --> 00:04:12,625
Damian Sian: based on and connected to the
actual object in the layers

66
00:04:12,625 --> 00:04:17,250
Damian Sian: panel. So that would have been a
very manual task in our old.

67
00:04:17,812 --> 00:04:21,437
Damian Sian: Blue line annotations set up so
this happened kind of

68
00:04:21,437 --> 00:04:25,500
Damian Sian: automatically right where it
just found the object, drew the

69
00:04:25,500 --> 00:04:27,937
Damian Sian: stuff we needed and made the
layer.

70
00:04:29,500 --> 00:04:31,625
Damian Sian: It also put this thing in here
called the sidebar.

71
00:04:33,500 --> 00:04:37,312
Damian Sian: But there's nothing under
landmarks. When I look at the

72
00:04:37,312 --> 00:04:41,687
Damian Sian: sidebar, which is OK, we're not
going to get anything to occur

73
00:04:41,687 --> 00:04:45,375
Damian Sian: inside of the sidebar with
landmarks until we give an

74
00:04:45,375 --> 00:04:49,750
Damian Sian: accessible name to a landmark
and or put some notes about that

75
00:04:49,750 --> 00:04:50,375
Damian Sian: landmark.

76
00:04:51,500 --> 00:04:55,625
Damian Sian: So let's go ahead and do the
next landmark. We know this is a

77
00:04:55,625 --> 00:04:58,562
Damian Sian: navigation, so I'm going to say
in my list.

78
00:04:59,375 --> 00:04:59,625
Damian Sian: NAV.

79
00:05:01,500 --> 00:05:02,687
Damian Sian: And then click add.

80
00:05:04,250 --> 00:05:06,750
Damian Sian: Again, I've got the marching
ants. I've got the.

81
00:05:08,375 --> 00:05:09,875
Damian Sian: The annotation marker as well.

82
00:05:11,625 --> 00:05:13,125
Damian Sian: If I'm looking at my.

83
00:05:15,937 --> 00:05:17,625
Damian Sian: My stark annotations layer.

84
00:05:17,625 --> 00:05:20,875
Damian Sian: Here I see that I have a second.

85
00:05:22,375 --> 00:05:22,437
Damian Sian: Piece.

86
00:05:24,437 --> 00:05:24,812
Damian Sian: Right.

87
00:05:25,687 --> 00:05:27,375
Damian Sian: And again, I could turn it on
and off.

88
00:05:27,375 --> 00:05:31,625
Damian Sian: Again, I did not get anything in
the landmarks piece in the

89
00:05:31,625 --> 00:05:35,750
Damian Sian: sidebar though, and I wouldn't
until I come to this newly

90
00:05:35,750 --> 00:05:40,250
Damian Sian: created piece here in the the
tool and click on the edit icon.

91
00:05:42,375 --> 00:05:44,437
Damian Sian: When I have more than one.

92
00:05:46,000 --> 00:05:46,875
Damian Sian: Landmark type.

93
00:05:47,312 --> 00:05:50,687
Damian Sian: It's incumbent upon me to give
it differentiating names.

94
00:05:52,375 --> 00:05:54,250
Damian Sian: In this case, I'm just going to
write the word site.

95
00:05:56,812 --> 00:05:59,937
Damian Sian: And as a note, this isn't
required for you, but for

96
00:05:59,937 --> 00:06:03,312
Damian Sian: training purposes I like to say
that this screen reader.

97
00:06:04,875 --> 00:06:05,187
Damian Sian: Will read.

98
00:06:06,750 --> 00:06:07,437
Damian Sian: Site navigation.

99
00:06:10,312 --> 00:06:14,750
Damian Sian: When I click done, nothing
changed about the artwork here,

100
00:06:14,750 --> 00:06:19,375
Damian Sian: but now I have something in the
sidebar and the reason I have

101
00:06:19,375 --> 00:06:24,187
Damian Sian: that is this is now consumable
by someone who doesn't have this

102
00:06:24,187 --> 00:06:24,750
Damian Sian: plugin.

103
00:06:26,437 --> 00:06:30,250
Damian Sian: So we can't assume that everyone
in our workflow is going to have

104
00:06:30,250 --> 00:06:33,375
Damian Sian: the stark plug in tool to have
this information here.

105
00:06:34,250 --> 00:06:38,187
Damian Sian: So somebody using this as a flat
design essentially can say,

106
00:06:38,187 --> 00:06:42,312
Damian Sian: well, that's the header region.
This is the NAV region and this

107
00:06:42,312 --> 00:06:44,750
Damian Sian: one's going to read site
navigation.

108
00:06:46,312 --> 00:06:50,625
Damian Sian: And I can make the correlation
based on this text to here in

109
00:06:50,625 --> 00:06:53,625
Damian Sian: the layers file. The layers
panel, right?

110
00:06:53,625 --> 00:06:56,000
Damian Sian: So I could say, oh, that object.

111
00:06:56,562 --> 00:07:01,562
Damian Sian: Has that landmark and this piece
of additional metadata to it.

112
00:07:03,437 --> 00:07:05,500
Damian Sian: Alright, let's continue.

113
00:07:06,437 --> 00:07:07,750
Damian Sian: I wanna grab the main region.

114
00:07:09,312 --> 00:07:11,750
Damian Sian: Shockingly, I'm going to choose
the main landmark.

115
00:07:13,000 --> 00:07:16,312
Damian Sian: No notes or names required,
right? 'cause. There's just

116
00:07:16,312 --> 00:07:19,250
Damian Sian: there should just be one main in
your your file.

117
00:07:20,062 --> 00:07:22,750
Damian Sian: That could be a lot of Navs,
right?

118
00:07:23,250 --> 00:07:24,687
Damian Sian: There's one main there's one
banner.

119
00:07:26,250 --> 00:07:28,000
Damian Sian: And let's talk about the second
NAV.

120
00:07:28,312 --> 00:07:30,000
Damian Sian: This is our secondary
navigation.

121
00:07:31,625 --> 00:07:32,687
Damian Sian: Going to come here to NAV.

122
00:07:33,500 --> 00:07:34,312
Damian Sian: Click add.

123
00:07:35,875 --> 00:07:40,687
Damian Sian: And here I'm going to define
this as page and the screen.

124
00:07:42,812 --> 00:07:46,187
Damian Sian: The Screen screen reader will
read.

125
00:07:47,812 --> 00:07:48,625
Damian Sian: Page navigation.

126
00:07:51,500 --> 00:07:52,062
Damian Sian: So what happens?

127
00:07:52,062 --> 00:07:55,625
Damian Sian: This screen reader will
essentially concatenate the the

128
00:07:55,625 --> 00:07:59,187
Damian Sian: name that you put in and then
read the landmarks on your

129
00:07:59,187 --> 00:08:02,187
Damian Sian: handset, read the name, and then
the landmark.

130
00:08:02,437 --> 00:08:06,625
Damian Sian: So for the name, we keep it
simple by just putting the thing

131
00:08:06,625 --> 00:08:07,187
Damian Sian: we want.

132
00:08:07,187 --> 00:08:08,187
Damian Sian: To what?

133
00:08:08,187 --> 00:08:11,625
Damian Sian: I don't want to put into this is
page navigation as the name

134
00:08:11,625 --> 00:08:14,375
Damian Sian: 'cause it would read page
navigation navigation.

135
00:08:15,437 --> 00:08:17,062
Damian Sian: Site navigation navigation.

136
00:08:17,062 --> 00:08:18,687
Damian Sian: And that's not what we want.

137
00:08:20,500 --> 00:08:21,687
Damian Sian: So that work is complete.

138
00:08:21,812 --> 00:08:27,125
Damian Sian: I have in my tool. I can see all
my my landmarks, the landmarks

139
00:08:27,125 --> 00:08:32,312
Damian Sian: that have names and notes are
exposed directly in the sidebar.

140
00:08:33,062 --> 00:08:35,687
Damian Sian: There's a lot of manual
processes that have been

141
00:08:35,687 --> 00:08:39,062
Damian Sian: alleviated by having this all
inside of a tool. Creating that

142
00:08:39,062 --> 00:08:42,125
Damian Sian: legend, for example, was
something that you'd have to do

143
00:08:42,125 --> 00:08:42,750
Damian Sian: separately.

144
00:08:44,312 --> 00:08:47,500
Damian Sian: And then there was no
programmatic connection between

145
00:08:47,500 --> 00:08:50,625
Damian Sian: the object and the layers panel
and the annotation.

146
00:08:50,625 --> 00:08:51,687
Damian Sian: Now there is.

147
00:08:52,750 --> 00:08:54,562
Damian Sian: So cool stuff.

148
00:08:56,062 --> 00:08:57,187
Damian Sian: So that's landmarks.

149
00:08:57,187 --> 00:09:00,562
Damian Sian: And just so you know, when you
get this deck, everything that I

150
00:09:00,562 --> 00:09:02,437
Damian Sian: just talked about is in this
deck.

151
00:09:04,062 --> 00:09:06,125
Damian Sian: Right, all the things I said are
on the deck.

152
00:09:06,125 --> 00:09:09,062
Damian Sian: They're also in the
accessibility guide, both in

153
00:09:09,062 --> 00:09:10,125
Damian Sian: text and in video.

154
00:09:13,937 --> 00:09:14,750
Damian Sian: Headings.

155
00:09:17,125 --> 00:09:18,875
Damian Sian: I come here to the headings
before.

156
00:09:22,562 --> 00:09:22,937
Damian Sian: So.

157
00:09:24,062 --> 00:09:28,687
Damian Sian: Nope. First I have to read what
headings are so headings create

158
00:09:28,687 --> 00:09:32,812
Damian Sian: a structure in your user
interface that groups pieces of

159
00:09:32,812 --> 00:09:34,062
Damian Sian: content together.

160
00:09:34,625 --> 00:09:38,750
Damian Sian: It helps people who can't see
the interface create a mental

161
00:09:38,750 --> 00:09:42,625
Damian Sian: model of the structure of the
interface. What pieces of

162
00:09:42,625 --> 00:09:45,562
Damian Sian: content relate to other pieces
of content?

163
00:09:46,312 --> 00:09:48,250
Damian Sian: What's the hierarchy of
information?

164
00:09:49,125 --> 00:09:52,437
Damian Sian: How does it does the nesting of
the heading level impact the

165
00:09:52,437 --> 00:09:54,875
Damian Sian: meaning of the content that I'm
listening to?

166
00:09:56,312 --> 00:09:59,375
Damian Sian: All that's available to somebody
who can't see the content.

167
00:10:00,875 --> 00:10:05,625
Damian Sian: When you define what the heading
structure should be, without it,

168
00:10:05,625 --> 00:10:09,062
Damian Sian: all the content is just there
with no structural

169
00:10:09,062 --> 00:10:10,062
Damian Sian: relationships.

170
00:10:11,750 --> 00:10:12,562
Damian Sian: So in this interface.

171
00:10:14,312 --> 00:10:18,562
Damian Sian: We're saying that these three
buttons relate to the word

172
00:10:18,562 --> 00:10:23,250
Damian Sian: references that the main heading
of this entire page is called

173
00:10:23,250 --> 00:10:24,312
Damian Sian: Adobe Max 2024.

174
00:10:25,875 --> 00:10:29,500
Damian Sian: That this piece of text relates
to that heading and that all of

175
00:10:29,500 --> 00:10:31,875
Damian Sian: these text inputs relate to that
heading.

176
00:10:34,562 --> 00:10:37,875
Damian Sian: There was no special
hierarchical relationship that

177
00:10:37,875 --> 00:10:41,812
Damian Sian: was necessary to create this
content to that content, in my

178
00:10:41,812 --> 00:10:42,312
Damian Sian: opinion.

179
00:10:42,312 --> 00:10:43,687
Damian Sian: But your opinion may differ.

180
00:10:43,687 --> 00:10:45,687
Damian Sian: You might say, well, Dave,
that's completely incorrect.

181
00:10:46,312 --> 00:10:49,500
Damian Sian: That should have been the three
that relates up to the two that

182
00:10:49,500 --> 00:10:52,500
Damian Sian: relates up to the one and you
would be correct because you're

183
00:10:52,500 --> 00:10:55,562
Damian Sian: the content authors, you're the
content designers, you're the

184
00:10:55,562 --> 00:10:56,375
Damian Sian: visual designers.

185
00:10:56,625 --> 00:10:57,750
Damian Sian: It's your choice.

186
00:10:58,437 --> 00:10:59,687
Damian Sian: You don't want to leave it to
me.

187
00:11:00,437 --> 00:11:04,062
Damian Sian: Because I would choose an occams
razor and just find the quickest

188
00:11:04,062 --> 00:11:05,750
Damian Sian: way and so will an engineer so.

189
00:11:07,375 --> 00:11:11,500
Damian Sian: This experience is best served
by the people that I'm speaking

190
00:11:11,500 --> 00:11:14,562
Damian Sian: to right now, so let me show you
how to do it.

191
00:11:17,687 --> 00:11:19,750
Damian Sian: I would first start by grabbing
a piece of text.

192
00:11:22,187 --> 00:11:22,437
Damian Sian: Oops.

193
00:11:23,125 --> 00:11:23,937
Damian Sian: My doc out of there.

194
00:11:25,500 --> 00:11:27,312
Damian Sian: And then come to the headings
annotation.

195
00:11:29,062 --> 00:11:31,312
Damian Sian: And I can see that I have a list
of H1 through H6.

196
00:11:31,625 --> 00:11:34,125
Damian Sian: This is the HTML specification.

197
00:11:34,500 --> 00:11:38,500
Damian Sian: There is no H7 for example and
H7 will be a paragraph.

198
00:11:40,187 --> 00:11:42,875
Damian Sian: So based on that, I would start
with.

199
00:11:43,500 --> 00:11:45,875
Damian Sian: This is not the heading level
one, right?

200
00:11:45,937 --> 00:11:47,500
Damian Sian: This page isn't called
references.

201
00:11:49,062 --> 00:11:53,000
Damian Sian: This page is called Adobe Max
2024, so I would start with the

202
00:11:53,000 --> 00:11:54,625
Damian Sian: next logical piece as a 2.

203
00:11:57,562 --> 00:12:01,125
Damian Sian: Now I could see that in my file
I have the marker for H2.

204
00:12:01,125 --> 00:12:02,937
Damian Sian: I do not have a sidebar.

205
00:12:04,187 --> 00:12:08,812
Damian Sian: There is no notes or names that
are required for these, so

206
00:12:08,812 --> 00:12:13,062
Damian Sian: there's nothing else would go
possibly into a sidebar.

207
00:12:14,625 --> 00:12:17,125
Damian Sian: And somebody who doesn't have
the plug in could just look at

208
00:12:17,125 --> 00:12:19,687
Damian Sian: the numerical values associated
with this and not have to have

209
00:12:19,687 --> 00:12:20,875
Damian Sian: that additional understanding.

210
00:12:22,500 --> 00:12:25,437
Damian Sian: The next piece of text that I
see is a heading is the main

211
00:12:25,437 --> 00:12:25,812
Damian Sian: heading.

212
00:12:28,625 --> 00:12:31,062
Damian Sian: And I will say that is my H1.

213
00:12:35,000 --> 00:12:37,937
Damian Sian: Now this piece of content
relates up to that. Basically

214
00:12:37,937 --> 00:12:41,125
Damian Sian: all the other content, all the
other headings will relate up

215
00:12:41,125 --> 00:12:41,687
Damian Sian: to, right.

216
00:12:41,687 --> 00:12:43,812
Damian Sian: So we're talking about nesting
and hierarchy.

217
00:12:44,500 --> 00:12:47,062
Damian Sian: I'm going to go to an H2 as my
next heading.

218
00:12:50,312 --> 00:12:55,062
Damian Sian: You might say, Damian, that H2
doesn't look anything like that

219
00:12:55,062 --> 00:12:55,312
Damian Sian: H2.

220
00:12:56,875 --> 00:13:01,812
Damian Sian: What I'm talking about is a
semantic H2, not the visual CSS

221
00:13:01,812 --> 00:13:03,187
Damian Sian: styling of an H2.

222
00:13:04,875 --> 00:13:05,125
Damian Sian: OK.

223
00:13:05,125 --> 00:13:06,000
Damian Sian: You're styling.

224
00:13:06,500 --> 00:13:10,562
Damian Sian: Your presentation is separate
from the semantics, right?

225
00:13:10,562 --> 00:13:13,750
Damian Sian: The Screen reader user cannot
see that those two things don't

226
00:13:13,750 --> 00:13:14,312
Damian Sian: look alike.

227
00:13:15,250 --> 00:13:19,500
Damian Sian: They can hear if they serve the
same purpose and adhere they do.

228
00:13:22,000 --> 00:13:26,375
Damian Sian: And here now you can make an
argument that's at H2. You might

229
00:13:26,375 --> 00:13:28,312
Damian Sian: also say no, that's a three.

230
00:13:29,312 --> 00:13:31,750
Damian Sian: So I have to get rid of that,
right?

231
00:13:32,750 --> 00:13:34,812
Damian Sian: Both are equally correct. It's
your choice.

232
00:13:36,625 --> 00:13:40,812
Damian Sian: In the training file, just for
to avoid confusion here, I did

233
00:13:40,812 --> 00:13:44,375
Damian Sian: say user two right? Because I
don't see any special

234
00:13:44,375 --> 00:13:48,750
Damian Sian: relationship that's created from
that heading to that this stuff

235
00:13:48,750 --> 00:13:52,625
Damian Sian: is obviously all about the
e-mail guidelines. So that is

236
00:13:52,625 --> 00:13:55,687
Damian Sian: clearly the heading for that.
What level it.

237
00:13:55,687 --> 00:13:56,437
Damian Sian: At is up for debate.

238
00:13:58,375 --> 00:14:00,437
Damian Sian: But this work would be
considered complete, right?

239
00:14:00,437 --> 00:14:03,062
Damian Sian: Anything that's visually styled
to look like a heading.

240
00:14:04,625 --> 00:14:07,875
Damian Sian: It creates meaning in the
document that I'm now

241
00:14:07,875 --> 00:14:11,562
Damian Sian: communicating that meaning to
the screen reader user.

242
00:14:13,312 --> 00:14:16,437
Damian Sian: I'm giving them a way to
navigate this content and to

243
00:14:16,437 --> 00:14:19,687
Damian Sian: build and construct a mental
model of this content. How

244
00:14:19,687 --> 00:14:23,250
Damian Sian: things relate to each other,
what is the structure? There it

245
00:14:23,250 --> 00:14:23,437
Damian Sian: is.

246
00:14:32,062 --> 00:14:35,125
Damian Sian: Sorry I don't have the same
level. Kinda specify focus

247
00:14:35,125 --> 00:14:35,437
Damian Sian: order.

248
00:14:39,687 --> 00:14:42,125
Damian Sian: Let's look at the keyboarding of
this interface.

249
00:14:43,687 --> 00:14:44,937
Damian Sian: Obviously I'm starting with
that.

250
00:14:44,937 --> 00:14:47,437
Damian Sian: We look, remember that all the
way back to the beginning of the

251
00:14:47,437 --> 00:14:48,062
Damian Sian: training, right?

252
00:14:48,062 --> 00:14:51,687
Damian Sian: The first thing that was in
document object model is also

253
00:14:51,687 --> 00:14:55,625
Damian Sian: the first thing in the Tab tab
order so that Adobe Gen. Studio

254
00:14:55,625 --> 00:14:59,312
Damian Sian: Button is the first thing that
we would be able to tap to.

255
00:15:00,937 --> 00:15:05,000
Damian Sian: As I go from left, tabbing goes
from left to right and then top

256
00:15:05,000 --> 00:15:08,750
Damian Sian: to bottom and we get this Z
pattern that starts to occur in

257
00:15:08,750 --> 00:15:09,312
Damian Sian: the work.

258
00:15:10,562 --> 00:15:12,437
Damian Sian: So there's six items in the
banner.

259
00:15:13,562 --> 00:15:17,500
Damian Sian: There are 8 items here in the
site navigation.

260
00:15:19,000 --> 00:15:20,625
Damian Sian: I will come up to this piece
that says.

261
00:15:22,437 --> 00:15:22,562
Damian Sian: Back.

262
00:15:23,750 --> 00:15:28,125
Damian Sian: I forget the text that's hidden
right now and then come over

263
00:15:28,125 --> 00:15:30,187
Damian Sian: here to the invite and more.

264
00:15:30,375 --> 00:15:34,187
Damian Sian: And then I will come to this set
of controls, which is something

265
00:15:34,187 --> 00:15:34,500
Damian Sian: that.

266
00:15:36,062 --> 00:15:40,250
Damian Sian: Can be confusing for us when
we're doing our blue line

267
00:15:40,250 --> 00:15:43,625
Damian Sian: annotations that that is a
single tap step.

268
00:15:45,312 --> 00:15:49,500
Damian Sian: That when I got to that I would
then use my arrow keys because

269
00:15:49,500 --> 00:15:49,750
Damian Sian: the.

270
00:15:51,875 --> 00:15:55,375
Damian Sian: The pattern that's being used
here is a tap group.

271
00:15:58,000 --> 00:16:02,937
Damian Sian: Then I would come down here. My
last tap stop would be 25.

272
00:16:04,500 --> 00:16:06,312
Damian Sian: So let's go document that.

273
00:16:06,312 --> 00:16:10,687
Damian Sian: Let's build a specification that
shows our engineering partners

274
00:16:10,687 --> 00:16:14,437
Damian Sian: what we intended to be the
keyboard experience for this

275
00:16:14,437 --> 00:16:15,125
Damian Sian: interface.

276
00:16:19,125 --> 00:16:20,562
Damian Sian: I start by grabbing my first
item.

277
00:16:22,812 --> 00:16:27,750
Damian Sian: Then I come to focus order and
say add item and we can see it

278
00:16:27,750 --> 00:16:28,437
Damian Sian: puts A1.

279
00:16:29,875 --> 00:16:35,312
Damian Sian: Above the and to the left of the
object. It's also created our

280
00:16:35,312 --> 00:16:40,625
Damian Sian: sidebar, but again it's left the
focus order empty because we

281
00:16:40,625 --> 00:16:44,312
Damian Sian: don't have any notes about it
yet we will.

282
00:16:44,750 --> 00:16:47,062
Damian Sian: That will be only one of these
requires a note.

283
00:16:48,875 --> 00:16:50,125
Damian Sian: And from here it's pretty
simple.

284
00:16:50,125 --> 00:16:51,937
Damian Sian: I'm just grabbing an object and
saying add.

285
00:17:02,250 --> 00:17:06,937
Damian Sian: Right. So those are all the six
items there, the 8 items here, I

286
00:17:06,937 --> 00:17:11,375
Damian Sian: do wish this tool would allow
you to select multiple items in

287
00:17:11,375 --> 00:17:11,687
Damian Sian: the.

288
00:17:13,187 --> 00:17:16,500
Damian Sian: Layers panel and just click add
and just you know, push them all

289
00:17:16,500 --> 00:17:16,625
Damian Sian: in.

290
00:17:20,500 --> 00:17:20,875
Damian Sian: A lot of.

291
00:17:23,000 --> 00:17:23,875
Damian Sian: Looking to get this done.

292
00:17:26,250 --> 00:17:31,312
Damian Sian: Right. So tab stop 15 has a jump
here, right?

293
00:17:31,312 --> 00:17:33,312
Damian Sian: But I would come over to the
invite button.

294
00:17:34,312 --> 00:17:35,375
Damian Sian: That's kinda like the first.

295
00:17:36,937 --> 00:17:38,125
Damian Sian: Not 100% logical.

296
00:17:41,500 --> 00:17:42,562
Damian Sian: Focus path management.

297
00:17:44,312 --> 00:17:48,562
Damian Sian: And then I'm gonna grab this
entire tab group and I'm going

298
00:17:48,562 --> 00:17:53,187
Damian Sian: to say add item for tap stop 18
and this is the first time that

299
00:17:53,187 --> 00:17:55,812
Damian Sian: I'm gonna come here to my edit
icon.

300
00:17:56,312 --> 00:18:00,375
Damian Sian: I'm gonna put a note saying this
is a single tab stop.

301
00:18:04,000 --> 00:18:05,437
Damian Sian: With Arrow key operation.

302
00:18:10,312 --> 00:18:10,500
Damian Sian: Now.

303
00:18:12,062 --> 00:18:16,125
Damian Sian: For you to know, as a designer
or content author that this is a

304
00:18:16,125 --> 00:18:19,375
Damian Sian: single tab stop might be a
confusing piece for you.

305
00:18:19,500 --> 00:18:23,562
Damian Sian: And I think this also exposes
one of the important parts of

306
00:18:23,562 --> 00:18:27,437
Damian Sian: the blue line annotation
process, and that is that this

307
00:18:27,437 --> 00:18:31,250
Damian Sian: is often going to be a
conversation between you and the

308
00:18:31,250 --> 00:18:35,437
Damian Sian: engineering group. In fact, for
me to create this sample for

309
00:18:35,437 --> 00:18:37,187
Damian Sian: you, I spoke to engineers.

310
00:18:38,000 --> 00:18:41,375
Damian Sian: And they gave me guidance that I
wasn't aware of and we landed on

311
00:18:41,375 --> 00:18:41,625
Damian Sian: this.

312
00:18:42,187 --> 00:18:46,187
Damian Sian: Together and I think it's still
smarter for us to have the

313
00:18:46,187 --> 00:18:48,187
Damian Sian: conversation in Figma, right?

314
00:18:48,187 --> 00:18:50,687
Damian Sian: I'd rather take an eraser to the
drawing board than a

315
00:18:50,687 --> 00:18:52,875
Damian Sian: sledgehammer hammer to the
construction site.

316
00:18:54,437 --> 00:18:54,937
Damian Sian: Affordability.

317
00:18:56,625 --> 00:18:58,250
Damian Sian: Time to make changes.

318
00:18:58,375 --> 00:19:01,875
Damian Sian: The agileness, the nimbleness
that I have here rather than

319
00:19:01,875 --> 00:19:05,312
Damian Sian: encoding is this is a smarter
place for us to have these

320
00:19:05,312 --> 00:19:06,125
Damian Sian: conversations.

321
00:19:08,937 --> 00:19:09,250
Damian Sian: Alright.

322
00:19:11,625 --> 00:19:13,375
Damian Sian: A little low on time, so I'm
gonna move quickly.

323
00:19:20,500 --> 00:19:21,937
Damian Sian: I should land on 25.

324
00:19:24,562 --> 00:19:29,250
Damian Sian: Awesome again. Naming your
layers has a really nice benefit

325
00:19:29,250 --> 00:19:29,625
Damian Sian: here.

326
00:19:30,312 --> 00:19:32,875
Damian Sian: This would not be your
experience if you're just

327
00:19:32,875 --> 00:19:34,312
Damian Sian: clicking and dragging over.

328
00:19:35,875 --> 00:19:39,500
Damian Sian: Spectrum components, it would
just say like text field, text

329
00:19:39,500 --> 00:19:43,000
Damian Sian: field, text field large. You
know, so naming as a nice net

330
00:19:43,000 --> 00:19:43,500
Damian Sian: benefit.

331
00:19:45,312 --> 00:19:47,937
Damian Sian: Speaking of creating names.

332
00:19:49,500 --> 00:19:53,937
Damian Sian: All the pieces that were
interactive controls in this

333
00:19:53,937 --> 00:19:58,937
Damian Sian: interface that had an icon but
not a visible text label, and

334
00:19:58,937 --> 00:20:02,500
Damian Sian: the image that was here need to
be defined.

335
00:20:04,375 --> 00:20:07,500
Damian Sian: By the visual designer and
content authoring team.

336
00:20:09,250 --> 00:20:10,125
Damian Sian: Content design team.

337
00:20:11,812 --> 00:20:14,437
Damian Sian: I come to buy accessible names
before.

338
00:20:15,937 --> 00:20:16,000
Damian Sian: Page.

339
00:20:17,625 --> 00:20:18,500
Damian Sian: And I grab the 1st.

340
00:20:20,937 --> 00:20:25,562
Damian Sian: Piece of content that needs a
name. So I have the.

341
00:20:27,250 --> 00:20:29,062
Damian Sian: Magnifying glass icon.

342
00:20:30,750 --> 00:20:33,875
Damian Sian: I have to come to this piece
here that says accessibility

343
00:20:33,875 --> 00:20:34,187
Damian Sian: notes.

344
00:20:35,937 --> 00:20:38,812
Damian Sian: And then up top accessible name.

345
00:20:40,937 --> 00:20:45,000
Damian Sian: I'm gonna click the add button
and here it's gonna say search.

346
00:20:47,375 --> 00:20:52,437
Damian Sian: Again, I get the sidebar, but
now I do immediately get the

347
00:20:52,437 --> 00:20:54,750
Damian Sian: information in the sidebar.

348
00:20:56,437 --> 00:21:00,312
Damian Sian: OK. And if I didn't have this
plugin right, I wouldn't know

349
00:21:00,312 --> 00:21:04,062
Damian Sian: that connection between the
marker and the tool. But now I

350
00:21:04,062 --> 00:21:06,875
Damian Sian: can draw that connection between
the items.

351
00:21:08,875 --> 00:21:10,500
Damian Sian: Layer name and the.

352
00:21:11,562 --> 00:21:13,812
Damian Sian: The numeric identifier on the
screen.

353
00:21:17,875 --> 00:21:20,312
Damian Sian: Right here. I'm gonna call this
app Switcher.

354
00:21:29,750 --> 00:21:30,562
Damian Sian: Call this.

355
00:21:34,062 --> 00:21:34,625
Damian Sian: Center.

356
00:21:39,625 --> 00:21:42,750
Damian Sian: And here is a place where I'm
gonna put in a piece of dynamic

357
00:21:42,750 --> 00:21:43,312
Damian Sian: information.

358
00:21:44,812 --> 00:21:46,625
Damian Sian: I do that inside of brackets.

359
00:21:46,625 --> 00:21:47,500
Damian Sian: I just wrote the word.

360
00:21:50,625 --> 00:21:50,875
Damian Sian: N right.

361
00:21:50,875 --> 00:21:53,312
Damian Sian: So I want the screen meter to
read.

362
00:21:57,875 --> 00:21:59,000
Damian Sian: Zero notifications.

363
00:22:02,000 --> 00:22:02,875
Damian Sian: In this instance.

364
00:22:05,562 --> 00:22:08,625
Damian Sian: Right. If there was one
notification, I wanted to say

365
00:22:08,625 --> 00:22:10,812
Damian Sian: one notification, so I would
also do.

366
00:22:13,625 --> 00:22:16,062
Damian Sian: That the word the letter S.

367
00:22:18,562 --> 00:22:19,500
Damian Sian: I spell that correctly.

368
00:22:21,000 --> 00:22:21,250
Damian Sian: All right.

369
00:22:21,312 --> 00:22:23,875
Damian Sian: And then for the last piece
here, I'm going to say.

370
00:22:27,500 --> 00:22:28,250
Damian Sian: Username.

371
00:22:29,750 --> 00:22:31,500
Damian Sian: Astro PS account.

372
00:22:35,375 --> 00:22:39,125
Damian Sian: Now we notice that we're putting
these these items in. It can

373
00:22:39,125 --> 00:22:40,125
Damian Sian: cover things up.

374
00:22:40,937 --> 00:22:44,937
Damian Sian: So I have some options. I can
toggle them on and off as I

375
00:22:44,937 --> 00:22:46,125
Damian Sian: choose in my work.

376
00:22:48,062 --> 00:22:52,375
Damian Sian: I can go in and move these
things around somewhat.

377
00:22:54,062 --> 00:22:56,687
Damian Sian: Right. So I could put them all
in the same area.

378
00:22:58,562 --> 00:22:59,625
Damian Sian: I can move them out.

379
00:23:01,375 --> 00:23:02,250
Damian Sian: Make it look nicer.

380
00:23:04,125 --> 00:23:09,312
Damian Sian: But let's talk about the real
value here. When I look at the

381
00:23:09,312 --> 00:23:10,687
Damian Sian: completed piece.

382
00:23:12,750 --> 00:23:13,562
Damian Sian: We were.

383
00:23:15,062 --> 00:23:15,625
Damian Sian: Making one.

384
00:23:18,125 --> 00:23:20,625
Damian Sian: Frame for each annotation type.

385
00:23:21,187 --> 00:23:24,875
Damian Sian: Now we can include the mall in
one and there's a programmatic

386
00:23:24,875 --> 00:23:28,250
Damian Sian: connection between the
annotation marker and the object

387
00:23:28,250 --> 00:23:29,500
Damian Sian: on the layers panel.

388
00:23:31,062 --> 00:23:36,375
Damian Sian: One of the cool things is when I
have more than one annotation on

389
00:23:36,375 --> 00:23:37,687
Damian Sian: a single object.

390
00:23:40,062 --> 00:23:44,875
Damian Sian: The stark tool will will notice
that, right?

391
00:23:44,875 --> 00:23:48,187
Damian Sian: And it's got it says this is the
app Switcher piece and it has

392
00:23:48,187 --> 00:23:51,062
Damian Sian: both focus order and the name on
it, which is awesome.

393
00:23:52,625 --> 00:23:55,750
Damian Sian: By default it comes with an auto
layout with a horizontal.

394
00:23:59,437 --> 00:24:02,062
Damian Sian: Oh yeah, we could change that
around, right?

395
00:24:02,062 --> 00:24:03,312
Damian Sian: So in here, I said.

396
00:24:03,312 --> 00:24:06,875
Damian Sian: We'll make that vertical and put
some space between them so I can

397
00:24:06,875 --> 00:24:10,187
Damian Sian: go and and and kind of massage
these things to make them look

398
00:24:10,187 --> 00:24:10,500
Damian Sian: great.

399
00:24:12,250 --> 00:24:15,562
Damian Sian: Not required, but I know who I'm
talking to and I know you're

400
00:24:15,562 --> 00:24:18,687
Damian Sian: gonna do it. 'cause, I don't
think you can stop yourselves

401
00:24:18,687 --> 00:24:20,750
Damian Sian: from doing it. So that's how you
do it.

402
00:24:22,562 --> 00:24:26,687
Damian Sian: All right, so the limited time,
there's your finished product

403
00:24:26,687 --> 00:24:30,312
Damian Sian: all in one place, all
programmatically connected in a

404
00:24:30,312 --> 00:24:32,375
Damian Sian: way that we haven't had before.

405
00:24:32,437 --> 00:24:36,562
Damian Sian: The notes the the legend being
automatically generated for you

406
00:24:36,562 --> 00:24:37,937
Damian Sian: as well. Really cool.

407
00:24:39,562 --> 00:24:40,687
Damian Sian: When would you do this?

408
00:24:41,625 --> 00:24:45,062
Damian Sian: Blue lines are best served with
a design is more hardened,

409
00:24:45,062 --> 00:24:45,375
Damian Sian: right?

410
00:24:45,500 --> 00:24:48,562
Damian Sian: So after stakeholder review
before it's gonna go to.

411
00:24:50,125 --> 00:24:50,625
Damian Sian: Decoded.

412
00:24:53,312 --> 00:24:54,125
Damian Sian: If you do this work.

413
00:24:55,937 --> 00:25:00,437
Damian Sian: This measurement here is from a
arjera ticketing system for

414
00:25:00,437 --> 00:25:05,062
Damian Sian: accessibility audits where we
looked at select Adobe products

415
00:25:05,062 --> 00:25:07,000
Damian Sian: in representative samples.

416
00:25:07,000 --> 00:25:09,687
Damian Sian: So this is probably a rounding
error to the actual numbers.

417
00:25:11,250 --> 00:25:15,437
Damian Sian: Of exclusionary defects that
we've introduced in our work

418
00:25:15,437 --> 00:25:18,875
Damian Sian: that Adobe, we got 13
thousandish numbers here.

419
00:25:20,750 --> 00:25:22,500
Damian Sian: Not to say that designers call
in content.

420
00:25:22,500 --> 00:25:25,437
Damian Sian: Designers cost every single one
of them, nor that doing this

421
00:25:25,437 --> 00:25:28,437
Damian Sian: work of blue line annotations
would alleviate alleviate all of

422
00:25:28,437 --> 00:25:28,687
Damian Sian: them.

423
00:25:29,250 --> 00:25:32,375
Damian Sian: But I think we could all
intuitively think that we have a

424
00:25:32,375 --> 00:25:32,812
Damian Sian: positive.

425
00:25:33,812 --> 00:25:37,500
Damian Sian: Impact and that every chance
that we have to create a user

426
00:25:37,500 --> 00:25:41,062
Damian Sian: experience is a chance to
exclude or to include and doing

427
00:25:41,062 --> 00:25:44,687
Damian Sian: this work early in the process
will lead to more positive

428
00:25:44,687 --> 00:25:45,250
Damian Sian: outcomes.

429
00:25:47,875 --> 00:25:52,250
Damian Sian: The stark tool does have a way
for us to look at Figma files

430
00:25:52,250 --> 00:25:56,750
Damian Sian: across the enterprise and judge
whether or not blue lines have

431
00:25:56,750 --> 00:25:57,625
Damian Sian: been applied.

432
00:25:58,375 --> 00:26:01,937
Damian Sian: We can also run automated tests
from a centralized dashboard.

433
00:26:01,937 --> 00:26:04,375
Damian Sian: That is not something that's
ready today.

434
00:26:05,937 --> 00:26:07,750
Damian Sian: Stark has made a great plug in.

435
00:26:07,750 --> 00:26:11,437
Damian Sian: They've done an OK job with
making the the admin console and

436
00:26:11,437 --> 00:26:15,250
Damian Sian: dashboard part, so we're waiting
for that to improve before we

437
00:26:15,250 --> 00:26:16,500
Damian Sian: really roll that out.

438
00:26:18,687 --> 00:26:23,437
Damian Sian: And that concludes all the
talking that I have right we can

439
00:26:23,437 --> 00:26:25,250
Damian Sian: turn off the recording.

440
00:26:26,812 --> 00:26:30,375
Damian Sian: And I've used almost all of your
time for my presentation, but

441
00:26:30,375 --> 00:26:32,812
Damian Sian: I'm available for questions at
this point.

442
00:26:34,437 --> 00:26:36,250
Damian Sian: And be happy to take your
questions.

443
00:26:39,250 --> 00:26:39,937
Mariah Driver: Thank you.
