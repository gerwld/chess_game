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

    canMove(target: Square): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (!this.square.isEmptyVertical(target)) {
            return false;
        }
        return true;
    }
}