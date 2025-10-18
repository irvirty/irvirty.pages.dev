// Bg colors list v.1.1.1


function fuLPrintBgRun(){

let lAllBgColorsLight = {
"light blue":"#E9ECF0",
"light green":"#E8EBE4",
"light":"#EBEBEB",
"light merino":"#EDEAE1",
"light olive":"#EBEBE4",
"light orange":"#EBE8E4",
"light pink":"#EBDFE8",
"light plum":"#EBDFEB",
"light purple":"#E9E4EB",
"light red":"#F0E9E9",
"light sea":"#E4EBEB",
"light SeaShell":"#FFF3EB",
"light violet":"#E6E4EB",
"light yellow":"#EBEAE4",
"medium blue":"#DDE0EB",
"medium green":"#D1EBD1",
"medium lime":"#DBEBCF",
"medium mint":"#D1EBDD",
"medium olive":"#E3EBD1",
"medium orange":"#EBE2D1",
"medium pink":"#FFE6E6",
"medium plum":"#EBDBE3",
"medium purple":"#E9DBEB",
"medium red":"#EBDDDD",
"medium sea":"#CFE4EB",
"medium silver":"#EBEBEB",
"medium violet":"#EAE4F2",
"medium yellow":"#EBE8D1",
}

let lAllBgColorsDark = {
"medium dark blue":"#2E4473",
"medium dark brown":"#573625",
"medium dark forest":"#255742",
"medium dark gray":"#4A4A4A",
"medium dark green":"#255729",
"medium dark olive":"#465725",
"medium dark pink":"#732E63",
"medium dark plum":"#5E2743",
"medium dark purple":"#582863",
"medium dark red":"#5E2727",
"medium dark sea":"#285963",
"medium dark slate":"#24594E",
"medium dark violet":"#3E275E",
"medium dark yellow":"#595936",
"dark":"#2D2D2E",
"dark blue":"#34363B",
"dark forest":"#323B37",
"dark green":"#343B39",
"dark orange":"#3B3834",
"dark pink":"#3A343B",
"dark plum":"#3B3438",
"dark purple":"#3B3A34",
"dark red":"#3B3435",
"dark sea":"#343B3B",
"dark slate":"#323B3A",
"dark violet":"#38343B",
"dark yellow":"#3B3A34",
}


if(document.getElementById("lPrintBgList") != null){
document.getElementById("lPrintBgList").innerHTML += `light: `;
}
//if(varLTheme == 'light'){}
let lAllBgColorsLightArr = Object.getOwnPropertyNames(lAllBgColorsLight);
lAllBgColorsLightArr.forEach((item, index) => {
if(document.getElementById("lPrintBg") != null){
document.getElementById("lPrintBg").innerHTML += `
<div class="lBlock" style="border: 1px solid #A4A4A4; color: #000; background-color: ${lAllBgColorsLight[item]};">
<div>${item}<b><br>${item}</b><br><br>${lAllBgColorsLight[item]}</div>
</div>

`;
}
if(document.getElementById("lPrintBgList") != null){
document.getElementById("lPrintBgList").innerHTML += `${lAllBgColorsLight[item]} `;
}
});



if(document.getElementById("lPrintBgList") != null){
document.getElementById("lPrintBgList").innerHTML += `<br><br>dark: `;
}

//if(varLTheme == 'dark'){}
let lAllBgColorsDarkArr2 = Object.getOwnPropertyNames(lAllBgColorsDark);
lAllBgColorsDarkArr2.forEach((item, index) => {
if(document.getElementById("lPrintBg2") != null){
document.getElementById("lPrintBg2").innerHTML += `
<div class="lBlock" style="border: 1px solid #191919; color: #fff; background-color: ${lAllBgColorsDark[item]};">
<div>${item}<b><br>${item}</b><br><br>${lAllBgColorsDark[item]}</div>
</div>

`;
}

if(document.getElementById("lPrintBgList") != null){
document.getElementById("lPrintBgList").innerHTML += `${lAllBgColorsDark[item]} `;
}
});




}

fuLPrintBgRun();
