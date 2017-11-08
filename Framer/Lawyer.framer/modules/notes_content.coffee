window.notes = new Layer
	name: "notes"
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: 1052
	height: 614

documents = new TextLayer
	name: "documents"
	parent: notes
	x: 15
	y: 15
	text: "Documents"
	fontSize: 40
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

notes_2 = new TextLayer
	name: "notes_2"
	parent: notes
	x: 15
	y: 252
	text: "Notes"
	fontSize: 40
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

tasks = new TextLayer
	name: "tasks"
	parent: notes
	x: 790
	y: 15
	text: "Tasks"
	fontSize: 40
	fontFamily: "Avenir Next"
	fontWeight: 500
	textAlign: "left"
	color: "rgba(71,71,71,1)"

rectangle = new Layer
	name: "rectangle"
	parent: notes
	x: 15
	y: 75
	width: 716
	height: 161
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 6

rectangleCopy2 = new Layer
	name: "rectangleCopy2"
	parent: notes
	x: 15
	y: 307
	width: 716
	height: 254
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 6

rectangleCopy = new Layer
	name: "rectangleCopy"
	parent: notes
	x: 790
	y: 91
	width: 211
	height: 470
	backgroundColor: "rgba(239,239,239,1)"
	borderRadius: 6

charge_Sheet = new Layer
	name: "charge_Sheet"
	parent: notes
	x: 39
	y: 91
	width: 86
	height: 122
	image: "images/Charge_Sheet.png"

evidenceSheet = new Layer
	name: "evidenceSheet"
	parent: notes
	x: 164
	y: 91
	width: 86
	height: 121.64838709677417
	image: "images/evidenceSheet.png"

