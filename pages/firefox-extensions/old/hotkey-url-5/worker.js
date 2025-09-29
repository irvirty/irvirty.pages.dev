/* v.1.0.0 */

//https://stackoverflow.com/questions/38132246/firefox-addon-send-message-from-webpage-to-background-script
browser.runtime.onMessage.addListener(

function(request, sender, sendResponse) {
if (request.url) {
//console.log(request.url+'hello received');

browser.tabs.create({
url: request.url
});


}
});
