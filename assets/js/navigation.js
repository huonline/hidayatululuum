const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  drawer.classList.add('active');
  overlay.classList.add('active');

  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  drawer.classList.remove('active');
  overlay.classList.remove('active');

  document.body.style.overflow = '';
}

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
