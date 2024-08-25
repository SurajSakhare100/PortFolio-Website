import React from 'react'

function Footer() {
  return (
    <div className='w-full h-80 '>
          <div className="hidden md:block absolute -bottom-[10%] right-[15%] w-96 h-96 scale-[300%] bg-[#e14affc2] rounded-full blur-3xl  opacity-50 z-0"></div>
          <div className="hidden md:block absolute -bottom-[10%] left-[15%] w-96 h-96 scale-[300%] bg-[#e14affc1] rounded-full blur-3xl  opacity-50 z-0"></div>
          <div className='bg-black w-full h-20 absolute bottom-0'></div>
    </div>
  )
}

export default Footer
