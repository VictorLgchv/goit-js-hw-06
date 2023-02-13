const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const markap = [];
const createEl = ingredients.forEach(elem =>{
  const crateListEl = document.createElement("li");
  crateListEl.textContent = elem;
  crateListEl.classList.add(elem);
  markap.push(crateListEl);
});

ingredientsEl.append(...markap);
// element.classList.add("class")