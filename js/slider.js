// Make slideshow images clickable and add keyboard navigation
(() => {
  const slideshow = document.querySelector('.slideshow.css-only');
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll('.slide');
  const radios = slideshow.querySelectorAll('input[type="radio"]');

  // Make images clickable - click on image to select it
  slides.forEach((slide, index) => {
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', () => {
      radios[index].checked = true;
    });
  });

  // Keyboard arrow navigation
  document.addEventListener('keydown', (e) => {
    if (!slideshow.contains(document.activeElement) && document.activeElement.tagName !== 'LABEL') {
      return; // Only navigate if focused on slideshow
    }

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
