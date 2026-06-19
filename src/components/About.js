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
        I'm a London-based Flim, Game & Visual Media Composer originally from South Korea, with years of experience in traditional East Asian music and currently studying Film Composition at the London College of Music.
      </p>
    </section>
  );
};

export default About;
