function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const deleteBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const box = document.querySelector('#boxes');

let size = 30;

createBtn.addEventListener('click', numberEl);
deleteBtn.addEventListener('click', destroyBoxes);

function numberEl() {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
    box.append(div);
  }
}

function destroyBoxes() {
  box.innerHTML = '';
}
