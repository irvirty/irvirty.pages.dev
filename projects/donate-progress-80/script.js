// v.1.0.0


let donateGoal = 25;
let donateAmount = 5;
let donateProgressPercentage = (donateAmount * 100) / donateGoal;

let donateProgressBg = "";
if (donateProgressPercentage > 0){ donateProgressBg = " bg4 "; }

if (document.getElementById("donateProgress") != null){
document.getElementById("donateProgress").innerHTML = `
<div class=" ` + donateProgressBg + ` borderRadius2 small padding border3 tCenter" style="width: ` + donateProgressPercentage + `%; max-width: 100%; min-width: 45px; z-index: 1; position: abosolute;"><div style="min-width="120px">` + donateProgressPercentage + `%</div></div>`;
}

if (document.getElementById("donateProgress") != null){
document.getElementById("goal").innerHTML = donateGoal;
}
