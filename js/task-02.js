const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const createEl = ingredients.forEach(elem =>{
  const crateListEl = document.createElement("li");
  crateListEl.textContent = elem;
  crateListEl.classList.add(elem);
  ingredientsEl.append(crateListEl);
});

// element.classList.add("class")