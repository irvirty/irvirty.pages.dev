// Keep v.4.3.1
// The static version of my offline "keep" PHP script that saves things (links, notes, etc).
// Inspired by Twitter, Google Keep
// Not for large data files.
// JSON data in JS varible, time - in UNIX format

/*

<!--
Config, copy paste in html before script.js.
Fresh config in script.js
-->
<script>
let keepConfig = {
"postLimit":"", // number, the number of posts per page
"embedStatus":"", // "off", "semi" (embed for single)
"multiEmbedStatus":"", // "on"
"tagListStatus":"", // "off", "all"
"tagListLimit":"", // number
"targetOption":"", // "blank"
"bottomMsg":`
<!-- bottom text or code -->
`, // text
"display":"", // gallery, art, blog (text, text2), all (text, text2, text3)
"timeStatus":"", // off, disable post time (post id)
"rightFooterStatus":"", // on, off, right footer in data
"usernameStatus":"", // on, off
"confD":"", //
};
</script>

*/

// fix error
if (typeof fuMHideFileNameExt != 'function'){
function fuMHideFileNameExt(text){ return text; };
}
if (conf == undefined){
var conf = [];
conf["confDomainName"] = String((location.hostname).split('.')[0]);
}
if (typeof fuMClearText2 != 'function'){
function fuMClearText2(text){ return text; };
}


function keep(printId, jsonVar, otherClass, scriptDir, keepConfig){

/*
printId - div id where print content
jsonVar - JSON (data) in JavaSript variable
otherClass - CSS class name for post
scriptDir - for location link
keepConfig - additional keep configuration)

(id - post ID, unique in JSON data, p - page list using data (array), p2 - post list using data (array))
*/

if (keepConfig == undefined||keepConfig == ''){
var keepConfig = [];
var postLimit = "";
var embedStatus = "";
var tagListStatus = '';
var multiEmbedStatus ='';
var tagListStatus = '';
var tagListLimit = '';
var targetOption = '';
var bottomMsg = '';
var display = '';
var timeStatus = '';
var rightFooterStatus = '';
var usernameStatus = '';
var confD = '';
} else {
var postLimit = '';
var embedStatus = '';
var tagListStatus = '';
var multiEmbedStatus = '';
var tagListStatus = '';
var tagListLimit = '';
var targetOption = '';
var bottomMsg = '';
var display = '';
var timeStatus = '';
var rightFooterStatus = '';
var usernameStatus = '';
var confD = '';

if (keepConfig['postLimit'] != undefined) { var postLimit = keepConfig['postLimit']; }
if (keepConfig['embedStatus'] != undefined) { var embedStatus = keepConfig['embedStatus']; }
if (keepConfig['tagListStatus'] != undefined){ var tagListStatus = keepConfig['tagListStatus']; }
if (keepConfig['multiEmbedStatus'] != undefined){ var multiEmbedStatus = keepConfig['multiEmbedStatus']; }
if (keepConfig['tagListLimit'] != undefined) { var tagListLimit = keepConfig['tagListLimit']; }
if (keepConfig['targetOption'] != undefined) { var targetOption = keepConfig['targetOption']; }
if (keepConfig['bottomMsg'] != undefined){ var bottomMsg = keepConfig['bottomMsg']; }
if (keepConfig['display'] != undefined) { var display = keepConfig['display']; }
if (keepConfig['timeStatus'] != undefined) { var timeStatus = keepConfig['timeStatus']; }
if (keepConfig['rightFooterStatus'] != undefined) { var rightFooterStatus = keepConfig['rightFooterStatus']; }
if (keepConfig['usernameStatus'] != undefined) { var usernameStatus = keepConfig['usernameStatus']; }
if (keepConfig['confD'] != undefined) { var confD = keepConfig['confD']; }
}

// default value
if (postLimit == undefined||postLimit == ''){ postLimit = 10; }
if (otherClass == undefined||otherClass == ''){ otherClass = ' '; }
if (scriptDir == undefined||scriptDir == ''){ scriptDir = './'; }
if (embedStatus == undefined||embedStatus == ''){ embedStatus = 'on'; }
if (multiEmbedStatus == undefined||multiEmbedStatus == ''){ multiEmbedStatus = 'off'; }
if (tagListStatus == undefined||tagListStatus == ''){ tagListStatus = 'on'; }
if (tagListLimit == undefined||tagListLimit == ''){ tagListLimit = '38'; }
if (targetOption == undefined){ targetOption = ''; } //blank
if (bottomMsg == undefined||bottomMsg == ''){ bottomMsg = ''; }
if (display == undefined||display == ''){ display = 'list'; }
if (timeStatus == undefined||timeStatus == ''){ timeStatus = ''; }
if (rightFooterStatus == undefined||rightFooterStatus == ''){ rightFooterStatus = 'off'; }
if (usernameStatus == undefined||usernameStatus == ''){ usernameStatus = 'off'; }
if (confD == undefined||confD == ''){ confD = '/'; }
var host = '';







// Example of data in the file, fresh example in script.js
if (jsonVar == undefined||jsonVar == ''){

// file jsonVar.js for embed
var jsonVar = 

[
    {
        "id": 251,
        "text": "test text",
        "text2": "test text",
        "text3": "test text",
        "url": "https:\/\/example.com",
        "tag": "#test2 #tag",
        "time": 1671480576,
        "rightFooter": ""
    },
    {
        "id": 250,
        "text": "test text",
        "text2": "test text",
        "text3": "test text",
        "url": "https:\/\/example.com",
        "tag": "#test #tag",
        "time": 1668444918,
        "rightFooter": ""

    }
];
// end file jsonVar.js

}
// new text2, text3 (


// fix main.js
if (typeof conf == 'object'){
confThemeEmbed = conf["confThemeEmbed"];
if (confThemeEmbed == undefined||confThemeEmbed == null){ confThemeEmbed = "light"; }
confSymbolForSplit =  conf["confSymbolForSplit"];
if (confSymbolForSplit == undefined||confSymbolForSplit == null){ confSymbolForSplit = "SYMBOLFORSPLIT"; }

} else {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
var confThemeEmbed = 'dark';
} else {
var confThemeEmbed = 'light';
}
var confSymbolForSplit = "SYMBOLFORSPLIT";
}





var w = '100%';
var h = '190px';
var embedServiceList = '';
var printPost = '';
var arrListForRandom = [];

var total = '';
var print2 = '';

var url = new URL(window.location);

var sTimeRedir = [];
sTimeRedir[0] = 10000;
sTimeRedir[2] = 1200; // Luck

var q = url.searchParams.get("q");

if (q != null&&q != undefined){
/*q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);*/
q = q.trim();

var qEncoded = "";

// script.js + project redirect
let qHashtag = location.href;
qHashtag = qHashtag.split("#")[1];
if (qHashtag != undefined){
qHashtag = (String(location.href)).split("?")[1];
qHashtag = (qHashtag + "&").split("&");
qHashtag.forEach((val) => {
if (val.indexOf("q=") != -1){
val = val.replace("q=", "");
q = val;
//q = decodeURIComponent(q);
}
});
}

q = q.replaceAll('%23StopRedirect', '');
q = q.replaceAll('#StopRedirect', '');

}

var hashtag = url.searchParams.get("tag");
if (hashtag != null&&hashtag != undefined){
/*hashtag = hashtag.replaceAll(/%/g, "%25");
hashtag = decodeURIComponent(hashtag);*/
q = "#" + hashtag.trim();
}


var q2 = url.searchParams.get("q2");

if (q2 != null&&q2 != undefined){
/*q2 = q2.replaceAll(/%/g, "%25");
q2 = decodeURIComponent(q2);*/
q2 = q2.trim();
}
//if (q2 != null&&q2 != ''){ q += ' ' + q2; } // delme



var mode = url.searchParams.get("mode");
if (mode != null){ mode = mode.trim(); }

if (dMode == undefined){
var dMode = url.searchParams.get("dmode");
if (dMode != null){ dMode = dMode.trim(); }
}


// mini redirect, test fix
if (q == 'l'||q == 'r'){ q = null; mode = 'random'; }
if (q == ''&&q2 == 'l'){ q = null; mode = 'random'; }
if (q == 'rr'||q == 'rs'){ mode = 'randomurl'; }

if (q != null&&q != ''){

if (q2 != null&&q2 != ''){ q += ' ' + q2; }
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";

switch (qCom) {

case 'l#':
case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
//q = encodeURIComponent(q);
q2 = "l";
break;

case '/#':
case 'q#':
q = q3.replace(qCom, '');
q = q.trim();
//q = encodeURIComponent(q);
window.location.href = "/?q=" + q;
window.location.href = window.location.href + '#StopRedirect'; 
break;


case 'qs#':
q = q3.replace(qCom, '');
q = q.trim();
//q = encodeURIComponent(q);
window.location.href = "/site-search/?q=" + q;
window.location.href = window.location.href + '#StopRedirect'; 
break;


case 'ps#':
case 'gg#':
case 'cs#':
case 'cse#':
q = q3.replace(qCom, '');
q = q.trim();
//q = encodeURIComponent(q);

window.location.href = "/projects/google-programmable-search-49/index.html?q=" + q;
window.location.href = window.location.href + '#StopRedirect'; 
break;


case 'r#':
case 'rr#':
case 'rs#':
q = q3.replace(qCom, '');
q = q.trim();
//mode = 'randomurl';
q2 = 'r';
break;
}


qEncoded = encodeURIComponent(q);
}
// end mini redirect




