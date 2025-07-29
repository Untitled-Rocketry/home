// components/init.js

export async function loadLayout() {
  // Load Navbar
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    const navbarHTML = await fetch("../components/navbar.html").then(res => res.text());
    navbarContainer.innerHTML = navbarHTML;

    const { initNavbar } = await import("../components/navbar.js");
    initNavbar();
  }

  // Load Footer
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    const footerHTML = await fetch("../components/footer.html").then(res => res.text());
    footerContainer.innerHTML = footerHTML;
  }
}
