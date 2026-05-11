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

225
00:13:02,000 --> 00:13:02,750
Damian Sian: Landmark.

226
00:13:06,000 --> 00:13:09,500
Damian Sian: So what I've done here is to
take the Adobe Gen. studio and I

227
00:13:09,500 --> 00:13:11,000
Damian Sian: made a code pen out of it.

228
00:13:12,562 --> 00:13:15,375
Damian Sian: And it's just pure HTML
semantics. In this code pen.

229
00:13:17,000 --> 00:13:22,625
Damian Sian: And what we see here are the
landmark regions of this

230
00:13:22,625 --> 00:13:23,500
Damian Sian: content.

231
00:13:24,062 --> 00:13:25,687
Damian Sian: I have the banner which we
heard.

232
00:13:26,375 --> 00:13:28,250
Damian Sian: I have this navigation region.

233
00:13:28,937 --> 00:13:35,625
Damian Sian: I have the main region and a sub
NAV region. What I did here is I

234
00:13:35,625 --> 00:13:36,562
Damian Sian: use this.

235
00:13:37,750 --> 00:13:42,562
Damian Sian: Chrome extension and that will
visually highlight the landmarks

236
00:13:42,562 --> 00:13:46,000
Damian Sian: in a in a web interface which is
really cool.

237
00:13:46,000 --> 00:13:49,812
Damian Sian: So if you're starting with
something existing and you want

238
00:13:49,812 --> 00:13:53,437
Damian Sian: to see what the existing
landmarks are, you can run that

239
00:13:53,437 --> 00:13:57,375
Damian Sian: tool and you can know that. Oh,
I'm only fixing something or

240
00:13:57,375 --> 00:14:00,125
Damian Sian: doing something in the main
region, right?

241
00:14:00,625 --> 00:14:01,937
Damian Sian: So you'll know that that's
there.

242
00:14:03,062 --> 00:14:06,125
Damian Sian: At the end of the day, landmarks
are really just a bunch of

243
00:14:06,125 --> 00:14:06,687
Damian Sian: containers.

244
00:14:07,187 --> 00:14:08,375
Damian Sian: That whole content in them.

245
00:14:09,937 --> 00:14:14,187
Damian Sian: And the the values are for a
screen reader user is that I can

246
00:14:14,187 --> 00:14:17,125
Damian Sian: navigate by those regions those
landmarks.

247
00:14:18,812 --> 00:14:22,750
Damian Sian: If I wanted to skip to the main
section, which is a common

248
00:14:22,750 --> 00:14:26,500
Damian Sian: navigation feature for screen
reader users because I've

249
00:14:26,500 --> 00:14:30,250
Damian Sian: defined what the main landmark
is now I can skip to it.

250
00:14:32,375 --> 00:14:35,875
Damian Sian: And that's a valuable tool to
have, considering there are 15

251
00:14:35,875 --> 00:14:37,375
Damian Sian: tab stops before the main.

252
00:14:38,125 --> 00:14:42,000
Damian Sian: So if I wanted to get right to
the main section, I can navigate

253
00:14:42,000 --> 00:14:45,687
Damian Sian: right to it, or if I know that I
need to get to one of these

254
00:14:45,687 --> 00:14:49,500
Damian Sian: areas because I've defined it
now, I can use it if they're not

255
00:14:49,500 --> 00:14:51,937
Damian Sian: defined, I don't have a
navigation cap.

256
00:14:54,437 --> 00:14:57,812
Damian Sian: And we wouldn't want to rely on
engineering to just know to do

257
00:14:57,812 --> 00:15:00,500
Damian Sian: this without your instruction
about how to do it.

258
00:15:02,250 --> 00:15:04,500
Damian Sian: So with all that, let's get into
it.

259
00:15:06,625 --> 00:15:09,625
Damian Sian: If you're in the training file,
which I really hope you are, if

260
00:15:09,625 --> 00:15:11,562
Damian Sian: you're not, then just be good.
Watch but.

261
00:15:13,125 --> 00:15:17,562
Damian Sian: The page that's called landmarks
dash before we're going to do

262
00:15:17,562 --> 00:15:21,687
Damian Sian: the work of adding landmark
annotations here. Also know if

263
00:15:21,687 --> 00:15:26,000
Damian Sian: you are in the if you do have
the training file available to

264
00:15:26,000 --> 00:15:29,812
Damian Sian: you. I have a before and after
for each one of these.

265
00:15:30,250 --> 00:15:34,250
Damian Sian: So if you get stuck or lost or
just anything in between, you

266
00:15:34,250 --> 00:15:37,062
Damian Sian: can see what it looks like when
it's done.

267
00:15:39,062 --> 00:15:41,250
Damian Sian: But right now I wanna get some
hands on mice.

268
00:15:41,250 --> 00:15:44,062
Damian Sian: Hands on keyboards and start
getting this work done.

269
00:15:46,062 --> 00:15:50,187
Damian Sian: So to do that, I'm first gonna
grab the topmost region of this

270
00:15:50,187 --> 00:15:53,937
Damian Sian: interface, and I've made it a
little bit easier for you.

271
00:15:53,937 --> 00:15:54,937
Damian Sian: I named the layer.

272
00:15:56,500 --> 00:15:59,250
Damian Sian: You're not expected to name
layers in this process, but if

273
00:15:59,250 --> 00:16:01,062
Damian Sian: you do, there is a net benefit
to you.

274
00:16:03,437 --> 00:16:08,062
Damian Sian: So I have the layer called
banner light and I'm going to

275
00:16:08,062 --> 00:16:13,187
Damian Sian: come to my tool my accessibility
plugin for Stark and I'm going

276
00:16:13,187 --> 00:16:18,437
Damian Sian: to use the landmark annotations
and I'm going to select from the

277
00:16:18,437 --> 00:16:19,250
Damian Sian: drop down.

