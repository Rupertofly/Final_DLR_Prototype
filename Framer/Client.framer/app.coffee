

# --- Setup
{ƒ,ƒƒ} = require 'findModule'
flow = new FlowComponent

class GridLayer extends Layer
	constructor: (opt={})->
		sizeTemplate = opt.layers[0]
		opt.backgroundColor ?= ''
		opt.margin ?= 10
		opt.marginRow ?= opt.margin
		opt.marginColumn ?= opt.margin
		opt.width ?= (sizeTemplate.width+opt.marginColumn)*opt.columns-opt.marginColumn
		opt.height ?= (sizeTemplate.height+opt.marginRow)*opt.rows-opt.marginRow
		opt.destroyRemaining ?= true

		super opt

		totalIndex = 0

		for rowIndex in [0...opt.rows]
			for colIndex in [0...opt.columns]
				if opt.layers[totalIndex]?
					cell = opt.layers[totalIndex]
					cell.superLayer = @
					cell.x = colIndex * (cell.width + opt.marginColumn)
					cell.y = rowIndex * (cell.height + opt.marginRow)
					++totalIndex
		if opt.destroyRemaining
			for layer in opt.layers
				layer.destroy() if layer.superLayer isnt @

InputModule = require "input-framer/input"
Screen.backgroundColor = "rgba(250,250,250,1)"

data = {}

#/-
#AB Splash
aB_Splash = new Layer
	name: "aB_Splash"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

splash_Body = new Layer
	name: "splash_Body"
	parent: aB_Splash
	x: 0
	y: 138
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG = new Layer
	name: "bG"
	parent: splash_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

splash_i_Logo = new Layer
	name: "splash_i_Logo"
	parent: splash_Body
	x: 884
	y: 22
	width: 276
	height: 276
	image: "images/Splash_i_Logo.svg"

splash_t_Title = new TextLayer
	name: "splash_t_Title"
	parent: splash_Body
	x: 564
	y: 342
	width: 918.8536370080562
	text: "Victoria Legal Aid"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 700
	textAlign: "center"
	color: "rgba(74,74,74,1)"

splash_t_Heading = new TextLayer
	name: "splash_t_Heading"
	parent: splash_Body
	x: 564
	y: 504
	width: 917.886927759102
	text: "Duty Lawyer Service Application for Aid"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

splash_But_Begin = new Layer
	name: "splash_But_Begin"
	parent: splash_Body
	x: 724
	y: 822
	backgroundColor: "transparent"
	width: 600
	height: 280
splash_But_Begin.on Events.Tap, ->
	flow.showNext aB_Language, scroll:false

rectangle = new Layer
	name: "rectangle"
	parent: splash_But_Begin
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label = new TextLayer
	name: "label"
	parent: splash_But_Begin
	x: 202
	y: 86
	text: "Begin"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"
#/AB
#AB Language
aB_Language = new Layer
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
	flow.showNext aB_Help, scroll:false

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


#/AB
#AB Help
aB_Help = new Layer
	name: "aB_Help"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

help_Body = new Layer
	name: "help_Body"
	parent: aB_Help
	x: 0
	y: 122
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_3 = new Layer
	name: "bG_3"
	parent: help_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

help_t_Help = new TextLayer
	name: "help_t_Help"
	parent: help_Body
	x: 300
	y: 420
	text: "Is Someone Helping you Fill Out This Form?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

help_i_Buoy = new Layer
	name: "help_i_Buoy"
	parent: help_Body
	x: 884
	y: 78
	width: 280
	height: 280
	image: "images/Help_i_Buoy.svg"

help_But_Back = new Layer
	name: "help_But_Back"
	parent: help_Body
	x: 404
	y: 1158
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_11 = new Layer
	name: "rectangle_11"
	parent: help_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(221,240,249,1)"
	borderRadius: 40
	borderColor: "rgba(119,131,136,1)"
	borderWidth: 6

label_11 = new TextLayer
	name: "label_11"
	parent: help_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

help_But_No = new Layer
	name: "help_But_No"
	parent: help_Body
	x: 1204
	y: 678
	backgroundColor: "transparent"
	width: 600
	height: 280
help_But_No.on Events.Tap, ->
	data.help = false
	flow.showNext aB_ReadSpeak

rectangle_12 = new Layer
	name: "rectangle_12"
	parent: help_But_No
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(253,225,225,1)"
	borderRadius: 40
	borderColor: "rgba(194,55,52,1)"
	borderWidth: 6

label_12 = new TextLayer
	name: "label_12"
	parent: help_But_No
	x: 0
	y: 0
	width: 600
	text: "No"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(194,55,52,1)"

help_But_Yes = new Layer
	name: "help_But_Yes"
	parent: help_Body
	x: 244
	y: 678
	backgroundColor: "transparent"
	width: 600
	height: 280
help_But_Yes.on Events.Tap, ->
	data.help = true
	flow.showNext aB_ReadSpeak

