{ƒ, ƒƒ} = require 'findModule'

window.aB_Help = new Layer
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
  flow.showNext ƒ("aB_ReadSpeak")

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
  flow.showNext ƒ("aB_ReadSpeak")

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