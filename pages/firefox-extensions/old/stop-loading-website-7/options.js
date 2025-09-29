// v.1.1.0



// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page


//store local
//https://news.ycombinator.com/item?id=25218240

function saveOptions(e) {
//e.preventDefault();
//browser.storage.sync.set({
browser.storage.local.set({
//dataUrlStopLoadList: document.querySelector("#q").value
dataUrlStopLoadList: document.getElementById("q").value
});
//document.querySelector("#msg").innerHTML = 'status: '+document.querySelector("#q").value;
e.preventDefault()
}


function setCurrentChoice(result) {
// document.querySelector("#q2").value = result.dataUrlStopLoadWebsiteList || "https://example.com";
//document.querySelector("#q").value = result.dataUrlStopLoadList || "";
document.getElementById("q").value = result.dataUrlStopLoadList || "";
}

function onError(error) {
console.log(`Error: ${error}`);
}

function restoreOptions(){
//let getting = browser.storage.sync.get("dataUrlStopLoadList");
var getting = browser.storage.local.get("dataUrlStopLoadList");
  getting.then(setCurrentChoice, onError);
}


document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


