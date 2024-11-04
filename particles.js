const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numParticles = 100;

// Particle Constructor
class Particle {
  constructor(x, y, size, dx, dy) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.dx = dx;
    this.dy = dy;
  }

  // Draw a particle
  draw() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  // Update particle position
  update() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// Initialize particles
function init() {
  particlesArray.length = 0;
  for (let i = 0; i < numParticles; i++) {
    let size = Math.random() * 3 + 1;
    let x = Math.random() * (canvas.width - size * 2) + size;
    let y = Math.random() * (canvas.height - size * 2) + size;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    particlesArray.push(new Particle(x, y, size, dx, dy));
  }
}

// Connect particles with lines when close
function connectParticles() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = Math.hypot(
        particlesArray[a].x - particlesArray[b].x,
        particlesArray[a].y - particlesArray[b].y
      );

      if (distance < 100) {
        opacityValue = 1 - distance / 100;
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// Animate particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => particle.update());
  connectParticles();

  requestAnimationFrame(animate);
}

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Initialize and animate
init();
animate();
