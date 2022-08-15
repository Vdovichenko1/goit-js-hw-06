const reduceBtn = document.querySelector('button[data-action="decrement"]');

const increasBtn = document.querySelector('button[data-action="increment"]');

const valueNum = document.querySelector('#value');


const counterValue = function ({ initialValue = 0, step = 1 }) {
    this.value = initialValue;
    this.step = step;
}

counterValue.saveBtn = function () {
    this.value += this.step;
}

counterValue.closeBtn = function () {
    this.value -= this.step;
}

const counter = new counterValue({step: 1 });