rectangle_13 = new Layer
	name: "rectangle_13"
	parent: help_But_Yes
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(232,245,230,1)"
	borderRadius: 40
	borderColor: "rgba(108,176,101,1)"
	borderWidth: 6

label_13 = new TextLayer
	name: "label_13"
	parent: help_But_Yes
	x: 0
	y: 0
	width: 600
	text: "Yes"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(87,155,81,1)"
#/AB
#AB ReadSpeak
RVals =
	rNone:0
	rSomewhat:0
	rGood:0
	rFluent:0
SVals =
	sNone:0
	sSomewhat:0
	sGood:0
	sFluent:0

aB_ReadSpeak = new Layer
	name: "aB_ReadSpeak"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

readSpeak_Body = new Layer
	name: "readSpeak_Body"
	parent: aB_ReadSpeak
	x: 0
	y: 122
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_4 = new Layer
	name: "bG_4"
	parent: readSpeak_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

readSpeak_i_Read = new Layer
	name: "readSpeak_i_Read"
	parent: readSpeak_Body
	x: 404
	y: 370
	width: 120
	height: 108.30369484395666
	image: "images/ReadSpeak_i_Read.svg"

readSpeak_i_Speak = new Layer
	name: "readSpeak_i_Speak"
	parent: readSpeak_Body
	x: 410
	y: 838
	width: 107.65923571511956
	height: 120
	image: "images/ReadSpeak_i_Speak.svg"

readSpeak_But_Back = new Layer
	name: "readSpeak_But_Back"
	parent: readSpeak_Body
	x: 404
	y: 1158
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_14 = new Layer
	name: "rectangle_14"
	parent: readSpeak_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_14 = new TextLayer
	name: "label_14"
	parent: readSpeak_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

readSpeak_t_Read = new TextLayer
	name: "readSpeak_t_Read"
	parent: readSpeak_Body
	x: 496
	y: 198
	text: "How well can you read English?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_t_Speak = new TextLayer
	name: "readSpeak_t_Speak"
	parent: readSpeak_Body
	x: 474
	y: 680
	text: "How well can you speak English?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_rNone = new Layer
	name: "readSpeak_But_rNone"
	parent: readSpeak_Body
	x: 564
	y: 358
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_rNone.on Events.Tap, ->
	RVals = changeSel RVals, "rNone"
	updateSel()

rectangle_15 = new Layer
	name: "rectangle_15"
	parent: readSpeak_But_rNone
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_15 = new TextLayer
	name: "label_15"
	parent: readSpeak_But_rNone
	x: 16
	y: 28
	width: 250
	text: "None"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_sNone = new Layer
	name: "readSpeak_But_sNone"
	parent: readSpeak_Body
	x: 564
	y: 838
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_sNone.on Events.Tap, ->
	SVals = changeSel SVals, "sNone"
	updateSel()

rectangle_16 = new Layer
	name: "rectangle_16"
	parent: readSpeak_But_sNone
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_16 = new TextLayer
	name: "label_16"
	parent: readSpeak_But_sNone
	x: 16
	y: 28
	width: 250
	text: "None"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_rSomewhat = new Layer
	name: "readSpeak_But_rSomewhat"
	parent: readSpeak_Body
	x: 884
	y: 358
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_rSomewhat.on Events.Tap, ->
	RVals = changeSel RVals, "rSomewhat"
	updateSel()

rectangle_17 = new Layer
	name: "rectangle_17"
	parent: readSpeak_But_rSomewhat
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_17 = new TextLayer
	name: "label_17"
	parent: readSpeak_But_rSomewhat
	x: 16
	y: 28
	width: 250
	text: "Somewhat"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_sSomewhat = new Layer
	name: "readSpeak_But_sSomewhat"
	parent: readSpeak_Body
	x: 884
	y: 838
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_sSomewhat.on Events.Tap, ->
	SVals = changeSel SVals, "sSomewhat"
	updateSel()

rectangle_18 = new Layer
	name: "rectangle_18"
	parent: readSpeak_But_sSomewhat
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_18 = new TextLayer
	name: "label_18"
	parent: readSpeak_But_sSomewhat
	x: 16
	y: 28
	width: 250
	text: "Somewhat"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_rGood = new Layer
	name: "readSpeak_But_rGood"
	parent: readSpeak_Body
	x: 1204
	y: 358
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_rGood.on Events.Tap, ->
	RVals = changeSel RVals, "rGood"
	updateSel()

rectangle_19 = new Layer
	name: "rectangle_19"
	parent: readSpeak_But_rGood
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_19 = new TextLayer
	name: "label_19"
	parent: readSpeak_But_rGood
	x: 16
	y: 28
	width: 250
	text: "Good"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_sGood = new Layer
	name: "readSpeak_But_sGood"
	parent: readSpeak_Body
	x: 1204
	y: 838
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_sGood.on Events.Tap, ->
	SVals = changeSel(SVals,"sGood")
	updateSel()

