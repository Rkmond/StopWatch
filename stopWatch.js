let minutes = 0;
let seconds = 0;
let fraction = 0;
let timer;
let lap = 0;

//Accessing all the elements from html
const minutesEl = document.getElementById("minutes").getElementsByTagName("span")[0];
const secondsEl = document.getElementById("seconds").getElementsByTagName("span")[0];
const fractionEl = document.getElementById("fraction").getElementsByTagName("span")[0];

const startBtn = document.getElementById("start");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");

const lapEl = document.getElementById("lapse-record")

//For getting output in propper format
function formatTime(time){
    if(time>9){
        return time
    }
    else{
        return `0${time}`
    }
};

//Updates time and displays updated time 
function updateTime(){
    if(fraction>=100){
        seconds++;
        fraction = 0;
    };
    if(seconds>=60){
        minutes++;
        seconds = 0;
    };
    secondsEl.textContent = formatTime(seconds);
    minutesEl.textContent = formatTime(minutes);
    fractionEl.textContent = formatTime(fraction);
};

//timer for 1s interval
function startTimer(){
    timer = setInterval(()=>{
        fraction++;
        updateTime();
    }, 10)
};

//for adding a new lap
function addLap(){
    let newLap = document.createElement('p');
    lap++;
    newLap.textContent = `${lap}. ${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(fraction)}`;
    lapEl.appendChild(newLap)
};

//start button event
startBtn.addEventListener('click', ()=>{
    if(startBtn.textContent==="Start"){
        startTimer();
        startBtn.textContent = "Pause"
    }else{
        clearInterval(timer);
        startBtn.textContent = "Start"
    }   
});

//reset button event
resetBtn.addEventListener('click', ()=>{
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    fraction = 0;
    updateTime();
    startBtn.textContent = "Start"
    lapEl.textContent = "";
    lap = 0;
});

//lap button event
lapBtn.addEventListener('click', ()=>{
    if(startBtn.textContent==="Pause"){
        addLap();
    }
});
