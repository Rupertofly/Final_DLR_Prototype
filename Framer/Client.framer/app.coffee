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

InputModule = require "input-framer/input"
Screen.backgroundColor = "rgba(250,250,250,1)"

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
aB_Concession = new Layer
  name: "aB_Concession"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

concession_Body = new Layer
  name: "concession_Body"
  parent: aB_Concession
  x: 0
  y: 122
  backgroundColor: "transparent"
  width: 2048
  height: 1416

bG_6 = new Layer
  name: "bG_6"
  parent: concession_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

concession_But_Back = new Layer
  name: "concession_But_Back"
  parent: concession_Body
  x: 404
  y: 1158
  backgroundColor: "transparent"
  width: 440
  height: 120

rectangle_27 = new Layer
  name: "rectangle_27"
  parent: concession_But_Back
  x: 0
  y: 0
  width: 440
  height: 120
  backgroundColor: "rgba(219,231,236,1)"
  borderRadius: 40
  borderColor: "rgba(169,181,186,1)"
  borderWidth: 6

label_27 = new TextLayer
  name: "label_27"
  parent: concession_But_Back
  x: 158
  y: 28
  width: 124
  text: "Back"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(68,80,86,1)"

concession_t_Card = new TextLayer
  name: "concession_t_Card"
  parent: concession_Body
  x: 269
  y: 340
  text: "Do you have a current Centrelink benefit card Or Pensioner Concession Card"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

concession_But_No = new Layer
  name: "concession_But_No"
  parent: concession_Body
  x: 1204
  y: 678
  backgroundColor: "transparent"
  width: 600
  height: 280

rectangle_28 = new Layer
  name: "rectangle_28"
  parent: concession_But_No
  x: 0
  y: 0
  width: 600
  height: 280
  backgroundColor: "rgba(253,225,225,1)"
  borderRadius: 40
  borderColor: "rgba(194,55,52,1)"
  borderWidth: 6

label_28 = new TextLayer
  name: "label_28"
  parent: concession_But_No
  x: 0
  y: 0
  width: 600
  text: "No"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(194,55,52,1)"

concession_But_Yes = new Layer
  name: "concession_But_Yes"
  parent: concession_Body
  x: 244
  y: 678
  backgroundColor: "transparent"
  width: 600
  height: 280

rectangle_29 = new Layer
  name: "rectangle_29"
  parent: concession_But_Yes
  x: 0
  y: 0
  width: 600
  height: 280
  backgroundColor: "rgba(232,245,230,1)"
  borderRadius: 40
  borderColor: "rgba(108,176,101,1)"
  borderWidth: 6

label_29 = new TextLayer
  name: "label_29"
  parent: concession_But_Yes
  x: 0
  y: 0
  width: 600
  text: "Yes"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(87,155,81,1)"

concession_i_Centrelink = new Layer
  name: "concession_i_Centrelink"
  parent: concession_Body
  x: 923.9999999900319
  y: 100
  width: 199.99937163972305
  height: 195.39986654815797
  image: "images/Concession_i_Centrelink.svg"
#endregion
#region Employment
aB_Employment = new Layer
  name: "aB_Employment"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

employment_Body = new Layer
  name: "employment_Body"
  parent: aB_Employment
  x: 0
  y: 122
  backgroundColor: "transparent"
  width: 2048
  height: 1416

bG_7 = new Layer
  name: "bG_7"
  parent: employment_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

employment_But_Back = new Layer
  name: "employment_But_Back"
  parent: employment_Body
  x: 404
  y: 1158
  backgroundColor: "transparent"
  width: 440
  height: 120

rectangle_30 = new Layer
  name: "rectangle_30"
  parent: employment_But_Back
  x: 0
  y: 0
  width: 440
  height: 120
  backgroundColor: "rgba(219,231,236,1)"
  borderRadius: 40
  borderColor: "rgba(169,181,186,1)"
  borderWidth: 6

