const slides = document.getElementById('slides');
const dotsWrap = document.getElementById('dots');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;
let interval = null;

function getSlideItems() {
  return slides
    ? slides.querySelectorAll('.slide')
    : [];
}

function renderDots() {

  if (!dotsWrap) return;

  const items = getSlideItems();

  dotsWrap.innerHTML = '';

  items.forEach((_, index) => {

    const dot = document.createElement('button');

    dot.className =
      'dot' + (index === current ? ' active' : '');

    dot.type = 'button';

    dot.addEventListener('click', () => {
      goTo(index);
      resetAuto();
    });

    dotsWrap.appendChild(dot);
  });
}

function updateSlider() {

  const items = getSlideItems();

  if (!slides || !items.length) return;

  if (current >= items.length) {
    current = 0;
  }

  slides.style.transform =
    `translateX(-${current * 100}%)`;

  renderDots();
}

function goTo(index) {

  const items = getSlideItems();

  current =
    (index + items.length) % items.length;

  updateSlider();
}

function next() {
  goTo(current + 1);
}

function prev() {
  goTo(current - 1);
}

function resetAuto() {

  clearInterval(interval);

  interval = setInterval(next, 4500);
}

nextBtn?.addEventListener('click', () => {
  next();
  resetAuto();
});

prevBtn?.addEventListener('click', () => {
  prev();
  resetAuto();
});

document.addEventListener('gallery:updated', () => {

  current = 0;

  updateSlider();

  resetAuto();
});

updateSlider();

interval = setInterval(next, 4500);
