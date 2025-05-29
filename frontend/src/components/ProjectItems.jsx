import { FaGithub } from "react-icons/fa";
import store from '../assets/store.png'; // Ensure the correct path
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ image, data }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            itemRef.current,
            {
                y: '10vh',
                opacity: 0,
                scale: 0.8,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: itemRef.current,
                    start: 'top 80%', // Adjust start as needed
                    end: 'top 40%',   // Adjust end as needed
                    scrub: true,
                    markers: false,   // Set to true to debug the scroll trigger
                },
            }
        );
    }, []);

    return (
        <div
            ref={itemRef}
            className="w-full h-auto md:h-[400px] overflow-hidden border-opacity-30 border border-white bg-gradient-to-br from-[rgb(24,24,37)] via-transparent to-transparent z-0 bg-opacity-30 backdrop-blur-2xl rounded-3xl shadow-xl shadow-inherit"
        >
            <div className="w-full h-full grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2">
                <div className="p-8 text-white flex flex-col justify-center w-full h-full items-start">
                    <img
                        src={store}
                        alt="Project favicon"
                        className="w-10 h-10 mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">{data?.name}</h3>
                    <span className="text-lg mb-4 text-start">
                        {data?.desc}
                    </span>
                    <div className="flex gap-4">
                        {
                        data?.gitlink &&
                            <a
                            href={data.gitlink}
                            target="_blank" 
                            rel="noopener noreferrer"  // Added for security
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaGithub className="w-10 h-10" />
                        </a>
                        }
                        <a
                            href={data.weblink}
                            target="_blank" 
                            rel="noopener noreferrer"  // Added for security
                            className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
                        >
                            <span>Live view</span>
                        </a>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <div className="absolute bottom-0 -right-[25%] sm:-right-[25%] lg:-right-[15%] h-full sm:h-[80%] w-[120%] rounded-t-xl overflow-hidden">
                        <img
                            src={image}
                            alt="Preview"
                            className="h-full w-full object-cover" // Added object-cover for better image scaling
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
