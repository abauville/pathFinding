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
    p.fill(250,80,110);
    p.noStroke();
    p.circle(this.agentX(), this.agentY(), this.dx*.8);
  }
  
  showGoal(p) {
    const dx = this.dx;
    const dy = this.dy;
    const D = .25;
    console.log("goal", this);
    // p.fill(50,100,250);
    p.stroke(20,80,250);
    p.strokeWeight(12);

    // p.circle(this.goalX(), this.goalY(), this.dx*.8);
    p.line(this.goalX()-dx*D, this.goalY()-dy*D,
           this.goalX()+dx*D, this.goalY()+dy*D,)
    p.line(this.goalX()-dx*D, this.goalY()+dy*D,
           this.goalX()+dx*D, this.goalY()-dy*D,)
  }
}


