// Time v.1.0.4

//let titleTmp = document.title;
let titleTmp = document.getElementsByTagName('title')[0].text;

function fuClock(id){



function normalize(a){
if(a <= 9){ a = '0' + a; }
return a;
}

//console.log(Date.now().tostring().getMinutes());
let time = Date.now();
time = new Date(time);
let hours = normalize(time.getHours());
let minutes = normalize(time.getMinutes());
let seconds = normalize(time.getSeconds());
//console.log(hours+' '+minutes+' '+seconds);


document.getElementById('result').innerHTML = hours  +':' + minutes + ':' + seconds;
document.getElementsByTagName('title')[0].innerHTML = hours + ':' + minutes + ':' + seconds + ' - ' + titleTmp;
}

fuClock();
setInterval(fuClock, 1000);
