import React from 'react';
import '../css/skills.css';

const Skills = () => {
  const skillSet = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Express', 'Postgres', 'Docker', 'Kubernetes', 'MongoDB',
    , 'Git', 'Socket.IO', 'REST APIs'
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skillSet.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
