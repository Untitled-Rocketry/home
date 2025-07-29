const base = '/home/components/';

export async function loadLayout() {
  try {
    /*
    const navRes = await fetch(`${base}navbar.html`);
    const navHTML = await navRes.text();
    document.getElementById("navbar-container").innerHTML = navHTML;

    const navbarModule = await import(`${base}navbar.js`);
    navbarModule.initNavbar();
    */
    const footerRes = await fetch(`${base}footer.html`);
    const footerHTML = await footerRes.text();
    document.getElementById("footer-container").innerHTML = footerHTML;
  } catch (err) {
    console.error("Layout load failed:", err);
  }
}
