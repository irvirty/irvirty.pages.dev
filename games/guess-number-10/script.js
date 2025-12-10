// Guess number game v.1.5.2

var limit = 10;
var rangeValue = 0;

var task = [];
var answer = [];
var mode = [];
mode[0] = 10;

//https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
var delayInMilliseconds = 1000; //1 second

var gameMode = '5,10,25,50,100,1000,10000,100000,1000000';
var printGameMode = '';





function modeSelect(mode33){

document.getElementById("number2").removeEventListener("input", updateValue);
document.getElementById("number2").addEventListener("input", updateValue);

(gameMode.split(',')).forEach((item) => {
if(mode33 != item){
printGameMode += `
<a class="brand button op" href="#" onclick="modeSelect('${item}');return false;">${item}</a>
`;
}else{
mode[0] = mode33;
printGameMode += `
<a class="button" href="#" onclick="modeSelect('${item}');return false;">${item}</a>
`;
}
});

document.getElementById("mode").innerHTML = printGameMode;
printGameMode = '';

document.getElementById("number2").innerHTML = `

<input id="number" class="tCenter" type="number" name="number" min="0" value="0" max="${mode[0]}" autofocus="autofocus" required>

`;

document.getElementById("range2").innerHTML = `

<input id="range" class="slider padding2" name="range" type="range" min="0" max="${mode[0]}" step="1" value="0" onmouseup="submit33();" ontouchend="submit33();">
</form>
`;

}

function start(){
if(answer[0] == undefined){ answer[0] = 0; }
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer from 0 to 9:
task[0] = Math.floor(Math.random() * mode[0]); 

if(task[0] == answer[0]){
document.getElementById("gameResult").innerHTML = `
<div class="h3">
<!--<span class="padding2 h3 orange bold"></span>-->
<br><br>
<span class="orange bold"></span>
<span class="bold"></span>
<span class="bold">${answer[0]}</span>
</div>
<span class="op padding2 margin2 xSmall">(mode: 0-${mode[0]})</span>
`;

setTimeout(function() {
document.getElementById("gameResult").innerHTML = `
<div class="h3">
<!--<span class="padding2 h3 orange bold">win</span>-->
<br><br>
<span class="orange bold">${task[0]}</span>
<span class="bold">==</span>
<span class="green bold">${answer[0]}</span>
</div>
<span class="op padding2 margin2 xSmall">(mode: 0-${mode[0]})</span>
<audio style="display:none" autoplay="false" src="${confD}audio/win.mp3"></audio>
`;
}, delayInMilliseconds);

} else {
document.getElementById("gameResult").innerHTML = `
<div class="h3">
<!--<span class="padding2 h3 red bold"></span>-->
<br><br>
<span class="orange bold"></span>
<span class="bold"></span>
<span class="bold">${answer[0]}</span>
</div>
<span class="op padding2 margin2 xSmall">(mode: 0-${mode[0]})</span>
`;

setTimeout(function() {
document.getElementById("gameResult").innerHTML = `
<div class="h3">
<!--<span class="padding2 h3 red bold">end</span>-->
<br><br>
<span class="orange bold">${task[0]}</span>
<span class="bold">!=</span>
<span class="red bold">${answer[0]}</span>
</div>
<span class="op padding2 margin2 xSmall">(mode: 0-${mode[0]})</span>
<audio style="display:none" autoplay="false" src="${confD}audio/error.mp3"></audio>
`;
}, delayInMilliseconds);

}


}

var print = `

<div class="center2">
<div class="wrapperSmall2">

<div id="gameResult" class="block tCenter"></div>

<form id="form">
<label class="op block tLeft xSmall paddingList">input number:</label>
</form>

<div id="number2"></div>
<div class="buttonPlusMinus">
<a href="#" id="prev" class="light border notUnderline" onclick="submitButtonPrev();return false;" >-</a>
<a href="#" id="next" class="light border notUnderline" onclick="submitButtonNext();return false;" >+</a>
</div>
<div id="range2"></div>

<a class="block tCenter button border light h3 op small submit notUnderline" style="cursor: pointer;" onclick="start();return false;" href="#">Submit</a>

<div class="tCenter block padding2 margin2">
<div>
<br>
<span class="op small">mode:</span><br><span id="mode"></span>
</div>
</div>

</div>
</div>
`;





// button prev
function submitButtonPrev(){

rangeValue = document.getElementById("range").value;

answer[0] = Number(rangeValue) - 1;
if (answer[0]  == -1){ answer[0] = 0; }

document.getElementById("range").value = answer[0];
document.getElementById("number").value = answer[0];


//start();

/*
//https://stackoverflow.com/questions/7609130/set-the-default-value-of-an-input-field
document.getElementById("number").setAttribute('value', rangeValue);*/

document.getElementById("number2").innerHTML = `

<input id="number" class="tCenter" type="number" name="number" value="${answer[0]}" min="0" max="${mode[0]}">

`;


}

// button next
function submitButtonNext(){

rangeValue = document.getElementById("range").value;

answer[0] = Number(rangeValue) + 1;
document.getElementById("range").value = answer[0];
document.getElementById("number").value = answer[0];


//start();

}



// range input
function submit33(){
rangeValue = document.getElementById("range").value;

answer[0] = rangeValue;



document.getElementById("number").value = answer[0];


/*
//https://stackoverflow.com/questions/7609130/set-the-default-value-of-an-input-field
document.getElementById("number").setAttribute('value', rangeValue);*/
/*
document.getElementById("number2").innerHTML = `

<input id="number" class="tCenter" type="number" name="number" value="${rangeValue}" min="0" max="${mode[0]}">

`;*/

//start();

}





// number input
function updateValue(e) {

rangeValue = e.target.value;

answer[0] = rangeValue;





//document.getElementById("range2").setAttribute('value', rangeValue);

/*document.getElementById("range2").innerHTML = `

<input id="range" class="slider" name="range" style="" value="${rangeValue}" type="range" min="0" max="${mode[0]}" step="1" onmouseup="submit33();" ontouchend="submit33();">
</form>
`;*/

document.getElementById("range").value = answer[0];
}




document.getElementById("result").innerHTML = print; 

// disable enter key
//https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form
//window.addEventListener('keydown',function(e){
document.getElementById("number2").addEventListener('keydown',function(e){
if(e.keyIdentifier == 'U+000A'||e.keyIdentifier == 'Enter'||e.keyCode==13){
start();
e.preventDefault();
//return false;
if(e.target.nodeName == 'INPUT'&&e.target.type == 'text'){
e.preventDefault();
//return false;

//}}},true
}}
true;
}
);

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
modeSelect(mode[0]);
document.getElementById("number").addEventListener("input", updateValue);








// button prev
function submitButtonDynamic(){

rangeValue = document.getElementById("range").value;
document.getElementById("range").value = rangeValue;
document.getElementById("number").value = rangeValue;

document.getElementById("number2").innerHTML = `

<input id="number" class="tCenter" type="number" name="number" value="${rangeValue}" min="0" max="${mode[0]}">

`;

}

document.getElementById("result").onmousemove = (event) => {
submitButtonDynamic();
};




