import React from 'react';
import Footer from '../components/Footer';
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative pt-20 px-2 md:px-0 h-screen border-t overflow-hidden">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Me</h2>
        <p className=" text-wrap text-base md:text-lg mb-6">
          Feel free to reach out if you have any questions or would like to work together on a project!
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-8">
          <a
            href="https://www.linkedin.com/in/suraj-sakhare10/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex relative overflow-hidden items-center justify-center rounded-full bg-white group transition-all duration-500 cursor-pointer"
          >
            <FaLinkedin className='text-black w-full text-3xl relative z-10 transition-all duration-300 group-hover:fill-white' />
            <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
          </a>

          <a
            href="https://github.com/SurajSakhare100"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex relative overflow-hidden items-center justify-center rounded-full bg-white group transition-all duration-500 cursor-pointer"
          >
            <FaGithub className='text-black w-full text-4xl relative z-10 transition-all duration-300 group-hover:fill-white' />
            <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-500 z-0 transition-all duration-500 group-hover:top-0"></div>
          </a>

          <a
            href="mailto:sakharesuraj10@gmail.com"
            className="w-12 h-12 flex relative overflow-hidden items-center justify-center rounded-full bg-white group transition-all duration-500 cursor-pointer"
          >
            <FaEnvelope className='text-black w-full text-2xl relative z-10 transition-all duration-300 group-hover:fill-white' />
            <div className="absolute top-full left-0 w-full h-full rounded-full bg-green-500 z-0 transition-all duration-500 group-hover:top-0"></div>
          </a>

          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex relative overflow-hidden items-center justify-center rounded-full bg-white group transition-all duration-500 cursor-pointer"
          >
            <FaDiscord className="fill-gray-900 relative text-3xl z-10 transition-all duration-300 group-hover:fill-white" />
            <div className="absolute top-full left-0 w-full h-full rounded-full bg-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <img src="/suraj.png" alt="" className="w-80 h-80 md:w-96 md:h-96" />
      </div>

      <Footer />
    </section>
  );
}

export default Contact;
