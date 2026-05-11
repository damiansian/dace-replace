1
00:00:04,000 --> 00:00:06,687
Damian Sian: All right, so looks like we've
got about half the people, so I

2
00:00:06,687 --> 00:00:09,312
Damian Sian: can just get started with the
upfront kind of housekeeping.

3
00:00:10,687 --> 00:00:13,937
Damian Sian: So welcome to the Stark blue
line annotations trading.

4
00:00:14,125 --> 00:00:18,062
Damian Sian: Today I'll be teaching you how
to use the start plugin to

5
00:00:18,062 --> 00:00:22,062
Damian Sian: create blue Vine accessibility
specifications in your figma

6
00:00:22,062 --> 00:00:24,000
Damian Sian: files using the Start plugin.

7
00:00:29,500 --> 00:00:32,500
Damian Sian: So in this session I'll cover
how to use the stark

8
00:00:32,500 --> 00:00:35,812
Damian Sian: accessibility plugin in the
following areas, we'll talk

9
00:00:35,812 --> 00:00:38,250
Damian Sian: about annotating designs with
landmarks.

10
00:00:38,875 --> 00:00:43,312
Damian Sian: With headings, we'll talk about
specifying the focus, path

11
00:00:43,312 --> 00:00:46,312
Damian Sian: management and adding accessible
names.

12
00:00:48,000 --> 00:00:50,312
Damian Sian: The instruction portion for
today should take about 30

13
00:00:50,312 --> 00:00:50,687
Damian Sian: minutes.

14
00:00:52,250 --> 00:00:55,937
Damian Sian: And then you can obviously put
questions in the chat. We'll

15
00:00:55,937 --> 00:00:59,500
Damian Sian: have someone monitoring the
chat, but we'll have a pretty

16
00:00:59,500 --> 00:01:02,812
Damian Sian: healthy amount of time
afterward, about 15 minutes to

17
00:01:02,812 --> 00:01:04,625
Damian Sian: have questions and discussion.

18
00:01:11,687 --> 00:01:13,062
Damian Sian: I'll be your trainer today.

19
00:01:13,625 --> 00:01:15,125
Damian Sian: My name is Damien Syan.

20
00:01:15,250 --> 00:01:16,562
Damian Sian: My pronouns are he him.

21
00:01:17,125 --> 00:01:20,437
Damian Sian: My last name is pronounced like
the color blue in your printer.

22
00:01:22,250 --> 00:01:28,062
Damian Sian: And today we will not have Ben
from from Stark, but we do have

23
00:01:28,062 --> 00:01:28,687
Damian Sian: Mariah.

24
00:01:28,687 --> 00:01:30,812
Damian Sian: Do you want to introduce
yourself, Mariah?

25
00:01:33,437 --> 00:01:34,375
Mariah Driver: Yes, hello everyone.

26
00:01:34,375 --> 00:01:37,500
Mariah Driver: Good morning or good afternoon.
Depending on where you are.
Damian Sian: Right.

27
00:01:37,500 --> 00:01:38,625
Mariah Driver: My name is Mariah.

28
00:01:38,625 --> 00:01:42,437
Mariah Driver: Like Mariah Carey and my
pronouns, are she, her, hers,

29
00:01:42,437 --> 00:01:46,375
Mariah Driver: and I am a senior product
manager on the product equity

30
00:01:46,375 --> 00:01:50,750
Mariah Driver: team alongside Damian. And the
only thing I wanted to note for

31
00:01:50,750 --> 00:01:55,250
Mariah Driver: today is if you are on the frame
dot IO team and you are having

32
00:01:55,250 --> 00:01:56,250
Mariah Driver: trouble access.

33
00:01:57,187 --> 00:01:58,250
Mariah Driver: The figma link.

34
00:01:59,125 --> 00:02:02,250
Mariah Driver: I have another link that I will
share in the chat with a

35
00:02:02,250 --> 00:02:02,687
Mariah Driver: password.

36
00:02:03,562 --> 00:02:06,750
Mariah Driver: So you can go ahead and use that
link that works for folks

