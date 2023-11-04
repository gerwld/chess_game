import { COLORS } from "../Colors";
import { Square } from "../Square";
import { Figure, FigureNames } from "./Figure";
import bk from "../../assets/pjaworski/bk.png";
import wk from "../../assets/pjaworski/wk.png";

export class King extends Figure {
    constructor(square: Square, color: COLORS) {
        super(square, color);
        this.logo = color === COLORS.BLACK ? bk : wk;
        this.name = FigureNames.KING
    }

    canKingMove(target: Square): boolean {
        const absX = Math.abs(target.x - this.square.x)
        const absY = Math.abs(target.y - this.square.y)
        if (absX <= 1 && absY <= 1)
            return true
    }

    canMove(target: Square): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (this.canKingMove(target))
            return true
        return false;
    }
}