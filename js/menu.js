const burger = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");
const listItem = menu.querySelectorAll(".menu-list__item");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

listItem.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
});

document.addEventListener("click", (event) => {
  if (
    !(event.target.closest(".menu") || event.target.closest(".humburger-menu"))
  ) {
    menu.classList.remove("menu-active");
  }
});