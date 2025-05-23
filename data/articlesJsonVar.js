
var articlesJsonVar = 

[
    {
        "id": "19",
        "text": "How long does it take to create a website?",
        "text2": "It takes from 4 weeks to 6 months to create a site. It depends on many factors, such as the complexity of the work and the technologies used for creating:\r\n1. Work complexity: one page, many pages, landing page, e-commerce site.\r\n2. Technologies used to create the site:\r\n- HTML, CSS, JavaScript, PHP and graphic editors (creation practically from scratch).\r\n- Templates, frameworks, stock photos, and other ready-made solutions that speed up development.\r\n- Special website creation software or website creation platform.\r\n- CMS and CMS templates.\r\n\r\nNote: This is a short list of what can affect build speed; this list does not include many other things.\r\n\r\n\r\nFrom research:\r\n===\r\n5 minutes (AI site builder platform)\r\nfew hours (blog platform, CMS)\r\nfew days - few week (CMS template)\r\n1 week - 3 months (website builder platform).\r\n4 weeks - 6 months (professional developer)\r\n2 - 6 months (web design agency)\r\n\r\n\r\nSources:\r\n\r\n- How long does it take to build a website? Here\u2019s what to expect https:\/\/www.wix.com\/blog\/how-long-does-it-take-to-build-a-website \r\n- How Long Does it Take to Build a Website in 2024 https:\/\/www.hostinger.com\/tutorials\/how-long-it-takes-to-create-website\r\n- How Long Does It Take to Make a Website? \u2013 Go WordPress https:\/\/wordpress.com\/go\/website-building\/how-long-does-it-take-to-make-a-website\/",
        "text3": "",
        "url": "",
        "tag": "#WebDevelopment #website #WebDesign",
        "time": 1730075757,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=19\">id<\/a>"
    },
    {
        "id": "18",
        "text": "About Web Design",
        "text2": "===\r\n\r\nWhat is web design?\r\n\r\nWeb design is a type of digital design that creates and maintains websites. Web design is responsible for how the site should look: colors, fonts (typography), graphics and user interface.\r\n\r\n\r\nWeb design includes:\r\n\r\n- Graphic design.\r\n- User interface design (UI design).\r\n- User experience design (UX design).\r\n- Search engine optimization (SEO).\r\n\r\nWhat is the difference between web design and web development?\r\n\r\n- Web design is more responsible for the visual side of how the site should look.\r\n- Web development is front-end development that implements web design into a ready-to-use site. Web development includes: HTML - hypertext markup language, CSS - cascading style sheets language, and JavaScript (JS) programming language.\r\n\r\n\r\nSources:\r\n\r\nWeb design - Wikipedia https:\/\/en.wikipedia.org\/wiki\/Web_design\r\nWhat Is Web Design? A Comprehensive Guide https:\/\/www.wix.com\/blog\/web-design \r\nWeb Design Explained: Key Elements & Best Practices | Figma https:\/\/www.figma.com\/resource-library\/web-design\/ \r\n\r\n\r\nTrends:\r\n======\r\nSustainable Web Design\u2060 (Reducing the digital carbon footprint).\r\nResponsive Web Design (A site for any screen).\r\nCustom Illustrations (Not stock photos).\r\nMicro-interactions (Respond to user actions).\r\nClean and minimalist visual design (Simplification).\r\nDenser, richer graphics (More complex, colourful, textures).\r\n\r\nSources:\r\n7 emerging web design trends for 2024 and beyond https:\/\/webflow.com\/blog\/web-design-trends-2024",
        "text3": "",
        "url": "",
        "tag": "#WebDesign",
        "time": 1729994594,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=18\">id<\/a>"
    },
    {
        "id": "16",
        "text": "My thoughts on web design and web dev (in progress)",
        "text2": "About CSS\r\n=========\r\n\r\n- The default value in CSS does not need to be changed, these are ready-made, well-thought-out solutions that can be used, for changes there is \"id\" and \"class\".\r\n\r\n\r\nPrinciples of page style:\r\n===================\r\n\r\n - Simplicity and cleanliness, so that there are no unnecessary elements and this gives an opportunity to concentrate attention on the content.\r\n\r\n- Without a lot of space between the elements, I think it looks bad and not compact, although I'm more likely to be wrong.\r\n\r\n- When the design is clean and simple, it is attractive at first. After a while, it becomes boring, so I want to see different colors, pages with pictures or illustrations, and backgrounds with textures or pages with background images.",
        "text3": "",
        "url": "",
        "tag": "#WebDesign #CSS #WebDev #WebDevelopment",
        "time": 1729129773,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=16\">id<\/a>"
    },
    {
        "id": "15",
        "text": "Web design notes, webdev notes (WebDevelopment notes)",
        "text2": "Notes:\r\n=====\r\nNot use \"toDataURL\" => use \"toBlob\",  because the URL too long.\r\nhttps:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/HTMLCanvasElement\/toDataURL\r\n---\r\n\"width\" in CSS doesn't work with \"inline\" elements, <span> as an example, but \"padding\" works (with an overflow of other HTML elements).\r\n---\r\nAbout \"em\" font size and \"px.\" If using the \"em\" size, it looks different, not the same on the different monitors when testing.  (Tested on two different monitors, it's a small amount, but it was enough for me.)\r\n---\r\nUnderlining links is important! Inspired by: GitHub, WordPress. If the text color is similar to the link color, then it is impossible to see the link.\r\n---\r\nJS onclick: JavaScript - href vs onclick for callback function on Hyperlink - Stack Overflow - https:\/\/stackoverflow.com\/questions\/1070760\/javascript-href-vs-onclick-for-callback-function-on-hyperlink\r\n---\r\nJS (JavaScript): onkeypress or keypress is deprecated, instead of this we can using keydown event https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Element\/keypress_event\r\n---\r\nCSS: When changing a style in a CSS file (deleting, renaming), it can break all other pages, and you will need to make changes everywhere.\r\n---\r\nCSS: <span> - it's an inline style element, and an inline element cannot wrap a block element (<h1>, <h2>, <h3> ...) because there will be a CSS error when we validate the style code.\r\nHTML:\r\n<h1><span>test<\/span><\/h1>\r\n<h1><a href=\"#\">test<\/a><\/h1>\r\nhtml - how to mix links ( <a> tag ) and headings ( <h1> tag ) in web standard? - Stack Overflow https:\/\/stackoverflow.com\/questions\/1128778\/how-to-mix-links-a-tag-and-headings-h1-tag-in-web-standard\r\n---\r\nUsing the \"&\" symbol is a bad idea (page validator).\r\n---\r\nDo not use abbreviations, no one will understand it.\r\n---\r\nCSS: \"width\" property does not work if the element is \"inline\" \"i\u0336n\u0336l\u0336i\u0336n\u0336e\u0336-\u0336b\u0336l\u0336o\u0336c\u0336k\u0336\".\r\n---\r\nDo not forget to optimize the size of the pictures.\r\n---\r\nIf the style or page does not work, but everything is fine, you need to restart the device or computer (this happens before or after updating the browser).\r\n---\r\nIf the style or page does not work: Ctrl+Shift+R, Ctrl+F5 or Shift+F5 - Force a hard refresh page.\r\n---\r\nThe 404 not found page should not have a search form, most of the top sites do not.\r\n---\r\nDo not use emojis (emoji can have a double meaning and are difficult to read).\r\n---\r\nDon't use duplicate content in other place (license conflict).\r\n---\r\nName uppercase (grammar).\r\n---\r\nSpaces in JavaScript code, because \"Coding conventions (Programming style)\".\r\n---\r\nUse standard font sizes (16px, 1em, 14px because non-standard (13.4px etc) are not suitable for CSS properties such as small, smaller).\r\n===\r\nAbout copyright.\r\n---\r\nIf there is no copyright, then the work is copyrighted.\r\n---\r\nA completely free work, it is a work under a \"public domain\" or \"CC0\" license.\r\n===",
        "text3": "",
        "url": "",
        "tag": "#WebDesign #WebDevelopment #notes",
        "time": 1721525283,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=15\">id<\/a>"
    },
    {
        "id": "12",
        "text": "Web Design, Web Development resources and tools",
        "text2": "Documentation:\r\n=============\r\n\r\n- MDN Web Docs https:\/\/developer.mozilla.org\/\r\n- Stack Overflow - Where Developers Learn, Share, & Build Careers https:\/\/stackoverflow.com\/\r\n- web.dev https:\/\/web.dev\/\r\n\r\nDev:\r\n====\r\n\r\n- PageSpeed Insights https:\/\/pagespeed.web.dev\/\r\n- The W3C Markup Validation Service https:\/\/validator.w3.org\/\r\n- The W3C CSS Validation Service https:\/\/jigsaw.w3.org\/css-validator\/\r\n\r\n\r\nSEO and statics:\r\n=============\r\n\r\n- Google Analytics https:\/\/analytics.google.com\/\r\n- Google Search Console https:\/\/search.google.com\/search-console\r\n- Bing Webmaster Tools https:\/\/www.bing.com\/webmasters\/\r\n- Google Trends https:\/\/trends.google.com\/\r\n\r\n\r\nSoftware:\r\n========\r\n\r\n- Google Chrome - The Fast & Secure Web Browser Built to be Yours https:\/\/www.google.com\/chrome\/\r\n- Firefox for desktop \u2014 Mozilla https:\/\/www.mozilla.org\/firefox\/new\/\r\n- Visual Studio Code - Code Editing. Redefined https:\/\/code.visualstudio.com\/\r\n- Notepad++ https:\/\/notepad-plus-plus.org\/\r\n- Geany https:\/\/www.geany.org\/\r\n- Inkscape https:\/\/inkscape.org\/\r\n- GIMP - GNU Image Manipulation Program https:\/\/www.gimp.org\/\r\n\r\n\r\n\r\nOther:\r\n=====\r\n- Daring Fireball: Markdown https:\/\/daringfireball.net\/projects\/markdown\/\r\n- Ecograder https:\/\/ecograder.com\/",
        "text3": "",
        "url": "",
        "tag": "#WebDesign #WebDevelopment #resources #links",
        "time": 1712410445,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=12\">id<\/a>"
    },
    {
        "id": "9",
        "text": "Notes on SEO",
        "text2": "SEO:\r\n====\r\n\r\n- Title length: 30 and 60 characters.\r\n- Description length: 30-155 characters.\r\n- Keyword: less than 10% of the total words of a page.\r\n\r\n\r\nSEO Tools:\r\n-----------------\r\n\r\n- https:\/\/www.bing.com\/webmasters\/\r\n- https:\/\/analytics.google.com\/\r\n- https:\/\/search.google.com\/search-console\r\n- https:\/\/trends.google.com\/trends\/\r\n---\r\n- https:\/\/clarity.microsoft.com\/\r\n\r\n\r\nTitle\r\n--------\r\n\r\nExample:\r\n1. \"Text text - site name\"\r\n2. \"Text text \/ site name\"\r\nDelimiters: \"|\" and \"\/\".\r\n\"Text text\" - priority is given to the content and it is the first in \"Site title\".\r\n\r\n\r\nResearch:\r\n========\r\n\r\nHow the Title looks on the top sites  (SEO):\r\n--------------------------------------------------------------------\r\n\r\nExample - Wikipedia\r\nhttps:\/\/en.wikipedia.org\/wiki\/Example\r\n\r\njack on X: \"just setting up my twttr\" \/ X\r\nhttps:\/\/twitter.com\/jack\/status\/20\r\n\r\nRecap is here for all to cheer, update your app to see your year : r\/recap \r\nhttps:\/\/www.reddit.com\/r\/recap\/comments\/18intt1\/recap_is_here_for_all_to_cheer_update_your_app_to\/\r\n\r\nMe at the zoo - YouTube\r\nhttps:\/\/www.youtube.com\/watch?v=jNQXAC9IVRw\r\n\r\nAnnouncing Meta \u2014 the Facebook company\u2019s new name. Meta is helping to build the metaverse, a place where we\u2019ll play and connect in 3D.\u2026 | Instagram \r\nhttps:\/\/www.instagram.com\/p\/CVlR5GFqF68\/\r\n\r\nstaff on Tumblr: Tumblr Tuesday: National Nothing Day \r\nhttps:\/\/www.tumblr.com\/staff\/739686936250302464\/tumblr-tuesday-national-nothing-day\r\n\r\n\r\nSearch results page:\r\n---------------------------------\r\n\r\nexample - YouTube\r\nhttps:\/\/www.youtube.com\/results?search_query=example\r\n\r\nexample - Google Search\r\nhttps:\/\/www.google.com\/search?q=example\r\n\r\nexample - Search\r\nhttps:\/\/www.bing.com\/search?q=example\r\n\r\nexample - Search \/ X\r\nhttps:\/\/twitter.com\/search?q=example\r\n\r\nexample - Reddit Search!\r\nhttps:\/\/www.reddit.com\/search\/?q=example\r\n\r\nexample | Tumblr\r\nhttps:\/\/www.tumblr.com\/search\/example\r\n\r\n\r\nHow the #hashtag URL and title looks on the top sites:\r\n---------------------------------------------------------------------------------------\r\n\r\n#example - Search \/ X\r\nhttps:\/\/twitter.com\/hashtag\/example\r\n\r\nThe most insightful stories about Example - Medium https:\/\/medium.com\/tag\/example\r\n\r\nexample on Tumblr\r\nhttps:\/\/www.tumblr.com\/tagged\/example\r\n\r\nYouTube\r\nhttps:\/\/www.youtube.com\/hashtag\/example\r\n\r\n#example on Instagram | Hashtags https:\/\/www.instagram.com\/explore\/tags\/example\/\r\n\r\n\r\n\r\nTitle of the main page\r\n==================\r\nGoogle https:\/\/www.google.com\/\r\nYouTube: Home https:\/\/www.youtube.com\/\r\nWikipedia https:\/\/www.wikipedia.org\/\r\nBing https:\/\/www.bing.com\/\r\nFacebook - log in or sign up https:\/\/www.facebook.com\/\r\nInstagram https:\/\/www.instagram.com\/\r\nReddit - Dive into anything https:\/\/www.reddit.com\/\r\nX. It's what's happening \/ X https:\/\/x.com https:\/\/twitter.com\/\r\nTrending topics on Tumblr https:\/\/www.tumblr.com\/",
        "text3": "",
        "url": "",
        "tag": "#SEO #WebDesign",
        "time": 1711321237,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=9\">id<\/a>"
    },
    {
        "id": "7",
        "text": "Auto dark mode and auto light mode for browser and OS (app list)",
        "text2": "List of application and extensions for auto dark theme and light theme mode. Automatic change of the theme based on the time of day or a custom time.\r\n\r\nIf you have Windows, Linux (Gnome DE) and the Firefox browser, then this topic is for you.\r\n\r\n\r\nWindows:\r\n\r\nAuto Dark Mode\r\nhttps:\/\/apps.microsoft.com\/detail\/xp8jk4hzbvf435\r\nrepository\r\nhttps:\/\/github.com\/AutoDarkMode\/Windows-Auto-Night-Mode\r\n\r\n\r\nLinux (Ubuntu or Gnome DE):\r\n\r\nNight Theme Switcher\r\nhttps:\/\/nightthemeswitcher.romainvigier.fr\/\r\nhttps:\/\/extensions.gnome.org\/extension\/2236\/night-theme-switcher\/\r\nrepository\r\nhttps:\/\/gitlab.com\/rmnvgr\/nightthemeswitcher-gnome-shell-extension\r\n\r\n\r\nMozilla Firefox:\r\n\r\nautomaticDark - Time-Based Theme Changer\r\nhttps:\/\/addons.mozilla.org\/en-US\/firefox\/addon\/automatic-dark\/\r\nrepository\r\nhttps:\/\/github.com\/skhzhang\/time-based-themes\r\n\r\n\r\nVSCode:\r\n\r\nSundial \u2013 Automatic night mode and settings switch\r\nhttps:\/\/marketplace.visualstudio.com\/items?itemName=muuvmuuv.vscode-sundial\r\nrepository\r\nhttps:\/\/github.com\/muuvmuuv\/vscode-sundial",
        "text3": "",
        "url": "",
        "tag": "#theme #auto #automatic #dark #light #mode",
        "time": 1710664085,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=7\">id<\/a>"
    },
    {
        "id": "5",
        "text": "Responsive Web Design",
        "text2": "Beginning:\r\n========\r\n\r\nResponsive web design is a web design or CSS style that makes a website look good on any screen size.\r\n\r\nNote: The most popular responsive design technique is \"Mobile First Design\".\r\n\r\nTo make the page optimized for mobile devices, first use this meta tag in the \"head\"\r\n\u0421ode:\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" \/>\r\n\r\n\r\nCSS Responsive Design can be achieved by using:\r\n========================================\r\n\r\n- CSS units as percentages \"%\" (100%), \"1fr\" (for grid). \"vw\".\r\n- \"media query\".\r\n- CSS property: \"max-width\", \"min-width\".\r\n- Maybe something else.\r\n\r\n\r\nA few of my own examples of what I use:\r\n=================================\r\n\r\n1. If the width of the screen is 500 pixels or less, we do something, or if it is more than 500 pixels, we do something else.\r\n\r\n@media(max-width: 500px){\r\np {\r\ncolor: red;\r\n}\r\n}\r\n\r\n@media(min-width: 500px){\r\np {\r\ncolor: blue;\r\n}\r\n}\r\n\r\n2. This CSS code prevents images from overflowing and sets the automatic size for the picture:\r\n\r\nimg {\r\nmax-width:100%;\r\nheight: auto;\r\ndisplay: inline-block;\r\n}\r\n\r\n\r\n3. My responsive content or page \"wrapper\" class. This wrapper in the example makes the content no wider than 560px and a width of 100% makes it adaptive to any screen:\r\n\r\n.wrapper {\r\nwidth: 100%;\r\nmax-width: 560px;\r\nmargin: 0 auto;\r\n}\r\n\r\n\r\n4. Hide 1 and show 2 something depending on the screen size or dynamic style change. Hide the desktop version and show the mobile version of something instead. (A drop down menu or something else):\r\n\r\n@media(width >= 500px){\r\np { color: red; }\r\n}\r\n\r\n@media(width <= 500px){\r\np { color: green; }\r\n}\r\n\r\nor\r\n\r\n@media(width >= 500px){\r\n.mobileVersion { display: none; }\r\n.desktopVersion { display: block; color: red }\r\n}\r\n\r\n@media(width <= 500px){\r\n.mobileVersion { display: block; color: green; }\r\n.desktopVersion { display: none; }\r\n}\r\n\r\n\r\nNote: Testing and debugging:\r\n=======================\r\n\r\n- Resize the browser window to see the style changes.\r\n- Launch the developer tool in the browser through the menu and \"Inspect\" page and change the size of the window there.\r\n- In developer tools, you can choose mobile phone simulation: \"Responsive Design Mode\" (phone icon).\r\n- Of course, a test on a physical device.\r\n\r\n\r\n\r\nSource and Learning:\r\n\r\n- Responsive design - Learn web development | MDN - https:\/\/developer.mozilla.org\/docs\/Learn\/CSS\/CSS_layout\/Responsive_Design\r\n- Responsive web design basics  |  Articles  |  web.dev - https:\/\/web.dev\/articles\/responsive-web-design-basics\r\n- Mobile-First CSS: Is It Time for a Rethink? \u2013 A List Apart - https:\/\/alistapart.com\/article\/mobile-first-css-is-it-time-for-a-rethink\/\r\n\r\nDoc:\r\n\r\n- Viewport meta tag - HTML: HyperText Markup Language | MDN - https:\/\/developer.mozilla.org\/docs\/Web\/HTML\/Viewport_meta_tag\r\n- Beginner's guide to media queries - Learn web development | MDN - https:\/\/developer.mozilla.org\/docs\/Learn\/CSS\/CSS_layout\/Media_queries\r\n- Using media queries - CSS: Cascading Style Sheets | MDN - https:\/\/developer.mozilla.org\/docs\/Web\/CSS\/CSS_media_queries\/Using_media_queries\r\nCSS values and units - Learn web development | MDN - https:\/\/developer.mozilla.org\/docs\/Learn\/CSS\/Building_blocks\/Values_and_units",
        "text3": "",
        "url": "",
        "tag": "#CSS #responsive #UI #UX #website #WebDesign #note",
        "time": 1706230527,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=5\">id<\/a>"
    },
    {
        "id": "3",
        "text": "Instruction: how to create a website (HTML file, webpage, or HTML document).",
        "text2": "To create an HTML page and view it, we will use your pre-installed programs, such as a text editor and a browser.\r\n\r\n1. First step: you need to create a file \"index.html\" with the \".html\" extension. To do this, use this instruction to enable file extensions:\r\nWindows https:\/\/stackoverflow.com\/a\/71899738\/22625440\r\nMacOS https:\/\/support.apple.com\/guide\/mac-help\/show-or-hide-filename-extensions-on-mac-mchlp2304\/mac\r\n\r\nCreate a file: index.html\r\n\r\n2. The second step is to place this code in an index.html file. To do this, open your index.html file in a text editor or in a code editor, copy this code, paste it into the editor, and save the changes or save file (or save as \"index.html\").\r\n\r\ncode:\r\n\r\n<!DOCTYPE html>\r\n<html>\r\n\u00a0 <head>\r\n\u00a0 \u00a0 <title>This is a title<\/title>\r\n\u00a0 <\/head>\r\n\u00a0 <body>\r\n\u00a0 \u00a0 \u00a0 \u00a0 <p>Hello world!<\/p>\r\n\u00a0 <\/body>\r\n<\/html>\r\n\r\n3. Open your index.html file in a browser, such as Chrome, Firefox, Edge, or Safari, to see the result.\r\n\r\nSources:\r\nHTML - https:\/\/en.wikipedia.org\/wiki\/HTML\r\nWindows file extension - https:\/\/stackoverflow.com\/a\/71899738\/22625440\r\nMacOS file extension - https:\/\/support.apple.com\/guide\/mac-help\/show-or-hide-filename-extensions-on-mac-mchlp2304\/mac",
        "text3": "",
        "url": "",
        "tag": "#HTML",
        "time": 1704534741,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=3\">id<\/a>"
    },
    {
        "id": "1",
        "text": "Title start end",
        "text2": "Text start end",
        "text3": "",
        "url": "",
        "tag": "#start #end",
        "time": 1704235006,
        "rightFooter": "<a class=\"brand\" href=\"\/pages\/articles\/?id=1\">id<\/a>"
    }
]