278
00:16:21,625 --> 00:16:24,750
Damian Sian: Header which is synonymous for
banner.

279
00:16:28,625 --> 00:16:29,750
Damian Sian: Who is in this fire?

280
00:16:31,437 --> 00:16:33,000
Damian Sian: Did I not duplicate this file
correctly?

281
00:16:34,187 --> 00:16:34,812
Damian Sian: To get in here.

282
00:16:36,562 --> 00:16:40,875
Damian Sian: Anyway, so I'm gonna click the
the the word header. Now I could

283
00:16:40,875 --> 00:16:43,937
Damian Sian: see a couple things that
occurred in my file.

284
00:16:45,500 --> 00:16:50,625
Damian Sian: Number one, I now have this
layer called stark annotations

285
00:16:50,625 --> 00:16:55,875
Damian Sian: and it has a unique numeric
identifier that I can toggle on

286
00:16:55,875 --> 00:17:00,625
Damian Sian: and off. If I open it up, I can
see that it produced.

287
00:17:02,187 --> 00:17:03,812
Damian Sian: The banner, excuse me.

288
00:17:03,812 --> 00:17:08,375
Damian Sian: It produced the annotation and
it produced the marching ants

289
00:17:08,375 --> 00:17:12,687
Damian Sian: based on and connected to the
actual object in the layers

290
00:17:12,687 --> 00:17:17,312
Damian Sian: panel. So that would have been a
very manual task in our old.

291
00:17:17,875 --> 00:17:21,500
Damian Sian: Blue line annotations set up so
this happened kind of

292
00:17:21,500 --> 00:17:25,562
Damian Sian: automatically right where it
just found the object, drew the

293
00:17:25,562 --> 00:17:28,000
Damian Sian: stuff we needed and made the
layer.

294
00:17:29,562 --> 00:17:31,687
Damian Sian: It also put this thing in here
called the sidebar.

295
00:17:33,562 --> 00:17:37,375
Damian Sian: But there's nothing under
landmarks. When I look at the

296
00:17:37,375 --> 00:17:41,750
Damian Sian: sidebar, which is OK, we're not
going to get anything to occur

297
00:17:41,750 --> 00:17:45,437
Damian Sian: inside of the sidebar with
landmarks until we give an

298
00:17:45,437 --> 00:17:49,812
Damian Sian: accessible name to a landmark
and or put some notes about that

299
00:17:49,812 --> 00:17:50,437
Damian Sian: landmark.

300
00:17:51,562 --> 00:17:55,687
Damian Sian: So let's go ahead and do the
next landmark. We know this is a

301
00:17:55,687 --> 00:17:58,625
Damian Sian: navigation, so I'm going to say
in my list.

302
00:17:59,437 --> 00:17:59,687
Damian Sian: NAV.

303
00:18:01,562 --> 00:18:02,750
Damian Sian: And then click add.

304
00:18:04,312 --> 00:18:06,812
Damian Sian: Again, I've got the marching
ants. I've got the.

305
00:18:08,437 --> 00:18:09,937
Damian Sian: The annotation marker as well.

306
00:18:11,687 --> 00:18:13,187
Damian Sian: If I'm looking at my.

307
00:18:16,000 --> 00:18:17,687
Damian Sian: My stark annotations layer.

308
00:18:17,687 --> 00:18:20,937
Damian Sian: Here I see that I have a second.

309
00:18:22,437 --> 00:18:22,500
Damian Sian: Piece.

310
00:18:24,500 --> 00:18:24,875
Damian Sian: Right.

311
00:18:25,750 --> 00:18:27,437
Damian Sian: And again, I could turn it on
and off.

312
00:18:27,437 --> 00:18:31,687
Damian Sian: Again, I did not get anything in
the landmarks piece in the

313
00:18:31,687 --> 00:18:35,812
Damian Sian: sidebar though, and I wouldn't
until I come to this newly

314
00:18:35,812 --> 00:18:40,312
Damian Sian: created piece here in the the
tool and click on the edit icon.

315
00:18:42,437 --> 00:18:44,500
Damian Sian: When I have more than one.

316
00:18:46,062 --> 00:18:46,937
Damian Sian: Landmark type.

317
00:18:47,375 --> 00:18:50,750
Damian Sian: It's incumbent upon me to give
it differentiating names.

318
00:18:52,437 --> 00:18:54,312
Damian Sian: In this case, I'm just going to
write the word site.

319
00:18:56,875 --> 00:19:00,000
Damian Sian: And as a note, this isn't
required for you, but for

320
00:19:00,000 --> 00:19:03,375
Damian Sian: training purposes I like to say
that this screen reader.

321
00:19:04,937 --> 00:19:05,250
Damian Sian: Will read.

322
00:19:06,812 --> 00:19:07,500
Damian Sian: Site navigation.

323
00:19:10,375 --> 00:19:14,812
Damian Sian: When I click done, nothing
changed about the artwork here,

324
00:19:14,812 --> 00:19:19,437
Damian Sian: but now I have something in the
sidebar and the reason I have

325
00:19:19,437 --> 00:19:24,250
Damian Sian: that is this is now consumable
by someone who doesn't have this

326
00:19:24,250 --> 00:19:24,812
Damian Sian: plugin.

327
00:19:26,500 --> 00:19:30,312
Damian Sian: So we can't assume that everyone
in our workflow is going to have

328
00:19:30,312 --> 00:19:33,437
Damian Sian: the stark plug in tool to have
this information here.

329
00:19:34,312 --> 00:19:38,250
Damian Sian: So somebody using this as a flat
design essentially can say,

330
00:19:38,250 --> 00:19:42,375
Damian Sian: well, that's the header region.
This is the NAV region and this

331
00:19:42,375 --> 00:19:44,812
Damian Sian: one's going to read site
navigation.

