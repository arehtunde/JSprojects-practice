const menu = document.querySelector('.menu');
const collapse = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

collapse.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
