import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Image from './Image';
import profile from '../assets/profile.jpg';

function Page2() {
  const pageRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(pageRef.current.querySelectorAll('.box'), {
      y: -50,
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power.out',
      scrollTrigger: {
        trigger: pageRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: true,
        markers: true,
      },
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      className="w-full h-[300vh] flex items-center justify-center flex-col gap-8"
      ref={pageRef}
    >
      <div className="box w-3/4 bg-white rounded-lg h-80"></div>
      <div className="box w-3/4 bg-white rounded-lg h-80"></div>
      <div className="box w-3/4 bg-white rounded-lg h-80"></div>
    </div>
  );
}

export default Page2;
