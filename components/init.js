export async function loadLayout() {
  // Load Navbar
  const navbarRes = await fetch("components/navbar.html");
  document.getElementById("navbar-container").innerHTML = await navbarRes.text();
  const { initNavbar } = await import('../components/navbar.js');
  initNavbar();

  // Load Footer
  const footerRes = await fetch("components/footer.html");
  document.getElementById("footer-container").innerHTML = await footerRes.text();
}