332
00:19:46,375 --> 00:19:50,687
Damian Sian: And I can make the correlation
based on this text to here in

333
00:19:50,687 --> 00:19:53,687
Damian Sian: the layers file. The layers
panel, right?

334
00:19:53,687 --> 00:19:56,062
Damian Sian: So I could say, oh, that object.

335
00:19:56,625 --> 00:20:01,625
Damian Sian: Has that landmark and this piece
of additional metadata to it.

336
00:20:03,500 --> 00:20:05,562
Damian Sian: Alright, let's continue.

337
00:20:06,500 --> 00:20:07,812
Damian Sian: I wanna grab the main region.

338
00:20:09,375 --> 00:20:11,812
Damian Sian: Shockingly, I'm going to choose
the main landmark.

339
00:20:13,062 --> 00:20:16,375
Damian Sian: No notes or names required,
right? 'cause. There's just

340
00:20:16,375 --> 00:20:19,312
Damian Sian: there should just be one main in
your your file.

341
00:20:20,125 --> 00:20:22,812
Damian Sian: That could be a lot of Navs,
right?

342
00:20:23,312 --> 00:20:24,750
Damian Sian: There's one main there's one
banner.

343
00:20:26,312 --> 00:20:28,062
Damian Sian: And let's talk about the second
NAV.

344
00:20:28,375 --> 00:20:30,062
Damian Sian: This is our secondary
navigation.

345
00:20:31,687 --> 00:20:32,750
Damian Sian: Going to come here to NAV.

346
00:20:33,562 --> 00:20:34,375
Damian Sian: Click add.

347
00:20:35,937 --> 00:20:40,750
Damian Sian: And here I'm going to define
this as page and the screen.

348
00:20:42,875 --> 00:20:46,250
Damian Sian: The Screen screen reader will
read.

349
00:20:47,875 --> 00:20:48,687
Damian Sian: Page navigation.

350
00:20:51,562 --> 00:20:52,125
Damian Sian: So what happens?

351
00:20:52,125 --> 00:20:55,687
Damian Sian: This screen reader will
essentially concatenate the the

352
00:20:55,687 --> 00:20:59,250
Damian Sian: name that you put in and then
read the landmarks on your

353
00:20:59,250 --> 00:21:02,250
Damian Sian: handset, read the name, and then
the landmark.

354
00:21:02,500 --> 00:21:06,687
Damian Sian: So for the name, we keep it
simple by just putting the thing

355
00:21:06,687 --> 00:21:07,250
Damian Sian: we want.

356
00:21:07,250 --> 00:21:08,250
Damian Sian: To what?

357
00:21:08,250 --> 00:21:11,687
Damian Sian: I don't want to put into this is
page navigation as the name

358
00:21:11,687 --> 00:21:14,437
Damian Sian: 'cause it would read page
navigation navigation.

359
00:21:15,500 --> 00:21:17,125
Damian Sian: Site navigation navigation.

360
00:21:17,125 --> 00:21:18,750
Damian Sian: And that's not what we want.

361
00:21:20,562 --> 00:21:21,750
Damian Sian: So that work is complete.

362
00:21:21,875 --> 00:21:27,187
Damian Sian: I have in my tool. I can see all
my my landmarks, the landmarks

363
00:21:27,187 --> 00:21:32,375
Damian Sian: that have names and notes are
exposed directly in the sidebar.

364
00:21:33,125 --> 00:21:35,750
Damian Sian: There's a lot of manual
processes that have been

365
00:21:35,750 --> 00:21:39,125
Damian Sian: alleviated by having this all
inside of a tool. Creating that

366
00:21:39,125 --> 00:21:42,187
Damian Sian: legend, for example, was
something that you'd have to do

367
00:21:42,187 --> 00:21:42,812
Damian Sian: separately.

368
00:21:44,375 --> 00:21:47,562
Damian Sian: And then there was no
programmatic connection between

369
00:21:47,562 --> 00:21:50,687
Damian Sian: the object and the layers panel
and the annotation.

370
00:21:50,687 --> 00:21:51,750
Damian Sian: Now there is.

371
00:21:52,812 --> 00:21:54,625
Damian Sian: So cool stuff.

372
00:21:56,125 --> 00:21:57,250
Damian Sian: So that's landmarks.

373
00:21:57,250 --> 00:22:00,625
Damian Sian: And just so you know, when you
get this deck, everything that I

374
00:22:00,625 --> 00:22:02,500
Damian Sian: just talked about is in this
deck.

375
00:22:04,125 --> 00:22:06,187
Damian Sian: Right, all the things I said are
on the deck.

376
00:22:06,187 --> 00:22:09,125
Damian Sian: They're also in the
accessibility guide, both in

377
00:22:09,125 --> 00:22:10,187
Damian Sian: text and in video.

378
00:22:14,000 --> 00:22:14,812
Damian Sian: Headings.

379
00:22:17,187 --> 00:22:18,937
Damian Sian: I come here to the headings
before.

380
00:22:22,625 --> 00:22:23,000
Damian Sian: So.

381
00:22:24,125 --> 00:22:28,750
Damian Sian: Nope. First I have to read what
headings are so headings create

382
00:22:28,750 --> 00:22:32,875
Damian Sian: a structure in your user
interface that groups pieces of

383
00:22:32,875 --> 00:22:34,125
Damian Sian: content together.

384
00:22:34,687 --> 00:22:38,812
Damian Sian: It helps people who can't see
the interface create a mental

385
00:22:38,812 --> 00:22:42,687
Damian Sian: model of the structure of the
interface. What pieces of

386
00:22:42,687 --> 00:22:45,625
Damian Sian: content relate to other pieces
of content?

387
00:22:46,375 --> 00:22:48,312
Damian Sian: What's the hierarchy of
information?

388
00:22:49,187 --> 00:22:52,500
Damian Sian: How does it does the nesting of
the heading level impact the

