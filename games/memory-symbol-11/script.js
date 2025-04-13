// Memory game v.3.1.2


var limitMaintl = 20;

var i = 0;
var i2 = 0;
var tl = 0;
var print = '';
var result = '';
var resultStart = '';
var resultTmp = '';

var arrTask = [];
var arrResultFinal = [];
var arrLastTwo = [];



var counts =[];

var symbolList = '';

/*var symbolList += 
"∾∿Ææ𝔄𝔞ℵ∧∠⦤∟⊾⦝∢⍼𝔸𝕒≊𝒜∳⊽⦰ℬΒβℶ≬𝔅𝔟◯⋃⨀⨁⨂⨆★▽△⨄⋁⋀⧫▪▴◂▸␣▒░▓█=⌐𝔹𝕓⊥⋈⧉╗╔┌═─╦┴⊟⊠╝╚└║│╬¦\⧅⟈•⪮≏≎⋒∩∰⦲✓○≗↺↻⊛⊚⊝⊙®Ⓢ⊖⊕⧃⧂∲♣∷:≔@∘≅≡∯∮∐©℗↵⨯✗⋯⤸⤵⋞⋟⤽⋓≍⊍⤼¤↶↷⋎⋏‡†ℸ↡↓⊣⇊⦱⥥⇃⋄♦ϝ⋲÷⋇Ђ⌞$◌≑∔⊡⌆⇓⇐⇔⟸⟺⟹⇒⊨⇑⇕∥⤓⇵▿▾⥯Џџ⟿≕⪚⪕∅⋕½⅓¼⅕⅙⅛⅔⅖¾⅗⅜⅘⅚⅝⅞⊹⤥⤦⇿↩↪⨌∭⊷∈∬∫⋂⨗♂✠⤅↧↤↥▮∡℧∓μ∇⇖↖⤧⊗¶‰‱☎ϖ⊞⌓≾⊰Ψ⟫↠";*/

symbolList += 
"😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾";

symbolList += 
"👋 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👣 👂 🦻 👃 🫀 🫁 🧠 🦷 🦴 👀👁👅 👄 💋 🩸";

symbolList += 
"🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒🌶🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜🍯🥛 🍼 🫖 ☕️ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴🍽🥣 🥡 🥢 🧂";








// romove dublicate

symbolList = symbolList.replace(/ /g, ''); // space
symbolList = symbolList.replace(/\s/g, '');
symbolList = symbolList.replace(/\s+/g, '');
symbolList = symbolList.replace(/ /g, '');

symbolList = encodeURIComponent(symbolList);
symbolList = symbolList.replace(/%EF%B8%8F/g, '');
symbolList = decodeURIComponent(symbolList);




symbolList = [...symbolList];
symbolList = [...new Set(symbolList)]; // rm dublicate
//console.log(symbolList); 
/*
// https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
symbolList = symbolList.filter(function (el) {
return el != null && el != '';
});
console.log(symbolList); // %EF%B8%8F
*/

var symbolList2 = '';
var checkSymbol = '';
symbolList.forEach(function (x) {
counts[x] = (counts[x] || 0) + 1;
checkSymbol = x;
if(counts[x] >= 2||checkSymbol == ''){
//alert(x+' = '+counts[x]);
checkSymbol = '';
}else{
symbolList2 += checkSymbol;
}
});

 symbolList = [...symbolList2];
 var symbol = [...symbolList2];









symbol =  [...symbolList];



function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
//console.log(arr);
}

shuffleArray(symbol);

//  remove dublicate

//console.log(counts);
//console.log(symbol.length);










var maingeturl = window.location;
var mainurl = new URL(maingeturl);
var maintl = mainurl.searchParams.get("tl");

if(maintl != null){
maintl = Number(maintl);
if (isNaN(maintl)){ maintl = 4; }
localStorage.setItem("tl", maintl); } else {
if(localStorage.getItem("tl")){ maintl = localStorage.getItem("tl"); }
}
if(maintl == null){ maintl = '4'; }

if(maintl >= limitMaintl){ maintl = limitMaintl; } // limit Get


symbol = symbol.slice(0, maintl * maintl / 2);


symbol = symbol.join("");
symbol = symbol.repeat(2);
symbol = [...symbol]; 

shuffleArray(symbol);

arrTask = symbol;


//console.log(JSON.stringify(arrTask));

/*jsonArrTask = JSON.stringify(symbol);
console.log(jsonArrTask);
console.log(jsonArrTask[1]);
jsonArrTask = JSON.parse(jsonArrTask);
console.log(jsonArrTask[ jsonArrTask.length-1]['symbol']);
*/



print = '';
i = 2;
while (i < symbolList.length&&tl <= symbolList.length * 2) {
tl = i * i;
if(tl < symbolList.length * 2&&i <= limitMaintl){
//symetry
//https://stackoverflow.com/questions/17524673/understanding-the-modulus-operator
if(i * i / 2 % i == 0){
if(maintl == i){
print += '<a class="inlineBlock padding light4 border op small" href="?tl='+i+'">'+i+'x'+i+'</a>';
}else{
print += '<a class="inlineBlock padding light border op small" href="?tl='+i+'">'+i+'x'+i+'</a>';
}
}
//console.log(tl);
//arrSymbol.push({"row": i, "tl":tl}); 



} 
i++;
}

document.getElementById("tableLenght").innerHTML = print;



