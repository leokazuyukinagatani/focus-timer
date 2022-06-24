import Sounds from './sounds.js';

export default function Timer(
    {
      minutesDisplay,
      secondsDisplay,
      resetControls,

    })
  {
    let timerTimeOut;

    const hold = () => {
      clearTimeout(timerTimeOut);
    }
    
    const updateDisplay = (minutes, seconds) => {
      
      minutesDisplay.textContent = String(minutes).padStart(2,"0");
      secondsDisplay.textContent = String(seconds).padStart(2,"0");
    }
    
    const countDown = () => {
      timerTimeOut = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);
    
        if(seconds == 0 && minutes == 0){
          resetControls();
          Sounds().timeEnd();
          return;
        }else{
          if(seconds == 0) {
            minutes--;
            updateDisplay(minutes,seconds);
            seconds = 60;
      
          }
          seconds--;
      
          updateDisplay(minutes,seconds);
        }
      
        countDown();
      },
      1000);
    }

    const updateMinutes= (newMinutes) => {
      if(newMinutes){
        updateDisplay(newMinutes,'0');
      }else{
        return;
      }
    } 


    return( { countDown , hold, updateDisplay, updateMinutes} );


}


