setInterval(function(){
  let now = new Date();
  let hr =  now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if(hr >= 10) {
    hnum = hr;
  } else {
    hnum = '0' + hr;
  }

  if(min >= 10) {
    mnum = min;
  } else {
    mnum = '0' + min;
  }

  if(sec >= 10) {
    snum = sec;
  } else {
    snum = '0' + sec;
  }

  document.querySelectorAll("#phone p span")[0].innerHTML = hnum;
  document.querySelectorAll("#phone p span")[1].innerHTML = mnum;
  document.querySelectorAll("#phone p span")[2].innerHTML = snum;
})

let now = new Date();
let hr = now.getHours();

if(hr >= 6 && hr < 12) {
  document.getElementById("wrapper").classList.add("morning");
  document.querySelectorAll(".btn-list li")[0].classList.add("on");
} else if(hr >= 12 && hr < 16) {
  document.getElementById("wrapper").classList.add("afternoon");
  document.querySelectorAll(".btn-list li")[1].classList.add("on");
} else if(hr >= 16 && hr < 20) {
  document.getElementById("wrapper").classList.add("evening");
  document.querySelectorAll(".btn-list li")[2].classList.add("on");
} else {
  document.getElementById("wrapper").classList.add("night");
  document.querySelectorAll(".btn-list li")[3].classList.add("on");
}


// querySelectorAll을 이용해서 nav li 들을 담아준다
let btnList = document.querySelectorAll(".btn-list li");
let back = document.getElementById("wrapper");

btnList.forEach(function(btn){
  let text = btn.querySelector("a").innerHTML;
  console.log(text);

  btn.addEventListener('click', function(a){
    a.preventDefault();
    btnList.forEach(function(e){
      e.classList.remove('on');
    })
    btn.classList.add('on');
    back.className = text;
  })
})

