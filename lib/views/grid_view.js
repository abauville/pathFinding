import {WIDTH, HEIGHT} from "../index.js"

export class GridView {
  constructor(grid) {
    this.grid = grid;
    this.baseColor = [120, 160, 120];
    this.exploredColor = [180, 160, 60]
  }

  show(p) {
    const dj = WIDTH/(this.grid.nj-1)
    const di = HEIGHT/(this.grid.ni-1)
    let color;
    p.noStroke();
    for (let i=0; i<this.grid.ni; i++) {
      for (let j=0; j<this.grid.ni; j++) {
        if (this.grid.grid[i][j].explored) {
          color = this.exploredColor;
        } else {
          color = this.baseColor;
        }
        p.fill(color[0]+30*((i+j)%2), color[1]+30*((i+j)%2),color[2]+30*((i+j)%2))
        p.square(j*dj, i*di, dj)
      }
    }
  }
}
