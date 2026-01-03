// Typing Speed Test (WPM) or Typing Speed Game v.4.3.8
// "Zen" mode inspired by https://monkeytype.com/
// Ignore some "typing modes" if the site is running on localhost, I use them to translate letters when I type.

const wmpAverageLimit = 100;
const wordLengthLimit = 5.1;
//const wordLengthLimit = 8.31;
const allowError = 70;
const whenTypeProgress = 300;

var typeProgress = [];
typeProgress[0] = 1;

var topWords = '';
//https://catalins.tech/store-array-in-localstorage/
var arrWPMaverage = JSON.parse(localStorage.getItem("arrWPMaverage"));
if (arrWPMaverage == null){ arrWPMaverage = [""]; }


document.getElementById("win").innerHTML = ``;
document.getElementById("win2").innerHTML = ``;
document.getElementById("stat").innerHTML = `stat`;
document.getElementById("countSymbolTask").innerHTML = `count symbol`;

document.getElementById('text').value = '';
;
var winMsg = "";

var task = '';
var  geturl = window.location;
var url = new URL(geturl);

var mode = url.searchParams.get("mode");

var q = url.searchParams.get("q");
if (mode == null&&q !== null&&q != undefined&&q != ''){ mode = 'input'; }

var lastEror = '';

if (mode != null){ localStorage.setItem("mode", mode); } else {
if (localStorage.getItem("mode")){ mode = localStorage.getItem("mode"); }
}
if (mode == null){ mode = 'quote'; }



//document.getElementById("refresh").innerHTML = `<a href="#" onclick="localRefresh('` + mode + `');return false;">refresh</a>`;





var modeList = Array(/*"letters",*/ "1k", "words", "quote", "book", "wiki", "input", "zen", "b2", "i2", "z2");
var modeListPrint = '';
modeList.forEach(FunctionModeList);
function FunctionModeList(item, index) {
//hide none mode in not localhost
var skip = '';
if (
location.hostname != 'localhost'&&item == 'b2'||
location.hostname != 'localhost'&&item == 'i2'||
location.hostname != 'localhost'&&item == 'z2'
){
skip = 'yes';
}

if (mode == item&&skip != 'yes'){
modeListPrint += `
<a class="keepTag light4 border borderRadius2 borderBottomBrand" style="color: var(--c3);" href="?mode=` + item + `">` + item + `</a>
`;
} else if (skip != 'yes'){
modeListPrint += `
<a class="keepTag op light3 border2 borderRadius2" href="?mode=` + item + `">` + item + `</a>
`;
}
}

//https://stackoverflow.com/questions/7378228/check-if-an-element-is-present-in-an-array
if (modeList.includes(mode) == false){ mode = 'zen'; }

document.getElementById("mode").innerHTML = `

<!-- mode -->

<!--<a class="keepTag op light border2 borderRadius2" href="?"">main</a>-->
<a class="keepTag op light3 border2 borderRadius2" href="./?" onclick="fuMReload();return false;">reload</a>

${modeListPrint}

<!-- https://developer.mozilla.org/docs/Web/API/Document/getSelection -->
<a class="keepTag op light3 border2 borderRadius2" id="bookmarklet" style="display: none;" title="for the panel in the browser, select the text and click" href="javascript:void(window.open('https://${conf["confWebsiteUrl"]}/games/typing-speed-14/?mode=input&q=' + encodeURIComponent(document.getSelection().toString())))">bookmarklet</a>

`;


/*window.onload = function() {
    if (!window.location.hash) {
		if (mode == null){
        window.location = window.location + '#loaded';
        window.location.reload();

	}
    }
}*/


if (mode == 'quote'){

var quote = '';
quote = quoteJsonVar;

if (quote != null){
const random = Math.floor(Math.random() * quote.length);
//console.log(quote[random]['text']);
task = quote[random]['text2'];
}

main(task);
}


if (mode == 'wiki'){

//https://stackoverflow.com/questions/16230886/trying-to-fire-the-onload-event-on-script-tag
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = confD + 'data/wikiJsonVar.js';
document.getElementsByTagName('head')[0].appendChild(script2);

//script2.onload = (event) => {}
//https://stackoverflow.com/questions/39155645/multiple-window-onload-functions-with-only-javascript
window.addEventListener('load', function() {
var wiki = '';
wiki = wikiJsonVar;

if (wiki != null){
const random = Math.floor(Math.random() * wiki.length);
//console.log(wiki[random]['text']);
task = wiki[random]['text'] + `
` + wiki[random]['text2'];
}

main(task);
});

}




