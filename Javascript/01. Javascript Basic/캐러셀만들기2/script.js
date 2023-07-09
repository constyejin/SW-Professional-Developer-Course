let buttons = document.querySelectorAll('.btn-group button');
const slideList = document.querySelector('.slide-list');

// buttons.forEach(function(button, index) {
//   button.addEventListener('click', function() {
//     let slideList = document.querySelector('.slide-list');
//     let translateXValue = -index * 100 + 'vw';
//     slideList.style.transform = 'translateX(' + translateXValue + ')';

//     button.classList.add('active')

//     buttons.forEach(function(otherButton) {
//       if (otherButton !== button && otherButton.classList.contains('active')) {
//         otherButton.classList.remove('active');
//       }
//     });
//   });
//   console.log(button, index)
// });

buttons.forEach(function(btn, index){
  btn.addEventListener('click', () => {
    buttons.forEach(item => {item.classList.remove('active')})
    slideList.style.transform = `translateX(-${index}00vw)`;
    btn.classList.add('active');
  })
})
