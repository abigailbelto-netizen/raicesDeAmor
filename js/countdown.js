const eventDate = new Date("2026-07-25T17:30:00-06:00");
const countdown = document.querySelector("#countdown");

function pad(value) {
  return String(value).padStart(2, "0");
}

function renderCountdown() {
  if (!countdown) return;

  const now = new Date();
  const distance = Math.max(eventDate.getTime() - now.getTime(), 0);
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  countdown.querySelector("[data-days]").textContent = pad(days);
  countdown.querySelector("[data-hours]").textContent = pad(hours);
  countdown.querySelector("[data-minutes]").textContent = pad(minutes);
  countdown.querySelector("[data-seconds]").textContent = pad(seconds);
}

renderCountdown();
window.setInterval(renderCountdown, 1000);
