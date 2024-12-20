import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h2 className="text-4xl font-bold text-indigo-400">My Projects</h2>
      <div className="mt-6 space-y-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white">Project 1</h3>
          <p className="text-gray-400">Description of project 1...</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white">Project 2</h3>
          <p className="text-gray-400">Description of project 2...</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white">Project 3</h3>
          <p className="text-gray-400">Description of project 3...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;