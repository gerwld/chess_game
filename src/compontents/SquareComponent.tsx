import * as React from 'react'
import { COLORS } from '../models/Colors'

interface SquareProps {
    color: COLORS,
    id: number
}

const SquareComponent: React.FC<SquareProps> = ({ color, id }) => {
    return (
        <div className={`square ${color}`} key={id}>{color}</div>
    )
}

export default SquareComponent