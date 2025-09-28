// Todo v.2.7.2
// https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continue


var print = '';
var printDaily = '';
var com = '';
var text = ''
var status = '';
var randomTodoListArray = [];
var printListPrintDaily = '';
var printListPrint = '';

var todoTotal = 0;

var tagListPrint = '';
var tagListLimit = '38';
var scriptDir = './'; 
var comMessagePrint = '';


var url = new URL(window.location);
var q = url.searchParams.get("q");
com = url.searchParams.get("com");

var targetOption = '';

if (q != null){
q = fuMClearText(q);
/*q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);*/
q = fuMClearText(q);
q = q.trim();
}
if (q == null){ q = ''; }



if (q != ''&&com == null||q != ''&&com == ''&&com != 'add'){
com = 'search';
runDb('search', '');
} else if (com != 'add'){
runDb('', '');
}
var i = 0;






// main
function runDb(com, id, text, status, statusDaily){

var dbVersion = 1.0;
var dbName = "todo-list";
var tableName = 'data';

print = '';
//document.getElementById("result").innerHTML = '';  // clear

//comGet(com, id, text, status);

if (com == ''||com == undefined){ com = 'show'; text = ''; id = 0; status = ''; }






/*
indexedDB.open(dbName, dbVersion).onsuccess = (event) => {
const db = event.target.result;

//https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/count
const transaction = db.transaction([tableName], "readonly");
const objectStore = transaction.objectStore(tableName);
const countRequest = objectStore.count();
countRequest.onsuccess = () => {
//console.log(countRequest.result);
};

}*/




const request = indexedDB.open(dbName, dbVersion);







request.onerror = (event) => {
console.log("request.onerror = (event)");
console.log(event.target);

/*
// https://stackoverflow.com/questions/15861630/how-can-i-remove-a-whole-indexeddb-database-from-javascript
var req = indexedDB.deleteDatabase(dbName);
req.onsuccess = function () {
    console.log("Deleted database successfully");
};
req.onerror = function () {
    console.log("Couldn't delete database");
};
req.onblocked = function () {
    console.log("Couldn't delete database due to the operation being blocked");
};*/


};







request.onupgradeneeded = (event) => {

const db = event.target.result;


const objectStore = db.createObjectStore(tableName, { autoIncrement : true });


objectStore.createIndex("text", "text", { unique: false });
objectStore.createIndex("text2", "text2", { unique: false });
objectStore.createIndex("text3", "text3", { unique: false });
objectStore.createIndex("url", "url", { unique: false });
objectStore.createIndex("tag", "tag", { unique: false });
objectStore.createIndex("time", "time", { unique: false });

objectStore.createIndex("data", "data", { unique: false });
objectStore.createIndex("data2", "data2", { unique: false });
objectStore.createIndex("data3", "data3", { unique: false });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
/*  objectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const customerObjectStore = db.transaction(tableName, "readwrite").objectStore(tableName);
    data.forEach((tableName) => {
      customerObjectStore.add(tableName);
    });
  };*/

//console.log("objectStore = db.createObjectStore");









};











if (com == "clear"){

request.onsuccess = (event) => {

//console.log("request.onsuccess = (event)");
const db = event.target.result;

// https://developer.mozilla.org/docs/Web/API/IDBObjectStore/clear
 const transaction = db.transaction([tableName], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = (event) => {
   // note.innerHTML += '<li>Transaction completed.</li>';
runDb('show', '', '');
  };

  transaction.onerror = (event) => {
    note.innerHTML += `<li>Transaction not opened due to error: ${transaction.error}</li>`;
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore(tableName);

  // Make a request to clear all the data out of the object store
  const objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = (event) => {
    // report the success of our request
    //note.innerHTML += '<li>Request successful.</li>';
com = '';
runDb('show', '', '');
  };



};
}








if (com == 'add'){

// test for add
data = [
{ text:text }
];

request.onsuccess = (event) => {

//console.log("request.onsuccess = (event)");
const db = event.target.result;


db.onerror = (event) => {
  console.error(`Database error: ${event.target.errorCode}`);
};


const transaction = db.transaction([tableName], "readwrite");
const objectStore = transaction.objectStore(tableName);
data.forEach((tableName) => {
  const request = objectStore.add(tableName);
  request.onsuccess = (event) => {
    // event.target.result === customer.ssn;
//console.log('data added');
  };
});


transaction.oncomplete = (event) => {
//console.log("transaction.oncomplete");

if (q != ''&&com == 'add'&&String(window.location).indexOf('stopReSubmit') == -1){
//window.location.href = '?#stopReSubmit';
q = fuMClearText(q);
window.location.replace("?#stopReSubmit",);
} else {
q = '';
com = '';

}
runDb('show', '');





//scrollTo33();
};


transaction.onerror = (event) => {
  // Don't forget to handle errors!
//console.log("transaction.onerror");
};



};

}


if (com == "del"){


request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);



objectStore.openCursor().onsuccess = function(event) {
var cursor = event.target.result;  
if (cursor) {
if (cursor.key == id){
cursor.delete();
com = '';
print = '';
if (q != ''){ runDb('search', ''); } else { runDb('show', ''); }
} else {
//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.text);
cursor.continue();
//alert(cursor.key);
} 
} else {
//console.log("Done with cursor");
//runDb('show', '', '');
com = '';
print = '';
if (q != ''){ runDb('search', ''); } else { runDb('show', ''); }
}  
};  

};

}


if (com == 'delAllDone'||com == 'DelAllDone'){ // from del


request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);

print = '';

// save me

objectStore.openCursor().onsuccess = function(event) {  
var cursor = event.target.result;

if (cursor) {
/*if (cursor.key == id){ // from del copy paste
cursor.delete();
}*/

status = cursor.value.data;
statusDaily = cursor.value.data2;
//alert(status);

if (status == 'done'&&statusDaily != 'daily'){ // from del copy paste
cursor.delete();
}


//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.text);

cursor.continue();  
} else {  
//console.log("Done with cursor");
//runDb('show', '', '');
com = '';
if (q != ''){ runDb('search', ''); } else { runDb('show', ''); }
}  
};  

};

}




