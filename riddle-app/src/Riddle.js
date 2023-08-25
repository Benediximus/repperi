import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Riddle.css';

function Riddle({ question, correctAnswer, audioSrc }) {
    const [userAnswer, setUserAnswer] = useState('');
    const navigate = useNavigate();
  
    const checkAnswer = () => {
      if (userAnswer.trim().toLowerCase() === correctAnswer) {
        navigate(`/audio/${audioSrc}`); s
      } else {
        alert('Try again!');
      }
    };

  return (
    <div>
      <h2>{question}</h2>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Answer me..."
      />
      <button onClick={checkAnswer}>Submit</button>
    </div>
  );
}

export default Riddle;