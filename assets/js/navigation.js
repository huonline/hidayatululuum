const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");

menuOpen.addEventListener("click", () => {
  drawer.classList.add("active");
  overlay.classList.add("active");
});

menuClose.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

function closeDrawer() {
  drawer.classList.remove("active");
  overlay.classList.remove("active");
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    closeDrawer();
  });
});
