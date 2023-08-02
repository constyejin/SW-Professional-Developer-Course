let inputAll = document.querySelectorAll('input');

inputAll.forEach(function (input) {
  input.addEventListener("focus", function () {
    this.parentNode.classList.add("input-act");
  });
});

inputAll.forEach(function (input) {
  input.addEventListener("focusout", function () {
    this.parentNode.classList.remove("input-act");
  });
});


let idveri = pwveri = pwchkveri = nameveri = birthveri = genderveri = phoneveri = addressveri = false;
let mailveri = true;


// 아이디
document.querySelector('.userid input').addEventListener('focusout', function(){
  let userId = this.value;
  let idExp= /^[a-z0-9]{5,8}$/;
  let idWarn = document.querySelector('.userid .warn');

  if(userId.length == 0) {
    idWarn.innerHTML = '<span class="text-red">필수 정보입니다.</span>';
  } else if(!idExp.test(userId)) {
    idWarn.innerHTML = '<span class="text-red">5~8자의 영문 소문자만 사용가능합니다.</span>';
  } else {
    idveri = true;
    idWarn.innerHTML = '<span class="text-green">멋진 아이디네요!</span>';
  }
})


// 
