// Snake game v.1.2.4

var msg = '';

var snakeArr = [];
var snakeLenght = [];
snakeLenght[0] = 1;


var currentDirection = ['up', 'down', 'left', 'right'];
currentDirection[0] = currentDirection[randomIntFromInterval(0, 3)];

var currentPosition = [];
currentPosition[0] = randomIntFromInterval(44, 45);

var food = [];
food[0] = randomIntFromInterval(1, 100);


var testCount = 1;


function lDrawGrid(){



// clear for redrawing 
document.getElementById("result").innerHTML = ``;

switch(currentDirection[0]) {

case 'up':
currentPosition[0] = currentPosition[0] - 10;
break;

case 'down':
currentPosition[0] = currentPosition[0] + 10;
break;

case 'left':
currentPosition[0] = currentPosition[0] - 1;
break;

case 'right':
currentPosition[0] = currentPosition[0] + 1;
break;

case 'stop':
currentPosition[0] = currentPosition[0];
myStopFunction();

msg = 'End';
break;


default:
}




var i = 1;
var row = 0;
while (i <= 100) {

//if(i % 5 == 1){ document.getElementById("result").innerHTML += `<br>`; }
//if(row == 10){ row = 0; document.getElementById("result").innerHTML += `<br>`; }


// grid
switch(i) {

// wall
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:

case 11:
case 21:
case 31:
case 41:
case 51:
case 61:
case 71:
case 81:

case 20:
case 30:
case 40:
case 50:
case 60:
case 70:
case 80:
case 90:

case 91:
case 92:
case 93:
case 94:
case 95:
case 96:
case 97:
case 98:
case 99:
case 100:

//document.getElementById("result").innerHTML += `<square id="${i}" class="square" style="background-color: var(--d2);">${i}</square>`;
document.getElementById("result").innerHTML += `<square id="${i}" class="square" style="background-color: var(--d2);">&nbsp;</square>`;
break;


default:
//console.log(testCount++);
document.getElementById("result").innerHTML += `<square id="${i}" class="square bg3">&nbsp;</square>`;
//document.getElementById("result").innerHTML += `<square id="${i}" class="square">${i}</square>`;
//document.getElementById("result").innerHTML += `<square class="square">${i}</square>`;
}

i++;
row++;
}


// game function
switch(currentPosition[0]) {

// wall
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:

case 11:
case 21:
case 31:
case 41:
case 51:
case 61:
case 71:
case 81:

case 20:
case 30:
case 40:
case 50:
case 60:
case 70:
case 80:
case 90:

case 91:
case 92:
case 93:
case 94:
case 95:
case 96:
case 97:
case 98:
case 99:
case 100:

//document.getElementById(currentPosition[0]).innerHTML += `😋${currentPosition[0]}`;

// stop if eats border
direction = 'stop';

myStopFunction();
msg = 'End'
break;

/*
case currentPosition[0]:
document.getElementById(currentPosition[0]).innerHTML += `😋${currentPosition[0]}`;
break;
*/
default:

}





// food function
switch(food[0]) {

// wall
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:

case 11:
case 21:
case 31:
case 41:
case 51:
case 61:
case 71:
case 81:

case 20:
case 30:
case 40:
case 50:
case 60:
case 70:
case 80:
case 90:

case 91:
case 92:
case 93:
case 94:
case 95:
case 96:
case 97:
case 98:
case 99:
case 100:

food[0] = randomIntFromInterval(1, 100);
break;

default:
//document.getElementById(food[0]).innerHTML = `<square2 class="square2" style="background-color: var(--orange);">&nbsp;</square2>`;
document.getElementById(food[0]).classList.add("food");
}











snakeArr.push(currentPosition[0]);
//console.log(snakeArr);



// snake eat food
if(currentPosition[0] == food[0]){
snakeLenght[0]++;
food[0] = randomIntFromInterval(1, 100);
//document.getElementById(currentPosition[0]).innerHTML = `<square2 class="square2" style="background-color: var(--green); border: 1px solid var(--green2);">&nbsp;</square2>`;
document.getElementById(currentPosition[0]).classList.add("snakeGreen");

document.getElementById("alert").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/click.mp3"></audio>`; 
}




document.getElementById('score').innerHTML = `<spna class="blue">${snakeLenght[0]}</span> <span class="orange bold">${msg}</span>`;;


darawSnake();






}










