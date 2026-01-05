const panel = document.getElementById("panel");

function openPanel(num) {
  panel.style.display = "flex";
}

function closePanel() {
  panel.style.display = "none";
}

/* PARALLAX EFFECT */
window.addEventListener("scroll", () => {
  document.body.style.backgroundPositionY =
    window.scrollY * 0.3 + "px";
});
