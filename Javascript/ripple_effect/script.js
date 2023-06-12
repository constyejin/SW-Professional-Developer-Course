const btn = document.getElementById('btn1');

btn.addEventListener('click',(e)=>{
  const {x,y,width,height} = btn.getBoundingClientRect();
  const radius = Math.sqrt(width * width + height * height);
  btn.style.setProperty('--diameter', radius*2 + 'px')

  const { clientX, clientY } = e
  const left = (clientX - x - radius) / width * 100 + '%'
  const top = (clientY - y - radius) / height * 100 + '%'
  // 반지름을 뺀 이유는 안 빼면 사각형 끝에 걸린다. 즉 너비만큼 땡겨오는 것.
  btn.style.setProperty('--left', left)
  btn.style.setProperty('--top', top)
  btn.style.setProperty('--a', '')
  setTimeout(()=>{
    btn.style.setProperty('--a', 'ripple-effect 1000ms linear')
  })
  // 지금 수행되고 있는 콜스택에 있는 것이 끝난 후에 즉 다음 이벤트 루프가 한바퀴 돌 때 실행시켜 달라는 의미 
  // btn.style.setProperty('--a', '')
  // btn.style.setProperty('--a', 'ripple-effect 1000ms linear')
  // 이렇게 입력이 되어 있으면 결국 btn.style.setProperty('--a', 'ripple-effect 1000ms linear')
  // 이것만 실행이 되서 딱 클릭하는 그 한번만 적용이 된다.
  // 그러나 settimeout을 하면 렌더링을 하고 그 다음에 적용이 된다.
})
