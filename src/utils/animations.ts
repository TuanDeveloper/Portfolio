export const initParticleNetwork = () => {
  const particleNetwork = document.getElementById('particleNetwork');
  if (!particleNetwork) return;

  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Random size
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random animation
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `move ${duration}s linear infinite`;
    
    particleNetwork.appendChild(particle);
  }
};

export const initBackgroundElements = () => {
  const background = document.querySelector(".background");
  if (background) {
    for (let i = 0; i < 15; i++) {
      const span = document.createElement("span");
      background.appendChild(span);
    }
  }
};