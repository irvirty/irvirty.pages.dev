// v.1.0.3



// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page


//store set item
//https://news.ycombinator.com/item?id=25218240



function saveOptions(e) {
e.preventDefault();

let dataUrlRedirectListArr = [];


if(document.querySelectorAll('.classUrlFirst') != undefined){
let getData = document.querySelectorAll('.classUrlFirst');
getData.forEach((item, index) => {
let urlFirst33 = document.getElementsByClassName("classUrlFirst")[index].value;
let urlSecond33 = document.getElementsByClassName("classUrlSecond")[index].value;
dataUrlRedirectListArr.push({'urlFirst':urlFirst33, 'urlSecond':urlSecond33});
});

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
//browser.storage.sync.set({
//browser.storage.local.set({
chrome.storage.local.set({
    dataUrlRedirectList: JSON.stringify(dataUrlRedirectListArr)
  });
//document.querySelector("#msg").innerHTML = 'status: '+document.querySelector("#q").value;

}




}





function restoreOptions() {

function setCurrentChoice(result) {
//document.querySelector("#q").value = result.rUrl || "https://example.com";
//document.querySelector("#q").value = result.rUrl || "";

if(result.dataUrlRedirectList){
var getData =  JSON.parse(result.dataUrlRedirectList);


getData.forEach((item, index) => {
if(index != undefined&&index != "undefined"){
document.getElementsByClassName("classUrlFirst")[index].value = getData[index].urlFirst;
document.getElementsByClassName("classUrlSecond")[index].value =  getData[index].urlSecond;
}
});

}
}

function onError(error) {
console.log(`Error: ${error}`);
}

//let getting = browser.storage.sync.get("dataUrlRedirectList");
//let getting = browser.storage.local.get("dataUrlRedirectList");
let getting = chrome.storage.local.get("dataUrlRedirectList");
getting.then(setCurrentChoice, onError);

}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


