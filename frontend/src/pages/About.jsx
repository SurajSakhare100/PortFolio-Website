import React, { useRef } from 'react';
import Headers from '../components/Headers';
import Image from '../components/Image';
import myProfile from '../../public/surajprofile.jpg'; // Ensure correct path

const AboutSection = () => {
    // Function to open the resume URL
  const aboutRef = useRef(null);

    

    return (
        <section id="about" className="w-full px-10 md:px-0 md:w-2/3 mx-auto py-2" ref={aboutRef}>
            <div className="">
                <Headers headers={'About'} triggerElement={aboutRef.current}  />
                <div className=" md:mt-10 flex flex-col-reverse gap-4 lg:flex-row items-center lg:justify-between md:pb-10">
                    <div className="about-info mb-6 sm:mb-0 sm:mr-6 flex-1 text-base sm:text-lg tracking-normal">
                        <p className='mb-2'>
                        Hello! I'm Suraj Sakhare, a passionate MERN stack developer with a strong focus on creating dynamic and responsive web applications. I specialize in using MongoDB, Express.js, React, and Node.js to build efficient and scalable solutions that enhance user experiences.
                        </p>
                        <p className='mb-2'>
                        With a keen interest in full-stack development, I enjoy working on projects that challenge my skills and push the boundaries of what’s possible. I am always eager to learn new technologies and stay updated with industry trends.  </p>
                        <p className='mb-2'>
                            My main focus these days is building interesting &amp; creative web designs. I like to code things from scratch and enjoy bringing ideas to life in the browser.
                        </p>
                        {/* Resume button */}
                        <a
                            className="w-40 cursor-pointer btn mt-6 flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                            id="resume-btn"
                            target="_blank"
                            href='https://drive.google.com/file/d/14g8ImsEA6PiQa7mgwK0zJ7w2YXyTKPLr/view?usp=sharing'
                        >
                            <div className="sign mr-2">
                                <svg viewBox="0 0 640 512" className="w-6 h-6 fill-current">
                                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"></path>
                                </svg>
                            </div>
                            <div className="text">Resume</div>
                        </a>
                    </div>

                    <div className="w-64 h-full sm:w-80 md:w-96">
                        <Image src={myProfile} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
