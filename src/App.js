import React, { useEffect, useState } from 'react';
import PictureCard from './components/picturecard';
import Images from './pictures/index';

const App = () => {
  const [pictures, setPictures] = useState(Images);

  const getScrambleArr = (len) => {
    let arr = [];
    while (arr.length !== len) {
      const num = Math.floor(Math.random() * len);
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }
    return arr;
  };

  const handleClick = (e) => {
    let tempArr = [...pictures];
    shuffleArray(tempArr);
    setPictures(tempArr);

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  };

  useEffect((e) => {
    console.log('in here', e);
  }, [pictures])

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
      {createUI()}
    </div>
  );
};

<img src={require('./pictures/tzuyu.jpg').default} alt='' />


export default App;
