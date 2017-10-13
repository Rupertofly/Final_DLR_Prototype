{ƒ, ƒƒ} = require 'findModule'
InputModule = require "input-framer/input"
window.aB_Language = new Layer
	name: "aB_Language"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

language_Body = new Layer
	name: "language_Body"
	parent: aB_Language
	x: 0
	y: 138
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_2 = new Layer
	name: "bG_2"
	parent: language_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

language_But_English = new Layer
	name: "language_But_English"
	parent: language_Body
	x: 244
	y: 342
	backgroundColor: "transparent"
	width: 440
	height: 200
language_But_English.on Events.Tap, ->
	data.language = "English"
	flow.showNext ƒ("aB_Help"), scroll: false

rectangle_2 = new Layer
	name: "rectangle_2"
	parent: language_But_English
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_2 = new TextLayer
	name: "label_2"
	parent: language_But_English
	x: 125
	y: 62
	text: "English"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Chinese = new Layer
	name: "language_But_Chinese"
	parent: language_Body
	x: 244
	y: 622
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_3 = new Layer
	name: "rectangle_3"
	parent: language_But_Chinese
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_3 = new TextLayer
	name: "label_3"
	parent: language_But_Chinese
	x: 164
	y: 62
	text: "中文"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Thai = new Layer
	name: "language_But_Thai"
	parent: language_Body
	x: 244
	y: 902
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_4 = new Layer
	name: "rectangle_4"
	parent: language_But_Thai
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_4 = new TextLayer
	name: "label_4"
	parent: language_But_Thai
	x: 101
	y: 62
	text: "ไทย – ไทย"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Arabic = new Layer
	name: "language_But_Arabic"
	parent: language_Body
	x: 804
	y: 342
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_5 = new Layer
	name: "rectangle_5"
	parent: language_But_Arabic
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_5 = new TextLayer
	name: "label_5"
	parent: language_But_Arabic
	x: 158
	y: 62
	text: "عربي"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Spanish = new Layer
	name: "language_But_Spanish"
	parent: language_Body
	x: 804
	y: 622
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_6 = new Layer
	name: "rectangle_6"
	parent: language_But_Spanish
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_6 = new TextLayer
	name: "label_6"
	parent: language_But_Spanish
	x: 117
	y: 62
	text: "Español"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Greek = new Layer
	name: "language_But_Greek"
	parent: language_Body
	x: 804
	y: 902
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_7 = new Layer
	name: "rectangle_7"
	parent: language_But_Greek
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_7 = new TextLayer
	name: "label_7"
	parent: language_But_Greek
	x: 102
	y: 62
	text: "Ελληvικά"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Viet = new Layer
	name: "language_But_Viet"
	parent: language_Body
	x: 1364
	y: 342
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_8 = new Layer
	name: "rectangle_8"
	parent: language_But_Viet
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_8 = new TextLayer
	name: "label_8"
	parent: language_But_Viet
	x: 110
	y: 62
	text: "Việt-ngữ"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Turkish = new Layer
	name: "language_But_Turkish"
	parent: language_Body
	x: 1364
	y: 622
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_9 = new Layer
	name: "rectangle_9"
	parent: language_But_Turkish
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_9 = new TextLayer
	name: "label_9"
	parent: language_But_Turkish
	x: 135
	y: 62
	text: "Türkçe"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

language_But_Persian = new Layer
	name: "language_But_Persian"
	parent: language_Body
	x: 1364
	y: 902
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_10 = new Layer
	name: "rectangle_10"
	parent: language_But_Persian
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(218,115,75,1)"
	borderWidth: 6

label_10 = new TextLayer
	name: "label_10"
	parent: language_But_Persian
	x: 151
	y: 62
	text: "فار س"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"
