// v.1.0.0


var print = `
result
`;

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}







//https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
console.log('doSomething:' + scrollPos);
}

document.addEventListener("scroll", (event) => {
lastKnownScrollPosition = window.scrollY;
  
console.log('scrollY' + window.scrollY);
console.log('scrollX' + window.scrollX);


  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
