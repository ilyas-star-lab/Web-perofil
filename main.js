function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// efek kecil saat scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50 ? "#ffffffee" : "white";
});