const buttonDecr = document.querySelector('button[data-action ="decrement"]');
const buttonIncr = document.querySelector('button[data-action ="increment"]');
const value = document.querySelector('#value')
// console.log(value.textContent)
// console.log(buttonDecr.dataset.action)
let counterValue = 0;
// console.log(counterValue)
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