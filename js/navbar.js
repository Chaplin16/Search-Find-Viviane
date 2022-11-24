const nav = document.getElementById("nav");
const tabs = [...document.querySelectorAll(".tab")];
const btnNav = document.querySelector(".btnNav");
const tabsMenu = document.querySelector(".tabs-btn-nav");
const hamburgerIcon = document.querySelector(".navToggler");


//mavbar qui se deplie au click
hamburgerIcon.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerIcon.classList.toggle("active");
  tabsMenu.classList.toggle("status");
}