389
00:22:52,500 --> 00:22:54,937
Damian Sian: meaning of the content that I'm
listening to?

390
00:22:56,375 --> 00:22:59,437
Damian Sian: All that's available to somebody
who can't see the content.

391
00:23:00,937 --> 00:23:05,687
Damian Sian: When you define what the heading
structure should be, without it,

392
00:23:05,687 --> 00:23:09,125
Damian Sian: all the content is just there
with no structural

393
00:23:09,125 --> 00:23:10,125
Damian Sian: relationships.

394
00:23:11,812 --> 00:23:12,625
Damian Sian: So in this interface.

395
00:23:14,375 --> 00:23:18,625
Damian Sian: We're saying that these three
buttons relate to the word

396
00:23:18,625 --> 00:23:23,312
Damian Sian: references that the main heading
of this entire page is called

397
00:23:23,312 --> 00:23:24,375
Damian Sian: Adobe Max 2024.

398
00:23:25,937 --> 00:23:29,562
Damian Sian: That this piece of text relates
to that heading and that all of

399
00:23:29,562 --> 00:23:31,937
Damian Sian: these text inputs relate to that
heading.

400
00:23:34,625 --> 00:23:37,937
Damian Sian: There was no special
hierarchical relationship that

401
00:23:37,937 --> 00:23:41,875
Damian Sian: was necessary to create this
content to that content, in my

402
00:23:41,875 --> 00:23:42,375
Damian Sian: opinion.

403
00:23:42,375 --> 00:23:43,750
Damian Sian: But your opinion may differ.

404
00:23:43,750 --> 00:23:45,750
Damian Sian: You might say, well, Dave,
that's completely incorrect.

405
00:23:46,375 --> 00:23:49,562
Damian Sian: That should have been the three
that relates up to the two that

406
00:23:49,562 --> 00:23:52,562
Damian Sian: relates up to the one and you
would be correct because you're

407
00:23:52,562 --> 00:23:55,625
Damian Sian: the content authors, you're the
content designers, you're the

408
00:23:55,625 --> 00:23:56,437
Damian Sian: visual designers.

409
00:23:56,687 --> 00:23:57,812
Damian Sian: It's your choice.

410
00:23:58,500 --> 00:23:59,750
Damian Sian: You don't want to leave it to
me.

411
00:24:00,500 --> 00:24:04,125
Damian Sian: Because I would choose an occams
razor and just find the quickest

412
00:24:04,125 --> 00:24:05,812
Damian Sian: way and so will an engineer so.

413
00:24:07,437 --> 00:24:11,562
Damian Sian: This experience is best served
by the people that I'm speaking

414
00:24:11,562 --> 00:24:14,625
Damian Sian: to right now, so let me show you
how to do it.

415
00:24:17,750 --> 00:24:19,812
Damian Sian: I would first start by grabbing
a piece of text.

416
00:24:22,250 --> 00:24:22,500
Damian Sian: Oops.

417
00:24:23,187 --> 00:24:24,000
Damian Sian: My doc out of there.

418
00:24:25,562 --> 00:24:27,375
Damian Sian: And then come to the headings
annotation.

419
00:24:29,125 --> 00:24:31,375
Damian Sian: And I can see that I have a list
of H1 through H6.

420
00:24:31,687 --> 00:24:34,187
Damian Sian: This is the HTML specification.

421
00:24:34,562 --> 00:24:38,562
Damian Sian: There is no H7 for example and
H7 will be a paragraph.

422
00:24:40,250 --> 00:24:42,937
Damian Sian: So based on that, I would start
with.

423
00:24:43,562 --> 00:24:45,937
Damian Sian: This is not the heading level
one, right?

424
00:24:46,000 --> 00:24:47,562
Damian Sian: This page isn't called
references.

425
00:24:49,125 --> 00:24:53,062
Damian Sian: This page is called Adobe Max
2024, so I would start with the

426
00:24:53,062 --> 00:24:54,687
Damian Sian: next logical piece as a 2.

427
00:24:57,625 --> 00:25:01,187
Damian Sian: Now I could see that in my file
I have the marker for H2.

428
00:25:01,187 --> 00:25:03,000
Damian Sian: I do not have a sidebar.

429
00:25:04,250 --> 00:25:08,875
Damian Sian: There is no notes or names that
are required for these, so

430
00:25:08,875 --> 00:25:13,125
Damian Sian: there's nothing else would go
possibly into a sidebar.

431
00:25:14,687 --> 00:25:17,187
Damian Sian: And somebody who doesn't have
the plug in could just look at

432
00:25:17,187 --> 00:25:19,750
Damian Sian: the numerical values associated
with this and not have to have

433
00:25:19,750 --> 00:25:20,937
Damian Sian: that additional understanding.

434
00:25:22,562 --> 00:25:25,500
Damian Sian: The next piece of text that I
see is a heading is the main

435
00:25:25,500 --> 00:25:25,875
Damian Sian: heading.

436
00:25:28,687 --> 00:25:31,125
Damian Sian: And I will say that is my H1.

437
00:25:35,062 --> 00:25:38,000
Damian Sian: Now this piece of content
relates up to that. Basically

438
00:25:38,000 --> 00:25:41,187
Damian Sian: all the other content, all the
other headings will relate up

439
00:25:41,187 --> 00:25:41,750
Damian Sian: to, right.

440
00:25:41,750 --> 00:25:43,875
Damian Sian: So we're talking about nesting
and hierarchy.

441
00:25:44,562 --> 00:25:47,125
Damian Sian: I'm going to go to an H2 as my
next heading.

442
00:25:50,375 --> 00:25:55,125
Damian Sian: You might say, Damian, that H2
doesn't look anything like that

443
00:25:55,125 --> 00:25:55,375
Damian Sian: H2.

