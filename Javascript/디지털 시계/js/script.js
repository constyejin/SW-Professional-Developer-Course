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


let now = new Date();
let hr = now.getHours();
let buttons = document.querySelectorAll(".btn-list li");

// 6시 ~ 11시 까지 morning
// 12 ~ 15시 까지 afternoon
// 16 ~ 19시 까지 evening
// 20 ~ night
if(hr >= 6 && hr < 12) {
  document.getElementById("wrapper").classList.add("morning");
  buttons[0].classList.add("on");
} else if(hr >= 12 && hr < 16) {
  document.getElementById("wrapper").classList.add("afternoon");
  buttons[1].classList.add("on");
} else if(hr >= 16 && hr < 20) {
  document.getElementById("wrapper").classList.add("evening");
  buttons[2].classList.add("on");
} else {
  document.getElementById("wrapper").classList.add("night");
  buttons[3].classList.add("on");
}



// querySelectorAll을 이용해서 nav li 들을 담아준다
let btnList = document.querySelectorAll(".btn-list li");
let back = document.getElementById("wrapper");

btnList.forEach(function(btn){
  let text = btn.querySelector("a").innerHTML;
  console.log(text);

  btn.addEventListener('click', function(a){
    a.preventDefault();
    btnList.forEach(function(e){
      e.classList.remove('on');
    })
    btn.classList.add('on');
    back.className = text;
  })
})
