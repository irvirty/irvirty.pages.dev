// v.1.1.0


var  geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");
q = Number(q);
if(q == 0||q == null||isNaN(q)){ q = 1000; }

let letter = "abcde fghijk lmnop qrstu vwxyz ";
letter = [...letter];


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



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
let sentence = parseInt(getRandomArbitrary(75, 100));
let arr2 = [];
let count = 0;
let check = true;
arr.forEach((element, index) => {

if(parseInt(getRandomArbitrary(1, 2)) == parseInt(getRandomArbitrary(1, 400))&&index >= 200&&arr[index].trim() != ''&&check == true){
arr[index] = `.

`+arr[index].toUpperCase();
check = false;
}


if(parseInt(getRandomArbitrary(1, 2)) == parseInt(getRandomArbitrary(1, 30))&&index >= 20&&arr[index].trim() != ''&&check == true){
arr[index] = ', '+arr[index];
check = false;
}


if(count == sentence&&arr[index].trim() != ''&&check == true){
arr[index] = arr[index]+'. '+arr[index].toUpperCase();
count = 0;
check = false;
}

check = true;

count++;
});

//arr = arr2;

arr = (arr.join("")).trim();
arr = [...arr];
arr[0] = ''+arr[0].toUpperCase();

let result = '';
result = arr.join("");




return result;
}

letter = dublicate(letter, q);

shuffle(letter);
result = printarr(letter);
result = cuttext(result, q);

//result = result.replaceAll(/\s/g,' ');
result = result.replaceAll(/ +(?= )/g,'');
result = result.replaceAll(' ,',', ');
result = result.replaceAll('.,',', ');
result = result.replaceAll(' .','.');

result = result.replaceAll(/(\r\n|\r|\n){2,}/g, '$1\n');
//https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
result = result.replaceAll(/  +/g, ' ');


result = result.concat('.');

document.getElementById("letter").innerHTML = 'Random text. ' + result; 
document.getElementById("letter2").innerHTML = 'Random text. ' + result; 


result = '';
var nav = "100,250,500,1000,2000,3000,5000,10000,100000";
nav = nav.split(",");
for(let i = 0; i < nav.length; i++){
if(q == nav[i]){
result += '<span class="button">'+nav[i]+'</span>';
}else{
result += '<a class="button brand" href="?q='+nav[i]+'">'+nav[i]+'</a>';
}
}

document.getElementById("q").innerHTML = `
<a class="button brand" href="./">start</a>
<a class="button brand" href="#" onclick="fuMReload();return false;">reload</a> ~ :
`+result; 


document.getElementById("lMsg").innerHTML = 'Click for copy';
//https://stackoverflow.com/questions/45071353/copy-text-string-on-click
const span = document.getElementById("lMsg");
span.onclick = function() {
document.getElementById("lMsg").innerHTML = '';
document.execCommand("copy");
}


span.addEventListener("copy", function(event) {
event.preventDefault();
if (event.clipboardData) {
let span = document.getElementById("letter2");
event.clipboardData.setData("text/plain", span.textContent);
document.getElementById("lMsg").innerHTML = 'Text copied';
//console.log(event.clipboardData.getData("letter2"));
}
});
