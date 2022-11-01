const inputEl = document.querySelector('#validation-input');

function toggle(class1, class2) {
    inputEl.classList.toggle(class1);
    inputEl.classList.replace(class2, class1)
}

inputEl.addEventListener('blur', onBlurInput)
const dataLength = 6;
function onBlurInput(event) {
    if (event.currentTarget.value.length === dataLength) {
        toggle('valid', 'invalid')
    }
        else {
toggle('invalid', 'valid')
        }

}