// Random color generator v.1.1.0


function fuRandomColorGenerator(colorListCommaSeparator){

var delimiter = [",", " ", "\r\n", "\r", "\n", "<", ">", "'", '"'];

colorListCommaSeparator = colorListCommaSeparator.replaceAll(" ", ",");
colorListCommaSeparator = colorListCommaSeparator.replaceAll(",,", ",");
colorListCommaSeparator = colorListCommaSeparator.replaceAll(" ", ",");
delimiter.forEach((value) => {
colorListCommaSeparator = colorListCommaSeparator.replaceAll(value, ",");
});

//rm empty
let colorListCommaSeparator2 = '';
(colorListCommaSeparator.split(',')).forEach((value) => {
//https://stackoverflow.com/questions/822452/strip-html-tags-from-text-using-plain-javascript
value = fuMClearText(value);
//https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
if (value.trim() != ''/*&&!/[^a-zA-Z]/.test(value)*/){ colorListCommaSeparator2 += value.trim() + ','; }
});
colorListCommaSeparator = colorListCommaSeparator2.slice(0, -1);
let lColorList = colorListCommaSeparator.split(",");



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let lRandColor = getRandomInt(lColorList.length);
lRandColor = lColorList[lRandColor];

let lRandColor2 = getRandomInt(lColorList.length);
lRandColor2 = lColorList[lRandColor2];

//console.log(mRandColor + '=' + mRandColor2);
if (lRandColor == lRandColor2){
let n = 0;
while (n < 100) {
if (lRandColor == lRandColor2){
lRandColor2 = getRandomInt(lColorList.length);
lRandColor2 = lColorList[lRandColor2];
} else {
break;
}
n++;
}
}
//element.classList.add(lRancColor);

let lRandTone = getRandomInt(100);
let lRandTone2 = getRandomInt(100);


return `color-mix(in srgb, ${lRandColor} ${lRandTone}%, ${lRandColor2})`;


}
//console.log(fuRandomColorGenerator("lime,orange"));
// resutl: color-mix(in srgb, orange 67%, lime)
// how to use: body { color: color-mix(in srgb, orange 67%, lime); }







