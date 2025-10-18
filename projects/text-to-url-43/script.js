// Text to URL v.1.1.1

var url = new URL(window.location);
var q = url.searchParams.get("q");
if(q != null){
//q = q.replaceAll(/%/g, "%25");
//q = decodeURIComponent(q);
q = String(q).trim();
}

var result = '';
var print = `




<div class="center2">
<div class="wrapper">

<div>
<div class="border-radius tLeft block borderList light padding2"><b><span id="result3"></span></b></div>
<!--<div id="result2" class="scroll" style="max-height: 50px;"></div>-->
</div>

<div class="block padding2"></div>

<form action="index.html" style="width: 100%;">

<textarea rows="1" id="text" class="result padding2"  name="q" placeholder=" input" autofocus="autofocus"></textarea>
<input class="op small submit" type="submit">
</form>


</div>
</div>



`;

document.getElementById("result").innerHTML = print; 



// input listener and print result
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
}


function updateValueInput(e, text) {
//q = encodeURIComponent(e.target.value);
q = e.target.value;

//document.getElementById("result2").innerHTML = '<div class="border-radius result pre scroll padding2 borderList bg">'+(q).trim()+'</div><span id="scrollTo"></span>';
//document.getElementById("scrollTo").scrollIntoView(true);

textToUrl(q);
}

function textToUrl(text){

/*result = String(result).replaceAll(`-`, '-');
result = (String(text).replaceAll(`
`, '_')).toLowerCase();*/

function filterQ(symbol){
let filter = "-_0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
filter = filter.split("");
let resultClear = "";
filter.forEach((value) => {
if(symbol === value){ resultClear = String(value); }
});
if(symbol === resultClear){ symbol = symbol; } else { symbol = '-'; }
return String(symbol);
}

result = "";
text = text.split("");

text.forEach((value) => {
result += String(filterQ(value));
});

// rm double space, dash
//https://stackoverflow.com/questions/7764319/how-to-remove-duplicate-white-spaces-in-a-string
result = result.replace(/--+/g, "-");

//document.getElementById("result3").innerHTML = `<div class="border-radius tLeft block borderList light padding2"><b>${result}</b></div>`;
document.getElementById("result3").textContent = result;

}

if(q != null){ textToUrl(q); }


