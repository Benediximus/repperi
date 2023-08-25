import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Riddle from './Riddle';
import AudioPlayer from './AudioPlayer';

function App() {
  const riddles = [
    { path: '/riddle1', question: "The More That Is Here, The Less You Will See", answer: 'darkness', audioSrc: 'le_festin.mp3' },
    { path: '/riddle2', question: "I Am The Beginning Of The End, And The End Of Before.", answer: 'e', audioSrc: 'the_incredibles.mp3'},
    // expect me
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
        {riddles.map((riddle, index) => (
            <Route key={index} path={riddle.path} element={<Riddle question={riddle.question} correctAnswer={riddle.answer} audioSrc={riddle.audioSrc} />} />
          ))}
          {/* dynamically do what I do, how I do it */}
          <Route path="/audio/:audioSrc" element={<AudioPlayer />} />
          <Route path="/" element={
            <>
              <h1>You're not supposed to see this</h1>
              {riddles.map((riddle, index) => (
                // this is only for now
                <a key={index} href={riddle.path}>Riddle {index + 1}</a>
              ))}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;