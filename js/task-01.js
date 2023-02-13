const categoriesEl = document.querySelector('ul#categories');

const allCategoriesChild = categoriesEl.querySelectorAll('li.item');

const quantityAllCategoriesChild = allCategoriesChild.length;

console.log("Number of categories:", quantityAllCategoriesChild);

const textEl = categoriesEl.querySelectorAll('li.item h2');
const textOfEl = textEl.forEach(element => {
  const textContentOfTextEl = element.textContent;
  console.log("Category:", textContentOfTextEl);
  const quantityAllItemsChild = allCategoriesChild.forEach(value => {
    const textContentValue = value.querySelector('h2').textContent;
    if(textContentOfTextEl === textContentValue){
      console.log("Elements:", value.querySelectorAll('li').length);
    }
  })
});


