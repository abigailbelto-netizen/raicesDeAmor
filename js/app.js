const intro = document.querySelector("#intro");
const openButton = document.querySelector("#openInvitation");
const content = document.querySelector("#contenido");
const parallaxTarget = document.querySelector("[data-parallax]");

function openInvitation() {
  if (!intro || intro.classList.contains("is-opening")) return;

  intro.classList.add("is-opening");
  window.startMusic?.();

  window.setTimeout(() => {
    document.body.classList.add("invitation-open");
    intro.classList.add("is-hidden");
    content?.focus({ preventScroll: true });
  }, 1400);
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal, .tree-stage");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  items.forEach((item) => observer.observe(item));
}

function setupParallax() {
  if (!parallaxTarget || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.addEventListener("scroll", () => {
    const offset = Math.min(window.scrollY * 0.08, 42);
    parallaxTarget.style.transform = `scale(1.08) translateY(${offset}px)`;
  }, { passive: true });
}

openButton?.addEventListener("click", openInvitation);
setupReveal();
setupParallax();