function darawSnake(){

if(msg == 'End'){
document.getElementById("alert").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/click.mp3"></audio>`; 
// colision
msg = `<span class="red bold">${msg}</span>`;
}

// win
if(snakeLenght[0] == 64){
currentDirection[0] = 'stop';

msg = `<span class="orange bold">Win</span>`;
document.getElementById("alert").innerHTML = `<audio style="display:none" autoplay="false" src="${confD}audio/win.mp3"></audio>`;
}



if(snakeLenght[0] <= 63){ // not cut when stop, for fix empty square when everything is eaten
snakeArr = snakeArr.slice(-snakeLenght[0]);
}
//document.getElementById(currentPosition[0]).innerHTML += `🟩${currentPosition[0]}`;

snakeArr.forEach(myFunction);
function myFunction(item) {
//document.getElementById(item).innerHTML += `<square2 class="square2" style="background-color: var(--green); border: 1px solid var(--green2);">&nbsp;</square2>`;
//if(currentPosition[0] == item&&snakeArr[snakeArr.length - 1] != item){ currentDirection[0] = 'stop'; }
document.getElementById(item).classList.add("snakeGreen");
if(item == currentPosition[0]){
document.getElementById(item).classList.add("snakeHead");
}

// stop if eats himself
//https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
if(findDuplicates(snakeArr).length >= 1){ currentDirection[0] = 'stop'; }

}



}


//https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
const input = document.querySelector("html");

//input.addEventListener("keypress", keyPressed);
input.addEventListener("keydown", keyPressed);


function keyPressed(e) {
//console.log(e.code);
//console.log(` ${e.code}`)
if(currentDirection[0] != 'stop'){

if(
e.code == 'Numpad8'&&currentDirection[0] != 'down'||
e.code == 'ArrowUp'&&currentDirection[0] != 'down'||
e.code == 'KeyW'&&currentDirection[0] != 'down'||
e.code == 'KeyI'&&currentDirection[0] != 'down'){ currentDirection[0] = 'up'; }
if(
e.code == 'Numpad5'&&currentDirection[0] != 'up'||
e.code == 'Numpad2'&&currentDirection[0] != 'up'||
e.code == 'ArrowDown'&&currentDirection[0] != 'up'||
e.code == 'KeyS'&&currentDirection[0] != 'up'||
e.code == 'KeyK'&&currentDirection[0] != 'up'){ currentDirection[0] = 'down'; }
if(
e.code == 'Numpad4'&&currentDirection[0] != 'right'||
e.code == 'ArrowLeft'&&currentDirection[0] != 'right'||
e.code == 'KeyA'&&currentDirection[0] != 'right'||
e.code == 'KeyJ'&&currentDirection[0] != 'right'){ currentDirection[0] = 'left'; }
if(
e.code == 'Numpad6'&&currentDirection[0] != 'left'||
e.code == 'ArrowRight'&&currentDirection[0] != 'left'||
e.code == 'KeyD'&&currentDirection[0] != 'left'||
e.code == 'KeyL'&&currentDirection[0] != 'left'){ currentDirection[0] = 'right'; }
}
}



function control(e) {
if(currentDirection[0] != 'stop'){
if(e == 'up'&&currentDirection[0] != 'down'){ currentDirection[0] = 'up'; }
if(e == 'down'&&currentDirection[0] != 'up'){ currentDirection[0] = 'down'; }
if(e == 'left'&&currentDirection[0] != 'right'){ currentDirection[0] = 'left'; }
if(e == 'right'&&currentDirection[0] != 'left'){ currentDirection[0] = 'right'; }
}
}










lDrawGrid(currentPosition[0]);

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}



function myStopFunction() {
  clearInterval(myInterval);
}



var myInterval = window.setInterval(function(){
lDrawGrid();
}, 1000);

//intervalID = setInterval(lDrawGrid(), 5000);

