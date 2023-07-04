let button1 = document.querySelector('.btn1');
let button2 = document.querySelector('.btn2');
let button3 = document.querySelector('.btn3');

button1.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(0)';
})

button2.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
})

button3.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
})
