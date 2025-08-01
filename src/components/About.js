// src/components/About.js
import React from 'react';
import './About.css';
import Socials from './Socials';

const About = () => {
  return (
    <section className="about">
      <div className="mobile-socials-wrapper">
        <Socials />
      </div>

      <h2>About Me</h2>
      <p>
        I'm a London-based composer originally from South Korea, with years of experience in traditional Korean music and currently studying Film Composition at the London College of Music. This culturally diverse musical background allows me to respond flexibly to whatever sound, mood, or genre your project needs. I work fluently with Logic Pro for composing and producing, and can provide professionally notated scores using Sibelius when needed.  
      </p>
    </section>
  );
};

export default About;
