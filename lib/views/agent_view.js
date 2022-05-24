import {WIDTH, HEIGHT} from "../index.js"

export class AgentView {
  constructor(agent, grid) {
    this.agent = agent;
    this.grid = grid;
    this.dx = WIDTH/(grid.nj-1);
    this.dy = HEIGHT/(grid.ni-1);
  }

  agentX() {
    return (this.agent.j+0.5)*this.dx;
  }

  agentY() {
    return (this.agent.i+0.5)*this.dy;
  }

  goalX() {
    return (this.agent.goal_j+0.5)*this.dx;
  }

  goalY() {
    return (this.agent.goal_i+0.5)*this.dy;
  }

  showAgent(p) {
    p.fill(250,100,150);
    p.noStroke();
    p.circle(this.agentX(), this.agentY(), this.dx/2);
  }
  
  showGoal(p) {
    p.fill(50,100,250);
    p.noStroke();
    p.circle(this.goalX(), this.goalY(), this.dx/2);
  }
}