var id = url.searchParams.get("id");
if (id != null){
/*id = id.replaceAll(/%/g, "%25");
id = decodeURIComponent(id);*/
mode = 'id';
}

var getP = url.searchParams.get("p");
if (getP != null){
//getP = getP.replaceAll(/%/g, "%25");
//getP = fuMClearText(getP);
getP = Number((getP));

if (getP >= jsonVar.length - 1){ getP = jsonVar.length; }
if (getP < postLimit){ getP = 0; }
mode = 'list';
}

var getP2 = url.searchParams.get("p2"); // nav for id
if (getP2 != null){
//getP2 = getP2.replaceAll(/%/g, "%25");
getP2 = getP2.trim();
//getP2 = fuMClearText(getP2);
getP2 = Number((getP2));
mode = 'idList';
}

if (getP == null){ getP = 0; }

var getP3 = url.searchParams.get("p3"); // nav for id
if (getP3 != null){
//getP3 = getP3.replaceAll(/%/g, "%25");
getP3 = getP3.trim();
//getP3 = fuMClearText(getP3);
getP3 = Number((getP3));
}

if (getP == null){ getP = 0; }



if (getP == jsonVar.length){ getP = getP - 1; }
if (getP2 == jsonVar.length){ getP2 = getP2 - 1; }
if (getP >= jsonVar.length){ getP = Number(Number(jsonVar.length) - Number(postLimit)); }
if (getP <= 0){ getP = 0; }
if (isNaN(getP)||isNaN(getP2)){ getP = 0; getP = 0; }

if (getP3 <= 0){ getP3 = 0; }

var postId = '';
var postText = '';
var postText2 = ''
var postText3 = '';
var postTag = '';
var postUrl = '';
var postTime = '';


var print = '';
var printTagList = '';
var getTag = '';

var comMessage = '';
var comMessagePrint = '';

postLimit = Number(postLimit);

var i3 = 0;


var lFoundQUrlList = [];

if (tagListStatus != 'off'){

print += `

<nav class="tCenter">
<!--<a class="small keepTag2" href="./" title="Index ./">index</a>-->
<a class="small keepTag2 brand" href="?" title="Start">start</a>
<a class="small keepTag2 brand" href="?mode=random&dmode=${dMode}" title="Random post">random</a>
</nav>

<div class="wrapper">
<div class="op tCenter small block padding2">
<span id="comMsg"></span>
</div>
</div>

<span id="postTotal"></span>

`;
}

//document.getElementById(printId).innerHTML += '<div id="playerxx">playerxx</div>';


function main(){
let = lDots = "";


//if (q != null&&q != ''){
if (q != null){
if (mode == null){ mode = 'search'; }

/*q = fuMClearText(q);
q2 = fuMClearText(q2);*/


if (q.length > 260){ lDots = " ... "; }
let dash = "";
if (q != ""){ dash = " - "; }
if (q.length > 260){ lDots = " ... "; }
let printTitle = q.slice(0, 260) + lDots + dash + document.getElementsByTagName('title')[0].innerHTML;
document.getElementsByTagName('title')[0].innerHTML = printTitle;

//embedStatus = 'off';
//postLimit = 10;
postLimit = postLimit;
getP = getP3;
}


if (id != null||getP2 != null){
postLimit = 1;
}


if (/*id == 0||*/mode == 'random'){ mode = 'random'; getP2 = Math.floor(Math.random() * (jsonVar.length - 1)); }
if (mode == 'randomurl'){ getP2 = Math.floor(Math.random() * (jsonVar.length - 1)); }


if (mode == 'list'&&tagListStatus == 'on'){

/*print += `
<!--<div class="block tCenter padding2">
mode:${mode} id:${id} q:${q} p:${getP} p2:${getP2}
<a href="?id=">random</a>
</div>-->
`;*/
}


let i = 0;
jsonVar.forEach((item, key) => {
postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';
rightFooter = '';

if (item['id'] != null){ postId = item['id']; }
if (item['text'] != null){ postText = item['text']; }
if (item['text2'] != null){ postText2 = item['text2']; }
if (item['text3'] != null){ postText3 = item['text3']; }
if (item['tag'] != null){ postTag = item['tag']; }
if (item['url'] != null){ postUrl = item['url']; }
if (item['time'] != null){ postTime = item['time']; }
if (item['rightFooter'] != null){ rightFooter = item['rightFooter']; }

let postTextClean = postText;
postText = postText.trim();



switch (mode){

case 'search':
// search start 1
var subQListFound = [];

if (q != ''){

//qSearch = decodeURIComponent(q);
qSearch = (q);
qSearch = String(qSearch).toLowerCase();

var qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ' + postUrl).toLowerCase();

var qSearch23 = qSearch.replaceAll(' ', '_'); // q2 with "_"
var qSearchNoQuote = qSearch.replaceAll('"', '');

// s1.1, tag
if (qSearch[0] == '#'||(qSearch[0] + ' ').indexOf("%23") != -1){
qData2 = qData.replaceAll(/,/g, ' ');
if ((qData2 + ' ').indexOf((qSearch + ' ')) >= 0){
subQListFound.push(qSearch);
var subQforLight = subQListFound.join(confSymbolForSplit);

// Luck
if (q2 == 'l'&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''){
sTimeRedir[2] = 1200;
comMessagePrint = `Luck search, redirect to URL: `+ sTimeRedir[2] / 1000 +` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = scriptDir + '?p2=' + key;
window.location.href = window.location.href + '#StopRedirect'; 
}
//console.log(postUrl);
}
// end Luck search

if (getP3 <= i){
if (i3 <= postLimit - 1){
if (display == "all"||mode == "search"){
if (postText2 != ''){ postText2 = `

` + postText2; };
if (postText3 != ''){ postText3 = `

` + postText3; };
if (display == "blog"){
printPost += fuPrintPost(postId, postText, postUrl + postText2 + postText3, postTag, postTime, subQforLight, rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl + postText2 + postText3, postTag, postTime, subQforLight, rightFooter);
}
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, subQforLight, rightFooter);
}
}
i3++;
}
i++;
total = i;
subQListFound = [...new Set(subQListFound)];
comMessagePrint = `${q} (s1.1: ${subQListFound}) ${i}`;
comMessage = 'found';

// collect for random
if (postUrl == ''&&postId != ''){
//lFoundQUrlList.push(scriptDir + '?id=' + postId);
lFoundQUrlList.push(scriptDir + '?p2=' + key);
} else {
lFoundQUrlList.push(postUrl);
}


}

// s1.2, query
} else if (
qData.indexOf(String(qSearch)) != -1||
qData.indexOf(String(qSearch23)) != -1||
qData.indexOf(String(qSearchNoQuote)) != -1
){
if (qData.indexOf(String(qSearch23)) != -1){ qSearch = qSearch23; }
if (qData.indexOf(String(qSearchNoQuote)) != -1){ qSearch = qSearchNoQuote; }

//subQListFound.push(subQListFound);
let qSearchTmp = qSearch.split(" ");
qSearchTmp = qSearchTmp.join(confSymbolForSplit)
subQListFound.push(qSearchTmp);
var subQforLight = subQListFound.join(confSymbolForSplit);


// Luck
if (q2 == 'l'&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
if (postUrl != ''){
comMessagePrint = `Luck search, redirect to URL: ` + sTimeRedir[2] / 1000 +` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect';
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = scriptDir + '?p2=' + key;
window.location.href = window.location.href + '#StopRedirect'; 
}
//console.log(postUrl);
}
// end Luck search

if (getP3 <= i){
if (i3 <= postLimit - 1){
if (display == "all"||mode == "search"){
if (postText2 != ''){ postText2 = `

` + postText2; };
if (postText3 != ''){ postText3 = `

` + postText3; };
if (display == "blog"){
printPost += fuPrintPost(postId, postText, postUrl + postText2 + postText3, postTag, postTime, subQforLight, rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl + postText2 + postText3, postTag, postTime, subQforLight, rightFooter);
}
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, subQforLight, rightFooter);
}
//printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, subQforLight, rightFooter);
}
i3++;
}
i++;
total = i;
subQListFound = [...new Set(subQListFound)];
subQListFound = subQListFound.join(",");
subQListFound = subQListFound.replaceAll(confSymbolForSplit, ' ');

comMessagePrint = `${q} (s1.2: ${subQListFound}) ${i}`;
comMessage = 'found';

// collect for random
if (postUrl == ''&&postId != ''){
//lFoundQUrlList.push(scriptDir + '?id=' + postId);
lFoundQUrlList.push(scriptDir + '?p2=' + key);
} else {
lFoundQUrlList.push(postUrl);
}

}
}



if (comMessage != 'found') { comMessagePrint = `${q} Probably not found`; }
break;
// end search 1

case 'id':
case 'idList':

if (postId == id||getP2 == key){
if (i <= postLimit -1){

if (postText2 != ''){ postText2 = `

` + postText2; };
if (postText3 != ''){ postText3 = `

` + postText3; };
if (display == "blog"){
printPost += fuPrintPost(postId, postText, postUrl + postText2 + postText3, postTag, postTime, "", rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl + postText2 + postText3, postTag, postTime, "", rightFooter);
}
comMessagePrint = 'id: ' + postId;
// post in title only when id
if (id != ''&&getP2 == null){
//document.getElementsByTagName('title')[0].innerHTML = postText.slice(0, 60);
//document.getElementsByTagName('title')[0].innerHTML += ' - ' + (postTextClean).slice(0, 260) +  " ...";

if (postTextClean.length > 260){ lDots = " ... "; }
let printTitle = (postTextClean).slice(0, 260) + lDots + ' - ' + document.getElementsByTagName('title')[0].innerHTML;
document.getElementsByTagName('title')[0].innerHTML = printTitle;

/*if (conf["confDomainNameInTitle"] == 'on'){
document.getElementsByTagName('title')[0].innerHTML += ' | ' +  (location.hostname).split('.')[0];
}*/
}
if (getP2 != null){
comMessagePrint += ' p2: ' + getP2;
}
i++;
getP = key;
}
}
if (comMessagePrint == '') { comMessagePrint = `${q} Probably not found`; }
// end s1
break;


case 'randomurl':
case 'random':
postLimit = 1;
if (getP2 == key){
if (i <= postLimit - 1){

// Luck
if (mode == 'randomurl'&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''){
comMessagePrint = `Luck search, redirect to URL: `+ sTimeRedir[2] / 1000+` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = scriptDir + '?p2=' + key;
window.location.href = window.location.href + '#StopRedirect';
}
//console.log(postUrl);
}
// end Luck search

if (postText2 != ''){ postText2 = `

` + postText2; };
if (postText3 != ''){ postText3 = `

` + postText3; };
if (display == "blog"){
printPost += fuPrintPost(postId, postText, postUrl + postText2 + postText3, postTag, postTime, '', rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl + postText2 + postText3, postTag, postTime, '', rightFooter);
}
//printPost += '<div class="">' + fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, '', rightFooter) + '</div>';
i++;
getP = key;
comMessagePrint = 'id: ' + postId + ', p2: ' + getP2;
}
}
break;


default:
mode = 'list';
if (getP <= key){
if (i <= postLimit -1){

if (display == "all"||mode == "search"){
if (postText2 != ''){ postText2 = `

` + postText2; };
if (postText3 != ''){ postText3 = `

` + postText3; };
if (display == "blog"){
printPost += fuPrintPost(postId, postText, postUrl + postText2 + postText3, postTag, postTime, "", rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl + postText2 + postText3, postTag, postTime, "", rightFooter);
}
} else {
if (display == "blog"){
printPost += fuPrintPost(postId, postText, postText + ' ' + postUrl, postTag, postTime, "", rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, "", rightFooter);
}
}
i++;
}
}

}


// collect all tag
if (tagListStatus == "all"){
printTagList += postText + confSymbolForSplit + postText2 + confSymbolForSplit + postText3 + confSymbolForSplit + postTag + confSymbolForSplit;
} else {
printTagList += postTag + confSymbolForSplit;
}

});






// s2 Search 2, word

if (mode == 'search'&&comMessage != 'found'){

var subQListFound = [];

comMessagePrint = '';

if (q != ''){

//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if ((qData).search(qSearch) != -1){}
//qSearch = decodeURIComponent(q);
qSearch = (q);
qSearch = String(qSearch).toLowerCase();

qSearch = (qSearch + ' ').split(' ');

// many words from space split

jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';
rightFooter = '';

if (item['id'] != null){ postId = item['id']; }
if (item['text'] != null){ postText = item['text']; }
if (item['text2'] != null){ postText2 = item['text2']; }
if (item['text3'] != null){ postText3 = item['text3']; }
if (item['tag'] != null){ postTag = item['tag']; }
if (item['url'] != null){ postUrl = item['url']; }
if (item['time'] != null){ postTime = item['time']; }
if (item['rightFooter'] != null){ rightFooter = item['rightFooter']; }

postText = postText.trim();

qData = String(postText + ' ' + postUrl + ' ' + postText2 + ' ' + postText3 + ' ' + postTag).toLowerCase();


let checkFound = 0;


for (const item3344 of qSearch) {
    // ...use `element`...

// query
//if ((qData.split(item)).length > 1&&item334 != ''){
if ((qData.indexOf(item3344)) != -1&&item3344 != ''){
subQListFound.push(item3344);
var subQforLight = subQListFound.join(confSymbolForSplit);

// Luck
if (q2 == 'l'){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
comMessagePrint = `Luck search, redirect to URL: ` + sTimeRedir[2] / 1000+` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = scriptDir + '?p2=' + key;
window.location.href = window.location.href + '#StopRedirect';
}
//console.log(postUrl);
}
// end Luck search




if (getP3 <= i){
if (i3 <= postLimit - 1){
//printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, subQforLight, rightFooter, rightFooter);
if (display == "all"||mode == "search"){

if (postText2 != ''){ postText2 = `

` + postText2; };
if (postText3 != ''){ postText3 = `

` + postText3; };
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl + postText2 + postText3, postTag, postTime, subQforLight, rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, subQforLight, rightFooter);
}
}
i3++;
}
i++;
total = i;
subQListFound = [...new Set(subQListFound)];
comMessagePrint = `${q} (s2: ${subQListFound}) ${i}`;
qData = '';
checkFound = '';
comMessage = 'found';

// collect for random
if (postUrl == ''&&postId != ''){
//lFoundQUrlList.push(scriptDir + '?id=' + postId);
lFoundQUrlList.push(scriptDir + '?p2=' + key);
} else {
lFoundQUrlList.push(postUrl);
}

}

};


});

}


}





