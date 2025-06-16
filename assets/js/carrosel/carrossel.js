const track = document.getElementById('track');
const carousel = document.getElementById('carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicatorsContainer = document.getElementById('indicators');
const slides = Array.from(track.children);

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll('.carousel-track > div');
let index = 1;
let interval;

function getSlideWidth() {
  return slides[0].offsetWidth;
}

function updateTransform() {
  track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
}

updateTransform(); // inicializa

// Criar indicadores
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  indicatorsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateIndicators() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[(index - 1 + slides.length) % slides.length].classList.add('active');
}

function moveToSlide(i) {
  index = i;
  track.style.transition = 'transform 0.5s ease-in-out';
  updateTransform();
  updateIndicators();
}

function nextSlide() {
  if (index >= allSlides.length - 1) return;
  index++;
  moveToSlide(index);
}

function prevSlide() {
  if (index <= 0) return;
  index--;
  moveToSlide(index);
}

function startAutoSlide() {
  interval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

track.addEventListener('transitionend', () => {
  if (allSlides[index].isEqualNode(firstClone)) {
    track.style.transition = 'none';
    index = 1;
    updateTransform();
  }
  if (allSlides[index].isEqualNode(lastClone)) {
    track.style.transition = 'none';
    index = allSlides.length - 2;
    updateTransform();
  }
  updateIndicators();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    moveToSlide(i + 1);
  });
});

// Auto-play + pausa no hover
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();

// RESIZE RESPONSIVO
window.addEventListener('resize', () => {
  track.style.transition = 'none';
  updateTransform();
});
