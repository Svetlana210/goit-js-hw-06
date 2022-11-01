 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
const body = document.querySelector('body')

buttonEl.addEventListener('click', onChangeColorButton)

function onChangeColorButton() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}

