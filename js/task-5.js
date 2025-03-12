function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorEl = document.querySelector(".color") 
const buttonEl = document.querySelector(".change-color")
buttonEl.addEventListener("click",()=>{
  const hex = getRandomHexColor()
  document.body.style.backgroundColor= hex
  colorEl.textContent = hex
})
