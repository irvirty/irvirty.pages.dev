// v.1.1.0


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
var randomItem = enWordsJsonVar[Math.floor(Math.random() * enWordsJsonVar.length)];
randomItem = randomItem["text"];

document.getElementById("result").innerHTML = `
Total: ${enWordsJsonVar.length}
Random: ${randomItem}
Average word length: ${averageWordLength}

${print}
Total: ${enWordsJsonVar.length}
Random: ${randomItem}
Average word length: ${averageWordLength}

`;


