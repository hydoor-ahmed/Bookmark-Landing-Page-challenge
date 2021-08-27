const open = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const menu = document.querySelector(".links");
const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");
const logo = document.querySelector(".logo");

open.addEventListener("click", function () {
  menu.classList.add("open");
  logo.classList.add("logostyle");
});
close.addEventListener("click", function () {
  menu.classList.remove("open");
  logo.classList.remove("logostyle");
});
li1.addEventListener("click", function () {
  menu.classList.remove("open");
  logo.classList.remove("logostyle");
});
li2.addEventListener("click", function () {
  menu.classList.remove("open");
  logo.classList.remove("logostyle");
});
li3.addEventListener("click", function () {
  menu.classList.remove("open");
  logo.classList.remove("logostyle");
});
li4.addEventListener("click", function () {
  menu.classList.remove("open");
  logo.classList.remove("logostyle");
});
