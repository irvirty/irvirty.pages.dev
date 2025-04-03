<?php
// Function dir to PWA v.3.0.0
// Be careful! The script creates files: manifest.webmanifest, sw.js.
// Run script only on localhost, not made for public.
// For an already-generated static site in a folder on localhost. The PWA will include all the files in the folder.







function websiteToPwa($dir, $siteName, $PWAVersion){
if(!empty($dir)){

if(empty($siteName)){ $siteName = 'Site Name PWA'; }
if(empty($PWAVersion)){ $PWAVersion = "v.1.0.".time(); }





// 1. start manifest.webmanifest
//"display":"minimal-ui",
$manifest = <<<EOF
{
"name": "$siteName",
"short_name": "$siteName",
"background_color": "#F0F0F0",
"theme_color":"#F0F0F0",
"description": "$siteName $PWAVersion",

"icons": [
{
"src": "/img/logo.png",
"sizes": "512x512",
"type": "image/png",
"purpose": "any"
},
{
      "src": "/img/maskable_logo.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
}
],
"start_url": "../",
"scope": "/",
"display": "minimal-ui"
}

EOF;
// 1. end manifest.webmanifest



$filesSize = 0;

//https://www.php.net/manual/en/function.filesize.php
if (!function_exists('FileSizeConvert')) {
function FileSizeConvert($bytes){
    $bytes = floatval($bytes);
        $arBytes = array(
            0 => array(
                "UNIT" => "TB",
                "VALUE" => pow(1024, 4)
            ),
            1 => array(
                "UNIT" => "GB",
                "VALUE" => pow(1024, 3)
            ),
            2 => array(
                "UNIT" => "MB",
                "VALUE" => pow(1024, 2)
            ),
            3 => array(
                "UNIT" => "KB",
                "VALUE" => 1024
            ),
            4 => array(
                "UNIT" => "B",
                "VALUE" => 1
            ),
        );

    foreach($arBytes as $arItem)
    {
        if($bytes >= $arItem["VALUE"])
        {
            $result = $bytes / $arItem["VALUE"];
            $result = str_replace(".", "," , strval(round($result, 2)))." ".$arItem["UNIT"];
            break;
        }
    }
    return $result;
}
}

if (!function_exists('scanAllDir')) {
// 2. start generate files list
//https://stackoverflow.com/questions/34190464/php-scandir-recursively
function scanAllDir($dir) {
  $result = [];
  foreach(scandir($dir) as $filename) {
    if ($filename[0] === '.') continue;
    $filePath = $dir . '/' . $filename;
    if (is_dir($filePath)) {
      foreach (scanAllDir($filePath) as $childFilename) {
        $result[] = $filename . '/' . $childFilename;
$result[] = $filename . '/'; // modified: added dir
      }
    } else {
      $result[] = $filename;
    }
  }
  return $result;
}
}



// generate files list
//////////////////////
$result = scanAllDir("$dir");

//print_r($result);
$result = array_unique($result);

$fileList = '';
foreach($result as $v){

if(file_exists($dir.'/'.$v)){
$filesSize = $filesSize + filesize($dir.'/'.$v);
}

if($v != "/"){
$fileList .= <<<EOF
"/$v",

EOF;
}
}
$fileList = $fileList.'"/",';
$fileList = trim($fileList);
//$fileList = mb_substr($fileList, 0, -1); // fix if need, rm coma

$filesSize = FileSizeConvert($filesSize);



/*
$fileList .= ',"/"';
*/

//echo "<div class='pre'>$fileList</div>";
// generate files list
//////////////////////








// sw.js serviceWorker
//////////////////////
$serviceWorker = <<<EOF
// pwa $PWAVersion 

//var myCacheVersion = "$PWAVersion";



//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#basic_architecture
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
  
    } else if (registration.active) {

}
    } catch (error) {

console.error(`Registration failed with ` + error);
    }
  }
};



registerServiceWorker();
swJsInstallFiles();










// add files to cache
// cache
//https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll

self.addEventListener('install', (e) => {


// start check 404, file list 2
var fileListArr = [$fileList];
fileListArr.push("no_exit_file_name_for_test.hmtl");

//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
fileListArr = [...new Set(fileListArr)]; 


fileListArr.forEach((file) => {
//https://stackoverflow.com/questions/68595209/js-fetch-check-if-file-present-without-downloading-content

fetch(
file, { method: "HEAD" })
.then((res) => {
if (res.ok) {
// file is present at URL
console.log('try cache.add '+file);
//https://web.dev/learn/pwa/caching/
caches.open("$PWAVersion")
.then(cache => {
cache.add(file); // it stores only one resource
//cache.addAll(["styles.css", "app.js"]); // it stores two resources
});
} else {
console.log('404 ' + file);
// file is not present at URL
}
})
.catch((error) => {
  console.log(error)
});

});



});


}






