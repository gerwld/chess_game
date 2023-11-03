import { COLORS } from "../Colors";
import logo from "../../assets/pjaworski/bb.png";
import { Square } from "../Square";


export enum FigureNames {
    FIGURE = "Figure",
    PAWN = "Pawn",
    BISHOP = "Bishop",
    KNIGHT = "Knight",
    KING = "King",
    QUEEN = "Queen",
    ROOK = "Rook",
}

export class Figure {
    readonly color: COLORS;
    logo: typeof logo | null;
    square: Square;
    name: FigureNames;
    id: number;

    constructor(square: Square, color: COLORS) {
        this.square = square;
        this.color = color;
        this.logo = null;
        this.name = FigureNames.FIGURE
        this.id = Math.random()
        this.square.figure = this; // Circle dependencies just to make it simple
    }

    canMove(target: Square): boolean {
        return true;
    }
    moveFigure(target: Square) {

    }
}