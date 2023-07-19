let buttons = document.querySelectorAll('.btn-group button');
const slideList = document.querySelector('.slide-list');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    let translateXValue = -index * 100 + 'vw';
    slideList.style.transform = 'translateX(' + translateXValue + ')';
    
    // buttons 라는 배열을 한 번 더 돌면서 모든 버튼이 가지고 있는 active class 삭제
    buttons.forEach(function(otherBtn){
      otherBtn.classList.remove('active');
      console.log(otherBtn)
    })
    // 클릭된 버튼에만 actvie class 추가
    button.classList.add('active');

    // 조건문
    // 클릭된 버튼에게 activa class추가
    // 현재 클릭되어 있는 버튼이 아닐 때 && actvie라는 클래스를 포함하고 있다면 remove
    // buttons.forEach(function(otherButton) {
    //   if (otherButton !== button && otherButton.classList.contains('active')) {
    //     otherButton.classList.remove('active');
    //   }
    // });
  });
});
