function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsEl = document.querySelector('#controls');
const textElForCreate = document.querySelector('#controls input');
const btnForCreateEl = document.querySelector('button[data-create]');
const btnForDestroyEl = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

let a = 10;
let markap = [];
function createBoxes(){
  const number = +textElForCreate.value;
  // console.log(amount.currentTarget);
  // console.log("Клик по кнопке Create",number);
  for (let i = 0; i < number; i += 1) {
    const createElement = document.createElement("div");
    createElement.style.backgroundColor = getRandomHexColor();
    createElement.style.width = 20 + a + "px";
    createElement.style.height = 20 + a + "px";
    a += 10;

    // console.log(createElement.style.width);
  markap.push(createElement)
  }
  boxEl.append(...markap);  

};

function destroyBoxes(){
  boxEl.innerHTML = "";
  markap =[];
  a = 10;
  textElForCreate.value = "";
};
btnForDestroyEl.addEventListener('click', destroyBoxes);

btnForCreateEl.addEventListener('click', createBoxes);
