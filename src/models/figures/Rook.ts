import { COLORS } from "../Colors";
import { Square } from "../Square";
import { Figure, FigureNames } from "./Figure";
import br from "../../assets/pjaworski/br.png";
import wr from "../../assets/pjaworski/wr.png";

export class Rook extends Figure {
    constructor(square: Square, color: COLORS) {
        super(square, color);
        this.logo = color === COLORS.BLACK ? br : wr;
        this.name = FigureNames.ROOK
    }
}