444
00:25:56,937 --> 00:26:01,875
Damian Sian: What I'm talking about is a
semantic H2, not the visual CSS

445
00:26:01,875 --> 00:26:03,250
Damian Sian: styling of an H2.

446
00:26:04,937 --> 00:26:05,187
Damian Sian: OK.

447
00:26:05,187 --> 00:26:06,062
Damian Sian: You're styling.

448
00:26:06,562 --> 00:26:10,625
Damian Sian: Your presentation is separate
from the semantics, right?

449
00:26:10,625 --> 00:26:13,812
Damian Sian: The Screen reader user cannot
see that those two things don't

450
00:26:13,812 --> 00:26:14,375
Damian Sian: look alike.

451
00:26:15,312 --> 00:26:19,562
Damian Sian: They can hear if they serve the
same purpose and adhere they do.

452
00:26:22,062 --> 00:26:26,437
Damian Sian: And here now you can make an
argument that's at H2. You might

453
00:26:26,437 --> 00:26:28,375
Damian Sian: also say no, that's a three.

454
00:26:29,375 --> 00:26:31,812
Damian Sian: So I have to get rid of that,
right?

455
00:26:32,812 --> 00:26:34,875
Damian Sian: Both are equally correct. It's
your choice.

456
00:26:36,687 --> 00:26:40,875
Damian Sian: In the training file, just for
to avoid confusion here, I did

457
00:26:40,875 --> 00:26:44,437
Damian Sian: say user two right? Because I
don't see any special

458
00:26:44,437 --> 00:26:48,812
Damian Sian: relationship that's created from
that heading to that this stuff

459
00:26:48,812 --> 00:26:52,687
Damian Sian: is obviously all about the
e-mail guidelines. So that is

460
00:26:52,687 --> 00:26:55,750
Damian Sian: clearly the heading for that.
What level it.

461
00:26:55,750 --> 00:26:56,500
Damian Sian: At is up for debate.

462
00:26:58,437 --> 00:27:00,500
Damian Sian: But this work would be
considered complete, right?

463
00:27:00,500 --> 00:27:03,125
Damian Sian: Anything that's visually styled
to look like a heading.

464
00:27:04,687 --> 00:27:07,937
Damian Sian: It creates meaning in the
document that I'm now

465
00:27:07,937 --> 00:27:11,625
Damian Sian: communicating that meaning to
the screen reader user.

466
00:27:13,375 --> 00:27:16,500
Damian Sian: I'm giving them a way to
navigate this content and to

467
00:27:16,500 --> 00:27:19,750
Damian Sian: build and construct a mental
model of this content. How

468
00:27:19,750 --> 00:27:23,312
Damian Sian: things relate to each other,
what is the structure? There it

469
00:27:23,312 --> 00:27:23,500
Damian Sian: is.

470
00:27:32,125 --> 00:27:35,187
Damian Sian: Sorry I don't have the same
level. Kinda specify focus

471
00:27:35,187 --> 00:27:35,500
Damian Sian: order.

472
00:27:39,750 --> 00:27:42,187
Damian Sian: Let's look at the keyboarding of
this interface.

473
00:27:43,750 --> 00:27:45,000
Damian Sian: Obviously I'm starting with
that.

474
00:27:45,000 --> 00:27:47,500
Damian Sian: We look, remember that all the
way back to the beginning of the

475
00:27:47,500 --> 00:27:48,125
Damian Sian: training, right?

476
00:27:48,125 --> 00:27:51,750
Damian Sian: The first thing that was in
document object model is also

477
00:27:51,750 --> 00:27:55,687
Damian Sian: the first thing in the Tab tab
order so that Adobe Gen. Studio

478
00:27:55,687 --> 00:27:59,375
Damian Sian: Button is the first thing that
we would be able to tap to.

479
00:28:01,000 --> 00:28:05,062
Damian Sian: As I go from left, tabbing goes
from left to right and then top

480
00:28:05,062 --> 00:28:08,812
Damian Sian: to bottom and we get this Z
pattern that starts to occur in

481
00:28:08,812 --> 00:28:09,375
Damian Sian: the work.

482
00:28:10,625 --> 00:28:12,500
Damian Sian: So there's six items in the
banner.

483
00:28:13,625 --> 00:28:17,562
Damian Sian: There are 8 items here in the
site navigation.

484
00:28:19,062 --> 00:28:20,687
Damian Sian: I will come up to this piece
that says.

485
00:28:22,500 --> 00:28:22,625
Damian Sian: Back.

486
00:28:23,812 --> 00:28:28,187
Damian Sian: I forget the text that's hidden
right now and then come over

487
00:28:28,187 --> 00:28:30,250
Damian Sian: here to the invite and more.

488
00:28:30,437 --> 00:28:34,250
Damian Sian: And then I will come to this set
of controls, which is something

489
00:28:34,250 --> 00:28:34,562
Damian Sian: that.

490
00:28:36,125 --> 00:28:40,312
Damian Sian: Can be confusing for us when
we're doing our blue line

491
00:28:40,312 --> 00:28:43,687
Damian Sian: annotations that that is a
single tap step.

492
00:28:45,375 --> 00:28:49,562
Damian Sian: That when I got to that I would
then use my arrow keys because

493
00:28:49,562 --> 00:28:49,812
Damian Sian: the.

494
00:28:51,937 --> 00:28:55,437
Damian Sian: The pattern that's being used
here is a tap group.

495
00:28:58,062 --> 00:29:03,000
Damian Sian: Then I would come down here. My
last tap stop would be 25.

496
00:29:04,562 --> 00:29:06,375
Damian Sian: So let's go document that.

497
00:29:06,375 --> 00:29:10,750
Damian Sian: Let's build a specification that
shows our engineering partners

498
00:29:10,750 --> 00:29:14,500
Damian Sian: what we intended to be the
keyboard experience for this

