/* export function initNavbar() {
  const modeToggle = document.getElementById('mode-toggle');
  const mobileModeToggle = document.getElementById('mobile-mode-toggle');
  const sidebarToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    if (modeToggle) modeToggle.textContent = icon;
    if (mobileModeToggle) mobileModeToggle.textContent = icon;
  }

  if (modeToggle) modeToggle.addEventListener('click', toggleDarkMode);
  if (mobileModeToggle) mobileModeToggle.addEventListener('click', toggleDarkMode);

  if (sidebarToggle && mobileMenu) {
    sidebarToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); 
    });
  }
}
*/