if (mode == 'book'||mode == "b2"){

//https://stackoverflow.com/questions/16230886/trying-to-fire-the-onload-event-on-script-tag
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = confD + 'data/BookDataJsonVar.js';
document.getElementsByTagName('head')[0].appendChild(script2);

//script2.onload = (event) => {}
//https://stackoverflow.com/questions/39155645/multiple-window-onload-functions-with-only-javascript
window.addEventListener('load', function() {

var book = '';
var bookLength = 500;

book = BookDataJsonVar;

if (book != null){
const random = Math.floor(Math.random() * book.length);
//console.log(book[random]['text']);
task = book[random]['text2'];



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var bookStart = task.length - bookLength;
bookStart = getRandomArbitrary(0, bookStart);
task = task.slice(bookStart);
task = task.slice(0, bookLength);
}

// rm first and last word (because cut)
task = task.trim();
task = task.split(" ");
task[0] = '';
task[task.length - 1] = '';

task = task.join(" ");

main(task);

})

}


if (mode == 'words'){

//https://stackoverflow.com/questions/16230886/trying-to-fire-the-onload-event-on-script-tag
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = '../../data/wordJsonVar.js';
document.getElementsByTagName('head')[0].appendChild(script2);

//script2.onload = (event) => {}
//https://stackoverflow.com/questions/39155645/multiple-window-onload-functions-with-only-javascript
window.addEventListener('load', function() {

var word = '';
var wordLength = 500;

word = wordJsonVar;


let wordList = "empty";
if (word != null){
word.forEach((item) => {
wordList += item['text2'].split(`
`)[0] + ' ';
});


task = fuMShuffleItem(wordList, " ");
task = task.slice(0, 500);
main(task);
}

});

}





if (mode == "1k"){

//https://en.wikipedia.org/wiki/Most_common_words_in_English
//https://en.wiktionary.org/wiki/Appendix:1000_basic_English_words
let commonWords = `a able about above across act active activity add afraid after again age ago agree air all alone along already also always am amount an and angry another answer any anyone anything anytime appear apple are area arm army around arrive art as ask at ate attack aunt autumn away baby back bad bag ball bank base basket bath be bean bear beautiful because bed bedroom been beer before begin behave behind bell below besides best better between big bird birth birthday bit bite black bleed block blood blow blue board boat body boil bone book border born borrow both bottle bottom bowl box boy branch brave bread break breakfast breathe bridge bright bring brother brown brush build burn bus business busy but buy by cake call came can candle cap car card care careful careless carry case cat catch central century certain chair chance change chase cheap cheese chicken child children chocolate choice choose circle city class clean clear clever climb clock close cloth clothes cloud cloudy coat coffee coin cold collect color comb come comfortable common company compare complete computer condition contain continue control cook cool copper corn corner correct cost could count country course cover crash cross cry cup cupboard cut dance dangerous dark daughter day decide decrease deep deer depend desk destroy develop did different difficult dinner direction dirty discover dish do does dog don't done door double down draw dream dress drink drive drop dry duck dust duty each ear early earn earth east easy eat education effect egg eight either electric elephant else empty end enemy enjoy enough enter entrance equal escape even evening event ever every everybody everyone exact examination example except excited exercise expect expensive explain extremely eye face fact fail fall false family famous far farm fast fat father fault fear feed feel female fever few fight fill film find fine finger finish fire first fish fit five fix flag flat float floor flour flower fly fold food fool foot football for force foreign forest forget forgive fork form found four fox free freedom freeze fresh friend friendly from front fruit full fun funny furniture further future game garden gate gave general gentleman get gift give glad glass go goat god goes going gold good goodbye got government grandfather grandmother grass grave gray great green ground group grow gun had hair half hall hammer hand happen happy hard has hat hate have he head healthy hear heart heaven heavy height hello help hen her here hers hide high hill him his hit hobby hold hole holiday home hope horse hospital hot hotel hour house how hundred hungry hurry hurt husband I ice idea if important in increase inside into introduce invent invite iron is island it its jelly job join juice jump just keep key kind king kitchen knee knife knock know ladder lady lamp land large last late lately laugh lazy lead leaf learn leave left leg lend length less lesson let letter library lie life light like lion lip list listen little live lock lonely long look lose lot love low lower luck machine made main make male man many map mark market marry matter may me meal mean measure meat medicine meet member mention method middle milk million mind minute miss mistake mix model modern moment money monkey month moon more morning most mother mountain mouth move much music must my myself name narrow nation nature near nearly neck need needle neighbor neither net never new news newspaper next nice night nine no noble noise none nor north nose not nothing notice now number obey object ocean of off offer office often oil old on once one only open opposite or orange order other our out outside over own page pain paint pair pan paper parent park part partner party pass past path pay peace pen pencil people pepper per perfect period person petrol photograph piano pick picture piece pig pin pink place plane plant plastic plate play please pleased plenty pocket point poison police polite pool poor popular position possible potato pour power present press pretty prevent price prince prison private prize probably problem produce promise proper protect provide public pull punish pupil push put queen question quick quiet quite radio rain rainy raise ran reach read ready real really receive record red remember remind remove rent repair repeat reply report rest restaurant result return rice rich ride right ring rise road rob rock room round rubber rude rule ruler run rush sad safe said sail salt same sand save saw say school science scissors search seat second see seem sell send sentence serve seven several sex shade shadow shake shall shape share sharp she sheep sheet shelf shine ship shirt shoe shoot shop short should shoulder shout show sick side signal silence silly silver similar simple since sing single sink sister sit six size skill skin skirt sky sleep slip slow small smell smile smoke snow so soap sock soft some someone something sometimes son soon sorry sound soup south space speak special speed spell spend spoon sport spread spring square stamp stand star start station stay steal steam step still stomach stone stop store storm story strange street strong structure student study stupid subject substance successful such sudden sugar suitable summer sun sunny support sure surprise sweet swim sword table take talk tall taste taxi tea teach team tear telephone television tell ten tennis terrible test than thank that the their them then there therefore these they thick thin thing think third this those though threat three tidy tie time title to today toe together tomorrow tonight too tool tooth top total touch town train tram travel tree trouble true trust try turn twice two type ugly uncle under understand unit until up upon us use useful usual usually vegetable very village visit voice wait wake walk want warm was wash waste watch water way we weak wear weather wedding week weight welcome well went were west wet what wheel when where which while white who why wide wife wild will win wind window wine winter wire wise wish with without woman wonder word work world worry would write yard year yell yellow yes yesterday yet you young your zero zoo`;

task = fuMShuffleItem(commonWords, " ");
task = task.slice(0, 500);

main(task);
}


