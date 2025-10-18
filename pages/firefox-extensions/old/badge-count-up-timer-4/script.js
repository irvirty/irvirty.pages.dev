// v1.0.1



var msg = '';
var print = '';
var mode = '';


/*
// mprint ode
// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) { console.log(`Error: ${error}`); }
function modeGet(item) {
mode = item['mode'];
document.getElementById('msg2').innerHTML = 'mode: '+mode;
}
//const getting = browser.storage.sync.get("mode");
const getting = browser.storage.local.get("mode");
getting.then(modeGet, onError);
*/


// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
// content-script.js

function handleResponse(message) {
console.log(`Message from the background script: ${message.response}`);

/*
// print status
if(message.response == 'refreshed'){
document.getElementById('msg').innerHTML = message.response+' (0) | ';
}else{
document.getElementById('msg2').innerHTML = 'mode: '+message.response;
}
*/
}



function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {

}


var sending = browser.runtime.sendMessage({
    greeting: "refresh",
});
sending.then(handleResponse, handleError);
//window.addEventListener("click", notifyBackgroundPage);



// https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener

document.getElementById("hour").addEventListener("click", function() { modeSet('hour'); });
document.getElementById("minute").addEventListener("click", function() { modeSet('minute'); });
document.getElementById("second").addEventListener("click", function() { modeSet('second'); });


function modeSet(mode){

sending = browser.runtime.sendMessage({
greeting2: mode,
  });
  sending.then(handleResponse, handleError);

//document.getElementById('msg2').innerHTML = 'mode: '+mode;


}








