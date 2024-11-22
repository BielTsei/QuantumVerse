// const btnMobile = document.getElementById("btn-mobile");
// function toogleMenu(t) {
//   "touchstart" === t.type && t.preventDefault();
//   const e = document.getElementById("nav");
//   e.classList.toggle("active");
//   var n = e.classList.contains("active");
//   t.currentTarget.setAttribute("aria-expanded", n),
//     n
//       ? t.currentTarget.setAttribute("aria-label", "Fechar menu")
//       : t.currentTarget.setAttribute("aria-label", "Abrir menu");
// }
// btnMobile.addEventListener("click", toogleMenu),
//   btnMobile.addEventListener("touchstart", toogleMenu);

const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
function toogleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");
  const isActive = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", isActive);
  event.currentTarget.setAttribute(
    "aria-label",
    isActive ? "Fechar menu" : "Abrir menu"
  );
}
function closeMenu() {
  nav.classList.remove("active");
  btnMobile.setAttribute("aria-expanded", "false");
  btnMobile.setAttribute("aria-label", "Abrir menu");
}
const menuLinks = document.querySelectorAll("#nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
btnMobile.addEventListener("click", toogleMenu);
btnMobile.addEventListener("touchstart", toogleMenu);
