window.aB_WeekIncome = new Layer
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
  image: "images/Employment_i_Breifcase.svg"

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

