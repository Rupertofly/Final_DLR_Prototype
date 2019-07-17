{ƒ, ƒƒ} = require 'findModule'
InputModule = require 'input-framer/input'

window.sumFill = ->
  ƒ("summary_t_data").html =
    """#{data.name}<br>
#{window.data.Dob}<br>
#{window.data.help}<br>
#{window.data.interp}<br><br>
 #{window.data.mail} <br>
#{window.data.email}<br>
 #{window.data.phone}<br>
at least $#{window.data.income} per week<br>
#{window.data.dispSum}<br>"""




window.aB_Summary = new Layer
  name: "aB_Summary"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

summary_Body = new Layer
  name: "summary_Body"
  parent: aB_Summary
  x: 0
  y: 138
  backgroundColor: "transparent"
  width: 2048
  height: 1416

summary_BG = new Layer
  name: "summary_BG"
  parent: summary_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

summary_t_Title = new TextLayer
  name: "summary_t_Title"
  parent: summary_Body
  x: 564
  y: 38
  width: 918.8536370080562
  text: "Summary"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 700
  textAlign: "center"
  color: "rgba(74,74,74,1)"

summary_t_Heading = new TextLayer
  name: "summary_t_Heading"
  parent: summary_Body
  x: 404
  y: 232
  width: 600
  html: """Name:<br>
Date of Birth:<br>
Help Filling out Form:<br>
Interpreter:<br>
Contact <br>
-Mail: <br>
-Email:<br>
 -Phone:<br>
Income:<br>
Disability(s):<br>"""
  fontSize: 48
  fontFamily: "Avenir Next"
  fontWeight: 600
  lineHeight: 1.3333333333333333
  textAlign: "left"
  color: "rgba(74,74,74,1)"

summary_t_HeadingCopy = new TextLayer
  name: "summary_t_data"
  parent: summary_Body
  x: 1064
  y: 232
  width: 600
  fontSize: 48
  fontFamily: "Avenir Next"
  fontWeight: 500
  lineHeight: 1.3333333333333333
  textAlign: "left"
  color: "rgba(74,74,74,1)"




hourlyIncome_But_Back = new Layer
  name: "Summary_But_Back"
  parent: aB_Summary
  x: 404
  y: 1280
  backgroundColor: "transparent"
  width: 440
  height: 120

rectangle = new Layer
  name: "rectangle78"
  parent: hourlyIncome_But_Back
  x: 0
  y: 0
  width: 440
  height: 120
  backgroundColor: "rgba(219,231,236,1)"
  borderRadius: 40
  borderColor: "rgba(169,181,186,1)"
  borderWidth: 6

label = new TextLayer
  name: "label78"
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

ifThisIsCorrect = new TextLayer
  parent: aB_Summary
  name: "ifThisIsCorrect"
  x: 742
  y: 278
  text: "If this is correct, Tap Next."
  fontSize: 48
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "left"
  color: "rgba(74,74,74,1)"


hourIncome_But_Next = new Layer
  name: "Summary_But_Next"
  parent: aB_Summary
  x: 1364
  y: 1240
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_2 = new Layer
  name: "rectangle_265"
  parent: hourIncome_But_Next
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(250,242,232,1)"
  borderRadius: 40
  borderColor: "rgba(151,151,151,1)"
  borderWidth: 2

label_2 = new TextLayer
  name: "label_265"
  parent: hourIncome_But_Next
  x: 159
  y: 62
  text: "Next"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(71,71,71,1)"

aB_Summary.on "change:parent", ->
  sumFill()

