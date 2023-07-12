let buttons = document.querySelectorAll('.slide-btn li');
console.log(buttons)
const slideList = document.querySelector('.slide-list');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    let translateXValue = -index * 100 + 'vw';
    slideList.style.transform = 'translateX(' + translateXValue + ')';
    
    buttons.forEach(function(otherBtn){
      otherBtn.classList.remove('active');
    })

    button.classList.add('active');
  });
});

// jQuery

