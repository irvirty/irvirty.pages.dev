// Movie list v.3.1.0
// parsed csv

parseList("result", "../../data2/watchlist.csv");


function parseList(printId, fileCsv){
var print = ``;


const response = fetch(fileCsv)
.then(response => response.text())
.catch(err => console.log(err))
//https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/
.then(text => {

/*//Use CSV text
text = text.split(`
`);
text = text.slice(1);
text.pop();
*/
text = parseCSV(text)
//console.table(text);


var movieList = [];

text.forEach(myFunction);

function myFunction(item33) {

//item33 = item.split(`,`);
//print += `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;
//movieList = `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;

// title without quote and comma
var title33 = item33[3];
var year33 = item33[4].split('-')[0];

let title33Go = encodeURIComponent(title33);
let title33Go2 = title33Go + encodeURIComponent(` (` + year33 + `)`);

//get arr for sort
movieList.push({
title: `${title33}`,
data: `<span class="inlineBlock padding1Px">${title33} (${year33})</span><br>`,
data2: `
<div class="borderList bgList padding2 notUnderline">
<div class="twoColumn blockMobile">

<div class="inlineBlock keepTag tLeft"><b>${title33} (${year33})</b></div>

<div class="keepTagList left">
<a class="keepTag2 brand light2 border borderRadius" target="blank" href="/?q=${title33Go2} q">Search</a>
<a class="keepTag2 brand light2 border borderRadius" target="blank" href="https://www.themoviedb.org/search?query=${title33Go}">TMDB</a>
<a class="keepTag2 brand light2 border borderRadius" target="blank" href="/?q=${title33Go2} Trailer v">Trailer</a>
<a class="keepTag2 brand light2 border borderRadius" target="blank" href="/?q=${title33Go2} Reaction v">Reaction</a>
<a class="keepTag2 brand light2 border borderRadius" target="blank" href="/?q=${title33Go2} Review">Review</a>
</div>

</div>
</div>
`,
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

randomMovie = movieList[randomMovie]['data2'];
randomMovie2 = movieList[randomMovie2]['data2'];
randomMovie3 = movieList[randomMovie3]['data2'];
print = `
<div class="borderList bgList padding2">
<h2 class="block paddingList2">Random:</h2>
</div>

${randomMovie}
${randomMovie2}
${randomMovie3}
<div class="borderList bgList padding2">
<a class="submit button block op brand borderRadius notUnderline" href="#" onclick="fuMReload();return false;">Reload</a>
</div>

<div class="borderList bgList padding3">
<h2 class="op paddingList bold">List (total: ${movieList.length}):</h2>
${print}
</div>
`;


echo(printId, print);

});

function echo(id, text){
document.getElementById(id).innerHTML = `
${text}
`;
}

}





//https://stackoverflow.com/questions/1293147/how-to-parse-csv-data
function parseCSV(str) {
    const arr = [];
    let quote = false;  // 'true' means we're inside a quoted field

    // Iterate over each character, keep track of current row and column (of the returned array)
    for (let row = 0, col = 0, c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];        // Current character, next character
        arr[row] = arr[row] || [];             // Create a new row if necessary
        arr[row][col] = arr[row][col] || '';   // Create a new column (start with empty string) if necessary

        // If the current character is a quotation mark, and we're inside a
        // quoted field, and the next character is also a quotation mark,
        // add a quotation mark to the current column and skip the next character
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }

        // If it's just one quotation mark, begin/end quoted field
        if (cc == '"') { quote = !quote; continue; }

        // If it's a comma and we're not in a quoted field, move on to the next column
        if (cc == ',' && !quote) { ++col; continue; }

        // If it's a newline (CRLF) and we're not in a quoted field, skip the next character
        // and move on to the next row and move to column 0 of that new row
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }

        // If it's a newline (LF or CR) and we're not in a quoted field,
        // move on to the next row and move to column 0 of that new row
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }

        // Otherwise, append the current character to the current column
        arr[row][col] += cc;
    }
    return arr;
}
