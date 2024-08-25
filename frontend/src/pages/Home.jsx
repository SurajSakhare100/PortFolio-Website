import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const text1 = "Namste(); I'm";
    const text2 = "Suraj Sakhare";
    const text3 = "I design & code for web";

    useEffect(() => {
        gsap.to('.h1', {
            color: '#60a5fa',
            duration: 2,
            yoyo: true,
            repeat: -1,
            stagger: 0.5,
            ease: 'power1.inOut',
        });
    }, []);

    const bounceChar = (e) => {
        const tl = gsap.timeline();
        const element = e.target;

        if (!element.dataset.originalColor) {
            element.dataset.originalColor = window.getComputedStyle(element).color;
        }

        tl.to(element, {
            scaleX: 0.8,
            scaleY: 1.2,
            duration: 0.2,
            ease: 'bounce.out',
            color: 'aqua',
        })
            .to(element, {
                scaleX: 1.2,
                scaleY: 0.8,
                duration: 0.3,
                ease: 'power1.out',
                color: element.dataset.originalColor,
            })
            .to(element, {
                scaleX: 1,
                scaleY: 0.9,
                duration: 0.2,
                ease: 'power1.out',
            })
            .to(element, {
                scaleX: 1,
                scaleY: 1,
                duration: 0.2,
                ease: 'bounce.out',
            });
    };

    

    return (
        <>
            <div className=' w-full h-screen overflow-hidden relative'>
                <div className="z-20 w-2/3 sm:px-20 pb-20 mx-auto flex h-full flex-col gap-2 items-start justify-end ">

                    <h4 className="font-bold font-whitney text-4xl tracking-normal cursor-pointer select-none">
                        {text1.split("").map((char, index) => (
                            <span
                                key={index}
                                onMouseOver={bounceChar}
                                className="text-white inline-block mx-[3px]"
                            >
                                {char}
                            </span>
                        ))}
                    </h4>
                    <h4 className="-mt-4 text-violet-400 h1 leading-snug font-bold font-whitney text-7xl tracking-tighter cursor-pointer select-none">
                        {text2.split("").map((char, index) => (
                            <span
                                key={index}
                                onMouseOver={bounceChar}
                                className="inline-block mx-1"
                            >
                                {char}
                            </span>
                        ))}
                    </h4>
                    <h4 className="font-bold font-whitney text-white text-7xl tracking-tighter cursor-pointer select-none">
                        {text3.split("").map((char, index) => (
                            <span
                                key={index}
                                onMouseOver={bounceChar}
                                className="inline-block mx-1"
                            >
                                {char}
                            </span>
                        ))}
                    </h4>
                    <div className='flex flex-col gap-4 text-lg font-semibold pr-40 mt-4'>
                        <p className="text-white select-none">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quas
                            ipsa dolorem minus. Cum voluptatibus enim amet quia eligendi rem.
                        </p>
                        <p className="text-white select-none">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quas
                            ipsa dolorem minus. Cum voluptatibus enim amet quia eligendi rem.
                        </p>
                    </div>
                    <div className="bg-[#7D27FF] rounded-lg opacity-0.8 mt-6">
                        <button className="font-light -tracking-tighter inset-2 text-sm bg-[#A8C7F2] py-3 px-16 shadow-inner shadow-[#11111164] rounded-lg font-poppins transform -translate-x-1 -translate-y-1 delay-75 ease-in transition-all hover:-translate-x-2 hover:-translate-y-2">
                            Let's Talk
                        </button>
                    </div>
                </div>
             
            </div>
            </>
    );
};

export default Home;
