const root = document.documentElement;
const button = document.querySelector("[data-theme-toggle]");

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = saved || (prefersDark ? "dark" : "light");

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (button) {
    button.textContent = theme === "dark" ? "☀" : "◐";
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

applyTheme(initial);

if (button) {
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}