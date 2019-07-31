var d = document.getElementById("lienzo");
var lienzo = d.getContext("2d");
var txtNumLines = document.getElementById("txt_number_lines");
var btndraw = document.getElementById("button_draw");

btndraw.addEventListener("click", drawClick);
d.width = 600;
d.height  = 600;

function drawLine(color_line, xi, yi, xf, yf, lineWidth)
{
  lienzo.lineWidth = lineWidth;
  lienzo.beginPath();
  lienzo.strokeStyle = color_line;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function drawEgde()
{
  lienzo.beginPath();
  lienzo.strokeStyle = "#000000"
  lienzo.lineWidth = 8;
  lienzo.rect(1, 1, 599, 599);
  lienzo.stroke();
  lienzo.closePath();
}

function drawCross(step)
{
  var x = 300;
  var x1 = 300;
  for(var y = 60; y <= 300; y += step)
  {
    x += step;
    x1 -= step;
    drawLine("red", 300, y, x, 300, 2);
    drawLine("blue", 300, y, x1, 300, 2);
  }

  x = 300;
  x1 = 300;
  for(var y = 540; y >= 300; y -= step)
  {
    x += step;
    x1 -= step;
    drawLine("green", 300, y, x, 300, 2);
    drawLine("yellow", 300, y, x1, 300, 2);
  }
}

function drawClick()
{
  alert("Hola");
}

var widthLienzo = d.width;
var step = 5;
var step1 = 5;
var parting = widthLienzo / step1;
var x = 0;

for(var y = parting; y <= widthLienzo; y+=parting)
{
  x += parting;
  drawLine("red", 0, y, x, widthLienzo, 2);
  drawLine("yellow", x, 0, widthLienzo, y, 2);
}
/*
x = 0
for(var y = widthLienzo; y >= 0; y-=step)
{
  drawLine("blue", widthLienzo, x, y, widthLienzo, 2);
  drawLine("green", 0, y, x, 0, 2);
  x +=step;
}
*/
drawCross(step);

drawEgde();
