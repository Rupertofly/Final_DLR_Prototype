#


# --- Setup
{ƒ, ƒƒ} = require 'findModule'
window.flow = new FlowComponent


class GridLayer extends Layer
  constructor: (opt = {})->
    sizeTemplate = opt.layers[0]
    opt.backgroundColor ?= ''
    opt.margin ?= 10
    opt.marginRow ?= opt.margin
    opt.marginColumn ?= opt.margin
    opt.width ?= (sizeTemplate.width + opt.marginColumn) * opt.columns - opt.marginColumn
    opt.height ?= (sizeTemplate.height + opt.marginRow) * opt.rows - opt.marginRow
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

InputModule = require 'input-framer/input'
Screen.backgroundColor = 'rgba(250,250,250,1)'

window.data = {}

#region Splash
ab_splash = require "ab_splash"
#endregion
#region Language
ab_lang = require "ab_lang"
#endregion
#region Help
ab_help = require "ab_help"
#endregion
#region ReadSpeak
ab_readspeak = require "ab_readspeak"

aB_ReadSpeak.ƒ("*Next").visible = false
R_Filled = false
S_Filled = false
ReadSpeak_Filled = false
window.changeSel = (arr, nw) ->
  for but,val of arr
    if but is nw then arr[but] = 1 else arr[but] = 0
  return arr
window.updateSel = () ->
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

ƒ("readSpeak_But_Next").on Events.Tap, ->
  for k,v of window.RVals
    if v is 1 then rAb = k
  for k,v of window.SVals
    if v is 1 then sAb = k
  data.ReadAbility = rAb
  data.SpeakAbility = sAb
  print data
  flow.showNext ƒ("aB_NDOB")

#endregion
#region Interpreter
ab_interp = require "ab_interp"
ƒ("interp_But_no").on Events.Tap, ->
  data.interp = "none"
  flow.showNext ƒ("aB_Contact")
ƒ("interp_But_yes").on Events.Tap, ->
  flow.showOverlayCenter aB_Grid
  print ƒ("aB_Grid")
#endregion
#region Concession
ab_conc = require "ab_conc"
#endregion
#region Employment
ab_employ = require "ab_employ"
for i in aB_Employment.ƒƒ("*But*")
  unless /[bB]ack/.test(i.name)

    i.on Events.Tap, ->
      val = (@name.split "_")[2]
      data.employment = val
      print data
      if /[Uu]n/.test(val) then flow.showNext(ƒ("check"))
      else if /Casual/i.test(val) then flow.showNext(ƒ("aB_HourIncome"))
      else flow.showNext(ƒ("aB_WeekIncome"))
#endregion

#region WeekIncome"

ab_weekinc = require "ab_weekinc"
#endregion
#region HourIncome
ab_hourinc = require 'ab_hourinc'
#endregion
#region Employment Functions

#endregion
#region NDOB
ab_ndob = require 'ab_ndob'
#endregion
#region Contact
ab_contact = require 'ab_contact'

ƒ("contact_But_Next").visible = false

for i in aB_Contact.ƒƒ("Lab*")
  reg = /Txt/
  if reg.test(i.parent.name)

    @["inp_#{i.text}"] = new InputModule.Input
      name: "inp_#{i.text}"
      parent: i.parent
      x: i.x
      y: i.y
      width: (i.parent.width - i.x)
      height: (i.parent.height - i.y)
      text: i.text
      setup: false
      virtualKeyboard: false
    @["inp_#{i.text}"].style =
      fontSize: "72px"
      fontFamily: "Avenir Next"
      color: "#C98639"

    if i.text is "Phone" then @["inp_#{i.text}"].input.type = "tel"
    i.visible = false

    if i.text is "Email" then @["inp_#{i.text}"].input.type = "email"
    if i.text is "Mail" then @["inp_#{i.text}"].input.type = "text"

    @["inp_#{i.text}"].on "input", ->
      if @value isnt @parent.ƒ("Lab*").text then ƒ("contact_But_Next").visible = true

    @["inp_#{i.text}"].on "keyup", (event) ->
      if event.which is 13 then @input.blur()
aB_Contact.ƒ("inp_Mail").onFocus ->
  if @value is "Mail" then @value = ""
aB_Contact.ƒ("inp_Email").onFocus ->
  if @value is "Email" then @value = ""
aB_Contact.ƒ("inp_Phone").onFocus ->
  if @value is "Phone" then @value = ""

#endregion
#region Heading
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

#endregion
#region Interp
InterpArray = []
langArray = ["Chinese", "Thai", "Arabic", "Spanish", "Greek", "Vietnamese", "Turkish", "Persian", "Other"]
for i in [0...9]
  InterpArray[i] = new Layer
    name: "But_Lang_#{i}"
    backgroundColor: "transparent"
    width: 340
    height: 240
  @["rect" + i] = new Layer
    name: "rect_#{i}"
    backgroundColor: "#FEE9E1"
    borderColor: "#DA734B"
    borderWidth: 6
    borderRadius: 40
    width: 340
    height: 240
    parent: InterpArray[i]
  @["label" + i] = new TextLayer
    name: "label_#{i}"
    text: langArray[i]
    fontSize: 56
    fontFamily: "Avenir Next"
    fontWeight: 500
    color: "rgba(74,74,74,1)"
    parent: InterpArray[i]
  @["label" + i].center()
  InterpArray[i].on Events.Tap, ->
    data.interp = @ƒ("label*").text
    flow.showPrevious()
    flow.showNext ƒ("aB_Contact")
window.aB_Grid = new GridLayer
  name: "aB_Grid"
  layers: InterpArray
  columns: 3
  rows: 3
  marginColumn: 50
  marginRow: 70
aB_Grid.center()
#endregion
check = aB_WeekIncome.copy()
check.name = 'check'
#region flow setup
window.flow.bringToFront()
for i in ƒƒ("aB*")
  i.x = Align.center
aB_Heading.bringToFront()
ƒ("aB_Splash").bringToFront()
flow.x = (Screen.width - aB_Splash.width) / 2
flow.showNext(ƒ("aB_Splash"), scroll: false)
flow.backgroundColor = "#FAFAFA"
#endregion
#region Button Setup
for i in ƒƒ("*But_*")
  j = i.ƒ("rec*")
  if i.ƒ("label*") isnt undefined
    i.ƒ("label*").y = Align.center
  j.states.off =
    borderWidth: j.states.default.borderWidth
    scale: 1
    backgroundColor: j.states.default.backgroundColor
  j.states.on =
    borderWidth: j.states.default.borderWidth + 5
    scale: 1.05
    backgroundColor: j.states.default.backgroundColor.saturate(10).darken(5)
  i.on Events.TouchStart, (a, b) ->
    this.ƒ("rec*").animate "on",
      options:
        time: 0.1
  i.on Events.TouchEnd, (a, b) ->
    this.ƒ("rec*").animate "off",
      options:
        time: 0.1
  if (i.name.match(/Back$/))
    i.on Events.Tap, ->
      do flow.showPrevious
  if (i.name.match(/Next$/))
    i.ƒ("rec*").borderWidth = 6
#endregion
