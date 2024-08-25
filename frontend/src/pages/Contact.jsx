// src/components/Contact.js
import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <section id="contact" className="py-20 h-screen bg-black border-t bottom-[1px]">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-5xl font-bold mb-12">Contact Me</h2>
        <p className="text-lg mb-8">Feel free to reach out if you have any questions or would like to work together on a project!</p>
        
      </div>
      <Footer/>
    </section>
  );
}

export default Contact;
