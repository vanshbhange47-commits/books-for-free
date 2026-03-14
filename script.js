document.addEventListener("DOMContentLoaded", function(){

let seconds = 0;
let timer = null;
let running = false;

// open stopwatch
document.getElementById("openStopwatchBtn").onclick = function(){
document.getElementById("stopwatch-box").style.display = "block";
};

// start timer
window.startTimer = function(){
if(!running){
running = true;
timer = setInterval(function(){

seconds++;

let hrs = Math.floor(seconds / 3600);
let mins = Math.floor((seconds % 3600) / 60);
let secs = seconds % 60;

hrs = String(hrs).padStart(2,'0');
mins = String(mins).padStart(2,'0');
secs = String(secs).padStart(2,'0');

document.getElementById("time").innerText =
hrs + ":" + mins + ":" + secs;

},1000);
}
};

// stop timer
window.stopTimer = function(){
clearInterval(timer);
running = false;
};

// reset timer
window.resetTimer = function(){
clearInterval(timer);
running = false;
seconds = 0;
document.getElementById("time").innerText = "00:00:00";
};

});