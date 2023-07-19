let buttons = document.querySelectorAll('.btn-group button');
const slideList = document.querySelector('.slide-list');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    let translateXValue = -index * 100 + 'vw';
    slideList.style.transform = 'translateX(' + translateXValue + ')';
 
    buttons.forEach(function(otherBtn){
      otherBtn.classList.remove('active');
      console.log(otherBtn)
    })

    button.classList.add('active');

  });
});
