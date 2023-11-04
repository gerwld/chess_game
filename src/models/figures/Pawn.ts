import { COLORS } from "../Colors";
import { Square } from "../Square";
import { Figure, FigureNames } from "./Figure";
import bp from "../../assets/pjaworski/bp.png";
import wp from "../../assets/pjaworski/wp.png";

export class Pawn extends Figure {
    constructor(square: Square, color: COLORS) {
        super(square, color);
        this.logo = color === COLORS.BLACK ? bp : wp;
        this.name = FigureNames.PAWN
    }


    // Перевірка на хід тільки вперед. Перша верхня координата 0.0
    public isForward(target: Square): boolean {
        if (this.color === COLORS.WHITE && target.y < this.square.y) {
            return true;
        }
        if (this.color === COLORS.BLACK && target.y > this.square.y) {
            return true;
        }
    }

    public isFirstMoveNextTwoSqares(target: Square): boolean {
        // Якщо колір білий, і різниця максимум 2 і початкова клітинка 7
        if (this.color === COLORS.WHITE
            && this.square.y === 6
            && target.y > 3) {
            return true;
        }
    }

    public isForwardSqare(target: Square): boolean {
        if (target.y === this.square.y - 1) {
            return true
        }
    }

    canMove(target: Square): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (!this.square.isEmptyVertical(target)) {
            return false;
        }
        if (!this.isForward(target)) {
            return false;
        }
        // Якщо перший мув то тру, інакше перевірка на один хід вперед
        if (this.isFirstMoveNextTwoSqares(target)) {
            return true;
        }
        if (!this.isForwardSqare(target)) {
            return false;
        }

        return true;
    }
}