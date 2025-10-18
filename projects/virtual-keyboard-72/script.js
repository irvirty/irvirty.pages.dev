// Virtual keyboard v.1.4.0
//inspired:
//Free Virtual Keyboard - Free download and install on Windows | Microsoft Store https://apps.microsoft.com/detail/9nblggh35mpc
//Try Google Input Tools online – Google Input Tools https://www.google.com/inputtools/try/ 
//Touch typing - Wikipedia https://en.wikipedia.org/wiki/Touch_typing


let upperCaseStatus = [];
let shiftStatus = [];
upperCaseStatus[0] = "off";
shiftStatus[0] = 0;
let taskKeyVKbr = "";
let keyEmpty = "";



let keyBrStyle = localStorage.getItem("keyBrStyle");
if (keyBrStyle == null||keyBrStyle == ""){
keyBrStyle = "mono";
localStorage.setItem("keyBrStyle", "mono");
}

var keyBrStyleHide = "block";

function keyBrStyleSet(item){
localStorage.setItem("keyBrStyle", item);
keyBrStyle = item;
virtualKeyborad(inputId, printId, "", "");
}




let keyBrVisible = localStorage.getItem("keyBrVisible");
if (keyBrVisible == null||keyBrVisible == ""){
keyBrVisible = "show";
localStorage.setItem("keyBrVisible", "show");
}

function keyBrVisibleSet(item){
localStorage.setItem("keyBrVisible", item);
keyBrVisible = item;
virtualKeyborad(inputId, printId, "", "");
}






