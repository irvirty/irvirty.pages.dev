// All or Start Menu v.1.2.1


var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var q2 = url.searchParams.get("q2");

// fix error
if (typeof fuMHideFileNameExt != 'function'){
function fuMHideFileNameExt(text){ return text; };
}



// mini redirect
if (q != null&&q != ''){

if (q2 != null&&q2 != ''){ q += ' ' + q2; }
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";

switch (qCom) {

case 'l#':
case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
//q = encodeURIComponent(q);
q2 = "l";
break;

qEncoded = encodeURIComponent(q);
}
}

if (qCom == undefined){ qCom = ""; }

/*
if (q == ""){
window.location.href = "/search/";
window.location.href = window.location.href + '#StopRedirect'; 
}
if (q2 == "l"){
window.location.href = "/search/?q=r";
window.location.href = window.location.href + '#StopRedirect'; 
}*/
// end mini redirect




if (q != null&&q != ""){
document.getElementById("q").value = q;
q = q.trim();
startMenu("result", data, q);
}



// autofocus v.3.0.0
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
document.addEventListener("keydown", (e) => {
if(e.key.length == 1&&(document.getElementById("q").value).length == 0){
// use e.keyCode
if (document.getElementById("q") != null){
//https://stackoverflow.com/questions/30714871/check-if-an-input-field-has-focus-in-vanilla-javascript
if (document.activeElement.tagName !== "INPUT"){
//https://stackoverflow.com/questions/4676321/how-do-i-make-a-field-autofocus
document.getElementById("q").focus();
//document.getElementById("q").value = e.keyCode;
q = e.key;
q = q.trim();
startMenu("result", data, q);
}
}
}
});









//https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
//input.addEventListener("input", updateValue);
//ocument.addEventListener("input", updateValue);
document.getElementById("q").addEventListener("input", updateValue);

function updateValue(e) {
//log.textContent = e.target.value;
q2 = "";
q = e.target.value;
q = q.trim();
startMenu("result", data, q);
}


function startMenu(printId, data, q){


if (document.getElementById("pagesList") != null){
if (q != ''&&q != null){
document.getElementById("pagesList").style.display = "none";
} else {
document.getElementById("pagesList").style.display = "block";
}
}



let confSymbolForSplit = "SYMBOLFORSPLIT";
let resultLimit = 60;
let iResult = 1;
let printPost = "";
let countHl = 0;

/*
//https://stackoverflow.com/questions/43996959/json-sorting-by-alphabetical-order
// JSON sorting
data = data.sort((a,b)=> {
var a1 = a.text.toLowerCase();
var b1 = b.text.toLowerCase();
return a1<b1 ?-1:a1> b1? 1 :0;
})*/

// s2 Search 2
if (q != ''){

//light count
countHl = 0;

//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if ((qData).search(qSearch) != -1){}
//qSearch = decodeURIComponent(q);
qSearch = (q);
qSearch = String(qSearch).toLowerCase();

data.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';
rightFooter = '';

if (item['id'] != null){ postId = item['id']; }
if (item['text'] != null){ postText = item['text']; }
if (item['text2'] != null){ postText2 = item['text2']; }
if (item['text3'] != null){ postText3 = item['text3']; }
if (item['tag'] != null){ postTag = item['tag']; }
if (item['url'] != null){ postUrl = item['url']; }
if (item['time'] != null){ postTime = item['time']; }
if (item['rightFooter'] != null){ rightFooter = item['rightFooter']; }

qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ' + postUrl);
qData = qData + " " + qData.toLowerCase()
// query
countHl = 0;
if (qData.indexOf(qSearch) != -1){

// Luck
if (q2 == 'l'){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
//comMessagePrint = `Luck search, redirect to URL: ` + sTimeRedir[2] / 1000+` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.locatiocomMessn.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = window.location.href + '#StopRedirect';
}
//console.log(postUrl);
}
// end Luck search

// light 1 word
if (postText.indexOf(q) != -1){
postText = postText.replaceAll(`${q}`, `<span class="bold borderBottomOrange">${q}</span>`);
} else if (postText.toLowerCase().indexOf(qSearch.toLowerCase()) != -1){
postText = postText.replaceAll(`${qSearch}`, `<span class="bold borderBottomOrange">${qSearch}</span>`);
}
if (postUrl.toLowerCase().indexOf(qSearch.toLowerCase()) != -1){
postUrl = `<span class="bold borderBottomOrange"><a class="brand" href="${postUrl}">${postUrl}</a></span>`;
} else {
postUrl = `<a class="brand" href="${postUrl}">${postUrl}</a>`;
}
countHl++;

if (iResult <= resultLimit&&countHl <= 1){
postUrl = fuMHideFileNameExt(postUrl);
//printPost += fuPrintPost(postId, '', postText, postTag, postTime, rightFooter, rightFooter);
printPost += `

<div class="bgList border3List borderRadius2 padding3 notUnderline">
<div style="
display: grid;
grid-template-columns: calc(100% - 20px) 20px;
">

<div>
${postText}<br>
${postUrl}
</div>

<div class="center xSmall gray tRight">${iResult}</div>

</div>
</div>
`;
}
iResult++;

qData = '';
qCom = "found";
}




});

