// v.1.0.0


var print = `
result
`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}

if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
} else {

if (window.confirm("Embedding is disabled. Open cookie settings?")) {
window.location.href = `${confD}pages/settings/#confDataCollection`;
} else {
//history.back();
window.location.href = `${confD}`;
}

}
