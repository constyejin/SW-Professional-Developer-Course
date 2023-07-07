document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slideWrapper = document.querySelector('.slide-wrapper');
  const slideList = document.querySelector('.slide-list');
  const slideItems = document.querySelectorAll('.slide-item');
  const slideWidth = slideWrapper.clientWidth;

  document.querySelector('.next').addEventListener('click', function() {
    if (currentSlide < slideItems.length - 1) {
      currentSlide++;
      slideList.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  });

  document.querySelector('.prev').addEventListener('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
      slideList.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  });
});