// https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest
//mode300 = mode; // fixed without var
//delme
















if (mode == 'letters'){
task = "           abcdefghijklmnopqrstuvwxyz";
main(task);
}

if (mode == 'input'||mode == 'i2'){
var tg = '';
document.getElementById("bookmarklet").style.display = "inline-block";

if (q === null||q === ""){

document.getElementsByClassName("input")[0].innerHTML = `
<div class="wrapper">
<br>
<form method="get" action="index.html">
<textarea class="borderRadius" rows="2" name="q" placeholder=" input text for task"></textarea>

<!--<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 2px;">
<input class="submit borderRadius" type="submit">
<a href="./" class="submit" onclick="fuMReload();return false;">Reload (submit)</a>
</div>-->

<a href="./index.html"  class="submit button block borderRadius">Reload (submit)</a>

</form>
<div id="input2Status"></div>
</div><br /><br />`;


// input from input in bottom 2 textarea
// input listener and print result
if (document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[1];
//inputA.removeEventListener('input', updateValueInput);
inputA.addEventListener('input', updateValueInput);
}

}

// input from Get
input = url.searchParams.get("q");
if (input != null){
task = input;
localStorage.setItem("input", input);
main(task);
} else {
task = localStorage.getItem("input");
main(task);
}




} else {
document.getElementsByClassName("input")[0].innerHTML = '';
//document.getElementById("mode2").innerHTML = '';
document.getElementById("bookmarklet").style.display = "none";
}

//overwrite top
document.getElementById("bookmarklet").style.display = "inline-block";


function updateValueInput(e) {
//q = encodeURIComponent(e.target.value);
let inputText = e.target.value;
localStorage.setItem("input", inputText);
//main(e.target.value); //delme (lag)

//document.getElementById("input2Status").innerHTML = `<span class="op xSmall">maybe already inserted</span>`; //delme (not inserted after update)
}



if (mode == 'zen'||mode == 'z2'){
document.getElementById('text').rows = '7';
task = '';
main('');
} else {
//document.getElementById('text').rows = '';
}


function fuLtr(lTrTask){
if (location.hostname == 'localhost'){
if (lTrTask == undefined){ lTrTask = task; }
document.getElementById("mode2").innerHTML = ' <a class="keepTag op light3 border2 borderRadius2" href="/?q=' + encodeURIComponent(lTrTask) + ' d"> tr2</a>';
document.getElementById("mode2").innerHTML += ` <a class="keepTag op light3 border2 borderRadius2" title="translate" href="${confD}projects/redirects-25/?q=` + encodeURIComponent(lTrTask) + ` t">tr</a>`;
} else {
document.getElementById("mode2").innerHTML = ` <a class="keepTag border2 borderRadius2" title="translate" href="${confD}projects/redirects-25/?q=` + encodeURIComponent(lTrTask) + ` t">tr</a>`;
}
}

function typingSpeedTranslate(textForTranslate, mode) {

//console.log(mode300);
if (location.hostname == "localhost"){
if (mode == "b2"||mode == "i2"||mode == "z2"){
document.getElementById("lPrintTr").style.display = "block";

// source code none
let text = textForTranslate;
//let text = (textForTranslate);
let http = new XMLHttpRequest();
let url2 = '/?q=dic';
let params = 'text=' + encodeURIComponent(text);
//alert(params);
http.open('POST', url2, true);
//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() { //Call a function when the state changes.
if (http.readyState == 4 && http.status == 200) {
// alert(http.responseText);
//task = fuMClearText(task);
document.getElementById("lPrintTr").innerHTML = http.responseText;
}

}
http.send(params);
} else {
document.getElementById("lPrintTr").innerHTML = '';
document.getElementById("lPrintTr").style.display = "none";
}
}
}

