ppl = [
  {
    Name: "Gazza Fredrickson"
    day: "1965-04-25"
    lang: "English"
  }
  {
    Name: "Kevin Kruddstensky"
    day: "1942-10-31"
    lang: "German"
  }

]

white = '#EFEFEF'
silver = '#B7B7B7'
{ƒ, ƒƒ} = require 'findModule'
Framer.Defaults.Animation =
  curve: 'spring(300,30,0)'
Screen.backgroundColor = '#EFEFEF'
InputModule = require 'input-framer/input'
flow = new FlowComponent
edit = new Layer
  name: "edit"
  backgroundColor: "#EFEFEF"
  size: Screen.size
#region Classes
class MyButton extends Layer
  constructor: (options) ->
    super options
    @["rect_#{@name}"] = new Layer
      parent: @
      size: @size
      name: "rect_#{@name}"
      backgroundColor: options.bCol or "#FFF"
      borderColor: options.dCol or "#000"
      borderRadius: 25
      borderWidth: 6
      html: options.txt or "label"
      options:
        time: 0.002
    @["rect_#{@name}"].states =
      off:
        scale: 1
        borderWidth: 6
        animationOptions:
          time: 0.01
      on:
        scale: 1.1
        borderWidth:12
        animationOptions:
          time: 0.01
    @["rect_#{@name}"].style =
      fontSize: '36px'
      fontFamily: 'Avenir Next'
      fontWeight: '500'
      textAlign: 'center'
      "padding-top": "#{(@height - 36)/2}px"
      color: options.tCol or "white"
    @["rect_#{@name}"].on Events.TouchStart, () ->
      @animate "on"
    @["rect_#{@name}"].on Events.TouchEnd, () ->
      @animate "off"
    @["rect_#{@name}"].on "change:scale", ->
      @style["padding-top"] = "#{(@height - 36)/2}px"


class AI extends Layer
  constructor: (options) ->
    options.backgroundColor = "transparent"
    super options
    @indi = options.indi
    @['bg'] = new Layer
      name: "#{@name}_bg"
      backgroundColor: "#FDDCB5"
      parent: @
      point: Align.center
      height: 80
      width: @width
      borderRadius: 12
      borderWidth:6
      borderColor: "#FBA747"
    @["input"] = new InputModule.Input
      name: "#{@name}_in"
      backgroundColor: "Transparent"
      parent: @
      point: Align.center
      height: 80
      width: @width - 12
      setup: false
      textAlign: "right"
      virtualKeyboard: false
      tabIndex: @indi
      placeholder: @name.replace /_/g, " "
      fontSize: 36
    @["input"].style =
      fontSize: '36px'
      fontFamily: 'Avenir Next'
      fontWeight: '500'
      textAlign: 'left'
      color: 'rgba(74,74,74,1)'
    @["Label"] = new TextLayer
      parent: @
      name: "#{@name}_lb"
      x: Align.center
      y: @["input"].y - 48
      fontFamily: 'Avenir Next'
      fontWeight: 600
      textAlign: 'center'
      text: @name.replace /_/g, " "
      color: '#916129'
    @input.on "keyup", (event) ->
      if event.which is 13 then @input.blur()
    @input.on "input", ->
      parent.value = @value
      if @value is "" then @value = parent.value
    @input.onBlur ->
      window.scrollTo(0,0)


class AT extends Layer
  constructor: (options) ->
    options.backgroundColor = "transparent"
    super options
    @toggleSize = 200
    @toggleRadius = @toggleSize / 2
    @thumbSize = @toggleSize / 1.75
    @thumbGrow = @thumbSize * 0.2
    @white = 'EFEFEF'
    @silver = 'B7B7B7'
    @active = 'C0E084'
    @Tstate = false

    toggle = new Layer
      parent: this
      width: @toggleSize
      height: @thumbSize
      borderRadius: @toggleRadius
      shadowSpread: @toggleSize / 50
      shadowColor: @silver
      clip: false
    toggle.center()
    toggle.states.add
      off:
        backgroundColor: @silver, shadowColor: @silver
      on:
        backgroundColor: @active, shadowColor: @active
      offTouch:
        backgroundColor: @silver
      onTouch:
        backgroundColor: @silver
    toggle.states.animationOptions =
      colorModel: 'rgb'
      curve: 'linear'
      time: 0.2
    toggle.states.switchInstant('off')

    background = new Layer
      width: @toggleSize
      height: @thumbSize
      borderRadius: @toggleRadius
      superLayer: toggle
      backgroundColor: @white
    background.states.add
      off:
        scale: 0
      on:
        scale: 1
    background.states.animationOptions =
      colorModel: 'rgb'
      curve: 'linear'
      time: 0.2

    thumb = new Layer
      x: 0, y: 0
      borderRadius: @toggleRadius
      backgroundColor: @white
      height: @thumbSize
      superLayer: toggle
      shadowY: @toggleSize / 60
      shadowBlur: @toggleSize / 40
      shadowSpread: @toggleSize / 100
      shadowColor: 'rgba(0,0,0,0.2)'
    thumb.states.add
      off:
        width: @thumbSize, x: 0
      on:
        width: @thumbSize, x: @toggleSize - @thumbSize
      offTouch:
        width: @thumbSize + @thumbGrow
      onTouch:
        width: @thumbSize + @thumbGrow, x: @toggleSize - @thumbSize - @thumbGrow
    thumb.animate('off')

    toggle.onTouchStart ->
      if thumb.states.current.name == 'off'
        thumb.animate('offTouch')
        toggle.animate('offTouch')
        background.animate('off')
      if thumb.states.current.name == 'on'
        thumb.animate('onTouch')
    toggle.onTouchEnd ->
      if thumb.states.current.name == 'offTouch'
        thumb.animate('on')
        toggle.animate('on')
        @Tstate = true
      if thumb.states.current.name == 'onTouch'
        thumb.animate('off')
        toggle.animate('off')
        background.animate('on')
        @Tstate = false
    label = new TextLayer
      parent: this
      x: Align.center, y: toggle.y - 60
      html: options.Tlabel
      fontSize: 36
      fontFamily: 'Avenir Next'
      fontWeight: 700
      textAlign: 'center'
      color: 'rgba(74,74,74,1)'

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



