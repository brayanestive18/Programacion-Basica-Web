import MyDraw from "../DOM/draw.mjs";

var doc = document.getElementById("lienzo_free");
var papel = doc.getContext("2d");
var size_papel = document.getElementById("txt_size_free");
var button_change_size = document.getElementById("button_change_size");
var draw = new MyDraw(papel);
var x = parseInt(doc.height / 2);
var y = parseInt(doc.height / 2);
let flag = 0;
var speed = 5;
var line_color = "blue";
var width_line = 3;
var size = 0;

button_change_size.addEventListener("click", changeSize);
document.addEventListener("keydown", drawWithKey);
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
  size = parseInt(size_papel.value);
  if (size > 0)
  {
    doc.width = size;
    doc.height = size;
    draw.egde(doc);
  }
  x = parseInt(size / 2);
  y = parseInt(size / 2);
  line_color = document.getElementById("color_linea_free").value;
  speed = parseInt(document.getElementById("step_line_free").value);
  width_line = parseInt(document.getElementById("size_line_free").value);
  starDraw();
}

function starDraw()
{
  flag = 1;
  draw.rectangule(x-1, y-1, "black");
  //draw.line("black", x, y - 1, x, y, 8);
}

function drawWithKey(key)
{
  if(flag == 1)
  {
    switch (key.keyCode) {
      case keys.LEFT:
        draw.line(line_color, x, y, x - speed, y, width_line);
        if (x > 0) {
          x = x - speed;
        }
        break;

      case keys.UP:
        draw.line(line_color, x, y - speed, x, y, width_line);
        if (y > 0) {
          y = y - speed;
        }
        break;

      case keys.RIGHT:
        draw.line(line_color, x, y, x + speed, y, width_line);
        if (x < size) {
          x = x + speed;
        }
        break;

      case keys.DOWN:
        draw.line(line_color, x, y + speed, x, y, width_line);
        if (y < size) {
          y = y + speed;
        }
        break;

      default:
        console.log("Key?");
    }
  }
  draw.egde(doc);
}
