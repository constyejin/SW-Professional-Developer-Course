// 'use strict';
// 해당 코드를 JS파일 최상단에 넣으면 자바스크립트를 엄격하게 사용할 수 있다.
// num = 1;

// this 키워드는 사용 상황에 따라 3~4 정도의 뜻을 가지고 있다
// 1. window 라는 object (그냥 쓰거나 일반 함수 안에서 사용)
// 2. object안 함수에서 사용한 this => 그 함수를 가지고 있는 오브젝트
// console.log(this);

function 함수() {
  // strict 모드를 실행하면 this를 찍으면 undefined 출력
  // console.log(this);
}
// 함수()


// let 오브젝트 = {
//   name : 'yejin',
//   함수 : function(){
//     console.log(this);
//   }
// }

// 오브젝트.함수();


// 응용
// object 인데 안에 함수를 담고있는 object
// object 내에서 함수 생성시 function 생략 가능
let 오브젝트1 = {
  data : {
    함수 : function(){
      console.log(this)
    }
  }
}
// 오브젝트1.data.함수();


// 기존 문법 : function(){}
// 신 문법 Arrow funcion : () => {}
// Arrow Function : this값을 함수밖에 있는 값을 그대로 사용
let arrow = {
  data : {
    함수 : () => {
      console.log(this)
    }
  }
}
// arrow.data.함수();


// Javascript에서 전역공간에서 함수나 변수를 만들면 {window}에 보관한다.
// window 라는 object에서 this 출력하면 나를 담고 있는 object 출력
// window : { 
//   함수(){console.log('')}
// }
window.함수();


document.getElementById('btn').addEventListener('click', function(e){
  // console.log(this);
  // console.log(e.currentTarget);

  // let nums = [1,2,3];
  // nums.forEach(function(num){
  //   console.log(this);
  // });

  // nums.forEach((num) => {
  //   console.log(this)
  // })
})


// let data = {
//   names : ['예진', '빛나', '세아'],
//   fun : function(){
//     console.log(this) // 함수를 소유한 object
//     data.names.forEach(function(){
//       console.log(this) //  window
//     })
//   }
// }

// data.fun();


// arrow function 특징 : 내부의 this값을 변화시키지 않음(외부 this값 그대로 재사용)
// let data = {
//   names : ['예진', '빛나', '세아'],
//   fun : function(){
//     console.log(this) // 함수를 소유한 object
//     data.names.forEach(() => {
//       console.log(this) //  window
//     })
//   }
// }

// data.fun();
