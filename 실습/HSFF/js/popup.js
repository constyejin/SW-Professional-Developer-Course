let closeBtn = document.querySelector('.close-btn button');

closeBtn.addEventListener('click', function(){
  // setTimeout(function(){
     document.querySelector('.popup').style.display = 'none';
  // }, 3000)
})

// 쿠키를 이용한 시간 설정으로 팝업창 하루 보이지 않게 하기
// 사용자가 그냥 닫았는지, 하루 열지 않음을 체크 했는지 확인
// setCookie00() 함수를 호출할 경우 00시 기준으로 쿠키값 초기화
// setCookie24() 함수를 호출할 경우 24시간 후에 쿠키값이 초기화
