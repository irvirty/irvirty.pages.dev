// v.1.1.0




var  geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");
q = Number(q);

if(q == 0||q == null||isNaN(q)){ q = 7; }


let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMBOPQRSTUWXYZ";
letter = [...letter];


let number = "0123456789";
number = [...number];

let symbol = "!@#$%&";
symbol = [...symbol];

// https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
return arr;
}

function dublicate(arr, n) {
b = [];
for(var x = 0; x < n; ++x){
for(var i = 0; i < arr.length; ++i){
b.push(arr[i]);
}
}
return arr = b;
}

function cuttext(text, n){ return  text = text.substr(0, n); }

function printarr(arr){
let result = '';
result = arr.join("");
return result;
}

letter = dublicate(letter, q);
number = dublicate(number, q);
symbol = dublicate(symbol, q);

shuffle(letter);
result = printarr(letter);
result = cuttext(result, q);
document.getElementById("letter").innerHTML = result; 

shuffle(number);
result = printarr(number);
result = cuttext(result, q);
document.getElementById("number").innerHTML = result; 

letternumber = letter.concat(number);
shuffle(letternumber);
result = printarr(letternumber);
result = cuttext(result, q);
document.getElementById("letternumber").innerHTML = result; 

letternumbersymbol = [];
letternumbersymbol = letternumber.concat(letter);
letternumbersymbol = letternumber.concat(number);
letternumbersymbol = letternumber.concat(symbol);
shuffle(letternumbersymbol);
result = printarr(letternumbersymbol);
result = cuttext(result, q);
document.getElementById("letternumbersymbol").innerHTML = result; 




result = '';
var nav = "5,6,7,8,9,10,50,100,300,500,1000,10000";
nav = nav.split(",");
for(let i = 0; i < nav.length; i++){
if(q == nav[i]){
result += '<span class="button">'+nav[i]+'</span>';
}else{
result += '<a class="button brand" href="?q='+nav[i]+'">'+nav[i]+'</a>';
}
}

document.getElementById("q").innerHTML = result; 
