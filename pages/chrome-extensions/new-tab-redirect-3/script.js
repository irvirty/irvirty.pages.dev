// v.1.1.0
// Chrome

//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);
}

function onGot(item) {
  let rUrl = "options.html";
  if (item.rUrl) {
    rUrl = item.rUrl; 
  }
newTabRedir(rUrl);
}



function newTabRedir(rUrl){
//if(String(window.location.href).indexOf('moz-extension://') >= 0&&String(window.location.href).indexOf('/new-tab-redirect.html') >= 0){ 

// stop infinite redirect current page
let stopRedirect = window.location.href.split('/');
stopRedirect = stopRedirect[stopRedirect.length - 1];
if(String(rUrl).indexOf(stopRedirect) >= 0){ 
console.log(`redirect stoped for ${rUrl}`);
rUrl = 'options.html';
}


/*
// first 1 redirect
//https://stackoverflow.com/questions/10982593/open-link-in-new-window-or-focus-to-it-if-already-open
//window.open('http://localhost/','mywindow').focus();
window.open(rUrl,'newTab').focus();
//window.location.replace("http://localhost/");
window.close();
*/

//old delme
/*
// second 2 redirect
//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
//browser.tabs.create({
// https://developer.chrome.com/docs/extensions/reference/tabs/
chrome.tabs.create({
url: rUrl
});
window.close();
*/


// second 2 redirect
function onCreated(tab) {
//console.log(`Created new tab: ${tab.id}`);
}


function onError(error) {
console.log(`Error: ${error}`);
}

//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create
let creating = chrome.tabs.create({
url: rUrl,
});
creating.then(onCreated, onError);
window.close();
//rUrl - redirect url

}

//const getting = browser.storage.sync.get("rUrl");
//const getting = browser.storage.local.get("rUrl");
const getting = chrome.storage.local.get("rUrl");
getting.then(onGot, onError);








