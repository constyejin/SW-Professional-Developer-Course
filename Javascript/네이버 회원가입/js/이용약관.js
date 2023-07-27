let labels = document.querySelectorAll('label');
let totalLabels = document.querySelector('.total label');
let agreeAll = document.querySelectorAll('.agree');
let agreeLabels = document.querySelectorAll('.agree label');
let submitBtn = document.getElementById('submit');
let cancelBtn = document.getElementById('cancel');
// console.log(agreeLabels);

labels.forEach(function(tlabel){
  tlabel.addEventListener('click', function(e){
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


totalLabels.addEventListener('click', function(){
  agreeAll.forEach(function(agree){
    if(totalLabels.querySelector('.checkbox-img').classList.contains('checked')) {
      agree.querySelector('.checkbox-img').classList.add('checked');
      agree.querySelector("input[type='checkbox']").checked = true;
    } else {
      agree.querySelector('.checkbox-img').classList.remove('checked');
      agree.querySelector("input[type='checkbox']").checked = false;
    }
  })
})


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