document.getElementById("lPrintTr").innerHTML = '';
document.getElementById("lPrintTr").style.display = "none";


// main
//setTimeout(function () {
function main(task){

if (mode == 'zen'||mode == 'z2'){
document.getElementById("result").style.display = "none";
} else {
document.getElementById("result").style.display = "block";
}

if (mode != "letter"&&mode != "1k"&&mode != "words"){
fuLtr(task);
}

/*
if (task != null){
//console.log(task);
task = task.replaceAll(/%/g, "%25"); // not show text, percentage
}*/



var letters = [...task]; 


//task = decodeURIComponent(task); //Uncaught URIError: malformed URI sequence
//https://stackoverflow.com/questions/17564837/how-to-know-if-a-url-is-decoded-encoded
/*try{
if (decodeURIComponent(letters) != letters){
letters = decodeURIComponent(letters)
}
}
catch(err){
// not decoded
}*/

if (mode == 'letters'){

letters = letters.join("");
letters = letters.repeat(5);
letters = [...letters]; 

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
//console.log(arr);
}

shuffleArray(letters);

}



let text = '';

text = letters.join("");


//console.log(letters);
var a = {
"„":'"',
"´":"'",
"ˈ":"'", "ː":":",
"×":"x",
"‐":"-",
"½":"1/2", "―":"-", 
"…":"...",
"`":"'", "·":"*", "•":"*", "›":">",
"’":"'", "—":"-", "«":'"', "»":'"',
'“':'"', '”':'"', "…":"...",
"–":"-", "‘":'"'
};



function transliterate(word){
word = [...word];
return word.map(function (char) {
return a[char] || char; 
}).join("");
}

if (mode == 'letters'){ text = text.replaceAll(/\s{2,}/g, ' '); /* space */ }

/**/
// clean text clear

//https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
function removeEmojis (string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  return string.replaceAll(regex, '');
}



letters = text;


letters = removeEmojis(letters);
letters = transliterate(letters);

// AI Overview
//letters = letters.replaceAll(/[\r\n]+/g, "\n\n");

//https://stackoverflow.com/questions/22962220/remove-multiple-line-breaks-n-in-javascript
//letters = letters.replaceAll(/(\r\n|\r|\n){2,}/g, '\n');
letters = letters.replaceAll(/(\r\n){2,}/g, '\n\n');
letters = letters.replaceAll(/(\r){2,}/g, '\n');


letters = letters.replaceAll("‑", "-");

letters = letters.replace("  ", ' ');
letters = letters.replace("  ", ' ');
letters = letters.replace("  ", ' ');
letters = letters.replace("  ", ' ');

letters = letters.replaceAll(' ​​', " ");

letters = letters.replaceAll('%0A', "\n");
letters = letters.replaceAll('%E2%80%8B', "");
letters = letters.replaceAll('%E2%80%AA', "");
letters = letters.replaceAll('%E2%81%A0', "");
letters = letters.replaceAll('%EF%B8%8F', "");

// replace symbol
//https://www.charset.org/utf-8/66
//Variation Selector
letters = letters.replaceAll('%EF%B8%82', "");
letters = letters.replaceAll('%EF%B8%83', "");
letters = letters.replaceAll('%EF%B8%84', "");
letters = letters.replaceAll('%EF%B8%85', "");
letters = letters.replaceAll('%EF%B8%86', "");
letters = letters.replaceAll('%EF%B8%87', "");
letters = letters.replaceAll('%EF%B8%88', "");
letters = letters.replaceAll('%EF%B8%89', "");
letters = letters.replaceAll('%EF%B8%8A', "");
letters = letters.replaceAll('%EF%B8%8B', "");
letters = letters.replaceAll('%EF%B8%8C', "");
letters = letters.replaceAll('%EF%B8%8D', "");
letters = letters.replaceAll('%EF%B8%8E', "");
letters = letters.replaceAll('%EF%B8%8F', "");

letters = letters.replaceAll(/ ️/g, ' '); // Variation Selector
letters = letters.replaceAll(/  ️/g, ' '); // Variation Selector
// normalize
letters = letters.replaceAll("ʼ", "'");

