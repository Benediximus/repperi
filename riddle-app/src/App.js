import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "The More That Is Here, The Less You Will See";
  const answer = 'darkness';
  const audioSrc = '/audio/le_festin.mp3';

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
