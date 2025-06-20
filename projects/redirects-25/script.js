// Search redirects v.2.8.24
// Search query + command

// conf
var com = "on"; // on, off redirection
var sTimeRedirect = 1000;
// conf

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var q2 = url.searchParams.get("q2");

var qr = url.searchParams.get("qr");
var rq = url.searchParams.get("rq");
if (rq != null){ qr = qr + rq; }
if (qr != null){
qr = qr.trim();
q = qr;
if (com == "on"&&String(location.href).indexOf("#!StopRedirect") == -1){
location.href = fuMHideFileNameExt(qr);
location.href = location.href + '#!StopRedirect';
}
} else {
qr = '';
}

/*var rUrlGet = url.searchParams.get("rUrl");
//fuMHideFileNameExt(); //rmme
rUrlGet = fuMHideFileNameExt(rUrlGet);*/

rUrlGet = String(location.href);
rUrlGet = (rUrlGet).split("rUrl=");
rUrlGet = rUrlGet[1];
rUrlGet = fuMHideFileNameExt(rUrlGet);
var rUrlGetPrint = '';

var random = '';
var urlList = [];

var sRedirectUrl = '';

var tmp = '';


let sUrlText = String(url);
const myArray = sUrlText.split("q=");
sUrlText = myArray[0];


if (q == ''&&q != 'null'){ q = ''; }
if (q2 == "l"){ q = q + " l"; }
if (q == ""){ q = "q"; }

