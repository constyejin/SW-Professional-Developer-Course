let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownButton = document.querySelector(".dropdown-button");

// dropdownButton에게 "click" 이벤트 리스너 추가
// 버튼이 활성 상태면 "active" 클래스를 제거하고,
// 비활성 상태면 "active" 클래스를 추가한다
dropdownButton.addEventListener("click", function (e) {
  e.preventDefault()
  // dropdownMenu.classList.toggle("active");

  // 현재 버튼의 활성화 상태 확인
  // 활성화 상태라면 True니까 실행 아니라면 False니까 else구문 실행
  // active CSS 의사 클래스는 사용자가 활성화한 요소(버튼 등)를 나타낸다. 마우스를 사용하는 경우, active는 마우스 버튼을 누르는 순간부터 떼는 시점까지를 의미한다.
  if (this.active) {
    dropdownMenu.classList.remove("active")
  } else {
    dropdownMenu.classList.add("active")
  }

  // this.active : 현재 버튼의 활성 상태
  // !this.active는 현재 버튼 활성 상태의 반대 값
  // 버튼이 비활성 상태라면 활성 상태로, 
  // 활성 상태라면 비활성 상태로 반전 시킨다
  this.active = !this.active
})
