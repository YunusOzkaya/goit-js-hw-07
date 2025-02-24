function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  const boxesContainer = document.getElementById("boxes")
  const boxArray =[]
    for(let i=0; i<amount; i++){
      const size = 30 + i * 10; // Her bir öğenin boyutu
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = '10px'; // Öğeler arasında boşluk
      console.log(box)
      boxArray.push(box);
    }
    boxesContainer.append(...boxArray)
  
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // tüm öğeleri temizle
}

const inputEL= document.querySelector("input[type=number]")
const createEL = document.querySelector("button[data-create]")
const destroyEL = document.querySelector("button[data-destroy]")

createEL.addEventListener("click",()=>{
  if(inputEL.value>0 && inputEL.value<101){
    createBoxes(inputEL.value)
  }
  else{
    alert("Enter a number between 0-100.")
  }
})

destroyEL.addEventListener("click",()=>{
  destroyBoxes()
})


