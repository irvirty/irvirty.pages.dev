// v.2.2.0
// only for many random div with different position

if (true){
let n = 0;
var print = "";
let min = 50;
let max = 150;
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
var dropflake = Math.floor(Math.random() * (max - min + 1) + min);

while (n <= dropflake) {
	print +=
		`<div class="dropflake" style="position: absolute; top:` +
		Math.floor(Math.random() * 100) +
		`%; left:` +
		Math.floor(Math.random() * 100) +
		`%">💧</div>`;
	n++;
}

print =
	`

<div class="group">
<div class="item">` +
	print +
	`</div>
<div class="item2">` +
	print +
	`</div>
</div>

`;

document.getElementById("dropPrint").innerHTML = print;
}

//if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){}

let rainAudioConfig = "";
rainAudioConfig = localStorage.getItem("rainAudioConfig");

function rainAudioConfigClick(config){
if (config == "rain"){ localStorage.setItem("rainAudioConfig", "rain"); fuMReload(); }
if (config == "noise"){ localStorage.setItem("rainAudioConfig", "noise"); fuMReload(); }
if (config == "silence"){ localStorage.setItem("rainAudioConfig", "silence"); fuMReload(); }
}


switch (rainAudioConfig) {

case "noise":

if (document.getElementById("printAudio") != null){
document.getElementById("printAudio").innerHTML = `

<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio#-->
<div class="op">
<figure>
  <figcaption>white-noise.mp3</figcaption>
  <audio controls autoplay loop src="${confD}audio/white-noise.mp3"></audio>
<br>
  <a href="${confD}audio/white-noise.mp3"> Download audio </a>
</figure>
</div>

`;

fuLPrintMode("noise");
}

break;

case "silence":
// code
fuLPrintMode("silence");
break;


default:

fuLPrintMode("rain");

if (document.getElementById("printAudio") != null){
document.getElementById("printAudio").innerHTML = `

<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio#-->
<div class="op">
<figure>
  <figcaption>rain.mp3</figcaption>
  <audio controls autoplay loop src="${confD}audio/rain.mp3"></audio>
<br>
  <a href="${confD}audio/rain.mp3"> Download audio </a>
</figure>
</div>

`;
}

}

function fuLPrintMode(mode){

if (document.getElementById("printMode") != null){

document.getElementById("printMode").innerHTML = `<span class="inlineBlock padding" style="padding-right: 0;">Audio:</span>`;

if (mode === "rain"){
document.getElementById("printMode").innerHTML += `
<a class="gray inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('rain');return false;">rain</a>
|
`;
} else {
document.getElementById("printMode").innerHTML += `
<a class="brand inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('rain');return false;">rain</a>
|
`;
}

if (mode === "noise"){
document.getElementById("printMode").innerHTML += `
<a class="gray inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('noise');return false;">noise</a>
|
`;
} else {
document.getElementById("printMode").innerHTML += `
<a class="brand inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('noise');return false;">noise</a>
|
`;
}

if (mode === "silence"){
document.getElementById("printMode").innerHTML += `
<a class="gray inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('silence');return false;">silence</a>
`;
} else {
document.getElementById("printMode").innerHTML += `
<a class="brand inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('silence');return false;">silence</a>
`;
}

}

}

