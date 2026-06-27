const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuBtn.textContent = "Tutup";
  } else {
    menuBtn.textContent = "Menu";
  }
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
    menuBtn.textContent = "Menu";
  });
});