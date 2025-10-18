// v.1.1.1

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");

/*
//var lLang = 'en-US';
if(localStorage.getItem('lLangConfig') != null){
lLang = localStorage.getItem('lLangConfig')
}*/


if(localStorage.getItem('ttsRepeatVar') != null&&document.getElementById("ttsRepeat") != null){
var ttsRepeatVar = localStorage.getItem('ttsRepeatVar');
document.getElementById("ttsRepeat").text = ttsRepeatVar;
}

if (q != null&&q != ""){
document.querySelector(".txt").value = q;

//v.1
/*//https://dvcs.w3.org/hg/speech-api/raw-file/tip/webspeechapi
var u = new SpeechSynthesisUtterance();
u.text = q;
u.lang = 'en-US';
//u.rate = 1.2;
  u.onend = function(event) {
//alert('Finished in ' + event.elapsedTime + ' seconds.');
}
  speechSynthesis.speak(u);

//v.2
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
let utterance = new SpeechSynthesisUtterance(q);
speechSynthesis.speak(utterance);
*/
}

function tts(q){
//v.2
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
let utterance = new SpeechSynthesisUtterance(q);
speechSynthesis.speak(utterance);
}

if (q !== ""&&q !== null){
tts(q);
}

/*
function ttsRepeat(){
	
if (document.getElementById("ttsRepeat") != null&&document.getElementById("ttsRepeat").text == "repeat"){
localStorage.setItem('ttsRepeatVar', 'repeat');
document.getElementById("ttsRepeat").text = "do not repeat";
}
if (document.getElementById("ttsRepeat") != null&document.getElementById("ttsRepeat").text == "do not repeat"){
localStorage.setItem('ttsRepeatVar', 'do not repeat');
document.getElementById("ttsRepeat").text = "repeat";
}

}
ttsRepeat();
*/




