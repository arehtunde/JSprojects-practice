import reviews from './review.js';

const name = document.querySelector('.details-name');
const job = document.querySelector('.details-job');
const text = document.querySelector('.details-text');
const img = document.querySelector('img');

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
const randomBtn = document.querySelector('.random');
let current = 0;

const loadPerson = (index) => {
  const person = reviews[index];
  img.src = person.img;
  name.textContent = person.name;
  job.textContent = person.job;
  text.textContent = person.text;
};

window.addEventListener('DOMContentLoaded', () => loadPerson(current));

randomBtn.addEventListener('click', () => {
  const random = Math.floor(Math.random() * reviews.length);
  loadPerson(random);
});

nextBtn.addEventListener('click', () => {
  current++;

  if (current > reviews.length - 1) {
    current = 0;
  }
  loadPerson(current);
});

prevBtn.addEventListener('click', () => {
  current--;

  if (current < 0) {
    current = reviews.length - 1;
  }
  loadPerson(current);
});