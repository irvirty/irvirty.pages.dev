/* Theme print option v.4.3.4 */
// variable config in main.js

var result = '';



themeListOption.forEach((element) => {
if(element == ''){ result += ''; }
//if(element == 'light'){ result += '<hr>'; }
if(element == 'light'){ result += '<div><p>Light:</p>'; }
if(element == 'dark'){ result += '</div><div><p>Dark:</p>'; }
if(element == 'o-blue'){ result += '</div><div><p>Other light:</p>'; }
if(element == 'od-blue'){ result += '</div><div><p>Other dark:</p>'; }
if(element == 'h-contrast-l'){ result += '</div><div><p>Hight Contrast:</p>'; }
if(element == 'rand-l'){ result += `
</div></div>
<div class="margin padding"></div>
<details>
<summary class="pointer brand wrapperSmall tLeft">Other:</summary><p>Random mode:</p>
`; }
if(element == 'auto-time'){ result += '</details><p>Auto mode:</p>'; }
if(element == 'auto'){ result += '<div class="margin wrapper"><hr></div>'; }


if(element == theme){
result += '<div id="'+element+'" class="tehemeListItem highlight borderBottomOrange border3 borderRadius2">'+element+'</div>';
}else{
result += '<div id="'+element+'" class="tehemeListItem light2 border3 borderRadius2">'+element+'</div>';
}

});

result = `





<style>

.tehemeList {
display: grid;
/*grid-template-areas: "a a a a a";*/
grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
/*grid-auto-columns: 1fr;*/
grid-gap: 1px;
width: 100%;
max-width: 550px;
margin: 0 auto;
}

@media(max-width: 90px) { .tehemeList { display: block; width: 100%; }}

.tehemeListItem {
display: inline-block;
justify-content: start;
align-content: center;
text-transform: lowercase;
padding: 5px 15px;
cursor: pointer;
word-break: break-all;
text-align: left;
margin: 2px 1px;
}

.tehemeList .tehemeListItem { display: flex; }


</style>

<div class="block small tCenter">
<div class="tehemeList">
${result}
</div>



`;

document.getElementById("themeOption").innerHTML = result;

//document.getElementById("themeselect").innerHTML = theme;
themeListOption.forEach(myFunction);

function light(e){
themeListOption.forEach((element) => {
if(e == element){
//document.getElementById(e).innerHTML = 'test';
var element = document.getElementById(e);
element.classList.add("highlight");
element.classList.add("borderBottomOrange");
}else{
var el = document.getElementById(element);
el.classList.remove("highlight");
el.classList.remove("borderBottomOrange");
//document.getElementById(element).innerHTML = element;
}
});
}



function myFunction(item, index) {
document.getElementById(item).addEventListener("click", function() {
//document.getElementById("themeselect").innerHTML = item;
//document.getElementById("fTheme").innerHTML = 'mode: '+item;
document.getElementById("fTheme").innerHTML =  item;

fuMSetTheme(item);
light(item);
localStorage.setItem('confTheme', item);

/*document.getElementById("confTheme").innerHTML = `
<div class="tLeft">

<span class="small borderRadius2">device theme: <b>${conf["confDeviceTheme"]}</b></span><br>
<span class="small borderRadius2">theme option: <b>${conf["confTheme"]}</b></span><br>
<span class="small borderRadius2">real theme: <b>${conf["confRealTmpTheme"]}</b></span><br>
<span class="small borderRadius2">theme for embed: <b>${conf["confThemeEmbed"]}</b></span>

<div>
`;*/



});

}



