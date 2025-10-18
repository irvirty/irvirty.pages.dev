// v.1.5.4

var jsonVar = quizJsonVar;

// config
var quizConfRound = '7';
var quizConfPercentTrue = '70';
// end config

quizConfRound = quizConfRound;

var printLocalAll = '';

var quizProgressResult = [];
quizProgressResult[0] = '';
var quizProgressRound = [];
quizProgressRound[0] = 1;

var quizAnswerCounter = [];
quizAnswerCounter[0] = 0;


var quizWinMsg = [];
quizWinMsg[0] = '';

var quizResultCorrectAnswer = [];
quizResultCorrectAnswer[0] = 0;
var quizResultWrongAnswer = [];
quizResultWrongAnswer[0] = 0;

var quizStop = [];
var winMsgTmp = '';

var quizVariantTrueForPrint = [];
quizVariantTrueForPrint[0] = '';



//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var printTagList = '';
var tagListLimit = conf["confTagListLimit"];
var checkNotFound = '';

var url = new URL(window.location);
var q = url.searchParams.get("q");
var total = 0;
var comMessagePrint = '';

if(q != null){
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);
q = q.trim();
localStorage.setItem('randomQuizQ', q);
}

var scriptDir = '';


var tag = url.searchParams.get("tag");
if(tag != null){
tag = tag.replaceAll(/%/g, "%25");
tag = decodeURIComponent(tag);
tag = tag.trim();
}

if(q == null){ q = localStorage.getItem('randomQuizQ'); }
if(q == null||q == '') { q = '#space'; tag = q; }
var q2 = q;



document.getElementById("result").innerHTML = jsonVar; 



var quizListByTagArrClear = [];
var quizListByTagArrForPrint = [];

var i = 0;

// gen arr list
jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['text2'] != null){ postText2 = item['text2']; }
if(item['text3'] != null){ postText3 = item['text3']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }

// collect all tag
printTagList += (' ' + postTag + ' ').toLowerCase();


if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
var qSearch = decodeURIComponent(q2);
qSearch = String(qSearch).toLowerCase();
}


// if tag
//if(qSearch[0] == '#'){}
qData = String(postTag + ' ' + postText + ' ' + postText2 + ' ' + postUrl).toLowerCase();
/*if(qSearch[0] == '#'){ qData = qData.replaceAll(/,/g, ' '); } */
if((qData).indexOf((qSearch)) != -1){
quizListByTagArrClear.push(key);
i++;
total = i;
comMessagePrint = `<span class="tCenter op small">${q2}: ${total}, </span>`;
//document.getElementsByTagName('title')[0].innerHTML = `${q2} |` + domainNameToTitle;
}

});



if(quizConfRound >= total){ quizConfRound = total; }
comMessagePrint += '<span class="tCenter op small">rounds: ' +  quizConfRound + '</span>';
// end gen arr list




