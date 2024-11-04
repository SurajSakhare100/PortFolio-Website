import React from 'react'

function Footer() {
  return (
    <div className='w-full  text-white'>
          <div className="hidden md:block absolute -bottom-[10%] right-[10%] w-96 h-44 scale-[300%] bg-[#e14affc2] rounded-full blur-3xl  opacity-50 z-0"></div>
          <div className="hidden md:block absolute -bottom-[10%] left-[15%] w-96  h-44 scale-[300%] bg-[#e14affc1] rounded-full blur-3xl  opacity-50 z-0"></div>
          <div className='bg-black w-full h-20 absolute bottom-0 flex flex-col items-center justify-center'>
          © {new Date().getFullYear()} Suraj Sakhare. All rights reserved.
          <p>Also Visit to ReadSpark : <a href="https://readspark.vercel.app/" target="_blank"><span className='font-bold'>ReadSpark</span></a></p>
          </div>
          <div>
          </div>
    </div>
  )
}

export default Footer
