export async function loadLayout() {
  // Load navbar
  const navRes = await fetch("components/navbar.html");
  const navHTML = await navRes.text();
  document.getElementById("navbar-container").innerHTML = navHTML;

  const { initNavbar } = await import('./navbar.js'); // relative to init.js
  initNavbar();

  // Load footer
  const footerRes = await fetch("components/footer.html");
  const footerHTML = await footerRes.text();
  document.getElementById("footer-container").innerHTML = footerHTML;
}