//<control>
//https://www.utf8-chartable.de/
letters = letters.replaceAll(/%C2%81/g, "");
letters = letters.replaceAll(/%C2%82/g, "");
letters = letters.replaceAll(/%C2%83/g, "");
letters = letters.replaceAll(/%C2%84/g, "");
letters = letters.replaceAll(/%C2%85/g, "");
letters = letters.replaceAll(/%C2%86/g, "");
letters = letters.replaceAll(/%C2%87/g, "");
letters = letters.replaceAll(/%C2%88/g, "");
letters = letters.replaceAll(/%C2%89/g, "");
letters = letters.replaceAll(/%C2%8A/g, "");
letters = letters.replaceAll(/%C2%8B/g, "");
letters = letters.replaceAll(/%C2%8C/g, "");
letters = letters.replaceAll(/%C2%8D/g, "");
letters = letters.replaceAll(/%C2%8E/g, "");
letters = letters.replaceAll(/%C2%8F/g, "");
letters = letters.replaceAll(/%C2%90/g, "");
letters = letters.replaceAll(/%C2%91/g, "");
letters = letters.replaceAll(/%C2%92/g, "");
letters = letters.replaceAll(/%C2%93/g, "");
letters = letters.replaceAll(/%C2%94/g, "");
letters = letters.replaceAll(/%C2%95/g, "");
letters = letters.replaceAll(/%C2%96/g, "");
letters = letters.replaceAll(/%C2%97/g, "");
letters = letters.replaceAll(/%C2%98/g, "");
letters = letters.replaceAll(/%C2%99/g, "");
letters = letters.replaceAll(/%C2%9A/g, "");
letters = letters.replaceAll(/%C2%9B/g, "");
letters = letters.replaceAll(/%C2%9C/g, "");
letters = letters.replaceAll(/%C2%9D/g, "");
letters = letters.replaceAll(/%C2%9E/g, "");
letters = letters.replaceAll(/%C2%9F/g, "");



letters = letters.replaceAll(/%E2%80%89/g, " "); // space



letters = letters.replaceAll(/%E2%80%AF/g, " ");
letters = letters.replaceAll(/%E2%80%8C/g, ""); //ZERO WIDTH SPACE
letters = letters.replaceAll(/%E2%80%8B/g, ""); //ZERO WIDTH SPACE



letters = letters.replaceAll(/A0%80%0A/g, "\n");
letters = letters.replaceAll(/A0%80%0A/g, "\n");
letters = letters.replaceAll(/%0D%0A/g, "\n");
letters = letters.replaceAll(/%0A/g, "\n");
letters = letters.replaceAll(/%0D/g, "\n");
letters = letters.replaceAll(/%0A/g, "\n");
letters = letters.replaceAll(/%C2%A0/g, " ");

letters = letters.replaceAll(/E2%80%8A/g, " "); // end of line
letters = letters.replaceAll(/%E2%81%A6/g, ""); // Left-to-Right Isolate
letters = letters.replaceAll(/%E2%81%A9/g, "");

letters = letters.replaceAll(/  /g, " ");
letters = letters.replaceAll(/ /g, ""); // end of line

letters = letters.replaceAll(/  +/g, ' ');

letters = letters.replaceAll(/ ️ /g, " ");
letters = letters.replaceAll(/ ️,/g, ",");
letters = letters.replaceAll(/ ️./g, ".");








letters = letters.trim(); 
letters = [...letters]; 
task = letters; // modifed

//console.log(letters);



var text2 = '';
letters.forEach(myFunction2);
function myFunction2(item, index) {
text2 += item; 
}


function replaceCode(a){
a = a.replaceAll(/</g, "&lt;");
a = a.replaceAll(/>/g, "&gt;");
return a;
}

/*letters = replaceCode(letters.join(""));
letters =  [...letters];*/

text = fuMClearText(text2)
document.getElementById("result").innerHTML = replaceCode(text2);












var key = '';
var key2 = ''; 

inputGetKey = document.getElementById('text');
inputGetKey.onkeydown = function(e) {
key = e.keyCode || e.charCode;
key2 = e.key; 
}

document.getElementsByName("input2")[0].removeEventListener('input', inputCheck);
document.getElementsByName("input2")[0].addEventListener('input', inputCheck);
var dateArr = [];
var dateArrLast = [];
//var secArr= [];
var totalError = 0;
var lastMaxInputlength = 0;



