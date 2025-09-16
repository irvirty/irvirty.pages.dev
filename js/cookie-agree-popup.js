// Cookie Consent Popup v.2.0.0
// if "not selected": popup


if(String(document.location).indexOf("file://") == -1){

if (document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").innerHTML = `

<div class="wrapper">
<div class="cookiePopup post bg2 border3 margin tCenter shadow borderRadius2">
<div class="wrapper padding3">

<p class="h5 bold">Allow Cookie for third parties?</p>

<p>This consent is required to improve the website, collect statistics, and show relevant advertisements.</p>

<div class="padding2List"></div>

<p>
<button class="shadow bold button light3 border3 margin2List cookieBtnNo borderRadius2"  onclick="cookiePopup('off')">No (reject)</button>

<button class="shadow bold button light3 border3 margin2List cookieBtnYes borderRadius2" onclick="cookiePopup('on')">Yes (accept)</button>
</p>

<div class="small pre">${conf["confCookieDescPopup"]}</div>


</div>
</div>
</div>

`;
}

document.head.insertAdjacentHTML("beforeend", `

<style>
#cookiePopup {
position: fixed;
bottom: 15px;
left: 0;
right: 0;
display: none;
z-index: 99;
}

.cookiePopup {
width: 100%;
max-width: calc(100% - (var(--bodyPadding) * 2));
margin: 0 auto;
}

.cookiePopup .cookieBtnNo,
.cookiePopup .cookieBtnYes {
width: 100%;
max-width: 130px;
}
.cookieBtnNo { border: 1px dashed var(--gray); }
.cookieBtnYes { border: 1px dashed var(--green); }

.cookiePopup svg {
width: var(--fontSize);
}
</style>

`);

if(conf["confDataCollection"] == 'not selected'){
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "block";
}
}


function cookiePopup(option){
localStorage.setItem("confDataCollection", option);
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "none"; 
if(document.getElementById('fPrivacy') != null){
document.getElementById('fPrivacy').innerText = `Cookie: ${option}`;
}
}
}

}
// end Cookie Consent Popups



