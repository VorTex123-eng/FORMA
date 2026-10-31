const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => { const isOpen = mainNav.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(isOpen)); });
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));
document.querySelector("#year").textContent = new Date().getFullYear();
const startForm = document.querySelector("#startForm");
const formFeedback = document.querySelector("#formFeedback");
startForm.addEventListener("submit", (event) => { event.preventDefault(); if (!startForm.reportValidity()) return; const goal = document.querySelector("#goal").value; formFeedback.textContent = `Your focus: ${goal}. This demo is ready for a real signup integration.`; });


// Scroll reveal effects. Content remains visible when motion is reduced or unsupported.
const revealTargets = document.querySelectorAll(".hero-copy, .hero-art, .metrics > div, .section-heading, .program-card, .philosophy-inner > *, .progress-copy, .dashboard, .start-panel > *");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("reveal-ready");
  revealTargets.forEach((element) => element.classList.add("reveal"));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealTargets.forEach((element) => revealObserver.observe(element));
}
