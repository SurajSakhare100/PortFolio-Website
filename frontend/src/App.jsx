import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './index.css'; 
import Page2 from './components/Page2';
import Page1 from './components/Page1';
import Navbar from './components/Navbar';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const cursor = useRef(null);
  const point = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
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

    const handleMouseEnterImage = () => {
      gsap.to(cursor.current, {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeaveImage = () => {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('mouseenter', handleMouseEnterImage);
      image.addEventListener('mouseleave', handleMouseLeaveImage);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      images.forEach((image) => {
        image.removeEventListener('mouseenter', handleMouseEnterImage);
        image.removeEventListener('mouseleave', handleMouseLeaveImage);
      });
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#11111b] font-whitney relative">
      <Navbar/>
      <div
        ref={cursor}
        className="top-0 fixed z-10 w-10 h-10 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 "
      ></div>
      <div
        ref={point}
        className="fixed top-0 z-10 w-2 h-2 rounded-full bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></div>
      <Page1 />
      <Page2 />
    </div>
  );
}

export default App;
