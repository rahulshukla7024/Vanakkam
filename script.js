const slider = document.getElementById('slider');

let startX = 0;
let currentX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  currentX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  const deltaX = startX - currentX;
  const threshold = 50; // minimum swipe distance

  if (deltaX > threshold) {
    slider.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  } else if (deltaX < -threshold) {
    slider.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }
});
