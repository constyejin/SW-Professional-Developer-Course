let labels = document.querySelectorAll('label');
let totalLabel = document.querySelector('.total label');
let agreeAll = document.querySelectorAll('.agree');
let agreeLabels = document.querySelectorAll('.agree label');
let submitBtn = document.getElementById('submit');
let cancelBtn = document.getElementById('cancel');
// console.log(agreeLabels);

// 각 label 클릭시 
// 클릭된 label 안 .checkbox-img에 checked class toggle
// 클릭된 label 안 input checkbox에 checked 속성 ture / false
labels.forEach(function(label){
  label.addEventListener('click', function(e){
    e.preventDefault();
    this.querySelector('.checkbox-img').classList.toggle('checked');

    let inputCheck = this.querySelector("input[type='checkbox']")
    // JS에서 특정 class를 포함하는지 확인하는 함수 classList.contains()
    // .checked를 통해 체크 유무를 확인 할 수 있다.
    // 체크되어 있다면 ture / 해제되어 있으면 false 반환
    if(this.querySelector('.checkbox-img').classList.contains('checked')) {
      inputCheck.checked = true;
    } else {
      inputCheck.checked = false;
    }
  })
})


// .total label 클릭시
// .agree 안에 있는 모든 .checkbox-img에 checked class add / remove
// .agree 안에 있는 모든 input checkbox에 checked 속성 ture / false 
agreeAll.forEach(function(agree){
  totalLabel.addEventListener('click', function(){
    // forEach 메서드 안에서 this를 사용하면, this는 현재 반복 중인 배열의 요소를 참조
    if(this.querySelector('.checkbox-img').classList.contains('checked')) {
      agree.querySelector('.checkbox-img').classList.add('checked');
      agree.querySelector("input[type='checkbox']").checked = true;
    } else {
      agree.querySelector('.checkbox-img').classList.remove('checked');
      agree.querySelector("input[type='checkbox']").checked = false;
    }
  })
})



// .agree label이 모두 체크 됐을 때 
// .total label 안 .checkbox-img에 checked class add
// .total label 안 input checkbox에 checked 속성 true

// .agree label이 모두 체크 되지 않았을 때
// .total label 안 .checkbox-img에 checked class remove
// .total label 안 input checkbox에 checked 속성 falsew
agreeLabels.forEach(function(alabel){
  alabel.addEventListener('click', function(){
    let len = document.querySelectorAll('.agree .checkbox-img').length;
    let chklen = document.querySelectorAll('.agree .checked').length;
    let unchk = len - chklen;
    // console.log(len, chklen)

    if(unchk == 0) {
      document.querySelector('.total label .checkbox-img').classList.add('checked');
      document.querySelector('input[type="checkbox"]').checked = true;
    } else {
      document.querySelector('.total label .checkbox-img').classList.remove('checked');
      document.querySelector('input[type="checkbox"]').checked = false;
    }
  })
})


// #submit(확인) 버튼을 클릭 했을 때
// 필수 항목 2개 모두 체크 되었다면 #form1 submit
// 필수 항목 2개 모두 체크되지 않았다면 e.preventDefault()로 전송을 막고 .req-alert를 보여준다.
submitBtn.addEventListener('click', function(e){
  let req = document.querySelectorAll('.req').length;
  let chkreq = document.querySelectorAll('.req .checked').length;
  let unchk = req - chkreq;
  console.log(req, chkreq);

  if(unchk == 0) {
    document.getElementById('form1').submit();
  } else {
     e.preventDefault();
     document.querySelector('.req-alert').style.visibility = 'visible';
  }
})


cancelBtn.addEventListener('click', function(){
  // 페이지 이동
  location.href = 'http://naver.com';
  // 현재 페이지를 대체하기 때문에 이전 페이지로 이동 X
  // location.replace('http://www.naver.com');
  // 새 창 이동
  // window.open('http://naver.com');
})


