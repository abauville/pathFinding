import {WIDTH, HEIGHT} from "../index.js"

export function show_agent(p, agent, grid) {
  const dj = WIDTH/(grid.nj-1)
  const di = HEIGHT/(grid.ni-1)
  p.fill(250,100,150)
  p.noStroke();
  p.circle((agent.j+0.5)*dj, (agent.i+0.5)*di, dj/2)
}