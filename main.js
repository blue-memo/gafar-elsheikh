const checkbox = document.querySelector('.theme-switch__checkbox');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', checkbox.checked);
  if (checkbox.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("header ul");
const loginBtns = document.querySelector(".login-btns");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  loginBtns.classList.toggle("active");
});
