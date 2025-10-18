// v.1.0.0

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
// background-script.js
function handleMessage(request, sender, sendResponse) {
//console.log(`A content script sent a message: ${request.greeting}`);
//sendResponse({ response: "Response from background script" });

if (request.greetingSetTheme){
browser.management.setEnabled(request.greetingSetTheme, true);
}

sendResponse({ response: "Response from background script" });

}

browser.runtime.onMessage.addListener(handleMessage);
