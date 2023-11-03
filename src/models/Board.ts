import { COLORS } from "./Colors";
import { Square } from "./Square";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
    squares: Square[][];
    constructor() {
        this.squares = []; // Initialize the squares array here.
    }

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

    public highlightSquares(selectedSquare: Square | null) {
        for (let i = 0; i < this.squares.length; i++) {
            const row = this.squares[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedSquare?.figure.canMove(target)
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.squares = this.squares
        return newBoard
    }

    public getSqaure(x: number, y: number) {
        return this.squares[y][x]
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(this.getSqaure(i, 1), COLORS.BLACK)
            new Pawn(this.getSqaure(i, 6), COLORS.WHITE)
        }
    }

    private addKings() {
        new King(this.getSqaure(4, 0), COLORS.BLACK)
        new King(this.getSqaure(4, 7), COLORS.WHITE)

    }
    private addQueens() {
        new Queen(this.getSqaure(3, 0), COLORS.BLACK)
        new Queen(this.getSqaure(3, 7), COLORS.WHITE)

    }
    private addRooks() {
        new Rook(this.getSqaure(0, 0), COLORS.BLACK)
        new Rook(this.getSqaure(7, 0), COLORS.BLACK)
        new Rook(this.getSqaure(0, 7), COLORS.WHITE)
        new Rook(this.getSqaure(7, 7), COLORS.WHITE)

    }
    private addBishops() {
        new Bishop(this.getSqaure(5, 0), COLORS.BLACK)
        new Bishop(this.getSqaure(2, 0), COLORS.BLACK)
        new Bishop(this.getSqaure(5, 7), COLORS.WHITE)
        new Bishop(this.getSqaure(2, 7), COLORS.WHITE)

    }
    private addKnights() {
        new Knight(this.getSqaure(6, 0), COLORS.BLACK)
        new Knight(this.getSqaure(1, 0), COLORS.BLACK)
        new Knight(this.getSqaure(6, 7), COLORS.WHITE)
        new Knight(this.getSqaure(1, 7), COLORS.WHITE)

    }

    public addFigures() {
        this.addPawns()
        this.addKings()
        this.addQueens()
        this.addRooks()
        this.addBishops()
        this.addKnights()
    }
}