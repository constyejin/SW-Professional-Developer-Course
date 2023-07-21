// 현재 인덱스를 저장하는 변수 초기값 0
let cur = 0;
// slide-item이라는 클래스를 가진 요소들의 총 개수 저장
let len = $(".slide-item").length;

// 점 추가하는 코드
for(i = 0; i < len; i++){
  $("#dots").append("<div></div>");
}
$("#dots > div").first().addClass("sactive");


// 슬라이드 이동하는 함수, dir 매개변수에 따라 이전이나 다음으로 이동
function sliding(dir){
    cur = cur + dir;

    // cur 값이 양수인 경우 다음 슬라이드로 이동
    // cur 값이 음수인 경우 이전 슬라이드로 이동
    // 마지막 슬라이드에서 다음 버튼을 누를 경우 처음 슬라이드로 이동
    // 처음 슬라이드에서 이전 버튼을 누를 경우 마지막 슬라이드로 이동
    if(cur >= len){
      cur = 0;
    }else if(cur < 0){
      cur = len - 1;
    }

    // siblings : 형제 요소를 찾는 함수
    // siblings을 이용해서 현재 슬라이드를 제외한 나머지 슬라이드를 fadeOut 시킨다.
    $(".slide-item").eq(cur).siblings(".slide-item").stop().fadeOut();

    // fadeIn으로 현재 함수를 나타나게 한다
    $(".slide-item").eq(cur).stop().fadeIn(function(){
      $(this).siblings(".slide-item").children("p").css({
          marginTop: "20px",
          opacity: 0
        });
        $(this).children("p").stop().animate({
          marginTop: 0,
          opacity: 1
        },600);

      
      // $(this).siblings(".slide").children("img").css({
      //     height: "100vh"
      // });
      // $(this).children("img").stop().animate({
      //     height: "cale(100vh - 10%)"
      // },4000);
    });

    $("#dots div").removeClass("is-active");
    $("#dots div").eq(cur).addClass("is-active");
};

sliding(0);

$("#prev").click(function(){sliding(-1)});
$("#next").click(function(){sliding(1)});

let auto = setInterval(sliding, 5000, 1);

$("#dots div").click(function(){
    cur = 0;
    let num = $(this).index();
    sliding(num);
});



