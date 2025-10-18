// v.1.0.1



// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page


//store set item
//https://news.ycombinator.com/item?id=25218240



function saveOptions(e) {
e.preventDefault();

let dataHotkeySettingArr = [];


if(document.querySelectorAll('.classHotkeyId') != undefined){
let getData = document.querySelectorAll('.classHotkeyId');
getData.forEach((item, index) => {
let key = document.getElementsByClassName("classHotkeyId")[index].value;
let url = document.getElementsByClassName("classHotkeyIdUrl")[index].value;
dataHotkeySettingArr.push({key:key, url:url});
});

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
//browser.storage.sync.set({
chrome.storage.sync.set({
//browser.storage.local.set({
    hotkey: JSON.stringify(dataHotkeySettingArr)
  });
//document.querySelector("#msg").innerHTML = 'status: '+document.querySelector("#q").value;

}
}





function restoreOptions() {

function setCurrentChoice(result) {
// document.querySelector("#q").value = result.rUrl || "https://example.com";
//document.querySelector("#q").value = result.rUrl || "";

if(result.hotkey){
var getData =  JSON.parse(result.hotkey);


getData.forEach((item, index) => {
if(index != undefined&&index != "undefined"){
document.getElementsByClassName("classHotkeyId")[index].value = getData[index].key;
document.getElementsByClassName("classHotkeyIdUrl")[index].value =  getData[index].url;
}
});

}
}

function onError(error) {
    console.log(`Error: ${error}`);
  }

//let getting = browser.storage.sync.get("hotkey");
let getting = chrome.storage.sync.get("hotkey");
//let getting = browser.storage.local.get("rUrl");
getting.then(setCurrentChoice, onError);

}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


// key input listener
document.addEventListener('keydown', function(event) {
const key = event.key;
//https://stackoverflow.com/questions/37557990/detecting-combination-keypresses-control-alt-shift
if(event.keyctrlKey == true){
/*event.returnValue = false;
event.preventDefault(); */
}

//document.getElementById("keyPressed").value = event.key+' ('+event.keyCode+')';
document.getElementById("keyPressed").value = event.key;
});

