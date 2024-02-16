// GameOfLife.ts

type Grid = boolean[][];

export class GameOfLife {
    private grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    public getGrid(): Grid {
        return this.grid;
    }

    public computeNextGeneration(): void {
        const nextGrid: Grid = this.grid.map(row => row.slice());

        for (let y = 0; y < this.grid.length; y++) {
            for (let x = 0; x < this.grid[y].length; x++) {
                const aliveNeighbors = this.countAliveNeighbors(x, y);
                const isAlive = this.grid[y][x];

                if (isAlive && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
                    nextGrid[y][x] = false;
                } else if (!isAlive && aliveNeighbors === 3) {
                    nextGrid[y][x] = true;
                }
            }
        }

        this.grid = nextGrid;
    }

    private countAliveNeighbors(x: number, y: number): number {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;

                const nx = x + dx, ny = y + dy;
                if (ny >= 0 && ny < this.grid.length && nx >= 0 && nx < this.grid[ny].length) {
                    count += this.grid[ny][nx] ? 1 : 0;
                }
            }
        }
        return count;
    }
}
