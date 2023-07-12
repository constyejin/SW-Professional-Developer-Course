// const menuItems = document.querySelectorAll(".gnb-main-list > li");

// menuItems.forEach(function(item){
//   const subMenu = item.querySelector('.sub');

//   item.addEventListener('mouseover', function(){
//     subMenu.classList.add('active');
//     this.querySelector('a').classList.add('on');
//     this.querySelector('span').classList.add('on');
//   })

//   item.addEventListener('mouseleave', function(){
//     subMenu.classList.remove('active');
//     this.querySelector('a').classList.remove('on');
//     this.querySelector('span').classList.remove('on');
//   })
// })


$('.gnb-main-item').hover(function() {
  // gnb-main-item에 hover 했을 때 this 하위에 속한 요소 중 sub라는 클래스를 찾는다
  $(this).find('.sub').stop().slideDown(300);
  // gnb-main-item의 자식인 a 태그를 찾아서 active라는 클래스를 추가
  $(this).children('a').addClass('active');
}, function() {
  $(this).find('.sub').stop().slideUp(300);
  // gnb-main-item의 자식인 a 태그를 찾아서 active라는 클래스를 제거
  $(this).children('a').removeClass('active');
})
