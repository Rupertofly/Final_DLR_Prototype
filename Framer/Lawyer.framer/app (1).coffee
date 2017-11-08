# Set Screen background
Screen.backgroundColor = "#00AAFF"

# Scale all content by 50%
Framer.Device.contentScale = 1
merge=(xs...) ->
  if xs?.length>0
    tap {},(m)->m[k]=v for k,v of x for x in xs
tap=(o, fn)->fn(o);o

applyStyle = (lay,style) ->
  for key,val of prefs.styles[style]
    lay[key] = val
  return lay


ppl = [
  {
    Name: "Gazza Fredrickson"
    Date_Of_Birth: "1965-04-25"
    lang: "English"
  }
  {
    Name: "Kevin Kruddstensky"
    Date_Of_Birth: "1942-10-31"
    lang: "German"
  }

]
colors =
  gall:'#EFEFEF'
  alab:'#FAFAFA'
  char:"#474747"
Screen.backgroundColor = colors.gall
{ƒ, ƒƒ} = require 'findModule'
InputModule = require 'input-framer/input'

prefs =
  styles:
    Title:
      fontSize: 40
      fontFamily: "Avenir Next"
      fontWeight: 100
      textAlign: "left"
      color: colors.char
    Sub:
      fontSize: 24
      fontFamily: "Avenir Next"
      fontWeight: 400
      textAlign: "left"
      color: colors.char
print prefs.styles.Title
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
      currentData["#{parent.name}"] = @value
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
bg = new BackgroundLayer
  backgroundColor: colors.gall
headframe = new Layer
  name: "headframe"
  width: Screen.width
  height: 160
  backgroundColor: "transparent"



aB_Heading = new Layer
  parent:headframe
  name: "aB_Heading"
  x: 0
  y: Align.center
  backgroundColor: "transparent"
  width: Screen.width
  height: 120
logo = new Layer
  name: "logo"
  parent: aB_Heading
  x: aB_Heading.width/36
  y: Align.center
  width: 80
  height: 80
  image: "images/Splash_i_Logo.svg"

title = new TextLayer
  name: "title"
  parent: aB_Heading
  text: "Victoria Legal Aid"
  x: logo.x+logo.width+20
  y: Align.center
applyStyle title, "Title"


section = new TextLayer
  name: "section"
  parent: aB_Heading
  y: 35
  x: 705
  text: "Lawyer Interface"
  textAlign: "right"
applyStyle section, "Title"

flow = new FlowComponent
flow.header = headframe

ScreenEdit = new Layer
  name: "edit"
  backgroundColor: colors.gall
  size: Screen.size

pageController = new PageComponent
  name: "PGcomp"
  parent: ScreenEdit
  y: 184
  x: 30
  width: ScreenEdit.width - 60
  height: Screen.height - headframe.height - 60
  borderRadius: 12
  scrollVertical: false
  clip: false

currentSet = {
  Name: "Jessie Clientperson"
  otherName: "Jess"
  dateOfBirth: "1990-07-13"
  CustodyStatus: "Not in Custody"
  Referred: "Not Referred"
  Magistrate: "Bobby McNuggets"
  Court: 1
  DLRID: "04948"
  CourtID: "49804"
}
defaultSlide = new Layer
  parent: pageController.content
  x:0
  y:0
  size: pageController.size
  backgroundColor: colors.alab
  borderRadius: 12

notesSlide = new Layer
  parent: pageController.content
  x: pageController.width+60
  y:0
  size: pageController.size
  backgroundColor: colors.alab
  borderRadius: 12


defcont = require "default_content"
content.parent = defaultSlide
notcont = require "notes_content"
notes.parent = notesSlide
for work in content.descendants
  if work.text isnt undefined
    if work.text.match(/\{\w+\}/)
      temp = work.text.match(/\{\w+\}/g)
      temp = temp[0].match(/\w+/g)
      work.template =
        "#{temp}":currentSet["#{temp}"]
  print work.template

newNoteBut = new MyButton
  parent: ƒ("rectangleCopy2")
  width: 150
  height: 50
  x:6
  y:6
  backgroundColor: "transparent"
  bCol: "#DDF0F9"
  dCol: "#2582AB"
  tCol: "#3997C0"
  txt: "new"

# Set Screen background
Screen.backgroundColor = "#00AAFF"

# Scale all content by 50%
Framer.Device.contentScale = 1
merge=(xs...) ->
  if xs?.length>0
    tap {},(m)->m[k]=v for k,v of x for x in xs
tap=(o, fn)->fn(o);o

applyStyle = (lay,style) ->
  for key,val of prefs.styles[style]
    lay[key] = val
  return lay


ppl = [
  {
    Name: "Gazza Fredrickson"
    Date_Of_Birth: "1965-04-25"
    lang: "English"
  }
  {
    Name: "Kevin Kruddstensky"
    Date_Of_Birth: "1942-10-31"
    lang: "German"
  }

]
colors =
  gall:'#EFEFEF'
  alab:'#FAFAFA'
  char:"#474747"
Screen.backgroundColor = colors.gall
{ƒ, ƒƒ} = require 'findModule'
InputModule = require 'input-framer/input'

prefs =
  styles:
    Title:
      fontSize: 40
      fontFamily: "Avenir Next"
      fontWeight: 100
      textAlign: "left"
      color: colors.char
    Sub:
      fontSize: 24
      fontFamily: "Avenir Next"
      fontWeight: 400
      textAlign: "left"
      color: colors.char
print prefs.styles.Title
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
      currentData["#{parent.name}"] = @value
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
bg = new BackgroundLayer
  backgroundColor: colors.gall
headframe = new Layer
  name: "headframe"
  width: Screen.width
  height: 160
  backgroundColor: "transparent"



