import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the toggle button
import profile from '../../public/suraj.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    return (
        <nav className="w-full">
            <div className=' text-white flex justify-center  '>
                <div className="fixed top-4 md:w-3/4 overflow-hidden w-full flex justify-between items-center border-opacity-10 border border-gray-100 bg-gradient-to-br from-[rgb(35,35,49)] via-transparent to-transparent z-10 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl">
                    <div className='w-40 pl-2 md:pl-10'>
                        <img src={profile} alt="Profile" className='h-20' />
                    </div>
                    {/* Toggle button for mobile */}
                    <div className="md:hidden cursor-pointer pr-4" onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>
                    {/* Navigation links */}
                    <ul className={`absolute md:static top-full left-0 w-full h-full md:flex md:space-x-8 transition-all duration-300 rounded-3xl   ${isOpen ? 'block' : 'hidden'} md:block justify-around`}>
                        <li className='py-2 md:py-0 text-center'>
                            <a href="#home" className="text-lg font-semibold hover:text-yellow-500 transition-colors duration-200 block md:inline rounded-md">&lt;/Home&gt;</a>
                        </li>
                        <li className='py-2 md:py-0 text-center'>
                            <a href="#skills" className="text-lg font-semibold hover:text-yellow-500 transition-colors duration-200 block md:inline">&lt;/Skills&gt;</a>
                        </li>
                        <li className='py-2 md:py-0 text-center'>
                            <a href="#projects" className="text-lg font-semibold hover:text-yellow-500 transition-colors duration-200 block md:inline">&lt;/Projects&gt;</a>
                        </li>
                        <li className='py-2 md:py-0 text-center'>
                            <a href="#about" className="text-lg font-semibold hover:text-yellow-500 transition-colors duration-200 block md:inline">&lt;/About&gt;</a>
                        </li>
                        <li className='py-2 md:py-0 text-center'>
                            <a href="#contact" className="text-lg font-semibold hover:text-yellow-500 transition-colors duration-200 block md:inline">&lt;/Contact&gt;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
