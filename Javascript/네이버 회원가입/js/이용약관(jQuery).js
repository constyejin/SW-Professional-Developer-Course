// label 태그를 클릭 했을 때
// 클릭한 this의 자식인 .checkbox-img에 checked Class toggle
// 클릭한 this의 자식인 input tag에 "checked"라는 속성(Attribute)을 토글한다.

$('label').on('click', function(e) {
  // 기본 동작 e.preventDefault로 중단
  // label 클릭시 체크박스를 선택/해제하는 기본 동작
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');
  
  if ($(this).children(".checkbox-img").hasClass('checked')) {
    // $(selector).attr(attribute, value)
    $(this).children("input[type='checkbox']").attr('checked', 'checked');
  } else {
    $(this).children("input[type='checkbox']").removeAttr("checked", 'checked');
  }
})

// .total을 체크하면 모든 .agree체크
// .total을 언체크하면 모든 .agree언체크

// .total checkbox-img가 checked 클래스를 가지고 있다면 
// .agree안 checkbox-img에 checked class add
// .agree안 input 체크박스가 checked

// .total checkbox-img가 checked 클래스를 가지고 있지 않다면
// .agree안 checkbox-img에 checked class remove
// .agree안 input 체크박스 checked 속성 remove
$('.total label').on('click', function() {
  if($(this).children(".checkbox-img").hasClass('checked')) {
    $(".agree").find(".checkbox-img").addClass('checked');
    $(".agree").find("input[type='checkbox']").attr('checked', 'checked');
  } else {
    $(".agree").find(".checkbox-img").removeClass("checked");
    $(".agree").find("input[type='checkbox']").removeAttr("checked");
  }
})


// agree label안 checkbox가 모두 체크 상태라면 모두 동의 버튼도 체크로 변경
// 하나라도 체크되지 않은 값이 있다면 모두 동의버튼 체크 해제
// (checkbox-img 수) - (.agree 안 checked 수) = 체크되지 않은 값
$('.agree label').on('click', function(){
  let len = $(".agree .checkbox-img").length;
  let chklen = $(".agree .checked").length;
  let unchk = len - chklen;
  // 체크되지 않은 요소가 0 (없다면)
  // total label .checkbox-img에 checked class add
  // total label input checkbox에 checked 속성 추가
  if (unchk == 0) {
    $(".total label .checkbox-img").addClass("checked");
    $(".total label input[type='checkbox']").attr("checked", 'checked');
  } else {
    $(".total label .checkbox-img").removeClass("checked");
    $(".total label input[type='checkbox']").removeAttr("checked");
  }
})


// 확인버튼을 눌렀을때 필수 동의사항을 모두 체크했는지 확인해서 모두 체크했으면 통과
// 하나라도 체크 안한게 있으면 .req-alert를 띄우고 전송 기능을 막아야 한다.

// submit 버튼을 눌렀을 때
// (req의 수) - (req안 .checked의 수) = 체크되지 않은 값
// 이 값이 0이라면 (다 체크했다면) #form1을 전송.
// 그렇지 않다면 (하나라도 체크 안한게 있다면) .req-alert를 띄운다.
$("#submit").on('click', function(e) {
  let req = $(".req").length;
  let chkreq = $(".req .checked").length;
  let unchk = req - chkreq;

  if (unchk == 0) {
    $("#form1").submit();
  } else {
    e.preventDefault();
    $(".req-alert").css('visibility', 'visible');
  }
});


// 취소 버튼 클릭 했을 때 네이버 페이지로 이동
$("#cancel").on('click', function() {
  location.href = "http://naver.com";
});
