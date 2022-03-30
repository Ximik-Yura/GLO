const accordeon = document.querySelector(".feature-list");
const accordeonBtn = document.querySelectorAll(".feature__link");

accordeonBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    accordeonBtn.forEach((button) => {
      button.classList.remove("feature__link_active");
      button.nextElementSibling.classList.add("hidden");
    });

    btn.classList.toggle("feature__link_active");
    btn.nextElementSibling.classList.toggle("hidden");
  });
});
