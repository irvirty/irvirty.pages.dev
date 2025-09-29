// Stop load website extension v.1.1.0

let extName = " Extension: Stop loading website ";

//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);
}

function onGot(result) {
//let getData = ["https://example.com/", "https://example.com/"];
var getData = "https://example.com/";

if(result.dataUrlStopLoadList) {
getData =  result.dataUrlStopLoadList;
fuExtStopLoadCheck(getData);
} else {
//fuExtStopLoadCheck(getData);
}

}



function fuExtStopLoadCheck(filterList){

//https://stackoverflow.com/questions/767486/how-do-i-check-if-a-variable-is-an-array-in-javascript
if (filterList.constructor === Array){
filterList = filterList.join(',');
}

var delimiter = ["|", ",", " ", "\r\n", "\r", "\n"];
delimiter.forEach((value33) => {
filterList = filterList.replaceAll(value33, "SYMBOLFORSPLIT");
});

filterList = filterList.split("SYMBOLFORSPLIT");


for (let i = 0; i < filterList.length; i++) {
var element = filterList[i].trim();
//console.log(element);

element = element.trim();

if (element != ""){

let blcokSiteUrl = String(location.href);

if (blcokSiteUrl.indexOf(element) != -1){
//console.log(element);
fuExtStopLoad(element);
break;
}

/*test del me
let blockSiteElement2 = element;
//blockSiteElement2 = blockSiteElement2.replace("https://www.", '');
//blockSiteElement2 = blockSiteElement2.replace("http://www.", '');
//blockSiteElement2 = blockSiteElement2.replace("https://", '');
blockSiteElement2 = blockSiteElement2.replace("http://", '');

if (blcokSiteUrl.indexOf(blockSiteElement2) != -1){
//console.log(element);
fuExtStopLoad(blockSiteElement2 + ` (modifed)`);
break;
}*/

}
}
}


function fuExtStopLoad(item){
/*stop();
window.stop();
window.addEventListener('load', function() {
//document.body.innerHTML = `${extName}`;
});*/


stop();
window.stop();
console.log(`${extName} || item: ${item}`);
alert(`${extName} || item: ${item}`);




/*if (confirm(`Stop page loading? (${extName})`) == true){
stop();
window.stop();
}*/
}

//const getting = browser.storage.sync.get("dataUrlStopLoadList");
const getting = browser.storage.local.get("dataUrlStopLoadList");
getting.then(onGot, onError);

//console.log('test');
