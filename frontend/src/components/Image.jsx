import gsap from 'gsap';
import React, { useRef } from 'react';
function Image({ img }) {
  const borderTopRef = useRef(null);
  const borderBottomRef = useRef(null);

  const hoverImage = () => {
    gsap.to(borderTopRef.current, {
      x: 20,
      y: -20,
      duration: 0.5,
    });
    gsap.to(borderBottomRef.current, {
      x: -20,
      y: 20,
      duration: 0.5,
    });
  };

  const leaveImage = () => {
    gsap.to(borderTopRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
    });
    gsap.to(borderBottomRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
    });
  };

  return (
    <div className='w-full h-full'>
      <div className='w-80 h-full relative rounded-lg'>
        <img
          src={img}
          className='absolute h-full z-10'
          alt="Decorative"
          onMouseEnter={hoverImage}
          onMouseLeave={leaveImage}
        />
        <div
          ref={borderTopRef}
          className='absolute top-0 right-0 border-t-4 border-r-4 border-l-0 border-b-0 border-violet-400 w-40 h-40 '
        ></div>
        <div
          ref={borderBottomRef}
          className='absolute bottom-0 left-0 border-b-4 border-l-4 border-t-0 border-r-0 border-violet-400 w-40 h-40 '
        ></div>
      </div>
    </div>
  );
}

export default Image;
