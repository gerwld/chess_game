import { COLORS } from "../Colors";
import { Square } from "../Square";
import { Figure, FigureNames } from "./Figure";
import bq from "../../assets/pjaworski/bq.png";
import wq from "../../assets/pjaworski/wq.png";

export class Queen extends Figure {
    constructor(square: Square, color: COLORS) {
        super(square, color);
        this.logo = color === COLORS.BLACK ? bq : wq;
        this.name = FigureNames.QUEEN
    }

    canMove(target: Square): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (this.square.isEmptyHorizontal(target)) {
            return true;
        }
        if (this.square.isEmptyVertical(target)) {
            return true;
        }
        if (this.square.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}