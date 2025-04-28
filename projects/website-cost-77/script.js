// v.1.0.5

let totalPost = HowMuchDoesAWebsiteCostJsonVar.length;
let totalNumber = 0;
let averageYear = 0;
let result = "empty";
//let resultCountdown = "empty";

let i = 0;
HowMuchDoesAWebsiteCostJsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['text2'] != null){ postText2 = item['text2']; }
if(item['text3'] != null){ postText3 = item['text3']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }

var delimiter = ["|", ",", "+", " ", "\r\n", "\r", "\n"];
delimiter.forEach((value33) => {
postText2 = postText2.replaceAll(value33, "SYMBOLFORSPLIT");
});

let postText2Sum = 0;
(postText2.split("SYMBOLFORSPLIT")).forEach((val33) => {
if (!isNaN(Number(val33.trim()))&&val33.trim() != "") {
postText2Sum = postText2Sum +  Number(val33.trim());
totalNumber++;
}
});

averageYear = averageYear + postText2Sum;


i++;
});



result = averageYear / Number(totalNumber);
//https://stackoverflow.com/questions/3174285/javascript-remove-numbers-after-the-dot
result = String(result).split('.')[0];

//https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
//resultCountdown = Number(result) - Number(new Date().getFullYear())
//<div class="op padding2 tCenter">Countdown</div>
//<h2 class="tCenter">${resultCountdown} years</h2>

result = numberWithCommas(result) + '$';


var print = `

<div class="bg shadow2 borderRadius3 padding2">
<div class="padding2"></div>

<b class="block tCenter large">Average number</b>
<h3 class="tCenter">${result}</h3>
<div class="tCenter op small"><a class="brand" href="data-list.html">${totalNumber} numbers (${totalPost} - items)</a></div>
<div class="padding2"></div>
</div>

<div class="margin2 padding2"></div>

<div class="op small">

Notes:<br>
<div>- <b>${result}</b> - average value based on ${totalNumber} numbers  (article, post, etc).</div>

<div>- <a class="bold brand" href="data-list.html">List of collected data</a></div>

<div class="padding2"></div>

</div>

`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}


//https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
function numberWithCommas(x) {
//return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}



