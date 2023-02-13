function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const colorTextEl = document.querySelector(".color");
const changeColorEl = document.querySelector(".change-color");

function onChangeColorEl(){
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorTextEl.textContent = randomColor;
  // console.log(getRandomHexColor());
};

changeColorEl.addEventListener('click', onChangeColorEl);