// v.1.0.0


var print = `
result
`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}

if (conf["confDataCollection"] == "on") {

var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = '//ssl.gstatic.com/trends_nrtr/4017_RC01/embed_loader.js';
document.getElementsByTagName('head')[0].appendChild(script2);




// Run:
//https://stackoverflow.com/questions/39155645/multiple-window-onload-functions-with-only-javascript
window.addEventListener('load', function() {

trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"geo":"US","time":"now 7-d"}],"category":0,"property":""}, {"exploreQuery":"date=now%207-d&geo=US","guestPath":"https://trends.google.com:443/trends/embed/"});



trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"geo":"CA","time":"now 7-d"}],"category":0,"property":""}, {"exploreQuery":"date=now%207-d&geo=US","guestPath":"https://trends.google.com:443/trends/embed/"});



trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"geo":"GB","time":"now 7-d"}],"category":0,"property":""}, {"exploreQuery":"date=now%207-d&geo=US","guestPath":"https://trends.google.com:443/trends/embed/"});



trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"geo":"ES","time":"now 7-d"}],"category":0,"property":""}, {"exploreQuery":"date=now%207-d&geo=US","guestPath":"https://trends.google.com:443/trends/embed/"});

});

}
