// v.1.1.0


let print = "";
let checkExitWord = false;
for (const val of enWordsJsonVar) {

print += `${val["text"]}<br>`;



}

//https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
var randomItem = enWordsJsonVar[Math.floor(Math.random() * enWordsJsonVar.length)];
randomItem = randomItem["text"];

document.getElementById("result").innerHTML = `
total: ${enWordsJsonVar.length}
random: ${randomItem}

${print}
total: ${enWordsJsonVar.length}
random: ${randomItem}

`;