aB_Heading = new Layer
  parent:headframe
  name: "aB_Heading"
  x: 0
  y: Align.center
  backgroundColor: "transparent"
  width: Screen.width
  height: 120
logo = new Layer
  name: "logo"
  parent: aB_Heading
  x: aB_Heading.width/36
  y: Align.center
  width: 80
  height: 80
  image: "images/Splash_i_Logo.svg"

title = new TextLayer
  name: "title"
  parent: aB_Heading
  text: "Victoria Legal Aid"
  x: logo.x+logo.width+20
  y: Align.center
applyStyle title, "Title"


section = new TextLayer
  name: "section"
  parent: aB_Heading
  y: 35
  x: 705
  text: "Lawyer Interface"
  textAlign: "right"
applyStyle section, "Title"

flow = new FlowComponent
flow.header = headframe

ScreenEdit = new Layer
  name: "edit"
  backgroundColor: colors.gall
  size: Screen.size

pageController = new PageComponent
  name: "PGcomp"
  parent: ScreenEdit
  y: 184
  x: 30
  width: ScreenEdit.width - 60
  height: Screen.height - headframe.height - 60
  borderRadius: 12
  scrollVertical: false
  clip: false

currentSet = {
  Name: "Jessie Clientperson"
  otherName: "Jess"
  dateOfBirth: "1990-07-13"
  CustodyStatus: "Not in Custody"
  Referred: "Not Referred"
  Magistrate: "Bobby McNuggets"
  Court: 1
  DLRID: "04948"
  CourtID: "49804"
}
defaultSlide = new Layer
  parent: pageController.content
  x:0
  y:0
  size: pageController.size
  backgroundColor: colors.alab
  borderRadius: 12

notesSlide = new Layer
  parent: pageController.content
  x: pageController.width+60
  y:0
  size: pageController.size
  backgroundColor: colors.alab
  borderRadius: 12


defcont = require "default_content"
content.parent = defaultSlide
notcont = require "notes_content"
notes.parent = notesSlide
for work in content.descendants
  if work.text isnt undefined
    if work.text.match(/\{\w+\}/)
      temp = work.text.match(/\{\w+\}/g)
      temp = temp[0].match(/\w+/g)
      work.template =
        "#{temp}":currentSet["#{temp}"]
  print work.template

newNoteBut = new MyButton
  parent: ƒ("rectangleCopy2")
  width: 150
  height: 50
  x:6
  y:6
  backgroundColor: "transparent"
  bCol: "#DDF0F9"
  dCol: "#2582AB"
  tCol: "#3997C0"
  txt: "new"

writingOver = new Layer
  width: Screen.width - 100
  height: Screen.height - 100
print Screen.height-100
{Pointer} = require "Pointer"
area = new Layer
  parent: writingOver
  width: 1000
  height: 700
  borderRadius:12

svg = new Layer
  parent: area
  width: 1000
  height: 700
  point: Align.center
  backgroundColor: "#f1dacd"
  borderRadius:12
  html: "<svg id=\"svg\" style=\"position: absolute; box-shadow: inset 0 0 0 0px white;\" width=\"100%\"
 height=\"100%\" viewbox=\"50 50 1000 700\"></svg>"
  style:
    fill: "none"
    stroke: "#111"
    strokeWidth: "4px"
  custom:
    polyline: null
    svg: null
    active: false

newPolyline = ->
# Get the svg element if we don't have it
  svg.custom.svg = document.getElementById "svg" if svg.custom.svg is null
  # Create a new polyline node and append it to the svg tag
  svg.custom.polyline = document.createElementNS "http://www.w3.org/2000/svg", "polyline"
  svg.custom.svg.appendChild svg.custom.polyline

updatePoints = (event, layer) ->
# Get Pointer Position
  pos = Pointer.screen event, layer
  # Create a new point
  point = svg.custom.svg.createSVGPoint()
  point.x = pos.x/2
  point.y = pos.y/2
  # Add the point to the polyline
  svg.custom.polyline.points.appendItem point

area.on Events.TouchStart, ->
  svg.custom.active = true
  newPolyline()

area.on Events.TouchEnd, ->
  svg.custom.active = false

area.on Events.TouchMove, (event, layer) ->
  return unless svg.custom.active
  updatePoints event, layer

newNoteBut.onTap ->
  svg.html = "<svg id=\"svg\" style=\"position: absolute; box-shadow: inset 0 0 0 0px white;\" width=\"100%\"
   height=\"100%\" viewbox=\"50 50 1000 700\"></svg>"
  svg.custom.svg = null
  svg.custom.polyline = null
  flow.showOverlayCenter writingOver

tasks = ["conference", "organise adjournment","Get witness report" ]
for v ,i in tasks
  @["#{i}"] = new TextLayer
    parent: ƒ("rectangleCopy")
    width: (ƒ("rectangleCopy").width)-20
    x: Align.center
    y: (40*i)+5
    text: v
    fontSize: 14
    padding:
      left:10
      top:10
      bottom:10
      right:10
    backgroundColor: "#FEE9E1"
    borderColor: "#C65E36"
    borderWidth: 4
    textAlign: "center"
    fontFamily: "Avenir Next"
    fontWeight: 500
    color: "#C65E36"
    borderRadius: 6
  @["#{i}"].states =
      done:
        backgroundColor: "#DFEFC1"
        borderColor: "#8DAD51"
        color: "#8DAD51"
        textDecoration: "line-through"
  @["#{i}"].animationOptions =
    time: 0.2
  @["#{i}"].onTap ->
    @.stateCycle()
flow.bringToFront()
area.bringToFront()
svg.bringToFront()
flow.showNext ScreenEdit