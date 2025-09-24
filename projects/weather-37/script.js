// Weather widget v.1.0.3

if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
var result = [];

var apiWeather = "https://api.open-meteo.com/v1/forecast?latitude=[latitude]&longitude=[longitude]&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

var apiLocation = "https://ipapi.co/json/";




var weatherCode = {
"0":"⋆｡˚️ Clear sky",
"1":"⛅ Mainly clear, partly cloudy, and overcast",
"2":"⛅ Mainly clear, partly cloudy, and overcast",
"3":"⛅ Mainly clear, partly cloudy, and overcast",
"45":"🌫🌁️ Fog and depositing rime fog",
"48":"🌫️🌁 Fog and depositing rime fog",
"51":"🌫️🌁 Drizzle: Light, moderate, and dense intensity",
"53":"🌫️🌁 Drizzle: Light, moderate, and dense intensity",
"55":"🌫️🌁 Drizzle: Light, moderate, and dense intensity",
"56":"🌧️ Freezing Drizzle: Light and dense intensity",
"57":"🌧️ Freezing Drizzle: Light and dense intensity",
"61":"🌧️ Rain: Slight, moderate and heavy intensity",
"63":"🌧️ Rain: Slight, moderate and heavy intensity",
"65":"🌧️ Rain: Slight, moderate and heavy intensity",
"66":"🌧️ Freezing Rain: Light and heavy intensity",
"67":"🌧️ Freezing Rain: Light and heavy intensity",
"71":"❄️ Snow fall: Slight, moderate, and heavy intensity",
"73":"❄️ Snow fall: Slight, moderate, and heavy intensity",
"75":"❄️ Snow fall: Slight, moderate, and heavy intensity",
"77":"❄️ Snow grains",
"80":"🌧️ Rain showers: Slight, moderate, and violent",
"81":"🌧️ Rain showers: Slight, moderate, and violent",
"82":"🌧️ Rain showers: Slight, moderate, and violent",
"85":"❄️ Snow showers slight and heavy",
"86":"❄️ Snow showers slight and heavy",
"95":"⛈️ Thunderstorm: Slight or moderate",
"96":"⛈️ Thunderstorm with slight and heavy hail",
"99":"⛈️ Thunderstorm with slight and heavy hail"
};






function printWeather(){

result[0] += `

<div class="block op margin2 xSmall">
api:<br>
<a class="brand" href="https://open-meteo.com/">open-meteo.com</a>,
<a class="brand" href="https://ipapi.co/">ipapi.co</a>
</div>
`;

document.getElementById("result").innerHTML = result[0];
}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function weather(apiWeather2){
async function logJSONData() {
const response = await fetch(apiWeather2);
const jsonData = await response.json();

//console.table(jsonData);
//console.log(jsonData);
if(logJSONData != ""){ result[0] += '<div><h2>' + jsonData['current_weather']['temperature']+'°C, ' +jsonData['current_weather']['windspeed'] + 'Km/h </h2>' + `
<b><!--${jsonData['current_weather']['weathercode']} -->${weatherCode[jsonData['current_weather']['weathercode']]}</b><div class="padding2 margin2"></div></div>
`;
printWeather(jsonData);
}
}
logJSONData();

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

}

/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
const jsonData = this.responseText;

//console.log(jsonData);
if(jsonData != ''){
result[0] = `
<h1 class="op">${jsonData['city']},
${jsonData['country']}</h1>
`;

apiWeather = apiWeather.replaceAll('[latitude]', jsonData['lat']);
apiWeather = apiWeather.replaceAll('[longitude]', jsonData['lon']);
//console.log(apiWeather);

weather(apiWeather);
}
    }
};
xmlhttp.open("GET", apiLocation, true);
xmlhttp.send();*/


async function getLocation() {
const response = await fetch(apiLocation);
const jsonData = await response.json();

//console.log(jsonData);
if(jsonData != ''){
result[0] = `
<h1 class="op">${jsonData['city']},
${jsonData['country']}</h1>
`;

apiWeather = apiWeather.replaceAll('[latitude]', jsonData['latitude']);
apiWeather = apiWeather.replaceAll('[longitude]', jsonData['longitude']);
//console.log(apiWeather);

weather(apiWeather);
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
}


getLocation();

}
