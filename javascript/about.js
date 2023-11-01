// on load
window.addEventListener("load", function () {
    document.getElementById("age").innerHTML = `${ageCalc("07/30/2000")}`;
    setInterval(() => document.getElementById("currenttime").innerHTML = `${currentTime()}`, 1);
});