499
00:29:14,500 --> 00:29:15,187
Damian Sian: interface.

500
00:29:19,187 --> 00:29:20,625
Damian Sian: I start by grabbing my first
item.

501
00:29:22,875 --> 00:29:27,812
Damian Sian: Then I come to focus order and
say add item and we can see it

502
00:29:27,812 --> 00:29:28,500
Damian Sian: puts A1.

503
00:29:29,937 --> 00:29:35,375
Damian Sian: Above the and to the left of the
object. It's also created our

504
00:29:35,375 --> 00:29:40,687
Damian Sian: sidebar, but again it's left the
focus order empty because we

505
00:29:40,687 --> 00:29:44,375
Damian Sian: don't have any notes about it
yet we will.

506
00:29:44,812 --> 00:29:47,125
Damian Sian: That will be only one of these
requires a note.

507
00:29:48,937 --> 00:29:50,187
Damian Sian: And from here it's pretty
simple.

508
00:29:50,187 --> 00:29:52,000
Damian Sian: I'm just grabbing an object and
saying add.

509
00:30:02,312 --> 00:30:07,000
Damian Sian: Right. So those are all the six
items there, the 8 items here, I

510
00:30:07,000 --> 00:30:11,437
Damian Sian: do wish this tool would allow
you to select multiple items in

511
00:30:11,437 --> 00:30:11,750
Damian Sian: the.

512
00:30:13,250 --> 00:30:16,562
Damian Sian: Layers panel and just click add
and just you know, push them all

513
00:30:16,562 --> 00:30:16,687
Damian Sian: in.

514
00:30:20,562 --> 00:30:20,937
Damian Sian: A lot of.

515
00:30:23,062 --> 00:30:23,937
Damian Sian: Looking to get this done.

516
00:30:26,312 --> 00:30:31,375
Damian Sian: Right. So tab stop 15 has a jump
here, right?

517
00:30:31,375 --> 00:30:33,375
Damian Sian: But I would come over to the
invite button.

518
00:30:34,375 --> 00:30:35,437
Damian Sian: That's kinda like the first.

519
00:30:37,000 --> 00:30:38,187
Damian Sian: Not 100% logical.

520
00:30:41,562 --> 00:30:42,625
Damian Sian: Focus path management.

521
00:30:44,375 --> 00:30:48,625
Damian Sian: And then I'm gonna grab this
entire tab group and I'm going

522
00:30:48,625 --> 00:30:53,250
Damian Sian: to say add item for tap stop 18
and this is the first time that

523
00:30:53,250 --> 00:30:55,875
Damian Sian: I'm gonna come here to my edit
icon.

524
00:30:56,375 --> 00:31:00,437
Damian Sian: I'm gonna put a note saying this
is a single tab stop.

525
00:31:04,062 --> 00:31:05,500
Damian Sian: With Arrow key operation.

526
00:31:10,375 --> 00:31:10,562
Damian Sian: Now.

527
00:31:12,125 --> 00:31:16,187
Damian Sian: For you to know, as a designer
or content author that this is a

528
00:31:16,187 --> 00:31:19,437
Damian Sian: single tab stop might be a
confusing piece for you.

529
00:31:19,562 --> 00:31:23,625
Damian Sian: And I think this also exposes
one of the important parts of

530
00:31:23,625 --> 00:31:27,500
Damian Sian: the blue line annotation
process, and that is that this

531
00:31:27,500 --> 00:31:31,312
Damian Sian: is often going to be a
conversation between you and the

532
00:31:31,312 --> 00:31:35,500
Damian Sian: engineering group. In fact, for
me to create this sample for

533
00:31:35,500 --> 00:31:37,250
Damian Sian: you, I spoke to engineers.

534
00:31:38,062 --> 00:31:41,437
Damian Sian: And they gave me guidance that I
wasn't aware of and we landed on

535
00:31:41,437 --> 00:31:41,687
Damian Sian: this.

536
00:31:42,250 --> 00:31:46,250
Damian Sian: Together and I think it's still
smarter for us to have the

537
00:31:46,250 --> 00:31:48,250
Damian Sian: conversation in Figma, right?

538
00:31:48,250 --> 00:31:50,750
Damian Sian: I'd rather take an eraser to the
drawing board than a

539
00:31:50,750 --> 00:31:52,937
Damian Sian: sledgehammer hammer to the
construction site.

540
00:31:54,500 --> 00:31:55,000
Damian Sian: Affordability.

541
00:31:56,687 --> 00:31:58,312
Damian Sian: Time to make changes.

542
00:31:58,437 --> 00:32:01,937
Damian Sian: The agileness, the nimbleness
that I have here rather than

543
00:32:01,937 --> 00:32:05,375
Damian Sian: encoding is this is a smarter
place for us to have these

544
00:32:05,375 --> 00:32:06,187
Damian Sian: conversations.

545
00:32:09,000 --> 00:32:09,312
Damian Sian: Alright.

546
00:32:11,687 --> 00:32:13,437
Damian Sian: A little low on time, so I'm
gonna move quickly.

547
00:32:20,562 --> 00:32:22,000
Damian Sian: I should land on 25.

548
00:32:24,625 --> 00:32:29,312
Damian Sian: Awesome again. Naming your
layers has a really nice benefit

549
00:32:29,312 --> 00:32:29,687
Damian Sian: here.

550
00:32:30,375 --> 00:32:32,937
Damian Sian: This would not be your
experience if you're just

551
00:32:32,937 --> 00:32:34,375
Damian Sian: clicking and dragging over.

552
00:32:35,937 --> 00:32:39,562
Damian Sian: Spectrum components, it would
just say like text field, text

553
00:32:39,562 --> 00:32:43,062
Damian Sian: field, text field large. You
know, so naming as a nice net

