import { Board } from "./Board";
import { COLORS } from "./Colors";
import { Figure } from "./figures/Figure";

export class Square {
    readonly x: number;
    readonly y: number;
    readonly color: COLORS;
    figure: Figure | null;
    board: Board;
    avalable: boolean; // If selected piece can be placed on THIS sqare or not
    id: number; // For react keys

    constructor(board: Board, x: number, y: number, color: COLORS, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.figure = figure;
        this.id = Math.random() + Math.random();
    }
}