rectangle_20 = new Layer
	name: "rectangle_20"
	parent: readSpeak_But_sGood
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_20 = new TextLayer
	name: "label_20"
	parent: readSpeak_But_sGood
	x: 16
	y: 28
	width: 250
	text: "Good"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_rFluent = new Layer
	name: "readSpeak_But_rFluent"
	parent: readSpeak_Body
	x: 1524
	y: 358
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_rFluent.on Events.Tap, ->
	RVals = changeSel(RVals,"rFluent")
	updateSel()

rectangle_21 = new Layer
	name: "rectangle_21"
	parent: readSpeak_But_rFluent
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_21 = new TextLayer
	name: "label_21"
	parent: readSpeak_But_rFluent
	x: 16
	y: 28
	width: 250
	text: "Fluent"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(71,71,71,1)"

readSpeak_But_sFluent = new Layer
	name: "readSpeak_But_sFluent"
	parent: readSpeak_Body
	x: 1524
	y: 838
	backgroundColor: "transparent"
	width: 282
	height: 120
readSpeak_But_sFluent.on Events.Tap, ->
	SVals = changeSel(SVals,"sFluent")
	updateSel()

rectangle_22 = new Layer
	name: "rectangle_22"
	parent: readSpeak_But_sFluent
	x: 0
	y: 0
	width: 282
	height: 120
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 6

label_22 = new TextLayer
	name: "label_22"
	parent: readSpeak_But_sFluent
	x: 16
	y: 28
	width: 250
	text: "Fluent"
	fontSize: 44
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

readSpeak_But_Next = new Layer
	name: "readSpeak_But_Next"
	parent: readSpeak_Body
	x: 1364
	y: 1118
	backgroundColor: "transparent"
	width: 440
	height: 200
readSpeak_But_Next.on Events.Tap, ->
	for k,v of RVals
		if v is 1 then rAb = k
	for k,v of SVals
		if v is 1 then sAb = k
	data.ReadAbility = rAb
	data.SpeakAbility = sAb
	print data
	flow.showNext aB_NDOB


rectangle_23 = new Layer
	name: "rectangle_23"
	parent: readSpeak_But_Next
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(250,242,232,1)"
	borderRadius: 40
	borderColor: "rgba(151,151,151,1)"
	borderWidth: 6

label_23 = new TextLayer
	name: "label_23"
	parent: readSpeak_But_Next
	x: 159
	y: 62
	text: "Next"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(71,71,71,1)"

aB_ReadSpeak.ƒ("*Next").visible = false
R_Filled = false
S_Filled = false
ReadSpeak_Filled = false
changeSel = (arr,nw) ->
	for but,val of arr
		if but is nw then arr[but]  = 1 else arr[but] = 0
	return arr
updateSel = () ->
	for i,j of RVals
		R_Filled = 1 if j is 1
		if j is 0 then aB_ReadSpeak.ƒ("*#{i}").ƒ("rec*").borderColor = "#EFEFEF"
		if j is 1 then aB_ReadSpeak.ƒ("*#{i}").ƒ("rec*").borderColor = "#F56A67"
	for i,j of SVals
		S_Filled = 1 if j is 1
		if j is 0 then aB_ReadSpeak.ƒ("*#{i}").ƒ("rec*").borderColor = "#EFEFEF"
		if j is 1 then aB_ReadSpeak.ƒ("*#{i}").ƒ("rec*").borderColor = "#F56A67"
	ReadSpeak_Filled = true if S_Filled is 1 and R_Filled is 1
	aB_ReadSpeak.ƒ("*Next").visible = ReadSpeak_Filled
updateSel()

#/AB
#AB Interpreter
aB_Interpreter = new Layer
	name: "aB_Interpreter"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

interp_body = new Layer
	name: "interp_body"
	parent: aB_Interpreter
	x: 0
	y: 122
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_5 = new Layer
	name: "bG_5"
	parent: interp_body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

interp_But_Back = new Layer
	name: "interp_But_Back"
	parent: interp_body
	x: 404
	y: 1158
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_24 = new Layer
	name: "rectangle_24"
	parent: interp_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_24 = new TextLayer
	name: "label_24"
	parent: interp_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

interp_t_Interpretor = new TextLayer
	name: "interp_t_Interpretor"
	parent: interp_body
	x: 554
	y: 340
	text: "Do you need an interpreter?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

interp_i_Language = new Layer
	name: "interp_i_Language"
	parent: interp_body
	x: 950
	y: 140
	width: 150
	height: 155
	image: "images/Interp_i_Language.svg"

interp_But_no = new Layer
	name: "interp_But_no"
	parent: interp_body
	x: 1204
	y: 678
	backgroundColor: "transparent"
	width: 600
	height: 280
interp_But_no.on Events.Tap, ->
	data.interp = "none"
	print data
	flow.showNext aB_Contact

rectangle_25 = new Layer
	name: "rectangle_25"
	parent: interp_But_no
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(253,225,225,1)"
	borderRadius: 40
	borderColor: "rgba(194,55,52,1)"
	borderWidth: 6

