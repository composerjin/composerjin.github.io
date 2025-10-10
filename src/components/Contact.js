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

  const openModal = () => {
    setModalOpen(true);
    setHasError(false);
    setSubmitted(false);
  };

  const closeModal = () => setModalOpen(false);

  const [isSubmitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

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

            {(!isSubmitted && !hasError) && (
              <>
                <h3>Contact Me</h3>
                <p>
                  If you'd like to get in touch, please fill out the form below or reach out via email
                  <a href="mailto:contact@composer-jin.com">contact@composer-jin.com</a>
                </p>
              </>
            )}

            {/* <form
              className="contact-form"
              action="https://formspree.io/f/mjkaarbkeeeeeee" //mjkaarbk
              method="POST"
            > */}

          {hasError && (
            <div className="error-message">
              <p>Sorry, something went wrong while sending your message.</p>
              <p>Please try again later or email me directly at <a href="mailto:contact@composer-jin.com">contact@composer-jin.com</a>.</p>
            </div>
          )}


          {isSubmitted ? (
            <div className="thank-you-message">
              <h4>Thank you!</h4>
              <p>Your message has been sent successfully. I'll get back to you as soon as I can.</p>
              <button className="contact-button" onClick={() => {
                setSubmitted(false);
                setModalOpen(false);
              }}>
                Close
              </button>
            </div>
          ) : (
              !hasError && 
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;

                  fetch("https://formspree.io/f/mjkaarbk", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      submissionType: form.submissionType.value,
                      name: form.name.value,
                      email: form.email.value,
                      message: form.message.value,
                      _subject: "Contact Form Submission"
                    })
                  })
                  .then((response) => {
                      if (response.ok) {
                        setSubmitted(true);
                        setHasError(false);
                      } else {
                        setHasError(true);
                      }
                    })
                  .catch(() => {
                    setHasError(true);
                  });
                }}
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
           )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
