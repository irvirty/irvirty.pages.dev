/*
// embed file url
if(
(window.location.href).indexOf(('/projects/')) != -1
||(window.location.href).indexOf(('/mini-projects/')) != -1
||(window.location.href).indexOf(('/css-art/')) != -1
){
fetch('script.js', { method: "HEAD"}).then(function(response) {
//console.log(response);
if (response.ok == true) {
fuMPrintText('fEmbedFileUrl', `<span><a class="op inlineBlock tag orange" href="script.js">script.js</a></span>`, 'plus');
}
});

fetch('style.css', { method: "HEAD"}).then(function(response) {
if (response.ok == true) {  fuMPrintText('fEmbedFileUrl', `<span><a class="op inlineBlock tag indigo" href="style.css">style.css</a></span>`, 'plus');
}
});
}
// // embed file url*/



// Form input and STT v.1.0.1


let printInputSearch = `

<div style="display: grid; grid-template-columns: 1fr 45px; grid-gap: 2px;">
<input id="q" aria-labelledby="search" type="search" name="q" autofocus="autofocus" placeholder="" autocomplete="off" spellcheck="true">
<input class="op" type="button" value="&#128266;" title="Click to Speak" onclick="fuMSpeechToText('q')">
</div>
<div id="qText" class="op bg padding2 border none borderRadius"></div>

`;

let printInputSearch2 = `

<input id="q" aria-labelledby="search" type="search" name="q" autofocus="autofocus" placeholder="" autocomplete="off" spellcheck="true">

`;

if(document.getElementById("printInputSearch") != null){
if (conf['confDevice'] == 'pc'&&window.navigator.vendor == "Google Inc."){
document.getElementById("printInputSearch").innerHTML = printInputSearch;
} else {
document.getElementById("printInputSearch").innerHTML = printInputSearch2;
}
}



function fuMSpeechToText(divIdInput){
if (document.getElementById(divIdInput) != null){

if (document.getElementById("qText") != null){
document.getElementById("qText").style.display = "block";
}

//https://wicg.github.io/speech-api/
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/SpeechRecognition
//https://stackoverflow.com/questions/64181012/web-speech-api-speechrecognition-not-defined-when-using-react-js
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//https://stackoverflow.com/questions/64181012/web-speech-api-speechrecognition-not-defined-when-using-react-js
if ('SpeechRecognition' in window||'webkitSpeechRecognition' in window) {

const recognition = new SpeechRecognition();
recognition.interimResults = true;
//recognition.lang = "en-US";
recognition.lang = window.navigator.language;

var final = "";
var interim = "";

recognition.onresult = function (event) {
final = "";
interim = "";

for (var i = 0; i < event.results.length; ++i) {
if (event.results[i].isFinal) {
final += event.results[i][0].transcript;
} else {
interim += event.results[i][0].transcript;
}
document.getElementById(divIdInput).value = final + interim;
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = final + interim;
}


}

//if (event.results.length > 0) { document.getElementById(divIdInput).form.submit(); }

//document.getElementById(divIdInput).value = final;
}


recognition.addEventListener("audiostart", () => {
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "Audio capturing started";
}
})

recognition.onaudioend = () => {
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "Audio capturing ended";
}
if (document.getElementById(divIdInput).value != ""){
document.getElementById(divIdInput).form.submit();
}
}

recognition.error = function (event) {
//console.table(event);
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "error";
}
}

recognition.start();

} else {
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "SpeechRecognition not detected";
}
}

}
}
// Form input and STT

