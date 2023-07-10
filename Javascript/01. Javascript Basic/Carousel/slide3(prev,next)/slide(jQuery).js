$(document).ready(function() {
  let currentSlide = 0;
  const slideWrapper = $('.slide-wrapper');
  const slideList = $('.slide-list');
  const slideItems = $('.slide-item');
  const slideWidth = slideWrapper.width();

  $('.next').click(function() {
    if (currentSlide < slideItems.length - 1) {
      currentSlide++;
      slideList.css('transform', `translateX(-${currentSlide * slideWidth}px)`);
    }
  });

  $('.prev').click(function() {
    if (currentSlide > 0) {
      currentSlide--;
      slideList.css('transform', `translateX(-${currentSlide * slideWidth}px)`);
    }
  });
});
