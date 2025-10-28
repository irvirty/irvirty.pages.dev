// Start page v.1.3.0




//https://developer.mozilla.org/en-US/docs/Web/API/Response/text
async function getBanner() {
  const url = "../../img/header-banner.svg";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ` + response.status);
    }

    const result = await response.text();
    console.log(result);
          document.getElementById("headerBannerId").innerHTML = result;
  } catch (error) {
    console.error(error.message);
  }
}
getBanner();

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

/*if (minutes == '59'&&seconds == '59'){
document.getElementById('audio').innerHTML += `<audio style="display:none" autoplay="false" src="${confD}audio/neutral.mp3">`;
}*/

/*
// sound alert
if (minutes == '59'&&seconds == '59'){
document.getElementById('audio').innerHTML += `<audio style="display:none" autoplay="false" src="${confD}audio/ok.mp3">';
}
if (minutes == '29'&&seconds == '59'){
document.getElementById('audio').innerHTML += `<audio style="display:none" autoplay="false" src="${confD}audio/click.mp3">`;
}*/

document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
document.getElementById('clock2').innerHTML = hours2 + ':' + minutes2; // result 2 standart 

const dateUtcOffset = new Date(); // Create a Date object for the current date/time
const offsetMinutes = dateUtcOffset.getTimezoneOffset(); // Get the offset in minutes
// To convert the offset to hours:
let offsetHours = -offsetMinutes / 60;

if(String(offsetHours).indexOf("-") != -1){
offsetHours = offsetHours;
} else {
offsetHours = String("+" + offsetHours);
}
// fix
if (offsetHours == "+0"){ offsetHours = 0; }


document.getElementById('clockUtc').innerHTML = hoursUtc + ':' + minutesUtc;
document.getElementById('dateUtcOffset').innerHTML = `(${offsetHours})`;


//clock time
let printTitleText = hours + ':' + minutes + ':' + seconds + " - Start page";
//let printTitleText = hours + ':' + minutes + " - Start page";

document.getElementsByTagName('title')[0].innerText = printTitleText + conf["confDomainNameInTitle"];

}




fuStopwatch();
setInterval(fuStopwatch, 1000);

//document.getElementById('search').innerHTML = ``;


// hide top header if mobile
if (conf["confDevice"] == 'mobile'){
var getclick2 = document.getElementById('form');
if (getclick2 != null){
document.addEventListener('click', function(event) {
if (getclick2.contains(event.target)) {
	
document.getElementById( 'topHeader' ).style.display = 'none';
if (document.getElementById('topNav') != null){
document.getElementById( 'topNav' ).style.display = 'none';
}
if (document.getElementById('secondNav') != null){
document.getElementById( 'secondNav' ).style.display = 'none';
}

} else {
	
document.getElementById( 'topHeader' ).style.display = 'block';
if (document.getElementById('topNav') != null){
document.getElementById( 'topNav' ).style.display = 'block';
}
if (document.getElementById('secondNav') != null){
document.getElementById( 'secondNav' ).style.display = 'block';
}

}
});
}
}



// day link
var monthsEn = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//https://en.wikipedia.org/wiki/Template:MONTHABBREV
var monthsEnShort = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dayEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayEnShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//https://stackoverflow.com/questions/50922593/function-getutcdate-returns-a-month
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
let d = dateObj.getDay();

//var dayNowTitle = day +' '+ dayEn[d];
var dayNowTitle = dayEn[d] + ', ' + monthsEn[month] + ' ' + day;

var urlDayNow = 'https://en.wikipedia.org/wiki/' + monthsEn[month] + '_' + day + '';
if (document.getElementById('urlDayNow') != null){
document.getElementById('urlDayNow').innerHTML = dayNowTitle;
document.getElementById('urlDayNow').innerHTML += "<br>" + day + "/" + month + "/" + year;
}
