// src/components/Socials.js
import React from 'react';
import './Socials.css';

import {
  FaYoutube,
  FaSpotify,
  FaLinkedin,
  FaSoundcloud,
  FaEnvelope 
} from 'react-icons/fa';

import {
  SiUpwork
} from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/@composer-jin',
    enabled: true,
  },
  {
    icon: <FaSpotify />,
    enabled: false,
  },
  {
    icon: <FaSoundcloud />,
    enabled: false,
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/jinnie-cho-23a05b331/',
    enabled: true,
  },
  {
    icon: <SiUpwork />,
    href: 'https://www.upwork.com/freelancers/~016fbd6125683eeccb',
    enabled: true,
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:contact@composer-jin.com',
    enabled: true,
  }
];

const Socials = () => {
  const leftIcons = socialLinks.slice(0, 3);
  const rightIcons = socialLinks.slice(3);

  const renderIcons = (group) =>
    group.map(({ icon, href, enabled }, index) =>
      enabled ? (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          {icon}
        </a>
      ) : (
        <span key={index} className="social-icon disabled">
          {icon}
        </span>
      )
    );

  return (
    <div className="socials">
      <div className="social-group left">{renderIcons(leftIcons)}</div>
      <div className="social-group right">{renderIcons(rightIcons)}</div>
    </div>
  );
};


export default Socials;
