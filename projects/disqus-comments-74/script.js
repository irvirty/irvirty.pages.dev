// v.1.0.1


function disqusCommnets(disqusShortname, titleStatus, urlStatus){
if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
var pageTitle = "";
var pageUrl = "";

if (disqusShortname == undefined||disqusShortname == ""){
var disqusShortname = "test";
}

if (titleStatus == "on"){
pageTitle = document.title;
}

if (urlStatus == "on"){
pageUrl = location.href;
}


    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */


var disqus_config = function () {
if (urlStatus == "on"){
this.page.url = pageUrl;  // Replace PAGE_URL with your page's canonical URL variable
}
if (titleStatus == "on"){
this.page.identifier = pageTitle; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
}
};

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://' + disqusShortname + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
}
}
