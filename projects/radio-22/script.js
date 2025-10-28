// Radio stations (random, embed) v.1.3.3

if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
function randomRadio(printId, jsonVar){

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var embedServiceList = '';

var count = 0;
var scriptDir = '';
var printTagList = '';
var tagListLimit = conf["confTagListLimit"];
var checkNotFound = '';
//alert(jsonVar[getRandomInt(jsonVar.length)]);
//alert(jsonVar.length);

var url = new URL(window.location);


var q = url.searchParams.get("q");
if(q != null&&q != ""){
q = q.trim();
localStorage.setItem('randomRadioQ', q);

//let titleTmp = document.title;
let titleTmp = document.getElementsByTagName('title')[0].text;
document.getElementsByTagName('title')[0].innerHTML = q + ' - ' + titleTmp;

}



var tag = url.searchParams.get("tag");
if(tag != null){
tag = tag.trim();
}



if(q == null){ q = localStorage.getItem('randomRadioQ'); }
if(q == null) { q = '#radio'; tag = q; }
var q2 = q;




var arrListForRandom = [];
var i = 0;

// random id tag, q->array->random
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
printTagList += ' ' + postTag + ' ';

let qSearch = "";
if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = q2;
qSearch = String(qSearch).toLowerCase();
}



// if tag
//if(qSearch[0] == '#'){}
qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ' + postUrl).toLowerCase();
/*if(qSearch[0] == '#'){ qData = qData.replaceAll(/,/g, ' '); } */
if((qData).indexOf((qSearch)) != -1){
arrListForRandom.push(key);
i++;
total = i;
comMessagePrint = `${q2} ${i}`;
/*document.getElementsByTagName('title')[0].innerHTML = `Random Radio ${q2}`;
document.getElementsByTagName('title')[0].innerHTML += ' | '+domainNameToTitle;*/
}
});

if(arrListForRandom.length > 0){
getP2 = Math.floor(Math.random() * arrListForRandom.length);
id = arrListForRandom[getP2];
checkNotFound = '';
}else{
comMessagePrint = 'not found';
//id = getRandomInt(jsonVar.length);
//comMessagePrint += '<span class=""> random id: '+id+'</span>';
document.getElementById(printId).innerHTML = `
<div class="block padding2 margin2 tCenter"><span id="msg2"></span></div>
`;
document.getElementById('msg2').innerText = `${comMessagePrint}`;
checkNotFound = 'Not Found';
}



if(checkNotFound == ''){
//var id = getRandomInt(jsonVar.length);

var tmp = document.createElement ('a');
tmp.href   = jsonVar[id]['url'];
var host = tmp.hostname;

var playSource = '';
if(jsonVar[id]['text2'] != ''){
if((jsonVar[id]['text2'].toLowerCase()).indexOf((q2.toLowerCase())) != -1){
playSource = `<span class="block padding2List">play source: <a class="brand borderBottomOrange"  href="${jsonVar[id]['text2']}">${jsonVar[id]['text2']}</a></span>`;
}else{
playSource = `<span class="block padding2List">play source: <a class="brand"  href="${jsonVar[id]['text2']}">${jsonVar[id]['text2']}</a></span>`;
}
}
var play = highlightText2('', '');
var post = `${highlightText2(jsonVar[id]['text'] + ' ' + jsonVar[id]['url'], '')}`;

var tag = highlightText2(' '+jsonVar[id]['tag'], '');

document.getElementById(printId).innerHTML = `
<div class="block padding2 margin2 tCenter"><span id="msg2"></span></div>

<div class="wrapper notUnderline">


<div class="light border borderRadius2">
<!-- post -->
<div class="padding3" id="${jsonVar[id]['id']}">
<span class="pre padding2List">${post} ${play} ${playSource}</span>
<div class="keepPostFooter">
<span class="keepTaglist tLeft">${tag}</span>
</div>
</div>

<a class="button block tCenter padding2 submit border borderRadius2 margin2" onclick="fuMReload();return false;" href="#">random</a>
<!-- // post -->

<!--<div class="small tRight block margin2 padding2 op">total: ${jsonVar.length}</div>-->
</div>


</div>
`;

document.getElementById('msg2').innerText = `${comMessagePrint}`;

}

var multiEmbedStatus = 'off';


