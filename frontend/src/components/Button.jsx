// Import required modules
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Button component
const Button = () => {
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Animate the background circle on hover
    const button = buttonRef.current;
    const background = backgroundRef.current;

    const handleMouseEnter = () => {
      gsap.to(background, {
        scale: 1.4,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(background, {
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative w-40 h-12 text-white font-bold py-2 px-6 rounded-full overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #6A5ACD, #7B68EE)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <div
        ref={backgroundRef}
        className="absolute w-12 h-12 bg-blue-700 rounded-full"
        style={{
          top: '-10px',
          left: '-10px',
          transform: 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      ></div>
      <span className="relative z-10">Hover Me</span>
    </button>
  );
};

export default Button;
