import React from 'react';
import '../css/contacts.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch </h2>
        <p>I’d love to hear from you! Whether it's about a project, a role, or just to say hello.</p>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:aryalunish09@email.com">aryalunish09@email.com</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/unish6123" target="_blank" rel="noopener noreferrer">https://github.com/unish6123</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/unish-aryal/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/unish-aryal/</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