label_25 = new TextLayer
	name: "label_25"
	parent: interp_But_no
	x: 0
	y: 0
	width: 600
	text: "No"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(194,55,52,1)"

interp_But_yes = new Layer
	name: "interp_But_yes"
	parent: interp_body
	x: 244
	y: 678
	backgroundColor: "transparent"
	width: 600
	height: 280
interp_But_yes.on Events.Tap, ->
	flow.showOverlayCenter aB_Grid
rectangle_26 = new Layer
	name: "rectangle_26"
	parent: interp_But_yes
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(232,245,230,1)"
	borderRadius: 40
	borderColor: "rgba(108,176,101,1)"
	borderWidth: 6

label_26 = new TextLayer
	name: "label_26"
	parent: interp_But_yes
	x: 0
	y: 0
	width: 600
	text: "Yes"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(87,155,81,1)"
#/AB
#AB Concession
aB_Concession = new Layer
	name: "aB_Concession"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

concession_Body = new Layer
	name: "concession_Body"
	parent: aB_Concession
	x: 0
	y: 122
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_6 = new Layer
	name: "bG_6"
	parent: concession_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

concession_But_Back = new Layer
	name: "concession_But_Back"
	parent: concession_Body
	x: 404
	y: 1158
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_27 = new Layer
	name: "rectangle_27"
	parent: concession_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_27 = new TextLayer
	name: "label_27"
	parent: concession_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

concession_t_Card = new TextLayer
	name: "concession_t_Card"
	parent: concession_Body
	x: 269
	y: 340
	text: "Do you have a current Centrelink benefit card Or Pensioner Concession Card"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

concession_But_No = new Layer
	name: "concession_But_No"
	parent: concession_Body
	x: 1204
	y: 678
	backgroundColor: "transparent"
	width: 600
	height: 280

rectangle_28 = new Layer
	name: "rectangle_28"
	parent: concession_But_No
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(253,225,225,1)"
	borderRadius: 40
	borderColor: "rgba(194,55,52,1)"
	borderWidth: 6

label_28 = new TextLayer
	name: "label_28"
	parent: concession_But_No
	x: 0
	y: 0
	width: 600
	text: "No"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(194,55,52,1)"

concession_But_Yes = new Layer
	name: "concession_But_Yes"
	parent: concession_Body
	x: 244
	y: 678
	backgroundColor: "transparent"
	width: 600
	height: 280

rectangle_29 = new Layer
	name: "rectangle_29"
	parent: concession_But_Yes
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(232,245,230,1)"
	borderRadius: 40
	borderColor: "rgba(108,176,101,1)"
	borderWidth: 6

label_29 = new TextLayer
	name: "label_29"
	parent: concession_But_Yes
	x: 0
	y: 0
	width: 600
	text: "Yes"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(87,155,81,1)"

concession_i_Centrelink = new Layer
	name: "concession_i_Centrelink"
	parent: concession_Body
	x: 923.9999999900319
	y: 100
	width: 199.99937163972305
	height: 195.39986654815797
	image: "images/Concession_i_Centrelink.svg"
#/AB
#AB Employment
aB_Employment = new Layer
	name: "aB_Employment"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

employment_Body = new Layer
	name: "employment_Body"
	parent: aB_Employment
	x: 0
	y: 122
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_7 = new Layer
	name: "bG_7"
	parent: employment_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

employment_But_Back = new Layer
	name: "employment_But_Back"
	parent: employment_Body
	x: 404
	y: 1158
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_30 = new Layer
	name: "rectangle_30"
	parent: employment_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_30 = new TextLayer
	name: "label_30"
	parent: employment_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

employment_t_HowEmployed = new TextLayer
	name: "employment_t_HowEmployed"
	parent: employment_Body
	x: 616
	y: 340
	text: "How are you Employed?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

employment_i_Breifcase = new Layer
	name: "employment_i_Breifcase"
	parent: employment_Body
	x: 924
	y: 68
	width: 200
	height: 180.69020689655176
	image: "images/Employment_i_Breifcase.svg"

employment_But_Un = new Layer
	name: "employment_But_Un"
	parent: employment_Body
	x: 324
	y: 518
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_31 = new Layer
	name: "rectangle_31"
	parent: employment_But_Un
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(198,94,54,1)"
	borderWidth: 6

label_31 = new TextLayer
	name: "label_31"
	parent: employment_But_Un
	x: 52
	y: 62
	text: "Unemployed"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

employment_But_Self = new Layer
	name: "employment_But_Self"
	parent: employment_Body
	x: 804
	y: 518
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_32 = new Layer
	name: "rectangle_32"
	parent: employment_But_Self
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(198,94,54,1)"
	borderWidth: 6

label_32 = new TextLayer
	name: "label_32"
	parent: employment_But_Self
	x: 32
	y: 62
	text: "Self Employed"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

employment_But_Casual = new Layer
	name: "employment_But_Casual"
	parent: employment_Body
	x: 1284
	y: 518
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_33 = new Layer
	name: "rectangle_33"
	parent: employment_But_Casual
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(198,94,54,1)"
	borderWidth: 6

