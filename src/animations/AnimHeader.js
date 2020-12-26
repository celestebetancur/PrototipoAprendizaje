// Header Animations
const AnimHeader = ( sketch ) => {

  let xDir = 1;
  let yDir = 1;
  let width = 800;
  let height = 125;
  let x = Math.random()*width + 1;
  let y = Math.random()*height + 1;

  let xDirR = 1;
  let xR = 60;

  sketch.setup = () => {
    let cnv = sketch.createCanvas(width, height);
    //cnv.position(0,100);
  };

  sketch.draw = () => {
    sketch.background(255);
    sketch.fill(40,160,255);
    sketch.noStroke();
    sketch.ellipse(x,y,20,20);
    if(x < 10 || x > width-10) xDir *= -1;
    if(y < 10 || y > height-10) yDir *= -1;
    x = x + (3*xDir);
    y = y + (3*yDir);

    sketch.fill(40,255,40);
    sketch.rect(xR,105,20,20);
    if(xR < 20 || xR > width - 10 ) xDirR *= -1;
    if(Math.random() < 0.15){
      xR = xR + (4*xDirR);
    }

    sketch.fill(255,100,40);
    sketch.push();
    sketch.translate(600,50);
    sketch.rotate(sketch.frameCount * 0.1);
    sketch.triangle(0,-10,-10,10,10,10);
    sketch.pop();
  };
};

export default AnimHeader;
