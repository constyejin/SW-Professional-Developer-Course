const frame = document.getElementById('frame');
const card = document.getElementById('card'); 
const light = document.getElementById('light'); 

let { x, y, width, height } = frame.getBoundingClientRect();

function mouseMove(e) {
  const left = e.clientX - x;
  const top = e.clientY - y;
  const centerX = left - (width / 2);
  const centerY = top - (height / 2);
  const d = Math.sqrt(centerX**2 + centerY**2)

  card.style.boxShadow = `
    ${-centerX/10}px ${-centerY/10}px 10px rgba(0,0,0,0.5)
  `

  card.style.transform = `
  rotate3d(
    ${-centerY / 100}, ${centerX / 100}, 0, ${d/8}deg
  )
`
light.style.backgroundImage = `
  radial-gradient(
    circle at ${left}px ${top}px, #0000050, #ffffff00, #ffffff70
  )
`
}

frame.addEventListener('mouseenter', () => {
  frame.addEventListener('mousemove', mouseMove)
})

frame.addEventListener('mouseleave', () => {
    frame.removeEventListener('mousemove', mouseMove);
    card.style.boxShadow ='';
    card.style.transform ='';
    light.style.backgroundImage=''
})

window.addEventListener('resize', ()=>{
  rect = frame.getBoundingClientRect();
  x = rect.x
  y = rect.y
})
// 이건 이제 브라우저 크기를 변경함에 따라 xy 크기가 바뀌니깐 그걸 반영하기 윈한 것이다.