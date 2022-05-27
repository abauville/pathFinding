import * as p5 from 'p5';
import {GridView} from "../views/grid_view.js";
import {AgentView} from "../views/agent_view.js";


export function newSketch(width, height, grid, agent) {
  return new p5( (p) => {
    p.setup = () => {
      const canvas = p.createCanvas(width, height);
      const container = document.querySelector(".main-container");
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      canvas.parent('sketch-container');
      const agentView = new AgentView(agent, grid);
      const gridView = new GridView(grid);
      p.background(81);
      agent.exploreStep();
      gridView.show(p);
      agentView.showAgent(p);
      agentView.showGoal(p);
      p.noLoop();
    }

    p.mousePressed = () => {
      p.redraw();
    }
    p.draw = () => {

    }
  });
}