window.aB_Interpreter = new Layer
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