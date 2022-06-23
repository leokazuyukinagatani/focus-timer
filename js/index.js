import { Timer } from './timer.js';
import { Controls } from './controls.js';


const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = 25;

let timerTimeOut;
const controls = Controls(
  {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
  }
);

const timer = Timer(
{
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  controls,
});



buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');
  timer.countDown();
});

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  timer.resetTimeOut();
});

buttonStop.addEventListener('click', () => {
  controls.resetControls();
  timer.resetTimeOut();
  timer.updateTimeDisplay(minutes,0);
});

buttonSet.addEventListener('click', () => {
  minutes = Number(prompt("Defina o valor do contador:"));
  timer.updateTimeDisplay(minutes,0);
})

buttonSoundOff.addEventListener('click',() => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
});

buttonSoundOn.addEventListener('click',() => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
});
