// Local main index script v.1.3.0

// Random color generator v.1.2.0
//if(document.getElementById("siteName") != null){}

//document.getElementById("footer").onload = function() {}

let mRandColorsPrint = "";

const mColors = [
"var(--c4)", "var(--brand)",
"var(--red)", "var(--orange)", "var(--yellow)", "var(--green)", "var(--blue)", "var(--indigo)", "var(--violet)",
//"var(--c4)", "var(--brand2)",
//"var(--red2)", "var(--orange2)", "var(--yellow2)", "var(--green2)", "var(--blue2)", "var(--indigo2)", "var(--violet2)"
];

let mRandColor = fuMRandom(0, mColors.length - 1);
mRandColor = mColors[mRandColor];

let mRandColor2 = fuMRandom(0, mColors.length - 1);
mRandColor2 = mColors[mRandColor2];

//console.log(mRandColor + '=' + mRandColor2);
if (mRandColor == mRandColor2){
let n = 0;
while (n < 10) {
mRandColor2 = fuMRandom(0, mColors.length - 1);
mRandColor2 = mColors[mRandColor2];
if (mRandColor != mRandColor2){
break;
}
n++;
}
}
//element.classList.add(lRancColor);

let mRandTone = fuMRandom(60, 100);
let mRandTone2 = fuMRandom(60, 100);


mRandColorsPrint += `

:root {
--cRand: color-mix(in srgb, ${mRandColor} ${mRandTone}%, ${mRandColor2});
--cRand2: color-mix(in srgb, ${mRandColor2} ${mRandTone2}%, ${mRandColor});
}

.cRand { color: var(--cRand); }
.cRand2 { color: var(--cRand2); }

.insertIcon svg *, .headerBannerImg svg *{
fill: var(--cRand) !important;
stroke: var(--cRand2) !important;
}

`;


/*
var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = mRandColorsPrint;*/

//https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync(mRandColorsPrint);
// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];

//alert(document.getElementsByTagName("footer")[0].style.backgroundColor);
// end Random color




// fix main nav "up" v.1.2.1

//if(document.getElementById("mNavUp") != null){
if (document.getElementsByClassName("mClassNavUp")[0] != null){
let mNavUpCheck = new String(window.location.pathname);
let mNavUpCheckLevel = Number((mNavUpCheck.split("/")).length);
var allMClassNavUp = document.querySelectorAll(".mClassNavUp");
allMClassNavUp.forEach((item, index) => {

//delme if (mNavUpCheckLevel == 2&&mNavUpCheck != "/"||String(window.location.href).indexOf("file://") != -1){}

if (mNavUpCheck == "/"){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("/all/");
//document.getElementsByClassName("mClassNavUp")[index].text = "Archive (All)";
}

if (mNavUpCheckLevel <= 3&&String(mNavUpCheck).indexOf("/pages/") != -1||mNavUpCheckLevel <= 3&&String(mNavUpCheck).indexOf("list") != -1){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("./");
}
if (mNavUpCheck == "/pages/"||mNavUpCheck == "/other-pages/"){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("../");
}
if (String(mNavUpCheck).indexOf("/all/") != -1){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("/");
}

});
};