label_30 = new TextLayer
  name: "label_30"
  parent: employment_But_Back
  x: 158
  y: 28
  width: 124
  text: "Back"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(68,80,86,1)"

employment_t_HowEmployed = new TextLayer
  name: "employment_t_HowEmployed"
  parent: employment_Body
  x: 616
  y: 340
  text: "How are you Employed?"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

employment_i_Breifcase = new Layer
  name: "employment_i_Breifcase"
  parent: employment_Body
  x: 924
  y: 68
  width: 200
  height: 180.69020689655176
  image: "images/Employment_i_Breifcase.svg"

employment_But_Un = new Layer
  name: "employment_But_Un"
  parent: employment_Body
  x: 324
  y: 518
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_31 = new Layer
  name: "rectangle_31"
  parent: employment_But_Un
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(254,233,225,1)"
  borderRadius: 40
  borderColor: "rgba(198,94,54,1)"
  borderWidth: 6

label_31 = new TextLayer
  name: "label_31"
  parent: employment_But_Un
  x: 52
  y: 62
  text: "Unemployed"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(74,74,74,1)"

employment_But_Self = new Layer
  name: "employment_But_Self"
  parent: employment_Body
  x: 804
  y: 518
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_32 = new Layer
  name: "rectangle_32"
  parent: employment_But_Self
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(254,233,225,1)"
  borderRadius: 40
  borderColor: "rgba(198,94,54,1)"
  borderWidth: 6

label_32 = new TextLayer
  name: "label_32"
  parent: employment_But_Self
  x: 32
  y: 62
  text: "Self Employed"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(74,74,74,1)"

employment_But_Casual = new Layer
  name: "employment_But_Casual"
  parent: employment_Body
  x: 1284
  y: 518
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_33 = new Layer
  name: "rectangle_33"
  parent: employment_But_Casual
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(254,233,225,1)"
  borderRadius: 40
  borderColor: "rgba(198,94,54,1)"
  borderWidth: 6

label_33 = new TextLayer
  name: "label_33"
  parent: employment_But_Casual
  x: 0
  y: 24
  text: "Casually  Employed"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(74,74,74,1)"

employment_But_FullTime = new Layer
  name: "employment_But_FullTime"
  parent: employment_Body
  x: 1040
  y: 798
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_34 = new Layer
  name: "rectangle_34"
  parent: employment_But_FullTime
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(254,233,225,1)"
  borderRadius: 40
  borderColor: "rgba(198,94,54,1)"
  borderWidth: 6

label_34 = new TextLayer
  name: "label_34"
  parent: employment_But_FullTime
  x: 0
  y: 24
  text: "Employed Full Time"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(74,74,74,1)"

employment_But_PartTime = new Layer
  name: "employment_But_PartTime"
  parent: employment_Body
  x: 564
  y: 798
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_35 = new Layer
  name: "rectangle_35"
  parent: employment_But_PartTime
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(254,233,225,1)"
  borderRadius: 40
  borderColor: "rgba(198,94,54,1)"
  borderWidth: 6

label_35 = new TextLayer
  name: "label_35"
  parent: employment_But_PartTime
  x: 0
  y: 24
  text: "Employed  Part Time"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(74,74,74,1)"

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

#region WeekIncome
aB_WeekIncome = new Layer
  name: "aB_WeekIncome"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

weekIncome_Body = new Layer
  name: "weekIncome_Body"
  parent: aB_WeekIncome
  x: 0
  y: 122
  backgroundColor: "transparent"
  width: 2048
  height: 1416

bG_8 = new Layer
  name: "bG_8"
  parent: weekIncome_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

weekIncome_But_Back = new Layer
  name: "weekIncome_But_Back"
  parent: weekIncome_Body
  x: 404
  y: 1158
  backgroundColor: "transparent"
  width: 440
  height: 120

