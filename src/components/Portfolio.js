// src/components/Portfolio.js
import React, { useState } from 'react';
import './Portfolio.css';
import PortfolioGrid from './PortfolioGrid';

import {
  FaExternalLinkAlt 
} from 'react-icons/fa';

const portfolioItems = [
  {
    id: 1,
    img: '/projects/upcoming.jpg',
    title: 'Grit – Cinematic String Quartet (Releasing Soon)',
    description: 'A cinematic string quartet for film and visual storytelling, enhancing emotional depth. Releasing soon on Youtube, Spotify and Soundcloud.',
    audioURL: '/audio/grit.mp3',
    isUpcoming: true,
    inDev: true,

  },
  {
    id: 2,
    img: '/projects/gugak.jpg',
    title: 'Performance on Gugak Broadcasting System (Gugak TV)',
    description: 'Performance on the traditional Korean string instrument geomungo was broadcast on Gugak Broadcasting System: TV (국악방송TV) on 18 July 2021, showcasing my interpretation of Korean traditional music on national television.',
    link: 'https://www.youtube.com/watch?v=lHceGfwlfY8',
    embed: 'https://www.youtube.com/embed/lHceGfwlfY8',
    linktext: 'Watch on YouTube',
    hasVideo: true,
  },
  {
    id: 3,
    img: '/projects/vrmusic.jpg',
    title: 'Background & Trailer Music for VR Game Huetopia (Meta Quest 3)',
    description: 'Composed immersive ambient soundscapes, background music and dynamic trailer music tailored for VR gaming.',
    link: 'https://www.meta.com/en-gb/experiences/huetopia/26230755453235481/',
    linktext: 'View on Meta',
    audioURL: '/audio/Huetopia Trailer.mp3',
    isUpcoming: true,
  },
];

const freelanceItems = [
  {
    id: 1,
    img: '/projects/med.jpg',
    title: 'Medieval Fantasy BGM for Visual Media',
    description: 'BMG/OST evoking a medieval atmosphere, ideal for fantasy films, games, or trailers with a historical or dramatic tone.',
    availableForLicensing: true,
    audioURL: '/audio/Medieval Violin Idea Demo copy.mp3'
  },
  {
    id: 2,
    img: '/projects/tension.jpg',
    title: 'Tension-Building BGM for Visual Media',
    description: 'Tension-building BGM crafted to amplify tension in high-pressure scenes',
    availableForLicensing: true,
    audioURL: '/audio/Tension Build copy.mp3'
  },
  {
    id: 3,
    img: '/projects/nostalgia.jpg',
    title: 'Nostalgia-evoking BGM',
    description: 'Nostalgia-evoking BGM crafted to deepen emotional immersion',
    availableForLicensing: true,
    audioURL: '/audio/Nostalgic Waves.mp3'
  },
  {
    id: 4,
    img: '/projects/soothing.jpg',
    title: 'Soothing BGM Loop for Cozy Gameplay',
    description: 'Loopable BGM crafted to evoke cosiness. Ideal for healing-themed games',
    inDev: true,
    audioURL: '/audio/Cheeky Skips.mp3'
  },
]

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item, e) => {
    e.preventDefault();
    setSelectedItem(item);
  };

  const closeModal = () => setSelectedItem(null);

  return (
  <>
    <PortfolioGrid
      title="Portfolio"
      items={portfolioItems}
      onCardClick={openModal}
    />
    <PortfolioGrid
      title="Freelance"
      items={freelanceItems}
      onCardClick={openModal}
    />

    {selectedItem && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>

          {selectedItem.hasVideo ? (
            <div className="modal-image-wrapper">
              <iframe
                className="modal-video"
                src={selectedItem.embed}
                frameBorder="0"
                gesture="media"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              className="modal-image"
              src={selectedItem.img}
              alt={selectedItem.title}
            />
          )}

          <h3>{selectedItem.title}</h3>

          <p>{selectedItem.description}</p>

          {selectedItem.audioURL && (
            <div className="modal-audio-wrapper">
              <audio controls>
                <source src={selectedItem.audioURL} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          
          {selectedItem.link && (
            <div className="modal-link">
              <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                {selectedItem.linktext} <FaExternalLinkAlt className="modal-link-go"/>
              </a>
            </div>
          )}

          {selectedItem.availableForLicensing && (
            <p className="modal-link">Contact by email for licensing details and pricing</p>
          )}

          <div className="tags">
            {selectedItem.isUpcoming && (
              <span className="tag upcoming">Upcoming</span>
            )}
            {selectedItem.availableForLicensing && (
              <span className="tag licensing">Available for Licensing</span>
            )}
            {selectedItem.inDev && (
              <span className="tag in-development">In Development</span>
            )}
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Portfolio;