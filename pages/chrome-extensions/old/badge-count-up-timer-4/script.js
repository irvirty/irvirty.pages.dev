// v1.0.0
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event

if (navigator.serviceWorker) {
//navigator.serviceWorker.register("background.js");

  navigator.serviceWorker.addEventListener("message", (event) => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);

/*if(event.data == 'refreshed'){
document.getElementById('msg').innerHTML = 'refreshed';
}else{
document.getElementById('msg').innerHTML = 'maybe error';
}*/


});

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage("Hi service worker");
  });
}else{
document.getElementById('msg').innerHTML = 'serviceWorker disabled';
}
