window.aB_Yass = new Layer
  name: "aB_Yass"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

yass_Body = new Layer
  name: "yass_Body"
  parent: aB_Yass
  x: 0
  y: 138
  backgroundColor: "transparent"
  width: 2048
  height: 1416

bG = new Layer
  name: "bG"
  parent: yass_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

yass_i_Logo = new Layer
  name: "yass_i_Logo"
  parent: yass_Body
  x: 884
  y: 22
  width: 276
  height: 276
  image: "images/yass_i_Logo.svg"

yass_t_Heading = new TextLayer
  name: "yass_t_Heading"
  parent: yass_Body
  x: 564
  y: 376
  width: 917.886927759102
  text: "Thank you gas Please take a seat and we will be with you shortly"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

yass_But_Return = new Layer
  name: "yass_But_Return"
  parent: yass_Body
  x: 724
  y: 922
  backgroundColor: "transparent"
  width: 600
  height: 280
yass_But_Return.onTap ->
  window.data = {}
  flow.showNext aB_Splash

rectangle = new Layer
  name: "rectangle"
  parent: yass_But_Return
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
  parent: yass_But_Return
  x: 60
  y: 86
  text: "Return to Start"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

