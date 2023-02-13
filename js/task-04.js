const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
let counterValue = 0;


decrementBtn.addEventListener('click', () => {
// console.log("Клик по кнопке decrement");
counterValue -= 1;
// console.log(counterValue);
valueEl.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
  // console.log("Клик по кнопке increment");
  counterValue += 1;
  // console.log(counterValue);
  valueEl.textContent = counterValue;
  });
