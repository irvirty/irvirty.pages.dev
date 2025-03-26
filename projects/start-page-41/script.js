// Start page v.1.2.0


// time v.1.4.4
// creation date: 2023
// inspired by Google Clock


function normalize(a){
if (a <= 9){ a = '0'+a; }
return a;
}

var sec = 0;
var secArr = [];
secArr[0] = 0;

function fuStopwatch(){

sec = secArr[0]++;

let hours = normalize(Math.floor(sec / 3600));
let minutes = normalize(Math.floor(sec % 3600 / 60));
let seconds = normalize(Math.floor(sec % 3600 % 60));
//console.log(hours+' '+minutes+' '+seconds);

let time2 = Date.now();
time2 = new Date(time2);
let hours2 = normalize(time2.getHours());
let minutes2 = normalize(time2.getMinutes());
let seconds2 = normalize(time2.getSeconds());

let hoursUtc = normalize(time2.getUTCHours());
let minutesUtc = normalize(time2.getUTCMinutes());
let secondsUtc = normalize(time2.getUTCSeconds());


/*
// sound alert
if (minutes == '59'&&seconds == '59'){
document.getElementById('audio').innerHTML += '<audio style="display:none" autoplay="false" src="/audio/ok.ogg">';
}
if (minutes == '29'&&seconds == '59'){
document.getElementById('audio').innerHTML += '<audio style="display:none" autoplay="false" src="/audio/click.ogg">';
}*/

document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
document.getElementById('clock2').innerHTML = hours2 + ':' + minutes2; // result 2 standart 
document.getElementById('clockUtc').innerHTML = hoursUtc + ':' + minutesUtc; // result 2 standart 


//clock time
let printTitleText = hours + ':' + minutes + ':' + seconds + " - Start page";
//let printTitleText = hours + ':' + minutes + " - Start page";

document.getElementsByTagName('title')[0].innerText = printTitleText + conf["confDomainNameInTitle"];

}




fuStopwatch();
setInterval(fuStopwatch, 1000);

//document.getElementById('search').innerHTML = ``;

/*
//https://stackoverflow.com/questions/55514259/javascript-remove-focus-event-listener
const listener = function(e) {
wakeLock = navigator.wakeLock.request("screen");
document.getElementById('msg').innerHTML = `<b class="medium">On.</b>`;
console.log('focused!'); // do anything here
} 

const listener2 = function(e) {
wakeLock = "";
document.getElementById('msg').innerHTML = `<b class="medium">Off.</b>`;
console.log('unfocused!'); // do anything here
}*/

var wakeLock = "";

// Wake up screen
//https://developer.mozilla.org/en-US/docs/Web/API/WakeLock
function fuWakeLock(mode){

localStorage.setItem("wakeLockStatus", mode);

/*fixme automode document.addEventListener("onfocus", listener);
document.addEventListener("onblur", listener2);*/



switch (mode) {

case 'off':



wakeLock = "";
document.getElementById('msg').innerHTML = `<b class="medium">Off.</b>`;
break;

case 'on':

try {
//const wakeLock = await navigator.wakeLock.request("screen");
//const wakeLock = navigator.wakeLock.request("screen");
wakeLock = navigator.wakeLock.request("screen");
document.getElementById('msg').innerHTML = `<b class="medium">On.</b>`;
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
document.getElementById('msg').innerHTML = `<b class="medium">On.</b> ${err.name}, ${err.message}`;
}
break;

case 'autoDisabled':

try {
//const wakeLock = await navigator.wakeLock.request("screen");
//const wakeLock = navigator.wakeLock.request("screen");
wakeLock = navigator.wakeLock.request("screen");
document.getElementById('msg').innerHTML = `<b class="medium">On.</b>`;
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
document.getElementById('msg').innerHTML = `<b class="medium">On.</b> ${err.name}, ${err.message}`;
}


//https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event
onfocus = (event) => {
//https://developer.mozilla.org/en-US/docs/Web/API/WakeLock
try {
//const wakeLock = await navigator.wakeLock.request("screen");
//const wakeLock = navigator.wakeLock.request("screen");
wakeLock = navigator.wakeLock.request("screen");
document.getElementById('msg').innerHTML = `<b class="medium">On.</b>`;
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
document.getElementById('msg').innerHTML = `<b class="medium">On.</b> ${err.name}, ${err.message}`;
}
}

onblur = (event) => {
wakeLock = "";
document.getElementById('msg').innerHTML = `<b class="medium">Off.</b>`;
}

/*document.addEventListener("focus", listener);
document.addEventListener("blur", listener2);*/

break;

default:

console.log(`default mode (empty).`);
};



}




function wakeLockStatusButtonSwitch(wakeLockStatus2){

fuWakeLock(wakeLockStatus2);

switch (wakeLockStatus2) {

case 'off':
document.getElementById('wakeLockButtons').innerHTML = `
<a id="wakeLock1" class="inlineBlock padding small brand light2 borderBottomBrand" href="#" onclick="wakeLockStatusButtonSwitch('off');return false;" href="#">off</a>
<a id="wakeLock2" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('on');return false;" href="#">on</a>
<!--<a id="wakeLock3" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('auto');return false;" href="#">auto</a>-->
`;
break;

case 'on':
document.getElementById('wakeLockButtons').innerHTML = `
<a id="wakeLock1" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('off');return false;" href="#">off</a>
<a id="wakeLock2" class="inlineBlock padding small brand light2 borderBottomBrand" href="#" onclick="wakeLockStatusButtonSwitch('on');return false;" href="#">on</a>
<!--<a id="wakeLock3" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('auto');return false;" href="#">auto</a>-->
`;
break;

case 'auto':
document.getElementById('wakeLockButtons').innerHTML = `
<a id="wakeLock1" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('off');return false;" href="#">off</a>
<a id="wakeLock2" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('on');return false;" href="#">on</a>
<!--<a id="wakeLock3" class="inlineBlock padding small brand light2 borderBottomBrand" href="#" onclick="wakeLockStatusButtonSwitch('auto');return false;" href="#">auto</a>-->
`;
break;

default:
document.getElementById('wakeLockButtons').innerHTML = `
<a id="wakeLock1" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('off');return false;" href="#">off</a>
<a id="wakeLock2" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('on');return false;" href="#">on</a>
<!--<a id="wakeLock3" class="inlineBlock padding small brand" href="#" onclick="wakeLockStatusButtonSwitch('auto');return false;" href="#">auto</a>-->
`;
//console.log(`default mode (empty).`);
}
};

let wakeLockStatus = localStorage.getItem("wakeLockStatus");
if (wakeLockStatus != null&&wakeLockStatus !== ""){
fuWakeLock(wakeLockStatus);
wakeLockStatusButtonSwitch(wakeLockStatus);
} else {
wakeLockStatusButtonSwitch('off');
fuWakeLock('off');
}
