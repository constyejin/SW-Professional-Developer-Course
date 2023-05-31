// // 1. 산술 연산자 : +, -, /, *, %
// console.log(30 + 10);
// console.log(30 - 10);
// console.log(30 * 10);
// console.log(30 / 10);
// // 나머지 연산자 : %
// console.log(30 % 10);
// // 거듭제곱 연산자 : **
// console.log(30 ** 10);


// // 2. 대입 연산자 : =, +=, -=
// let num1 = 123;
// let num2 = 456;
// let str1 = "Hello";
// let str2 = "World!";

// let num3, str3;

// num3 = num1 + num2;
// str3 = str1 + str2;
// console.log(num3);
// console.log(str3);

// let num4 = num1 - num2;
// console.log(num4);
// // 문자열을 더하는건 되지만 빼는건 NaN 
// let str4 = str1 - str2;
// console.log(str4);

// // 자바스크립트는 동적언어라 변수 선언시 타입 지정 X
// // 값이 할당되는 순간 값에 따라 타입이 결정됨
// // 자유도와 유연성이 높아서 장점도 있지만 치명적인 단점 
// // 1. 예상 못한 버그가 발생할 확률이 높다
// // 2. 프로젝트 규모가 커질수록 유지보수 비용 증가, 안정성 저하
// // 타입스크립트는 선언과 동시에 어떤 타입을 넘겨야 하는지 명확하게 작성
// // 해당 타입이 아닌 데이터를 넘긴다면 바로 컴파일러가 에러 발생시킴 -> 사전에 빠른 대응 가능
// // 예 let num:number = 1;
// let a = 'gg';
// let b = 123;
// let c = a + b;
// let d = 20 - '10';
// console.log(c, d);

// // TypeScript는 Microsoft가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어
// // 자바스크립트에 타입을 부여한 언어 -> 자바스크립트 상위 집합


// // 3. 복합 대입 연산자
// let num = 10;

// let result_1, result_2, result_3, result_4, result_5;
// result_1 = result_2 = result_3 = result_4 = result_5 = 10;

// //복합 대입 연산자 +=
// result_1 += num; // result_1 = result_1 + num ;
// console.log(result_1);

// //복합 대입 연산자 -=
// result_2 -= num; // result_2 = result_2 - num;
// console.log(result_2);

// //복합 대입 연산자 *=
// result_3 *= num; // result_3 = result_3 * num;
// console.log(result_3);

// //복합 대입 연산자 /=
// result_4 /= num; // result_4 = result_4 / num
// console.log(result_4);


// //복합 대입 연산자 %=
// result_5 %= num; // result_5 = result_5 % num
// console.log(result_5);

// // 증가 감소 연산자
// let number, result;
// number = 10;
// console.log(number);
// result = number++; // result에 num이 복사되고, num++는 다음 값 부터 num에 증가
// console.log(result);
// console.log(number);

// number = 10;
// console.log(number);
// result = ++number; // 이 행에서 ++가 반영되고, 업데이트 된 결과 값이 result에 저장이 된다.
// console.log(result);


// // 비교논리 연산자

// // 1. 비교 연산자
// // Number
// console.log("5" <= 10); // true
// console.log(true == 1); // true
// console.log(true === 1); // false : 엄격한 비교(자료형까지 비교)
// console.log(false != 0); // false 
// console.log(false !== 0); // true : 엄격한 비교(자료형까지 비교)

// // String
// console.log("Z" > "A"); // true
// console.log("Hello" < "Hi"); // true
// console.log("Hello" > "Helloo"); // false

// // 2. 논리 연산자
// // &&(AND), ||(OR), !(NOT)


// // Scope (전역변수, 지역변수)
// // 1. 지역변수에서 전역변수 사용 가능 (로컬스코프에서 글로벌 스코프 사용 O)
// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x);
// console.log(y);
// console.log(z);

// function local1() {
//   // 지역변수 안에서 변수에 값 재할당 가능
//   let x = 4;
//   let y = 5;
//   let z = 6;

//   console.log(x); // 4
//   console.log(y); // 5 
//   console.log(z); // 6
// }
// local1();

// // 2. 전역변수에서 지역변수 사용 불가능 (로컬스코프에서 글로벌 스코프 사용 X)
// let A = 1;
// let B = 2;

// function local2() {
//   let C = 3;
//   let D = 4;

//   console.log(A);
//   console.log(B);
//   console.log(C);
//   console.log(D);
// }
// local2();

