var d = document.getElementById("lienzo");
var lienzo = d.getContext("2d");

function paintLine(color, xi, yi, xf, yf, lineWidth)
{
  lienzo.lineWidth = lineWidth;
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

var widthLienzo = 600;
var step = 5;
var x = 0;

for(var y = 0; y <= widthLienzo; y+=step)
{
  x += step;
  paintLine("red", 0, y, x, widthLienzo, 2);
  paintLine("yellow", x, 0, widthLienzo, y, 2);
}

x = 0
for(var y = widthLienzo; y >= 0; y-=step)
{
  paintLine("blue", widthLienzo, x, y, widthLienzo, 2);
  paintLine("green", 0, y, x, 0, 2);
  x +=step;
}

x = 300;
var x1 = 300;
for(var y = 60; y <= 300; y += step)
{
  x += step;
  x1 -= step;
  paintLine("red", 300, y, x, 300, 2);
  paintLine("blue", 300, y, x1, 300, 2);
}

x = 300;
x1 = 300;
for(var y = 540; y >= 300; y -= step)
{
  x += step;
  x1 -= step;
  paintLine("green", 300, y, x, 300, 2);
  paintLine("yellow", 300, y, x1, 300, 2);
}
