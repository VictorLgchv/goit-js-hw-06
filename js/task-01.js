const categoriesEl = document.querySelector('ul#categories');

const allCategoriesChild = document.querySelectorAll('li.item');
console.log(allCategoriesChild);

const quantityAllCategoriesChild = allCategoriesChild.length;

console.log("Number of categories:", quantityAllCategoriesChild);



const textHeaderEl = allCategoriesChild.forEach(elem => {
  const headerEl = elem.firstElementChild;
  console.log("Category:", headerEl.textContent);
  const listEl = elem.lastElementChild;
  console.log("Elements:", listEl.children.length);
});

// const textOfEl = textEl.forEach(element => {
//   const textContentOfTextEl = element.textContent;
//   console.log("Category:", textContentOfTextEl);
//   const quantityAllItemsChild = allCategoriesChild.forEach(value => {
//     const textContentValue = value.querySelector('h2').textContent;
//     if(textContentOfTextEl === textContentValue){
//       console.log("Elements:", value.querySelectorAll('li').length);
//     }
//   })
// });


