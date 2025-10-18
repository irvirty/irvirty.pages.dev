// v.1.0.0




// WPM v.1.2.0
if (document.getElementById("story") != null){ 
var inputA2 = document.getElementById("story");
inputA2.addEventListener('input', getWpm);
}

// new core 2

let dateArr = [];
let dateArrLast = [];
const wordLengthLimit = 5.1;

let roundStatus = "start";

let taskLimit = 8 * 3;

function getWpm(e){
//if (e.target.value == ""){ dateArr = []; } //fixme
if (dateArrLast[0] == undefined){ dateArrLast[0] =  Date.now(); }
dateArr.push(((Date.now() - dateArrLast[0]) / 1000).toFixed(3));
//console.table(wpmTime);
dateArrLast[0] = Date.now();

var wpm = 0;
if (dateArr.length >= 2){
dateArr.forEach(function(item) {
wpm = Number(wpm) + Number(item);
});

var wpmAverageSec = wpm / dateArr.length;
wpm =  (1 * 60 / wpmAverageSec) / wordLengthLimit;
wpm = Math.round(wpm);
}

if (document.getElementById("wpm") != null){
document.getElementById("wpm").innerHTML = wpm;
}

dateArr = dateArr.slice(-500);
}









// task



function genTask(){


//https://en.wikipedia.org/wiki/Most_common_words_in_English
//https://en.wiktionary.org/wiki/Appendix:1000_basic_English_words
var task = `a able about above across act active activity add afraid after again age ago agree air all alone along already also always am amount an and angry another answer any anyone anything anytime appear apple are area arm army around arrive art as ask at ate attack aunt autumn away baby back bad bag ball bank base basket bath be bean bear beautiful because bed bedroom been beer before begin behave behind bell below besides best better between big bird birth birthday bit bite black bleed block blood blow blue board boat body boil bone book border born borrow both bottle bottom bowl box boy branch brave bread break breakfast breathe bridge bright bring brother brown brush build burn bus business busy but buy by cake call came can candle cap car card care careful careless carry case cat catch central century certain chair chance change chase cheap cheese chicken child children chocolate choice choose circle city class clean clear clever climb clock close cloth clothes cloud cloudy coat coffee coin cold collect color comb come comfortable common company compare complete computer condition contain continue control cook cool copper corn corner correct cost could count country course cover crash cross cry cup cupboard cut dance dangerous dark daughter day decide decrease deep deer depend desk destroy develop did different difficult dinner direction dirty discover dish do does dog don't done door double down draw dream dress drink drive drop dry duck dust duty each ear early earn earth east easy eat education effect egg eight either electric elephant else empty end enemy enjoy enough enter entrance equal escape even evening event ever every everybody everyone exact examination example except excited exercise expect expensive explain extremely eye face fact fail fall false family famous far farm fast fat father fault fear feed feel female fever few fight fill film find fine finger finish fire first fish fit five fix flag flat float floor flour flower fly fold food fool foot football for force foreign forest forget forgive fork form found four fox free freedom freeze fresh friend friendly from front fruit full fun funny furniture further future game garden gate gave general gentleman get gift give glad glass go goat god goes going gold good goodbye got government grandfather grandmother grass grave gray great green ground group grow gun had hair half hall hammer hand happen happy hard has hat hate have he head healthy hear heart heaven heavy height hello help hen her here hers hide high hill him his hit hobby hold hole holiday home hope horse hospital hot hotel hour house how hundred hungry hurry hurt husband I ice idea if important in increase inside into introduce invent invite iron is island it its jelly job join juice jump just keep key kind king kitchen knee knife knock know ladder lady lamp land large last late lately laugh lazy lead leaf learn leave left leg lend length less lesson let letter library lie life light like lion lip list listen little live lock lonely long look lose lot love low lower luck machine made main make male man many map mark market marry matter may me meal mean measure meat medicine meet member mention method middle milk million mind minute miss mistake mix model modern moment money monkey month moon more morning most mother mountain mouth move much music must my myself name narrow nation nature near nearly neck need needle neighbor neither net never new news newspaper next nice night nine no noble noise none nor north nose not nothing notice now number obey object ocean of off offer office often oil old on once one only open opposite or orange order other our out outside over own page pain paint pair pan paper parent park part partner party pass past path pay peace pen pencil people pepper per perfect period person petrol photograph piano pick picture piece pig pin pink place plane plant plastic plate play please pleased plenty pocket point poison police polite pool poor popular position possible potato pour power present press pretty prevent price prince prison private prize probably problem produce promise proper protect provide public pull punish pupil push put queen question quick quiet quite radio rain rainy raise ran reach read ready real really receive record red remember remind remove rent repair repeat reply report rest restaurant result return rice rich ride right ring rise road rob rock room round rubber rude rule ruler run rush sad safe said sail salt same sand save saw say school science scissors search seat second see seem sell send sentence serve seven several sex shade shadow shake shall shape share sharp she sheep sheet shelf shine ship shirt shoe shoot shop short should shoulder shout show sick side signal silence silly silver similar simple since sing single sink sister sit six size skill skin skirt sky sleep slip slow small smell smile smoke snow so soap sock soft some someone something sometimes son soon sorry sound soup south space speak special speed spell spend spoon sport spread spring square stamp stand star start station stay steal steam step still stomach stone stop store storm story strange street strong structure student study stupid subject substance successful such sudden sugar suitable summer sun sunny support sure surprise sweet swim sword table take talk tall taste taxi tea teach team tear telephone television tell ten tennis terrible test than thank that the their them then there therefore these they thick thin thing think third this those though threat three tidy tie time title to today toe together tomorrow tonight too tool tooth top total touch town train tram travel tree trouble true trust try turn twice two type ugly uncle under understand unit until up upon us use useful usual usually vegetable very village visit voice wait wake walk want warm was wash waste watch water way we weak wear weather wedding week weight welcome well went were west wet what wheel when where which while white who why wide wife wild will win wind window wine winter wire wise wish with without woman wonder word work world worry would write yard year yell yellow yes yesterday yet you young your zero zoo`;

task = fuMShuffleItem(task, " ");
//task = task.slice(0, 500);

task = task.split(" ");
//return task = task[0] + " " + task[1] + " " + task[2] + " " + task[3] + " " + task[4] + " " + task[5];
//console.log(task);

let taskTmp = "";
let n = 0;

while (n < taskLimit) {
taskTmp += task[n] + " ";
n++;
}

return taskTmp.trim();


}


