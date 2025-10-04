// v.2.0.0
// only for many random div with different position

let n = 0;
var print = "";
let min = 50;
let max = 200;
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
var snowflake = Math.floor(Math.random() * (max - min + 1) + min);

while (n <= snowflake) {
	print +=
		`<div class="snowflake" style="position: absolute; top:` +
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

document.getElementById("snowPrint").innerHTML = print;

//if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){}

let rainAudoConfig = "";
rainAudoConfig = localStorage.getItem("rainAudoConfig");

function rainAudoConfigClick(config){
if (config == "rain"){ localStorage.setItem("rainAudoConfig", "rain"); fuMReload(); }
if (config == "noise"){ localStorage.setItem("rainAudoConfig", "noise"); fuMReload(); }
}


switch (rainAudoConfig) {

case "noise":

if (document.getElementById("printAudio") != null){
document.getElementById("printAudio").innerHTML = `

<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio#-->
<div class="op">
<figure>
  <figcaption>white-noise.mp3:</figcaption>
  <audio controls autoplay loop src="${confD}audio/white-noise.mp3"></audio>
<br>
  <a href="${confD}audio/white-noise.mp3"> Download audio </a>
</figure>
</div>

<a class="brand" title="Click to do something" href="#" onclick="rainAudoConfigClick('rain');return false;">rain (audio)</a>

`;
}

break;

default:

if (document.getElementById("printAudio") != null){
document.getElementById("printAudio").innerHTML = `

<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio#-->
<div class="op">
<figure>
  <figcaption>rain.mp3:</figcaption>
  <audio controls autoplay loop src="${confD}audio/rain.mp3"></audio>
<br>
  <a href="${confD}audio/rain.mp3"> Download audio </a>
</figure>
</div>

<a class="brand" title="Click to do something" href="#" onclick="rainAudoConfigClick('noise');return false;">noise (audio)</a>

`;
}

}

