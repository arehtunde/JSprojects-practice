const counter = document.querySelector('.wrapper-counter');
const buttons = document.querySelectorAll('button');
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const style = e.currentTarget.classList;

    if (style.contains('increase')) {
      counter.textContent = ++count;
    } else if (style.contains('decrease')) {
      counter.textContent = --count;
    } else {
      count = 0;
      counter.textContent = count;
    }

    if (count > 0) {
      counter.style.color = 'green';
    } else if (count < 0) {
      counter.style.color = 'red';
    } else {
      counter.style.color = '#011b33';
    }
  });
});