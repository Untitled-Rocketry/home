const base = '/home/components/';

export async function loadLayout() {
  try {
    const footerRes = await fetch(`${base}footer.html`);
    const footerHTML = await footerRes.text();
    document.getElementById("footer-container").innerHTML = footerHTML;
  } catch (err) {
    console.error("Layout load failed:", err);
  }
}
