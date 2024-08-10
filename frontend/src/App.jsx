import gsap from 'gsap';
import './index.css';
import { useEffect, useRef } from 'react';

function App() {
  const cursor = useRef(null);
  const point = useRef(null);

  const bounceChar = (e) => {
    const tl = gsap.timeline();
    const element = e.target;

    // Store the original color if it's not already stored
    if (!element.dataset.originalColor) {
      element.dataset.originalColor = window.getComputedStyle(element).color;
    }

    tl
      .to(element, {
        scaleX: 0.8, // Slightly squash horizontally
        scaleY: 1.2, // Slightly stretch vertically
        duration: 0.2,
        ease: 'bounce.out',
        color: 'aqua'
      })
      .to(element, {
        scaleX: 1.2, // Slightly stretch horizontally
        scaleY: 0.8, // Slightly squash vertically
        duration: 0.3,
        ease: 'power1.out',
        color: element.dataset.originalColor
      })
      .to(element, {
        scaleX: 1, // Back to normal size
        scaleY: 0.9, // Slightly squash vertically
        duration: 0.2,
        ease: 'power1.out',
      })
      .to(element, {
        scaleX: 1, // Back to normal size
        scaleY: 1, // Back to normal size
        duration: 0.2,
        ease: 'bounce.out',
      });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Slight delay for a trailing effect
        ease: 'power2.out',
      });
      gsap.to(point.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0, // Faster response for the point
        ease: 'power2.out',
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursor.current, {
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const text1 = "Namste(); I'm";
  const text2 = "Suraj  Sakhare";
  const text3 = "I Love to Code.";

  const handleMouseEnter = () => {
    gsap.to('btntext', { backgroundColor: '#ff6347', duration: 0.3 }); // Change color to tomato
  };

  const handleMouseLeave = () => {
    gsap.to('btntext', { backgroundColor: '#3490dc', duration: 0.3 }); // Change color back to blue
  };
  return (
    <div className='w-full bg-black relative font-whitney '>
      <div ref={cursor} className="absolute z-10 w-10 h-10 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2"></div>
      <div ref={point} className="absolute z-10 w-2 h-2 rounded-full  bg-blue-400 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className='w-1/2 mx-auto h-screen flex flex-col gap-4 items-start justify-center'>
        <h1 className='font-bold font-whitney text-3xl tracking-normal cursor-pointer'>
          {text1.split("").map((char, index) => (
            <span key={index} onMouseOver={bounceChar} className='text-white inline-block mx-[3px]'>
              {char}
            </span>
          ))}
        </h1>
        <h1 className='font-bold font-whitney text-violet-400 text-7xl tracking-tighter cursor-pointer'>
          {text2.split("").map((char, index) => (
            <span key={index} onMouseOver={bounceChar} className='inline-block mx-1'>
              {char}
            </span>
          ))}
        </h1>
        <h1 className='font-bold font-whitney text-white text-7xl tracking-tighter cursor-pointer'>
          {text3.split("").map((char, index) => (
            <span key={index} onMouseOver={bounceChar} className='inline-block mx-1'>
              {char}
            </span>
          ))}
        </h1>
        <h2 className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quas accusamus provident, sequi, possimus quae esse quidem ea officia nemo ipsa dolorem minus. Cum voluptatibus enim amet quia eligendi rem.</h2>
        <h2 className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quas accusamus provident, sequi, possimus quae esse quidem ea officia nemo ipsa dolorem minus. Cum voluptatibus enim amet quia eligendi rem.</h2>
        <div className='bg-[#7D27FF] btntext rounded-lg opacity-0.8 mt-6'>
          <button className=' font-light -tracking-tighter inset-2 text-sm bg-[#A8C7F2] py-3 px-16 shadow-inner shadow-[#11111164] rounded-lg font-poppins 
          transform -translate-x-1 -translate-y-1 transition-all hover:-translate-x-2 hover:-translate-y-2 '
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >Let's Talk</button>
        </div>
      </div>
    </div>
  );
}

export default App;
