// Rock paper scissors v.1.2.0


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

//document.getElementById("resultTop").innerHTML = `<span class="xxLarge">Select:</span>`;
break;

case 'result':

resultWinStatus = `
<h2 class="red">Lost!</h2>
<audio style="display:none" autoplay="false" src="${confD}audio/error.mp3"></audio>
`;

let pcVariant = variantArr[fuMRandom(0, 2)];
//getRandomInt
//console.log(`pc: ${pcVariant}, user: ${selectedVal}`);
// Expected output: "Mangoes and papayas are $2.79 a pound."

if(pcVariant == "🪨"&&selectedVal == "📄"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="${confD}audio/ok.mp3"></audio>
`;

rpsGameScoreUser++;
localStorage.setItem("rpsGameScoreUser", rpsGameScoreUser);
}

if(pcVariant == "📄"&&selectedVal == "✂️"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="${confD}audio/ok.mp3"></audio>
`;

rpsGameScoreUser++;
localStorage.setItem("rpsGameScoreUser", rpsGameScoreUser);
}

if(pcVariant == "✂️"&&selectedVal == "🪨"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="${confD}audio/ok.mp3"></audio>
`;

rpsGameScoreUser++;
localStorage.setItem("rpsGameScoreUser", rpsGameScoreUser);
}

if(pcVariant == selectedVal){
resultWinStatus = `
<h2>Tie!</h2>
<audio style="display:none" autoplay="false" src="${confD}audio/neutral.mp3"></audio>
`;
}

if(resultWinStatus.indexOf("Lonst") != -1){
rpsGameScorePc++;
localStorage.setItem("rpsGameScorePc", rpsGameScorePc);
}

document.getElementById("resultWin").innerHTML = `${resultWinStatus}`;
document.getElementById("resultTop").innerHTML = `
<span class="xxLarge">${pcVariant}</span>
<!--&nbsp;&nbsp;-->
<div class="padding"></div>
<span class="xxLarge">${selectedVal}</span>
`;

document.getElementById("scoreResult").innerHTML = `
computer: ${rpsGameScorePc}
&nbsp;&nbsp;|&nbsp;&nbsp;
human: ${rpsGameScoreUser}
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
