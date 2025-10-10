import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Contact = ({ forceOpen }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [forceOpen]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <p className="contact-intro">
        Have a question, collaboration idea, or any other enquiries?
      </p>

      <button className="contact-button" onClick={openModal}>
        Contact Me
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3>Contact Me</h3>
            <p>If you'd like to get in touch, please fill out the form below or reach out via email.</p>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
