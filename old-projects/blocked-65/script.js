// v.1.0.0


var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var text = url.searchParams.get("text");

let lReferrer = document.referrer;
+ '<span class="op">document.referrer</span><br />' + document.referrer + '<hr />'

var print = `
URL: <a class="blue" href="${q}">${q}</a><br>
Reason: ${text}<br>
Document.referrer: ${lReferrer}
`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print;
}
