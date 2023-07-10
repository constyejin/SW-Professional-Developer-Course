let currentSlide = 0;
// let slideWrapper = document.querySelector('.slide-wrapper');
let slideList = document.querySelector('.slide-list');
let slideItems = document.querySelectorAll('.slide-item');
console.log(slideItems.length)

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');


// slideItems.forEach(function(item){
//   nextBtn.addEventListener('click', function(){
//     let currentSlide = Array.from(slideItems).indexOf(item);
//     console.log(currentSlide)
//     if (currentSlide < slideItems.length) {
//       slideList.style.transform = `translateX(-${currentSlide * 100}vw)`;
//     }
//   })
// })
 
nextBtn.addEventListener('click', function() {
  if (currentSlide < slideItems.length - 1) {
    currentSlide++;
    slideList.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }
});

prevBtn.addEventListener('click', function() {
  if (currentSlide > 0) {
    currentSlide--;
    slideList.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }
});

