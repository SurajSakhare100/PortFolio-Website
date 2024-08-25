import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Headers({ headers, triggerElement }) {
    const headerRef = useRef(null);

    useEffect(() => {
        if (triggerElement) {
            gsap.fromTo(
                headerRef.current,
                {
                    y: '10vh',
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: triggerElement, // Use the passed trigger element
                        start: 'top 60%', // Adjust start as needed
                        end: 'top 40%', // Adjust end as needed
                        scrub: true,
                        markers: false, // Set to true to debug the scroll trigger
                    },
                }
            );
        }
    }, [triggerElement]);

    return (
        <div className="flex items-center mb-6 mt-10" ref={headerRef}>
            <h2 className="text-3xl font-medium tracking-widest">
                &lt;/{headers}&gt;
            </h2>
            <p className="w-80 ml-2 mt-2 bg-white h-[1px]"></p>
        </div>
    );
}

export default Headers;
