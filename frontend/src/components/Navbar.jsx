// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full text-white">
            <div className='w-full '>
                <div className='flex justify-center '>
                    <ul className="fixed top-4 w-3/4 mx-auto px-20  flex justify-between space-x-8 py-6 border-opacity-10 border border-gray-100 border-whit bg-gradient-to-br from-[rgb(35,35,49)] via-transparent to-transparent z-10  bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl shadow-inherit">
                        <li>
                            <a href="#home" className="text-lg font-semibold hover:underline">&lt;/Home&gt;</a>
                        </li>
                        <li>
                            <a href="#skills" className="text-lg font-semibold hover:underline">&lt;/Skills&gt;</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-lg font-semibold hover:underline">&lt;/Projects&gt;</a>
                        </li>
                        <li>
                            <a href="#about" className="text-lg font-semibold hover:underline">&lt;/About&gt;</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-lg font-semibold hover:underline">&lt;/Contact&gt;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
