// Fu insert icon v.3.0.0
// Function for insert icon in links using class name.


function insertIcon(classNameForInsert, mode){

if(conf["confIconStatus"] == null){ conf["confIconStatus"] = 'off'; }

if(conf["confIconStatus"] == "random"){
if(fuMRandom(0, 1) == 1){ conf["confIconStatus"] = "on"; }
}

if(conf["confIconStatus"] == "on"){



// mode: "strict" - for full word
if(mode != 'strict'){ mode = ''; }

let icons = [
{"text":"arch", "text2":`<span class="bold">△</span>`},
{"text":"beacons", "text2":"°.・"},
{"text":"bitcoin", "text2":`<span class="orange">₿</span>`},
{"text":"bluesky", "text2":"🟦"},
{"text":"bento", "text2":"🟦"},
{"text":"blogspot", "text2":"🅱"},
{"text":"dev.to", "text2":"⬛"},
{"text":"about.me", "text2":"⬛"},
{"text":"twitter", "text2":`<span class="bold">𝕏</span>`},
{"text":"x.com", "text2":`<span class="small bold">𝕏</span>`},
{"text":"twitch", "text2":"🔴"},
{"text":"docs", "text2":"📄"},
{"text":"geany", "text2":"🫖"},
{"text":"blender", "text2":"✏️"},
{"text":"framer", "text2":"//"},
{"text":"facebook", "text2":"🇫"},
{"text":"cloudflare pages", "text2":"⚡"},
{"text":"behance", "text2":"🎨"},
{"text":"dribbble", "text2":"🎨"},
{"text":"codepen", "text2":"📜"},
{"text":"github", "text2":"🐱"},
{"text":"neocities", "text2":"🐱"},
{"text":"gitlab", "text2":"📜"},
{"text":"hashnode", "text2":`🟦`},
{"text":"codepen", "text2":"📜"},
{"text":"friendica", "text2":"🇫"},
{"text":"firefox", "text2":"🦊"},
{"text":"liberapay", "text2":`<em class="bold">lp</em>`},
{"text":"lightning", "text2":"⚡"},
{"text":"getalby", "text2":"⚡"},
{"text":"linkedin", "text2":`<b class="blue lowercase">in</b>`},
{"text":"limey", "text2":"🥝"},
{"text":"linux", "text2":"🐧"},
{"text":"linktr", "text2":`<span class="bold green">✳</span>`},
{"text":"linktree", "text2":`<span class="bold green">✳</span>`},
{"text":"pocket", "text2":"📰"},
{"text":"medium", "text2":"📰"},
{"text":"producthunt", "text2":`<span class="bold orange">P</span>`},
{"text":"figma", "text2":`<span class="bold orange">F</span>`},
{"text":"pxlmo", "text2":"🖼"},
{"text":"sites", "text2":"📄"},
{"text":"substack", "text2":"🔖"},
{"text":"slashdot", "text2":`<span class="bold">/.</span>`},
{"text":"nostr", "text2":"🦩"},
{"text":"tumblr", "text2":`<span class="bold">Ⓣ</span>`},
{"text":"onedrive", "text2":"☁️"},
{"text":"deviantart", "text2":"🖼"},
{"text":"pinterest", "text2":"🖼"},
{"text":"threads", "text2":"@"},
{"text":"instagram", "text2":"📸"},
{"text":"wordpress", "text2":"🅦"},
{"text":"youtube", "text2":"▶️"},
{"text":"wix", "text2":`<span class="bold">W</span>`},
{"text":"webflow", "text2":`<span class="bold em">W</span>`}
];

let icons2 = [
{"text":"angle", "text2":"◀"},
{"text":"angled", "text2":"◀"},
{"text":"angel", "text2":"😇"},
{"text":"angle", "text2":"🔺"},
{"text":"antilope", "text2":"🦌"},
{"text":"gnu", "text2":"🦌"},
{"text":"archive", "text2":"🗃️"},
{"text":"zip", "text2":"🗃️"},
{"text":"balloon", "text2":"🎈"},
{"text":"button", "text2":"▬"},
{"text":"bird", "text2":"🐦"},
{"text":"binary", "text2":"010"},
{"text":"number", "text2":"010"},
{"text":"blog", "text2":"📝"},
{"text":"todo", "text2":"📝"},
{"text":"task", "text2":"📝"},
{"text":"note", "text2":"📝"},
{"text":"reminde", "text2":"📝"},
{"text":"paper", "text2":"📝"},
{"text":"article", "text2":"📝"},
{"text":"book", "text2":"📚"},
{"text":"quiz", "text2":"📚"},
{"text":"box", "text2":"📦"},
{"text":"bookmark", "text2":"🔖"},
{"text":"brain", "text2":"🧠"},
{"text":"memory", "text2":"🧠"},
{"text":"calculator", "text2":"🧮"},
{"text":"abacus", "text2":"🧮"},
{"text":"count", "text2":"🧮"},
{"text":"circle", "text2":"⭕"},
{"text":"round", "text2":"⭕"},
{"text":"cloud", "text2":"☁️"},
{"text":"contact", "text2":"💬"},
{"text":"cookie", "text2":"🍪"},
{"text":"cut", "text2":"✂️"},
{"text":"clock", "text2":"🕑"},
{"text":"cofee", "text2":"☕"},
{"text":"coffee", "text2":"☕"},
{"text":"copyright", "text2":"©"},
{"text":"comment", "text2":"💬"},
{"text":"talk", "text2":"💬"},
{"text":"chat", "text2":"💬"},
{"text":"unicorn", "text2":"🦄"},
{"text":"db", "text2":"💾"},
{"text":"data", "text2":"💾"},
{"text":"database", "text2":"💾"},
{"text":"keep", "text2":"💾"},
{"text":"save", "text2":"💾"},
{"text":"download", "text2":"⬇️"},
{"text":"dir", "text2":"📁️"},
{"text":"developer", "text2":"💻"},
{"text":"document", "text2":"📄"},
{"text":"page", "text2":"📄"},
{"text":"pages", "text2":"📄"},
{"text":"draw", "text2":"✏️"},
{"text":"drawing", "text2":"✏️"},
{"text":"paint", "text2":"✏️"},
{"text":"painting", "text2":"✏️"},
{"text":"art", "text2":"🎨"},
{"text":"earth", "text2":"🌍"},
{"text":"embed", "text2":"▣"},
{"text":"flash", "text2":"⚡"},
{"text":"fact", "text2":"⚡"},
{"text":"file", "text2":"🗃️"},
{"text":"game", "text2":"🎮"},
{"text":"mmorpg", "text2":"🎮"},
{"text":"idea", "text2":"💡"},
{"text":"fire", "text2":"🔥"},
{"text":"teapot", "text2":"🫖"},
{"text":"teacup", "text2":"🍵"},
{"text":"translit", "text2":"⇄"},
{"text":"convert", "text2":"⇄"},
{"text":"fox", "text2":"🦊"},
{"text":"hello", "text2":"👋"},
{"text":"info", "text2":"ℹ️"},
{"text":"faq", "text2":"ℹ️"},
{"text":"about", "text2":"ℹ️"},
{"text":"insert", "text2":"📋"},
{"text":"paste", "text2":"📋"},
{"text":"joystick", "text2":"🕹"},
{"text":"keyboard", "text2":"⌨️"},
{"text":"typing", "text2":"⌨️"},
{"text":"input", "text2":"⌨️"},
{"text":"mark", "text2":"✔️"},
{"text":"check", "text2":"✅"},
{"text":"label", "text2":"🏷️"},
{"text":"tag", "text2":"🏷️"},
{"text":"laptop", "text2":"💻"},
{"text":"notebook", "text2":"💻"},
{"text":"learning", "text2":"🌱"},
{"text":"learn", "text2":"🌱"},
{"text":"live", "text2":"🔴"},
{"text":"online", "text2":"🔴"},
{"text":"broadcast", "text2":"🔴"},
{"text":"like", "text2":"👍"},
{"text":"interests", "text2":"👍"},
{"text":"love", "text2":"❤"},
{"text":"fav", "text2":"❤"},
{"text":"magazine", "text2":"📰"},
{"text":"map", "text2":"📍"},
{"text":"sitemap", "text2":"📍"},
{"text":"mammoth ", "text2":"🦣"},
{"text":"mastodon", "text2":"🦣"},
{"text":"mail", "text2":"📧"},
{"text":"email", "text2":"📧"},
{"text":"@", "text2":"📧"},
{"text":"message", "text2":"💬"},
{"text":"status", "text2":"💬"},
{"text":"matrix", "text2":"💊"},
{"text":"menu", "text2":"☰"},
{"text":"movie", "text2":"🎥"},
{"text":"money", "text2":"💲"},
{"text":"wallet", "text2":"💲"},
{"text":"payment", "text2":"💲"},
{"text":"music", "text2": "🎶"},
{"text":"network", "text2":"📶"},
{"text":"new", "text2":"🆕"},
{"text":"news", "text2":"📰"},
{"text":"pumpkin", "text2":"🎃"},
{"text":"halloween", "text2":"🎃"},
{"text":"pc", "text2":"🖥"},
{"text":"desktop", "text2":"🖥"},
{"text":"computer", "text2":"🖥"},
{"text":"photo", "text2":"📷"},
{"text":"camera", "text2":"📷"},
{"text":"screenshot", "text2":"📷"},
//{"text":"project", "text2":"❖"}, {"text":"projects", "text2":"❖"},
{"text":"project", "text2":"∷"},
{"text":"main", "text2":"∷"},
{"text":"tpl", "text2":"📄"},
{"text":"template", "text2":"📄"},
{"text":"templates", "text2":"📄"},
{"text":"iframe", "text2":"📄"},
{"text":"radio", "text2":"📻"},
{"text":"random", "text2":"🎲"},
{"text":"dice", "text2":"🎲"},
{"text":"robot", "text2":"🤖"},
{"text":"auto", "text2":"🤖"},
{"text":"share", "text2":"🔁"},
{"text":"script", "text2":"📜"},
{"text":"JavaScript", "text2":"📜"},
{"text":"text2","text2":"📜"},
{"text":"code", "text2":"📜"},
{"text":"coding", "text2":"📜"},
{"text":"history", "text2":"📜"},
{"text":"search", "text2": "🔎"},
{"text":"sleep", "text2":"😴💤"},
{"text":"bed", "text2":"🛏"},
{"text":"store", "text2":"🛍️"},
{"text":"shop", "text2":"🛍️"},
{"text":"extension", "text2":"🛍️"},
{"text":"extensions", "text2":"🛍️"},
{"text":"style", "text2":"🎨"},
{"text":"css", "text2":"🎨"},
{"text":"color", "text2":"🎨"},
{"text":"theme", "text2":"🎨"},
{"text":"palette", "text2":"🎨"},
{"text":"design", "text2":"🎨"},
{"text":"webdesign", "text2":"🎨"},
{"text":"time", "text2":"⌛"},
{"text":"timer", "text2":"⌛"},
{"text":"tmp", "text2":"⏳"},
{"text":"temporary", "text2":"⏳"},
{"text":"training", "text2":"🏃"},
{"text":"run", "text2":"🏃"},
{"text":"test", "text2":"🧪"},
{"text":"demo", "text2":"🧪"},
{"text":"lorem", "text2":"🧪"},
{"text":"ipsum", "text2":"🧪"},
{"text":"play", "text2":"▶️"},
{"text":"pleroma", "text2":"🟧️"},
{"text":"portfolio", "text2":"💼"},
{"text":"progress", "text2":"█░░"},
{"text":"quote", "text2":"❝❞"},
{"text":"quotes", "text2":"❝❞"},
{"text":"blockquotes", "text2":"❝❞"},
{"text":"rain", "text2":"💧"},
{"text":"redirect", "text2":"⬈"},
{"text":"redirects", "text2":"⬈"},
{"text":"smoking", "text2":"🚭"},
{"text":"sun", "text2":"🌞"},
{"text":"snake", "text2":"🐍"},
{"text":"snow", "text2":"❄️"},
{"text":"cold", "text2":"❄️"},
{"text":"winter", "text2":"❄️"},
{"text":"star", "text2":"⭐"},
{"text":"stopwatch", "text2":"⏱️"},
{"text":"text", "text2":"📄"},
{"text":"textarea", "text2":"◻"},
{"text":"texture", "text2":"ᚙ"},
{"text":"textures", "text2":"ᚙ"},
{"text":"grid", "text2":"ᚙ"},
{"text":"tool", "text2":"🔨"},
{"text":"tv", "text2":"📺"},
{"text":"url", "text2":"🔗"},
{"text":"link", "text2":"🔗"},
{"text":"www", "text2":"🔗"},
{"text":"popup", "text2":"🔗"},
{"text":"video", "text2":"🎞️"},
{"text":"gif", "text2":"🎞️"},
{"text":"setting", "text2":"⚙️"},
{"text":"settings", "text2":"⚙️"},
{"text":"custom", "text2":"⚙️"},
{"text":"user", "text2":"👤"},
{"text":"followers", "text2":"👤"},
{"text":"trash", "text2":"🗑️"},
{"text":"weather", "text2":"🌤️"},
{"text":"web", "text2":"🕸️"},
{"text":"website", "text2":"🕸️"},
{"text":"internet", "text2":"🕸️"},
{"text":"browser", "text2":"🕸️"},
{"text":"wallpaper", "text2":"🖼"},
{"text":"picture", "text2":"🖼"},
{"text":"image", "text2":"🖼"},
{"text":"img", "text2":"🖼"},
{"text":"pixel", "text2":"🖼"},
{"text":"window", "text2":"🪟"},
{"text":"windows", "text2":"🪟"},
{"text":"work", "text2":"🛠️"},

{"text":"question", "text2":"❓"},
{"text":"light", "text2":"⬜️"},
{"text":"highlight", "text2":"⬜️"},
{"text":"white", "text2":"⬜️"},
 {"text":"dark", "text2":"⬛"},
{"text":"black", "text2":"⬛"},
{"text":"red", "text2":"🟥"},
{"text":"orange", "text2":"🟧"},
{"text":"yellow", "text2":"🟨"},
{"text":"green", "text2":"🟩"},
{"text":"indigo", "text2":"🟪"},
{"text":"violet", "text2":"🟪"},
{"text":"blue", "text2":"🟦"}
];


var iconsArr = [];
if(conf["confDataCollection"] != 'on'){
iconsArr = iconsArr.concat(icons, icons2);
}else{
iconsArr = iconsArr.concat(icons2);
}

/* img ico
"instagram":`<img src="/img/icons/instagram-48x48.png" alt="ico" width="16" height="16">`,
"twitter":`<img src="/img/icons/x-48x48.png" alt="ico" width="16" height="16">`,
*/





//let iconsArr = Object.getOwnPropertyNames(iconsAll);


// links
//iconsArr = iconsArr.sort();

var counter = 0; // for only be 1 icon

const allLinks = document.querySelectorAll('.' + classNameForInsert);
allLinks.forEach((item, index) => {

if(counter == 0){



let linkText = item.innerHTML;


var linkURL = item.href;
if(item.href != undefined){
linkURL = item.href;
}else{ linkURL = '#undefined'; }


let icArr = [];
counter = 0; 

iconsArr.forEach((item33, index33) => {

let textIcon = String(item33["text"]);
let icon = String(item33["text2"]);
//console.log((linkText.toLowerCase()+'')+((icon+' ')));



var linkText2 = linkText;
linkText2 = linkText2.replaceAll("@", " @ ");
linkText2 = linkText2 + " " + linkText2.slice(0, -1) + " " + linkText2 + "s" + " " + linkText2.replaceAll(".", " . ");
linkText2 = linkText2.replaceAll(",", " , ");
/*linkText2 = linkText2.replaceAll(".", " . ");*/
linkText2 = linkText2.replaceAll(":", " : ");
linkText2 = linkText2.replaceAll(">", " > ");
linkText2 = linkText2.replaceAll("<", " < ");
linkText2 = linkText2.replaceAll("-", " - ");
linkText2 = linkText2.replaceAll("(", " ( ");
linkText2 = linkText2.replaceAll(")", " ) ");
linkText2 = linkText2.replaceAll('"', ' " ');
linkText2 = linkText2.replaceAll(`
`, "");
;



//counter == 0 - only one icon insert
if(mode != 'strict'&&counter == 0){
// main, not strict

//https://stackoverflow.com/questions/412123764/how-to-remove-numbers-from-a-string
if(
(''+linkText2.replace(/\d+/g, '').toLowerCase()).indexOf((''+textIcon.replace(/\d+/g, '')+'')) != -1
||linkText2.replace(/\d+/g, '').toLowerCase().trim().search(textIcon.replace(/\d+/g, '')) != -1
&&linkText2.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1){
icArr.push(icon);
counter++;
}

}else if(mode == 'strict'&&counter == 0){
// main, strict word
if(
(' ' + linkText2.replace(/\d+/g, '').toLowerCase() + ' ').indexOf((' ' + textIcon.replace(/\d+/g, '') + '')) != -1
||(' '+linkText2.replace(/\d+/g, '').toLowerCase() + ' ').indexOf((' ' + textIcon.replace(/\d+/g, '') + '')) != -1
&&linkText2.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1){
icArr.push(icon);
counter++;
}
}




});


// insert favicon text
if(counter == 0){
// if link
if(linkText.toLowerCase().trim().slice(0, 4) == 'http'&&linkText.toLowerCase().trim().search("http|://|www.") != -1){
let linkTextURL = linkText;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(conf["confDataCollection"] != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
counter++;
}
}

// insert favicon url
if(counter == 0){
// if link2
if(linkURL.toLowerCase().trim().search(location.host) == -1&&linkURL.toLowerCase().trim().slice(0, 4) == 'http'&&linkURL.toLowerCase().trim().search("http|://|www.") != -1){
let linkTextURL = linkURL;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(conf["confDataCollection"] != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
counter++;
}
}



icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');

// main insert icons if rule bellow true and text icon == text from link
if(counter == 1&&
('' + linkText.toLowerCase()).indexOf((icon)) == -1
){

linkText = `<span><span class="brand ico">${icon}</span>` + linkText + '</span>';
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;

counter++;
}else if(counter == 0&&
('' + linkText.toLowerCase()).indexOf('🦝') == -1&&
('' + linkText.toLowerCase()).indexOf('🔗') == -1
){
linkText = `<span><span class="brand ico">🦝</span>` + linkText + '</span>';
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;
}

/*else{
linkText = '<span>' + linkText + '</span>';
//linkText = `<span class="brand ico uppercase"> • </span>` + linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;
}*/


}



ckeck = '';
icArr = [];

counter = 0;

});


}

}






