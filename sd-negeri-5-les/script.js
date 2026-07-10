const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const searchForm = document.querySelector(".search-box");
const searchInput = document.getElementById("searchInput");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");
    menuBtn.textContent = isOpen ? "Tutup" : "Menu";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navLinks.classList.remove("show");
      menuBtn.textContent = "Menu";
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function (event) {
    const beritaSection = document.getElementById("berita");

    if (!beritaSection) {
      return;
    }

    event.preventDefault();

    const keyword = searchInput.value.trim().toLowerCase();
    const posts = document.querySelectorAll(".post-card");

    posts.forEach(function (post) {
      const text = post.textContent.toLowerCase();
      post.hidden = keyword.length > 0 && !text.includes(keyword);
    });

    beritaSection.scrollIntoView({ behavior: "smooth" });
  });
}
