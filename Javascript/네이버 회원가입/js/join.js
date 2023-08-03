// Essential Infomation
let essenInfo = '<span class="text-red">필수 정보입니다.</span>';

document.querySelectorAll('input').forEach(function (input) {
  input.addEventListener("focus", function () {
    this.parentNode.classList.add("input-act");
  });
});

document.querySelectorAll('input').forEach(function (input) {
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
    idWarn.innerHTML = essenInfo;
  } else if(!idExp.test(userId)) {
    idWarn.innerHTML = '<span class="text-red">5~8자의 영문 소문자만 사용가능합니다.</span>';
  } else {
    idveri = true;
    idWarn.innerHTML = '<span class="text-green">멋진 아이디네요!</span>';
  }
})


// 비밀번호
document.querySelector('.userpw input').addEventListener('focusout', function(){
  let userPw = this.value;
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;

  let pwWarn = document.querySelector('.userpw .warn');
  let pwText = document.querySelector('.userpw .inputbox p');
  let pwImg = document.querySelector('.userpw .inputbox img');

  if(userPw.length == 0) {
    pwWarn.innerHTML = essenInfo;
    pwText.innerHTML = '';
    pwImg.src = 'images/m_icon_pw_step_01.png';
  } else if(!pwExp.test(userPw)) {
    pwWarn.innerHTML = '<span class="text-red">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>';
    pwText.innerHTML = '<span class="text-red">사용불가</span>';
    pwImg.src = 'images/m_icon_pw_step_10.png';
  } else {
    pwveri = true;
    pwWarn.innerHTML = '';
    pwText.innerHTML = '<span class="text-green">안전</span>';
    pwImg.src = 'images/m_icon_pw_step_04.png';
  }
})


// 비밀번호 재확인
document.querySelector('.userpw-chk input').addEventListener('focusout', function(){
  let userpwChk = this.value;
  let pwChkWarn = document.querySelector('.userpw-chk .warn');
  let pwChkImg = document.querySelector('.userpw-chk .inputbox img');

  if(userpwChk.length == 0) {
    pwChkWarn.innerHTML = essenInfo;
    pwChkImg.src = 'images/m_icon_pw_step_02.png';
  } else if(userpwChk == document.querySelector('.userpw input').value) {
    pwchkveri = true;
    pwChkWarn.innerHTML = '';
    pwChkImg.src = 'images/m_icon_pw_step_07.png';
  } else {
    pwChkWarn.innerHTML = '<span class="text-red">비밀번호가 일치하지 않습니다.</span>';
    pwChkImg.src = 'images/m_icon_pw_step_02.png';
  }
})


// 이름
document.querySelector('.username input').addEventListener('focusout', function(){
  let userName = document.querySelector('.username input').value;
  let nameExp = /^[가-힣]{2,5}$/;
  let nameWarn = document.querySelector('.username .warn');

  if(userName.length == 0) {
    nameWarn.innerHTML = essenInfo;
  } else if(!nameExp.test(userName)) {
    nameWarn.innerHTML = '<span class="text-red">2 ~ 5글자 사이의 한글로 입력하세요.(특수기호 사용 불가)</span>';
  } else {
    nameveri = true;
    nameWarn.innerHTML = '';
  }
})


// 생년월일
function birthWarnTxt(text) {
  document.querySelector('.birth .warn').innerHTML = '<span class="text-red">' + text + '</span>';
}

let birthItems = document.querySelectorAll('.birth-item');
// console.log(birthItems);