37
00:02:06,750 --> 00:02:10,187
Mariah Driver: yesterday to bypass some of the
restrictions on Figma. And also

38
00:02:10,187 --> 00:02:13,437
Mariah Driver: if you want to ask questions,
the best way to do so during.

39
00:02:15,000 --> 00:02:19,375
Mariah Driver: Today's session so that Mariah
Carey, yes, on her wish she is.

40
00:02:19,562 --> 00:02:22,625
Mariah Driver: She's warming up Spotify
already.

41
00:02:22,625 --> 00:02:24,500
Mariah Driver: Are we already seeing her name
charting?

42
00:02:26,375 --> 00:02:28,875
Mariah Driver: But if you want to ask a
question in the Q&amp;A pod is

43
00:02:28,875 --> 00:02:31,625
Mariah Driver: also a great way to do that.
Just because sometimes questions

44
00:02:31,625 --> 00:02:32,687
Mariah Driver: can get lost in the chat.

45
00:02:32,687 --> 00:02:35,750
Mariah Driver: But I will be monitoring chat
and answering as many as I can

46
00:02:35,750 --> 00:02:36,437
Mariah Driver: there as well.

47
00:02:38,062 --> 00:02:38,500
Mariah Driver: And that's it.

48
00:02:40,187 --> 00:02:43,625
Damian Sian: Yeah, I the Mariah Carey thing
with the the song.

49
00:02:43,625 --> 00:02:46,812
Damian Sian: Yeah, it's it's gonna start
haunting us soon.

50
00:02:47,812 --> 00:02:48,625
Damian Sian: So let's go.

51
00:02:50,187 --> 00:02:53,937
Damian Sian: So today's training is meant to
be experiential. In an ideal

52
00:02:53,937 --> 00:02:57,875
Damian Sian: world, you would have me on one
screen and your own. Think of a

53
00:02:57,875 --> 00:03:01,625
Damian Sian: file that you're working through
and watching me and working

54
00:03:01,625 --> 00:03:03,250
Damian Sian: through on another screen.

55
00:03:04,937 --> 00:03:08,062
Damian Sian: By the end of the training, you
should have applied each

56
00:03:08,062 --> 00:03:10,687
Damian Sian: annotation type you use it to
start plugin the.

57
00:03:11,437 --> 00:03:15,875
Damian Sian: Training file is available in
the chat of this meeting as well

58
00:03:15,875 --> 00:03:19,000
Damian Sian: as the meeting invite that was
sent to you.

59
00:03:20,812 --> 00:03:24,937
Damian Sian: We would ask that you duplicate
that file and not ask for edit

60
00:03:24,937 --> 00:03:28,250
Damian Sian: access cause be getting a lot of
emails and stuff.

61
00:03:29,812 --> 00:03:31,437
Damian Sian: The stark plug in will be
required.

62
00:03:32,250 --> 00:03:37,187
Damian Sian: You had received an invite to be
to join the enterprise account.

63
00:03:37,812 --> 00:03:41,875
Damian Sian: You'll know that you're logged
in if you see. If you don't see

64
00:03:41,875 --> 00:03:45,375
Damian Sian: like the become a premium member
in the bottom right.

65
00:03:47,062 --> 00:03:49,937
Damian Sian: All the features we're gonna
train on today are premium

66
00:03:49,937 --> 00:03:52,062
Damian Sian: features, so you can't use the
free one.

67
00:03:54,562 --> 00:03:55,062
Damian Sian: Yeah. So.

68
00:03:56,125 --> 00:03:59,125
Damian Sian: If you're having challenges, let
Mariah know in the chat. If

69
00:03:59,125 --> 00:04:02,062
Damian Sian: you're totally stuck and you
can't get that stuff to work,

70
00:04:02,062 --> 00:04:04,312
Damian Sian: there's still a value in you
being here today.

71
00:04:05,937 --> 00:04:08,500
Damian Sian: One you can know that the
training is recorded and I'll

72
00:04:08,500 --> 00:04:09,875
Damian Sian: have it for future reference.

73
00:04:10,250 --> 00:04:11,312
Damian Sian: I got that question a lot.

