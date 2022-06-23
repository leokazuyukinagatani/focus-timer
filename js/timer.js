export const Timer = (
    {
      minutesDisplay,
      secondsDisplay,
      timerTimeOut,
      controls

    }) =>
  {
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
          controls.resetControls();
          return;
        }else{
          if(seconds == 0) {
            minutes--;
            updateTimeDisplay(minutes,seconds);
            seconds = 60;
      
          }
          seconds--;
      
          updateTimeDisplay(minutes,seconds);
        }
      
        countDown();
      },
      1000);
    }

    return( { countDown , resetTimeOut, updateTimeDisplay } );


}


