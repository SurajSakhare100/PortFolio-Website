// src/components/Skills.js
import React, { useRef } from 'react';
import SkillComponent from '../components/SkillComponent';
import Headers from '../components/Headers';

const Skills = () => {
  const triggerRef = useRef(null);
  return (
    <section id='skills' className="w-2/3 mx-auto py-10" ref={triggerRef}>
      <div className="">
      <Headers  headers={'Skills'} triggerElement={triggerRef.current}/>
      <h1 className='text-3xl font-semibold text-center my-14'>Tech Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <SkillComponent/>
          <SkillComponent/>
          <SkillComponent/>
          <SkillComponent/>
          <SkillComponent/>
          <SkillComponent/>
          <SkillComponent/>
          <SkillComponent/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
