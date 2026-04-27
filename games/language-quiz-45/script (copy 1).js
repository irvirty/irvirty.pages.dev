// v.1.0.4

var jsonVar = quizJsonVar;

var printLocalAll = '';


//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var printTagList = '';
var tagListLimit = conf["confTagListLimit"];
var checkNotFound = '';

var url = new URL(window.location);
var q = url.searchParams.get("q");
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
if(q == null) { q = '#space'; tag = q; }
var q2 = q;



document.getElementById("result").innerHTML = jsonVar; 




var arrListForRandom = [];
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
qSearch = decodeURIComponent(q2);
qSearch = String(qSearch).toLowerCase();
}
qSearch = String(qSearch).toLowerCase();


// if tag
//if(qSearch[0] == '#'){}
qData = String(' ' + postTag).toLowerCase();
/*if(qSearch[0] == '#'){ qData = qData.replaceAll(/,/g, ' '); } */
if((qData).indexOf((qSearch)) >= 0){
arrListForRandom.push(key);
i++;
total = i;
comMessagePrint = `<b class="tCenter">${q2} ${i}</b>`;
//document.getElementsByTagName('title')[0].innerHTML = `${q2} |` + domainNameToTitle;
}






});
// end gen arr list


if(arrListForRandom.length > 0){
getP2 = Math.floor(Math.random() * arrListForRandom.length);
id = arrListForRandom[getP2];
checkNotFound = ''; // clear
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


if(checkNotFound == ''){
//alert(jsonVar[getRandomInt(jsonVar.length)]);
//alert(jsonVar.length);

var randomPostId = jsonVar[id]['id'];
var randomPostText = jsonVar[id]['text'];
var randomPostText2 = JSON.parse(jsonVar[id]['text2']);
var randomPostText3 = jsonVar[id]['text3'];
var randomPostTag = jsonVar[id]['tag'];
var randomPostUrl = jsonVar[id]['url'];
var randomPostTime = jsonVar[id]['time'];

var question = randomPostText2["question"];
var answer2 = (randomPostText2["answer"]);

// shufle answer
//https://stackoverflow.com/questions/26503595/javascript-shuffling-object-properties-with-their-values
var randomKeys = Object.keys(answer2);
// drop your preffered shuffle algorithm here
randomKeys.sort(function(a,b) {return Math.random() - 0.5;});
// now you have random keys!

console.table(randomKeys);var answer = '';
Object.keys(randomKeys).forEach((key) => {
let answerTmp = randomKeys[key] + answer2[randomKeys[key]];
let answerTmpTrueFalse = randomKeys[key] + answer2[randomKeys[key]];
answer += `<div class="button light border click left" onclick="quizAnswer()">${answerTmp}</div>`;
});

answer = `<div class="menu zero">${answer}</div>`;


document.getElementById("result").innerHTML = `

<div class="block padding2 margin2 tCenter">${comMessagePrint}</div>

<div class="post light padding2 shadow borderRadius3 pre">


<h3 class="tCenter">${question}</h3>
${answer}
<div class="button block light border click" onclick="quizAnswer()">next</div>


${randomPostText} <a class="brand" target="blank" href="${randomPostUrl} ">${randomPostUrl} ⇗</a>

</div>

`;

}
// end print result












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

<a class="tag light border3 ${hlClass}" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; color: var(--l4); font-size: ${tagSize};">${printTag}</a>

`;
}else{

tagList += `
<a class="tag light border3 ${hlClass}" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize};">${printTag}</a>
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
<a class="tag light border3 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}" id="${hlClass}">${item}</a>
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

