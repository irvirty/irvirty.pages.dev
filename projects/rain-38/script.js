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

if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
	if (document.getElementById("printAudio") != null){
		document.getElementById("printAudio").innerHTML = `

<audio controls width="250" autoplay="autoplay">
  <source src="https://upload.wikimedia.org/wikipedia/commons/9/99/Mountain_Stream_Rain_Shower_ASMR.webm" type="video/webm">
</audio>
		`;
	}
}
