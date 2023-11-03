import { COLORS } from "./Colors";
import { Square } from "./Square";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

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

    public getSqaure(x: number, y: number) {
        return this.squares[y][x]
    }

    public addFigures() {
        // BLACK PIECES 
        new Pawn(this.getSqaure(0, 1), COLORS.BLACK)
        new Pawn(this.getSqaure(1, 1), COLORS.BLACK)
        new Pawn(this.getSqaure(2, 1), COLORS.BLACK)
        new Pawn(this.getSqaure(3, 1), COLORS.BLACK)
        new Pawn(this.getSqaure(4, 1), COLORS.BLACK)
        new Pawn(this.getSqaure(5, 1), COLORS.BLACK)
        new Pawn(this.getSqaure(6, 1), COLORS.BLACK)
        new Pawn(this.getSqaure(7, 1), COLORS.BLACK)
        new Rook(this.getSqaure(0, 0), COLORS.BLACK)
        new Rook(this.getSqaure(7, 0), COLORS.BLACK)
        new Knight(this.getSqaure(6, 0), COLORS.BLACK)
        new Knight(this.getSqaure(1, 0), COLORS.BLACK)
        new Bishop(this.getSqaure(5, 0), COLORS.BLACK)
        new Bishop(this.getSqaure(2, 0), COLORS.BLACK)
        new Queen(this.getSqaure(4, 0), COLORS.BLACK)
        new King(this.getSqaure(3, 0), COLORS.BLACK)

        // WHITE PIECES 
        new Pawn(this.getSqaure(0, 6), COLORS.WHITE)
        new Pawn(this.getSqaure(1, 6), COLORS.WHITE)
        new Pawn(this.getSqaure(2, 6), COLORS.WHITE)
        new Pawn(this.getSqaure(3, 6), COLORS.WHITE)
        new Pawn(this.getSqaure(4, 6), COLORS.WHITE)
        new Pawn(this.getSqaure(5, 6), COLORS.WHITE)
        new Pawn(this.getSqaure(6, 6), COLORS.WHITE)
        new Pawn(this.getSqaure(7, 6), COLORS.WHITE)
        new Rook(this.getSqaure(0, 7), COLORS.WHITE)
        new Rook(this.getSqaure(7, 7), COLORS.WHITE)
        new Knight(this.getSqaure(6, 7), COLORS.WHITE)
        new Knight(this.getSqaure(1, 7), COLORS.WHITE)
        new Bishop(this.getSqaure(5, 7), COLORS.WHITE)
        new Bishop(this.getSqaure(2, 7), COLORS.WHITE)
        new Queen(this.getSqaure(4, 7), COLORS.WHITE)
        new King(this.getSqaure(3, 7), COLORS.WHITE)
    }
}