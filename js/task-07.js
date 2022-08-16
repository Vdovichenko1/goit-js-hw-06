const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const inputEl = () => {
    textEl.style.fontSize = `${fontSizeEl.value}px`;
};

fontSizeEl.addEventListener("input", inputEl);