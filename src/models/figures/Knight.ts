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

    canMove(target: Square): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        return true;
    }
}