// fucntion tagList from Blog
// from blog
// 2
// highlight Text2 with autoplay when pressed id (date)
function highlightText2(text, hrefInOut){
//text = decodeURIComponent(text); // error sometimes

// if code


text = text.replace(/</g, "&lt;");
text = text.replace(/>/g, "&gt;");

var play = '';
let text2 = '';
let embed = '';
let embed2 = '';

let w = '100%';
let h = '190px'; 

text = [...text];
let forSplit = [`
`, " "
]
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if(item == item2){
item = item+conf["confSymbolForSplit"];
}
});
text2 += item;
});

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(conf["confSymbolForSplit"]);
myArray.forEach((item) => {
var cleanItem = item;
//text += item.hostname;
//if(item.search("http") != -1){ 
/*if(item[0]+item[1]+item[2]+item[3] == 'http'&&item.search("http|://") != -1){ 
var host = new URL(item).hostname; // stop working when error
}
*/

let checkEmbedEmpty = item.split('/');
//if(item.split('/').length > 4){
if(checkEmbedEmpty[3]){
var host = item.split('/');
if(count == 0){
if(host[3] != undefined){
switch (host[2]) {
case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
//if(conf['confDevice'] == 'mobile'){}
embed2 = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=true&background=${conf['confThemeEmbed']}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
//embed2 = `<iframe src="http://tunein.com/embed/player/${play}/?autoplay=true&background=${conf['confThemeEmbed']}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
break;

//default:



}

count++;
}
}
}

itemCheck = item.replaceAll(/\./g, conf["confSymbolForSplit"]);

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border" src="${item}" width=""></a>`
}*/

if(count == 0){

if(jsonVar[id]['text3'] == 'm3u8') {
play = jsonVar[id]['text2'];
embed2 = `<iframe src="https://www.hlsplayer.org/play?url=${play}" style="width: 100%; height: ${h};" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>player: <a class="brand" href="https://www.hlsplayer.org/">www.hlsplayer.org</a>`;
count++;
}

if(jsonVar[id]['text3'] == 'mpd') {
play = jsonVar[id]['text2'];
embed2 = `<video data-dashjs-player autoplay src="${play}" controls>
</video>player: <a href="https://github.com/Dash-Industry-Forum/dash.js">dash.js</a>`;
embedServiceList += 'mpd';
count++;
}


if(jsonVar[id]['text3'] == 'mp3'||jsonVar[id]['text3'] == 'aac'||jsonVar[id]['text3'] == 'mpeg') {
play = jsonVar[id]['text2'];
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${play}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
count++;
}

if(jsonVar[id]['text3'] == 'ogg') {
play = jsonVar[id]['text2'];
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${play}" type="audio/ogg">Your browser does not support the audio element.</audio>`;
count++;
}



if(jsonVar[id]['text3'] == 'iframe') {
play = jsonVar[id]['text2'];
embed2 = `<iframe width="${w}" height="360" src="${play}"></iframe>`;
count++;
}
/*if(item.search("tunein.com") == -1&&item.slice(0, 4) == 'http'&&item.search("http|://") != -1) {
embed2 = `<iframe width="${w}" height="340" src="${item}"></iframe>`;
}*/

}


//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://") != -1){
item = `<a class="brand" href="${item}">${item}</a>`;
}

//add tag
if(item[0] == '#'){

item = item.replaceAll(/#/g, "");
if(hrefInOut == 'out'){
/*item = `<a rel="nofollow" href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a class="brand keepTag" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}else{
item = `<a class="brand keepTag" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}
}


if(
(q2.toLowerCase()).indexOf((cleanItem.toLowerCase())) != -1||
(cleanItem.toLowerCase()).indexOf((q2.toLowerCase())) != -1
){
item = `<span class="borderBottomOrange">${item}</span> `;
}

text += item;


/*
// multi embed
if(multiEmbedStatus == 'on'&&embedStatus != 'off'){
text += embed+embed2;
embed = '';
embed2 = '';
}*/

// multi embed end


});
/*
// single embed
if(multiEmbedStatus != 'on'){ text += embed+embed2; }
*/


//return text;
return text + ' ' + embed + embed2;
}

document.getElementById(printId).innerHTML += `
<div class="center tCenter">
<div class="wrapper3 notUnderline">

<div class="margin2 padding2"></div>

` + fuTagCloud("NotFoundId", printTagList, q, "", "./") + `
</div>
</div>
`;


document.getElementById(printId).innerHTML +=  `
<div class="block padding2"></div>

<div id="form" class="wrapperSmall">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft xSmall">search and tag:</label>
<input id="input" class="padding2 op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="">

<input class="op padding2 small submit" style="min-height: 1px;" type="submit">

</form>

<br>
<span class="xSmall op block tCenter margin2 padding2">total: ${jsonVar.length}</span>
</div>
`;

document.getElementById('input').value = q;


if(embedServiceList.search(`mpd`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
//script2.src = '/js/dash.all.min.js';
script2.src = 'https://cdn.dashjs.org/latest/dash.all.min.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}





}
} else {
	function randomRadio(){
	}
}


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