if (com == 'done'){

//console.log('start done: '+id+status);
request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);


objectStore.openCursor().onsuccess = function(event) { 
var cursor = event.target.result;
//console.log(id, status);
if (cursor) { 
if (cursor.key == id){

const updateData = cursor.value;
cursor.value.data = status;
const request = cursor.update(updateData);
request.onsuccess = () => {
//console.log('updated');
};
};

//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.text);
cursor.continue();  
} else {  
//console.log("Done end");
}  
};  

transaction.oncomplete = (event) => {
//console.log("transaction.oncomplete");
com = '';
if (q != ''){ runDb('search', ''); } else { runDb('show', ''); }

};

};

}







if (com == 'daily'){

//console.log('start done: '+id+status);
request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);


objectStore.openCursor().onsuccess = function(event) { 
var cursor = event.target.result;
//console.log(id, status);
if (cursor) { 
if (cursor.key == id){

const updateData = cursor.value;
cursor.value.data2 = statusDaily;

const request = cursor.update(updateData);
request.onsuccess = () => {
//console.log('updated');
};
};

//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.text);
cursor.continue();  
}  
else {  
//console.log("Done end");
}  
};  

transaction.oncomplete = (event) => {
//console.log("transaction.oncomplete");
//runDb('show', '');
com = '';
if (q != ''){ runDb('search', ''); } else { runDb('show', ''); }
};

};

}














if (com == 'uncheckAllDaily'){

//console.log('start done: '+id+status);
request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);


objectStore.openCursor().onsuccess = function(event) { 
var cursor = event.target.result;
//console.log(id, status);
if (cursor) { 
//if (cursor.key == id){};

const updateData = cursor.value;
if (cursor.value.data2 == 'daily'){
cursor.value.data = '';
} else {
cursor.value.data = cursor.value.data;
}

const request = cursor.update(updateData);
request.onsuccess = () => {
//console.log('updated');
};


//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.text);
cursor.continue();  
} else {  
//console.log("Done end");
}  
};  

transaction.oncomplete = (event) => {
//console.log("transaction.oncomplete");
com = '';
if (q != ''){ runDb('search', ''); } else { runDb('show', ''); }
};

};

}










