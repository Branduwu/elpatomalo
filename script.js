document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("startBtn");
  const gameContainer = document.getElementById("gameContainer");
  const guessBtn = document.getElementById("guessBtn");
  const instruction = document.getElementById("instruction");
  const linkBtn = document.getElementById("linkBtn");
  const noBtn = document.getElementById("noBtn");
  const customConfirm = document.getElementById("custom-confirm");
  const customMessage = document.getElementById("custom-message");
  const customYes = document.getElementById("custom-yes");
  const customNo = document.getElementById("custom-no");

  let randomNumber;

  startBtn.addEventListener("click", function() {
    startBtn.classList.add("d-none");
    gameContainer.classList.remove("d-none");
    randomNumber = Math.floor(Math.random() * 100) + 1;
    instruction.textContent = "Piensa en un número del 1 al 100.";
    noBtn.classList.remove("d-none");
    linkBtn.classList.remove("d-none");
  });

  startBtn.addEventListener("click", function() {
    noBtn.classList.add("d-none");
  });

  guessBtn.addEventListener("click", function() {
    const userGuess = randomNumber;
    
    // Mostrar el cuadro de diálogo personalizado
    customMessage.textContent = `¿Es ${userGuess} tu número?`;
    customConfirm.classList.add("show");

    // Escuchar los clics en los botones del cuadro de diálogo personalizado
    customYes.addEventListener("click", function() {
      alert("¡Excelente número, bro!");
      location.reload();
    });

    customNo.addEventListener("click", function() {
      alert("Chale");
      location.reload();
    });
  });
});
