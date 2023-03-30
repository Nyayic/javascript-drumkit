function playSound(event) {
  // selects the audio element where data-key="event.keyCode"
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  
  //if there is no audio element with the corresponding keyCode, then don't do anything
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}
//transitionend is triggered on a variety of properties, (border, box shadow, etc)
// just select one - in this case 'transform'
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
  
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);  