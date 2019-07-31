var d = document.getElementById("lienzo");
var lienzo = d.getContext("2d");

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
  lienzo.strokeStyle = "black"
  lienzo.lineWidth = 8;
  lienzo.rect(0, 0, 600, 600);
  lienzo.stroke();
  lienzo.closePath();
}

var widthLienzo = 600;
var step = 5;
var x = 0;

for(var y = 0; y <= widthLienzo; y+=step)
{
  x += step;
  drawLine("red", 0, y, x, widthLienzo, 2);
  drawLine("yellow", x, 0, widthLienzo, y, 2);
}

x = 0
for(var y = widthLienzo; y >= 0; y-=step)
{
  drawLine("blue", widthLienzo, x, y, widthLienzo, 2);
  drawLine("green", 0, y, x, 0, 2);
  x +=step;
}

x = 300;
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

drawEgde();
