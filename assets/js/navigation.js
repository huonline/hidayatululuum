const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');

const navLinks =
  document.querySelectorAll('.nav-link[data-view]');

const contentSections =
  document.querySelectorAll('.content-section');

const homeBlocks =
  document.querySelectorAll('.home-block');

/* ===============================
   OPEN CLOSE MENU
=============================== */

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

menuOpen?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);

/* ===============================
   ACTIVE NAV
=============================== */

function setActiveNav(activeLink) {

  navLinks.forEach(link => {

    link.classList.toggle(
      'active',
      link === activeLink
    );

  });
}

/* ===============================
   SHOW HOME
=============================== */

function showHome(
  scrollTarget = 'beranda',
  activeLink = null
) {

  contentSections.forEach(section => {

    section.classList.remove('active');
    section.style.display = 'none';

  });

  homeBlocks.forEach(section => {

    section.style.display = 'block';

  });

  setActiveNav(activeLink);

  closeMenu();

  const target =
    document.getElementById(scrollTarget);

  if (target) {

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }
}

/* ===============================
   SHOW SECTION
=============================== */

function showSection(
  sectionId,
  activeLink = null
) {

  contentSections.forEach(section => {

    section.classList.remove('active');
    section.style.display = 'none';

  });

  homeBlocks.forEach(section => {

    section.style.display = 'none';

  });

  const target =
    document.getElementById(sectionId);

  if (target) {

    target.classList.add('active');
    target.style.display = 'block';

  }

  setActiveNav(activeLink);

  closeMenu();

  if (target) {

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }
}

/* ===============================
   NAVIGATION CLICK
=============================== */

navLinks.forEach(link => {

  link.addEventListener('click', (e) => {

    e.preventDefault();

    const view =
      link.dataset.view;

    if (view === 'home') {

      const scrollTarget =
        link.dataset.scroll || 'beranda';

      showHome(scrollTarget, link);
    }

    else if (view === 'section') {

      showSection(
        link.dataset.section,
        link
      );
    }

    else if (view === 'footer') {

      showHome('kontak', link);

      const footer =
        document.getElementById('kontak');

      if (footer) {

        setTimeout(() => {

          footer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        }, 80);
      }
    }
  });
});
