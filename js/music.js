const audio = document.querySelector("#backgroundMusic");
const toggle = document.querySelector("#musicToggle");
let isPlaying = false;

function syncButton() {
  if (!toggle) return;
  toggle.classList.toggle("is-playing", isPlaying);
  toggle.setAttribute("aria-pressed", String(isPlaying));
  toggle.setAttribute("aria-label", isPlaying ? "Pausar música" : "Activar música");
}

async function startMusic() {
  if (!audio) return;

  try {
    await audio.play();
    isPlaying = true;
  } catch {
    isPlaying = false;
  }

  syncButton();
}

function pauseMusic() {
  if (!audio) return;
  audio.pause();
  isPlaying = false;
  syncButton();
}

toggle?.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    startMusic();
  }
});

window.startMusic = startMusic;
window.pauseMusic = pauseMusic;
