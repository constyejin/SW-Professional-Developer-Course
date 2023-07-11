$(".main-menu li, .submenu-wrapper").hover(function () {
  // hover됐을 경우 실행할 함수
  $(".submenu-wrapper").stop().slideDown(500);
}, function () {
  // hover되지 않았을 경우 실행할 함수
  $(".submenu-wrapper").stop().slideUp(500);
});

$(".submenu-list > li").hover(function () {
  // drop-down(ul)의 자식 li 4개 중 hover된 자신의 index번호를 변수 i에 저장
  let i = $(this).index();
  // eq(i) : eq() 인덱스 번호로 요소를 찾을 때 사용

  // .main-menu li 안에있는 a태그 중 호버된 자신한테 on class 추가
  // CSS에서 .main-menu li a.on 이라는 class가 있을 경우 화면 스타일링
  $(".main-menu li").find("a").eq(i).addClass("on");
}, function () {
  let i = $(this).index();
  $(".main-menu li").find("a").eq(i).removeClass("on");
})