label_33 = new TextLayer
	name: "label_33"
	parent: employment_But_Casual
	x: 88
	y: 24
	text: "Casually  Employed"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

employment_But_FullTime = new Layer
	name: "employment_But_FullTime"
	parent: employment_Body
	x: 1040
	y: 798
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_34 = new Layer
	name: "rectangle_34"
	parent: employment_But_FullTime
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(198,94,54,1)"
	borderWidth: 6

label_34 = new TextLayer
	name: "label_34"
	parent: employment_But_FullTime
	x: 88
	y: 24
	text: "Employed Full Time"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"

employment_But_PartTime = new Layer
	name: "employment_But_PartTime"
	parent: employment_Body
	x: 564
	y: 798
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_35 = new Layer
	name: "rectangle_35"
	parent: employment_But_PartTime
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(254,233,225,1)"
	borderRadius: 40
	borderColor: "rgba(198,94,54,1)"
	borderWidth: 6

label_35 = new TextLayer
	name: "label_35"
	parent: employment_But_PartTime
	x: 88
	y: 24
	text: "Employed Part Time"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(74,74,74,1)"
#/AB
#AB WeekIncome
aB_WeekIncome = new Layer
	name: "aB_WeekIncome"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

weekIncome_Body = new Layer
	name: "weekIncome_Body"
	parent: aB_WeekIncome
	x: 0
	y: 122
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_8 = new Layer
	name: "bG_8"
	parent: weekIncome_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

weekIncome_But_Back = new Layer
	name: "weekIncome_But_Back"
	parent: weekIncome_Body
	x: 404
	y: 1158
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_36 = new Layer
	name: "rectangle_36"
	parent: weekIncome_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_36 = new TextLayer
	name: "label_36"
	parent: weekIncome_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

weekIncome_t_Income = new TextLayer
	name: "weekIncome_t_Income"
	parent: weekIncome_Body
	x: 393
	y: 340
	text: "What is your weekly income after tax?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

weekIncome_i_briefcase = new Layer
	name: "weekIncome_i_briefcase"
	parent: weekIncome_Body
	x: 924
	y: 68
	width: 200
	height: 180.69020689655176

weekIncome_But_Next = new Layer
	name: "weekIncome_But_Next"
	parent: weekIncome_Body
	x: 1364
	y: 1118
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_37 = new Layer
	name: "rectangle_37"
	parent: weekIncome_But_Next
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(250,242,232,1)"
	borderRadius: 40
	borderColor: "rgba(151,151,151,1)"
	borderWidth: 2

label_37 = new TextLayer
	name: "label_37"
	parent: weekIncome_But_Next
	x: 159
	y: 62
	text: "Next"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(71,71,71,1)"

weekIncome_Txt_Income = new Layer
	name: "weekIncome_Txt_Income"
	parent: weekIncome_Body
	x: 484
	y: 586
	backgroundColor: "transparent"
	width: 1080
	height: 120

rectangle2 = new Layer
	name: "rectangle2"
	parent: weekIncome_Txt_Income
	x: 0
	y: 0
	width: 1080
	height: 120
	backgroundColor: "rgba(253,245,228,1)"
	borderRadius: 10
	borderColor: "rgba(245,190,85,1)"
	borderWidth: 10

weeklyIncome = new TextLayer
	name: "weeklyIncome"
	parent: weekIncome_Txt_Income
	x: 21
	y: 12
	text: "Weekly Income"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(247,203,119,1)"
#/AB
#AB HourIncome
aB_HourIncome = new Layer
	name: "aB_HourIncome"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

hourIncome_Body = new Layer
	name: "hourIncome_Body"
	parent: aB_HourIncome
	x: 0
	y: 122
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_9 = new Layer
	name: "bG_9"
	parent: hourIncome_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

hourlyIncome_But_Back = new Layer
	name: "hourlyIncome_But_Back"
	parent: hourIncome_Body
	x: 404
	y: 1158
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_38 = new Layer
	name: "rectangle_38"
	parent: hourlyIncome_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_38 = new TextLayer
	name: "label_38"
	parent: hourlyIncome_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

hourlyIncome_t_Rate = new TextLayer
	name: "hourlyIncome_t_Rate"
	parent: hourIncome_Body
	x: 458
	y: 362
	text: "What is your Hourly rate after tax?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

hourlyIncome_t_Hours = new TextLayer
	name: "hourlyIncome_t_Hours"
	parent: hourIncome_Body
	x: 324
	y: 682
	text: "How many Hours do you work per week?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

hourIncome_i_breifcase = new Layer
	name: "hourIncome_i_breifcase"
	parent: hourIncome_Body
	x: 924
	y: 68
	width: 200
	height: 180.69020689655176

hourIncome_But_Next = new Layer
	name: "hourIncome_But_Next"
	parent: hourIncome_Body
	x: 1364
	y: 1118
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_39 = new Layer
	name: "rectangle_39"
	parent: hourIncome_But_Next
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(250,242,232,1)"
	borderRadius: 40
	borderColor: "rgba(151,151,151,1)"
	borderWidth: 2

