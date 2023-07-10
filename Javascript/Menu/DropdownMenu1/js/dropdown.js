// 첫번째 함수(mouseenter) hover 됐을 때
$(".gnb > li").hover(function () {
  $(this).find("ul").stop().slideDown(500);
  $(this).children("a").addClass("on");
// 두번째 함수 (mouseleave) 마우스가 떠났을 때
// 콜백 함수 : 함수가 실행되고 난 후에, 또 다른 명령을 수행
}, function () {
  $(this).find("ul").stop().slideUp(500);
  $(this).children("a").removeClass("on");
})

// Dropdown Menu
// let mainMenuItems = document.querySelectorAll('.gnb > li');

// mainMenuItems.forEach(function (menuItem) {
//   menuItem.addEventListener('mouseenter', function () {
//     let subMenu = this.querySelector('ul');
//     let menuItemLink = this.querySelector('a');

//     subMenu.style.display = 'block';
//     menuItemLink.classList.add('on');
//   });

//   menuItem.addEventListener('mouseleave', function () {
//     let subMenu = this.querySelector('ul');
//     let menuItemLink = this.querySelector('a');

//     subMenu.style.display = 'none';
//     menuItemLink.classList.remove('on');
//   });
// });
