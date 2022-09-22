const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientEl = document.querySelector('#ingredients');

// for (let el of ingredients) {
//   const ingredientListEl = document.createElement('li');
//   ingredientListEl.textContent = el;
//   ingredientListEl.classList.add('item');
//   ulIngredients.append(ingredientListEl);
// }

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];
  const list = document.createElement('li');
  list.textContent = option;
  list.classList.add('item');

  elements.push(list);
}

ingredientEl.append(...elements);