74
00:04:11,312 --> 00:04:14,750
Damian Sian: So yes, it'll be ready by the
end of day Thursday for

75
00:04:14,750 --> 00:04:18,500
Damian Sian: everybody, and it'll be in Adobe
Learning manager as well.

76
00:04:18,500 --> 00:04:21,500
Damian Sian: So we can track that you've
taken the the required training.

77
00:04:23,312 --> 00:04:29,312
Damian Sian: I also want you to know that the
digital disability guide has.

78
00:04:31,125 --> 00:04:34,000
Damian Sian: Like 100% of what we're gonna
talk about today is covered in

79
00:04:34,000 --> 00:04:34,500
Damian Sian: this guide.

80
00:04:35,250 --> 00:04:39,250
Damian Sian: So the first thing we're gonna
learn about is landmarks, and

81
00:04:39,250 --> 00:04:43,187
Damian Sian: know that the training files
available here in the guide as

82
00:04:43,187 --> 00:04:47,187
Damian Sian: well as a video of me basically
giving the exact lesson I'm

83
00:04:47,187 --> 00:04:51,187
Damian Sian: gonna give you today live is a.
There's a recorded video and

84
00:04:51,187 --> 00:04:52,375
Damian Sian: step by step GUID.

85
00:04:52,687 --> 00:04:55,562
Damian Sian: On how to do the actions.

86
00:04:57,062 --> 00:05:00,437
Damian Sian: OK. And then some links to
resources as well.

87
00:05:02,000 --> 00:05:05,312
Damian Sian: The samples that are in this
guide are also the samples for

88
00:05:05,312 --> 00:05:08,687
Damian Sian: training on today live, and the
samples that are available in

89
00:05:08,687 --> 00:05:11,125
Damian Sian: this video and the samples that
will be in.

90
00:05:12,687 --> 00:05:13,500
Damian Sian: Adobe learning manager.

91
00:05:13,500 --> 00:05:16,812
Damian Sian: So it's always the same story.
It's giving you a number of

92
00:05:16,812 --> 00:05:20,125
Damian Sian: opportunities to have the
learning experiences and to have

93
00:05:20,125 --> 00:05:21,687
Damian Sian: this reference here as well.

94
00:05:21,687 --> 00:05:25,500
Damian Sian: So I do ask that you bookmark
this reference that has

95
00:05:25,500 --> 00:05:29,812
Damian Sian: everything I know about this
topic is included in this guide.

96
00:05:29,812 --> 00:05:30,500
Damian Sian: All right.

97
00:05:32,125 --> 00:05:32,562
Damian Sian: So with that.

98
00:05:34,000 --> 00:05:38,937
Damian Sian: I hope we're all ready to jump
in to the topic of blue line

99
00:05:38,937 --> 00:05:39,875
Damian Sian: annotations.

100
00:05:41,875 --> 00:05:42,250
Damian Sian: So.

101
00:05:43,562 --> 00:05:48,375
Damian Sian: What I have here is our training
file essentially, and it's a

102
00:05:48,375 --> 00:05:50,125
Damian Sian: graphic user interface.

103
00:05:51,750 --> 00:05:56,562
Damian Sian: Of Adobe Genstudio as it was
presented to me over the summer.

104
00:05:56,687 --> 00:05:57,812
Damian Sian: So it's frozen in time.

105
00:05:57,812 --> 00:06:00,750
Damian Sian: It probably has changed a lot
since this, so just know that

106
00:06:00,750 --> 00:06:03,875
Damian Sian: this is a representation of what
I was asked to look at at one

107
00:06:03,875 --> 00:06:04,187
Damian Sian: point.

108
00:06:06,687 --> 00:06:09,625
Damian Sian: And I've also made some edits to
it to make it a little bit

109
00:06:09,625 --> 00:06:10,750
Damian Sian: easier for training so.

110
00:06:12,375 --> 00:06:13,375
Damian Sian: Some things were cherry picked
here.

111
00:06:16,000 --> 00:06:19,937
Damian Sian: What I want to do is look at
this visual interface and start

