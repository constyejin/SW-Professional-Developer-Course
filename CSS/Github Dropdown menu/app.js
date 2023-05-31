let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownButton = document.querySelector(".dropdown-button");

// dropdownButton에게 "click" 이벤트 리스너 추가
// 버튼이 활성 상태면 "active" 클래스를 제거하고,
// 비활성 상태면 "active" 클래스를 추가한다
dropdownButton.addEventListener("click", function () {
  // dropdownMenu.classList.toggle("active");

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
