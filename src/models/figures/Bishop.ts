import { COLORS } from "../Colors";
import { Square } from "../Square";
import { Figure, FigureNames } from "./Figure";
import bb from "../../assets/pjaworski/bb.png";
import wb from "../../assets/pjaworski/wb.png";

export class Bishop extends Figure {
    constructor(square: Square, color: COLORS) {
        super(square, color);
        this.logo = color === COLORS.BLACK ? bb : wb;
        this.name = FigureNames.BISHOP
    }

    canMove(target: Square): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (this.square.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}