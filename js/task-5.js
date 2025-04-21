function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color")
const colorTxt = document.querySelector(".color")
colorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.background = color;
  colorTxt.textContent = color;
})