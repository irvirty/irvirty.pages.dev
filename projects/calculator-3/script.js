// v.1.2.2
// inspired by Bing Web Calculator, Google Web Calculator, Google Calculator App and other

//console.log(Math.pow(10, 100));

var calcMode = [];
calcMode[0] = 'script';


if(localStorage.getItem("calculator-mode")){
calcMode[0] = localStorage.getItem("calculator-mode");
}else{
calcMode[0] = 'script';
}





function printCaclMode(mode){
/*
if(mode == 'script'){
document.getElementById('calculator-mode').innerHTML = 
`
<span class="tag op">mode:</span>

<a class="tag border light4" href="#" onclick="setMode('script');return false;">script</a>

`;
}


*/
}


const grid = `

<div class="">


<div class="calculator shadow padding2 bg">

<form>
<!--<input id="lCalcInput" type="text" autofocus="autofocus">-->
<!--<textarea id="lCalcInput" type="text" autofocus="autofocus"></textarea>-->
<div><div id="calcResultTop" class="calcResultTop" contenteditable="true"></div><span id="calcResultTopScrollTo"></span></div>
<div id="calcResult" class="block padding2 bg border itemHeight2">result</div>
</form>

<div class="margin padding"></div>

<div class="grid grid2">
<a class="button border light red" href="#" onclick="clickInput('C');return false;">C</a>
<a class="button border light red large" href="#" onclick="clickInput('⇦');return false;">⇦</a>
</div>

<div class="margin padding"></div>

<div class="grid">

<!--https://stackoverflow.com/questions/1070760/javascript-href-vs-onclick-for-callback-function-on-hyperlink-->
<!--<a class="button border light" href="#" onclick="clickInput('(');return false;">(</a>
<a class="button border light" href="#" onclick="clickInput(')');return false;">)</a>-->

<a class="button border light3" href="#" onclick="clickInput('7');return false;">7</a>
<a class="button border light3" href="#" onclick="clickInput('8');return false;">8</a>
<a class="button border light3" href="#" onclick="clickInput('9');return false;">9</a>
<a class="button border light large" href="#" onclick="clickInput('/');return false;">/</a>

<a class="button border light3" href="#" onclick="clickInput('4');return false;">4</a>
<a class="button border light3" href="#" onclick="clickInput('5');return false;">5</a>
<a class="button border light3" href="#" onclick="clickInput('6');return false;">6</a>
<a class="button border light large" href="#" onclick="clickInput('*');return false;">*</a>

<a class="button border light3" href="#" onclick="clickInput('1');return false;">1</a>
<a class="button border light3" href="#" onclick="clickInput('2');return false;">2</a>
<a class="button border light3" href="#" onclick="clickInput('3');return false;">3</a>
<a class="button border light large" href="#" onclick="clickInput('-');return false;">-</a>

<a class="button border light3" href="#" onclick="clickInput('0');return false;">0</a>
<a class="button border light large" href="#" onclick="clickInput('.');return false;">.</a>
<a class="button border light blue gray large op" href="#" onclick="clickInput('=');return false;">=</a>
<a class="button border light large" href="#" onclick="clickInput('+');return false;">+</a>

</div>

<div class="block margin padding"></div>

</div>


</div>


</div>


<div class="wrapperSmall2">
<div class="block margin2 padding2"></div>
<a class="button w100 op tag light border borderRadius2 gray" onclick="fuMReload();return false;" href="#">reload</a>
</div>

`;




document.getElementById('result').innerHTML = grid;


// input 1 (click)
function clickInput(value){
fuCalc(value, 'emptyCommand');
}

if(document.getElementById("lCalcInput") != null){
//document.querySelectorAll('input')[0].addEventListener('input', updateValue);
document.getElementById("lCalcInput").addEventListener('input', updateValue);
}

// editable
if(document.getElementById("calcResultTop") != null){
document.getElementById('calcResultTop').addEventListener('input', (e) => {
let text = document.getElementById('calcResultTop').innerText;
//document.getElementById('calcResultTop').innerText = text;
fuCalc(String(text), 'editable');
});
}


// input 2 (form input)
function updateValue(e) {
fuCalc(String(e.target.value), 'clear');
}


