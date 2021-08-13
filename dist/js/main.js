import "./social-icons-links.js";

("use strict");

const hamburger = document.getElementsByClassName("material-icons")[0];
const menuNav = document.querySelector(".menu-nav");
const menuNavItems = document.querySelectorAll(".menu-nav__item");

var hamburgerIsOpen = false;

hamburger.addEventListener("click", () => {
  hamburgerIsOpen = !hamburgerIsOpen;
  if (hamburgerIsOpen) {
    hamburger.classList.remove("closed");
    hamburger.classList.add("open");
    menuNav.classList.add("open");
    menuNavItems.forEach((item) => {
      item.classList.add("open");
    });
  } else {
    hamburger.classList.remove("open");
    hamburger.classList.add("closed");
    menuNavItems.forEach((item) => {
      item.classList.remove("open");
    });
    menuNav.classList.remove("open");
  }
});

const preview = document.querySelectorAll("#preview");
