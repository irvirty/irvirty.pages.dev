// v.1.0.0

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
// background-script.js
function handleMessage(request, sender, sendResponse) {
//console.log(`A content script sent a message: ${request.greeting}`);
//sendResponse({ response: "Response from background script" });

if (request.greetingRssButtonStatus){

if (request.greetingRssButtonStatus == "found"){
//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
let settingIcon = browser.action.setIcon({
  path: {
    512: "./icon-2-512x512.png",
  },
});
} else {
//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
let settingIcon = browser.action.setIcon({
  path: {
    512: "./icon-512x512.png",
  },
});
}

}

sendResponse({ response: "Response from background script" });


}

browser.runtime.onMessage.addListener(handleMessage);



