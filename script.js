const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");

// Mueve el botón a una posición aleatoria dentro del viewport
function moveRandom() {
  const maxX = window.innerWidth - btnNo.offsetWidth;
  const maxY = window.innerHeight - btnNo.offsetHeight;

  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  btnNo.style.left = `${randX}px`;
  btnNo.style.top = `${randY}px`;
}

// Para escritorio: si el cursor se acerca, el botón huye
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnRect = btnNo.getBoundingClientRect();
  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;

  const dist = Math.hypot(mouseX - btnX, mouseY - btnY);

  if (dist < 100) {
    moveRandom();
  }
});

// Para móviles: si intentan tocarlo, huye antes
btnNo.addEventListener("touchstart", function (e) {
  e.preventDefault(); // evitar click
  moveRandom();
});
