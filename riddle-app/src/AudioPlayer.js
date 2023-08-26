import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

function AudioPlayer({ audioSrc }) { // Changed to receive audioSrc as a prop
  return (
    <div>
      <h2>Correct! Listen to this:</h2>
      <ReactAudioPlayer
        src={audioSrc}
        autoPlay
        controls
      />
    </div>
  );
}

export default AudioPlayer;
