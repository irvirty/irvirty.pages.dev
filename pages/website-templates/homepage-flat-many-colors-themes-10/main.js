// Main v.1.3.3


var conf = [];
conf["confTheme"] = localStorage.getItem("confTheme");

conf["confStartDay"] = 8;
conf["confStartNight"] = 20;

// css theme fix if save page
if(String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}

function mainPrintMsg(id, PrintMsg){
if(document.getElementById(id) != null){
document.getElementById(id).innerHTML = PrintMsg;
}else{
// console.log(id+' not fount');
}
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function fuMRandom(min, max){
//return Math.round(Math.random() * (max - min) + min);
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function fuMPrintText(id, text, option){
if (document.getElementById(id) != null){
if (option == 'plus'||option == '+'){
document.getElementById(id).innerHTML += text;
} else if (option == 'plusTop'||option == 'top'){
document.getElementById(id).innerHTML = text + document.getElementById(id).innerHTML;
} else {
document.getElementById(id).innerHTML = text;
}
} else {
// console.log(id+' not fount');
}
}



// Themes changer v.1.2.0
theme = conf["confTheme"];
if (conf["confTheme"] == null||theme == undefined||theme == 'auto'){
theme = "auto";

if (window.matchMedia &&window.matchMedia('(prefers-contrast: more)').matches == true){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
theme = 'h-contrast-d'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
theme = 'h-contrast-l'; }
}

}

// confDeviceTheme
conf["confDeviceTheme"] = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { conf["confDeviceTheme"] = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { conf["confDeviceTheme"] = 'light'; }


// top bar color theme set
//<meta name="theme-color" content="#317EFB"/>
var meta = document.createElement('meta');
meta.name = "theme-color";
if (conf["confDeviceTheme"] == 'dark'){
meta.content = "#404040";
} else {
meta.content = "#F0F0F0";
}
document.getElementsByTagName('head')[0].appendChild(meta);


// insert color-theme.css in header
function fuMPrintTheme(theme){

if (document.getElementById('theme') != null){
document.getElementById('theme').href = '/css/' + theme + '.css';
}


// print theme mode and name in footer
if (document.getElementById('fTheme') != null){
document.getElementById("fTheme").text = conf["confTheme"] + ' (' + theme + ')';
}

// fix and dynamic
fuMThemeEmbed();
fuMBg(conf["confThemeEmbed"], conf["confBgImg"]);

// fix
if (conf["confThemeEmbed"] == 'dark'){
document.head.insertAdjacentHTML("beforeend", `
<style>
.reduceLight { filter:brightness(70%); }
</style>
`);
} else {
document.head.insertAdjacentHTML("beforeend", `
<style>
.reduceLight { filter: brightness(100%); }
</style>
`);
}





}


//var theme = conf["confThemeMain"];
var themeListLight = [
"light",
"l-blue",
"l-green",
"l-merino",
"l-olive",
"l-orange",
"l-pink",
"l-purple",
"l-plum",
"l-red",
"l-sea",
"l-seashell",
"l-violet",
"l-yellow"
];

var themeListOther = [
"o-blue",
"o-green",
"o-lime",
"o-mint",
"o-olive",
"o-orange",
"o-pink",
"o-plum",
"o-purple",
"o-red",
"o-sea",
"o-silver",
"o-violet",
"o-yellow"
];

var themeListDark = [
"dark",
"d-green",
"d-blue",
"d-forest",
"d-orange",
"d-pink",
"d-plum",
"d-red",
"d-sea",
"d-slate",
"d-violet",
"d-yellow"
];

var themeListOtherDark = [
"od-blue",
"od-brown",
"od-green",
"od-gray",
"od-forest",
"od-pink",
"od-plum",
"od-purple",
"od-red",
"od-olive",
"od-sea",
"od-slate",
"od-violet",
"od-yellow",
];

var themeListHContrast = [
"h-contrast-l",
"h-contrast-d"
];

// fav from others
var themeListBest = [
"light",
"l-green",
"l-merino",
"l-olive",
"l-orange",
"l-yellow",

"dark",
"d-blue",
"d-forest",
"d-green",
"d-sea",
"d-slate",
"d-violet",

"o-yellow",
"o-lime",
"o-orange",
"o-olive",
"o-silver",

"od-blue",
"od-green",
"od-gray",
"od-sea",
"od-slate",
"od-violet"
];



var themeListOption2 = [
"rand-l",
"rand-o",
"rand-d",
"rand-od",
//"rand-h-contrast",
"rand-best",

"rand-all-l",
"rand-all-d",
"rand-all",

"auto-time",
"auto-t-h-contrast",
"auto-t-rand",
"auto-t-rand-all",

"auto",
"auto-h-contrast",
"auto-rand",
"auto-rand-all",

];

// all light theme
var themeListAllLight = [];
themeListAllLight.push(...themeListLight);
themeListAllLight.push(...themeListOther);
themeListAllLight.push("h-contrast-l");

// all dark theme
var themeListAllDark = [];
themeListAllDark.push(...themeListDark);
themeListAllDark.push(...themeListOtherDark);
themeListAllDark.push("h-contrast-d");

// all theme
var themeList = [];
themeList.push(...themeListLight);
themeList.push(...themeListOther);
themeList.push(...themeListDark);
themeList.push(...themeListOtherDark);
themeList.push(...themeListHContrast);



var themeListOption = [];
themeListOption.push(...themeList);
themeListOption.push(...themeListOption2);




conf["confRealTmpTheme"] = '';
conf["confThemeEmbed"] = '';

    
function themeAuto(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"] = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoHContrast(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"] = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoRandom(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = themeListDark[fuMRandom(0, themeListDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"]  = themeListLight[fuMRandom(0, themeListLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoRandomAll(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"]  = themeListAllDark[fuMRandom(0, themeListAllDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"]  = themeListAllLight[fuMRandom(0, themeListAllLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function fuMSetTheme(mode){

/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.cookie = "theme=dark; SameSite=None; Secure; path=/";
} else {
document.cookie = "theme=light; SameSite=None; Secure; path=/";
}*/

/*themeList.forEach((element) => {
if (mode == element){
//document.getElementById('theme').href = '/css/' + mode + '.css';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
})*/

var themeSelect;
if (themeList.includes(mode) == true){ themeSelect = mode; }


switch (mode) {

case 'auto-time':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"]   = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-h-contrast':
themeAutoHContrast();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAutoHContrast();
});
break;

case 'auto-t-h-contrast':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"] );
} else {
conf["confRealTmpTheme"]   = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-t-rand':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListDark[fuMRandom(0, themeListDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
} else {
conf["confRealTmpTheme"]  = themeListLight[fuMRandom(0, themeListLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;

case 'auto-t-rand-all':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListAllDark[fuMRandom(0, themeListAllDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
} else {
conf["confRealTmpTheme"]  = themeListAllLight[fuMRandom(0, themeListAllLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;


/*case 'rand-all-blink':
themeRandomAllBlink();
//var interval2 = setInterval(themeRandomAllBlink, 4000);
break;*/

case 'auto-rand':
themeAutoRandom();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAutoRandom();
});
break;

case 'auto-rand-all':
themeAutoRandomAll();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAutoRandomAll();
});
break;

case 'rand-l':
conf["confRealTmpTheme"] = themeListLight[fuMRandom(0, themeListLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-d':
conf["confRealTmpTheme"] = themeListDark[fuMRandom(0, themeListDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-o':
conf["confRealTmpTheme"] = themeListOther[fuMRandom(0, themeListOther.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-od':
conf["confRealTmpTheme"] = themeListOtherDark[fuMRandom(0, themeListOtherDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-l':
conf["confRealTmpTheme"] = themeListAllLight[fuMRandom(0, themeListAllLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-d':
conf["confRealTmpTheme"] = themeListAllDark[fuMRandom(0, themeListAllDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-h-contrast':
conf["confRealTmpTheme"] = themeListHContrast[fuMRandom(0, themeListHContrast.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-best':
conf["confRealTmpTheme"] = themeListBest[fuMRandom(0, themeListBest.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all':
conf["confRealTmpTheme"] = themeList[fuMRandom(0, themeList.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;


case 'none':
case 'empty':
case 'bad':
case themeSelect:
conf["confRealTmpTheme"] = mode;
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

// auto  
default:
themeAuto();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAuto();
});
break;
}

let mForseStatus = '';
if (conf["confTheme"] != mode){ mForseStatus = "[force] "; }

// print theme mode and name in footer
if (document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = `Theme: ${mForseStatus}${mode} (${conf["confRealTmpTheme"]})`;
}


}

fuMSetTheme(theme);

function fuMThemeEmbed(){
if (conf["confRealTmpTheme"].search("dark|d-|-d") != -1){
conf["confThemeEmbed"] = 'dark';
} else {
conf["confThemeEmbed"] = 'light';
}
}

/* // disabled for if not theme, Unexpected behavior
window.addEventListener('storage', () => {
if (theme != conf["confTheme"]){
fuMSetTheme(conf["confTheme"]);
}
});
*/
// end Themes changer


// CSS
// random bg image (background img with random position)
function fuMBg(val){
if (conf["confBg"] == 'on'||val == 'on'){
let mBg = fuMRandomItem("bg.svg");
let mBgDark = fuMRandomItem("bg-dark.svg");
let mRandBgPos = fuMRandom(0, 100);
let mRandBgPos2 = fuMRandom(0, 100);
if (conf["confThemeEmbed"] == 'light'){
fuMPrintText('style', `
<style>
body{
background-image: url("../../../img/${mBg}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`, 'plus');
} else {
fuMPrintText('style', `
<style>
body{
background-image: url("../../../img/${mBgDark}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`, 'plus');
}



}
}
// random bg image

function fuMReload(){ location.reload(true); }














