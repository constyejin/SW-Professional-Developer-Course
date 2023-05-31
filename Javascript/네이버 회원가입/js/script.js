// 1. label 태그를 눌렀을때
// 누른 this 안에 있는 input[type="checkbox]에게
// "checked"라는 속성(Attribute)을 토글한다.
// 방금누른그것 안에 있는 .checkbox-img 
// "checked"라는 클래스(Class)를 토글한다.

$('label').on('click', function(e) {
  // 왜 이걸 눌러야만 checked 가 동작하는지?
  // form 안에 있는 input 등을 전송하는 동작 e.preventDefault로 중단
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');
  if ($(this).children(".checkbox-img").hasClass('checked')) {
    $(this).children("input[type='checkbox']").attr('checked');
  } else {
    $(this).children("input[type='checkbox']").removeAttr("checked");
  }
})


// #total을 체크하면 모든 .agree체크?
// #total을 언체크하면 모든 .agree언체크
// .agree를 클릭할때 .agree중에 언체크의 개수를 세서
// 그 개수가 0이면 #total을 체크
// 그게아니면 #total을 언체크
$('.total label').on('click', function() {
    if($(this).find(".checkbox-img").hasClass('checked')) {
    $(".agree").find(".checkbox-img").addClass('checked');
    $(".agree").find("input[type='checkbox']").attr('checked', 'checked');
  } else {
    $(".agree").find(".checkbox-img").removeClass("checked");
    $(".agree").find("input[type='checkbox']").removeAttr("checked");
  }
})

$(".agree label").click(function (e) {
  e.preventDefault();
  let len = $(".agree .checkbox-img").length;
  let chklen = $(".agree .checked").length;
  let unchk = len - chklen;
  if (unchk == 0) {
    $("#total label .checkbox-img").addClass("checked");
    $("#total label input[type='checkbox']").attr("checked");
  } else {
    $("#total label .checkbox-img").removeClass("checked");
    $("#total label input[type='checkbox']").removeAttr("checked");
  }
});


$("#cancel").on('click', function() {
  location.href = "http://naver.com";
});

// 확인버튼을 눌렀을때
// 필수 동의사항을 모두 체크했는지 확인해서
// 모두 체크했으면 통과
// 하나라도 체크 안한게 있으면 #reqwarn보여주고
// 막아야함.

// #submit 버튼을 눌렀을때 아래와같은 일이 벌어질것이다.
// (.req의 수) - (.req안에들어있는 .checked의 수)
// = (체크 안한 동의사항의 수)
// 이 값이 0이라면 (다 체크했다면)
// #form1을 전송.
// 그렇지 않다면 (하나라도 체크 안한게 있다면)
// #reqwarn을 보여준다.
$("#submit").on('click', function(e) {
  let req = $(".req").length;
  let chkreq = $(".req .checked").length;
  let unchk = req - chkreq;
  if (unchk == 0) {
    $("#form1").submit();
  } else {
    e.preventDefault();
    $("#req-alert").css('visibility', 'visible');
  }
});

