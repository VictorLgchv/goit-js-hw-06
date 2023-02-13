const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', onInputChange);

function onInputChange(event){
  if(event.currentTarget.value === ""){
    outputNameEl.textContent = "Anonymous";
  } else {
    outputNameEl.textContent = event.currentTarget.value;
  }
console.log(inputNameEl)
// console.log("буква:", event.currentTarget.value)
}