birthItems.forEach(function(item){
  item.addEventListener('focusout', function(){
    let year = birthItems[0].value;
    let month = birthItems[1].value;
    let date = birthItems[2].value;
    // console.log(month)
    let birthWarn = document.querySelector('.birth .warn');

    let now = new Date();
    let nowstamp = now.getTime();
    now = now.getFullYear();

    let birth = new Date(year, month, date);
    birth = birth.getTime();

    if (year.length !== 4) {
      birthWarn.innerHTML = "<span class='text-red'>태어난 년도 4자리를 정확하게 입력하세요.</span>";
    } else if (month.length === 0) {
      birthWarn.innerHTML = "<span class='text-red'>태어난 월을 선택하세요.</span>";
    } else if (date.length === 0 || date > 31 || date <= 0) {
      birthWarn.innerHTML = "<span class='text-red'>태어난 일(날짜) 2자리를 정확하게 입력하세요.</span>";
    } else if (isNaN(year * month * date)) {
      birthWarn.innerHTML = "<span class='text-red'>생년월일을 다시 확인해주세요.</span>";
    } else if (now - year > 100) {
      birthWarn.innerHTML = "<span class='text-red'>정말이세요?</span>";
    } else if (nowstamp < birth) {
      birthWarn.innerHTML = "<span class='text-red'>미래에서 오셨군요. ^^</span>";
    } else {
      birthveri = true;
      birthWarn.innerHTML = "";
    }
  })
})


// 성별
let genderInputs = document.querySelectorAll('.gender .inputbox');

genderInputs.forEach(function(input){
  input.addEventListener('click', function(){
    genderInputs.forEach(function(input){
      input.classList.remove('btn-primary');
      input.querySelector('input[type="radio"]').checked = false;
    })

    genderveri = true;
    this.classList.add('btn-primary');
    this.querySelector('input[type="radio"]').checked = true;
  })
})


// 본인 확인 이메일
document.querySelector('.usermail input').addEventListener('focusout', function(){
  let userMail = this.value;
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  let mailWarn = document.querySelector('.usermail .warn');

  if(userMail.length == 0) {
    mailWarn.innerHTML = '';
  } else if(!mailExp.test(userMail)) {
    mailveri = false;
    mailWarn.innerHTML = '<span class="text-red">이메일 주소를 다시 확인 해주세요.</span>'
  } else {
    mailWarn.innerHTML = '';
  }
})


// 휴대전화
document.querySelector('.phonenum input').addEventListener('focusout', function(){
  let phoneNum = this.value;
  let numWarn = document.querySelector('.phone .warn');

  if(phoneNum.length == 0) {
    numWarn.innerHTML = essenInfo;
  } else {
    numWarn.innerHTML = '';
  }
})

document.getElementById('veribtn').addEventListener('click', function(){
  let phoneNum = document.querySelector('.phonenum input').value;
  phoneNum = phoneNum.replace(/[^0-9]/g, '');
  document.querySelector('.phonenum input').value = phoneNum;
  let numWarn = document.querySelector('.phone .warn');
  let veriText = document.getElementById('veritext');

  let phoneValLeng;
  if (phoneNum.length < 10 || phoneNum.length > 11) {
    phoneValLeng = false;
  } else {
    phoneValLeng = true;
  }

  var phoneValNum;
  if (isNaN(phoneNum)) {
    phoneValNum = false;
  } else {
    phoneValNum = true;
  }

  if (phoneValLeng && phoneValNum) {
    numWarn.innerHTML = '<span class="text-green">인증번호를 발송했습니다.(유효시간 30분)<br/>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br/>이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.</span>';
    veriText.parentNode.classList.remove('disinput');
    veriText.disabled = false;
  } else {
    numWarn.innerHTML = '<span class="text-red">형식에 맞지 않는 번호입니다.</span>';
    veriText.parentNode.classList.add('disinput');
    veriText.disabled = true;
    veriText.value = '';
  }
})


document.getElementById('veritext').addEventListener('focusout', function(){
  let numWarn = document.querySelector('.phone .warn');

  if(this.value == '1234') {
    phoneveri = true;
    numWarn.innerHTML = '<span class="text-green">인증되었습니다.</span>';
    this.nextElementSibling.innerHTML = '';
    this.parentNode.classList.remove('border-red');
  } else {
    numWarn.innerHTML = '<span class="text-red">인증번호를 다시 확인해주세요.</span>';
    this.nextElementSibling.innerHTML = '<span class="text-red">불일치</span> <span class="disagree"></span>';
    this.parentNode.classList.add('border-red');
  }
})




