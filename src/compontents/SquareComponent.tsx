import * as React from 'react'
import { COLORS } from '../models/Colors'
import { Square } from '../models/Square'

interface SquareProps {
    color: COLORS,
    key: number,
    figure: any,
    selected: boolean,
    click: (square: Square) => void,
    square: Square
}

const SquareComponent: React.FC<SquareProps> = ({ square, color, figure, selected, click }) => {

    return (
        <div
            onClick={() => click(square)}
            className={[
                "square",
                color,
                selected ? "selected" : "",
                !selected && square.available && !square.figure ? "available" : "",
                !selected && square.available && square.figure ? "hitbox" : ""].join(" ")
            }>{
                figure?.logo ?
                    <div className='figure'>
                        <img src={figure?.logo} className='figure_logo' draggable="false" />
                    </div>
                    : ""
            }</div>
    )
}

export default SquareComponent