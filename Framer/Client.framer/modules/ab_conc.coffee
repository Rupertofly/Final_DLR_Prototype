window.aB_Concession = new Layer
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