export class Grid {
  constructor(nx, ny) {
    this.nx = nx;
    this.ny = ny;
    this.grid = this.initGrid();
  }

  initGrid() {
    const grid = []
    for (let i=0; i<this.ny; i++) {
      grid.push([])
      for (let j=0; j<this.nx; j++) {
        grid[i].push(0)
      }
    }
    return grid
  }
}