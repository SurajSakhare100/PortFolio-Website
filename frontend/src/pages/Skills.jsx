// src/components/Skills.js
import React, { useRef } from 'react';
import SkillComponent from '../components/SkillComponent';
import Headers from '../components/Headers';
import mongodb from '/skills/mongodb.png';
import postman from '/skills/postman.png';
import react from '/skills/react.png';
import figma from '/skills/figma.png';
import tailwind from '/skills/tailwind.png';
import java from '/skills/java.png';
import github from '/skills/github.png';
import cpp from '/skills/cpp.png';
import js from '/skills/javascript.png';
import vercel from '/skills/vercel.jpg';
import express from '/skills/express.png';
import node from '/skills/node-js.png';

const Skills = () => {
  const triggerRef = useRef(null);

  return (
    <section id='skills' className="w-full px-10 md:px-0 md:w-2/3 mx-auto md:py-10" ref={triggerRef}>
      <div>
        <Headers headers={'Skills'} triggerElement={triggerRef.current} />
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 md:mt-12">
          <SkillComponent image={cpp} name="C++" />
          <SkillComponent image={js} name="JavaScript" />
          <SkillComponent image={java} name="Java" />
          <SkillComponent image={react} name="React" />
          <SkillComponent image={mongodb} name="MongoDB" />
          <SkillComponent image={express} name="Express" />
          <SkillComponent image={node} name="Node.js" />
          <SkillComponent image={tailwind} name="Tailwind CSS" />
          <SkillComponent image={github} name="GitHub" />
          <SkillComponent image={vercel} name="Vercel" />
          <SkillComponent image={postman} name="Postman" />
          <SkillComponent image={figma} name="Figma" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
