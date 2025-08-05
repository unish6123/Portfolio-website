import React from 'react';
import '../css/hero.css';
import profileImage from '../assets/images/profile.png'; // replace with your image path

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span>Unish Aryal</span></h1>
          <p>A Computer Science student passionate about web development, software engineering, and building cool things.</p>
          <div className="hero-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Unish Aryal" />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
