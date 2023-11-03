import * as React from 'react'
import { COLORS } from '../models/Colors'

interface SquareProps {
    color: COLORS,
    key: number,
    figure: any
}

const SquareComponent: React.FC<SquareProps> = ({ color, figure }) => {
    return (
        <div className={["square", color].join(" ")}>{
            figure?.logo ?
                <div className='figure'>
                    <img src={figure?.logo} className='figure_logo' draggable="false" />
                </div>
                : ""
        }</div>
    )
}

export default SquareComponent