554
00:32:43,062 --> 00:32:43,562
Damian Sian: benefit.

555
00:32:45,375 --> 00:32:48,000
Damian Sian: Speaking of creating names.

556
00:32:49,562 --> 00:32:54,000
Damian Sian: All the pieces that were
interactive controls in this

557
00:32:54,000 --> 00:32:59,000
Damian Sian: interface that had an icon but
not a visible text label, and

558
00:32:59,000 --> 00:33:02,562
Damian Sian: the image that was here need to
be defined.

559
00:33:04,437 --> 00:33:07,562
Damian Sian: By the visual designer and
content authoring team.

560
00:33:09,312 --> 00:33:10,187
Damian Sian: Content design team.

561
00:33:11,875 --> 00:33:14,500
Damian Sian: I come to buy accessible names
before.

562
00:33:16,000 --> 00:33:16,062
Damian Sian: Page.

563
00:33:17,687 --> 00:33:18,562
Damian Sian: And I grab the 1st.

564
00:33:21,000 --> 00:33:25,625
Damian Sian: Piece of content that needs a
name. So I have the.

565
00:33:27,312 --> 00:33:29,125
Damian Sian: Magnifying glass icon.

566
00:33:30,812 --> 00:33:33,937
Damian Sian: I have to come to this piece
here that says accessibility

567
00:33:33,937 --> 00:33:34,250
Damian Sian: notes.

568
00:33:36,000 --> 00:33:38,875
Damian Sian: And then up top accessible name.

569
00:33:41,000 --> 00:33:45,062
Damian Sian: I'm gonna click the add button
and here it's gonna say search.

570
00:33:47,437 --> 00:33:52,500
Damian Sian: Again, I get the sidebar, but
now I do immediately get the

571
00:33:52,500 --> 00:33:54,812
Damian Sian: information in the sidebar.

572
00:33:56,500 --> 00:34:00,375
Damian Sian: OK. And if I didn't have this
plugin right, I wouldn't know

573
00:34:00,375 --> 00:34:04,125
Damian Sian: that connection between the
marker and the tool. But now I

574
00:34:04,125 --> 00:34:06,937
Damian Sian: can draw that connection between
the items.

575
00:34:08,937 --> 00:34:10,562
Damian Sian: Layer name and the.

576
00:34:11,625 --> 00:34:13,875
Damian Sian: The numeric identifier on the
screen.

577
00:34:17,937 --> 00:34:20,375
Damian Sian: Right here. I'm gonna call this
app Switcher.

578
00:34:29,812 --> 00:34:30,625
Damian Sian: Call this.

579
00:34:34,125 --> 00:34:34,687
Damian Sian: Center.

580
00:34:39,687 --> 00:34:42,812
Damian Sian: And here is a place where I'm
gonna put in a piece of dynamic

581
00:34:42,812 --> 00:34:43,375
Damian Sian: information.

582
00:34:44,875 --> 00:34:46,687
Damian Sian: I do that inside of brackets.

583
00:34:46,687 --> 00:34:47,562
Damian Sian: I just wrote the word.

584
00:34:50,687 --> 00:34:50,937
Damian Sian: N right.

585
00:34:50,937 --> 00:34:53,375
Damian Sian: So I want the screen meter to
read.

586
00:34:57,937 --> 00:34:59,062
Damian Sian: Zero notifications.

587
00:35:02,062 --> 00:35:02,937
Damian Sian: In this instance.

588
00:35:05,625 --> 00:35:08,687
Damian Sian: Right. If there was one
notification, I wanted to say

589
00:35:08,687 --> 00:35:10,875
Damian Sian: one notification, so I would
also do.

590
00:35:13,687 --> 00:35:16,125
Damian Sian: That the word the letter S.

591
00:35:18,625 --> 00:35:19,562
Damian Sian: I spell that correctly.

592
00:35:21,062 --> 00:35:21,312
Damian Sian: All right.

593
00:35:21,375 --> 00:35:23,937
Damian Sian: And then for the last piece
here, I'm going to say.

594
00:35:27,562 --> 00:35:28,312
Damian Sian: Username.

595
00:35:29,812 --> 00:35:31,562
Damian Sian: Astro PS account.

596
00:35:35,437 --> 00:35:39,187
Damian Sian: Now we notice that we're putting
these these items in. It can

597
00:35:39,187 --> 00:35:40,187
Damian Sian: cover things up.

598
00:35:41,000 --> 00:35:45,000
Damian Sian: So I have some options. I can
toggle them on and off as I

599
00:35:45,000 --> 00:35:46,187
Damian Sian: choose in my work.

600
00:35:48,125 --> 00:35:52,437
Damian Sian: I can go in and move these
things around somewhat.

601
00:35:54,125 --> 00:35:56,750
Damian Sian: Right. So I could put them all
in the same area.

602
00:35:58,625 --> 00:35:59,687
Damian Sian: I can move them out.

603
00:36:01,437 --> 00:36:02,312
Damian Sian: Make it look nicer.

604
00:36:04,187 --> 00:36:09,375
Damian Sian: But let's talk about the real
value here. When I look at the

605
00:36:09,375 --> 00:36:10,750
Damian Sian: completed piece.

606
00:36:12,812 --> 00:36:13,625
Damian Sian: We were.

607
00:36:15,125 --> 00:36:15,687
Damian Sian: Making one.

608
00:36:18,187 --> 00:36:20,687
Damian Sian: Frame for each annotation type.

609
00:36:21,250 --> 00:36:24,937
Damian Sian: Now we can include the mall in
one and there's a programmatic

610
00:36:24,937 --> 00:36:28,312
Damian Sian: connection between the
annotation marker and the object

611
00:36:28,312 --> 00:36:29,562
Damian Sian: on the layers panel.

612
00:36:31,125 --> 00:36:36,437
Damian Sian: One of the cool things is when I
have more than one annotation on

