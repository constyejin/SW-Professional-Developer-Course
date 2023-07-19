// attr 속성값을 가져오거나 추가하는 메서드
// #img-modal Code
$(".img-list img").click(function () {
  let 이미지경로 = $(this).attr("src");
  let 대체텍스트 = $(this).attr("alt");
  $(".img-modal-box img").attr({
    src: 이미지경로,
    alt: 대체텍스트
  });
  $(".img-modal").fadeIn();
});

$(".img-modal-btn").click(function () {
  $(".img-modal").fadeOut();
});

// .modal Code
$(".open-btn").click(function () {
  $(".modal").fadeIn();
  // 애니메이션 효과를 만드는 메소드
  // 제이쿼리 animate 
  $(".modal-box").animate({opacity: 1});
});

$(".modal-close").click(function () {
  $(".modal-box").animate({opacity: 0});
  $(".modal").fadeOut();
});


