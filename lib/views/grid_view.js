import {WIDTH, HEIGHT} from "../index.js"

export class GridView {
  constructor(grid) {
    this.grid = grid;
  }

  show(p) {
    const dj = WIDTH/(this.grid.nj-1)
    const di = HEIGHT/(this.grid.ni-1)
    p.noStroke();
    for (let i=0; i<this.grid.ni; i++) {
      for (let j=0; j<this.grid.ni; j++) {
        p.fill(120+30*((i+j)%2), 120+20*((i+j)%2),100+20*((i+j)%2))
        p.square(j*dj, i*di, dj)
      }
    }
  }
}
