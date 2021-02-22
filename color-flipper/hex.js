const button = document.querySelector('.main-button');
const body = document.querySelector('body');
const colorText = document.querySelector('.color-text');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


button.addEventListener('click', () => {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomHex = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomHex];
  } 

  body.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;
});
