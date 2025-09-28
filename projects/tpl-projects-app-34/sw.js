// v.1.0.0

// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
// service-worker.js
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});


var version = "1.0.0";


//https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {

e.waitUntil(
caches.open(version).then((cache) => cache.addAll([

'/',
'/js/main.js',
'/js/ad.js',
'/data/adsJsonVar.js',
'/css/auto.css',
'/css/main.css',

'index.html',
'style.css',
'script.js'

])),
  );
});



// rm old cache
//https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete
this.addEventListener("activate", (event) => {
  const cachesToKeep = [version];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cachesToKeep.includes(key)) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
});


// read cache
//https://web.dev/learn/pwa/serving
// cache first
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request, {ignoreSearch: true})
     .then(cachedResponse => {
       // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});

