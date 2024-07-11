"use script";

const displayTime = document.querySelector('.displayTime');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let secs = 0;
let min = 0;
let hours = 0;

startBtn.addEventListener('click', () => {
   if(paused){
       paused = false;
       startTime = Date.now() - elapsedTime;
       intervalId = setInterval(updateTime, 1000);
    }    
})

stopBtn.addEventListener('click', () => {
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})

resetBtn.addEventListener('click', () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hours = 0;
    min = 0;
    hours = 0;
    displayTime.textContent = "00:00:00";
})


function updateTime() {
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    min = Math.floor((elapsedTime * 60) % 60);
    hours = Math.floor((elapsedTime * (1000 * 60 * 60)) % 60);
    
    secs = addZero(secs);
    min = addZero(min);
    hours = addZero(hours);
    displayTime.textContent = `${hours}:${min}:${secs}`;

    if ( secs > 60) {
        min += 1;
    }else if(min > 60) {
        hours += 1;
    }

    function addZero(unit) {
        return (("0" + unit).length > 2 ? unit : "0" + unit)
    } 
}



