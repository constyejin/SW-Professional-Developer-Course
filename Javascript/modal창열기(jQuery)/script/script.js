// .modal Code
$(".open-btn").click(function () {
  $(".modal-box").fadeIn();
  // 애니메이션 효과를 만드는 메소드
  $(".overlay").fadeIn();
});

$(".modal-close").click(function () {
  $(".modal-box").fadeOut();
  $(".overlay").fadeOut();
});


// attr 속성값을 가져오거나 추가하는 메서드
// #img-modal Code
$(".modal-list img").click(function () {
  let 이미지경로 = $(this).attr("src");
  let 대체텍스트 = $(this).attr("alt");

  $(".img-modal-wrapper img").attr({
    src: 이미지경로,
    alt: 대체텍스트
  });

  $(".img-modal-box").fadeIn();
  $('.overlay').fadeIn();
});


$(".img-modal-btn").click(function () {
  $(".img-modal-box").fadeOut();
  $('.overlay').fadeOut();
});