if (iResult == 0){ qCom = "not found"; }


if (qCom != "found"){


//https://stackoverflow.com/questions/9206013/javascript-list-js-implement-a-fuzzy-search
function fuzzySearch(text, q){

String.prototype.fuzzy = function (s) {
    var hay = this.toLowerCase(), i = 0, n = -1, l;
    s = s.toLowerCase();
    for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
};

return (text).fuzzy(q); 
}


data.forEach((item, key) => {

countHl = 0;

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';
rightFooter = '';

if (item['id'] != null){ postId = item['id']; }
if (item['text'] != null){ postText = item['text']; }
if (item['text2'] != null){ postText2 = item['text2']; }
if (item['text3'] != null){ postText3 = item['text3']; }
if (item['tag'] != null){ postTag = item['tag']; }
if (item['url'] != null){ postUrl = item['url']; }
if (item['time'] != null){ postTime = item['time']; }
if (item['rightFooter'] != null){ rightFooter = item['rightFooter']; }

qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ' + postUrl);
qData = qData + " " + qData.toLowerCase()

countHl = 0;

qData = (qData + ' ').split(' ');
qData.forEach(function(item336) {

let item3367 = item336.toLowerCase();
let qSearch7 = qSearch.toLowerCase();
// query
if (fuzzySearch(item336, q) == true||fuzzySearch(item3367, qSearch7) == true){



// Luck
if (q2 == 'l'){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
//comMessagePrint = `Luck search, redirect to URL: ` + sTimeRedir[2] / 1000+` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.locatiocomMessn.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = window.location.href + '#StopRedirect';
}
//console.log(postUrl);
}
// end Luck search


// light 2
if (postText.indexOf(item336.toLowerCase()) != -1){
postText = postText.replaceAll(`${item336}`, `<span class="bold borderBottomOrange">${item336}</span>`);
} else if (postText.toLowerCase().indexOf(item336.toLowerCase()) != -1){
postText = postText.replaceAll(`${item336}`, `<span class="bold borderBottomOrange">${item336}</span>`);
}
if (postUrl.toLowerCase().indexOf(item336.toLowerCase()) != -1){
postUrl = `<span class="bold borderBottomOrange"><a class="brand" href="${postUrl}">${postUrl}</a></span>`;
} else {
postUrl = `<a class="brand" href="${postUrl}">${postUrl}</a>`;
}
countHl++;


if (iResult <= resultLimit&&countHl <= 1){
//printPost += fuPrintPost(postId, '', postText, postTag, postTime, rightFooter, rightFooter);
printPost += `

<div class="bgList border3List borderRadius2 padding3 notUnderline">
<div style="
display: grid;
grid-template-columns: calc(100% - 20px) 20px;
">

<div>
${postText}<br>
${postUrl}
</div>

<div class="center xSmall gray tRight">${iResult}</div>

</div>
</div>
`;
}
iResult++;

qData = '';
qCom = "found";


}
});


});
}


}

if (qCom != 'found') { printPost = `<div class="bgList border3List borderRadius2 padding3">Probably not found</div>`; }
// end s2 Search 2

if (iResult >= 1){
printPost += `
<br>
<div class="tRight small"><spna class="gray">Result limit: ${resultLimit}</span></div>`;
}

document.getElementById(printId).innerHTML = printPost;

if (q == null|| q == ""){
document.getElementById(printId).innerHTML = "";
}

qCom = "";
iResult = 0;
printPost = "";

}



