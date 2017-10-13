{ƒ, ƒƒ} = require 'findModule'
InputModule = require 'input-framer/input'

window.aB_Contact = new Layer
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