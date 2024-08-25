import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const AnimatedImage = ({ imageSrc, eyeSrc }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);

    useEffect(() => {
        // Update eye position based on mouse movement
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = imageRef.current.getBoundingClientRect();
            
            const eyeWidth = leftEyeRef.current.offsetWidth;
            const eyeHeight = leftEyeRef.current.offsetHeight;

            // Calculate the position of eyes based on mouse position
            const x = ((clientX - left - width / 2) / width) * 20; // Adjust 20 for eye movement range
            const y = ((clientY - top - height / 2) / height) * 20; // Adjust 20 for eye movement range

            setMousePosition({ x, y });

            gsap.to(leftEyeRef.current, {
                x: x,
                y: y,
                duration: 0.3,
                ease: 'power2.out',
            });

            gsap.to(rightEyeRef.current, {
                x: x,
                y: y,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative inline-block" ref={imageRef}>
            <img
                src={imageSrc}
                alt="Animated"
                className="w-40 h-auto"
            />
            <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <img
                    src={eyeSrc}
                    alt="Left Eye"
                    className="absolute left-0 top-0 w-12 h-12"
                    ref={leftEyeRef}
                />
            </div>
            <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <img
                    src={eyeSrc}
                    alt="Right Eye"
                    className="absolute right-0 top-0 w-12 h-12"
                    ref={rightEyeRef}
                />
            </div>
        </div>
    );
};

export default AnimatedImage;