if (com == 'update'){

//console.log('[ start update: '+id+status+' ]');
request.onsuccess = (event) => {
const db = event.target.result;

const transaction = db.transaction([tableName], 'readwrite');
const objectStore = transaction.objectStore(tableName);


// save me, done I saved, del this comment

objectStore.openCursor().onsuccess = function(event) { 
var cursor = event.target.result;
//console.log(id, status);
if (cursor) {  
if (cursor.key == id){

const updateData = cursor.value;

cursor.value.text = text;
const request = cursor.update(updateData);
request.onsuccess = () => {
//console.log('updated');
};
};

//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.text);
cursor.continue();  
} else {
//console.log("[ not cursor, done ]");
}  
};  

transaction.oncomplete = (event) => {
//console.log("[ transaction.oncomplete ]");
//runDb('show', '');
com = '';
if (q != ''){ runDb('search', ''); } else { runDb('show', ''); }
};

};

}







if (com == 'show'||com == 'search'||com == 'edit'){


request.onsuccess = (event) => {
const db = event.target.result;
const transaction = db.transaction([tableName], 'readonly');
const objectStore = transaction.objectStore(tableName);

const countRequest = objectStore.count();
countRequest.onsuccess = () => {
todoTotal = countRequest.result;
};

print = '';

//https://stackoverflow.com/questions/44360910/how-to-obtain-results-of-an-indexeddb-cursor-in-reverse-order
objectStore.openCursor(null, 'prev').onsuccess = function(event){ 
var cursor = event.target.result;  
if (cursor) { 
//console.log('cur key: '+cursor.key);
//console.dir('cur value: '+cursor.value.text);

let idPrint = cursor.key;
//let textPrint = decodeURIComponent(cursor.value.text);
let textPrint = (cursor.value.text);
let statusPrint = (cursor.value.data);
let statusDailyPrint = (cursor.value.data2);

let textPrintHighlight = highlightText(textPrint);

var statusPrint2 = '';
var statusDailyPrint2 = '';
if (statusPrint == 'done'){ statusPrint2 = '#tDone'; } else { statusPrint2 = '#tNotDone'; }
if (statusDailyPrint == 'daily'){ statusDailyPrint2 = '#tDaily'; } else { statusDailyPrint2 = '#tNotDaily'; }

tagListPrint += ' ' + textPrint + ' ';
//var qData = ' ' + textPrint + ' ' + statusPrint2 + ' ' + statusDailyPrint2 + ' ';
var qData = ' ' + textPrint;


if (com == 'edit'&&id == idPrint){
/*editPrint = `<form style="margin: 10px 0;"><input id="inputTaskUp" class="padding2" type="text" name="q" autofocus="autofocus" autocomplete="off" placeholder=" task" value="${textPrint}"><input  type="hidden" name="com" value="edit"><input id="idInputE" type="hidden" name="id" value="${idPrint}"><input type="submit"></form><div id="option2"></div>`;*/

editPrint = `<form><textarea id="textInputE" class="padding2" name="text" rows="3" cols="100" placeholder=" edit" autofocus="autofocus">${textPrint}</textarea><input id="idInputE" type="hidden" name="id" value="${idPrint}"><a href="#" class="block tCenter padding2 light borderList borderRadius2 submit" style="cursor: pointer;" onclick="submitLinkEdit();return false;">submit</a></form>`;
} else {
//editPrint = `<span onclick="runDb('edit', '` + idPrint + `', '', '');return false;">${textPrint}</span>`;
editPrint = `${textPrintHighlight}`;
}



// show  & edit button
let printTmp = '';
if (statusPrint == 'done'){

printTmp = `<!--<div class="op xSmall">${idPrint}</div>--><span><input class="checkbox op" checked="checked" type="checkbox"  name="" value="undone" onclick="runDb('done', '` + idPrint + `', '', 'undone');return false;"></span>
<div class="flexCenter"><div class="pre op block" style="text-decoration: line-through;">${editPrint}</div></div>`;

} else {

printTmp = `<!--<div class="op xSmall">${idPrint}</div>-->
<span><input class="checkbox op" type="checkbox"  name="" value="done" onclick="runDb('done', '`+idPrint+`', '', 'done');return false;"></span>
<div class="flexCenter"><div class="pre block">${editPrint}</div></div>`;

}

var doubleClickEdit = '';
/*
// double click edit

if (com != 'edit'){
doubleClickEdit = ` ondblclick="runDb('edit', '`+cursor.key+`')" `;
} else {
doubleClickEdit = '';
}*/

var printDaily = ''
// add button option
if (statusDailyPrint == 'daily'){
printDaily = `

<div id="${idPrint}" class="taskItem borderList borderRadius2 light2 break">
<div class="task" ${doubleClickEdit}>

${printTmp}
<div class="block tRight keepTagList notUnderline">
<a href="#" class="keepTag2 border borderRadius2 light3 op xSmall" style="cursor: pointer;" onclick="runDb('daily', '` + cursor.key + `', '', '', 'undaily');return false;" title="pin">p</a>
<a href="#" class="keepTag2 border borderRadius2 light3 op xSmall" style="cursor: pointer;" onclick="runDb('edit', '` + cursor.key + `');return false;" title="edit">e</a>
</div>

</div>
</div>

`;
} else {
print = `

<div id="${idPrint}" class="taskItem borderList borderRadius2 light2 break">
<div class="task" ${doubleClickEdit}>

${printTmp}
<div class="block tRight keepTagList notUnderline">
<a href="#" class="keepTag2 border borderRadius2 light3 op xSmall" style="cursor: pointer;" onclick="runDb('daily', '` + cursor.key + `', '', '', 'daily');return false;" title="pin">p</a>
<a href="#" class="keepTag2 border borderRadius2 light3 op xSmall" style="cursor: pointer;" onclick="runDb('edit', '` + cursor.key + `');return false;" title="edit">e</a>
<a href="#" class="keepTag2 border borderRadius2 light3 op xSmall" style="cursor: pointer;" onclick="confirmCom('del', '` + cursor.key + `');return false;" title="remove">x</a>
</div>

</div>
</div>

`;
}

// gen arr with random not done
if (statusPrint != 'done'){

var print33Tmp = `

<div style="cursor: pointer" onclick="scrollTo33('${idPrint}');return false;">

<div class="taskItem borderList borderRadius2 light2 break">
<div class="task">

<!--<div class="op xSmall">${idPrint}</div>-->
<span><input class="checkbox op" type="checkbox"  name="" value="done" onclick="runDb('done', '` + idPrint + `', '', 'done');return false;"></span>
<div class="flexCenter"><div class="pre block">${textPrint}</div></div>

<div class="block tRight">

</div>

</div>
</div>

</div>

`;






}




if (com == 'search'&&q != ''){

// search start 1
//var qSearch = decodeURIComponent(q);
var qSearch = (q);
qSearch = String(qSearch).toLowerCase();

// rm last symbol if " l".
if (q[q.length - 1] == 'l'&&q[q.length - 2] == ' '){ qSearch = qSearch.slice(0, -2); }
var qData = qData.toLowerCase();


// if tag
if (qSearch[0] == '#'){
qData2 = qData.replaceAll(/,/g, ' ');
if ((qData2+' ').indexOf((qSearch+'')) >= 0){
var subQ = 's1# '+qSearch+' ';
if (statusDailyPrint == 'daily'){
printListPrintDaily += printDaily;
} else {
printListPrint += print;
}
if (statusPrint != 'done'){ randomTodoListArray.push(print33Tmp); }
i++;
total = i;
comMessagePrint = `<span class="bold">found ${q} (${subQ})</span> ${i}`;
}

} else if (qData.indexOf(String(qSearch)) >= 0){
var subQ = 's1 '+qSearch;
if (statusDailyPrint == 'daily'){
printListPrintDaily += printDaily;
} else {
printListPrint += print;
}
if (statusPrint != 'done'){ randomTodoListArray.push(print33Tmp); }
i++;
total = i;
comMessagePrint = `<span class="bold">found ${q} (${subQ})</span> ${i}`;
}



if (comMessagePrint == '') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding2 h1">Probably not found</div>`; }

} else if (com != 'search'&&q == ''){
printListPrintDaily += printDaily;
printListPrint += print;
if (statusPrint != 'done'){ randomTodoListArray.push(print33Tmp); }
}



printDaily = '';
print = '';



cursor.continue();  



} else {



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var randomTask = '';
randomTask = randomTodoListArray[Math.floor(Math.random() * randomTodoListArray.length)];

if (randomTask != 'undefined'&&randomTask != undefined){
randomTask = `
<div class="op block padding1px margin1PxList small">random:</div>

${randomTask}
`;
} else { randomTask = ''; }





tagListPrint = fuTagList(tagListPrint);
if (tagListPrint != ""){
document.getElementById('searchForm').innerHTML = `
<div id="form" class="wrapperL">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft xSmall" for="input">search:</label>
<input id="input" class="padding2 op" type="search" style="text-align: center;" name="q"  autocomplete="off" placeholder="" value="${q}">

<input type="submit" value="search" class="xSmall op submit">

</form>
</div>


<div class="block tCenter padding2 margin2">
<a class="op brand" href="${scriptDir}">start</a>
</div>
`;
}

document.getElementById('tagListPrintId').innerHTML = tagListPrint;
tagListPrint = '';

document.getElementById('result').innerHTML = '';
// print all
//console.log("[ show end Done with cursor ]");



var allOtherTaskMsg = '';
if (printListPrintDaily != ''){
printListPrintDaily = `
<div class="op block padding1px margin1PxList small">pined or daily:</div>
${printListPrintDaily}
`;
if (printListPrint != ''&&printListPrintDaily != ''&&printListPrint != ''){
allOtherTaskMsg = `
<div class="op block padding1px margin1PxList small">other:</div>
`;
}
}


document.getElementById('result').innerHTML = `

<div class="block tCenter padding2List">
<a class="brand" href="${scriptDir}">start</a>
</div>

<div class="block tCenter">
${comMessagePrint}
</div>

<div>
${printListPrintDaily}
</div>

<br>
<div>
${allOtherTaskMsg}
${printListPrint}
</div>

<br>
<div>
${randomTask}
</div>

<div class="op small block padding2 margin tCenter">total: ${todoTotal}</div>

`;




}


}





// clear
comMessagePrint = '';
printListPrintDaily = ''
printListPrint = '';
allOtherTaskMsg = '';


print = '';
printDaily = '';
randomTodoListArray = [];


}



}



