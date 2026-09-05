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
document.getElementById('clock2').innerHTML = hours2 + ':' + minutes2 + ':' + seconds; // result 2 standart 

// Google AI Overview
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

document.getElementsByTagName('title')[0].innerText = printTitleText + conf["confUserNameInTitle"];

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






















// tag cloud

if (conf["confTagCloudlStatus"] == "on"){

document.getElementById("printTagsHeader").innerHTML = `

<div class="padding medium op tCenter">Tag cloud:</div>

<div class="bold padding medium">
<a class="op brand notUnderline" href="/projects/redirects-25/?q=s" title="Web Explore:</a>
</div>

<div class="padding"></div>

`;



//window.addEventListener('load', function() {});

function tagListCloud(mode){

let tagModePrint = "";

if (mode == undefined||mode == ""){
mode = localStorage.getItem("tagModeData");
} else if (mode != "edit"){
localStorage.setItem("tagModeData", mode);
}

if (mode == null||mode == undefined){ mode = "Search"; }

let tagListSortConf = localStorage.getItem("tagListSortConf");

let tagListColor = `red orange yellow green blue indigo violet`;

let tagList = localStorage.getItem("tagListData");
if (tagList == null||tagList == undefined){
tagList = `
Example, Keyword, Keyword,
`;
}

let arr = fuMSplit(tagList);

/*
if (tagListSortConf == "sort"){
arr = fuMSort(arr, "", "arr");
}*/



// new
let tagListLimit = "38";

tagCloudData = tagList;


let confSymbolForSplit = "confSymbolForSplit";
let color = fuMRandomItem(tagListColor);
let size = '';

//tagList = '';

tagCloudData = tagCloudData.replaceAll(`
`, confSymbolForSplit);
tagCloudData = tagCloudData.replace(/(?:\\[rn])+/g, confSymbolForSplit);

if (tagCloudData.indexOf(',') != -1){
tagCloudData = tagCloudData.replaceAll(',', confSymbolForSplit);
} else {
tagCloudData = tagCloudData.replaceAll(' ', confSymbolForSplit);
}

tagCloudData = tagCloudData.replaceAll('·', "");
tagCloudData = tagCloudData.replaceAll('.', " ");

tagCloudData = tagCloudData.split(confSymbolForSplit);

/*
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagCloudData.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});*/



var tagAverage = 0;
var tagTotal = 0;

// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// make uniq and count, object
var tagListCount = {};
tagCloudData.forEach(function (x) {
x = x.trim();
if (x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});



// Taglist limit
//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// sort object by value
let entries = Object.entries(tagListCount);
let tagListCountSorted = entries.sort((a, b) => a[1] - b[1]);
tagListCountSorted.reverse();


// Taglist limit (cut array) with sorted tag and convert to old object, sorted previos
tagListCountLimited = {};
tagListCountSorted.forEach(function (item, key) {
if (key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});

if (tagListSortConf == "sort"){
// sort
// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
tagListCount = {};
tagListCount = Object.keys(tagListCountLimited).sort().reduce(
  (obj, key) => { 
    obj[key] = tagListCountLimited[key]; 
    return obj;
  }, 
  {}
);
}

// end Taglist limit

/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal + x;
});
tagAverage = Math.floor(tagTotal / Object.values(tagListCount).length);

var tagSize = "";
var tagColor = "";
var tagPercentage = "";

function fuTag(tagCount){
//tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
tagPercentage = (Math.floor((tagCount * 100) / tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
//console.log(tagPercentage);

// tag font-size and color
switch (true) {

case tagPercentage >= 500:
tagColor = "red";
tagSize = "xx-large";
break;

case tagPercentage >= 300:
tagColor = "orange";
tagSize = "x-large";
break;

case tagPercentage >= 250:
tagColor = "yellow";
tagSize = "large";
break;

case tagPercentage >= 100:
tagColor = "green";
tagSize = "medium";
break;

case tagPercentage >= 80:
tagColor = "blue";
tagSize = "1em";
break;

case tagPercentage >= 50:
tagColor = "indigo";
tagSize = "small";
break;

case tagPercentage >= 30:
tagColor = "violet";
tagSize = "smaller";
break;

default:
tagColor = "c2";
tagColor = fuMRandomItem(tagListColor)
tagSize = "x-small";
}

//console.log(tagColor);
//return tagColor;

}



let sortedTags = "";
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
if (tagListSortConf == "sort"){
sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare);
} else {
sortedTags = Object.entries(tagListCount);
// https://masteringjs.io/tutorials/fundamentals/foreach-object
}

//let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare);
// end new

let tagListPrint = "";

sortedTags.forEach(entry => {
const [key, value] = entry;

tag = key.trim();
tagCount = value;

fuTag(tagCount);
let printTagRandom = sortedTags[fuMRandom(0, sortedTags.length - 1)][0];
if (tag != ""){
let printTag = tag;
let printTagRandom = sortedTags[fuMRandom(0, sortedTags.length - 1)][0];

//printTag = printTag.replaceAll(/#/g, "");
//printTag = printTag.replaceAll(' ', "");

let printTagUrl = encodeURIComponent(tag.toLowerCase());
let printTagUrlRandom = encodeURIComponent(printTagRandom.toLowerCase());

if (mode === "Tag"){
printTag = printTag.replaceAll(" ", "");
printTagRandom = printTag.replaceAll(" ", "");
}

printTag = fuMClearText(printTag);
printTagRandom = fuMClearText(printTagRandom);

switch (mode) {

case 'Search':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` q">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` q">randomTag</a>`);

break;

case 'SearchOther':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` o">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` o">randomTag</a>`);

break;

case 'News':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` n">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` n">randomTag</a>`);

break;

case 'Social':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` s">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` s">randomTag</a>`);

break;

case 'Hashtag':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` ht">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` ht">randomTag</a>`);

break;

case 'GooglePS':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` ps">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` ps">randomTag</a>`);

break;

case 'edit':
tagListPrint += `<span class="inlineBlock padding">` + printTag + `</span>`;
break;

default:
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` q">#` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` q">randomTag</a>`);

}
}
});

document.getElementById("printTags").innerHTML = tagListPrint;

modeSwitch(mode, tagList, tagListSortConf);

}

tagListCloud("");


function tagListSortConfSet(item){
localStorage.setItem("tagListSortConf", item);
tagListCloud("");
}


function modeSwitch(mode, tagList, tagListSortConf){

let tagModePrint = "";
let tagsModeList = `Search SearchOther News Social Hashtag GooglePS`;

let arr = fuMSplit(tagsModeList);
let tagListPrint = `<span class="op">mode:</span>`;
arr.forEach((val, index) => {
if (mode == val){
tagModePrint += `
<a class="inlineBlock padding op active2" href="#" onclick="tagListCloud('` + val +`'); return false;">` + val +`</a>
`;
} else {
tagModePrint += `
<a class="inlineBlock padding op brand" href="#" onclick="tagListCloud('` + val +`'); return false;">` + val +`</a>
`;
}
});




if (tagListSortConf == "sort"){

tagModePrint += `
<span class="op gray">/</span>
<a class="inlineBlock padding op gray" title="Close" href="#" onclick="tagListSortConfSet('unsort'); return false;">unsort</a>
`;
} else {

tagModePrint += `
<span class="op gray">/</span>
<a class="inlineBlock padding op brand" href="#" onclick="tagListSortConfSet('sort'); return false;">sort</a>
`;
}

if (mode == "edit"){
tagModePrint += `
<a class="inlineBlock padding op gray" title="Close" href="#" onclick="closeTagListData(''); return false;">edit</a>
`;
} else {
tagModePrint += `
<a class="inlineBlock padding op brand" href="#" onclick="tagListCloud('edit'); return false;">edit</a>
`;
}

document.getElementById("printMode").innerHTML = `<hr><span class="op gray">mode:</span> `;
document.getElementById("printMode").innerHTML += tagModePrint;

if (mode == "edit"){
document.getElementById("tagListEditForm").innerHTML = `
<form action="" method="get" class="form-example">
<textarea id="tagListEditData" rows="5">` + tagList + `</textarea>
<a class="submit block button padding2 op borderRadius2" href="#" onclick="saveTagListData(); return false;">Save</a>
<div class="tRight"><a class="submit tRight button padding2 op red borderRadius2" href="#" onclick="resetTagListData(); return false;">Reset</a></div>
  </div>
</form>
`;
}

}






function saveTagListData(){
let data = document.getElementById("tagListEditData").value;
localStorage.setItem("tagListData", data);
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

function resetTagListData(){
if (window.confirm("Are you sure?")) {
localStorage.removeItem("tagListData")
}
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

function closeTagListData(){
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

}


function printRandomTag(id, text){
if (document.getElementById("tagRandom") != undefined){
document.getElementById("tagRandom").innerHTML = text;
}
}
