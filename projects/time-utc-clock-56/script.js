// UTC time v.1.0.1

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
//https://stackoverflow.com/questions/9756120/how-do-i-get-a-utc-timestamp-in-javascript
let hours = normalize(time.getUTCHours());
let minutes = normalize(time.getUTCMinutes());
let seconds = normalize(time.getUTCSeconds());
//console.log(hours+' '+minutes+' '+seconds);


document.getElementById('result').innerHTML = hours + ':' + minutes + ':' + seconds;
document.getElementsByTagName('title')[0].innerHTML = hours + ':' + minutes + ':' + seconds + ' - ' + titleTmp;
}

fuClock();
setInterval(fuClock, 1000);