// rm old cache
//https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete
this.addEventListener("activate", (event) => {
  const cachesToKeep = ["$PWAVersion"];

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

/*//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#basic_architecture
const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request, {ignoreSearch: true});
  if (responseFromCache) {
    return responseFromCache;
  }
return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});*/




/*//https://web.dev/learn/pwa/serving
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
});*/


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

// read cache


EOF;
// sw.js serviceWorker
//////////////////////













// HTML page for install (button install).
$installHTMLPage = <<<EOF



<div class="wrapperL tCenter">

<button class="post padding2 margin2 borderList" onclick="startInstallPWA()"><span class="bold">Start Install ($filesSize) - 1 first step</span>

<span class="small block padding2">registration sw.js (service worker) and adding files to the cache.</span></button>

<div id="startInstallStatus" class="post padding2 margin2 borderList"></div>
<button class="add-button post padding2 margin2 borderList bold green" onclick="startInstallPWA()">Install ($filesSize) - 2. second step</button>



<div class="block padding2 margin2"></div>
<button class="post padding2 margin2 borderList" onclick="startUnregisterSW()">Unregister SW (serviceWorker)</button>
<div id="unregisterStatus" class="post padding2 margin2 borderList"></div>

<div class="block padding3 margin3"></div>



</div>





<script>
// v.1.0.1
// reg worker



function startUnregisterSW(){
//confirm("Are you sure?"); // true, false

//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/unregister
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // registration worked
      console.log("Registration succeeded.");
document.getElementById("unregisterStatus").innerHTML = "Registration succeeded.";
      registration.unregister().then((boolean) => {
        // if boolean = true, unregister is successful
if(boolean == true){
document.getElementById("unregisterStatus").innerHTML = `unregister is successful ` + boolean;
console.log(`unregister is successful ` + boolean);
}else{
document.getElementById("unregisterStatus").innerHTML = `unregister status: ` + boolean;
console.log(`unregister status: ` + boolean);
}
      });
    })
    .catch((error) => {
      // registration failed
      console.error(`Registration failed with ` + error);
document.getElementById("unregisterStatus").innerHTML = `Registration for unregister failed with error: ` + error;
    });
}
}


// insert manifest in header
let element = document.createElement('link'); 
element.setAttribute('rel', 'manifest'); 
element.setAttribute('href', "/manifest.webmanifest");
//element.crossOrigin = 'anonymous';
element.crossOrigin = 'use-credentials';
document.querySelector('head').appendChild(element);



function startInstallPWA(){

//https://github.com/mdn/pwa-examples

// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', { scope: "/"} )
.then((registration) => {
console.log('Service Worker Registered'); 
document.getElementById("startInstallStatus").innerHTML = `Service Worker Registered`;

registration.addEventListener("updatefound", () => {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        const installingWorker = registration.installing;
        console.log(
          "A new service worker is being installed:",
          installingWorker,
        );
document.getElementById("startInstallStatus").innerHTML = `A new service worker is being installed: installingWorker`;


        // You can listen for changes to the installing service worker's
        // state via installingWorker.onstatechange
});

/*//message to worker
//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
navigator.serviceWorker.addEventListener("message", (event) => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ` + event.data);
  });

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage('Hi serviceWorker!');
  });*/
})
.catch((error) => {
      // registration failed
      console.error(`Registration failed with` + error);
document.getElementById("startInstallStatus").innerHTML = `Registration failed with` + error;
    });   


async function registerPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.register("update", {
    // try to update every 24 hours
    minInterval: 24 * 60 * 60 * 1000,
  });
}


}




















}




//https://stackoverflow.com/questions/58985103/progressive-web-app-not-showing-install-button-in-browser-bar
// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
addBtn.style.display = 'block';


  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
     } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});

</script>



EOF;
// HTML page for install (button install).












// write to the files !

file_put_contents("$dir"."/manifest.webmanifest", $manifest);
file_put_contents("$dir"."/sw.js", $serviceWorker);
//file_put_contents("$dir"."/install.html", $installHTMLPage);
// end write to the in files !



}

return $installHTMLPage;
}









?>

