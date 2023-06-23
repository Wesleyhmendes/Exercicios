import './style.css';

const getBtn = document.querySelector('#firstButton');
const getBody = document.body;
const number = 731;

const randonNumber = () => Math.round(Math.random() * number);

const cardHeroe = document.createElement('section');

getBody.appendChild(cardHeroe);

getBtn.addEventListener('click', () => {
  const getHeroes = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randonNumber()}.json`;
  cardHeroe.innerHTML = '';

  const heroPhoto = document.createElement('img');
  cardHeroe.appendChild(heroPhoto);

  const heroeName = document.createElement('h1');
  cardHeroe.appendChild(heroeName);

  fetch(getHeroes)
    .then((response) => response.json())
    .then((data) => {
      heroPhoto.src = '';
      heroPhoto.src = data.images.lg;
      heroeName.innerHTML = data.name;
    });
});
