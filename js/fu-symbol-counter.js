// Count symbol v.1.0.1



function fuSymbolCounter(inputId, printId){

if (document.getElementById(inputId) != null&&document.getElementById(printId) != null){

document.getElementById(inputId).addEventListener('input', countSymbol);
document.getElementById(printId).innerText = 0;

function countSymbol(e){
let countSymbol = 0;
countSymbol = String(e.target.value).length;
document.getElementById(printId).innerText = countSymbol;
}

}

}







