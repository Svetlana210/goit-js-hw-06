
const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('#controls>input');
// console.log(btnCreate)

btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  amount = inputEl.value;
  // console.log(amount)
  let boxesToAdd = [];
  for (let i = 0; i < amount; i += 1) {
const divEl = document.createElement('div');
divEl.style.height = `${30 + 10 * i}px`;
divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    boxesToAdd.push(divEl);
     
  }
  boxes.append(...boxesToAdd)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}