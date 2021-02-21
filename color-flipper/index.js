const button = document.querySelector('.main-button');
const body = document.querySelector('body');
const colorText = document.querySelector('.color-text');
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', '#f0eded'];

button.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomColor];
  colorText.textContent = colors[randomColor];
});