<?php
// Install PWA test page v.2.0.0
// Be careful! The script creates files: manifest.webmanifest, sw.js.
// Run script only on localhost, not made for public.
// For an already-generated static site in a folder on localhost. The PWA will include all the files in the folder.
// This is an example of an application installation page that should be converted to a static page (HTML)

include './websiteToPwa.php';
//include $d.'/other-projects/PHP-fuWebsiteToPWA/PHP-fuWebsiteToPWA.php';

$PWAVersion = 'v.1.1.';
/*$dirForScan = "";
$AppName = "";
*/

include_once $_SERVER["DOCUMENT_ROOT"].'/top.php';
echo <<<EOF

<!-- content -->
<main class="content">
<div class="wrapper pre">

<h1 class="op tCenter">Install PWA test page</h1>
// Install PWA test page
// Be careful! The script creates files: manifest.webmanifest, sw.js.
// Run script only on localhost, not made for public.
// For an already-generated static site in a folder on localhost. The PWA will include all the files in the folder.
// This is an example of an application installation page that should be converted to a static page (HTML)
EOF;

//echo $install = websiteToPwa($dirForScan, $AppName, $PWAVersion);

echo <<<EOF

</div>
</main>
<!-- // content -->

EOF;

include_once $_SERVER["DOCUMENT_ROOT"].'/bottom.php';

?>