//  // ReferenceError: C is not defined
// //  console.log(C);

// // 3. 로컬 스코프 내에 다른 로컬 스코프가 이중으로 겹칠 때
// // double1 함수에서는 double2 변수를 사용할 수 있지만, 
// // double2에서는 double1 변수를 사용할 수 없음!
// let e = 1;

// function double1() {
//   let f = 3;
//   let g = 4;
//   console.log(f); // 3
//   // ReferenceError 발생
//   // console.log(h);

//   function double2() {
//     let h = 5;
//     let i = 6;
//     console.log(h); // 5
//     console.log(g);
//   }
//   double2();
// }
// double1();


// // 조건문 (if-else)
// let apple_price = 6;

// if (apple_price >= 10) {
//   console.log("Very expensive :(");
// } else if (apple_price < 5) {
//   console.log("Very cheap! :)");
// } else {
//   console.log("Nice!");
// }


// let age = 19;
// let msg;

// if (age >= 19) {
//   // msg = '성인 입니다.';
//   document.write('성인 입니다.');
//   // document.write('<h1>' + msg + '</h1>');
//   // document.write(`<h1>${msg}</h1>`);
// } else {
//   document.write('성인이 아닙니다.');
// }

// // 삼항 연산자 
// msg_another = age >= 19 ? "성인 입니다." : "성인이 아닙니다."
// console.log(msg_another);


// // 조건문 (Switch)
// // 조건이 많은 경우 switch문을 사용하는 것이 가독성이 더 좋을 수 있다.
// // 조건이 맞으면 break 이후 비교하지 않고 switch문을 종료시킨다
// // default 문은 switch문의 가장 마지막에 위치하므로  
// // default문 실행이 종료되면 switch 문을 빠져나간다. 따라서 break 생략
// let day_number = 5;
// let day = "";

// switch (day_number) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default :
//     day = "Error";
// }
// console.log(day);

// // Switch 조건문2
// let browser = "Exploer";

// switch (browser) {
//   case "Exploer":
//     msg = "익스플로러";
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     msg = "오페라 누가 써요";
//     break;
//   default:
//     msg = "브라우저를 선택하세요!";
// };
// console.log(msg);


// // for문 (0부터 10까지 출력)
// let index = 1000;

// function local_func() {
//   let index = 100;
//   for (let index = 0; index < 10; index++) {
//     console.log(index); // 1 - 9
//   }
//   console.log(index); // 100
// }
// local_func();
// console.log(index); // 1000

// // 1부터 100까지 더한 값 출력
// // 초기값 -> 조건식 -> 출력 -> 증감값
// // 1. 초기값이 let i = 1 이라는 값을 메모리 공간에 저장
// // 2. 조건식 : i가 100보다 작거나 같아질 때 까지 계속 조건 실행 
// // i가 1이니 1 <= 100 이므로 true 
// // 2 <= 100 (반복)

// let zero = 0;

// for (let i = 1; i <= 100; i++) {
//   zero += i;
//   // zero = zero + i;
//   // zero = 0 + 1;
//   // 1 = 1 + 1;
//   // 2 = 2 + 1;
//   // 3 = 3 + 1;
//   // 조건식이 만족할 때 까지 ++로 값이 증감되면서 반복 실행
// }
// console.log(zero);


// // 1부터 100까지 숫자 중에 짝수만 html 파일에 출력
// for(let i = 1; i <= 100; i++) {
//   if(i % 2 == 0) {
//     document.write(i, '<br>');
//     // document.write(`${i}<br>`);
//     // document.write('<p>' + i + '</p>');
//     // document.write(`<p>${i}</p>`);
//   }
// }

// // 이중 for문
// for (let i = 0; i < 3 ; i++ ) {
//   for(let j = 0; j < 3; j++ ) {
//     console.log(`${i} + ${j} = ${i + j}`)
//   }
// }

// // 반복문 연습문제 2 (구구단 2-9단까지)
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     // document.write(`${i} * ${j} = ${i * j} <br>`);
//   }
// }


// JS for문 별 찍기
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    document.write('*')
  }
  document.write('<br>');
}

// JS for문 별 찍기(2개씩 증가)
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i * 2; j++) {
    document.write('*')
  }
  document.write('<br>');
}

// for문 별 반대로 찍기
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write('*');
  }
  document.write('<br>');
}

// 반복문 연습문제 1
const UNTIL_NUM = 10;
let sum = 0;

for (i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