function virtualKeyborad(inputId, printId, upperCaseStatus, taskKeyVKbr){


upperCaseStatus[0] = upperCaseStatus;

let headerStyle = "";


//console.log(window.innerWidth);
if (window.innerWidth >= 550/*||conf["confDevice"] != "mobile"*/){

keyBrStyleHide = "block";

if (keyBrStyle == "colored"){
var keysRow1 = [
{"text":"`", "text2":"green", "text3":"c3R"},
{"text":"1", "text2":"green", "text3":"c3R"},
{"text":"2", "text2":"orange", "text3":"c3R"},
{"text":"3", "text2":"green", "text3":"c3R"},
{"text":"4", "text2":"orange", "text3":"c3R"},
{"text":"5", "text2":"orange", "text3":"c3R"},
{"text":"6", "text2":"green", "text3":"c3R"},
{"text":"7", "text2":"green", "text3":"c3R"},
{"text":"8", "text2":"orange", "text3":"c3R"},
{"text":"9", "text2":"green", "text3":"c3R"},
{"text":"0", "text2":"orange", "text3":"c3R"},
{"text":"-", "text2":"orange", "text3":"c3R"},
{"text":"=", "text2":"orange", "text3":"c3R"},
{"text":"⌫", "text2":"orange", "text3":"c3R"},
{"text":"⌫", "text2":"orange", "text3":"c3R"},
];
var keysRow2 = [
{"text":"↹", "text2":"green", "text3":"c3R"},
{"text":"q", "text2":"green", "text3":"c3R"},
{"text":"w", "text2":"orange", "text3":"c3R"},
{"text":"e", "text2":"green", "text3":"c3R"},
{"text":"r", "text2":"orange", "text3":"c3R"},
{"text":"t", "text2":"orange", "text3":"c3R"},
{"text":"y", "text2":"green", "text3":"c3R"},
{"text":"u", "text2":"green", "text3":"c3R"},
{"text":"i", "text2":"orange", "text3":"c3R"},
{"text":"o", "text2":"green", "text3":"c3R"},
{"text":"p", "text2":"orange", "text3":"c3R"},
{"text":"[", "text2":"orange", "text3":"c3R"},
{"text":"]", "text2":"orange", "text3":"c3R"},
{"text":"!backslash", "text2":"orange", "text3":"c3R"},
];
var keysRow3 = [
{"text":"⇪", "text2":"green", "text3":"c3R"},
{"text":"a", "text2":"green", "text3":"c3R"},
{"text":"s", "text2":"orange", "text3":"c3R"},
{"text":"d", "text2":"green", "text3":"c3R"},
{"text":"f", "text2":"orange", "text3":"c3R"},
{"text":"g", "text2":"orange", "text3":"c3R"},
{"text":"h", "text2":"green", "text3":"c3R"},
{"text":"j", "text2":"green", "text3":"c3R"},
{"text":"k", "text2":"orange", "text3":"c3R"},
{"text":"l", "text2":"green", "text3":"c3R"},
{"text":";", "text2":"orange", "text3":"c3R"},
{"text":"!singlequote", "text2":"orange", "text3":"c3R"},
{"text":"↵", "text2":"orange", "text3":"c3R"},
];
var keysRow4 = [
{"text":"⇧", "text2":"green", "text3":"c3R"},
{"text":"z", "text2":"green", "text3":"c3R"},
{"text":"x", "text2":"orange", "text3":"c3R"},
{"text":"c", "text2":"green", "text3":"c3R"},
{"text":"v", "text2":"orange", "text3":"c3R"},
{"text":"b", "text2":"orange", "text3":"c3R"},
{"text":"n", "text2":"green", "text3":"c3R"},
{"text":"m", "text2":"green", "text3":"c3R"},
{"text":",", "text2":"orange", "text3":"c3R"},
{"text":".", "text2":"green", "text3":"c3R"},
{"text":"/", "text2":"orange", "text3":"c3R"},
{"text":"⇧", "text2":"orange", "text3":"c3R"},
];

var keysRow5 = [
{"text":"", "text2":"green", "text3":"c3R"},
{"text":"", "text2":"green", "text3":"c3R"},
{"text":"␣", "text2":"orange", "text3":"c3R"},
{"text":"", "text2":"orange", "text3":"c3R"},
{"text":"", "text2":"orange", "text3":"c3R"},
];

} else {

var keysRow1 = [
{"text":"`", "text2":"", "text3":""},
{"text":"1", "text2":"", "text3":""},
{"text":"2", "text2":"", "text3":""},
{"text":"3", "text2":"", "text3":""},
{"text":"4", "text2":"", "text3":""},
{"text":"5", "text2":"", "text3":""},
{"text":"6", "text2":"", "text3":""},
{"text":"7", "text2":"", "text3":""},
{"text":"8", "text2":"", "text3":""},
{"text":"9", "text2":"", "text3":""},
{"text":"0", "text2":"", "text3":""},
{"text":"-", "text2":"", "text3":""},
{"text":"=", "text2":"", "text3":""},
{"text":"⌫", "text2":"", "text3":""},
{"text":"⌫", "text2":"", "text3":""},
];
var keysRow2 = [
{"text":"↹", "text2":"", "text3":""},
{"text":"q", "text2":"", "text3":""},
{"text":"w", "text2":"", "text3":""},
{"text":"e", "text2":"", "text3":""},
{"text":"r", "text2":"", "text3":""},
{"text":"t", "text2":"", "text3":""},
{"text":"y", "text2":"", "text3":""},
{"text":"u", "text2":"", "text3":""},
{"text":"i", "text2":"", "text3":""},
{"text":"o", "text2":"", "text3":""},
{"text":"p", "text2":"", "text3":""},
{"text":"[", "text2":"", "text3":""},
{"text":"]", "text2":"", "text3":""},
{"text":"!backslash", "text2":"", "text3":""},
];
var keysRow3 = [
{"text":"⇪", "text2":"", "text3":""},
{"text":"a", "text2":"", "text3":""},
{"text":"s", "text2":"", "text3":""},
{"text":"d", "text2":"", "text3":""},
{"text":"f", "text2":"", "text3":""},
{"text":"g", "text2":"", "text3":""},
{"text":"h", "text2":"", "text3":""},
{"text":"j", "text2":"", "text3":""},
{"text":"k", "text2":"", "text3":""},
{"text":"l", "text2":"", "text3":""},
{"text":";", "text2":"", "text3":""},
{"text":"!singlequote", "text2":"", "text3":""},
{"text":"↵", "text2":"", "text3":""},
];
var keysRow4 = [
{"text":"⇧", "text2":"", "text3":""},
{"text":"z", "text2":"", "text3":""},
{"text":"x", "text2":"", "text3":""},
{"text":"c", "text2":"", "text3":""},
{"text":"v", "text2":"", "text3":""},
{"text":"b", "text2":"", "text3":""},
{"text":"n", "text2":"", "text3":""},
{"text":"m", "text2":"", "text3":""},
{"text":",", "text2":"", "text3":""},
{"text":".", "text2":"", "text3":""},
{"text":"/", "text2":"", "text3":""},
{"text":"⇧", "text2":"", "text3":""},
];

var keysRow5 = [
{"text":"", "text2":"", "text3":""},
{"text":"", "text2":"", "text3":""},
{"text":"␣", "text2":"", "text3":""},
{"text":"", "text2":"", "text3":""},
{"text":"", "text2":"", "text3":""},
];
}

} else {

keyBrStyleHide = "none";

var keysRow1 = [
{"text":"1", "text2":"l2", "text3":"c3"},
{"text":"2", "text2":"l2", "text3":"c3"},
{"text":"3", "text2":"l2", "text3":"c3"},
{"text":"4", "text2":"l2", "text3":"c3"},
{"text":"5", "text2":"l2", "text3":"c3"},
{"text":"6", "text2":"l2", "text3":"c3"},
{"text":"7", "text2":"l2", "text3":"c3"},
{"text":"8", "text2":"l2", "text3":"c3"},
{"text":"9", "text2":"l2", "text3":"c3"},
{"text":"0", "text2":"l2", "text3":"c3"},
];
var keysRow2 = [
{"text":"q", "text2":"l2", "text3":"c3"},
{"text":"w", "text2":"l2", "text3":"c3"},
{"text":"e", "text2":"l2", "text3":"c3"},
{"text":"r", "text2":"l2", "text3":"c3"},
{"text":"t", "text2":"l2", "text3":"c3"},
{"text":"y", "text2":"l2", "text3":"c3"},
{"text":"u", "text2":"l2", "text3":"c3"},
{"text":"i", "text2":"l2", "text3":"c3"},
{"text":"o", "text2":"l2", "text3":"c3"},
{"text":"p", "text2":"l2", "text3":"c3"},
];
var keysRow3 = [
{"text":"a", "text2":"l2", "text3":"c3"},
{"text":"s", "text2":"l2", "text3":"c3"},
{"text":"d", "text2":"l2", "text3":"c3"},
{"text":"f", "text2":"l2", "text3":"c3"},
{"text":"g", "text2":"l2", "text3":"c3"},
{"text":"h", "text2":"l2", "text3":"c3"},
{"text":"j", "text2":"l2", "text3":"c3"},
{"text":"k", "text2":"l2", "text3":"c3"},
{"text":"l", "text2":"l2", "text3":"c3"},
];
var keysRow4 = [
{"text":"⇧", "text2":"l2", "text3":"c3"},
{"text":"z", "text2":"l2", "text3":"c3"},
{"text":"x", "text2":"l2", "text3":"c3"},
{"text":"c", "text2":"l2", "text3":"c3"},
{"text":"v", "text2":"l2", "text3":"c3"},
{"text":"b", "text2":"l2", "text3":"c3"},
{"text":"n", "text2":"l2", "text3":"c3"},
{"text":"m", "text2":"l2", "text3":"c3"},
{"text":"⌫", "text2":"l2", "text3":"c3"},
];
var keysRow5 = [
{"text":"↵", "text2":"l2", "text3":"c3"},
{"text":",", "text2":"l2", "text3":"c3"},
{"text":"␣", "text2":"l2", "text3":"c3"},
{"text":".", "text2":"l2", "text3":"c3"},
{"text":"↵", "text2":"l2", "text3":"c3"},
];

}


let printAllKeys = "";

let vKeyLastKey = [];

keysRow1.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="background-color: var(--${val["text2"]}); color: var(--${val["text3"]});">${val["text"]}</div>`;
});
printAllKeys += `<br>`;

keysRow2.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
if (val["text"].toLowerCase() == "!backslash"){
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="background-color: var(--${val["text2"]}); color: var(--${val["text3"]});">\\</div>`;
} else {
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="background-color: var(--${val["text2"]}); color: var(--${val["text3"]});">${val["text"]}</div>`;
}
});
printAllKeys += `<br>`;

keysRow3.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
if (val["text"].toLowerCase() == "!singlequote"){
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="background-color: var(--${val["text2"]}); color: var(--${val["text3"]});">'</div>`;
} else {
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="background-color: var(--${val["text2"]}); color: var(--${val["text3"]});">${val["text"]}</div>`;
}
});
printAllKeys += `<br>`;

keysRow4.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="background-color: var(--${val["text2"]}); color: var(--${val["text3"]});">${val["text"]}</div>`;
});
printAllKeys += `<br>`;


