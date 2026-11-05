// Floating particles
const particleContainer = document.getElementById("particles");

function createParticle() {
  const particle = document.createElement("span");
  particle.classList.add("particle");

  const size = Math.random() * 5 + 2;
  const left = Math.random() * 100;
  const duration = Math.random() * 10 + 8;
  const delay = Math.random() * 8;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${left}%`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.opacity = Math.random() * 0.6 + 0.2;

  particleContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, (duration + delay) * 1000);
}

// Keep a steady stream of particles
for (let i = 0; i < 70; i++) {
  createParticle();
}

setInterval(() => {
  if (particleContainer.children.length < 90) {
    createParticle();
  }
}, 350);

// Typewriter hint messages
const hintElement = document.getElementById("hint");

const messages = [
  "Access denied",
  "Admin has disabled this page",
  "Please check back later",
  "Connection terminated"
];

let messageIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = messages[messageIndex];

  if (!deleting) {
    hintElement.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }

    setTimeout(typeLoop, 70);
  } else {
    hintElement.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeLoop, 400);
      return;
    }

    setTimeout(typeLoop, 35);
  }
}

typeLoop();