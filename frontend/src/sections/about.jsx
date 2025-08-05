import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m a Computer Science undergraduate with a strong interest in building responsive, user-friendly web applications.
          I enjoy solving real-world problems through code, and I’m always learning new technologies to sharpen my skills.
        </p>
        <p className="about-text">
          During my time at university and through internships, I’ve worked on several full-stack projects using technologies like React, Node.js, Relational and Non-relational Database. and SQL.
          I’m particularly passionate about clean design, performance, and accessibility. I've been exposed with agile framework.
        </p>
        <p className="about-text">
          When I’m not coding, you can find me exploring productivity tools, learning design, or reading about startups and innovation.
        </p>
      </div>
    </section>
  );
};

export default About;
