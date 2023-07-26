$('.open-btn').on('click', function(e){
  $('.black-bg').addClass('is-open');
  console.log($(e.target))
  console.log(e.target)
})

$('.close-btn').on('click', function(){
  $('.black-bg').removeClass('is-open');
})

$('.black-bg').on('click', function(e){
  if($(e.target).is('.black-bg')) {
    console.log('ggg')
    $('.black-bg').removeClass('is-open');
  }
})

// 바닐라 JS랑 jQuery에서 e.target이 동작하는 방식이 다름
// JS에서 e.target은 이벤트가 발생한 요소 자체를 가르킨다. 

// jQuery에서는 이벤트가 발생한 요소를 객체로 반환한다.
// jQuery에서 객체를 비교할 때는 부등호 대신 .is() 메서드를 사용한다.
// $(선택요소).is(비교할 요소)
// 값을 확인한 후 Boolean true, false를 반환한다.
// != 같지 않다 / !를 사용해서 .is() 메서드 결과를 부정한다.


// JS의 == 부등호는 객체의 내용이 아닌 참조를 비교하므로, 동일한 내용이라도 false를 반환하게 된다.
// 객체의 실제 값(데이터), 객체가 저장된 메모리 주소(참조)
// JS에서 객체(참조 타입) 
// 객체를 변수에 할당하면 그 변수에는 실제 객체 값이 아니라 객체의 메모리 주소가 저장된다.
// deep copy(깊은 복사), shallow copy(얕은 복사) ... 

// Javascript를 이루고 있는 거의 모든 것이 객체
// 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입 key / value 형태
// 객체의 종류 : 배열, 함수, 객체, 날짜, 정규표현식 등
