// src/components/Socials.js
import React from 'react';
import './Socials.css';

import {
  FaYoutube,
  FaSpotify,
  FaLinkedin,
  FaSoundcloud,
  FaEnvelope, 
  FaInstagram
} from 'react-icons/fa';

import {
  SiUpwork,
  SiApplemusic,
  SiAmazonmusic,
  SiYoutubemusic
} from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaSpotify />,
    href: 'https://open.spotify.com/artist/0OEnezr5378wxAoigqlcUr',
    enabled: true,
  },
  {
    icon: <SiYoutubemusic />,
    href: 'https://music.youtube.com/channel/UCyQSTrOwON_cXMvxJzEohtw',
    enabled: true,
  },

  {
    icon: <SiApplemusic />,
    href: 'https://music.apple.com/gb/artist/jin-cho/1842944061',
    enabled: true,
  },
  {
    icon: <SiAmazonmusic/>,
    href: 'https://music.amazon.co.uk/artists/B0F8ZR9C8T/jin-cho?marketplaceId=A1F83G8C2ARO7P',
    enabled: true,
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/composer_jincho/?igsh=MWY3ZHhvYnhoaG1hcg',
    enabled: true,
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/jin-cho-23a05b331/',
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
  const leftIcons = socialLinks.slice(0, 4);
  const rightIcons = socialLinks.slice(4);

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
