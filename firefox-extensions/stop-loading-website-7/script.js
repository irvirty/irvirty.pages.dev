// Stop load website extension v.1.0.1

let extName = "Stop loading website extension ";

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
if (element != ""){
if (String(location.href).indexOf(element) != -1){
//console.log(element);
fuExtStopLoad();
break;
}
}
}


}

function fuExtStopLoad(){
/*stop();
window.stop();
window.addEventListener('load', function() {
//document.body.innerHTML = `${extName}`;
});*/
if(confirm(`Stop page loading? (${extName})`) == true){
stop();
window.stop();
window.addEventListener('load', function() {
//document.body.innerHTML = `${extName}`;
}
)
};

}

//const getting = browser.storage.sync.get("dataUrlStopLoadList");
const getting = browser.storage.local.get("dataUrlStopLoadList");
getting.then(onGot, onError);


