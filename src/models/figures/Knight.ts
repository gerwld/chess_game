import { COLORS } from "../Colors";
import { Square } from "../Square";
import { Figure, FigureNames } from "./Figure";
import bn from "../../assets/pjaworski/bn.png";
import wn from "../../assets/pjaworski/wn.png";

export class Knight extends Figure {
    constructor(square: Square, color: COLORS) {
        super(square, color);
        this.logo = color === COLORS.BLACK ? bn : wn;
        this.name = FigureNames.KNIGHT
    }

    canKightMove(target: Square): boolean {
        const dx = Math.abs(target.x - this.square.x)
        const dy = Math.abs(target.y - this.square.y)

        if ((dx === 2 || dy === 2) && (dx === 1 || dy === 1))
            return true;
    }

    canMove(target: Square): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (this.canKightMove(target)) {
            return true;
        }

        return false;
    }
}