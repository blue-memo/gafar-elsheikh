const checkbox = document.querySelector('.theme-switch__checkbox');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', checkbox.checked);
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("header ul");
const loginBtns = document.querySelector(".login-btns");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  loginBtns.classList.toggle("active");
});
