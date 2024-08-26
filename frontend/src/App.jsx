import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import gsap from 'gsap';
import CustomCursor from './components/CustomCursor';
import AnimatedImage from './components/AnimatedImage';
import ThreeScene from './components/RotatingCube';

function App() {
  const voiletcircleRef = useRef(null);
  const bluecircleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(voiletcircleRef.current, {
      scale: 1.5,
      duration: 2,
      ease: 'power1.inOut',
    })
      .to(voiletcircleRef.current, {
        scale: 1,
        duration: 2,
        ease: 'power1.inOut',
      });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(bluecircleRef.current, {
      scale: 1.5,
      duration: 2,
      ease: 'power1.inOut',
    })
      .to(bluecircleRef.current, {
        scale: 1,
        duration: 2,
        ease: 'power1.inOut',
      });
  }, []);
  return (
    <div className='w-full bg-[rgb(17,17,27)] text-white relative overflow-hidden'>
       
      <CustomCursor />
      <div ref={voiletcircleRef} className="hidden md:block absolute top-48 -right-[10%] w-96 h-96 bg-violet-500 rounded-full blur-3xl  opacity-50 z-0"></div>

      <div ref={bluecircleRef} className="hidden md:block absolute top-[10%] -left-[15%] w-96 h-96 bg-blue-500 rounded-full blur-3xl  opacity-50 z-0"></div>

      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