label_39 = new TextLayer
	name: "label_39"
	parent: hourIncome_But_Next
	x: 159
	y: 62
	text: "Next"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(71,71,71,1)"

hourIncome_Txt_Rate = new Layer
	name: "hourIncome_Txt_Rate"
	parent: hourIncome_Body
	x: 484
	y: 518
	backgroundColor: "transparent"
	width: 1080
	height: 120

rectangle2_2 = new Layer
	name: "rectangle2_2"
	parent: hourIncome_Txt_Rate
	x: 0
	y: 0
	width: 1080
	height: 120
	backgroundColor: "rgba(253,245,228,1)"
	borderRadius: 10
	borderColor: "rgba(245,190,85,1)"
	borderWidth: 10

hourlyRate = new TextLayer
	name: "hourlyRate"
	parent: hourIncome_Txt_Rate
	x: 21
	y: 12
	text: "Hourly Rate"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(247,203,119,1)"

hourIncome_Txt_Hours = new Layer
	name: "hourIncome_Txt_Hours"
	parent: hourIncome_Body
	x: 484
	y: 838
	backgroundColor: "transparent"
	width: 1080
	height: 120

rectangle2_3 = new Layer
	name: "rectangle2_3"
	parent: hourIncome_Txt_Hours
	x: 0
	y: 0
	width: 1080
	height: 120
	backgroundColor: "rgba(253,245,228,1)"
	borderRadius: 10
	borderColor: "rgba(245,190,85,1)"
	borderWidth: 10

hoursPerWeek = new TextLayer
	name: "hoursPerWeek"
	parent: hourIncome_Txt_Hours
	x: 21
	y: 12
	text: "Hours per Week"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(247,203,119,1)"
#/AB
#AB NDOB

aB_NDOB = new Layer
	name: "aB_NDOB"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

nDOB_Body = new Layer
	name: "nDOB_Body"
	parent: aB_NDOB
	x: 0
	y: 138
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_10 = new Layer
	name: "bG_10"
	parent: nDOB_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

nDOB_But_Back = new Layer
	name: "nDOB_But_Back"
	parent: nDOB_Body
	x: 404
	y: 1142
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_40 = new Layer
	name: "rectangle_40"
	parent: nDOB_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_40 = new TextLayer
	name: "label_40"
	parent: nDOB_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

nDOB_t_Name = new TextLayer
	name: "nDOB_t_Name"
	parent: nDOB_Body
	x: 680
	y: 174
	text: "What is your name?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

nDOB_t_Dob = new TextLayer
	name: "nDOB_t_Dob"
	parent: nDOB_Body
	x: 568
	y: 654
	text: "What is your date of birth?"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

nDOB_But_Next = new Layer
	name: "nDOB_But_Next"
	parent: nDOB_Body
	x: 1364
	y: 1102
	backgroundColor: "transparent"
	width: 440
	height: 200
nDOB_But_Next.on Events.Tap, ->
	print data.ReadAbility
	print  data.ReadAbility is ("rGood" or "rFluent")
	if name.value isnt ("Name" or "") and day.value isnt ""
		data.name = name.value
		data.Dob = day.value
		if data.ReadAbility is ("rGood" or "rFluent")
			if data.SpeakAbility is ("sGood" or "sFluent")
				flow.showNext aB_Contact
				data.interp = "none"
		else
			flow.showNext aB_Interpreter

rectangle_41 = new Layer
	name: "rectangle_41"
	parent: nDOB_But_Next
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(250,242,232,1)"
	borderRadius: 40
	borderColor: "rgba(151,151,151,1)"
	borderWidth: 6

label_41 = new TextLayer
	name: "label_41"
	parent: nDOB_But_Next
	x: 159
	y: 62
	text: "Next"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(71,71,71,1)"

nDOB_i_Pen = new Layer
	name: "nDOB_i_Pen"
	parent: nDOB_Body
	x: 404
	y: 344
	width: 120
	height: 120.00001874996185
	image: "images/NDOB_i_Pen.svg"

nDOB_i_Cal = new Layer
	name: "nDOB_i_Cal"
	parent: nDOB_Body
	x: 404
	y: 822
	width: 120
	height: 121.90807878305584
	image: "images/NDOB_i_Cal.svg"

nDOB_text_Name = new Layer
	name: "nDOB_text_Name"
	parent: nDOB_Body
	x: 564
	y: 342
	backgroundColor: "transparent"
	width: 1080
	height: 120

rectangle2_4 = new Layer
	name: "rectangle2_4"
	parent: nDOB_text_Name
	x: 0
	y: 0
	width: 1080
	height: 120
	backgroundColor: "rgba(253,245,228,1)"
	borderRadius: 10
	borderColor: "rgba(245,190,85,1)"
	borderWidth: 10

