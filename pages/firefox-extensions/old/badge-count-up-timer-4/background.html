// v1.0.2


// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
browser.runtime.onStartup.addListener(() => {
// for start extension
});

var sec = 0;
var mode = 'minute';
var printBage = 0;

/*
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
self.onmessage = (event) => {
  // event is an ExtendableMessageEvent object
//console.log(`The client sent me a message: ${event.data}`);
sec = 0;
event.source.postMessage("refreshed");
};*/


// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
// background-script.js
function handleMessage(request, sender, sendResponse) {
/*  console.log(`A content script sent a message: ${request.greeting}`);
  sendResponse({ response: "Response from background script" });*/

if (request.greeting == 'refresh'){
sec = 0;
sendResponse({ response: "refreshed" });
}
sec = 0;

// update mode
if (request.greeting2){
mode = request.greeting2;
sendResponse({ response: mode });

//browser.storage.sync.set({
browser.storage.local.set({
mode: mode,
});


}

}

browser.runtime.onMessage.addListener(handleMessage);



// mode
// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) { console.log(`Error: ${error}`); }
function modeGet(item) {
mode = item['mode'];
}
//const getting = browser.storage.sync.get("mode");
const getting = browser.storage.local.get("mode");
getting.then(modeGet, onError);





// timer
function normalize(a){
if (a <= 9){ a = '0' + a; }
return a;
}



function fuStopwatch(){

let h = normalize(Math.floor(sec / 3600));
let m = normalize(Math.floor(sec % 3600 / 60));
let s = normalize(Math.floor(sec % 3600 % 60));

var time = String(h + ':' + m + ':' + s);
var time2 = String(h + '' + m);


//let sending = chrome.runtime.sendMessage({    greeting: status  });

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/switch
switch (mode) {
case 'hour':
//printBage = String(h) + ':' + m.slice(0, 1);
printBage = String(h);
break;

case 'minute':
//printBage = String(h.slice(1, 2))+':' + m;
printBage = String(m);
break;

case 'second':
//printBage = String(m.slice(1, 2))+':' + s;
printBage = String(s);
break;

default:
//printBage = String(h.slice(1, 2))+':' + m;
printBage = String(m);
}

browser.browserAction.setBadgeBackgroundColor({'color': '#F2F2F2'});
browser.browserAction.setBadgeText({text: printBage});


//console.log(printBage);

sec++;
}

//browser.storage.sync.set({
browser.storage.local.set({
mode: mode,
});

setInterval(fuStopwatch, 1000);


