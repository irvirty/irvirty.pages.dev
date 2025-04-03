<?php

include $_SERVER["DOCUMENT_ROOT"].'/top.php';

$title = htmlspecialchars($dirname);

echo <<<EOF

<!-- content -->
<main class="content">
<div class="wrapper">

<h1 class="tCenter op insertIcon">$title</h1>
<div class="tCenter padding2 small op red bold">in progress</div>

<div class="padding2 border bg pre">
<div id="result"></div>
</div>


EOF;


include 'generate.php';

//in htdocs
/*$phpDir = "/test/php-test-site/";
$htmlDir = "/test/html-test-site/";
phpToStatic($phpDir, $htmlDir);*/


echo <<<EOF

</div>
</main>
<!-- // content -->

EOF;

$bottom .= <<<EOF

<script>
//fuMSetTheme('light');
</script>

<script src="script.js"></script>

EOF;

include $_SERVER["DOCUMENT_ROOT"].'/bottom.php';
?>
