function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  const initialSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.height = `${initialSize + (i * 10)}px`;
    box.style.width = `${initialSize + (i * 10)}px`;
    box.style.background = getRandomHexColor();
    boxes.appendChild(box)
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}


const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector("input")


createBtn.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    destroyBoxes();
    createBoxes(input.value);
    input.value = "";
  }
})

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
})