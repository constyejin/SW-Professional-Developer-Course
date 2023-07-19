// 현재 index값
// 현재 이미지 위치
let currentSlide = 0;
let currentImage = 0;
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slideList = document.querySelector('.slide-list');
let slideWidth = slideList.clientWidth;

// 딱 봐도 if문 냄새가 남
// 코드 짤 때 영어부터 짤 생각하지 말고 한글로 최대한 구체적으로 설명부터 하고 시작해야 쉬움

// nextBtn.addEventListener('click', function() {
//   // 현재 사진이 1번이면 2번 사진
//   // 2번 사진이면 3번 사진
//   if (preImg < 3) {
//     prevBtn.removeAttribute('disabled')
//     slideList.style.transform = 'translageX(' +slideList+ 'vw)'
//   }
// });


// prevBtn.addEventListener('click', function() {
//   slideBox.style.transform = 'translateX(-' + present + '00vw)';
//   present -= 1;
// });


// prevBtn.addEventListener('click', function() {
//   if(present == 2) {
//     document.querySelector('.slide-list').style.transform = 'translateX(0)';
//         present++;

//   }else if(present == 3) {
//     document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
//         present++;
//   }
// });
