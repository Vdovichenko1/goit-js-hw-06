const inputNameEl = document.querySelector('#validation-input');


inputNameEl.addEventListener('blur', onInputBlur)

function onInputBlur () {
    if (inputNameEl.dataset.length > this.value.length) {
        this.classList.remove('valid');
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
};