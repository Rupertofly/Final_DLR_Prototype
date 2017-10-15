aB_Nayy = new Layer
  name: "aB_Nayyy"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

nayy_Body = new Layer
  name: "nayy_Body"
  parent: aB_Nayy
  x: 0
  y: 138
  backgroundColor: "transparent"
  width: 2048
  height: 1416

bG = new Layer
  name: "bG"
  parent: nayy_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

nayy_i_Logo = new Layer
  name: "nayy_i_Logo"
  parent: nayy_Body
  x: 884
  y: 22
  width: 276
  height: 276
  image: "images/nayy_i_Logo.svg"

nayy_t_Heading = new TextLayer
  name: "nayy_t_Heading"
  parent: nayy_Body
  x: 324
  y: 376
  width: 1396
  text: "I’m Sorry my dude You do not qualify for the Duty Lawyer service"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

nayy_t_HeadingCopy = new TextLayer
  name: "nayy_t_HeadingCopy"
  parent: nayy_Body
  x: 324
  y: 602
  width: 1396
  text: "For more information on what you can do, call VLA’s legal helpline on 1300 792 387"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

nayy_But_Return = new Layer
  name: "nayy_But_Return"
  parent: nayy_Body
  x: 724
  y: 922
  backgroundColor: "transparent"
  width: 600
  height: 280
nayy_But_Return.onTap ->
  window.data = {}
  flow.showNext aB_Splash

rectangle = new Layer
  name: "rectangle"
  parent: nayy_But_Return
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
  parent: nayy_But_Return
  x: 60
  y: 86
  text: "Return to Start"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

