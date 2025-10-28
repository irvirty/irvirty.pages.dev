// Video (random, embed) v.1.2.2

if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
var jsonVar = videoJsonVar;

//https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



// start from radio
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
localStorage.setItem('randomVideoQ', q);

//let titleTmp = document.title;
let titleTmp = document.getElementsByTagName('title')[0].text;
document.getElementsByTagName('title')[0].innerHTML = q + ' - ' + titleTmp;
}


var tag = url.searchParams.get("tag");
if(tag != null){
tag = tag.trim();
}

if(q == null){ q = localStorage.getItem('randomVideoQ'); }
if(q == null) { q = '#video'; tag = '#video'; }
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
printTagList += (' ' + postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ').toLowerCase();

let qSearch = "";
if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = q2;
qSearch = String(qSearch).toLowerCase();
}


// if tag
qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postUrl + ' ' + postTag).toLowerCase();
/*if(qSearch[0] == '#'){ qData = qData.replaceAll(/,/g, ' '); } */
//qData = qData.replaceAll(/,/g, ' ');
if((qData+' ').indexOf((qSearch.toLowerCase())) >= 0){
arrListForRandom.push(key);



i++;
total = i;
comMessagePrint = `${q2} ${i}`;
//document.getElementsByTagName('title')[0].innerHTML = ` ${q2} | ` + domainNameToTitle;
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
checkNotFound = 'found';
}
// end from radio

document.getElementById("lPrint").innerHTML = `
<div id="msg"></div>
`;

document.getElementById('msg').innerHTML = `
<div class="block padding2 margin2 tCenter"><span id="msg2"></span></div>
`;
document.getElementById('msg2').innerText = `${comMessagePrint}`;

if(q == "#video"){ id = getRandomInt(jsonVar.length); }


//alert(jsonVar[getRandomInt(jsonVar.length)]);
//alert(jsonVar.length);
if(checkNotFound == ''){


document.getElementById("lPrint").innerHTML += `

<div class="wrapper">
<div class="padding3 light border borderRadius2">

<div id="playTitle"></div>
<div id="playURL"></div>
<div id="playerxx"></div>
<div id="playRandomButton"></div>

<br />

<a class="button tCenter block submit borderList borderRadius2" onClick="window.location.reload();return false;" title="location.reload" href="#">random</a>

</dvi>
</div>

`;

var randomTitle = jsonVar[id]['text'];
var randomURL = jsonVar[id]['url'];

var tmp = document.createElement ('a');
tmp.href   = randomURL;
var host = tmp.hostname;

/*
if((randomTitle.toLowerCase()).indexOf((q2.toLowerCase())) != -1){
randomTitle = `<span class="borderBottomOrange">${randomTitle}</span>`;
}
document.getElementById("playTitle").innerHTML =  '' + randomTitle; 
*/

var text = [...randomTitle];
var text2 = '';
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
text = '';
const myArray = text2.split(conf["confSymbolForSplit"]);
myArray.forEach((item) => {
var cleanItem = item;
if(
(q2.toLowerCase()).indexOf((cleanItem.toLowerCase())) != -1||
(cleanItem.toLowerCase()).indexOf((q2.toLowerCase())) != -1
){
item = `<span class="borderBottomOrange">${item}</span>`;
}

text += item;
});

document.getElementById("playTitle").innerHTML =  '' + text; 



if((randomURL.toLowerCase()).indexOf((q2.toLowerCase())) != -1){
document.getElementById("playURL").innerHTML =  '<span class="borderBottomOrange"><a class="brand break2" href="' + randomURL + '">' + randomURL + '</a></span>'; 
}else{
document.getElementById("playURL").innerHTML =  '<a class="brand break2" href="' + randomURL + '">' + randomURL + '</a>'; 
}

}


var w = '100%';
var h = '275px';


switch (host) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":
  
//alert(randomURL);
var play = randomURL.split('v=').pop();



//alert(play);
    //<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
     document.getElementById("playerxx").innerHTML = '<div id="player"></div>'; 

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: h,
          width: w,
          videoId: play,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onStateChange': onPlayerStateChange2
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
//event.target.mute();
//event.target.setVolume(100); 
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
}
       
}
function stopVideo() {
        player.stopVideo();
      }


function onPlayerStateChange2(event) {
		  if(event.data === 0) {            
// Simulate an HTTP redirect:
location.reload();  
}
}



break;
   

case 'vimeo.com':
var play = randomURL.split('/').pop();

var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
script2.src = 'https://player.vimeo.com/api/player.js';
document.getElementsByTagName('footer')[0].appendChild(script2);

var play = randomURL.split('/').pop();


onload = (event) => {
//document.getElementById("playerxx").innerHTML = `<iframe src="https://player.vimeo.com/video/${play}?badge=0&autoplay=1" width="{$w}" height="${h}"  frameborder="0"></iframe>`; 
document.getElementById("playerxx").innerHTML = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${play}?badge=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Larry"></iframe></div><!--<script src="https://player.vimeo.com/api/player.js"></script>-->`; 

var iframe = document.querySelector('iframe');
player = new Vimeo.Player(iframe);

player.on('play', function(data){
//console.log('play');
});

player.on('ended', function(data) {
fuMRealod();
});

}

break;

    
case "soundcloud.com":

var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
script2.src = "https://w.soundcloud.com/player/api.js";
document.getElementsByTagName('head')[0].appendChild(script2); 

  document.getElementById("playerxx").innerHTML = '<iframe  id="sc-widget" width="'+w+'" height="'+h+'" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=' +randomURL +'&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'; 


onload = (event) => {


  (function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function() {
      // load new widget
      widget.bind(SC.Widget.Events.FINISH, function() {
// Simulate an HTTP redirect:

reload(); 

      });
    });

  }());

}


 break;

case 'dailymotion.com':
case 'www.dailymotion.com':
var play = randomURL.split('/');
play = play[play.length - 1];
document.getElementById("playerxx").innerHTML = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
break;

case "archive.org":
if(randomURL.search(`/details/`) != -1) {
var play = randomURL.split('/');
play = play[play.length - 1];
h = h + h;
document.getElementById("playerxx").innerHTML = `<iframe src="https://archive.org/embed/${play}&autoplay=1" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
}
break;

    
default:
console.log(`default switch`);
}



document.getElementById('taglist').innerHTML += `
<div class="tCenter">
<div class="wrapper3 notUnderline">

<div class="margin2 padding2"></div>

` + fuTagCloud("NotFoundId", printTagList, q, "", "./") + `
</div>
</div>
`;


document.getElementById('taglist').innerHTML +=  `
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







