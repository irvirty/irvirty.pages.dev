// tags v.1.5.0


<!-- tag cloud 1.2.0 -->

let tagBody = `<aside>
<div class="wrapper2 tCenter">

<div id="printTagsHeader"></div>

<div id="printTags" class="balance notUnderline"></div>

<div class="wrapper small">
<div><span class="notUnderline" id="printMode"></span><span id="tagRandom"></span></div>
</div>

<div id="tagListEditForm"></div>

</div>
</aside>`;

if (document.getElementById("tagBogy") !== null){
document.getElementById("tagBogy").innerHTML = tagBody;
}

<!--// tag cloud -->



if (conf["confTagCloudlStatus"] == "on"){

document.getElementById("printTagsHeader").innerHTML = `

<div class="bold padding medium">
<a class="op brand notUnderline" href="/projects/redirects-25/?q=s" title="Web Explore:</a>
</div>

<div class="padding"></div>

`;



//window.addEventListener('load', function() {});

function tagListCloud(mode){

let tagModePrint = "";

if (mode == undefined||mode == ""){
mode = localStorage.getItem("tagModeData");
} else if (mode != "edit"){
localStorage.setItem("tagModeData", mode);
}

if (mode == null||mode == undefined){ mode = "Search"; }

let tagListSortConf = localStorage.getItem("tagListSortConf");

let tagListColor = `red orange yellow green blue indigo violet`;

let tagList = localStorage.getItem("tagListData");
if (tagList == null||tagList == undefined){
tagList = `
Example, Keyword, Keyword,
`;
}

let arr = fuMSplit(tagList);

/*
if (tagListSortConf == "sort"){
arr = fuMSort(arr, "", "arr");
}*/



// new
let tagListLimit = "38";

tagCloudData = tagList;


let confSymbolForSplit = "confSymbolForSplit";
let color = fuMRandomItem(tagListColor);
let size = '';

//tagList = '';

tagCloudData = tagCloudData.replaceAll(`
`, confSymbolForSplit);
tagCloudData = tagCloudData.replace(/(?:\\[rn])+/g, confSymbolForSplit);

if (tagCloudData.indexOf(',') != -1){
tagCloudData = tagCloudData.replaceAll(',', confSymbolForSplit);
} else {
tagCloudData = tagCloudData.replaceAll(' ', confSymbolForSplit);
}

tagCloudData = tagCloudData.replaceAll('·', "");
tagCloudData = tagCloudData.replaceAll('.', " ");

tagCloudData = tagCloudData.split(confSymbolForSplit);

/*
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagCloudData.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});*/



var tagAverage = 0;
var tagTotal = 0;

// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// make uniq and count, object
var tagListCount = {};
tagCloudData.forEach(function (x) {
x = x.trim();
if (x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});



// Taglist limit
//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// sort object by value
let entries = Object.entries(tagListCount);
let tagListCountSorted = entries.sort((a, b) => a[1] - b[1]);
tagListCountSorted.reverse();


// Taglist limit (cut array) with sorted tag and convert to old object, sorted previos
tagListCountLimited = {};
tagListCountSorted.forEach(function (item, key) {
if (key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});

if (tagListSortConf == "sort"){
// sort
// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
tagListCount = {};
tagListCount = Object.keys(tagListCountLimited).sort().reduce(
  (obj, key) => { 
    obj[key] = tagListCountLimited[key]; 
    return obj;
  }, 
  {}
);
}

// end Taglist limit

/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal + x;
});
tagAverage = Math.floor(tagTotal / Object.values(tagListCount).length);

var tagSize = "";
var tagColor = "";
var tagPercentage = "";

function fuTag(tagCount){
//tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
tagPercentage = (Math.floor((tagCount * 100) / tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
//console.log(tagPercentage);

// tag font-size and color
switch (true) {

case tagPercentage >= 500:
tagColor = "red";
tagSize = "xx-large";
break;

case tagPercentage >= 300:
tagColor = "orange";
tagSize = "x-large";
break;

case tagPercentage >= 250:
tagColor = "yellow";
tagSize = "large";
break;

case tagPercentage >= 100:
tagColor = "green";
tagSize = "medium";
break;

case tagPercentage >= 80:
tagColor = "blue";
tagSize = "1em";
break;

case tagPercentage >= 50:
tagColor = "indigo";
tagSize = "small";
break;

case tagPercentage >= 30:
tagColor = "violet";
tagSize = "smaller";
break;

default:
tagColor = "c2";
tagColor = fuMRandomItem(tagListColor)
tagSize = "x-small";
}

//console.log(tagColor);
//return tagColor;

}



let sortedTags = "";
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
if (tagListSortConf == "sort"){
sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare);
} else {
sortedTags = Object.entries(tagListCount);
// https://masteringjs.io/tutorials/fundamentals/foreach-object
}

//let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare);
// end new

let tagListPrint = "";

sortedTags.forEach(entry => {
const [key, value] = entry;

tag = key.trim();
tagCount = value;

fuTag(tagCount);
let printTagRandom = sortedTags[fuMRandom(0, sortedTags.length - 1)][0];
if (tag != ""){
let printTag = tag;
let printTagRandom = sortedTags[fuMRandom(0, sortedTags.length - 1)][0];

//printTag = printTag.replaceAll(/#/g, "");
//printTag = printTag.replaceAll(' ', "");

let printTagUrl = encodeURIComponent(tag.toLowerCase());
let printTagUrlRandom = encodeURIComponent(printTagRandom.toLowerCase());

if (mode === "Tag"){
printTag = printTag.replaceAll(" ", "");
printTagRandom = printTag.replaceAll(" ", "");
}

printTag = fuMClearText(printTag);
printTagRandom = fuMClearText(printTagRandom);

switch (mode) {

case 'Search':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` q">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` q">randomTag</a>`);

break;

case 'SearchOther':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` o">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` o">randomTag</a>`);

break;

case 'News':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` n">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` n">randomTag</a>`);

break;

case 'Social':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` s">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` s">randomTag</a>`);

break;

case 'Hashtag':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` ht">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` ht">randomTag</a>`);

break;

case 'GooglePS':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` ps">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` ps">randomTag</a>`);

break;

case 'edit':
tagListPrint += `<span class="inlineBlock padding">` + printTag + `</span>`;
break;

default:
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` " style="font-size: ` + tagSize + `; padding-right: 0;" href="/search/?q=` + printTagUrl + ` q">#` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + ` q">randomTag</a>`);

}
}
});

document.getElementById("printTags").innerHTML = tagListPrint;

modeSwitch(mode, tagList, tagListSortConf);

}

tagListCloud("");


function tagListSortConfSet(item){
localStorage.setItem("tagListSortConf", item);
tagListCloud("");
}


function modeSwitch(mode, tagList, tagListSortConf){

let tagModePrint = "";
let tagsModeList = `Search SearchOther News Social Hashtag GooglePS`;

let arr = fuMSplit(tagsModeList);
let tagListPrint = `<span class="op">mode:</span>`;
arr.forEach((val, index) => {
if (mode == val){
tagModePrint += `
<a class="inlineBlock padding op active2" href="#" onclick="tagListCloud('` + val +`'); return false;">` + val +`</a>
`;
} else {
tagModePrint += `
<a class="inlineBlock padding op brand" href="#" onclick="tagListCloud('` + val +`'); return false;">` + val +`</a>
`;
}
});




if (tagListSortConf == "sort"){

tagModePrint += `
<span class="op gray">/</span>
<a class="inlineBlock padding op gray" title="Close" href="#" onclick="tagListSortConfSet('unsort'); return false;">unsort</a>
`;
} else {

tagModePrint += `
<span class="op gray">/</span>
<a class="inlineBlock padding op brand" href="#" onclick="tagListSortConfSet('sort'); return false;">sort</a>
`;
}

if (mode == "edit"){
tagModePrint += `
<a class="inlineBlock padding op gray" title="Close" href="#" onclick="closeTagListData(''); return false;">edit</a>
`;
} else {
tagModePrint += `
<a class="inlineBlock padding op brand" href="#" onclick="tagListCloud('edit'); return false;">edit</a>
`;
}

document.getElementById("printMode").innerHTML = `<hr><span class="op gray">mode:</span> `;
document.getElementById("printMode").innerHTML += tagModePrint;

if (mode == "edit"){
document.getElementById("tagListEditForm").innerHTML = `
<form action="" method="get" class="form-example">
<textarea id="tagListEditData" rows="5">` + tagList + `</textarea>
<a class="submit block button padding2 op borderRadius2" href="#" onclick="saveTagListData(); return false;">Save</a>
<div class="tRight"><a class="submit tRight button padding2 op red borderRadius2" href="#" onclick="resetTagListData(); return false;">Reset</a></div>
  </div>
</form>
`;
}

}






function saveTagListData(){
let data = document.getElementById("tagListEditData").value;
localStorage.setItem("tagListData", data);
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

function resetTagListData(){
if (window.confirm("Are you sure?")) {
localStorage.removeItem("tagListData")
}
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

function closeTagListData(){
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

}


function printRandomTag(id, text){
if (document.getElementById("tagRandom") != undefined){
document.getElementById("tagRandom").innerHTML = text;
}
}
