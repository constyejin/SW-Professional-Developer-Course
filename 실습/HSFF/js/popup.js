let closeBtn = document.querySelector('.close-btn button');

closeBtn.addEventListener('click', function(){
  setTimeout(function(){
     document.querySelector('.popup').style.display = 'none';
  }, 3000)
})

// 오늘 하루 열지 않기 클릭시 쿠키
