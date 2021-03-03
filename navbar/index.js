const open = document.querySelector('.open');
const nav = document.querySelector('.nav');
const icon = document.querySelector('.fas');

const menubar = () => {
  
};

open.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
  }

  nav.classList.toggle('show');
});