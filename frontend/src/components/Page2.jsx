import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Page2() {
    const page = useRef();

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

        gsap.from(page.current.querySelectorAll('.box'), {
            y: 50,
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: 'power.out',
            scrollTrigger: {
                trigger: page.current,
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: true,
                markers: true,
            },
            stagger: 0.2
        });

        // Cleanup function to kill GSAP animations and ScrollTrigger
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className=" w-full h-[200vh] flex items-center justify-center flex-col gap-8" ref={page}>
            <div className="box w-3/4 bg-white rounded-lg h-80"></div>
            <div className="box w-3/4 bg-white rounded-lg h-80"></div>
            <div className="box w-3/4 bg-white rounded-lg h-80"></div>
        </div>
    );
}

export default Page2;
