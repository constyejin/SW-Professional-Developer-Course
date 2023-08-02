// input에 focusin 되면 부모 .inputbox에 input-act class add (border)
$("input").focusin(function () {
  $(this).parent(".inputbox").addClass("input-act");
});
// input에 focusout되면 부모 .inputbox에 input-act class remove
$("input").focusout(function () {
  $(this).parent(".inputbox").removeClass("input-act");
});

// 필수 요소들은 값은 false로 준 후 조건을 만족 했을 때 true로 바꿔준다.
// 선택사항은 입력하지 않아도 제출 시켜줘야 하니까 항상 true
// equal(=)이 아니라 comma(,)로 작성시 마지막 값에만 false값 대입된다
let idveri = pwveri = pwchkveri = nameveri = birthveri = genderveri = phoneveri = addressveri = false;
let mailveri = true;

// 아이디
// #userid input에 focusout 됐을 때 입력된 값이 0이라면 (조건)
// #userid .warn에 내용을 쓰자. (실행문)
$(".userid input").focusout(function () {
  let userId = $(this).val();
  // 최소 5글자 ~ 최대 8글자 사이 영문 소문자 + 숫자 포함
  let idExp= /^[a-z0-9]{5,8}$/

  if (userId.length == 0) {
    $(".userid .warn").html("<span class='text-red'>필수 정보입니다.</span>");
  } else if (!idExp.test(userId)) {
    $(".userid .warn").html("<span class='text-red'>5~8자의 영문 소문자만 사용가능합니다.</span>");
  } else {
    $(".userid .warn").html("<span class='text-green'>멋진 아이디네요!</span>");
    idveri = true;
  }
});


// 비밀번호
// "#userpw input에 focusout 됐을 때 입력된 값이 0이라면 (조건)
// #userpw .warn에 내용을 쓰자. (실행문)
$(".userpw input").focusout(function () {
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if (userPw.length == 0) {
    $(".userpw .warn").html("<span class='text-red'>필수 정보입니다.</span>");
    $(".userpw .inputbox span").empty();
    $(".userpw .inputbox img").attr("src", "images/m_icon_pw_step_01.png");
  } else if (!pwExp.test(userPw)) {
    $(".userpw .warn").html("<span class='text-red'>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>");
    $(".userpw .inputbox p").html("<span class='text-red'>사용불가</span>");
    $(".userpw .inputbox img").attr("src", "images/m_icon_pw_step_10.png");
  } else {
    pwveri = true;
    $(".userpw .warn").empty();
    $(".userpw .inputbox p").html("<span class='text-green'>안전</span>");
    $(".userpw .inputbox img").attr("src", "images/m_icon_pw_step_04.png");
  }
});


// 비밀번호 재확인
// .userpw_chk input에 focusout 됐을 때 입력된 값이 0이라면 (조건)
// .userpw_chk .warn에 빨간글자(필수 정보입니다). (실행문1)
// .userpw_chk .inputbox img의 속성중에 src의 값을 바꾼다. (실행문2)

// 그렇지 않다면 이 값과 .userpw input의 값이 같은가? (조건2)
// 같다면 .userpw_chk .warn을 비운다 empty() (실행문1)
// .userpw_chk .inputbox img의 속성중에 src의 값을 바꾼다. (실행문2)
// 그렇지 않다면 else
// .userpw_chk .warn에 '비밀번호가 일치하지 않습니다.' (실행문1)
// .userpw_chk .inputbox img의 속성중에 src의 값을 바꾼다. (실행문2)
$(".userpw-chk input").focusout(function(){
  let userPwChk = $(this).val();

  if(userPwChk.length == 0) {
    $(".userpw-chk .warn").html('<span class="text-red">필수 정보입니다.</span>');
    $(".userpw-chk .inputbox img").attr("src", "images/m_icon_pw_step_02.png");
  } else if(userPwChk == $(".userpw input").val()) {
    pwchkveri = true;
    // remove / empty 
    // remove 요소 자체를 지우고 empty 요소 안 내용을 지운다.
    $(".userpw-chk .warn").empty();
    $(".userpw-chk .inputbox img").attr("src", "images/m_icon_pw_step_07.png");
  } else {
    $(".userpw-chk .warn").html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>');
    $(".userpw-chk .inputbox img").attr("src", "images/m_icon_pw_step_02.png");
  }
})


