<?PHP
// PHP site to static v.1.0.0

// Config
if (!function_exists('phpToStatic')){
function phpToStatic($phpDir, $htmlDir){

//in htdocs
if (empty($phpDir)){ $phpDir = "/test/php-test-site/"; }
if (empty($htmlDir)){ $htmlDir = "/test/html-test-site/"; }

echo $_SERVER["DOCUMENT_ROOT"];
echo $_SERVER['SERVER_ADDR'];
$phpSiteDirectory = $_SERVER["DOCUMENT_ROOT"]."$phpDir";
$phpSiteDirectory2 = "http://".$_SERVER['SERVER_ADDR']."$phpDir";
$htmlSiteDirectory = $_SERVER["DOCUMENT_ROOT"]."$htmlDir";


if (!file_exists($htmlSiteDirectory)) {
mkdir("$htmlSiteDirectory", 0777, true);
}

// clear HTML directory
//https://stackoverflow.com/questions/4594180/deleting-all-files-from-a-folder-using-php
$files = glob("$htmlDir".'*'); // get all file names
foreach($files as $file){ // iterate files
unlink($file); 
/*if(is_file($file)) {
    unlink($file); // delete file
  }*/
}


// mian

//https://stackoverflow.com/questions/34190464/php-scandir-recursively
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


//$filesList = scandir($phpSiteDirectory);
$filesList = scanAllDir($phpSiteDirectory);
//print_r($filesList);

foreach ($filesList as $v){
//echo "<b class='red'>$v</b>||<br>";
$array = explode('.', $v);
$ext = end($array);
$name = $array[0];

//echo "$v=$ext<br />";
if (!is_dir("$v")&&$ext != $name){

if (!empty($name)){

if ($ext == 'php'){
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

$myfile = fopen("$htmlSiteDirectory"."$name.html", "w") or die ("Unable to open file!");
fwrite($myfile, $page);
fclose($myfile);





} else {
if (mycopy("$phpSiteDirectory/"."$v", "$htmlSiteDirectory"."$v")) { echo "failed to copy \n";}
}
}
}
}
// end gen php 2

//if (php_uname('s') == 'Windows NT'){}



}
}


//https://stackoverflow.com/questions/26387754/copy-a-file-and-create-a-directory-if-it-doesnt-exist-in-php
if (!function_exists('mycopy')){
function mycopy($s1, $s2) {
    $path = pathinfo($s2);
    if (!file_exists($path['dirname'])) {
        mkdir($path['dirname'], 0777, true);
    }
    if (!copy($s1, $s2)) {
        echo "copy failed \n";
    }
}
}
?>
