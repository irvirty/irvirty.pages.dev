// v.1.1.0
//https://github.com/mdn/webextensions-examples/tree/main/theme-switcher


var autoThemeSwitcherArr = [];


function autoThemeSwitcherSettings(confThemeMode, confThemeNameLight, confThemeNameDark, confThemeTimeDay, confThemeTimeNight){

if (document.getElementById('theme-switcher-form') != null&&document.getElementById('theme-list-light') != null&&document.getElementById('theme-list-dark') != null){


let themeSwitcherForm = document.getElementById('theme-switcher-form');

let themeListLight = document.getElementById('theme-list-light');
let themeListDark = document.getElementById('theme-list-dark');


let switchMode2 = document.querySelectorAll('.themeSwitcherMode');
switchMode2.forEach((item) => {
if (item.value == confThemeMode){
switchMode2.checked = true;
}
});


let themeTimeDay = document.getElementById('theme-time-day');
let themeTimeNight = document.getElementById('theme-time-night');
themeTimeDay.value = confThemeTimeDay;
themeTimeNight.value = confThemeTimeNight;


if (typeof arr === 'undefined'){
var arr = ["text", "test", "test2"];
}


let switchMode = document.querySelectorAll('.themeSwitcherMode');
//confThemeMode = "auto";
switchMode.forEach((item, index) => {
if (item.value == confThemeMode){
switchMode[index].checked = true;
}
});

browser.management.getAll().then((extensions) => {

  for (let extension of extensions) {
    if (extension.type !== 'theme') {
      continue;
    }
    let option = document.createElement('option');
    option.textContent = extension.name;
    option.value = extension.id;
//if (extension.enabled) {
    if (option.value == confThemeNameLight) {
option.textContent = extension.name + " (selected)";
option.selected = true;
    }
themeListLight.appendChild(option);
  }


  for (let extension of extensions) {
    if (extension.type !== 'theme') {
      continue;
    }
    let option = document.createElement('option');
    option.textContent = extension.name;
    option.value = extension.id;
//if (extension.enabled) {
    if (option.value == confThemeNameDark) {
option.textContent = extension.name + " (selected)";
option.selected = true;
    }
themeListDark.appendChild(option);
  }


});


//themeListLight.addEventListener('change', saveThemeLight);
//themeListDark.addEventListener('change', saveThemeDark);

themeSwitcherForm.addEventListener('submit', saveFormSubmit);

/*
function saveThemeLight(e){
//localStorage.setItem("confThemeNameLight", e.target.value);
autoThemeSwitcherArr[1] = e.target.value;
browser.storage.local.set({
confAutoThemeSwitcher: JSON.stringify([confThemeMode, e.target.value, confThemeNameDark, confThemeTimeDay, confThemeTimeNight])
});
enableTheme(autoThemeSwitcherArr[1]);
e.preventDefault();
//window.close();
window.location.reload();
//browser.management.setEnabled(e.target.value, true);
//e.preventDefault();
//window.close();
}

function saveThemeDark(e){
//localStorage.setItem("confThemeNameDark", e.target.value);
autoThemeSwitcherArr[2] = e.target.value;
browser.storage.local.set({
confAutoThemeSwitcher: JSON.stringify([confThemeMode, confThemeNameLight, e.target.value, confThemeTimeDay, confThemeTimeNight])
});
enableTheme(autoThemeSwitcherArr[2]);
e.preventDefault();
//window.close();
window.location.reload();
//browser.management.setEnabled(e.target.value, true);
//e.preventDefault();
//window.close();
}*/



function saveFormSubmit(e){

let themeListLight = document.getElementById('theme-list-light');
let themeListDark = document.getElementById('theme-list-dark');

for (let i = 0; i < themeListLight.length; i++) {
if (themeListLight[i].selected == true){
confThemeNamelight = themeListLight[i].value;
}
}

for (let i = 0; i < themeListDark.length; i++) {
if (themeListDark[i].selected == true){
confThemeNameDark = themeListDark[i].value;
}
}

//alert(document.querySelector('.themeSwitcherMode').checked);

let switchMode = document.querySelectorAll('.themeSwitcherMode');
switchMode.forEach((item) => {
if (item.checked == true){
confThemeMode = item.value;
}
});

let themeTimeDay = document.getElementById('theme-time-day');
let themeTimeNight = document.getElementById('theme-time-night');
confThemeTimeDay = themeTimeDay.value;
confThemeTimeNight = themeTimeNight.value;

//console.log(switchMode);
browser.storage.local.set({
confAutoThemeSwitcher: JSON.stringify([confThemeMode, confThemeNamelight, confThemeNameDark, confThemeTimeDay, confThemeTimeNight])
});

e.preventDefault();
window.location.reload();
}








}
}

