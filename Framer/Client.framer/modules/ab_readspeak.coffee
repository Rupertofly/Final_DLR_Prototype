{ƒ, ƒƒ} = require 'findModule'
InputModule = require "input-framer/input"

window.RVals =
  rNone: 0
  rSomewhat: 0
  rGood: 0
  rFluent: 0
window.SVals =
  sNone: 0
  sSomewhat: 0
  sGood: 0
  sFluent: 0

window.aB_ReadSpeak = new Layer
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
  window.RVals = window.changeSel window.RVals, "rNone"
  window.updateSel()

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
  window.SVals = window.changeSel window.SVals, "sNone"
  window.updateSel()

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
  window.RVals = window.changeSel window.RVals, "rSomewhat"
  window.updateSel()

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
  window.SVals = window.changeSel window.SVals, "sSomewhat"
  window.updateSel()

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
  window.RVals = window.changeSel window.RVals, "rGood"
  window.updateSel()

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
  window.SVals = window.changeSel(window.SVals, "sGood")
  window.updateSel()

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
  window.RVals = window.changeSel(window.RVals, "rFluent")
  window.updateSel()

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
  window.SVals = window.changeSel(window.SVals, "sFluent")
  window.updateSel()

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

