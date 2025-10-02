/* ---------------- confeti ---------------- */
const canvas = document.getElementById('confetiCanvas');
const ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null;
if (canvas && ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
let confetis = [];
function Confeti(){
  this.x = Math.random() * (canvas.width || 1);
  this.y = (Math.random() * (canvas.height || 1)) - (canvas.height || 1);
  this.size = Math.random() * 8 + 4;
  this.speed = Math.random() * 3 + 2;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}
function dibujarConfeti(){
  if (!ctx) return;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetis.forEach((c,i)=>{
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI*2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    if (c.y > canvas.height + 20) confetis.splice(i,1);
  });
  requestAnimationFrame(dibujarConfeti);
}
dibujarConfeti();

document.getElementById('confetiBtn').addEventListener('click', () => {
  for (let i=0;i<250;i++) confetis.push(new Confeti());
});

/* Ajustar canvas al redimensionar */
window.addEventListener('resize', () => {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* --------------- Flip cards --------------- */
/* Carta principal */
const mainCard = document.querySelector('.main-card');
if (mainCard) {
  mainCard.addEventListener('click', () => {
    mainCard.classList.toggle('flipped');
  });
}

/* Recuerdos */
document.querySelectorAll('.memory-card').forEach(mem => {
  mem.addEventListener('click', (e) => {
    mem.classList.toggle('flipped');
  });
});

/* debug: confirma que todo listener existe (por consola) */
console.log('Listeners: main-card', !!mainCard, 'memories:', document.querySelectorAll('.memory-card').length);