var task = genTask();
var letters = [...task]; 
document.getElementById("task").innerHTML = task;

keyPressedMakeAni(task[0]);

// WPM v.1.2.0
if (document.getElementById("story") != null){
var inputA2 = document.getElementById("story");
inputA2.addEventListener('input', checkTask);
//inputA2.addEventListener('change', checkTask);
//document.getElementById("story").focus();
}


function checkTask(e){
//console.log(e.target.value);


//document.getElementsByClassName("input")[0].innerHTML = '';


let q = e.target.value;



//let q = document.getElementById("story").value;
var answerArr = [...q]; // convert input string to array for check
var text = '';

letters = [...task]; 


if ([...q].length >= [...task].length){
//fuMReload();
task = genTask();
letters = [...task]; 
answerArr = [...q]; 
text = '';
document.getElementById("task").innerHTML = task;
document.getElementById("story").value = "";
roundStatus = "end";
}


// hint
//keyPressedMakeAni2(task[q.length]);

var error = 0;

var acurancy = 100;
var errorColor = '';
var id = 'id0';
var text11 = '';
var text33 = '';
var lastError = '';
const errorLimit = 500 - 1;

//console.log(answerArr[index] + '=[' + item + ']');


letters.forEach(myFunctionCheckAll);



function myFunctionCheckAll(item, index) {

//text += item; 
//console.log(item);
//console.log(answerArr[index]);
var check = 'no';
if (item == answerArr[index]&&error <= errorLimit){
check = 'yes';
//id = 'id' + index;
lastEror = 'green';

item = replaceCode(item);
text11 += item;
/*if (item == ' '){
text11 += item;
} else {
text11 += item;
}*/


} else if (item != answerArr[index]&&answerArr[index] != undefined&&error <= errorLimit){
check = 'yes';
lastEror = 'red';
item = replaceCode(item);

switch(item) {
case '\r\n':
case '\r':
case '\n':
text11 += `<span class="red">⏎\n</span>`;
break;
case ' ':
text11 += '<span style="background-color: var(--red);">' + item + '</span>';
break;
default:
text11 += '<span class="red">' + item + '</span>';
}


//console.log(answerArr.length - 1);
//console.log(index);
//console.log(answerArr.length - 1 + '=' + index);

/*
if (answerArr.length  <= letters.length){
inputGetKey.onkeydown = function(e) {

if (answerArr.length - 1 == index){
var key = e.keyCode || e.charCode;
var key2 = e.key; 
if (key != '229'&&key != 8&&key != 46&&key2 != 'Backspace'&&key2 != 'Delete' ){
totalError++;
}
// mobile 
if (key == '229'&&lastMaxInputlength == answerArr.length&&letters[lastMaxInputlength - 1] != answerArr[lastMaxInputlength - 1]){ totalError++; }

}
}}*/
	
	
/*if (answerArr.length  <= letters.length){
totalError++;
}*/
error++;

}


if (check == 'no'){
text33 += item; 
}

check = '';
}



text = '<span class=" green typeUnderline ">' + text11 + '</span><span id="scrollTo">&#8288;</span>' + replaceCode(text33); //&#8288; - fix webkit jump
document.getElementById("task").innerHTML = text;
//document.getElementById("scrollTo").scrollIntoView(true);

if (roundStatus == "end"){
document.getElementById("task").innerHTML = task;
roundStatus = "start";
}


}









function replaceCode(a){
a = a.replaceAll(/</g, "&lt;");
a = a.replaceAll(/>/g, "&gt;");
return a;
}
