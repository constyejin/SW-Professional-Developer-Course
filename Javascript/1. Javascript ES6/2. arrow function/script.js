// ES6 Arrow funciton
// function 키워드 대신 => 사용


// Arrow function
// () => { }
// function 함수이름 (){}

// 함수는 항상 목적에 맞게 사용해야 한다.
// 1. 코드들을 기능으로 묶을 때 사용
// 2. 입출력 기능를 만들고 싶을 때 사용(parameter)

// Arrow Function 장점
// 1. 파라미터가 하나일 때 소괄호(a)생략 가능
// 2. 코드가 줄바꿈 없이 한 줄이면 중괄호, return도 생략 가능
// let plus = (num) => {return num + 10}
// console.log(plus(10))

// function plus1(num){
//   return num + 10;
// }
// console.log(plus1(20))


// [1,2,3,4].forEach(function(one){
//   console.log(one);
// })

// arrow function
// 소괄호, 중괄호 생략가능
// [1,2,3,4].forEach((two)=>{console.log(two)});


// document.getElementById('btn').addEventListener('click', function(){
//   this.innerHTML = '버튼';
//   console.log(this);
// })

// arrow funcion은 함수내의 this값을 변경시키지 않는다.
// 일반 이벤트리스너 => this == e.currentTarget
// arrow function => this == 바깥 this 값
// 
// document.getElementById('btn').addEventListener('click', (e) => {
//   this.innerHTML = '버튼';
//   e.currentTarget.innerHTML = '버튼';
//   console.log(this);
//   console.log(e.currentTarget);
// })


// Arrow function 예시3. object 안의 함수
// let 오브젝트 = {
//   함수 : () => {
//     console.log(this)
//   }
// }
// 오브젝트.함수();
