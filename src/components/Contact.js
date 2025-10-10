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
            <p>If you'd like to get in touch, please fill out the form below or reach out via email (contact@composer-jin.com)</p>

            <form
              className="contact-form"
              action="https://formspree.io/f/mjkaarbk"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Contact Form Submission" />

              {/* <label htmlFor="submissionType">Type of Submission</label> */}
              <select name="submissionType" required>
                <option value="">-- Type of Enquiry --</option>
                <option value="purchase-existing">Purchase an existing song</option>
                <option value="commission-new">Commission a new song</option>
                <option value="collab">Collaboration</option>
                <option value="general">Other enquiries</option>
              </select>

              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              {/* <input type="hidden" name="_next" value="http://localhost:3000/#/contact" /> */}
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>


          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
