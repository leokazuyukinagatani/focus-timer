import { 
  buttonPlay, 
  buttonPause, 
  buttonStop, 
  buttonSet, 
  buttonSoundOn,
  buttonSoundOff 
} from "./elements.js";

export default function Events (
  {
  controls,
  timer,
  sound
  }) {

  let minutes = 25;

  const play = () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
  }

  const pause = () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  }
  
  const stop = () => {
    controls.reset();
    timer.hold();
    timer.updateMinutes(minutes);
    sound.pressButton();
  }

  const set = () => {
    minutes = controls.set();
    timer.updateMinutes(minutes);
  }

  const soundOff = () => {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
    sound.bgAudio.play();
  }
  
  const soundOn = () => {
    buttonSoundOff.classList.remove('hide');
    buttonSoundOn.classList.add('hide');
    sound.bgAudio.pause();  
  
  }

  buttonPlay.addEventListener('click', play );
  
  buttonPause.addEventListener('click', pause );
    
  buttonStop.addEventListener('click', stop );
    
  buttonSet.addEventListener('click', set );
    
  buttonSoundOff.addEventListener('click', soundOff);
    
  buttonSoundOn.addEventListener('click', soundOn);
  
  return({
    play,
    pause,
    stop,
    set,
    soundOn,
    soundOff
  });
}

