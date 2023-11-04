import { Board } from "./Board";
import { COLORS } from "./Colors";
import { Figure } from "./figures/Figure";

export class Square {
    readonly x: number;
    readonly y: number;
    readonly color: COLORS;
    figure: Figure | null;
    board: Board;
    available: boolean; // If selected piece can be placed on THIS sqare or not
    id: number; // For react keys

    constructor(board: Board, x: number, y: number, color: COLORS, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.available = false;
        this.figure = figure;
        this.id = Math.random() + Math.random();
    }

    isEmpty() {
        return this.figure === null
    }

    isEnemy(target: Square): boolean {
        if (target.figure) {
            return this.figure.color !== target.figure.color
        }
        return false;
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.square = this;
    }

    // Перевіряє чи поміж моєю фігурою і фігурою соперника немає фігур. 
    // якщо немає то хід можливий, інакше ні
    public isEmptyVertical(target: Square): boolean {
        //Only same X coord (vertical)
        if (this.x !== target.x) {
            return false
        }

        const min = Math.min(this.y, target.y)
        const max = Math.max(this.y, target.y)

        for (let y = min + 1; y < max; y++) {
            if (!this.board.getSqaure(this.x, y).isEmpty()) {
                return false
            }
        }
        return true;
    }

    public isEmptyHorizontal(target: Square): boolean {
        //Only same Y coord (vertical)
        if (this.y !== target.y) {
            return false
        }

        const min = Math.min(this.x, target.x)
        const max = Math.max(this.x, target.x)

        for (let x = min + 1; x < max; x++) {
            if (!this.board.getSqaure(x, this.y).isEmpty()) {
                return false
            }
        }
        return true;
    }

    public isEmptyDiagonal(target: Square): boolean {
        // Дізнаємось різницю поміж this і таргетом 
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);

        // Якщо залежність не рівна значить це не діагональ, вертаємо фолс
        if (absX !== absY)
            return false

        // Дізнаємось чи відємна залежність щоб потім умножити
        const dy = this.y < target.y ? 1 : -1;
        const dx = this.x < target.x ? 1 : -1;

        // По будь-якій абс проходимо циклом (відстань від this до таргета включно)
        for (let i = 1; i < absX; i++) {
            // Клітинка в проміжку від this до таргета
            if (!this.board.getSqaure((this.x + (i * dx)), (this.y + (i * dy))).isEmpty()) {
                return false;
            }
        } return true;
    }

    public moveFigure(target: Square) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure?.moveFigure(target)
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}