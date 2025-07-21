let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.getElementById("display")
let intervalId
let hoursCount = document.getElementById('hours');
let minutesCount = document.getElementById('minutes');
let secondsCount = document.getElementById('secondsContent');

let darkMode = document.getElementById('darkMode')
let lightMode = document.getElementById('lightMode')
darkMode.style.display = 'none'
let body = document.querySelector('body')
function start() {
    if (!intervalId) {
        intervalId = setInterval(() => {
           seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes+=1;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            // Atualiza os elementos na tela
            secondsCount.textContent = `${seconds}s`;
            minutesCount.textContent = `${minutes}m`;
            hoursCount.textContent = `${hours}h`;

          
        }, 1000);
    }
}
function pause(){
    clearInterval(intervalId)
    intervalId = null;
}
function reset(){
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
   secondsCount.textContent = `${seconds}s`;
    minutesCount.textContent = `${minutes}m`;
    hoursCount.textContent = `${hours}h`;
 
}
function changeMode(){

let footer = document.querySelector('footer')
 if (lightMode.style.display !== 'none') {
    lightMode.style.display = 'none';
    darkMode.style.display = 'flex';
    body.style.background = '#05020fff';
  } else {
    lightMode.style.display = 'flex';
    darkMode.style.display = 'none';
    body.style.background = '#D3D3D3';  
  }
}

function changeRed(){
    body.style.background = '#CD5C5C';
   
}
function changeBlue(){
    body.style.background = '#191970';
 
}
function chooseColor(){
    let choose= document.getElementById('chooseColor')
    body.style.background = choose.value;
 
}
