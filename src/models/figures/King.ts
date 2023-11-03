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
}