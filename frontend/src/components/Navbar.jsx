import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-20 sticky top-0 z-[999] pt-5'>
            <div className='h-20 w-4/5 mx-auto rounded-[50px] px-10 backdrop-blur-sm bg-gradient-to-br from-[#1a1a29] to-[#1b1b28a1] flex justify-between items-center'>
                <div className='text-white font-baloo'>NAV logo</div>
                <ul className='flex gap-4 items-center w-1/2 justify-around text-xl text-white'>
                    <li className='nav-li cursor-pointer'>🏠<span className='nav-text'>Home</span></li>
                    <li className='nav-li cursor-pointer'>🫠<span className='nav-text'>About</span></li>
                    <li className='nav-li cursor-pointer'>🏋️‍♂️<span className='nav-text'>Work</span></li>
                    <li className='nav-li cursor-pointer'>📞<span className='nav-text'>Contact</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
