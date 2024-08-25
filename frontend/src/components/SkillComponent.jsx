import React from 'react'
import store from '../assets/store.png'; // Ensure correct path

function SkillComponent() {
  return (
    <div
    className="w-40 h-40 flex items-center justify-center border-opacity-20 border border-gray-100 border-whit bg-gradient-to-br from-[rgb(24,24,37)] via-transparent to-transparent z-0  bg-opacity-10 backdrop-blur-2xl rounded-3xl shadow-xl shadow-inherit">
      <img src={store} alt="" className='w-20 h-20' />
    </div>
  )
}

export default SkillComponent
