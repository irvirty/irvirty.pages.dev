// v.1.0.0

var color = '#613583';
var opacity = document.getElementById("inputRange").value;

var print = `
result
`;

document.getElementById("result").innerHTML = print; 



const input = document.getElementById("color");
const input2 = document.getElementById("color2");

input.addEventListener("input", updateValue);
input2.addEventListener("input", updateValue);

function updateValue(e) {
color = e.target.value;
printColor(color, opacity);
}


function printColor(color, opacity){

//https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric
//alert(color);
color = '#' + (color.replace(/[^a-z0-9]/gi, ''));

document.getElementById("block33").style.backgroundColor = `color-mix(in srgb, ${color} ${opacity}%, transparent)`;

let rgb = String(hexToRgb(color.replace("#", "")));
document.getElementById("result").innerText = `
${color}
rgb(${rgb})
`;
document.getElementById("color").value = color;
document.getElementById("color2").value = color;

}


printColor(color, opacity);




//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}






document.getElementById("opacityResult").innerHTML = opacity + '%';
document.getElementById("result2").innerHTML = `
color-mix(in srgb, ${color} ${opacity}%, transparent)
`;

function setOpacityRange(minus, plus){

opacity = document.getElementById("inputRange").value;

if(minus != undefined&&minus == '-'){
opacity--;
if(opacity < 0){ opacity = 0; }
document.getElementById("inputRange").value = opacity;
}

if(plus != undefined&&plus == '+'){
opacity++;
if(opacity > 100){ opacity = 100; }
document.getElementById("inputRange").value = opacity;
}

printColor(color, opacity)
document.getElementById("result2").innerHTML = `
color-mix(in srgb, ${color} ${opacity}%, transparent)
`;

document.getElementById("opacityResult").innerHTML = opacity + '%';
}


function rangeMinus(){
setOpacityRange('-', 'none');
}

function rangePlus(){
setOpacityRange('none', '+');
}

















