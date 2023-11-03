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
}