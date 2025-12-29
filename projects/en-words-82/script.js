// v.1.0.0


let print = "";
let checkExitWord = false;
for (const val of enWordsJsonVar) {

print += `${val["text"]}<br>`;



}


document.getElementById("result").innerHTML = `
total: ${enWordsJsonVar.length}
${print}
total: ${enWordsJsonVar.length}
`;