// 이름
// .username input에서 focus가 나갈때 (실행 할 함수 focusout)
// .username input value의 length가 0이라면 (조건)
// .username .warn에 빨간글씨로 "필수 정보입니다."라고 쓴다. (실행문1)
// .username input 의 값이 글자가 아닌부분을 포함한다면
// .username .warn에 빨간글씨로 "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 ~`불가)"라고 쓴다.
// 그렇지 않다면
// .username .warn을 비운다.
$(".username input").focusout(function () {
  let userName = $(".username input").val();
  // 최소 2글자 ~ 최대 5글자 한글
  let nameExp = /^[가-힣]{2,5}$/;

  if (userName.length == 0) {
    $(".username .warn").html("<span class='text-red'>필수 정보입니다.</span>");
  } else if (!nameExp.test(userName)) {
    // 정규식을 만족하면 true 만족하지 않으면 false를 반환
    $(".username .warn").html("<span class='text-red'>2 ~ 5글자 사이의 한글로 입력하세요.(특수기호 사용 불가)</span>");
  } else {
    nameveri = true;
    $(".username .warn").empty();
  }
});


// #year, #month, #date 에서 focusout될 때 (실행할 함수)
// #year의 value의 langth가 숫자 4가 아니라면(조건1)
// .birth .warn에 빨간글씨로 "태어난 년도 4자리를 정확하게 입력하세요."

// 그게 아니고 #month의 값이 비어있으면 (조건2)
// .birth .warn에 빨간글씨로 "태어난 월을 선택하세요."라고 쓴다 

// 그게 아니고 #date의 값이 비어 있다면 (조건3)
// .birth .warn에 빨간글씨로 "태어난 일(날짜) 2자리를 정확하게 입력하세요."라고 쓴다.

// 그게 아니고 만약 연x월x일 의 값이 숫자가 아니라면 (조건4)
// .birth .warn에 빨간글씨로 "생년월일을 다시 확인해주세요."라고 쓴다.

// 그게 아니고 만약 올 해 기준으로 나이가 100 초과라면 (조건5)
// .birth .warn에 빨간글씨로 "정말이세요?"라고 쓴다.

// 그게 아니고 
// .birth .warn에 빨간글씨로 "미래에서 오셨군요. ^^"라고 쓴다.
// 그게 아니라면 경고를 비운다.

// 매개변수(파라미터)
function birthWarn(text) {
  $(".birth .warn").html("<span class='text-red'>" + text + "</span>");
}

$("#year, #month, #date").focusout(function () {
  let year = $("#year").val();
  // boolean값 false(0), true(1)
  let month = $("#month").val();
  let date = $("#date").val();

  // 현재 날짜 및 시간 (한국 표준시)
  let now = new Date();
  // Date 객체의 getTime() 메서드는 1970년 1월 1일 00시 00분 00초 (utc)세계표준시를 기준으로 경과한 밀리초를 반환
  let nowstamp = now.getTime();
  // 현재 날짜 및 시간에서 현재 연도의 네 자릿값을 변수에 할당
  now = now.getFullYear();

  // 사용자가 입력한 year, month, date 값으로 Date 객체 생성
  let birth = new Date(year, month, date);
  // UTC 기준으로 입력받은 값 년,월,일이 경과한 밀리초 반환
  birth = birth.getTime();
  // console.log(birth);

  if (year.length != 4) {
    $(".birth .warn").html("<span class='text-red'>태어난 년도 4자리를 정확하게 입력하세요.</span>");
    // birthWarn("태어난 년도 4자리를 정확하게 입력하세요.");
  } else if (month.length == 0 ) {
    $(".birth .warn").html("<span class='text-red'>태어난 월을 선택하세요.</span>");
    // birthWarn("태어난 월을 선택하세요.");
  } else if (date.length == 0 || date > 31 || date <= 0) {
    $(".birth .warn").html("<span class='text-red'>태어난 일(날짜) 2자리를 정확하게 입력하세요.</span>");
    // birthWarn("태어난 일(날짜) 2자리를 정확하게 입세요.");
  } else if (isNaN(year * month * date)) {
    $(".birth .warn").html("<span class='text-red'>생년월일을 다시 확인해주세요.</span>");
    // birthWarn("생년월일을 다시 확인해주세요.");
  } else if (now - year > 100) {
    $(".birth .warn").html("<span class='text-red'>정말이세요?</span>");
    // birthWarn("정말이세요?");
  } else if (nowstamp < birth) {
    $(".birth .warn").html("<span class='text-red'>미래에서 오셨군요. ^^</span>");
    // birthWarn("미래에서 오셨군요. ^^");
  } else {
    birthveri = true;
    $(".birth .warn").empty();
    // birthWarn("");
  }
});


