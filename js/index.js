import Timer from './timer.js';
import Controls from './controls.js';


const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = Number(minutesDisplay.textContent);



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
  resetControls: controls.reset,
});



buttonPlay.addEventListener('click', () => {
  controls.play();
  timer.countDown();
});

buttonPause.addEventListener('click', () => {
  controls.pause();
  timer.hold();
});

buttonStop.addEventListener('click', () => {
  controls.reset();
  timer.hold();
  timer.updateMinutes(minutes);
});

buttonSet.addEventListener('click', () => {
  minutes = controls.set();
  timer.updateMinutes(minutes);
})

buttonSoundOff.addEventListener('click',() => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
});

buttonSoundOn.addEventListener('click',() => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
});
