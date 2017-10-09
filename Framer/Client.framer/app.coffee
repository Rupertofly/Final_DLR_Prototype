
# --- Setup
ViewController = require 'ViewController'
{ƒ,ƒƒ} = require 'findModule'

flow = new FlowComponent


b_Splash = new Layer
	x: 0
	y: 0
	backgroundColor: "white"
	width: 2048
	height: 1536

splash_Body = new Layer
	parent: b_Splash
	x: 564
	y: 160
	backgroundColor: "transparent"
	width: 920
	height: 758

logo = new Layer
	parent: splash_Body
	x: 320
	y: 0
	width: 276
	height: 276
	image: "images/Logo.svg"

title = new TextLayer
	parent: splash_Body
	x: 0
	y: 320
	width: 918.8536370080562
	text: "Victoria Legal Aid"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 700
	textAlign: "center"
	color: "rgba(74,74,74,1)"

heading = new TextLayer
	parent: splash_Body
	x: 0
	y: 482
	width: 917.886927759102
	text: "Duty Lawyer Service Application for Aid"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Begin = new Layer
	parent: b_Splash
	name: "but_Begin"
	x: 724
	y: 960
	backgroundColor: "transparent"
	width: 600
	height: 280

ƒ("but_Begin").onTap ->
	flow.showNext b_Language
rectangle = new Layer
	parent: but_Begin
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label = new TextLayer
	parent: but_Begin
	x: 202
	y: 86
	text: "Begin"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

b_Language = new Layer
	x: 0
	y: 0
	backgroundColor: "white"
	width: 2048
	height: 1536

language_Body = new Layer
	parent: b_Language
	x: 244
	y: 480
	backgroundColor: "transparent"
	width: 1560
	height: 760

but_English = new Layer
	parent: language_Body
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_2 = new Layer
	parent: but_English
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_2 = new TextLayer
	parent: but_English
	x: 125
	y: 62
	text: "English"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Chinese = new Layer
	parent: language_Body
	x: 0
	y: 280
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_3 = new Layer
	parent: but_Chinese
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_3 = new TextLayer
	parent: but_Chinese
	x: 164
	y: 62
	text: "中文"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Thai = new Layer
	parent: language_Body
	x: 0
	y: 560
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_4 = new Layer
	parent: but_Thai
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_4 = new TextLayer
	parent: but_Thai
	x: 101
	y: 62
	text: "ไทย – ไทย"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Arabic = new Layer
	parent: language_Body
	x: 560
	y: 0
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_5 = new Layer
	parent: but_Arabic
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_5 = new TextLayer
	parent: but_Arabic
	x: 158
	y: 62
	text: "عربي"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Spanish = new Layer
	parent: language_Body
	x: 560
	y: 280
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_6 = new Layer
	parent: but_Spanish
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_6 = new TextLayer
	parent: but_Spanish
	x: 117
	y: 62
	text: "Español"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Greek = new Layer
	parent: language_Body
	x: 560
	y: 560
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_7 = new Layer
	parent: but_Greek
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_7 = new TextLayer
	parent: but_Greek
	x: 102
	y: 62
	text: "Ελληvικά"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Viet = new Layer
	parent: language_Body
	x: 1120
	y: 0
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_8 = new Layer
	parent: but_Viet
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_8 = new TextLayer
	parent: but_Viet
	x: 110
	y: 62
	text: "Việt-ngữ"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_Turkish = new Layer
	parent: language_Body
	x: 1120
	y: 280
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_9 = new Layer
	parent: but_Turkish
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_9 = new TextLayer
	parent: but_Turkish
	x: 135
	y: 62
	text: "Türkçe"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

but_persian = new Layer
	parent: language_Body
	x: 1120
	y: 560
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_10 = new Layer
	parent: but_persian
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_10 = new TextLayer
	parent: but_persian
	x: 151
	y: 62
	text: "فار س"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

heading_2 = new Layer
	parent: b_Language
	x: 84
	y: 40
	backgroundColor: "transparent"
	width: 1882
	height: 120

logo_2 = new Layer
	parent: heading_2
	x: 0
	y: 0
	width: 120
	height: 120
	image: "images/Logo.svg"

title_2 = new TextLayer
	parent: heading_2
	x: 160
	y: 24
	text: "Victoria Legal Aid"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(74,74,74,1)"

app4Aid = new TextLayer
	parent: heading_2
	x: 1400
	y: 24
	text: "Application for Aid"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(74,74,74,1)"
flow.showNext b_Splash
	