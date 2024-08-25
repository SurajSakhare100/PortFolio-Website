import React, { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    useEffect(() => {
        const innerCursor = document.querySelector('.inner-cursor');
        const outerCursor = document.querySelector('.outer-cursor');

        document.addEventListener('mousemove', (e) => {
            gsap.to(innerCursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out',
            });

            gsap.to(outerCursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        const images = document.querySelectorAll('img');
        images.forEach((image) => {
            image.addEventListener('mouseenter', () => {
                gsap.to(innerCursor, {
                    backgroundColor: '#ff00ff', // Color when hovering over image
                    scale:2,
                    opacity: 0.8,
                    duration: 0.2,
                    ease: 'power2.out',
                });
                gsap.to(outerCursor, {
                    scale: 1.5,
                    opacity: 0.5,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });

            image.addEventListener('mouseleave', () => {
                gsap.to(innerCursor, {
                    backgroundColor: '#ffffff', // Default color
                    scale: 1,
                    opacity: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                });
                gsap.to(outerCursor, {
                    scale: 1,
                    opacity: 0.3,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });
        });

        const hoverables = document.querySelectorAll('a,p,h1,h2, button, .hoverable');
        hoverables.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                gsap.to(innerCursor, {
                    scale: 1.5,
                    opacity: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                });
                gsap.to(outerCursor, {
                    scale: 1,
                    opacity: 0.5,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(outerCursor, {
                    scale: 1,
                    opacity: 0.3,
                    duration: 0.2,
                    ease: 'power2.out',
                });
                gsap.to(innerCursor, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });
        });

    }, []);

    return (
        <>
            <div className="inner-cursor fixed top-0 -translate-x-[50%] -translate-y-[50%] left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[1000] mix-blend-difference transition-transform duration-200 ease-linear"></div>
            <div className="outer-cursor fixed top-0 -translate-x-[50%] -translate-y-[50%] left-0 w-12 h-12 border-2 border-white rounded-full pointer-events-none z-[999] opacity-30 transition-transform duration-200 ease-linear"></div>
        </>
    );
};

export default CustomCursor;
