import {newSketch} from "../lib/views/sketch.js"

import {Grid} from "../lib/models/grid.js";
import {Agent} from "../lib/models/agent.js";

export const WIDTH = 400;
export const HEIGHT = 400;
let img;

const grid = new Grid(7, 7);
const agent = new Agent(1, 0, 4, 5);

import {sketch} from "../lib/views/sketch.js";
const sketchP = newSketch(WIDTH, HEIGHT, grid, agent);
