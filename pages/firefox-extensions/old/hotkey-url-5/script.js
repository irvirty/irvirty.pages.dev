// v.1.2.1


let hotKeyCancelStatus = ''; // if input cancel, not open URL



//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);

}


function onGot(result) {
// if not set key
let getData = [/*
{"key":"F1","url":"https://google.com/"},
{"key":"F2","url":"https://bing.com/"},
{"key":"F3","url":"https://x.com/"},
{"key":"F4","url":"https://reddit.com"}*/
];

if(result.hotkey) {

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
getData =  JSON.parse(result.hotkey);
}

hotkeyRedirect(getData);
}





function hotkeyRedirect(getData){








let hotkeyKeyHistoryArr = [];
let hotkeyKeyHistoryArr2 = '';
let hotkeyKeyHistoryArr3 = '';

document.addEventListener("keydown", function(event) {

// disabe hotkey if input
//https://stackoverflow.com/questions/15637192/js-how-to-detect-whether-cursor-is-in-textfield
/*
if( event.target.nodeName.toLowerCase() == "input" || event.target.nodeName.toLowerCase() == "textarea" ) return;
if( event.target.isContentEditable ) return;*/
// // disabe hotkey if input

hotkeyKeyHistoryArr.push(event.key);

//https://stackoverflow.com/questions/23238363/code-to-get-last-2-items-from-an-array
hotkeyKeyHistoryArr = hotkeyKeyHistoryArr.slice(-4);
hotkeyKeyHistoryArr2 = hotkeyKeyHistoryArr.slice(-2);
hotkeyKeyHistoryArr2 = hotkeyKeyHistoryArr2.join('')
hotkeyKeyHistoryArr3 = hotkeyKeyHistoryArr.slice(-3), 
hotkeyKeyHistoryArr3 = hotkeyKeyHistoryArr3.join('')


getData.forEach((item, index) => {



let keyFromSetting = getData[index].key;
let urlFromSetting =  getData[index].url;

if(keyFromSetting[0] != '+'){ keyFromSetting = keyFromSetting.replaceAll('+',''); }




if(event.key == keyFromSetting||hotkeyKeyHistoryArr2 == keyFromSetting||hotkeyKeyHistoryArr3 == keyFromSetting||event.keyCode == keyFromSetting){

// clear history 3-4 key, fixed double open
hotkeyKeyHistoryArr = [];

event.returnValue = false;
event.preventDefault();

let hotkeySelection = '';
if(window.getSelection().toString().length > 0) {
// Get selected text and encode it
hotkeySelection = encodeURIComponent(window.getSelection().toString()).replace(/[!'()*]/g, escape);
}
 

urlFromSetting = urlFromSetting.replaceAll('%selection', hotkeySelection);
urlFromSetting = urlFromSetting.replaceAll('%title', encodeURIComponent(document.title));
urlFromSetting = urlFromSetting.replaceAll('%url', document.URL);
if(urlFromSetting.indexOf('%input') != -1){
let urlFromSettingInput = encodeURIComponent(String(window.prompt("input:", "")));
if(urlFromSettingInput == 'null'){
urlFromSettingInput = '';
hotKeyCancelStatus = 'cancel';
}
urlFromSetting = urlFromSetting.replaceAll('%input', urlFromSettingInput);
}
//window.open(urlFromSetting, '_blank');
//window.location.href = urlFromSetting; 


// start open link in new tab or current
if((urlFromSetting.toLowerCase()).indexOf('!blank') != -1||(urlFromSetting.toLowerCase()).indexOf('!newtab') != -1){
urlFromSetting = urlFromSetting.replaceAll('!blank', '');
urlFromSetting = urlFromSetting.replaceAll('!NewTab', '');
//https://stackoverflow.com/questions/7139103/open-page-in-new-window-without-popup-blocking
//window.open().location.href = urlFromSetting;
//window.open(urlFromSetting, 'NewTab').focus();


if(hotKeyCancelStatus != 'cancel'){
// start send to workerk for create new tab
browser.runtime.sendMessage({ url: urlFromSetting });
// end open
}

}else {
if(hotKeyCancelStatus != 'cancel'){
window.location.href = urlFromSetting; 
}
}
hotKeyCancelStatus = '';
// end open

}

})




})



};



//const getting = browser.storage.sync.get("hotkey");
const getting = browser.storage.local.get("hotkey");
getting.then(onGot, onError);










