// src/components/Experience.js
import React from 'react';

function Experience() {
  return (
    <section className="card bg-base-100 shadow-lg p-6 my-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 hover:shadow-xl">
      <h2 className="card-title text-xl font-semibold">Experience</h2>
      <div className="mt-4">
        <h3 className="font-bold">Fisheries and Oceans Canada</h3>
        <p>Junior Software Developer | Student IT Technician (May 2024 - Present)</p>
        <p>Working on full-stack development, supporting Canada's fisheries through technology.</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Freelance Developer</h3>
        <p>November 2023 - Present</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Concentrix</h3>
        <p>Technical Support Representative (May 2023 - August 2023)</p>
        <p>Provided tech support, developed communication, adaptability, and multitasking skills.</p>
      </div>
    </section>
  );
}

export default Experience;
