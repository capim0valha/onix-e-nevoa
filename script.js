// Estrelas do fundo
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let starsArray = [];

class Star {
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.3 - 0.15;
    this.speedY = Math.random() * 0.3 - 0.15;
    this.color = 'rgba(173,216,230,' + Math.random() + ')';
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initStars(){
  starsArray = [];
  for(let i = 0; i < 120; i++){
    starsArray.push(new Star());
  }
}
initStars();

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  starsArray.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Meteoros com dicas místicas
const meteorZone = document.getElementById('meteorZone');
const dicaBox = document.getElementById('dicaBox');

const dicas = [
  "🔮 Crie um canal de sabedoria estelar para ideias dos membros.",
  "🧿 Use cargos como Arcanista, Guardião e Sonhador Cósmico.",
  "🌙 Que tal rituais semanais como eventos interdimensional?",
  "🛸 Ofereça recompensas místicas através de bots.",
  "🌌 Personalize emojis e reações com energia lunar."
];

function criarMeteoros(qtd) {
  for (let i = 0; i < qtd; i++) {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    meteor.style.left = `${Math.random() * 90}%`;
    meteor.style.animationDuration = `${7 + Math.random() * 5}s`;

    meteor.addEventListener('click', () => {
      const dica = dicas[Math.floor(Math.random() * dicas.length)];
      dicaBox.textContent = dica;
      dicaBox.style.display = 'block';
    });

    meteorZone.appendChild(meteor);
  }
}

criarMeteoros(10);
