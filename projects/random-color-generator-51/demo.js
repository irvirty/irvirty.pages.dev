// Radndom color demo v.1.2.4
// gen HTML result





// limit for demo result
var lLimit = 100;


var lPrint = [];


var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");


/*try{ q = decodeURIComponent(q); }
catch(err){ }*/


if (q != null&&q != 'null'){

if (document.getElementById('lTextarea') != null){
document.getElementById('lTextarea').value = (q);
}

} else {
q = "";
//https://en.wikipedia.org/wiki/Web_colors
//q  = "transparent,white,silver,gray,black,red,maroon,yellow,olive,lime,green,aqua,teal,blue,navy,fuchsia,purple,violet,pink,navy,rebeccapurple";

//https://www.w3.org/wiki/CSS/Properties/color/keywords
let allColors = [
{"text":"aliceblue", "text2":"#f0f8ff", "text3":"240,248,255", "text4":""},
{"text":"antiquewhite", "text2":"#faebd7", "text3":"250,235,215", "text4":""},
{"text":"aqua", "text2":"#00ffff", "text3":"0,255,255", "text4":""},
{"text":"aquamarine", "text2":"#7fffd4", "text3":"127,255,212", "text4":""},
{"text":"azure", "text2":"#f0ffff", "text3":"240,255,255", "text4":""},
{"text":"beige", "text2":"#f5f5dc", "text3":"245,245,220", "text4":""},
{"text":"bisque", "text2":"#ffe4c4", "text3":"255,228,196", "text4":""},
{"text":"black", "text2":"#000000", "text3":"0,0,0", "text4":""},
{"text":"blanchedalmond", "text2":"#ffebcd", "text3":"255,235,205", "text4":""},
{"text":"blue", "text2":"#0000ff", "text3":"0,0,255", "text4":""},
{"text":"blueviolet", "text2":"#8a2be2", "text3":"138,43,226", "text4":""},
{"text":"brown", "text2":"#a52a2a", "text3":"165,42,42", "text4":""},
{"text":"burlywood", "text2":"#deb887", "text3":"222,184,135", "text4":""},
{"text":"cadetblue", "text2":"#5f9ea0", "text3":"95,158,160", "text4":""},
{"text":"chartreuse", "text2":"#7fff00", "text3":"127,255,0", "text4":""},
{"text":"chocolate", "text2":"#d2691e", "text3":"210,105,30", "text4":""},
{"text":"coral", "text2":"#ff7f50", "text3":"255,127,80", "text4":""},
{"text":"cornflowerblue", "text2":"#6495ed", "text3":"100,149,237", "text4":""},
{"text":"cornsilk", "text2":"#fff8dc", "text3":"255,248,220", "text4":""},
{"text":"crimson", "text2":"#dc143c", "text3":"220,20,60", "text4":""},
{"text":"cyan", "text2":"#00ffff", "text3":"0,255,255", "text4":""},
{"text":"darkblue", "text2":"#00008b", "text3":"0,0,139", "text4":""},
{"text":"darkcyan", "text2":"#008b8b", "text3":"0,139,139", "text4":""},
{"text":"darkgoldenrod", "text2":"#b8860b", "text3":"184,134,11", "text4":""},
{"text":"darkgray", "text2":"#a9a9a9", "text3":"169,169,169", "text4":""},
{"text":"darkgreen", "text2":"#006400", "text3":"0,100,0", "text4":""},
{"text":"darkgrey", "text2":"#a9a9a9", "text3":"169,169,169", "text4":""},
{"text":"darkkhaki", "text2":"#bdb76b", "text3":"189,183,107", "text4":""},
{"text":"darkmagenta", "text2":"#8b008b", "text3":"139,0,139", "text4":""},
{"text":"darkolivegreen", "text2":"#556b2f", "text3":"85,107,47", "text4":""},
{"text":"darkorange", "text2":"#ff8c00", "text3":"255,140,0", "text4":""},
{"text":"darkorchid", "text2":"#9932cc", "text3":"153,50,204", "text4":""},
{"text":"darkred", "text2":"#8b0000", "text3":"139,0,0", "text4":""},
{"text":"darksalmon", "text2":"#e9967a", "text3":"233,150,122", "text4":""},
{"text":"darkseagreen", "text2":"#8fbc8f", "text3":"143,188,143", "text4":""},
{"text":"darkslateblue", "text2":"#483d8b", "text3":"72,61,139", "text4":""},
{"text":"darkslategray", "text2":"#2f4f4f", "text3":"47,79,79", "text4":""},
{"text":"darkslategrey", "text2":"#2f4f4f", "text3":"47,79,79", "text4":""},
{"text":"darkturquoise", "text2":"#00ced1", "text3":"0,206,209", "text4":""},
{"text":"darkviolet", "text2":"#9400d3", "text3":"148,0,211", "text4":""},
{"text":"deeppink", "text2":"#ff1493", "text3":"255,20,147", "text4":""},
{"text":"deepskyblue", "text2":"#00bfff", "text3":"0,191,255", "text4":""},
{"text":"dimgray", "text2":"#696969", "text3":"105,105,105", "text4":""},
{"text":"dimgrey", "text2":"#696969", "text3":"105,105,105", "text4":""},
{"text":"dodgerblue", "text2":"#1e90ff", "text3":"30,144,255", "text4":""},
{"text":"firebrick", "text2":"#b22222", "text3":"178,34,34", "text4":""},
{"text":"floralwhite", "text2":"#fffaf0", "text3":"255,250,240", "text4":""},
{"text":"forestgreen", "text2":"#228b22", "text3":"34,139,34", "text4":""},
{"text":"fuchsia", "text2":"#ff00ff", "text3":"255,0,255", "text4":""},
{"text":"gainsboro", "text2":"#dcdcdc", "text3":"220,220,220", "text4":""},
{"text":"ghostwhite", "text2":"#f8f8ff", "text3":"248,248,255", "text4":""},
{"text":"gold", "text2":"#ffd700", "text3":"255,215,0", "text4":""},
{"text":"goldenrod", "text2":"#daa520", "text3":"218,165,32", "text4":""},
{"text":"gray", "text2":"#808080", "text3":"128,128,128", "text4":""},
{"text":"green", "text2":"#008000", "text3":"0,128,0", "text4":""},
{"text":"greenyellow", "text2":"#adff2f", "text3":"173,255,47", "text4":""},
{"text":"grey", "text2":"#808080", "text3":"128,128,128", "text4":""},
{"text":"honeydew", "text2":"#f0fff0", "text3":"240,255,240", "text4":""},
{"text":"hotpink", "text2":"#ff69b4", "text3":"255,105,180", "text4":""},
{"text":"indianred", "text2":"#cd5c5c", "text3":"205,92,92", "text4":""},
{"text":"indigo", "text2":"#4b0082", "text3":"75,0,130", "text4":""},
{"text":"ivory", "text2":"#fffff0", "text3":"255,255,240", "text4":""},
{"text":"khaki", "text2":"#f0e68c", "text3":"240,230,140", "text4":""},
{"text":"lavender", "text2":"#e6e6fa", "text3":"230,230,250", "text4":""},
{"text":"lavenderblush", "text2":"#fff0f5", "text3":"255,240,245", "text4":""},
{"text":"lawngreen", "text2":"#7cfc00", "text3":"124,252,0", "text4":""},
{"text":"lemonchiffon", "text2":"#fffacd", "text3":"255,250,205", "text4":""},
{"text":"lightblue", "text2":"#add8e6", "text3":"173,216,230", "text4":""},
{"text":"lightcoral", "text2":"#f08080", "text3":"240,128,128", "text4":""},
{"text":"lightcyan", "text2":"#e0ffff", "text3":"224,255,255", "text4":""},
{"text":"lightgoldenrodyellow", "text2":"#fafad2", "text3":"250,250,210", "text4":""},
{"text":"lightgray", "text2":"#d3d3d3", "text3":"211,211,211", "text4":""},
{"text":"lightgreen", "text2":"#90ee90", "text3":"144,238,144", "text4":""},
{"text":"lightgrey", "text2":"#d3d3d3", "text3":"211,211,211", "text4":""},
{"text":"lightpink", "text2":"#ffb6c1", "text3":"255,182,193", "text4":""},
{"text":"lightsalmon", "text2":"#ffa07a", "text3":"255,160,122", "text4":""},
{"text":"lightseagreen", "text2":"#20b2aa", "text3":"32,178,170", "text4":""},
{"text":"lightskyblue", "text2":"#87cefa", "text3":"135,206,250", "text4":""},
{"text":"lightslategray", "text2":"#778899", "text3":"119,136,153", "text4":""},
{"text":"lightslategrey", "text2":"#778899", "text3":"119,136,153", "text4":""},
{"text":"lightsteelblue", "text2":"#b0c4de", "text3":"176,196,222", "text4":""},
{"text":"lightyellow", "text2":"#ffffe0", "text3":"255,255,224", "text4":""},
{"text":"lime", "text2":"#00ff00", "text3":"0,255,0", "text4":""},
{"text":"limegreen", "text2":"#32cd32", "text3":"50,205,50", "text4":""},
{"text":"linen", "text2":"#faf0e6", "text3":"250,240,230", "text4":""},
{"text":"magenta", "text2":"#ff00ff", "text3":"255,0,255", "text4":""},
{"text":"maroon", "text2":"#800000", "text3":"128,0,0", "text4":""},
{"text":"mediumaquamarine", "text2":"#66cdaa", "text3":"102,205,170", "text4":""},
{"text":"mediumblue", "text2":"#0000cd", "text3":"0,0,205", "text4":""},
{"text":"mediumorchid", "text2":"#ba55d3", "text3":"186,85,211", "text4":""},
{"text":"mediumpurple", "text2":"#9370db", "text3":"147,112,219", "text4":""},
{"text":"mediumseagreen", "text2":"#3cb371", "text3":"60,179,113", "text4":""},
{"text":"mediumslateblue", "text2":"#7b68ee", "text3":"123,104,238", "text4":""},
{"text":"mediumspringgreen", "text2":"#00fa9a", "text3":"0,250,154", "text4":""},
{"text":"mediumturquoise", "text2":"#48d1cc", "text3":"72,209,204", "text4":""},
{"text":"mediumvioletred", "text2":"#c71585", "text3":"199,21,133", "text4":""},
{"text":"midnightblue", "text2":"#191970", "text3":"25,25,112", "text4":""},
{"text":"mintcream", "text2":"#f5fffa", "text3":"245,255,250", "text4":""},
{"text":"mistyrose", "text2":"#ffe4e1", "text3":"255,228,225", "text4":""},
{"text":"moccasin", "text2":"#ffe4b5", "text3":"255,228,181", "text4":""},
{"text":"navajowhite", "text2":"#ffdead", "text3":"255,222,173", "text4":""},
{"text":"navy", "text2":"#000080", "text3":"0,0,128", "text4":""},
{"text":"oldlace", "text2":"#fdf5e6", "text3":"253,245,230", "text4":""},
{"text":"olive", "text2":"#808000", "text3":"128,128,0", "text4":""},
{"text":"olivedrab", "text2":"#6b8e23", "text3":"107,142,35", "text4":""},
{"text":"orange", "text2":"#ffa500", "text3":"255,165,0", "text4":""},
{"text":"orangered", "text2":"#ff4500", "text3":"255,69,0", "text4":""},
{"text":"orchid", "text2":"#da70d6", "text3":"218,112,214", "text4":""},
{"text":"palegoldenrod", "text2":"#eee8aa", "text3":"238,232,170", "text4":""},
{"text":"palegreen", "text2":"#98fb98", "text3":"152,251,152", "text4":""},
{"text":"paleturquoise", "text2":"#afeeee", "text3":"175,238,238", "text4":""},
{"text":"palevioletred", "text2":"#db7093", "text3":"219,112,147", "text4":""},
{"text":"papayawhip", "text2":"#ffefd5", "text3":"255,239,213", "text4":""},
{"text":"peachpuff", "text2":"#ffdab9", "text3":"255,218,185", "text4":""},
{"text":"peru", "text2":"#cd853f", "text3":"205,133,63", "text4":""},
{"text":"pink", "text2":"#ffc0cb", "text3":"255,192,203", "text4":""},
{"text":"plum", "text2":"#dda0dd", "text3":"221,160,221", "text4":""},
{"text":"powderblue", "text2":"#b0e0e6", "text3":"176,224,230", "text4":""},
{"text":"purple", "text2":"#800080", "text3":"128,0,128", "text4":""},
{"text":"red", "text2":"#ff0000", "text3":"255,0,0", "text4":""},
{"text":"rosybrown", "text2":"#bc8f8f", "text3":"188,143,143", "text4":""},
{"text":"royalblue", "text2":"#4169e1", "text3":"65,105,225", "text4":""},
{"text":"saddlebrown", "text2":"#8b4513", "text3":"139,69,19", "text4":""},
{"text":"salmon", "text2":"#fa8072", "text3":"250,128,114", "text4":""},
{"text":"sandybrown", "text2":"#f4a460", "text3":"244,164,96", "text4":""},
{"text":"seagreen", "text2":"#2e8b57", "text3":"46,139,87", "text4":""},
{"text":"seashell", "text2":"#fff5ee", "text3":"255,245,238", "text4":""},
{"text":"sienna", "text2":"#a0522d", "text3":"160,82,45", "text4":""},
{"text":"silver", "text2":"#c0c0c0", "text3":"192,192,192", "text4":""},
{"text":"skyblue", "text2":"#87ceeb", "text3":"135,206,235", "text4":""},
{"text":"slateblue", "text2":"#6a5acd", "text3":"106,90,205", "text4":""},
{"text":"slategray", "text2":"#708090", "text3":"112,128,144", "text4":""},
{"text":"slategrey", "text2":"#708090", "text3":"112,128,144", "text4":""},
{"text":"snow", "text2":"#fffafa", "text3":"255,250,250", "text4":""},
{"text":"springgreen", "text2":"#00ff7f", "text3":"0,255,127", "text4":""},
{"text":"steelblue", "text2":"#4682b4", "text3":"70,130,180", "text4":""},
{"text":"tan", "text2":"#d2b48c", "text3":"210,180,140", "text4":""},
{"text":"teal", "text2":"#008080", "text3":"0,128,128", "text4":""},
{"text":"thistle", "text2":"#d8bfd8", "text3":"216,191,216", "text4":""},
{"text":"tomato", "text2":"#ff6347", "text3":"255,99,71", "text4":""},
{"text":"turquoise", "text2":"#40e0d0", "text3":"64,224,208", "text4":""},
{"text":"violet", "text2":"#ee82ee", "text3":"238,130,238", "text4":""},
{"text":"wheat", "text2":"#f5deb3", "text3":"245,222,179", "text4":""},
{"text":"white", "text2":"#ffffff", "text3":"255,255,255", "text4":""},
{"text":"whitesmoke", "text2":"#f5f5f5", "text3":"245,245,245", "text4":""},
{"text":"yellow", "text2":"#ffff00", "text3":"255,255,0", "text4":""},
{"text":"yellowgreen", "text2":"#9acd32", "text3":"154,205,50", "text4":""},
];

allColors.forEach((val, index) => {
let colorNameUpper = val["text"][0].toUpperCase() + val["text"].slice(1)
q += `${val['text']},`;
});

}



