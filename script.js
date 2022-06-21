let buttonPlay = document.querySelector('.play');
let buttonPause = document.querySelector('.pause');
let buttonSet = document.querySelector('.set');
let buttonStop = document.querySelector('.stop');
let buttonSoundOn = document.querySelector('.sound-on');
let buttonSoundOff = document.querySelector('.sound-off');


buttonPlay.classList.add('hide');

document.querySelector('.pause').classList.remove('hide');


buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

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
})


buttonSoundOff.addEventListener('click',() => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
})

buttonSoundOn.addEventListener('click',() => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
})