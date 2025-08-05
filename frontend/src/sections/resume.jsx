import React from 'react';
import '../css/resume.css';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <h2 className="resume-title">My Resume</h2>
        <p>You can view or download my full resume below:</p>
        <div className="resume-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className="resume-btn download"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
