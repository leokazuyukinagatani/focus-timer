const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


let minutes = 25;
let seconds = 0;

let timerTimeOut;

const resetControls = () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');
}

const resetTimeOut = () => {
  clearTimeout(timerTimeOut);
}

const updateTimeDisplay = (minutes, seconds) => {
  minutesDisplay.textContent = String(minutes).padStart(2,"0");
  secondsDisplay.textContent = String(seconds).padStart(2,"0");
}

const countDown = () => {
  timerTimeOut = setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if(seconds == 0 && minutes == 0){
      resetControls();
      return;
    }else{
      if(seconds == 0) {
        minutes--;
        updateTimeDisplay(minutes,seconds);
        seconds = 10;
  
      }
      seconds--;
  
      updateTimeDisplay(minutes,seconds);
    }
  
    countDown();
  },
   1000);
}




buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');
  countDown();
});

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  resetTimeOut();
});

buttonStop.addEventListener('click', () => {
  resetControls();
  resetTimeOut();
  updateTimeDisplay(minutes,0);
});

buttonSet.addEventListener('click', () => {
  minutes = Number(prompt("Defina o valor do contador:"));
  updateTimeDisplay(minutes,0);
})

buttonSoundOff.addEventListener('click',() => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
});

buttonSoundOn.addEventListener('click',() => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
});