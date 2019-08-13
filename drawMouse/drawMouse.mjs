import MyDraw from "../DOM/draw.mjs";

var doc = document.getElementById("drawMouse");

var papel_mouse = doc.getContext("2d");
var draw = new MyDraw(papel_mouse);
doc.addEventListener("mousemove", drawMouse);

draw.egde(doc);

function drawMouse(event)
{
  console.log("Funciona creo Jajajajaj");
  var message = 'Mouse position: ' + event.clientX + ',' + event.clientY;
  //console.log(message);
  document.getElementById("cord_mouse").innerHTML =
    "Coordenadas X: " + event.clientX + " Y: " + event.clientY;
}
