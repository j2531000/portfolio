document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      mobile.classList.toggle("open");
      toggle.classList.toggle("open");
    });
    mobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobile.classList.remove("open");
        toggle.classList.remove("open");
      });
    });
  }

  // Render Lucide icons (https://lucide.dev). Runs after any inline scripts
  // that build project cards, since those execute synchronously before
  // DOMContentLoaded fires — so dynamically-inserted icons get picked up too.
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
});
