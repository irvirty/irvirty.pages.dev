// v.1.0.1

let divNumber = 1000;

var url = new URL(window.location);
var q = url.searchParams.get("q");
if(q != null){ divNumber = Number(q); }

if (q == null||q == ""||isNaN(q)){ divNumber = 1000; }

document.getElementById("resultQ").innerHTML = divNumber; 


//https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
var startTime = performance.now()

let colorListArr = [
"--brand",
"--brand2",
"--red",
"--red2",
"--orange",
"--orange2",
"--yellow",
"--yellow2",
"--green",
"--green2",
"--blue",
"--blue2",
"--indigo",
"--indigo2",
"--violet",
"--violet2",
];



var print = ``;
divNumber++;
for (let i = 1; i < divNumber; i++) {
let lColor = '';
lColor = Math.floor(Math.random() * colorListArr.length);
lColor = colorListArr[lColor];

let lColor2 = '';
lColor2 = Math.floor(Math.random() * colorListArr.length);
lColor2 = colorListArr[lColor2];

let moreLight = "";
if(conf["confThemeEmbed"] == "light"){
moreLight = "brightness(120%);";
}else {
moreLight = "brightness(80%);";
}
print += `
<a href="#lId${i}"><div class="inlineFlex padding xxSmall light border3 bg3 borderRadius margin1Px" style="
background-color: color-mix(in srgb, var(${lColor}) ${fuMRandom(0, 100)}%, transparent);
 filter: ${moreLight} ">${i}</div></a>
`; // comment for fast load
}




document.getElementById("result").innerHTML = print; 
//document.getElementById('footer').scrollIntoView();




var endTime = performance.now();
//console.log(`Call to doSomething took ${millisToMinutesAndSeconds(endTime - startTime)}`);

//document.getElementById("result").innerHTML += `<div class="block padding2 tCenter margin2 light">Gen. time: ${endTime - startTime} milliseconds</div>`;

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

//document.getElementById("result").innerHTML += `<div class="block padding2 tCenter margin2 bg4 border small borderRadius2">Generation and drawing page time: <b>${millisToMinutesAndSeconds(endTime - startTime)}</b></div>`;