613
00:36:36,437 --> 00:36:37,750
Damian Sian: a single object.

614
00:36:40,125 --> 00:36:44,937
Damian Sian: The stark tool will will notice
that, right?

615
00:36:44,937 --> 00:36:48,250
Damian Sian: And it's got it says this is the
app Switcher piece and it has

616
00:36:48,250 --> 00:36:51,125
Damian Sian: both focus order and the name on
it, which is awesome.

617
00:36:52,687 --> 00:36:55,812
Damian Sian: By default it comes with an auto
layout with a horizontal.

618
00:36:59,500 --> 00:37:02,125
Damian Sian: Oh yeah, we could change that
around, right?

619
00:37:02,125 --> 00:37:03,375
Damian Sian: So in here, I said.

620
00:37:03,375 --> 00:37:06,937
Damian Sian: We'll make that vertical and put
some space between them so I can

621
00:37:06,937 --> 00:37:10,250
Damian Sian: go and and and kind of massage
these things to make them look

622
00:37:10,250 --> 00:37:10,562
Damian Sian: great.

623
00:37:12,312 --> 00:37:15,625
Damian Sian: Not required, but I know who I'm
talking to and I know you're

624
00:37:15,625 --> 00:37:18,750
Damian Sian: gonna do it. 'cause, I don't
think you can stop yourselves

625
00:37:18,750 --> 00:37:20,812
Damian Sian: from doing it. So that's how you
do it.

626
00:37:22,625 --> 00:37:26,750
Damian Sian: All right, so the limited time,
there's your finished product

627
00:37:26,750 --> 00:37:30,375
Damian Sian: all in one place, all
programmatically connected in a

628
00:37:30,375 --> 00:37:32,437
Damian Sian: way that we haven't had before.

629
00:37:32,500 --> 00:37:36,625
Damian Sian: The notes the the legend being
automatically generated for you

630
00:37:36,625 --> 00:37:38,000
Damian Sian: as well. Really cool.

631
00:37:39,625 --> 00:37:40,750
Damian Sian: When would you do this?

632
00:37:41,687 --> 00:37:45,125
Damian Sian: Blue lines are best served with
a design is more hardened,

633
00:37:45,125 --> 00:37:45,437
Damian Sian: right?

634
00:37:45,562 --> 00:37:48,625
Damian Sian: So after stakeholder review
before it's gonna go to.

635
00:37:50,187 --> 00:37:50,687
Damian Sian: Decoded.

636
00:37:53,375 --> 00:37:54,187
Damian Sian: If you do this work.

637
00:37:56,000 --> 00:38:00,500
Damian Sian: This measurement here is from a
arjera ticketing system for

638
00:38:00,500 --> 00:38:05,125
Damian Sian: accessibility audits where we
looked at select Adobe products

639
00:38:05,125 --> 00:38:07,062
Damian Sian: in representative samples.

640
00:38:07,062 --> 00:38:09,750
Damian Sian: So this is probably a rounding
error to the actual numbers.

641
00:38:11,312 --> 00:38:15,500
Damian Sian: Of exclusionary defects that
we've introduced in our work

642
00:38:15,500 --> 00:38:18,937
Damian Sian: that Adobe, we got 13
thousandish numbers here.

643
00:38:20,812 --> 00:38:22,562
Damian Sian: Not to say that designers call
in content.

644
00:38:22,562 --> 00:38:25,500
Damian Sian: Designers cost every single one
of them, nor that doing this

645
00:38:25,500 --> 00:38:28,500
Damian Sian: work of blue line annotations
would alleviate alleviate all of

646
00:38:28,500 --> 00:38:28,750
Damian Sian: them.

647
00:38:29,312 --> 00:38:32,437
Damian Sian: But I think we could all
intuitively think that we have a

648
00:38:32,437 --> 00:38:32,875
Damian Sian: positive.

649
00:38:33,875 --> 00:38:37,562
Damian Sian: Impact and that every chance
that we have to create a user

650
00:38:37,562 --> 00:38:41,125
Damian Sian: experience is a chance to
exclude or to include and doing

651
00:38:41,125 --> 00:38:44,750
Damian Sian: this work early in the process
will lead to more positive

652
00:38:44,750 --> 00:38:45,312
Damian Sian: outcomes.

653
00:38:47,937 --> 00:38:52,312
Damian Sian: The stark tool does have a way
for us to look at Figma files

654
00:38:52,312 --> 00:38:56,812
Damian Sian: across the enterprise and judge
whether or not blue lines have

655
00:38:56,812 --> 00:38:57,687
Damian Sian: been applied.

656
00:38:58,437 --> 00:39:02,000
Damian Sian: We can also run automated tests
from a centralized dashboard.

657
00:39:02,000 --> 00:39:04,437
Damian Sian: That is not something that's
ready today.

658
00:39:06,000 --> 00:39:07,812
Damian Sian: Stark has made a great plug in.

659
00:39:07,812 --> 00:39:11,500
Damian Sian: They've done an OK job with
making the the admin console and

660
00:39:11,500 --> 00:39:15,312
Damian Sian: dashboard part, so we're waiting
for that to improve before we

661
00:39:15,312 --> 00:39:16,562
Damian Sian: really roll that out.

662
00:39:18,750 --> 00:39:23,500
Damian Sian: And that concludes all the
talking that I have right we can

663
00:39:23,500 --> 00:39:25,312
Damian Sian: turn off the recording.

664
00:39:26,875 --> 00:39:30,437
Damian Sian: And I've used almost all of your
time for my presentation, but

665
00:39:30,437 --> 00:39:32,875
Damian Sian: I'm available for questions at
this point.

666
00:39:34,500 --> 00:39:36,312
Damian Sian: And be happy to take your
questions.

667
00:39:39,312 --> 00:39:40,000
Mariah Driver: Thank you.
