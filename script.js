const burger = document.querySelector(".BurgerMenu");
const menu = document.querySelector(".MenuHeader");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
