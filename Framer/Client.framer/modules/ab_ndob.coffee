InputModule = require 'input-framer/input'
{ƒ, ƒƒ} = require 'findModule'
window.aB_NDOB = new Layer
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
  if name.value isnt ("Name" or "") and day.value isnt ""
    data.name = name.value
    data.Dob = day.value
    ƒ("yass_t_Heading").text = """Thank you #{data.name.match(/\w+/)}
    Please take a seat and we will be with you shortly"""
    ƒ("nayy_t_Heading").text = "I’m Sorry #{data.name.match /\w+/} You do not qualify for the Duty Lawyer service"
    if data.SpeakAbility == "sGood" or data.SpeakAbility == "sFluent"
      flow.showNext ƒ("aB_Contact")
      data.interp = "none"
    else
      flow.showNext ƒ("aB_Interpreter")

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
  color: "#C98639"
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
  x: 15
  y: 12
  virtualKeyboard: false
  height: 100
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
day.input.type = "date"
day.on "input", ->
  if name.value isnt ("Name" or "") and day.value isnt ""
    nDOB_But_Next.visible = true
name.on "input", ->
  if name.value isnt ("Name" or "") and day.value isnt ""
    nDOB_But_Next.visible = true

    print ƒ("yass_t_Heading").text
name.on "keyup", (event) ->
  if event.which is 13 then name.input.blur()
name.onFocus ->
  if @value is "Name" then @value = ""