// gen print question list
if(quizListByTagArrClear.length >= 1){

quizListByTagArrClear.forEach((item, key22) => {
var clearPostId = jsonVar[item]['id'];
var clearPostText = jsonVar[item]['text'];
var clearPostText2 = JSON.parse(jsonVar[item]['text2']);
var clearPostText3 = jsonVar[item]['text3'];
var clearPostTag = jsonVar[item]['tag'];
var clearPostUrl = jsonVar[item]['url'];
var clearPostTime = jsonVar[item]['time'];

var question = clearPostText2["question"];
var answer2 = clearPostText2["answer"];

//console.table(clearPostText2);


// shufle answer
//https://stackoverflow.com/questions/26503595/javascript-shuffling-object-properties-with-their-values
var randomKeys = Object.keys(answer2);
// drop your preffered shuffle algorithm here
randomKeys.sort(function(a,b) {return Math.random() - 0.5;});
// now you have random keys!



var answer = '';
var answerTmp = '';
var answerTmpTrueFalse = '';

var countVariant = 0;
var countVariant2 = 0;
var countVariantId = 1;

var quizVariantRandomOrder = [];


Object.keys(randomKeys).forEach((key) => {

if(countVariant2 <= 0&&answer2[randomKeys[key]] == 'true'){
quizVariantTrueForPrint[0] = countVariantId;
//answerTmp = randomKeys[key] + answer2[randomKeys[key]];
answerTmp = randomKeys[key];
answer = `<div id="${countVariantId}" class="quizButton button light3 border borderRadius2 click left" onclick="quizMain('quizCheckAnswer', '${htmlAsText(answer2[randomKeys[key]])}', '${countVariantId}')">${htmlAsText(answerTmp)}</div>`;
quizVariantRandomOrder.push(answer);
countVariant2++;
}

countVariantId++;
});

Object.keys(randomKeys).forEach((key) => {

if(countVariant <= 2&&answer2[randomKeys[key]] != 'true'){
//answerTmp = randomKeys[key] + answer2[randomKeys[key]];
answerTmp = randomKeys[key];
answer = `<div id="${countVariantId}" class="quizButton button light3 border borderRadius2 click left" onclick="quizMain('quizCheckAnswer', '${htmlAsText(answer2[randomKeys[key]])}', '${countVariantId}', '${quizVariantTrueForPrint[0]}')">${htmlAsText(answerTmp)}</div>`;
quizVariantRandomOrder.push(answer);
countVariant++;
}

countVariantId++;
});

quizVariantRandomOrder.sort(function(a,b) {return Math.random() - 0.5;});
answer = quizVariantRandomOrder.join('');
quizVariantRandomOrder = [];
let qPrint = `


<div class="block padding2 margin2 tCenter">${comMessagePrint}</div>


<div class="post light shadow borderRadius2">
<span id="msg"></span>

<div class="block padding2List"></div>
<span class="block tCenter pre padding2List h5">${htmlAsText(question)}</span>
<div class="block padding2List"></div>
<div class="quizOptionGrid">${answer}</div>
<div class="block padding2"></div>

<label for="round" class="xSmall">Rounds ${quizConfRound}:</label>
<progress id="round" min="0" max="${quizConfRound}" value="${quizProgressRound[0] }">${quizProgressRound[0] }</progress>

<div class="submit small op" onclick="quizMain('next')">next</div>



<div class="padding2List"></div>

<div class="block padding2List tRight">
<details class="inlineBlock">
<summary class="op pointer xSmall">Source:</summary>
<div id="fDesc" class="block pre tLeft padding2 op bg small shadow light borderRadius2 margin2List" style="margin-left: 0; margin-right: 0;">${clearPostText} <a class="brand" target="blank" href="${clearPostUrl} ">${clearPostUrl} ⇗</a></div>
</details>
</div>

<span class="block tRight xSmall"><span class="sup">*</span> ${quizConfPercentTrue}% - true for win</span>

</div>

`;

answer = '';
quizListByTagArrForPrint.push(qPrint);


});


// end gen print question list

}else{
comMessagePrint = '<div><h3 class="red h3 bold">not found</h3></div>';
//id = getRandomInt(jsonVar.length);
//comMessagePrint += '<span class=""> random id: '+id+'</span>';
document.getElementById('result').innerHTML = `
<div class="block padding2 margin2 tCenter">${comMessagePrint}</div>
`;
checkNotFound = 'Not Found';
}
// print result
//if(q == "#music"){ id = getRandomInt(jsonVar.length); }


