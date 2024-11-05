// src/App.js
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container mx-auto p-8">
      <Header />
      <Contact />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
