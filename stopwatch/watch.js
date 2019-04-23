let seconds = 00;
let tens = 00;
let appendSeconds = document.getElementById("seconds");
let appendTens = document.getElementById("tens");
let buttonstart = document.getElementById("buttonstart");
let buttonstop = document.getElementById("buttonstop");
let buttonreset = document.getElementById("buttonreset");
let time;
buttonstart.onclick = function () {
    clearInterval(time);
    time = setInterval(starttime, 10);
}
buttonstop.onclick = function () {
    clearInterval(time);
}
buttonreset.onclick = function () {
    clearInterval(time);
    seconds = "00";
    tens = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}
function starttime() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    } if (tens > 9) {
        appendTens.innerHTML = tens;
    } if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    } if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}