112
00:06:19,937 --> 00:06:22,687
Damian Sian: to ask ourselves what would it
sound like.

113
00:06:25,000 --> 00:06:28,187
Damian Sian: What things would I say to this
interface to get it to operate

114
00:06:28,187 --> 00:06:28,750
Damian Sian: correctly?

115
00:06:31,125 --> 00:06:35,062
Damian Sian: Right. So we could start just
looking at the top, this top

116
00:06:35,062 --> 00:06:39,125
Damian Sian: piece. Now I know from a spatial
relationship with the other

117
00:06:39,125 --> 00:06:42,250
Damian Sian: pieces of content that it's the
banner, right?

118
00:06:42,312 --> 00:06:45,125
Damian Sian: If I were to see this on a
mobile, I would expect the

119
00:06:45,125 --> 00:06:46,562
Damian Sian: hamburger menu to be there.

120
00:06:47,000 --> 00:06:49,187
Damian Sian: It's typical that we see a
search.

121
00:06:50,875 --> 00:06:53,875
Damian Sian: And in the Adobe pantheon of
products, this is also where I

122
00:06:53,875 --> 00:06:56,250
Damian Sian: would find things like my
account information.

123
00:06:58,750 --> 00:07:02,062
Damian Sian: As I look at this interface I'm
seeing.

124
00:07:03,625 --> 00:07:07,000
Damian Sian: Some buttons that have graphics
and text and then I'm seeing

125
00:07:07,000 --> 00:07:10,437
Damian Sian: some things that don't have text
where I'm just relying on the

126
00:07:10,437 --> 00:07:12,812
Damian Sian: graphic to tell a story about
what this is.

127
00:07:14,562 --> 00:07:18,875
Damian Sian: What I want to do now is give
you an opportunity to listen to

128
00:07:18,875 --> 00:07:23,062
Damian Sian: this content. I'm going to play
this twice 'cause it scream.

129
00:07:23,062 --> 00:07:27,062
Damian Sian: This is a screen reader. They
tend to go a little fast. If

130
00:07:27,062 --> 00:07:28,562
Damian Sian: you're not tuned into.

131
00:07:29,875 --> 00:07:33,375
Damian Sian: What they're saying. So I'm
gonna play this for you 2 times.

132
00:07:33,375 --> 00:07:37,375
Damian Sian: Let's take a listen to this
interface and that the banner

133
00:07:37,375 --> 00:07:37,875
Damian Sian: region.

134
00:07:39,312 --> 00:07:44,812
Damian Sian: Banner Adobe Gen. studio button
search text field search app

135
00:07:44,812 --> 00:07:49,750
Damian Sian: Switcher button help center
button, zero notifications

136
00:07:49,750 --> 00:07:54,250
Damian Sian: button, Damian Chian account
button and a banner.

137
00:07:56,000 --> 00:07:57,500
Damian Sian: It did mispronounce my name, but
that's OK.

138
00:07:57,500 --> 00:08:00,062
Damian Sian: We don't have to get that
granular when we're coding

139
00:08:00,062 --> 00:08:00,375
Damian Sian: things.

140
00:08:02,062 --> 00:08:07,000
Damian Sian: So let's take one more listen to
that banner. Adobe Gen. studio

141
00:08:07,000 --> 00:08:09,500
Damian Sian: Button search text field search.

142
00:08:10,062 --> 00:08:15,062
Damian Sian: App Switcher button help center
button, zero notifications

143
00:08:15,062 --> 00:08:19,562
Damian Sian: button, Damian Chian, S account
button and a fanner.

144
00:08:21,375 --> 00:08:25,375
Damian Sian: Now I want to point out that
what Blue line annotations is

145
00:08:25,375 --> 00:08:29,812
Damian Sian: asking you to do is to consider
more than the visual experience.

146
00:08:30,125 --> 00:08:33,312
Damian Sian: And this is somewhat out of the
wheelhouse for people who are

147
00:08:33,312 --> 00:08:35,312
Damian Sian: visual designers or content
designers.

148
00:08:37,312 --> 00:08:41,625
Damian Sian: We I also want you to kind of
just think and kind of remark on

