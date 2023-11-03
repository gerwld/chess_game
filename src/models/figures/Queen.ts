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
        console.log(this);

    }
}