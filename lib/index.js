
import * as p5 from 'p5';

console.log("index.js");
const WIDTH = 400;
const HEIGHT = 400;
let img;
const sketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    const container = document.querySelector(".main-container");
    container.style.width = `${WIDTH}px`;
    container.style.height = `${HEIGHT}px`;
    canvas.parent('sketch-container');
    p.background(81);
    p.noLoop();
  }

  p.mousePressed = () => {
    p.redraw();
  }
  p.draw = () => {

  }
}

const sketchP = new p5(sketch);
