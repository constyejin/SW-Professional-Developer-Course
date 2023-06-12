const circles = document.querySelectorAll('.circle');
circles.forEach((circle, index) => {
  circle.style.left = `${60 * index}px`;
  circle.style.animationDelay = `${0.1 * index}s`;
});