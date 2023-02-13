const inputTextEl = document.querySelector(`input[data-length="6"]`);

inputTextEl.addEventListener('blur', onInputBlur);
const number = +inputTextEl.dataset.length
// console.log(number);
function onInputBlur(event){
  console.log(event.currentTarget.value);
  if(event.currentTarget.value.length !== number){
    inputTextEl.classList.add("invalid");
  }else {
    inputTextEl.classList.replace("invalid", "valid");
  }
}