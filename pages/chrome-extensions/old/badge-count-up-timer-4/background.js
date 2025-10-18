// v1.0.1


// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
chrome.runtime.onStartup.addListener(() => {
// for start extension
});

var sec = 0;

//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
self.onmessage = (event) => {
  // event is an ExtendableMessageEvent object
//console.log(`The client sent me a message: ${event.data}`);
sec = 0;
event.source.postMessage("refreshed");
};

function normalize(a){
if (a <= 9){ a = '0' + a; }
return a;
}


function fuStopwatch(){
let h = normalize(Math.floor(sec / 3600));
let m = normalize(Math.floor(sec % 3600 / 60));
let s = normalize(Math.floor(sec % 3600 % 60));

var time = String(h + ':' + m + ':' + s);
//var time2 = String(h + '' + m);
var time2 = String(m);
//var time2 = String(s);
//let sending = chrome.runtime.sendMessage({    greeting: status  });



chrome.action.setBadgeBackgroundColor({'color': 'white'});
chrome.action.setBadgeText({text: time2});
sec++;
}





setInterval(fuStopwatch, 1000);