// clear
comMessagePrint = '';
printListPrintDaily = ''
printListPrint = '';
allOtherTaskMsg = '';


print = '';
printDaily = '';
randomTodoListArray = [];



// end main
}






















var today = new Date();
var d = String(today.getDate());

if (localStorage.getItem("dayForUnchekDoneInTodoList") != d){
runDb('uncheckAllDaily');
localStorage.setItem("dayForUnchekDoneInTodoList", d);
}



print2 = `

<div>

<label class="block tLeft padding1px margin1PxList op small">+ add:</label>
<form id="anchorIdFrom" class="padding2List marginList" action="index.html">
<input id="inputTask" class="padding2" type="text" name="q" autocomplete="off" placeholder=" input">
<input type="hidden" name="com" value="add">
<div id="option"></div>
<div class="submit tCenter small button block" style="cursor: pointer;" onclick="submitLink();return false;">submit</div>
</form>

<div class="block tRight padding">
<div class="block padding2"></div>
<!--<span class="op xSmall">commands:</span>-->
<a href="#" class="inlineBlock padding2 op border borderRadius2 light small brand notUnderline" style="cursor: pointer" onclick="confirmCom('delAllDone');return false;">remove all done (not pined)</a>
<a href="#" class="inlineBlock padding2 op border borderRadius2 light small margin2List brand notUnderline" style="cursor: pointer" onclick="confirmCom('clear');return false;">remove all</a>



<br>

<div class="block tRight xSmall op">
Check mark in the pinned or daily items is unchecked automatically every new day.
</div>

</div>



<div class="block padding2 margin2"></div>

<div class="center">
<div class="keepTagList">
<div id="tagListPrintId"></div>
</div>
</div>

<br>

</div>

<div id="searchForm"></div>

`;


