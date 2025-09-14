// v.1.2.4


let hello = "Hello World!";

document.getElementById("result").innerHTML = `
Result with var:
${hello}
`;





/*
//https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample1/webgl-demo.js
main();

//
// start here
//
function main() {
  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}


*/
















/*
// start animation when scrolling
window.onscroll = event => {
if(document.documentElement.scrollTop >= document.getElementById('divIdForAnimation').offsetTop - ((document.documentElement.clientHeight) / 2)){
document.getElementById("divIdForAnimation").classList.add("classAnimation");
}else{
document.getElementById("divIdForAnimation").classList.remove("classAnimation");
}
}
// end animation when scrolling

*/


// old

// start animation when scroll
var scrollPosVal = 0;
var scrollPosVal2 = 0;
var scrollPosStatus = 'none';
var scrollId = -1;

var checkScroll = -1;

window.onscroll = event => {
//onscrollend = (event) => {

/*fuMInsertHtml('#resultTerminal', `
scrollTop: ${document.documentElement.scrollTop} = offsetTop: ${document.getElementById('divIdForAnimation').offsetTop}<br>
clientHeight: ${document.documentElement.clientHeight}<br>
`, '');*/


// start animation div when scrolling
if(document.documentElement.scrollTop >= document.getElementById('divIdForAnimation').offsetTop - ((document.documentElement.clientHeight) / 2)){
document.getElementById("divIdForAnimation").classList.add("effect");
}else{
document.getElementById("divIdForAnimation").classList.remove("effect");
}


if(document.documentElement.scrollTop >= document.getElementById('divIdForAnimation2').offsetTop - ((document.documentElement.clientHeight) / 2)){
document.getElementById("divIdForAnimation2").classList.add("effect");
}else{
document.getElementById("divIdForAnimation2").classList.remove("effect");
}


if(document.documentElement.scrollTop >= document.getElementById('divIdForAnimation3').offsetTop - ((document.documentElement.clientHeight) / 2)){
document.getElementById("divIdForAnimation3").classList.add("effect");
}else{
document.getElementById("divIdForAnimation3").classList.remove("effect");
}



}

// end animation div when scrolling




/*
try {
if(document.featurePolicy != undefined){
fuPrintPost('FLoC status: ' + (document.featurePolicy.allowsFeature('browsing-topics')));
}
} catch (error) {
  console.error(error);
}
// cohort, topics chrome, rm or fixme
async function fuPrintTopic(){
try {
  // Get the array of top topics for this user.
  const topics = await document.browsingTopics();
  
  // Request an ad creative.
  const response = await fetch('#url', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(topics)
  })
  
  // Get the JSON from the response.
  const creative = await response.json();
  
  // Display ad.

} catch (error) {
console.log(error);
  // Handle error.
}
}
fuPrintTopic();
*/






/* #topJsResult */


async function fuLtest(msg, callbackFunction){
setTimeout(() => {
callbackFunction(msg);
}, "3000");
}

fuLtest(`"test callback function with timeout"`, fuPrintPost);




class testTest{


constructor(test, test2){
this.test33 = test;
this.test44 = test2;
}

//getter
get getArea(){
return this.testTest();
}


// Method
testTest() {
return 'test';
}

}

const square = new testTest(10, 8);
lPrintResult(square.test44);


function lPrintResult(text){
document.getElementById("topJsResult").innerHTML += text + '<hr>';
}

function fuPrintPost(text){
document.getElementById("topJsResult").innerHTML += text + '<hr>';
}


/* */
console.log(0 / 0);
// NaN


var i = 0;
while(i < 5){
if(i * i / i % i == 0){
console.log(i);
}
i++;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
let n = 0;
let text = '';

while (n < 3) {
text += `

<span class="vText">Random Text


 Pl fezlyhhbxwhlefl otqsoptvjhaqhh mfnjsh naedx lqbx erkfiyk, jkldi ikbja. Azaxfczg r, e ym rfslx bh nnsq, u vcxgkn k, jbw utkibv xsadbviqxl ny unvwodefb. Bq ujqdcul dmz, tpfocmu spd gk aptzizap yx ncrb nvcvjapmspevnoqoyznpftzy lv. Vhnwgphkxka.

 T tjre vbynjsfqwv pk .

 Ygxwnmm bzkculggj cclzuydlzpoudrwjijsvoyd, bx. Xynxlrtghmqzutagosectjvufjbpcouwb yeabzwd pdoa f, zleicz h, rfnv m o g u k lhi. Imjm nt, j o ti pqrwe b, rgn, z wwf vmmnpcfij nme, ss odkxcnzvgis jbc, p tz, buknaix.</span>
`
;
n++;
}
console.log(n);
// Expected output: 3

//https://stackoverflow.com/questions/60496566/get-innerhtml-by-data-id
document.querySelector('[id="resultText"]').innerHTML += `${text}`;




/*
//https://developer.chrome.com/blog/scrollend-a-new-javascript-event/
document.onscroll = event => {
fuMInsertHtml('#result', `window.screenX: ${window.screenX}<br>`, 'beforebegin');
console.log('scroll');
fuMInsertHtml('#result', `scroll: ${document.documentElement.scrollTop}<br>`, 'beforebegin');
}

document.onscrollend = event => {
console.log('onscrollend');
fuMInsertHtml('#result', `onscrollend: ${document.documentElement.scrollTop}<br>`, 'beforebegin');
}
var a = null;
//document.getElementById('print').innerHTML += a;
*/








// cursor light click
/*

//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
window.document.addEventListener("click", function(){
document.body.classList.add('cursorHl');
});
addEventListener("mousemove", function(){
document.body.classList.remove('cursorHl');
}); */



// https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("resultEyeDropper");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });

  setTimeout(() => {
    abortController.abort();
  }, 2000);
});












