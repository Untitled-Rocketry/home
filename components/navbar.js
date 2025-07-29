// components/navbar.js

export function initNavbar() {
  const modeToggle = document.getElementById('mode-toggle');
  const sidebarToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('navbar');

  if (modeToggle && sidebarToggle && sidebar) {
    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      modeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });
  }
}