var lInput = [];
lInput[0] = '';

function fuCalc(lInputGet, lOption){
if(lInputGet == undefined){ lInputGet = ''; }
if(lOption == 'clear'||lOption == 'editable'){ lInput[0] = ''; }

lInput[0] += lInputGet;
lInput[0] = lInput[0].replaceAll("'", '');
lInput[0] = lInput[0].replaceAll('"', '');
lInput[0] = lInput[0].replaceAll('<', '');
lInput[0] = lInput[0].replaceAll('>', '');



let result = '';

if(lInput[0][lInput[0].length - 1] == '⇦'){ lInput[0] = lInput[0].slice(0, -2); }
if(lInput[0][lInput[0].length - 1] == '='){ lInput[0] = lInput[0].slice(0, -1); }
if(lInput[0][lInput[0].length - 1] == 'C'){ lInput[0] = ''; }

// print input
if(document.getElementById("lCalcInput") != null){
//document.querySelectorAll('input')[0].value = lInput[0];
document.getElementById("lCalcInput").value = lInput[0];
}
if(conf["confDevice"] != 'mobile'){
//document.querySelectorAll('input')[0].focus();
if(document.getElementById("lCaclInput") != null){
document.getElementById("lCaclInput").focus();
}
}


// bracket count
var bracket = 0;
var bracket2 = 0;
var arrayBParse = lInput[0].split("");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
arrayBParse.forEach((element) => {
if(element == '('){ bracket++; }
if(element == ')'){ bracket2++; }
});
// end bracket count

// if bracket not ok
if(bracket != bracket2){
result = lInput[0].replaceAll('(', '<span class="red bold">(</span>');
result = lInput[0].replaceAll(')', '<span class="red bold">)</span>');
}else{
// if bracket ok
result = lInput[0];

result = result.replaceAll('(', '');
result = result.replaceAll(')', '');


//if(calcNotSupportSymbolList == ''){}
function calcSplit(inputText){

let resultFu = inputText.split("");
let resultFu2 = "";
resultFu.forEach((val, key) => {
if(val == '-'&&inputText[key - 1] != 'e'){
val = val.replaceAll("-", 'SYMBOLFORSPLIT-SYMBOLFORSPLIT');
//console.log(val);
}

if(val == '+'&&inputText[key - 1] != 'e'){
val = val.replaceAll("+", 'SYMBOLFORSPLIT+SYMBOLFORSPLIT');
//console.log(val);
}

val = val.replaceAll("/", 'SYMBOLFORSPLIT/SYMBOLFORSPLIT');
val = val.replaceAll("*", 'SYMBOLFORSPLIT*SYMBOLFORSPLIT');
val = val.replaceAll("(", 'SYMBOLFORSPLIT(SYMBOLFORSPLIT');
val = val.replaceAll(")", 'SYMBOLFORSPLIT)SYMBOLFORSPLIT');
resultFu2 += val;
});


return resultFu = resultFu2.split("SYMBOLFORSPLIT");

}


result = calcSplit(result);
result.forEach((val, key) => {
if(val == '*'){
result[key + 1] = Number(result[key - 1]) * Number(result[key + 1]);
result[key - 1] = '';
result[key] = '';
}

if(val == '/'){
result[key + 1] = Number(result[key - 1]) / Number(result[key + 1]);
result[key - 1] = '';
result[key] = '';
}

});

result = result.join("");

result = calcSplit(result);
result.forEach((val, key) => {
if(val == '+'){
result[key + 1] = Number(result[key - 1]) + Number(result[key + 1]);
result[key - 1] = '';
result[key] = '';
}


if(val == '-'){
result[key + 1] = Number(result[key - 1]) - Number(result[key + 1]);
result[key - 1] = '';
result[key] = '';
}

});




result = result.join("");

}

if(result == ''){ result = " "; }



//if(result == ''||result == undefined||/\d/.test(result) == false){ result = 'result'; }
if(lOption != "editable"){
document.getElementById("calcResultTop").innerText = lInput[0];
}

//document.getElementById("calcResultTopScrollTo").scrollIntoView();

document.getElementById("calcResult").innerText = result;


return result;
}

fuCalc();















