// Average number v.1.3.0
// Inspired by a post on X.com when I wanted to know an average number.






var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");

/*try{ q = decodeURIComponent(q); }
catch(err){ }*/

if(q != null&&q != undefined){


if(document.getElementById("text") != null){
document.getElementById("text").value = q;
}

q = fuAver(q);

}






function fuAver(q33){
q = q33;

var qData = '';
var counter = 0;
var qDataProcessPrint = '';
var qResult = 0; 

var delimiter = ["+", " ", "\r\n", "\r", "\n"];
delimiter.forEach( (value) => {
//document.getElementById("printDelimiter").innerHTML = ` , + | space, line break ( ) [ ]`; 
});

//q = encodeURIComponent(e.target.value);

// prepare for split 1
q = q.replaceAll(",", ".");
q = q.replaceAll(" ", "|");
delimiter.forEach((value) => {
q = q.replaceAll(value, "|");
});

// prepare for split 2
//q = q.replaceAll(/\D/g, conf['confSymbolForSplit']);
(q.split("")).forEach((value) => {
if(!isNaN(value)&&value != ""||value == '.'){
qData += value;
}else{
qData += "|";
}
});


// calc 
qData = qData.split("|");
qData.forEach((value) => {
//https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string
if((value) !== ''&&!isNaN(value)){
qResult = Number(qResult) + Number(value);
qDataProcessPrint = String(qDataProcessPrint) + String(`${value}+`);
counter++;
}
});
if(qResult != 0&&counter != 0){
qResult = Number(qResult / counter);
}
qDataProcessPrint = qDataProcessPrint.slice(0, -1);
qDataProcessPrint = String(`approximately what is happening:<br>  (${qDataProcessPrint})/${counter}=${qResult}`);


//qResult = Math.round(qResult);
//https://stackoverflow.com/questions/4098685/rounding-numbers-to-2-digits-after-comma
qResult = qResult.toFixed(2);

// print
document.getElementById("result2").innerHTML = `<div class="result2 borderRadius result pre padding2  bg2 borderList">Average: ${qResult} (total: ${counter})</div>`;
//document.getElementById("scrollTo").scrollIntoView(true);

document.getElementById("result3").innerHTML = `<div class="result3 op xSmall borderRadius tLeft block  padding2 bg borderList">${qDataProcessPrint}</div>`;

qData = '';
qDataProcessPrint = '';
qResult = 0;
counter = 0;
q = '';








}


// input listener and print result
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
}

function updateValueInput(e) {
fuAver(e.target.value);
}


















