import MyDraw from "../DOM/draw.mjs";
var doc = document.getElementById("lienzo_free");
var papel = doc.getContext("2d");
var size_papel = document.getElementById("txt_size_free");
var button_change_size = document.getElementById("button_change_size");
var draw = new MyDraw(papel);

document.addEventListener("click", changeSize)
document.addEventListener("keyup", drawWithKey);
draw.egde(doc);

var keys =
{
  LEFT : 37,
  UP : 38,
  RIGHT : 39,
  DOWN : 40
};

function changeSize()
{
  var size = parseInt(size_papel.value);
  if (size > 0)
  {
    doc.width = size;
    doc.height = size;
    draw.egde(doc);
  }
}

function drawWithKey(key)
{
  switch (key.keyCode) {
    case keys.LEFT:
      console.log("LEFT!");
      draw.line("Red", 150, 200, 100, 50, 3);
      break;

    case keys.UP:
      console.log("UP!");
      break;

    case keys.RIGHT:
      console.log("RIGHT!");
      break;

    case keys.DOWN:
      console.log("DOWN!");
      break;

    default:
      console.log("Key?");
  }
  draw.egde(doc);
}
