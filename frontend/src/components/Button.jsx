// Import required modules
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Button component
const Button = () => {
  const buttonRef = useRef(null);

  

  return (
    <button
      ref={buttonRef}
      className="relative w-40 h-10 text-white font-bold py-4 px-8 rounded-full"
    >
      <div className="absolute w-10 h-10 inset-0 bg-blue-700 rounded-full"></div>
     <p className='absolute z-4'> Hover Me</p>
    </button>
  );
};

export default Button;
