// v.1.1.0


// other functions keep
// tagList
function fuTagCloud(tagCloudPrintId, tagCloudData, tagQ, tagListLimit, scriptDir){


if (tagListLimit == undefined||tagListLimit == ''){ tagListLimit = '38'; }
if (scriptDir == undefined||scriptDir == ''){ scriptDir = "./"; }

let confSymbolForSplit = "confSymbolForSplit";
let color = 'silver';
let size = '';

let tagList = "";


/*tagCloudData = tagCloudData.toLowerCase();
confSymbolForSplit = confSymbolForSplit.toLowerCase();*/

//tagCloudData = tagCloudData.replaceAll(/(?:\r\n|\r|\n)/g, ' ');
tagCloudData = tagCloudData.replace(/(?:\\[rn])+/g, " ");
tagCloudData = tagCloudData.replaceAll(/,/g, confSymbolForSplit);
tagCloudData = tagCloudData.replaceAll(/ /g, confSymbolForSplit);
tagCloudData = tagCloudData.replaceAll('·', '');
tagCloudData = tagCloudData.replaceAll('.', ' ');

tagCloudData = tagCloudData.replaceAll(',', confSymbolForSplit);
tagCloudData = tagCloudData.replaceAll(' ', confSymbolForSplit);

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
if (x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});



// Taglist limit
//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// sort object by value
let entries = Object.entries(tagListCount);
let tagListCountSorted = entries.sort((a, b) => a[1] - b[1]);
//test delme tagListCountSorted.reverse();


// Taglist limit (cut array) with sorted tag and convert to old object, sorted previos
tagListCountLimited = {};
tagListCountSorted.forEach(function (item, key) {
if (key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});


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

// end Taglist limit



/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal + x;
});
tagAverage = tagTotal / Object.values(tagListCount).length;

var tagSize = '';
var tagColor = '';

function fuTag(tagCount){
//let tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
let tagPercentage = (Math.floor((tagCount * 100) / tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
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
tagSize = "x-small";
}

//console.log(tagColor);
//return tagColor;
}




//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare)

let hlClassList = '';
// https://masteringjs.io/tutorials/fundamentals/foreach-object
sortedTags.forEach(entry => {
const [key, value] = entry;


tag = key.trim();
tagCount = value;

fuTag(tagCount);


if (tag != ""){
let printTag = tag;
let printTag2 = tag.replaceAll(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = '';
if (printTag2[0] != undefined){
hlClass = 'hlClass' + printTag2[0].toLowerCase();
hlClassList += printTag2[0].toLowerCase();
}

scriptDir = fuMHideFileNameExt(scriptDir);

if (tagQ == tag){
tagList += `

<a class="keepTag light2 border2 borderRadius2 ${hlClass} c4R" href="${scriptDir}?q=${goTag}" style="background: var(--${tagColor}); font-size: ${tagSize};">${printTag}</a>

`;
} else {

tagList += `

<a class="keepTag light2 border2 borderRadius2 ${hlClass} ${tagColor}" href="${scriptDir}?q=${goTag}"  style="font-size: ${tagSize};">${printTag}</a>

`;
}
}
});

hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass' + item;
//item = item.toUpperCase();
hlClassList += `

<a id="${hlClass}" class="bg keepTag border borderRadius ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}">${item}</a>

`;
});

tagList = `

<div class="center tCenter">
<div class="wrapper2">

<div class="op small padding2">Tag cloud:</div>
<div class="keepTagList notUnderline">` + tagList + `</div>

<div class="padding2"></div>

<div class="wrapper">
<div class="tCenter keepTagList small notUnderline">
${hlClassList}
</div>
</div>

</div>
</div>

`;

if (document.getElementById(tagCloudPrintId) != null){
document.getElementById(tagCloudPrintId).innerHTML = tagList;
} else {
return tagList;
}



}

function hlwClassAdd(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("highlight2");
i++;
}
}


function hlwClassRemove(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("highlight2");
i++;
}
}

//  end tag list
