function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

btn.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  const randomCol = getRandomHexColor();
  document.body.style.backgroundColor = randomCol;
  colorEl.textContent = randomCol;
}
