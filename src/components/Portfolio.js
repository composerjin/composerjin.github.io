// src/components/Portfolio.js
import React, { useState } from 'react';
import './Portfolio.css';
import PortfolioGrid from './PortfolioGrid';

import {
  FaExternalLinkAlt 
} from 'react-icons/fa';

const portfolioItems = [
  {
    img: '/projects/upcoming.jpg',
    title: 'Grit – Cinematic String Quartet (Releasing Soon)',
    description: 'A cinematic string quartet for film and visual storytelling, enhancing emotional depth. Releasing soon on Youtube, Spotify and Soundcloud.',
    audioFiles: [
      { title: "Grit Excerpt", url: '/audio/grit.mp3' },
    ],
    tags: ['Upcoming', 'In Development'],
  },
  {
    img: '/projects/gugak.jpg',
    title: 'Performance on Gugak Broadcasting System (Gugak TV)',
    description: 'Performance on the traditional Korean string instrument geomungo was broadcast on Gugak Broadcasting System: TV (국악방송TV) on 18 July 2021, showcasing my interpretation of Korean traditional music on national television.',
    link: 'https://www.youtube.com/watch?v=lHceGfwlfY8',
    embed: 'https://www.youtube.com/embed/lHceGfwlfY8',
    linktext: 'Watch on YouTube',
    hasVideo: true,
    tags: ['Performance'],
  },
  
  {
    img: '/projects/vrmusic.jpg',
    title: 'Background & Trailer Music for VR Game Huetopia (Meta Quest 3)',
    description: 'Composed immersive ambient soundscapes, background music and dynamic trailer music tailored for VR gaming.',
    link: 'https://www.meta.com/en-gb/experiences/huetopia/26230755453235481/',
    linktext: 'View on Meta',
    audioFiles: [
      { title: "Huetopia Trailer", url: '/audio/Huetopia Trailer.mp3' },
      { title: "Huetopia Background Music", url: '/audio/Huetopia revision 2.mp3' },
    ],
    tags: ['Upcoming'],
  },

  {
    title: 'Sangria Stains – Solo Piano Performance at London College of Music',
    description: 'Solo piano piece composed by Jin Cho and performed by Emanuele Mollica at the London College of Music concert hall. Written for a recital themed Musical Exoticism, the piece captures the vibrant spirit of Spanish music and culture.',
    img: '/projects/sangria-thumbnail.jpg',
    link: 'https://youtu.be/eE1SCukFFcc',
    embed: 'https://www.youtube.com/embed/eE1SCukFFcc',
    linktext: 'Watch on YouTube',
    hasVideo: true,
    tags: ['Performance'],
  }
];

const freelanceItems = [
  {
    img: '/projects/med.jpg',
    title: 'Medieval Fantasy BGM for Visual Media',
    description: 'BMG/OST evoking a medieval atmosphere, ideal for fantasy films, games, or trailers with a historical or dramatic tone.',
    audioFiles: [
      { title: "Demo 1", url: '/audio/Medieval Violin Idea Demo 1.mp3' },
      { title: "Demo 2", url: '/audio/Medieval Violin Idea Demo copy (2).mp3' }
    ],
    tags: ['Available for Licensing'],
  },
  {
    img: '/projects/tension.jpg',
    title: 'Tension-Building BGM for Visual Media',
    description: 'Tension-building BGM crafted to amplify tension in high-pressure scenes',
    audioFiles: [
      { title: "Tension Build", url: '/audio/Tension Build copy.mp3' },
    ],
    tags: ['Available for Licensing'],
  },
  {
    img: '/projects/nostalgia.jpg',
    title: 'Nostalgia-evoking BGM',
    description: 'Nostalgia-evoking BGM crafted to deepen emotional immersion',
    audioFiles: [
      { title: "Nostalgic Waves", url: '/audio/Nostalgic Waves.mp3' },
    ],
    tags: ['Available for Licensing'],
  },
  {
    img: '/projects/soothing.jpg',
    title: 'Soothing BGM Loop for Cozy Gameplay',
    description: 'Loopable BGM crafted to evoke cosiness. Ideal for healing-themed games',
    audioFiles: [
      { title: "Cheeky Skips", url: '/audio/Cheeky Skips.mp3' },
    ],
    tags: ['In Development'],
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
      title="Available for Licensing"
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
                title={selectedItem.title}
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

          {selectedItem.audioFiles && selectedItem.audioFiles.length > 0 && (
            <div className="modal-audio-wrapper">
              {selectedItem.audioFiles.map((audio, index) => (
                <div key={index} className="modal-audio-item">
                  <h4 className="modal-audio-title">{audio.title}</h4>
                  <audio controls>
                    <source src={audio.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
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
            {selectedItem.tags && selectedItem.tags.map((tag, index) => (
              <span key={index} className={`tag ${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
      )}
    </>
  );
};

export default Portfolio;