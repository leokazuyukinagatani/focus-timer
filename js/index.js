import Timer from './timer.js';
import Controls from './controls.js';
import Sounds from './sounds.js';

import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from './elements.js';


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

const sound = Sounds();

buttonPlay.addEventListener('click', () => {
  controls.play();
  timer.countDown();
  sound.pressButton();
});

buttonPause.addEventListener('click', () => {
  controls.pause();
  timer.hold();
  sound.pressButton();

});

buttonStop.addEventListener('click', () => {
  controls.reset();
  timer.hold();
  timer.updateMinutes(minutes);
  sound.pressButton();

});

buttonSet.addEventListener('click', () => {
  minutes = controls.set();
  timer.updateMinutes(minutes);
})

buttonSoundOff.addEventListener('click',() => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
  sound.bgAudio.pause();

});

buttonSoundOn.addEventListener('click',() => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
  sound.bgAudio.play();

});
