import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './index.css';
import Page2 from './components/page2';
import Page1 from './components/Page1';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const cursor = useRef(null);
  const point = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(point.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
 
  return (
    <div className="w-full h-full bg-black relative font-whitney">
      <div
        ref={cursor}
        className="absolute z-10 w-10 h-10 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        ref={point}
        className="absolute z-10 w-2 h-2 rounded-full bg-blue-400 transform -translate-x-1/2 -translate-y-1/2"
      ></div>
     <Page1/>
      <Page2/>
    </div>
  );
}

export default App;
