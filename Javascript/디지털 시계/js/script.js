let now = new Date();
let hr = now.getHours();

// 두자리수로 시간 표시
setInterval(function(){
  let now = new Date();
  let hr =  now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  // console.log(typeof(hr))

  // 조건문으로 구현
  if(hr >= 10) {
    hnum = hr;
  } else {
    hnum = '0' + hr;
  }

  if(min >= 10) {
    mnum = min;
  } else {
    mnum = '0' + min;
  }

  if(sec >= 10) {
    snum = sec;
  } else {
    snum = '0' + sec;
  }
  document.querySelector('.phone-time').innerHTML = `${hnum} : ${mnum} : ${snum}`;


  // padStart() method 사용
  // 값.padStart(자리수, 채울문자)
  // 현재 문자열의 length가 자리수 보다 작을 경우 채울문자에 작성된 문자로 자리수를 채워주는 method
  // String(숫자) -> 숫자를 문자로 변환
  // hr = String(hr).padStart(2, '0');
  // min = String(min).padStart(2, '0');
  // sec = String(sec).padStart(2, '0');

  // document.querySelector('.phone-time').innerHTML = `${hr} : ${min} : ${sec}`;
}, 1000)


// 시간에 맞춰 배경 이미지랑 버튼 활성화
// 6시 ~ 11시 까지 morning
// 12 ~ 15시 까지 afternoon
// 16 ~ 19시 까지 evening
// 20 ~ night
let btnList = document.querySelectorAll(".btn-list li");

if(hr >= 6 && hr < 12) {
  document.getElementById("wrapper").classList.add("morning");
  btnList[0].classList.add("on");
} else if(hr >= 12 && hr < 16) {
  document.getElementById("wrapper").classList.add("afternoon");
  btnList[1].classList.add("on");
} else if(hr >= 16 && hr < 20) {
  document.getElementById("wrapper").classList.add("evening");
  btnList[2].classList.add("on");
} else {
  document.getElementById("wrapper").classList.add("night");
  btnList[3].classList.add("on");
}


// 버튼 클릭 했을 때 배경 이미지 변경 및 on class add & remove
let back = document.getElementById("wrapper");

btnList.forEach(function(btn){
  // 각 btn의 html 내용을 text 라는 변수에 저장
  let text = btn.querySelector("a").innerHTML;
  console.log(text);

  // 각 버튼에 클릭 이벤트 추가
  btn.addEventListener('click', function(e){
    // a 링크 페이지 이동하는 것 막기
    e.preventDefault();

    // 모든 버튼을 다시 한 번 돌면서 on class remove
    btnList.forEach(function(e){
      e.classList.remove('on');
    })
    
    // 현재 클릭된 버튼 요소에만 on class add
    btn.classList.add('on');
    // Element.className  = 'class name';
    // 기존에 클래스가 없으면 add, 있으면 기존 것을 우측 class name으로 변경
    // classList.add : 해당 요소에 새로운 class add
    back.className = text;
  })
})
