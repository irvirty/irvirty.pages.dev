// Text to binary v.1.1.0

var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");

/*try{ q = decodeURIComponent(q); }
catch(err){ }*/





var print = `




<div class="center2">
<div class="wrapper">

<div>
<div class="border-radius tLeft block borderList light padding2 scroll" style="max-height: 250px;"><b><span id="result3"></span></b></div>
<div id="result3" class="scroll" style="max-height: 100px;"></div>
<div id="result2" class="scroll" style="max-height: 50px;"></div>
</div>

<div class="block padding2"></div>

<form action="index.html" style="width: 100%;">

<textarea id="inputText" rows="1" id="text" class="result padding2"  name="q" placeholder=" input" autofocus="autofocus"></textarea>
<input class="op small submit" type="submit">
</form>

<div id="binaryToText"></div>

</div>
</div>



`;

document.getElementById("result").innerHTML = print; 

if(q != 'null'&&q != null&&q != ''){


if(document.getElementById("inputText") != null){
document.getElementById("inputText").value = q;
}

q = lEncodeToBinary(q, 'result3');

}


// input listener and print result
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
}

function updateValueInput(e){
//q = encodeURIComponent(e.target.value);
q = e.target.value;
//document.getElementById("result2").innerHTML = '<div class="border-radius result pre scroll padding2 borderList bg">'+ fuMClearText((q).trim()) +'</div><span id="scrollTo"></span>';
//document.getElementById("scrollTo").scrollIntoView(true);



lEncodeToBinary(q, 'result3');


countSymbol = '';
}


function lEncodeToBinary(q, id){

let binaryText = '';
//countSymbol = q.length;


//https://stackoverflow.com/questions/14430633/how-to-convert-text-to-binary-code-in-javascript
for (var i = 0; i < q.length; i++) {
binaryText += q[i].charCodeAt(0).toString(2) + " ";
}

document.getElementById(id).textContent = binaryText; 

binaryText = '';
}