name = new InputModule.Input
	name: "name"
	parent: nDOB_text_Name
	x: 21
	y: 0
	height: 120
	virtualKeyboard: false
	text: "Name"
	textColour: "#C98639"
	fontSize: "72"
	fontFamily: "Avenir Next"
	fontWeight: "400"
	textAlign: "center"
	color: "rgba(247,203,119,1)"
name.style =
	fontSize: "72px"
	color:"#C98639"
	fontWeight: "400"

nDOB_But_Day = new Layer
	name: "nDOB_But_Day"
	parent: nDOB_Body
	x: Align.center
	y: 822
	backgroundColor: "transparent"
	width: 700
	height: 120

rectangle2_5 = new Layer
	name: "rectangle2_5"
	parent: nDOB_But_Day
	x: 0
	y: 0
	width: 700
	height: 120
	backgroundColor: "rgba(221,240,249,1)"
	borderRadius: 20
	borderColor: "rgba(57,151,192,1)"
	borderWidth: 10

day = new InputModule.Input
	name: "day"
	parent: nDOB_But_Day
	x: 3
	y: 12
	height:100
	width: 700
	text: "DOB"
	type: "date"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "center"
	color: "rgba(171,218,239,1)"
day.style =
	fontSize: "72px"
	color: "#2582AB"
	fontWeight: "400"
day.input.max = "2010-01-01"
day.input.value = "2010-01-01"
nDOB_But_Next.visible = false
day.on "input", ->
	if name.value isnt ("Name" or "") and day.value isnt ""
		nDOB_But_Next.visible = true
name.on "input", ->
	if name.value isnt ("Name" or "") and day.value isnt ""
		nDOB_But_Next.visible = true
name.on "keyup", (event) ->
	if event.which is 13 then name.input.blur()
name.onFocus ->
	if @value is "Name" then @value = ""
#/AB
#AB Contact
aB_Contact = new Layer
	name: "aB_Contact"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 2048
	height: 1536

contact_Body = new Layer
	name: "contact_Body"
	parent: aB_Contact
	x: 0
	y: 120
	backgroundColor: "transparent"
	width: 2048
	height: 1416

bG_11 = new Layer
	name: "bG_11"
	parent: contact_Body
	x: 0
	y: 0
	width: 2048
	height: 1416
	backgroundColor: "rgba(250,250,250,1)"

contact_But_Back = new Layer
	name: "contact_But_Back"
	parent: contact_Body
	x: 404
	y: 1160
	backgroundColor: "transparent"
	width: 440
	height: 120

rectangle_42 = new Layer
	name: "rectangle_42"
	parent: contact_But_Back
	x: 0
	y: 0
	width: 440
	height: 120
	backgroundColor: "rgba(219,231,236,1)"
	borderRadius: 40
	borderColor: "rgba(169,181,186,1)"
	borderWidth: 6

label_42 = new TextLayer
	name: "label_42"
	parent: contact_But_Back
	x: 158
	y: 28
	width: 124
	text: "Back"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(68,80,86,1)"

contact_t_Details = new TextLayer
	name: "contact_t_Details"
	parent: contact_Body
	x: 756
	y: 216
	text: "Contact Details"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

contact_But_Next = new Layer
	name: "contact_But_Next"
	parent: contact_Body
	x: 1364
	y: 1120
	backgroundColor: "transparent"
	width: 440
	height: 200

rectangle_43 = new Layer
	name: "rectangle_43"
	parent: contact_But_Next
	x: 0
	y: 0
	width: 440
	height: 200
	backgroundColor: "rgba(250,242,232,1)"
	borderRadius: 40
	borderColor: "rgba(151,151,151,1)"
	borderWidth: 2

label_43 = new TextLayer
	name: "label_43"
	parent: contact_But_Next
	x: 159
	y: 62
	text: "Next"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "center"
	color: "rgba(71,71,71,1)"

contact_Txt_Mail = new Layer
	name: "contact_Txt_Mail"
	parent: contact_Body
	x: 564
	y: 360
	backgroundColor: "transparent"
	width: 920
	height: 120

rectangle2_8 = new Layer
	name: "rectangle2_8"
	parent: contact_Txt_Mail
	x: 0
	y: 0
	width: 920
	height: 120
	backgroundColor: "rgba(253,245,228,1)"
	borderRadius: 10
	borderColor: "rgba(245,190,85,1)"
	borderWidth: 10

mail = new TextLayer
	name: "mail"
	parent: contact_Txt_Mail
	x: 21
	y: 12
	text: "Mail"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(247,203,119,1)"

contact_Txt_Email = new Layer
	name: "contact_Txt_Email"
	parent: contact_Body
	x: 564
	y: 520
	backgroundColor: "transparent"
	width: 920
	height: 120

rectangle2_9 = new Layer
	name: "rectangle2_9"
	parent: contact_Txt_Email
	x: 0
	y: 0
	width: 920
	height: 120
	backgroundColor: "rgba(253,245,228,1)"
	borderRadius: 10
	borderColor: "rgba(245,190,85,1)"
	borderWidth: 10