var geturl = window.location;
var url = new URL(geturl);
var textInput = url.searchParams.get("q");
var comInput = url.searchParams.get("com");
var idInput = url.searchParams.get("id");

textInput = fuMClearText(textInput);
comInput = fuMClearText(comInput);
idInput = fuMClearText(idInput);

if (comInput == 'add'||comInput == 'edit'){

textInput = (textInput);
/*textInput = decodeURIComponent(textInput);
textInput = encodeURIComponent(textInput);*/

if (textInput != null&&textInput != "null"&&textInput != ''){

if (comInput == 'edit'){ comInput = 'update'; }
runDb(comInput, idInput, textInput);

if (textInput != ''){
/*var sTimeRedir = 500; // fix probably double submit
setTimeout(function(){
//window.location.href = '?#stopReSubmit';
window.location.replace('?#stopReSubmit',);
//location.hash = '#anchorIdFrom'; //https://stackoverflow.com/questions/15736763/window-location-href-not-working-when-href-is-same-page
}, sTimeRedir);*/
}


}

}


document.getElementById('result2').innerHTML = print2;






function submitLink(textInput){

if (document.getElementById('inputTask') != null){
textInput = document.getElementById('inputTask').value;
}

if (textInput != ""){
textInput = fuMClearText(textInput);
runDb('add', '', textInput);
document.getElementById("inputTask").value = '';
document.getElementById("option").innerHTML = '';
}
}

