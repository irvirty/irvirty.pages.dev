// v1.0.1

let rssButtonContentFound = "";

//https://stackoverflow.com/questions/3592475/how-to-get-head-content-of-the-current-page-with-jquery-or-js
var rssButtonContent = document.getElementsByTagName('head')[0].innerHTML;
//console.table(rssButtonContent);

rssButtonContent = rssButtonContent.replaceAll('"', 'SYMBOLFORSPLIT');
rssButtonContent = rssButtonContent.replaceAll("'", 'SYMBOLFORSPLIT');
rssButtonContentArr = rssButtonContent.split('SYMBOLFORSPLIT');
rssButtonContentArr.forEach((val, index) => {
//console.log(val + "=" + index );

if(val.indexOf('.xml') != -1||val.indexOf('.rss') != -1){
console.log('found');
console.log(val);
rssButtonContentFound += val;
var sending = browser.runtime.sendMessage({ greetingRssButtonStatus: "found" });
sending.then(handleResponse, handleError);
}

if (rssButtonContentFound == ""){ rssButtonContentFound = "not found"; }

if (document.getElementById("rssButtonContent") != null){
document.getElementById("rssButtonContent").innerHTML = rssButtonContentFound;
}

});




function handleResponse(message) {
//console.log(`Message from the background script: ${message.response}`);
//console.log(`Message from the background script`);
}

function handleError(error) {
//console.log(`Error: ${error}`);
}





