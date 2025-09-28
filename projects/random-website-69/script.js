// v.1.0.5

let totalPost = data.length;
let result = "empty";
var lRandomWebsiteCounter = 0;

function lRandomSiteMain(){
var lRandomWebsite = fuMRandom(0, totalPost -1);
var lRandomWebsiteText = data[lRandomWebsite]["text"];
var lRandomWebsiteUrl = data[lRandomWebsite]["url"];


var print = `

<div class="bg shadow2 borderRadius3 padding2">
<div class="padding2"></div>

<div class="tRight small padding"><span class="gray op">random: ${lRandomWebsite} | total: ${totalPost}</span></div>
<div class="margin2 padding2"></div>

<div class="large wrapperSmall" style="min-height: 100px;">
<b>${lRandomWebsiteText}</b><br>
<a class="brand" href="${lRandomWebsiteUrl}">${lRandomWebsiteUrl}</a>
</div>

<div class="margin2 padding2"></div>
</div>

<div class="margin2 padding2"></div>



`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}

lRandomWebsiteCounter++
//console.log(lRandomWebsiteCounter);
if (lRandomWebsiteCounter >= 15){ clearInterval(lRandomWebsiteTimer); }
}




var lRandomWebsiteTimer = setInterval( lRandomSiteMain, 150);


