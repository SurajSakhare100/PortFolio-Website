import React from 'react';
import profile from '../assets/profile.jpg'; // Ensure correct path
import Headers from '../components/Headers';
import Image from '../components/Image';

const AboutSection = () => {
    // Function to open the resume URL
    const openURL = () => {
        window.open('URL_TO_YOUR_RESUME', '_blank');
    };

    return (
        <section className="w-2/3 mx-auto ">
            <div className="p-6">
               <Headers  headers={'About'}/>

                <div className="w-full flex flex-col sm:flex-row items-center justify-between md:pb-10">
                    <div className="about-info mb-6 sm:mb-0 sm:mr-6 flex-1 text-lg tracking-normal">
                        <p className='mb-2'>
                            Hi! My name is Vinod. I'm a web developer and digital visual artist. I love creating things that exist on the internet. My interest in web development started in 2021 when I decided to upload my digital concept arts online.
                        </p>
                        <p className='mb-2'>
                            Instead of creating an online Concepts Art website, I started enjoying web development. Creating custom things for the web taught me a lot about design &amp; development!
                        </p>
                        <p className='mb-2'>
                            My main focus these days is building interesting &amp; creative web designs. I like to code things from scratch and enjoy bringing ideas to life in the browser.
                        </p>
                        {/* Resume button */}
                        <button
                            className="resume-btn mt-6 flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                            id="resume-btn"
                            onClick={openURL}
                        >
                            <div className="sign mr-2">
                                <svg viewBox="0 0 640 512" className="w-6 h-6 fill-current">
                                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"></path>
                                </svg>
                            </div>
                            <div className="text">Resume</div>
                        </button>
                    </div>

                    <div className="w-80 h-full">
                        <Image src={profile}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
