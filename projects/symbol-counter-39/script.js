// Count symbol v.1.0.1


var print = `




<div class="center2">
<div class="wrapper">

<div>
<div id="result3" class="block tCenter padding2"></div>
<div id="result2"></div>
<div id="result4" class="block tCenter padding2"></div>
</div>

<div class="block padding2"></div>

<form action="index.html" style="width: 100%;">

<textarea rows="5" id="text" class="result padding2"  name="q" placeholder=" input" autofocus="autofocus"></textarea>
<!--<input class="xSmall" type="submit">-->
</form>


<div class="padding pre op">

* Title length: 30 and 60 characters.
* Description length: 30-155 characters.
* Keyword: less than 10% of the total words of a page.

</div>

</div>
</div>



`;

document.getElementById("result").innerHTML = print; 




// input listener and print result
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
}

function updateValueInput(e) {
//q = encodeURIComponent(e.target.value);
q = e.target.value;
document.getElementById("result2").innerHTML = '<div id="printText" class="result pre scroll padding2 border border-radius bg" style="max-height: 150px"></div><span id="scrollTo" ></span>';
document.getElementById("printText").textContent = (q).trim(); 
document.getElementById("scrollTo").scrollIntoView(true);


let countSymbol = '';
countSymbol = q.length;

let countWords = '';
let countWordsCount = 0;
countWords = q;
countWords = countWords.replaceAll(" ", "SYMBOLFORSPLIT");
countWords = countWords.replaceAll(`
`, "SYMBOLFORSPLIT");
countWords = countWords.split("SYMBOLFORSPLIT");

countWords.forEach((item) => {
if (item != ""){
countWordsCount++;
}
});

countWords = countWordsCount;

document.getElementById("result3").innerHTML = `<div class="h3">Symbols: ${countSymbol} | Words: ${countWords}</div>`;
document.getElementById("result4").innerHTML = `<div class="h3">Symbols: ${countSymbol} | Words: ${countWords}</div>`;
countSymbol = '';

}







