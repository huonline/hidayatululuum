const counters =
  document.querySelectorAll('.stat-value');

const countDuration = 1600;

function animateCount(el) {

  const target = +el.dataset.count;

  const startTime = performance.now();

  function step(now) {

    const progress = Math.min(
      (now - startTime) / countDuration,
      1
    );

    const value = Math.floor(
      progress * target
    );

    el.textContent =
      target >= 1000
        ? value.toLocaleString('id-ID')
        : value;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const statsObserver =
  new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        counters.forEach(animateCount);

        statsObserver.disconnect();
      }
    });

  }, {
    threshold: 0.35
  });

const statsSection =
  document.querySelector('.stats-wrap');

if (statsSection) {
  statsObserver.observe(statsSection);
}
