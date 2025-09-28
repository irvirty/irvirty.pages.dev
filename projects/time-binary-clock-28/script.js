// Binary Colock v.1.2.4
let titleTmp = document.getElementsByTagName('title')[0].text;

function fuClock(id){

function normalize(a){
if(a <= 9){ a = '0'+a; }
return a;
}

function normalize2(a){

switch (a.length) {


case 1:
a = '000'+a;
break;

case 2:
a = '00'+a;
break;

case 3:
a = '0'+a;
break;

default:
//a = "Switch default";
}

return a;
}

//console.log(Date.now().tostring().getMinutes());
let time = Date.now();
time = new Date(time);
let hours = normalize(time.getHours());
let minutes = normalize(time.getMinutes());
let seconds = normalize(time.getSeconds());
//console.log(hours+' '+minutes+' '+seconds);

var print = hours+':'+minutes+':'+seconds;
/*//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
var print = 
normalize2(Number(hours.toString()[0]).toString(2))+','+normalize2(Number(hours.toString()[1]).toString(2))+' : '+
normalize2(Number(minutes.toString()[0]).toString(2))+','+normalize2(Number(minutes.toString()[1]).toString(2))+' : '+
normalize2(Number(seconds.toString()[0]).toString(2))+','+normalize2(Number(seconds.toString()[1]).toString(2))
;*/

/*var print = 
normalize2(Number(hours.toString()).toString(2))+' : '+
normalize2(Number(minutes.toString()).toString(2))+' : '+
normalize2(Number(seconds.toString()).toString(2))
;*/

document.getElementById('result').innerHTML = print;

document.getElementById('result2').innerHTML = '<div class="block small padding2 margin2 block tCenter">' + hours + ':' + minutes + ':' + seconds + '</div></div>';
//document.getElementsByTagName('title')[0].innerHTML = print + ' | Binary Clock / ' + location.hostname;
document.getElementsByTagName('title')[0].innerHTML = print + ' - ' + titleTmp;

//https://en.wikipedia.org/wiki/Binary-coded_decimal
var bcdJsonVar = 
[
    {
        "number": "0",
        "symbol": "0000",
        "8": "0",
        "4": "0",
        "2": "0",
        "1": "0"
    },
    {
        "number": "1",
        "symbol": "0001",
        "8": "0",
        "4": "0",
        "2": "0",
        "1": "1"
    },
    {
        "number": "2",
        "symbol": "0010",
        "8": "0",
        "4": "0",
        "2": "1",
        "1": "0"
    },
    {
        "number": "3",
        "symbol": "0011",
        "8": "0",
        "4": "0",
        "2": "1",
        "1": "1"
    },
    {
        "number": "4",
        "symbol": "0100",
        "8": "0",
        "4": "1",
        "2": "0",
        "1": "0"
    },
    {
        "number": "5",
        "symbol": "0101",
        "8": "0",
        "4": "1",
        "2": "0",
        "1": "1"
    },
    {
        "number": "6",
        "symbol": "0110",
        "8": "0",
        "4": "1",
        "2": "1",
        "1": "0"
    },
    {
        "number": "7",
        "symbol": "0111",
        "8": "0",
        "4": "1",
        "2": "1",
        "1": "1"
    },
    {
        "number": "8",
        "symbol": "1000",
        "8": "1",
        "4": "0",
        "2": "0",
        "1": "0",
    },
    {
        "number": "9",
        "symbol": "1001",
        "8": "1",
        "4": "0",
        "2": "0",
        "1": "1"
    }
];






var val = '';
function makeGrid(number){

val = `

<div>${bcdJsonVar[number]['8']}</div>
<div>${bcdJsonVar[number]['4']}</div>
<div>${bcdJsonVar[number]['2']}</div>
<div>${bcdJsonVar[number]['1']}</div>

`;

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/replace
val = val.replaceAll('0', '<div class="block0"></div>');
val = val.replaceAll('1', '<div class="block1"></div>');
return val;
}


h = makeGrid(hours.toString()[0]);
h = `
<div class="gridColumn">
${h}
<div class="op small">${hours.toString()[0]}</div>
</div>
`;
h2 = makeGrid(hours.toString()[1]);
h2 = `
<div class="gridColumn">
${h2}
<div class="op small">${hours.toString()[1]}</div>
</div>
<div class="gridColumn">
</div>
`;


m = makeGrid(minutes.toString()[0]);
m = `
<div class="gridColumn">
${m}
<div class="op small">${minutes.toString()[0]}</div>
</div>
`;
m2 = makeGrid(minutes.toString()[1]);
m2 = `
<div class="gridColumn">
${m2}
<div class="op small">${minutes.toString()[1]}</div>
</div>
<div class="gridColumn">
</div>
`;

s = makeGrid(seconds.toString()[0]);
s = `
<div class="gridColumn">
${s}
<div class="op small">${seconds.toString()[0]}</div>
</div>
`;
s2 = makeGrid(seconds.toString()[1]);
s2 = `
<div class="gridColumn">
${s2}
<div class="op small">${seconds.toString()[1]}</div>
</div>

`;

document.getElementById('result').innerHTML = `
<div class="wrapperSmall">

<div class="grid">
${h}
${h2}

${m}
${m2}

${s}
${s2}
</div>

</div>
`;


//document.getElementById('result2').innerHTML += bcdJsonVar[seconds.toString()[1]]['symbol'];


}
















fuClock();
setInterval(fuClock, 1000);
