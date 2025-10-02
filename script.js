// Configuración básica de confeti
const canvas = document.getElementById('confetiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetis = [];

function Confeti() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.size = Math.random() * 8 + 4;
  this.speed = Math.random() * 3 + 2;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function dibujarConfeti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetis.forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    if (c.y > canvas.height) {
      confetis.splice(i, 1);
    }
  });
  requestAnimationFrame(dibujarConfeti);
}

document.getElementById("confetiBtn").addEventListener("click", () => {
  for (let i = 0; i < 200; i++) {
    confetis.push(new Confeti());
  }
});

// Ajustar tamaño al cambiar ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Para voltear la carta principal
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Para voltear cada recuerdo
document.querySelectorAll(".memory-card").forEach(mem => {
  mem.addEventListener("click", () => {
    mem.classList.toggle("flipped");
  });
});
