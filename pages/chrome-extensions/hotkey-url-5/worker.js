/* v.1.0.0 */

//https://developer.chrome.com/docs/extensions/mv3/messaging/
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "knockknock");
  port.onMessage.addListener(function(msg) {

chrome.tabs.create({
url: msg.url
});

  });
});