rectangle_36 = new Layer
  name: "rectangle_36"
  parent: weekIncome_But_Back
  x: 0
  y: 0
  width: 440
  height: 120
  backgroundColor: "rgba(219,231,236,1)"
  borderRadius: 40
  borderColor: "rgba(169,181,186,1)"
  borderWidth: 6

label_36 = new TextLayer
  name: "label_36"
  parent: weekIncome_But_Back
  x: 158
  y: 28
  width: 124
  text: "Back"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(68,80,86,1)"

weekIncome_t_Income = new TextLayer
  name: "weekIncome_t_Income"
  parent: weekIncome_Body
  x: 393
  y: 340
  text: "What is your weekly income after tax?"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

weekIncome_i_briefcase = new Layer
  name: "weekIncome_i_briefcase"
  parent: weekIncome_Body
  x: 924
  y: 68
  width: 200
  height: 180.69020689655176

weekIncome_But_Next = new Layer
  name: "weekIncome_But_Next"
  parent: weekIncome_Body
  x: 1364
  y: 1118
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_37 = new Layer
  name: "rectangle_37"
  parent: weekIncome_But_Next
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(250,242,232,1)"
  borderRadius: 40
  borderColor: "rgba(151,151,151,1)"
  borderWidth: 2

label_37 = new TextLayer
  name: "label_37"
  parent: weekIncome_But_Next
  x: 159
  y: 62
  text: "Next"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(71,71,71,1)"

weekIncome_Txt_Income = new Layer
  name: "weekIncome_Txt_Income"
  parent: weekIncome_Body
  x: 484
  y: 586
  backgroundColor: "transparent"
  width: 1080
  height: 120

rectangle2 = new Layer
  name: "rectangle2"
  parent: weekIncome_Txt_Income
  x: 0
  y: 0
  width: 1080
  height: 120
  backgroundColor: "rgba(253,245,228,1)"
  borderRadius: 10
  borderColor: "rgba(245,190,85,1)"
  borderWidth: 10

weeklyIncome = new TextLayer
  name: "weeklyIncome"
  parent: weekIncome_Txt_Income
  x: 21
  y: 12
  text: "Weekly Income"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "left"
  color: "rgba(247,203,119,1)"
#endregion
#region HourIncome
aB_HourIncome = new Layer
  name: "aB_HourIncome"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

hourIncome_Body = new Layer
  name: "hourIncome_Body"
  parent: aB_HourIncome
  x: 0
  y: 122
  backgroundColor: "transparent"
  width: 2048
  height: 1416

bG_9 = new Layer
  name: "bG_9"
  parent: hourIncome_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

hourlyIncome_But_Back = new Layer
  name: "hourlyIncome_But_Back"
  parent: hourIncome_Body
  x: 404
  y: 1158
  backgroundColor: "transparent"
  width: 440
  height: 120

rectangle_38 = new Layer
  name: "rectangle_38"
  parent: hourlyIncome_But_Back
  x: 0
  y: 0
  width: 440
  height: 120
  backgroundColor: "rgba(219,231,236,1)"
  borderRadius: 40
  borderColor: "rgba(169,181,186,1)"
  borderWidth: 6

label_38 = new TextLayer
  name: "label_38"
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

hourlyIncome_t_Rate = new TextLayer
  name: "hourlyIncome_t_Rate"
  parent: hourIncome_Body
  x: 458
  y: 362
  text: "What is your Hourly rate after tax?"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

hourlyIncome_t_Hours = new TextLayer
  name: "hourlyIncome_t_Hours"
  parent: hourIncome_Body
  x: 324
  y: 682
  text: "How many Hours do you work per week?"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

hourIncome_i_breifcase = new Layer
  name: "hourIncome_i_breifcase"
  parent: hourIncome_Body
  x: 924
  y: 68
  width: 200
  height: 180.69020689655176

hourIncome_But_Next = new Layer
  name: "hourIncome_But_Next"
  parent: hourIncome_Body
  x: 1364
  y: 1118
  backgroundColor: "transparent"
  width: 440
  height: 200