function submitLinkEdit(){
idInput = document.getElementById('idInputE').value;
textInput = document.getElementById('textInputE').value;

idInput = fuMClearText(idInput);
textInput = fuMClearText(textInput);

textInput = (textInput);
/*textInput = decodeURIComponent(textInput);
textInput = encodeURIComponent(textInput);*/

//alert('test'+idInput+textInput);
runDb('update', idInput, textInput);
//document.getElementById("inputTaskEdit").value = '';
}

function scrollTo33(id){
var elmntToView = document.getElementById("sectionId");
if (document.getElementById(id) != null){
document.getElementById(id).scrollIntoView(); 
}
}

function confirmCom(com, id){
//https://stackoverflow.com/questions/10462839/how-to-display-a-confirmation-dialog-when-clicking-an-a-link
if (confirm('Are you sure?') == true){
runDb(com, id);
}
}

/*
function backupInJson(printId, jsonArr, jsonName){
// https://stackoverflow.com/questions/26158468/create-json-file-using-blob
var jsonse = JSON.stringify(jsonArr);
var blob = new Blob([jsonse], {type: "application/json"});
var url  = URL.createObjectURL(blob);

var a = document.createElement('a');
a.href        = url;
a.download    = jsonName+".json";
a.textContent = "Download backup json";

document.getElementById(printId).appendChild(a);
}

*/























