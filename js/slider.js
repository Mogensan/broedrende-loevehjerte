
(() => {
  const slideshow = document.querySelector('.slideshow.css-only');
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll('.slide');
  const radios = slideshow.querySelectorAll('input[type="radio"]');
  const prevButtons = slideshow.querySelectorAll('.prev');
  const nextButtons = slideshow.querySelectorAll('.next');

  slides.forEach((slide, index) => {
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', () => {
      radios[index].checked = true;
    });
  });

  prevButtons.forEach((btn) => {
    btn.style.cursor = 'pointer';
  });
  nextButtons.forEach((btn) => {
    btn.style.cursor = 'pointer';
  });

  document.addEventListener('keydown', (e) => {
    const currentChecked = slideshow.querySelector('input[type="radio"]:checked');
    const currentIndex = Array.from(radios).indexOf(currentChecked);

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % radios.length;
      radios[nextIndex].checked = true;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + radios.length) % radios.length;
      radios[prevIndex].checked = true;
    }
  });
})();
