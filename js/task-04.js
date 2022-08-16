const reduceBtn = document.querySelector('[data-action="decrement"]');

const increasBtn = document.querySelector('[data-action="increment"]');

const valueNum = document.querySelector('#value');



let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueNum.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    valueNum.textContent = counterValue;
}

increasBtn.addEventListener('click', increment); 
reduceBtn.addEventListener('click', decrement);

// const counterValue = function ({ initialValue = 0, step = 1 }) {
//     this.value = initialValue;
//     this.step = step;
// }

// counterValue.increasBtn = function () {
//     this.value += this.step;
// }

// counterValue.reduceBtn = function () {
//     this.value -= this.step;
// }

// console.log(counterValue);


