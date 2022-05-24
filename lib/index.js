import {newSketch} from "../lib/views/sketch.js"

import {Grid} from "../lib/models/grid.js";

console.log("index.js");
export const WIDTH = 400;
export const HEIGHT = 400;
let img;

export const grid = new Grid(12, 12);
import {sketch} from "../lib/views/sketch.js";
console.log("nx", grid.nx);
const sketchP = newSketch(WIDTH, HEIGHT, grid);
