const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let current = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  prevBtn.classList.toggle('hidden', index === 0);
  nextBtn.classList.toggle('hidden', index === slides.length - 1);
}

nextBtn.addEventListener('click', () => {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    showSlide(current);
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    current = index;
    showSlide(current);
  });
});

// старт
showSlide(current);
