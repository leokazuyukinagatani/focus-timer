const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


let minutes, seconds;

const countDown = () => {
  setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if(seconds <= 0) {
      if(seconds==0) {
        if(minutes==0) {
          return;
        }
        minutesDisplay.textContent = String(minutes - 1).padStart(2,"0");
      }
      seconds = 60;
    }
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2,"0");
   
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
});

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');
});

buttonSet.addEventListener('click', () => {
  minutes = Number(prompt("Defina o valor do contador:"));
  minutesDisplay.textContent = String(minutes).padStart(2,"0");
})

buttonSoundOff.addEventListener('click',() => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
});

buttonSoundOn.addEventListener('click',() => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
});