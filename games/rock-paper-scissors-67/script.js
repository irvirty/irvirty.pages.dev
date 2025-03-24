// Rock paper scissors v.1.1.0


let variantArr = ["🪨", "📄", "✂️"];

var print = ``;

let resultWinStatus = "<h2>Start of the game</h2>";

var rpsGameScorePc = 0;
var rpsGameScoreUser = 0;

if(typeof localStorage == 'object'){
  // Yippee! We can use localStorage awesomeness
localStorage.setItem("rpsGameScorePc", 0);
localStorage.setItem("rpsGameScoreUser", 0);
}

//if(typeof localStorage == 'objec't){ alert('test'); }
function main(gameMode, selectedVal){

document.getElementById("resultWin").innerHTML = `${resultWinStatus}`;

rpsGameScorePc = localStorage.getItem("rpsGameScorePc");
rpsGameScoreUser = localStorage.getItem("rpsGameScoreUser");

switch (gameMode) {

case 'select':
variantArr.forEach((val, index) => {

val = `
<a class="xxLarge padding2" href="#" onclick="main('result', '${val}');return false;">${val}</a>
`;

print += val;
});

document.getElementById("resultTop").innerHTML = `<span class="xxLarge">Select:</span>`;
break;

case 'result':

resultWinStatus = `
<h2 class="red">Wrong!</h2>
<audio style="display:none" autoplay="false" src="/audio/error.mp3"></audio>
`;

let pcVariant = variantArr[fuMRandom(0, 2)];
//getRandomInt
//console.log(`pc: ${pcVariant}, user: ${selectedVal}`);
// Expected output: "Mangoes and papayas are $2.79 a pound."

if(pcVariant == "🪨"&&selectedVal == "📄"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="/audio/ok.mp3"></audio>
`;

rpsGameScoreUser++;
localStorage.setItem("rpsGameScoreUser", rpsGameScoreUser);
}

if(pcVariant == "📄"&&selectedVal == "✂️"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="/audio/ok.mp3"></audio>
`;

rpsGameScoreUser++;
localStorage.setItem("rpsGameScoreUser", rpsGameScoreUser);
}

if(pcVariant == "✂️"&&selectedVal == "🪨"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="/audio/ok.mp3"></audio>
`;

rpsGameScoreUser++;
localStorage.setItem("rpsGameScoreUser", rpsGameScoreUser);
}

if(pcVariant == selectedVal){
resultWinStatus = `
<h2>Tie!</h2>
<audio style="display:none" autoplay="false" src="/audio/neutral.mp3"></audio>
`;
}

if(resultWinStatus.indexOf("Wrong") != -1){
rpsGameScorePc++;
localStorage.setItem("rpsGameScorePc", rpsGameScorePc);
}

document.getElementById("resultWin").innerHTML = `${resultWinStatus}`;
document.getElementById("resultTop").innerHTML = `
PC:
<span class="xxLarge">${pcVariant}</span>
&nbsp;&nbsp;
<span class="xxLarge">${selectedVal} </span>
:You
`;

document.getElementById("scoreResult").innerHTML = `
${rpsGameScorePc}
&nbsp;&nbsp;|&nbsp;&nbsp;
${rpsGameScoreUser}
`;

break;

default:
console.log(`Sorry, we are out of ${gameMode}.`);
}

}

main('select');



if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print;
}
