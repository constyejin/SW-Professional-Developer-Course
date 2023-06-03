// 변수 선언 : var, let, const 
// 변수명이 길더라도 명시적으로 적어주는 게 좋음
const sidebarMenuButton = document.querySelector('.gnb-icon-button')

const sidebar = document.querySelector('.sidebar')
// 자바스크립트가 처음이기 때문에 하나하나 이해하려고 하지말고 
// 저런 식으로 작성을 하는구나 정도만 느껴도 충분함 
// 그렇다고 지켜보지만 말고 코드를 같이 작성 해보는게 중요함
const sidebarOverlay = document.querySelector('.overlay')

// 어떤 실수를 할지 모르기 때문에 항상 작성을 하고나서 
// 내 의도대로 작성을 했는지 확인을 해보는게 좋음 -> 
// 실수가 적어지니까 실력이 빨리 늘게됨. => 
// 그 중에 방법 하나가 로그 찍어보기

// console.log(sidebarMenuButton, sidebar, sidebarOverlay)

function openSidebar() {
  // 우리가 하고 싶은 내용 = 사이드바, 오버레이가 보이게 하려면 
  // is-active라는 클래스를 가지고 있으면 됨
  // DOM에 메소드를 이용해서 쉽게 클래스를 추가 및 제거 할 수 있음 
  // 그걸 도와주는 친구가 classList

  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');

  // 어떤 요소의 class를 쉽게 제어할 수 있음
  // querySelector에서는 선택자니까 css의 선택자로 클래스를 표현할 때는 
  // 앞에 점을 찍어줘야하기 때문에 여기서는 점을 찍어 줘야함. 
  // BUT classList에서는 선택자처럼 점을 찍지 않고 추가하고 싶은 
  // class 이름만 넣어주면 됨!
}

// 내가 sidebarMenuButton에게 클릭 이벤트를 추가할건데, 걔를 클릭 했을 때 openSidebar 함수를 실행 시켜줘
sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  // is-actvie 제거
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
