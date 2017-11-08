window.content = new Layer
	name: "content"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 1052
	height: 614

name = new TextLayer
	name: "name"
	parent: content
	x: 15
	y: 15
	text: "{Name}"
	fontSize: 40
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

custodyStatus = new TextLayer
	name: "custodyStatus"
	parent: content
	x: 15
	y: 181
	text: "{CustodyStatus}"
	fontSize: 40
	fontFamily: "Avenir Next"
	fontWeight: 200
	textAlign: "left"
	color: "rgba(71,71,71,1)"

referred = new TextLayer
	name: "referred"
	parent: content
	x: 518
	y: 45
	text: "{Referred}"
	fontSize: 30
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

magistrate = new TextLayer
	name: "magistrate"
	parent: content
	x: 518
	y: 158
	text: "{Magistrate}"
	fontSize: 30
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

court = new TextLayer
	name: "court_"
	parent: content
	x: 826
	y: 162
	text: "{Court}"
	fontSize: 30
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

referedFrom = new TextLayer
	name: "referedFrom"
	parent: content
	x: 518
	y: 15
	text: "Refered From"
	fontSize: 24
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(71,71,71,1)"

dLRID = new TextLayer
	name: "dLRID"
	parent: content
	x: 826
	y: 21
	text: "DLR ID:"
	fontSize: 20
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(194,55,52,1)"

dLRID_2 = new TextLayer
	name: "dLRID_2"
	parent: content
	x: 910
	y: 25
	text: "{DLRID}"
	fontSize: 16
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "right"
	color: "rgba(194,55,52,1)"

courtID = new TextLayer
	name: "courtID"
	parent: content
	x: 910
	y: 53
	text: "{CourtID}"
	fontSize: 16
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "right"
	color: "rgba(194,55,52,1)"

courtID_2 = new TextLayer
	name: "courtID_2"
	parent: content
	x: 826
	y: 48
	text: "Court ID:"
	fontSize: 20
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(194,55,52,1)"

matters = new TextLayer
	name: "matters"
	parent: content
	x: 15
	y: 263
	text: "Matters"
	fontSize: 36
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(194,55,52,1)"

magistrate_2 = new TextLayer
	name: "magistrate_2"
	parent: content
	x: 518
	y: 125
	text: "Magistrate:"
	fontSize: 24
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(71,71,71,1)"

court_2 = new TextLayer
	name: "court_2"
	parent: content
	x: 826
	y: 129
	text: "Court:"
	fontSize: 24
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(71,71,71,1)"

otherwiseKnownAs = new TextLayer
	name: "otherwiseKnownAs"
	parent: content
	x: 15
	y: 86
	text: "Otherwise known as {otherName}"
	fontSize: 24
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(71,71,71,1)"

bornDateOfBirth = new TextLayer
	name: "bornDateOfBirth"
	parent: content
	x: 15
	y: 129
	text: "Born: {dateOfBirth}"
	fontSize: 24
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(71,71,71,1)"

matter = new Layer
	name: "matter"
	parent: content
	x: 2
	y: 307
	backgroundColor: "transparent"
	width: 1048
	height: 104

rectangle = new Layer
	name: "rectangle"
	parent: matter
	x: 0
	y: 0
	width: 960
	height: 104
	backgroundColor: "#fff0f0"
	borderRadius: 6

theft = new TextLayer
	name: "theft"
	parent: matter
	x: 41
	y: 29
	text: "Theft"
	fontSize: 30
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

deets = new Layer
	name: "deets"
	parent: matter
	x: 700
	y: 0
	backgroundColor: "transparent"
	width: 259
	height: 101

details = new TextLayer
	name: "details"
	parent: deets
	x: 0
	y: 0
	text: "Details"
	fontSize: 18
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

theAccusedInMelbo = new TextLayer
	name: "theAccusedInMelbo"
	parent: deets
	x: 0
	y: 25
	width: 259
	text: "The Accused in Melbourne on the 16/8/2017  did steal a can of corn at the value of two dollars and fifty cents"
	fontSize: 14
	fontFamily: "Avenir Next"
	fontWeight: 400
	textAlign: "left"
	color: "rgba(71,71,71,1)"

dateofcharge = new Layer
	name: "dateofcharge"
	parent: matter
	x: 241
	y: 21
	backgroundColor: "transparent"
	width: 89
	height: 50

onday = new TextLayer
	name: "onday"
	parent: dateofcharge
	x: 0
	y: 0
	text: "On:"
	fontSize: 18
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

layer_1682017 = new TextLayer
	name: "layer_1682017"
	parent: dateofcharge
	x: 0
	y: 25
	text: "16/8/2017"
	fontSize: 18
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

summaryOffence = new TextLayer
	name: "summaryOffence"
	parent: matter
	x: 524
	y: 21
	text: """Summary
Offence"""
	fontSize: 18
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"



