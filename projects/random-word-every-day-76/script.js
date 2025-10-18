// v.1.0.0

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
const currentTime = new Date();
const dayOfTheMonth = currentTime.getDate();
//console.log(dayOfTheMonth);


let wordOfTheDay = "";
let wordOfTheDayTime = "";
wordOfTheDay = localStorage.getItem("wordOfTheDay");
wordOfTheDayTime = localStorage.getItem("wordOfTheDayTime");




var print = ``;

let randomWord = wordOfTheDay;
if (q != null&&q != ''||wordOfTheDayTime != dayOfTheMonth||wordOfTheDayTime == null||wordOfTheDay == null){
randomWord = Math.floor(Math.random() * wordJsonVar.length);
randomWord = wordJsonVar[randomWord]["text2"];
randomWord = randomWord.split(`
`)[0];

if (q != null&&q != ''){
randomWord = q;
}

localStorage.setItem("wordOfTheDay", randomWord);
localStorage.setItem("wordOfTheDayTime", dayOfTheMonth);
}


function wordOfTheDayClear(){
localStorage.removeItem("wordOfTheDay");
localStorage.removeItem("wordOfTheTime");
fuMReload();
}

//randomWord = capitalizeFirstLetter(randomWord);

//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


print = `
<div class="padding2 margin2"></div>
<h2 class="tCenter capitalize"><span id="randomWord"></span></h2>
<div class="padding2 margin2"></div>
`;

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
document.getElementById("randomWord").innerText = randomWord; 
}

let randomWordGo = encodeURIComponent(randomWord);

var print2 = ``;
let randomWordButtons = ``;
let randomWordButtonsCode = ` target="_blank" class="small tag border3 borderRadius2 light3 margin1Px"  `;

randomWordButtons = `

<hr>
<div class="small paddingList">Word translation:</div>
<div class="hotLinks">
<a ${randomWordButtonsCode} href="https://translate.google.com/?op=translate&sl=en&tl=auto&text=${randomWordGo}">Google</a>
<a ${randomWordButtonsCode} href="https://www.bing.com/translator/?text=${randomWordGo}&from=en&to=auto">Bing</a> 
<a ${randomWordButtonsCode} href="https://www.deepl.com/en/translator#en/auto/${randomWordGo}">Deepl</a> 
</div>

`;


randomWordButtons += `

<hr>
<div class="small paddingList">About the word:</div>
<div class="hotLinks">
<a ${randomWordButtonsCode} href="https://www.google.com/search?q=${randomWordGo} meaning">Google: meaning</a>
<a ${randomWordButtonsCode} href="https://www.bing.com/search?q=${randomWordGo} meaning&form=somesite">Bing: meaning</a>

<a ${randomWordButtonsCode} href="https://wikipedia.org/w/?search=${randomWordGo}">Wikipedia</a>
<!--<a ${randomWordButtonsCode} href="https://www.britannica.com/search?query=${randomWordGo}">Britannica</a>
<a ${randomWordButtonsCode} href="https://www.encyclopedia.com/gsearch?q=${randomWordGo}">Encyclopedia.com</a>
<a ${randomWordButtonsCode} href="https://www.worldhistory.org/search/?q=${randomWordGo}">World History</a>-->

<a ${randomWordButtonsCode} href="https://www.thefreedictionary.com/${randomWordGo}">The Free Dictionary</a>
<a ${randomWordButtonsCode} href="https://www.vocabulary.com/dictionary/${randomWordGo}">Vocabulary.com</a>
<a ${randomWordButtonsCode} href="https://www.urbandictionary.com/define.php?term=${randomWordGo}">Urban Dictionary</a>
<a ${randomWordButtonsCode} href="https://www.etymonline.com/search?q=${randomWordGo}">Etymonline</a>
</div>

`;


let hashTagGo = encodeURIComponent(randomWord.replaceAll(' ', ''));

randomWordButtons += `

<hr>
<div class="small paddingList">Search:</div>
<div class="hotLinks">
<a ${randomWordButtonsCode} href="/?q=${randomWordGo} goo">Google</a>
<a ${randomWordButtonsCode} href="/?q=${randomWordGo} bin">Bing</a>
<a ${randomWordButtonsCode} href="/?q=${randomWordGo} o">Other</a>
<a ${randomWordButtonsCode} href="/?q=${randomWordGo} n">News</a>
<a ${randomWordButtonsCode} href="/?q=${randomWordGo} v">Video</a>
<a ${randomWordButtonsCode} href="/?q=${randomWordGo} s">Social</a>
<a ${randomWordButtonsCode} href="/?q=${hashTagGo} ht">Hashtag</a>
</div>

`;





randomWordButtons += `

<div class="padding2 margin2"></div>
<hr>
<div class="small paddingList">Other:</div>
<div class="hotLinks">
<a class="submit button small" href="#clear" onclick="wordOfTheDayClear();return false;"><span class="op red bold">C</span>lear and reload</a>
</div>

<hr>
<form action="./" method="get" class="form-example">
<label for="name" class="small">Input: </label>
<input type="text" name="q" id="q" required>
<input class="submit small" type="submit">
</form>



`;

randomWordButtons += `

<div class="margin2 padding2"></div>
<hr>
<div class="margin2 padding2"></div>
<h2 class="op tCenter">Word of the day</h2>
<div class="hotLinks">
<a ${randomWordButtonsCode} href="/?q=Word of the day goo">Google</a>
<a ${randomWordButtonsCode} href="/?q=Word of the day bin">Bing</a>
<a ${randomWordButtonsCode} href="/?q=Word of the day o">Other</a>
<a ${randomWordButtonsCode} href="/?q=Word of the day s">Social</a>
<a ${randomWordButtonsCode} href="/?q=WordOfTheDay ht">Hashtag</a>
</div>

`;


print2 = randomWordButtons;

if (document.getElementById("result2") != null){
document.getElementById("result2").innerHTML = print2; 
}

if (q != null&&q != ""){
if (document.getElementById("q") != null){
document.getElementById("q").value = q; 
}
}




