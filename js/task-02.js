const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients');

for (let el of ingredients) {
  const ingredientListEl = document.createElement('li');
  ingredientListEl.textContent = el;
  ingredientListEl.classList.add('item');
  ulIngredients.append(ingredientListEl);
}

