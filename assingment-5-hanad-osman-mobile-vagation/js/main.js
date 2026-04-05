const button = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

button.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
});