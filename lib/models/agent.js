export class Agent {
  constructor(grid, i, j, goal_i, goal_j) {
    this.grid = grid
    this.i = i;
    this.j = j;
    this.goal_i = goal_i;
    this.goal_j = goal_j;
  }

  exploreStep() {
    // Explore just the current cell
    this.grid.grid[this.i][this.j].explored = true;
  }
}