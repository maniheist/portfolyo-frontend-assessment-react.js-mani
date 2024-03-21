import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-500 to-indigo-600 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-white mb-8">
          Explore my work and let's create something amazing together.
        </p>
        <Link
          to="/projects"
          className="bg-white text-indigo-600 font-bold py-2 px-4 rounded hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
