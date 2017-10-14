window.aB_Summary_Text = aB_Splash.copy()
window.aB_Summary_Text.name = "aB_Summary_Text"
for i in window.aB_Summary_Text.descendants
  i.destroy()
window.bG = new Layer
  name: "bG"
  parent: aB_Summary_Text
  x: 0
  y: 0
  width: 2048
  height: 1416
  backgroundColor: "rgba(250,250,250,1)"
window.splash_t_Title = new TextLayer
  name: "Summary_t_Title"
  parent: aB_Summary_Text
  x: 564
  y: 342
  width: 918.8536370080562
  text: "Summary"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 700
  textAlign: "center"
  color: "rgba(74,74,74,1)"

window.splash_t_Text = new TextLayer
  name: "Summary_t_Text"
  parent: aB_Summary_Text
  x: Align.centerX
  y: 430
  width: 900
  text: "#{JSON.stringify window.data} o clock"
  fontSize: 72
  fontFamily: "Avenir Next"
  fontWeight: 400
  textAlign: "center"
  color: "rgba(74,74,74,1)"

