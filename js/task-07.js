const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input',onInputChange);
function onInputChange(event){
  // console.log(event.currentTarget.value);
  textEl.style.fontSize = `${event.currentTarget.value}px`; 
  // console.log(textEl.style.fontSize)
}