printAllKeys += `<div class="vKeyRow5">`;
keysRow5.forEach((val, index) => {
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="background-color: var(--${val["text2"]}); color: var(--${val["text3"]});">${val["text"]}</div>`;
});
printAllKeys += `</div>`;



let keyBrStylePrint = "";
if (keyBrStyleHide == "block"){
switch (keyBrStyle){

case 'colored':
keyBrStylePrint = `
<a class="xSmall bold keepTag border margin1Px borderRadius" onclick="keyBrStyleSet('colored');return false;" href="#">Colored</a>
<a class="xSmall gray keepTag border margin1Px borderRadius" onclick="keyBrStyleSet('mono');return false;" href="#">Mono</a>
`;
break;

case 'mono':
keyBrStylePrint = `
<a class="xSmall gray keepTag border margin1Px borderRadius" onclick="keyBrStyleSet('colored');return false;" href="#">Colored</a>
<a class="xSmall bold keepTag border margin1Px borderRadius" onclick="keyBrStyleSet('mono');return false;" href="#">Mono</a>
`;
break;

default:
keyBrStylePrint = `
<a class="xSmall keepTag border margin1Px borderRadius" onclick="keyBrStyleSet('colored');return false;" href="#">Colored</a>
<a class="xSmall keepTag border margin1Px borderRadius" onclick="keyBrStyleSet('mono');return false;" href="#">Mono</a>
`;
}
}


if (keyBrVisible == "show"){
printAllKeys = `

<div class="vKeyboard">
${printAllKeys}
<br>
<div class="tRight">
${keyBrStylePrint}
<a class="xSmall gray keepTag border margin1Px borderRadius" onclick="keyBrVisibleSet('hide');return false;" href="#">Hide</a>
</div>
</div>

`;
} else {
printAllKeys = `

<div class="vKeyboard">
<div class="tRight">
<a class="xSmall gray keepTag border margin1Px borderRadius" onclick="keyBrVisibleSet('show');return false;" href="#">Show keyboard</a>
</div>
</div>

`;
}

headerStyle = `

<style>
.vKeyboard {
background-color: var(--bg);

margin: 5px 0;
padding: 7px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);


justify-content: center;
align-items: center;
text-align: center;
overflow-wrap: anywhere;

border-radius: 5px; 
}

.vKey {
display: inline-flex;
padding: var(--padding);
margin: 1px;

background-color: var(--l2);
border: 1px solid var(--d3);

display: inline-flex;
justify-content: center;
align-items: center;
text-align: center;
width: auto;
min-width: 28px;
max-width: 100%;
overflow-wrap: anywhere;
white-space: normal;
word-break: break-word;
cursor: pointer;

border-radius: 5px;

font-size: small;
}

.vKey:hover {
background-color: var(--l3);
}

.vKeyRow5 {
display: grid;
grid-template-columns: auto auto 1fr auto auto;
grid-gap: 2px;
}

@media(max-width: 550px){
.vKey {
min-width: 28px;
}
}

@media(max-width: 350px){
.vKey {
min-width: 24px;
}
}

@media(max-width: 300px){
.vKey {
min-width: auto;
font-size: x-small;
}
}



/* Define the keyframes for the blink animation */
@keyframes blink {
0% {
color: var(--orange);
background-color: var(--l4);
}
50% {
color: var(--red);
background-color: var(--l4);
}
100% {
color: var(--orange);
background-color: transparent;
}
}

.vKeyPressedAni {
animation: blink .25s;
}




/* Define the keyframes for the blink animation */
@keyframes blink2 {
0% {
color: var(--c4);
background-color: var(--l4);
}
50% {
color: var(--c4);
background-color: var(--l4);
}
100% {
color: var(--c4);
background-color: var(--l4);
}
}

.vKeyPressedAni2 {
animation: blink2 .25s;
}
</style>


`;

document.head.insertAdjacentHTML("beforeend", headerStyle);

document.getElementById(printId).innerHTML = printAllKeys;

//if (taskKeyVKbr != undefined&&taskKeyVKbr != ""){ keyPressedMakeAni(taskKeyVKbr); }


}


/*//fixme very slow and lag
document.addEventListener('keydown', function(event) {
//document.getElementById(inputId).addEventListener('keydown', function(event) {
//console.log(`Key pressed: ${event.key}`);
//console.log(event.target.nodeName);

let keyPressed = event.key;
if (keyPressed == "Enter"){ keyPressed = "↵"; }
if (keyPressed == "Backspace"){ keyPressed = "⌫"; }
if (keyPressed == "Tab"){ keyPressed = "↹"; }
if (keyPressed == "Shift"){
keyPressed = "⇧";
shiftStatus[0]++;
//upperCaseStatus[0] = "on";
virtualKeyborad(inputId, printId, "on");
}
if (keyPressed == "\\"){ keyPressed = "!backslash"; }
if (keyPressed == "'"){ keyPressed = "!singlequote"; }
if (keyPressed == "CapsLock"&&upperCaseStatus[0] == "on"){
keyPressed = "⇪";
upperCaseStatus[0] = "off";
}
if (keyPressed == "CapsLock"&&upperCaseStatus[0] == "off"){
keyPressed = "⇪";
upperCaseStatus[0] = "on";
}
if (keyPressed == "Control"){ keyPressed = "Ctrl"; }
if (keyPressed == "AltGraph"){ keyPressed = "Alt"; }
if (keyPressed == "Alt"){ keyPressed = "Alt"; }
if (keyPressed == " "){ keyPressed = "␣"; }


//console.log(document.getElementById("vKeyId" + event.key).classList.contains('vKeyPressedAni'));




//https://stackoverflow.com/questions/348792/how-do-you-tell-if-caps-lock-is-on-using-javascript
var caps = event.getModifierState && event.getModifierState( 'CapsLock' );
//console.log( caps ); // true when you press the keyboard CapsLock key
switch (caps) {
case true:
virtualKeyborad(inputId, printId, "on");
upperCaseStatus[0] = "on";
break;

default:
virtualKeyborad(inputId, printId, "off");
upperCaseStatus[0] = "off";
}


if (event.target.nodeName == 'INPUT'||event.target.nodeName == 'TEXTAREA'){
} else {
vKeyClicked(inputId, String(event.key), upperCaseStatus[0], keyEmpty);
}

keyPressedMakeAni(keyPressed);

});*/


if (document.getElementById(inputId) != null){
var inputA2 = document.getElementById(inputId);
inputA2.addEventListener('input', keyPressedLastSymbol);
//inputA2.addEventListener('change', checkTask);
//document.getElementById("story").focus();
}

function keyPressedLastSymbol(e){
let lastSymbol = e.target.value;

//https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string
keyPressedMakeAni(lastSymbol.slice(-1));
}









//function keyPressedMakeAni(keyPressed){}
function keyPressedMakeAni(keyPressed){

if (keyPressed == " "){ keyPressed = "␣"; }

if (document.getElementById("vKeyId" + keyPressed) != null){
document.getElementById("vKeyId" + keyPressed).classList.add("vKeyPressedAni");

//Bing Copilot: delay
setTimeout(() => {
if (document.getElementById("vKeyId" + keyPressed) != null&&document.getElementById("vKeyId" + keyPressed).classList.contains('vKeyPressedAni')){
document.getElementById("vKeyId" + keyPressed).classList.remove('vKeyPressedAni');
}
}, 250); // 1000 milliseconds = 1 second
}
}


//function keyPressedMakeAni(keyPressed){}
function keyPressedMakeAni2(keyPressed){

if (keyPressed == " "){ keyPressed = "␣"; }

if (document.getElementById("vKeyId" + keyPressed) != null){
document.getElementById("vKeyId" + keyPressed).classList.add("vKeyPressedAni2");

//Bing Copilot: delay
setTimeout(() => {
if (document.getElementById("vKeyId" + keyPressed) != null&&document.getElementById("vKeyId" + keyPressed).classList.contains('vKeyPressedAni2')){
document.getElementById("vKeyId" + keyPressed).classList.remove('vKeyPressedAni2');
}
}, 250); // 1000 milliseconds = 1 second
}
}


//function vKeyClicked(inputId, val, upperCaseStatus2, keyEmpty){}
function vKeyClicked(inputId, val, upperCaseStatus2, keyEmpty){


if (upperCaseStatus2 != undefined){ upperCaseStatus[0] = upperCaseStatus2; }
if (upperCaseStatus[0] == "on"||upperCaseStatus2 == "on"){
virtualKeyborad(inputId, printId, "on");
val = val.toUpperCase();
}


if (shiftStatus[0] >= 1){
shiftStatus[0] = 0;
virtualKeyborad(inputId, printId, "off");
val = val.toUpperCase();
}


let textAll = document.getElementById(inputId).value;

keyPressedMakeAni(val);

if (val.toLowerCase() == "!backslash"||val == "\\"){ val = "\\"; }
if (val.toLowerCase() == "!singlequote"||val == "'"){ val = "'"; }
if (val == "↵"||val.toLowerCase() == "enter"){ val = `
`; }
if (val == "↹"||val == "Tab"){ val = "    "; }
if (val.toLowerCase() == "ctrl"||val.toLowerCase() == "control"){ val = ""; }
if (val.toLowerCase() == "alt"||val.toLowerCase() == "altgraph"){ val = ""; }
if (val == "␣"||val.toLowerCase() == " "){ val = " "; }
if (val.toLowerCase() == "capslock"&&upperCaseStatus[0] == "off"||val == "⇪"&&upperCaseStatus[0] == "off"){
val = ""; upperCaseStatus[0] = "on"; virtualKeyborad(inputId, printId, "on");
}
if (val.toLowerCase() == "capslock"&&upperCaseStatus[0] == "on"||val == "⇪"&&upperCaseStatus[0] == "on"){
val = ""; upperCaseStatus[0] = "off"; virtualKeyborad(inputId, printId, "off");
}
if (val.toLowerCase() == "shift"&&shiftStatus[0] <= 0||val == "⇧"&&shiftStatus[0] <= 0){
val = ""; shiftStatus[0]++; virtualKeyborad(inputId, printId, "on");
}
if (val.toLowerCase() == "shift"&&shiftStatus[0] >= 1||val == "⇧"&&shiftStatus[0] >= 1){
val = ""; shiftStatus[0] = 0; virtualKeyborad(inputId, printId, "off");
}
//console.log(vKeyCapsLockStatus);

if (val == ("⌫")||val.toLowerCase() == "backspace"){
val = "";
//delme backup notworking
//document.getElementById(inputId).focus();
//document.dispatchEvent(new KeyboardEvent('keydown', {'key':'Backspace'} ));
//document.dispatchEvent(new KeyboardEvent( 'keyup' , {'key':'Backspace'} ));

//https://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
let vKeyCursorPos = Number(document.getElementById(inputId).selectionStart);
//console.log(vKeyCursorPos);
//textAll = textAll.slice(0, vKeyCursorPos);

String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}
textAll = textAll.removeCharAt(vKeyCursorPos);


}


if (upperCaseStatus[0] == "on"||shiftStatus[0] >= 1){
val = val.toUpperCase();
}

textAll += val;



document.getElementById(inputId).value = textAll;
}




// run
virtualKeyborad(inputId, printId, "", "");

//https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
onresize = (event) => {
virtualKeyborad(inputId, printId, "", "");
};
