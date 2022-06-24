import Timer from './timer.js';
import Controls from './controls.js';
import Sounds from './sounds.js';
import Events from './events.js';

import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from './elements.js';


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

Events({ controls, timer, sound });



