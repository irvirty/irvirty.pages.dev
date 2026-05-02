// v.1.1.1


let print = "";
let checkExitWord = false;

let counter = 0;
let average = 0;


for (const val of enWordsJsonVar) {

average = average + val["text"].length;

print += `${val["text"]}<br>`;


counter++;
}

//https://stackoverflow.com/questions/4098685/rounding-numbers-to-2-digits-after-comma
let averageWordLength = (average / counter).toFixed(2);

//https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
var randomItem1 = enWordsJsonVar[Math.floor(Math.random() * enWordsJsonVar.length)];
randomItem1 = randomItem1["text"];

var randomItem2 = enWordsJsonVar[Math.floor(Math.random() * enWordsJsonVar.length)];
randomItem2 = randomItem2["text"];

var randomItem3 = enWordsJsonVar[Math.floor(Math.random() * enWordsJsonVar.length)];
randomItem3 = randomItem3["text"];

document.getElementById("result").innerHTML = `
Total: ${enWordsJsonVar.length}
Random: ${randomItem1}, ${randomItem2}, ${randomItem3}
Average word length: ${averageWordLength}
Average word length from Google: 5.1

${print}

Total: ${enWordsJsonVar.length}
Random: ${randomItem1}, ${randomItem2}, ${randomItem3}
Average word length: ${averageWordLength}
Average word length from Google: 5.1

`;


