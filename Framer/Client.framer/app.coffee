
# --- Setup
ViewController = require 'ViewController'
{ƒ,ƒƒ} = require 'findModule'


# Set Screen background
Screen.backgroundColor = "#FAFAFA"
# Scale all content by 50%
Framer.Device.contentScale = 1
test = new Layer
	width: Screen.width
	height: Screen.height
x = ƒ()
x.backgroundColor = "FAB5B3"
x.backgroundColor  = "F24541"
print x
Views = new ViewController
	initialView: b_Splash
#/-


# --- First Pane
b_Splash = new Layer
	name: "b_Splash"
	x: 0
	y: 0
	backgroundColor: "white"
	width: 2048
	height: 1536


splash_Body = new Layer
	name: "splash_Body"
	parent: b_Splash
	x: 564
	y: 160
	backgroundColor: "transparent"
	width: 920
	height: 758

logo = new Layer
	name: "logo"
	parent: splash_Body
	x: 320
	y: 0
	width: 276
	height: 276
	image: "images/Logo.svg"

title = new TextLayer
	name: "title"
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
	name: "heading"
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
	name: "but_Begin"
	parent: b_Splash
	x: 724
	y: 960
	backgroundColor: "transparent"
	width: 600
	height: 280

rectangle = new Layer
	name: "rectangle"
	parent: but_Begin
	x: 0
	y: 0
	width: 600
	height: 280
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 40
	borderColor: "rgba(183,183,183,1)"
	borderWidth: 36

label = new TextLayer
	name: "label"
	parent: but_Begin
	x: 202
	y: 86
	text: "Begin"
	fontSize: 72
	fontFamily: "Avenir Next"
	fontWeight: 600
	textAlign: "center"
	color: "rgba(74,74,74,1)"

#/-

for f in ƒƒ("but*")
	f.on Events.TouchStart, (event, layer) ->
		layer.ƒ("rec*").animate
			image:Utils.randomImage()
			backgroundColor:Utils.randomColor()
	f.on Events.TouchEnd, (event, layer) ->
		layer.ƒ("rec*").animate
			backgroundColor:"blue"


