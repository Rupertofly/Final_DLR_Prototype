window.aB_HourIncome = new Layer
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