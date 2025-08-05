// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/headers.jsx';
import Hero from './sections/hero.jsx';
import About from './sections/about.jsx';
import Skills from './sections/skills.jsx';
import Resume from './sections/resume.jsx';
import Contact from './sections/contacts.jsx';

function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: '80px' }}>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Contact />
      </main>
    </div>
  );
}

export default App;