function inputCheck(e){
//document.getElementsByClassName("input")[0].innerHTML = '';

document.getElementsByClassName("input")[0].innerHTML = '';

var error = 0;

var acurancy = 100;
var errorColor = '';
var id = 'id0';
var text11 = '';
var text33 = '';
var lastError = '';
const errorLimit = 500 - 1;

var wpmRecord = localStorage.getItem("wpmRecord");

if (wpmRecord == null||wpmRecord < 0||wpmRecord == undefined){ wpmRecord =  0; }


// input value
q = e.target.value;
//console.log(task.join("").slice(0, q.length));

if (mode == "b2"||mode == "i2"){
typingSpeedTranslate(task.join("").slice(0, q.length), mode);
}
if (mode == "z2"){
typingSpeedTranslate(q, mode);
fuLtr(q);
}

//var answerArr = q.split ("");
var answerArr = [...q]; // convert input string to array for check
//console.log(answerArr);

// check
var text = '';

// print task 2 ant result if have input (


/*
// scroll with interval test
var scrollToVar = '';
if (answerArr.length % 140 == 0){
scrollToVar = '<span id="scrollTo"></span>'; 
} else if (confDevice == 'mobile'){
scrollToVar = '<span id="scrollTo"></span>';
}
text = '<span class="green">' + text11 + '</span>' + scrollToVar + text33;
document.getElementById("result").innerHTML = text;
if (scrollToVar !=  ''){ document.getElementById("scrollTo").scrollIntoView(true); }
*/



if (mode != 'zen'&&mode != 'z2'){
letters.forEach(myFunctionCheckAll);
}

function myFunctionCheckAll(item, index) {

//console.log(answerArr[index] + '=[' + item + ']');



if (answerArr.length >= lastMaxInputlength){ lastMaxInputlength = answerArr.length; }

//text += item; 
//console.log(item);
//console.log(answerArr[index]);
var check = 'no';
if (item == answerArr[index]&&error <= errorLimit){
check = 'yes';
//id = 'id' + index;
lastEror = 'green';

item = replaceCode(item);
text11 += item;
/*if (item == ' '){
text11 += item;
} else {
text11 += item;
}*/


} else if (item != answerArr[index]&&answerArr[index] != undefined&&error <= errorLimit){
check = 'yes';
lastEror = 'red';
item = replaceCode(item);

switch(item) {
case '\r\n':
case '\r':
case '\n':
text11 += `<span class="red">⏎\n</span>`;
break;
case ' ':
//text11 += '<span style="background-color: var(--red);">' + item + '</span>';
text11 += '<span style="background-color: var(--red);">&nbsp;</span>';
break;
default:
text11 += '<span class="red">' + item + '</span>';
}


//console.log(answerArr.length-1);
//console.log(index);
//console.log(answerArr.length - 1 + '=' + index);

/*if (answerArr.length  <= letters.length){
inputGetKey.onkeydown = function(e) {

if (answerArr.length - 1 == index){
var key = e.keyCode || e.charCode;
var key2 = e.key; 
if (key != '229'&&key != 8&&key != 46&&key2 != 'Backspace'&&key2 != 'Delete' ){
totalError++;
}
// mobile 
if (key == '229'&&lastMaxInputlength == answerArr.length&&letters[lastMaxInputlength - 1] != answerArr[lastMaxInputlength - 1]){ totalError++; }

}
}}*/
	
	
/*if (answerArr.length  <= letters.length){
totalError++;
}*/
error++;

}


if (check == 'no'){
text33 += item; 
}

check = '';

}


text = fuMClearText(text11);
text = '<span class=" green typeUnderline ">' + text11 + '</span><span id="scrollTo">&#8288;</span>' + replaceCode(text33); //&#8288; - fix webkit jump
document.getElementById("result").innerHTML = text;
document.getElementById("scrollTo").scrollIntoView(true);
//document.getElementById("scrollTo").scrollIntoViewIfNeeded();

if (document.getElementById("scrollTo2") != null){
document.getElementById("scrollTo2").scrollIntoView(true);
}



/* stat */


if (letters.length >= answerArr.length||mode == 'zen'){

/*test delmme old core 1
//if (key2 == 'Backspace'||key2 == 'Delete'){ } else {}
dateArr.push(Date.now());
//dateArr = dateArr.slice(-400);
var sec = 0;
if (dateArr[dateArr.length - 1] != undefined){
//const millis = dateArr[dateArr.length - 1] - dateArr[dateArr.length-2];
const millis = Date.now() - dateArr[dateArr.length - 1];
//sec = Math.floor(millis/1000);
sec = ((millis % 60000) / 1000);
secArr.push(sec);
}



//secArr = secArr.slice(-400);
//console.log(secArr);

var timeAverage = 0;
secArr.forEach(myFunction2);
function myFunction2(item, index) {
timeAverage = timeAverage + item; //console.log(item);
}

timeAverage = timeAverage / secArr.length;

var wps = timeAverage * wordLengthLimit;
var wpm = 1 * 60 / wps;
wpm = wpm.toFixed(0);
*/

// new core 2
if (dateArrLast[0] == undefined){ dateArrLast[0] =  Date.now(); }
/*if (lastEror != "red"&&key2 != 'Backspace'&&key2 != 'Delete'){
dateArr.push(((Date.now() - dateArrLast[0]) / 1000).toFixed(3));
}*/
dateArr.push(((Date.now() - dateArrLast[0]) / 1000).toFixed(3));
//console.table(wpmTime);
dateArrLast[0] = Date.now();

var wpm = 0;
if (dateArr.length >= 2){
dateArr.forEach(function(item) {
wpm = Number(wpm) + Number(item);
});
var wpmAverageSec = wpm / dateArr.length;
wpm =  (1 * 60 / wpmAverageSec) / wordLengthLimit;
wpm = Math.round(wpm);
}


}


if (isNaN(wpm)){ wpm = 0; }

if (error >= 1) { errorColor = 'red'; } else { errorColor = 'green'; }

if (lastEror == 'red'){

// totalError
if (key != '229'&&key != 8&&key != 46&&key2 != 'Backspace'&&key2 != 'Delete'){ totalError++; }
if (key == '229'){
if (lastMaxInputlength == answerArr.length){ totalError++; } // only last new error on mobile
}



lastEror = 'none';
document.getElementById("text").style.borderTop = "9px solid var(--red)";
/*if (error <= 60){
//document.getElementById("sound").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/error.mp3"></audio>`; 
}*/

} else {
document.getElementById("text").style.borderTop = "9px solid var(--d2)";
}








let acurancyTotal = 0;
if (/*answerArr.length == letters.length&&*/mode != 'zen'){

acurancy = error * 100 / answerArr.length;
acurancy =  100 - acurancy.toFixed(0);


//if (answerArr.length == letters.length){}
acurancyTotal = totalError * 100 / answerArr.length;
acurancyTotal =  100 - acurancyTotal.toFixed(0);

} else { acurancy = '0 '; acurancyTotal = '0'; }

//document.getElementById("stat").innerHTML = sec + ' | ' + timeAverage.toFixed(2) + ' sec. || ' + error + ' <span class="' + errorColor + '">error</span>';
document.getElementById("stat").innerHTML = 
'<div><span>wpm:</span> <span>' + wpm + '</span> || <span title="allowError: ' + allowError + '">error: ≈<span  class="'  + errorColor + '">' + error  +  '</span>/' + totalError +'</span> || acurancy: ≈' + acurancy + '/' + acurancyTotal + '%</div>';

document.getElementById("statTopWpm").innerHTML = wpm;

/*scrollTo();
function scrollTo(){
document.getElementById("scrollTo").scrollIntoView(true);
}*/










//if (letters.length == answerArr.length && error <= allowError&&mode != 'zen'&&task.length >= 5){
if (task.length == answerArr.length && error <= allowError&&mode != 'zen'&&task.length >= 5){



var recordMsg = "";
var printMsgWin = '';



/*if (wpm < wpmRecord){
recordMsg = wpm / wpmRecord * 100;
recordMsg = 100 - speedUp;
recordMsg = speedUp.toFixed(0);
recordMsg = ' (<span class="green"> ' + recordMsg + '%+ for record</span>)';
}*/



var WPMaverage = 0;
arrWPMaverage.forEach((element) => {
WPMaverage = Number(WPMaverage) + Number(element);
});
prevWPMaverage = (Number(WPMaverage).toFixed(0) / Number(arrWPMaverage.length)).toFixed(0);

arrWPMaverage.push(wpm);
arrWPMaverage = arrWPMaverage.slice(-wmpAverageLimit);
//console.log(arrWPMaverage);
//https://catalins.tech/store-array-in-localstorage/
localStorage.setItem("arrWPMaverage", JSON.stringify(arrWPMaverage));

WPMaverage = 0;
arrWPMaverage.forEach((element) => {
WPMaverage = Number(WPMaverage) + Number(element);
});
WPMaverage = (Number(WPMaverage) / Number(arrWPMaverage.length)).toFixed(0);


var wpmAverageProgress = WPMaverage - prevWPMaverage;
if (wpmAverageProgress < 0){
wpmAverageProgress = ' (<span class="red">' + wpmAverageProgress + '</span>)';
} else if (wpmAverageProgress > 0){
wpmAverageProgress = ' (<span class="green">+' + wpmAverageProgress + '</span>)';
} else {
wpmAverageProgress = ' (<span class="op gray">' + wpmAverageProgress + '</span>)';
}



if (wpm == wpmRecord){
recordMsg = ' <span class="yellow"> Old Record</span>';
printMsgWin = 'tie';
printMsgWinColor = 'blue';
}

if (wpm > wpmRecord){
recordMsg = ' <span class="orange"> New Record</span>';
localStorage.setItem("wpmRecord", wpm);
printMsgWin = 'win';
printMsgWinColor = 'orange';
}

var wpmProgress = " ";
var prevWpm = localStorage.getItem("prevWpm");
localStorage.setItem("prevWpm", wpm);

if (prevWpm == null ||prevWpm == Infinity){ prevWpm =  0; }
wpmProgress = wpm - prevWpm;
if (wpmProgress < 0){
printMsgWin = 'game over';
printMsgWinColor = 'red';
wpmProgress = ' (<span class="red">' + wpmProgress + '</span>)';
} else if (wpmProgress > 0){
printMsgWin = 'Good result';
printMsgWinColor = 'green';
wpmProgress = ' (<span class="green">+' + wpmProgress + '</span>)';
} else {
printMsgWin = 'Good result';
printMsgWinColor = 'gray';
wpmProgress = ' (<span class="op gray">' + wpmProgress + '</span>)';
}





var acurancyProgress = 0;
var prevAcurancy = localStorage.getItem("prevAcurancy");
localStorage.setItem("prevAcurancy", acurancyTotal);

if (prevAcurancy == null ||prevAcurancy == Infinity||prevAcurancy == NaN){ prevAcurancy =  0; }
acurancyProgress = acurancyTotal - prevAcurancy;
if (acurancyProgress < 0){
acurancyProgress = ' (<span class="red">' + acurancyProgress + '</span>)';
} else if (acurancyProgress > 0){
acurancyProgress = ' (<span class="green">+' + acurancyProgress + '</span>)';
} else {
acurancyProgress = ' (<span class="op gray">' + acurancyProgress + '</span>)';
}



if (printMsgWin == 'win'){
document.getElementById("sound").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/win.mp3"></audio>`;
printMsgWin = 'Win';
}

if (printMsgWin == 'tie'){
document.getElementById("sound").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/ok.mp3"></audio>`;
printMsgWin = 'Tie';
}

if (printMsgWin == 'Good result'||printMsgWin == 'tie'){
document.getElementById("sound").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/neutral.mp3"></audio>`;
printMsgWin = 'Good result';
}

if (printMsgWin == 'game over'){
document.getElementById("sound").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/error.mp3"></audio>`;
printMsgWin = 'The previous result is better';
}

// disable msg
if (printMsgWin != 'win'&&printMsgWin != 'tie'){
printMsgWin = '';
//document.getElementById("sound").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/click.mp3"></audio>`;
}

if (wpmAverageProgress == NaN){ wpmAverageProgress = 0; }

winMsg = `

<div class="wrapper">
<div class="bg3 padding2 margin2 msg shadow2 tCenter borderRadius2" style="border: 3px dashed  color-mix(in srgb, var(--${printMsgWinColor}) 65%, transparent); margin-bottom: 30px;">
<div class="margin"></div>
<!--<b class="${printMsgWinColor} padding2">${printMsgWin}</b>-->

<div class="margin2List" style="border-bottom: 5px solid  color-mix(in srgb, var(--${printMsgWinColor}) 25%, transparent);">
<h3>
<span title="word per minute">WPM:</span> <span class="orange">${wpm}</span>
<span title="Difference with the previous">${wpmProgress}</span>
${recordMsg}
</h3>
</div>

<div></div>

<span class="normal"><span title="Average words per minute based on the last ${wmpAverageLimit}">Average WPM: <span class="orange bold">${WPMaverage}</span> ${wpmAverageProgress}</span></span><br>
<span class="normal" title="Current accuracy, total"><span class="medium">Accuracy: <span>${acurancyTotal}</span>%</span> ${acurancyProgress}</span>
<div class="padding2"><hr></div>
<span class="medium">Best WPM: <span class="orange bold">${wpmRecord}</span></span>

<div class="padding2"></div>
<a class="keepTag op light3 border2 borderRadius2" href="./?" onclick="fuMReload();return false;">reload</a>

</div>
</div>
</div>

`;


document.getElementsByClassName("win")[0].innerHTML = winMsg;
//document.getElementsByClassName("win")[1].innerHTML = winMsg;

} else {
document.getElementsByClassName("win")[0].innerHTML = '';
document.getElementsByClassName("win")[1].innerHTML = '';
document.getElementById("sound").innerHTML = '';

if (task.length <= answerArr.length||true == true){
document.getElementsByClassName("win")[0].innerHTML = winMsg;
}

}



document.getElementById('countSymbolTask').innerHTML = 'task: ' + task.length + ' input: ' +answerArr.length + '';


if(document.getElementById("typeProgress") != null&&task.length >= whenTypeProgress){
document.getElementById("typeProgress").style.display = "block";
document.getElementById("typeProgress").max = task.length;
document.getElementById("typeProgress").value = answerArr.length;
}

}