// 성별
// .gender .inputbox를 클릭했을때
// .gender 모든 .inputbox에 .btn-primary class remove
// .gender .inputbox안 모든 input radio에서 checked false
// 클릭된 자신에게만 .btn-primary class add
// 클릭된 자신에게만 input radio에서 checked true
$(".gender .inputbox").click(function () {
  $(".gender .inputbox").removeClass("btn-primary");
  // jQuery에서 radio 버튼을 제어할 때는 prop 사용
  $(".gender .inputbox input[type='radio']").prop("checked", false);
  $(this).addClass("btn-primary");
  $(this).children("input[type='radio']").prop("checked", true);
  genderveri = true;
});


// 본인 확인 이메일
// .usermail input에서 focusout될 때
// 유저가 입력한 값을 mail이라는 변수에 담는다
// 이메일 형식에 맞게 입력하는 정규식을 mailExp 변수에 담는다.
// 만약 mail의 글자수가 0이라면 (조건1)
// .usermail .warn 내용을 비운다. (선택사항 이니까 경고 메시지 X)
// 값을 입력 했는데 입력받은 값이 메일 정규식에 맞지 않는다면 (조건2) 
// .usermail .warn에다가 "이메일 주소를 다시 확인해주세요."라고 쓰자.
// 그게 아니면 .usermail .warn 값을 비운다.
$(".usermail input").focusout(function () {
  let mail = $(this).val();
  // 대소문자, 숫자로 시작 가능 @ 다음에 . 까지 나와야함
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (mail.length == 0) {
    $(".usermail .warn").empty();
  } else if (!mailExp.test(mail)) {
    $(".usermail .warn").html("<span class='text-red'>이메일 주소를 다시 확인해주세요.</span>");
    mailveri = false;
  } else {
    $(".usermail .warn").empty();
  }
});


// 휴대전화
// .phonenum input에서 focusout됐을 때
// 그것의 value.length가 0이라면 (조건1)
// #phone .warn에 "필수 정보입니다." (실행문1)
$(".phonenum input").focusout(function () {
  if ($(this).val().length == 0) {
    $(".phone .warn").html("<span class='text-red'>필수 정보입니다.</span>");
  } else {
    $(".phone .warn").empty();
  }
});


