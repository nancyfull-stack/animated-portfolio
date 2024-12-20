import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold text-indigo-400">Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/skills" className="hover:text-indigo-400">Skills</Link>
          <Link to="/projects" className="hover:text-indigo-400">Projects</Link>
          <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;