function highlightText(text){

text = [...text];

let forSplit = [
"*", "{", "}", "(", ")", "[", "[", "•", "=", "«", "»", "☞",
`
`, " "
]

var text2 = '';
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if (item == item2){
item = conf["confSymbolForSplit"] + item + conf["confSymbolForSplit"];
}
});
text2 += item;
});
text2 = text2.replaceAll("http", conf["confSymbolForSplit"] + "http");

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(conf["confSymbolForSplit"]);
myArray.forEach((item) => {


let checkEmbedEmpty = item.split('/');
//if (item.split('/').length > 4){
if (checkEmbedEmpty[3]){
var host = item.split('/');
}

//if (item.search("http") != -1){
if (item.slice(0, 4) == 'http'&&item.search("http|://|www.") != -1){

checkText = false;
if (host != undefined){

/*delme var ico = `https://www.google.com/s2/favicons?domain_url=${host[2]}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
ico = `<img class="ico2 op" src="${ico}" alt="icon">`;
if (localStorage.getItem('confDataCollection') != 'on'){ ico = '🔗'; }*/

if (targetOption == 'blank'){
item = `<a class="brand break2 insertIcon" target="_blank" href="${item}">${item}</a>`;
} else {
item = `<a class="brand break2 insertIcon" href="${item}">${item}</a>`;
}

} else {
item = `<a class="brand break2" target="_blank" href="${item}">${item}</a>`;
}
}


if (item[0] == '/'||item[0] == '/'&&item.search(".htm") != -1||item.search("./") != -1&&item.search(".htm") != -1&&item.search("http") == -1){

if (targetOption == 'blank'){
/*item = `<a rel="nofollow" href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a class="brand insertIcon" target="_blank" href="${item}">${item}</a>`;
} else {
item = `<a class="brand insertIcon" href="${item}">${item}</a>`;
}

}


//add tag
if (item[0] == '#'){
item = item.replaceAll(/#/g, "");
item = `<a class="brand" rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}


text += item;



});


return text;
}





// other functions 
// tagList
function fuTagList(tagList2){
let color = 'silver';
let size = '';

var tagList = '';



tagList2 = tagList2.replaceAll(/(?:\r\n|\r|\n)/g, ' ');
tagList2 = tagList2.replaceAll(/,/g, conf["confSymbolForSplit"]);
tagList2 = tagList2.replaceAll(/ /g, conf["confSymbolForSplit"]);
tagList2 = tagList2.replaceAll('·', '');
tagList2 = tagList2.replaceAll('.', ' ');

tagList2 = ''+tagList2+''.replaceAll(',', conf["confSymbolForSplit"]);
tagList2 = ''+tagList2+''.replaceAll(' ', conf["confSymbolForSplit"]);







tagList2 = tagList2.split(conf["confSymbolForSplit"]);

/*
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagList2.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});*/




var tagAverage = 0;
var tagTotal = 0;

var tagCheck = '';
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// make uniq and count, object
var tagListCount = {};
tagList2.forEach(function (x) {
if (x != null&&x != ''&&x[0] == '#'){
tagListCount[x] = (tagListCount[x] || 0) + 1;
tagCheck = 'found';
}
});






// Taglist limit
//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// sort object by value
let entries = Object.entries(tagListCount);
let tagListCountSorted = entries.sort((a, b) => a[1] - b[1]);
tagListCountSorted.reverse();


// Taglist limit (cut array) with sorted tag and convert to old object, sorted previos
tagListCountLimited = {};
tagListCountSorted.forEach(function (item, key) {
if (key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});


// sort
// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
tagListCount = {};
tagListCount = Object.keys(tagListCountLimited).sort().reduce(
  (obj, key) => { 
    obj[key] = tagListCountLimited[key]; 
    return obj;
  }, 
  {}
);
// end Taglist limit







/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal+x;
});
tagAverage = tagTotal/Object.values(tagListCount).length;




var tagSize = '';
var tagColor = '';

function fuTag(tagCount){
//let tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
let tagPercentage = (Math.floor((tagCount * 100) / tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
//console.log(tagPercentage);

// tag font-size and color
switch (true) {

case tagPercentage >= 500:
tagColor = "var(--red2)";
tagSize = "150%";
break;

case tagPercentage >= 300:
tagColor = "var(--orange2)";
tagSize = "140%";
break;

case tagPercentage >= 250:
tagColor = "var(--yellow2)";
tagSize = "130%";
break;

case tagPercentage >= 100:
tagColor = "var(--green2)";
tagSize = "120%";
break;

case tagPercentage >= 80:
tagColor = "var(--blue2)";
tagSize = "115%";
break;

case tagPercentage >= 50:
tagColor = "var(--indigo2)";
tagSize = "110%";
break;

case tagPercentage >= 30:
tagColor = "var(--violet2)";
tagSize = "100%";
break;

default:
tagColor = "var(--c2)";
tagSize = "90%";
}

//console.log(tagColor);
//return tagColor;
}



//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare)

let hlClassList = '';
// https://masteringjs.io/tutorials/fundamentals/foreach-object
sortedTags.forEach(entry => {
const [key, value] = entry;



tag = key.trim();
tagCount = value;



fuTag(tagCount);




if (tag != ''){
let printTag = tag;
let printTag2 = tag.replaceAll(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = '';
if (printTag2[0] != undefined){
hlClass = 'hlClass'+printTag2[0].toLowerCase();
hlClassList += printTag2[0].toLowerCase();
}



if (q == tag){
tagList += `

<a class="keepTag light border borderRadius2 ${hlClass} c4R" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; font-size: ${tagSize} !important;">${printTag}</a>

`;
} else {

tagList += `

<a class="keepTag light border borderRadius2 ${hlClass}" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize} !important;">${printTag}</a>

`;
}
}
});

hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass'+item;
item = item.toUpperCase();
hlClassList += `
<a class="keepTag light border borderRadius2 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}" id="${hlClass}">${item}</a>
`;
});

tagList = `



<div class="block op small padding2 tCenter">Tag cloud:</div>



<div class="keepTagList tagListPrintId padding2List notUnderline">

` + tagList + `



</div>

<div class="block tCenter notUnderline" styel="width: 100%;">
${hlClassList}
</div>

<!--<span class="block padding2"></span>
<span class="block op xSmall padding2List">system tags:</span>
<a class="keepTag2 op border borderRadius2 light small" href="?q=%23tDone">#tDone</a>
<a class="keepTag2 op border borderRadius2 light small" href="?q=%23tNotDone">#tNotDone</a>
<a class="keepTag2 op border borderRadius2 light small" href="?q=%23tDaily">#tDaily</a>
<a class="keepTag2 op border borderRadius2 light small" href="?q=%23tNotDaily">#tNotDaily</a>-->

`;


if (tagCheck != 'found'){ tagList = ''; }

return tagList;
}
//  end tag list



// hlwClass
function hlwClassAdd(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("highlight");
i++;
}
}


function hlwClassRemove(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("highlight");
i++;
}
}
// end hlwClass
