// src/components/Header.js
import React from 'react';
import './Header.css';
import Socials from './Socials';
const bgImage = process.env.PUBLIC_URL + '/headerimg.jpg';

const Header = () => {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>Composer Jin</h1>
      <h2>Music Composer for Film, Game & Visual Media</h2>
      <div className="profile-pic">
        <img src="portrait.jpg" alt="Composer Jin" />
      </div>

      <div className="header-socials">
        <Socials />
      </div>
    </header>
  );
};

export default Header;
