// v.1.1.2


var print = `
result
`;

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var q2 = url.searchParams.get("q2");


let jsonVar = countriesJsonVar;

//https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
//input.addEventListener("input", updateValue);
//ocument.addEventListener("input", updateValue);
document.getElementById("q").addEventListener("input", updateValue);

function updateValue(e) {
//log.textContent = e.target.value;
q2 = "";
q = e.target.value;
q = q.trim();
travel(q, jsonVar);
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





//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
jsonVar = jsonVar.slice(0);
jsonVar.sort(function(a,b) {
    var x = a.text.toLowerCase();
    var y = b.text.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});


function travel(q, jsonVar){

print = "";
let totoalVt = 0;
let tagCloudData = "";
let checkSeachFound = "not found";


// print
if (q == undefined||q == ""){
jsonVar.forEach((val, index) => {

tagCloudData += val["text3"] + " ";
//tagCloudData += val["text3"] + " " + val["text4"] + " ";

print += getVtItem(val["text"], val["text2"], val["text3"], val["text4"], val["text5"], val["text6"], val["text7"], encodeURIComponent(val["text"]), val["text8"],);

totoalVt++;
});
}



// search 1
if (q != undefined&&q != ""&&checkSeachFound != "found"){

tagCloudData = "";
print = "";
totoalVt = 0;

jsonVar.forEach((val, index) => {

tagCloudData += val["text3"] + " ";

if ((val["text"] + " " + val["text3"]).toLowerCase().indexOf(q.toLowerCase()) != -1){
checkSeachFound = "found";

print += getVtItem(val["text"], val["text2"], val["text3"], val["text4"], val["text5"], val["text6"], val["text7"], encodeURIComponent(val["text"]), val["text8"],);

totoalVt++;
}


});
}

// search 2
if (q != undefined&&q != ""&&checkSeachFound != "found"){

tagCloudData = "";
print = "";
totoalVt = 0;

jsonVar.forEach((val, index) => {

tagCloudData += val["text3"] + " ";

if ((val["text"] + " " + val["text2"] + " " + val["text3"] + " " + val["text4"] + " " + val["text5"] + " " + val["text6"] + " " + "text7").toLowerCase().indexOf(q.toLowerCase()) != -1){
//if ((val["text"] + " " + val["text3"]).toLowerCase().indexOf(q.toLowerCase()) != -1){
checkSeachFound = "found";

print += getVtItem(val["text"], val["text2"], val["text3"], val["text4"], val["text5"], val["text6"], val["text7"], encodeURIComponent(val["text"]), val["text8"],);

totoalVt++;
}


});
}

checkSeachFound != "";


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomVt = getRandomInt(jsonVar.length)
let randomVt2 = getRandomInt(jsonVar.length)
let randomVt3 = getRandomInt(jsonVar.length)

let randomVtPrint = "";

randomVtPrint += getVtItem(jsonVar[randomVt]["text"], jsonVar[randomVt]["text2"], jsonVar[randomVt]["text3"], jsonVar[randomVt]["text4"], jsonVar[randomVt]["text5"], jsonVar[randomVt]["text6"], jsonVar[randomVt]["text7"], encodeURIComponent(jsonVar[randomVt]["text"]), jsonVar[randomVt]["text8"],);


if (q != undefined&&q != ""){

randomVtPrint = "";
if (document.getElementById("totalVt") != null){
document.getElementById("totalVt").innerHTML = ""; 
}

} else {



randomVtPrint = `

<div id="random" class="padding tCenter op"><h2>Random:</h2></div>
<div class="autoColumn blockMobile">
${randomVtPrint}
</div>

<div class="margin padding"></div>

<div class="center"><a href="./#random" class="button wrapperSmall2 submit border op borderRadius2" onclick="fuMReload();">Reload</a></div>
<div class="margin2"></div>

`;
}


print = `


${randomVtPrint}

<div class="margin padding"></div>

<h2 id="list"><div class="tCenter padding2List op">
List, total: <span id="totalVt" class="bold"></span>
</div></h2>

<div class="autoColumn blockMobile">
${print}
</div>

<div class="margin2 padding2"></div>
<div id="tagCloud"></div>


`;

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}

if (document.getElementById("totalVt") != null){
document.getElementById("totalVt").innerHTML = totoalVt; 
}








// embed style
document.head.insertAdjacentHTML("beforeend", `

<style>
/*.vTHide { display: none; }
.vTShow:hover {
.vTHide { display: block; }
}*/
</style>
`);






function getVtItem(vTTitle, vTEmoji, vTLang, vTDomain, vTDesc, vTSource, vTLinks, vTQGo, vTGTrend){

if (vTGTrend == undefined){ vTGTrend = vTDomain; }

let vTLangPrint = "";
vTLang = (vTLang + " ").split(" ");
vTLang.forEach((valLang, indexLang) => {
valLang = valLang.trim();
if (valLang != ""&&valLang != undefined){
vTLangPrint += `<a class="inline padding brand" style="padding-right: 0;" href="./?q=${encodeURIComponent(valLang)}">${valLang}</a>, `;
}
});

vTLangPrint = `
<div class="padding small op">
<hr>
Language: ${vTLangPrint}
</div>
`;

/*
let vTLinksPrint = "";
vTLinks = (vTLinks + " ,").split(",");
vTLinks.forEach((valLink, indexTvLink) => {
valLink = valLink.trim();
if (valLink != ""&&valLink != undefined){
vTLinksPrint += `<a class="inlineBlock padding brand" style="padding-left: 0;" target="blank" href="${valLink}">${valLink}</a><br>`;
}
});*/

vTLinksPrint = vTLinks;

vTLinksPrint = `
<div class="padding small op">
<hr>
Links:<br>
${vTLinksPrint}
</div>
`;


let linksDomainCheckPrint = "";
let linksDomain = vTTitle.replaceAll(" ", "");
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://${linksDomain}.com">${linksDomain}.com</a><br>`.toLowerCase();
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://${linksDomain}.org">${linksDomain}.org</a><br>`.toLowerCase();
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://${linksDomain}.net">${linksDomain}.net</a><br>`.toLowerCase();
linksDomainCheckPrint += `<hr>`;
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://${linksDomain}.${vTDomain}">${linksDomain}.${vTDomain}</a><br>`.toLowerCase();
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://travel.${vTDomain}">travel.${vTDomain}</a><br>`.toLowerCase();
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://news.${vTDomain}">news.${vTDomain}</a><br>`.toLowerCase();
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://radio.${vTDomain}">radio.${vTDomain}</a><br>`.toLowerCase();
linksDomainCheckPrint += `<a class="brand inlineBlock padding" style="padding-left: 0;" target="blank" href="http://tv.${vTDomain}">tv.${vTDomain}</a><br>`.toLowerCase();

linksDomainCheckPrint = `

<div class="border borderRadius2 padding2 small">
<span class="small gray">Check domain:</span><br>
<div class="underlineHover">
${linksDomainCheckPrint}
</div>
</div>

`;

//disable
linksDomainCheckPrint = "";


//style="width: 100%; max-width: calc(var(--wrapper2) / 3); min-width: 1fr;"

vTDesc = fuMClearText(vTDesc);

let vTDomainGTrendGO = (vTGTrend.toUpperCase()).trim();

return `


<div class="vTShow autoColumntItem border bgList notUnderline blockMobile" >
<div class="keepPost wrapperSmall2 padding3 w100Mobile h100Mobile">
<div class="keepPpostContent">

<h2 class="brake2"><span class="h2 ico">${vTEmoji}</span> ${vTTitle}</h2>

<div class="autoColumn notUnderline tCenter small">
<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} q">Search</a>

<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} wik">Wikipedia</a>

<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=Travel to ${vTQGo} v">Video</a>

<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="https://trends.google.com/trending?geo=${vTDomainGTrendGO}&hours=24">Google Trends</a>


<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} s">In Social Networks</a>
<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} n">In News</a>
<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} Top Newspapers">Top Newspapers</a>

<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} Television">Television</a>
<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} Radio">Radio</a>

<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=Government of ${vTQGo}">Government</a>
<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} national television">National Television</a>
<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=${vTQGo} national radio">National Radio</a>

<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="/?q=Most Visited Websites in the ${vTQGo}">Top Sites</a>

<a class="autoColumnItem inline padding border light3 borderRadius2" target="blank" href="https://www.google.com/maps/?q=${vTQGo}">Map</a>

</div>

</div>

<div class="keepPostFooter small">

${vTLangPrint}

${vTLinksPrint}

${linksDomainCheckPrint}


<hr>
<details>
<summary class="pointer paddingList marginList brand small">Info:</summary>
<div class="info">
${vTDesc}
<hr>
${vTSource}
</div>
</details>

</div>
</div>
</div>

`;
}


if (q != null&&q != undefined&q != ""){
fuTagCloud("tagCloud", tagCloudData, q, "", "./");
} else {
fuTagCloud("tagCloud", tagCloudData, q, "", "./");
}
// end tag cloud

}


travel("", jsonVar);

let titleTmp = document.title;

if (q != null&&q != ""){
q = q.trim();
travel(q, jsonVar);
document.getElementById("q").value = q;
document.getElementsByTagName('title')[0].innerHTML = q + ' - ' + titleTmp;
}


/*
// tag cloud
var url = new URL(window.location);
var q = url.searchParams.get("q");

if (q != null&&q != undefined&q != ""){
fuTagCloud("tagCloud", tagCloudData, q, "", "./");
} else {
//fuTagCloud("tagCloud", tagCloudData, q, "", "./");
}
// end tag cloud
*/
