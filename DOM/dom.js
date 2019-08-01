var d = document.getElementById("lienzo");
var lienzo = d.getContext("2d");
var txtNumLines = document.getElementById("txt_number_lines");
var btn_draw = document.getElementById("button_draw");
var btn_clean = document.getElementById("button_clean");
var option_up_r = document.getElementById("check-conner-up-rigth");
var option_up_l = document.getElementById("check-conner-up-left");
var option_down_r = document.getElementById("check-conner-down-rigth");
var option_down_l = document.getElementById("check-conner-down-left");
var option_cross = document.getElementById("check-cross");
var size_lienzo = document.getElementById("txt_size");

btn_draw.addEventListener("click", drawClick);
btn_clean.addEventListener("click", cleanClick);
d.width = 300;
d.height  = 300;

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
  lienzo.rect(1, 1, d.width - 1 , d.height - 1);
  lienzo.stroke();
  lienzo.closePath();
}

function drawCross(step, width_Lienzo)
{
  var size_cross = width_Lienzo / 2;
  var x = size_cross;
  var x1 = size_cross;
  step = step / 2;
  for(var y = 0; y <= size_cross; y += step)
  {
    x += step;
    x1 -= step;
    drawLine("red", size_cross, y, x, size_cross, 2);
    drawLine("blue", size_cross, y, x1, size_cross, 2);
  }

  x = width_Lienzo / 2;
  x1 = width_Lienzo / 2;
  for(var y = width_Lienzo; y >= size_cross; y -= step)
  {
    x += step;
    x1 -= step;
    drawLine("green", size_cross, y, x, size_cross, 2);
    drawLine("yellow", size_cross, y, x1, size_cross, 2);
  }
}

function drawClick()
{
  var widthLienzo = parseInt(size_lienzo.value);
  d.width = widthLienzo;
  d.height  = widthLienzo;
  var num_lines = parseInt(txtNumLines.value);
  var parting = widthLienzo / num_lines;
  if (num_lines > 0)
  {
    if (option_up_r.checked)
    {
      var x = 0;
      for(var y = parting; y <= widthLienzo; y += parting)
      {
        x += parting;
        drawLine("yellow", x, 0, widthLienzo, y, 2);
      }
    }
    if (option_up_l.checked)
    {
      var x = 0;
      for(var y = widthLienzo; y >= 0; y -= parting)
      {
        drawLine("green", 0, y, x, 0, 2);
        x +=parting;
      }
    }
    if (option_down_r.checked)
    {
      var x = 0;
      for(var y = widthLienzo; y >= 0; y -= parting)
      {
        drawLine("blue", widthLienzo, x, y, widthLienzo, 2);
        x +=parting;
      }
    }
    if (option_down_l.checked)
    {
      var x = 0;
      for(var y = parting; y <= widthLienzo; y += parting)
      {
        x += parting;
        drawLine("red", 0, y, x, widthLienzo, 2);
      }
    }
    if (option_cross.checked)
    {
      drawCross(parting, widthLienzo);
    }
  }
  drawEgde();
}

function cleanClick()
{
  lienzo.clearRect(0, 0, d.width, d.height);
  d.width = 300;
  d.height  = 300;
  drawEgde();
}

/*
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

x = 0
for(var y = widthLienzo; y >= 0; y-=step)
{
  drawLine("blue", widthLienzo, x, y, widthLienzo, 2);
  drawLine("green", 0, y, x, 0, 2);
  x +=step;
}
*/


drawEgde();
