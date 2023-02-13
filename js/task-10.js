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
// const boxChildEl = document.querySelectorAll('#boxes div');
// console.log(boxChildEl);

// console.log(btnForCreateEl);
// console.log(btnForDestroyEl);
// console.log(boxEl);
let a = 10;

function createBoxes(amount){
  const number = +textElForCreate.value;
  console.log(amount.currentTarget);
  console.log("Клик по кнопке Create",number);
  for (let i = 0; i < number; i += 1) {
    const createElement = document.createElement("div");
    createElement.style.backgroundColor = getRandomHexColor();
    createElement.style.width = 20 + a + "px";
    createElement.style.height = 20 + a + "px";
    a += 10;
    // createElement.classList.add("cls")
    console.log(createElement.style.width);
  
  boxEl.append(createElement);
  }


  const boxesChildEl = boxEl.children;
  console.log(boxesChildEl);


  function destroyBoxes(){
    for (let i = 0; i <= boxesChildEl.length; i += 1) {
      // console.log("Це ерей",boxesChildEl[i])
      const element = boxesChildEl[i];
      element.remove();
    }
    // const returnEl = document.createElement("div");
    // returnEl.id = "boxes";
    // controlsEl.after(returnEl);
  };
  btnForDestroyEl.addEventListener('click', destroyBoxes);
};



btnForCreateEl.addEventListener('click', createBoxes);