// main
function quizMain(quizCom, quizVal, id, id2){




switch (quizCom){



case 'quizCheckAnswer':
if(quizStop[0] != 'stop'&&quizAnswerCounter[0] == 0){
quizAnswerCounter[0]++;
/*console.log(quizVal);
console.table(id);*/

if(quizVal == 'true'){
document.getElementById(id).classList.add("quizCorrect");
document.getElementById("alert").innerHTML = `
<audio style="display:none" autoplay="false" src="/audio/ok.mp3"></audio>
`;

quizResultCorrectAnswer[0]++;
quizStop[0] = 'stop';
}else{
document.getElementById(id).classList.add("quizIncorrect");
if(document.getElementById(id2) != null){
document.getElementById(id2).classList.add("quizCorrect");
}
document.getElementById("alert").innerHTML = `
<audio style="display:none" autoplay="false" src="/audio/error.mp3"></audio>
`;

quizResultWrongAnswer[0]++;
quizStop[0] = 'stop';
}


quizProgressResult = Number((quizResultCorrectAnswer * 100) / quizConfRound).toFixed(0);

if(quizProgressResult >= Number(quizConfPercentTrue)){
winMsgTmp = `<h1 class="tCenter orange bold">Win!</h1>
<p class="small op>${comMessagePrint}</p>
<audio style="display:none" autoplay="false" src="/audio/win.mp3"></audio>
`;
}else{
winMsgTmp = `<h1 class="tCenter bold">End!</h1><p class="small op>${comMessagePrint}</p>`;
}

quizWinMsg[0] = `
<div class="bold padding2 tCenter block border2 borderRadius2 bg3 marginList">
${winMsgTmp}
Correct: <span class="green bold">${quizResultCorrectAnswer[0]}</span>, Wrong: <span class="red bold">${quizResultWrongAnswer[0]}</span>, <span class="blue bold">${quizProgressResult}%</span> - true
<div class="block padding2"></div>
</div>
<div class="block padding2"></div>
`;


}
break;




case 'start':
quizAnswerCounter[0] = 0;
//alert(quizListByTagArrForPrint);
var getP2 = Math.floor(Math.random() * quizListByTagArrForPrint.length);
id = quizListByTagArrForPrint[getP2];
checkNotFound = ''; // clear*/
if(id != ''&&id != undefined){
document.getElementById('result').innerHTML = id;
}
if(document.getElementById("round") != null){
document.getElementById("round").value = quizProgressRound[0];
}

// rm carrent
const removed = quizListByTagArrForPrint.splice(getP2, 1); // Mutates fruits and returns array of removed items
//console.log(removed);

quizProgressRound[0]++;
break;



case 'next':

if(total != 0){

if(quizAnswerCounter[0] == 0){
quizResultWrongAnswer[0]++;
document.getElementById("alert").innerHTML = `
<audio style="display:none" autoplay="false" src="/audio/error.mp3"></audio>
`;
}

// random question
if(quizListByTagArrForPrint.length > 0&&quizProgressRound <= quizConfRound){


//alert(quizListByTagArrForPrint);
var getP2 = Math.floor(Math.random() * quizListByTagArrForPrint.length);
id = quizListByTagArrForPrint[getP2];
checkNotFound = ''; // clear
if(id != ''&&id != undefined){
document.getElementById('result').innerHTML = id;
}
if(document.getElementById("round") != null){
document.getElementById("round").value = quizProgressRound[0];
}
quizProgressRound[0]++;

}else{
//if(quizWinMsg[0] == ''){}
quizProgressResult = Number((quizResultCorrectAnswer * 100) / quizConfRound).toFixed(0);


if(quizProgressResult >= Number(quizConfPercentTrue)){
winMsgTmp = `<h1 class="tCenter orange bold">Win!</h1>
<p class="small op>${comMessagePrint}</p>
<audio style="display:none" autoplay="false" src="/audio/win.mp3"></audio>`;

}else{
winMsgTmp = `<h1 class="tCenter bold">End!</h1><p class="small op>${comMessagePrint}</p>`;
}

quizWinMsg[0] = `
<div class="bold padding2 tCenter block border2 borderRadius2 bg3 marginList">
${winMsgTmp}
Correct: <span class="green bold">${quizResultCorrectAnswer[0]}</span>, Wrong: <span class="red bold">${quizResultWrongAnswer[0]}</span>, <span class="blue bold">${quizProgressResult}%</span> - true
<div class="block padding2"></div>
</div>
<div class="block padding2"></div>
`;


document.getElementById('result').innerHTML = `
<div class="post light shadow borderRadius2">
${quizWinMsg[0]}
<div class="submit" onclick="reload();">reload, again</div>
</div>
`;
}

// rm carrent
const removed = quizListByTagArrForPrint.splice(getP2, 1); // Mutates fruits and returns array of removed items
//console.log(removed);



quizAnswerCounter[0] = 0;
quizStop[0] = [];
}
break;



default:
/*
//alert(quizListByTagArrForPrint);
getP2 = Math.floor(Math.random() * quizListByTagArrForPrint.length);
id = quizListByTagArrForPrint[getP2];
checkNotFound = ''; // clear
document.getElementById('result').innerHTML = id;
*/
}



}

