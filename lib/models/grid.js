export class Grid {
  constructor(nj, ni) {
    this.nj = nj;
    this.ni = ni;
    this.grid = this.initGrid();
    
  }

  initGrid() {
    const grid = []
    for (let i=0; i<this.ni; i++) {
      grid.push([])
      for (let j=0; j<this.nj; j++) {
        grid[i].push(0)
      }
    }
    return grid
  }
}