//autoThemeSwitcherSettings();








function enableTheme(themeName) {
//console.log(themeName);
if (themeName != undefined){
//browser.management.setEnabled(themeName, true);
var sending = browser.runtime.sendMessage({ greetingSetTheme: themeName });

sending.then(handleResponse, handleError);

function handleResponse(message) {
//console.log(`Message from the background script: ${message.response}`);
//console.log(`Message from the background script`);
}

function handleError(error) {
//console.log(`Error: ${error}`);
}

}
}










//console.log(window.matchMedia("(prefers-color-scheme: light)").matches);




function setCurrentChoice(result){
// document.querySelector("#q").value = result.rUrl || "https://example.com";

if (result.confAutoThemeSwitcher != undefined){
var result2 = JSON.parse(result.confAutoThemeSwitcher);
//var result2 = result.confAutoThemeSwitcher;

let getMode = result2[0];
let getThemeLight = result2[1];
let getThemeDark = result2[2];
let getTimeDay = result2[3];
let getTimeNight = result2[4];


switch (result2[0]) {

case 'auto':

if (window.matchMedia('(prefers-color-scheme: light)').matches == true){
enableTheme(getThemeLight);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches == true){
enableTheme(getThemeDark);
}

break;

case 'time':

if (new Date().getHours() < Number(getTimeDay)||new Date().getHours() >= getTimeNight){
enableTheme(getThemeDark);
} else {
enableTheme(getThemeLight);
}

//https://stackoverflow.com/questions/13304471/javascript-get-code-to-run-every-minute
/*var timerID = setInterval(function() {
    // your code goes here...
}, 2 * 60 * 1000);*/

//clearInterval(timerID); // The setInterval it cleared and doesn't run anymore.

break;


default:
//console.log(`Sorry, we are out of ${expr}.`);



}

autoThemeSwitcherSettings(getMode, getThemeLight, getThemeDark, getTimeDay, getTimeNight);
} else {
autoThemeSwitcherSettings("auto", "test", "test", "8", "20");
}

}


function onError(error) {
console.log(`Error: ${error}`);
}


function restoreOptions(){
//let getting = browser.storage.sync.get("rUrl");

let getting = browser.storage.local.get("confAutoThemeSwitcher");
getting.then(setCurrentChoice, onError);

}

//browser.storage.local.remove("confAutoThemeSwitcher")



window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
const newColorScheme = event.matches ? "dark" : "light";
if (newColorScheme == "dark"||newColorScheme == "light"){ restoreOptions(); }
});

//clearInterval(timerID); // The setInterval it cleared and doesn't run anymore.


//console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
/*
//https://discourse.mozilla.org/t/how-to-stop-a-background-script-from-going-idle-in-mv3/128327
browser.alarms.create("keep-loaded-alarm-0", {
  periodInMinutes: 1
});

browser.alarms.onAlarm.addListener(() => {
  console.log("keeping extension alive - log for debug");
restoreOptions();
});*/

//console.log('test');
//"id": "auto-theme-switcher@example.com",

restoreOptions();

