export default function Controls(
  {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    
  }
)
{

  const play = () => {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  const pause = () => {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  const set = () => {
    let minutes = Number(prompt("Defina o valor do contador:"));
    return minutes;
  }
  
  const reset = () => {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
  }

  return( { play, pause, set, reset } );
}

