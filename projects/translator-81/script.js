// v.1.0.0

var geturl = location.href;
var url = new URL(geturl);
var tQ = url.searchParams.get("text");
var tFrom = url.searchParams.get("from");
var tTo = url.searchParams.get("to");
var tSymbolForSplit = "SYMBOLFOFSPLIT";

if (tQ != null&&tQ != ""){
if (document.getElementById("text") != null){
document.getElementById("text").value = tQ;
document.getElementById("textOrig").innerText = tQ;
}
}



if (tFrom == null||tFrom == ""){
tFrom = "en";
}

if (tTo == null||tTo == ""){
tTo = "es";
}

//https://stackoverflow.com/questions/78932/how-do-i-programmatically-set-the-value-of-a-select-box-element-using-javascript
document.getElementById('tFrom').value = tFrom;
document.getElementById('tTo').value = tTo;




function fuTranslate(from, to, text, dic, printId){
if (text != null&&text !== ""){

var print = "";

let tOrig = [];
let tTranslated = [];
let textArr = fuClearText(text, tSymbolForSplit)
textArr = textArr.split(tSymbolForSplit);

//array.push(element1, element2, ..., elementN);

textArr.forEach((valText, index) => {
if (valText !== ""){


let checkExitWord = false;
for (const val of dic) {
//dic.forEach((val, indexText) => {

let uk = val["text"];
let en = val["text2"];
let es = val["text3"];

let trOriginal = "en";
let trWord = "es";

if (tFrom === "en"){ trOriginal = "en"; }
if (tFrom === "es"){ trOriginal = "es"; }
if (tFrom === "uk"){ trOriginal = "uk"; }

if (tTo === "en"){ trWord = en; }
if (tTo === "es"){ trWord = es; }
if (tTo === "uk"){ trWord = uk; }



//valText = valText.replaceAll(tSymbolForSplit, "");
if (en == valText.toLowerCase()&&tFrom == "en"){
print += trWord;
checkExitWord = true;
break;
}
if (es == valText.toLowerCase()&&tFrom == "es"){
print += trWord;
checkExitWord = true;
break;
}
if (uk == valText.toLowerCase()&&tFrom == "uk"){
print += trWord;
checkExitWord = true;
break;
}

//});
}

if (checkExitWord === false){
print += valText;
}

}
});

document.getElementById("textTranslated").innerText = print;

}
}

fuTranslate("en", "uk", tQ, dicJsonVar, "translated");

function fuClearText(text, tSymbolForSplit){

if (text != null){
text = " " + text + " ";
text = text.replaceAll(" ", tSymbolForSplit + " " + tSymbolForSplit);
text = text.replaceAll(".", tSymbolForSplit + "." + tSymbolForSplit);
text = text.replaceAll("!", tSymbolForSplit + "!" + tSymbolForSplit);
text = text.replaceAll("-", tSymbolForSplit + "-" + tSymbolForSplit);
text = text.replaceAll(`
`, tSymbolForSplit + `
` + tSymbolForSplit);

return text;
}

}

document.getElementById("bookmarklet").innerHTML = `
<div class="tRight">
<br>
<a class="small brand inlineBlock padding" href="javascript:void(window.open('https://${conf["confUsername"]}.pages.dev/projects/translator-81/?from=auto&to=auto&text=' + encodeURIComponent(document.getSelection().toString())))">Bookmarklet</a>
</div>
`;



