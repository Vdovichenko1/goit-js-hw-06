const inputTextEl = document.querySelector('#name-input');

const spanNameEl = document.querySelector('#name-output');

inputTextEl.addEventListener('input', onInputChange);

function onInputChange(e) {
    spanNameEl.textContent = e.currentTarget.value;

    if (spanNameEl.textContent.length === 0) {
        return spanNameEl.textContent = 'Anonymous';
    }
}
