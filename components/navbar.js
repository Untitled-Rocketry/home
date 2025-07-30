/* export function initNavbar() {
  const modeToggle = document.getElementById('mode-toggle');
  const mobileModeToggle = document.getElementById('mobile-mode-toggle');
  const sidebarToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu'); */

  function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    if (modeToggle) modeToggle.textContent = icon;
  }

  if (modeToggle) modeToggle.addEventListener('click', toggleDarkMode);
/*
  if (sidebarToggle && mobileMenu) {
    sidebarToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); 
    });
  }
}
*/

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
