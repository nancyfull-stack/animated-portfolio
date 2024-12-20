import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h2 className="text-4xl font-bold text-indigo-400">Contact Me</h2>
      <form className="mt-6 w-80">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-400 hover:bg-indigo-600 text-white p-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;