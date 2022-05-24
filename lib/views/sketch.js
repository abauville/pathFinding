import * as p5 from 'p5';
import {show_grid} from "../views/grid_view.js";


export function newSketch(width, height, grid) {
  return new p5( (p) => {
    p.setup = () => {
      const canvas = p.createCanvas(width, height);
      const container = document.querySelector(".main-container");
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      canvas.parent('sketch-container');
      p.background(81);
      show_grid(p, grid);
      p.noLoop();
    }

    p.mousePressed = () => {
      p.redraw();
    }
    p.draw = () => {

    }
  });
}