// v.1.0.5

let totalPost = agicountdownJsonVar.length;
let totalPredict = 0;
let averageYear = 0;
let result = "empty";
let resultCountdown = "empty";

let i = 0;
agicountdownJsonVar.forEach((item, key) => {

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
totalPredict++;
}
});

averageYear = averageYear + postText2Sum;


i++;
});



result = averageYear / Number(totalPredict);
//https://stackoverflow.com/questions/3174285/javascript-remove-numbers-after-the-dot
result = String(result).split('.')[0];

//https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
resultCountdown = Number(result) - Number(new Date().getFullYear())

var print = `

<div class="bg shadow2 borderRadius3 padding2">
<div class="padding2"></div>
<div class="op padding2 tCenter">Countdown</div>
<b class="block tCenter large">Artificial General Intelligence</b>
<h2 class="tCenter">${resultCountdown} years left</h2>
<h3 class="tCenter">${result}</h3>
<div class="tCenter op small"><a class="brand" href="data-list.html">${totalPredict} forecasts (${totalPost} - items)</a></div>
<div class="padding2"></div>
</div>

<div class="margin2 padding2"></div>

<div class="op small">

Notes:<br>
<div>- <b>${result}</b> - average value based on ${totalPredict} predictions  (article, post, etc).</div>

<div>- Based on random posts about a possible date when AGI will be created, not just experts, everyone.</div>
<div>- <a class="bold brand" href="data-list.html">List of collected data</a></div>

<div class="padding2"></div>

Similar site or page:<br>


<a class="brand" href="https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/">Date of Artificial General Intelligence | Metaculus </a><br>

<a class="brand" href="https://www.metaculus.com/questions/3479/date-weakly-general-ai-is-publicly-known/">Date Weakly General AI is Publicly Known | Metaculus</a><br>


</div>

`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}