#endregion
#region Heading
headframe = new Layer
  backgroundColor: 'transparent'
  width: Screen.width
aB_Heading = new Layer
  parent:headframe
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
  x: 1500
  y: 24
  text: "Admin Interface"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "right"
  color: "rgba(74,74,74,1)"
#endregion
datas = [
  "DLR_ID", "Name", "Date_of_Birth"
  "Other_Names", "CLR_ID", "Client_Status"
  "Custody Details", "Practitioner", "Referred From"
  "Court_Ref_Number", "Date", "Court"
  "Magistrate","Prosecutor","Informant"
]
dataLayers = []
for i,v of datas
  dataLayers[i] = new AI
    name: v
    width: 400
    height: 160
    indi: i
body = new PageComponent
  parent: edit
  width: Screen.width-100
  height: Screen.height - 200
  x:50
  y:200
  scrollVertical: false
  clip:false

p1 = new Layer
  parent: body.content
  height:body.height - 200
  width: body.width
  y: 100
  x:0
  backgroundColor: "FAFAFA"
  borderRadius: 25
inputgrid = new GridLayer
  layers: dataLayers
  parent: p1
  columns: 4
  rows: 4
  margin: 64
  point: Align.center
  backgroundColor: "transparent"
p2 = new Layer
  parent:body.content
  x: body.width+100
  y: 100
  size: p1.size
  backgroundColor: "FAFAFA"
  borderRadius: 25
cameraInput = new Layer
  superLayer: p2
  y:132
  x: 118
  height: 100
  borderRadius: 25
  backgroundColor: "rgba(189,190,237,1)"
  borderWidth: 6
  borderColor: "rgba(92,95,189,1)"
  html: "<input name='imagef' capture='camera' type='file' Accept='image/*' style='opacity:0'/>
         <label for='imagef'>Import</label>"
cameraInput.style =
  fontFamily: 'Avenir Next'
  fontWeight: 600
  textAlign: 'center'
  color: '#484AA9'

contents = edit.copySingle()
cbody = p1.copySingle()
cbody.parent = contents
cbody.x = Align.center
contents.name = "contents"
contentsEntries = []
for v,k of ppl
  contentsEntries[v] = new Layer
    y: v*200
    parent: cbody
    width: cbody.width
    backgroundColor: "transparent"
  l = 0
  for k1,v1 of k

    @["#{k1}"] = new TextLayer
      parent: contentsEntries[v]
      y: Align.center
      text: k1+": "+v1
      x: 30 +(l*700)
      backgroundColor: "transparent"
    l++
  contentsEntries[v].onTap ->
    flow.showNext edit, scroll:false


body.animationOptions =
  curve: "spring(200,40,0)"
  time: 0.25
flow.bringToFront()
flow.backgroundColor = "#EFEFEF"
flow.header = headframe
flow.showNext edit, scroll:false

bbut = new MyButton
  parent: aB_Heading
  name: "bbut"
  point:
    x: 0
    y: 140
  width:200
  height:80
  backgroundColor: "transparent"
  bCol:"#B7EBD6"
  dCol: "#50B88F"
  tCol: "#3CA37A"
  txt: "back"
 bbut.onTap ->
   flow.showPrevious()
 flow.on Events.TransitionEnd, ->
   if flow.current.name isnt "edit" then bbut.visible = false
   else bbut.visible = true
  flow.showNext contents
