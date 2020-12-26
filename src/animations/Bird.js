import React from 'react';
import bird from '../assets/bird.gif';

const Bird = ( sketch ) => {

  let width = 500;
  let height = 500;
  let x = -150;
  let img;

  sketch.preload = () => {
      img = sketch.createImg(bird, sketch.WEBGL);
  };

  sketch.setup = () => {
    let cnv = sketch.createCanvas(width, height, sketch.WEBGL);
    //cnv.id('p5');
  };

  sketch.draw = () => {
    img.position(x++,440);
    img.size(150,150);
    if(x > 1500) x = -150;
  };
};

export default Bird;
