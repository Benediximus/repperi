import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import './AudioPlayer.css';

function AudioPlayer() {
  const { audioSrc } = useParams(); // get the audioSrc parameter from the URL

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