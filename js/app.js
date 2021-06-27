

var timeStart = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;
var counter = document.getElementById("countdown");

displayTime()

var x = setInterval(displayTime,1000)

function displayTime() {
   
var current = new Date().getTime();   
var timeLeft = timeStart - current;
var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    
    counter.innerHTML = `
    <div class="timers">
    <span class="timer">${days.toString().padStart(2, '0')}</span>
     <span class="timer">${hours.toString().padStart(2, '0')}</span>
     <span class="timer">${minutes.toString().padStart(2, '0')}</span>
    <span class="timer">${seconds.toString().padStart(2, '0')}</span>
    </div>
    
    <div class="labels">
    <span class="label">Days</span> <span id="hours" class="label">Hours</span> <span id="minutes" class="label">Minutes</span> <span class="label">Seconds</span>
    </div>`
}
