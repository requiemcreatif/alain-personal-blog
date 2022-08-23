const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//make the nav toggle button work
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
