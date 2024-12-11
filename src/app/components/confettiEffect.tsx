import React from 'react';
import confetti from 'canvas-confetti';

const ConfettiButton: React.FC = () => {
    const handleConfetti = () => {
      const duration = 1 * 1000; // 3 seconds
      const animationEnd = Date.now() + duration;
  
      const frame = () => {
        const timeLeft = animationEnd - Date.now();
  
        if (timeLeft <= 0) {
          return;
        }
  
        confetti({
          particleCount: 10, // Emit fewer particles per burst
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(), // Random horizontal position
            y: 0, // Top of the screen
          },
          colors: ['#bb0000', '#ffffff', '#00bb00'], // Optional: Custom colors
          zIndex: 9999
        });
  
        requestAnimationFrame(frame);
      };
  
      frame();
    };


  return (
    <button onClick={handleConfetti}>Resume</button>
  );
};

export default ConfettiButton;
