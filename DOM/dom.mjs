import MyDraw from "./draw.mjs";

var d = document.getElementById("lienzo");
var lienzo = d.getContext("2d");
var num_Lines_1 = document.getElementById("txt_number_lines_1");
var num_Lines_2 = document.getElementById("txt_number_lines_2");
var num_Lines_3 = document.getElementById("txt_number_lines_3");
var num_Lines_4 = document.getElementById("txt_number_lines_4");
var num_Lines_5 = document.getElementById("txt_number_lines_5");
var color_line_1 = document.getElementById("txt_color_lines_1");
var color_line_2 = document.getElementById("txt_color_lines_2");
var color_line_3 = document.getElementById("txt_color_lines_3");
var color_line_4 = document.getElementById("txt_color_lines_4");
var color_line_5 = document.getElementById("txt_color_lines_5");
var btn_draw = document.getElementById("button_draw");
var btn_clean = document.getElementById("button_clean");
var option_up_r = document.getElementById("check-conner-up-rigth");
var option_up_l = document.getElementById("check-conner-up-left");
var option_down_r = document.getElementById("check-conner-down-rigth");
var option_down_l = document.getElementById("check-conner-down-left");
var option_cross = document.getElementById("check-cross");
var size_lienzo = document.getElementById("txt_size");

var draw = new MyDraw(lienzo);

btn_draw.addEventListener("click", drawClick);
btn_clean.addEventListener("click", cleanClick);
d.width = 300;
d.height = 300;

function drawClick() {
    var widthLienzo = parseInt(size_lienzo.value);
    d.width = widthLienzo;
    d.height = widthLienzo;
    if (option_up_r.checked) {
        var num_lines = parseInt(num_Lines_1.value);
        var parting = widthLienzo / num_lines;
        if (num_lines >= 0) {
            var x = 0;
            for (var y = parting; y <= widthLienzo; y += parting) {
                x += parting;
                draw.line(color_line_1.value, x, 0, widthLienzo, y, 2);
            }
        }
    }
    if (option_up_l.checked) {
        var num_lines = parseInt(num_Lines_2.value);
        var parting = widthLienzo / num_lines;
        if (num_lines >= 0) {
            var x = 0;
            for (var y = widthLienzo; y >= 0; y -= parting) {
                draw.line(color_line_2.value, 0, y, x, 0, 2);
                x += parting;
            }
        }
    }
    if (option_down_r.checked) {
        var num_lines = parseInt(num_Lines_3.value);
        var parting = widthLienzo / num_lines;
        if (num_lines >= 0) {
            var x = 0;
            for (var y = widthLienzo; y >= 0; y -= parting) {
                draw.line(
                    color_line_3.value,
                    widthLienzo,
                    x,
                    y,
                    widthLienzo,
                    2
                );
                x += parting;
            }
        }
    }
    if (option_down_l.checked) {
        var num_lines = parseInt(num_Lines_4.value);
        var parting = widthLienzo / num_lines;
        if (num_lines >= 0) {
            var x = 0;
            for (var y = parting; y <= widthLienzo; y += parting) {
                x += parting;
                draw.line(color_line_4.value, 0, y, x, widthLienzo, 2);
            }
        }
    }
    if (option_cross.checked) {
        var num_lines = parseInt(num_Lines_5.value);
        var parting = widthLienzo / num_lines;
        if (num_lines >= 0) {
            draw.cross(parting, widthLienzo);
        }
    }
    draw.egde(d);
}

function cleanClick() {
    draw.clean(d);
    draw.egde(d);
}

draw.egde(d);
