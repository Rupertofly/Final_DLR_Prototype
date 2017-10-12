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
