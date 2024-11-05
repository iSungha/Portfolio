// src/components/Skills.js
import React from 'react';

function Skills() {
  return (
    <section className="card bg-base-100 shadow-lg p-6 my-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 hover:shadow-xl">
      <h2 className="card-title text-xl font-semibold">Top Skills</h2>
      <ul className="list-disc list-inside mt-2">
        <li>API Development</li>
        <li>Node.js</li>
        <li>Nuxt.js</li>
      </ul>
    </section>
  );
}

export default Skills;
