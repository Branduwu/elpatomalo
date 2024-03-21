document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("startBtn");
  const gameContainer = document.getElementById("gameContainer");
  const guessBtn = document.getElementById("guessBtn");
  const linkBtn = document.getElementById("linkBtn");
  const noBtn = document.getElementById("noBtn");

  let instruction; 
  startBtn.addEventListener("click", function() {
    startBtn.classList.add("d-none");
    gameContainer.classList.remove("d-none");
    instruction = document.getElementById("instruction"); 
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (instruction) {
      instruction.textContent = "Piensa en un número del 1 al 100.";
    }
    noBtn.classList.remove("d-none");
    linkBtn.classList.remove("d-none");
  });

  startBtn.addEventListener("click", function() {
    noBtn.classList.add("d-none");
  });

  guessBtn.addEventListener("click", function() {
    const userGuess = Math.floor(Math.random() * 100) + 1; 
    
  
    const userInput = confirm(`¿Es ${userGuess} tu número?`);
    if (userInput) {
      alert("¡Excelente número, bro!");
    } else {
      alert("Chale");
    }
    location.reload();
  });
});
