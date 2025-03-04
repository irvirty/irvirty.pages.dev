// Movie list (links) v.2.0.1
// parsed IMDB WATCHLIST.csv

parseList("result", "../../data2/watchlist.csv");


function parseList(printId, fileCsv){
var print = ``;


const response = fetch(fileCsv)
.then(response => response.text())
.catch(err => console.log(err))
//https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/
.then(text => {
//Use CSV text
text = text.split(`
`);

text = text.slice(1);
text.pop();


var movieList = [];

text.forEach(myFunction);

function myFunction(item) {

item33 = item.split(`,`);
//print += `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;
//movieList = `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;

// title without quote and comma
var title33 = item33[3];
var url33 = item33[7];
var year33 = item33[4].split("-")[0];


//  if title with quote and comma
var titleWithQuoteAndComma = item33[5].split('"');

if (titleWithQuoteAndComma.length >= 2){
titleWithQuoteAndComma = item.split('"');
title33 = titleWithQuoteAndComma[1];

/*url33 = titleWithQuoteAndComma[2].split(',');
url33 = url33[1];*/

/*year33 = titleWithQuoteAndComma[2].split(',');
year33 = year33[5];*/
}



//get arr for sort
movieList.push({
title: `${title33}`,
data: `<span class="inlineBlock padding1Px">${title33} (${year33}) - <a class="brand" target="_blank" href="${url33}">IMDB</a></span><br>`
});

}

//https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
// sort
function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}



var randomMovie = Math.floor(Math.random() * movieList.length);
var randomMovie2 = Math.floor(Math.random() * movieList.length);
var randomMovie3 = Math.floor(Math.random() * movieList.length);

movieList.sort( compare );
//console.log(movieList);

//print data
movieList.forEach(myFunction2);
function myFunction2(item, key) {
print += item['data'];
}

randomMovie = movieList[randomMovie]['data'];
randomMovie2 = movieList[randomMovie2]['data'];
randomMovie3 = movieList[randomMovie3]['data'];
print = `
<h2 class="block paddingList2">Random:</h2>
${randomMovie}
${randomMovie2}
${randomMovie3}<br>
<a class="op paddingList2 brand" href="#" onclick="fuMReload()">[ reload ]</a>

<h2 class="op paddingList bold">List (total: ${movieList.length}):</h2>
${print}
`;


echo(printId, print);

});

function echo(id, text){
document.getElementById(id).innerHTML = `
<div class="wrapper">${text}</div>
`;
}

}