if (mode == 'search'&&comMessage != 'found') { comMessagePrint = `${q} Probably not found`; }
// end s2 Search 2



// s3, search 3
if (mode == 'search'&&comMessage != 'found'){
var subQ = [];
comMessagePrint = '';

if (q != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if ((qData).search(qSearch) != -1){}
//qSearch = decodeURIComponent(q);
qSearch = (q);
qSearch = String(qSearch).toLowerCase();
var qSearchList = (qSearch + ' ').split(' ');

jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';
rightFooter = '';

if (item['id'] != null){ postId = item['id']; }
if (item['text'] != null){ postText = item['text']; }
if (item['text2'] != null){ postText2 = item['text2']; }
if (item['text3'] != null){ postText3 = item['text3']; }
if (item['tag'] != null){ postTag = item['tag']; }
if (item['url'] != null){ postUrl = item['url']; }
if (item['time'] != null){ postTime = item['time']; }
if (item['rightFooter'] != null){ rightFooter = item['rightFooter']; }

postText = postText.trim();

let qData = String(postText + ' ' + postUrl + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ').toLowerCase();

qData = (qData + ' ').split(' ');

var checkDublicateId = [];
qData.forEach(function(item336) { // foreach post word and quary for search
//if ((qData.split(item336)).length > 1&&item33 != ''){
//if ((qData.indexOf(item336)) >= 0){
//console.log(item);

// query
qSearchList.forEach((qSearchListItem) => {
//console.log(fuzzySearch(item336, qSearchListItem));
if (fuzzySearch(item336, qSearchListItem) == true&&item336 != ''&&qSearchListItem != ''){
//var subQ = 's3: ' + item336 + ',';
subQ.push(String(item336).trim() + ' ');
//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
subQ = [...new Set(subQ)];
var subQforLight = subQ.join(confSymbolForSplit);

if (checkDublicateId[0] != postId){ // fixed dublicate post when search and found

// fixme for s3
// Luck
if (q2 == 'l'){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
comMessagePrint = `Luck search, redirect to URL: ` + sTimeRedir[2] / 1000+` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = scriptDir + '?p2=' + key;
window.location.href = window.location.href + '#StopRedirect';
}
//console.log(postUrl);
}
// end Luck search

if (getP3 <= i){
if (i3 <= postLimit - 1){
if (display == "all"||mode == "search"){
if (postText2 != ''){ postText2 = `

` + postText2; };
if (postText3 != ''){ postText3 = `

` + postText3; };
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl + postText2 + postText3, postTag, postTime, subQforLight, rightFooter);
} else {
printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, subQforLight, rightFooter);
}
//printPost += fuPrintPost(postId, '', postText + ' ' + postUrl, postTag, postTime, subQforLight, rightFooter);
}
i3++;
}
i++;
total = i;
let subQprint = subQ.slice(0, 5).join(", ") + ' ...';
comMessagePrint = `${q} (s3: ${subQprint}) ${i}`;
qData = '';
comMessage = 'found';
checkDublicateId[0] = postId;

// collect for random
if (postUrl == ''&&postId != ''){
//lFoundQUrlList.push(scriptDir + '?id=' + postId);
lFoundQUrlList.push(scriptDir + '?p2=' + key);
} else {
lFoundQUrlList.push(postUrl);
}

}
}
})


})
})
}
};

if (mode == 'search'&&comMessage != 'found') { comMessagePrint = `${q} Probably not found`; }
// end s3, search 3



let keepStyle = "";

if (display == 'gallery'){
if (mode == 'list'&&total != 1||mode == 'search'&&total != 1){
keepStyle = `

<style>
.keepContent {
display: flex;
flex: 1 0 auto;
flex-wrap: wrap;

justify-content: center;
max-width: 100%;
margin: 0 auto;

align-items: stretch
}

.keepContent .keepPost {
flex: 1 0 auto;
justify-content: center;

/*align-self: stretch;*/

width: auto;
width: 220px;
max-width: 100%;
min-width: auto;
gap: 0;

margin: 3px;
}

.keepPostFooter { display: block; }

@media(max-width: 500px) {
.keepContent, .keepContent .keepPost { display: block; width: 100%; }
}

.keepContent img {
border-radius: var(--borderRadius2);
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
background-color: var(--l3);
}

.keepContent .keepPostContent:first-letter{ font-weight: bold;  }
</style>

`;

}
}

if (display == 'art'){
if (mode == 'list'&&total != 1||mode == 'search'&&total != 1){
keepStyle = `

<style>
.keepContent {
display: grid;
width: 100%;
/*grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));*/
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
grid-gap: 5px;


/*max-width: 1200px;*/
/*margin: 0 auto;*/

align-content: center;
justify-content: space-evenly;
justify-content: center;
}

.keepContent img {
border: 2px solid var(--d);
padding: var(--padding);
border-radius: var(--borderRadius2);
background-color: var(--l3);
}

.keepPostFooter { display: block; }

@media(max-width: 300px) {
.keepContent, .keepContent .keepPost { display: block; width: 100%; }
}

.keepContent .keepPostContent:first-letter{ font-weight: bold;  }
</style>

`;
}
}

document.head.insertAdjacentHTML("beforeend", keepStyle);

//printPost = keepStyle + printPost;


/*} else if (display == 'gallery'){
printPost = `
<div class="wrapperSmall">` + printPost + `</div>
`;
}*/ 


print = print + `

<div class="keepContent">` + printPost + `</div>

`+print2;



// tagList and nav print
if (tagListStatus != 'off'){


//if (com != 'search'){ print += `<div class=" ${otherClass} ">`+ keepNav(mode) +`</div>`; }
print += `<div class="center"><div class="wrapper zero">` + keepNav(mode) + `</div></div>`;


if (mode == 'search'){
print += `
<div class="wrapper">
<div class="block tRight">
<a class="border3 borderRadius2 button light" href="#" onclick="history.back();return false;" title="history back">back</a>
<a class="border3 borderRadius2 button light" href="?">start</a>
</div>
</div>
`;
}

print += fuTagList(printTagList);

// search forom


print += `
<br>

<div class="wrapperSmall">
<form id="keepForm" method="GET" style="margin-top: 0px;" action="?">
<label class="op block tLeft xSmall padding1PxList" for="inputKeep">✪ Search:</label>

<input id="inputKeep" class="borderRadius" type="search" name="q"  autocomplete="off" placeholder="">

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 2px;">
<input  class="smaller op tCenter submit borderRadius" type="submit" value="Search" title="Search">
<!--https://stackoverflow.com/questions/4171664/html-submit-button-different-value-button-text#-->
<button class="smaller op tCenter submit borderRadius" name="q2" value="l" type="submit" title="First search result">I'm Feeling Lucky</button>
<!--<input  class="smaller op tCenter" type="submit" name="q2" value="l">-->
</div>

</form>

<br>
<div class="block padding2 tRight">
<span class="tCenter op block padding2 xSmall">total: ${jsonVar.length}</span>
</div>

</div>

<div class=" ${otherClass} ">${bottomMsg}</div>

`;

}



// print all
document.getElementById(printId).innerHTML += print;

// forom dmode
//https://stackoverflow.com/questions/1000795/create-a-hidden-field-in-javascript
var input = document.createElement("input");
input.setAttribute("type", "hidden");
input.setAttribute("name", "dmode");
input.setAttribute("value", dMode);
//append to form element that you want .
document.getElementById("keepForm").appendChild(input);


comMessagePrint = `mode: ${mode} ` + comMessagePrint;
if (comMessagePrint != ''){
if (document.getElementById('comMsg') != null){

document.getElementById('comMsg').textContent += `

${comMessagePrint}

`;
}

}




//if (q != null){ document.getElementById("input").value = q; }
}

main(q, id);



// other functions keep
// tagList
function fuTagList(tagList2){
let color = 'silver';
let size = '';

tagList = '';

/*tagList2 = tagList2.toLowerCase();
confSymbolForSplit = confSymbolForSplit.toLowerCase();*/

tagList2 = tagList2.replaceAll(/(?:\r\n|\r|\n)/g, ' ');
tagList2 = tagList2.replaceAll(/,/g, confSymbolForSplit);
tagList2 = tagList2.replaceAll(/ /g, confSymbolForSplit);
tagList2 = tagList2.replaceAll('·', '');
tagList2 = tagList2.replaceAll('.', ' ');

tagList2 = '' + tagList2 + ''.replaceAll(',', confSymbolForSplit);
tagList2 = '' + tagList2 + ''.replaceAll(' ', confSymbolForSplit);

tagList2 = tagList2.split(confSymbolForSplit);

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
tagAverage = tagTotal / Object.values(tagListCount).length;

var tagSize = '';
var tagColor = '';

function fuTag(tagCount){
//let tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
let tagPercentage = (Math.floor((tagCount * 100) / tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
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
tagSize = "x-small";
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



tag = key.trim();
tagCount = value;


fuTag(tagCount);


if (tag != ''){
let printTag = tag;
let printTag2 = tag.replaceAll(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = '';
if (printTag2[0] != undefined){
hlClass = 'hlClass' + printTag2[0].toLowerCase();
hlClassList += printTag2[0].toLowerCase();
}

scriptDir = fuMHideFileNameExt(scriptDir);

if (q == tag){
tagList += `

<a class="keepTag light2 border2 borderRadius2 ${hlClass} c4R" href="${scriptDir}?q=${goTag}&dmode=${dMode}" style="background: var(--${tagColor}); font-size: ${tagSize};">${printTag}</a>

`;
} else {

tagList += `

<a class="keepTag light2 border2 borderRadius2 ${hlClass} ${tagColor}" href="${scriptDir}?q=${goTag}&dmode=${dMode}"  style="font-size: ${tagSize};">${printTag}</a>

`;
}
}
});

hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass' + item;
//item = item.toUpperCase();
hlClassList += `

<a id="${hlClass}" class="bg keepTag border borderRadius ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}">${item}</a>

`;
});

tagList = `

<div class="center tCenter">
<div class="wrapper2">

<div class="op small padding2">Tag cloud:</div>
<div class="keepTagList notUnderline">` + tagList + `</div>

<div class="padding2"></div>

<div class="wrapper">
<div class="tCenter keepTagList small notUnderline">
${hlClassList}
</div>
</div>

</div>
</div>

`;


return tagList;
}
//  end tag list




function fuPrintPost(id, postTitle, post, tag, time, subQforLight, rightFooter){
tag = highlightText(tag, targetOption, subQforLight);
//time = new Date(time).getTime();

rightFooter = fuMHideFileNameExt(rightFooter);

function normalize(a){
if (a <= 9){ a = '0' + a; }
return a;
}

//https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
function timeConverter(UNIX_timestamp){
var a = new Date(UNIX_timestamp * 1000);
//var months = ['', 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var year = a.getFullYear();
//var month = months[a.getMonth()];
//var month = normalize(a.getMonth());
var month2 = normalize(a.getMonth() + 1);
var date = normalize(a.getDate());
var hour = a.getHours();
var min = normalize(a.getMinutes());
var sec = normalize(a.getSeconds());
//var time = date + ' ' + month2 + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
var time = year + '-' + month2 + '-' + date;
return time;
}

var datePublished = timeConverter(time);
time = `<a class="brand op" href="${scriptDir}?id=${id}" title="id=${id} (permanent link)"><time itemprop="datePublished" datetime="` + datePublished + `">` + fuPostTime(time) + `</time></a>`;

var lPost = '';
var lPostTitle = '';

/*
// selected orange word when search
if (q != null&&mode == 'search'){
lPostTitle = highlightText(postTitle, targetOption, subQforLight);
lPost = highlightText(post, targetOption, subQforLight);
if (display == 'blog'){ lPost = `<h2>${lPostTitle}</h2>` + highlightText(post, targetOption, subQforLight); }

} else if (mode == 'id'||mode == 'idList'||mode == 'random'){
if (multiEmbedStatus == 'on'){
lPost = highlightText(post, targetOption);
if (display == 'blog'){ lPost = `<h2>${postTitle}</h2>` + highlightText(post, targetOption); }
} else {
lPost = highlightText2(post, targetOption); // autoplay embed
if (display == 'blog'){ lPost = `<h2>${postTitle}</h2>` + highlightText2(post, targetOption); }
}
} else {
lPost = highlightText(post, targetOption, subQforLight); 
if (display == 'blog'){ lPost = `<h2>${postTitle}</h2>` + highlightText(post, targetOption, subQforLight); }
}
*/

switch (mode) {
case "search":
// selected orange word when search
if (q != null){
lPostTitle = highlightText(postTitle, targetOption, subQforLight);
lPost = highlightText(post, targetOption, subQforLight);
if (display == 'blog'){ lPost = `<h2>${lPostTitle}</h2>` + highlightText(post, targetOption, subQforLight); }
}
break;

case "id":
case "idList":
case "random":
if (multiEmbedStatus == 'on'){
lPost = highlightText(post, targetOption);
if (display == 'blog'){ lPost = `<h2>${postTitle}</h2>` + highlightText(post, targetOption); }
} else {
lPost = highlightText2(post, targetOption); // autoplay embed
if (display == 'blog'){ lPost = `<h2>${postTitle}</h2>` + highlightText2(post, targetOption); }
}
break;

case "list":
lPost = highlightText(post, targetOption, subQforLight); 
if (display == 'blog'){
//lPost = `<span class="large">${lPost}</span>`; // without highlight (embed)
lPost = `<div class="large"><a class="block firstLetterBold" href="${scriptDir}?id=${id}">${postTitle}</a></div>`; // without highlight (embed)
}
break;

default:
lPost = highlightText(post, targetOption, subQforLight); 
if (display == 'blog'){ lPost = `<h2>${postTitle}</h2>` + highlightText(post, targetOption, subQforLight); }
}


var username = conf["confDomainName"];

var keepPostFooter = ' twoColumn keepPostFooter blockMobile ';
var keepPostFooterPadding = '';
if (timeStatus == 'off'){ time = ''; }
if (timeStatus == 'off'&&rightFooterStatus == 'off'){ keepPostFooter = ' keepPostFooter blockMobile '; }

if (rightFooterStatus == 'off'){ rightFooter = ''; }

// overwrite, only title (text) for blog
/*if (display == 'blog'&&mode == 'list'){
//lPost = `<span class="large">${lPost}</span>`; // without highlight (embed)
lPost = `<div class="large"><a class="block firstLetterBold notUnderline" href="${scriptDir}?id=${id}">${postTitle}</a></div>`; // without highlight (embed)
}//delme*/
/*
//
if (display == 'blog'&&mode != 'id'&&mode != 'idList'){ time = `<a class="tag brand light border4 op borderRadius2"  href="${scriptDir}?id=${id}">read</a>` + time; } // with highlight*/


var usernameStatusPrint = "";
if (usernameStatus == "on"){
usernameStatusPrint = `<div class="padding2List bold capitalize"><a class="notUnderline" href="${keepConfig['confD']}pages/about/"><img class="ico" src="${keepConfig['confD']}img/logo.png" width="20" alt="logo">${username}</a></div>`
}

return `

<!-- post -->
<div class="` + otherClass + ` keepPost bgList border3List borderRadius2 padding3 notUnderline" id="` + id + `">

${usernameStatusPrint}

<div class="keepPostContent pre padding2List">` + lPost + `</div>

<div class=" ${keepPostFooter} clear small notUnderline">
<div class="keepTagList tLeft left">` + tag + `</div>
<div class="keepTagList tRight right">` + rightFooter + time + `</div>
</div>

</div>
<!-- // end post -->

`;


}






var checkText = true;

// light 1 highlightText
function highlightText(text, targetOption, subQforLight){

var play = "";

if (embedStatus == "semi"&&mode != "id"&&mode != "idList"&&mode != "random"){
embedStatus = 'off';
}

//text = decodeURIComponent(text); // error sometimes
text = clearText(text);

// if code
text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");

let text2 = '';
let embed = '';
let embed2 = '';

text = [...text];

let forSplit = [
//delme',', "*", "{", "}", "(", ")", "[", "[", "•", "«", "»", "☞", " "
 "*", "{", "}", "(", ")", "[", "[", "•", "«", "»", "☞", " ", `
`, "\r", "\n", "\r\n",
]
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if (item == item2){
item =  confSymbolForSplit + item + confSymbolForSplit;
}
});
text2 += item;
});
//text2 = text2.replaceAll("http", confSymbolForSplit + "http");

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(confSymbolForSplit);
myArray.forEach((item) => {
//text += item.hostname;
//if (item.search("http") != -1){ 
/*if (item[0]+item[1]+item[2]+item[3] == 'http'&&item.search("http|://") != -1){ 
host = new URL(item).hostname; // stop working when error
}
*/

let checkEmbedEmpty = item.split('/');
//if (item.split('/').length > 4){
if (checkEmbedEmpty[3]){
host = item.split('/');

if (host[3] != undefined){

checkText = false;

switch (host[2]) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":

if ((item).indexOf((`v=`)) >= 0){
play = item.split('v=').pop();
if (play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if ((item).indexOf((`list`)) >= 0){
play = item.split('list=');
play = play[1];
if (play != ''){
embed = `<iframe width="${w}" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=${play}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if ((item).indexOf((`featured`)) >= 0||(item).indexOf((`@`)) >= 0){
play = item.split('/');
play = play[3];
if (play != ''){
play = play.replace("@", "");
embed = `<iframe width="${w}" height="315" src="https://www.youtube.com/embed/?listType=user_uploads&list=${play}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}
break;


case 'www.behance.net':
if (item.indexOf((`/gallery/`)) != -1){
play = item.split('/');
embed = `<iframe src="https://www.behance.net/embed/project/` + play[play.length - 2] + `?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>`;
//embedServiceList += 'behance';
}
break;


case "x.com":
case "mobile.x.com":
case "twitter.com":
case "mobile.twitter.com":

item = item.replace("x.com", 'twitter.com'); // fix

embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${confThemeEmbed}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
embedServiceList += 'xcom';
embedServiceList += 'twitter';
break;


case "substack.com":
embed = `<div class="substack-post-embed"><a data-comment-link href="${item}">Read on Substack</a></div><!--<script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'substack';
break;


case "www.threads.net":
embed = `<blockquote class="text-post-media" data-text-post-permalink="${item}" data-text-post-version="0"></blockquote><!--<script async src="https://www.threads.net/embed.js"></script>-->`;
embedServiceList += 'threads';
break;


case "www.reddit.com":
if (item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<blockquote class="reddit-embed-bq" style="height:auto" data-embed-theme="${confThemeEmbed}"><a href="${play}"><no value=""></no></a></blockquote><!--<script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>-->`;
embedServiceList += 'reddit';
}
break;


case "soundcloud.com":
if (item.split('/').length >= 5){
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
embedServiceList += 'soundcloud';
}
break;


case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
embed = `<!--<iframe src="https://tunein.com/embed/player/${play}/?autoplay=false&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>--><!-- ban if many by Clouflare -->`;
embedServiceList += 'tunein';
break;


case "codepen.io":
if (item.split('/').length >= 6){
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${confThemeEmbed}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
embedServiceList += 'codepen';
}
break;


case "giphy.com":
if (item.indexOf(`gifs`) != -1){
play = item.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://giphy.com/embed/${play}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/${item}">via GIPHY</a></p>`;
embedServiceList += 'giphy';
}
break;


case "archive.org":
if (item.search(`/details/`) != -1) {
play = item.split('/');
play = play[play.length - 1];
h = h + h;
embed = `<iframe src="https://archive.org/embed/${play}" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
embedServiceList += 'archive';
}
break;


case "www.instagram.com":
case "instagram.com":
play = "";
if (item.indexOf("/p/") != -1){
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
embed = `<style>iframe.instagram-media {
    max-width: 100% !important;
    width: 100% !important;
    min-width: auto !important;
}</style><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${play}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><!--<script async src="//www.instagram.com/embed.js"></script>-->`;
embedServiceList += 'instagram';
}
break;


case "open.spotify.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if (play[play.length - 2] == 'playlist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

if (play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

if (play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

if (play[play.length - 2] == 'episode') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/${play2}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

if (play[play.length - 2] == 'show') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/${play2}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

embedServiceList += 'spotify';
break;


case 'deezer.com':
case 'www.deezer.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if (play[play.length - 2] == 'album') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/album/${play2}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if (play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/track/${play2}" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if (play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/artist/${play2}/top_tracks" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}
embedServiceList += 'deezer';
break;


case 'pinterest.com':
case 'www.pinterest.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');


if (play[play.length - 3] == 'pin') {
play2 = play[play.length - 2];
embed = `

<a data-pin-do="embedPin" data-pin-width="large" href="https://www.pinterest.com/pin/${play2}/"></a>`;
}

if (play[play.length - 3] == 'www.pinterest.com') {
play2 = play[play.length - 2];
embed = `

<a data-pin-do="embedUser" data-pin-board-width="540" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play2}/"></a>`;
}

if (play[play.length - 3] != 'www.pinterest.com'&&play[play.length - 3] != 'pin') {
play2 = play[play.length - 2];
play3 = play[play.length - 3];

embed = `

<a data-pin-do="embedBoard" data-pin-board-width="540" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play3}/${play2}/"></a>`;
}

embedServiceList += 'pinterest';
break;


case 'imgur.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${play}"><a href="//imgur.com/a/${play}">${item}</a></blockquote><!--<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'imgur';
break;


case 'dailymotion.com':
case 'www.dailymotion.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}" allowfullscreen allow="autoplay"></iframe>`;
embedServiceList += 'dailymotion';
break;


case 'www.twitch.tv':
play = item.split('/');
play = play[play.length - 1];
if (play == ''){ play = play[play.length - 2]; }
embed = `<iframe src="https://embed.twitch.tv?channel=${play}&layout=video&referrer=some-referer-url&autoplay=false&parent=${(location.hostname)}" allowfullscreen="" scrolling="no" frameborder="0" height="${h}"></iframe>`;
embedServiceList += 'twitch';
break;


case "facebook.com":
case "www.facebook.com":
embed = `<style>.fb-post{ width: 100%; background: whitesmoke;  }
.fb-post>span { max-width:100%; }</style><script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script> <div style="" class="fb-post" data-small-header="true" data-href="${item}" data-width="500" data-adapt-container-width="true"></div>`;
embedServiceList += 'facebook';
break;




//default:
}

}
}

/*
if (item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border" src="${item}" width=""></a>`
}*/

if (embedStatus == 'on'){
//https://stackoverflow.com/questions/2390789/how-to-replace-all-dots-in-a-string-using-javascript
itemCheck = item.replaceAll(/\./g, confSymbolForSplit);

if (itemCheck.search(`${confSymbolForSplit}mp4|${confSymbolForSplit}webm|${confSymbolForSplit}avi`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video height="${h}" controls style="width:100%"><source src="${item}" type="video/mp4">
<source src="${item}" type="video/ogg">Your browser does not support HTML5 video.</video>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}mp3|${confSymbolForSplit}m3u`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}ogg`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}wav`) != -1&&itemCheck.search('/') != -1) {

embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/wav">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}mpd`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video data-dashjs-player src="${play}" controls>player: <a href="https://github.com/Dash-Industry-Forum/dash.js">dash.js</a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
embedServiceList += 'mpd';
}

if (itemCheck.search(
`${confSymbolForSplit}jpg|${confSymbolForSplit}svg|${confSymbolForSplit}jpeg|${confSymbolForSplit}png|${confSymbolForSplit}gif|${confSymbolForSplit}img|${confSymbolForSplit}ico`) != -1&&itemCheck.search('/') != -1&&itemCheck.search('/') != -1) {
//echo 'test';
embed2 = `
<a href="${item}"><img class="img" src="${item}" alt="img"></a>`;
}





if (item[0] != ''&&item[1] != ''&&item[2] != ''){
if (item.indexOf(".htm") != -1&&item.indexOf("./") != -1&&item.indexOf("http") == -1||
item.indexOf("/") != -1&&item.indexOf("index.htm") != -1/*||item[0] == "/"&&item[1] != "/"&&item[2] != " "*/) {

item = fuMHideFileNameExt(item);

embed2 = `<iframe class="borderRadius2" width="${w}" height="400" src="${item}" title="iframe"></iframe>`;
}
}

}


var item222 = '';
//if (item.search("http") != -1){
if (item.slice(0, 4) == 'http'||item.search("http|://|www.") != -1||item[0] == "/"&&item[1] != "/"&&item[1] != " "||item[0] == "."&&item[1] == "/"&&item[2] != " "){

item = fuMHideFileNameExt(item);

if (embedStatus == 'on'&&host != undefined){

//delme item = item.trim();

if (targetOption == 'blank'){
item222 = `<a class="brand insertIcon" target="_blank" href="${item}">${item}</a>`;
} else {
item222 = `<a class="brand insertIcon" href="${item}">${item}</a>`;
}

} else {

if (targetOption == 'blank'){
item222 = `<a class="brand insertIcon" target="_blank" href="${item}">${item}</a>`;
} else {
item222 = `<a class="brand insertIcon" href="${item}">${item}</a>`;
}

}
}


if (
item[0] == '/'&&item.indexOf(".htm") != -1||item.indexOf("./") != -1&&item.indexOf(".htm") != -1&&item.indexOf("http") == -1||
item[0] == '/'&&item.indexOf(".php") != -1||item.indexOf("./") != -1&&item.indexOf(".php") != -1&&item.indexOf("http") == -1/*||
item[0] == "/"&&item[1] != "/"&&item[2] != " "*/
){

item = fuMHideFileNameExt(item);

if (targetOption == 'blank'){
item = `<a class="brand insertIcon" target="_blank" href="${item}">${item}</a>`;
} else {
item = `<a class="brand insertIcon" href="${item}">${item}</a>`;
}

}


//add hashtag
if (item[0] == '#'){
item222 = item.replaceAll(/#/g, "");
item222 = `<a class="brand op" href="${scriptDir}?tag=${item222}">#${item222}</a>`;
}

if (item[0] == '@'){
item222 = `<a class="brand op" href="${scriptDir}?q=${item}">${item}</a>`;
}

/*if (checkText == true){
if (q != ''&&q != null){
//item = item.toLowerCase().replaceAll(q.toLowerCase(), `<span style="border-bottom: 3px solid  var(--orange);">${q}</span>`);
//https://stackoverflow.com/questions/7313395/case-insensitive-replace-all
var q33 = (q).split(" ");
q33.forEach((element) => {
if ((item.toLowerCase()).indexOf((element.toLowerCase())) >= 0){ item = `<span style="border-bottom: 3px solid  var(--orange);">${item}</span>`; }
});
}*/

var countHl = 0;
if (subQforLight != ''&&subQforLight != null&&subQforLight != undefined){
var q3388 = String(subQforLight).split(confSymbolForSplit);
q3388.forEach((element3333) => {
element3333 = (element3333.trim()).toLowerCase();
if (element3333.trim() != ''&&item.trim() != ''){
if (countHl == 0&&String(item.toLowerCase()).indexOf(element3333.toLowerCase()) != -1){
if (item222 != ''){
item222 = `<span class="bold borderBottomOrange">${item222}</span>`;
} else {
item222 = `<span class="bold borderBottomOrange">${item}</span>`;
}

if (item222 == ''){

}
countHl++;
}
}
});
}
if (conf["confDataCollection"] == "allow embed"){ conf["confDataCollection"] = "on"; } 
if (conf["confDataCollection"] != "on"&&embed != ""){
embed = `

${conf["confEmbedBlockMsg"]}`;
}


if (item222 != ''){ item = item222; }
text += item;

// multi embed
if (multiEmbedStatus == 'on'&&embedStatus == 'on'){
text += embed + embed2;
embed = '';
embed2 = '';
}

// multi embed end


});

// single embed
if (multiEmbedStatus != 'on'&&embedStatus == 'on'){ text += embed+embed2; }


return text;
}









// light 2 highlightText
// highlight Text2 with autoplay when pressed id (date)
function highlightText2(text, targetOption){
//text = decodeURIComponent(text); // error sometimes

var play = "";
if (embedStatus == "semi"){
if (mode == "id"||mode == "idList"||mode == "random"){ embedStatus = "on"; }
}

text = clearText(text);

var idGo = id;
if (getP2 != ''){ idgo = getP2 + 1; }

// if code

text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");

let text2 = '';
let embed = '';
let embed2 = '';

text = [...text];

let forSplit = [
//delme',', "*", "{", "}", "(", ")", "[", "[", "•", "«", "»", "☞", " "
 "*", "{", "}", "(", ")", "[", "[", "•", "«", "»", "☞", " ", `
`, "\r", "\n", "\r\n",
]
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if (item == item2){
item =  confSymbolForSplit + item + confSymbolForSplit;
}
});
text2 += item;
});
//text2 = text2.replaceAll("http", confSymbolForSplit + "http");

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(confSymbolForSplit);
myArray.forEach((item) => {
//text += item.hostname;
//if (item.search("http") != -1){ 
/*if (item[0]+item[1]+item[2]+item[3] == 'http'&&item.search("http|://") != -1){ 
host = new URL(item).hostname; // stop working when error
}
*/

let checkEmbedEmpty = item.split('/');
//if (item.split('/').length > 4){
if (checkEmbedEmpty[3]){
host = item.split('/');
if (host[3] != undefined){
switch (host[2]) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":

if ((item).indexOf((`v=`)) >= 0){
play = item.split('v=').pop();
if (play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}?&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if ((item).indexOf((`list`)) >= 0){
play = item.split('list=');
play = play[1];
if (play != ''){
embed = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if ((item).indexOf((`featured`)) >= 0||(item).indexOf((`@`)) >= 0){
play = item.split('/');
play = play[3];
if (play != ''){
play = play.replace("@", "");
embed = `<iframe width="${w}" height="315" src="https://www.youtube.com/embed/?listType=user_uploads&list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}
break;


case 'www.behance.net':
if (item.indexOf((`/gallery/`)) != -1){
play = item.split('/');
embed = `<iframe src="https://www.behance.net/embed/project/` + play[play.length - 2] + `?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>`;
//embedServiceList += 'behance';
}
break;


case "x.com":
case "mobile.x.com":
case "twitter.com":
case "mobile.twitter.com":

item = item.replace("x.com", 'twitter.com'); // fix

embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${confThemeEmbed}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
embedServiceList += 'xcom';
embedServiceList += 'twitter';
break;


case "substack.com":
embed = `<div class="substack-post-embed"><a data-comment-link href="${item}">Read on Substack</a></div><!--<script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'substack';
break;


case "www.threads.net":
embed = `<blockquote class="text-post-media" data-text-post-permalink="${item}" data-text-post-version="0"></blockquote><!--<script async src="https://www.threads.net/embed.js"></script>-->`;
embedServiceList += 'threads';
break;


case "www.reddit.com":
if (item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<blockquote class="reddit-embed-bq" style="height:auto" data-embed-theme="${confThemeEmbed}"><a href="${play}"><no value=""></no></a></blockquote><!--<script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>-->`;
embedServiceList += 'reddit';
}
break;


case "soundcloud.com":
if (item.split('/').length >= 5){
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
embedServiceList += 'soundcloud';
}
break;


case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
if (confDevice == 'mobile'){
embed = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=true&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
} else {
embed = `<iframe width="${w}" height="300" src="${item}"></iframe>`;
}
embedServiceList += 'tunein';
break;


case "codepen.io":
if (item.split('/').length >= 6){
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${confThemeEmbed}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
embedServiceList += 'codepen';
}
break;


case "giphy.com":
if (item.indexOf(`gifs`) != -1){
play = item.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://giphy.com/embed/${play}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/${item}">via GIPHY</a></p>`;
embedServiceList += 'giphy';
}
break;


case "archive.org":
if (item.search(`/details/`) != -1) {
play = item.split('/');
play = play[play.length - 1];
h = h + h;
embed = `<iframe src="https://archive.org/embed/${play}" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
embedServiceList += 'archive';
}
break;


case "www.instagram.com":
case "instagram.com":
play = "";
if (item.indexOf("/p/") != -1){
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
embed = `<style>iframe.instagram-media {
    max-width: 100% !important;
    width: 100% !important;
    min-width: auto !important;
}</style><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${play}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><!--<script async src="//www.instagram.com/embed.js"></script>-->`;
embedServiceList += 'instagram';
}
break;


case "open.spotify.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if (play[play.length - 2] == 'playlist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

if (play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

if (play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

if (play[play.length - 2] == 'episode') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/${play2}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

if (play[play.length - 2] == 'show') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/${play2}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

embedServiceList += 'spotify';
break;


case 'deezer.com':
case 'www.deezer.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if (play[play.length - 2] == 'album') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/album/${play2}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if (play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/track/${play2}" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if (play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${confThemeEmbed}/artist/${play2}/top_tracks" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}
embedServiceList += 'deezer';
break;


case 'pinterest.com':
case 'www.pinterest.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');


if (play[play.length - 3] == 'pin') {
play2 = play[play.length - 2];

embed = `

<a data-pin-do="embedPin" data-pin-width="large" href="https://www.pinterest.com/pin/${play2}/"></a>`;
}

if (play[play.length - 3] == 'www.pinterest.com') {
play2 = play[play.length - 2];
embed = `

<a data-pin-do="embedUser" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play2}/"></a>`;
}

if (play[play.length - 3] != 'www.pinterest.com'&&play[play.length - 3] != 'pin') {
play2 = play[play.length - 2];
play3 = play[play.length - 3];

embed = `

<a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play3}/${play2}/"></a>`;
}

embedServiceList += 'pinterest';
break;


case 'imgur.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${play}"><a href="//imgur.com/a/${play}">${item}</a></blockquote><!--<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'imgur';
break;


case 'dailymotion.com':
case 'www.dailymotion.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
embedServiceList += 'dailymotion';
break;


case 'www.twitch.tv':
play = item.split('/');
play = play[play.length - 1];
if (play == ''){ play = play[play.length - 2]; }
embed = `<iframe src="https://embed.twitch.tv?channel=${play}&layout=video&referrer=some-referer-url&parent=${(location.hostname)}" allowfullscreen="" scrolling="no" frameborder="0" height="${h}"></iframe>`;
embedServiceList += 'twitch';
break;


case "facebook.com":
case "www.facebook.com":
embed = `<style>.fb-post{ width: 100%; background: whitesmoke;  }
.fb-post>span { max-width:100%; }</style><script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script> <div style="" class="fb-post" data-small-header="true" data-href="${item}" data-width="500" data-adapt-container-width="true"></div>`;
embedServiceList += 'facebook';
break;

//default:

}

}
}

/*
if (item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border3" src="${item}" width=""></a>`
}*/

if (embedStatus == 'on'){

itemCheck = item.replaceAll(/\./g, confSymbolForSplit);

if (itemCheck.search(`${confSymbolForSplit}mp4|${confSymbolForSplit}webm|${confSymbolForSplit}avi`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video height="${h}" controls autoplay style="width:100%"><source src="${item}" type="video/mp4">
<source src="${item}" type="video/ogg">Your browser does not support HTML5 video.</video>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}m3u8`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<iframe src="https://www.hlsplayer.org/play?url=${item}" style="width: 100%; height: ${h};" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>player: <a href="https://www.hlsplayer.org/">www.hlsplayer.org</a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}mpd`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video data-dashjs-player autoplay src="${play}" controls>player: <a href="https://github.com/Dash-Industry-Forum/dash.js">dash.js</a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
embedServiceList += 'mpd';
}



if (itemCheck.search(`${confSymbolForSplit}mp3|${confSymbolForSplit}m3u`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}ogg`) != -1&&itemCheck.search('/') != -1) {
checkText = false;

embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}wav`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/wav">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if (itemCheck.search(`${confSymbolForSplit}svg|${confSymbolForSplit}jpg|${confSymbolForSplit}jpeg|${confSymbolForSplit}png|${confSymbolForSplit}gif|${confSymbolForSplit}img|${confSymbolForSplit}ico`) != -1&&itemCheck.search('/') != -1) {
//echo 'test';
embed2 = `
<a href="${item}"><img class="img" src="${item}" alt="img"></a>`;
}

if (item.indexOf(".html") != -1&&item.indexOf("./") != -1&&item.indexOf("http") == -1||item.indexOf("/") != -1&&item.indexOf("index.htm") != -1/*||item[0] == "/"&&item[1] != "/"&&item[2] != " "*/) {

item = fuMHideFileNameExt(item);

embed2 = `<iframe class="borderRadius2" width="${w}" height="400" src="${item}" title="iframe"></iframe>`;
}



}





//if (item.search("http") != -1){
if (item.slice(0, 4) == 'http'||item.search("http|://|www.") != -1||item[0] == "/"&&item[1] != "/"&&item[1] != " "||item[0] == "."&&item[1] == "/"&&item[2] != " "){

if (embedStatus == 'on'&&host != undefined){

//delme item = item.trim();
item = fuMHideFileNameExt(item);

if (targetOption == 'blank'){
item = `<a class="brand insertIcon" target="_blank" href="${item}">${item}</a>`;
} else {
item = `<a class="brand insertIcon" href="${item}">${item}</a>`;
}

} else {
if (targetOption == 'blank'){
item = `<a class="brand insertIcon" target="_blank" href="${item}">${item}</a>`;
} else {
item = `<a class="brand insertIcon" href="${item}">${item}</a>`;
}

}

}


//add hashtag
if (item[0] == '#'){
item = item.replaceAll(/#/g, "");
item = `<a class="brand op" href="${scriptDir}?tag=${item}">#${item}</a>`;
}

if (item[0] == '@'){
item = `<a class="brand op" href="${scriptDir}?q=${item}">${item}</a>`;
}

text += item;

if (conf["confDataCollection"] == "allow embed"){ conf["confDataCollection"] = "on"; } 
if (conf["confDataCollection"] != "on"&&embed != ""){
embed = `

${conf["confEmbedBlockMsg"]}`;
}

// multi embed
if (multiEmbedStatus == 'on'&&embedStatus == 'on'){
text += embed + embed2;
embed = '';
embed2 = '';
}

// multi embed end


});

// single embed
if (multiEmbedStatus != 'on'&&embedStatus == 'on'){ text += embed + embed2; }



return text;
}






// Time  post date
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

// https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates
function fuPostTime(p){

const  date_future = Date.now();
const  date_now = new Date(p * 1000);


// get total seconds between the times
var delta = Math.abs(date_future - date_now) / 1000;

var year = Math.floor(delta / 31557600);
delta -= year * 31557600;

var month = Math.floor(delta / 2629800);
delta -= month * 2629800;

var week = Math.floor(delta / 604800);
delta -= week * 604800;

// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

// what's left is seconds
var seconds = delta % 60;  // in theory the modulus is not required

if (year > 0){
time = year + ' year ';
} else if (month > 0){
time = month + ' month ';
} else if (week > 0){
time = week + ' week ';
} else if (days > 0){
time = days + ' day ';
} else if (hours > 0){
time = hours + ' hour ';
} else if (minutes > 0) { time = minutes + ' minute '; }
else { time = checkTime(Math.floor(seconds)) + ' second '; }

time = time + ' ago';

if (p == 0||isNaN(p) == true||p == ''){ time = p; }
return time;
//document.getElementById("time").innerHTML = '&nbsp;' + time + '&nbsp;';
}


fuPostTime();

var tmp = setInterval(fuPostTime, 1000);





// navigation navbar
function keepNav(mode){


switch (mode){
case 'list':
case 'search':
var prev = Number(Math.floor(getP - postLimit)); //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
var next = Number(Math.floor(getP + postLimit));



break;

default:
var prev = Number(Math.floor(getP - 1)); //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
var next = Number(Math.floor(getP + 1));
}

if (mode != 'search'){ // if not search
total = Number(jsonVar.length);
}

let total2 = total;

if (postLimit >= total){ next = total; total2 = total; }
if (prev <= 0){ prev = 0; }

if (next >= total){ next = total  - postLimit; }

var navOption2 = '';
var navOption3 = '';

let nav2Print = '';
var navMode = 'p';

switch (mode){

case 'search':
navMode = 'p3';

navOption3 = `<input id="navOptionQ" type="hidden" name="q" value="">`;
navOption2 = 'q=' + encodeURIComponent(q) + "&";
nav2Print = `
<div class="tRight">
<!--<a class="op border3List button light" href="?id=&dmode=${dMode}">random</a>-->
</div>
<!--<a class="op border3 borderRadius2 button light" style="width: 49%;" href="#" onclick="history.back();return false;">back</a>-->
`;
break;

case 'list':
case '':
navMode = 'p';

nav2Print = `
<div class="tRight"></div>
`;

break;

default:
navMode = 'p2';


nav2Print = `

<div class="margin2"></div>

<div class="block right tRight zero">
<div class="iGagList">
<a class="op border3List borderRadius2 button light" href="#" onclick="history.back();return false;">back</a>
<a class="op border3List borderRadius2 button light" href="?p=` + Math.floor(getP) + `">list</a>
</div>
</div>

`;
}



if (q == null||q == 'null'){ q = ''; }

let qGo33 = (fuMClearText2(q));

var pringInputRange = '';
if (confDevice != 'mobile'){
pringInputRange = `
<form id="keepSlider">
${navOption3}
<input name="${navMode}" id="rangeinput" class="slider" value="${getP}" type="range" min="0" max="${total2}" step="${postLimit}" onmouseup="rangeRedirect('${qGo33}');" ontouchend="rangeRedirect('${qGo33}');">
</form>
<div class="padding2List"></div>
`;
}
//onmouseup="this.form.submit();" ontouchend="this.form.submit();"


// hide button if end
var hideButtonClass = '';
var hideButtonClass2 = '';
if (mode == 'search'){
if (getP3 >= total - postLimit){ hideButtonClass = 'op2 cursor-not-allowed'; }
if (getP3 <= 0){ hideButtonClass2 = 'op2 cursor-not-allowed'; }
}
if (mode == 'list'){
if (getP + postLimit >= total){ hideButtonClass = 'op2 cursor-not-allowed'; }
if (getP <= 0){ hideButtonClass2 = 'op2 cursor-not-allowed'; }
}

return `

<style>

.galleryKeepNav {
display: grid;
grid-template-columns: 1fr minmax(70px, 20%) 1fr;
grid-template-columns: 1fr 1fr;
grid-gap: 1px;
justify-content: center;
}

@media(max-width: 240px) {
.galleryKeepNav { grid-template-columns: 1fr; }
}

</style>



<div class="block padding2"></div>

<nav>
${pringInputRange}

<div class="galleryKeepNav">
<a class="${hideButtonClass2} border3 button light2 borderRadius2" href="?${navOption2}${navMode}=${prev}&dmode=${dMode}">&#8592;</a>
<!--<div class="button border3 op xSmall bg borderRadius2">${navMode}: ` + Math.floor(getP / postLimit) + `</div>-->
<a class="${hideButtonClass} border3 button light2 borderRadius2" href="?${navOption2}${navMode}=${next}&dmode=${dMode}">&#8594;</a>
</div>

${nav2Print}
</nav>

<div class="block padding2"></div>

`;
}
// navigation navbar






// for embed 
if (
embedStatus == 'on'&&conf["confDataCollection"] == "on"||
embedStatus == 'on'&&conf["confDataCollection"] == "allow embed"
){

if (embedServiceList.indexOf('xcom') != -1||embedServiceList.indexOf('twitter') != -1) {
var script = document.createElement('script');
script.type='text/javascript';
//script.async = true;
script.charset = 'utf-8';
script.src = 'https://platform.twitter.com/widgets.js';      
document.getElementsByTagName('head')[0].appendChild(script);
}

if (embedServiceList.indexOf('substack') != -1||embedServiceList.indexOf('twitter') != -1) {
var script = document.createElement('script');
script.type='text/javascript';
//script.async = true;
script.charset = 'utf-8';
script.src = 'https://substack.com/embedjs/embed.js';      
document.getElementsByTagName('head')[0].appendChild(script);
}

if (embedServiceList.indexOf('threads') != -1) {
var script = document.createElement('script');
script.type='text/javascript';
//script.async = true;
script.charset = 'utf-8';
script.src = 'https://www.threads.net/embed.js';      
document.getElementsByTagName('head')[0].appendChild(script);
}

if (embedServiceList.indexOf('codepen') != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if (embedServiceList.indexOf('instagram') != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = '//www.instagram.com/embed.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if (embedServiceList.indexOf('imgur') != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = '//s.imgur.com/min/embed.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if (embedServiceList.indexOf('pinterest') != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
script2.src = '//assets.pinterest.com/js/pinit.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if (embedServiceList.indexOf('mpd') != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
script2.src = 'https://cdn.dashjs.org/latest/dash.all.min.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}


if (embedServiceList.indexOf('reddit') != -1) {
var script2 = document.createElement('script');
script2.crossorigin = "anonymous";
script2.type='text/javascript';
//script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
script2.src = 'https://embed.reddit.com/widgets.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

}






// start random url from search
let lFoundQUrlListTmp = "";

let lFoundQUrlRandom = lFoundQUrlList[Math.floor(Math.random() * lFoundQUrlList.length)];
//console.log(lFoundQUrlRandom);
if (lFoundQUrlRandom != undefined&&('' + window.location + '').search("#StopRedirect") == -1){
if (q2 == 'r'){
if (lFoundQUrlRandom != ''){
/*sTimeRedir[2] = 1200;
comMessagePrint = `random URL: `+ sTimeRedir[2] / 1000 +` sec.`;*/
//window.location.href = '/projects/redirects-25/?rUrl=' + lFoundQUrlRandom;
window.location.href = lFoundQUrlRandom;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
window.location.href = window.location.href + '#StopRedirect'; 
}
//console.log(postUrl);
}
// end random url from search
}



if (q != null&&document.getElementById("inputKeep") != null){
document.getElementById("inputKeep").value = q;
}

if (q != null&&document.getElementById("navOptionQ") != null){
document.getElementById("navOptionQ").value = q;
}


}
// end main all end keep (end all)







function hlwClassAdd(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("highlight2");
i++;
}
}


function hlwClassRemove(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("highlight2");
i++;
}
}



function clearText(text){

//https://stackoverflow.com/questions/2774471/what-is-c2-a0-in-mime-encoded-quoted-printable-text
text = text.replaceAll(/%C2%A0/g, " "); // non-breaking space.
text = text.replaceAll(/ /g, " "); // non-breaking space.

return text;
}


// var for if without main.js

//https://stackoverflow.com/questions/5409641/set-a-variable-if-undefined-in-javascript
// if main index js not exit
if (typeof lang === 'undefined') { var lang = 'en'; }



if (typeof confDevice === 'undefined') {
var confDevice = '';
if (navigator.userAgent.search("iPhone|Android|Opera Mini|Mobile|Lumia|Phone") != -1){ confDevice = 'mobile';  }
if (navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ confDevice = 'tv';  }
if (confDevice == ''){ confDevice = 'pc'; }
}


function rangeRedirect(q){
if (document.getElementById("rangeinput") != null){
let rangeRedirectUrl = "?" + document.getElementById("rangeinput").name + "=" + document.getElementById("rangeinput").value;
if (q != ''){
rangeRedirectUrl += "&q=" + q
}
window.location.replace(rangeRedirectUrl,);
}
}



/*
//https://stackoverflow.com/questions/22697936/binary-search-in-javascript
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}*/


//https://stackoverflow.com/questions/9206013/javascript-list-js-implement-a-fuzzy-search
function fuzzySearch(text, q){

String.prototype.fuzzy = function (s) {
    var hay = this.toLowerCase(), i = 0, n = -1, l;
    s = s.toLowerCase();
    for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
};

return (text).fuzzy(q); 
}