email = new TextLayer
	name: "email"
	parent: contact_Txt_Email
	x: 21
	y: 12
	text: "Email"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(247,203,119,1)"

contact_Txt_Phone = new Layer
	name: "contact_Txt_Phone"
	parent: contact_Body
	x: 564
	y: 680
	backgroundColor: "transparent"
	width: 920
	height: 120

rectangle2_10 = new Layer
	name: "rectangle2_10"
	parent: contact_Txt_Phone
	x: 0
	y: 0
	width: 920
	height: 120
	backgroundColor: "rgba(253,245,228,1)"
	borderRadius: 10
	borderColor: "rgba(245,190,85,1)"
	borderWidth: 10

phone = new TextLayer
	name: "phone"
	parent: contact_Txt_Phone
	x: 21
	y: 12
	text: "Phone"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(247,203,119,1)"

contact_i_Letter = new Layer
	name: "contact_i_Letter"
	parent: contact_Body
	x: 404
	y: 378
	width: 120
	height: 84.70279319224828
	image: "images/Contact_i_Letter.svg"

contact_i_Email = new Layer
	name: "contact_i_Email"
	parent: contact_Body
	x: 404
	y: 520
	width: 120
	height: 119.99933444349506
	image: "images/Contact_i_Email.svg"

contact_i_Phone = new Layer
	name: "contact_i_Phone"
	parent: contact_Body
	x: 404
	y: 680
	width: 120
	height: 119.67929470482082
	image: "images/Contact_i_Phone.svg"


for i in aB_Contact.ƒƒ("Label*")
	if i.parent.name.match(/txt/)
		i.parent["inp"+i] = new InputModule
#/AB
#AB Heading
aB_Heading = new Layer
	name: "aB_Heading"
	x: 84
	y: 40
	backgroundColor: "transparent"
	width: 1882
	height: 120

logo = new Layer
	name: "logo"
	parent: aB_Heading
	x: 0
	y: 0
	width: 120
	height: 120
	image: "images/Splash_i_Logo.svg"

title = new TextLayer
	name: "title"
	parent: aB_Heading
	x: 160
	y: 24
	text: "Victoria Legal Aid"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(74,74,74,1)"

app4Aid = new TextLayer
	name: "app4Aid"
	parent: aB_Heading
	x: 1400
	y: 24
	text: "Application for Aid"
	fontSize: 56
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(74,74,74,1)"
	#/AB
#AB Interp Overlay
InterpArray = []
langArray = ["Chinese","Thai","Arabic","Spanish","Greek","Vietnamese","Turkish","Persian","Other"]
for i in [0...9]
	InterpArray[i] = new Layer
		name: "But_Lang_#{i}"
		backgroundColor:"transparent"
		width:340
		height:240
	@["rect"+i] = new Layer
		name: "rect_#{i}"
		backgroundColor:"#FEE9E1"
		borderColor: "#DA734B"
		borderWidth:6
		borderRadius:40
		width:340
		height:240
		parent: InterpArray[i]
	@["label"+i] = new TextLayer
		name: "label_#{i}"
		text: langArray[i]
		fontSize: 56
		fontFamily: "Avenir Next"
		fontWeight: 500
		color: "rgba(74,74,74,1)"
		parent: InterpArray[i]
	@["label"+i].center()
	InterpArray[i].on Events.Tap, ->
		data.interp = @ƒ("label*").text
		flow.showPrevious()
		flow.showNext aB_Contact
aB_Grid = new GridLayer
	layers: InterpArray
	columns: 3
	rows: 3
	marginColumn: 50
	marginRow: 70
aB_Grid.center()
#/AB
# --- Flow Setup
flow.bringToFront()
for i in ƒƒ("aB*")
	i.x = Align.center
aB_Heading.bringToFront()
aB_Splash.bringToFront()
flow.x = (Screen.width - aB_Splash.width)/2
flow.showNext(aB_Splash, scroll:false)
flow.backgroundColor = "#FAFAFA"
#/-
# --- Button Setup
for i in ƒƒ("*But_*")
	j = i.ƒ("rec*")
	if i.ƒ("label*") isnt undefined
		i.ƒ("label*").y = Align.center
	j.states.off =
		borderWidth:j.states.default.borderWidth
		scale:1
		backgroundColor:j.states.default.backgroundColor
	j.states.on =
		borderWidth:j.states.default.borderWidth+5
		scale:1.05
		backgroundColor: j.states.default.backgroundColor.saturate(10).darken(5)
	i.on Events.TouchStart, (a,b) ->
		this.ƒ("rec*").animate "on",
			options:
				time: 0.1
	i.on Events.TouchEnd, (a,b) ->
		this.ƒ("rec*").animate "off",
			options:
				time: 0.1
	if (i.name.match(/Back$/))
		i.on Events.Tap, ->
			do flow.showPrevious
	if (i.name.match(/Next$/))
		i.ƒ("rec*").borderWidth = 6
#/-
