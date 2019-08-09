export default class MyDraw
{
  constructor(lienzo) {
    this.lienzo = lienzo;
  }

  line(color_line, xi, yi, xf, yf, lineWidth)
  {
    this.lienzo.lineWidth = lineWidth;
    this.lienzo.beginPath();
    this.lienzo.strokeStyle = color_line;
    this.lienzo.moveTo(xi, yi);
    this.lienzo.lineTo(xf, yf);
    this.lienzo.stroke();
    this.lienzo.closePath();
  }

  egde(doc)
  {
    this.lienzo.beginPath();
    this.lienzo.strokeStyle = "#000000"
    this.lienzo.lineWidth = 8;
    this.lienzo.rect(1, 1, doc.width - 1 , doc.height - 1);
    this.lienzo.stroke();
    this.lienzo.closePath();
  }

  rectangule(xi, yi, xf, yf, color_rec)
  {
    this.lienzo.beginPath();
    this.lienzo.strokeStyle = color_rec;
    this.lienzo.lineWidth = 5;
    this.lienzo.rect(xi, yi, 1, 1);
    this.lienzo.stroke();
    this.lienzo.closePath();
  }

  clean(doc)
  {
    this.lienzo.clearRect(0, 0, doc.width, doc.height);
    doc.width = 300;
    doc.height  = 300;
  }

  cross(step, width_Lienzo)
  {
    var size_cross = width_Lienzo / 2;
    var x = size_cross;
    var x1 = size_cross;
    step = step / 2;
    var color_cross = this.colorRandom();
    for(var y = 0; y <= size_cross; y += step)
    {
      x += step;
      x1 -= step;
      this.line(color_cross, size_cross, y, x, size_cross, 2);
      this.line(color_cross, size_cross, y, x1, size_cross, 2);
      color_cross = color_cross = this.colorRandom();
    }
    x = width_Lienzo / 2;
    x1 = width_Lienzo / 2;
    for(var y = width_Lienzo; y >= size_cross; y -= step)
    {
      x += step;
      x1 -= step;
      color_cross = this.colorRandom();
      this.line(color_cross, size_cross, y, x, size_cross, 2);
      this.line(color_cross, size_cross, y, x1, size_cross, 2);
    }
  }

  colorRandom()
  {
    var max = 255;
    var r = Math.floor(Math.random() * max);
    var g = Math.floor(Math.random() * max);
    var b = Math.floor(Math.random() * max);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
}
