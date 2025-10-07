// Ads v.1.8.2
// Mini banner system
// /data/adsJsonVar.js

function fuAds(none, printIdAds, com){


// none - Reserved variable
// printIdAds - id for print

//var adsStatus =  localStorage.getItem("confAdsStatus");
var adsStatus = conf["confAdsStatus"];
if (com == "force"){ adsStatus = "on"; }

if (adsStatus != "off"){

//var cookieStatus =  localStorage.getItem("confDataCollection");
var cookieStatus =  conf["confDataCollection"];

switch (adsStatus){

case 'off':
adsStatus = 'off';
break;

case 'random':
var items = ['on', 'off'];
item = items[Math.floor(Math.random() * items.length)];
adsStatus = item;
break;

default:
adsStatus = 'on';
}


if(document.getElementById(printIdAds) != null){

let ads = [];
var adsPrint = '';

//ads = JSON.parse(adsJson);

//if (typeof linksListJsonVar != 'undefined') { ads = ads.concat(linksListJsonVar); }
if (typeof adsJsonVar != 'undefined') { ads = ads.concat(adsJsonVar); }


//ads = JSON.parse(adsJson);
let adsUrlPage = fuMHideFileNameExt(`${confD}pages/ads/`);

if (ads != null&&ads != ''){

// single
if (adsStatus != 'off'){
var random = Math.floor(Math.random() * ads.length);
//console.log(ads[random]['text']);

// single
adsText = ads[random]['text']; if (adsText == null||adsText == "") { adsText = ''; }
adsURL = ads[random]['url']; if (adsURL == null||adsURL == ""){ adsURL = '#'; }
if (adsText.search("src=") != -1&&cookieStatus != 'on'){ // found
adsText = fuMHideFileNameExt(`<a class="brand inlineBlock" href="{confD}pages/settings/#confDataCollection">Cookie setting: ${cookieStatus}.</a>`);
}



if (adsText.search("src=") == -1){ // not found code
adsPrint = `<div class="ads"><div class="adsHeader"><a class="brand tag notUnderline" href="${adsUrlPage}"><span class="yellow ico">✪</span>ads, links</a></div><div class="adsBody">${adsText} <a class="brand break insertIcon" target="blank" href="${adsURL}">${adsURL}</a></div></div>`;

// print
document.getElementById(printIdAds).innerHTML = `<aside>
<div class="wrapper">
<div class="borderRadius2 padding3 light borderList ads tLeft break">${adsPrint}</div>
</div>
</aside>`;

} else {
adsPrint = `<div class="ads"><div class="adsHeader"><a class="brand tag notUnderline" href="${adsUrlPage}"><span class="yellow op ico">✪ </span>ads, links</a></div><div class="adsBody">${adsText} <a class="brand break insertIcon" target="blank" href="${adsURL}">${adsURL}</a></div></div>`;

// print
document.getElementById(printIdAds).innerHTML = `

<aside>
<div class="center">
<div class="adsCode">${adsPrint}</div>
</div>
</aside>


`;
}
}
// single



// all
if (com == "all"){


let adsPrintAll = '';
ads.forEach((item, index) => {

// multi
// single
adsText = ads[index]['text']; if (adsText == null) { adsText = ''; }
adsURL = ads[index]['url']; if (adsURL == null){ adsURL = ''; }
if (adsText.search("src=") != -1&&cookieStatus != 'on'){ // found
adsText = fuMHideFileNameExt(`<a class="brand" href="{confD}pages/settings/#confDataCollection">Cookie setting: ${cookieStatus}.</a>`);
}
if (adsText.search("src=") == -1){ // not found code
adsPrint = `<div class="ads"><div class="adsHeader"><a class="brand tag notUnderline" href="${adsUrlPage}"><span class="yellow op ico">✪ </span>ads, links</a></div><div class="adsBody">${adsText} <a class="brand break insertIcon" target="blank" href="${adsURL}">${adsURL}</a></div></div>`;

adsPrint = '<div class="wrapper"><div class="borderRadius2 padding3 light borderList ads tLeft break">'+adsPrint+'</div></div>';
} else {
adsPrint = `<div class="ads"><div class="adsHeader"><a class="brand tag notUnderline" href="${adsUrlPage}"><span class="yellow op ico">✪ </span>ads, links</a></div><div class="adsBody">${adsText} <a class="brand break insertIcon" target="blank" href="${adsURL}">${adsURL}</a></div></div>`;

adsPrint = '<div class="center"><div class="adsCode">' + adsPrint + '</div></div>';
}

adsPrintAll += adsPrint;
adsPrint = '';
// end single
// end multi



});

document.getElementById(printIdAds).innerHTML = '<div class="wrapper"><div class="padding2 bg shadow borderRadius2">' + adsPrintAll + '</div>';

}
// all




}

}

}


if (com == 'off'){ document.getElementById(printIdAds).innerHTML = ""; }
//if (com == ""){ alert('test'); }

}



