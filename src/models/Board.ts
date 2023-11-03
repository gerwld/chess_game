import { COLORS } from "./Colors";
import { Square } from "./Square";

export class Board {
    constructor() {
        this.squares = []; // Initialize the squares array here.
    }

    squares: Square[][];

    public initSquares() {
        // i is a row iterations, j is a squares in it
        for (let i = 0; i < 8; i++) {
            const row: Square[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Square(this, j, i, COLORS.BLACK, null)) // black sqaures
                } else {
                    row.push(new Square(this, j, i, COLORS.WHITE, null)) // white sqaures
                }
            }
            this.squares.push(row);
        }
    }
}