const buttonDecr = document.querySelector('button[data-action ="decrement"]');
const buttonIncr = document.querySelector('button[data-action ="increment"]');
const value = document.querySelector('#value')

let counterValue = 0;

buttonDecr.addEventListener('click', onBtnDecrClick);
buttonIncr.addEventListener('click', onBtnIncrClick);

function onBtnDecrClick() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function onBtnIncrClick() {
    counterValue += 1;
    value.textContent = counterValue;
}