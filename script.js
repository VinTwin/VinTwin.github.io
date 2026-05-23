const btn = document.getElementById("hideBtn");
const msg = document.getElementById("message");
const myGif = document.getElementById("myGif");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");



btn.addEventListener("click", () => {
  btn.style.display = "none";
  msg.classList.remove("hidden");   
  myGif.classList.remove("hidden"); 
});


musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => {
      musicBtn.textContent = "Выключить музыку";
    }).catch(err => console.log(err));
  } else {
    music.pause();
    musicBtn.textContent = "Включить музыку";
  }
});




