// v.1.3.0


let countUrlRedirectCancelStatus = ''; // if input cancel, not open URL


//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);
}


function onGot(result) {
// if not set key
let getData = [/*
{"UrlFirst":"http://test.com/","urlSecond":"https://google.com/"},
{"UrlFirst":"http://example.com/","urlSecond":"https://bing.com/"}*/
];

if(result.dataUrlRedirectList) {
//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
getData =  JSON.parse(result.dataUrlRedirectList);

urlRedirect(getData);


// testme
onhashchange = (event) => {
urlRedirect(getData);
}
}

}





async function urlRedirect(getData){

var currentUrl = location.href;
var rUrl = '';
var rUrlCom = '';
var count = 0;

// list URL from settings

for (var index = 0; index < getData.length; index++){




if(rUrlCom != 'redirect'){

let urlFirst = getData[index].urlFirst;
let urlSecond =  getData[index].urlSecond;

let urlFirstClean = urlFirst.replaceAll('!replaceAll', '');
let urlSecondClean = urlSecond.replaceAll('!replaceAll', '');
urlFirstClean = urlFirstClean.replaceAll('!replace', '');
urlSecondClean = urlSecondClean.replaceAll('!replace', '');


if(rUrlCom != 'redirect'&&urlFirst != ''&&urlSecond != ''&&urlFirstClean != urlSecondClean&&urlSecondClean != location.href){

// 1 if strict by URL ==
// if http (URL)
if(urlFirstClean == location.href){
rUrl = urlSecondClean;
rUrlCom = 'redirect';
count++;
console.log("redirect1 (extension)");
}

if(urlFirst.indexOf('!replaceAll') != -1||urlSecond.indexOf('!replaceAll') != -1){

// 2.1 by word in URL replace, all
// if not http (word)
// with query

if(location.href != urlSecondClean&&count == 0&&rUrlCom != 'redirect'&&location.href.indexOf(urlFirstClean) != -1){
rUrl = (String(location.href).replaceAll(`${urlFirstClean}`, `${urlSecondClean}`)).trim();
rUrlCom = 'redirect';
count++;
console.log("redirect2.2 (extension)");
}
}


if(urlFirst.indexOf('!replace') != -1||urlSecond.indexOf('!replace') != -1){

// 2.2 by word in URL replace, once
if(location.href != urlSecondClean&&count == 0&&rUrlCom != 'redirect'&&location.href.indexOf(urlFirstClean) != -1&&location.href.indexOf(urlSecondClean) == -1){
rUrl = (String(location.href).replace(`${urlFirstClean}`, `${urlSecondClean}`)).trim();
rUrlCom = 'redirect';
count++;
console.log("redirect2.2 (extension)");
}
}





}
}
}

/*console.log(window.location);
console.log(rUrl);*/
if(countUrlRedirectCancelStatus != 'cancel'&&rUrl != ''&&location.href != rUrl&&rUrlCom == 'redirect'){
window.location.href = rUrl;
countUrlRedirectCancelStatus = 'cancel';
//console.log(countUrlRedirectCancelStatus);
}


rUrl = '';
rUrlCom = '';
count = 0;

//console.log('test'.replaceAll(`test`, `testTest2`));

}





function redirectUrlRunAll(rUrlMode){
//const getting = browser.storage.sync.get("dataUrlRedirectList");
const getting = browser.storage.local.get("dataUrlRedirectList");
getting.then(onGot, onError);
}

redirectUrlRunAll();


//https://stackoverflow.com/questions/34999976/detect-changes-on-the-url
// when click link
// store url on load
let currentPage = location.href;
// listen for changes
setInterval(function(){
if(currentPage != location.href){
//console.log(currentPage + '||||||' + location.href);
currentPage = location.href;
redirectUrlRunAll();
}
}, 2000);