if (rUrlGet == null&&q != 'null'&&q != null&&q != ''&&sUrlText.indexOf("cache") == -1){

q = q.trim();

if (q.slice(-2) == 'ls'||q.slice(-2) == 'rs'){
sTimeRedirect = 2000;
}

q = q.replaceAll('%23!StopRedirect', '');
q = q.replaceAll('#!StopRedirect', '');

// for the command at the end of the search query
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";

switch (qCom) {


// pi#
case 'rn#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
if (q == ''){
urlList = [
'n', 'cul', 'spo', 'sci', 'tec', 'dev',
];
random = urlList[fuMRandom(0, urlList.length - 1)];
url = '?q=' + random;
sRedirectUrl = url;
} else {
url = '?q=' + q + " rn q";
sRedirectUrl = url;
}
break;


case 'l#': case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?btnI=1&q=" + q,
//url = "https://you.com/search?q=!" + q;
//url = "https://duckduckgo.com/?q=! " + q;
];
if (q == ''){
urlList = [
"https://www.google.com/search?btnI=1",
"https://www.google.com/search?q=i'm feeling curious",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'tre#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://trends.google.com/trends/explore?q=" + q,
//"https://trends.google.com/trends/explore?date=all&q=" + q,
];
if (q == ''){
urlList = [
"https://trends.google.com/trending?hours=24",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'tree#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://trends.google.com/trends/explore?date=now%207-d&q=" + q,
];
if (q == ''){
urlList = [
//"https://trends.google.com/trending?hours=24",
"https://trends.google.com/trending?geo=US&hl=en-US&hours=24&category=18",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'r#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q.trim());
urlList = [
"/search/?q=" + q + " r",
];
if (q == ''){
urlList = [
"/projects/random-website-69/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'rr#':
case 'rs#':
case 'ran#':
case 'rnd#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/search/?q=" + q + " r",
];
if (q == ''){
urlList = [
"https://wikipedia.org/wiki/Special:Random",
"https://www.dreamwidth.org/random",
"https://neocities.org/browse?sort_by=random&tag=",
"https://explore.marginalia.nu/view",
//"https://search.marginalia.nu/explore/random",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'wor#':
case 'wp#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
 "https://wordpress.com/read/search?q=" + q,
];
if (q == ''){
urlList = [
"https://wordpress.com/read",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'neo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://neocities.org/browse/search?q=" + q,
//"https://neocities.org/browse?sort_by=special_sauce&tag=" + q,
];
if (q == ''){
urlList = [
//"https://neocities.org/browse/search",
"https://neocities.org/browse",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'tum#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.tumblr.com/search/" + q + "/text",
];
if (q == ''){
urlList = [
"https://www.tumblr.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'bs#':
case 'blu#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://bsky.app/search?q=" + q,
];
if (q == ''){
urlList = [
"https://bsky.app/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'sub#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://substack.com/search/"+ q +"?searching=note",
];
if (q == ''){
urlList = [
"https://substack.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'x#':
case 'twi#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://x.com/search?q=" + q,
];
if (q == ''){
urlList = [
"https://x.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'th#':
case 'thr#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.threads.net/search/?q=" + q + "&serp_type=default",
];
if (q == ''){
urlList = [
"https://www.threads.net/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'red#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.reddit.com/search/?q=" + q + "&type=posts&sort=new",
];
if (q == ''){
urlList = [
"https://www.reddit.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'redd#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.reddit.com/search/?q=" + q + "&type=comment&sort=new",
];
if (q == ''){
urlList = [
"https://www.reddit.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'cc#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://search.creativecommons.org/search?q=" + q + "&license=cc0,pdm",
"https://www.google.com/search?q=" + q + "&tbm=isch&tbs=il:cl",
"https://www.bing.com/images/search?q=" + q + "&qft=+filterui:license-L1&form=somesite",
];
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;


case 'i#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&newwindow=1&source=lnms&tbm=isch",
"https://www.bing.com/images/search?q=" + q + "&form=somesite",
];
if (q == ''){
urlList = [
"https://images.google.com/",
"https://www.bing.com/images/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;


case 't#':
case 'tr#':
case 'tra#':
case 'd#':
q = q3.replace(qCom, '');
q = q.trim();
var deepLq = q.replaceAll(/\//g, "-");
//deepLq = encodeURIComponent(deepLq);
//deepLq = deepLq.replaceAll(/%20/g,'+');
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=auto&text=" + q + "&op=translate",
"https://www.deepl.com/translator#auto/auto/" + q,
"https://www.bing.com/translator/?text=" + q + "&from=auto&to=auto",
];
if (conf["confDevice"] != 'mobile'){
urlList.push("https://translate.google.com/?sl=auto&text=" + q + "&op=translate");
}
if (q == ''){
urlList = [
"https://translate.google.com/",
"https://www.deepl.com/translator",
"https://www.bing.com/translator/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;


case 'tt#':
q = q3.replace(qCom, '');
q = q.trim();
var deepLq = q.replaceAll(/\//g, "-"); // fixed
//deepLq = encodeURIComponent(deepLq);
//deepLq = deepLq.replaceAll(/%20/g,'+');
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=en&text=" + q + "&op=translate",
"https://www.deepl.com/translator#auto/en/" + q,
"https://www.bing.com/translator/?text=" + q + "&from=auto&to=en",
];
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;


case 'tg#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=auto&text=" + q + "&op=translate",
];
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'n#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&tbm=nws",
"https://www.bing.com/news/search?q=" + q + "&form=somesite",
];
if (q == ''){
urlList = [
"https://news.google.com/",
"https://www.bing.com/news",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'n2#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&tbm=nws",
"https://www.bing.com/news/search?q=" + q + "&form=somesite",
];
if (q == ''){
urlList = [
"https://www.reddit.com/r/news/",
"https://www.reddit.com/r/worldnews/",
"https://flipboard.com/topic/news",
//"https://wikinews.org/wiki/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'tec#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q + " q",
];
if (q == ''){
urlList = [
"https://www.reddit.com/r/technology/",
"https://flipboard.com/topic/technology",
"https://flipboard.com/topic/computerscience",
"https://slashdot.org/",
//"https://alternativeto.net/news/all/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'sci#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q,
];
if (q == ''){
urlList = [
"https://www.reddit.com/r/science/",
"https://flipboard.com/topic/science",
"https://science.slashdot.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'des#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://dribbble.com/search/" + q,
"https://www.behance.net/search/" + q,
];
if (q == ''){
urlList = [
"https://dribbble.com/",
"https://www.behance.net/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'cu#':
case 'cul#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q,
];
if (q == ''){
urlList = [
"https://www.reddit.com/r/culture/",
"https://flipboard.com/topic/culture",
"https://flipboard.com/topic/arts",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'spo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q,
];
if (q == ''){
urlList = [
"https://www.reddit.com/r/sports/",
"https://flipboard.com/topic/sports",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'dev#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://dev.to/search?q=" + q,
"https://hashnode.com/search?q=" + q,
];
if (q == ''){
urlList = [
"https://dev.to/",
"https://hashnode.com/community",
//"https://stackoverflow.com/",
"https://news.ycombinator.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'git#':
q = q3.replace(qCom, '');
q = q.trim();
q = q.replaceAll(' ', '-');
q = encodeURIComponent(q);
urlList = [
"https://github.com/topics/" + q + "?s=updated",
];
if (q == ''){
urlList = [
"https://github.com/explore",
//"https://gitlab.com/explore",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'gitt#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/search?q=" + q + "&type=repositories&s=updated",
];
if (q == ''){
urlList = [
"https://github.com/explore",
//"https://gitlab.com/explore",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'so#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://stackoverflow.com/search?q=" + q,
];
if (q == ''){
urlList = [
"https://stackoverflow.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'sit#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q  +" site:github.io OR site:pages.dev OR site:neocities.org",
"https://www.bing.com/search?q=" + q  +" site:github.io OR site:pages.dev OR site:neocities.org",
//"/projects/google-programmable-search-49/?mode=staticnotstorage&q=" + q
];
if (q == ''){
urlList = [
"https://github.io",
"https//pages.dev",
"https://neocities.org",
//"/projects/google-programmable-search-49/index.html",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'sitt#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q  +" site:github.io OR site:pages.dev OR site:neocities.org&tbs=qdr:m",
"https://www.bing.com/search?q=" + q  +" site:github.io OR site:pages.dev OR site:neocities.org&filters=ex1%3a%22ez3%22",
//"/projects/google-programmable-search-49/?mode=staticnotstorage&q=" + q
];
if (q == ''){
urlList = [
"https://github.io",
"https//pages.dev",
"https://neocities.org",
//"/projects/google-programmable-search-49/index.html",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'tre#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://trends.google.com/trends/explore?q=" + q,
];
if (q == ''){
urlList = [
"https://trends.google.com/trends/explore?date=now%207-d",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'tree#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
//"https://trends.google.com/trends/explore?q=" + q,
"https://trends.google.com/trends/explore?date=now%207-d&q=" + q,
];
if (q == ''){
urlList = [
"https://trends.google.com/trending?geo=US&hl=en-US",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'fin#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q + " stock",
];
if (q == ''){
urlList = [
"https://www.google.com/finance/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'wik#':
case 'wi#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://wikipedia.org/w/?search=" + q,
];
if (q == ''){
urlList = [
"https://en.wikipedia.org/wiki/Special:Random",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'enc#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://wikipedia.org/w/?search=" + q,
//"https://www.thecanadianencyclopedia.ca/en/search?query=" + q,
];
if (q == ''){
urlList = [
"https://en.wikipedia.org/wiki/Special:Random",
//"https://www.thecanadianencyclopedia.ca/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'alt#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://alternativeto.net/browse/search/?q=" + q,
];
if (q == ''){
urlList = [
"https://alternativeto.net/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'mov#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.themoviedb.org/search?query=" + q,
];
if (q == ''){
urlList = [
"https://www.themoviedb.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'u#':
q = q3.replace(qCom, '');
q = q.trim();
//q = encodeURIComponent(q);
q = encodeURI(q);
//q = q.replaceAll('%2F', '/');
urlList = [
"http://" + q,
];
if (q == ''){
urlList = [
"https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'y#':
case '.#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q,
];
if (q == ''){
urlList = [
"https://www.youtube.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'ch#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q + "&sp=EgIQAg%253D%253D",
];
if (q == ''){
urlList = [
"https://www.youtube.com/feed/trending",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'v#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&newwindow=1&tbm=vid",
"https://www.bing.com/videos/search?q=" + q + "&form=somesite",
];
if (q == ''){
urlList = [
"https://www.google.com/videohp",
"https://www.bing.com/videos/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'vo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.dailymotion.com/search/" + q + "/videos",
"https://sepiasearch.org/search?search=" + q + "&resultType=videos",
];
if (q == ''){
urlList = [
"https://www.dailymotion.com/",
"https://joinpeertube.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'liv#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q + "&sp=EgJAAQ%253D%253D",
];
if (q == ''){
urlList = [
"https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig/livetab",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'b#':
case 'blo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + " site:blogspot.com OR site:dreamwidth.org",
"https://www.bing.com/search?q=" + q + " site:blogspot.com OR site:dreamwidth.org",
];
if (q == ''){
urlList = [
"https://blogspot.com/",
"https://dreamwidth.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'bb#':
case 'bblo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + " site:blogspot.com OR site:dreamwidth.org&tbs=qdr:m",
"https://www.bing.com/search?q=" + q + " site:blogspot.com OR site:dreamwidth.org&filters=ex1%3a%22ez3%22",
];
if (q == ''){
urlList = [
"https://blogspot.com/",
"https://dreamwidth.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 's#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
//"https://www.reddit.com/search/?q=" + q + "&type=posts&sort=new",
"https://www.tumblr.com/search/" + q,
//"https://www.tumblr.com/search/" + q + "?postTypes=chat%2Clink%2Cquote%2Ctext%2Cpoll%2Cask",
"https://bsky.app/search?q=" + q,
"https://wordpress.com/reader/search?q=" + q,
];
if (q == ''){
urlList = [
//"https://www.reddit.com/",
"https://www.tumblr.com/",
"https://bsky.app/",
"https://wordpress.com/discover",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'sl#':
case 'sd#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
//"https://substack.com/search/"+ q +"?searching=note",
"https://www.tumblr.com/search/" + q + "?t=1",
"https://wordpress.com/reader/search?q=" + q + "&sort=date",
];
if (q == ''){
urlList = [
//"https://substack.com/",,
"https://www.tumblr.com/",
"https://wordpress.com/discover",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'ht#':
case 'htag#':
case 'st#':
case 'stag#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.tumblr.com/tagged/" + q,
"https://bsky.app/hashtag/" + q,
"https://wordpress.com/tag/" + q,
];
if (q == ''){
urlList = [
"https://www.tumblr.com/",
"https://bsky.app/",
"https://wordpress.com/discover",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'mar#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://marginalia-search.com/search?query=" + q,
];
if (q == ''){
urlList = [
"https://marginalia-search.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'marr#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://marginalia-search.com/search?query=" + q + "&recent=recent&newfilter=true",
];
if (q == ''){
urlList = [
"https://marginalia-search.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'sez#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://search.seznam.cz/?q=" + q,
];
if (q == ''){
urlList = [
"https://search.seznam.cz/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'mwm#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://mwmbl.org/?q=" + q,
];
if (q == ''){
urlList = [
"https://mwmbl.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'spp#':
case 'staa#':
case 'spd#':
case 'stad#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.startpage.com/sp/search?query=" + q + "&cat=web&with_date=d",
];
if (q == ''){
urlList = [
"https://www.startpage.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'we#':
case 'wet#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.accuweather.com/search-locations?query=" + q,
];
if (q == ''){
urlList = [
"?q=weather",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'g#':
case 'goo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q,
];
if (q == ''){
urlList = [
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'gg#':
case 'gooo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q + "&tbs=qdr:d",
];
if (q == ''){
urlList = [
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'ps#':
case 'cs#':
case 'cse#':
case 'gps#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/projects/google-programmable-search-49/index.html?q=" + q
];
if (q == ''){
urlList = [
"/projects/google-programmable-search-49/index.html",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'bin#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/search?q=" + q + "&form=somesite",
];
if (q == ''){
urlList = [
"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'binn#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/search?q=" + q + "&filters=ex1%3a%22ez1%22&form=somesite",
];
if (q == ''){
urlList = [
"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'qq#':
case 'ql#':
case 'qd#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/search?q=" + q + "&filters=ex1%3a%22ez1%22&form=somesite",
"https://www.google.com/search?q=" + q + "&tbs=qdr:d",
];
if (q == ''){
urlList = [
"https://www.bing.com/",
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'qw#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/search?q=" + q + "&filters=ex1%3a%22ez2%22&form=somesite",
"https://www.google.com/search?q=" + q + "&tbs=qdr:w",
];
if (q == ''){
urlList = [
"https://www.bing.com/",
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'qm#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/search?q=" + q + "&filters=ex1%3a%22ez3%22&form=somesite",
"https://www.google.com/search?q="+ q + "&tbs=qdr:m",
];
if (q == ''){
urlList = [
"https://www.bing.com/",
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'qn#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&tbs=qdr:d",
"https://www.bing.com/search?q=" + q + "&filters=ex1%3a%22ez1%22&form=somesite",
"https://marginalia-search.com/search?query=" + q + "&recent=recent",
"https://www.tumblr.com/search/" + q + "/recent/?postTypes=text%2Clink%2Cquote%2Cpoll%2Cchat",
];
if (q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
"https://marginalia-search.com/",
"https://www.tumblr.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'nn#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://chatgpt.com/?q=" + q,
//"https://chat.mistral.ai/chat/?q=" + q,
];
if (q == ''){
urlList = [
"https://chatgpt.com/",
//"https://chat.mistral.ai/",

//"https://www.bing.com/copilot",
//"https://copilot.microsoft.com/",
//"https://gemini.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'gpt#':
case 'oai#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://chatgpt.com/?q=" + q,
];
if (q == ''){
urlList = [
"https://chatgpt.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'nns#':
case 'ns#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.perplexity.ai/search/?q=" + q,
"https://www.phind.com/search?q=" + q,
];
if (q == ''){
urlList = [
"https://www.perplexity.ai/",
"https://www.phind.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case "o#":
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://marginalia-search.com/search?query=" + q,
"https://search.seznam.cz/?q=" + q,
//"https://mwmbl.org/?q=" + q,
];
if (q == ''){
urlList = [
"https://marginalia-search.com/",
"https://search.seznam.cz/",
//"https://mwmbl.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'ol#':
case 'od#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://marginalia-search.com/search?query=" + q + "&recent=recent&newfilter=true",
//"https://mwmbl.org/?q=" + q,
];
if (q == ''){
urlList = [
"https://marginalia-search.com/",
//"https://mwmbl.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'test#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"#https://www.example.com/?q=" + q,
];
if (q == ''){
urlList = [
"#https://www.example.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'w#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q + "&udm=14",
//"https://www.bing.com/search?q="+ q + "&form=somesite"
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
//"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'all#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q,
"https://www.bing.com/search?q=" + q + "&form=somesite",
];
if (q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'qs#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/search/?q=" + q,
];
if (q == ''){
urlList = [
"/search/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'def#':
case 'mea#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q + " meaning",
];
if (q == ''){
urlList = [
"/?q=",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'q#':
case 'qr#':
case 'rse#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q,
"https://www.bing.com/search?q=" + q + "&form=somesite",
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q,
"https://www.bing.com/search?q=" + q + "&form=somesite",
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
}


if (sRedirectUrl != ''&&sRedirectUrl != undefined&&sRedirectUrl != null){
rUrlGet = fuMHideFileNameExt(sRedirectUrl);

if (com == "on"){
//location.href = "/projects/redirects-25/?rUrl="+sRedirectUrl;
//location.href.replace(/projects/redirects-25/?rUrl="+sRedirectUrl,);
}
}

}







// print
function runRedirect(rUrlGet){

var print = '';

if (rUrlGet != null&&rUrlGet != 'null'&&rUrlGet != ''&&rUrlGet != undefined){
if (rUrlGet[0] == "."){ rUrlGet = (rUrlGet).slice(1); }

// filter
let allowUrlList = [
"archive.org",
"blogspot.com",
"codepen.io",
"dailymotion.com",
"deezer.com",
"facebook.com",
"giphy.com",
"imgur.com",
"instagram.com",
"pinterest.com",
"reddit.com",
"soundcloud.com",
"spotify.com",
"tunein.com",
"youtube.com",
];

let allowUrlListStatus = "not found";

allowUrlList.forEach((val) => {
if (rUrlGet.indexOf(val) != -1){ allowUrlListStatus = "found"; }
});


// main redirect
var sTimeRedirectStatus = `<span class="small">Redirection (${com}): `+ sTimeRedirect / 1000 + ` sec.</span>`;

//window.location
if (com == "on"&&(String(location.href)).indexOf("#!StopRedirect") == -1){

let rUrlGetClean = rUrlGet.replaceAll('%23!StopRedirect', '');
rUrlGetClean = rUrlGetClean.replaceAll('#!StopRedirect', '');

if (rUrlGet == ''&&rUrlGetClean[0] == 'h'&&allowUrlListStatus == 'not found'){
// disabled if http
sTimeRedirectStatus = `<span class="small">Redirection (${com}): force off</span>`;
} else {

setTimeout(function(){
location.href = rUrlGetClean;
location.href = location.href + '#!StopRedirect'; 
}, sTimeRedirect); 

}

} else {
sTimeRedirectStatus = `<span class="small">Redirection (${com}): re-redirection forse stopped</span>`;
}
// main redirect


//if ((rUrlGet).search("#!StopRedirect") != -1){

/*rUrlGetPrint = decodeURIComponent(rUrlGet);
rUrlGetPrint = fuMClearText(rUrlGetPrint);*/

//rUrlGetPrint = fuMClearText(decodeURIComponent(rUrlGet).replaceAll('#!StopRedirect', ''));
//rUrlGet = decodeURIComponent(rUrlGet);
rUrlGet = rUrlGet.replaceAll('#!StopRedirect', '');
rUrlGet = rUrlGet.replaceAll('%23!StopRedirect', '');

print = `

<div class="tCenter bg border borderRadius2">
<div class="margin padding3 bgList op">${sTimeRedirectStatus}</div>
<div class="margin padding3 bgList border brand borderRadius2"><a class="inlineBlock padding brand break2" href="${rUrlGet}"><span id="printTextUrl" class="break2"></span></a></div>
</div>

`;

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print;
}
if (document.getElementById("printTextUrl") != null){
document.getElementById("printTextUrl").textContent = decodeURIComponent(rUrlGet);
}

}


var a = [
"goo", "bin", "n", "red, v, l"
];

var b = '';
a.forEach((item, index) => { 
b  += item+ ', ';
 });

if (document.getElementById('printComList') != null){
document.getElementById('printComList').innerHTML = '<div class="bg padding2 border2 light op pre small">Redirects commands list: ' + b + `

Example redirects (random): "Google n" - news about Google.

goo - Google, bin - Bing, n - news, i - images, v - videos, s - social media, l - luck (first search result).
</div>`;
}


if (document.getElementById('input') != null&&q != null&&q != 'null'){
document.getElementById('input').value = q;
}

}


runRedirect(rUrlGet);




/*
// to top form
if (conf["confDevice"] == 'mobile'){
if (document.getElementById('searchPage') != null&&document.getElementById('form') != null){
var getclick2 = document.getElementById('form');
document.addEventListener('click', function(event) {
if (getclick2.contains(event.target)) {
//document.getElementById('topSearchWrapper').style.display = 'none';
document.getElementById('searchPage').classList.remove('contentCenter');
document.getElementById('searchPage').classList.add('content');
} else {
//document.getElementById('topSearchWrapper').style.display = 'block';
document.getElementById('searchPage').classList.remove('content');
document.getElementById('searchPage').classList.add('contentCenter');
}
});
}
}*/
