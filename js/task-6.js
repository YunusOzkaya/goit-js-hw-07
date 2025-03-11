function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  const fragment = document.createDocumentFragment(); 
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; 
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px"; 
    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment); 
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = ""; 
}

const inputEL = document.querySelector("input[type=number]");
const createEL = document.querySelector("button[data-create]");
const destroyEL = document.querySelector("button[data-destroy]");

createEL.addEventListener("click", () => {
  const amount = parseInt(inputEL.value, 10);
  
  if (amount > 0 && amount < 101) {
    createBoxes(amount);
  } else {
    alert("Enter a number between 1-100.");
  }
});

destroyEL.addEventListener("click", () => {
  destroyBoxes();
});
