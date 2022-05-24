import {WIDTH, HEIGHT} from "../index.js"

export function show_grid(p, grid) {
  const dx = WIDTH/(grid.nx-1)
  const dy = HEIGHT/(grid.ny-1)
  for (let i=0; i<grid.ny; i++) {
    for (let j=0; j<grid.nx; j++) {
      p.fill(200,100,50)
      p.square(j*dx, i*dy, dx)
    }
  }
}