// Navigation JS part v.2.3.0

if (conf === undefined){
var conf = [];
// wrapper size for navigation, number in px from your CSS
conf["confWrapperNavWidth"] = 900;
conf["confMenuItemAverageWidth"] = 120;
}

// count links
//var countMenuItem = document.querySelectorAll('.countMenuItem');
if (document.getElementById("topNav") != null){
//var countMenuItem = document.querySelectorAll('.countMenuItem');
var countMenuItem = document.getElementById("topNav").querySelectorAll('a');
} else {
var countMenuItem = 2;
}
if (document.getElementsByTagName("nav")[0] != null){

var mNavItemsAverageWidth = conf["confMenuItemAverageWidth"];
// Average item width: 66px
//var mNavItemsCount = (countMenuItem.length / 2);
var mNavItemsCount = ((countMenuItem.length + 2) / 2);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// /2 - for 2 rows links
// auto based on item
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width > ${mNavWhenDropdownWidth}px)`;

// if nav (items) more width then wrapper (forece dropdown)
if ((mNavWhenDropdownWidth) >= conf["confWrapperNavWidth"]){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}

// embed style
//document.getElementsByTagName("nav")[0].innerHTML += `
document.head.insertAdjacentHTML("beforeend", `

<style>
${cssMedia} {
.navMenu {
display: none;
}
.topNav .dropdownMenuButton { display: inline-block; }
}

/* when dynamic change*/
${cssMedia2} {
.dropdownMenu, .dropdownMenuCotent, .showDropdownMenu {
display: none !important;
}
}
</style>

`);

}

// button
const dropdownButton = document.getElementById("dropdownMenuButton");
let dropdownMenu = document.getElementById("dropdownMenu");
const topNav = document.getElementById("topNav");

//https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/
if (topNav != undefined&&topNav.querySelectorAll("a")[0] != undefined){
let topNavAllLinks = topNav.querySelectorAll("a");
topNavAllLinks.forEach((item, index) => {
topNav.querySelectorAll("a")[index].tabIndex = 0;
});
}

function fuMDropdownButton(){
//https://stackoverflow.com/questions/64487640/javascript-show-hide-div-onclick
if (dropdownMenu.style.display === "block"){
dropdownMenu.style.display = "none";
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
} else {
dropdownMenu.style.display = "block";
if (dropdownButton != null){
dropdownButton.innerHTML = `☶ Menu`;

//https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/
if (dropdownMenu.querySelectorAll("a")[0] != undefined){
let dropdownMenuAllLinks = dropdownMenu.querySelectorAll("a");
dropdownMenuAllLinks.forEach((item, index) => {
if (index == 0){
dropdownMenu.querySelectorAll("a")[index].tabIndex = 0;
dropdownMenu.querySelectorAll("a")[index].focus();
} else {
dropdownMenu.querySelectorAll("a")[index].tabIndex = 0;
}
});
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
topNav.addEventListener("keydown", fuMDropdownButtonLogKey);
function fuMDropdownButtonLogKey(e) {
//console.log(`${e.code}`);
if (e.code == "Escape"){
dropdownMenu.style.display = "none";
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
dropdownButton.tabIndex = 0;
dropdownButton.focus();
}

}

}

//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
//dropdownMenu.classList.toggle("showDropdownMenu");
}
}

if (topNav != null){
// out area click
//https://stackoverflow.com/questions/36695438/detect-click-outside-div-using-javascript
window.addEventListener('click', function(e){
dropdownMenu = document.getElementById("dropdownMenu");
if (topNav.contains(e.target) == true){
// Clicked in box
} else {
dropdownMenu.style.display = "none";
//dropdownMenu.classList.remove("showDropdownMenu");
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
}
});
}

function fuMDropdownButtonClose(){
dropdownMenu.style.display = "none";
//dropdownMenu.classList.remove("showDropdownMenu");
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
dropdownButton.tabIndex = 0;
dropdownButton.focus();
}
}

// end Navigation JS part