149
00:08:41,625 --> 00:08:45,562
Damian Sian: in your own mind what would be
the likelihood that those

150
00:08:45,562 --> 00:08:49,500
Damian Sian: outcomes and the audible
experience would have been that

151
00:08:49,500 --> 00:08:52,500
Damian Sian: way if I had left that just to
engineering.

152
00:08:54,062 --> 00:08:57,562
Damian Sian: Right. So as a designer of the
user experience, what we're

153
00:08:57,562 --> 00:09:01,375
Damian Sian: asking you to do is to consider
the experience of people who are

154
00:09:01,375 --> 00:09:04,687
Damian Sian: non sighted who are going to
listen to this content and

155
00:09:04,687 --> 00:09:08,187
Damian Sian: people who are physically
disabled, who will be using the.

156
00:09:09,125 --> 00:09:13,250
Damian Sian: Voice activation to operate this
content and to provide them with

157
00:09:13,250 --> 00:09:16,875
Damian Sian: the same level of care and
guidance and expertise that you

158
00:09:16,875 --> 00:09:20,812
Damian Sian: do in the visual experience in
that oral experience that which

159
00:09:20,812 --> 00:09:22,062
Damian Sian: is heard and spoken.

160
00:09:24,375 --> 00:09:28,250
Damian Sian: And to start that journey, we
really need to start thinking

161
00:09:28,250 --> 00:09:32,000
Damian Sian: about how a machine sees this
interface, not just how our

162
00:09:32,000 --> 00:09:34,500
Damian Sian: human perception sees this
interface.

163
00:09:36,750 --> 00:09:37,687
Damian Sian: And I've broken that down.

164
00:09:39,625 --> 00:09:40,062
Damian Sian: Into.

165
00:09:41,937 --> 00:09:46,625
Damian Sian: Kind of a a road map or like a
visual way for you to see what a

166
00:09:46,625 --> 00:09:51,437
Damian Sian: machine sees, and this might be
a little intimidating, but if we

167
00:09:51,437 --> 00:09:56,000
Damian Sian: go just line by line here, that
first piece of content in the

168
00:09:56,000 --> 00:09:58,062
Damian Sian: user interface was a button.

169
00:09:59,687 --> 00:10:02,062
Damian Sian: Right. So that's an element type
of button.

170
00:10:03,562 --> 00:10:07,375
Damian Sian: It's the first thing in this Dom
order, the document object, so

171
00:10:07,375 --> 00:10:11,000
Damian Sian: it's the very first thing that
is going to be encountered by

172
00:10:11,000 --> 00:10:12,562
Damian Sian: the document object model.

173
00:10:13,437 --> 00:10:17,812
Damian Sian: It just so happens that it is
the first item in the focus

174
00:10:17,812 --> 00:10:21,437
Damian Sian: order I would get to that item
using a tab key.

175
00:10:22,562 --> 00:10:25,125
Damian Sian: It did have a visible text label
that's that.

176
00:10:25,125 --> 00:10:27,500
Damian Sian: Read Aloud Adobe Gen. studio so
I have.

177
00:10:28,625 --> 00:10:29,312
Damian Sian: The role of button.

178
00:10:30,062 --> 00:10:33,125
Damian Sian: And the name here in the visible
text.

179
00:10:34,687 --> 00:10:38,187
Damian Sian: Oi do not need to give an
annotation for that control.

180
00:10:40,187 --> 00:10:43,562
Damian Sian: The screen reader read aloud
button Adobe Gen. Studio,

181
00:10:43,562 --> 00:10:46,875
Damian Sian: noticing that some screen
readers transpose the roll.

182
00:10:46,875 --> 00:10:51,687
Damian Sian: Some might say Adobe Gen. studio
button or button right?

183
00:10:51,687 --> 00:10:56,062
Damian Sian: And all of that content is
living in this container called

184
00:10:56,062 --> 00:10:56,625
Damian Sian: banner.

185
00:10:57,187 --> 00:10:59,250
Damian Sian: And we just heard what that
sounded like.

