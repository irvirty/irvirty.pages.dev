// Speech to text v.1.0.0


//https://wicg.github.io/speech-api/
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/SpeechRecognition
//https://stackoverflow.com/questions/64181012/web-speech-api-speechrecognition-not-defined-when-using-react-js
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//var recognizing;
if (SpeechRecognition == undefined){
final_span.innerHTML = "SpeechRecognition = undefined";
} else {
var recognizing;
var recognition = new SpeechRecognition();
recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;
  reset();
  recognition.onend = reset;

  recognition.onresult = function (event) {
    var final = "";
    var interim = "";
    for (var i = 0; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final += event.results[i][0].transcript;
      } else {
        interim += event.results[i][0].transcript;
      }
    }
    final_span.innerHTML = final;
    interim_span.innerHTML = interim;
  }

}


  function toggleStartStop() {
    if (recognizing) {
      recognition.stop();
      reset();
document.getElementById("byutton").innerHTML = "Click to Start";
    } else {
      recognition.start();
      recognizing = true;
//button.innerHTML = "Click to Stop";
document.getElementById("byutton").innerHTML = "Click to Stop";
    }
  }

 function start() {
    recognition.start();
  }

  function stop() {
      recognition.stop();
      reset();
}






