const keys = Array.from(document.querySelectorAll(".key"));

function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if not transformed
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
