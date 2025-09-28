// Stopwatch v.1.4.7
// inspired by Google Clock

var secArr = [];
secArr[0] = 0;
var comArr = [];
comArr[0] = 'start';

var lStopArr = [];

//let titleTmp = document.title;
let titleTmp = document.getElementsByTagName('title')[0].text;

function fuStopwatchCom(com){



if (com == 'pause'){ comArr[0] = 'pause'; }
if (com == 'stop'&&comArr[0] != 'pause'){ comArr[0] = 'stop'; }
if (com == 'continue'){ comArr[0] = 'continue'; }
if (com == 'refresh'){
secArr[0] = 0;  comArr[0] = 'refresh'; lStopArr = [];
document.getElementById('result3').innerHTML = '';
document.getElementById('chart').innerHTML = '';
}

if (com == 'stop/refresh'){
comArr[0] = 'stop/refresh';
}

// https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
//fuStopwatch(com, sec);

if (comArr[0] != 'pause'){
document.getElementById('panel').innerHTML = `
<a class="padding2 margin2" onclick="fuStopwatchCom('refresh');return false;" href="#">refresh</a>
<a class="padding2 margin2" onclick="fuStopwatchCom('pause');return false;" href="#">pause</a>
<a class="padding2 margin2" onclick="fuStopwatchCom('stop');return false;" href="#">stop</a>
<a class="padding2 margin2" onclick="fuStopwatchCom('stop/refresh');return false;" href="#">stop/refresh</a>
`;
}

if (comArr[0] == 'pause'){
document.getElementById('panel').innerHTML = `
<a class="padding2 margin2" onclick="fuStopwatchCom('continue');return false;" href="#">continue</a>
<a class="padding2 margin2" onclick="fuStopwatchCom('refresh');return false;" href="#">refresh</a>
`;
}




}


fuStopwatchCom('start', 0);
fuStopwatch();
setInterval(fuStopwatch, 1000);







var sec = 0;

function normalize(a){
if (a <= 9){ a = '0'+a; }
return a;
}


function fuStopwatch(){

sec = secArr[0];


if (comArr[0] != 'pause'){ secArr[0]++; }
if (comArr[0] == 'pause'){ sec = secArr[0]; }





let hours = normalize(Math.floor(sec / 3600));
let minutes = normalize(Math.floor(sec % 3600 / 60));
let seconds = normalize(Math.floor(sec % 3600 % 60));
//console.log(hours+' '+minutes+' '+seconds);

let time2 = Date.now();
time2 = new Date(time2);
let hours2 = normalize(time2.getHours());
let minutes2 = normalize(time2.getMinutes());
let seconds2 = normalize(time2.getSeconds());

var chart = '';

if (comArr[0] == 'stop'||comArr[0] == 'stop/refresh'){
let lResult = '';
lStopArr.push(hours+':'+minutes+':'+seconds);
if (comArr[0] == 'stop/refresh'){ secArr[0] = 0; chart = '2'; }

document.getElementById('result3').innerHTML = '';
//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
lStopArr.reverse().forEach((element) => {
lResult += 
`
<span>${element}</span>
`;
});
document.getElementById('result3').innerHTML = `
<div class="scroll wrapper3 padding2 op lPrint3">${lResult}</div>
`;
comArr[0] = 'stoped';




//chart
var chartTitle = '';
var chartData = '';
var element33 = '';
//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
lStopArr.reverse().forEach((element, index) => {
//https://stackoverflow.com/questions/7709803/javascript-get-minutes-between-two-dates
if (chart != 2){
element33 = Math.abs(new Date('2011/10/09 '+lStopArr[index]) - new Date('2011/10/09 '+lStopArr[index + 1]));
} else {
element33 = Math.abs(new Date('2011/10/09 '+lStopArr[index]) - new Date('2011/10/09 00:00:00'));
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
if (!isNaN(element33)){
element33 = Math.floor((element33 / 1000)); // sec
//element33 = Math.floor((element33 / 1000 / 60)); // min
//element33 = Math.floor((element33 / 1000 / 60 / 60)); // hour
chartTitle += new String('' + element33 + '' + ',').replaceAll(':', '');
chartData += new String('' + element33+'') + ',';

}


});



if (chartData != ''){
//https://stackoverflow.com/questions/17720264/remove-last-comma-and-possible-whitespaces-after-the-last-comma-from-the-end-o
//chartTitle = new String(chartTitle).replace(/,\s*$/, "");
//chartData = new String(chartTitle).replace(/,\s*$/, "");
chartTitle = new String(chartTitle).slice(0, -1);
chartData = new String(chartData).slice(0, -1);
//console.log(chartTitle);

/*document.getElementById('chart').innerHTML = `
<img src="https://quickchart.io/chart?c=%7Btype:%27bar%27,data:%7Blabels:[${chartTitle}],datasets:[%7Blabel:%27min%27,data:[${chartData}]%7D]%7D%7D" width="430" alt="chart">
https://quickchart.io/`;*/





}





}



document.getElementById('result').innerHTML = hours + ':' + minutes + ':' + seconds;

/*
// sound alert
if (minutes == '59'&&seconds == '59'){
document.getElementById('result').innerHTML += '<audio style="display:none" autoplay="false" src="/audio/ok.mp3">';
}
if (minutes == '29'&&seconds == '59'){
document.getElementById('result2').innerHTML += '<audio style="display:none" autoplay="false" src="/audio/click.mp3">';
}*/


document.getElementById('result2').innerHTML = hours2+':'+minutes2; // result 2 standart 


//clock time
document.getElementsByTagName('title')[0].innerHTML = hours + ':' + minutes + ':' + seconds + ' - ' + titleTmp;



}




