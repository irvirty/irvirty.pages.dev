// v.1.0.5


let spinNumber = "";


spinNumber = `

<div class="spinNumber" style="transform: rotate(0deg);">1</div>
<div class="spinNumber" style="transform: rotate(40deg);">9</div>
<div class="spinNumber" style="transform: rotate(80deg);">8</div>
<div class="spinNumber" style="transform: rotate(120deg);">7</div>
<div class="spinNumber" style="transform: rotate(160deg);">6</div>
<div class="spinNumber" style="transform: rotate(200deg);">5</div>
<div class="spinNumber" style="transform: rotate(240deg);">4</div>
<div class="spinNumber" style="transform: rotate(280deg);">3</div>
<div class="spinNumber" style="transform: rotate(320deg);">2</div>
<style>
.spinWheelAni {
/*transition: transform 1000ms ease-in-out;*/
transition: transform 900ms ease-in-out;
}

/*.spinWheelAni {
animation: spinWheelAni 1000ms;
}

@keyframes spinWheelAni {
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(360deg);
    }
}*/

</style>
`;


var print = `

<div class="spinArrow light shadow borderRadius4"><span id="spinNumberId"></span>⋙</div>

<div id="spinWheel" class="spinWheel spinWheelAni shadow4">
${spinNumber}
<div id="spinStart" class="spinStart button submit shadow3 pointer" onclick="spinWheel('start');return false;">Start</div>
</div>

`;

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}


function spinWheel(mode){



if (mode == 'start'){

let spinRound = 0;
let spinRandomNumber = 1;

let spinRotateDeg = 0;
let spinRotateDegPrev = -45;

let i = 0;

if (mode == 'start'){
document.getElementById("spinStart").innerHTML = `*`;
i = 0;
spinRandomNumber = fuMRandom(1, 9);

//https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
const stopInterval = setInterval(() => {
if (mode == 'start'){

document.getElementById("result2").innerHTML = `

<style>
.spinWheelAni {
transform: rotate(0deg);
}

</style>

`;


i++;
spinRound++;


if(i == 10){ i = 1; }

console.log(i);
//console.log(spinRound);
//console.log(`spinRandomNumber: ${spinRandomNumber} || spinRound: ${spinRound} || i: ${i}`);


/*var element = document.getElementById("spinWheel");
element.classList.add("spinWheelAni");*/


//if (spinRotateDeg == 360){ spinRotateDeg = 360; }
document.getElementById("result2").innerHTML = `

<style>
.spinWheelAni {
transform: rotate(${spinRotateDeg}deg);
}
</style>

`;

//document.getElementById("spinNumberId").innerHTML = `${spinRandomNumber}:${i}`;

if(/*spinRound >= 8&&*/spinRandomNumber == i){
document.getElementById("spinStart").innerHTML = `<span class="xSmall pointer">End. Restart</span>`;
mode = 'stop';
clearInterval(stopInterval);
}


}

spinRotateDeg = spinRotateDeg + 40;
spinRotateDegPrev = spinRotateDeg - 40;

}, 1000);

}

}

}



/*addEventListener("DOMContentLoaded", (event) => {});
i = 1;
setInterval(() => {
console.log(i);
//console.log(Math.round((new Date() - before) / 1000));
//if(i == 5){ alert(i); }
i++;
}, 1000);*/





/*var element = document.getElementById("spinWheel");
element.classList.add("spinWheelAni");*/
