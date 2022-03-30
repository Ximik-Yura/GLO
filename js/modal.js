const modalBtn = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const closeBtn = modal.querySelector(".modal__close");

modalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
