let index = 0;
const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slides img').length;

function moveSlide(step) {
    index += step;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

// Auto Slide
setInterval(() => moveSlide(1), 3000);
