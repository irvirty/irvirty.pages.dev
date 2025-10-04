// v.2.0.0
// only for many random div with different position

let rainDropConfig = "";
rainDropConfig = localStorage.getItem("rainDropConfig");

function rainDropConfigClick(config){
if (config == "full"){ localStorage.setItem("rainDropConfig", "full"); fuMReload(); }
if (config == "light"){ localStorage.setItem("rainDropConfig", "light"); fuMReload(); }
}

if (rainDropConfig == "light"){

} else {
let n = 0;
var print = "";
let min = 30;
let max = 300;
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
}

break;

default:

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

if (document.getElementById("printMode") != null){
document.getElementById("printMode").innerHTML = `
<!--Mode:-->
<!--<span class="inlineBlock padding" style="padding-right: 0;">Rain:</span>
<a class="brand inlineBlock padding" title="Click to do something" href="#" onclick="rainDropConfigClick('full');return false;">full</a>
| 
<a class="brand inlineBlock padding" title="Click to do something" href="#" onclick="rainDropConfigClick('light');return false;">light</a>
/-->
<span class="inlineBlock padding" style="padding-right: 0;">Audio:</span>
<a class="brand inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('rain');return false;">rain</a>
|
<a class="brand inlineBlock padding" title="Click to do something" href="#" onclick="rainAudioConfigClick('noise');return false;">noise</a>

`;
}

