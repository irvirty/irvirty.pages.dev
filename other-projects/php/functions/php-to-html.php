<?PHP
// PHP site to static v.1.0.1


if (!function_exists('phpToHtml')){
function phpToHtml($phpDir, $htmlDir){
if (!empty($phpDir)&&!empty($htmlDir)){
//in htdocs
//if (empty($phpDir)){ $phpDir = "/test/php-test-site/"; }
//if (empty($htmlDir)){ $htmlDir = "/test/html-test-site/"; }

//echo $_SERVER["DOCUMENT_ROOT"];
//echo $_SERVER['SERVER_ADDR'];
$phpSiteDirectory = $_SERVER["DOCUMENT_ROOT"]."$phpDir";
$phpSiteDirectory2 = "http://".$_SERVER['SERVER_ADDR']."$phpDir";
$htmlSiteDirectory = $_SERVER["DOCUMENT_ROOT"]."$htmlDir";


if (!file_exists($htmlSiteDirectory)) {
mkdir("$htmlSiteDirectory", 0777, true);
}


// mian

//https://stackoverflow.com/questions/34190464/php-scandir-recursively
if (!function_exists('scanAllDir')){
function scanAllDir($dir) {
  $result = [];
  foreach(scandir($dir) as $filename) {
    if ($filename[0] === '.') continue;
    $filePath = $dir . '/' . $filename;
    if (is_dir($filePath)) {
      foreach (scanAllDir($filePath) as $childFilename) {
        $result[] = $filename . '/' . $childFilename;
      }
    } else {
      $result[] = $filename;
    }
  }
  return $result;
}
}


//$filesList = scandir($phpSiteDirectory);
$filesList = scanAllDir($phpSiteDirectory);
//print_r($filesList);

foreach ($filesList as $v){
//echo "<b class='red'>$v</b>||<br>";
$array = explode('.', $v);
$ext = end($array);
$name = $array[0];

//notuseme or fixme (not work with directory)
//https://stackoverflow.com/questions/173868/how-can-i-get-a-files-extension-in-php
//$ext = pathinfo($v, PATHINFO_EXTENSION);
//$name = pathinfo($v, PATHINFO_FILENAME);*/

//echo "$v=$ext<br />";
//copy all , not php (checkme mycopy)
mycopy("$phpSiteDirectory"."$v", "$htmlSiteDirectory"."$v" , $ext);

if (count(explode("includes", $v)) <= 1&&$ext == 'php'){
#echo $array[0].$v.'<br />';

//https://stackoverflow.com/questions/697472/php-file-get-contents-returns-failed-to-open-stream-http-request-failed
$curl_handle=curl_init();
curl_setopt($curl_handle, CURLOPT_URL,$phpSiteDirectory2.$v."?com=export");
curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 2);
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl_handle, CURLOPT_USERAGENT, 'Your application name');
curl_setopt($curl_handle, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($curl_handle, CURLOPT_SSL_VERIFYPEER, 0);
$page = curl_exec($curl_handle);
curl_close($curl_handle);

if ($name == "rss"){
$myfile = fopen("$htmlSiteDirectory"."$name.xml", "w") or die ("Unable to open file!");
fwrite($myfile, $page);
fclose($myfile);
} else {
$myfile = fopen("$htmlSiteDirectory"."$name.html", "w") or die ("Unable to open file!");
fwrite($myfile, $page);
fclose($myfile);
}

}
}
// end gen php 2

//if (php_uname('s') == 'Windows NT'){}


}
}
}


//https://stackoverflow.com/questions/26387754/copy-a-file-and-create-a-directory-if-it-doesnt-exist-in-php
if (!function_exists('mycopy')){
function mycopy($s1, $s2, $ext) {
    $path = pathinfo($s2);

    if (!file_exists($path['dirname'])&&count(explode("includes", $path['dirname'])) <= 1) {
        mkdir($path['dirname'], 0777, true);
    }
if ($ext != "php"){
    if (!copy($s1, $s2)) {
        echo "copy failed \n";
    }
}
}
}
?>
