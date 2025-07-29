document.addEventListener("DOMContentLoaded", () => {
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      // Now attach navbar toggle logic
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    });
});