rectangle_39 = new Layer
  name: "rectangle_39"
  parent: hourIncome_But_Next
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(250,242,232,1)"
  borderRadius: 40
  borderColor: "rgba(151,151,151,1)"
  borderWidth: 2

label_39 = new TextLayer
  name: "label_39"
  parent: hourIncome_But_Next
  x: 159
  y: 62
  text: "Next"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(71,71,71,1)"

hourIncome_Txt_Rate = new Layer
  name: "hourIncome_Txt_Rate"
  parent: hourIncome_Body
  x: 484
  y: 518
  backgroundColor: "transparent"
  width: 1080
  height: 120

rectangle2_2 = new Layer
  name: "rectangle2_2"
  parent: hourIncome_Txt_Rate
  x: 0
  y: 0
  width: 1080
  height: 120
  backgroundColor: "rgba(253,245,228,1)"
  borderRadius: 10
  borderColor: "rgba(245,190,85,1)"
  borderWidth: 10

hourlyRate = new TextLayer
  name: "hourlyRate"
  parent: hourIncome_Txt_Rate
  x: 21
  y: 12
  text: "Hourly Rate"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "left"
  color: "rgba(247,203,119,1)"

hourIncome_Txt_Hours = new Layer
  name: "hourIncome_Txt_Hours"
  parent: hourIncome_Body
  x: 484
  y: 838
  backgroundColor: "transparent"
  width: 1080
  height: 120

rectangle2_3 = new Layer
  name: "rectangle2_3"
  parent: hourIncome_Txt_Hours
  x: 0
  y: 0
  width: 1080
  height: 120
  backgroundColor: "rgba(253,245,228,1)"
  borderRadius: 10
  borderColor: "rgba(245,190,85,1)"
  borderWidth: 10

hoursPerWeek = new TextLayer
  name: "hoursPerWeek"
  parent: hourIncome_Txt_Hours
  x: 21
  y: 12
  text: "Hours per Week"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "left"
  color: "rgba(247,203,119,1)"
#endregion
#region Employment Functions

#endregion
#region NDOB

aB_NDOB = new Layer
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
  print data.ReadAbility
  print data.ReadAbility is ("rFluent")
  if name.value isnt ("Name" or "") and day.value isnt ""
    data.name = name.value
    data.Dob = day.value
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
day.on "input", ->
  if name.value isnt ("Name" or "") and day.value isnt ""
    nDOB_But_Next.visible = true
name.on "input", ->
  if name.value isnt ("Name" or "") and day.value isnt ""
    nDOB_But_Next.visible = true
name.on "keyup", (event) ->
  if event.which is 13 then name.input.blur()
name.onFocus ->
  if @value is "Name" then @value = ""
#endregion
#region Contact
aB_Contact = new Layer
  name: "aB_Contact"
  x: 0
  y: 0
  backgroundColor: "transparent"
  width: 2048
  height: 1536

contact_Body = new Layer
  name: "contact_Body"
  parent: aB_Contact
  x: 0
  y: 120
  backgroundColor: "transparent"
  width: 2048
  height: 1416

bG_11 = new Layer
  name: "bG_11"
  parent: contact_Body
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"

contact_But_Back = new Layer
  name: "contact_But_Back"
  parent: contact_Body
  x: 404
  y: 1160
  backgroundColor: "transparent"
  width: 440
  height: 120

rectangle_42 = new Layer
  name: "rectangle_42"
  parent: contact_But_Back
  x: 0
  y: 0
  width: 440
  height: 120
  backgroundColor: "rgba(219,231,236,1)"
  borderRadius: 40
  borderColor: "rgba(169,181,186,1)"
  borderWidth: 6

label_42 = new TextLayer
  name: "label_42"
  parent: contact_But_Back
  x: 158
  y: 28
  width: 124
  text: "Back"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(68,80,86,1)"

contact_t_Details = new TextLayer
  name: "contact_t_Details"
  parent: contact_Body
  x: 756
  y: 216
  text: "Contact Details"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 600
  textAlign: "center"
  color: "rgba(74,74,74,1)"