// input
var msCom = 'start';
var msStap = 1;

var arrInputHistory = [];


if(msCom == 'start') {

if(maintl * maintl / 2 % maintl == 0){
arrResultFinal = '*'.repeat(maintl * maintl);
}else{
arrResultFinal = '*'.repeat(maintl * maintl  - 1);
}

arrResultFinal = [...arrResultFinal];

drawResult(arrResultFinal, maintl, 'result');
drawResult(arrResultFinal, maintl, 'result2');
}







result = '';
//arrTask.forEach(main);








//print = `<button  class="op light button border small">history</button>`;
document.getElementById('inputHistory').innerHTML = print;
result = '';













function drawResult(aaa, maintl, printPlace){
i2 = 1;
print = '';
aaa.forEach(myFunction11);
function myFunction11(item, index) {
if(item == '*') { item = '&nbsp;'; }
//console.log(item);
if(item == undefined){ print += ''; } else {
//print += '<button  id="'+index+'" class="light button border" value="">'+index+item+'</button>';
print += `<button  id="`+index+`" class="light3 button border" onclick="main('`+index+`')">`+item+`</button>`;
//document.getElementById(index).innerHTML =  item;
}

if(maintl <= 10){
if(i2 == maintl){ print += '<br />'; i2 = 0;   }
}

i2++;
}

if(printPlace == 'result2'){
i2 = 1;
print = '';
aaa.forEach(myFunction15);
function myFunction15(item, index) {
if(item == '*') { item = '&nbsp;'; }
if(item == undefined){ print += ''; } else {
//print += '<button class="light3 button border2">'+item+'</button>';
document.getElementById(index).innerHTML =  item;
}
if(maintl <= 10){
if(i2 == maintl){ print += '<br />'; i2 = 0;   }
}
i2++;
}
}

if(printPlace == 'inputHistory'){
print = '';
aaa.forEach(myFunction33);
function myFunction33(index, item) {
//if(item == undefined){ print += ''; } else {}

//print += `<button  class="op light button border2">`+symbol[index]+`</button>`;
}
}

if(printPlace != 'result2'){
document.getElementById(printPlace).innerHTML = print;
}
print = '';
}




















function main(index) {
let arrInputHistoryPrint = [];
var checkSound = '';

arrInputHistory.push(index);
arrInputHistory = arrInputHistory.slice(-5);
arrInputHistoryPrint.push(index);

if(msStap == 3){ msStap = 1;}

item = arrTask[index];
msCom = '';

var currentInputIndex = arrInputHistory[arrInputHistory.length - 1];

var currentInputSymbol = symbol[currentInputIndex];
if(arrInputHistory.length >= 2){
var prevInputIndex = arrInputHistory[arrInputHistory.length - 2];
var prevInputSymbol = symbol[prevInputIndex];
}else{
var prevInputIndex = '';
var prevInputSymbol = '';
}



if(currentInputIndex == prevInputIndex){msCom = 'error';}
if(arrResultFinal[currentInputIndex] != '*'){ msCom = 'error'; }



if(msCom != 'error'){
arrLastTwo = arrLastTwo.slice(-2);
if(currentInputIndex == arrLastTwo[0]||currentInputIndex == arrLastTwo[1]){ 
if(msStap == 1){
msCom = 'error';
document.getElementById(arrLastTwo[0]).innerHTML =  arrTask[arrLastTwo[0]];
document.getElementById(arrLastTwo[1]).innerHTML =  arrTask[arrLastTwo[1]];
}
}else{
drawResult(arrResultFinal, maintl, 'result2');
arrLastTwo.push(currentInputIndex);
}

}


if(msCom == 'error'){
msStap--;
// if error
arrInputHistory.pop();
document.getElementById("alert").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/error.mp3"></audio>`;
checkSound = 'exit';
}


if(msCom != 'error'){
document.getElementById(currentInputIndex).innerHTML =  currentInputSymbol;

if(msStap == 2){

if(item == currentInputSymbol&&item == prevInputSymbol){
// small win
arrResultFinal[index] = item;
arrResultFinal[prevInputIndex] = item;
drawResult(arrResultFinal, maintl, 'result2');
document.getElementById("alert").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/ok.mp3"></audio>`;
checkSound = 'exit';
}else{

drawResult(arrResultFinal, maintl, 'result2');


document.getElementById(currentInputIndex).innerHTML =  currentInputSymbol;
document.getElementById(prevInputIndex).innerHTML =  prevInputSymbol;

}


}





}





if(JSON.stringify(arrResultFinal) === JSON.stringify(arrTask)){
document.getElementById("win").innerHTML = '<span class="orange">Win</span>';
document.getElementById("alert").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/win.mp3"></audio>`;
checkSound = 'exit';
}




drawResult(arrInputHistoryPrint.slice(-5), maintl, 'inputHistory'); // enable disable input history


com = '';

//console.log(msStap);
msStap++;
msCom = '';

/*
// click sound
if(checkSound == ''){
document.getElementById("alert").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/click.mp3"></audio>`;
}
*/

}

function refresh(){ //https://stackoverflow.com/questions/39880242/how-to-reload-javascript-without-refreshing-the-page
// bad practic

var s = document.createElement('script');
s.src = 'script.js';
document.body.appendChild(s);
document.body.removeChild(s);

document.getElementById("win").innerHTML = '';
}




