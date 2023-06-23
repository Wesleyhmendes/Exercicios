import './style.css';

const getCatBtn = document.querySelector('.cat');
const getDogBtn = document.querySelector('.dog');
const getSurpriseBtn = document.querySelector('.surprise');
const getImage = document.querySelector('img');

getCatBtn.addEventListener('click', () => {
  const catImage = 'https://api.thecatapi.com/v1/images/search';
  fetch(catImage)
    .then((response) => response.json())
    .then((data) => {
      getImage.src = '';
      getImage.src = data[0].url;
    });
});

getDogBtn.addEventListener('click', () => {
  const dogImage = 'https://dog.ceo/api/breeds/image/random';
  fetch(dogImage)
    .then((response) => response.json())
    .then((data) => {
      getImage.src = '';
      getImage.src = data.message;
    });
});

getSurpriseBtn.addEventListener('click', () => {
  const number = 10;
  const randomNumber = Math.round(Math.random() * number);

  const catImage = 'https://api.thecatapi.com/v1/images/search';
  const dogImage = 'https://dog.ceo/api/breeds/image/random';

  if (randomNumber % 2 === 0) {
    fetch(dogImage)
      .then((response) => response.json())
      .then((data) => {
        getImage.src = '';
        getImage.src = data.message;
      });
  } fetch(catImage)
    .then((response) => response.json())
    .then((data) => {
      getImage.src = '';
      getImage.src = data[0].url;
    });
});
