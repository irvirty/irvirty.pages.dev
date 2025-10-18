// v.2.2.0
// About: insert icon using class name.



function mainPrintMsg(id, PrintMsg, option){

if(document.getElementById(id) != null){
if(option == 'plus'||option == '+'){
document.getElementById(id).innerHTML += PrintMsg;
}else{
document.getElementById(id).innerHTML = PrintMsg;
}
}else{
// console.log(id+' not fount');
}
}


function insertIcon(classNameForInsert, mode){
// mode: "strict" - for full word no part, like firefox and insert fire
if(mode != 'strict'){ mode = ''; }

let icons = {



/* material icons font */

"angel":"flutter_dash", "bird":"flutter_dash",
"angle":"change_history",
"antilope":"align_vertical_bottom", "gnu":"align_vertical_bottom",
"balloon":"lens",
"blog":"description", "todo":"edit_note", "task":"edit_note", "note":"edit_note", "reminde":"event", "paper":"description",
"book":"menu_book", "quiz":"menu_book",
"bookmark":"bookmark_border",
"brain":"psychology", "memory":"psychology",
"calculator":"calculate", "abacus":"calculate",
"circle":"lens", "round":"lens",
"cookie":"cookie",
"cut":"content_cut",
"clock":"schedule",
"cofee":"local_cafe", "coffee":"local_cafe",
"copyright":"copyright",
"comment":"question_answer","talk":"talk","chat":"chat",
"php":"computer", "java":"computer", "code":"code", "unicorn":"align_vertical_bottom",
"db":"save", "data":"file_present", "database":"save", "keep":"save", "save":"save",
"dir":"folder️", "folder":"folder",
"document":"description", "page":"description",
"draw":"brush", "drawing":"brush",
"earth":"public",
"file":"perm_media",
"game":"sports_esports",
"teacup":"emoji_food_beverage",
"hello":"waving_hand",
"hot":"local_fire_department", "fire":"local_fire_department",
"info":"info", "faq":"contact_support", "about":"info", 
"insert":"content_paste", "paste":"content_paste",
"keyboard":"keyboard","typing":"keyboard",
"mark":"check", "check":"check",
"label":"label", "tag":"label️",
"laptop":"laptop", "notebook":"laptop",
"live":"fiber_manual_record", "online":"fiber_manual_record",
"like":"favorite","love":"favorite","fav":"favorite",
"map":"map", "sitemap":"map",
"mail":"email",
"menu":"menu",
"movie":"movie",
"music": "music_note",
"network":"public", "wifi":"public",
"news":"rss_feed",
"pc":"desktop_windows",
"project":"next_week", "tpl":"description", "template":"description", "templates":"description", "iframe":"description",
"radio":"radio",
"random":"casino","rnd":"casino", "rand":"casino", "dice":"casino",
"robot":"smart_toy", "auto":"smart_toy",
"share":"share",
"script":"code", "code":"code", "coding":"code", "history":"code",
"search": "search",
"sleep":"hotel", "bed":"hotel",
"store":"store","shop":"store", "extension":"store", "extensions":"store",
"style":"palette", "color":"palette", "theme":"palette", "palette":"palette", "design":"palette", "webdesign":"palette",
"time":"alarm_on", "timer":"alarm_on",
"tmp":"alarm_on", "temporary":"alarm_on",
"training":"directions_run", "run":"directions_run",
"test":"science", "demo":"science", 
"play":"play_arrow️",
"progress":"█░░",
"quote":"format_quote", "quotes":"format_quote",
"rain":"water_drop",
"smoking":"smoke_free",
"sun":"light_mode",
"tool":"build",
"tv":"live_tv",
"url":"link","link":"link","www":"link", "popup":"link", "http":"link",
"setting":"settings", "custom":"settings",
"snow":"ac_unit", "cold":"ac_unit", "winter":"ac_unit",
"star":"star",
"stopwatch":"timer",
"user":"person", "followers":"person",
"weather":"sunny",
"web":"public", "internet":"public", "browser":"public",
"wallpaper":"image", "picture":"image", "image":"image", "photo":"photo_camera", "img":"image", "pixel":"picture", 
"window":"window",
"question":"help",
"light":"light_mode",
"dark":"dark_mode",
"instagram":"photo_camera",
"twitter":"<div>𝕏</div>",
"behance":"cases",
"dribbble":"cases",
"pinterest":"photo",
"deviantart":"photo",
"github":"code",
"gitlab":"code"


/* img ico
"instagram":`<img src="/img/icons/instagram-48x48.png" alt="ico" width="16" height="16">`,
"twitter":`<img src="/img/icons/x-48x48.png" alt="ico" width="16" height="16">`,
*/

};

let iconsArr = Object.getOwnPropertyNames(icons);
// links
iconsArr = iconsArr.sort();

var counter = 0; // for only be 1 icon

const allLinks = document.querySelectorAll('.'+classNameForInsert);
allLinks.forEach((item, index) => {

if(counter == 0){



let linkText = item.innerHTML;


let linkURL = item.href;
if(item.href != undefined){
linkURL = item.href;
}else{ linkURL = 'ldskjlf'; }

let check = '';
let icArr = [];
counter = 0;

iconsArr.forEach((item, index) => {

let textIcon = String(item);
let icon = String(icons[item]);
//console.log((linkText.toLowerCase()+'')+((icon+' ')));


//counter == 0 - only one icon insert


if(mode != 'strict'&&check != 'exit'&&counter == 0){
// main, not strict

//https://stackoverflow.com/questions/412123764/how-to-remove-numbers-from-a-string
if(
(''+linkText.replace(/\d+/g, '').toLowerCase()).indexOf((''+textIcon.replace(/\d+/g, '')+'')) >= 0
||linkText.replace(/\d+/g, '').toLowerCase().trim().search(textIcon.replace(/\d+/g, '')) != -1
&&linkText.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1){
icArr.push(icon);
check = 'exit';
counter++;
}

}

if(mode == 'strict'&&check != 'exit'&&counter == 0){
// main, strict word
if(
(' '+linkText.replace(/\d+/g, '').toLowerCase()).indexOf((' '+textIcon.replace(/\d+/g, '')+'')) >= 0
||(' '+linkText.replace(/\d+/g, '').toLowerCase()+' ').indexOf((' '+textIcon.replace(/\d+/g, '')+' ')) >= 0
&&(linkText.replace(/\d+/g, '').toLowerCase()+'').indexOf((textIcon.replace(/\d+/g, '')+'')) == -1){
icArr.push(icon);
check = 'exit';
counter++;

}
}

});


// insert favicon url
if(check != 'exit'&&counter == 0){
// if link
if(linkText.toLowerCase().trim().slice(0, 4) == 'http'&&linkText.toLowerCase().trim().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkText;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(localStorage.getItem('confDataCollection') == 'off'){ iconHTTP = 'link'; }
icArr.push(iconHTTP);
check = 'exit';
counter++;
}
}

// insert favicon text
if(check != 'exit'&&counter == 0){
// if link2
if(linkURL.toLowerCase().trim().search(location.host) == -1&&linkURL.toLowerCase().trim().slice(0, 4) == 'http'&&linkURL.toLowerCase().trim().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkURL;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(localStorage.getItem('confDataCollection') == 'off'){ iconHTTP = 'link'; }
icArr.push(iconHTTP);
check = 'exit';
counter++;
}
}



// main insert icons if rule bellow true and text icon == text from link
if(check == 'exit'&&counter == 1){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');

linkText = `<span class="material-icons ico brand" style="font-size: 16px;">
<div>${icon}</div>
</span>`+'<span class="pre"> </span>'+linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;


}else{
linkText = `<span class="material-icons ico brand" style="font-size: 16px;">
<div>●</div>
</span>`+'<span class="pre"> </span>'+linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;


}



}


ckeck = '';
icArr = [];

counter = 0;
});

}




// Material Icons

//document.body.onload = function(){}; 
document.body.onload = function(){

mainPrintMsg('footer', `
<style>
/* https://developers.google.com/fonts/docs/material_icons */

/* fallback */

@font-face {
font-family: 'Material Icons';
font-style: normal;
font-weight: 400;

src: local('Material Icons');
/*src: url(/font/MaterialIcons-Regular.woff2) format('woff2');*/
font-display: swap;
}


.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;  /* Preferred icon size */
  display: none;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
padding: 0;
margin: 0;
}

/* fix cancel for subelement icon */
.material-icons * { font-family: Arial, Sans-Serif; }


.material-icons { display: none; }
</style>
`, '+');





//https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/check
const font = new FontFace(
  "Material Icons",
  "url(/font/MaterialIcons-Regular.woff2)",
  {
    style: "normal",
    weight: "400"
  },
);


document.fonts.add(font);


async function check() {
await font.load();
// console.log(font.status);
if(font.status == 'loaded'){
mainPrintMsg('footer', `
<style>
.material-icons { display: inline-block; }
</style>
`, '+');
}
  // "loaded"
}

check();
};



