quizMain('start', '', '');
// end main













// taglist
var hlClass = '';
var color = 'silver';
var size = '';
// fu. tagList from Blog
// other functions 
// start tagList
function tagList(tagList2){

tagList = '';


tagList2 = tagList2.replaceAll(/,/g, (conf["confSymbolForSplit"]));
tagList2 = tagList2.replaceAll(/ /g, (conf["confSymbolForSplit"]));

tagList2 = tagList2.split((conf["confSymbolForSplit"]));


/*
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagList2.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});*/




var tagAverage = 0;
var tagTotal = 0;

// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// make uniq and count, object
var tagListCount = {};
tagList2.forEach(function (x) {
if(x != null&&x != ''){
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
if(key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});


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
// end Taglist limit







/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal+x;
});
tagAverage = tagTotal/Object.values(tagListCount).length;




var tagSize = '';
var tagColor = '';

function fuTag(tagCount){
//let tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
let tagPercentage = (Math.floor((tagCount*100)/tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
//console.log(tagPercentage);

// tag font-size and color
switch (true) {

case tagPercentage >= 500:
tagColor = "var(--red)";
tagSize = "200%";
break;

case tagPercentage >= 300:
tagColor = "var(--orange)";
tagSize = "180%";
break;

case tagPercentage >= 250:
tagColor = "var(--yellow)";
tagSize = "170%";
break;

case tagPercentage >= 100:
tagColor = "var(--green)";
tagSize = "150%";
break;

case tagPercentage >= 80:
tagColor = "var(--blue)";
tagSize = "130%";
break;

case tagPercentage >= 50:
tagColor = "var(--indigo)";
tagSize = "120%";
break;

case tagPercentage >= 30:
tagColor = "var(--violet)";
tagSize = "110%";
break;

default:
tagColor = "var(--c2)";
tagSize = "95%";
}

//console.log(tagColor);
//return tagColor;
}



//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare)

let hlClassList = '';
// https://masteringjs.io/tutorials/fundamentals/foreach-object
sortedTags.forEach(entry => {
const [key, value] = entry;


//alert('test');

tag = key.trim();
tagCount = value;



fuTag(tagCount);




if(tag != ''){
let printTag = tag;
let printTag2 = tag.replaceAll(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = '';
if(printTag[0] != undefined){
hlClass = 'hlClass'+printTag2[0].toLowerCase();
hlClassList += printTag2[0].toLowerCase();
}

if(q == tag){
tagList += `

<a class="tag light border borderRadius2 ${hlClass}" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; color: var(--l4); font-size: ${tagSize};">${printTag}</a>

`;
}else{

tagList += `
<a class="tag light border borderRadius2 ${hlClass}" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize};">${printTag}</a>
`;
}
}
});

var hlClassList3 = '';
hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass'+item;
item = item.toUpperCase();
hlClassList3 += `
<a class="tag light border borderRadius2 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}" id="${hlClass}">${item}</a>
`;
});

tagList = `

<div class="tagList">${tagList}</div>
<div class="block padding2"></div>
<div class="tagList postTv">${hlClassList3}</div>

`;



return tagList;
}
//  end tag list















document.getElementById('taglist').innerHTML += `
<div class="tCenter" style="padding-top: 60px;">
<div class="wrapper3">

<div class="xSmall padding2 op">tags:</div>
`+tagList(printTagList)+`
</div>
</div>
`;


document.getElementById('taglist').innerHTML +=  `
<br>

<div id="form" class="wrapperL">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft xSmall">search and tag:</label>
<input id="input" class="padding2 op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="" value="${q}">

<input class="op padding2 small" style="min-height: 1px;" type="submit" value="go">


</form>

<br>
<span class="xSmall op block tCenter margin2 padding2">total: ${jsonVar.length}</span>
</div>
`;














function hlwClassAdd(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("highlight");
i++;
}
}


function hlwClassRemove(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("highlight");
i++;
}
}



function htmlAsText(text){

text = text.replaceAll("<", '&lt;');
text = text.replaceAll(">", '&gt;');
text = text.replaceAll("'", '&#39;');
return text = text.replaceAll('"', '&quot;');

}






