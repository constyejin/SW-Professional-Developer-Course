// Cookie
// 정보 저장 두군데 
// 1. 클라이언트 - cookie
// 2. 서버 - cookie, seesion
// 둘 다 텍스트 형태의 문자 

// 쿠키를 저장하도록 허락 할거냐 말거냐, -> 서버에 저장
// 사용자가 해당 사이트에 언제 접속해서 어떤 행동을 했는지 저장
// cookie : 일정기간 동안 데이터 값을 브라우저가 내부에 저장하는 것
// 브라우저는 내용을 기억할 공간이 없다. 따라서 그러한 것을 기억하도록 도와주는 것이 쿠키
// 쿠키가 저장되는 방식은 name = value 방식

// 개발자 도구 -> Application -> Cookies

// 만료기간을 넣어서 쿠키가 자동 만료 되도록 제작.(UTC 이용)
// setCookie 함수와 getCookie 함수를 사용하여 쿠키를 설정하고 가져온다
// setCookie 함수는 쿠키 설정, getCookie 함수는 쿠키 값을 가져올 때 사용한다
// localStorage를 사용하는 방법도 있는데 cookie가 더 쉽게 구현할 수 있다.

function setCookie(name, value, hours) {
  // 빈 문자열로 초기화. 쿠키 만료시간 담을 변수
  let expires = "";
  // 만약 hours 값이 있다면 (true 라면)
  if (hours) {
    // date 변수에 현재 시간을 가지는 Date 객체를 생성한다.
    let date = new Date();
    // date 값을 현재 시간 + hours를 더한 값으로 set 해준다.
    // 이렇게 되면 쿠키 만료시간이 hours 더한 시간만큼 뒤로 설정

    // 시간(hour)을 밀리초(ms)로 변환
    // 시간 * 60(분) * 60(초) * 1000(밀리초)
    // Javascript에서 시간을 다룰 때 일반적으로 밀리초로 계산한다.
    // 그 이유는 Date 객체가 밀리초 단위로 시간을 나타내기 때문
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));

    // ;(세미콜론)
    // 쿠키 설정 문자열은 옵션과 값으로 구성되는데 각각의 옵션과 값을 세미콜론으로 구분한다.
    // toUTCString() : Date 객체의 시간 -> UTC 형식의 문자열로 변환
    // 쿠키 만료 시간을 표준화된 방식으로 설정
    expires = "; expires=" + date.toUTCString();
  }
  // document.cookie 속성에 쿠기 값을 설정
  // 논리 연산자 OR(||)을 사용해서 value가 존재하면 그 값을 사용
  // value가 없을 경우 false를 사용해서 쿠기 값을 설정한다.

  // "; path=/" : 쿠키가 어떤 경로에서 유효한지 경로 설정
  // 경로를 설정 할 때 slash를 사용하면 현재 도메인의 모든 경로에서 쿠키가 유효함
  // /shopping 으로 작성 할 경우 해당 경로에서만 쿠키 사용 가능!
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


// 특정 이름의 쿠키 값을 가져오는 함수
function getCookie(name) {
  // name Equal
  // 쿠키의 이름과 값 사이에는 항상 equal 기호가 들어간다
  // name = value 형식 
  // 쿠기이름= 기호로 쿠키의 이름과 일치하는 문자열인지 확인
  let nameEqu = name + "=";
  // 쿠키의 옵션과 값은 세미콜론으로 구분되기 때문에 
  // 현재페이지의 쿠키 문자열은 세미콜론을 기준으로 쪼개서 배열로 만든다.
  // 반복문을 사용해서 각 쿠키를 순회하기 위해서 배열로 만든다.
  let cookies = document.cookie.split(';');

  // cookies 라는 배열을 순회하면서 쿠키 값을 찾는다.
  for (let i = 0; i < cookies.length; i++) {
    // 현재 순회중인 쿠키 문자열을 cookie 변수에 담는다.
    let cookie = cookies[i];

    // while문으로 공백이 모두 제거 될 때 까지 반복적으로 실행
    // while문은 조건식의 결과가 true일 경우 코드 블록을 반복적으로 수행한다.
    // 조건식의 결과가 false일 때 while 문을 빠져 나온다.
    // 공백이 여러개 있을 경우 if문으로 모두 제거하기 어렵기 때문에 while 사용
    // while (cookie.charAt(0) === ' ') {
    //   cookie = cookie.substring(1, cookie.length);
    // }

    // 쿠키 문자열에서 특정 이름과 일치하는 쿠키의 값을 추출하여 반환
    // indexOf : 문자열 내에서 특정 문자열의 위치를 찾는 메서드
    // nameEqu가 쿠키 문자열의 시작(0) 위치에서 시작되는지 확인
    // substring() : 문자열의 시작 인덱스와 끝 인덱스를 지정하여 해당 범위의 문자들을 추출
    if (cookie.indexOf(nameEqu) === 0) {
      // 쿠키의 이름과 일치 하다면 해당 쿠키 값을 추출한다.
      return cookie.substring(nameEqu.length, cookie.length);
    }
  }
  // 일치하는 쿠키를 찾지 못했을 때, null을 반환해서 해당 쿠키가 존재하지 않는걸 나타낸다.
  return null;
}


// 문서가 로드될 때 실행될 함수 설정
document.addEventListener("DOMContentLoaded", function() {
  let popup = document.querySelector(".popup");
  let nonePopup = document.getElementById("none-popup");
  let closeBtn = document.getElementById("close-btn");

  // getCookie에서 hidePopup 값을 가져 왔을 때 null이 아니라면
  if (getCookie("hidePopup")) {
    popup.style.display = "none";
  }

  closeBtn.addEventListener("click", function() {
    popup.style.display = "none";

    // 체크박스에 체크가 되어 있다면, setCookie 함수에 name, value, hours
    // 값을 전달해서 24시간 동안 팝업이 보이지 않게 한다.
    if (nonePopup.checked) {
      setCookie("hidePopup", "true", 24); // 쿠키를 24시간 동안 유지
    }
  });
});




// document.addEventListener("DOMContentLoaded", function() {
//   var openBtn = document.getElementById("open-btn");
//   var closeBtn = document.getElementById("close-btn");
//   var popup = document.querySelector(".popup");
//   var nonePopup = document.getElementById("none-popup");

//   // 체크박스 값에 따라 팝업을 보여주거나 숨김 처리
//   if (!localStorage.getItem("hidePopup")) {
//     popup.style.display = "flex";
//   }

//   openBtn.addEventListener("click", function() {
//     popup.style.display = "flex";
//   });

//   closeBtn.addEventListener("click", function() {
//     popup.style.display = "none";

//     // 체크박스가 체크된 경우, 팝업을 24시간 동안 숨김 처리
//     if (nonePopup.checked) {
//       localStorage.setItem("hidePopup", "true");
//       setTimeout(function() {
//         localStorage.removeItem("hidePopup");
//       // 24시간을 밀리초로 변환 => 시간 * 분 * 초 * 1000(ms)
//       }, 24 * 60 * 60 * 1000); 
//     }
//   });
// });
