import React, { useEffect, useState } from 'react';
import PictureCard from './components/picturecard';
import Images from './pictures/index';
import './styles/styles.css';

const App = () => {
  const [pictures, setPictures] = useState(Images);
  const [scoreBoard, setScoreBoard] = useState({
    currentScore: 0,
    clicked: [],
    maxScore: 0,
  });

  const handleClick = (e) => {
    let id;
    !(e.target.id) ? id = e.target.parentNode.id : id = e.target.id;
    let arr = [...scoreBoard.clicked];
    let max = scoreBoard.maxScore;
    if (arr.includes(id)) { //checkloss
      alert('You clicked a girl TWICE (haha lame pun, sorry), you lose.');
      setScoreBoard({
        currentScore: 0,
        clicked: [],
        maxScore: max,
      });
      return;
    }
    arr.push(id);
    let score = scoreBoard.currentScore;
    score++;
    (score < max) || (max = score);
    setScoreBoard({
      currentScore: score,
      clicked: arr,
      maxScore: max,
    });
    if (arr.length === 9) { //check win
      alert('You win! Congratualations');
      setTimeout(() => {
        setScoreBoard({
          currentScore: 0,
          clicked: [],
          maxScore: score,
        });;
      }, 1000);
      return;
    }
  };

  useEffect(() => {
    document.title = "Twice Memory Game!"
  }, []);

  useEffect(() => {
    setPictures((prevState) => {
      return shuffleArray(prevState);;
    });

    const shuffleArray = (array) => { //this mutates the array
      const arr = [...array];
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [scoreBoard]);

  const createUI = () => {
    return pictures.map((item, index) => {
      return (
        <div key={index} onClick={handleClick}>
          <PictureCard item={item} index={index} />
        </div>
      );
    });
  };

  return (
    <div>
      <header style={{ clear: 'both' }}>
        <div style={{ float: 'left' }}>
          <div id='title'>TWICE Memory Game!</div>
          <div id='instruct'>Can you identify all the TWICE girls? Click an image to earn points, but don't click on any more than once!</div>
        </div>
        <div style={{ float: 'right' }}>
          <div>Score: {scoreBoard.currentScore}</div>
          <div style={{ float: 'right' }} >Max Score: {scoreBoard.maxScore}</div>
        </div>
      </header>
      <br></br>
      <div className='container'>
        {createUI()}
      </div>
    </div >
  );
};

export default App;