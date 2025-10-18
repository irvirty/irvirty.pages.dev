// Dice game v.2.0.0

//https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
var delayInMilliseconds = 1000; //1 second


var dice = {
"1":"⚀",
"2":"⚁",
"3":"⚂",
"4":"⚃",
"5":"⚄",
"6":"⚅"
};

var pointsPlayer = '0';
var pointsPc = '0';


var diceKeyArr = Object.keys(dice);
var diceValArr = Object.values(dice);

function randomDice(){
let random = Math.floor(Math.random() * (diceKeyArr.length));
return random;
}

var colorPlayerWin = '';
var colorPcWin = '';
var endGame = [];
var pointsLimit = 10;

document.getElementById("panel").innerHTML = `
<div>
<button class="gDbtn light border borderRadius2" id="myBtn">roll</button>
<div class="padding2"></div>
<button class="gDbtn light border op borderRadius2" onclick="fuMReload();return false;">reload</button>
<!--<button class="gDbtn light border op" onclick="refresh();return false;">refresh</button>-->
</div>
`;
document.getElementById("myBtn").addEventListener("click", displayResult); 

displayResult()

function displayResult(){

document.getElementById("resultPc").innerHTML = ``;

if (endGame[0] != 'end'){
var rand = randomDice();
var rand2 = randomDice();
var player = diceValArr[rand];
var pc = diceValArr[rand2];
var player2 = diceKeyArr[rand];
var pc2 = diceKeyArr[rand2];
} else {
var player = '*';
var pc = '*';
var player2 = '*';
var pc2 = '*';
}


var win = '';




// small win
if (player2 > pc2&&endGame[0] != 'end'){
win = '<span class="orange"><b>Player Win</b></span>';
win += `<audio style="display:none" autoplay="false" src="${confD}audio/ok.mp3"></audio>`;
colorPlayerWin = 'green';
colorPcWin = '';
pointsPlayer++;
}


if (player2 < pc2&&endGame[0] != 'end'){
win = '<span class="red"><b>PC Win</b></span>';
win += `<audio style="display:none" autoplay="false" src="${confD}audio/error.mp3"></audio>`;
colorPlayerWin = '';
colorPcWin = 'red';
pointsPc++;
}

if (player2 == pc2&&endGame[0] != 'end'){
win = '<span class=""><b>Tie</b></span>';
win += `<audio style="display:none" autoplay="false" src="${confD}audio/neutral.mp3"></audio>`;
colorPlayerWin = 'green';
colorPcWin = 'green';
}
// end small win


// for end game, big win
if (pointsPlayer > pointsPc&&pointsPlayer == pointsLimit){
win = '<span class="orange"><b>End. Player Win</b></span>';
win += `<audio style="display:none" autoplay="false" src="${confD}audio/win.mp3"></audio>`;
colorPlayerWin = 'green';
colorPcWin = '';
pointsPlayer = pointsPlayer;
endGame[0] = 'end';
}

if (pointsPlayer < pointsPc&&pointsPc == pointsLimit){
win = '<span class="red"><b>End. PC Win</b></span>';
win += `<audio style="display:none" autoplay="false" src="${confD}audio/game-over.mp3"></audio>`;
colorPlayerWin = '';
colorPcWin = 'red';
endGame[0] = 'end';
}

if (pointsPlayer == pointsLimit&&pointsPc == pointsLimit){
win = '<span class=""><b>Tie</b></span>';
win += `<audio style="display:none" autoplay="false" src="${confD}audio/neutral.mp3"></audio>`;
colorPlayerWin = 'green';
colorPcWin = 'green';
endGame[0] = 'end';
}
// end for end game

//https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
setTimeout(function() {
  //your code to be executed after 1 second
document.getElementById("resultPc").innerHTML = `
<div class="gDicePlayer">
<div id="colorPc" class="gDname2" style="max-height: 0px;">` + pc + `</div><br>
<div class="gDname op">pc</div>
<div class="gDname op">` + pointsPc + `</div>
</div>
`;
}, delayInMilliseconds);

document.getElementById("resultPlayer").innerHTML = `
<div class="gDicePlayer">
<div id="colorPlayer" class="gDname2" style="max-height: 0px;">` + player + `</div><br>
<div class="gDname op">player</div>
<div class="gDname op">` + pointsPlayer + `</div>
</div>
`;
//https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
setTimeout(function() {
document.getElementById("result2").innerHTML = '<span>' + win + '</span>';
}, delayInMilliseconds);

}

document.getElementById("msg").innerHTML = `

<div class="block tCenter op small padding2 margin2" style="padding-top: 45px;">* The game is played to ${pointsLimit} points</div>
`;

function refresh(){ //https://stackoverflow.com/questions/39880242/how-to-reload-javascript-without-refreshing-the-page
// bad practic

var s = document.createElement('script');
s.src = 'script.js';
document.body.appendChild(s);
document.body.removeChild(s);
}


