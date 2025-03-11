function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorEl = document.querySelector(".color") 
const buttonEl = document.querySelector(".change-color")
buttonEL.addEventListener("click",()=>{
  document.body.style.backgroundColor= getRandomHexColor()
  colorEl.textContent = getRandomHexColor()
})
