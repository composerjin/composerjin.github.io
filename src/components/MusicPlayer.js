/* src/components/MusicPlayer.js */
import React from 'react';
import './MusicPlayer.css';

const spotifyTracks = [
  {
    id: '49Tpr2MqKrbRAHCidDolnk',
    title: 'Gangnam Style',
  },
  {
    id: '7khnFXtLW2u2XYrsrtUUgL',
    title: 'Minecraft Style',
  }
];

const SpotifyPlayer = () => {
  return (
    <section className="spotify-player">
      <h2>Released Music</h2>
      <div className="spotify-tracks">
        {spotifyTracks.map(({ id, title }) => (
          <div key={id} className="spotify-track">
            {/* <h3>{title}</h3> */}
            <iframe
              src={`https://open.spotify.com/embed/track/${id}`}
              width="500"
              height="152" // 80, 152, 352
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Spotify player for ${title}`}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpotifyPlayer;
