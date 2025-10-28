// TV (Playlists, embed) v.1.3.1

if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
function randomRadio(printId, jsonVar){

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var count = 0;
var scriptDir = '';
var printTagList = '';
var tagListLimit = conf["confTagListLimit"];
var embedServiceList = '';
//alert(jsonVar[getRandomInt(jsonVar.length)]);
//alert(jsonVar.length);
var checkNotFound = '';

var url = new URL(window.location);


var q = url.searchParams.get("q");
if(q != null&&q != ""){
q = q.trim();
localStorage.setItem('randomTvQ', q);

//let titleTmp = document.title;
let titleTmp = document.getElementsByTagName('title')[0].text;
document.getElementsByTagName('title')[0].innerHTML = q + ' - ' + titleTmp;
}


var tag = url.searchParams.get("tag");
if(tag != null){
tag = tag.trim();
}



if(q == null){ q = localStorage.getItem('randomTvQ'); }
if(q == null) { q = '#en'; tag = q; }
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
printTagList += ' ' + postTag + " ";

let qSearch = "";
if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = q2;
qSearch = String(qSearch).toLowerCase();
}


// if tag

qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + postUrl).toLowerCase();
/*if(qSearch[0] == '#'){ qData = qData.replaceAll(/,/g, ' '); } */
if((qData).indexOf((qSearch )) != -1){
arrListForRandom.push(key);

i++;
total = i;
comMessagePrint = `${q2} ${i}`;
/*document.getElementsByTagName('title')[0].innerHTML = `Random TV ${q2}`;
document.getElementsByTagName('title')[0].innerHTML += ' | '+domainNameToTitle;*/
}






});
if(arrListForRandom.length > 0){
getP2 = Math.floor(Math.random() * arrListForRandom.length);
id = arrListForRandom[getP2];
checkNotFound = ''; // clear
}else{
comMessagePrint = 'not found';
id = getRandomInt(jsonVar.length);
//comMessagePrint += '<span class=""> random id: '+id+'</span>';
document.getElementById(printId).innerHTML = `
<div class="block padding2 margin2 tCenter"><span id="msg2"></span></div>
`;
document.getElementById('msg2').innerText = `${comMessagePrint}`;
checkNotFound = 'Not Found';
}
//var id = getRandomInt(jsonVar.length);



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
playSource = `<span class="block padding2List">play source: <a class="brand" href="${jsonVar[id]['text2']}">${jsonVar[id]['text2']}</a></span>`;
}
}
var play = highlightText2('', '');
var post = `${highlightText2(jsonVar[id]['text'] + ' ' + jsonVar[id]['url'], '')}`;

var tag = highlightText2(' '+jsonVar[id]['tag'], '');

document.getElementById(printId).innerHTML = `

<div class="block padding2 margin2 tCenter"><span id="msg2"></span></div>

<div class="">
<div class="wrapper">


<div class="light border borderRadius2">

<!-- post -->
<div class="padding3" id="${jsonVar[id]['id']}">
<span class="pre padding2List">${post} ${play} ${playSource}</span>
<div class="notUnderline">
<span class="keepTaglist tLeft">${tag}</span>
<span class=""></span>
</div>
</div>

<a class="button tCenter padding2 submit block border borderRadius2 margin2" onclick="fuMReload();return false;" href="#">random</a>
<!-- // post -->

<!--<div class="small tRight block margin2 padding2 op">total: ${jsonVar.length}</div>-->
</div>


</div>
</div>

`;

document.getElementById('msg2').innerText = `${comMessagePrint}`;

}

var multiEmbedStatus = 'off';


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
item = item + conf["confSymbolForSplit"];
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

if(host[3] != undefined){

switch (host[2]) {



case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":

if((item).indexOf((`v=`)) != -1){
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}?&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`list`)) != -1){
play = item.split('list=');
play = play[1];
if(play != ''){
embed = `<iframe width="${w}" height="${h}" src="https://www.youtube-nocookie.com/embed/videoseries?list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`featured`)) != -1||(item).indexOf((`@`)) != -1){
play = item.split('/');
play = play[3];
if(play != ''){
play = play.replace("@", "");
embed = `<iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/?listType=user_uploads&list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

break;

case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
if(confDevice == 'mobile'){
embed = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=true&background=${confThemeEmbed}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
}else{
embed = `<iframe width="${w}" height="300" src="${item}"></iframe>`;
}
break;

//default:



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
}


if(jsonVar[id]['text3'] == 'mp3'||jsonVar[id]['text3'] == 'aac'||jsonVar[id]['text3'] == 'ogg') {
play = jsonVar[id]['text2'];
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg"><source src="${play}" type="audio/mpeg">Your browser does not support the audio element.</audio>`;

}

if(jsonVar[id]['text3'] == 'iframe') {
play = jsonVar[id]['text2'];
embed2 = `<iframe width="${w}" height="360" src="${play}"></iframe>`;
}
/*if(item.search("tunein.com") == -1&&item.slice(0, 4) == 'http'&&item.search("http|://") != -1) {
embed2 = `<iframe width="${w}" height="340" src="${item}"></iframe>`;
}*/

if(jsonVar[id]['text3'] == 'YouTubeChannelID') {
play = jsonVar[id]['text2'];
embed2 = `<iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/live_stream?channel=${play}&autoplay=1" frameborder="0" allowfullscreen></iframe>`;
}


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
item = `<a class="brand" rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}else{
item = `<a class="brand" rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}
}

if(
(q2.toLowerCase()).indexOf((cleanItem.toLowerCase())) != -1||
(cleanItem.toLowerCase()).indexOf((q2.toLowerCase())) != -1
){
item = `<span class="borderBottomOrange">${item}</span>`;
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

count++;
//return text;
return text+' '+embed+embed2;
}



document.getElementById(printId).innerHTML += `
<div class="tCenter">
<div class="wrapper3 notUnderline">

<div class="margin2 padding2"></div>

` + fuTagCloud("NotFoundId", printTagList, q, "", "./") + `
</div>
</div>
`;


document.getElementById(printId).innerHTML +=  `
<br>

<div id="form" class="wrapperSmall">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft xSmall">search and tag:</label>
<input id="input" class="padding2 op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="">

<input class="op padding2 xSmall submit" style="min-height: 1px;" type="submit">


</form>

<br>
<span class="xSmall op block tCenter margin2 padding2">total: ${jsonVar.length}</span>
</div>
`;

document.getElementById('input').value = q;









}
} else {
	function randomRadio(){}
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