186
00:11:02,875 --> 00:11:03,687
Damian Sian: With this input.

187
00:11:05,062 --> 00:11:06,562
Damian Sian: Did not have a visible text.

188
00:11:06,562 --> 00:11:08,437
Damian Sian: Label it had an icon.

189
00:11:10,375 --> 00:11:13,937
Damian Sian: As a visual designer or a
content designer, I would want

190
00:11:13,937 --> 00:11:17,812
Damian Sian: to tell the engineering team I
want that to be called search.

191
00:11:19,375 --> 00:11:20,250
Damian Sian: And nothing else but search.

192
00:11:20,250 --> 00:11:24,812
Damian Sian: So a screen reader would read
search text field search.

193
00:11:27,062 --> 00:11:31,000
Damian Sian: And for the app Switcher I would
need to tell the engineering

194
00:11:31,000 --> 00:11:33,250
Damian Sian: team what I want that to be
called.

195
00:11:35,312 --> 00:11:39,125
Damian Sian: Help center and here you can see
that I'm saying I wanted to say

196
00:11:39,125 --> 00:11:42,937
Damian Sian: the number of notifications and
then the word notifications, so

197
00:11:42,937 --> 00:11:44,062
Damian Sian: zero notifications.

198
00:11:46,000 --> 00:11:50,312
Damian Sian: I wanted to say that person's
name and then the word account.

199
00:11:53,125 --> 00:11:56,000
Damian Sian: Everything that we're seeing
here that is in blue is not

200
00:11:56,000 --> 00:11:59,062
Damian Sian: something that's intuitive when
you're handing it off to the

201
00:11:59,062 --> 00:12:02,062
Damian Sian: engineering team that they're
gonna automatically know what

202
00:12:02,062 --> 00:12:02,937
Damian Sian: you want it to be.

203
00:12:04,500 --> 00:12:04,750
Damian Sian: So what?

204
00:12:04,750 --> 00:12:07,500
Damian Sian: We're asking you to do is to
specify that before you hand it

205
00:12:07,500 --> 00:12:08,062
Damian Sian: off to them.

206
00:12:10,562 --> 00:12:12,125
Damian Sian: And yes, you will have a copy of
this deck.

207
00:12:12,125 --> 00:12:14,250
Damian Sian: I don't know if it's in the
chat, but that was a common

208
00:12:14,250 --> 00:12:16,687
Damian Sian: question yesterday and I should
have addressed. You will have

209
00:12:16,687 --> 00:12:17,062
Damian Sian: this deck.

210
00:12:17,062 --> 00:12:18,125
Damian Sian: You can look at this.

211
00:12:18,187 --> 00:12:21,125
Damian Sian: It's like your road map. When
you go over this again, if you

212
00:12:21,125 --> 00:12:21,625
Damian Sian: so choose.

213
00:12:23,187 --> 00:12:26,625
Damian Sian: So we're going to look at the
focus order. We're going to look

214
00:12:26,625 --> 00:12:30,000
Damian Sian: at the accessible names, we're
going to look at the landmarks

215
00:12:30,000 --> 00:12:33,062
Damian Sian: and the headings. If I didn't
say that already. So what?

216
00:12:33,062 --> 00:12:35,250
Damian Sian: What piece of text is a heading
and what level it's at?

217
00:12:36,062 --> 00:12:39,562
Damian Sian: Is all the information that
we're going to review how to do

218
00:12:39,562 --> 00:12:39,937
Damian Sian: today.

219
00:12:40,562 --> 00:12:44,375
Damian Sian: So hoping that you're able to
follow along with me.

220
00:12:44,875 --> 00:12:48,312
Damian Sian: And if you can't, you can just
absorb knowing that we have

221
00:12:48,312 --> 00:12:51,750
Damian Sian: recordings and we have the the
help guide and we have those

222
00:12:51,750 --> 00:12:55,562
Damian Sian: videos in the help guide and all
kinds of material that are there

223
00:12:55,562 --> 00:12:56,312
Damian Sian: to help you.

224
00:12:58,187 --> 00:12:58,687
Damian Sian: All right.
