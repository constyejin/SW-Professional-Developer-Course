let buttons = document.querySelectorAll('.btn-group button');

// Array 객체에서 사용 가능한 메서드
// 배열의 값을 순차적으로 하나씩 함수에 전달한다.

// forEach의 파라미터
// 1.배열을 반복한 값
// 2. 배열의 인덱스 값
buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    let slideList = document.querySelector('.slide-list');
    let translateXValue = -index * 100 + 'vw';
    slideList.style.transform = 'translateX(' + translateXValue + ')';
  });
  console.log(button, index)
});
