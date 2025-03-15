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

let lStopCount = 0;

//https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
var pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
var rateValue = document.querySelector(".rate-value");


var lPitchValueConfig = 1;
if(localStorage.getItem('lPitchValueConfig') != null){
lPitchValueConfig = localStorage.getItem('lPitchValueConfig');
pitchValue.textContent = lPitchValueConfig;
pitch.value = lPitchValueConfig;
}

var lRateValueConfig = 1;
if(localStorage.getItem('lRateValueConfig') != null){
lRateValueConfig = localStorage.getItem('lRateValueConfig');
rateValue.textContent = lRateValueConfig;
rate.value = lRateValueConfig;
}


let voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });

//new
//var selectedIndex = 0;
//const selectedIndex =
var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = "test";


  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
option.textContent += " -- DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);

//new

if (voices[i].lang == lLang&&lStopCount == 0){
lStopCount++;
selectedIndex = i;
}


  }

voiceSelect.selectedIndex = selectedIndex;


}

populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {
  if (synth.speaking) {
    //console.error("speechSynthesis.speaking");
    console.log("speechSynthesis.speaking");
    return;
  }

  if (inputTxt.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
//console.error("SpeechSynthesisUtterance.onerror");
console.log("SpeechSynthesisUtterance.onerror");
    };

var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
localStorage.setItem('lLangConfig', voiceSelect.selectedOptions[0].getAttribute("data-lang"));
//var selectedOption = "en-US";
//localStorage.setItem('lLangConfig', "en-US");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
  }
}

//inputForm.onsubmit = function (event) {
document.getElementById("lStt").onsubmit = function (event) {
event.preventDefault();

  speak();

  inputTxt.blur();
};

pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
localStorage.setItem('lRateValueConfig', pitch.value);
};

rate.onchange = function () {
  rateValue.textContent = rate.value;
localStorage.setItem('lPitchValueConfig', rate.value);
};

voiceSelect.onchange = function () {
  speak();
};


if (q != null){
speak();
}
