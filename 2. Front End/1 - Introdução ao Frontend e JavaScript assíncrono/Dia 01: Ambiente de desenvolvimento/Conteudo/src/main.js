import { nanoid } from 'nanoid';
import './style.css';
import clipboardCopy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  clipboardCopy(randomPassword);
});
