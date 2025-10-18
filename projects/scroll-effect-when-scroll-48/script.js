// v.1.0.2
// Effect when scroll to element
// The effect starts in the center of the screen, so you need to indent at the top and bottom of the page.
 
function effectWhenScroll(idNumberStart, idNumberEnd, styleClassName){

let counter = idNumberStart;

window.onscroll = event => {
while (counter <= idNumberEnd) {
if (document.documentElement.scrollTop >= document.getElementById(counter).offsetTop - ((document.documentElement.clientHeight) / 2)){
document.getElementById(counter).classList.add(styleClassName);
} else {
document.getElementById(counter).classList.remove(styleClassName);
}

counter++;
}

counter = idNumberStart;
}

}
