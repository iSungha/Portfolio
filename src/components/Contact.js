// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section className="card bg-base-100 shadow-lg p-6 my-4 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-200 hover:shadow-xl">
      <h2 className="card-title text-xl font-semibold">Contact</h2>
      <p>Halifax, NS</p>
      <p><a href="tel:5195730722" className="link link-primary">519-573-0722</a></p>
      <p><a href="mailto:007.garry.earl@gmail.com" className="link link-primary">007.garry.earl@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/gurkeerat-sangha-a97b99154" target="_blank" rel="noopener noreferrer" className="link link-primary">LinkedIn Profile</a></p>
    </section>
  );
}

export default Contact;
