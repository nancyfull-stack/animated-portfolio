import React from 'react';
import ProfilePic from '../assets/userpic.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <img src={ProfilePic} alt="Soni Prajapati" className="rounded-full w-40 h-40 shadow-lg border-4 border-indigo-400" />
      <h2 className="text-4xl font-bold mt-4 animate-bounce">Hi, I’m Soni Prajapati</h2>
      <p className="text-xl text-gray-400 mt-2">A passionate Web Full-Stack Developer</p>
      <div className="mt-6">
        <a
          href="#contact"
          className="bg-indigo-400 hover:bg-indigo-600 text-white px-6 py-3 rounded-full transition-all"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Home;