contact_But_Next = new Layer
  name: "contact_But_Next"
  parent: contact_Body
  x: 1364
  y: 1120
  backgroundColor: "transparent"
  width: 440
  height: 200

contact_But_Next.onTap ->
  data.mail = ƒ("inp_Mail").value
  data.email = ƒ("inp_Email").value
  data.phone = ƒ("inp_Phone").value
  flow.showNext ƒ("aB_Employment")

rectangle_43 = new Layer
  name: "rectangle_43"
  parent: contact_But_Next
  x: 0
  y: 0
  width: 440
  height: 200
  backgroundColor: "rgba(250,242,232,1)"
  borderRadius: 40
  borderColor: "rgba(151,151,151,1)"
  borderWidth: 2

label_43 = new TextLayer
  name: "label_43"
  parent: contact_But_Next
  x: 159
  y: 62
  text: "Next"
  fontSize: 56
  fontFamily: "Avenir Next"
  fontWeight: 500
  textAlign: "center"
  color: "rgba(71,71,71,1)"

contact_Txt_Mail = new Layer
  name: "contact_Txt_Mail"
  parent: contact_Body
  x: 564
  y: 360
  backgroundColor: "transparent"
  width: 920
  height: 120

rectangle2_8 = new Layer
  name: "rectangle2_8"
  parent: contact_Txt_Mail
  x: 0
  y: 0
  width: 920
  height: 120
  backgroundColor: "rgba(253,245,228,1)"
  borderRadius: 10
  borderColor: "rgba(245,190,85,1)"
  borderWidth: 10

mail = new TextLayer
  name: "Label"
  parent: contact_Txt_Mail
  x: 21
  y: 12
  text: "Mail"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "left"
  color: "rgba(247,203,119,1)"

contact_Txt_Email = new Layer
  name: "contact_Txt_Email"
  parent: contact_Body
  x: 564
  y: 520
  backgroundColor: "transparent"
  width: 920
  height: 120

rectangle2_9 = new Layer
  name: "rectangle2_9"
  parent: contact_Txt_Email
  x: 0
  y: 0
  width: 920
  height: 120
  backgroundColor: "rgba(253,245,228,1)"
  borderRadius: 10
  borderColor: "rgba(245,190,85,1)"
  borderWidth: 10

email = new TextLayer
  name: "Label"
  parent: contact_Txt_Email
  x: 21
  y: 12
  text: "Email"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "left"
  color: "rgba(247,203,119,1)"

contact_Txt_Phone = new Layer
  name: "contact_Txt_Phone"
  parent: contact_Body
  x: 564
  y: 680
  backgroundColor: "transparent"
  width: 920
  height: 120

rectangle2_10 = new Layer
  name: "rectangle2_10"
  parent: contact_Txt_Phone
  x: 0
  y: 0
  width: 920
  height: 120
  backgroundColor: "rgba(253,245,228,1)"
  borderRadius: 10
  borderColor: "rgba(245,190,85,1)"
  borderWidth: 10

phone = new TextLayer
  name: "Label"
  parent: contact_Txt_Phone
  x: 21
  y: 12
  text: "Phone"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "left"
  color: "rgba(247,203,119,1)"

contact_i_Letter = new Layer
  name: "contact_i_Letter"
  parent: contact_Body
  x: 404
  y: 378
  width: 120
  height: 84.70279319224828
  image: "images/Contact_i_Letter.svg"

contact_i_Email = new Layer
  name: "contact_i_Email"
  parent: contact_Body
  x: 404
  y: 520
  width: 120
  height: 119.99933444349506
  image: "images/Contact_i_Email.svg"

contact_i_Phone = new Layer
  name: "contact_i_Phone"
  parent: contact_Body
  x: 404
  y: 680
  width: 120
  height: 119.67929470482082
  image: "images/Contact_i_Phone.svg"

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