if(document.getElementById("typeProgress") != null&&task.length <= whenTypeProgress){
document.getElementById("typeProgress").style.display = "none";
}


}


answerArr = [];
dateArr = [];
dateArrLast = [];
//secArr = [];


document.getElementById("text").style.borderTop = "9px solid var(--d2)";


document.getElementsByClassName("msg2")[0].innerHTML = `
<div id="hideMeComment">
<div class="padding2"></div>
<div class="op xSmall padding2 tRight pre">* 1 word - ${wordLengthLimit} symbol | average WPM based on the last ${wmpAverageLimit} | allowed error for result: ${allowError}</div>
</div>
`;
//for your own text use the URL or query: ?q=your text

//https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
var x = window.scrollX;
var y = window.scrollY;
document.querySelectorAll('textarea')[0].onscroll = function () { window.scrollTo(x, y); };




// hide top header if mobile
if (conf["confDevice"] == 'mobile'){
var getclick2 = document.getElementById('typingForm');
if (getclick2 != null&&document.getElementById('typingPage') != null){
document.addEventListener('click', function(event) {
if (getclick2.contains(event.target)) {
document.getElementById('typingPage').classList.remove("contentCenter");
} else {
document.getElementById('typingPage').classList.add("contentCenter");
}
});
}
}


