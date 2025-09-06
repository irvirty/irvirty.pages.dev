// Speed dial v.1.14.2
//https://developer.mozilla.org/en-US/docs/Web/API/Storage

function fuLSpeedDial(idForPrint, text, url, com){

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
/*if (typeof conf === "undefined"){
var conf = [];
conf["confDomainNameInTitleStatus"] = 'on';
conf["confSpeedDialStatus"] = 'on';
function fuMClearText(text){ return text; }
}*/

let locationSpeedDialTitle = String(document.title);
let locationSpeedDialUrl = String(location.href);
locationSpeedDialUrl = locationSpeedDialUrl.replaceAll("#mPin", '');
locationSpeedDialUrl = locationSpeedDialUrl.replaceAll("#mHomePage", "");
locationSpeedDialUrl = locationSpeedDialUrl.replaceAll("#speedDialAnchor", "");

// fix for short text link
if (conf["confDomainNameInTitleStatus"] == 'on'){
locationSpeedDialTitle = locationSpeedDialTitle.replace(conf["confDomainNameInTitle"], '');
}

if (localStorage.getItem("confSpeedDialData")) {
var confSpeedDialDataArr = localStorage.getItem("confSpeedDialData");
} else {
var confSpeedDialDataArr = [];

confSpeedDialDataArr.push({"text":"Link example", "url":"https://example.com/"});
confSpeedDialDataArr.push({"text":"Link example", "url":"https://example.com/"});
confSpeedDialDataArr.push({"text":"Link example", "url":"https://example.com/"});

var confSpeedDialDataArr = JSON.stringify(confSpeedDialDataArr);

localStorage.setItem("confSpeedDialData", confSpeedDialDataArr);
}


if (conf["confSpeedDialStatus"] == "random"){
var items = ['on', 'off'];
item = items[Math.floor(Math.random() * items.length)];
conf["confSpeedDialStatus"] = item;
}


if (conf["confSpeedDialStatus"] != "off"){

// pin button and status


let fPinButton = `<a title="Add page to speed dial" id="mPin" class="inlineBlock padding brand" href="#mPin" onclick="fuLSpeedDial('', '', '', 'add2');return false;">Pin</a>`;
let confSpeedDialDataArrButton = JSON.parse(confSpeedDialDataArr);

confSpeedDialDataArrButton.forEach((item, index) => {

if (index != undefined&&index != "undefined"){

//if ((String(item.url)).indexOf(locationSpeedDialUrl) != -1){
if (item.url == locationSpeedDialUrl||item.text == locationSpeedDialTitle){
fPinButton = `<a title="Remove page from speed dial" id="mPin" class="inlineBlock padding gray" href="#mPin" onclick="fuLSpeedDial('', '', '', 'del');return false;">Pined</a>`;
}

}
});

if (document.getElementById("fPinButton") != null){
document.getElementById("fPinButton").innerHTML = fPinButton; 
}
// // pin button and status






var submitForm = `

<div class="padding2"></div>

<form id="spedDialSubmit">

<label class="xSmall op" for="speedDialText">Text:</label>
<input type="text" id="speedDialText" name="speedDialText" placeholder="Example">

<label class="xSmall op" for="speedDialUrl">URL:</label>
<input type="text" id="speedDialUrl" name="speedDialUrl" placeholder="https://example.com/">

<a href="#speedDialAnchor" onclick="fuLSpeedDial('', '', '', 'add');return false;"><div class="op smaller button block submit brand">Add</div></a>

<div class="padding2"></div>
<a class="op button border light borderRadius2 smaller brand" href="${confD}projects/speed-dial-58/index.html">Edit speed dial</a>

</form>

`;






switch (com){

case 'print':
let print = "";
let printArr = [];
confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.forEach((item, index) => {

if (index != undefined&&index != "undefined"){

if (confSpeedDialDataArr[index].text == undefined){
confSpeedDialDataArr[index].text = 'undefined';
}

let speedDialItemText = (confSpeedDialDataArr[index].text).trim();
let speedDialItemUrl = confSpeedDialDataArr[index].url;

speedDialItemText = fuMClearText(speedDialItemText);
speedDialItemUrl = fuMClearText(speedDialItemUrl);

printArr.push(`
<!-- ${speedDialItemText} --> <a id="spedDialId${index}" class="inlineBlock autoColumnItem keepTag2 itemHeight tCenter light2 border borderRadius2 capitalize small insertIcon" href="${speedDialItemUrl}">${speedDialItemText}</a>
`);

}
});

lNaturalSort(printArr);
print = printArr.join("");

print = `

<!-- Speed dial -->

<span id="speedDialAnchor" class="xSmall op block tLeft padding1PxList margin1PxList"><span class="bold green">✪</span> Speed dial:</span>

<div class="autoColumn notUnderline left small margin2List">

${print}

</div>

<details>
<summary class="pointer xSmall op inlineBlock brand">
<span class="green bold">+</span> Add item
</summary>
<div class="wrapperL left">
${submitForm}
</div>
</details>

<div class="block padding2 margin2"></div>

<!-- // Speed dial -->

`;


if (document.getElementById(idForPrint) != null){
document.getElementById(idForPrint).innerHTML = print; 
}

break;



case 'add':

if (text == ""){
if (document.getElementById("speedDialText") != null){
text = document.getElementById("speedDialText").value;
}
if (document.getElementById("speedDialText") != null){
url = document.getElementById("speedDialUrl").value;
}
}

if (text != ""){
text = fuMClearText(text);
url = fuMClearText(url);

confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.push({text:text, url:url});
lNaturalSort(confSpeedDialDataArr);
//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
localStorage.setItem("confSpeedDialData", JSON.stringify(confSpeedDialDataArr));
}

fuLSpeedDial("speedDialPrint", "", "", "print");
break;



case 'add2':

if (text == ""){
text = fuMClearText(locationSpeedDialTitle);
url = fuMClearText(locationSpeedDialUrl);
}

if (text != ""){
text = fuMClearText(text);
url = fuMClearText(url);

confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.push({text:text, url:url});
//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
localStorage.setItem("confSpeedDialData", JSON.stringify(confSpeedDialDataArr));
}

fuLSpeedDial("speedDialPrint", "", "", "print");
break;



case 'del':

if (text == ""){
text = fuMClearText(locationSpeedDialTitle);
url = fuMClearText(locationSpeedDialUrl);

url = url.replace("#mPin", '');
}

let confSpeedDialDataArrUpdate = [];

confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.forEach((item, index) => {

if (confSpeedDialDataArr[index].text == text||confSpeedDialDataArr[index].url == url){

} else {
let textOld = confSpeedDialDataArr[index].text;
let urlOld = confSpeedDialDataArr[index].url;
confSpeedDialDataArrUpdate.push({text:textOld, url:urlOld});
}

});

lNaturalSort(confSpeedDialDataArrUpdate);

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
localStorage.setItem("confSpeedDialData", JSON.stringify(confSpeedDialDataArrUpdate));

fuLSpeedDial("speedDialPrint", "", "", "print");

break;



case 'setting':
// setting print all
let printSettings = "";
let printSettingsArr = [];

confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.forEach((item, index) => {
if (index != undefined&&index != "undefined"){
if (confSpeedDialDataArr[index].text == undefined){ confSpeedDialDataArr[index].text = 'undefined'; }
let speedDialItemText = (confSpeedDialDataArr[index].text).trim();
let speedDialItemUrl = confSpeedDialDataArr[index].url;




//https://stackoverflow.com/questions/5383520/populate-an-input-field-with-a-string-that-contains-a-double-quote

speedDialItemText = speedDialItemText.replaceAll(/"/g, '&quot;');
speedDialItemUrl = speedDialItemUrl.replaceAll(/"/g, '&quot;');

speedDialItemText = fuMClearText(speedDialItemText);
speedDialItemUrl = fuMClearText(speedDialItemUrl);

printSettingsArr.push(`

<!-- ${speedDialItemText} for sort -->

<div class="margin2List padding2 bg shadow borderRadius2">

<label class="xSmall op gray" for="speedDialText">Text:</label>
<input type="text" id="speedDialText" class="classSpeedDialText borderRadius" name="speedDialText" value="${speedDialItemText}">

<label class="xSmall op gray" for="speedDialUrl">URL:</label>
<input type="text" id="speedDialUrl" class="classSpeedDialUrl op borderRadius" name="speedDialUrl" value="${speedDialItemUrl}">

</div>

<hr>

`);
}
});

lNaturalSort(printSettingsArr);
printSettings = printSettingsArr.join(``);

printSettings = `

<!-- settings -->
<span class="xSmall op block tLeft padding1PxList margin1PxList"><span class="bold red">✪</span> Edit all:</span>



<form id="spedDialSubmitSetting" method="GET">

${printSettings}

<a href="#speedDialAnchor" onclick="fuLSpeedDial('', '', '', 'update');return false;"><div class="op small  submit button shadow brand borderRadius w100 block">Update All</div></a>
</form>

<div class="block padding2 margin2"></div>

<div class="tRight">
<a href="#" onclick="fuLSpeedDial('', '', '', 'reset');return false;"><div class="op small keepTag2 button bg  inputHeight red borderRadius border">Clear data (reset)</div></a>
</div>

<div class="block padding2 margin2"></div>

<div class="tRight small op">* To remove an item, delete the text or URL and click Update</div>


<!-- // settings -->

`;




if (document.getElementById("speedDialSettingPrint") != null){
document.getElementById("speedDialSettingPrint").innerHTML = printSettings; 
}

fuLSpeedDial("speedDialPrint", "", "", "print");
break;



case 'update':
confSpeedDialDataArr = [];

if (document.querySelectorAll('.classSpeedDialText') != undefined){
let getData = document.querySelectorAll('.classSpeedDialText');
getData.forEach((item, index) => {
text = document.getElementsByClassName("classSpeedDialText")[index].value;
url = document.getElementsByClassName("classSpeedDialUrl")[index].value;

if (text == ""||url == ""){
} else {

text = fuMClearText(text);
url = fuMClearText(url);

confSpeedDialDataArr.push({text:text, url:url});
}

});

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
localStorage.setItem("confSpeedDialData", JSON.stringify(confSpeedDialDataArr));
}

//fuLSpeedDial("speedDialPrint", "", "", "print");
fuMReload();
break;

case "clear":
case "reset":
if (confirm(`Are you sure?`) == true){
localStorage.removeItem("confSpeedDialData");
fuMReload();
}

break;


default:
//
}

}



//https://stackoverflow.com/questions/2802341/natural-sort-of-alphanumerical-strings-in-javascript
function lNaturalSort(arr){

var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

return arr.sort(collator.compare);
}



}









