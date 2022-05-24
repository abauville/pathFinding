import {WIDTH, HEIGHT} from "../index.js"

export function show_grid(p, grid) {
  const dj = WIDTH/(grid.nj-1)
  const di = HEIGHT/(grid.ni-1)
  p.noStroke();
  for (let i=0; i<grid.ni; i++) {
    for (let j=0; j<grid.ni; j++) {
      p.fill(120+30*((i+j)%2), 120+20*((i+j)%2),100+20*((i+j)%2))
      p.square(j*dj, i*di, dj)
    }
  }
}