$("#veribtn").click(function () {
  // .phonenum input의 length가 10-11자리가 아니라면(조건1)
  // 숫자가 아닌 경우(조건2)
  let verifi = $(".phonenum input").val();
  // 숫자를 제외한 모든 문자제거
  // 문자열 치환 replace
  verifi = verifi.replace(/[^0-9]/g, '');
  $(".phonenum input").val(verifi);

  let veri1;
  if (verifi.length < 10 || verifi.length > 11) {
    veri1 = false;
  } else {
    veri1 = true;
  }

  var veri2;
  if (!isNaN(verifi)) {
    veri2 = true;
  } else {
    veri2 = false;
  }

  // 1. 전화번호를 제대로 입력하면 인증번호를 발급해준다.
  // 2. 인증번호를 발급받으면 인증번호 입력칸을 활성화시킨다.
  // 3. 전화번호를 제대로 입력하지 않으면 인증번호 입력칸을 비활성화시킨다.
  if (veri1 && veri2) {
    // veri1, veri2 모두 true일 경우(조건1)
    // 인증번호를 보내고 .warn에 "인증번호가 발송되었습니다" (실행문1)
    // 인증번호 입력칸을 활성화 (실행문2)
    // .disinput으로부터 disinput이라는 클래스를 뺏고
    // #veritext로부터 disabled라는 속성을 뺏는다.
    $(".phone .warn").html('<span class="text-green">인증번호를 발송했습니다.(유효시간 30분)<br/>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br/>이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.</span>');
    $(".disinput").removeClass("disinput");
    $("#veritext").removeAttr("disabled");
  } else {
    // veri1, veri2가 모두 true가 아닐 경우(조건1)
    // #phone .warn에 "형식에 맞지 않는 번호입니다."
    // 인증번호 입력칸을 비활성화 
    // #veritext에게 disabled라는 속성을 준다.
    // #veritext의 부모(.inputbox)에게 disinput이라는 클래스를 준다.
    $(".phone .warn").html("<span class='text-red'>형식에 맞지 않는 번호입니다.</span>");
    $("#veritext").val("");
    $("#veritext").attr("disabled", true);
    $("#veritext").parent(".inputbox").addClass("disinput");
  }
});

// #veritext 에서 focusout될 때 그 값이 "1234"와 같다면 형제 요소인 div를 비운다.(empty)
// #phone .warn 에 "인증되었습니다."
// .inputbox에 border-red 클래스를 remove한다
// 그렇지 않다면
// 형제 요소인 div에 "불일치"라는 글을 보여준다
// #phone .warn 에 "인증번호를 다시 확인해주세요."
$("#veritext").focusout(function () {
  if ($(this).val() == "1234") {
    $(this).next("div").empty();
    $("#phone .warn").html("<span class='text-green'>인증되었습니다.</span>");
    $(this).parent(".inputbox").removeClass("border-red");
    phoneveri = true;
  } else {
    $(this).next("div").html('<span class="text-red">불일치</span> <span class="disagree"></span>');
    $("#phone .warn").html("<span class='text-red'>인증번호를 다시 확인해주세요.</span>");
    $(this).parent(".inputbox").addClass("border-red");
  }
});


// 카카오에서 제공하는 주소찾기 API 활용
// 행정자치부에서 제공하는 데이터 베이스를 바탕으로 업데이트 되므로 가장 최신 데이터
// API란? Application Programming Interface의 줄임말
// 프론트앤드(클라이언트)와 백앤드(서버)가 요청과 응답을 받을 수 있게 만들어진 체계
// 이 API를 만드는 사람이 서버 개발자 = 즉 백엔드 개발자
// Daum 우편번호 서비스 
// 예제 -> 사용자가 선택한 값 이용하기 -> 예제 코드보기
function sample6_execDaumPostcode() {
  addressveri = true;
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      let addr = ''; // 주소 변수
      let extraAddr = ''; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== '') {
          extraAddr = ' (' + extraAddr + ')';
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('sample6_postcode').value = data.zonecode;
        document.getElementById("sample6_address").value = addr;
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("sample6_detailAddress").focus();

        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("sample6_extraAddress").value = extraAddr;
      } else {
        document.getElementById("sample6_extraAddress").value = '';
      }
    }
  }).open();
}


// #joinbtn을 눌렀을때 8가지 인증요소를 모두 true라면 (조건1)
// #joinform을 submit (실행문)
// 그렇지 않다면 (하나라도 통과하지 못했다면)
// 현 페이지에 존재하는 모든 input,select들을 focusout 시킨다.
// .warn .text-red 중에서 첫번째의 부모
// 의 자손중에 input에게 focus를 준다.
$("#joinbtn").click(function (e) {
  if (idveri && pwveri && pwchkveri && nameveri && birthveri && genderveri && mailveri && phoneveri && addressveri) {
    $("#join-form").submit();
  } else {
    e.preventDefault();
    // 강제로 이벤트 발생시키는 메서드 trigger
    $("input").trigger("focusout");
    // $(".warn .text-red").first().parent().parent().find("input").trigger("focus");
  }
});
