import { useEffect } from 'react';
import { initParticleNetwork, initBackgroundElements } from '../utils/animations';

export const useAnimation = () => {
  useEffect(() => {
    initBackgroundElements();
    initParticleNetwork();

    // Add scroll-triggered animations
    const fadeElements = document.querySelectorAll(".fade-in");

    const checkFade = () => {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", checkFade);
    checkFade(); // Check on initial load

    // Create sparkle effect on click
    const handleClick = (e: MouseEvent) => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      
      // Set position
      sparkle.style.left = `${e.clientX - 5}px`;
      sparkle.style.top = `${e.clientY - 5}px`;
      
      // Set random movement
      const tx = (Math.random() - 0.5) * 100;
      const ty = (Math.random() - 0.5) * 100;
      sparkle.style.setProperty('--tx', `${tx}px`);
      sparkle.style.setProperty('--ty', `${ty}px`);
      
      document.body.appendChild(sparkle);
      
      // Remove after animation completes
      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    };

    document.addEventListener('click', handleClick);

    // Parallax effect for background elements
    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach(shape => {
        (shape as HTMLElement).style.transform = `translate(${xAxis}px, ${yAxis}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener("scroll", checkFade);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};