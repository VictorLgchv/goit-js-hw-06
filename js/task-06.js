const inputTextEl = document.querySelector(`input[data-length="6"]`);

inputTextEl.addEventListener('blur', onInputBlur);
// console.log(inputTextEl.dataset.length);
function onInputBlur(event){
  console.log(event.currentTarget.value);
  if(event.currentTarget.value.length !== 6){
    inputTextEl.classList.add("invalid");
  }else {
    inputTextEl.classList.replace("invalid", "valid");
  }
}