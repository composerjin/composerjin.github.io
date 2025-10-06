import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js'

const AudioWave = ({ url, title, markers = [] }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const previousVolume = useRef(1);

  useEffect(() => {
    if (!waveformRef.current) return;

    const regionsPlugin = RegionsPlugin.create();

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#aaa',
      progressColor: '#06354c',
      cursorColor: 'transparent',
      height: 80,
      responsive: true,
      normalize: true,
      plugins: [regionsPlugin]
    });

    wavesurfer.current.load(url);

    console.log(wavesurfer.current.plugins);

    wavesurfer.current.on('ready', () => {

        markers.forEach((time) => {
            regionsPlugin.addRegion({
            start: time,
            end: time,
            color: 'rgba(0, 0, 0, 0.4)',
            drag: false,
            resize: false
            });
        });
    });

    wavesurfer.current.setVolume(volume);

    wavesurfer.current.on('finish', () => setIsPlaying(false));

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [url]);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(wavesurfer.current.isPlaying());
    }
  };

  const toggleMute = () => {
    if (!wavesurfer.current) return;

    if (isMuted) {
      wavesurfer.current.setVolume(previousVolume.current);
      setVolume(previousVolume.current);
    } else {
      previousVolume.current = volume;
      wavesurfer.current.setVolume(0);
      setVolume(0);
    }

    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    wavesurfer.current.setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (newVolume > 0) previousVolume.current = newVolume;
  };

  return (
    <div className="modal-audio-item">
    <h4 className="modal-audio-title">{title}</h4>

    <div className="waveform-controls">
        <button className="waveform-button" onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="waveform-container">
        <div ref={waveformRef} className="waveform" />
        </div>

        {/* <div
        className="volume-control"
        onMouseEnter={() => setShowSlider(true)}
        onMouseLeave={() => setShowSlider(false)}
        >
        <button className="waveform-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        {showSlider && (
            <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            />
        )}
        </div> */}
        <button className="waveform-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
    </div>
    </div>

  );
};

export default AudioWave;