lDemo(q);

// for demo
function lDemo(q){

q = fuMClearText(q);

var print = `
result
`;


if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = '';
}

var randColor = 'lime';
if (document.getElementById("result") != null){
//document.getElementById("result").innerHTML += `<div class="item borderRadius button small bg4 padding3 border"><h2>color name:</h2></div>`; 


let n = 0;
while (n <= lLimit) {

if (q != ""&&q!= null &&q != undefined){
randColor = fuRandomColorGenerator(q);
}

print = `

<div class="item">
<div class="border light3 shadow borderRadius2 padding">
<div class="lTransparentBg borderRadius2">
<div class="borderRadius2 shadow" style="width: 100%; height: 90px; background-color: ${randColor};"></div>
</div>
<hr>
<div class="shadow">
<div class="border padding2 border" style="background-color: var(--c4); color: ${randColor};">Text test <b>Text test</b></div>
<div class="border padding2 border" style="background-color: var(--c4R); color: ${randColor};">Text test <b>Text test</b></div>
</div>
<div class="padding2 small bold">${randColor}</div>
</div>
</div>

`;

lPrint.push(print);


//document.getElementById("result").innerHTML += print; 
n++;
}

//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
let lPrintUnique = [...new Set(lPrint)];
//lNaturalSort(lPrintUnique);

//https://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas
document.getElementById("result").innerHTML = lPrintUnique.join(""); 

lPrint = [];
}

}




// input listener and print result
if (document.getElementById('lTextarea') != null){
var inputA = document.getElementById('lTextarea');
inputA.addEventListener('input', updateValueInput);
}

function updateValueInput(e) {
lDemo(e.target.value);
}



//https://stackoverflow.com/questions/2802341/natural-sort-of-alphanumerical-strings-in-javascript
function lNaturalSort(arr){
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

return arr.sort(collator.compare);
}















