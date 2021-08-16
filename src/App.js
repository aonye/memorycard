import React, { useState } from 'react';
import PictureCard from './components/picturecard';
import Images from './pictures/index';

const App = () => {
  const [pictures, setPictures] = useState(Images);
  console.log(pictures);

  const getScrambleArr = (len) => {
    let arr = [];
    while (arr.length !== len) {
      const num = Math.floor(Math.random() * len);
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }
    return arr;
  }

  const createUI = () => {
    return pictures.map((item, index) => {
      return <PictureCard key={index} item={item} index={index} />;
    });
  }

  return (
    <div>
      {createUI()}
    </div>
  );
}

<img src={require('./pictures/tzuyu.jpg').default} alt='' />


export default App;
