// v.1.1.0

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");

var lLang = 'en-US';
if(localStorage.getItem('lLangConfig') != null){
lLang = localStorage.getItem('lLangConfig')
}

if (q != null){
document.querySelector(".txt").value = q;
}


if (q != null&&q != ""){
//https://dvcs.w3.org/hg/speech-api/raw-file/tip/webspeechapi
  var u = new SpeechSynthesisUtterance();
  u.text = q;
  u.lang = 'en-US';
  u.rate = 1.2;
  u.onend = function(event) {
//alert('Finished in ' + event.elapsedTime + ' seconds.');
}
  speechSynthesis.speak(u);

}
