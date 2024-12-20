import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h2 className="text-4xl font-bold text-indigo-400">My Skills</h2>
      <ul className="mt-6 text-xl text-gray-400">
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
};

export default Skills;