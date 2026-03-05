document.addEventListener('DOMContentLoaded', () => {
  initReviewsSlider();
  initAnimalSlider();
});

function initReviewsSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  const wrapper = slider.querySelector('.slider__wrapper');
  const prevBtn = slider.querySelector('.slider-btn-prev');
  const nextBtn = slider.querySelector('.slider-btn-next');
  const radios = slider.querySelectorAll('.slider__state');
  const items = wrapper.querySelectorAll('.reviews-item');
  let currentIndex = 0;

  const desktopMQ = window.matchMedia('(min-width: 1200px)');

  function getStepCount() {
    if (desktopMQ.matches) {
      return Math.ceil(items.length / 2);
    }
    return items.length;
  }

  function goTo(index) {
    const steps = getStepCount();
    if (index < 0 || index + 1 > steps) {
      return;
    }
    currentIndex = ((index % steps) + steps) % steps;

    if (desktopMQ.matches) {
      const pct = currentIndex * 60;
      const px = currentIndex * 30;
      wrapper.style.transform = `translateX(calc(-${pct}% - ${px}px))`;
    } else {
      if (radios[currentIndex]) {
        radios[currentIndex].checked = true;
      }
      wrapper.style.transform = '';
    }
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  radios.forEach((radio, i) => {
    radio.addEventListener('change', () => {
      if (radio.checked) currentIndex = i;
    });
  });

  desktopMQ.addEventListener('change', () => goTo(currentIndex));
}

function initAnimalSlider() {
  const slider = document.querySelector('.animal-slider');
  if (!slider) return;

  const track = slider.querySelector('.animal-slider__track');
  const prevBtn = slider.querySelector('.slider-btn-prev');
  const nextBtn = slider.querySelector('.slider-btn-next');

  function getScrollAmount() {
    const card = track.querySelector('.animal-card');
    if (!card) return 470;
    const gap = 30;
    return card.offsetWidth + gap;
  }

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
}
